import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { SettingsClient } from "@/components/admin/SettingsClient";

export const revalidate = 0;

export default async function AdminSettingsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const settings = await prisma.siteSetting.findMany({
    orderBy: { key: "asc" },
  });

  return <SettingsClient initialSettings={settings} />;
}
