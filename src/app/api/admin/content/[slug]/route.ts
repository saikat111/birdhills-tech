import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = await prisma.pageContent.findUnique({
    where: { slug },
  });

  if (!page) {
    return NextResponse.json({ error: "Page content not found" }, { status: 404 });
  }

  return NextResponse.json({ page });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const body = await req.json();

  const updated = await prisma.pageContent.update({
    where: { slug },
    data: {
      ...(body.title !== undefined ? { title: body.title } : {}),
      ...(body.contentJson !== undefined
        ? {
            contentJson:
              typeof body.contentJson === "string"
                ? body.contentJson
                : JSON.stringify(body.contentJson),
          }
        : {}),
      ...(body.seoTitle !== undefined ? { seoTitle: body.seoTitle } : {}),
      ...(body.seoDescription !== undefined ? { seoDescription: body.seoDescription } : {}),
    },
  });

  return NextResponse.json({ success: true, page: updated });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  await prisma.pageContent.delete({ where: { slug } });

  return NextResponse.json({ success: true, message: "Page content deleted" });
}
