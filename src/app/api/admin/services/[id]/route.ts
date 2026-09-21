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

  const updated = await prisma.service.update({
    where: { id },
    data: {
      ...(body.title !== undefined ? { title: body.title } : {}),
      ...(body.slug !== undefined ? { slug: body.slug } : {}),
      ...(body.category !== undefined ? { category: body.category } : {}),
      ...(body.shortDesc !== undefined ? { shortDesc: body.shortDesc } : {}),
      ...(body.fullDesc !== undefined ? { fullDesc: body.fullDesc } : {}),
      ...(body.icon !== undefined ? { icon: body.icon } : {}),
      ...(body.featuresJson !== undefined ? { featuresJson: body.featuresJson } : {}),
      ...(body.seoTitle !== undefined ? { seoTitle: body.seoTitle } : {}),
      ...(body.seoDescription !== undefined ? { seoDescription: body.seoDescription } : {}),
      ...(body.published !== undefined ? { published: body.published } : {}),
      ...(body.sortOrder !== undefined ? { sortOrder: body.sortOrder } : {}),
    },
  });

  return NextResponse.json({ success: true, service: updated });
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
  await prisma.service.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Service deleted" });
}
