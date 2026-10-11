"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  MapPin,
  TrendingUp,
  Server,
  Bot,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface TabContent {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

const TABS_DATA: TabContent[] = [
  {
    id: "web-arch",
    label: "Web Architecture",
    icon: Code2,
    title: "Enterprise Next.js 16 Architecture & Sub-Second LCP",
    subtitle: "Eliminating WordPress plugin bloat with type-safe engineering built for speed and conversion.",
    description:
      "Modern enterprises in the UAE cannot afford 4-second loading times. In Dubai's competitive market, slow corporate websites bleed high-intent prospects within 400 milliseconds. We build with Next.js 16, TypeScript, and server-side edge rendering to deliver instant page responses, sub-0.8s Largest Contentful Paint (LCP), and zero layout shifts. Every line of code is clean, modular, and 100% owned by your business.",
    highlights: [
      {
        title: "Sub-Second Core Web Vitals (< 0.8s)",
        desc: "Google ranks fast sites higher. We guarantee lightning performance on 5G and desktop.",
      },
      {
        title: "Headless Content Management",
        desc: "Marketing teams update headlines and blog articles instantly without breaking production code.",
      },
      {
        title: "100% Intellectual Property Ownership",
        desc: "Full source code, Git repositories, and architecture diagrams transferred directly to your organization.",
      },
    ],
    metrics: [
      { value: "< 0.8s", label: "Average Mobile LCP" },
      { value: "99.98%", label: "Platform SLA Uptime" },
      { value: "100%", label: "Source Code Ownership" },
    ],
    ctaText: "Explore Web Engineering",
    ctaHref: "/services/web-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Clean type-safe code editor and modern web architecture design",
  },
  {
    id: "local-seo",
    label: "Dubai Local SEO",
    icon: MapPin,
    title: "Google Maps 3-Pack Dominance Across Dubai & UAE",
    subtitle: "Capturing high-intent local phone calls and showroom visits the moment clients search.",
    description:
      "When corporate clients, investors, or local consumers search for your services in Dubai, they don't browse page two of Google. They contact the top 3 businesses featured on the Google Maps pack. We resolve complex UAE trade license verification roadblocks, optimize category taxonomies, syndicate verified citations across authoritative UAE directories, and deploy geo-grid review acquisition strategies across Deira, Downtown, Business Bay, and DIFC.",
    highlights: [
      {
        title: "GBP Verification & Category Structuring",
        desc: "Direct assistance overcoming regional verification delays with full Department of Economy & Tourism compliance.",
      },
      {
        title: "Geo-Grid Ranking Expansion",
        desc: "Broaden your Google Maps visibility radius across major commercial and financial districts in Dubai.",
      },
      {
        title: "Verified UAE Citation Network",
        desc: "Authoritative business listings synced across regional UAE business databases and commercial indexes.",
      },
    ],
    metrics: [
      { value: "+280%", label: "Average Increase in Inbound Calls" },
      { value: "#1 to #3", label: "Target Maps 3-Pack Positions" },
      { value: "100%", label: "UAE Trade License Alignment" },
    ],
    ctaText: "Explore Local SEO Services",
    ctaHref: "/services/google-business-profile-local-seo",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Dubai skyline and commercial business centers",
  },
  {
    id: "b2b-growth",
    label: "B2B Growth & Ads",
    icon: TrendingUp,
    title: "Closed-Loop Commercial Acquisition & Pipeline Attribution",
    subtitle: "Trading vanity impressions for verified contract value and measurable customer acquisition cost.",
    description:
      "Consumer marketing tactics fail in GCC enterprise sales. High-value commercial decision-makers don't make impulsive clicks. We structure precision B2B search campaigns on Google Ads targeting high-intent commercial keywords, combined with Account-Based Marketing (ABM) on LinkedIn reaching verified C-level executives in Dubai, Abu Dhabi, and Riyadh. Server-side tracking (Meta CAPI, Google Enhanced Conversions) connects every dirham spent directly to CRM pipeline.",
    highlights: [
      {
        title: "Zero Budget Waste on Broad Match",
        desc: "Exhaustive negative keyword lists filter out job seekers, students, and low-intent searches.",
      },
      {
        title: "Account-Based LinkedIn Precision",
        desc: "Deliver personalized corporate case studies directly to verified Managing Directors and Procurement Heads.",
      },
      {
        title: "Closed-Loop CRM Attribution",
        desc: "Transparent weekly reporting tied directly to deals created in HubSpot, Zoho, or Salesforce.",
      },
    ],
    metrics: [
      { value: "4.2x", label: "Average Commercial ROAS" },
      { value: "-45%", label: "Lower Cost Per Qualified Lead" },
      { value: "100%", label: "Verified Revenue Tracking" },
    ],
    ctaText: "Explore Digital Marketing",
    ctaHref: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Executive marketing dashboard and commercial revenue analytics",
  },
  {
    id: "cloud-infra",
    label: "Cloud & .ae Domains",
    icon: Server,
    title: "Sub-15ms GCC Edge Latency & Accredited .ae Registry",
    subtitle: "Enterprise NVMe cloud storage, automated daily backups, and bank-grade DNSSEC shielding.",
    description:
      "Hosting your Middle East business on distant European or US servers introduces 180ms+ network latency that degrades Core Web Vitals and hurts local search rank. Our pure NVMe cloud infrastructure is optimized specifically for Gulf traffic, serving content in under 15ms across the UAE and Saudi Arabia. We provide direct .ae domain registration, free zero-downtime website migrations, and corporate email systems with strict SPF/DKIM/DMARC deliverability.",
    highlights: [
      {
        title: "Pure NVMe Enterprise Storage",
        desc: "Up to 10x faster I/O throughput compared to traditional SATA SSD hosting providers.",
      },
      {
        title: "Accredited UAE .ae Registrar",
        desc: "Secure direct domain registration with instant DNS routing and full ownership transfer.",
      },
      {
        title: "Zero-Downtime Migration Guarantee",
        desc: "Senior DevOps engineers migrate your databases, emails, and files with zero service interruption.",
      },
    ],
    metrics: [
      { value: "< 15ms", label: "GCC Regional Edge Latency" },
      { value: "99.99%", label: "Guaranteed Network SLA" },
      { value: "0 sec", label: "Downtime During Migration" },
    ],
    ctaText: "View Hosting Solutions",
    ctaHref: "/hosting",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern enterprise cloud server data center",
  },
  {
    id: "ai-auto",
    label: "AI Automation",
    icon: Bot,
    title: "Autonomous 24/7 AI Agents & WhatsApp Workflows",
    subtitle: "Replacing static chatbot scripts with intelligent agents that qualify leads and sync with CRM.",
    description:
      "Legacy chatbots with rigid multiple-choice menus frustrate clients and hurt brand prestige. We deploy custom generative AI agents that converse naturally in fluent English and Arabic. Deployed on your website and official WhatsApp Business Cloud API, our agents answer complex commercial questions from your verified company knowledge base, qualify prospect budget and timelines in seconds, and automatically route deals into your CRM.",
    highlights: [
      {
        title: "Sub-5-Second WhatsApp Lead Response",
        desc: "Engage prospective international buyers immediately, even outside normal UAE office hours.",
      },
      {
        title: "Private Knowledge Retrieval (RAG)",
        desc: "Trained strictly on your approved brochures, pricing tiers, and service agreements without hallucinations.",
      },
      {
        title: "End-to-End n8n Automation",
        desc: "Sync calendar meetings, dispatch quote PDFs, and notify sales executives instantly via WhatsApp.",
      },
    ],
    metrics: [
      { value: "3 sec", label: "Average Lead Response Time" },
      { value: "24/7/365", label: "Continuous Autonomous Operation" },
      { value: "65%", label: "Manual Admin Time Saved" },
    ],
    ctaText: "Explore AI Automation",
    ctaHref: "/services/ai-automation",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "AI technology workflow and enterprise automation workspace",
  },
  {
    id: "bilingual-ux",
    label: "Bilingual Arabic UX",
    icon: Globe2,
    title: "Native Bidirectional Design & Cultural Resonance",
    subtitle: "True RTL layouts engineered to reflect Gulf prestige and command corporate authority.",
    description:
      "Bilingual design in the GCC requires far more than auto-translating text strings. A truly prestigious regional web presence demands authentic Right-to-Left (RTL) typography, mirrored UI component hierarchies, and culturally resonant visual aesthetics. We engineer bilingual platforms that seamlessly switch between English and Arabic, supporting regional payment methods including Apple Pay, Stripe, and GCC-preferred installments.",
    highlights: [
      {
        title: "True Bidirectional CSS (RTL/LTR)",
        desc: "Pixel-perfect Arabic layouts that respect natural eye-tracking patterns and modern typography.",
      },
      {
        title: "Regional Payment Gateway Rails",
        desc: "Frictionless checkout experiences with Apple Pay, Stripe UAE, Tabby, and Tamara.",
      },
      {
        title: "UAE Regulatory Compliance",
        desc: "Full alignment with UAE Federal Decree-Law No. 45 on Personal Data Protection (PDPL).",
      },
    ],
    metrics: [
      { value: "100%", label: "Native Arabic Typography" },
      { value: "+38%", label: "Higher Regional Conversion" },
      { value: "0", label: "Layout Shift on Language Switch" },
    ],
    ctaText: "View Creative & UX Practice",
    ctaHref: "/services/branding-creative",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Executive team reviewing bilingual design system",
  },
];

export default function SeoKnowledgeTabs() {
  const [activeTabId, setActiveTabId] = useState<string>("web-arch");
  const activeTab = TABS_DATA.find((t) => t.id === activeTabId) || TABS_DATA[0];

  return (
    <section className="py-24 md:py-32 bg-[#0B1730] text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1D68BD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md mb-4">
            <Sparkles size={13} className="text-[#D4AF37]" />
            ORGANIC AUTHORITY & TECHNICAL PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for Organic Search &
            <span className="block text-[#D4AF37] mt-1">Measurable Commercial Dominance</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore the technical benchmarks, local UAE search strategies, and enterprise architectures that power our clients ahead of regional competition.
          </p>
        </div>

        {/* Tab Navigation Pill Bar - Responsive flex-wrap that NEVER clips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-5xl mx-auto px-2">
          {TABS_DATA.map((tab) => {
            const isActive = tab.id === activeTabId;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#C59B27] text-[#070B14] shadow-lg shadow-[#C59B27]/20 ring-2 ring-[#C59B27]/50 font-extrabold scale-[1.02]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon size={16} className={isActive ? "text-[#070B14]" : "text-[#C59B27]"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl animate-in fade-in-50 duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  TECHNICAL DEEP DIVE
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 leading-snug">
                  {activeTab.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#D4AF37]/90 mt-2">
                  {activeTab.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-3 pt-2">
                {activeTab.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C59B27]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{h.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantifiable Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {activeTab.metrics.map((m, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={activeTab.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#C59B27] hover:bg-[#b0881e] text-[#070B14] transition-colors shadow-lg shadow-[#C59B27]/25"
                >
                  <span>{activeTab.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-colors"
                >
                  <span>Book Dubai Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image & Badge (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/3] group">
                <Image
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#070B14]/85 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
                    <Zap size={14} />
                    <span>VERIFIED GCC DEPLOYMENT BENCHMARK</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Audited for sub-second LCP, zero technical debt, and maximum UAE conversion rate.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
