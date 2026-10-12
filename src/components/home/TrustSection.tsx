import React from "react";
import { ShieldCheck, Server, Cpu, CheckCircle2 } from "lucide-react";

interface TrustProps {
  headline?: string;
  statement?: string;
}

export function TrustSection({
  headline = "Trusted by ambitious businesses",
  statement = "Technology · Creative · Growth — Helping ambitious businesses build, launch and grow across the UAE and global markets.",
}: TrustProps) {
  const pillars = [
    { label: "Enterprise Engineering Standards", icon: Cpu },
    { label: "Bespoke Brand & UI Systems", icon: CheckCircle2 },
    { label: "Tier-4 Edge Infrastructure", icon: Server },
    { label: "Direct Dubai Accountability", icon: ShieldCheck },
  ];

  return (
    <section className="py-12 bg-[#FAF8F5] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Trust Statement */}
          <div className="md:max-w-lg space-y-1.5 text-center md:text-left">
            <div className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              {headline}
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#070B14] leading-snug">
              {statement}
            </p>
          </div>

          {/* Typography-first Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 hover:border-[#C59B27]/40 transition-colors shadow-2xs text-xs font-semibold text-[#101828]"
                >
                  <Icon size={15} className="text-[#C59B27] shrink-0" />
                  <span>{pillar.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrustSection;
