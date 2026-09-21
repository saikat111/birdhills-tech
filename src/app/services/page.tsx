import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Layers,
  ShoppingBag,
  Cpu,
  Palette,
  Sparkles,
  TrendingUp,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Zap,
  Lock,
  Clock,
  Compass,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Digital Services & Practice Areas | Bird Hills Tech Dubai",
  description:
    "Explore Bird Hills Tech's comprehensive digital services in Dubai: custom web development, enterprise web applications, e-commerce, UI/UX, branding, SEO, and AI solutions.",
  alternates: {
    canonical: "https://birdhillstech.com/services",
  },
};

export default function ServicesHubPage() {
  const allServices = [
    {
      title: "Web Development",
      slug: "/services/web-development",
      category: "Technology",
      desc: "Custom corporate websites and digital platforms built on modern Next.js architecture with sub-second page speeds.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: Code2,
      price: "From AED 18,500",
      features: [
        "Modern Next.js & TypeScript Architectures",
        "Sub-second Core Web Vitals (< 0.8s LCP)",
        "API, Headless CMS & CRM Integrations",
        "100% Source Code & IP Ownership",
      ],
    },
    {
      title: "Web Applications & SaaS",
      slug: "/services/web-applications",
      category: "Technology",
      desc: "Bespoke SaaS platforms, internal business software, and secure client portals that streamline complex business logic.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: Layers,
      price: "From AED 35,000",
      features: [
        "Role-Based Access Control (RBAC) & Auth",
        "Complex Workflow & Database Modeling",
        "Real-Time Data Pipelines & WebSockets",
        "High-Concurrency Cloud Architecture",
      ],
    },
    {
      title: "E-commerce Solutions",
      slug: "/services/ecommerce",
      category: "Technology",
      desc: "Scalable online stores with conversion-focused architecture and seamless regional GCC payment gateway integration.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      icon: ShoppingBag,
      price: "From AED 24,000",
      features: [
        "High-Conversion Checkout Workflows",
        "GCC Payment Gateways (Apple Pay, Tamara, Tabby)",
        "Automated ERP & Inventory Synchronization",
        "Multi-Currency & Bilingual Arabic Support",
      ],
    },
    {
      title: "UI/UX Design Systems",
      slug: "/services/ui-ux-design",
      category: "Creative",
      desc: "Human-centered digital interfaces crafted through rigorous behavioral research, interactive prototyping, and design systems.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      price: "From AED 14,000",
      features: [
        "Customer Behavioral & User Journey Mapping",
        "Scalable Figma Tokenized Design Systems",
        "Interactive Clickable High-Fidelity Prototypes",
        "WCAG 2.1 AA Accessibility Standards",
      ],
    },
    {
      title: "Branding & Corporate Identity",
      slug: "/services/branding",
      category: "Creative",
      desc: "Authoritative corporate identities, logo systems, and visual design guidelines that command prestige in the Gulf market.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      icon: Sparkles,
      price: "From AED 12,000",
      features: [
        "Vector Logo Systems & Visual Guidelines",
        "Brand Identity Manuals & Color Specifications",
        "Corporate Stationery & Investor Decks",
        "Bilingual English & Arabic Typography",
      ],
    },
    {
      title: "Digital Marketing & Acquisition",
      slug: "/services/digital-marketing",
      category: "Growth",
      desc: "Data-driven performance campaigns on Google and LinkedIn focused on generating verified commercial pipeline.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      price: "From AED 7,500/mo",
      features: [
        "High-Intent Commercial Google Search Ads",
        "Precision B2B LinkedIn Decision-Maker Targeting",
        "Closed-Loop Revenue Attribution & CAC Profiling",
        "A/B Landing Page Conversion Rate Optimization",
      ],
    },
    {
      title: "SEO & Search Dominance",
      slug: "/services/seo",
      category: "Growth",
      desc: "Technical SEO, site architecture, and content authority strategies designed to dominate Dubai business search results.",
      image:
        "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80",
      icon: Search,
      price: "From AED 6,500/mo",
      features: [
        "Local Dubai Map Pack & Entity Authority",
        "High-Value Commercial Keyword Dominance",
        "Core Web Vitals & Crawl Budget Hardening",
        "Authoritative Regional Digital PR Backlinks",
      ],
    },
    {
      title: "Autonomous AI Solutions",
      slug: "/services/ai-solutions",
      category: "Technology",
      desc: "Pragmatic generative AI, intelligent conversational lead qualifiers, and internal knowledge automation.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      icon: Cpu,
      price: "From AED 16,000",
      features: [
        "24/7 Autonomous Conversational Qualifiers",
        "Private Retrieval-Augmented Generation (RAG)",
        "Automatic CRM Dispatch & Lead Scoring",
        "Multi-Lingual Arabic & English Intent NLP",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO SECTION WITH DUBAI PHOTOGRAPHY */}
      <section className="relative py-24 md:py-32 bg-[#0B1730] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai business district and technology skyline"
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
              COMPREHENSIVE CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Digital engineering, creative mastery & commercial growth.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              We combine web development, bespoke software, brand systems, and performance marketing to build market-dominating digital operations in Dubai and the GCC.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D68BD] text-white text-xs font-bold shadow-md hover:bg-[#155196] transition-colors"
              >
                <Calendar size={15} />
                Schedule Technical Consultation
              </Link>
              <a
                href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold backdrop-blur-md transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOG (ATTRACTIVE CARDS WITH DIRECT WHATSAPP & BOOKING CTAS) */}
      <section className="py-24 bg-[#F7F9FC]" id="all-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
                OUR PRACTICE AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
                All 8 Core Service Disciplines
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] max-w-md">
              Every service is delivered with dedicated technical leads, transparent milestones, and direct director oversight.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => {
              const Icon = service.icon;
              const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20discussing%20your%20${encodeURIComponent(
                service.title
              )}%20services%20in%20Dubai.`;

              return (
                <div
                  key={service.title}
                  className="bg-white rounded-3xl border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Visual Imagery */}
                    <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/30 to-transparent" />

                      {/* Overlaid Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0B1730] shadow-sm flex items-center gap-1.5">
                          <Icon size={12} className="text-[#1D68BD]" />
                          {service.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#1D68BD] text-white shadow-sm">
                          {service.price}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content & Features */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {service.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-xs font-semibold text-[#0B1730]"
                          >
                            <CheckCircle2 size={13} className="text-[#1D68BD] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Buttons on EVERY Card */}
                  <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href={`/book-a-meeting?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1D68BD] text-white text-xs font-semibold hover:bg-[#155196] shadow-xs transition-colors"
                      >
                        <Calendar size={13} />
                        <span>Book Meeting</span>
                      </Link>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs font-semibold transition-colors"
                      >
                        <MessageCircle size={13} className="text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <Link
                      href={service.slug}
                      className="w-full text-center block text-xs font-bold text-[#0B1730] group-hover:text-[#1D68BD] py-1 transition-colors"
                    >
                      Deep-Dive Methodology & Case Studies →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING RIGOR & SLA STANDARDS SECTION */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              THE BIRD HILLS DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Our 4 Engineering Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Zap size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">Sub-Second Speed</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Guaranteed Core Web Vitals with LCP under 0.8 seconds across desktop and mobile devices in the GCC.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Lock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">100% IP Ownership</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Full source code and intellectual property transferred unconditionally upon milestone completion.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">Zero Security Debt</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Zero-trust authentication, parameterized SQL query sanitation, CSP headers, and automated security scans.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">90-Day SLA Warranty</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Comprehensive post-launch technical warranty covering bug fixes, performance monitoring, and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON MATRIX: BIRD HILLS TECH VS TRADITIONAL AGENCIES */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              MARKET COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Why Dubai Enterprises Choose Bird Hills Tech
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0B1730] text-white">
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Evaluation Factor</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-[#38BDF8]">
                      Bird Hills Tech (Dubai)
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-slate-400">
                      Traditional Agencies
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-slate-400">
                      Freelancers & Off-Shore
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0B1730]">
                  <tr className="hover:bg-[#F7F9FC]">
                    <td className="py-4 px-6 font-bold">Architecture & Tech Stack</td>
                    <td className="py-4 px-6 font-semibold text-[#1D68BD] bg-[#EBF3FE]/30">
                      Modern Next.js 16, TypeScript, Cloud Native
                    </td>
                    <td className="py-4 px-6 text-slate-500">Bloated WordPress / Themes</td>
                    <td className="py-4 px-6 text-slate-500">Inconsistent / Fragile Stack</td>
                  </tr>
                  <tr className="hover:bg-[#F7F9FC]">
                    <td className="py-4 px-6 font-bold">Speed & Core Web Vitals</td>
                    <td className="py-4 px-6 font-semibold text-[#1D68BD] bg-[#EBF3FE]/30">
                      Sub-800ms guaranteed LCP
                    </td>
                    <td className="py-4 px-6 text-slate-500">Often 3 - 6 seconds</td>
                    <td className="py-4 px-6 text-slate-500">Unmonitored / Unoptimized</td>
                  </tr>
                  <tr className="hover:bg-[#F7F9FC]">
                    <td className="py-4 px-6 font-bold">Direct Access & Communication</td>
                    <td className="py-4 px-6 font-semibold text-[#1D68BD] bg-[#EBF3FE]/30">
                      Direct access to Technical Directors in Dubai
                    </td>
                    <td className="py-4 px-6 text-slate-500">Account managers & intermediaries</td>
                    <td className="py-4 px-6 text-slate-500">Timezone delays & ghosting risks</td>
                  </tr>
                  <tr className="hover:bg-[#F7F9FC]">
                    <td className="py-4 px-6 font-bold">Commercial ROI Focus</td>
                    <td className="py-4 px-6 font-semibold text-[#1D68BD] bg-[#EBF3FE]/30">
                      Tracks real pipeline, revenue & CAC attribution
                    </td>
                    <td className="py-4 px-6 text-slate-500">Reports vanity clicks & impressions</td>
                    <td className="py-4 px-6 text-slate-500">No commercial strategic scope</td>
                  </tr>
                  <tr className="hover:bg-[#F7F9FC]">
                    <td className="py-4 px-6 font-bold">Physical Dubai Presence</td>
                    <td className="py-4 px-6 font-semibold text-[#1D68BD] bg-[#EBF3FE]/30">
                      Stone Building, Al Baraha, Deira, Dubai
                    </td>
                    <td className="py-4 px-6 text-slate-500">Often virtual or offshore-based</td>
                    <td className="py-4 px-6 text-slate-500">No legal UAE corporate accountability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
