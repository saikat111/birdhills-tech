import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, Video, MapPin, CheckCircle2, Shield, MessageCircle } from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book a Strategic Consultation | Bird Hills Tech Dubai",
  description:
    "Schedule a 45-minute strategic consultation with Bird Hills Tech. In-person at our Deira Dubai office or via Google Meet.",
  alternates: {
    canonical: "https://birdhillstech.com/book-a-meeting",
  },
};

export default function BookMeetingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH EXECUTIVE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#0B1730] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
            alt="Executive corporate meeting room"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730] via-[#0B1730]/90 to-[#0B1730]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#38BDF8] uppercase bg-white/10 border border-white/15 backdrop-blur-md">
              EXECUTIVE BRIEFING & STRATEGY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Book a Strategic Consultation.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Schedule a dedicated 45-minute briefing with our senior technology directors and growth consultants in Dubai. In-person or via secure video conference.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & CONTEXT GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Sidebar Context */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-6">
                <h3 className="text-lg font-bold text-[#0B1730]">
                  What to Expect from the Session
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-[#667085]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0B1730]">Commercial Architecture Audit:</span>{" "}
                      We review your current website, conversion funnel, and technical bottlenecks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0B1730]">Tailored Technical Scope:</span> Clear
                      recommendations on framework selection, timelines, and realistic milestones.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0B1730]">Confidential & Direct:</span> You
                      speak directly with senior practitioners, not junior sales representatives.
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#1D68BD]" />
                    <span>Duration: 45 minutes · Gulf Standard Time (GST)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-emerald-600" />
                    <span>Non-disclosure & strict privacy observed</span>
                  </div>
                </div>
              </div>

              {/* Office Callout */}
              <div className="p-8 rounded-3xl bg-[#0B1730] text-white space-y-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  In-Person Consultations in Dubai
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We welcome meetings at our registered office in Deira (Stone Building - 122 7th A
                  Street, Al Baraha, Dubai) or can arrange an executive briefing at your UAE offices.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="tel:+971524405785"
                    className="text-xs font-bold text-white hover:text-[#38BDF8] underline"
                  >
                    Hotline: +971 52 440 5785
                  </a>
                  <a
                    href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20schedule%20a%20meeting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
