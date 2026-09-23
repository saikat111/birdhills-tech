import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { BookingsClient } from "@/components/admin/BookingsClient";

export const revalidate = 0;

export default async function AdminBookingsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serialized = bookings.map((b) => ({
    ...b,
    createdAt: b.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl font-extrabold text-[#070B14]">Consultation Bookings</h1>
          <p className="text-xs text-[#667085] mt-0.5">
            Manage scheduled Google Meet and in-person Dubai office meetings.
          </p>
        </div>
      </div>

      <BookingsClient initialBookings={serialized} />
    </div>
  );
}
