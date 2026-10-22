import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, Video, MapPin, CheckCircle2, Shield, MessageCircle } from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";
import FaqAccordion from "@/components/common/FaqAccordion";

export const metadata: Metadata = {
  title: "Book a Strategic Consultation | Bird Hills Tech",
  description:
    "Schedule a 45-minute strategic consultation with Bird Hills Tech. In-person at our corporate headquarters or via Google Meet.",
  alternates: {
    canonical: "https://birdhillstech.com/book-a-meeting",
  },
};

export default function BookMeetingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH EXECUTIVE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=90"
            alt="Executive corporate meeting room"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/80 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
              EXECUTIVE BRIEFING & STRATEGY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Book a Strategic Consultation.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Schedule a dedicated 45-minute briefing with our senior technology directors and growth consultants. In-person or via secure video conference.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & CONTEXT GRID */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Sidebar Context */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-[#E4E7EC] space-y-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#070B14]">
                  What to Expect from the Session
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-[#667085]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#070B14]">Commercial Architecture Audit:</span>{" "}
                      We review your current website, conversion funnel, and technical bottlenecks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#070B14]">Tailored Technical Scope:</span> Clear
                      recommendations on framework selection, timelines, and realistic milestones.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#070B14]">Confidential & Direct:</span> You
                      speak directly with senior practitioners, not junior sales representatives.
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#C59B27]" />
                    <span>Duration: 45 minutes · Global Timezone Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-emerald-600" />
                    <span>Non-disclosure & strict privacy observed</span>
                  </div>
                </div>
              </div>

              {/* Office Callout */}
              <div className="p-8 rounded-3xl bg-[#070B14] border border-[#C59B27]/25 text-white space-y-4 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  In-Person Consultations & Executive Briefings
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We welcome meetings at our corporate offices or can arrange an executive briefing at your enterprise headquarters.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="tel:+971524405785"
                    className="text-xs font-bold text-white hover:text-[#D4AF37] underline transition-colors"
                  >
                    Hotline: +971 52 440 5785
                  </a>
                  <a
                    href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20schedule%20a%20meeting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#25D366] hover:text-[#1ebd59] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION FAQ ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={[
          {
            question: "Is there any cost or commitment for the initial consultation?",
            answer:
              "No. The initial 45-minute discovery consultation is completely complimentary. We evaluate your architectural goals, discuss commercial feasibility, and outline concrete milestones with zero obligation.",
            category: "Consultation",
          },
          {
            question: "How do video consultations work?",
            answer:
              "Once booked, you receive an automated calendar invitation with a secure Google Meet link. You can also request a Microsoft Teams or Zoom link if preferred by your IT department.",
            category: "Video Meeting",
          },
          {
            question: "Can our technical and commercial team members both attend?",
            answer:
              "Yes. We encourage attendance from your CTO/lead engineer as well as your Managing Director or marketing head so we can address technical specs and business targets simultaneously.",
            category: "Attendance",
          },
          {
            question: "Can we request an in-person meeting at our office?",
            answer:
              "Certainly. Mention your office location in the notes field, and our partners will coordinate travel and executive briefing arrangements.",
            category: "In-Person",
          },
        ]}
        title="Consultation & Briefing FAQs"
        eyebrow="MEETING DETAILS"
        description="Clear expectations regarding our discovery session format, duration, and agenda."
        theme="light"
        includeSchema={true}
      />
    </div>
  );
}
