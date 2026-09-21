import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const tiers = await prisma.pricingTier.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ tiers });
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
    badge,
    description,
    priceAed,
    billingType,
    deliveryTime,
    featuresJson,
    popular,
    sortOrder,
    active,
  } = body;

  if (!name || !slug || !description || !priceAed) {
    return NextResponse.json(
      { error: "Name, slug, description, and priceAed are required" },
      { status: 400 }
    );
  }

  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");

  const existing = await prisma.pricingTier.findUnique({
    where: { slug: normalizedSlug },
  });
  if (existing) {
    return NextResponse.json(
      { error: "A pricing package with this slug already exists" },
      { status: 409 }
    );
  }

  const tier = await prisma.pricingTier.create({
    data: {
      name,
      slug: normalizedSlug,
      badge: badge || null,
      description,
      priceAed,
      priceUsd: body.priceUsd || priceAed,
      billingType: billingType || "one-time",
      deliveryTime: deliveryTime || null,
      featuresJson: typeof featuresJson === "string" ? featuresJson : JSON.stringify(featuresJson || []),
      popular: popular !== undefined ? Boolean(popular) : false,
      sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
      active: active !== undefined ? Boolean(active) : true,
    },
  });

  return NextResponse.json({ success: true, tier });
}
