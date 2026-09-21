"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  Calendar,
  Clock,
  Tag,
  Save,
  X,
  FileText,
  AlertCircle,
  Eye,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  categoryId: string;
  category?: Category | null;
  status: string;
  author: string;
  readTime: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  publishedAt: string | Date;
  createdAt: string | Date;
}

interface BlogClientProps {
  initialPosts: BlogPostItem[];
  categories: Category[];
}

export function BlogClient({ initialPosts, categories }: BlogClientProps) {
  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    categoryId: categories[0]?.id || "",
    status: "published",
    author: "Bird Hills Tech Team",
    readTime: "5 min read",
    seoTitle: "",
    seoDescription: "",
  });

  const openCreateModal = () => {
    setEditingPost(null);
    setError(null);
    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      categoryId: categories[0]?.id || "",
      status: "published",
      author: "Bird Hills Tech Team",
      readTime: "5 min read",
      seoTitle: "",
      seoDescription: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p: BlogPostItem) => {
    setEditingPost(p);
    setError(null);
    setForm({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      content: p.content,
      coverImage: p.coverImage,
      categoryId: p.categoryId,
      status: p.status,
      author: p.author,
      readTime: p.readTime,
      seoTitle: p.seoTitle || "",
      seoDescription: p.seoDescription || "",
    });
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    setForm((prev) => ({
      ...prev,
      title: val,
      slug: !editingPost
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
      if (editingPost) {
        // PATCH
        const res = await fetch(`/api/admin/blog/${editingPost.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update article");
        setPosts((prev) => prev.map((item) => (item.id === editingPost.id ? data.post : item)));
      } else {
        // POST
        const res = await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create article");
        setPosts((prev) => [data.post, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete article");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting article");
    }
  };

  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "all" || p.categoryId === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
            Blog & Insights Management
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Publish thought leadership, tech analysis, and growth strategies for Bird Hills Tech.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog-categories"
            className="px-4 py-2 border border-[#E4E7EC] hover:bg-[#F7F9FC] text-slate-700 text-xs font-semibold rounded-xl transition-colors"
          >
            Manage Categories
          </Link>
          <button
            type="button"
            onClick={openCreateModal}
            className="px-4 py-2 bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
          >
            <Plus size={15} />
            Write New Article
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles by title, author, or excerpt..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] placeholder:text-slate-400 focus:outline-none focus:border-[#1D68BD]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-56 px-3 py-2 bg-white border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:outline-none focus:border-[#1D68BD]"
        >
          <option value="all">All Categories ({posts.length})</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Posts Table / List */}
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F7F9FC] border-b border-[#E4E7EC] text-[11px] font-bold text-[#667085] uppercase tracking-wider">
                <th className="py-3 px-4">Article</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Author & Read Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-[#0B1730]">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-[#F7F9FC]/60 transition-colors">
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="flex items-start gap-3">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-12 h-10 rounded-lg object-cover border border-slate-200 shrink-0 mt-0.5"
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-[#0B1730] line-clamp-1">{post.title}</div>
                        <div className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                          {post.excerpt}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]">
                      <Tag size={10} />
                      {post.category?.name || "General"}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-medium text-[11px] text-slate-800">{post.author}</div>
                    <div className="text-[10px] text-slate-400">{post.readTime}</div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        post.status === "published"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-[11px] text-[#667085]">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={`/insights/${post.slug}`}
                        target="_blank"
                        title="View Live"
                        className="p-1.5 text-slate-400 hover:text-[#1D68BD] hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ExternalLink size={14} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => openEditModal(post)}
                        title="Edit Article"
                        className="p-1.5 text-slate-400 hover:text-[#1D68BD] hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.id, post.title)}
                        title="Delete Article"
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredPosts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400">
                    No articles found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-2xs overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl my-8">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0B1730]">
                  {editingPost ? "Edit Blog Article" : "Create New Blog Article"}
                </h3>
                <p className="text-xs text-[#667085]">
                  Compose high-impact thought leadership content.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Scaling Next.js Architecture for Middle East Portals"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={form.categoryId}
                    onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={form.readTime}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    placeholder="5 min read"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cover Image URL
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="url"
                    value={form.coverImage}
                    onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                  {form.coverImage && (
                    <img
                      src={form.coverImage}
                      alt="Preview"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Excerpt / Teaser Summary *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="2-3 sentence overview shown in blog feeds and SEO snippets..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Article Body (Markdown / Structured Text) *
                </label>
                <textarea
                  required
                  rows={10}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write the full post content here. Supports headings, paragraphs, bullet points..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#0B1730] focus:border-[#1D68BD] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    SEO Meta Title
                  </label>
                  <input
                    type="text"
                    value={form.seoTitle}
                    onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                    placeholder="Custom title tag for Google"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Publication Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                  >
                    <option value="published">Published (Visible to Public)</option>
                    <option value="draft">Draft (Hidden)</option>
                  </select>
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
                  className="px-5 py-2 bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Save size={14} />
                  {isSubmitting ? "Saving..." : editingPost ? "Update Article" : "Publish Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
