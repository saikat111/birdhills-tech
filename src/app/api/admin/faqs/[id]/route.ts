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

  const updated = await prisma.fAQ.update({
    where: { id },
    data: {
      ...(body.question !== undefined ? { question: body.question } : {}),
      ...(body.answer !== undefined ? { answer: body.answer } : {}),
      ...(body.category !== undefined ? { category: body.category } : {}),
      ...(body.sortOrder !== undefined ? { sortOrder: Number(body.sortOrder) } : {}),
      ...(body.active !== undefined ? { active: Boolean(body.active) } : {}),
    },
  });

  return NextResponse.json({ success: true, faq: updated });
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
  await prisma.fAQ.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "FAQ deleted" });
}
