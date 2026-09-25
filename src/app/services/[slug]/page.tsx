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
  Globe,
  TrendingUp,
  MapPin,
  Bot,
  Workflow,
  Palette,
  BarChart3,
  ChevronRight,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

// Service specific problem/approach database for all 9 official services
const serviceDetails: Record<
  string,
  {
    problem: string;
    approach: string;
    tools: string[];
    subServiceDescriptions: Record<string, string>;
    faqs: { q: string; a: string }[];
  }
> = {
  "web-development": {
    problem:
      "Most corporate websites in the UAE suffer from slow page loads, bloated WordPress plugins, and poor mobile responsiveness. In Dubai's high-velocity market, a slow website loses high-intent prospects within 3 seconds and undermines corporate credibility.",
    approach:
      "Bird Hills Tech architects bespoke corporate web platforms using Next.js 16, TypeScript, and modern headless architectures. We engineer every page with a sub-second Core Web Vitals budget (< 0.8s LCP), strict accessibility standards, and clean, modular code that your team 100% owns.",
    tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "PostgreSQL", "Vercel / AWS"],
    subServiceDescriptions: {
      "Business Websites": "Prestigious corporate web presences tailored for Dubai holding groups, firms, and enterprises.",
      "WordPress": "Hardened, edge-cached headless or custom-themed WordPress builds with zero plugin bloat.",
      "eCommerce": "High-conversion online storefronts integrated with UAE payment gateways (Stripe, Tabby, Tamara).",
      "Landing Pages": "Sub-second PPC landing experiences engineered for maximum lead capture and high ad quality scores.",
      "Custom Development": "Bespoke SaaS platforms, client portals, and secure internal software tailored to your workflow.",
      "Website Redesign": "Complete modernization of legacy websites to boost speed, mobile UX, and organic conversions.",
      "Website Support": "Dedicated 24/7 technical SLAs, security patching, uptime monitoring, and ongoing feature rollouts.",
    },
    faqs: [
      {
        q: "Why choose custom Next.js web development over WordPress or template builders?",
        a: "Next.js offers unbeatable speed, enterprise-grade security, and unlimited architectural flexibility. Unlike template builders that slow down with plugins, custom code guarantees sub-second page loads, higher Google rankings, and complete ownership of your intellectual property.",
      },
      {
        q: "How long does a corporate website development project take?",
        a: "Standard enterprise corporate websites typically require 2 to 4 weeks from discovery to deployment. Complex portals with custom API integrations and multi-language support typically require 4 to 8 weeks.",
      },
      {
        q: "Do you support bilingual English and Arabic websites?",
        a: "Yes. All our web platforms support true RTL (Right-to-Left) typography, localized UI layouts, and seamless bilingual content switching tailored for the UAE and GCC markets.",
      },
    ],
  },
  "domain-hosting": {
    problem:
      "Businesses in the Middle East often suffer from slow offshore hosting with high server latency (200ms+), unreliable email deliverability, and cumbersome domain management across multiple disconnected registrars.",
    approach:
      "We provide low-latency GCC edge cloud hosting powered by pure NVMe enterprise SSDs, direct UAE .ae accredited domain registration, bank-grade DNSSEC security, and high-deliverability corporate business email with 99.99% uptime guarantees.",
    tools: ["Pure NVMe SSD Arrays", "cPanel & CloudLinux", "LiteSpeed Web Server", "SpamAssassin", "Cloudflare DNS", "SSL / TLS 1.3"],
    subServiceDescriptions: {
      "Domain Registration": "Direct registration of .ae, .com, .ai, .io, and 400+ extensions with instant DNS propagation.",
      "Domain Transfer & Management": "Zero-downtime transfers with free 1-year renewal and centralized DNS dashboard control.",
      "Web Hosting": "GCC edge-cached cloud hosting with sub-15ms regional latency and automated daily backups.",
      "Business Email": "Branded corporate inboxes with DKIM/SPF/DMARC authentication and anti-spam protection.",
      "SSL & Website Security": "Bank-grade Let's Encrypt Wildcard and Commercial EV SSL certificates with DDoS shielding.",
      "DNS Management": "Global Anycast DNS routing for millisecond query resolution and zero latency bottlenecks.",
      "Website Migration": "White-glove migration of existing websites, databases, and mailboxes with zero downtime.",
      "Backup & Maintenance": "Automated off-site daily backups with 1-click snapshot rollbacks and disaster recovery.",
    },
    faqs: [
      {
        q: "What are the requirements for registering a .ae domain in the UAE?",
        a: ".ae domains can be registered by any local or international business or individual. No physical UAE trade license is mandatory for standard .ae registrations, making it fast and frictionless.",
      },
      {
        q: "Where are your web hosting servers located?",
        a: "We deploy edge infrastructure directly optimized for UAE and GCC traffic, ensuring sub-15ms regional latency across Dubai, Abu Dhabi, Riyadh, and Doha.",
      },
      {
        q: "Do you assist with migrating our existing website and email accounts?",
        a: "Yes. Our senior DevOps team handles 100% of the migration for files, databases, and emails with zero downtime guarantee.",
      },
    ],
  },
  "digital-marketing": {
    problem:
      "Companies burn tens of thousands of dirhams on generic agency retainers that report vanity impressions and clicks without generating actual qualified sales pipeline or measurable customer acquisition.",
    approach:
      "Our growth methodology targets high-intent commercial buyers on Google Search, LinkedIn B2B, and Meta. Every campaign is monitored through closed-loop server-side analytics tied directly to Cost Per Qualified Lead (CPQL) and revenue pipeline.",
    tools: ["Google Ads Search & PMax", "LinkedIn Campaign Manager", "Meta Ads Manager", "Google Analytics 4", "Looker Studio", "Klaviyo"],
    subServiceDescriptions: {
      "SEO": "Organic ranking strategies targeting high-value commercial purchase queries in Dubai and the GCC.",
      "Google Ads": "High-intent Google Search and Performance Max campaigns driving ready-to-buy inquiries.",
      "Meta Ads": "Precision Instagram and Facebook ad funnels capturing qualified consumer and business demand.",
      "Social Media Marketing": "Executive brand positioning, content distribution, and targeted B2B community engagement.",
      "Content Marketing": "Authoritative thought leadership, industry whitepapers, and technical case studies.",
      "Email Marketing": "Automated nurture sequences, high-converting drip funnels, and executive client newsletters.",
      "Remarketing": "Multi-touch cross-channel retargeting bringing high-value website visitors back to convert.",
      "Lead Generation": "End-to-end B2B and B2C acquisition funnels designed to fill sales calendars consistently.",
    },
    faqs: [
      {
        q: "How do you measure marketing success?",
        a: "We measure success exclusively by qualified commercial inquiries, scheduled meetings, and customer acquisition cost (CAC)—not vanity impressions or clicks.",
      },
      {
        q: "Which ad platform works best for Dubai businesses?",
        a: "For immediate high-intent inquiries, Google Search Ads is unmatched. For B2B enterprise outreach, LinkedIn Ads delivers decision-makers. For visual lifestyle and retail brands, Instagram & Meta excel.",
      },
    ],
  },
  "google-business-profile-local-seo": {
    problem:
      "Over 75% of local commercial searches in Dubai happen on Google Maps. Unverified or poorly optimized profiles lose valuable phone calls, walk-ins, and high-ticket inquiries to competitors in the 3-Pack.",
    approach:
      "We implement an end-to-end Google Business Profile optimization protocol: resolving verification roadblocks, embedding geo-tagged Dubai authority signals, building local citations, and automating 5-star review acquisition.",
    tools: ["Google Business Profile API", "Local Falcon", "BrightLocal", "Geo-Coordinates Exif", "Review Gateways", "Schema LocalBusiness"],
    subServiceDescriptions: {
      "GBP Creation": "Complete initial setup with correct primary category classification and business details.",
      "GBP Verification Assistance": "Overcoming Google verification delays, video verification audits, and address reinstatement.",
      "GBP Profile Optimization": "Complete service menu architecture, high-res photography, and keyword-rich descriptions.",
      "Google Maps Optimization": "Geo-targeted radius expansion to dominate Google Maps search results across Dubai districts.",
      "Local SEO": "City-wide and district-specific landing page optimization (Deira, Downtown, Business Bay, Marina).",
      "Local Keyword Optimization": "Targeting hyper-local Arabic and English search intent queries with high buying velocity.",
      "Review Management Strategy": "Automated customer review request flows and professional public review reply protocols.",
      "Local Citations": "High-authority Dubai business directory listings ensuring 100% NAP (Name, Address, Phone) consistency.",
      "GBP Posts & Content": "Weekly promotional updates, product highlights, and seasonal offers keeping signals active.",
      "Multi-Location Management": "Unified governance for brands with multiple branches across Dubai, Abu Dhabi, and Sharjah.",
    },
    faqs: [
      {
        q: "How fast can our business appear in the Dubai Google Maps 3-Pack?",
        a: "Initial optimizations and citation syncing typically produce noticeable ranking improvements within 14 to 30 days. Full 3-pack dominance across targeted Dubai areas is typically established within 60 to 90 days.",
      },
      {
        q: "Can you help if our Google Business Profile was suspended or pending verification?",
        a: "Yes. Our team specializes in resolving Google Business Profile verification suspensions, video verification audits, and reinstatement appeals.",
      },
    ],
  },
  "ai-seo-search": {
    problem:
      "Search is undergoing its biggest transformation in 25 years. Traditional SEO no longer guarantees visibility as AI search engines (Perplexity, ChatGPT, Gemini, Google AI Overviews) synthesize answers without clicking blue links.",
    approach:
      "We pioneer AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). We structure your digital entity with deep JSON-LD Schema, verifiable citations, and semantic knowledge graphs so AI engines quote and recommend your brand.",
    tools: ["Schema.org JSON-LD", "Perplexity AI Benchmarking", "Google AI Overviews Tracker", "Semantic Search NLP", "Ahrefs", "Entity Graph"],
    subServiceDescriptions: {
      "Technical SEO": "Crawl budget optimization, JavaScript rendering audits, and Core Web Vitals performance tuning.",
      "On-Page SEO": "Information architecture, semantic heading hierarchies, and internal link equity distribution.",
      "AEO (Answer Engine Optimization)": "Formatting content to be directly parsed and cited in AI question-answering engines.",
      "GEO (Generative Engine Optimization)": "Optimizing entity authority so generative AI models recommend your brand in comparisons.",
      "AI Search Optimization": "Multi-engine visibility strategy across Perplexity, ChatGPT Search, Gemini, and Claude.",
      "Semantic SEO": "Topic clusters and entity-based content architecture establishing topical authority in your niche.",
      "Programmatic SEO": "Scalable, template-driven landing page engines targeting hundreds of localized long-tail terms.",
      "AI Content Strategy": "Editorial frameworks combining human expertise with AI efficiency for authoritative content.",
      "SEO Automation": "Automated technical monitoring, broken link detection, and competitive ranking alerts.",
    },
    faqs: [
      {
        q: "What is the difference between traditional SEO and AEO / GEO?",
        a: "Traditional SEO focuses on keyword rankings in search result lists. AEO and GEO optimize your entity's authority, facts, and citations so conversational AI models like Perplexity and ChatGPT synthesize and recommend your business as the preferred answer.",
      },
      {
        q: "Will this help our traditional Google rankings as well?",
        a: "Yes. The semantic structure, sub-second speed, and authoritative entity schema required for AI search directly elevate standard Google organic rankings.",
      },
    ],
  },
  "ai-automation": {
    problem:
      "Organizations lose hundreds of productive hours every month on repetitive manual data entry, slow customer lead response times, and fragmented software that cannot communicate autonomously.",
    approach:
      "We design and deploy custom autonomous AI agents, intelligent WhatsApp conversational bots, and robust n8n workflow automations that qualify leads in seconds, update databases, and operate 24/7 without human fatigue.",
    tools: ["n8n Workflow Automation", "WhatsApp Cloud API", "OpenAI & Gemini APIs", "LangChain", "Supabase Vector", "Python / Node.js"],
    subServiceDescriptions: {
      "AI Agents": "Autonomous software agents that execute multi-step business logic, research, and data verification.",
      "AI Chatbots": "Intelligent conversational bots capable of answering complex inquiries and closing meetings 24/7.",
      "AI Workflow Automation": "End-to-end automation connecting email, internal tools, accounting, and task managers.",
      "WhatsApp Automation": "Instant WhatsApp auto-responders, catalog browsers, and CRM-connected inquiry routers.",
      "AI Sales Automation": "Automated prospect follow-up sequences, proposal generation, and lead scoring pipelines.",
      "AI Customer Support": "First-line resolution bots reducing support ticket load by up to 70% with human handoff.",
      "AI Lead Qualification": "Conversational qualifiers that filter out tire-kickers and pass booked meetings to sales reps.",
      "AI Content Automation": "Automated social media scheduling, localized ad variations, and marketing asset production.",
      "Business Process Automation": "Eliminating repetitive spreadsheets and manual reconciliation through custom code.",
      "n8n Automation": "Self-hosted, highly secure workflow pipelines with zero platform lock-in and unlimited runs.",
    },
    faqs: [
      {
        q: "How does WhatsApp automation work for our Dubai business?",
        a: "We connect directly to the official Meta WhatsApp Cloud API. When a prospect messages your business number, an intelligent AI bot greets them in English or Arabic, answers FAQs, qualifies their budget, and schedules a meeting on your calendar instantly.",
      },
      {
        q: "Is our business data secure when using AI workflows?",
        a: "Yes. We implement zero-retention enterprise API endpoints and private self-hosted n8n servers ensuring your proprietary data is never used to train public models.",
      },
    ],
  },
  "crm-marketing-automation": {
    problem:
      "High-value leads generated by marketing campaigns fall through the cracks because sales teams take hours or days to follow up, use messy spreadsheets, or fail to track deal stage progression.",
    approach:
      "We architect unified CRM and marketing automation systems in HubSpot, Zoho, or custom platforms. Leads are routed instantly to the right sales reps, triggered with personalized WhatsApp and email workflows, and tracked through closed-loop pipeline analytics.",
    tools: ["HubSpot CRM", "Zoho CRM", "Salesforce", "Zapier & n8n", "WhatsApp Business API", "Calendly & Cal.com"],
    subServiceDescriptions: {
      "CRM Setup": "Custom field design, pipeline stage architecture, user permissions, and sales team onboarding.",
      "Lead Management": "Centralized database capturing all web, phone, social, and WhatsApp inquiries in one place.",
      "Lead Automation": "Automated deduplication, contact enrichment, and instant SMS/email notifications to reps.",
      "Lead Routing": "Intelligent round-robin distribution assigning leads based on language, territory, or deal value.",
      "Email Automation": "Multi-stage drip campaigns that nurture cold prospects into warm commercial meetings.",
      "WhatsApp Automation": "Automated deal milestone updates, appointment reminders, and document delivery via WhatsApp.",
      "Sales Pipeline Automation": "Automatic deal progression, reminder tasks, and stale lead re-engagement triggers.",
      "Appointment Automation": "Self-scheduling calendar links synced directly to CRM contact records and video links.",
      "CRM Integrations": "Bidirectional sync between your CRM, website forms, accounting software, and ad platforms.",
    },
    faqs: [
      {
        q: "Which CRM do you recommend for our company?",
        a: "For fast-scaling B2B companies, HubSpot offers the most intuitive interface and powerful marketing automation. For established enterprises seeking extensive customization, Zoho CRM or bespoke databases provide immense value.",
      },
      {
        q: "How quickly can you implement our new CRM system?",
        a: "A turnkey CRM setup with automated lead routing and WhatsApp notifications is typically live and functional within 10 to 14 business days.",
      },
    ],
  },
  "branding-creative": {
    problem:
      "In Dubai's hyper-competitive luxury and enterprise marketplace, companies with generic or outdated branding struggle to command premium pricing and find it difficult to gain instant trust with high-net-worth clients.",
    approach:
      "We craft authoritative corporate visual identities, bilingual English & Arabic typography hierarchies, design systems, and digital marketing creatives engineered to position your firm as an undeniable industry leader.",
    tools: ["Figma Enterprise", "Adobe Illustrator", "Brand Identity Systems", "Design Tokens", "Typography Hierarchy", "Social Ad Kits"],
    subServiceDescriptions: {
      "Brand Identity": "Strategic brand positioning, voice and tone guidelines, and comprehensive corporate style manuals.",
      "Logo Design": "Distinctive vector logo marks, monograms, favicons, and bilingual English/Arabic lockups.",
      "UI/UX Design": "High-fidelity clickable Figma prototypes, user journeys, and component design systems.",
      "Ad Creative": "High-converting visual ad assets tailored for Instagram, LinkedIn, Google Display, and Meta.",
      "Social Media Design": "Cohesive branded post templates, carousel frameworks, and executive LinkedIn banners.",
      "Marketing Graphics": "Pitch decks, company profiles, whitepaper layouts, and premium corporate stationery.",
    },
    faqs: [
      {
        q: "What files and formats do we receive upon brand completion?",
        a: "You receive all master vector files (AI, SVG, EPS, PDF), web-optimized PNG/WebP exports, full typography font packages, and an interactive digital Brand Guidelines PDF.",
      },
      {
        q: "Do you create bilingual English and Arabic branding?",
        a: "Yes. We specialize in culturally resonant bilingual typography pairings and layout aesthetics tailored for the UAE, Saudi Arabia, and GCC markets.",
      },
    ],
  },
  "analytics-cro": {
    problem:
      "Most marketing campaigns fail to optimize because client tracking setups are broken: missing server-side conversions, iOS tracking drop-offs, and misleading attribution models that obscure true marketing ROI.",
    approach:
      "We implement precision server-side tracking, Meta Conversions API (CAPI), Google Tag Manager, and interactive Looker Studio dashboards. Combined with A/B conversion rate optimization audits, we maximize revenue per visitor.",
    tools: ["Google Analytics 4 (GA4)", "Server-Side GTM", "Meta CAPI", "Looker Studio", "Microsoft Clarity / Hotjar", "BigQuery"],
    subServiceDescriptions: {
      "Google Analytics": "Complete GA4 audit, custom event definitions, cross-domain tracking, and audience setup.",
      "Google Tag Manager": "Server-side and client-side GTM container architecture with clean data layer schemas.",
      "Conversion Tracking": "Accurate tracking of form submits, phone call clicks, WhatsApp taps, and purchases.",
      "Meta Pixel & CAPI": "Server-to-server Meta Conversions API integration bypassing ad-blockers and iOS privacy limits.",
      "Conversion Optimization": "Heatmap analysis, user journey bottleneck audits, and A/B split-testing frameworks.",
      "Lead Attribution": "First-click and last-click attribution models revealing exact campaign revenue sources.",
      "Marketing Dashboards": "Executive real-time Looker Studio reporting unifying Google Ads, Meta, and CRM pipeline.",
      "Reporting & Analytics": "Monthly performance reviews and strategic commercial recommendations for continuous ROI.",
    },
    faqs: [
      {
        q: "Why is Meta Conversions API (CAPI) essential today?",
        a: "Standard browser pixels lose up to 30% of conversion data due to ad-blockers and iOS privacy restrictions. Server-Side CAPI sends conversion events directly from the server to Meta, restoring tracking accuracy and lowering ad acquisition costs.",
      },
      {
        q: "Can you consolidate all our marketing data into a single live dashboard?",
        a: "Yes. We build automated Looker Studio dashboards combining Google Ads, Meta Ads, SEO traffic, and CRM sales so leadership can review performance anytime.",
      },
    ],
  },
};

