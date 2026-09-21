import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const media = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ media });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { name, url, mimeType, size } = body;

  if (!name || !url) {
    return NextResponse.json({ error: "Media name and URL are required" }, { status: 400 });
  }

  const item = await prisma.media.create({
    data: {
      name,
      url,
      mimeType: mimeType || "image/jpeg",
      size: size !== undefined ? Number(size) : null,
    },
  });

  return NextResponse.json({ success: true, media: item });
}
