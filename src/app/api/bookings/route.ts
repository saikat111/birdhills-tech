import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendBookingNotification } from "@/lib/email";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Valid phone or WhatsApp is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(8, "Preferred date is required"),
  timeSlot: z.string().min(3, "Preferred time slot is required"),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, company, email, phone, service, date, timeSlot, message } = result.data;

    // 1. Create Booking record
    const booking = await prisma.booking.create({
      data: {
        name,
        company: company || null,
        email,
        phone,
        service,
        date,
        timeSlot,
        message: message || null,
        status: "Pending",
        notes: `Meeting requested for ${date} at ${timeSlot}.`,
      },
    });

    // 2. Create or sync Lead record
    await prisma.lead.create({
      data: {
        name,
        company: company || null,
        email,
        phone,
        service,
        source: "Booking",
        status: "Qualified",
        message: `Meeting requested for ${date} (${timeSlot}). Notes: ${message || "None"}`,
        notes: `Direct consultation booking submitted on website. Booking ID: ${booking.id}`,
      },
    });

    // 3. Dispatch Email Notification via Hostinger SMTP
    try {
      await sendBookingNotification({
        bookingId: booking.id,
        name,
        company,
        email,
        phone,
        service,
        date,
        timeSlot,
        message,
      });
    } catch (mailError) {
      console.error("Booking email dispatch warning:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Meeting request received. A confirmation and video link / calendar invite will be sent to your email.",
        bookingId: booking.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Failed to record booking. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
