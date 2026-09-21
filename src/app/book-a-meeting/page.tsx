import React from "react";
import { Metadata } from "next";
import { Calendar, Clock, Video, MapPin, CheckCircle2, Shield } from "lucide-react";
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
      {/* Hero */}
      <section className="py-20 md:py-24 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              EXECUTIVE BRIEFING
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              Book a Strategic Meeting.
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              Schedule a dedicated 45-minute consultation with our senior digital architects and
              growth strategists in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
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

                <ul className="space-y-4 text-sm text-[#667085]">
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
                      speak directly with senior practitioners, not junior sales reps.
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
              <div className="p-6 rounded-2xl bg-[#0B1730] text-white space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  In-Person Consultations
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We welcome meetings at our registered office in Deira (Stone Building - 122 7th A
                  Street, Al Baraha, Dubai) or can arrange an executive briefing at your UAE offices.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+971524405785"
                    className="text-xs font-bold text-white hover:text-[#38BDF8] underline"
                  >
                    Direct Telephone: +971 52 440 5785
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
