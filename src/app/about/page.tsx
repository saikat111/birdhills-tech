import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Zap,
  Building2,
  Users2,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Compass,
  CheckCircle2,
  Award,
  Lock,
  Server,
  FileCode2,
} from "lucide-react";
import FaqAccordion, { FaqItem } from "@/components/common/FaqAccordion";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us | Technology × Creative × Growth | Bird Hills Tech",
  description:
    "Learn about Bird Hills Tech, a premier global digital firm bridging software engineering, creative design systems, and measurable commercial growth.",
  alternates: {
    canonical: "https://birdhillstech.com/about",
  },
  openGraph: {
    title: "About Bird Hills Tech | Technology & Digital Growth Firm",
    description:
      "Enterprise web engineering, prestigious corporate identity, and B2B growth marketing for ambitious global enterprises.",
    url: "https://birdhillstech.com/about",
    siteName: "Bird Hills Tech",
    locale: "en_US",
    type: "website",
  },
};

const ABOUT_FAQS: FaqItem[] = [
  {
    question: "Where is Bird Hills Tech located, and how do client engagements work?",
    answer:
      "Bird Hills Tech provides global digital operations and client services (+971 52 440 5785). We welcome scheduled consultations via video conference or executive briefing sessions worldwide.",
    category: "General",
  },
  {
    question: "What differentiates Bird Hills Tech from other digital agencies?",
    answer:
      "Most agencies are either pure marketing firms that outsource coding to unvetted freelancers, or offshore dev shops with no creative sophistication. Bird Hills Tech integrates senior software architects, brand designers, and performance marketing specialists under one accountable team. We deliver enterprise-grade performance, complete source code ownership, and closed-loop revenue reporting.",
    category: "Philosophy",
  },
  {
    question: "What are your core engineering standards and data protection protocols?",
    answer:
      "We build type-safe, modern web platforms using Next.js 16, TypeScript, and edge cloud architectures. All platforms adhere strictly to international data privacy standards (GDPR/PDPL), incorporate automated daily encrypted backups, TLS 1.3 encryption, and sub-15ms edge latency.",
    category: "Engineering",
  },
  {
    question: "Who will manage and communicate on our project?",
    answer:
      "You work directly with a dedicated Senior Technical Project Lead and Solution Architect. You have direct access via Slack, WhatsApp, and weekly milestone review calls—no layers of junior account coordinators or miscommunicated requirements.",
    category: "Execution",
  },
  {
    question: "Do we retain full ownership of the intellectual property and code?",
    answer:
      "Yes, completely. Unlike traditional agencies that attempt to lock you into proprietary hosting platforms or recurring code licenses, Bird Hills Tech transfers 100% of all intellectual property, Figma master design files, database schemas, and Git repositories upon project completion.",
    category: "Legal & IP",
  },
];

