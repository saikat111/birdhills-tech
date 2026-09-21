import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#0B1730] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bird Hills Tech combines technology, creative strategy and digital marketing to build
              powerful digital experiences and measurable business growth for ambitious enterprises.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Dubai · UAE · Available for Strategic Engagements</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services Hub
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-applications"
                  className="hover:text-white transition-colors"
                >
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="hover:text-white transition-colors"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-white transition-colors"
                >
                  Branding & Creative
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="hover:text-white transition-colors"
                >
                  AI Solutions & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Dubai Headquarters
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#38BDF8] shrink-0" />
                <a
                  href="tel:+971524405785"
                  className="hover:text-white transition-colors"
                >
                  +971 52 440 5785
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#38BDF8] shrink-0" />
                <a
                  href="mailto:contact@birdhillstech.com"
                  className="hover:text-white transition-colors"
                >
                  contact@birdhillstech.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/971524405785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <MessageSquare size={14} />
                  Chat on WhatsApp
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Bird Hills Tech. All rights reserved. Registered in Dubai, United Arab Emirates.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin/login" className="hover:text-slate-300 transition-colors text-slate-400">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
