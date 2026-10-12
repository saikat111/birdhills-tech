import React from "react";
import Image from "next/image";
import { Target, Cpu, Gauge, Users2 } from "lucide-react";

export function WhyUsSection() {
  const features = [
    {
      icon: Target,
      title: "Strategy First",
      desc: "Every project starts with business objectives. We analyze commercial outcomes before writing a single line of code or designing a mockup.",
    },
    {
      icon: Cpu,
      title: "Technology + Creativity",
      desc: "Design and engineering work together. Visual aesthetics elevate your brand while robust technical architecture guarantees speed and security.",
    },
    {
      icon: Gauge,
      title: "Built for Performance",
      desc: "Speed, usability, SEO and conversion are considered from day one. We engineer high-performance platforms that keep visitors engaged.",
    },
    {
      icon: Users2,
      title: "One Connected Team",
      desc: "No communication gap between strategy, design, development and marketing. You get a single, accountable team based here in Dubai.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              WHY BIRD HILLS TECH
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-[1.15]">
              Engineering digital advantage.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] mt-1">Driving measurable commercial growth.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              We bring technology, creativity and marketing together under one roof, giving
              businesses a connected digital solution rather than disconnected services.
            </p>

            {/* Editorial Image Accent */}
            <div className="pt-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image
                  src="/ima/web4.jpg"
                  alt="Bird Hills Tech senior software engineers architecting modern web platforms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white">
                  Integrated Engineering, Creative &amp; Growth Squads
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Supporting Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#C59B27]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#070B14] mb-2">{feat.title}</h3>
                  <p className="text-sm text-[#667085] leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUsSection;
