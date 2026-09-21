import React from "react";
import { getAdminSession } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminUser = await getAdminSession();

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {adminUser ? (
        <div className="flex flex-col lg:flex-row min-h-screen">
          <AdminSidebar adminUser={adminUser} />
          <main className="flex-1 lg:pl-64 flex flex-col min-w-0">
            <div className="p-4 sm:p-8 max-w-7xl w-full mx-auto">{children}</div>
          </main>
        </div>
      ) : (
        <main className="min-h-screen">{children}</main>
      )}
    </div>
  );
}
