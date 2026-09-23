import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { LeadsClient } from "@/components/admin/LeadsClient";

export const revalidate = 0;

export default async function AdminLeadsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serializedLeads = leads.map((l) => ({
    ...l,
    createdAt: l.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl font-extrabold text-[#070B14]">Leads & Inquiries CRM</h1>
          <p className="text-xs text-[#667085] mt-0.5">
            Manage incoming prospects from Contact Forms, Meeting Bookings, and AI Assistant.
          </p>
        </div>
      </div>

      <LeadsClient initialLeads={serializedLeads} />
    </div>
  );
}
