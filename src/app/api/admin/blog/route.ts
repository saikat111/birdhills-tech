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
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  if (!title || !slug || !excerpt || !content || !categoryId) {
    return NextResponse.json(
      { error: "Required fields (title, slug, excerpt, content, categoryId) are missing" },
      { status: 400 }
    );
  }

  // Check unique slug
  const existing = await prisma.blogPost.findUnique({
    where: { slug: slug.toLowerCase().replace(/\s+/g, "-") },
  });
  if (existing) {
    return NextResponse.json(
      { error: "An article with this slug already exists" },
      { status: 409 }
    );
  }

  const newPost = await prisma.blogPost.create({
    data: {
      title,
      slug: slug.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      coverImage: coverImage || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      categoryId,
      status: status || "published",
      author: author || "Bird Hills Tech Team",
      readTime: readTime || "5 min read",
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      publishedAt: new Date(),
    },
    include: {
      category: true,
    },
  });

  return NextResponse.json({ success: true, post: newPost });
}
