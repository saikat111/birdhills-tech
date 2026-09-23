"use client";

import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Star,
  Save,
  X,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Building2,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  authorName: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string | null;
  active: boolean;
  sortOrder: number;
  createdAt: string | Date;
}

interface TestimonialsClientProps {
  initialTestimonials: TestimonialItem[];
}

export function TestimonialsClient({ initialTestimonials }: TestimonialsClientProps) {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TestimonialItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    authorName: "",
    role: "",
    company: "",
    quote: "",
    rating: 5,
    avatarUrl: "",
    active: true,
    sortOrder: 0,
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setError(null);
    setForm({
      authorName: "",
      role: "",
      company: "",
      quote: "",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      active: true,
      sortOrder: testimonials.length + 1,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (t: TestimonialItem) => {
    setEditingItem(t);
    setError(null);
    setForm({
      authorName: t.authorName,
      role: t.role,
      company: t.company,
      quote: t.quote,
      rating: t.rating,
      avatarUrl: t.avatarUrl || "",
      active: t.active,
      sortOrder: t.sortOrder,
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (editingItem) {
        const res = await fetch(`/api/admin/testimonials/${editingItem.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update testimonial");
        setTestimonials((prev) =>
          prev.map((item) => (item.id === editingItem.id ? data.testimonial : item))
        );
      } else {
        const res = await fetch("/api/admin/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create testimonial");
        setTestimonials((prev) => [...prev, data.testimonial]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleActive = async (t: TestimonialItem) => {
    try {
      const res = await fetch(`/api/admin/testimonials/${t.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !t.active }),
      });
      const data = await res.json();
      if (res.ok) {
        setTestimonials((prev) =>
          prev.map((item) => (item.id === t.id ? data.testimonial : item))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, author: string) => {
    if (!confirm(`Delete testimonial from "${author}"?`)) return;

    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTestimonials((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete testimonial");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting testimonial");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Testimonials & Social Proof
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Manage executive reviews, leadership praise, and verified ratings displayed across homepage and landing pages.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
        >
          <Plus size={15} />
          Add Testimonial
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`bg-white p-5 rounded-2xl border ${
              t.active ? "border-[#E4E7EC]" : "border-slate-200 bg-slate-50/50"
            } shadow-2xs hover:shadow-md transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleActive(t)}
                    title={t.active ? "Published (Click to hide)" : "Hidden (Click to publish)"}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-700"
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
                    className="p-1.5 text-slate-400 hover:text-[#C59B27] rounded-lg hover:bg-slate-100"
                    title="Edit"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id, t.authorName)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <blockquote className="text-xs text-[#070B14] italic line-clamp-4 mb-4 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              {t.avatarUrl ? (
                <img
                  src={t.avatarUrl}
                  alt={t.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#C59B27]/10] text-[#C59B27] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.authorName.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <div className="font-bold text-xs text-[#070B14] truncate">{t.authorName}</div>
                <div className="text-[11px] text-[#667085] truncate">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="col-span-full p-12 text-center text-xs text-slate-400 bg-white rounded-2xl border border-[#E4E7EC]">
            No testimonials added yet. Click &ldquo;Add Testimonial&rdquo; to create your first client review.
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <h3 className="text-base font-bold text-[#070B14]">
                {editingItem ? "Edit Testimonial" : "Add Testimonial"}
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

            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Client / Executive Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.authorName}
                    onChange={(e) => setForm({ ...form, authorName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. Chief Operating Officer"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Vantage Gulf Properties"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Star Rating (1 - 5)
                  </label>
                  <select
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  >
                    <option value={5}>★★★★★ (5 Stars)</option>
                    <option value={4}>★★★★☆ (4 Stars)</option>
                    <option value={3}>★★★☆☆ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Avatar Photo URL (Optional)
                </label>
                <input
                  type="url"
                  value={form.avatarUrl}
                  onChange={(e) => setForm({ ...form, avatarUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Client Quote / Endorsement *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.quote}
                  onChange={(e) => setForm({ ...form, quote: e.target.value })}
                  placeholder="What did the client say about Bird Hills Tech's execution, engineering, or growth results?"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.active}
                      onChange={(e) => setForm({ ...form, active: e.target.checked })}
                      className="rounded text-[#C59B27] focus:ring-[#C59B27] w-4 h-4"
                    />
                    <span>Active (Display publicly)</span>
                  </label>
                </div>
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
                  {isSubmitting ? "Saving..." : editingItem ? "Update Testimonial" : "Add Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
