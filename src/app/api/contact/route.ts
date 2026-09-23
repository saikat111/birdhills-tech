import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendContactNotification } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Valid phone or WhatsApp is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, company, email, phone, service, budget, message } = result.data;

    // 1. Store in ContactMessage
    const contactRecord = await prisma.contactMessage.create({
      data: {
        name,
        company: company || null,
        email,
        phone: phone || null,
        service,
        budget: budget || null,
        message,
        read: false,
      },
    });

    // 2. Store or update in Lead CRM table
    await prisma.lead.create({
      data: {
        name,
        company: company || null,
        email,
        phone: phone || null,
        service,
        budget: budget || null,
        message,
        source: "Contact Form",
        status: "New",
        notes: `Inquiry submitted via website contact form. Budget indication: ${budget || "Not specified"}.`,
      },
    });

    // 3. Dispatch Email Notification via Hostinger SMTP
    try {
      await sendContactNotification({
        contactId: contactRecord.id,
        name,
        company,
        email,
        phone,
        service,
        budget,
        message,
      });
    } catch (mailError) {
      console.error("Contact email dispatch warning:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received. Our Dubai team will respond within 2 to 4 business hours.",
        id: contactRecord.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
