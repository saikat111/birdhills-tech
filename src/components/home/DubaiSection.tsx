import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function DubaiSection() {
  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1730] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1D68BD]/30 text-[#38BDF8] border border-[#38BDF8]/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                DUBAI PRESENCE · UAE
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Built in Dubai.
                  <span className="block text-[#38BDF8]">Built for a global tomorrow.</span>
                </h2>
                <p className="text-base text-slate-300 leading-relaxed max-w-lg">
                  Based in Dubai, Bird Hills Tech works with ambitious businesses to create modern
                  digital experiences combining technology, creativity and measurable growth.
                </p>
              </div>

              {/* Contact Details Card */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-bold text-white">Registered Address</div>
                    <div className="text-slate-400 mt-0.5">
                      Deira - Stone Building - 122 7th A Street
                    </div>
                    <div className="text-slate-400">Al Baraha, Dubai, United Arab Emirates</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                  <Phone size={17} className="text-[#38BDF8] shrink-0" />
                  <div className="text-sm">
                    <div className="text-slate-400 text-xs">Direct Telephone</div>
                    <a
                      href="tel:+971524405785"
                      className="font-bold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      +971 52 440 5785
                    </a>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project%20in%20Dubai."
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

            {/* Right Image: Sophisticated Dubai Architecture */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85"
                alt="Dubai modern urban business district"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DubaiSection;
