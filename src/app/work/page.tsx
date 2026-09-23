import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { WorkFilterList } from "@/components/work/WorkFilterList";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { Zap, ShieldCheck, TrendingUp, Award, Calendar, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Bird Hills Tech Dubai",
  description:
    "Explore our portfolio of enterprise web platforms, e-commerce stores, brand identities, and AI automation systems built for ambitious businesses in Dubai and the GCC.",
  alternates: {
    canonical: "https://birdhillstech.com/work",
  },
};

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await prisma.project.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
  });

  const impactStats = [
    { value: "$25M+", label: "Regional Transaction Volume Powered" },
    { value: "< 0.8s", label: "Average Core Web Vitals (LCP)" },
    { value: "4.2x", label: "Average B2B Campaign Return on Ad Spend" },
    { value: "99.98%", label: "Platform SLA Uptime Across Cloud Deployments" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH DUBAI CORPORATE SKYLINE */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2000&q=90"
            alt="DIFC Dubai financial high-rise architecture"
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
              PROVEN RESULTS & CASE STUDIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Real engineering.
              <span className="block text-[#D4AF37]">Measurable commercial impact.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Explore selected digital experiences and custom platforms engineered across technology, creative brand architecture, and performance acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUANTIFIABLE IMPACT METRICS BANNER */}
      <section className="py-12 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((s) => (
              <div key={s.label} className="p-4 border-l-2 border-[#C59B27] space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#070B14] tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs text-[#667085] leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN FILTERABLE PROJECTS SECTION */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
              CASE STUDY ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] mt-1">
              Featured Middle East Client Deployments
            </h2>
          </div>

          <WorkFilterList initialProjects={projects} />
        </div>
      </section>

      {/* 4. TRANSFORMATION METHODOLOGY */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              HOW WE DELIVER EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight mt-2">
              Our 4-Phase Delivery Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <span className="text-xs font-mono font-bold text-[#C59B27]">PHASE 01</span>
              <h3 className="text-base font-bold text-[#070B14]">Discovery & Architecture</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Deep technical scope, database schema modeling, and interactive wireframing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <span className="text-xs font-mono font-bold text-[#C59B27]">PHASE 02</span>
              <h3 className="text-base font-bold text-[#070B14]">Design & Prototyping</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Tokenized Figma design systems, WCAG accessibility, and high-fidelity clickable flows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <span className="text-xs font-mono font-bold text-[#C59B27]">PHASE 03</span>
              <h3 className="text-base font-bold text-[#070B14]">Type-Safe Engineering</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Next.js, TypeScript, sub-second LCP optimizations, and penetration security scans.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <span className="text-xs font-mono font-bold text-[#C59B27]">PHASE 04</span>
              <h3 className="text-base font-bold text-[#070B14]">Deployment & Growth</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Zero-downtime launch, 90-day SLA warranty, and closed-loop B2B customer acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
