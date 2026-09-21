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

  const updated = await prisma.pricingTier.update({
    where: { id },
    data: {
      ...(body.name !== undefined ? { name: body.name } : {}),
      ...(body.slug !== undefined ? { slug: body.slug.toLowerCase().replace(/\s+/g, "-") } : {}),
      ...(body.badge !== undefined ? { badge: body.badge } : {}),
      ...(body.description !== undefined ? { description: body.description } : {}),
      ...(body.priceAed !== undefined ? { priceAed: body.priceAed } : {}),
      ...(body.priceUsd !== undefined
        ? { priceUsd: body.priceUsd }
        : body.priceAed !== undefined
        ? { priceUsd: body.priceAed }
        : {}),
      ...(body.billingType !== undefined ? { billingType: body.billingType } : {}),
      ...(body.deliveryTime !== undefined ? { deliveryTime: body.deliveryTime } : {}),
      ...(body.featuresJson !== undefined
        ? {
            featuresJson:
              typeof body.featuresJson === "string"
                ? body.featuresJson
                : JSON.stringify(body.featuresJson),
          }
        : {}),
      ...(body.popular !== undefined ? { popular: Boolean(body.popular) } : {}),
      ...(body.sortOrder !== undefined ? { sortOrder: Number(body.sortOrder) } : {}),
      ...(body.active !== undefined ? { active: Boolean(body.active) } : {}),
    },
  });

  return NextResponse.json({ success: true, tier: updated });
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
  await prisma.pricingTier.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Pricing tier deleted" });
}
