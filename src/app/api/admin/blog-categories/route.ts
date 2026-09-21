import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const categories = await prisma.blogCategory.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
    orderBy: { name: "asc" },
  });
  return NextResponse.json({ categories });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { name, slug, description } = body;

  if (!name || !slug) {
    return NextResponse.json({ error: "Name and slug are required" }, { status: 400 });
  }

  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");

  const existing = await prisma.blogCategory.findFirst({
    where: {
      OR: [{ name }, { slug: normalizedSlug }],
    },
  });
  if (existing) {
    return NextResponse.json(
      { error: "A category with this name or slug already exists" },
      { status: 409 }
    );
  }

  const category = await prisma.blogCategory.create({
    data: {
      name,
      slug: normalizedSlug,
      description: description || null,
    },
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });

  return NextResponse.json({ success: true, category });
}
