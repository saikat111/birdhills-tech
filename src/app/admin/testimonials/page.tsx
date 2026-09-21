import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { TestimonialsClient } from "@/components/admin/TestimonialsClient";

export const revalidate = 0;

export default async function AdminTestimonialsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const testimonials = await prisma.testimonial.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return <TestimonialsClient initialTestimonials={testimonials} />;
}
