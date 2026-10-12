"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  CheckCircle2,
  X,
  Server,
  HardDrive,
  Activity,
  Globe,
  Star,
  Zap,
} from "lucide-react";

export interface HostingPlanItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  priceUsd: string;
  billingCycle: string;
  badge?: string | null;
  description: string;
  storage?: string | null;
  bandwidth?: string | null;
  featuresJson: string;
  popular: boolean;
  sortOrder: number;
  active: boolean;
  createdAt?: string | Date;
}

interface HostingClientProps {
  initialPlans: HostingPlanItem[];
}

export function HostingClient({ initialPlans }: HostingClientProps) {
  const [plans, setPlans] = useState<HostingPlanItem[]>(initialPlans);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<HostingPlanItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "cloud",
    priceUsd: "",
    billingCycle: "/ month",
    badge: "",
    description: "",
    storage: "",
    bandwidth: "",
    featuresRaw: "",
    popular: false,
    sortOrder: 0,
    active: true,
  });

  const openCreateModal = () => {
    setEditingPlan(null);
    setError(null);
    setForm({
      name: "",
      slug: "",
      category: "cloud",
      priceUsd: "$19.99",
      billingCycle: "/ month",
      badge: "Fast Launch",
      description: "Ultra-fast NVMe cloud hosting with enterprise-grade speed and free SSL.",
      storage: "50 GB NVMe SSD",
      bandwidth: "Unmetered Bandwidth",
      featuresRaw: "Unlimited Hosted Websites\n50 GB Pure NVMe Storage\nFree Automatic Wildcard SSL\n10 Corporate Email Inboxes\nDaily Automated Cloud Backups\n99.99% Network Uptime SLA",
      popular: false,
      sortOrder: plans.length + 1,
      active: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p: HostingPlanItem) => {
    setEditingPlan(p);
    setError(null);
    let parsedFeatures: string[] = [];
    try {
      parsedFeatures = JSON.parse(p.featuresJson);
    } catch {
      parsedFeatures = [];
    }

    setForm({
      name: p.name,
      slug: p.slug,
      category: p.category || "cloud",
      priceUsd: p.priceUsd,
      billingCycle: p.billingCycle || "/ month",
      badge: p.badge || "",
      description: p.description,
      storage: p.storage || "",
      bandwidth: p.bandwidth || "",
      featuresRaw: parsedFeatures.join("\n"),
      popular: p.popular,
      sortOrder: p.sortOrder,
      active: p.active,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const featuresArray = form.featuresRaw
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const payload = {
      name: form.name,
      slug: form.slug.toLowerCase().replace(/\s+/g, "-"),
      category: form.category,
      priceUsd: form.priceUsd,
      billingCycle: form.billingCycle,
      badge: form.badge || null,
      description: form.description,
      storage: form.storage || null,
      bandwidth: form.bandwidth || null,
      featuresJson: JSON.stringify(featuresArray),
      popular: form.popular,
      sortOrder: Number(form.sortOrder),
      active: form.active,
    };

    try {
      if (editingPlan) {
        const res = await fetch(`/api/admin/hosting/${editingPlan.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update hosting plan");

        setPlans((prev) =>
          prev.map((item) => (item.id === editingPlan.id ? data.plan : item))
        );
      } else {
        const res = await fetch(`/api/admin/hosting`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create hosting plan");

        setPlans((prev) => [...prev, data.plan].sort((a, b) => a.sortOrder - b.sortOrder));
      }

      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTogglePopular = async (p: HostingPlanItem) => {
    try {
      const res = await fetch(`/api/admin/hosting/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ popular: !p.popular }),
      });
      const data = await res.json();
      if (res.ok) {
        setPlans((prev) =>
          prev.map((item) => (item.id === p.id ? data.plan : item))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleActive = async (p: HostingPlanItem) => {
    try {
      const res = await fetch(`/api/admin/hosting/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !p.active }),
      });
      const data = await res.json();
      if (res.ok) {
        setPlans((prev) =>
          prev.map((item) => (item.id === p.id ? data.plan : item))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete hosting plan "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/hosting/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPlans((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete plan");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting plan");
    }
  };

  const filteredPlans = plans.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Domain & Hosting CMS
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Manage Cloud Hosting, VPS, and Dedicated server tiers in USD ($) displayed on `/hosting` and `/domains`.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/hosting"
            target="_blank"
            className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#F7F9FC] text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <ExternalLink size={14} />
            View Live Hosting
          </Link>
          <Link
            href="/domains"
            target="_blank"
            className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#F7F9FC] text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <Globe size={14} />
            View Domains
          </Link>
          <button
            type="button"
            onClick={openCreateModal}
            className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
          >
            <Plus size={15} />
            Add Hosting Plan
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { key: "all", label: "All Plans" },
          { key: "cloud", label: "Cloud Hosting" },
          { key: "vps", label: "Managed VPS" },
          { key: "dedicated", label: "Dedicated Bare-Metal" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveCategory(tab.key)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeCategory === tab.key
                ? "bg-[#070B14] text-white shadow-xs"
                : "bg-white border border-[#E4E7EC] text-[#475467] hover:bg-[#F7F9FC]"
            }`}
          >
            {tab.label} ({tab.key === "all" ? plans.length : plans.filter((p) => p.category === tab.key).length})
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlans.map((p) => {
          let features: string[] = [];
          try {
            features = JSON.parse(p.featuresJson);
          } catch {
            features = [];
          }

          return (
            <div
              key={p.id}
              className={`bg-white rounded-2xl border p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                p.popular ? "border-[#C59B27] ring-2 ring-[#C59B27]/20" : "border-[#E4E7EC]"
              } ${!p.active ? "opacity-60 bg-slate-50" : ""}`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    {p.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#FAF5EB] px-2 py-0.5 rounded">
                        {p.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-medium text-slate-400 block uppercase mt-0.5">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleTogglePopular(p)}
                      title={p.popular ? "Remove Featured Tag" : "Mark Featured"}
                      className={`p-1.5 rounded-lg text-xs transition-colors ${
                        p.popular
                          ? "text-amber-500 bg-amber-50 hover:bg-amber-100"
                          : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <Star size={14} fill={p.popular ? "currentColor" : "none"} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggleActive(p)}
                      title={p.active ? "Pause Plan" : "Activate Plan"}
                      className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                        p.active
                          ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
                          : "text-slate-400 bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      {p.active ? "Active" : "Paused"}
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#070B14] mb-1">{p.name}</h3>
                <p className="text-xs text-[#667085] line-clamp-2 mb-4 leading-relaxed">
                  {p.description}
                </p>

                {/* Price Display */}
                <div className="bg-[#F7F9FC] p-3 rounded-xl border border-slate-100 mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#070B14]">{p.priceUsd}</span>
                    <span className="text-xs text-[#667085]">{p.billingCycle}</span>
                  </div>
                  {(p.storage || p.bandwidth) && (
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                      <span>{p.storage || "SSD"}</span>
                      <span>{p.bandwidth || "Unmetered"}</span>
                    </div>
                  )}
                </div>

                {/* Features Snippet */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Included Specs:
                  </div>
                  {features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-[#C59B27] shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                  {features.length > 4 && (
                    <div className="text-[10px] text-slate-400 pl-5">
                      +{features.length - 4} more specs
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Order #{p.sortOrder}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => openEditModal(p)}
                    className="p-1.5 text-slate-600 hover:text-[#C59B27] hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit Plan"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(p.id, p.name)}
                    className="p-1.5 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete Plan"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Add / Edit Plan */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#070B14]">
                {editingPlan ? "Edit Hosting Plan" : "Create New Hosting Plan"}
              </h2>
              <p className="text-xs text-[#667085] mt-1">
                Configure plan details, USD pricing, hardware specs, and marketing highlights.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Plan Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Business Pro Cloud"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Slug * (URL Identifier)
                  </label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    placeholder="e.g. cloud-business"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Category *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none bg-white"
                  >
                    <option value="cloud">Cloud Hosting</option>
                    <option value="vps">Managed Cloud VPS</option>
                    <option value="dedicated">Dedicated Bare-Metal</option>
                    <option value="wordpress">WordPress Hosting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Price (USD $) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.priceUsd}
                    onChange={(e) => setForm({ ...form, priceUsd: e.target.value })}
                    placeholder="e.g. $24.99"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Billing Cycle
                  </label>
                  <input
                    type="text"
                    value={form.billingCycle}
                    onChange={(e) => setForm({ ...form, billingCycle: e.target.value })}
                    placeholder="e.g. / month"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Badge / Tag
                  </label>
                  <input
                    type="text"
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    placeholder="e.g. Most Popular"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Storage Spec
                  </label>
                  <input
                    type="text"
                    value={form.storage}
                    onChange={(e) => setForm({ ...form, storage: e.target.value })}
                    placeholder="e.g. 100 GB NVMe SSD"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#344054] mb-1">
                    Bandwidth Spec
                  </label>
                  <input
                    type="text"
                    value={form.bandwidth}
                    onChange={(e) => setForm({ ...form, bandwidth: e.target.value })}
                    placeholder="e.g. Unmetered Bandwidth"
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#344054] mb-1">
                  Plan Description *
                </label>
                <textarea
                  rows={2}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Target use cases and architecture overview..."
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#344054] mb-1">
                  Features & Technical Deliverables (One per line) *
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.featuresRaw}
                  onChange={(e) => setForm({ ...form, featuresRaw: e.target.value })}
                  placeholder="100 GB Ultra-Fast NVMe SSD Storage&#10;Free Wildcard SSL Certificate&#10;Unlimited Corporate Email Accounts&#10;Daily Automated Off-Site Backups"
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-xs focus:ring-2 focus:ring-[#C59B27] focus:outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="popular"
                    checked={form.popular}
                    onChange={(e) => setForm({ ...form, popular: e.target.checked })}
                    className="rounded border-slate-300 text-[#C59B27] focus:ring-[#C59B27]"
                  />
                  <label htmlFor="popular" className="text-xs font-semibold text-[#344054]">
                    Mark Most Popular
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="active"
                    checked={form.active}
                    onChange={(e) => setForm({ ...form, active: e.target.checked })}
                    className="rounded border-slate-300 text-[#C59B27] focus:ring-[#C59B27]"
                  />
                  <label htmlFor="active" className="text-xs font-semibold text-[#344054]">
                    Active on Public Site
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#344054] mb-0.5">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
                    className="w-full px-2.5 py-1.5 border border-[#D0D5DD] rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-[#D0D5DD] rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white rounded-xl text-xs font-semibold shadow-xs disabled:opacity-50 transition-colors inline-flex items-center gap-1.5"
                >
                  {isSubmitting ? "Saving Plan..." : editingPlan ? "Update Plan" : "Create Plan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
