import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import {
  Users,
  Calendar,
  Briefcase,
  FileText,
  Mail,
  ArrowUpRight,
  Sparkles,
  Clock,
  Layers,
  Server,
  Settings,
} from "lucide-react";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  // Fetch KPI counts
  const [
    totalLeads,
    newLeads,
    totalBookings,
    totalProjects,
    totalPosts,
    totalServices,
    unreadMessages,
    recentLeads,
    recentBookings,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "New" } }),
    prisma.booking.count(),
    prisma.project.count(),
    prisma.blogPost.count(),
    prisma.service.count(),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const kpis = [
    {
      title: "Total Leads",
      value: totalLeads,
      badge: `${newLeads} New`,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: Users,
      href: "/admin/leads",
    },
    {
      title: "Client Bookings",
      value: totalBookings,
      badge: "Consultations",
      badgeColor: "bg-[#C59B27]/10 text-[#C59B27] border-[#C59B27]/30",
      icon: Calendar,
      href: "/admin/bookings",
    },
    {
      title: "Core Services",
      value: totalServices,
      badge: "Active Disciplines",
      badgeColor: "bg-[#070B14] text-[#D4AF37] border-[#C59B27]/30",
      icon: Layers,
      href: "/admin/services",
    },
    {
      title: "Active Projects",
      value: totalProjects,
      badge: "Portfolio",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      icon: Briefcase,
      href: "/admin/projects",
    },
    {
      title: "Blog & Thought Leadership",
      value: totalPosts,
      badge: "Published Insights",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      icon: FileText,
      href: "/admin/blog",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/15 text-[#C59B27] border border-[#C59B27]/30">
              Dubai Management Center
            </span>
            <span className="text-xs text-[#667085]">Welcome back, {session.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] mt-1">
            Executive Operations Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/seo-tools"
            className="px-3.5 py-2 bg-white border border-[#C59B27]/40 text-[#C59B27] hover:bg-[#FAF8F5] text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <Sparkles size={14} />
            <span>SEO & AEO Suite</span>
          </Link>
          <Link
            href="/admin/leads"
            className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold rounded-xl shadow-md shadow-[#C59B27]/20 transition-all inline-flex items-center gap-1.5"
          >
            <Users size={14} />
            <span>Manage Leads ({newLeads})</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Link
              key={kpi.title}
              href={kpi.href}
              className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-2xs hover:shadow-md hover:border-[#C59B27]/40 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#667085]">{kpi.title}</span>
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#C59B27] flex items-center justify-center group-hover:bg-[#C59B27] group-hover:text-white transition-colors">
                  <Icon size={16} />
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0B0F19] mb-2">{kpi.value}</div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${kpi.badgeColor}`}
                >
                  {kpi.badge}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Activity Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Leads & Inquiries */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0B0F19] flex items-center gap-2">
              <Users size={18} className="text-[#C59B27]" />
              <span>Latest Inquiries & Qualified Leads</span>
            </h2>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs divide-y divide-slate-100 overflow-hidden">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="p-4 hover:bg-[#FAF8F5] transition-colors flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0B0F19] truncate">{lead.name}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.2 rounded-full ${
                        lead.status === "New"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#667085] truncate mt-0.5">
                    {lead.company ? `${lead.company} · ` : ""}
                    {lead.email}
                  </div>
                  <div className="text-[10px] text-[#C59B27] font-semibold mt-1">
                    {lead.service || "General Inquiry"} · Source: {lead.source}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 shrink-0 text-right">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}

            {recentLeads.length === 0 && (
              <div className="p-8 text-center text-xs text-slate-400">
                No inquiries recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Bookings */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0B0F19] flex items-center gap-2">
              <Calendar size={18} className="text-[#C59B27]" />
              <span>Recent Meeting Bookings</span>
            </h2>
            <Link
              href="/admin/bookings"
              className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs divide-y divide-slate-100 overflow-hidden">
            {recentBookings.map((b) => (
              <div key={b.id} className="p-4 hover:bg-[#FAF8F5] transition-colors flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0B0F19] truncate">{b.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-[#C59B27]/10 text-[#C59B27] border border-[#C59B27]/30">
                      {b.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#667085] truncate mt-0.5">
                    {b.company ? `${b.company} · ` : ""}
                    {b.phone}
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                    <Clock size={11} className="text-[#C59B27]" />
                    <span>{b.date} · {b.timeSlot}</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 shrink-0 text-right">
                  {new Date(b.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}

            {recentBookings.length === 0 && (
              <div className="p-8 text-center text-xs text-slate-400">
                No meeting bookings yet.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEO Suite Callout & Quick CMS Jump Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured SEO Suite Promo Card */}
        <div className="lg:col-span-5 rounded-3xl bg-[#070B14] p-6 text-white flex flex-col justify-between border border-[#C59B27]/30 shadow-md">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40 mb-3">
              DUBAI SEO & AEO STUDIO
            </span>
            <h3 className="text-lg font-bold text-white mb-2">
              Optimize for Google Maps & AI Engines
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test metadata pixel width, audit Answer Engine (AEO) citations for Perplexity & ChatGPT, and generate verified Dubai LocalBusiness JSON-LD schema.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link
              href="/admin/seo-tools"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all"
            >
              <Sparkles size={14} />
              <span>Launch SEO & AEO Suite</span>
            </Link>
          </div>
        </div>

        {/* Quick CMS Jump Actions */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-[#E4E7EC] shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0B0F19] uppercase tracking-wider mb-4">
              Quick CMS Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold">
              <Link
                href="/admin/services"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Edit 9 Services</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/admin/blog"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Write Article</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/admin/hosting"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Hosting & Plans</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/admin/projects"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Case Studies</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/admin/pricing"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Pricing Packages</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/admin/settings"
                className="p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#C59B27]/10 hover:text-[#C59B27] border border-[#E4E7EC] transition-colors flex items-center justify-between"
              >
                <span>Site Settings</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#667085]">
            <span>Bird Hills Tech Dubai CMS</span>
            <span className="font-mono text-[11px] text-[#C59B27]">v2.4 Production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
