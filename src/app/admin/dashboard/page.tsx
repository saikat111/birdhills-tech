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
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
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
    unreadMessages,
    recentLeads,
    recentBookings,
    recentProjects,
    recentPosts,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "New" } }),
    prisma.booking.count(),
    prisma.project.count(),
    prisma.blogPost.count(),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: 4,
    }),
    prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true },
      take: 4,
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
      badgeColor: "bg-[#EBF3FE] text-[#1D68BD] border-[#BFDBFE]",
      icon: Calendar,
      href: "/admin/bookings",
    },
    {
      title: "Unread Messages",
      value: unreadMessages,
      badge: unreadMessages > 0 ? "Requires Action" : "All Caught Up",
      badgeColor:
        unreadMessages > 0
          ? "bg-amber-50 text-amber-700 border-amber-200"
          : "bg-slate-100 text-slate-600 border-slate-200",
      icon: Mail,
      href: "/admin/leads",
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
      title: "Blog Articles",
      value: totalPosts,
      badge: "Insights",
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
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
            Executive Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Bird Hills Tech Dubai Management Center · Welcome back, {session.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
          >
            <Users size={14} />
            Manage Leads ({newLeads})
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
              className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-2xs hover:shadow-md hover:border-[#1D68BD]/40 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#667085]">{kpi.title}</span>
                <div className="w-8 h-8 rounded-lg bg-[#F7F9FC] text-[#1D68BD] flex items-center justify-center group-hover:bg-[#1D68BD] group-hover:text-white transition-colors">
                  <Icon size={16} />
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0B1730] mb-2">{kpi.value}</div>
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
            <h2 className="text-base font-bold text-[#0B1730] flex items-center gap-2">
              <Users size={18} className="text-[#1D68BD]" />
              Latest Inquiries & Qualified Leads
            </h2>
            <Link
              href="/admin/leads"
              className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs divide-y divide-slate-100 overflow-hidden">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="p-4 hover:bg-[#F7F9FC] transition-colors flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0B1730] truncate">{lead.name}</span>
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
                  <div className="text-[10px] text-[#1D68BD] font-medium mt-1">
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
            <h2 className="text-base font-bold text-[#0B1730] flex items-center gap-2">
              <Calendar size={18} className="text-[#1D68BD]" />
              Recent Meeting Bookings
            </h2>
            <Link
              href="/admin/bookings"
              className="text-xs font-semibold text-[#1D68BD] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs divide-y divide-slate-100 overflow-hidden">
            {recentBookings.map((b) => (
              <div key={b.id} className="p-4 hover:bg-[#F7F9FC] transition-colors flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0B1730] truncate">{b.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]">
                      {b.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#667085] truncate mt-0.5">
                    {b.company ? `${b.company} · ` : ""}
                    {b.phone}
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                    <Clock size={11} className="text-[#1D68BD]" />
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

      {/* Quick CMS Jump Links */}
      <div className="p-6 rounded-3xl bg-white border border-[#E4E7EC] shadow-2xs">
        <h3 className="text-sm font-bold text-[#0B1730] uppercase tracking-wider mb-4">
          Quick CMS Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
          <Link
            href="/admin/services"
            className="p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EBF3FE] hover:text-[#1D68BD] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <span>Edit Services</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link
            href="/admin/projects"
            className="p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EBF3FE] hover:text-[#1D68BD] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <span>Manage Case Studies</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link
            href="/admin/blog"
            className="p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EBF3FE] hover:text-[#1D68BD] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <span>Publish Article</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link
            href="/admin/settings"
            className="p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EBF3FE] hover:text-[#1D68BD] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <span>Site Settings</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
