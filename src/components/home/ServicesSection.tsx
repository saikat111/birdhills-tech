import React from "react";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  Cpu,
  Compass,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "Custom websites, web applications and business platforms built for performance.",
      href: "/services/web-development",
      icon: Code2,
      tag: "Technology",
    },
    {
      num: "02",
      title: "Digital Marketing",
      desc: "SEO, paid advertising, social media and data-driven marketing strategies.",
      href: "/services/digital-marketing",
      icon: TrendingUp,
      tag: "Growth",
    },
    {
      num: "03",
      title: "Branding & Design",
      desc: "Brand identity, UI/UX design, creative direction and digital experiences.",
      href: "/services/branding",
      icon: Sparkles,
      tag: "Creative",
    },
    {
      num: "04",
      title: "E-commerce Solutions",
      desc: "Scalable online stores with strong user experiences and conversion-focused architecture.",
      href: "/services/ecommerce",
      icon: ShoppingBag,
      tag: "Technology",
    },
    {
      num: "05",
      title: "AI Solutions",
      desc: "AI integrations, automation and intelligent digital experiences.",
      href: "/services/ai-solutions",
      icon: Cpu,
      tag: "Technology",
    },
    {
      num: "06",
      title: "Consultation",
      desc: "Digital strategy, technology planning and growth consulting.",
      href: "/contact",
      icon: Compass,
      tag: "Strategy",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase mb-3">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight mb-5">
            Everything you need to grow in the digital world.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            From strategy to execution, we provide connected digital solutions that help businesses
            build, market and scale.
          </p>
        </div>

        {/* 6 Premium Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-[#F7F9FC] hover:bg-white rounded-2xl p-7 border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EBF3FE] border border-[#E4E7EC] group-hover:border-[#BFDBFE] flex items-center justify-center text-[#0B1730] group-hover:text-[#1D68BD] transition-colors shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400 group-hover:text-[#1D68BD] transition-colors">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#1D68BD] bg-[#EBF3FE] px-2 py-0.5 rounded-sm">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1730] mb-3 group-hover:text-[#1D68BD] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More CTA */}
                <div className="pt-4 border-t border-slate-200/70">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
