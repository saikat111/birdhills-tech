"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Calendar, ArrowRight, ShieldCheck, Zap, HelpCircle } from "lucide-react";

interface PricingTierItem {
  id: string;
  name: string;
  slug: string;
  badge?: string | null;
  description: string;
  priceAed: string;
  priceUsd?: string | null;
  billingType: string;
  deliveryTime?: string | null;
  popular: boolean;
  featuresJson: string;
}

interface Props {
  tiers: PricingTierItem[];
}

export default function PricingCardsClient({ tiers }: Props) {
  const [currency, setCurrency] = useState<"AED" | "USD">("AED");

  const retainers = [
    {
      title: "Technical SLA & DevOps Maintenance",
      priceAed: "AED 1,500 / month",
      priceUsd: "$400 / month",
      desc: "24/7 cloud uptime monitoring, sub-15ms GCC latency optimization, daily backups, security patching, and dedicated developer bug fixes.",
    },
    {
      title: "Performance SEO & Local Dominance",
      priceAed: "AED 2,200 / month",
      priceUsd: "$600 / month",
      desc: "Dubai Google Maps #1 rank sprints, local citation syndication, high-intent commercial keywords, and Google AI Overviews optimization.",
    },
    {
      title: "Dedicated Growth & Ads Management",
      priceAed: "AED 2,800 / month",
      priceUsd: "$760 / month",
      desc: "High-intent Google Ads search management, Meta B2B ad creatives, conversion rate optimization (CRO), and closed-loop revenue reporting.",
    },
  ];

  return (
    <div>
      {/* Currency Switcher & Market Value Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Currency:
          </span>
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setCurrency("AED")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "AED"
                  ? "bg-[#070B14] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#070B14]"
              }`}
            >
              AED (د.إ)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-[#070B14] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#070B14]"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B0F19]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Calibrated ~35%–50% below standard Dubai agency retainers</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => {
          let features: string[] = [];
          try {
            features = JSON.parse(tier.featuresJson || "[]");
          } catch {
            features = [];
          }

          const displayPrice = currency === "AED" ? tier.priceAed : (tier.priceUsd || tier.priceAed);
          const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
            tier.name
          )}%20package%20(${encodeURIComponent(displayPrice)}).`;

          return (
            <div
              key={tier.slug}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                tier.popular
                  ? "bg-white border-2 border-[#C59B27] shadow-2xl scale-[1.02] z-10 ring-4 ring-[#C59B27]/15"
                  : "bg-[#FAF8F5] border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-[#C59B27]/40"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-[#C59B27]/25">
                  {tier.badge || "Most Popular in Dubai"}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {tier.badge && !tier.popular ? tier.badge : "Package"}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#070B14] mb-2">{tier.name}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{tier.description}</p>
                </div>

                {/* Price Tag */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 flex items-baseline justify-between shadow-2xs">
                  <div>
                    <div className="text-3xl font-black text-[#070B14] tracking-tight">
                      {displayPrice}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {tier.billingType === "monthly" ? "Per Month (Milestone Sprints)" : "Fixed Project Investment"}
                    </span>
                  </div>
                  {tier.deliveryTime && (
                    <span className="text-[10px] font-bold text-[#B38728] bg-[#C59B27]/15 px-2.5 py-1 rounded-lg">
                      {tier.deliveryTime}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-2.5">
                    {features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#344054]">
                        <CheckCircle2 size={15} className="text-[#C59B27] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-6 border-t border-slate-200/70">
                <Link
                  href="/book-a-meeting"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white shadow-md shadow-[#C59B27]/25"
                      : "bg-[#070B14] hover:bg-[#0B0F19] text-white shadow-xs"
                  }`}
                >
                  <Calendar size={14} />
                  <span>Schedule Consultation</span>
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Retainers & Strategic Growth Section */}
      <div className="mt-24 pt-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C59B27]">
            ONGOING GROWTH SPRINT PACKAGES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Monthly Technical & Growth Retainers
          </h3>
          <p className="text-xs sm:text-sm text-[#667085]">
            Dedicated monthly engineering and acquisition capacity for scaling enterprises in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retainers.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#C59B27]/40 shadow-xs transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#070B14]">{r.title}</h4>
                <div className="text-xl font-extrabold text-[#C59B27]">
                  {currency === "AED" ? r.priceAed : r.priceUsd}
                </div>
                <p className="text-xs text-[#667085] leading-relaxed">{r.desc}</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#070B14] hover:text-[#C59B27] pt-2"
              >
                <span>Request Custom Scope</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
