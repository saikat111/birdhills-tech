import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Globe,
  TrendingUp,
  MapPin,
  Sparkles,
  Bot,
  Workflow,
  Palette,
  BarChart3,
  ArrowRight,
  Calendar,
  MessageCircle,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "Custom corporate websites, Next.js 16 platforms, and enterprise portals engineered for peak performance and scale.",
      href: "/services/web-development",
      image: "/images/generated/service_web_development.jpg",
      icon: Code2,
      tag: "Technology",
      startingPrice: "From AED 4,500",
      subItems: ["Business Websites", "WordPress", "eCommerce", "Custom Dev"],
    },
    {
      num: "02",
      title: "Domain & Hosting",
      desc: "Accredited .ae domain registry, NVMe cloud edge servers, and high-deliverability corporate business email.",
      href: "/hosting",
      image: "/images/generated/service_domain_hosting.jpg",
      icon: Globe,
      tag: "Infrastructure",
      startingPrice: "From AED 120/mo",
      subItems: [".ae Domain Search", "Cloud Hosting", "Business Email", "SSL & Security"],
    },
    {
      num: "03",
      title: "Digital Marketing",
      desc: "Closed-loop commercial lead acquisition across Google Ads, LinkedIn B2B, and Meta campaigns in Dubai & GCC.",
      href: "/services/digital-marketing",
      image: "/images/generated/service_digital_marketing.jpg",
      icon: TrendingUp,
      tag: "Growth",
      startingPrice: "From AED 2,800/mo",
      subItems: ["Google Ads", "Meta Ads", "Social Media", "Lead Gen"],
    },
    {
      num: "04",
      title: "Google Business Profile & Local SEO",
      desc: "Dominate Google Maps 3-Pack, resolve GBP verification roadblocks, and capture high-intent customer calls across UAE.",
      href: "/services/google-business-profile-local-seo",
      image: "/images/generated/service_local_seo.jpg",
      icon: MapPin,
      tag: "Local SEO",
      startingPrice: "From AED 1,500/mo",
      subItems: ["GBP Verification", "Maps Ranking", "Review Strategy", "Local Citations"],
    },
    {
      num: "05",
      title: "AI SEO & Search",
      desc: "AEO & GEO search optimization engineered so Perplexity AI, ChatGPT & Gemini quote your firm as the regional authority.",
      href: "/services/ai-seo-search",
      image: "/images/generated/service_ai_seo.jpg",
      icon: Sparkles,
      tag: "AEO & GEO",
      startingPrice: "From AED 2,200/mo",
      subItems: ["AEO & GEO", "Technical SEO", "Semantic Search", "Schema Markup"],
    },
    {
      num: "06",
      title: "AI Automation",
      desc: "Deploy autonomous AI agents, 24/7 WhatsApp customer service bots, and n8n workflow pipelines for GCC enterprises.",
      href: "/services/ai-automation",
      image: "/images/generated/service_ai_automation.jpg",
      icon: Bot,
      tag: "Automation",
      startingPrice: "From AED 3,500",
      subItems: ["AI Agents", "WhatsApp Bots", "Workflow Automation", "n8n Pipelines"],
    },
    {
      num: "07",
      title: "CRM & Marketing Automation",
      desc: "Centralize your sales pipeline with HubSpot, Zoho, automated lead routing, and instant WhatsApp customer alerts.",
      href: "/services/crm-marketing-automation",
      image: "/images/generated/service_crm_marketing.jpg",
      icon: Workflow,
      tag: "Operations",
      startingPrice: "From AED 3,200",
      subItems: ["CRM Setup", "Lead Routing", "WhatsApp Automation", "Sales Pipeline"],
    },
    {
      num: "08",
      title: "Branding & Creative",
      desc: "Authoritative corporate identity, bilingual typography (English + Arabic), UI/UX systems, and high-converting ad creatives.",
      href: "/services/branding-creative",
      image: "/images/generated/service_branding_creative.jpg",
      icon: Palette,
      tag: "Creative",
      startingPrice: "From AED 3,800",
      subItems: ["Brand Identity", "Logo Design", "UI/UX Design", "Ad Creatives"],
    },
    {
      num: "09",
      title: "Analytics & CRO",
      desc: "Eliminate tracking blindspots with server-side GTM, Meta CAPI, GA4, and executive Looker revenue attribution dashboards.",
      href: "/services/analytics-cro",
      image: "/images/generated/service_analytics_cro.jpg",
      icon: BarChart3,
      tag: "Data & CRO",
      startingPrice: "From AED 1,800/mo",
      subItems: ["GA4 & GTM", "Meta CAPI", "Conversion Audits", "Marketing Dashboards"],
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-extrabold tracking-widest text-[#C59B27] uppercase mb-3 flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#C59B27]" />
              <span>9 CORE PRACTICE DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-4">
              Technology, Creative &amp; Commercial Growth.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              From bespoke web engineering and .ae domain hosting to AI search, autonomous automation, and performance marketing—we power the region&apos;s leading digital operations.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B27] hover:text-[#B38728] hover:underline shrink-0"
          >
            <span>Explore All 9 Practice Areas</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 9 Service Blocks Grid with Visual Hero Thumbnails & Direct Action CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20am%20interested%20in%20discussing%20${encodeURIComponent(
              service.title
            )}%20services.`;

            return (
              <div
                key={service.title}
                className="group relative bg-[#FAF8F5] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E7EC] hover:border-[#C59B27]/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* High-Resolution Generated Showcase Thumbnail */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-slate-200/80 shadow-inner group-hover:border-[#C59B27]/40 transition-colors">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#D4AF37] bg-[#070B14]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C59B27]/40 shadow-xs">
                        {service.tag}
                      </span>
                      <span className="text-xs font-bold font-mono text-white/90 bg-[#070B14]/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                        {service.num}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#0B0F19] group-hover:text-[#C59B27] transition-colors shadow-md">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0B0F19] mb-2 group-hover:text-[#C59B27] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Sub-services pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.subItems.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 group-hover:border-[#C59B27]/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] font-bold text-slate-700 mb-6 flex items-center gap-1.5">
                    <span className="text-slate-400 font-normal">Pricing Guidance:</span>
                    <span className="text-[#C59B27] font-extrabold">{service.startingPrice}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/book-a-meeting?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#070B14] hover:bg-[#1A2234] text-white text-xs font-bold transition-colors"
                    >
                      <Calendar size={13} className="text-[#D4AF37]" />
                      <span>Book Meeting</span>
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs font-bold transition-colors"
                    >
                      <MessageCircle size={13} className="text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <Link
                    href={service.href}
                    className="w-full text-center block text-xs font-bold text-[#0B0F19] group-hover:text-[#C59B27] pt-1 transition-colors"
                  >
                    View Practice Deliverables →
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
