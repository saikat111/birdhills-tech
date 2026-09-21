import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const faqs = await prisma.fAQ.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ faqs });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { question, answer, category, sortOrder, active } = body;

  if (!question || !answer) {
    return NextResponse.json(
      { error: "Question and answer are required" },
      { status: 400 }
    );
  }

  const faq = await prisma.fAQ.create({
    data: {
      question,
      answer,
      category: category || "General",
      sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
      active: active !== undefined ? Boolean(active) : true,
    },
  });

  return NextResponse.json({ success: true, faq });
}
