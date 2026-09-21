import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ArrowUpRight,
  Calendar,
  Building2,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project in Dubai | Bird Hills Tech",
  description:
    "Get in touch with Bird Hills Tech in Deira, Dubai. Discuss your web development, corporate branding, digital marketing, or AI project with our senior consultants.",
  alternates: {
    canonical: "https://birdhillstech.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH DUBAI CORPORATE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#0B1730] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai business center"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730] via-[#0B1730]/90 to-[#0B1730]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#38BDF8] uppercase bg-white/10 border border-white/15 backdrop-blur-md">
              DIRECT ENGAGEMENT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Let&apos;s talk about your next digital milestone.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Whether you are planning an enterprise web application, corporate rebrand, or high-intent customer acquisition campaign, our Dubai team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN GRID: FORM + DIRECT CHANNELS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Validated Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Dubai Office Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct WhatsApp Action Box */}
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">Immediate WhatsApp Response</h3>
                    <div className="text-xs text-emerald-700">Average response under 15 minutes during UAE business hours</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Need an immediate consultation or want to share scope documents directly with our project directors in Dubai?
                </p>
                <div>
                  <a
                    href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Open WhatsApp Chat (+971 52 440 5785)
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Consultation Scheduler Shortcut */}
              <div className="p-8 rounded-3xl bg-[#EBF3FE] border border-[#BFDBFE] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D68BD]">
                  <Calendar size={15} />
                  Direct Video or In-Person Consultation
                </div>
                <h3 className="text-base font-bold text-[#0B1730]">
                  Prefer a Scheduled 30-Minute Briefing?
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Choose your preferred date and Gulf Standard Time (GST) slot directly on our live calendar.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-a-meeting"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    Select Time Slot <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Corporate Coordinates */}
              <div className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-6">
                <h3 className="text-base font-bold text-[#0B1730]">Dubai Headquarters Coordinates</h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#667085]">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1730]">Physical Office Address</div>
                      <div className="mt-0.5">Deira - Stone Building - 122 7th A Street</div>
                      <div>Al Baraha, Dubai, United Arab Emirates</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1730]">Direct Telephone / Hotline</div>
                      <a href="tel:+971524405785" className="hover:text-[#1D68BD] text-[#0B1730] font-medium">
                        +971 52 440 5785
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1730]">Official Inquiries Email</div>
                      <a
                        href="mailto:contact@birdhillstech.com"
                        className="hover:text-[#1D68BD] text-[#0B1730] font-medium"
                      >
                        contact@birdhillstech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1730]">Operating Hours</div>
                      <div>Monday – Saturday: 9:00 AM – 6:00 PM (Gulf Standard Time)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISIT OUR DUBAI HEADQUARTERS & LANDMARKS (NEW SECTION) */}
      <section className="py-20 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
                LOCATION & DIRECTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
                Visiting Stone Building, Al Baraha
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Our central Dubai location provides seamless connectivity to both Old Dubai and modern business centers:
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#0B1730]">
                  <Navigation size={14} className="text-[#1D68BD]" />
                  <span>5 minutes from Deira Waterfront & Corniche</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0B1730]">
                  <Navigation size={14} className="text-[#1D68BD]" />
                  <span>10 minutes from Dubai International Airport (DXB)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0B1730]">
                  <Navigation size={14} className="text-[#1D68BD]" />
                  <span>15 minutes from DIFC & Downtown Dubai</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0B1730]">
                  <Navigation size={14} className="text-[#1D68BD]" />
                  <span>Convenient visitor parking available on 7th A Street</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-200 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                  alt="Dubai Deira location"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-left">
                  <div className="text-xs font-bold uppercase text-[#1D68BD]">
                    Bird Hills Tech HQ
                  </div>
                  <div className="text-sm font-extrabold text-[#0B1730]">
                    Deira - Stone Building - 122 7th A Street
                  </div>
                  <div className="text-[11px] text-[#667085] mt-0.5">
                    Al Baraha, Dubai, United Arab Emirates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
