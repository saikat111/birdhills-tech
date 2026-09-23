import React from "react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand the business, audience, and commercial objectives.",
    },
    {
      num: "02",
      title: "Strategize",
      desc: "Define the right digital architecture and marketing direction.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Create the experience, interaction states, and visual system.",
    },
    {
      num: "04",
      title: "Develop",
      desc: "Build with type-safe engineering, speed, and precision.",
    },
    {
      num: "05",
      title: "Launch",
      desc: "Thorough testing, hardening, and seamless deployment.",
    },
    {
      num: "06",
      title: "Grow",
      desc: "Optimize conversions, measure analytics, and scale.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-3">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-tight mb-4">
            From idea to impact.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            A clear and collaborative process designed to turn your vision into a digital product
            that delivers.
          </p>
        </div>

        {/* Desktop: Elegant Horizontal Roadmap with Connected Indicator Line */}
        <div className="hidden lg:block relative">
          {/* Connecting Track Line */}
          <div className="absolute top-7 left-6 right-6 h-[2px] bg-slate-200" />

          <div className="grid grid-cols-6 gap-6 relative">
            {steps.map((s, idx) => (
              <div key={s.num} className="flex flex-col group">
                {/* Node Pill */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#C59B27] group-hover:bg-[#C59B27] flex items-center justify-center text-sm font-extrabold font-mono text-[#C59B27] group-hover:text-white transition-all duration-200 mb-6 shadow-sm z-10">
                  {s.num}
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phase {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#C59B27]/30 space-y-10">
          {steps.map((s) => (
            <div key={s.num} className="relative group">
              {/* Dot anchor */}
              <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#C59B27] flex items-center justify-center text-xs font-mono font-bold text-[#C59B27]">
                {s.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#070B14]">{s.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProcessSection;
