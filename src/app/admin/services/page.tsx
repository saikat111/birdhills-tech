import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { ServicesClient } from "@/components/admin/ServicesClient";

export const revalidate = 0;

export default async function AdminServicesPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const services = await prisma.service.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl font-extrabold text-[#070B14]">Services CMS</h1>
          <p className="text-xs text-[#667085] mt-0.5">
            Manage your corporate service offerings, features, descriptions, and SEO metadata.
          </p>
        </div>
      </div>

      <ServicesClient initialServices={services} />
    </div>
  );
}
