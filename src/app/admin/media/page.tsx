import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { MediaClient } from "@/components/admin/MediaClient";

export const revalidate = 0;

export default async function AdminMediaPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const media = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <MediaClient initialMedia={media} />;
}
