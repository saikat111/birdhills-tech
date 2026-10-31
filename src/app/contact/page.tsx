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
import FaqAccordion, { FaqItem } from "@/components/common/FaqAccordion";
import { getSiteSettings } from "@/lib/settings";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact Us | Start a Project | Bird Hills Tech",
  description:
    "Get in touch with Bird Hills Tech. Discuss your web development, corporate branding, digital marketing, or AI project with our senior consultants.",
  alternates: {
    canonical: "https://birdhillstech.com/contact",
  },
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const cleanPhone = settings.phone.replace(/[^0-9+]/g, "");
  const cleanWhatsapp = settings.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH GLOBAL CORPORATE BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/page_contact_hero.jpg"
            alt="Global business center and technology skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/80 to-[#070B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
              DIRECT ENGAGEMENT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Let&apos;s talk about your next digital milestone.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Whether you are planning an enterprise web application, corporate rebrand, or high-intent customer acquisition campaign, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN GRID: FORM + DIRECT CHANNELS */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Validated Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Office Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct WhatsApp Action Box */}
              <div className="p-8 rounded-3xl bg-white border border-emerald-200/80 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#070B14]">Immediate WhatsApp Response</h3>
                    <div className="text-xs text-emerald-700 font-semibold">Average response under 15 minutes during business hours</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Need an immediate consultation or want to share scope documents directly with our project directors?
                </p>
                <div>
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Open WhatsApp Chat ({settings.whatsapp})
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Consultation Scheduler Shortcut */}
              <div className="p-8 rounded-3xl bg-white border border-[#C59B27]/30 space-y-3 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728]" />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                  <Calendar size={15} />
                  Direct Video or Executive Consultation
                </div>
                <h3 className="text-base font-bold text-[#070B14]">
                  Prefer a Scheduled 30-Minute Briefing?
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Choose your preferred date and convenient time slot directly on our live calendar.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-a-meeting"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold shadow-md shadow-[#C59B27]/20 transition-all"
                  >
                    Select Time Slot <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Corporate Coordinates */}
              <div className="p-8 rounded-3xl bg-white border border-[#E4E7EC] space-y-6 shadow-sm">
                <h3 className="text-base font-bold text-[#070B14]">Global Operations Coordinates</h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#667085]">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#070B14]">Operations Location</div>
                      <div className="mt-0.5 leading-relaxed">{settings.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#070B14]">Direct Telephone / Hotline</div>
                      <a href={`tel:${cleanPhone}`} className="hover:text-[#C59B27] text-[#070B14] font-medium transition-colors">
                        {settings.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#070B14]">Official Inquiries Email</div>
                      <a
                        href={`mailto:${settings.email}`}
                        className="hover:text-[#C59B27] text-[#070B14] font-medium transition-colors"
                      >
                        {settings.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#070B14]">Operating Hours</div>
                      <div>{settings.working_hours}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORLDWIDE STRATEGIC ENGAGEMENTS */}
      <section className="py-20 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
                WORLDWIDE STRATEGIC ENGAGEMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
                Direct Executive Access &amp; Global Operations
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Our unified engineering and creative practice operates globally, delivering seamless collaboration across time zones:
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#070B14]">
                  <Navigation size={14} className="text-[#C59B27]" />
                  <span>Synchronized collaboration across Americas, EMEA, and APAC time zones</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#070B14]">
                  <Navigation size={14} className="text-[#C59B27]" />
                  <span>Direct Slack and WhatsApp access with senior solution architects</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#070B14]">
                  <Navigation size={14} className="text-[#C59B27]" />
                  <span>Weekly executive progress briefings and interactive staging demos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#070B14]">
                  <Navigation size={14} className="text-[#C59B27]" />
                  <span>Transparent project governance, SLA warranties, and full IP handover</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-200 shadow-lg">
                <Image
                  src="/images/generated/hero_dubai_tech.jpg"
                  alt="Bird Hills Tech global headquarters and executive conference room"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-left border border-slate-200">
                  <div className="text-xs font-bold uppercase text-[#C59B27]">
                    Bird Hills Tech Global Operations
                  </div>
                  <div className="text-sm font-extrabold text-[#070B14]">
                    Worldwide Digital Operations
                  </div>
                  <div className="text-[11px] text-[#667085] mt-0.5">
                    Available for Strategic Engagements Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & CONSULTATION INTAKE FAQ ACCORDION WITH SCHEMA MARKUP */}
      <FaqAccordion
        items={[
          {
            question: "How quickly will your team respond to our message?",
            answer:
              "We guarantee a response within 2 to 4 business hours. For urgent inquiries, please contact our team directly via WhatsApp or phone at +971 52 440 5785.",
            category: "Consultation",
          },
          {
            question: "Can we schedule an introductory consultation before signing an agreement?",
            answer:
              "Yes, absolutely. We welcome virtual briefing sessions via Google Meet or in-person consultations with our leadership team.",
            category: "Meetings",
          },
          {
            question: "Do you execute Non-Disclosure Agreements (NDAs) prior to project discussions?",
            answer:
              "Yes. We take intellectual property and confidentiality seriously. We routinely execute mutual NDAs before reviewing detailed product briefs, architectures, or proprietary data.",
            category: "Legal",
          },
          {
            question: "What information should we prepare for our initial scoping call?",
            answer:
              "A high-level overview of your business goals, target audience, preferred timeline, and approximate investment band helps us prepare concrete architectural options and recommendations for your initial briefing.",
            category: "Scoping",
          },
          {
            question: "Do you work with international clients globally?",
            answer:
              "Yes. We partner with enterprises worldwide across North America, Europe, the Middle East, and Asia-Pacific, accommodating diverse time zones and international payment methods seamlessly.",
            category: "International",
          },
        ]}
        title="Project Intake & Consultation Questions"
        eyebrow="COMMUNICATION & PROCESS CLARITY"
        description="Direct details on our consultation process, NDA confidentiality, meeting options, and response times."
        theme="light"
        includeSchema={true}
      />
    </div>
  );
}
