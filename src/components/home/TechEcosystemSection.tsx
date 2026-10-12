import React from "react";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  Server,
  Terminal,
  Database,
  Globe2,
} from "lucide-react";

export function TechEcosystemSection() {
  const technologies = [
    {
      name: "Next.js 16 & React 19",
      category: "Frontend Architecture",
      desc: "Server-side rendering, streaming SSR, and zero-bundle server components for maximum SEO indexation and speed.",
      badge: "Core Framework",
    },
    {
      name: "TypeScript (Strict)",
      category: "Engineering Rigor",
      desc: "End-to-end type safety eliminating runtime exceptions and ensuring predictable, maintainable enterprise systems.",
      badge: "Language",
    },
    {
      name: "Tailwind CSS v4 & Motion",
      category: "Design System",
      desc: "Tokenized design systems, zero runtime CSS overhead, and fluid 60fps micro-animations.",
      badge: "Styling",
    },
    {
      name: "PostgreSQL & Prisma ORM",
      category: "Data Layer",
      desc: "Relational database modeling with strict ACID compliance, automated migrations, and connection pooling.",
      badge: "Database",
    },
    {
      name: "Autonomous AI Agents",
      category: "GenAI & Automation",
      desc: "Conversational qualification pipelines, OpenAI & Gemini LLM integrations, and private workflow automation.",
      badge: "AI & ML",
    },
    {
      name: "AWS & Edge Cloud Infrastructure",
      category: "Cloud & DevOps",
      desc: "Global CDN distribution, zero-downtime CI/CD deployments, DDoS mitigation, and low-latency GCC edge delivery.",
      badge: "Infrastructure",
    },
  ];

  const benchmarks = [
    { value: "99+", label: "Performance Score", sub: "Top-tier speed across the GCC" },
    { value: "100%", label: "Project Asset Transfer", sub: "Complete handover with zero lock-in" },
    { value: "99.98%", label: "Platform SLA Uptime", sub: "Enterprise redundancy & health checks" },
    { value: "A+", label: "Security & SSL Rating", sub: "Zero-trust hardening & CSP standards" },
  ];

  return (
    <section className="py-24 bg-[#070B14] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/10 border border-[#C59B27]/30 mb-3">
            TECH STACK & ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered on modern, future-proof ecosystems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            We avoid fragile templates and outdated CMS monoliths. Every platform is architected with modern, typed technologies built for extreme speed, strict security, and regional GCC scalability.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C59B27] hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] px-2.5 py-0.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30">
                    {t.badge}
                  </span>
                  <Terminal size={16} className="text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs font-semibold text-amber-200/70 mb-3">{t.category}</p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmarks Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-md">
          {benchmarks.map((b) => (
            <div key={b.label} className="text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] tracking-tight">
                {b.value}
              </div>
              <div className="text-sm font-bold text-white">{b.label}</div>
              <div className="text-xs text-slate-400">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TechEcosystemSection;
