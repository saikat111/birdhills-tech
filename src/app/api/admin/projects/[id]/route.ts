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

  const updated = await prisma.project.update({
    where: { id },
    data: {
      ...(body.title !== undefined ? { title: body.title } : {}),
      ...(body.slug !== undefined ? { slug: body.slug } : {}),
      ...(body.client !== undefined ? { client: body.client } : {}),
      ...(body.industry !== undefined ? { industry: body.industry } : {}),
      ...(body.category !== undefined ? { category: body.category } : {}),
      ...(body.shortDesc !== undefined ? { shortDesc: body.shortDesc } : {}),
      ...(body.description !== undefined ? { description: body.description } : {}),
      ...(body.challenge !== undefined ? { challenge: body.challenge } : {}),
      ...(body.approach !== undefined ? { approach: body.approach } : {}),
      ...(body.solution !== undefined ? { solution: body.solution } : {}),
      ...(body.results !== undefined ? { results: body.results } : {}),
      ...(body.servicesJson !== undefined ? { servicesJson: body.servicesJson } : {}),
      ...(body.techJson !== undefined ? { techJson: body.techJson } : {}),
      ...(body.coverImage !== undefined ? { coverImage: body.coverImage } : {}),
      ...(body.featured !== undefined ? { featured: body.featured } : {}),
      ...(body.status !== undefined ? { status: body.status } : {}),
      ...(body.seoTitle !== undefined ? { seoTitle: body.seoTitle } : {}),
      ...(body.seoDescription !== undefined ? { seoDescription: body.seoDescription } : {}),
    },
  });

  return NextResponse.json({ success: true, project: updated });
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
  await prisma.project.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Project deleted" });
}
