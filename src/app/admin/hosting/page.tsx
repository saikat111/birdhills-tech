import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { HostingClient } from "@/components/admin/HostingClient";

export const revalidate = 0;

export default async function AdminHostingPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const plans = await prisma.hostingPlan.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return <HostingClient initialPlans={plans} />;
}
