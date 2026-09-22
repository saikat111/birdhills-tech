"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Calendar,
  ChevronDown,
  Code2,
  Globe,
  Server,
  TrendingUp,
  MapPin,
  Sparkles,
  Bot,
  Workflow,
  Palette,
  BarChart3,
  HardDrive,
  ShieldCheck,
  Phone,
  ChevronRight,
  Zap,
} from "lucide-react";
import Logo from "./Logo";

// The 9 official services structured into 4 cohesive practice groups
export const serviceCategories = [
  {
    category: "Web & Infrastructure",
    services: [
      {
        title: "Web Development",
        slug: "/services/web-development",
        desc: "Custom Next.js corporate platforms & bespoke systems",
        subItems: ["Business Websites", "WordPress", "eCommerce", "Landing Pages", "Custom Dev"],
        icon: Code2,
      },
      {
        title: "Domain & Hosting",
        slug: "/hosting",
        desc: "NVMe edge hosting, .ae UAE domains & secure mail",
        subItems: [".ae Domains", "Cloud Hosting", "Business Email", "SSL & Security"],
        icon: Globe,
      },
    ],
  },
  {
    category: "Search & Local Growth",
    services: [
      {
        title: "Google Business Profile & Local SEO",
        slug: "/services/google-business-profile-local-seo",
        desc: "Dubai Google Maps #1 rank & review reputation",
        subItems: ["GBP Verification", "Maps Ranking", "Local Citations", "Review Growth"],
        icon: MapPin,
      },
      {
        title: "AI SEO & Search",
        slug: "/services/ai-seo-search",
        desc: "AEO, GEO, technical SEO & generative search authority",
        subItems: ["AEO & GEO", "Technical SEO", "Semantic Search", "Programmatic SEO"],
        icon: Sparkles,
      },
    ],
  },
  {
    category: "Intelligent Automation",
    services: [
      {
        title: "AI Automation",
        slug: "/services/ai-automation",
        desc: "Autonomous AI agents, WhatsApp bots & n8n workflows",
        subItems: ["AI Agents", "WhatsApp Bots", "Workflow Automation", "n8n Pipelines"],
        icon: Bot,
      },
      {
        title: "CRM & Marketing Automation",
        slug: "/services/crm-marketing-automation",
        desc: "HubSpot, Zoho, sales pipeline & lead qualification",
        subItems: ["CRM Setup", "Lead Routing", "Pipeline Automation", "Sales Integrations"],
        icon: Workflow,
      },
    ],
  },
  {
    category: "Creative & Intelligence",
    services: [
      {
        title: "Digital Marketing",
        slug: "/services/digital-marketing",
        desc: "Commercial Google Ads, Meta Ads & LinkedIn B2B",
        subItems: ["Google Ads", "Meta Ads", "Social Media", "Lead Generation"],
        icon: TrendingUp,
      },
      {
        title: "Branding & Creative",
        slug: "/services/branding-creative",
        desc: "Prestigious corporate identity, UI/UX & ad creatives",
        subItems: ["Brand Identity", "Logo Systems", "UI/UX Design", "Ad Creatives"],
        icon: Palette,
      },
      {
        title: "Analytics & CRO",
        slug: "/services/analytics-cro",
        desc: "GA4, GTM, Meta CAPI, dashboards & CRO funnels",
        subItems: ["GA4 & GTM", "Meta CAPI", "Conversion Audits", "Custom Dashboards"],
        icon: BarChart3,
      },
    ],
  },
];

