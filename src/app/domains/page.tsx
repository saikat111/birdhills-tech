import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Zap,
  Lock,
  RefreshCw,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Server,
  Award,
} from "lucide-react";
import { DomainSearchClient } from "@/components/domains/DomainSearchClient";
import FaqAccordion from "@/components/common/FaqAccordion";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Corporate Domain Registration & Global DNS Management | Bird Hills Tech",
  description:
    "Register official .com, .ai, .io, and global domain names. Instant DNS management, free WHOIS privacy, DNSSEC security, and zero-downtime domain transfers.",
  alternates: {
    canonical: "https://birdhillstech.com/domains",
  },
};

export default function DomainsPage() {
  const tldPricing = [
    {
      extension: ".ae",
      purpose: "Regional & Strategic Digital Identity",
      price: "$39.99",
      period: "/ year",
      popular: true,
      badge: "Regional",
    },
    {
      extension: ".com",
      purpose: "The Uncontested Global Gold Standard for Business",
      price: "$12.99",
      period: "/ year",
      popular: true,
      badge: "Most Popular",
    },
    {
      extension: ".ai",
      purpose: "Artificial Intelligence, Tech Founders & Startups",
      price: "$69.99",
      period: "/ year",
      popular: true,
      badge: "High Tech",
    },
    {
      extension: ".io",
      purpose: "Developer Platforms, SaaS Tools & Engineering Squads",
      price: "$34.99",
      period: "/ year",
      popular: false,
    },
    {
      extension: ".tech",
      purpose: "Technology Brands, Digital Products & Labs",
      price: "$4.99",
      period: "/ 1st year",
      popular: false,
      badge: "Hot Deal",
    },
    {
      extension: ".co",
      purpose: "Modern Global Startups & Venture Portfolios",
      price: "$21.99",
      period: "/ year",
      popular: false,
    },
    {
      extension: ".org",
      purpose: "Non-Profits, Global Foundations & Trade Councils",
      price: "$13.99",
      period: "/ year",
      popular: false,
    },
    {
      extension: ".net",
      purpose: "Network Infrastructure, Telecommunications & ISP",
      price: "$14.99",
      period: "/ year",
      popular: false,
    },
  ];

  const domainFeatures = [
    {
      icon: ShieldCheck,
      title: "Free WHOIS Privacy Protection",
      desc: "Protect your personal and company contact information. Mask your registrant phone, email, and home address from spam harvesters at no extra cost.",
    },
    {
      icon: Zap,
      title: "Sub-Second Anycast DNS",
      desc: "Ultra-fast global DNS resolution backed by 200+ worldwide Anycast points of presence, ensuring instantaneous lookup speeds for your customers.",
    },
    {
      icon: Lock,
      title: "Domain Lock & DNSSEC",
      desc: "Prevent unauthorized transfers and hijacking attempts with registrar lock and cryptographic DNSSEC verification.",
    },
    {
      icon: RefreshCw,
      title: "Effortless 1-Click Hosting Hookup",
      desc: "Seamlessly map your registered domain to your Bird Hills Cloud or VPS hosting instance with pre-configured SSL and mail records.",
    },
  ];

  const domainFaqs = [
    {
      q: "Can international companies register regional and global domain names?",
      a: "Yes! There are no restrictive presence requirements for standard global and international domain registrations. Any business worldwide can register domains directly through Bird Hills Tech to establish trusted corporate presence.",
    },
    {
      q: "How does domain transfer to Bird Hills Tech work?",
      a: "Transferring is simple: 1) Unlock your domain at your current registrar, 2) Obtain your EPP / Auth code, 3) Submit the transfer request with us. Your registration automatically extends by 1 full year with zero website downtime.",
    },
    {
      q: "Is WHOIS privacy included for free?",
      a: "Yes. For all applicable top-level domains (.com, .net, .org, .io, etc.), WHOIS privacy protection is bundled 100% free of charge to safeguard your company against unsolicited sales calls and spam.",
    },
    {
      q: "Can I manage custom DNS records (A, CNAME, MX, TXT)?",
      a: "Yes. You get full granular control through our intuitive DNS management dashboard, allowing you to easily configure custom Google Workspace, Microsoft 365, Cloudflare, and custom mail servers.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. HERO SECTION WITH LIVE DOMAIN CHECKER */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/sub_domain_dns.jpg"
            alt="Global telecommunications and digital domain network"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/85 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
              <Globe size={14} />
              <span>OFFICIAL DOMAIN REGISTRAR</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Secure Your Corporate Identity with the Perfect Domain.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Premium international TLDs, instant DNS propagation, free WHOIS privacy, and zero hidden renewal markups.
            </p>
          </div>

          {/* Interactive Live Search Simulator */}
          <DomainSearchClient />
        </div>
      </section>

      {/* 2. TLD PRICING MATRIX TABLE */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              TRANSPARENT TLD PRICING IN USD ($)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
              Honest Domain Pricing with Zero Markup Traps
            </h2>
            <p className="text-sm text-[#667085]">
              No inflated renewal tricks. What you see is what you pay, billed cleanly in US Dollars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tldPricing.map((tld) => {
              const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20want%20to%20register%20a%20${encodeURIComponent(
                tld.extension
              )}%20domain%20for%20${encodeURIComponent(tld.price + tld.period)}.`;

              return (
                <div
                  key={tld.extension}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    tld.popular
                      ? "bg-white border-[#C59B27] shadow-xl ring-2 ring-[#C59B27]/20"
                      : "bg-[#FAF8F5] border-[#E4E7EC] hover:shadow-md hover:border-[#C59B27]/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-[#070B14]">{tld.extension}</span>
                      {tld.badge && (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#C59B27]/15 text-[#B38728]">
                          {tld.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#667085] line-clamp-2 mb-4 leading-relaxed">
                      {tld.purpose}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-[#070B14]">{tld.price}</div>
                      <span className="text-[10px] text-slate-400 font-medium">{tld.period}</span>
                    </div>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold transition-all shadow-md shadow-[#C59B27]/20"
                    >
                      <span>Register</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY REGISTER WITH BIRD HILLS TECH */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
              ENTERPRISE DOMAIN MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
              Everything Included With Every Domain Name
            </h2>
            <p className="text-sm text-[#667085]">
              Other registrars charge extra fees for WHOIS privacy and DNS security. We provide it standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domainFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-8 rounded-3xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/30 space-y-3 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#070B14]">{f.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

            {/* 3.5 GLOBAL ANYCAST DNS & CYBER SHIELDING INFRASTRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-2xl bg-slate-900">
              <Image
                src="/images/generated/page_domains_network.jpg"
                alt="Global Anycast DNS Mesh and Sovereign Domain Infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#070B14]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  ANYCAST DNS PROPAGATION MESH
                </div>
                <div className="text-xs text-slate-300">
                  Distributed root nameservers across Europe, North America, Middle East, and Asia Pacific.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
                EDGE RESOLUTION PERFORMANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] tracking-tight">
                Sub-Millisecond Query Resolution Standard
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                Slow DNS query lookups degrade user experience before a single byte of your website loads. We route your domain queries through redundant Tier-1 Anycast nameservers to guarantee instant resolution worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC]">
                  <div className="text-xl font-black text-[#070B14]">&lt; 10ms</div>
                  <div className="text-xs text-[#667085] mt-1 font-medium">Global DNS Lookup Latency</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E4E7EC]">
                  <div className="text-xl font-black text-[#070B14]">100%</div>
                  <div className="text-xs text-[#667085] mt-1 font-medium">Anycast DNS Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOMAIN TRANSFER & CONSOLIDATION SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#070B14] via-[#0F1420] to-[#070B14] border-t border-[#C59B27]/25 text-white" id="transfer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30">
                PORTFOLIO CONSOLIDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Transfer Your Existing Domains with Zero Interruption.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Consolidate your domains and cloud hosting under a single authoritative technology partner. Every domain transfer includes an automatic 1-year renewal extension and dedicated technical oversight.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C59B27]/30 transition-colors">
                  <div className="text-lg font-bold text-white">01. Unlock</div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Disable registrar lock at your current provider
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C59B27]/30 transition-colors">
                  <div className="text-lg font-bold text-white">02. Auth Code</div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Copy your domain EPP or Authorization key
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C59B27]/30 transition-colors">
                  <div className="text-lg font-bold text-white">03. Renew +1 Yr</div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    We complete transfer with full year added
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Transfer Your Corporate Portfolio</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Managing multiple domains across GoDaddy, Namecheap, or Google Domains? Let our registrar squad manage your transfer smoothly.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20transfer%20my%20domain%20names%20to%20your%20management."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle size={15} />
                  <span>Chat with Domain Registrar on WhatsApp</span>
                </a>
                <Link
                  href="/hosting"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#070B14] hover:bg-slate-100 text-xs font-bold transition-all"
                >
                  <Server size={14} />
                  <span>Pair with Cloud Hosting Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOMAIN FAQS ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={domainFaqs.map((f) => ({
          question: f.q,
          answer: f.a,
          category: "Domain Registry",
        }))}
        title="Domain Registration Frequently Asked Questions"
        eyebrow="REGISTRY CLARITY"
        description="Clear guidance on .ae domain registration requirements, DNSSEC security, free WHOIS privacy, and portfolio transfers."
        theme="light"
        includeSchema={true}
      />

      <FinalCtaSection />
    </div>
  );
}
