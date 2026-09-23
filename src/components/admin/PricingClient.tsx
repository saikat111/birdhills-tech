"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  Save,
  X,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";

interface PricingTierItem {
  id: string;
  name: string;
  slug: string;
  badge?: string | null;
  description: string;
  priceAed: string;
  billingType: string;
  deliveryTime?: string | null;
  featuresJson: string;
  popular: boolean;
  sortOrder: number;
  active: boolean;
  createdAt: string | Date;
}

interface PricingClientProps {
  initialTiers: PricingTierItem[];
}

export function PricingClient({ initialTiers }: PricingClientProps) {
  const [tiers, setTiers] = useState<PricingTierItem[]>(initialTiers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTier, setEditingTier] = useState<PricingTierItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    badge: "",
    description: "",
    priceAed: "",
    billingType: "one-time",
    deliveryTime: "",
    featuresRaw: "",
    popular: false,
    sortOrder: 0,
    active: true,
  });

  const openCreateModal = () => {
    setEditingTier(null);
    setError(null);
    setForm({
      name: "",
      slug: "",
      badge: "",
      description: "",
      priceAed: "$9,500",
      billingType: "one-time",
      deliveryTime: "3-4 Weeks Delivery",
      featuresRaw: "Feature point 1\nFeature point 2\nFeature point 3",
      popular: false,
      sortOrder: tiers.length + 1,
      active: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (t: PricingTierItem) => {
    setEditingTier(t);
    setError(null);
    let parsedFeatures: string[] = [];
    try {
      parsedFeatures = JSON.parse(t.featuresJson);
    } catch {
      parsedFeatures = [];
    }

    setForm({
      name: t.name,
      slug: t.slug,
      badge: t.badge || "",
      description: t.description,
      priceAed: t.priceAed,
      billingType: t.billingType,
      deliveryTime: t.deliveryTime || "",
      featuresRaw: parsedFeatures.join("\n"),
      popular: t.popular,
      sortOrder: t.sortOrder,
      active: t.active,
    });
    setIsModalOpen(true);
  };

  const handleNameChange = (val: string) => {
    setForm((prev) => ({
      ...prev,
      name: val,
      slug: !editingTier
        ? val
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : prev.slug,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const featuresArray = form.featuresRaw
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const payload = {
      ...form,
      featuresJson: JSON.stringify(featuresArray),
    };

    try {
      if (editingTier) {
        const res = await fetch(`/api/admin/pricing/${editingTier.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update package");
        setTiers((prev) =>
          prev.map((item) => (item.id === editingTier.id ? data.tier : item))
        );
      } else {
        const res = await fetch("/api/admin/pricing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create package");
        setTiers((prev) => [...prev, data.tier]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleActive = async (t: PricingTierItem) => {
    try {
      const res = await fetch(`/api/admin/pricing/${t.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !t.active }),
      });
      const data = await res.json();
      if (res.ok) {
        setTiers((prev) =>
          prev.map((item) => (item.id === t.id ? data.tier : item))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete package "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/pricing/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTiers((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete package");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting package");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Pricing Packages CMS
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Manage commercial packages, USD ($) pricing, delivery timelines, and feature deliverables shown on `/pricing`.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            target="_blank"
            className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#F7F9FC] text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <ExternalLink size={14} />
            View Live Pricing
          </Link>
          <button
            type="button"
            onClick={openCreateModal}
            className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
          >
            <Plus size={15} />
            Add Pricing Package
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => {
          let features: string[] = [];
          try {
            features = JSON.parse(t.featuresJson);
          } catch {
            features = [];
          }

          return (
            <div
              key={t.id}
              className={`bg-white rounded-2xl border p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                t.popular ? "border-[#C59B27] ring-2 ring-[#C59B27]/20" : "border-[#E4E7EC]"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    {t.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#C59B27]/10] px-2 py-0.5 rounded">
                        {t.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#070B14] mt-1">{t.name}</h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => toggleActive(t)}
                      title={t.active ? "Published (Click to hide)" : "Hidden (Click to publish)"}
                      className="p-1 rounded text-slate-400 hover:text-slate-700"
                    >
                      {t.active ? (
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      ) : (
                        <XCircle size={16} className="text-slate-400" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => openEditModal(t)}
                      className="p-1 text-slate-400 hover:text-[#C59B27]"
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(t.id, t.name)}
                      className="p-1 text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <div className="text-2xl font-black text-[#070B14] mb-1">{t.priceAed}</div>
                <div className="text-[11px] text-slate-400 mb-3 font-mono">
                  {t.billingType} · {t.deliveryTime || "Flexible"}
                </div>

                <p className="text-xs text-[#667085] line-clamp-2 mb-4">{t.description}</p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Included Features ({features.length}):
                  </div>
                  {features.slice(0, 4).map((f) => (
                    <div key={f} className="text-xs text-slate-700 flex items-center gap-1.5 truncate">
                      <CheckCircle2 size={12} className="text-[#C59B27] shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                  {features.length > 4 && (
                    <div className="text-[10px] text-slate-400">
                      +{features.length - 4} more deliverables
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-mono">Order: {t.sortOrder}</span>
                {t.popular && (
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Featured Popular
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-2xs overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl my-8">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <h3 className="text-base font-bold text-[#070B14]">
                {editingTier ? "Edit Pricing Package" : "Create Pricing Package"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {error && (
              <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-700">
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Package Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g. Growth Launchpad"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Slug *</label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Price (USD $) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.priceAed}
                    onChange={(e) => setForm({ ...form, priceAed: e.target.value })}
                    placeholder="$9,500"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Billing Type
                  </label>
                  <select
                    value={form.billingType}
                    onChange={(e) => setForm({ ...form, billingType: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  >
                    <option value="one-time">One-Time Project</option>
                    <option value="monthly">Monthly Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Delivery Time
                  </label>
                  <input
                    type="text"
                    value={form.deliveryTime}
                    onChange={(e) => setForm({ ...form, deliveryTime: e.target.value })}
                    placeholder="3-4 Weeks"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Badge / Highlight (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    placeholder="Most Popular in Dubai"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="2-3 sentence overview of this engagement scope..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Included Features (One deliverable per line) *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.featuresRaw}
                  onChange={(e) => setForm({ ...form, featuresRaw: e.target.value })}
                  placeholder="Custom Next.js & TypeScript Architecture&#10;Sub-second Core Web Vitals&#10;Full IP Ownership"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.popular}
                    onChange={(e) => setForm({ ...form, popular: e.target.checked })}
                    className="rounded text-[#C59B27] focus:ring-[#C59B27] w-4 h-4"
                  />
                  <span>Mark as &ldquo;Most Popular&rdquo;</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.active}
                    onChange={(e) => setForm({ ...form, active: e.target.checked })}
                    className="rounded text-[#C59B27] focus:ring-[#C59B27] w-4 h-4"
                  />
                  <span>Active on Public Pricing Page</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E4E7EC]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#F7F9FC] text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Save size={14} />
                  {isSubmitting ? "Saving..." : editingTier ? "Update Package" : "Create Package"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
