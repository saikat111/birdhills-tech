"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  FolderOpen,
  ArrowLeft,
  Save,
  X,
  AlertCircle,
  FileText,
} from "lucide-react";

interface CategoryWithCount {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  _count?: {
    posts: number;
  };
}

interface BlogCategoriesClientProps {
  initialCategories: CategoryWithCount[];
}

export function BlogCategoriesClient({ initialCategories }: BlogCategoriesClientProps) {
  const [categories, setCategories] = useState<CategoryWithCount[]>(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<CategoryWithCount | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const openCreateModal = () => {
    setEditingCat(null);
    setError(null);
    setForm({ name: "", slug: "", description: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (c: CategoryWithCount) => {
    setEditingCat(c);
    setError(null);
    setForm({
      name: c.name,
      slug: c.slug,
      description: c.description || "",
    });
    setIsModalOpen(true);
  };

  const handleNameChange = (val: string) => {
    setForm((prev) => ({
      ...prev,
      name: val,
      slug: !editingCat
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

    try {
      if (editingCat) {
        const res = await fetch(`/api/admin/blog-categories/${editingCat.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update category");
        setCategories((prev) =>
          prev.map((item) => (item.id === editingCat.id ? { ...item, ...data.category } : item))
        );
      } else {
        const res = await fetch("/api/admin/blog-categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create category");
        setCategories((prev) => [...prev, data.category]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (cat: CategoryWithCount) => {
    if (cat._count && cat._count.posts > 0) {
      alert(`Cannot delete "${cat.name}" because it has ${cat._count.posts} posts. Reassign them first.`);
      return;
    }
    if (!confirm(`Are you sure you want to delete category "${cat.name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blog-categories/${cat.id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete");
      setCategories((prev) => prev.filter((item) => item.id !== cat.id));
    } catch (err: any) {
      alert(err.message || "Error deleting category");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href="/admin/blog"
              className="text-xs text-[#C59B27] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <ArrowLeft size={13} />
              Back to Blog Articles
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Blog Categories
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Organize articles into strategic topic clusters (Technology, Creative, Growth, Dubai Business).
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold rounded-xl shadow-md shadow-[#C59B27]/25 transition-all inline-flex items-center gap-1.5"
        >
          <Plus size={15} />
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#C59B27]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                  <FolderOpen size={20} />
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => openEditModal(cat)}
                    className="p-1.5 text-slate-400 hover:text-[#C59B27] hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(cat)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <h3 className="text-base font-bold text-[#070B14] mb-1">{cat.name}</h3>
              <p className="text-xs font-mono text-slate-400 mb-2">/category/{cat.slug}</p>
              <p className="text-xs text-[#667085] line-clamp-2">
                {cat.description || "No description provided."}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <FileText size={13} className="text-[#C59B27]" />
                {cat._count?.posts ?? 0} Articles
              </span>
              <Link
                href={`/category/${cat.slug}`}
                target="_blank"
                className="text-xs font-semibold text-[#C59B27] hover:underline"
              >
                View on Site →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#070B14]/80 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <h3 className="text-base font-bold text-[#070B14]">
                {editingCat ? "Edit Category" : "Create New Category"}
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
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g. Artificial Intelligence"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Slug *
                </label>
                <input
                  type="text"
                  required
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="artificial-intelligence"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Brief synopsis for the category archive header..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E4E7EC]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#FAF8F5] text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold rounded-xl shadow-md shadow-[#C59B27]/25 transition-all flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Save size={14} />
                  {isSubmitting ? "Saving..." : editingCat ? "Update Category" : "Create Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
