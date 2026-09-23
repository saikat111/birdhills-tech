import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Transparent Pricing Architecture | Bird Hills Tech Dubai",
  description:
    "Explore transparent corporate pricing packages for web development, custom software, and digital growth in US Dollars (USD). Clear investment tiers with no hidden fees.",
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
        priceAed: "$4,950",
        priceUsd: "$4,950",
        billingType: "one-time",
        deliveryTime: "2-3 Weeks Delivery",
        popular: false,
        featuresJson: JSON.stringify([
          "Custom Next.js & TypeScript Architecture",
          "Sub-second Core Web Vitals (< 0.8s LCP)",
          "Mobile-First Responsive Design",
          "Integrated Headless Content Management (CMS)",
          "Technical SEO & Local Dubai Schema",
          "Lead Capture & Contact Pipeline Integration",
          "30 Days Dedicated Post-Launch Support",
          "100% Full IP & Source Code Ownership",
        ]),
      },
      {
        id: "2",
        name: "Corporate Pro & SaaS",
        slug: "corporate-pro",
        badge: "Most Popular in Dubai",
        description:
          "Enterprise web application or custom digital portal with advanced database modeling, role-based workflows, and regional integrations.",
        priceAed: "$9,500",
        priceUsd: "$9,500",
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
        priceAed: "From $19,500",
        priceUsd: "From $19,500",
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

  const retainers = [
    {
      title: "Technical SLA & DevOps Maintenance",
      price: "From $1,250 / month",
      desc: "24/7 infrastructure monitoring, database backups, dependency security updates, and priority developer bug fixes.",
    },
    {
      title: "Performance SEO & B2B Acquisition",
      price: "From $2,400 / month",
      desc: "Closed-loop commercial keyword ranking, localized Dubai authority backlinks, Google Ads management, and CAC optimization.",
    },
    {
      title: "Dedicated Creative & UI/UX Sprint",
      price: "From $1,800 / month",
      desc: "Monthly design sprints for product features, interactive campaign landing pages, investor collateral, and conversion audits.",
    },
  ];

  const pricingFaqs = [
    {
      q: "Are the prices in US Dollars (USD)?",
      a: "Yes. All pricing is quoted in US Dollars ($ USD) with transparent milestone billing. We also accept payments in AED (Dirhams), EUR, and GBP for UAE and international corporate accounts via corporate wire, credit card, and Stripe.",
    },
    {
      q: "How are project payment milestones structured?",
      a: "Standard fixed-price projects follow a clear 3-phase milestone: 50% deposit upon kickoff and architecture sign-off, 25% upon staging milestone demo review, and 25% upon final QA and production deployment.",
    },
    {
      q: "Who owns the source code and intellectual property?",
      a: "You do. 100%. Unlike agencies that lock clients into proprietary software or monthly licensing traps, Bird Hills Tech unconditionally transfers full intellectual property and Git repository access upon milestone completion.",
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

      {/* 3. PRIMARY PRICING TIERS GRID */}
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
              Controlled directly through the Bird Hills Tech admin management center.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier: any) => {
              let features: string[] = [];
              try {
                features = JSON.parse(tier.featuresJson || "[]");
              } catch {
                features = [];
              }

              const displayPrice = tier.priceUsd || (tier.priceAed?.startsWith("$") ? tier.priceAed : tier.priceAed ? "$" + tier.priceAed.replace(/AED\s*/i, "") : "$4,950");
              const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                tier.name
              )}%20package%20(${encodeURIComponent(displayPrice)}).`;

              return (
                <div
                  key={tier.slug}
                  className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                    tier.popular
                      ? "bg-white border-2 border-[#C59B27] shadow-2xl scale-[1.02] z-10 ring-4 ring-[#C59B27]/15"
                      : "bg-[#FAF8F5] border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-[#C59B27]/40"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-[#C59B27]/25">
                      {tier.badge || "Most Popular in Dubai"}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {tier.badge && !tier.popular ? tier.badge : "Package"}
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#070B14] mb-2">{tier.name}</h3>
                      <p className="text-xs text-[#667085] leading-relaxed">{tier.description}</p>
                    </div>

                    {/* Price Tag */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 flex items-baseline justify-between shadow-2xs">
                      <div>
                        <div className="text-3xl font-black text-[#070B14] tracking-tight">
                          {displayPrice}
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {tier.billingType === "monthly" ? "Per Month (Billed Monthly)" : "Fixed Project Investment"}
                        </span>
                      </div>
                      {tier.deliveryTime && (
                        <span className="text-[10px] font-bold text-[#B38728] bg-[#C59B27]/15 px-2.5 py-1 rounded-lg">
                          {tier.deliveryTime}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Included Deliverables:
                      </div>
                      {features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-[#070B14]">
                          <CheckCircle2 size={15} className="text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-6 border-t border-slate-200/80 space-y-2.5">
                    <Link
                      href={`/book-a-meeting?service=${encodeURIComponent(tier.name)}`}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        tier.popular
                          ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white shadow-md shadow-[#C59B27]/25"
                          : "bg-[#070B14] hover:bg-[#1a2336] text-white"
                      }`}
                    >
                      <Calendar size={14} />
                      <span>Book Consultation for this Package</span>
                    </Link>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 transition-colors"
                    >
                      <MessageCircle size={14} className="text-[#25D366]" />
                      <span>Direct WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ONGOING RETAINERS & MAINTENANCE ADD-ONS */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              LONG-TERM PARTNERSHIPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight mt-2">
              Monthly Retainers & SLA Guarantees
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Ensure continuous security, high performance, and growth after project launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainers.map((ret) => (
              <div
                key={ret.title}
                className="p-8 rounded-3xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#070B14] mb-2">{ret.title}</h3>
                  <div className="text-sm font-extrabold text-[#C59B27] mb-4">{ret.price}</div>
                  <p className="text-xs text-[#667085] leading-relaxed">{ret.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(
                      ret.title
                    )}%20retainer.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] hover:underline"
                  >
                    Inquire via WhatsApp <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING FAQS */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              COMMERCIAL CLARITY
            </span>
            <h2 className="text-3xl font-extrabold text-[#070B14] tracking-tight">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] shadow-2xs space-y-2"
              >
                <h3 className="text-base font-bold text-[#070B14] flex items-center gap-2">
                  <HelpCircle size={17} className="text-[#C59B27] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs text-[#475467] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
