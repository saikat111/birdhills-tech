import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const services = await prisma.service.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ services });
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
    category,
    shortDesc,
    fullDesc,
    icon,
    featuresJson,
    seoTitle,
    seoDescription,
    published,
    sortOrder,
  } = body;

  if (!title || !slug || !category || !shortDesc || !fullDesc) {
    return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
  }

  const newService = await prisma.service.create({
    data: {
      title,
      slug: slug.toLowerCase().replace(/\s+/g, "-"),
      category,
      shortDesc,
      fullDesc,
      icon: icon || "Code2",
      featuresJson: typeof featuresJson === "string" ? featuresJson : JSON.stringify(featuresJson || []),
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      published: published !== undefined ? published : true,
      sortOrder: sortOrder || 0,
    },
  });

  return NextResponse.json({ success: true, service: newService });
}