const hostingMegaMenu = {
  domains: [
    { title: "Search & Register Domains", href: "/domains", desc: ".com, .ae, .ai, .io & 400+ extensions", badge: "Instant" },
    { title: ".ae UAE National Identity", href: "/domains#tld-ae", desc: "Accredited UAE corporate registration", badge: "Popular" },
    { title: "Zero-Downtime Transfer", href: "/domains#transfer", desc: "Transfer existing domains with 1-year renewal", badge: "Free" },
    { title: "WHOIS Privacy & DNSSEC", href: "/domains#security", desc: "Bank-grade registrant protection & DNS security" },
  ],
  hosting: [
    { title: "Ultra-Fast Cloud Hosting", href: "/hosting", desc: "Pure NVMe storage, free SSL & 1-click staging", badge: "From $9.99/mo" },
    { title: "WordPress & Next.js Cloud", href: "/hosting#wordpress", desc: "GCC edge-cached optimized speed stack", badge: "Fast" },
    { title: "Corporate Web Hosting", href: "/hosting#business", desc: "High-traffic business portals with SLA" },
    { title: "Free 24/7 Migration", href: "/hosting#migration", desc: "White-glove website migration with zero loss", badge: "Free" },
  ],
  servers: [
    { title: "Managed Cloud VPS", href: "/hosting#vps", desc: "Dedicated vCPU, NVMe RAID-10 & root access", badge: "From $59.99" },
    { title: "Dedicated Bare-Metal", href: "/hosting#dedicated", desc: "High-throughput servers for DIFC compliance" },
    { title: "Professional Business Email", href: "/hosting#email", desc: "Branded corporate inboxes with SpamAssassin" },
    { title: "GCC Low-Latency Edge", href: "/hosting#infrastructure", desc: "Sub-15ms regional latency across UAE" },
  ],
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHostingOpen, setIsHostingOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsHostingOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasServicesDropdown: true },
    { name: "Hosting & Domains", href: "/hosting", hasHostingMegaMenu: true },
    { name: "Portfolio", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E4E7EC] py-3.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                // 1. SERVICES 4-COLUMN MEGA MENU (9 SERVICES)
                if (link.hasServicesDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => {
                        setIsServicesOpen(true);
                        setIsHostingOpen(false);
                      }}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                          isActive
                            ? "text-[#C59B27] font-bold"
                            : "text-[#0B0F19] hover:text-[#C59B27] hover:bg-[#FAF8F5]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* 4-Column Luxury Mega Menu Container */}
                      {isServicesOpen && (
                        <div className="absolute top-full -left-28 xl:-left-40 pt-2 w-[980px] max-w-[95vw] transition-all animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="bg-white rounded-3xl shadow-2xl border border-[#E4E7EC] p-6 overflow-hidden">
                            {/* Header row in mega menu */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/10 text-[#C59B27] border border-[#C59B27]/20">
                                  9 Core Disciplines
                                </span>
                                <span className="text-xs font-semibold text-[#0B0F19]">
                                  Full-Service Technology, Creative & Growth Agency
                                </span>
                              </div>
                              <Link
                                href="/services"
                                className="text-xs font-bold text-[#C59B27] hover:text-[#B38728] inline-flex items-center gap-1"
                              >
                                View All 9 Services Overview <ArrowRight size={13} />
                              </Link>
                            </div>

                            {/* 4 Practice Columns */}
                            <div className="grid grid-cols-4 gap-5">
                              {serviceCategories.map((group) => (
                                <div key={group.category} className="space-y-3.5">
                                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#C59B27] border-b border-slate-100 pb-1.5 whitespace-nowrap">
                                    {group.category}
                                  </div>
                                  <div className="space-y-3">
                                    {group.services.map((svc) => {
                                      const Icon = svc.icon;
                                      return (
                                        <Link
                                          key={svc.slug}
                                          href={svc.slug}
                                          className="block p-2.5 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#C59B27]/20 transition-all group"
                                        >
                                          <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#C59B27] flex items-center justify-center shrink-0 group-hover:bg-[#C59B27] group-hover:text-white transition-colors">
                                              <Icon size={14} />
                                            </div>
                                            <span className="text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] transition-colors leading-tight">
                                              {svc.title}
                                            </span>
                                          </div>
                                          <p className="text-[10px] text-[#667085] leading-relaxed mt-1">
                                            {svc.desc}
                                          </p>
                                          <div className="flex flex-wrap gap-1 mt-1.5">
                                            {svc.subItems.slice(0, 3).map((item) => (
                                              <span
                                                key={item}
                                                className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-[#C59B27]/10 group-hover:text-[#C59B27] transition-colors whitespace-nowrap"
                                              >
                                                {item}
                                              </span>
                                            ))}
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Mega Menu Footer Banner */}
                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-[#FAF8F5] to-white p-3.5 rounded-2xl">
                              <div className="flex items-center gap-2 text-xs text-slate-700">
                                <Sparkles size={14} className="text-[#C59B27]" />
                                <span className="font-semibold">Need a custom enterprise architecture or multi-channel retainer?</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Link
                                  href="/book-a-meeting"
                                  className="text-xs font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors"
                                >
                                  Book Technical Call
                                </Link>
                                <a
                                  href="https://wa.me/971524405785"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#1ebd59] transition-colors"
                                >
                                  WhatsApp Direct
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // 2. HOSTING & DOMAINS MEGA MENU (BULLET-PROOF 3-COLUMN + BOTTOM BANNER)
                if (link.hasHostingMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => {
                        setIsHostingOpen(true);
                        setIsServicesOpen(false);
                      }}
                      onMouseLeave={() => setIsHostingOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                          isActive
                            ? "text-[#C59B27] font-bold"
                            : "text-[#0B0F19] hover:text-[#C59B27] hover:bg-[#FAF8F5]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isHostingOpen ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Mega Menu Container - Fixed width with spacious 3 columns */}
                      {isHostingOpen && (
                        <div className="absolute top-full -left-56 xl:-left-72 pt-2 w-[860px] max-w-[95vw] transition-all animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="bg-white rounded-3xl shadow-2xl border border-[#E4E7EC] p-6 overflow-hidden">
                            {/* 3 Spacious Columns (Domains, Web Hosting, Infrastructure) */}
                            <div className="grid grid-cols-3 gap-6 pb-6 border-b border-slate-100">
                              {/* Col 1: Domains */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#C59B27] border-b border-slate-100 pb-2">
                                  <Globe size={15} />
                                  <span>Domains</span>
                                </div>
                                <div className="space-y-2">
                                  {hostingMegaMenu.domains.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="block p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors group"
                                    >
                                      <div className="flex items-start justify-between gap-2">
                                        <span className="text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] transition-colors leading-tight">
                                          {item.title}
                                        </span>
                                        {item.badge && (
                                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#C59B27]/10 text-[#C59B27] shrink-0 whitespace-nowrap">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-[#667085] leading-normal mt-0.5">
                                        {item.desc}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  href="/domains"
                                  className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                                >
                                  Live Domain Search →
                                </Link>
                              </div>

                              {/* Col 2: Web Hosting */}
                              <div className="space-y-3 border-x border-slate-100 px-4">
                                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#C59B27] border-b border-slate-100 pb-2">
                                  <Server size={15} />
                                  <span>Web Hosting</span>
                                </div>
                                <div className="space-y-2">
                                  {hostingMegaMenu.hosting.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="block p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors group"
                                    >
                                      <div className="flex items-start justify-between gap-2">
                                        <span className="text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] transition-colors leading-tight">
                                          {item.title}
                                        </span>
                                        {item.badge && (
                                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0 whitespace-nowrap">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-[#667085] leading-normal mt-0.5">
                                        {item.desc}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  href="/hosting"
                                  className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                                >
                                  Explore Cloud Plans →
                                </Link>
                              </div>

                              {/* Col 3: Infrastructure */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#C59B27] border-b border-slate-100 pb-2">
                                  <HardDrive size={15} />
                                  <span>Infrastructure</span>
                                </div>
                                <div className="space-y-2">
                                  {hostingMegaMenu.servers.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="block p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors group"
                                    >
                                      <div className="flex items-start justify-between gap-2">
                                        <span className="text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] transition-colors leading-tight">
                                          {item.title}
                                        </span>
                                        {item.badge && (
                                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#C59B27]/10 text-[#C59B27] shrink-0 whitespace-nowrap">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-[#667085] leading-normal mt-0.5">
                                        {item.desc}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  href="/hosting#vps"
                                  className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                                >
                                  View VPS Plans →
                                </Link>
                              </div>
                            </div>

                            {/* Full-Width Bottom Featured Cloud Node Banner */}
                            <div className="mt-5 p-4 rounded-2xl bg-[#070B14] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C59B27]/30 shadow-md">
                              <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                                  <Zap size={20} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded text-[9px] font-extrabold tracking-wider uppercase bg-[#C59B27]/25 text-[#D4AF37] border border-[#C59B27]/40">
                                      DUBAI CLOUD NODE
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-bold text-white">
                                      High-Speed Cloud from $9.99/mo
                                    </h4>
                                  </div>
                                  <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                                    Pure NVMe SSD array, free SSL, 10 corporate mailboxes, and sub-15ms GCC latency.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <Link
                                  href="/domains"
                                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors whitespace-nowrap"
                                >
                                  Search Domains
                                </Link>
                                <Link
                                  href="/hosting"
                                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all inline-flex items-center gap-1.5 whitespace-nowrap"
                                >
                                  <span>View Hosting Plans</span>
                                  <ArrowRight size={13} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Standard Nav Links
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#C59B27] font-bold"
                        : "text-[#0B0F19] hover:text-[#C59B27] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right-Side Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5 whitespace-nowrap">
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0B0F19] hover:text-[#C59B27] hover:bg-[#FAF8F5] rounded-xl transition-colors border border-slate-200"
              >
                <Calendar size={13} className="text-[#C59B27]" />
                <span>Book Meeting</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 rounded-xl shadow-md shadow-[#C59B27]/25 transition-all hover:translate-y-[-0.5px]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-xl text-[#0B0F19] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex-1 flex flex-col justify-between max-w-md mx-auto w-full">
            <div className="space-y-5">
              <div className="text-[11px] font-extrabold tracking-wider text-[#C59B27] uppercase">
                Explore Bird Hills Tech
              </div>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-lg font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors"
                >
                  Home
                </Link>

                {/* 9 Services Accordion */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedCat(mobileExpandedCat === "services" ? null : "services")
                    }
                    className="w-full flex items-center justify-between p-3.5 bg-[#FAF8F5] text-left font-bold text-sm text-[#0B0F19]"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 size={16} className="text-[#C59B27]" />
                      <span>Services (All 9 Disciplines)</span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform ${
                        mobileExpandedCat === "services" ? "rotate-180 text-[#C59B27]" : ""
                      }`}
                    />
                  </button>

                  {mobileExpandedCat === "services" && (
                    <div className="p-3 bg-white divide-y divide-slate-100 space-y-2">
                      {serviceCategories.flatMap((g) => g.services).map((s) => (
                        <div key={s.slug} className="pt-2 first:pt-0">
                          <Link
                            href={s.slug}
                            className="text-xs font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors flex items-center justify-between"
                          >
                            <span>{s.title}</span>
                            <ChevronRight size={12} className="text-slate-400" />
                          </Link>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {s.subItems.slice(0, 3).map((sub) => (
                              <span
                                key={sub}
                                className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="pt-2">
                        <Link
                          href="/services"
                          className="text-xs font-bold text-[#C59B27] hover:underline block py-1"
                        >
                          View Full Services Hub →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hosting & Domains Accordion */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedCat(mobileExpandedCat === "hosting" ? null : "hosting")
                    }
                    className="w-full flex items-center justify-between p-3.5 bg-[#FAF8F5] text-left font-bold text-sm text-[#0B0F19]"
                  >
                    <span className="flex items-center gap-2">
                      <Globe size={16} className="text-[#C59B27]" />
                      <span>Hosting & Domains</span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform ${
                        mobileExpandedCat === "hosting" ? "rotate-180 text-[#C59B27]" : ""
                      }`}
                    />
                  </button>

                  {mobileExpandedCat === "hosting" && (
                    <div className="p-3 bg-white space-y-2 text-xs">
                      <Link
                        href="/domains"
                        className="flex items-center justify-between font-semibold text-[#0B0F19] hover:text-[#C59B27]"
                      >
                        <span>Domain Registration (.ae, .com)</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C59B27]/10 text-[#C59B27] font-bold">
                          Instant
                        </span>
                      </Link>
                      <Link
                        href="/hosting"
                        className="flex items-center justify-between font-semibold text-[#0B0F19] hover:text-[#C59B27]"
                      >
                        <span>Ultra-Fast Cloud Hosting</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                          From $9.99
                        </span>
                      </Link>
                      <Link
                        href="/hosting#vps"
                        className="block text-slate-600 hover:text-[#C59B27]"
                      >
                        Managed Cloud VPS & Dedicated Servers
                      </Link>
                      <Link
                        href="/hosting#email"
                        className="block text-slate-600 hover:text-[#C59B27]"
                      >
                        Professional Business Email & SSL
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/work"
                  className="text-lg font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors flex items-center justify-between"
                >
                  <span>Pricing Packages</span>
                  <span className="text-xs font-semibold text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded-full">
                    USD $
                  </span>
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors"
                >
                  Blog & Insights
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors"
                >
                  About Bird Hills
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-bold text-[#C59B27] hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Mobile Footer CTAs & WhatsApp Contact */}
            <div className="pt-6 border-t border-slate-200 space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/book-a-meeting"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E4E7EC] font-bold text-xs text-[#0B0F19] hover:bg-slate-50 transition-colors"
                >
                  <Calendar size={14} className="text-[#C59B27]" />
                  <span>Book Meeting</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#C59B27]/20 text-xs text-[#667085] space-y-1.5">
                <div className="font-bold text-[#0B0F19] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                  <span>Dubai Corporate Office</span>
                </div>
                <div>Deira - Stone Building - 122 7th A Street - Al Baraha, Dubai, UAE</div>
                <div className="pt-1 flex items-center justify-between text-[#C59B27] font-semibold">
                  <span className="flex items-center gap-1">
                    <Phone size={13} /> +971 52 440 5785
                  </span>
                  <a
                    href="https://wa.me/971524405785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] underline"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
