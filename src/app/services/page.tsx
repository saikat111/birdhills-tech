import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Globe,
  TrendingUp,
  MapPin,
  Sparkles,
  Bot,
  Workflow,
  Palette,
  BarChart3,
  Calendar,
  MessageCircle,
  CheckCircle2,
  Server,
  Zap,
  Lock,
  Clock,
  Compass,
  HelpCircle,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import FaqAccordion from "@/components/common/FaqAccordion";

export const metadata: Metadata = {
  title: "Digital Services & Practice Areas | Bird Hills Tech Dubai",
  description:
    "Explore Bird Hills Tech's 9 core digital practices: Web Development, Domain & Hosting, Digital Marketing, Google Business Profile & Local SEO, AI SEO & Search, AI Automation, CRM & Marketing Automation, Branding & Creative, and Analytics & CRO.",
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
      desc: "Bespoke corporate websites and mission-critical web applications built on modern Next.js architecture engineered for maximum performance.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
      icon: Code2,
      price: "From AED 4,500 ($1,225)",
      subServices: [
        "Business Websites",
        "WordPress",
        "eCommerce",
        "Landing Pages",
        "Custom Development",
        "Website Redesign",
        "Website Support",
      ],
    },
    {
      title: "Domain & Hosting",
      slug: "/hosting",
      category: "Infrastructure",
      desc: "Accredited UAE .ae and global domain registration paired with pure NVMe GCC edge cloud servers and corporate business email.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
      icon: Globe,
      price: "From AED 36/mo ($9.99)",
      subServices: [
        "Domain Registration",
        "Domain Transfer & Management",
        "Web Hosting",
        "Business Email",
        "SSL & Website Security",
        "DNS Management",
        "Website Migration",
        "Backup & Maintenance",
      ],
    },
    {
      title: "Digital Marketing",
      slug: "/services/digital-marketing",
      category: "Growth",
      desc: "Data-driven commercial campaigns across Google Ads, Meta, and LinkedIn targeting verified decision-makers across the UAE and GCC.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
      icon: TrendingUp,
      price: "From AED 4,500/mo ($1,225)",
      subServices: [
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Remarketing",
        "Lead Generation",
      ],
    },
    {
      title: "Google Business Profile & Local SEO",
      slug: "/services/google-business-profile-local-seo",
      category: "Local Dominance",
      desc: "Rank in Dubai Google Maps 3-Pack, verify your Google Business Profile, capture high-intent localized calls, and scale customer reviews.",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=85",
      icon: MapPin,
      price: "From AED 1,500/mo ($400)",
      subServices: [
        "GBP Creation",
        "GBP Verification Assistance",
        "GBP Profile Optimization",
        "Google Maps Optimization",
        "Local SEO",
        "Local Keyword Optimization",
        "Review Management Strategy",
        "Local Citations",
        "GBP Posts & Content",
        "Multi-Location Management",
      ],
    },
    {
      title: "AI SEO & Search",
      slug: "/services/ai-seo-search",
      category: "Future Search",
      desc: "AEO and GEO optimization engineered so Perplexity AI, ChatGPT Search, and Google AI Overviews cite and recommend your brand.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=85",
      icon: Sparkles,
      price: "From AED 2,200/mo ($600)",
      subServices: [
        "Technical SEO",
        "On-Page SEO",
        "AEO (Answer Engine Optimization)",
        "GEO (Generative Engine Optimization)",
        "AI Search Optimization",
        "Semantic SEO",
        "Programmatic SEO",
        "AI Content Strategy",
        "SEO Automation",
      ],
    },
    {
      title: "AI Automation",
      slug: "/services/ai-automation",
      category: "Automation",
      desc: "Deploy autonomous conversational agents, 24/7 WhatsApp customer service bots, and n8n workflow pipelines that eradicate manual tasks.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
      icon: Bot,
      price: "From AED 3,500 ($950)",
      subServices: [
        "AI Agents",
        "AI Chatbots",
        "AI Workflow Automation",
        "WhatsApp Automation",
        "AI Sales Automation",
        "AI Customer Support",
        "AI Lead Qualification",
        "AI Content Automation",
        "Business Process Automation",
        "n8n Automation",
      ],
    },
    {
      title: "CRM & Marketing Automation",
      slug: "/services/crm-marketing-automation",
      category: "Operations",
      desc: "Centralize your sales pipeline with HubSpot, Zoho, automated lead routing, instant WhatsApp lead follow-ups, and calendar bookings.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      icon: Workflow,
      price: "From AED 2,800 ($760)",
      subServices: [
        "CRM Setup",
        "Lead Management",
        "Lead Automation",
        "Lead Routing",
        "Email Automation",
        "WhatsApp Automation",
        "Sales Pipeline Automation",
        "Appointment Automation",
        "CRM Integrations",
      ],
    },
    {
      title: "Branding & Creative",
      slug: "/services/branding-creative",
      category: "Creative",
      desc: "Prestigious corporate identity design, bilingual English & Arabic typography, interactive UI/UX systems, and high-conversion ad creatives.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85",
      icon: Palette,
      price: "From AED 3,200 ($870)",
      subServices: [
        "Brand Identity",
        "Logo Design",
        "UI/UX Design",
        "Ad Creative",
        "Social Media Design",
        "Marketing Graphics",
      ],
    },
    {
      title: "Analytics & CRO",
      slug: "/services/analytics-cro",
      category: "Data & Insights",
      desc: "Fix tracking blindspots with server-side GTM, Meta CAPI, GA4 ecommerce tracking, executive Looker dashboards, and conversion funnels.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      icon: BarChart3,
      price: "From AED 1,800/mo ($490)",
      subServices: [
        "Google Analytics",
        "Google Tag Manager",
        "Conversion Tracking",
        "Meta Pixel & CAPI",
        "Conversion Optimization",
        "Lead Attribution",
        "Marketing Dashboards",
        "Reporting & Analytics",
      ],
    },
  ];

  const deliveryPhases = [
    {
      step: "01",
      title: "Technical Audit & Commercial Alignment",
      desc: "We analyze your UAE market presence, audience intent, technical bottlenecks, and commercial goals to define measurable milestones.",
      timeframe: "Week 1",
    },
    {
      step: "02",
      title: "Architecture & System Specification",
      desc: "Our senior architects map data pipelines, security protocols, user flows, and tech stacks before code is written.",
      timeframe: "Week 2",
    },
    {
      step: "03",
      title: "High-Fidelity Prototyping & Design",
      desc: "Interactive Figma prototypes reflecting Dubai corporate prestige, verified against real users and mobile form factors.",
      timeframe: "Weeks 2 - 3",
    },
    {
      step: "04",
      title: "Agile Development & Integrations",
      desc: "Clean Next.js 16, TypeScript, n8n automations, and CRM synchronization built in rapid two-week testable sprints.",
      timeframe: "Weeks 3 - 6",
    },
    {
      step: "05",
      title: "Launch, Tracking & Continuous SLA",
      desc: "Zero-downtime deployment, GA4/CAPI verification, Google indexing, and ongoing technical maintenance guarantees.",
      timeframe: "Week 6+",
    },
  ];

  const techStackGroups = [
    {
      category: "Frontend & Web Apps",
      tools: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Turbopack"],
    },
    {
      category: "Backend & Data Layers",
      tools: ["Node.js / Bun", "Prisma ORM", "PostgreSQL", "SQLite / Cloudflare D1", "Redis Cache", "REST / GraphQL"],
    },
    {
      category: "Cloud, Domain & Hosting",
      tools: ["Pure NVMe Edge Nodes", "AWS & Cloudflare Enterprise", ".ae UAE Accredited Registry", "Docker Containers", "DIFC Compliance"],
    },
    {
      category: "AI, Automation & CRM",
      tools: ["Google Gemini & OpenAI APIs", "n8n Automation Pipelines", "WhatsApp Cloud API", "HubSpot & Zoho CRM", "Meta CAPI & GA4"],
    },
  ];

  const serviceFaqs = [
    {
      q: "Do we get full ownership of the source code, design assets, and configurations?",
      a: "Yes, 100%. Upon project completion and final handover, Bird Hills Tech transfers full intellectual property (IP), GitHub repositories, Figma source files, and database setups directly to your company.",
    },
    {
      q: "How are projects priced and invoiced?",
      a: "All projects are priced transparently in USD ($) and AED (fixed milestone or monthly retainer). We accept bank wire transfers in the UAE, corporate credit cards, and regional payment arrangements with structured milestone deliverables.",
    },
    {
      q: "Can you manage our domain, hosting, email, and website under one roof?",
      a: "Yes. As a licensed Dubai technology provider, we offer accredited .ae domain registration, pure NVMe cloud hosting, branded corporate email, SSL security, and ongoing technical maintenance as an all-in-one partner.",
    },
    {
      q: "What kind of post-launch warranty and SLA support do you provide?",
      a: "Every project includes 30 to 90 days of comprehensive warranty covering bug resolution, performance monitoring, and security patching. We also offer dedicated monthly SLA retainers with guaranteed response times.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. LUXURY DUBAI HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        {/* Full-Bleed Corporate Photography Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
            alt="Dubai business district and engineering skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Luminous Gold & Obsidian Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/85 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
                <Sparkles size={13} className="text-[#D4AF37]" />
                9 CORE PRACTICE DISCIPLINES · DUBAI, UAE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Precision technology, bold creative & verified commercial growth.
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                From custom software and domain hosting to AI search, automated pipelines, and performance marketing—we build market-dominating operations in Dubai and the GCC.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold shadow-lg shadow-[#C59B27]/30 hover:brightness-105 transition-all"
                >
                  <Calendar size={15} />
                  <span>Book Technical Consultation</span>
                </Link>
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold backdrop-blur-md transition-colors"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Card: Practice Summary */}
            <div className="lg:col-span-4 bg-[#0B0F19]/90 backdrop-blur-xl border border-[#C59B27]/30 p-7 rounded-3xl shadow-2xl space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#D4AF37] flex items-center justify-between">
                <span>Agency Credentials</span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">Total Practice Areas</span>
                  <span className="font-bold text-white">9 Specialized Disciplines</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">Performance Standard</span>
                  <span className="font-bold text-[#D4AF37]">99+ Lighthouse Score</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-300">Project Governance</span>
                  <span className="font-bold text-white">Full Client Asset Transfer</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Performance Guarantee</span>
                  <span className="font-bold text-[#D4AF37]">99.99% Uptime &amp; SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOG (ATTRACTIVE CARDS WITH DIRECT WHATSAPP & BOOKING CTAS) */}
      <section className="py-24 bg-[#FAF8F5]" id="all-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-[#C59B27]">
                FULL-SERVICE DIGITAL AGENCY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-2">
                All 9 Core Service Disciplines
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#667085] max-w-md">
              Every discipline is executed by specialized senior engineers, creatives, and growth strategists under direct director oversight.
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
                  className="bg-white rounded-3xl border border-[#E4E7EC] hover:border-[#C59B27]/50 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/95 via-[#070B14]/40 to-transparent" />

                      {/* Overlaid Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0B0F19] shadow-sm flex items-center gap-1.5">
                          <Icon size={12} className="text-[#C59B27]" />
                          {service.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40 shadow-sm">
                          {service.price}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content & Sub-Services List */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {service.desc}
                      </p>

                      {/* Sub-Services Tags */}
                      <div className="pt-2 border-t border-slate-100">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#C59B27] mb-2">
                          Capabilities & Sub-Services:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subServices.map((sub) => (
                            <span
                              key={sub}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF8F5] text-slate-700 border border-slate-200 group-hover:border-[#C59B27]/30 transition-colors"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Buttons on EVERY Card */}
                  <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href={`/book-a-meeting?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#070B14] hover:bg-[#1A2234] text-white text-xs font-bold transition-colors border border-slate-800"
                      >
                        <Calendar size={13} className="text-[#D4AF37]" />
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
                      className="w-full text-center block text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] py-1 transition-colors"
                    >
                      Deep-Dive Methodology & Deliverables →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 5-PHASE COMMERCIAL DELIVERY BLUEPRINT */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-extrabold tracking-wider uppercase text-[#C59B27]">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-2">
              Our 5-Stage Delivery Blueprint
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              From technical discovery to global edge deployment, every engagement follows strict milestone sign-offs with zero ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.step}
                className="relative p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] flex flex-col justify-between space-y-4 hover:border-[#C59B27]/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-[#C59B27] font-mono">
                      {phase.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#667085] bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B0F19] leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-[#C59B27]">
                  <CheckCircle2 size={12} />
                  <span>Deliverable Sign-Off</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODERN TECH STACK BY PRACTICE AREA */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-extrabold tracking-wider uppercase text-[#C59B27]">
              DUBAI ENTERPRISE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-2">
              Technology Stack by Discipline
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              We engineer with cutting-edge, battle-tested modern technology stacks. No obsolete themes or sluggish plugins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackGroups.map((group) => (
              <div
                key={group.category}
                className="p-7 rounded-2xl bg-white border border-[#E4E7EC] space-y-4 shadow-2xs hover:shadow-md hover:border-[#C59B27]/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-[#C59B27]" />
                  <h3 className="text-sm font-bold text-[#0B0F19]">{group.category}</h3>
                </div>
                <div className="space-y-2">
                  {group.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 text-xs font-medium text-[#475467] py-1 border-b border-slate-100 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING COMMITMENTS & SLA STANDARDS */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-extrabold tracking-wider uppercase text-[#C59B27]">
              THE BIRD HILLS DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-2">
              Our 4 Engineering Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                <Zap size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">High-Speed Performance</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Engineered for optimal speed and responsiveness, ensuring high conversion rates and seamless user experiences.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                <Lock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">Zero-Trust Security</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                HTTPS, parameterized queries, CSRF defenses, and regional DIFC data sovereignty compliant architecture from day one.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">Guaranteed SLAs</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Clear contractual milestone dates, weekly staging reviews, and responsive post-launch bug resolution guarantees.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                <Compass size={22} />
              </div>
              <h3 className="text-base font-bold text-[#0B0F19]">Full IP Ownership</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                100% of the source code, design systems, and database configurations belong to you upon final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPREHENSIVE SERVICES FAQ ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={serviceFaqs.map((f) => ({
          question: f.q,
          answer: f.a,
          category: "Services",
        }))}
        title="Frequently Asked Questions"
        eyebrow="COMMERCIAL CLARITY & TERMS"
        description="Clear answers regarding our 9 practice areas, IP ownership transfer, billing milestones, and ongoing SLA maintenance."
        theme="light"
        includeSchema={true}
      />

      {/* 7. FINAL CONVERSION CTA */}
      <FinalCtaSection />
    </div>
  );
}
