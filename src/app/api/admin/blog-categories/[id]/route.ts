import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const updated = await prisma.blogCategory.update({
    where: { id },
    data: {
      ...(body.name !== undefined ? { name: body.name } : {}),
      ...(body.slug !== undefined ? { slug: body.slug.toLowerCase().replace(/\s+/g, "-") } : {}),
      ...(body.description !== undefined ? { description: body.description } : {}),
    },
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });

  return NextResponse.json({ success: true, category: updated });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  // Check if there are posts under this category
  const postCount = await prisma.blogPost.count({ where: { categoryId: id } });
  if (postCount > 0) {
    return NextResponse.json(
      { error: `Cannot delete category with ${postCount} existing articles. Reassign or delete articles first.` },
      { status: 400 }
    );
  }

  await prisma.blogCategory.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Category deleted" });
}
