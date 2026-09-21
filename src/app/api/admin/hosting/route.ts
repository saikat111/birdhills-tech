import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const plans = await prisma.hostingPlan.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ plans });
  } catch (error: any) {
    console.error("Error fetching hosting plans:", error);
    return NextResponse.json({ error: "Failed to fetch hosting plans" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    name,
    slug,
    category,
    priceUsd,
    billingCycle,
    badge,
    description,
    storage,
    bandwidth,
    featuresJson,
    popular,
    sortOrder,
    active,
  } = body;

  if (!name || !slug || !priceUsd || !description) {
    return NextResponse.json(
      { error: "Name, slug, priceUsd, and description are required" },
      { status: 400 }
    );
  }

  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");

  const existing = await prisma.hostingPlan.findUnique({
    where: { slug: normalizedSlug },
  });
  if (existing) {
    return NextResponse.json(
      { error: "A hosting plan with this slug already exists" },
      { status: 409 }
    );
  }

  const plan = await prisma.hostingPlan.create({
    data: {
      name,
      slug: normalizedSlug,
      category: category || "cloud",
      priceUsd,
      billingCycle: billingCycle || "/ month",
      badge: badge || null,
      description,
      storage: storage || null,
      bandwidth: bandwidth || null,
      featuresJson: typeof featuresJson === "string" ? featuresJson : JSON.stringify(featuresJson || []),
      popular: popular !== undefined ? Boolean(popular) : false,
      sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
      active: active !== undefined ? Boolean(active) : true,
    },
  });

  return NextResponse.json({ success: true, plan });
}
