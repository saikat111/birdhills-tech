import React from "react";
import Link from "next/link";
import { Cpu, ArrowRight, Bot, Zap, Database, ShieldCheck } from "lucide-react";

export function AiCapabilitySection() {
  const capabilities = [
    {
      icon: Bot,
      title: "24/7 Intelligent Client Assistants",
      desc: "Conversational qualifiers that answer inquiries, collect lead details, and book meetings round the clock.",
    },
    {
      icon: Zap,
      title: "Operational Workflow Automation",
      desc: "Connect your CRM, inventory, and internal communication tools to eliminate repetitive manual data entry.",
    },
    {
      icon: Database,
      title: "Internal Knowledge Retrieval (RAG)",
      desc: "Secure private AI search across company contracts, SOPs, and past tenders with source citations.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C59B27]/10 text-[#B38728] border border-[#C59B27]/30">
                <Cpu size={14} />
                PRACTICAL AI INTEGRATIONS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-tight">
                Smarter digital experiences start here.
              </h2>

              <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
                From intelligent assistants to workflow automation, we help businesses use AI
                where it creates real commercial value.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white font-bold text-sm shadow-md shadow-[#C59B27]/25 transition-all group"
                >
                  Explore AI Solutions
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Enterprise Data Privacy & Security Guaranteed
                </div>
              </div>
            </div>

            {/* Right Pillars */}
            <div className="lg:col-span-6 space-y-4">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 hover:border-[#C59B27]/40 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-center text-[#C59B27] shrink-0 shadow-2xs">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#070B14] mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AiCapabilitySection;
