import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText,
  Globe,
  Clock,
  Layers,
  Zap,
  HelpCircle,
  FileCheck,
  Check,
  XCircle,
  TrendingUp,
  Cpu,
  Monitor,
  CheckCheck,
  Lock,
  Workflow,
  ExternalLink,
} from "lucide-react";
import { SubServiceDetail } from "@/data/subServicesData";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import FaqAccordion from "@/components/common/FaqAccordion";

interface SubServiceDetailViewProps {
  data: SubServiceDetail;
}

const categoryVisuals: Record<
  string,
  {
    secondary: string;
    secondaryTitle: string;
    secondaryDesc: string;
    deliverable: string;
    deliverableTitle: string;
    deliverableDesc: string;
  }
> = {
  "web-development": {
    secondary: "/images/generated/arch_web_dev.jpg",
    secondaryTitle: "Enterprise Web Architecture & Microservices Flow",
    secondaryDesc:
      "High-throughput Next.js 16 server components, edge API caching, and automated CI/CD pipeline architecture.",
    deliverable: "/images/generated/preview_web_dev.jpg",
    deliverableTitle: "Production SaaS Portal & Responsive Interface Deliverable",
    deliverableDesc:
      "Pixel-perfect mobile, tablet, and ultra-wide desktop builds tested for sub-1-second Core Web Vitals.",
  },
  "domain-hosting": {
    secondary: "/images/generated/arch_hosting.jpg",
    secondaryTitle: "High-Availability Edge Cluster & DNS Anycast Topology",
    secondaryDesc:
      "Enterprise NVMe SSD arrays with multi-region failover and distributed edge node caching.",
    deliverable: "/images/generated/preview_hosting.jpg",
    deliverableTitle: "Cloud Infrastructure Health & Real-Time Telemetry Console",
    deliverableDesc:
      "24/7 monitoring console tracking server load, DDoS traffic mitigation, and automated daily backup snapshots.",
  },
  hosting: {
    secondary: "/images/generated/arch_hosting.jpg",
    secondaryTitle: "High-Availability Edge Cluster & DNS Anycast Topology",
    secondaryDesc:
      "Enterprise NVMe SSD arrays with multi-region failover and distributed edge node caching.",
    deliverable: "/images/generated/preview_hosting.jpg",
    deliverableTitle: "Cloud Infrastructure Health & Real-Time Telemetry Console",
    deliverableDesc:
      "24/7 monitoring console tracking server load, DDoS traffic mitigation, and automated daily backup snapshots.",
  },
  domains: {
    secondary: "/images/generated/page_domains_network.jpg",
    secondaryTitle: "Global DNSSEC & Anycast Routing Architecture",
    secondaryDesc:
      "Sub-millisecond root DNS resolution with cryptographic domain ownership validation and registrar locking.",
    deliverable: "/images/generated/preview_hosting.jpg",
    deliverableTitle: "Domain Portfolio & DNS Management Console",
    deliverableDesc:
      "Centralized DNS dashboard with 1-click MX, SPF, DKIM, and SSL certificate provisioning.",
  },
  "digital-marketing": {
    secondary: "/images/generated/arch_marketing.jpg",
    secondaryTitle: "Multi-Channel Growth Engine & Cross-Funnel Telemetry",
    secondaryDesc:
      "Full-funnel paid and organic acquisition pipelines connected to real-time revenue attribution engines.",
    deliverable: "/images/generated/preview_marketing.jpg",
    deliverableTitle: "Executive Revenue Attribution & Closed-Loop ROAS Dashboard",
    deliverableDesc:
      "Looker Studio executive dashboard unifying ad spend, qualified leads, and customer acquisition cost (CAC).",
  },
  "google-business-profile-local-seo": {
    secondary: "/images/generated/arch_localseo.jpg",
    secondaryTitle: "Geo-Targeted Grid Radius & Local Citation Map Architecture",
    secondaryDesc:
      "Hyper-local geo-coordinate ranking mesh targeting commercial proximity searches across key territories.",
    deliverable: "/images/generated/preview_localseo.jpg",
    deliverableTitle: "Google Business Profile 3-Pack Rank Radar & Reputation Hub",
    deliverableDesc:
      "Real-time rank tracker for local search, review velocity monitor, and automated GBP post scheduler.",
  },
  "local-seo": {
    secondary: "/images/generated/arch_localseo.jpg",
    secondaryTitle: "Geo-Targeted Grid Radius & Local Citation Map Architecture",
    secondaryDesc:
      "Hyper-local geo-coordinate ranking mesh targeting commercial proximity searches across key territories.",
    deliverable: "/images/generated/preview_localseo.jpg",
    deliverableTitle: "Google Business Profile 3-Pack Rank Radar & Reputation Hub",
    deliverableDesc:
      "Real-time rank tracker for local search, review velocity monitor, and automated GBP post scheduler.",
  },
  "ai-seo-search": {
    secondary: "/images/generated/arch_aiseo.jpg",
    secondaryTitle: "Generative Search Knowledge Graph & Vector Entity Clusters",
    secondaryDesc:
      "Semantic topic modeling, schema markup graph injection, and LLM training data visibility optimization.",
    deliverable: "/images/generated/preview_aiseo.jpg",
    deliverableTitle: "Answer Engine (AEO/GEO) Citation & LLM Visibility Monitor",
    deliverableDesc:
      "Multi-model benchmarking tracking your brand citations across ChatGPT, Perplexity, and Google Gemini Search.",
  },
  "ai-seo": {
    secondary: "/images/generated/arch_aiseo.jpg",
    secondaryTitle: "Generative Search Knowledge Graph & Vector Entity Clusters",
    secondaryDesc:
      "Semantic topic modeling, schema markup graph injection, and LLM training data visibility optimization.",
    deliverable: "/images/generated/preview_aiseo.jpg",
    deliverableTitle: "Answer Engine (AEO/GEO) Citation & LLM Visibility Monitor",
    deliverableDesc:
      "Multi-model benchmarking tracking your brand citations across ChatGPT, Perplexity, and Google Gemini Search.",
  },
  "ai-automation": {
    secondary: "/images/generated/arch_aiauto.jpg",
    secondaryTitle: "Autonomous Multi-Agent Workflow & Webhook Pipeline Blueprint",
    secondaryDesc:
      "Event-driven automation architecture connecting LLM reasoning engines with enterprise databases and APIs.",
    deliverable: "/images/generated/preview_aiauto.jpg",
    deliverableTitle: "Live Conversational AI & Autonomous Task Orchestration Console",
    deliverableDesc:
      "Operational admin portal for reviewing agent executions, WhatsApp dialogue logs, and automated lead handoffs.",
  },
  "crm-marketing-automation": {
    secondary: "/images/generated/arch_crm.jpg",
    secondaryTitle: "Automated Lead Routing & Lifecycle Pipeline Blueprint",
    secondaryDesc:
      "Multi-stage pipeline architecture with instant lead enrichment, calendar scheduling, and automated nurture drips.",
    deliverable: "/images/generated/preview_crm.jpg",
    deliverableTitle: "Omnichannel CRM Deal Pipeline & Customer Telemetry Portal",
    deliverableDesc:
      "Customized CRM views with automated deal scoring, contact activity timelines, and executive revenue forecasts.",
  },
  crm: {
    secondary: "/images/generated/arch_crm.jpg",
    secondaryTitle: "Automated Lead Routing & Lifecycle Pipeline Blueprint",
    secondaryDesc:
      "Multi-stage pipeline architecture with instant lead enrichment, calendar scheduling, and automated nurture drips.",
    deliverable: "/images/generated/preview_crm.jpg",
    deliverableTitle: "Omnichannel CRM Deal Pipeline & Customer Telemetry Portal",
    deliverableDesc:
      "Customized CRM views with automated deal scoring, contact activity timelines, and executive revenue forecasts.",
  },
  "branding-creative": {
    secondary: "/images/generated/arch_branding.jpg",
    secondaryTitle: "Design System Architecture & Visual Identity Token Matrix",
    secondaryDesc:
      "Modular design tokens, bilingual English/Arabic typography hierarchy, and enterprise brand style governance.",
    deliverable: "/images/generated/preview_branding.jpg",
    deliverableTitle: "Executive Brand Guidelines, Component Kit & Creative Assets",
    deliverableDesc:
      "Full Figma master library, vector asset packages, digital brand book, and omnichannel ad creative templates.",
  },
  branding: {
    secondary: "/images/generated/arch_branding.jpg",
    secondaryTitle: "Design System Architecture & Visual Identity Token Matrix",
    secondaryDesc:
      "Modular design tokens, bilingual English/Arabic typography hierarchy, and enterprise brand style governance.",
    deliverable: "/images/generated/preview_branding.jpg",
    deliverableTitle: "Executive Brand Guidelines, Component Kit & Creative Assets",
    deliverableDesc:
      "Full Figma master library, vector asset packages, digital brand book, and omnichannel ad creative templates.",
  },
  "analytics-cro": {
    secondary: "/images/generated/arch_analytics.jpg",
    secondaryTitle: "Server-Side CAPI Data Pipeline & Multi-Touch Attribution Model",
    secondaryDesc:
      "Server-to-server event dispatching bypassing ad blockers, connected to GA4, Meta CAPI, and Google Cloud BigQuery.",
    deliverable: "/images/generated/preview_analytics.jpg",
    deliverableTitle: "Executive Conversion Intelligence & BI Telemetry Dashboard",
    deliverableDesc:
      "Live conversion funnel reporting, user interaction heatmaps, and statistical A/B test confidence analysis.",
  },
  analytics: {
    secondary: "/images/generated/arch_analytics.jpg",
    secondaryTitle: "Server-Side CAPI Data Pipeline & Multi-Touch Attribution Model",
    secondaryDesc:
      "Server-to-server event dispatching bypassing ad blockers, connected to GA4, Meta CAPI, and Google Cloud BigQuery.",
    deliverable: "/images/generated/preview_analytics.jpg",
    deliverableTitle: "Executive Conversion Intelligence & BI Telemetry Dashboard",
    deliverableDesc:
      "Live conversion funnel reporting, user interaction heatmaps, and statistical A/B test confidence analysis.",
  },
};

