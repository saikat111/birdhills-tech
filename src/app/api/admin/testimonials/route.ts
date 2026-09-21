import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ testimonials });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { authorName, role, company, quote, rating, avatarUrl, active, sortOrder } = body;

  if (!authorName || !role || !company || !quote) {
    return NextResponse.json(
      { error: "Author name, role, company, and quote are required" },
      { status: 400 }
    );
  }

  const testimonial = await prisma.testimonial.create({
    data: {
      authorName,
      role,
      company,
      quote,
      rating: rating !== undefined ? Number(rating) : 5,
      avatarUrl: avatarUrl || null,
      active: active !== undefined ? Boolean(active) : true,
      sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
    },
  });

  return NextResponse.json({ success: true, testimonial });
}
