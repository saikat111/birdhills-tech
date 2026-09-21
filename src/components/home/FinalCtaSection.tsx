import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-[#0B1730] text-white relative overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D68BD]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1D68BD]/20 text-[#38BDF8] border border-[#38BDF8]/20">
            CONNECT WITH BIRD HILLS TECH
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Let&apos;s build something great together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you need a new digital experience, a stronger brand or a smarter growth
            strategy, let&apos;s talk about what&apos;s next.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/book-a-meeting"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-base font-semibold border border-slate-700 transition-all duration-200"
            >
              <Calendar size={18} className="text-[#38BDF8]" />
              Book a Meeting
            </Link>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="pt-4">
            <a
              href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              <MessageSquare size={16} className="text-emerald-400" />
              Prefer a direct message? <span className="text-emerald-400 font-semibold underline inline-flex items-center gap-0.5">Chat on WhatsApp <ArrowUpRight size={13} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FinalCtaSection;