function getVisuals(data: SubServiceDetail) {
  const cat =
    categoryVisuals[data.parentSlug] || categoryVisuals["web-development"];
  let secondary = cat.secondary;
  let secondaryTitle = cat.secondaryTitle;
  let deliverable = cat.deliverable;
  let deliverableTitle = cat.deliverableTitle;

  const slug = (data.slug || "").toLowerCase();
  if (slug.includes("ecommerce")) {
    secondary = "/images/generated/showcase_ecommerce.jpg";
    secondaryTitle = "High-Conversion Checkout & Headless Storefront Pipeline";
  } else if (slug.includes("security") || slug.includes("ssl")) {
    secondary = "/images/generated/showcase_security.jpg";
    secondaryTitle = "Multi-Layer DDoS Shielding & Cryptographic TLS Matrix";
  } else if (slug.includes("citation")) {
    secondary = "/images/generated/showcase_citations.jpg";
    secondaryTitle = "Global Directory Syndication & Citation Consistency Mesh";
  } else if (slug.includes("whatsapp")) {
    secondary = "/images/generated/showcase_whatsapp.jpg";
    secondaryTitle = "WhatsApp Business Cloud API & Webhook Telemetry Flow";
  } else if (slug.includes("n8n")) {
    secondary = "/images/generated/showcase_n8n.jpg";
    secondaryTitle = "Event-Driven n8n Orchestration & Self-Hosted Webhook Nodes";
  } else if (slug.includes("semantic")) {
    secondary = "/images/generated/showcase_semantic.jpg";
    secondaryTitle = "Vector Embeddings & Semantic Entity Topic Clustering";
  } else if (slug.includes("creative") || slug.includes("adcreative")) {
    secondary = "/images/generated/showcase_creative.jpg";
    secondaryTitle = "High-Converting Creative Matrix & Dynamic Asset Variations";
  } else if (slug.includes("cro") || slug.includes("conversion")) {
    secondary = "/images/generated/showcase_cro.jpg";
    secondaryTitle = "Multivariate A/B Testing & Micro-Conversion Funnel Telemetry";
  } else if (slug.includes("code") || slug.includes("custom")) {
    secondary = "/images/generated/visual_code_editor.jpg";
    secondaryTitle = "Type-Safe Full-Stack Codebase & Automated Linting Pipeline";
  } else if (slug.includes("landing") || slug.includes("mobile")) {
    secondary = "/images/generated/visual_mobile_ux.jpg";
    secondaryTitle = "Adaptive Mobile-First Layout & Touch Interaction Flow";
  }

  return {
    secondary,
    secondaryTitle,
    secondaryDesc: cat.secondaryDesc,
    deliverable,
    deliverableTitle,
    deliverableDesc: cat.deliverableDesc,
  };
}

