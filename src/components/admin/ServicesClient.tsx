"use client";

import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Save,
  X,
  Layers,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  featuresJson: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  published: boolean;
  sortOrder: number;
}

interface ServicesClientProps {
  initialServices: ServiceItem[];
}

export function ServicesClient({ initialServices }: ServicesClientProps) {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "Technology",
    shortDesc: "",
    fullDesc: "",
    icon: "Code2",
    featuresRaw: "",
    seoTitle: "",
    seoDescription: "",
    published: true,
    sortOrder: 0,
  });

  const openCreateModal = () => {
    setEditingService(null);
    setForm({
      title: "",
      slug: "",
      category: "Technology",
      shortDesc: "",
      fullDesc: "",
      icon: "Code2",
      featuresRaw: "Feature point 1\nFeature point 2\nFeature point 3",
      seoTitle: "",
      seoDescription: "",
      published: true,
      sortOrder: services.length + 1,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (s: ServiceItem) => {
    setEditingService(s);
    let parsedFeatures: string[] = [];
    try {
      parsedFeatures = JSON.parse(s.featuresJson);
    } catch {
      parsedFeatures = [];
    }

    setForm({
      title: s.title,
      slug: s.slug,
      category: s.category,
      shortDesc: s.shortDesc,
      fullDesc: s.fullDesc,
      icon: s.icon,
      featuresRaw: parsedFeatures.join("\n"),
      seoTitle: s.seoTitle || "",
      seoDescription: s.seoDescription || "",
      published: s.published,
      sortOrder: s.sortOrder,
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const featuresArray = form.featuresRaw
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const payload = {
      ...form,
      featuresJson: JSON.stringify(featuresArray),
    };

    try {
      if (editingService) {
        // PATCH
        const res = await fetch(`/api/admin/services/${editingService.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          setServices((prev) =>
            prev.map((s) => (s.id === editingService.id ? data.service : s))
          );
          setIsModalOpen(false);
        }
      } else {
        // POST
        const res = await fetch("/api/admin/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          setServices((prev) => [...prev, data.service]);
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
      if (res.ok) {
        setServices((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublished = async (s: ServiceItem) => {
    try {
      const res = await fetch(`/api/admin/services/${s.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !s.published }),
      });
      if (res.ok) {
        setServices((prev) =>
          prev.map((item) =>
            item.id === s.id ? { ...item, published: !s.published } : item
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 font-medium">
          Total Services: {services.length}
        </span>
        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
        >
          <Plus size={15} />
          Add New Service
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F7F9FC] border-b border-[#E4E7EC] text-[11px] font-bold text-[#667085] uppercase tracking-wider">
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">Service Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-slate-400">
                    {s.sortOrder}
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#070B14] flex items-center gap-2">
                      <span>{s.title}</span>
                      <a
                        href={`/services/${s.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#C59B27]"
                        title="Preview Public Page"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                      {s.shortDesc}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[10px] font-bold uppercase text-[#C59B27] bg-[#FAF5EB] px-2 py-0.5 rounded">
                      {s.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      type="button"
                      onClick={() => togglePublished(s)}
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        s.published
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {s.published ? (
                        <>
                          <CheckCircle2 size={12} /> Published
                        </>
                      ) : (
                        <>
                          <XCircle size={12} /> Draft
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => openEditModal(s)}
                      className="p-1.5 text-slate-400 hover:text-[#C59B27] hover:bg-slate-100 rounded-lg transition-colors"
                      title="Edit Service"
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(s.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Service"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] shadow-2xl border border-[#E4E7EC] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#070B14]">
                {editingService ? "Edit Service" : "Create New Service"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">Title</label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setForm({
                        ...form,
                        title,
                        slug: !editingService
                          ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                          : form.slug,
                      });
                    }}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">Slug</label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Creative">Creative</option>
                    <option value="Growth">Growth</option>
                    <option value="Strategy">Strategy</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">Sort Order</label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#070B14] uppercase">Short Description</label>
                <input
                  type="text"
                  required
                  value={form.shortDesc}
                  onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
                  placeholder="One sentence summary for cards..."
                  className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#070B14] uppercase">Full Description</label>
                <textarea
                  rows={3}
                  required
                  value={form.fullDesc}
                  onChange={(e) => setForm({ ...form, fullDesc: e.target.value })}
                  placeholder="Detailed paragraph for service hero..."
                  className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#070B14] uppercase">
                  Features (One per line)
                </label>
                <textarea
                  rows={3}
                  value={form.featuresRaw}
                  onChange={(e) => setForm({ ...form, featuresRaw: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">SEO Title</label>
                  <input
                    type="text"
                    value={form.seoTitle}
                    onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#070B14] uppercase">SEO Description</label>
                  <input
                    type="text"
                    value={form.seoDescription}
                    onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                    className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pubCheck"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  className="rounded text-[#C59B27]"
                />
                <label htmlFor="pubCheck" className="text-xs font-semibold text-[#070B14]">
                  Published & visible on public site
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-bold shadow-sm"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
