import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  Sparkles,
  HelpCircle,
  Code2,
  Layers,
  ShoppingBag,
  Palette,
  TrendingUp,
  Search,
  Cpu,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

// Service specific problem/approach database
const serviceDetails: Record<
  string,
  {
    problem: string;
    approach: string;
    tools: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  "web-development": {
    problem:
      "Most corporate websites in the UAE suffer from slow page loads, bloated WordPress plugins, and poor mobile responsiveness. In a competitive market like Dubai, a slow website loses high-intent prospects within 3 seconds and undermines corporate credibility.",
    approach:
      "Bird Hills Tech architects custom digital platforms using Next.js, TypeScript, and modern headless architectures. We engineer every page with a sub-second Core Web Vitals budget, strict accessibility standards, and clean, modular code that your team fully owns.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel / AWS"],
    faqs: [
      {
        q: "Why choose custom Next.js web development over WordPress or website builders?",
        a: "Next.js offers unbeatable speed, enterprise-grade security, and unlimited architectural flexibility. Unlike template builders that slow down with plugins, custom code guarantees sub-second page loads, higher Google rankings, and complete ownership of your intellectual property.",
      },
      {
        q: "How long does a corporate website development project take?",
        a: "Standard enterprise corporate websites typically require 4 to 8 weeks from discovery to deployment. Complex portals with custom API integrations and multi-language support typically require 8 to 12 weeks.",
      },
      {
        q: "Do you support bilingual English and Arabic websites?",
        a: "Yes. All our web platforms support true RTL (Right-to-Left) typography, localized UI layouts, and seamless bilingual content switching tailored for the UAE and GCC markets.",
      },
    ],
  },
  "web-applications": {
    problem:
      "Growing companies often rely on fragmented off-the-shelf software and manual spreadsheets that do not communicate with each other, creating operational silos, security vulnerabilities, and human error.",
    approach:
      "We design and build bespoke web applications and SaaS platforms that mirror your exact business processes. From multi-tenant architecture to role-based access control and real-time reporting, our systems are built for enterprise scalability.",
    tools: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Redis", "REST & GraphQL APIs"],
    faqs: [
      {
        q: "What types of web applications do you build?",
        a: "We engineer client portals, internal ERP and CRM systems, B2B procurement engines, document management vaults, and SaaS platforms for regional and international businesses.",
      },
      {
        q: "How do you ensure data security and compliance?",
        a: "We follow industry-standard zero-trust practices including end-to-end TLS encryption, secure authentication (JWT/OAuth), role-based permissions, automated vulnerability scans, and regional data protection adherence.",
      },
    ],
  },
  ecommerce: {
    problem:
      "Generic e-commerce stores fail to convert high-ticket Middle Eastern shoppers because they lack localized GCC payment methods (Apple Pay, Tabby, Tamara), have clunky checkout experiences, and fail to load quickly on mobile networks.",
    approach:
      "We build conversion-obsessed online stores with frictionless multi-step checkouts, full integration with regional payment gateways, real-time inventory synchronization, and sub-second page transitions.",
    tools: ["Shopify Plus", "Next.js Commerce", "Stripe", "Tabby", "Tamara", "Telr", "Klaviyo"],
    faqs: [
      {
        q: "Can you integrate Buy Now Pay Later (Tabby / Tamara) and Apple Pay?",
        a: "Yes, seamless integration of Tabby, Tamara, Apple Pay, and local UAE credit/debit card processors is standard across all our e-commerce builds.",
      },
      {
        q: "Can the online store connect to our physical warehouse POS or ERP?",
        a: "Absolutely. We develop custom webhooks and bidirectional API sync for real-time inventory, order fulfillment, and accounting automation.",
      },
    ],
  },
  "ui-ux-design": {
    problem:
      "Many digital products are visually cluttered and counter-intuitive, leading to user confusion, high bounce rates, and lost revenue opportunities.",
    approach:
      "Our human-centered UI/UX design process combines user behavioral research, clear information architecture, high-fidelity Figma prototyping, and comprehensive design systems to ensure effortless navigation and high conversion.",
    tools: ["Figma", "Design Systems", "Prototyping", "UserTesting", "WCAG 2.1 AA", "Micro-interactions"],
    faqs: [
      {
        q: "What deliverables are included in a UI/UX project?",
        a: "You receive user journey maps, wireframes, high-fidelity clickable Figma prototypes, a comprehensive design system with component states, and complete developer handoff documentation.",
      },
    ],
  },
  branding: {
    problem:
      "In Dubai's crowded marketplace, companies with weak or outdated visual branding struggle to command premium pricing and find it difficult to gain instant credibility with enterprise clients and investors.",
    approach:
      "We build prestigious, memorable corporate brand identities. From monogram and logo systems to color theory, typography pairings, and digital brand guidelines, we position your business as an authoritative market leader.",
    tools: ["Brand Strategy", "Vector Logo Systems", "Typography Design", "Brand Guidelines", "Collateral"],
    faqs: [
      {
        q: "What does the branding package include?",
        a: "Complete corporate logo system (primary, secondary, monochrome, favicon), typography hierarchy, color palette, brand guidelines manual, business cards, email signatures, and presentation deck templates.",
      },
    ],
  },
  "digital-marketing": {
    problem:
      "Companies burn tens of thousands of dirhams on generic agency retainers that report meaningless impressions and clicks without generating actual qualified sales meetings.",
    approach:
      "Our growth methodology targets high-intent commercial buyers on Google Search, LinkedIn B2B, and Meta. Every campaign is monitored through closed-loop analytics tied directly to Cost Per Qualified Lead (CPQL) and sales pipeline.",
    tools: ["Google Ads", "LinkedIn Ads", "Meta Business Suite", "Google Analytics 4", "Looker Studio"],
    faqs: [
      {
        q: "How do you measure marketing success?",
        a: "We measure success by qualified inquiries, scheduled business meetings, and customer acquisition cost (CAC)—not vanity impressions or generic page views.",
      },
    ],
  },
  seo: {
    problem:
      "Being invisible on Google for high-intent business searches in Dubai allows competitors to capture the highest-value commercial leads every single day.",
    approach:
      "We implement an aggressive, technical SEO architecture: solving Core Web Vitals bottlenecks, structuring commercial keyword topic clusters, building authoritative digital citations, and dominating local Dubai map pack rankings.",
    tools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Schema Markup"],
    faqs: [
      {
        q: "How long does it take to see rankings improve in Dubai?",
        a: "Technical fixes often generate visible traction in 30 to 60 days. Highly competitive commercial terms generally achieve page 1 authority in 3 to 6 months of systematic optimization.",
      },
    ],
  },
  "ai-solutions": {
    problem:
      "Businesses want to leverage AI but get trapped in generic hype tools that don't integrate with their operations or compromise confidential company data.",
    approach:
      "We build custom, private conversational agents, automated lead qualification pipelines, and internal retrieval-augmented generation (RAG) search systems that solve concrete operational friction points.",
    tools: ["OpenAI API", "Google Gemini", "LangChain", "Vector Databases", "WhatsApp Cloud API", "Python"],
    faqs: [
      {
        q: "Is our proprietary company data kept secure and private?",
        a: "Yes. We implement private zero-data-retention APIs and enterprise vector architectures ensuring your proprietary data is never used to train public models.",
      },
    ],
  },
};

