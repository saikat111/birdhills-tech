import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShoppingBag, Truck, Stethoscope, Landmark } from "lucide-react";

export function IndustryVerticalsSection() {
  const industries = [
    {
      title: "Real Estate & Luxury PropTech",
      market: "Dubai & Abu Dhabi",
      desc: "High-converting off-plan project portals, interactive masterplan viewers, and investor lead engines for premier developers and brokerages.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", // Luxury modern architectural villa in Dubai
      icon: Building2,
      stat: "$25M+ Volume",
    },
    {
      title: "Luxury Retail & Fine Jewelry",
      market: "GCC & International",
      desc: "Bespoke digital flagships, private VIP appointment engines, and frictionless checkout experiences tailored for high-ticket luxury buyers.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85", // Luxury gold diamond high jewelry collection
      icon: ShoppingBag,
      stat: "4.2x ROAS Delivered",
    },
    {
      title: "Trade, Logistics & Maritime",
      market: "UAE & Regional Ports",
      desc: "Custom fleet telemetry dashboards, enterprise B2B shipment tracking portals, and client self-service clearing hubs.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85", // Container cargo ship and logistics maritime port
      icon: Truck,
      stat: "100K+ Tracking Ops",
    },
    {
      title: "Medical & Aesthetic Clinics",
      market: "Dubai Healthcare City & Jumeirah",
      desc: "HIPAA/DHA-compliant patient scheduling engines, localized aesthetic treatment funnels, and high-intent Google search dominance.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85", // Modern aesthetic medical clinic and consulting suite
      icon: Stethoscope,
      stat: "+320% Qualified Consults",
    },
    {
      title: "DIFC Capital & Family Offices",
      market: "DIFC · ADGM · Riyadh",
      desc: "Prestige corporate portals, secure investor document distribution rooms, and authoritative institutional branding.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", // High-rise architectural DIFC financial towers
      icon: Landmark,
      stat: "Bank-Grade Security",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#B38728] uppercase bg-[#C59B27]/10 border border-[#C59B27]/30 mb-3">
              REGIONAL INDUSTRY VERTICALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-tight">
              Tailored solutions for Dubai’s premier sectors.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] mt-4">
              We understand the nuances of the UAE and GCC commercial landscape. Our engineering and marketing strategies are built for your sector’s high-value decision-makers.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold shadow-md shadow-[#C59B27]/25 transition-all shrink-0"
          >
            Discuss Your Industry Scope
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className={`group bg-[#FAF8F5] rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-[#C59B27]/50 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Visual Image Header */}
                <div
                  className={`relative w-full bg-slate-900 overflow-hidden ${
                    idx === 0 ? "h-64 sm:h-72" : "h-52"
                  }`}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/30 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#070B14] shadow-sm">
                      <Icon size={12} className="text-[#C59B27]" />
                      {ind.market}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-white shadow-sm">
                      {ind.stat}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    {ind.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] group-hover:underline"
                    >
                      Inquire for {ind.title.split("&")[0]}
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href={`https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20solutions%20for%20${encodeURIComponent(
                        ind.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      WhatsApp Consultation
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default IndustryVerticalsSection;
