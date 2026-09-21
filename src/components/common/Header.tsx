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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
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

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] transition-all">
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
                                Looking for integrated growth solutions?
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

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
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
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#101828] hover:text-[#1D68BD] hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
              >
                <Calendar size={14} className="text-[#1D68BD]" />
                Book a Meeting
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-[#1D68BD] hover:bg-[#155196] rounded-lg shadow-sm transition-all hover:shadow hover:translate-y-[-0.5px]"
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
                  className="text-2xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Home
                </Link>
                <div>
                  <Link
                    href="/services"
                    className="text-2xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors flex items-center justify-between"
                  >
                    Services
                  </Link>
                  <div className="mt-3 pl-3 border-l-2 border-slate-200 grid grid-cols-1 gap-2.5">
                    {servicesList.slice(0, 6).map((s) => (
                      <Link
                        key={s.slug}
                        href={s.slug}
                        className="text-sm text-[#667085] hover:text-[#1D68BD] font-medium transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="text-xs text-[#1D68BD] font-semibold mt-1 inline-flex items-center gap-1"
                    >
                      View All 8 Services →
                    </Link>
                  </div>
                </div>
                <Link
                  href="/work"
                  className="text-2xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Work & Case Studies
                </Link>
                <Link
                  href="/about"
                  className="text-2xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  About Bird Hills
                </Link>
                <Link
                  href="/insights"
                  className="text-2xl font-bold text-[#0B1730] hover:text-[#1D68BD] transition-colors"
                >
                  Insights & Blog
                </Link>
              </nav>
            </div>

            {/* Mobile Footer CTAs & Contact */}
            <div className="pt-8 border-t border-slate-200 space-y-4 mt-8">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/book-a-meeting"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E4E7EC] font-semibold text-xs text-[#101828] hover:bg-slate-50 transition-colors"
                >
                  <Calendar size={15} className="text-[#1D68BD]" />
                  Book a Meeting
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1D68BD] text-white font-semibold text-xs hover:bg-[#155196] shadow-sm transition-colors"
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
