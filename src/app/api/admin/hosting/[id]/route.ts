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

  const updated = await prisma.hostingPlan.update({
    where: { id },
    data: {
      ...(body.name !== undefined ? { name: body.name } : {}),
      ...(body.slug !== undefined ? { slug: body.slug.toLowerCase().replace(/\s+/g, "-") } : {}),
      ...(body.category !== undefined ? { category: body.category } : {}),
      ...(body.priceUsd !== undefined ? { priceUsd: body.priceUsd } : {}),
      ...(body.billingCycle !== undefined ? { billingCycle: body.billingCycle } : {}),
      ...(body.badge !== undefined ? { badge: body.badge } : {}),
      ...(body.description !== undefined ? { description: body.description } : {}),
      ...(body.storage !== undefined ? { storage: body.storage } : {}),
      ...(body.bandwidth !== undefined ? { bandwidth: body.bandwidth } : {}),
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

  return NextResponse.json({ success: true, plan: updated });
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
  await prisma.hostingPlan.delete({ where: { id } });

  return NextResponse.json({ success: true, message: "Hosting plan deleted" });
}
