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
  Clock,
  Compass,
  CheckCircle2,
  Award,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us | Technology × Creative × Growth | Bird Hills Tech Dubai",
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

  const milestones = [
    {
      year: "2022",
      title: "Foundations in Dubai",
      desc: "Launched in the UAE with a pure engineering ethos: building sub-second headless websites and custom portals for regional businesses.",
    },
    {
      year: "2023",
      title: "Design Systems & Creative Practice",
      desc: "Integrated corporate brand identity, UI/UX research, and prestige design systems tailored for Gulf enterprise aesthetics.",
    },
    {
      year: "2024",
      title: "Commercial Growth Engine",
      desc: "Established our performance marketing practice, focusing on closed-loop revenue attribution and commercial pipeline instead of vanity metrics.",
    },
    {
      year: "2025",
      title: "AI Integration & Regional Scaling",
      desc: "Deployed autonomous conversational agents and custom workflow automation for leading logistics and real estate operators.",
    },
    {
      year: "2026",
      title: "Consolidated Digital Partner",
      desc: "Headquartered at Stone Building, Deira, serving ambitious enterprises across Dubai, Abu Dhabi, and the broader GCC.",
    },
  ];

  const studioImages = [
    {
      title: "Architecture & Engineering Planning",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Creative Design & UI/UX Systems",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dubai Corporate Consultation & Strategy",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Real-Time Telemetry & Growth Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH DUBAI CORPORATE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#0B1730] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai business district"
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
              ABOUT BIRD HILLS TECH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Built to bridge the divide between technology and growth.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Bird Hills Tech is a Dubai-based technology, creative and digital growth firm. We engineer digital assets that command commercial authority and generate real business revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
                OUR PHILOSOPHY
              </div>
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#0B1730] leading-snug border-l-4 border-[#1D68BD] pl-6 italic">
                &ldquo;Technology should not simply exist. It should create commercial momentum for the business behind it.&rdquo;
              </blockquote>
              <p className="text-base text-[#667085] leading-relaxed">
                Too many companies in the UAE find themselves navigating fragmented partners: IT firms that lack creative sophistication, design studios that disregard technical performance, and digital marketing agencies that cannot write a single line of clean code.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                Bird Hills Tech was built to eliminate that friction. By uniting software engineering, creative design, and data-driven customer acquisition under one senior team, we give ambitious businesses the complete digital capability they need to lead their markets.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Bird Hills Tech Dubai leadership briefing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1D68BD]">
                    DUBAI CORPORATE PRESENCE
                  </div>
                  <div className="text-sm font-extrabold text-[#0B1730]">
                    Stone Building · Al Baraha · Deira, UAE
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    Direct access to Technical Directors & Dedicated Delivery Squads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE COMBINATION ADVANTAGE (TECH × CREATIVE × GROWTH) */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              THE THREE CORNERSTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Technology × Creative × Growth
            </h2>
            <p className="text-base text-[#667085] mt-3">
              Most firms provide one or two pieces of the puzzle. We connect all three into an integrated business engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.domain}
                className="bg-white rounded-3xl p-8 border border-[#E4E7EC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3FE] text-[#1D68BD] font-bold text-lg flex items-center justify-center mb-6">
                    {c.domain.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1730] mb-2">{c.domain}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed mb-6">{c.focus}</p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {c.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#0B1730]">
                        <CheckCircle2 size={13} className="text-[#1D68BD] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPANSION TIMELINE & MILESTONES (NEW SECTION) */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              OUR JOURNEY & TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Milestones of Growth in the UAE
            </h2>
          </div>

          <div className="relative border-l-2 border-[#1D68BD]/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#1D68BD] group-hover:scale-125 transition-transform" />
                <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#E4E7EC] hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#EBF3FE] text-[#1D68BD] mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1730]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDIO CULTURE & EXECUTION (NEW PHOTO GRID SECTION) */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              INSIDE BIRD HILLS TECH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Our Dubai Studio & Engineering Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioImages.map((s) => (
              <div
                key={s.title}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#E4E7EC] bg-slate-900"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-bold text-white">{s.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUBAI PRESENCE & CONTACT */}
      <section className="py-20 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1730] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                IN-PERSON CONSULTATIONS IN DUBAI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Visit Our Deira Headquarters or Schedule a Briefing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Stone Building, 122 7th A Street, Al Baraha, Deira, Dubai, UAE. We welcome meetings with founders, CXOs, and directors across the UAE.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/book-a-meeting"
                className="px-6 py-3 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-bold transition-colors shadow-sm"
              >
                Book a Meeting
              </Link>
              <a
                href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20schedule%20an%20office%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
