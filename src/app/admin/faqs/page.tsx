import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { FaqsClient } from "@/components/admin/FaqsClient";

export const revalidate = 0;

export default async function AdminFaqsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const faqs = await prisma.fAQ.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return <FaqsClient initialFaqs={faqs} />;
}
