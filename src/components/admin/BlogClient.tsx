"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link2,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Globe,
  Settings,
  HelpCircle,
  Copy,
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

const PRESET_IMAGES = [
  {
    name: "Dubai Skyline & Financial Center",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Next.js & Software Engineering",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Digital Growth & Analytics",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "UI/UX & Brand Design Studio",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Enterprise Boardroom Strategy",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function BlogClient({ initialPosts, categories }: BlogClientProps) {
  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Editor View Mode: "visual" | "preview" | "code"
  const [editorMode, setEditorMode] = useState<"visual" | "preview" | "code">("visual");
  // Active Sidebar Tab: "settings" | "featuredImage" | "seo"
  const [sidebarTab, setSidebarTab] = useState<"settings" | "featuredImage" | "seo">("settings");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  // Calculate live word count & read time
  const wordCount = form.content
    ? form.content.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const estimatedReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Auto-update read time when content changes
  useEffect(() => {
    if (wordCount > 0 && !editingPost) {
      setForm((prev) => ({ ...prev, readTime: estimatedReadTime }));
    }
  }, [wordCount, estimatedReadTime, editingPost]);

  const openCreateModal = () => {
    setEditingPost(null);
    setError(null);
    setEditorMode("visual");
    setSidebarTab("settings");
    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content:
        "## Executive Overview\n\nProvide an authoritative summary of the challenge and industry context in Dubai.\n\n## Technical Architecture & Approach\n\nDetail the exact engineering methodology, technologies, and implementation strategy.\n\n- Sub-second Core Web Vitals (< 0.8s LCP)\n- Clean TypeScript & Next.js 16 modular components\n- Enterprise data security and privacy compliance\n\n## Commercial Impact & ROI\n\nSummarize the tangible business outcomes and performance benchmarks achieved.",
      coverImage: PRESET_IMAGES[0].url,
      categoryId: categories[0]?.id || "",
      status: "published",
      author: "Bird Hills Tech Editorial Board",
      readTime: "5 min read",
      seoTitle: "",
      seoDescription: "",
    });
    setIsEditorOpen(true);
  };

  const openEditModal = (p: BlogPostItem) => {
    setEditingPost(p);
    setError(null);
    setEditorMode("visual");
    setSidebarTab("settings");
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
    setIsEditorOpen(true);
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
      seoTitle: !prev.seoTitle || prev.seoTitle === prev.title ? val : prev.seoTitle,
    }));
  };

  // Helper to insert formatting tags at current cursor location in textarea
  const insertFormatting = (prefix: string, suffix: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);

    const replacement = prefix + (selected || "Text") + suffix;
    const newContent = text.substring(0, start) + replacement + text.substring(end);

    setForm((prev) => ({ ...prev, content: newContent }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selected ? selected.length : 4)
      );
    }, 10);
  };

  const insertBlock = (blockText: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setForm((prev) => ({ ...prev, content: prev.content + "\n\n" + blockText }));
      return;
    }
    const start = textarea.selectionStart;
    const text = textarea.value;
    const newContent = text.substring(0, start) + "\n\n" + blockText + "\n\n" + text.substring(start);
    setForm((prev) => ({ ...prev, content: newContent }));
  };

  const handleSave = async (e?: React.FormEvent, overrideStatus?: string) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const targetStatus = overrideStatus || form.status;

    const payload = {
      ...form,
      status: targetStatus,
      readTime: form.readTime || estimatedReadTime,
      seoTitle: form.seoTitle || form.title,
      seoDescription: form.seoDescription || form.excerpt,
    };

    try {
      if (editingPost) {
        const res = await fetch(`/api/admin/blog/${editingPost.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update article");
        setPosts((prev) =>
          prev.map((item) => (item.id === editingPost.id ? data.post : item))
        );
      } else {
        const res = await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create article");
        setPosts((prev) => [data.post, ...prev]);
      }
      setIsEditorOpen(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while saving the post.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete article");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert("Error deleting article: " + (err as Error).message);
    }
  };

  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      selectedCategory === "all" || p.categoryId === selectedCategory;
    const matchStatus =
      statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchCat && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* 1. TOP HEADER & METRICS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1730]">
            Articles & Thought Leadership CMS
          </h1>
          <p className="text-xs text-[#667085] mt-1">
            Author and publish technical articles, whitepapers, and Dubai market perspectives with our Gutenberg-style writing studio.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D68BD] text-white text-xs font-bold hover:bg-[#155196] shadow-sm transition-colors whitespace-nowrap"
        >
          <Plus size={16} />
          <span>Write New Article</span>
        </button>
      </div>

      {/* 2. FILTERS & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-xl border border-[#E4E7EC]">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search by title, author, or slug..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-[#E4E7EC] rounded-lg text-[#0B1730] focus:outline-none focus:border-[#1D68BD]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 text-xs border border-[#E4E7EC] rounded-lg text-[#0B1730] focus:outline-none focus:border-[#1D68BD]"
        >
          <option value="all">All Categories ({categories.length})</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 text-xs border border-[#E4E7EC] rounded-lg text-[#0B1730] focus:outline-none focus:border-[#1D68BD]"
        >
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Drafts</option>
        </select>
      </div>

      {/* 3. POSTS TABLE LISTING */}
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F7F9FC] text-[#475467] font-semibold border-b border-[#E4E7EC]">
              <tr>
                <th className="py-3.5 px-4">Article</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Published Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7EC]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No articles found matching your criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-[#0B1730] truncate max-w-sm sm:max-w-md">
                            {post.title}
                          </div>
                          <div className="text-[11px] font-mono text-[#667085] flex items-center gap-1 mt-0.5">
                            <span>/blog/{post.slug}</span>
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="text-[#1D68BD] hover:underline"
                            >
                              <ExternalLink size={11} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#EBF3FE] text-[#1D68BD]">
                        {post.category?.name || "Uncategorized"}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          post.status === "published"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-[#475467] font-medium">
                      {post.author}
                    </td>

                    <td className="py-3.5 px-4 text-[#667085]">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEditModal(post)}
                          className="p-1.5 text-slate-500 hover:text-[#1D68BD] hover:bg-[#EBF3FE] rounded-lg transition-colors"
                          title="Open Gutenberg Editor"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete Post"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. WORDPRESS / GUTENBERG-STYLE WRITING STUDIO (FULL SCREEN MODAL) */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1730]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-7xl h-[95vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            {/* Top WordPress Studio Bar */}
            <div className="h-16 px-6 bg-[#0B1730] text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#1D68BD] flex items-center justify-center text-white font-bold text-xs">
                  W
                </span>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>WordPress-Style Studio Editor</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-[#38BDF8]">
                      {editingPost ? "Editing Post" : "New Post Draft"}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {wordCount} Words • {estimatedReadTime}
                  </div>
                </div>
              </div>

              {/* View Switcher Tabs (Visual, Live Preview, Code) */}
              <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setEditorMode("visual")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    editorMode === "visual"
                      ? "bg-[#1D68BD] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Visual Editor
                </button>
                <button
                  type="button"
                  onClick={() => setEditorMode("preview")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                    editorMode === "preview"
                      ? "bg-[#1D68BD] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Eye size={13} />
                  Reader Preview
                </button>
                <button
                  type="button"
                  onClick={() => setEditorMode("code")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                    editorMode === "code"
                      ? "bg-[#1D68BD] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Code size={13} />
                  Raw Source
                </button>
              </div>

              {/* Action Buttons: Save Draft / Publish / Close */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSave(undefined, "draft")}
                  disabled={isSubmitting}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold border border-white/15 transition-colors disabled:opacity-50"
                >
                  Save Draft
                </button>

                <button
                  type="button"
                  onClick={() => handleSave(undefined, "published")}
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-xl bg-[#1D68BD] hover:bg-[#155196] text-white text-xs font-bold shadow-md transition-colors disabled:opacity-50 flex items-center gap-1.5"
                >
                  {isSubmitting ? (
                    <span>Saving...</span>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>{editingPost ? "Update Post" : "Publish"}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border-b border-rose-200 flex items-center gap-2 text-xs text-rose-700 px-6">
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            {/* Main Stage: Writing Canvas (Left) + Document Inspector (Right) */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Writing Canvas */}
              <div className="flex-1 flex flex-col overflow-y-auto bg-white border-r border-[#E4E7EC]">
                {/* Visual Editor Mode */}
                {editorMode === "visual" && (
                  <div className="flex-1 flex flex-col">
                    {/* Gutenberg-style Formatting Toolbar */}
                    <div className="sticky top-0 z-10 px-6 py-2.5 bg-slate-50 border-b border-[#E4E7EC] flex flex-wrap items-center gap-1.5">
                      {/* Text Style Dropdown */}
                      <button
                        type="button"
                        onClick={() => insertFormatting("## ", "\n")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#0B1730] hover:bg-slate-100 flex items-center gap-1"
                        title="Heading 2"
                      >
                        <Heading2 size={14} /> H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("### ", "\n")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#0B1730] hover:bg-slate-100 flex items-center gap-1"
                        title="Heading 3"
                      >
                        <Heading3 size={14} /> H3
                      </button>

                      <div className="h-4 w-px bg-slate-300 mx-1" />

                      {/* Formatting Buttons */}
                      <button
                        type="button"
                        onClick={() => insertFormatting("**", "**")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Bold (Ctrl+B)"
                      >
                        <Bold size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("*", "*")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Italic (Ctrl+I)"
                      >
                        <Italic size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("~~", "~~")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Strikethrough"
                      >
                        <Strikethrough size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("`", "`")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Inline Code"
                      >
                        <Code size={15} />
                      </button>

                      <div className="h-4 w-px bg-slate-300 mx-1" />

                      {/* Lists */}
                      <button
                        type="button"
                        onClick={() => insertFormatting("- ", "")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Bullet List"
                      >
                        <List size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("1. ", "")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Numbered List"
                      >
                        <ListOrdered size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("> ", "")}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Blockquote"
                      >
                        <Quote size={15} />
                      </button>

                      <div className="h-4 w-px bg-slate-300 mx-1" />

                      {/* Inserts: Links, Media, Callout */}
                      <button
                        type="button"
                        onClick={() => {
                          const url = prompt("Enter link URL:", "https://");
                          if (url) insertFormatting("[", `](${url})`);
                        }}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Insert Link"
                      >
                        <Link2 size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const url = prompt("Enter image URL:", "https://images.unsplash.com/...");
                          const alt = prompt("Enter image description / caption:", "Article visual");
                          if (url) insertBlock(`![${alt || "Image"}](${url})`);
                        }}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-700 border border-transparent hover:border-[#E4E7EC]"
                        title="Insert Image"
                      >
                        <ImageIcon size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          insertBlock(
                            "> [!NOTE]\n> **Strategic Takeaway**: Enterprise performance in Dubai requires sub-second Core Web Vitals and local GCC compliance."
                          )
                        }
                        className="px-2 py-1 rounded-lg bg-white border border-[#E4E7EC] text-[11px] font-bold text-[#1D68BD] hover:bg-[#EBF3FE] flex items-center gap-1"
                        title="Insert Callout Alert"
                      >
                        <Sparkles size={12} /> Callout Box
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          insertBlock("```typescript\n// Enterprise Next.js 16 Implementation\nexport async function getDubaiData() {\n  return await db.query();\n}\n```")
                        }
                        className="px-2 py-1 rounded-lg bg-white border border-[#E4E7EC] text-[11px] font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1"
                        title="Insert Code Snippet"
                      >
                        <Code size={12} /> Code Block
                      </button>
                    </div>

                    {/* Canvas: Post Title & Editor Area */}
                    <div className="p-8 sm:p-12 max-w-4xl mx-auto w-full space-y-6">
                      {/* Big WordPress Title Input */}
                      <input
                        type="text"
                        required
                        value={form.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="Add title..."
                        className="w-full text-3xl sm:text-4xl font-extrabold text-[#0B1730] placeholder:text-slate-300 border-0 focus:outline-none focus:ring-0 leading-tight"
                      />

                      {/* Permalink indicator */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#667085] pb-4 border-b border-slate-100">
                        <Globe size={13} className="text-[#1D68BD]" />
                        <span>https://birdhillstech.com/blog/</span>
                        <input
                          type="text"
                          value={form.slug}
                          onChange={(e) => setForm({ ...form, slug: e.target.value })}
                          className="px-2 py-0.5 rounded bg-slate-100 text-[#0B1730] border border-slate-200 focus:outline-none focus:border-[#1D68BD] text-xs font-mono"
                        />
                      </div>

                      {/* Excerpt box */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Article Teaser / Excerpt
                        </label>
                        <textarea
                          rows={2}
                          value={form.excerpt}
                          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                          placeholder="Write a concise 2-sentence summary that appears in search results and post cards..."
                          className="w-full p-3 border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#0B1730] focus:border-[#1D68BD] focus:outline-none leading-relaxed"
                        />
                      </div>

                      {/* Main Rich Content Textarea with Gutenberg font feel */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Article Body (Markdown / Gutenberg Structured Content)
                        </label>
                        <textarea
                          ref={textareaRef}
                          required
                          rows={18}
                          value={form.content}
                          onChange={(e) => setForm({ ...form, content: e.target.value })}
                          placeholder="Begin writing your article here..."
                          className="w-full p-4 border border-[#E4E7EC] rounded-xl text-sm sm:text-base font-normal text-[#344054] focus:border-[#1D68BD] focus:outline-none leading-relaxed font-sans"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Reader Preview Mode */}
                {editorMode === "preview" && (
                  <div className="p-8 sm:p-12 max-w-3xl mx-auto w-full space-y-8">
                    <div className="space-y-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3FE] text-[#1D68BD]">
                        {categories.find((c) => c.id === form.categoryId)?.name || "Technology"}
                      </span>
                      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] leading-tight">
                        {form.title || "Untitled Article"}
                      </h1>
                      <div className="flex items-center gap-3 text-xs text-[#667085]">
                        <span>By {form.author}</span>
                        <span>•</span>
                        <span>{form.readTime}</span>
                      </div>
                    </div>

                    {form.coverImage && (
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <img
                          src={form.coverImage}
                          alt="Cover"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="p-5 rounded-xl bg-[#F7F9FC] border-l-4 border-[#1D68BD] text-xs sm:text-sm text-slate-700 italic">
                      {form.excerpt || "No excerpt provided yet."}
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {form.content}
                    </div>
                  </div>
                )}

                {/* Raw Code Mode */}
                {editorMode === "code" && (
                  <div className="p-8 max-w-4xl mx-auto w-full space-y-4">
                    <div className="text-xs font-mono text-slate-500">
                      Raw Markdown / Structured Content Source
                    </div>
                    <textarea
                      rows={25}
                      value={form.content}
                      onChange={(e) => setForm({ ...form, content: e.target.value })}
                      className="w-full p-4 border border-[#E4E7EC] rounded-xl font-mono text-xs text-[#0B1730] bg-slate-50 focus:border-[#1D68BD] focus:outline-none leading-relaxed"
                    />
                  </div>
                )}
              </div>

              {/* Right Document Settings Sidebar (WordPress Style) */}
              <div className="w-80 sm:w-96 bg-[#F7F9FC] border-l border-[#E4E7EC] flex flex-col shrink-0 overflow-y-auto">
                {/* Sidebar Navigation Tabs */}
                <div className="flex border-b border-[#E4E7EC] bg-white text-xs font-bold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setSidebarTab("settings")}
                    className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors ${
                      sidebarTab === "settings"
                        ? "border-[#1D68BD] text-[#1D68BD]"
                        : "border-transparent hover:text-[#0B1730]"
                    }`}
                  >
                    Post Settings
                  </button>
                  <button
                    type="button"
                    onClick={() => setSidebarTab("featuredImage")}
                    className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors ${
                      sidebarTab === "featuredImage"
                        ? "border-[#1D68BD] text-[#1D68BD]"
                        : "border-transparent hover:text-[#0B1730]"
                    }`}
                  >
                    Featured Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setSidebarTab("seo")}
                    className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors ${
                      sidebarTab === "seo"
                        ? "border-[#1D68BD] text-[#1D68BD]"
                        : "border-transparent hover:text-[#0B1730]"
                    }`}
                  >
                    SEO Snippet
                  </button>
                </div>

                {/* Tab 1: Post Settings */}
                {sidebarTab === "settings" && (
                  <div className="p-6 space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Publication Status
                      </label>
                      <select
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                      >
                        <option value="published">Published (Live on Website)</option>
                        <option value="draft">Draft (Private Admin Only)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Category Classification
                      </label>
                      <select
                        value={form.categoryId}
                        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
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
                        Author Byline
                      </label>
                      <input
                        type="text"
                        value={form.author}
                        onChange={(e) => setForm({ ...form, author: e.target.value })}
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Estimated Reading Time
                      </label>
                      <input
                        type="text"
                        value={form.readTime}
                        onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                        placeholder="5 min read"
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Post Statistics
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        <div className="flex justify-between">
                          <span>Word Count:</span>
                          <span className="font-bold text-[#0B1730]">{wordCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Characters:</span>
                          <span className="font-bold text-[#0B1730]">{form.content.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Featured Image */}
                {sidebarTab === "featuredImage" && (
                  <div className="p-6 space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Cover Image URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={form.coverImage}
                        onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                      />
                    </div>

                    {form.coverImage && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-300 shadow-sm">
                        <img
                          src={form.coverImage}
                          alt="Cover preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-200">
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Quick Corporate Preset Images
                      </label>
                      <div className="space-y-2">
                        {PRESET_IMAGES.map((preset) => (
                          <button
                            key={preset.name}
                            type="button"
                            onClick={() => setForm({ ...form, coverImage: preset.url })}
                            className="w-full text-left p-2 rounded-lg bg-white border border-[#E4E7EC] hover:border-[#1D68BD] hover:bg-[#EBF3FE] transition-colors flex items-center gap-2.5 text-xs"
                          >
                            <img
                              src={preset.url}
                              alt={preset.name}
                              className="w-8 h-8 rounded-md object-cover"
                            />
                            <span className="font-medium text-[#0B1730] truncate">
                              {preset.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Google SEO & Social Meta */}
                {sidebarTab === "seo" && (
                  <div className="p-6 space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        SEO Meta Title
                      </label>
                      <input
                        type="text"
                        value={form.seoTitle}
                        onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                        placeholder={form.title || "Custom Google title..."}
                        className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        SEO Meta Description
                      </label>
                      <textarea
                        rows={3}
                        value={form.seoDescription}
                        onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                        placeholder={form.excerpt || "Custom Google description..."}
                        className="w-full p-3 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#0B1730] focus:border-[#1D68BD] focus:outline-none leading-relaxed"
                      />
                    </div>

                    {/* Google SERP Live Simulation Box */}
                    <div className="pt-2 border-t border-slate-200">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Google Search Preview
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                        <div className="text-[11px] text-slate-500 font-mono truncate">
                          https://birdhillstech.com › blog › {form.slug || "article-slug"}
                        </div>
                        <div className="text-sm font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                          {form.seoTitle || form.title || "Article Title Preview"}
                        </div>
                        <div className="text-xs text-[#4d5156] line-clamp-2 leading-relaxed">
                          {form.seoDescription || form.excerpt || "Article meta snippet description will appear here on Google search engine results."}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogClient;
