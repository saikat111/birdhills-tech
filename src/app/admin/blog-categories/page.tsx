import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { BlogCategoriesClient } from "@/components/admin/BlogCategoriesClient";

export const revalidate = 0;

export default async function AdminBlogCategoriesPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const categories = await prisma.blogCategory.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
    orderBy: { name: "asc" },
  });

  return <BlogCategoriesClient initialCategories={categories} />;
}
