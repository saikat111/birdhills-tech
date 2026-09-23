import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  category: string;
  shortDesc: string;
  coverImage: string;
  servicesJson: string;
}

interface SelectedWorkProps {
  projects: ProjectItem[];
}

export function SelectedWorkSection({ projects }: SelectedWorkProps) {
  return (
    <section className="py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-3">
              SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-tight mb-4">
              Real projects.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728]">Real impact.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Explore selected digital experiences built across technology, design and growth.
            </p>
          </div>
          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/40 text-sm font-semibold text-[#101828] hover:text-[#C59B27] shadow-2xs transition-all group"
            >
              View All Work & Case Studies
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project) => {
            let parsedServices: string[] = [];
            try {
              parsedServices = JSON.parse(project.servicesJson);
            } catch {
              parsedServices = ["Digital Solutions"];
            }

            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#C59B27]/50 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#070B14] tracking-wider uppercase border border-slate-200">
                      {project.industry}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {parsedServices.slice(0, 2).map((srv) => (
                        <span
                          key={srv}
                          className="text-[10px] font-semibold text-[#B38728] bg-[#C59B27]/10 border border-[#C59B27]/20 px-2 py-0.5 rounded-sm"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors mb-2 leading-snug">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>

                    <p className="text-sm text-[#667085] line-clamp-2 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    <div className="text-xs text-slate-400 font-medium">
                      Client: {project.client}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="pt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors"
                  >
                    View Case Study
                    <ExternalLink size={13} />
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
export default SelectedWorkSection;
