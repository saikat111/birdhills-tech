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
  Calendar,
  MessageCircle,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "Custom websites, web applications and enterprise platforms built on modern Next.js architecture.",
      href: "/services/web-development",
      icon: Code2,
      tag: "Technology",
      startingPrice: "From $4,950",
    },
    {
      num: "02",
      title: "Custom Web Applications",
      desc: "Scalable SaaS platforms, private investor portals, and internal business logic automation.",
      href: "/services/web-applications",
      icon: Cpu,
      tag: "Technology",
      startingPrice: "From $9,500",
    },
    {
      num: "03",
      title: "Branding & Creative Design",
      desc: "Corporate brand identity, design systems, UI/UX prototyping, and executive visual assets.",
      href: "/services/branding",
      icon: Sparkles,
      tag: "Creative",
      startingPrice: "From $3,500",
    },
    {
      num: "04",
      title: "E-commerce Solutions",
      desc: "Conversion-optimized stores with seamless regional GCC payment gateways (Apple Pay, Tamara).",
      href: "/services/ecommerce",
      icon: ShoppingBag,
      tag: "Technology",
      startingPrice: "From $6,800",
    },
    {
      num: "05",
      title: "Digital Marketing & PPC",
      desc: "Closed-loop B2B lead generation across Google, LinkedIn, and Meta tracking real deal revenue.",
      href: "/services/digital-marketing",
      icon: TrendingUp,
      tag: "Growth",
      startingPrice: "From $1,950/mo",
    },
    {
      num: "06",
      title: "AI Integrations & Automation",
      desc: "Autonomous conversational agents, customer qualification pipelines, and internal AI search.",
      href: "/services/ai-solutions",
      icon: Compass,
      tag: "Strategy",
      startingPrice: "From $4,200",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase mb-3">
              OUR CAPABILITIES & SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight mb-4">
              Everything you need to build, launch, and dominate.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              From engineering to customer acquisition, we deliver connected digital solutions tailored to high-growth Dubai enterprises.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1D68BD] hover:underline shrink-0"
          >
            Explore All 8 Practice Areas <ArrowRight size={14} />
          </Link>
        </div>

        {/* 6 Premium Service Blocks with Direct Action CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20discussing%20${encodeURIComponent(
              service.title
            )}%20services.`;

            return (
              <div
                key={service.title}
                className="group relative bg-[#F7F9FC] hover:bg-white rounded-3xl p-7 sm:p-8 border border-[#E4E7EC] hover:border-[#1D68BD]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Number + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EBF3FE] border border-[#E4E7EC] group-hover:border-[#BFDBFE] flex items-center justify-center text-[#0B1730] group-hover:text-[#1D68BD] transition-colors shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#1D68BD] bg-[#EBF3FE] px-2.5 py-1 rounded-full border border-[#BFDBFE]/60">
                        {service.tag}
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-400">
                        {service.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0B1730] mb-2 group-hover:text-[#1D68BD] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="text-[11px] font-bold text-slate-700 mb-6 flex items-center gap-1.5">
                    <span className="text-slate-400 font-normal">Pricing Guidance:</span>
                    <span className="text-[#1D68BD]">{service.startingPrice}</span>
                  </div>
                </div>

                {/* Dual Action Buttons (Book a Meeting & WhatsApp) */}
                <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/book-a-meeting?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#1D68BD] text-white text-xs font-semibold hover:bg-[#155196] shadow-xs transition-colors"
                    >
                      <Calendar size={13} />
                      <span>Book Meeting</span>
                    </Link>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-white border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10 text-xs font-semibold transition-colors"
                    >
                      <MessageCircle size={13} className="text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <Link
                    href={service.href}
                    className="w-full text-center block text-[11px] font-bold text-slate-500 hover:text-[#1D68BD] pt-1 transition-colors"
                  >
                    View Detailed Service Scope & Case Studies →
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
