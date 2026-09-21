import React from "react";
import { CheckCircle2 } from "lucide-react";

interface TrustProps {
  headline?: string;
  statement?: string;
}

export function TrustSection({
  headline = "Trusted by ambitious businesses",
  statement = "Technology · Creative · Growth — Helping ambitious businesses build, launch and grow across the UAE and global markets.",
}: TrustProps) {
  const pillars = [
    "Enterprise Engineering Standards",
    "Bespoke Brand Identities",
    "Data-Driven Growth Execution",
    "Direct Dubai Accountability",
  ];

  return (
    <section className="py-12 bg-[#F7F9FC] border-y border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Trust Statement */}
          <div className="md:max-w-lg space-y-1.5 text-center md:text-left">
            <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              {headline}
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#0B1730] leading-snug">
              {statement}
            </p>
          </div>

          {/* Typography-first Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] shadow-2xs text-xs font-semibold text-[#101828]"
              >
                <CheckCircle2 size={15} className="text-[#1D68BD] shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrustSection;
