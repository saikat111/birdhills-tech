import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { PricingClient } from "@/components/admin/PricingClient";

export const revalidate = 0;

export default async function AdminPricingPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const tiers = await prisma.pricingTier.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return <PricingClient initialTiers={tiers} />;
}
