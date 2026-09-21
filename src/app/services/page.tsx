import React from "react";
import { Metadata } from "next";
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
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Digital Services | Technology, Creative & Growth",
  description:
    "Explore Bird Hills Tech's comprehensive digital services in Dubai: custom web development, enterprise web applications, e-commerce, UI/UX, branding, SEO, and AI solutions.",
  alternates: {
    canonical: "https://birdhillstech.com/services",
  },
};

export default function ServicesHubPage() {
  const technologyServices = [
    {
      title: "Web Development",
      slug: "/services/web-development",
      desc: "Custom corporate websites and digital platforms built on modern Next.js architecture with sub-second page speeds.",
      icon: Code2,
      features: ["Next.js & React Architectures", "Sub-second Core Web Vitals", "API & CRM Integration"],
    },
    {
      title: "Web Applications",
      slug: "/services/web-applications",
      desc: "Bespoke SaaS platforms, internal business software, and secure client portals that streamline complex business logic.",
      icon: Layers,
      features: ["Role-Based Access Control", "Complex Workflow Automation", "Scalable Cloud Architecture"],
    },
    {
      title: "E-commerce Solutions",
      slug: "/services/ecommerce",
      desc: "Scalable online stores with conversion-focused architecture and seamless regional GCC payment gateway integration.",
      icon: ShoppingBag,
      features: ["High-Conversion Checkouts", "Apple Pay & Tabby/Tamara", "ERP & Inventory Sync"],
    },
    {
      title: "AI Solutions",
      slug: "/services/ai-solutions",
      desc: "Pragmatic generative AI, intelligent conversational lead qualifiers, and internal knowledge automation.",
      icon: Cpu,
      features: ["24/7 Conversational Qualifiers", "Private RAG Knowledge Search", "CRM Auto-Routing"],
    },
  ];

  const creativeServices = [
    {
      title: "UI/UX Design",
      slug: "/services/ui-ux-design",
      desc: "Human-centered digital interfaces crafted through rigorous behavioral research, interactive prototyping, and design systems.",
      icon: Palette,
      features: ["User Journey Mapping", "Figma Design Systems", "WCAG 2.1 AA Accessibility"],
    },
    {
      title: "Branding & Creative",
      slug: "/services/branding",
      desc: "Authoritative corporate identities, logo systems, and visual design guidelines that command prestige in the Gulf market.",
      icon: Sparkles,
      features: ["Corporate Logo Systems", "Brand Manuals & Guidelines", "Pitch Decks & Collateral"],
    },
  ];

  const growthServices = [
    {
      title: "Digital Marketing",
      slug: "/services/digital-marketing",
      desc: "Data-driven performance campaigns on Google and LinkedIn focused on generating verified commercial pipeline.",
      icon: TrendingUp,
      features: ["High-Intent Google Ads", "Targeted B2B LinkedIn Marketing", "Closed-Loop CAC Attribution"],
    },
    {
      title: "SEO Solutions",
      slug: "/services/seo",
      desc: "Technical SEO, site architecture, and content authority strategies designed to dominate Dubai business search results.",
      icon: Search,
      features: ["Local Dubai Authority SEO", "Commercial Keyword Strategy", "Technical Core Web Vitals"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              OUR CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              Digital expertise built around your business.
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              We provide connected solutions spanning engineering, brand identity, and customer
              acquisition. Explore our dedicated service practices below.
            </p>
          </div>
        </div>
      </section>

      {/* 1. TECHNOLOGY PILLAR */}
      <section className="py-20 bg-white" id="technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#1D68BD] tracking-wider uppercase">
                DISCIPLINE 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-1">
                TECHNOLOGY & ENGINEERING
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:block">
              Modern Full-Stack Architectures
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-center text-[#1D68BD] mb-6 shadow-2xs group-hover:bg-[#1D68BD] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-[#101828] font-medium flex items-center gap-2"
                        >
                          <CheckCircle2 size={13} className="text-[#1D68BD]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href={s.slug}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors"
                    >
                      Explore {s.title} Page
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. CREATIVE PILLAR */}
      <section className="py-20 bg-[#F7F9FC] border-t border-[#E4E7EC]" id="creative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#1D68BD] tracking-wider uppercase">
                DISCIPLINE 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-1">
                CREATIVE & DESIGN SYSTEMS
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:block">
              Corporate Visual Prestige
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-8 border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] flex items-center justify-center text-[#1D68BD] mb-6 shadow-2xs group-hover:bg-[#1D68BD] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-[#101828] font-medium flex items-center gap-2"
                        >
                          <CheckCircle2 size={13} className="text-[#1D68BD]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href={s.slug}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors"
                    >
                      Explore {s.title} Page
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GROWTH PILLAR */}
      <section className="py-20 bg-white border-t border-[#E4E7EC]" id="growth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#1D68BD] tracking-wider uppercase">
                DISCIPLINE 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-1">
                GROWTH & PERFORMANCE MARKETING
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:block">
              Qualified Customer Acquisition
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-center text-[#1D68BD] mb-6 shadow-2xs group-hover:bg-[#1D68BD] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-[#101828] font-medium flex items-center gap-2"
                        >
                          <CheckCircle2 size={13} className="text-[#1D68BD]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href={s.slug}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors"
                    >
                      Explore {s.title} Page
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
