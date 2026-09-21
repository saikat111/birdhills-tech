import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { ContentClient } from "@/components/admin/ContentClient";

export const revalidate = 0;

export default async function AdminContentPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const pages = await prisma.pageContent.findMany({
    orderBy: { slug: "asc" },
  });

  return <ContentClient initialPages={pages} />;
}
