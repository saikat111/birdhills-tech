"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  settings?: Record<string, string>;
}

export function Footer({ settings = {} }: FooterProps) {
  const pathname = usePathname();

  const phone = settings["phone"] || "+971 52 440 5785";
  const email = settings["email"] || "contact@birdhillstech.com";
  const address = settings["address"] || "Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE";
  const whatsapp = settings["whatsapp"] || "+971 52 440 5785";
  const companyName = settings["company_name"] || "Bird Hills Tech";
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const cleanWhatsapp = whatsapp.replace(/[^0-9]/g, "");

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#070B14] text-slate-300 border-t border-[#C59B27]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bird Hills Tech combines modern technology, creative strategy and commercial performance marketing to build powerful digital operations and measurable growth for ambitious UAE enterprises.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F172A] border border-[#C59B27]/30 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Dubai · UAE · Available for Strategic Engagements</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
              Company &amp; Insights
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#D4AF37] transition-colors">
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#D4AF37] transition-colors">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link href="/hosting" className="hover:text-[#D4AF37] transition-colors">
                  Cloud Hosting &amp; VPS
                </Link>
              </li>
              <li>
                <Link href="/domains" className="hover:text-[#D4AF37] transition-colors">
                  .ae Domain Search
                </Link>
              </li>
              <li>
                <a
                  href="https://birdhillstech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Global Platform (birdhillstech.com)</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 9 Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
              Core Services (9 Areas)
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Domain & Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-business-profile-local-seo"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Google Business Profile & Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-seo-search"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  AI SEO & Search (AEO & GEO)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-automation"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  AI Automation & WhatsApp Bots
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crm-marketing-automation"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  CRM & Marketing Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding-creative"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Branding & Creative Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics-cro"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Analytics & CRO Funnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
              Dubai Headquarters
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${cleanPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${cleanWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle size={14} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyName}. All rights reserved. Registered in Dubai, United Arab Emirates.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
