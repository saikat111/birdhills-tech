"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, ShieldCheck, Sparkles } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subcopy?: string;
}

export function HeroSection({
  eyebrow = "TECHNOLOGY × CREATIVE × GROWTH",
  headline = "Your Digital Growth Partner in Dubai",
  subcopy = "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth.",
}: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-white to-white">
      {/* Background Subtle Corporate Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4E7EC15_1px,transparent_1px),linear-gradient(to_bottom,#E4E7EC15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#1D68BD]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow & Location Indicator */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]/60 shadow-2xs">
                <Sparkles size={13} className="text-[#1D68BD]" />
                {eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#101828] bg-white border border-[#E4E7EC] shadow-2xs">
                <MapPin size={13} className="text-[#1D68BD]" />
                Dubai · UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              {headline.split("Dubai")[0]}
              <span className="text-[#1D68BD] relative inline-block">
                Dubai
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#1D68BD]/25"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed max-w-2xl font-normal">
              {subcopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1D68BD] text-white text-base font-semibold shadow-md hover:bg-[#155196] hover:shadow-lg transition-all duration-200 group"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#101828] text-base font-semibold border border-[#E4E7EC] hover:bg-[#F7F9FC] hover:border-slate-300 transition-all duration-200 shadow-2xs"
              >
                <Calendar size={18} className="text-[#1D68BD]" />
                Book a Meeting
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Technology
                </div>
                <div className="text-xs text-[#667085] mt-0.5">High-speed web platforms</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Creative
                </div>
                <div className="text-xs text-[#667085] mt-0.5">Editorial corporate UI/UX</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Growth
                </div>
                <div className="text-xs text-[#667085] mt-0.5">Measurable ROI & SEO</div>
              </div>
            </div>
          </div>

          {/* Hero Visual: Sophisticated Dubai Business / Skyline Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-slate-200 via-white to-sky-100 shadow-2xl border border-white">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85"
                    alt="Dubai modern skyline and financial business architecture"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/80 via-transparent to-transparent" />

                  {/* Overlaid Corporate Credential Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-[#1D68BD]">
                        DUBAI HEADQUARTERS
                      </span>
                      <ShieldCheck size={16} className="text-emerald-600" />
                    </div>
                    <div className="text-sm font-extrabold text-[#0B1730]">
                      Deira · Al Baraha · UAE
                    </div>
                    <div className="text-xs text-[#667085] mt-0.5 flex items-center justify-between">
                      <span>Enterprise Digital Delivery</span>
                      <span className="text-[#1D68BD] font-semibold">+971 52 440 5785</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="hidden sm:flex absolute -top-5 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#E4E7EC] items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1D68BD] animate-ping" />
                <div className="text-xs font-semibold text-[#0B1730]">
                  Connected Engineering & Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
