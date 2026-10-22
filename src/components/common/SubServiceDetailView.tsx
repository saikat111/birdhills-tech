import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Clock,
  Layers,
  Zap,
  HelpCircle,
  FileCheck,
  Check,
  XCircle,
  TrendingUp,
} from "lucide-react";
import { SubServiceDetail } from "@/data/subServicesData";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import FaqAccordion from "@/components/common/FaqAccordion";

interface SubServiceDetailViewProps {
  data: SubServiceDetail;
}

export default function SubServiceDetailView({ data }: SubServiceDetailViewProps) {
  const faqItems = data.faqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

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
        priceCurrency: "USD",
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
                <Link href={data.parentHref} className="hover:text-white transition-colors">
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
                  <div className="text-sm font-bold text-white">{data.priceNote}</div>
                </div>
                <div className="bg-[#0D1526] p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Delivery SLA</span>
                  </div>
                  <div className="text-sm font-bold text-white">{data.deliveryTimeline}</div>
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
                  <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-0.5">
                    Enterprise SLA Guarantee
                  </div>
                  <div className="text-xs text-slate-300">
                    Engineered with zero technical debt, strict data privacy, and full client source code ownership.
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

      {/* 3. CHALLENGE VS APPROACH (TWO-COLUMN ARCHITECTURE) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <span className="text-sm text-[#475467] leading-relaxed">{point}</span>
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
              Engineered without shortcuts. Every implementation is documented, security-hardened, and transferred with full commercial rights.
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
              Our 4-phase delivery framework eliminates guesswork, delays, and scope creep.
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
                <h3 className="text-base font-bold text-[#0B0F19]">{step.title}</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DELIVERABLES CHECKLIST & TECH STACK */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Deliverables Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
                  TANGIBLE OUTPUTS
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B0F19] mt-1">
                  Guaranteed Handover Deliverables
                </h3>
              </div>
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
                We build with industry-standard, fully supported enterprise tooling—never deprecated libraries or fragile hacks.
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
