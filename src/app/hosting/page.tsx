import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Server,
  HardDrive,
  Cpu,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Clock,
  Sparkles,
  Lock,
  RefreshCw,
  Award,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import FaqAccordion from "@/components/common/FaqAccordion";

export const metadata: Metadata = {
  title: "Enterprise Cloud Hosting & Managed Infrastructure | Bird Hills Tech",
  description:
    "Ultra-fast NVMe cloud hosting, managed VPS, and dedicated servers with global edge network acceleration. Sub-15ms regional latency, 99.99% uptime guarantee, free SSL, and zero-downtime migration.",
  alternates: {
    canonical: "https://birdhillstech.com/hosting",
  },
};

export const revalidate = 60;

export default async function HostingPage() {
  let plans: any[] = [];

  try {
    plans = await prisma.hostingPlan.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
    });
  } catch (err) {
    console.error("Error fetching hosting plans:", err);
  }

  // Fallback plans if database is initializing
  if (!plans || plans.length === 0) {
    plans = [
      {
        id: "1",
        name: "Starter Cloud Hosting",
        slug: "cloud-starter",
        category: "cloud",
        priceAed: "AED 120",
        priceUsd: "$9.99",
        billingCycle: "/ month",
        badge: "Fast SME Launch",
        description: "Ideal for personal brands, corporate portfolios, and early-stage startups needing high speed.",
        storage: "25 GB NVMe SSD",
        bandwidth: "Unmetered Bandwidth",
        popular: false,
        featuresJson: JSON.stringify([
          "1 High-Speed Website",
          "25 GB Enterprise NVMe SSD Storage",
          "Unmetered Monthly Bandwidth",
          "Free Automatic Let's Encrypt SSL",
          "10 Corporate Email Accounts",
          "Global Anycast Edge CDN Caching",
          "Weekly Automated Cloud Backups",
          "99.99% Uptime Network SLA",
        ]),
      },
      {
        id: "2",
        name: "Business Pro Cloud",
        slug: "cloud-business",
        category: "cloud",
        priceAed: "AED 280",
        priceUsd: "$24.99",
        billingCycle: "/ month",
        badge: "Most Popular",
        description: "Comprehensive cloud hosting for growing businesses, e-commerce stores, and high-traffic portals.",
        storage: "100 GB NVMe SSD",
        bandwidth: "Unmetered Bandwidth",
        popular: true,
        featuresJson: JSON.stringify([
          "Unlimited Hosted Websites",
          "100 GB Ultra-Fast NVMe SSD Storage",
          "Free Domain Name (.com / .net) for 1st Year",
          "Free Wildcard SSL & Dedicated IP Support",
          "Unlimited Professional Email Inboxes",
          "Global Anycast Edge Cloud Node Acceleration",
          "Daily Automated Off-Site Backups",
          "1-Click Staging & Git Deployment Hub",
          "24/7 Priority Emergency Support",
        ]),
      },
      {
        id: "3",
        name: "Managed Cloud VPS",
        slug: "managed-vps",
        category: "vps",
        priceAed: "AED 590",
        priceUsd: "$59.99",
        billingCycle: "/ month",
        badge: "Dedicated Resources",
        description: "Isolated virtual private server for SaaS applications, custom databases, and heavy APIs.",
        storage: "250 GB NVMe Storage",
        bandwidth: "10 TB Premium Traffic",
        popular: false,
        featuresJson: JSON.stringify([
          "4 vCPU Dedicated Compute Cores",
          "16 GB High-Speed RAM",
          "250 GB Pure NVMe RAID-10 Storage",
          "Dedicated Clean IPv4 & IPv6 Addresses",
          "Full Root & SSH Terminal Access",
          "Next.js, Node.js, Docker & Python Ready",
          "Enterprise DDoS Shield (100 Gbps+)",
          "Daily Real-Time Snapshots & Rollbacks",
          "Dedicated DevOps Technical Account Lead",
        ]),
      },
      {
        id: "4",
        name: "Enterprise Dedicated Server",
        slug: "enterprise-dedicated",
        category: "dedicated",
        priceAed: "AED 1,250",
        priceUsd: "$149.99",
        billingCycle: "/ month",
        badge: "Maximum Bare-Metal Power",
        description: "Mission-critical bare-metal infrastructure for financial services, institutions, and high-security compliance.",
        storage: "1 TB NVMe RAID-1",
        bandwidth: "Unmetered 10 Gbps Port",
        popular: false,
        featuresJson: JSON.stringify([
          "16 vCPU Cores / 32 Threads Bare-Metal",
          "64 GB ECC Server Memory",
          "1 TB Enterprise NVMe Dual Mirror Array",
          "Unmetered 10 Gbps Low-Latency Uplink",
          "Hardware Firewall & Custom IDS/IPS",
          "Enterprise Multi-Region Data Compliance",
          "24/7 Proactive Hardware Monitoring",
          "15-Minute Guaranteed Critical SLA Response",
        ]),
      },
    ];
  }

  const hostingFaqs = [
    {
      q: "Where are Bird Hills Tech servers physically located?",
      a: "Our primary high-concurrency cloud nodes are hosted in state-of-the-art Tier-3 and Tier-4 data centres across major international hubs (US East, Frankfurt, London, and Singapore), paired with an enterprise Anycast Edge Network delivering low-latency local caching worldwide.",
    },
    {
      q: "How does the Free 0-Downtime Migration work?",
      a: "Our certified systems engineers handle the entire transfer from your old cPanel, Plesk, AWS, or custom host. We copy databases, files, and email configurations, verify everything on a private staging URL, and switch DNS records seamlessly with zero lost emails and zero website downtime.",
    },
    {
      q: "Can I upgrade or downgrade my hosting tier as traffic grows?",
      a: "Yes. Our cloud architecture is elastically scalable. You can seamlessly scale CPU, RAM, and NVMe disk storage on-demand without migrating or modifying your application code.",
    },
    {
      q: "Are daily backups automated and stored off-site?",
      a: "Yes. All Business Pro, VPS, and Dedicated plans include automated daily snapshots stored in redundant off-site object storage with 30-day retention and 1-click restore capability.",
    },
    {
      q: "Do you support Next.js, Node.js, and modern JavaScript frameworks?",
      a: "Absolutely. In addition to traditional PHP/WordPress/MySQL stacks, our Cloud VPS and Dedicated platforms run containerized Docker runtimes, Node.js, Next.js, Python, and PostgreSQL natively.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/hero_hosting_cloud.jpg"
            alt="Enterprise cloud hosting datacenter with glowing optical server racks and low-latency infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/85 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
              <Server size={14} />
              <span>ENTERPRISE CLOUD INFRASTRUCTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Enterprise Cloud Hosting Engineered for Speed & Uptime.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              High-speed NVMe RAID arrays, ultra-low edge latency, free Let&apos;s Encrypt Wildcard SSL, automated off-site backups, and white-glove 0-downtime migration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-sm font-bold shadow-lg shadow-[#C59B27]/25 transition-all hover:translate-y-[-1px]"
              >
                <span>View Hosting Plans</span>
                <ArrowRight size={16} />
              </a>
              <Link
                href="/domains"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 backdrop-blur-md transition-all"
              >
                <Globe size={16} />
                <span>Search Domain Names</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS BAR */}
      <section className="bg-white border-b border-[#E4E7EC] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC]">
              <div className="text-2xl sm:text-3xl font-black text-[#070B14]">99.99%</div>
              <div className="text-xs text-[#667085] font-semibold uppercase mt-1">Uptime SLA Guarantee</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC]">
              <div className="text-2xl sm:text-3xl font-black text-[#C59B27]">&lt; 15ms</div>
              <div className="text-xs text-[#667085] font-semibold uppercase mt-1">Global Edge Latency</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC]">
              <div className="text-2xl sm:text-3xl font-black text-[#070B14]">Pure NVMe</div>
              <div className="text-xs text-[#667085] font-semibold uppercase mt-1">Gen4 Enterprise Storage</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">0 Downtime</div>
              <div className="text-xs text-[#667085] font-semibold uppercase mt-1">Free Expert Migration</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOSTING PLANS PRICING GRID */}
      <section className="py-24 bg-[#FAF8F5]" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              PREMIUM INFRASTRUCTURE TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
              Select Your Cloud Architecture
            </h2>
            <p className="text-sm text-[#667085]">
              All plans include enterprise DDoS protection, free SSL certificates, and 24/7 technical assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan: any) => {
              let features: string[] = [];
              try {
                features = JSON.parse(plan.featuresJson || "[]");
              } catch {
                features = [];
              }

              const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                plan.name
              )}%20hosting%20plan%20(${encodeURIComponent((plan.priceAed || plan.priceUsd) + plan.billingCycle)}).`;

              return (
                <div
                  key={plan.slug}
                  className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                    plan.popular
                      ? "bg-white border-2 border-[#C59B27] shadow-2xl scale-[1.02] z-10 ring-4 ring-[#C59B27]/15"
                      : "bg-white border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:border-[#C59B27]/40"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-[#C59B27]/25">
                      {plan.badge || "Most Popular"}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {plan.badge && !plan.popular ? plan.badge : plan.category.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-extrabold text-[#070B14] mb-2">{plan.name}</h3>
                      <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-[#070B14] tracking-tight">
                          {plan.priceAed || plan.priceUsd}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{plan.billingCycle}</span>
                      </div>
                      {(plan.storage || plan.bandwidth) && (
                        <div className="mt-2 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-[#B38728] font-bold">
                          <span>{plan.storage}</span>
                          <span>{plan.bandwidth}</span>
                        </div>
                      )}
                    </div>

                    {/* Specs List */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Hardware & Service Specs:
                      </div>
                      {features.map((feat: string) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-[#070B14]">
                          <CheckCircle2 size={14} className="text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-6 border-t border-slate-100 space-y-2.5">
                    <Link
                      href={`/book-a-meeting?service=${encodeURIComponent("Hosting: " + plan.name)}`}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white shadow-md shadow-[#C59B27]/25"
                          : "bg-[#070B14] hover:bg-[#1a2336] text-white"
                      }`}
                    >
                      <Zap size={14} />
                      <span>Deploy This Plan</span>
                    </Link>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 transition-colors"
                    >
                      <MessageCircle size={14} className="text-[#25D366]" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SPEED & HARDWARE ADVANTAGES */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              ENGINEERED FOR SUPREMACY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
              The Bird Hills Cloud Architecture
            </h2>
            <p className="text-sm text-[#667085]">
              Compare our optimized cloud edge stack with slow generic shared hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                <HardDrive size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#070B14]">Pure NVMe Gen4 Storage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Up to 7,000 MB/s read and write speeds. Traditional SATA SSDs throttle databases and dynamic WordPress queries; our NVMe arrays handle high-concurrency traffic effortlessly.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#070B14]">Sub-15ms Anycast Edge Latency</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Our distributed global edge nodes cache and serve your web application with near-zero network delay to international users.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#070B14]">Zero-Trust Security & DDoS</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Enterprise 100 Gbps+ anti-DDoS scrubbing, Web Application Firewall (WAF), automated malware isolation, and free automatic Let&apos;s Encrypt Wildcard SSL renewals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHITE-GLOVE MIGRATION GUARANTEE */}
      <section className="py-20 bg-gradient-to-br from-[#070B14] via-[#0F1420] to-[#070B14] border-t border-[#C59B27]/25 text-white" id="migration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30">
                100% FREE WHITE-GLOVE SERVICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Switch to Bird Hills Cloud with Zero Downtime Guarantee.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tired of slow shared hosting, frequent outages, or unresponsive support? Our senior cloud engineers migrate your website, databases, SSL certificates, and email inboxes free of charge without taking your business offline.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  <span>Full file system, database, and email mailbox replication</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  <span>Staging verification URL before switching DNS records</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  <span>Zero data loss guarantee signed by our technical lead</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Request Free Migration Assistance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our cloud engineering desk to schedule your seamless site transfer.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20request%20a%20free%20zero-downtime%20website%20migration%20to%20your%20cloud%20hosting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle size={15} />
                  <span>Chat with Migration Specialist on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#070B14] hover:bg-slate-100 text-xs font-bold transition-all"
                >
                  <span>Submit Migration Brief</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={hostingFaqs.map((f) => ({
          question: f.q,
          answer: f.a,
          category: "Cloud Infrastructure",
        }))}
        title="Hosting Frequently Asked Questions"
        eyebrow="TECHNICAL CLARITY"
        description="Everything you need to know about our Tier-3/4 data center nodes, zero-downtime migration, and automated off-site backups."
        theme="light"
        includeSchema={true}
      />

      <FinalCtaSection />
    </div>
  );
}
