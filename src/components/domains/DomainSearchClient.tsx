"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Globe,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface TldResult {
  tld: string;
  price: string;
  renewal: string;
  status: "available" | "taken";
  popular?: boolean;
}

export function DomainSearchClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedDomain, setSearchedDomain] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<TldResult[] | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTerm = searchTerm.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    if (!cleanTerm) return;

    setIsSearching(true);
    setSearchedDomain(cleanTerm);

    setTimeout(() => {
      // Deterministic simulation based on query length/characters
      const isTaken = cleanTerm.length <= 4 || cleanTerm === "google" || cleanTerm === "apple";
      const sampleResults: TldResult[] = [
        {
          tld: ".ae",
          price: "$39.99",
          renewal: "$39.99/yr",
          status: isTaken ? "taken" : "available",
          popular: true,
        },
        {
          tld: ".com",
          price: "$12.99",
          renewal: "$14.99/yr",
          status: cleanTerm.length <= 6 ? "taken" : "available",
          popular: true,
        },
        {
          tld: ".ai",
          price: "$69.99",
          renewal: "$69.99/yr",
          status: "available",
          popular: true,
        },
        {
          tld: ".tech",
          price: "$4.99",
          renewal: "$19.99/yr",
          status: "available",
          popular: false,
        },
        {
          tld: ".io",
          price: "$34.99",
          renewal: "$36.99/yr",
          status: "available",
          popular: false,
        },
        {
          tld: ".co",
          price: "$21.99",
          renewal: "$24.99/yr",
          status: "available",
          popular: false,
        },
      ];

      setResults(sampleResults);
      setIsSearching(false);
    }, 450);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="relative z-20">
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border-2 border-white/20 ring-4 ring-[#C59B27]/15 gap-2">
          <div className="flex items-center gap-3 flex-1 px-3 w-full">
            <Search className="text-slate-400 shrink-0" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your ideal corporate brand (e.g. mycompany)"
              className="w-full text-sm sm:text-base font-medium text-[#070B14] placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#C59B27]/25 flex items-center justify-center gap-2 shrink-0 disabled:opacity-60"
          >
            {isSearching ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Checking Registry...</span>
              </>
            ) : (
              <>
                <span>Search Domain</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Featured TLD Pill Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-semibold text-slate-300">
        <span className="text-slate-400 text-[11px] uppercase tracking-wider">Top Extensions:</span>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("birdhills");
          }}
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
        >
          <span className="text-[#D4AF37] font-bold">.ae</span>
          <span>$39.99/yr</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("dubaiholding");
          }}
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
        >
          <span className="text-[#D4AF37] font-bold">.com</span>
          <span>$12.99/yr</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("nexusai");
          }}
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
        >
          <span className="text-[#D4AF37] font-bold">.ai</span>
          <span>$69.99/yr</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("fintechlab");
          }}
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
        >
          <span className="text-[#D4AF37] font-bold">.tech</span>
          <span>$4.99/yr</span>
        </button>
      </div>

      {/* Live Results Panel */}
      {results && (
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-xl border border-[#E4E7EC] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Availability Results for
              </span>
              <h3 className="text-lg font-extrabold text-[#070B14]">
                &ldquo;{searchedDomain}&rdquo;
              </h3>
            </div>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-bold flex items-center gap-1">
              <Zap size={13} /> Live Registry Check
            </span>
          </div>

          <div className="space-y-3">
            {results.map((r) => {
              const fullDomain = `${searchedDomain}${r.tld}`;
              const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20want%20to%20register%20the%20domain%20${encodeURIComponent(
                fullDomain
              )}%20for%20${encodeURIComponent(r.price)}.`;

              return (
                <div
                  key={r.tld}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                    r.status === "available"
                      ? "bg-[#FAF8F5] border-[#E4E7EC] hover:border-[#C59B27]/40"
                      : "bg-slate-50 border-slate-200 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        r.status === "available"
                          ? "bg-[#C59B27]/15 text-[#C59B27]"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-[#070B14]">
                          {searchedDomain}
                          <span className="text-[#C59B27]">{r.tld}</span>
                        </span>
                        {r.popular && (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white">
                            Popular in UAE
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        {r.status === "available" ? (
                          <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                            <CheckCircle2 size={13} /> Available for Instant Registration
                          </span>
                        ) : (
                          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                            <XCircle size={13} /> Taken (Transfer Available)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-xl font-black text-[#070B14]">{r.price}</div>
                      <span className="text-[10px] text-slate-400 font-medium">Renews at {r.renewal}</span>
                    </div>

                    {r.status === "available" ? (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold transition-all shadow-md shadow-[#C59B27]/20"
                      >
                        <span>Register Now</span>
                        <ArrowRight size={13} />
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20transferring%20or%20acquiring%20the%20taken%20domain%20${encodeURIComponent(
                          fullDomain
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
                      >
                        <span>Transfer Domain</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#C59B27]" />
              Free WHOIS Privacy Mask Included with Every Domain
            </span>
            <a
              href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20need%20assistance%20with%20a%20custom%20corporate%20domain%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C59B27] font-bold hover:underline inline-flex items-center gap-1"
            >
              Need a Bulk Portfolio Quote? WhatsApp Our Registrar <ArrowRight size={12} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
