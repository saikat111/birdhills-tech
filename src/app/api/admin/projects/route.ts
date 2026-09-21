import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ projects });
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
    client,
    industry,
    category,
    shortDesc,
    description,
    challenge,
    approach,
    solution,
    results,
    servicesJson,
    techJson,
    coverImage,
    featured,
    status,
    seoTitle,
    seoDescription,
  } = body;

  if (!title || !slug || !client || !shortDesc) {
    return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
  }

  const newProject = await prisma.project.create({
    data: {
      title,
      slug: slug.toLowerCase().replace(/\s+/g, "-"),
      client,
      industry: industry || "General",
      category: category || "Web",
      shortDesc,
      description: description || shortDesc,
      challenge: challenge || "Commercial operational challenge.",
      approach: approach || "Strategy and design engineering.",
      solution: solution || "Enterprise modern web platform.",
      results: results || "Measurable commercial outcome.",
      servicesJson: typeof servicesJson === "string" ? servicesJson : JSON.stringify(servicesJson || ["Web Development"]),
      techJson: typeof techJson === "string" ? techJson : JSON.stringify(techJson || ["Next.js"]),
      coverImage: coverImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      featured: Boolean(featured),
      status: status || "published",
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
    },
  });

  return NextResponse.json({ success: true, project: newProject });
}
