import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project in Dubai",
  description:
    "Get in touch with Bird Hills Tech in Deira, Dubai. Discuss your web development, corporate branding, digital marketing, or AI project with our senior consultants.",
  alternates: {
    canonical: "https://birdhillstech.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-24 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              LET&apos;S CONNECT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              Let&apos;s talk about your next project.
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              Whether you are planning an enterprise web application, corporate rebrand, or
              aggressive growth campaign, our Dubai team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Dubai Office Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct WhatsApp Callout */}
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">Immediate WhatsApp Response</h3>
                    <div className="text-xs text-emerald-700">Average response under 15 minutes</div>
                  </div>
                </div>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Need an immediate consultation or want to share documents directly with our
                  project leads in Dubai?
                </p>
                <div>
                  <a
                    href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Open WhatsApp Chat (+971 52 440 5785)
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Office Location Card */}
              <div className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-6">
                <h3 className="text-lg font-bold text-[#0B1730]">Dubai Corporate Office</h3>

                <div className="space-y-4 text-sm text-[#667085]">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#1D68BD] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0B1730]">Registered Address</div>
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
                      <div className="font-semibold text-[#0B1730]">Business Inquiries</div>
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
                      <div className="font-semibold text-[#0B1730]">Business Hours</div>
                      <div>Monday – Friday: 9:00 AM – 6:00 PM (GST)</div>
                      <div className="text-xs text-slate-400">Weekend emergency support available for active retainers</div>
                    </div>
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
