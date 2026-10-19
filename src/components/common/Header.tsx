"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  TrendingUp,
  MapPin,
  Sparkles,
  Bot,
  ChevronRight,
  Calendar,
  Layers,
  Workflow,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Logo from "./Logo";

// 1. THE 6 PRIMARY MAIN MENU SERVICES (Requested by client)
export const MAIN_MENU_SERVICES = [
  {
    id: "web-development",
    name: "Web Development",
    href: "/services/web-development",
    icon: Code2,
    tagline: "High-performance websites, Next.js apps & portals",
    badge: "Enterprise",
    subItems: [
      { title: "Business Websites", href: "/services/web-development/business-websites" },
      { title: "WordPress", href: "/services/web-development/wordpress" },
      { title: "eCommerce", href: "/services/web-development/ecommerce" },
      { title: "Landing Pages", href: "/services/web-development/landing-pages" },
      { title: "Custom Development", href: "/services/web-development/custom-development" },
      { title: "Website Redesign", href: "/services/web-development/redesign" },
      { title: "Website Support", href: "/services/web-development/support" },
    ],
  },
  {
    id: "domain-hosting",
    name: "Domain & Hosting",
    href: "/hosting",
    icon: Globe,
    tagline: "Accredited .ae domains, NVMe cloud & business email",
    badge: "99.99% Uptime",
    subItems: [
      { title: "Domain Registration", href: "/domains" },
      { title: "Domain Transfer & Management", href: "/domains/transfer" },
      { title: "Web Hosting", href: "/hosting" },
      { title: "Business Email", href: "/hosting/email" },
      { title: "SSL & Website Security", href: "/hosting/security" },
      { title: "DNS Management", href: "/domains/dns" },
      { title: "Website Migration", href: "/hosting/migration" },
      { title: "Backup & Maintenance", href: "/hosting/maintenance" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: TrendingUp,
    tagline: "Closed-loop commercial customer acquisition",
    badge: "High ROAS",
    subItems: [
      { title: "SEO", href: "/services/digital-marketing/seo" },
      { title: "Google Ads", href: "/services/digital-marketing/google-ads" },
      { title: "Meta Ads", href: "/services/digital-marketing/meta-ads" },
      { title: "TikTok Ads", href: "/services/digital-marketing/tiktok-ads" },
      { title: "Social Media Marketing", href: "/services/digital-marketing/social-media" },
      { title: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
      { title: "Email Marketing", href: "/services/digital-marketing/email-marketing" },
      { title: "Remarketing", href: "/services/digital-marketing/remarketing" },
      { title: "Lead Generation", href: "/services/digital-marketing/lead-gen" },
    ],
  },
  {
    id: "local-seo",
    name: "Local SEO",
    href: "/services/google-business-profile-local-seo",
    icon: MapPin,
    tagline: "Dominate Google Maps 3-Pack & capture local calls",
    badge: "Maps 3-Pack",
    subItems: [
      { title: "Google Business Profile Creation", href: "/services/google-business-profile-local-seo/creation" },
      { title: "GBP Verification Assistance", href: "/services/google-business-profile-local-seo/verification" },
      { title: "GBP Profile Optimization", href: "/services/google-business-profile-local-seo/optimization" },
      { title: "Google Maps Optimization", href: "/services/google-business-profile-local-seo/maps" },
      { title: "Local SEO", href: "/services/google-business-profile-local-seo/local-seo" },
      { title: "Local Keyword Optimization", href: "/services/google-business-profile-local-seo/keywords" },
      { title: "Review Management Strategy", href: "/services/google-business-profile-local-seo/reviews" },
      { title: "Local Citations", href: "/services/google-business-profile-local-seo/citations" },
      { title: "GBP Posts & Content", href: "/services/google-business-profile-local-seo/posts" },
      { title: "Multi-Location Management", href: "/services/google-business-profile-local-seo/multi-location" },
    ],
  },
  {
    id: "ai-seo-search",
    name: "AI SEO & Search",
    href: "/services/ai-seo-search",
    icon: Sparkles,
    tagline: "AEO & GEO search optimization for AI engines",
    badge: "Next-Gen SEO",
    subItems: [
      { title: "Technical SEO", href: "/services/ai-seo-search/technical-seo" },
      { title: "On-Page SEO", href: "/services/ai-seo-search/on-page-seo" },
      { title: "AEO — Answer Engine Optimization", href: "/services/ai-seo-search/aeo" },
      { title: "GEO — Generative Engine Optimization", href: "/services/ai-seo-search/geo" },
      { title: "AI Search Optimization", href: "/services/ai-seo-search/ai-search" },
      { title: "Semantic SEO", href: "/services/ai-seo-search/semantic-seo" },
      { title: "Programmatic SEO", href: "/services/ai-seo-search/programmatic-seo" },
      { title: "AI Content Strategy", href: "/services/ai-seo-search/content-strategy" },
      { title: "SEO Automation", href: "/services/ai-seo-search/automation" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    href: "/services/ai-automation",
    icon: Bot,
    tagline: "Autonomous AI agents, WhatsApp bots & n8n flows",
    badge: "24/7 AI",
    subItems: [
      { title: "AI Agents", href: "/services/ai-automation/ai-agents" },
      { title: "AI Chatbots", href: "/services/ai-automation/chatbots" },
      { title: "AI Workflow Automation", href: "/services/ai-automation/workflow" },
      { title: "WhatsApp Automation", href: "/services/ai-automation/whatsapp" },
      { title: "AI Sales Automation", href: "/services/ai-automation/sales" },
      { title: "AI Customer Support", href: "/services/ai-automation/support" },
      { title: "AI Lead Qualification", href: "/services/ai-automation/qualification" },
      { title: "AI Content Automation", href: "/services/ai-automation/content" },
      { title: "Business Process Automation", href: "/services/ai-automation/business-process" },
      { title: "n8n Automation", href: "/services/ai-automation/n8n" },
    ],
  },
];

// 2. ADDITIONAL SERVICES UNDER "OTHER SERVICES"
export const MORE_SERVICES = [
  {
    id: "crm-marketing-automation",
    title: "CRM & Marketing Automation",
    slug: "/services/crm-marketing-automation",
    icon: Workflow,
    desc: "HubSpot & Zoho setups, lead routing & automated nurture funnels",
    subItems: [
      { title: "CRM Setup", href: "/services/crm-marketing-automation/setup" },
      { title: "Lead Management", href: "/services/crm-marketing-automation/management" },
      { title: "Lead Automation", href: "/services/crm-marketing-automation/lead-automation" },
      { title: "Lead Routing", href: "/services/crm-marketing-automation/routing" },
      { title: "Email Automation", href: "/services/crm-marketing-automation/email" },
      { title: "WhatsApp Automation", href: "/services/crm-marketing-automation/whatsapp" },
      { title: "Sales Pipeline Automation", href: "/services/crm-marketing-automation/pipeline" },
      { title: "Appointment Automation", href: "/services/crm-marketing-automation/appointments" },
      { title: "CRM Integrations", href: "/services/crm-marketing-automation/integrations" },
    ],
  },
  {
    id: "branding-creative",
    title: "Branding & Creative",
    slug: "/services/branding-creative",
    icon: Palette,
    desc: "Prestigious corporate identity, bilingual typography & high-converting UI/UX",
    subItems: [
      { title: "Brand Identity", href: "/services/branding-creative/identity" },
      { title: "Logo Design", href: "/services/branding-creative/logo" },
      { title: "UI/UX Design", href: "/services/branding-creative/uiux" },
      { title: "Ad Creative", href: "/services/branding-creative/ad-creative" },
      { title: "Social Media Design", href: "/services/branding-creative/social" },
      { title: "Marketing Graphics", href: "/services/branding-creative/graphics" },
    ],
  },
  {
    id: "analytics-cro",
    title: "Analytics & CRO",
    slug: "/services/analytics-cro",
    icon: BarChart3,
    desc: "Server-side tracking, GTM, Meta CAPI & closed-loop reporting",
    subItems: [
      { title: "Google Analytics", href: "/services/analytics-cro/ga4" },
      { title: "Google Tag Manager", href: "/services/analytics-cro/gtm" },
      { title: "Conversion Tracking", href: "/services/analytics-cro/tracking" },
      { title: "Meta Pixel & CAPI", href: "/services/analytics-cro/capi" },
      { title: "Conversion Optimization", href: "/services/analytics-cro/cro" },
      { title: "Lead Attribution", href: "/services/analytics-cro/attribution" },
      { title: "Marketing Dashboards", href: "/services/analytics-cro/dashboards" },
      { title: "Reporting & Analytics", href: "/services/analytics-cro/reporting" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedService, setMobileExpandedService] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

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

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

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
            {/* Left Group: Brand Logo & Navigation close together */}
            <div className="flex items-center gap-4 lg:gap-6 xl:gap-7">
              <Logo />

              {/* Desktop Navigation: 6 Main Services Only */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
                {MAIN_MENU_SERVICES.map((service, index) => {
                  const isActive =
                    pathname === service.href ||
                    (service.href !== "/" && pathname.startsWith(service.href));
                  const isOpen = activeDropdown === service.id;
                  const Icon = service.icon;

                  let dropdownPositionClass = "left-0";
                  if (index === 2 || index === 3) dropdownPositionClass = "left-1/2 -translate-x-1/2";
                  if (index >= 4) dropdownPositionClass = "right-0";

                  return (
                    <div
                      key={service.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(service.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                          isActive || isOpen
                            ? "text-[#C59B27] bg-[#FAF8F5] font-bold"
                            : "text-[#0B0F19] hover:text-[#C59B27] hover:bg-slate-50"
                        }`}
                      >
                        <span>{service.name}</span>
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                    {/* Structured Sub-Menu Dropdown */}
                    {isOpen && (
                      <div
                        className={`absolute top-full pt-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${dropdownPositionClass}`}
                      >
                        <div
                          className={`bg-white rounded-2xl border border-[#C59B27]/30 shadow-2xl p-5 overflow-hidden ${
                            service.subItems.length > 7 ? "w-[460px]" : "w-[410px]"
                          }`}
                        >
                          {/* Header Banner */}
                          <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                                <Icon size={16} />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#070B14]">
                                  {service.name}
                                </div>
                                <div className="text-[11px] text-[#667085] leading-tight">
                                  {service.tagline}
                                </div>
                              </div>
                            </div>
                            <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#C59B27]/15 text-[#B38728] border border-[#C59B27]/25 shrink-0">
                              {service.badge}
                            </span>
                          </div>

                          {/* Sub-menu Tree Presentation (Structured 2-Column Grid) */}
                          <div className="grid grid-cols-2 gap-1">
                            {service.subItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#0B0F19] hover:text-[#C59B27] hover:bg-[#FAF8F5] transition-all group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]/40 group-hover/item:bg-[#C59B27] group-hover/item:scale-125 transition-all shrink-0" />
                                <span className="truncate">{item.title}</span>
                              </Link>
                            ))}
                          </div>

                          {/* Bottom Action */}
                          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                            <Link
                              href={service.href}
                              className="font-bold text-[#C59B27] hover:text-[#B38728] inline-flex items-center gap-1 group/link"
                            >
                              <span>View All {service.name}</span>
                              <ChevronRight
                                size={12}
                                className="transition-transform group-hover/link:translate-x-0.5"
                              />
                            </Link>
                            <Link
                              href="/pricing"
                              className="text-slate-500 hover:text-[#C59B27] font-semibold"
                            >
                              Pricing Packages →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* 7. Other Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("more-services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeDropdown === "more-services" ||
                    pathname.startsWith("/services/crm-marketing-automation") ||
                    pathname.startsWith("/services/branding-creative") ||
                    pathname.startsWith("/services/analytics-cro")
                      ? "text-[#C59B27] bg-[#FAF8F5] font-bold"
                      : "text-[#0B0F19] hover:text-[#C59B27] hover:bg-slate-50"
                  }`}
                >
                  <Layers size={13} className="text-[#C59B27]" />
                  <span>Other Services</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "more-services" ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "more-services" && (
                  <div className="absolute top-full right-0 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-white rounded-2xl border border-[#C59B27]/30 shadow-2xl p-6 w-[780px] lg:w-[800px] xl:w-[820px] overflow-hidden">
                      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-[#C59B27]">
                            ADDITIONAL PRACTICE DISCIPLINES
                          </div>
                          <div className="text-[12px] text-[#667085]">
                            Full-suite operational, creative, and analytics infrastructure
                          </div>
                        </div>
                        <Link
                          href="/services"
                          className="text-xs font-bold text-[#C59B27] hover:underline flex items-center gap-1"
                        >
                          <span>Explore All 9 Practices</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* 3 Columns for CRM, Branding, Analytics */}
                      <div className="grid grid-cols-3 gap-6">
                        {MORE_SERVICES.map((srv) => {
                          const SrvIcon = srv.icon;
                          return (
                            <div key={srv.id} className="space-y-3">
                              <Link
                                href={srv.slug}
                                className="flex items-center gap-2 group/title"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27] shrink-0">
                                  <SrvIcon size={14} />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[#070B14] group-hover/title:text-[#C59B27] transition-colors leading-tight">
                                    {srv.title}
                                  </div>
                                </div>
                              </Link>
                              <div className="space-y-1">
                                {srv.subItems.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    className="flex items-center gap-2 px-2 py-1 rounded-md text-[11px] font-semibold text-[#667085] hover:text-[#070B14] hover:bg-[#FAF8F5] transition-colors group/sub"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#C59B27]/50 group-hover/sub:bg-[#C59B27] transition-colors shrink-0" />
                                    <span className="truncate">{sub.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Bottom Banner with Portfolio & Pricing quick links */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-[#FAF8F5] -mx-6 -mb-6 p-4">
                        <div className="flex items-center gap-4 text-xs font-semibold text-[#070B14]">
                          <Link
                            href="/work"
                            className="hover:text-[#C59B27] transition-colors flex items-center gap-1"
                          >
                            <span>Case Studies & Portfolio</span>
                            <ChevronRight size={12} className="text-[#C59B27]" />
                          </Link>
                          <span className="text-slate-300">·</span>
                          <Link
                            href="/pricing"
                            className="hover:text-[#C59B27] transition-colors flex items-center gap-1"
                          >
                            <span>Pricing Packages (AED & USD)</span>
                            <ChevronRight size={12} className="text-[#C59B27]" />
                          </Link>
                        </div>
                        <Link
                          href="/contact"
                          className="font-bold text-[#C59B27] hover:underline"
                        >
                          Request Custom Scope →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            </div>

            {/* Right Group: Fast Consultation Meeting Shortcut & Global Edition */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="https://birdhillstech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#C59B27] bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 rounded-xl transition-all shadow-2xs hover:bg-white"
                title="Switch to Bird Hills Tech Global Platform"
              >
                <Globe size={13} className="text-[#C59B27]" />
                <span className="hidden xl:inline">Global (USD)</span>
                <span className="xl:hidden">Global</span>
              </a>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0B0F19] hover:text-[#C59B27] bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/40 rounded-xl transition-all shadow-2xs hover:bg-white"
              >
                <Calendar size={13} className="text-[#C59B27]" />
                <span className="hidden xl:inline">Book a Meeting</span>
                <span className="xl:hidden">Meeting</span>
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
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

      {/* Responsive Mobile / Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-5 sm:px-8 pb-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex-1 flex flex-col justify-between max-w-lg mx-auto w-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[11px] font-extrabold tracking-wider text-[#C59B27] uppercase">
                  PRACTICE DISCIPLINES
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">
                  Main Services
                </span>
              </div>

              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold text-[#0B0F19] hover:text-[#C59B27] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
                >
                  Home
                </Link>

                {/* 6 Primary Service Accordions */}
                {MAIN_MENU_SERVICES.map((srv) => {
                  const SrvIcon = srv.icon;
                  const isExpanded = mobileExpandedService === srv.id;

                  return (
                    <div
                      key={srv.id}
                      className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedService(isExpanded ? null : srv.id)
                        }
                        className="w-full flex items-center justify-between p-3.5 bg-[#FAF8F5] text-left font-bold text-xs text-[#0B0F19]"
                      >
                        <span className="flex items-center gap-2">
                          <SrvIcon size={15} className="text-[#C59B27]" />
                          <span>{srv.name}</span>
                        </span>
                        <ChevronDown
                          size={15}
                          className={`text-slate-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#C59B27]" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 bg-white space-y-1.5 border-t border-slate-100">
                          <div className="pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500">{srv.tagline}</span>
                            <Link
                              href={srv.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-[11px] font-bold text-[#C59B27] hover:underline"
                            >
                              Overview →
                            </Link>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {srv.subItems.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-2 py-1.5 px-2 rounded-md text-xs font-semibold text-[#0B0F19] hover:bg-[#FAF8F5] hover:text-[#C59B27]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                                <span>{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* 7. Other Services Accordion (CRM, Branding, Analytics) */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedService(
                        mobileExpandedService === "more-services" ? null : "more-services"
                      )
                    }
                    className="w-full flex items-center justify-between p-3.5 bg-[#FAF8F5] text-left font-bold text-xs text-[#0B0F19]"
                  >
                    <span className="flex items-center gap-2">
                      <Layers size={15} className="text-[#C59B27]" />
                      <span>Other Services (CRM, Branding, Analytics)</span>
                    </span>
                    <ChevronDown
                      size={15}
                      className={`text-slate-400 transition-transform duration-200 ${
                        mobileExpandedService === "more-services" ? "rotate-180 text-[#C59B27]" : ""
                      }`}
                    />
                  </button>

                  {mobileExpandedService === "more-services" && (
                    <div className="p-3 bg-white space-y-4 border-t border-slate-100">
                      {MORE_SERVICES.map((ms) => {
                        const MsIcon = ms.icon;
                        return (
                          <div key={ms.id} className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#070B14] flex items-center gap-1.5">
                                <MsIcon size={13} className="text-[#C59B27]" />
                                {ms.title}
                              </span>
                              <Link
                                href={ms.slug}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[10px] font-bold text-[#C59B27] hover:underline"
                              >
                                View →
                              </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-4">
                              {ms.subItems.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-xs text-[#667085] hover:text-[#070B14] py-1 block"
                                >
                                  • {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Additional Quick Links */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href="/work"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-bold text-center py-2.5 px-3 rounded-xl border border-slate-200 hover:border-[#C59B27]/40 text-[#070B14]"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-bold text-center py-2.5 px-3 rounded-xl border border-slate-200 hover:border-[#C59B27]/40 text-[#070B14]"
                  >
                    Pricing Packages
                  </Link>
                </div>
              </nav>
            </div>

            {/* Bottom Actions: Clean, No Address, No Let's Talk */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/book-a-meeting"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-[#0B0F19] font-bold text-xs transition-colors w-full"
              >
                <Calendar size={13} className="text-[#C59B27]" />
                <span>Book a Meeting</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
