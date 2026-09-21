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
  Server,
  FileCheck,
  HelpCircle,
  ChevronRight,
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
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      icon: Layers,
      price: "From AED 42,000",
      features: [
        "Complex Relational Data Modeling & PostgreSQL",
        "Granular Role-Based Access Control (RBAC)",
        "Real-Time Analytics & Event Pipeline",
        "DIFC & Regional Compliance Ready",
      ],
    },
    {
      title: "E-commerce Solutions",
      slug: "/services/ecommerce",
      category: "Technology",
      desc: "High-converting online flagships and headless storefronts integrated with regional GCC payment gateways.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=85",
      icon: ShoppingBag,
      price: "From AED 28,000",
      features: [
        "Headless Shopify & Custom Cart Architecture",
        "Stripe, Tabby, Tamara & Network International",
        "High-Volume Inventory & ERP Synchronization",
        "Mobile-First Frictionless 1-Click Checkout",
      ],
    },
    {
      title: "UI/UX Experience Design",
      slug: "/services/ui-ux-design",
      category: "Creative",
      desc: "Deep customer research, wireframing, and interactive design systems built for high retention and seamless usability.",
      image:
        "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=85",
      icon: Palette,
      price: "From AED 16,000",
      features: [
        "Interactive High-Fidelity Figma Prototypes",
        "Enterprise Design System & Token Libraries",
        "Bilingual English & Arabic UX Hierarchy",
        "Quantitative User Testing & Usability Auditing",
      ],
    },
    {
      title: "Branding & Corporate Identity",
      slug: "/services/branding",
      category: "Creative",
      desc: "Prestigious brand identities, typography guidelines, and visual positioning engineered for Dubai leadership.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
      icon: Sparkles,
      price: "From AED 14,000",
      features: [
        "Corporate Vector Logo & Brand Guidelines",
        "Editorial Typography & High-End Color Theory",
        "Executive Pitch Decks & Digital Collateral",
        "Bilingual Middle East Cultural Nuance",
      ],
    },
    {
      title: "Performance Digital Marketing",
      slug: "/services/digital-marketing",
      category: "Growth",
      desc: "Data-driven performance campaigns on Google and LinkedIn focused on generating verified commercial pipeline.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
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
        "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=85",
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
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85",
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

  const deliveryPhases = [
    {
      step: "01",
      title: "Discovery & Strategic Alignment",
      desc: "We analyze your business model, target audience in the UAE, competitive landscape, and technical constraints to define clear ROI goals.",
      timeframe: "Week 1",
    },
    {
      step: "02",
      title: "Architecture & System Specification",
      desc: "Our senior architects design the database schemas, API integrations, security protocols, and user flows before writing a single line of code.",
      timeframe: "Week 2",
    },
    {
      step: "03",
      title: "High-Fidelity UI/UX Prototyping",
      desc: "We create interactive Figma prototypes reflecting your corporate prestige, verified against real user interactions and device form-factors.",
      timeframe: "Weeks 2 - 3",
    },
    {
      step: "04",
      title: "Rapid Agile Development & Testing",
      desc: "Next.js 16 and TypeScript engineering in rapid two-week sprints. Zero code bloat, clean git workflows, and weekly live staging demos.",
      timeframe: "Weeks 3 - 6",
    },
    {
      step: "05",
      title: "Production Launch & Continuous SLA",
      desc: "Zero-downtime deployment to global edge infrastructure, Google indexing, security audit, and 30-90 days of guaranteed SLA warranty.",
      timeframe: "Week 6+",
    },
  ];

  const techStackGroups = [
    {
      category: "Frontend Engineering",
      tools: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Turbopack"],
    },
    {
      category: "Backend & Database",
      tools: ["Node.js / Bun", "Prisma ORM", "PostgreSQL", "SQLite / Cloudflare D1", "Redis Cache", "REST / GraphQL"],
    },
    {
      category: "Cloud Infrastructure",
      tools: ["Vercel Edge Network", "AWS (ECS / S3)", "Cloudflare Enterprise", "Docker Containers", "GitHub CI/CD"],
    },
    {
      category: "AI & Growth Marketing",
      tools: ["Google Gemini & OpenAI APIs", "GA4 & Meta CAPI", "LinkedIn Insight Tag", "Technical Schema.org", "Stripe & Tabby"],
    },
  ];

  const serviceFaqs = [
    {
      q: "Do we get full ownership of the source code and design files?",
      a: "Yes, 100%. Unlike agencies that lock clients into proprietary systems or monthly platform rent, Bird Hills Tech transfers complete intellectual property (IP), GitHub repositories, and Figma source files upon project completion.",
    },
    {
      q: "How long does a typical corporate website or application take?",
      a: "Standard corporate web platforms are delivered in 2 to 4 weeks. Complex bespoke web applications and SaaS portals typically require 6 to 10 weeks depending on database modeling and third-party integrations.",
    },
    {
      q: "Can we manage the content in-house after launch?",
      a: "Absolutely. Every platform comes integrated with a tailored, modern CMS (Headless or Custom Admin Panel) that allows your marketing team to edit text, upload media, publish articles, and manage leads without needing a developer.",
    },
    {
      q: "Do you offer post-launch maintenance and technical SLA support?",
      a: "Yes. Every project includes a 30 to 90-day comprehensive technical warranty. We also offer monthly technology and growth retainers covering security updates, server monitoring, speed optimization, and ongoing feature rollouts.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VIBRANT HIGH-VISIBILITY HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-[#070D1B] text-white overflow-hidden">
        {/* Full-Bleed High-Res Corporate Photography Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
            alt="Dubai business district and engineering skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Luminous multi-layer gradient allowing clear visuality of the Dubai skyline while ensuring crisp typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/95 via-[#070D1B]/75 to-[#070D1B]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/90 via-transparent to-[#070D1B]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#38BDF8] uppercase bg-white/10 border border-white/15 backdrop-blur-md">
                <Sparkles size={13} className="text-[#38BDF8]" />
                COMPREHENSIVE CAPABILITIES · DUBAI, UAE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Precision engineering, creative mastery & commercial growth.
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                We combine web development, bespoke software, brand systems, and performance marketing to build market-dominating digital operations in Dubai and the GCC.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#1D68BD] text-white text-xs font-bold shadow-lg shadow-[#1D68BD]/30 hover:bg-[#155196] transition-all"
                >
                  <Calendar size={15} />
                  Schedule Technical Consultation
                </Link>
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold backdrop-blur-md transition-colors"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right Card: Quick Practice Summary */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                At a Glance
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">Core Disciplines</span>
                  <span className="font-bold text-white">8 Practice Areas</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">LCP Speed Guarantee</span>
                  <span className="font-bold text-[#25D366]">&lt; 0.8s Core Web Vitals</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">Source Code Ownership</span>
                  <span className="font-bold text-white">100% Client IP</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Location</span>
                  <span className="font-bold text-white">Deira, Dubai, UAE</span>
                </div>
              </div>
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
                    <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
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

      {/* 3. NEW SECTION: 5-PHASE COMMERCIAL DELIVERY BLUEPRINT */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              EXECUTION EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Our 5-Stage Delivery Blueprint
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              From the initial technical audit to post-launch SLA support, our structured workflow eliminates ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.step}
                className="relative p-6 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] flex flex-col justify-between space-y-4 hover:border-[#1D68BD]/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-[#1D68BD] font-mono">
                      {phase.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#667085] bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1730] leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-[#1D68BD]">
                  <CheckCircle2 size={12} />
                  <span>Deliverable Sign-Off</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: MODERN TECH STACK BY PRACTICE AREA */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              ENTERPRISE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Technology Stack by Discipline
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              We do not use bloated page-builders or obsolete stacks. Every system is built on modern, battle-tested technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackGroups.map((group) => (
              <div
                key={group.category}
                className="p-7 rounded-2xl bg-white border border-[#E4E7EC] space-y-4 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-[#1D68BD]" />
                  <h3 className="text-sm font-bold text-[#0B1730]">{group.category}</h3>
                </div>
                <div className="space-y-2">
                  {group.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 text-xs font-medium text-[#475467] py-1 border-b border-slate-100 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D68BD]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING COMMITMENTS & SLA STANDARDS SECTION */}
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
                Core Web Vitals guaranteed. Sub-0.8s Largest Contentful Paint ensures high conversions and organic search dominance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Lock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">Zero-Trust Security</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                HTTPS, parameterized queries, CSRF defenses, and DIFC data sovereignty compliant architecture from day one.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">Guaranteed SLAs</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Clear contractual milestone dates, weekly staging reviews, and responsive post-launch bug resolution guarantees.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center">
                <Compass size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B1730]">Full IP Ownership</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                100% of the source code, design systems, and database configurations belong to you upon final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW SECTION: COMPREHENSIVE SERVICES FAQ ACCORDION */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E7EC] shadow-2xs space-y-2"
              >
                <h3 className="text-base font-bold text-[#0B1730] flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION CTA */}
      <FinalCtaSection />
    </div>
  );
}
