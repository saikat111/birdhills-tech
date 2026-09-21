import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Zap,
  Building2,
  Users2,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us | Technology × Creative × Growth",
  description:
    "Learn about Bird Hills Tech, a premier Dubai digital firm bridging technology engineering, creative design, and measurable commercial growth.",
  alternates: {
    canonical: "https://birdhillstech.com/about",
  },
};

export default function AboutPage() {
  const capabilities = [
    {
      domain: "Technology",
      focus: "Engineered for speed, security & enterprise scalability.",
      items: [
        "Modern Next.js & React Architectures",
        "Sub-second Core Web Vitals & Performance",
        "Custom SaaS & Business Web Applications",
        "Headless & Scalable E-commerce Platforms",
        "Private AI & Intelligent Automation Systems",
      ],
    },
    {
      domain: "Creative",
      focus: "Visual authority that commands business prestige.",
      items: [
        "Corporate Brand Identity & Logo Systems",
        "Design Systems & Figma Component Libraries",
        "Human-Centered UI/UX Research & Prototyping",
        "Executive Digital Presentation Materials",
        "Bilingual English/Arabic Interface Design",
      ],
    },
    {
      domain: "Growth",
      focus: "Data-driven commercial customer acquisition.",
      items: [
        "High-Intent Google Ads & Search Campaigns",
        "Targeted B2B LinkedIn Demand Generation",
        "Technical SEO & Local Dubai Organic Authority",
        "Conversion Rate Optimization (CRO) Audits",
        "Closed-Loop Revenue & Pipeline Tracking",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. HERO */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] border-b border-[#E4E7EC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]">
              <Sparkles size={13} />
              ABOUT BIRD HILLS TECH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.15]">
              Built to bridge the gap between engineering and growth.
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              Bird Hills Tech is an established Dubai-based company combining technology, creative
              strategy and digital marketing to build powerful digital experiences that deliver
              measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION & 3. WHAT WE BELIEVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
                OUR PHILOSOPHY
              </div>
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#0B1730] leading-snug border-l-4 border-[#1D68BD] pl-6 italic">
                &ldquo;Technology should not simply exist. It should create movement for the
                business behind it.&rdquo;
              </blockquote>
              <p className="text-base text-[#667085] leading-relaxed">
                Too many companies in the UAE find themselves navigating fragmented agencies: IT
                firms that lack creative sophistication, design studios that disregard technical
                performance, and marketing vendors that optimize for vanity impressions rather than
                commercial sales pipeline.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                We formed Bird Hills Tech to unite all three disciplines under one accountable
                roof. We partner with ambitious organizations across Dubai and the region to engineer
                platforms that look prestigious, perform with sub-second responsiveness, and convert
                qualified business opportunities.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                  alt="Bird Hills Tech Dubai office collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY + CREATIVE + GROWTH TRIAD */}
      <section className="py-20 bg-[#F7F9FC] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              THE CORE TRIAD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight">
              Technology × Creative × Growth
            </h2>
            <p className="text-sm sm:text-base text-[#667085]">
              How our three integrated pillars interact to deliver comprehensive business advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center font-bold">
                <Zap size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">01. Technology</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Precision engineering that guarantees your digital infrastructure is fast, scalable,
                and impenetrable. No fragile templates—only type-safe architectures designed for
                performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center font-bold">
                <Sparkles size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">02. Creative</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Sophisticated editorial design systems and UI/UX that establish instant trust with
                regional and global enterprise decision-makers. Aesthetics crafted to command
                respect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center font-bold">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">03. Growth</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Conversion-first marketing that drives real revenue pipeline. We target high-intent
                commercial buyers on Google, LinkedIn, and organic search with measurable CAC/LTV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH & 6. CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase mb-3">
              TECHNICAL & CREATIVE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mb-4">
              Connected capabilities built around your commercial goals.
            </h2>
            <p className="text-base text-[#667085]">
              We maintain deep domain expertise across modern engineering stacks, UI design
              systems, and performance media channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.domain}
                className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E4E7EC] space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0B1730] mb-1">{c.domain}</h3>
                  <p className="text-xs text-[#667085]">{c.focus}</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-[#101828] flex items-center gap-2.5 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D68BD] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DUBAI PRESENCE */}
      <section className="py-20 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1730] rounded-3xl p-8 sm:p-12 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1D68BD]/30 text-[#38BDF8]">
                <MapPin size={14} />
                DEIRA · AL BARAHA · DUBAI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Deeply rooted in Dubai. Connected to the world.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Our registered corporate presence in Deira allows us to work closely with business
                founders, managing directors, and enterprise teams across the UAE. We believe in
                direct accountability and personal partnerships.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-sm font-semibold transition-colors"
                >
                  <Calendar size={16} />
                  Book an In-Person Meeting
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors"
                >
                  View Office Map & Directions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                alt="Dubai business district"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}
