"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Calendar,
  ChevronDown,
  Code2,
  Layers,
  ShoppingBag,
  Palette,
  Sparkles,
  TrendingUp,
  Search,
  Cpu,
  Globe,
  Server,
  HardDrive,
  ShieldCheck,
  Mail,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Logo from "./Logo";

const servicesList = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    desc: "Ultra-fast custom corporate websites & platforms",
    icon: Code2,
  },
  {
    title: "Web Applications",
    slug: "/services/web-applications",
    desc: "Bespoke SaaS platforms & enterprise portals",
    icon: Layers,
  },
  {
    title: "E-commerce Solutions",
    slug: "/services/ecommerce",
    desc: "Conversion-optimized online stores & GCC payments",
    icon: ShoppingBag,
  },
  {
    title: "UI/UX Design",
    slug: "/services/ui-ux-design",
    desc: "Research-driven human-centric digital interfaces",
    icon: Palette,
  },
  {
    title: "Branding & Creative",
    slug: "/services/branding",
    desc: "Authoritative corporate identity & design systems",
    icon: Sparkles,
  },
  {
    title: "Digital Marketing",
    slug: "/services/digital-marketing",
    desc: "Data-driven performance PPC & paid acquisition",
    icon: TrendingUp,
  },
  {
    title: "SEO Solutions",
    slug: "/services/seo",
    desc: "Technical SEO & local Dubai organic dominance",
    icon: Search,
  },
  {
    title: "AI Solutions",
    slug: "/services/ai-solutions",
    desc: "Intelligent conversational agents & workflow automation",
    icon: Cpu,
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
  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsHostingOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
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
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                // 1. SERVICES DROPDOWN
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
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-[#1D68BD] font-semibold"
                            : "text-[#101828] hover:text-[#1D68BD] hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180 text-[#1D68BD]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="bg-white rounded-2xl shadow-xl border border-[#E4E7EC] p-4 grid grid-cols-2 gap-2">
                            {servicesList.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  href={service.slug}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F9FC] transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#EBF3FE] flex items-center justify-center text-[#1D68BD] shrink-0 group-hover:bg-[#1D68BD] group-hover:text-white transition-colors">
                                    <Icon size={16} />
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-[#101828] group-hover:text-[#1D68BD] transition-colors">
                                      {service.title}
                                    </div>
                                    <div className="text-[11px] text-[#667085] leading-tight mt-0.5 line-clamp-1">
                                      {service.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="col-span-2 mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-2">
                              <span className="text-xs text-slate-500 font-medium">
                                Looking for bespoke technology & growth?
                              </span>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1"
                              >
                                View All Services <ArrowRight size={12} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // 2. HOSTING & DOMAINS MEGA MENU
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
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-[#1D68BD] font-semibold"
                            : "text-[#101828] hover:text-[#1D68BD] hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isHostingOpen ? "rotate-180 text-[#1D68BD]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Mega Menu Container */}
                      {isHostingOpen && (
                        <div className="absolute top-full -left-40 xl:left-1/2 xl:-translate-x-1/2 pt-2 w-[880px] max-w-[95vw] transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="bg-white rounded-3xl shadow-2xl border border-[#E4E7EC] p-6 grid grid-cols-12 gap-6">
                            {/* Col 1: Domains */}
                            <div className="col-span-3 space-y-3 border-r border-slate-100 pr-3">
                              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D68BD]">
                                <Globe size={15} />
                                <span>Domains</span>
                              </div>
                              <div className="space-y-1">
                                {hostingMegaMenu.domains.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block p-2 rounded-xl hover:bg-[#F7F9FC] transition-colors group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-[#101828] group-hover:text-[#1D68BD] transition-colors">
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#EBF3FE] text-[#1D68BD]">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                                      {item.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/domains"
                                className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                              >
                                Live Domain Search Checker →
                              </Link>
                            </div>

                            {/* Col 2: Web Hosting */}
                            <div className="col-span-3 space-y-3 border-r border-slate-100 pr-3">
                              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D68BD]">
                                <Server size={15} />
                                <span>Web Hosting</span>
                              </div>
                              <div className="space-y-1">
                                {hostingMegaMenu.hosting.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block p-2 rounded-xl hover:bg-[#F7F9FC] transition-colors group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-[#101828] group-hover:text-[#1D68BD] transition-colors">
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                                      {item.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/hosting"
                                className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                              >
                                Explore Cloud Plans →
                              </Link>
                            </div>

                            {/* Col 3: Servers & Security */}
                            <div className="col-span-3 space-y-3">
                              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D68BD]">
                                <HardDrive size={15} />
                                <span>Infrastructure</span>
                              </div>
                              <div className="space-y-1">
                                {hostingMegaMenu.servers.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block p-2 rounded-xl hover:bg-[#F7F9FC] transition-colors group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-[#101828] group-hover:text-[#1D68BD] transition-colors">
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#EBF3FE] text-[#1D68BD]">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                                      {item.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/hosting#vps"
                                className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1 pt-1 pl-2"
                              >
                                View VPS & Bare-Metal →
                              </Link>
                            </div>

                            {/* Col 4: Featured Promo Card */}
                            <div className="col-span-3 rounded-2xl bg-gradient-to-br from-[#070D1B] to-[#122244] p-5 text-white flex flex-col justify-between shadow-md">
                              <div>
                                <span className="inline-block px-2 py-0.5 rounded-md text-[9px] font-extrabold tracking-wider uppercase bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 mb-2.5">
                                  DUBAI CLOUD NODE
                                </span>
                                <h4 className="text-sm font-bold text-white leading-tight mb-1.5">
                                  High-Speed Cloud from $9.99/mo
                                </h4>
                                <p className="text-[11px] text-slate-300 leading-relaxed">
                                  Pure NVMe SSD array, free SSL, 10 corporate mailboxes, and sub-second GCC edge latency.
                                </p>
                              </div>

                              <div className="pt-4 mt-4 border-t border-white/15 space-y-2">
                                <Link
                                  href="/hosting"
                                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-bold transition-colors"
                                >
                                  View Hosting Plans <ArrowRight size={12} />
                                </Link>
                                <Link
                                  href="/domains"
                                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold transition-colors"
                                >
                                  Search Domain Names
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
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-[#1D68BD] font-semibold"
                        : "text-[#101828] hover:text-[#1D68BD] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right-Side Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#101828] hover:text-[#1D68BD] hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
              >
                <Calendar size={14} className="text-[#1D68BD]" />
                Book a Meeting
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1D68BD] hover:bg-[#155196] rounded-lg shadow-xs transition-all hover:shadow hover:translate-y-[-0.5px]"
              >
                Let&apos;s Talk
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-lg text-[#101828] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D68BD]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Polished Full-Screen Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex-1 flex flex-col justify-between max-w-md mx-auto w-full">
            <div className="space-y-6">
              <div className="text-xs font-bold tracking-wider text-[#667085] uppercase">
                Navigation
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Home
                </Link>

                {/* Services Group */}
                <div>
                  <Link
                    href="/services"
                    className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors flex items-center justify-between"
                  >
                    Services
                  </Link>
                  <div className="mt-2 pl-3 border-l-2 border-slate-200 grid grid-cols-1 gap-2">
                    {servicesList.slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        href={s.slug}
                        className="text-xs text-[#667085] hover:text-[#1D68BD] font-medium transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="text-[11px] text-[#1D68BD] font-semibold mt-0.5 inline-flex items-center gap-1"
                    >
                      View All 8 Services →
                    </Link>
                  </div>
                </div>

                {/* Hosting & Domains Group */}
                <div>
                  <div className="text-xl font-bold text-[#0B1730] flex items-center justify-between">
                    Hosting & Domains
                  </div>
                  <div className="mt-2 pl-3 border-l-2 border-[#1D68BD] grid grid-cols-1 gap-2">
                    <Link
                      href="/domains"
                      className="text-xs text-[#101828] hover:text-[#1D68BD] font-semibold transition-colors flex items-center justify-between"
                    >
                      <span>Domain Registration & Search</span>
                      <span className="text-[10px] text-[#1D68BD] bg-[#EBF3FE] px-1.5 py-0.5 rounded font-bold">
                        .ae / .com
                      </span>
                    </Link>
                    <Link
                      href="/hosting"
                      className="text-xs text-[#101828] hover:text-[#1D68BD] font-semibold transition-colors flex items-center justify-between"
                    >
                      <span>Ultra-Fast Cloud Hosting</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                        From $9.99
                      </span>
                    </Link>
                    <Link
                      href="/hosting#vps"
                      className="text-xs text-[#667085] hover:text-[#1D68BD] font-medium transition-colors"
                    >
                      Managed Cloud VPS & Dedicated Servers
                    </Link>
                    <Link
                      href="/hosting#migration"
                      className="text-xs text-[#667085] hover:text-[#1D68BD] font-medium transition-colors"
                    >
                      Free Zero-Downtime Migration Guarantee
                    </Link>
                  </div>
                </div>

                <Link
                  href="/work"
                  className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/pricing"
                  className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Pricing Packages (USD $)
                </Link>
                <Link
                  href="/blog"
                  className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Blog & Insights
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  About Bird Hills
                </Link>
                <Link
                  href="/contact"
                  className="text-xl font-bold text-[#1D68BD] hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Mobile Footer CTAs & Contact */}
            <div className="pt-6 border-t border-slate-200 space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/book-a-meeting"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E4E7EC] font-semibold text-xs text-[#101828] hover:bg-slate-50 transition-colors"
                >
                  <Calendar size={15} className="text-[#1D68BD]" />
                  Book Meeting
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1D68BD] text-white font-semibold text-xs hover:bg-[#155196] shadow-xs transition-colors"
                >
                  Let&apos;s Talk
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="bg-[#F7F9FC] p-3.5 rounded-xl text-xs text-[#667085] space-y-1.5">
                <div className="font-semibold text-[#101828]">Dubai Corporate Office</div>
                <div>Deira - Stone Building - 122 7th A Street - Al Baraha, Dubai, UAE</div>
                <div className="pt-1 flex items-center justify-between text-[#1D68BD] font-medium">
                  <span className="flex items-center gap-1">
                    <Phone size={13} /> +971 52 440 5785
                  </span>
                  <a
                    href="https://wa.me/971524405785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
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