// Aliases mapping legacy or alternative slugs to official services
const slugAliases: Record<string, string> = {
  "web-applications": "web-development",
  ecommerce: "web-development",
  "ui-ux-design": "branding-creative",
  branding: "branding-creative",
  seo: "ai-seo-search",
  "ai-solutions": "ai-automation",
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
  "domain-hosting": {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$9.99/mo",
    timeline: "Instant Setup",
  },
  "digital-marketing": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "$1,950/mo",
    timeline: "Monthly Sprint",
  },
  "google-business-profile-local-seo": {
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 1,500/mo ($400)",
    timeline: "Ongoing Sprint",
  },
  "ai-seo-search": {
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 2,200/mo ($600)",
    timeline: "Monthly Sprint",
  },
  "ai-automation": {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 3,500 ($950)",
    timeline: "2-4 Weeks",
  },
  "crm-marketing-automation": {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 2,800 ($760)",
    timeline: "2-3 Weeks",
  },
  "branding-creative": {
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 3,200 ($870)",
    timeline: "2-3 Weeks",
  },
  "analytics-cro": {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
    priceUsd: "AED 1,800/mo ($490)",
    timeline: "Monthly Sprint",
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
  const targetSlug = slugAliases[slug] || slug;
  const service = await prisma.service.findUnique({ where: { slug: targetSlug } });

  if (!service) {
    return {
      title: "Service Not Found | Bird Hills Tech",
    };
  }

  return {
    title: service.seoTitle || `${service.title} in Dubai | Bird Hills Tech`,
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
  const targetSlug = slugAliases[slug] || slug;

  let service = await prisma.service.findUnique({
    where: { slug: targetSlug },
  });

  // Fallback to first service if slug not directly found
  if (!service) {
    service = await prisma.service.findFirst({
      where: { slug: "web-development" },
    });
  }

  if (!service) {
    notFound();
  }

  const imagery = serviceImagery[targetSlug] || serviceImagery["web-development"];
  const detail = serviceDetails[targetSlug] || serviceDetails["web-development"];

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
      {/* 1. LUXURY DUBAI HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-[#070B14] text-white border-b border-white/10 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/85 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
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
            <span className="text-[#D4AF37] font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
                  <Sparkles size={13} />
                  {service.category} DISCIPLINE
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40">
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold shadow-lg shadow-[#C59B27]/30 hover:brightness-105 transition-all"
                >
                  <Calendar size={15} />
                  <span>Schedule Technical Briefing</span>
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp (+971 52 440 5785)</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Specs Overview */}
            <div className="lg:col-span-4 bg-[#0B0F19]/90 backdrop-blur-xl border border-[#C59B27]/30 p-7 rounded-3xl shadow-2xl space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#D4AF37] flex items-center justify-between">
                <span>Practice Specifications</span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Commercial Investment</span>
                  <span className="font-bold text-[#D4AF37] text-sm">{imagery.priceUsd}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Delivery Velocity</span>
                  <span className="font-bold text-white">{imagery.timeline}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Speed SLA Guarantee</span>
                  <span className="font-bold text-white">&lt; 0.8s LCP</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-300">Code & Asset IP</span>
                  <span className="font-bold text-white">100% Client Ownership</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Senior Director Oversight</span>
                  <span className="font-bold text-white">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE & OUR APPROACH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-4">
              <span className="text-xs font-extrabold tracking-wider uppercase text-rose-600">
                THE COMMERCIAL CHALLENGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19]">
                Why conventional agency work falls short
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {detail.problem}
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#070B14] text-white space-y-4 border border-[#C59B27]/30">
              <span className="text-xs font-extrabold tracking-wider uppercase text-[#D4AF37]">
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

      {/* 3. OFFICIAL SUB-SERVICES & DELIVERABLES BREAKDOWN */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              CAPABILITIES & SUB-SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
              Deliverables & Specializations
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-2">
              Every sub-service is executed with precision engineering, transparent milestone documentation, and direct director oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const subDesc =
                detail.subServiceDescriptions?.[feat] ||
                `High-impact ${feat.toLowerCase()} engineering optimized for Dubai and the GCC market.`;

              return (
                <div
                  key={feat}
                  className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs hover:border-[#C59B27]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#C59B27] border border-[#C59B27]/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <h3 className="text-sm font-bold text-[#0B0F19] leading-snug">{feat}</h3>
                    </div>
                    <p className="text-xs text-[#667085] leading-relaxed pl-1">
                      {subDesc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-[#667085] bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/70">
                      Verified Deliverable
                    </span>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}&inquiry=${encodeURIComponent(feat)}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C59B27] hover:text-[#0B0F19] transition-colors group"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EXECUTION ROADMAP */}
      {processSteps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
                METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
                Execution Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E4E7EC] space-y-3 hover:border-[#C59B27]/30 transition-colors"
                >
                  <div className="text-2xl font-mono font-extrabold text-[#C59B27]">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0B0F19]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. TECHNOLOGY & TOOLS */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-wider">
                TECH STACK
              </span>
              <h3 className="text-xl font-bold text-[#0B0F19] mt-0.5">
                Technologies & Tools We Leverage
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {detail.tools.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#0B0F19] shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMERCIAL ROI BENEFITS */}
      {benefits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
                ROI & ADVANTAGE
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
                Measurable Business Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={b}
                  className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#C59B27]/30 space-y-2"
                >
                  <div className="text-xs font-extrabold text-[#C59B27] uppercase">
                    Advantage 0{idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#0B0F19] leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQS */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B0F19]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-2"
              >
                <h3 className="text-base font-bold text-[#0B0F19] flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELATED CASE STUDIES */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white border-t border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-extrabold text-[#C59B27] uppercase">PORTFOLIO</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] mt-1">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
              >
                All Projects <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="group bg-[#FAF8F5] rounded-2xl border border-[#E4E7EC] overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all"
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
                      <span className="text-[10px] font-bold uppercase text-[#C59B27]">
                        {p.industry}
                      </span>
                      <h3 className="text-base font-bold text-[#0B0F19] mt-1 mb-2 group-hover:text-[#C59B27] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#667085] line-clamp-2">{p.shortDesc}</p>
                    </div>
                    <Link
                      href={`/work/${p.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#C59B27]"
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

      {/* 9. FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}
