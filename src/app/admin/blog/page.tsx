import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { BlogClient } from "@/components/admin/BlogClient";

export const revalidate = 0;

export default async function AdminBlogPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const [posts, categories] = await Promise.all([
    prisma.blogPost.findMany({
      include: {
        category: true,
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.blogCategory.findMany({
      orderBy: { name: "asc" },
    }),
  ]);

  return <BlogClient initialPosts={posts} categories={categories} />;
}
