"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Layers,
  CreditCard,
  Server,
  MessageSquare,
  Calendar,
  Settings,
  Image as ImageIcon,
  HelpCircle,
  Star,
  FolderOpen,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import Logo from "../common/Logo";

interface AdminSidebarProps {
  adminUser?: { name: string; email: string; role: string } | null;
}

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Leads CRM", href: "/admin/leads", icon: MessageSquare },
  { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  { name: "SEO & AEO Suite", href: "/admin/seo-tools", icon: Sparkles },
  { name: "Services (9 Areas)", href: "/admin/services", icon: Layers },
  { name: "Pricing Packages", href: "/admin/pricing", icon: CreditCard },
  { name: "Domain & Hosting", href: "/admin/hosting", icon: Server },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Blog Categories", href: "/admin/blog-categories", icon: FolderOpen },
  { name: "Testimonials", href: "/admin/testimonials", icon: Star },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Website Content", href: "/admin/content", icon: FileText },
  { name: "Media Assets", href: "/admin/media", icon: ImageIcon },
  { name: "Site Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar({ adminUser }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <>
      {/* Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#070B14] text-white sticky top-0 z-30 border-b border-[#C59B27]/30">
        <Logo variant="white" iconOnly />
        <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
          Admin Portal
        </span>
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-1.5 rounded-lg bg-slate-800 text-white"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Desktop & Mobile Overlay */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#070B14] text-white flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 border-r border-[#C59B27]/25 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Brand header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Logo variant="white" />
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#D4AF37]">
              CMS & OPERATIONS
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white font-bold shadow-sm shadow-[#C59B27]/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-white" : "text-[#D4AF37]/80"} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User profile & quick links */}
          <div className="p-4 border-t border-white/10 space-y-3 bg-black/40">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between text-xs text-slate-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={13} className="text-[#D4AF37]" />
                View Public Site
              </span>
              <span className="text-[10px] bg-[#C59B27]/20 text-[#D4AF37] px-1.5 py-0.5 rounded font-bold">
                Live
              </span>
            </Link>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 px-2">
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">
                  {adminUser?.name || "Administrator"}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {adminUser?.email || "admin@birdhillstech.com"}
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Log Out"
                className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-2xs"
        />
      )}
    </>
  );
}

export default AdminSidebar;