function formatPriceAed(priceStr?: string | null): string {
  if (!priceStr) return "AED 4,500 / Project";
  if (priceStr.includes("AED")) return priceStr;
  return priceStr.replace(/\$([0-9,]+)/g, (match, numStr) => {
    const num = parseInt(numStr.replace(/,/g, ""), 10);
    const aed = Math.round((num * 3.67) / 100) * 100;
    return `AED ${aed.toLocaleString()}`;
  });
}

export default function SubServiceDetailView({
  data,
}: SubServiceDetailViewProps) {
  const faqItems = data.faqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  const visuals = getVisuals(data);

  // JSON-LD Schema for Service & FAQ
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.heroSubcopy,
    provider: {
      "@type": "Organization",
      name: "Bird Hills Tech",
      url: "https://birdhillstech.com",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
        price: data.priceNote,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#070B14] text-white overflow-hidden border-b border-[#1E293B]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C59B27]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-semibold text-[#94A3B8]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
              </li>
              <li>
                <Link
                  href={data.parentHref}
                  className="hover:text-white transition-colors"
                >
                  {data.parentName}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
              </li>
              <li className="text-[#D4AF37] font-bold truncate max-w-[240px] sm:max-w-md">
                {data.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/15 text-[#D4AF37] border border-[#C59B27]/35 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Dubai & UAE Enterprise Delivery · Deira Studio & On-Site DIFC / Business Bay</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    {data.eyebrow}
                  </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {data.badge}
                </span>
              </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                {data.heroSubcopy}
              </p>

              {/* Commercial Terms Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-2 pb-2 max-w-md">
                <div className="bg-[#0D1526] p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Commercial Terms</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    {formatPriceAed(data.priceNote)}
                  </div>
                </div>
                <div className="bg-[#0D1526] p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Delivery SLA</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    {data.deliveryTimeline}
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#C59B27] text-[#070B14] hover:bg-[#D4AF37] shadow-lg shadow-[#C59B27]/20 transition-all hover:gap-3"
                >
                  Schedule Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors"
                >
                  View Packages & Pricing
                </Link>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 bg-[#0B0F19]">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#070B14]/85 backdrop-blur-md p-4 rounded-xl border border-white/15">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      Dubai Enterprise SLA Guarantee
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Sub-15ms GCC Edge
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Engineered with zero technical debt, strict UAE PDPL data compliance,
                    and 100% intellectual property source code handover.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS & ROI HIGHLIGHTS */}
      {data.metrics && data.metrics.length > 0 && (
        <section className="py-12 bg-[#FAF8F5] border-b border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-xs hover:border-[#C59B27]/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#C59B27] uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. CHALLENGE VS APPROACH & SYSTEM BLUEPRINT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* The Challenge Card */}
            <div className="bg-[#FFF8F8] p-8 sm:p-10 rounded-2xl border border-red-200/80 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700">
                <XCircle className="w-3.5 h-3.5" />
                The Operational Bottleneck
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] tracking-tight">
                {data.challengeHeadline}
              </h2>
              <ul className="space-y-4">
                {data.challengePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-sm text-[#475467] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach Card */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#C59B27]/30 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/15 text-[#9A781A]">
                <Zap className="w-3.5 h-3.5" />
                The Bird Hills Tech Solution
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] tracking-tight">
                {data.approachHeadline}
              </h2>
              <ul className="space-y-4">
                {data.approachPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1D2939] font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECONDARY VISUAL: TECHNICAL ARCHITECTURE BLUEPRINT SHOWCASE */}
          <div className="rounded-3xl bg-[#070B14] border border-[#1E293B] overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                  <Cpu className="w-4 h-4 text-[#C59B27]" />
                  TECHNICAL BLUEPRINT & SYSTEM ARCHITECTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {visuals.secondaryTitle}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 shrink-0">
                <CheckCheck className="w-4 h-4" />
                PRODUCTION CERTIFIED
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden">
                <Image
                  src={visuals.secondary}
                  alt={visuals.secondaryTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070B14]/80 hidden lg:block" />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 space-y-6 text-white">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {visuals.secondaryDesc}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#C59B27]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Zero-Trust Security Hardening
                      </div>
                      <div className="text-xs text-slate-400">
                        Isolated runtime environments, TLS 1.3 encryption, and
                        strict OWASP compliance.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Workflow className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Automated CI/CD Verification
                      </div>
                      <div className="text-xs text-slate-400">
                        Type-safe unit tests, integration validation, and zero
                        downtime rolling deploys.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Full IP & Codebase Handover
                      </div>
                      <div className="text-xs text-slate-400">
                        100% intellectual property rights, Git repositories, and
                        architecture docs transferred.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES & SYSTEM FEATURES */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              DEEP TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
              Everything Included in This Capability
            </h2>
            <p className="text-base text-[#667085] mt-3">
              Engineered without shortcuts. Every implementation is documented,
              security-hardened, and transferred with full commercial rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC] flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-white transition-colors">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B0F19] group-hover:text-[#C59B27] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 HIGH-FIDELITY PRODUCTION VISUAL ARTIFACTS GALLERY */}
      <section className="py-20 bg-[#070B14] text-white border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#D4AF37] uppercase">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                PRODUCTION ARTIFACTS & SYSTEM TOPOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Tangible Production Deliverables & System Visuals
              </h2>
              <p className="text-base text-[#94A3B8] mt-2">
                Every project produces fully documented, auditable production deliverables—never ephemeral prototypes or black-box code.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                VERIFIED GCC EDGE PRODUCTION
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visual Card 1: Architectural Blueprint */}
            <div className="bg-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-[#C59B27]/50 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <Image
                  src={visuals.secondary}
                  alt={visuals.secondaryTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#070B14]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] border border-white/10">
                  SYSTEM BLUEPRINT
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {visuals.secondaryTitle}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {visuals.secondaryDesc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Next.js 16 Edge Architecture</span>
                  <span className="text-emerald-400 font-semibold">Zero-Trust Security</span>
                </div>
              </div>
            </div>

            {/* Visual Card 2: Live Deliverable / SaaS Interface */}
            <div className="bg-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-[#C59B27]/50 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <Image
                  src={visuals.deliverable}
                  alt={visuals.deliverableTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#070B14]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-white/10">
                  LIVE DELIVERABLE INTERFACE
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {visuals.deliverableTitle}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {visuals.deliverableDesc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Sub-0.8s Core Web Vitals</span>
                  <span className="text-emerald-400 font-semibold">100% Responsive UI</span>
                </div>
              </div>
            </div>

            {/* Visual Card 3: Executive Growth & Telemetry Engine */}
            <div className="bg-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-[#C59B27]/50 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <Image
                  src="/images/generated/visual_executive_growth.jpg"
                  alt="Executive Telemetry & Real-Time Performance Engine"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#070B14]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-white/10">
                  TELEMETRY ENGINE
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    Executive Performance & Conversion Telemetry Radar
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    Closed-loop real-time telemetry monitoring server health, sub-millisecond query response times, and conversion funnel velocity.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Etisalat & du GCC Peering</span>
                  <span className="text-emerald-400 font-semibold">99.99% Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS ROADMAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
              How We Deliver From Start to Finish
            </h2>
            <p className="text-base text-[#667085] mt-2">
              Our 4-phase delivery framework eliminates guesswork, delays, and
              scope creep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E4E7EC] space-y-3 hover:border-[#C59B27]/40 transition-colors"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27] font-mono">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#0B0F19]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DELIVERABLES CHECKLIST, LIVE WORKSPACE PREVIEW & TECH STACK */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              TANGIBLE OUTPUTS & PRODUCTION VERIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] mt-1">
              Live Workspace Output & Guaranteed Deliverables
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-2xl">
              Inspect the tangible artifacts delivered to your leadership team.
              Every line of code and asset is production-ready from Day 1.
            </p>
          </div>

          {/* TERTIARY VISUAL: PRODUCTION WORKSPACE PREVIEW IN BROWSER MOCKUP */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white shadow-xl overflow-hidden">
            {/* Browser Header Bar */}
            <div className="bg-[#0B0F19] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-3 px-3 py-1 rounded-md bg-white/10 text-[11px] font-mono text-slate-300 hidden sm:inline-block">
                  https://console.birdhillstech.com/deployments/{data.slug}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#D4AF37]">
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LIVE CONSOLE PREVIEW</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <Image
                  src={visuals.deliverable}
                  alt={visuals.deliverableTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 bg-white">
                <div>
                  <span className="text-[10px] font-extrabold text-[#C59B27] uppercase tracking-wider">
                    PRODUCTION READINESS
                  </span>
                  <h4 className="text-lg font-bold text-[#0B0F19] mt-0.5">
                    {visuals.deliverableTitle}
                  </h4>
                  <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                    {visuals.deliverableDesc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1D2939]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated Continuous Integration & Smoke Tests</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1D2939]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Executive Walkthrough Video & Architecture Runbook</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1D2939]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>90-Day Post-Launch SLA Warranty & Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            {/* Deliverables Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-base font-bold text-[#0B0F19]">
                Handover Deliverables Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {data.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-[#E4E7EC]"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1D2939] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-[#E4E7EC] space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#C59B27] uppercase">
                <Layers className="w-4 h-4" />
                <span>Technologies & Frameworks</span>
              </div>
              <h4 className="text-lg font-bold text-[#0B0F19]">
                Enterprise Tooling Stack
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                We build with industry-standard, fully supported enterprise
                tooling—never deprecated libraries or fragile hacks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {data.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E4E7EC] text-xs font-bold text-[#0B0F19]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 DUBAI & UAE ENTERPRISE ASSURANCE */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              <Building2 className="w-4 h-4 text-[#C59B27]" />
              DUBAI & GCC REGIONAL ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
              Why Dubai & UAE Enterprises Partner With Bird Hills Tech
            </h2>
            <p className="text-base text-[#667085] mt-2">
              Combining world-class engineering rigor with deep on-the-ground presence in Dubai, UAE corporate tax compliance, and sub-15ms GCC regional latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC] flex items-center justify-center text-[#C59B27]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">
                UAE PDPL Compliance
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Full compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection. Secure localized data sovereignty standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC] flex items-center justify-center text-[#C59B27]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">
                Deira Studio & In-Person Briefings
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                In-person technical strategy workshops at our Deira commercial studio or on-site at your offices in DIFC, Downtown Dubai, Dubai Marina, or Business Bay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC] flex items-center justify-center text-[#C59B27]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">
                Sub-15ms GCC Cloud Edge
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Dedicated regional edge nodes peering directly with Etisalat (e&) and du internet backbones for ultra-fast response across Dubai, Abu Dhabi, and the GCC.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] hover:border-[#C59B27]/40 shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC] flex items-center justify-center text-[#C59B27]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">
                UAE VAT & Corporate Invoicing
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Official commercial agency invoicing in UAE Dirhams (AED) with Federal Tax Authority TRN compliance for seamless corporate tax deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION WITH SCHEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={faqItems}
            title={`Frequently Asked Questions About ${data.title}`}
            eyebrow="EXECUTIVE CLARITY"
            description="Clear answers regarding pricing models, timeline guarantees, technical integration, and aftercare support."
          />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <FinalCtaSection />
    </main>
  );
}