const serviceImagery: Record<
  string,
  {
    image: string;
    priceUsd: string;
    timeline: string;
  }
> = {
  "web-development": {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$4,950",
    timeline: "2-4 Weeks",
  },
  "web-applications": {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$9,500",
    timeline: "4-8 Weeks",
  },
  ecommerce: {
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$6,800",
    timeline: "3-6 Weeks",
  },
  "ui-ux-design": {
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$3,950",
    timeline: "2-3 Weeks",
  },
  branding: {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$3,500",
    timeline: "2-3 Weeks",
  },
  "digital-marketing": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$1,950/mo",
    timeline: "Monthly Sprint",
  },
  seo: {
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$1,650/mo",
    timeline: "Monthly Sprint",
  },
  "ai-solutions": {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$4,200",
    timeline: "3-5 Weeks",
  },
};

export async function generateStaticParams() {
  const services = await prisma.service.findMany({ select: { slug: true } });
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seoTitle || `${service.title} in Dubai`,
    description: service.seoDescription || service.shortDesc,
    alternates: {
      canonical: `https://birdhillstech.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await prisma.service.findUnique({
    where: { slug },
  });

  if (!service) {
    notFound();
  }

  const imagery = serviceImagery[slug] || {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$4,950",
    timeline: "2-4 Weeks",
  };

  const detail = serviceDetails[slug] || serviceDetails["web-development"];

  // Parse JSON data safely
  let features: string[] = [];
  let processSteps: { step: string; title: string; desc: string }[] = [];
  let benefits: string[] = [];

  try {
    features = JSON.parse(service.featuresJson || "[]");
  } catch {
    features = [];
  }

  try {
    processSteps = JSON.parse(service.processJson || "[]");
  } catch {
    processSteps = [];
  }

  try {
    benefits = JSON.parse(service.benefitsJson || "[]");
  } catch {
    benefits = ["Rapid time-to-market", "Measurable commercial ROI", "Zero platform lock-in"];
  }

  // Fetch 2 related projects
  const relatedProjects = await prisma.project.findMany({
    where: { status: "published" },
    take: 2,
  });

  const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20discussing%20your%20${encodeURIComponent(
    service.title
  )}%20services%20(Starting%20${encodeURIComponent(imagery.priceUsd)}).`;

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VIBRANT HIGH-VISIBILITY HERO WITH PHOTOGRAPHY */}
      <section className="relative py-20 md:py-32 bg-[#070D1B] text-white border-b border-white/10 overflow-hidden">
        {/* Full-Bleed High-Res Service Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagery.image}
            alt={`${service.title} engineering in Dubai`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/95 via-[#070D1B]/80 to-[#070D1B]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/90 via-transparent to-[#070D1B]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#38BDF8] font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1D68BD]/30 text-[#38BDF8] border border-[#38BDF8]/40">
                  <Sparkles size={13} />
                  {service.category} EXCELLENCE
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
                  {imagery.priceUsd} USD
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-slate-300 bg-white/10 border border-white/15">
                  Timeline: {imagery.timeline}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                {service.fullDesc}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <Link
                  href={`/book-a-meeting?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1D68BD] text-white text-xs font-bold shadow-lg shadow-[#1D68BD]/30 hover:bg-[#155196] transition-all"
                >
                  <Calendar size={15} />
                  Schedule Technical Briefing
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <span>Chat on WhatsApp (+971 52 440 5785)</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Card: Quick Specs Overview */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 p-7 rounded-3xl shadow-2xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Practice Specifications
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Starting Investment</span>
                  <span className="font-bold text-[#25D366] text-sm">{imagery.priceUsd}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Typical Turnaround</span>
                  <span className="font-bold text-white">{imagery.timeline}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Performance Guarantee</span>
                  <span className="font-bold text-white">&lt; 0.8s LCP</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Code & IP Rights</span>
                  <span className="font-bold text-white">100% Client Ownership</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Direct Senior Architect</span>
                  <span className="font-bold text-white">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & 3. OUR APPROACH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-rose-600">
                THE COMMERCIAL CHALLENGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
                Why conventional solutions fall short
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {detail.problem}
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1730] text-white space-y-4 border border-slate-800">
              <span className="text-xs font-bold tracking-wider uppercase text-[#38BDF8]">
                THE BIRD HILLS APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How we engineer measurable advantage
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {detail.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES & DELIVERABLES */}
      <section className="py-20 bg-[#F7F9FC] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              DELIVERABLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-1">
              Core Capabilities & Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat}
                className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FE] text-[#1D68BD] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1730] leading-snug">{feat}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS ROADMAP */}
      {processSteps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
                METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-1">
                Execution Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#F7F9FC] p-6 rounded-2xl border border-[#E4E7EC] space-y-3"
                >
                  <div className="text-2xl font-mono font-extrabold text-[#1D68BD]">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1730]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TECHNOLOGY & TOOLS */}
      <section className="py-16 bg-[#F7F9FC] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#1D68BD] uppercase tracking-wider">
                TECH STACK
              </span>
              <h3 className="text-xl font-bold text-[#0B1730] mt-0.5">
                Technologies & Tools We Leverage
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {detail.tools.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#0B1730] shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL BENEFITS */}
      {benefits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
                ROI & ADVANTAGE
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B1730] tracking-tight mt-1">
                Measurable Business Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={b}
                  className="bg-[#EBF3FE]/60 p-6 rounded-2xl border border-[#BFDBFE] space-y-2"
                >
                  <div className="text-xs font-bold text-[#1D68BD] uppercase">
                    Advantage 0{idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#0B1730] leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQS */}
      <section className="py-20 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1730]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-2"
              >
                <h3 className="text-base font-bold text-[#0B1730] flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED WORK */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white border-t border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-bold text-[#1D68BD] uppercase">PORTFOLIO</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-1">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-bold text-[#1D68BD] hover:underline inline-flex items-center gap-1"
              >
                All Projects <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="group bg-[#F7F9FC] rounded-2xl border border-[#E4E7EC] overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all"
                >
                  <div className="relative sm:w-1/2 aspect-[16/10] sm:aspect-auto">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#1D68BD]">
                        {p.industry}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1730] mt-1 mb-2 group-hover:text-[#1D68BD] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#667085] line-clamp-2">{p.shortDesc}</p>
                    </div>
                    <Link
                      href={`/work/${p.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#1D68BD]"
                    >
                      Read Case Study <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. CTA */}
      <FinalCtaSection />
    </div>
  );
}
