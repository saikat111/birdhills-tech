import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  HelpCircle,
  ShieldCheck,
  Zap,
  Clock,
} from "lucide-react";
import PricingCardsClient from "@/components/pricing/PricingCardsClient";
import FaqAccordion from "@/components/common/FaqAccordion";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Transparent Pricing Architecture | Bird Hills Tech Dubai",
  description:
    "Explore transparent corporate pricing packages for web development, custom software, and digital growth in AED (UAE Dirhams) and USD. Clear investment tiers calibrated 35%-50% below standard Dubai agency rates.",
  alternates: {
    canonical: "https://birdhillstech.com/pricing",
  },
};

export const revalidate = 60;

export default async function PricingPage() {
  let tiers: any[] = [];

  try {
    tiers = await prisma.pricingTier.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
    });
  } catch (err) {
    console.error("Error fetching pricing tiers:", err);
  }

  // Fallback if empty
  if (!tiers || tiers.length === 0) {
    tiers = [
      {
        id: "1",
        name: "Growth Launchpad",
        slug: "growth-launchpad",
        badge: "SMEs & Fast Launch",
        description:
          "Custom high-speed corporate web platform built on Next.js with CMS integration, SEO readiness, and conversion architecture.",
        priceAed: "AED 4,500",
        priceUsd: "$1,250",
        billingType: "one-time",
        deliveryTime: "2-3 Weeks Delivery",
        popular: false,
        featuresJson: JSON.stringify([
          "Custom Next.js & TypeScript Architecture",
          "Optimized Performance & Core Web Vitals",
          "Mobile-First Responsive Design",
          "Integrated Headless Content Management (CMS)",
          "Technical SEO & Local Dubai Schema",
          "Lead Capture & Contact Pipeline Integration",
          "30 Days Dedicated Post-Launch Support",
          "Full Source Code & Asset Ownership",
        ]),
      },
      {
        id: "2",
        name: "Corporate Pro & SaaS",
        slug: "corporate-pro",
        badge: "Most Popular in Dubai",
        description:
          "Enterprise web application or custom digital portal with advanced database modeling, role-based workflows, and regional integrations.",
        priceAed: "AED 9,500",
        priceUsd: "$2,600",
        billingType: "one-time",
        deliveryTime: "4-6 Weeks Delivery",
        popular: true,
        featuresJson: JSON.stringify([
          "Everything in Growth Launchpad",
          "Custom Web App or Customer Portal",
          "Role-Based Access Control (RBAC) & Auth",
          "Payment Gateway (Stripe / Apple Pay / GCC)",
          "Custom ERP, CRM & API Integrations",
          "Bilingual Localization (English + Arabic RTL)",
          "Zero-Trust Security & Latency Profiling",
          "90 Days SLA Technical Warranty",
        ]),
      },
      {
        id: "3",
        name: "Bespoke Enterprise",
        slug: "bespoke-enterprise",
        badge: "Conglomerates & FinTech",
        description:
          "Tailored multi-platform digital ecosystem designed for GCC family offices, regional conglomerates, and high-security enterprise operations.",
        priceAed: "From AED 18,500",
        priceUsd: "From $5,000",
        billingType: "one-time",
        deliveryTime: "8-12 Weeks Delivery",
        popular: false,
        featuresJson: JSON.stringify([
          "Full Custom Architecture & Multi-Tenant Setup",
          "Dedicated Product Squad & Technical Lead",
          "Private AI Agent & Workflow Automation",
          "High-Concurrency Microservices & Cloud Infrastructure",
          "Enterprise Penetration Testing & Compliance",
          "Custom Analytics & Attribution Dashboard",
          "Direct Director-Level Advisory & Steering",
          "Annual SLA with 24/7 Incident Escalation",
        ]),
      },
    ];
  }

  const pricingFaqs = [
    {
      q: "Can we pay in UAE Dirhams (AED) or US Dollars (USD)?",
      a: "Yes. All pricing is transparently quoted in both UAE Dirhams (AED) and US Dollars (USD). We accept corporate bank transfers (IBAN within the UAE or SWIFT internationally), credit cards, and Stripe invoices with zero hidden processing markups.",
    },
    {
      q: "How are project payment milestones structured?",
      a: "Standard fixed-price projects follow an agile 3-stage milestone: 50% deposit upon kickoff and architecture blueprint sign-off, 25% upon interactive staging demo, and 25% upon final QA testing and production deployment.",
    },
    {
      q: "Who owns the source code and intellectual property?",
      a: "You own 100% of your source code, design assets, and databases. Unlike agencies that trap clients with proprietary hosting lock-ins, Bird Hills Tech hands over full Git repositories and deployment keys upon milestone completion.",
    },
    {
      q: "Why are Bird Hills Tech prices 35%–50% more competitive than other Dubai agencies?",
      a: "Traditional Dubai agencies maintain expensive Downtown offices, bloated sales teams, and heavy account management overhead. We operate as a high-density, engineering-led agency—passing direct operational savings directly to our clients without compromising architectural quality.",
    },
    {
      q: "Can we customize a package for our specific scope?",
      a: "Absolutely. Many Dubai clients combine custom web application engineering with localized branding or ongoing SEO sprints. Schedule a consultation or WhatsApp our directors for an exact itemized proposal within 24 hours.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. HERO SECTION WITH DUBAI SKYLINE */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=90"
            alt="Dubai financial district skyline"
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
              TRANSPARENT COMMERCIAL PRICING
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Predictable investments. Exceptional digital returns.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              No hidden agency fees, bloated markups, or vendor lock-in. Explore our transparent investment tiers designed for ambitious businesses in Dubai and the GCC.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE ENGAGEMENT MODELS */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                <Zap size={15} />
                Fixed-Scope Sprints
              </div>
              <h3 className="text-base font-bold text-[#070B14]">Defined Scope & Fixed Budget</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Ideal for websites, portals, and defined product launches with agreed milestones and delivery deadlines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                <Clock size={15} />
                Dedicated Product Squad
              </div>
              <h3 className="text-base font-bold text-[#070B14]">Agile Bi-Weekly Sprints</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Full-stack engineers, UI/UX designers, and QA dedicated exclusively to your continuous roadmap and features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-sm transition-all space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                <ShieldCheck size={15} />
                Strategic Growth Retainer
              </div>
              <h3 className="text-base font-bold text-[#070B14]">Ongoing Pipeline Scaling</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Continuous performance marketing, technical SEO, and conversion optimization driving commercial revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIMARY PRICING TIERS & RETAINERS WITH DYNAMIC CURRENCY TOGGLE */}
      <section className="py-24 bg-white" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              CURATED PRODUCTION PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
              Transparent Packages Built for Execution
            </h2>
            <p className="text-sm text-[#667085]">
              Direct engineering milestones with zero agency bloat, calibrated for the UAE & international market.
            </p>
          </div>

          {/* Dynamic Interactive Cards & Retainers */}
          <PricingCardsClient tiers={tiers} />
        </div>
      </section>

      {/* 5. PRICING FAQS ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={pricingFaqs.map((f) => ({
          question: f.q,
          answer: f.a,
          category: "Commercial & Billing",
        }))}
        title="Frequently Asked Pricing Questions"
        eyebrow="COMMERCIAL TRANSPARENCY"
        description="Direct answers on currency payment options (AED / USD), milestone invoicing, IP ownership transfer, and custom project scopes."
        theme="light"
        includeSchema={true}
      />

      <FinalCtaSection />
    </div>
  );
}
