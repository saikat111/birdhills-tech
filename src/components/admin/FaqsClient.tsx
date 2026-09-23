"use client";

import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  HelpCircle,
  Save,
  X,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Tag,
  Search,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
  active: boolean;
  createdAt: string | Date;
}

interface FaqsClientProps {
  initialFaqs: FAQItem[];
}

const CATEGORIES = ["General", "Services & Engineering", "Pricing & Engagements", "UAE & Delivery", "Technology"];

export function FaqsClient({ initialFaqs }: FaqsClientProps) {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "General",
    sortOrder: 0,
    active: true,
  });

  const openCreateModal = () => {
    setEditingFaq(null);
    setError(null);
    setForm({
      question: "",
      answer: "",
      category: selectedCategory === "all" ? "General" : selectedCategory,
      sortOrder: faqs.length + 1,
      active: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (f: FAQItem) => {
    setEditingFaq(f);
    setError(null);
    setForm({
      question: f.question,
      answer: f.answer,
      category: f.category,
      sortOrder: f.sortOrder,
      active: f.active,
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (editingFaq) {
        const res = await fetch(`/api/admin/faqs/${editingFaq.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update FAQ");
        setFaqs((prev) => prev.map((item) => (item.id === editingFaq.id ? data.faq : item)));
      } else {
        const res = await fetch("/api/admin/faqs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create FAQ");
        setFaqs((prev) => [...prev, data.faq]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleActive = async (f: FAQItem) => {
    try {
      const res = await fetch(`/api/admin/faqs/${f.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !f.active }),
      });
      const data = await res.json();
      if (res.ok) {
        setFaqs((prev) => prev.map((item) => (item.id === f.id ? data.faq : item)));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, question: string) => {
    if (!confirm(`Delete FAQ: "${question}"?`)) return;

    try {
      const res = await fetch(`/api/admin/faqs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setFaqs((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete FAQ");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting FAQ");
    }
  };

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "all" || f.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Manage inquiries regarding contracts, Dubai office engagements, tech capabilities, and process.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
        >
          <Plus size={15} />
          Add New FAQ
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions or answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] placeholder:text-slate-400 focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-56 px-3 py-2 bg-white border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:outline-none focus:border-[#C59B27]"
        >
          <option value="all">All Categories ({faqs.length})</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* FAQ Accordion List in Admin */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className={`p-5 rounded-2xl bg-white border ${
              faq.active ? "border-[#E4E7EC]" : "border-slate-200 opacity-70"
            } shadow-2xs hover:shadow-md transition-all`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C59B27]/10] text-[#C59B27] border border-[#C59B27]/25]">
                    {faq.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Order: {faq.sortOrder}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#070B14]">{faq.question}</h3>
                <p className="text-xs text-[#475467] leading-relaxed pt-1 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0 pt-0.5">
                <button
                  type="button"
                  onClick={() => toggleActive(faq)}
                  title={faq.active ? "Active on site (Click to hide)" : "Hidden (Click to publish)"}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700"
                >
                  {faq.active ? (
                    <CheckCircle2 size={17} className="text-emerald-600" />
                  ) : (
                    <XCircle size={17} className="text-slate-400" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => openEditModal(faq)}
                  className="p-1.5 text-slate-400 hover:text-[#C59B27] rounded-lg hover:bg-slate-100 transition-colors"
                  title="Edit"
                >
                  <Edit2 size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(faq.id, faq.question)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="p-12 text-center text-xs text-slate-400 bg-white rounded-2xl border border-[#E4E7EC]">
            No FAQs found. Click &ldquo;Add New FAQ&rdquo; to add common client queries.
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <h3 className="text-base font-bold text-[#070B14]">
                {editingFaq ? "Edit FAQ" : "Add New FAQ"}
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
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Question *
                </label>
                <input
                  type="text"
                  required
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  placeholder="e.g. How does Bird Hills Tech structure project timelines and sprints?"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
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
                  Detailed Answer *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.answer}
                  onChange={(e) => setForm({ ...form, answer: e.target.value })}
                  placeholder="Clear, authoritative explanation addressing the prospective client..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.active}
                    onChange={(e) => setForm({ ...form, active: e.target.checked })}
                    className="rounded text-[#C59B27] focus:ring-[#C59B27] w-4 h-4"
                  />
                  <span>Active (Visible on public FAQ sections)</span>
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
                  {isSubmitting ? "Saving..." : editingFaq ? "Update FAQ" : "Add FAQ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
