import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-[#070B14] text-white relative overflow-hidden border-t border-[#C59B27]/20">
      {/* Background Accent Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
            CONNECT WITH BIRD HILLS TECH · DUBAI
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Let&apos;s engineer your commercial advantage.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you need a high-speed corporate web platform, an accredited .ae domain, automated AI workflows, or market-dominating local SEO, let&apos;s talk about what&apos;s next.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-base font-bold shadow-lg shadow-[#C59B27]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/book-a-meeting"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-semibold border border-white/20 transition-all duration-200"
            >
              <Calendar size={18} className="text-[#D4AF37]" />
              <span>Book a Meeting</span>
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
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>Prefer a direct message?</span>
              <span className="text-[#25D366] font-bold underline inline-flex items-center gap-0.5">
                Chat on WhatsApp (+971 52 440 5785) <ArrowUpRight size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
