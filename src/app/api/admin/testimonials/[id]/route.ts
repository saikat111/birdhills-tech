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

  const updated = await prisma.testimonial.update({
    where: { id },
    data: {
      ...(body.authorName !== undefined ? { authorName: body.authorName } : {}),
      ...(body.role !== undefined ? { role: body.role } : {}),
      ...(body.company !== undefined ? { company: body.company } : {}),
      ...(body.quote !== undefined ? { quote: body.quote } : {}),
      ...(body.rating !== undefined ? { rating: Number(body.rating) } : {}),
      ...(body.avatarUrl !== undefined ? { avatarUrl: body.avatarUrl } : {}),
      ...(body.active !== undefined ? { active: Boolean(body.active) } : {}),
      ...(body.sortOrder !== undefined ? { sortOrder: Number(body.sortOrder) } : {}),
    },
  });

  return NextResponse.json({ success: true, testimonial: updated });
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
  await prisma.testimonial.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Testimonial deleted" });
}
