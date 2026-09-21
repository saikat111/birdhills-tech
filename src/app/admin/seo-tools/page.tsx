import React from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { SeoToolsClient } from "@/components/admin/SeoToolsClient";

export const revalidate = 0;

export default async function AdminSeoToolsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return <SeoToolsClient />;
}