export default function AboutPage() {
  const capabilities = [
    {
      domain: "Technology",
      focus: "Engineered for speed, security & enterprise scalability.",
      items: [
        "Modern Next.js & React Architectures",
        "Sub-second Core Web Vitals & Performance",
        "Custom SaaS & Business Web Applications",
        "Headless & Scalable E-commerce Platforms",
        "Private AI & Intelligent Automation Systems",
      ],
    },
    {
      domain: "Creative",
      focus: "Visual authority that commands business prestige.",
      items: [
        "Corporate Brand Identity & Logo Systems",
        "Design Systems & Figma Component Libraries",
        "Human-Centered UI/UX Research & Prototyping",
        "Executive Digital Presentation Materials",
        "Bilingual English/Arabic Interface Design",
      ],
    },
    {
      domain: "Growth",
      focus: "Data-driven commercial customer acquisition.",
      items: [
        "High-Intent Google Ads & Search Campaigns",
        "Targeted B2B LinkedIn Demand Generation",
        "Technical SEO & Global Organic Authority",
        "Conversion Rate Optimization (CRO) Audits",
        "Closed-Loop Revenue & Pipeline Tracking",
      ],
    },
  ];

  const engineeringGuarantees = [
    {
      icon: Zap,
      title: "High Performance Architecture",
      desc: "Every website and web application is engineered for maximum responsiveness, peak Lighthouse performance, and optimal conversion rates across global networks.",
    },
    {
      icon: Lock,
      title: "Global Data Privacy & Compliance",
      desc: "Architected in strict adherence with international data protection standards, ensuring data sovereignty, bank-grade encryption, and zero third-party telemetry leaks.",
    },
    {
      icon: FileCode2,
      title: "Full Code & Asset Ownership",
      desc: "You receive clean, documented source code repositories, database models, and Figma design tokens. No licensing lock-ins or proprietary dependencies.",
    },
    {
      icon: Server,
      title: "Sub-15ms Global Cloud Latency",
      desc: "Deployed on pure NVMe enterprise edge servers physically optimized for global speed, backed by 99.99% uptime SLAs and 15-minute emergency support.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Foundations & Vision",
      desc: "Launched with a pure engineering ethos: building high-performance modern websites and custom portals for scaling businesses.",
    },
    {
      year: "2023",
      title: "Design Systems & Creative Practice",
      desc: "Integrated corporate brand identity, UI/UX research, and prestige design systems tailored for global enterprise aesthetics.",
    },
    {
      year: "2024",
      title: "Commercial Growth Engine",
      desc: "Established our performance marketing practice, focusing on closed-loop revenue attribution and commercial pipeline instead of vanity metrics.",
    },
    {
      year: "2025",
      title: "AI Integration & Global Scaling",
      desc: "Deployed autonomous conversational agents and custom workflow automation for leading logistics, finance, and enterprise operators.",
    },
    {
      year: "2026",
      title: "Consolidated Digital Partner",
      desc: "Delivering unified technology, creative, and performance marketing capabilities for ambitious enterprises worldwide.",
    },
  ];

  const studioImages = [
    {
      title: "Architecture & Engineering Planning",
      image: "/ima/web8.jpg",
    },
    {
      title: "Creative Design & UI/UX Systems",
      image: "/ima/web5.jpg",
    },
    {
      title: "Cloud Infrastructure & Sovereign Edge",
      image:
        "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Full-Stack Development & Architecture",
      image: "/ima/web4.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH GLOBAL CORPORATE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90"
            alt="Global corporate business district and modern architecture"
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
              ABOUT BIRD HILLS TECH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Built to bridge the divide between technology and growth.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Bird Hills Tech is a modern technology, creative, and digital growth firm. We engineer digital assets that command commercial authority and generate real business revenue worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
                OUR PHILOSOPHY
              </div>
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#070B14] leading-snug border-l-4 border-[#C59B27] pl-6 italic">
                &ldquo;Technology should not simply exist. It should create commercial momentum for the business behind it.&rdquo;
              </blockquote>
              <p className="text-base text-[#667085] leading-relaxed">
                Too many companies find themselves navigating fragmented partners: IT firms that lack creative sophistication, design studios that disregard technical performance, and digital marketing agencies that cannot write a single line of clean code.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                Bird Hills Tech was built to eliminate that friction. By uniting software engineering, creative design, and data-driven customer acquisition under one senior team, we give ambitious businesses the complete digital capability they need to lead their markets.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
                  alt="Bird Hills Tech engineering and creative leadership team collaborating on enterprise digital platforms"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#C59B27]/30 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                    LEADERSHIP &amp; ENGINEERING
                  </div>
                  <div className="text-sm font-extrabold text-[#070B14]">
                    Integrated Tech, Creative &amp; Growth Squads
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    Direct access to Senior Solution Architects &amp; Technical Directors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE COMBINATION ADVANTAGE (TECH × CREATIVE × GROWTH) */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              THE THREE CORNERSTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight mt-2">
              Technology × Creative × Growth
            </h2>
            <p className="text-base text-[#667085] mt-3">
              Most firms provide one or two pieces of the puzzle. We connect all three into an integrated business engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.domain}
                className="bg-white rounded-3xl p-8 border border-[#E4E7EC] shadow-sm hover:border-[#C59B27]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 text-[#C59B27] font-bold text-lg flex items-center justify-center mb-6">
                    {c.domain.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-[#070B14] mb-2">{c.domain}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed mb-6">{c.focus}</p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {c.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#070B14]">
                        <CheckCircle2 size={13} className="text-[#C59B27] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING STANDARDS & SECURITY GUARANTEES (NEW) */}
      <section className="py-24 bg-[#0B1730] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 mb-4">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              ENGINEERING INTEGRITY & SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rigorous Standards for Mission-Critical Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              We eliminate technical debt before it starts with uncompromising performance budgets, regional security standards, and zero proprietary lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringGuarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-[#C59B27]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#C59B27]/10 text-[#D4AF37] flex items-center justify-center mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EXPANSION TIMELINE & MILESTONES */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              OUR JOURNEY & TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight mt-2">
              Milestones of Growth &amp; Innovation
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C59B27]/40 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#C59B27] group-hover:scale-125 transition-transform" />
                <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E4E7EC] hover:border-[#C59B27]/30 hover:shadow-md transition-all">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#C59B27]/15 text-[#B38728] mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#070B14]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDIO CULTURE & EXECUTION */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              INSIDE BIRD HILLS TECH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight mt-2">
              Our Studio &amp; Engineering Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioImages.map((s) => (
              <div
                key={s.title}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#E4E7EC] bg-slate-900"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-bold text-white">{s.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DEDICATED ABOUT FAQ ACCORDION (NEW) */}
      <FaqAccordion
        items={ABOUT_FAQS}
        title="Frequently Asked About Our Practice"
        eyebrow="AGENCY CLARITY & GOVERNANCE"
        description="Direct answers regarding our studio, team structure, client engagement contracts, and engineering guarantees."
        theme="light"
        includeSchema={true}
      />

      {/* 8. GLOBAL STRATEGIC ENGAGEMENTS */}
      <section className="py-20 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#070B14] border border-[#C59B27]/25 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                STRATEGIC CONSULTATIONS &amp; BRIEFINGS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Schedule an Executive Consultation or Briefing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Connect with our directors for a strategic project discovery session. We welcome meetings with founders, CXOs, and directors worldwide.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/book-a-meeting"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold transition-all shadow-md shadow-[#C59B27]/20"
              >
                Book a Meeting
              </Link>
              <a
                href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold transition-colors shadow-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
