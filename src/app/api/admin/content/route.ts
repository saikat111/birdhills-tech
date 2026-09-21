import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const pages = await prisma.pageContent.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json({ pages });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { slug, title, contentJson, seoTitle, seoDescription } = body;

  if (!slug || !title) {
    return NextResponse.json({ error: "Slug and title are required" }, { status: 400 });
  }

  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");

  const page = await prisma.pageContent.upsert({
    where: { slug: normalizedSlug },
    update: {
      title,
      contentJson: typeof contentJson === "string" ? contentJson : JSON.stringify(contentJson || {}),
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
    },
    create: {
      slug: normalizedSlug,
      title,
      contentJson: typeof contentJson === "string" ? contentJson : JSON.stringify(contentJson || {}),
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
    },
  });

  return NextResponse.json({ success: true, page });
}
