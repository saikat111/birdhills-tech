"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Shield, ArrowRight, Zap, Trophy } from "lucide-react";

export function ComparisonMatrixSection() {
  const comparisonItems = [
    {
      criterion: "Code & Asset Ownership",
      traditional: "Proprietary lock-in, withheld code repositories, recurring licensing fees.",
      birdhills: "Complete ownership transfer. You retain your code, databases, design tokens, and Git repos permanently.",
      highlight: true,
    },
    {
      criterion: "Speed & User Experience",
      traditional: "Bloated 3-5s load times on mobile due to 40+ third-party WordPress plugins.",
      birdhills: "Ultra-fast loading (99+ Lighthouse performance). Built on Next.js with zero runtime bloat.",
      highlight: true,
    },
    {
      criterion: "Marketing & Growth Attribution",
      traditional: "Reports vanity impressions, superficial clicks, and unverifiable bounce rates.",
      birdhills: "Closed-loop revenue tracking. Every dirham tied to verified leads in your CRM.",
      highlight: true,
    },
    {
      criterion: "Hosting & Server Latency",
      traditional: "Shared offshore European servers with 180ms+ latency across the GCC.",
      birdhills: "Pure NVMe edge cloud infrastructure with sub-15ms local UAE latency.",
      highlight: false,
    },
    {
      criterion: "Physical Presence & Accountability",
      traditional: "Outsourced offshore teams hiding behind impersonal ticket support queues.",
      birdhills: "Physical Dubai office at Stone Building, Deira. Direct senior engineering advisory.",
      highlight: false,
    },
    {
      criterion: "AI & Automation Capabilities",
      traditional: "Generic robotic chatbots that fail to understand Arabic or business context.",
      birdhills: "Autonomous AI agents & WhatsApp Cloud API workflows trained strictly on your knowledge base.",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#070B14] relative overflow-hidden border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#C59B27] uppercase bg-[#C59B27]/10 border border-[#C59B27]/25 mb-4">
            <Trophy size={13} className="text-[#C59B27]" />
            EXECUTIVE ADVANTAGE & COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#070B14] leading-tight">
            Why GCC Enterprises Choose
            <span className="block text-[#1D68BD] mt-1">Bird Hills Tech Over Traditional Agencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475467] leading-relaxed">
            See the concrete difference between generic outsourced agencies and a dedicated technology, creative, and digital growth partner in Dubai.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0B1730] text-white p-6 sm:p-8 items-center border-b border-[#0B1730]">
            <div className="md:col-span-4 text-lg font-extrabold text-slate-200">
              Evaluation Criteria
            </div>
            <div className="md:col-span-4 text-sm font-semibold text-slate-400 mt-2 md:mt-0">
              Traditional Agencies & Freelancers
            </div>
            <div className="md:col-span-4 text-lg font-black text-[#D4AF37] mt-2 md:mt-0 flex items-center gap-2">
              <Zap size={18} className="text-[#D4AF37]" />
              <span>Bird Hills Tech Standard</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 items-center gap-4 transition-colors hover:bg-slate-50/80 ${
                  item.highlight ? "bg-amber-50/20" : ""
                }`}
              >
                {/* Column 1: Criteria */}
                <div className="md:col-span-4 font-extrabold text-[#070B14] text-base flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                  <span>{item.criterion}</span>
                </div>

                {/* Column 2: Traditional */}
                <div className="md:col-span-4 text-sm text-slate-500 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed">{item.traditional}</span>
                </div>

                {/* Column 3: Bird Hills Tech */}
                <div className="md:col-span-4 text-sm font-semibold text-[#070B14] flex items-start gap-3 bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed text-[#0B1730]">{item.birdhills}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield size={24} className="text-[#C59B27] shrink-0" />
              <div>
                <div className="text-sm font-extrabold text-[#070B14]">
                  Zero Vendor Lock-In Guarantee
                </div>
                <div className="text-xs text-[#667085]">
                  Full IP transfer, clean documentation, and deployment credentials provided upon final sign-off.
                </div>
              </div>
            </div>
            <Link
              href="/book-a-meeting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#0B1730] hover:bg-[#152549] text-white transition-colors shrink-0 shadow-md"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
