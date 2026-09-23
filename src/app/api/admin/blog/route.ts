import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const posts = await prisma.blogPost.findMany({
    include: {
      category: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized session. Please log in again." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      categoryId,
      status,
      author,
      readTime,
      seoTitle,
      seoDescription,
    } = body;

    const cleanTitle = (title || "").trim();
    if (!cleanTitle) {
      return NextResponse.json(
        { error: "Please enter an Article Title before publishing." },
        { status: 400 }
      );
    }

    const cleanContent = (content || "").trim();
    if (!cleanContent) {
      return NextResponse.json(
        { error: "Please enter content in the article body before publishing." },
        { status: 400 }
      );
    }

    // Auto-generate slug from title if empty
    let cleanSlug = (slug || cleanTitle)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (!cleanSlug) {
      cleanSlug = `post-${Date.now()}`;
    }

    // Auto-generate excerpt from content if empty
    let cleanExcerpt = (excerpt || "").trim();
    if (!cleanExcerpt) {
      cleanExcerpt = cleanContent
        .replace(/#+\s+/g, "")
        .replace(/[*_~`>]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160);
      if (cleanExcerpt.length >= 160) cleanExcerpt += "...";
    }

    // Auto-resolve or auto-seed Category if missing
    let finalCategoryId = categoryId;
    if (!finalCategoryId) {
      let existingCat = await prisma.blogCategory.findFirst();
      if (!existingCat) {
        existingCat = await prisma.blogCategory.create({
          data: {
            name: "Technology & Engineering",
            slug: "technology",
            description: "Enterprise software, cloud systems, and modern digital engineering.",
          },
        });
        // Seed default categories
        await prisma.blogCategory
          .createMany({
            data: [
              { name: "Growth & Marketing", slug: "growth", description: "B2B lead generation, SEO, and paid performance." },
              { name: "AI & Automation", slug: "ai", description: "Autonomous AI workflows, agents, and generative integrations." },
              { name: "Creative & Design", slug: "creative", description: "Brand architecture, luxury UI/UX, and identity design." },
            ],
          })
          .catch(() => {});
      }
      finalCategoryId = existingCat.id;
    }

    // Handle unique slug collision smoothly by appending random suffix
    const existing = await prisma.blogPost.findUnique({
      where: { slug: cleanSlug },
    });
    if (existing) {
      cleanSlug = `${cleanSlug}-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const newPost = await prisma.blogPost.create({
      data: {
        title: cleanTitle,
        slug: cleanSlug,
        excerpt: cleanExcerpt,
        content: cleanContent,
        coverImage:
          coverImage ||
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        categoryId: finalCategoryId,
        status: status || "published",
        author: author || "Bird Hills Tech Editorial Board",
        readTime: readTime || "5 min read",
        seoTitle: seoTitle || cleanTitle,
        seoDescription: seoDescription || cleanExcerpt,
        publishedAt: new Date(),
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error creating blog post." },
      { status: 500 }
    );
  }
}
