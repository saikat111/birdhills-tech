import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function GlobalPresenceSection() {
  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070B14] rounded-3xl overflow-hidden shadow-2xl border border-[#C59B27]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C59B27]/15 text-[#D4AF37] border border-[#C59B27]/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                GLOBAL PRESENCE · WORLDWIDE
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Engineered Globally.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728]">Built for an ambitious tomorrow.</span>
                </h2>
                <p className="text-base text-slate-300 leading-relaxed max-w-lg">
                  Operating globally, Bird Hills Tech works with ambitious businesses to create modern
                  digital experiences combining technology, creativity and measurable growth.
                </p>
              </div>

              {/* Contact Details Card */}
              <div className="p-6 rounded-2xl bg-[#0B0F19] border border-[#C59B27]/20 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-bold text-white">Global Operations &amp; Client Services</div>
                    <div className="text-slate-400 mt-0.5">
                      Distributed Engineering Squads &amp; Executive Advisory
                    </div>
                    <div className="text-slate-400">Serving clients across North America, Europe, Asia-Pacific &amp; Worldwide</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                  <Phone size={17} className="text-[#D4AF37] shrink-0" />
                  <div className="text-sm">
                    <div className="text-slate-400 text-xs">Direct Telephone / WhatsApp</div>
                    <a
                      href="tel:+971524405785"
                      className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      +971 52 440 5785
                    </a>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all group"
                >
                  <MessageSquare size={16} />
                  Chat on WhatsApp
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Right Image: Sophisticated Global Architecture */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern global corporate business architecture and technology innovation center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GlobalPresenceSection;
