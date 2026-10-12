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
  Smartphone,
  Monitor,
  Check,
  BarChart3,
  Sliders,
  FolderOpen,
  ArrowRight,
  UploadCloud,
  Upload,
  Loader2,
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
  {
    name: "Cloud Servers & Architecture",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
];

export function BlogClient({ initialPosts, categories }: BlogClientProps) {
  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Editor View Mode: "visual" | "preview" | "code"
  const [editorMode, setEditorMode] = useState<"visual" | "preview" | "code">("visual");
  // Active Sidebar Tab: "post" | "seo"
  const [sidebarTab, setSidebarTab] = useState<"post" | "seo">("post");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isEditingSlug, setIsEditingSlug] = useState(false);
  const [devicePreview, setDevicePreview] = useState<"desktop" | "mobile">("desktop");
  const [copiedLink, setCopiedLink] = useState(false);

  // Focus keyword for Yoast-style SEO analysis
  const [focusKeyword, setFocusKeyword] = useState("Dubai Web Development");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const featuredFileInputRef = useRef<HTMLInputElement>(null);

  // Media Modal & File Upload State
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaModalTarget, setMediaModalTarget] = useState<"content" | "featured">("content");
  const [mediaLibrary, setMediaLibrary] = useState<
    Array<{ id: string; name: string; url: string; mimeType?: string | null; size?: number | null }>
  >([]);
  const [mediaTab, setMediaTab] = useState<"upload" | "library" | "url">("upload");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [imageAltText, setImageAltText] = useState("");
  const [imageCaption, setImageCaption] = useState("");
  const [mediaSearch, setMediaSearch] = useState("");
  const [selectedMediaUrl, setSelectedMediaUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fetchMediaLibrary = async () => {
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (res.ok && data.media) {
        setMediaLibrary(data.media);
      }
    } catch (e) {
      console.error("Could not fetch media library:", e);
    }
  };

  const openMediaModal = (target: "content" | "featured") => {
    setMediaModalTarget(target);
    setMediaTab("upload");
    setSelectedMediaUrl(target === "featured" ? form.coverImage : "");
    setImageAltText("");
    setImageCaption("");
    setUploadError(null);
    setIsMediaModalOpen(true);
    fetchMediaLibrary();
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    setIsUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to upload image");

      setMediaLibrary((prev) => [data.media, ...prev]);
      setSelectedMediaUrl(data.url);
      if (!imageAltText) setImageAltText(file.name.replace(/\.[^/.]+$/, ""));

      if (mediaModalTarget === "featured") {
        setForm((prev) => ({ ...prev, coverImage: data.url }));
        setIsMediaModalOpen(false);
      } else {
        setMediaTab("library");
      }
    } catch (err: any) {
      setUploadError(err.message || "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFeaturedDirectUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Featured image upload failed");
      setForm((prev) => ({ ...prev, coverImage: data.url }));
      setMediaLibrary((prev) => [data.media, ...prev]);
    } catch (err: any) {
      setError(err.message || "Featured image upload failed");
    } finally {
      setIsUploading(false);
      if (e.target) e.target.value = "";
    }
  };

  const insertSelectedMediaIntoPost = (url: string, alt?: string, caption?: string) => {
    if (!url) return;
    if (mediaModalTarget === "featured") {
      setForm((prev) => ({ ...prev, coverImage: url }));
    } else {
      const altStr = alt || imageAltText || "Article visual";
      const captionStr = caption || imageCaption;
      let markdown = `![${altStr}](${url})`;
      if (captionStr) {
        markdown += `\n*${captionStr}*`;
      }
      insertBlock(markdown);
    }
    setIsMediaModalOpen(false);
    setSelectedMediaUrl("");
    setImageAltText("");
    setImageCaption("");
  };

  const handleTextareaDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0 && files[0].type.startsWith("image/")) {
      e.preventDefault();
      const file = files[0];
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await fetch("/api/admin/media/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (res.ok && data.url) {
          insertBlock(`![${file.name.replace(/\.[^/.]+$/, "")}](${data.url})`);
        }
      } catch (err) {
        console.error("Drop upload failed:", err);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    categoryId: categories[0]?.id || "",
    status: "published",
    author: "Bird Hills Tech Editorial Board",
    readTime: "5 min read",
    seoTitle: "",
    seoDescription: "",
  });

  // Calculate live word count & read time
  const wordCount = form.content
    ? form.content.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const charCount = form.content.length;
  const paragraphCount = form.content
    ? form.content.split(/\n\s*\n/).filter(Boolean).length
    : 0;
  const headingCount = (form.content.match(/^#{1,6}\s+/gm) || []).length;
  const estimatedReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Auto-update read time when content changes
  useEffect(() => {
    if (wordCount > 0 && !editingPost) {
      setForm((prev) => ({ ...prev, readTime: estimatedReadTime }));
    }
  }, [wordCount, estimatedReadTime, editingPost]);

  // SEO Heuristics & Scoring Engine
  const effectiveTitle = form.seoTitle || form.title;
  const effectiveDesc = form.seoDescription || form.excerpt;
  const kw = focusKeyword.trim().toLowerCase();

  const kwInTitle = kw ? effectiveTitle.toLowerCase().includes(kw) : false;
  const kwInDesc = kw ? effectiveDesc.toLowerCase().includes(kw) : false;
  const kwInContent = kw ? form.content.toLowerCase().includes(kw) : false;
  const kwInSlug = kw ? form.slug.toLowerCase().includes(kw.replace(/\s+/g, "-")) : false;
  const titleOptimal = effectiveTitle.length >= 45 && effectiveTitle.length <= 60;
  const descOptimal = effectiveDesc.length >= 120 && effectiveDesc.length <= 160;
  const lengthGood = wordCount >= 350;
  const hasHeadings = headingCount >= 2;

  let seoScore = 0;
  if (kwInTitle) seoScore += 20;
  if (kwInDesc) seoScore += 20;
  if (kwInSlug) seoScore += 15;
  if (kwInContent) seoScore += 15;
  if (titleOptimal) seoScore += 10;
  if (descOptimal) seoScore += 10;
  if (lengthGood) seoScore += 5;
  if (hasHeadings) seoScore += 5;

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";
    if (score >= 50) return "text-amber-500 bg-amber-500/10 border-amber-500/30";
    return "text-rose-500 bg-rose-500/10 border-rose-500/30";
  };

  const openCreateModal = () => {
    setEditingPost(null);
    setError(null);
    setEditorMode("visual");
    setSidebarTab("post");
    setIsSidebarOpen(true);
    setFocusKeyword("Dubai Next.js Development");
    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
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
    setSidebarTab("post");
    setIsSidebarOpen(true);
    setFocusKeyword(p.title.split(" ").slice(0, 3).join(" "));
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
    setForm((prev) => {
      const autoSlug = !editingPost
        ? val
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : prev.slug;

      return {
        ...prev,
        title: val,
        slug: autoSlug,
        seoTitle: !prev.seoTitle || prev.seoTitle === prev.title ? val : prev.seoTitle,
      };
    });
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
    setError(null);

    const trimmedTitle = form.title.trim();
    if (!trimmedTitle) {
      setError("Please enter an Article Title before saving or publishing.");
      const titleEl = document.getElementById("blog-title-input");
      titleEl?.focus();
      return;
    }

    const trimmedContent = form.content.trim();
    if (!trimmedContent) {
      setError("Please write content in the article body before saving or publishing.");
      textareaRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    const targetStatus = overrideStatus || form.status;

    // Auto-generate slug if blank
    let computedSlug =
      form.slug.trim() ||
      trimmedTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    if (!computedSlug) computedSlug = `post-${Date.now()}`;

    // Auto-generate excerpt if blank
    let computedExcerpt = form.excerpt.trim();
    if (!computedExcerpt) {
      computedExcerpt = trimmedContent
        .replace(/#+\s+/g, "")
        .replace(/[*_~`>]/g, "")
        .replace(/\s+/g, " ")
        .slice(0, 160)
        .trim();
      if (computedExcerpt.length >= 160) computedExcerpt += "...";
    }

    // Resolve categoryId
    const computedCategoryId = form.categoryId || categories[0]?.id || "";

    const payload = {
      ...form,
      title: trimmedTitle,
      slug: computedSlug,
      excerpt: computedExcerpt,
      content: trimmedContent,
      categoryId: computedCategoryId,
      status: targetStatus,
      readTime: form.readTime || estimatedReadTime,
      seoTitle: form.seoTitle || trimmedTitle,
      seoDescription: form.seoDescription || computedExcerpt,
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

  const publishedCount = posts.filter((p) => p.status === "published").length;
  const draftCount = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* 1. TOP STATS BAR & QUICK ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="text-xs font-semibold text-[#667085]">Total Articles</div>
          <div className="text-2xl font-extrabold text-[#070B14] mt-1">{posts.length}</div>
          <div className="text-[11px] text-[#B38728] mt-1 font-medium">All database records</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="text-xs font-semibold text-[#667085]">Live on Website</div>
          <div className="text-2xl font-extrabold text-emerald-600 mt-1">{publishedCount}</div>
          <div className="text-[11px] text-emerald-700/80 mt-1 font-medium">Publicly indexed articles</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="text-xs font-semibold text-[#667085]">Drafts in Progress</div>
          <div className="text-2xl font-extrabold text-amber-600 mt-1">{draftCount}</div>
          <div className="text-[11px] text-amber-700/80 mt-1 font-medium">Internal review drafts</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-[#667085]">Topic Categories</div>
            <div className="text-2xl font-extrabold text-[#070B14] mt-1">{categories.length}</div>
            <Link
              href="/admin/blog/categories"
              className="text-[11px] text-[#C59B27] hover:underline font-bold mt-1 inline-flex items-center gap-1"
            >
              <span>Manage Clusters</span>
              <ArrowRight size={11} />
            </Link>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
            <FolderOpen size={20} />
          </div>
        </div>
      </div>

      {/* 2. TOP HEADER & MAIN CMS ACTION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C59B27]/10 text-[#B38728] border border-[#C59B27]/30">
              WordPress-Style Studio
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#070B14]">
            Articles & Thought Leadership CMS
          </h1>
          <p className="text-xs text-[#667085] mt-1">
            Author and publish technical articles, whitepapers, and Dubai market perspectives with our Gutenberg-style writing studio and live Yoast SEO score meters.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/admin/seo-tools"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#C59B27]/40 text-[#070B14] hover:text-[#C59B27] text-xs font-semibold shadow-2xs transition-all"
          >
            <Sliders size={14} className="text-[#C59B27]" />
            <span>Global SEO Tools</span>
          </Link>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold shadow-md shadow-[#C59B27]/25 transition-all whitespace-nowrap"
          >
            <Plus size={16} />
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      {/* 3. FILTERS, TABS & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200/80">
        {/* Status Quick Filter Tabs */}
        <div className="flex items-center gap-1 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setStatusFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              statusFilter === "all"
                ? "bg-[#070B14] text-[#D4AF37]"
                : "text-slate-600 hover:text-[#070B14] hover:bg-slate-100"
            }`}
          >
            All ({posts.length})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter("published")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              statusFilter === "published"
                ? "bg-[#070B14] text-[#D4AF37]"
                : "text-slate-600 hover:text-[#070B14] hover:bg-slate-100"
            }`}
          >
            Published ({publishedCount})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter("draft")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              statusFilter === "draft"
                ? "bg-[#070B14] text-[#D4AF37]"
                : "text-slate-600 hover:text-[#070B14] hover:bg-slate-100"
            }`}
          >
            Drafts ({draftCount})
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search title or slug..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF8F5] border border-slate-200 rounded-lg text-[#070B14] focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 text-xs bg-[#FAF8F5] border border-slate-200 rounded-lg text-[#070B14] focus:outline-none focus:border-[#C59B27]"
          >
            <option value="all">All Categories ({categories.length})</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. POSTS TABLE LISTING */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] text-[#475467] font-semibold border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4">Article</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">SEO Score</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No articles found matching your criteria. Click &quot;Write New Article&quot; to begin.
                  </td>
                </tr>
              ) : (
                filtered.map((post) => {
                  const pTitle = post.seoTitle || post.title;
                  const pDesc = post.seoDescription || post.excerpt;
                  let pScore = 60;
                  if (pTitle.length >= 40 && pTitle.length <= 65) pScore += 15;
                  if (pDesc.length >= 100) pScore += 15;
                  if (post.content.length > 500) pScore += 10;

                  return (
                    <tr key={post.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-[#070B14] truncate max-w-sm sm:max-w-md group-hover:text-[#C59B27] transition-colors">
                              {post.title}
                            </div>
                            <div className="text-[11px] font-mono text-[#667085] flex items-center gap-1 mt-0.5">
                              <span>/blog/{post.slug}</span>
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="text-[#C59B27] hover:underline"
                              >
                                <ExternalLink size={11} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#C59B27]/10 text-[#B38728] border border-[#C59B27]/20">
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

                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getScoreColor(
                            pScore
                          )}`}
                        >
                          SEO {pScore}/100
                        </span>
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
                            className="p-1.5 text-slate-500 hover:text-[#C59B27] hover:bg-[#C59B27]/10 rounded-lg transition-colors"
                            title="Open WordPress Studio Editor"
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
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. WORDPRESS / GUTENBERG-STYLE STUDIO EDITOR (FULL SCREEN OVERLAY) */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-[#070B14]/90 backdrop-blur-sm flex items-center justify-center p-0 sm:p-3 animate-in fade-in duration-200">
          <div className="bg-white w-full h-full max-w-[1550px] max-h-[96vh] rounded-none sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#C59B27]/30">
            {/* Top WordPress Studio Bar */}
            <div className="h-16 px-4 sm:px-6 bg-[#070B14] text-white flex items-center justify-between border-b border-[#C59B27]/20 shrink-0">
              <div className="flex items-center gap-3">
                {/* WordPress "W" Logo */}
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  title="Close and return to post list"
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B38728] flex items-center justify-center text-white font-extrabold text-sm shadow-sm hover:brightness-110 transition-all"
                >
                  W
                </button>

                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>WordPress Gutenberg Studio</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/30">
                      {editingPost ? "Editing Post" : "Drafting New Post"}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {wordCount} Words • {estimatedReadTime} • {charCount} Chars
                  </div>
                </div>
              </div>

              {/* View Switcher Tabs (Visual, Reader Preview, Raw Code) */}
              <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setEditorMode("visual")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    editorMode === "visual"
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-white shadow-sm font-bold"
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
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-white shadow-sm font-bold"
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
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-white shadow-sm font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Code size={13} />
                  Markdown Code
                </button>
              </div>

              {/* Action Buttons: Save Draft / Publish / Settings Toggle / Close */}
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
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold shadow-md shadow-[#C59B27]/25 transition-all disabled:opacity-50 flex items-center gap-1.5"
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

                {/* Sidebar Inspector Toggle */}
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  title="Toggle Document Inspector"
                  className={`p-2 rounded-xl border transition-colors ${
                    isSidebarOpen
                      ? "bg-[#C59B27]/20 border-[#C59B27]/40 text-[#D4AF37]"
                      : "border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <Settings size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  title="Close Studio"
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
              <div className="flex-1 flex flex-col overflow-y-auto bg-white">
                {/* Visual Editor Mode */}
                {editorMode === "visual" && (
                  <div className="flex-1 flex flex-col">
                    {/* Gutenberg-style Formatting Toolbar */}
                    <div className="sticky top-0 z-10 px-6 py-2.5 bg-[#FAF8F5] border-b border-slate-200/80 flex flex-wrap items-center gap-1.5 shadow-2xs">
                      {/* Text Style Dropdown */}
                      <button
                        type="button"
                        onClick={() => insertFormatting("## ", "\n")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#070B14] hover:bg-slate-100 flex items-center gap-1 shadow-2xs"
                        title="Heading 2"
                      >
                        <Heading2 size={14} /> H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("### ", "\n")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#070B14] hover:bg-slate-100 flex items-center gap-1 shadow-2xs"
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
                        onClick={() => openMediaModal("content")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#070B14] hover:bg-slate-100 flex items-center gap-1.5 shadow-2xs hover:text-[#C59B27] transition-colors"
                        title="Upload from Device or Select from Media Library"
                      >
                        <UploadCloud size={14} className="text-[#C59B27]" />
                        <span>Add Media</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          insertBlock(
                            "> [!NOTE]\n> **Strategic Takeaway**: Enterprise performance in Dubai requires top-tier Core Web Vitals and local GCC compliance."
                          )
                        }
                        className="px-2 py-1 rounded-lg bg-white border border-[#E4E7EC] text-[11px] font-bold text-[#C59B27] hover:bg-[#FAF8F5] flex items-center gap-1 shadow-2xs"
                        title="Insert Callout Alert"
                      >
                        <Sparkles size={12} /> Callout Box
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          insertBlock("```typescript\n// Enterprise Next.js 16 Implementation\nexport async function getDubaiData() {\n  return await db.query();\n}\n```")
                        }
                        className="px-2 py-1 rounded-lg bg-white border border-[#E4E7EC] text-[11px] font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1 shadow-2xs"
                        title="Insert Code Snippet"
                      >
                        <Code size={12} /> Code Block
                      </button>
                    </div>

                    {/* Canvas: Post Title & Editor Area */}
                    <div className="p-8 sm:p-12 max-w-4xl mx-auto w-full space-y-6">
                      {/* Big WordPress Title Input */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="blog-title-input"
                            className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27] flex items-center gap-1"
                          >
                            <span>Article Title</span>
                            <span className="text-rose-500 font-extrabold">*</span>
                          </label>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {form.title.length} characters
                          </span>
                        </div>
                        <input
                          id="blog-title-input"
                          type="text"
                          required
                          value={form.title}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          placeholder="e.g. Next-Generation Cloud Architecture in Dubai"
                          className={`w-full text-2xl sm:text-3xl font-extrabold text-[#070B14] placeholder:text-slate-300 border rounded-2xl p-4 bg-[#FAF8F5]/60 focus:bg-white focus:outline-none transition-all leading-tight ${
                            error && !form.title.trim()
                              ? "border-rose-400 ring-2 ring-rose-200"
                              : "border-[#E4E7EC] focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                          }`}
                        />
                      </div>

                      {/* Permalink & Category quick-bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] flex-wrap">
                          <Globe size={13} className="text-[#C59B27] shrink-0" />
                          <span>https://birdhillstech.com/blog/</span>
                          {isEditingSlug ? (
                            <div className="flex items-center gap-1">
                              <input
                                type="text"
                                value={form.slug}
                                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                className="px-2 py-0.5 rounded bg-slate-100 text-[#070B14] border border-slate-200 focus:outline-none focus:border-[#C59B27] text-xs font-mono"
                              />
                              <button
                                type="button"
                                onClick={() => setIsEditingSlug(false)}
                                className="px-2 py-0.5 rounded bg-[#070B14] text-white text-[10px] font-semibold"
                              >
                                OK
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-[#070B14]">{form.slug || "post-slug"}</span>
                              <button
                                type="button"
                                onClick={() => setIsEditingSlug(true)}
                                className="text-[10px] text-[#C59B27] hover:underline font-semibold"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText(`https://birdhillstech.com/blog/${form.slug}`);
                                  setCopiedLink(true);
                                  setTimeout(() => setCopiedLink(false), 2000);
                                }}
                                className="p-1 text-slate-400 hover:text-[#070B14] rounded"
                                title="Copy URL"
                              >
                                {copiedLink ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Inline Category Selector */}
                        <div className="flex items-center gap-2">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                            Category:
                          </label>
                          <select
                            value={form.categoryId || categories[0]?.id || ""}
                            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                            className="px-2.5 py-1 text-xs font-semibold bg-[#FAF8F5] border border-slate-200 rounded-lg text-[#070B14] focus:outline-none focus:border-[#C59B27]"
                          >
                            {categories.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                        </div>
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
                          className="w-full p-3 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-[#070B14] focus:border-[#C59B27] focus:outline-none leading-relaxed bg-[#FAF8F5]"
                        />
                      </div>

                      {/* Main Rich Content Textarea with Gutenberg font feel */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                            Article Body (Markdown / Gutenberg Structured Content) <span className="text-rose-500">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">
                            Drop images directly here or click &ldquo;Add Media&rdquo;
                          </span>
                        </div>
                        <div className="relative">
                          <textarea
                            ref={textareaRef}
                            required
                            rows={18}
                            value={form.content}
                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                            onDragOver={(e) => {
                              e.preventDefault();
                              setIsDragging(true);
                            }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={(e) => {
                              setIsDragging(false);
                              handleTextareaDrop(e);
                            }}
                            placeholder="Write your article content here... Use the Gutenberg toolbar above for headings, lists, and formatting, or click 'Add Media' to upload images."
                            className={`w-full p-4 border rounded-xl text-sm sm:text-base font-normal text-[#101828] focus:border-[#C59B27] focus:outline-none leading-relaxed font-sans transition-all ${
                              isDragging
                                ? "border-[#C59B27] ring-4 ring-[#C59B27]/20 bg-[#FAF8F5]"
                                : "border-slate-200/90 bg-white"
                            }`}
                          />
                          {isUploading && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-2xs flex flex-col items-center justify-center rounded-xl gap-2 z-10">
                              <Loader2 size={24} className="animate-spin text-[#C59B27]" />
                              <span className="text-xs font-bold text-[#070B14]">Uploading media asset...</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reader Preview Mode */}
                {editorMode === "preview" && (
                  <div className="p-8 sm:p-12 max-w-3xl mx-auto w-full space-y-8">
                    <div className="space-y-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/10 text-[#B38728] border border-[#C59B27]/30">
                        {categories.find((c) => c.id === form.categoryId)?.name || "Technology"}
                      </span>
                      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#070B14] leading-tight">
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

                    <div className="p-5 rounded-xl bg-[#FAF8F5] border-l-4 border-[#C59B27] text-xs sm:text-sm text-slate-700 italic">
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
                      className="w-full p-4 border border-slate-200/80 rounded-xl font-mono text-xs text-[#070B14] bg-[#FAF8F5] focus:border-[#C59B27] focus:outline-none leading-relaxed"
                    />
                  </div>
                )}
              </div>

              {/* Right Document Settings Sidebar (WordPress Style) */}
              {isSidebarOpen && (
                <div className="w-80 sm:w-96 bg-[#FAF8F5] border-l border-slate-200/80 flex flex-col shrink-0 overflow-y-auto">
                  {/* Sidebar Navigation Tabs: Post Settings vs Yoast/RankMath SEO */}
                  <div className="flex border-b border-slate-200/80 bg-white text-xs font-bold text-slate-600">
                    <button
                      type="button"
                      onClick={() => setSidebarTab("post")}
                      className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                        sidebarTab === "post"
                          ? "border-[#C59B27] text-[#070B14] font-bold"
                          : "border-transparent hover:text-[#070B14]"
                      }`}
                    >
                      <Settings size={14} />
                      Post Settings
                    </button>
                    <button
                      type="button"
                      onClick={() => setSidebarTab("seo")}
                      className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                        sidebarTab === "seo"
                          ? "border-[#C59B27] text-[#070B14] font-bold"
                          : "border-transparent hover:text-[#070B14]"
                      }`}
                    >
                      <Sparkles size={14} className="text-[#C59B27]" />
                      <span>Yoast SEO</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-extrabold border ${getScoreColor(seoScore)}`}>
                        {seoScore}
                      </span>
                    </button>
                  </div>

                  {/* TAB 1: POST SETTINGS */}
                  {sidebarTab === "post" && (
                    <div className="p-6 space-y-6">
                      {/* Publication Status */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Publication Status
                        </label>
                        <select
                          value={form.status}
                          onChange={(e) => setForm({ ...form, status: e.target.value })}
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                        >
                          <option value="published">Published (Live on Website)</option>
                          <option value="draft">Draft (Private Admin Only)</option>
                        </select>
                      </div>

                      {/* Category Classification */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-bold text-slate-700">
                            Category Classification
                          </label>
                          <Link
                            href="/admin/blog/categories"
                            className="text-[10px] text-[#C59B27] hover:underline font-semibold"
                          >
                            + Add New
                          </Link>
                        </div>
                        <select
                          value={form.categoryId}
                          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Author Byline */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Author Byline
                        </label>
                        <input
                          type="text"
                          value={form.author}
                          onChange={(e) => setForm({ ...form, author: e.target.value })}
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                        />
                      </div>

                      {/* Estimated Reading Time */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Estimated Reading Time
                        </label>
                        <input
                          type="text"
                          value={form.readTime}
                          onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                          placeholder="5 min read"
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                        />
                      </div>

                      {/* Featured Image Section */}
                      <div className="pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-xs font-bold text-slate-700">
                            Featured Image (16:9)
                          </label>
                          {form.coverImage && (
                            <button
                              type="button"
                              onClick={() => setForm({ ...form, coverImage: "" })}
                              className="text-[10px] text-rose-600 hover:underline font-semibold"
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        {/* Direct File Upload & Media Library Triggers */}
                        <input
                          type="file"
                          ref={featuredFileInputRef}
                          accept="image/*"
                          onChange={handleFeaturedDirectUpload}
                          className="hidden"
                        />
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <button
                            type="button"
                            onClick={() => featuredFileInputRef.current?.click()}
                            disabled={isUploading}
                            className="px-2.5 py-2 rounded-xl bg-white border border-[#E4E7EC] text-xs font-bold text-[#070B14] hover:bg-slate-50 flex items-center justify-center gap-1.5 shadow-2xs hover:border-[#C59B27] transition-all disabled:opacity-50"
                          >
                            <UploadCloud size={14} className="text-[#C59B27]" />
                            <span>{isUploading ? "Uploading..." : "Upload Image"}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => openMediaModal("featured")}
                            className="px-2.5 py-2 rounded-xl bg-white border border-[#E4E7EC] text-xs font-bold text-[#070B14] hover:bg-slate-50 flex items-center justify-center gap-1.5 shadow-2xs hover:border-[#C59B27] transition-all"
                          >
                            <ImageIcon size={14} className="text-[#C59B27]" />
                            <span>Media Library</span>
                          </button>
                        </div>

                        {form.coverImage && (
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-300 shadow-sm mb-3">
                            <img
                              src={form.coverImage}
                              alt="Cover preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <div className="mb-3">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Or Image URL
                          </label>
                          <input
                            type="url"
                            value={form.coverImage}
                            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                            placeholder="https://images.unsplash.com/... or /uploads/..."
                            className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                          />
                        </div>

                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Quick Preset Images
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {PRESET_IMAGES.map((preset) => (
                            <button
                              key={preset.name}
                              type="button"
                              onClick={() => setForm({ ...form, coverImage: preset.url })}
                              className={`p-1.5 rounded-lg border text-left transition-all ${
                                form.coverImage === preset.url
                                  ? "border-[#C59B27] ring-1 ring-[#C59B27] bg-[#C59B27]/10"
                                  : "border-slate-200 bg-white hover:border-slate-300"
                              }`}
                            >
                              <div className="relative aspect-[16/10] rounded overflow-hidden mb-1">
                                <img
                                  src={preset.url}
                                  alt={preset.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="text-[10px] font-semibold text-[#070B14] truncate">
                                {preset.name}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Statistics */}
                      <div className="pt-4 border-t border-slate-200">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Document Metrics
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-600">
                          <div className="flex justify-between">
                            <span>Words:</span>
                            <span className="font-bold text-[#070B14]">{wordCount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Characters:</span>
                            <span className="font-bold text-[#070B14]">{charCount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Paragraphs:</span>
                            <span className="font-bold text-[#070B14]">{paragraphCount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Headings (H2/H3):</span>
                            <span className="font-bold text-[#070B14]">{headingCount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: YOAST / RANKMATH SEO AUDITOR */}
                  {sidebarTab === "seo" && (
                    <div className="p-6 space-y-6">
                      {/* Overall Health Score Card */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                            SEO Health Grade
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${getScoreColor(seoScore)}`}>
                            {seoScore} / 100
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              seoScore >= 75
                                ? "bg-emerald-500"
                                : seoScore >= 50
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}
                            style={{ width: `${seoScore}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {seoScore >= 75
                            ? "Excellent! High ranking potential on Google UAE."
                            : seoScore >= 50
                            ? "Moderate. Complete the checklist items below to improve score."
                            : "Needs optimization. Focus keyword and meta lengths required."}
                        </p>
                      </div>

                      {/* Focus Keyword */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Focus Keyword / Keyphrase *
                        </label>
                        <input
                          type="text"
                          value={focusKeyword}
                          onChange={(e) => setFocusKeyword(e.target.value)}
                          placeholder="e.g. Dubai Web Development"
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                        />
                        <p className="text-[10px] text-slate-400 mt-1">
                          The target query users in UAE type to find this article.
                        </p>
                      </div>

                      {/* Google Search Live Simulation Snippet */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-bold text-slate-700">
                            Google SERP Snippet Preview
                          </label>
                          <div className="flex items-center gap-1 bg-white p-0.5 rounded border border-slate-200">
                            <button
                              type="button"
                              onClick={() => setDevicePreview("desktop")}
                              className={`p-1 rounded ${
                                devicePreview === "desktop"
                                  ? "bg-slate-100 text-[#070B14]"
                                  : "text-slate-400"
                              }`}
                              title="Desktop Preview"
                            >
                              <Monitor size={12} />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDevicePreview("mobile")}
                              className={`p-1 rounded ${
                                devicePreview === "mobile"
                                  ? "bg-slate-100 text-[#070B14]"
                                  : "text-slate-400"
                              }`}
                              title="Mobile Preview"
                            >
                              <Smartphone size={12} />
                            </button>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                          <div className="text-[11px] text-slate-500 font-mono truncate">
                            https://birdhillstech.com › blog › {form.slug || "article-slug"}
                          </div>
                          <div className="text-sm font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                            {effectiveTitle || "Article Title Preview"}
                          </div>
                          <div className="text-xs text-[#4d5156] line-clamp-2 leading-relaxed">
                            {effectiveDesc || "Article meta snippet description will appear here on Google search engine results."}
                          </div>
                        </div>
                      </div>

                      {/* SEO Meta Title Input & Meter */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-bold text-slate-700">
                            SEO Title Tag
                          </label>
                          <span className={`text-[10px] font-bold ${
                            titleOptimal ? "text-emerald-600" : "text-amber-600"
                          }`}>
                            {effectiveTitle.length}/60 chars
                          </span>
                        </div>
                        <input
                          type="text"
                          value={form.seoTitle}
                          onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                          placeholder={form.title || "Custom Google title..."}
                          className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none mb-1.5"
                        />
                        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full ${
                              titleOptimal
                                ? "bg-emerald-500"
                                : effectiveTitle.length > 60
                                ? "bg-rose-500"
                                : "bg-amber-400"
                            }`}
                            style={{ width: `${Math.min(100, (effectiveTitle.length / 60) * 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* SEO Meta Description Input & Meter */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-bold text-slate-700">
                            Meta Description
                          </label>
                          <span className={`text-[10px] font-bold ${
                            descOptimal ? "text-emerald-600" : "text-amber-600"
                          }`}>
                            {effectiveDesc.length}/160 chars
                          </span>
                        </div>
                        <textarea
                          rows={3}
                          value={form.seoDescription}
                          onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                          placeholder={form.excerpt || "Custom Google description..."}
                          className="w-full p-3 border border-[#E4E7EC] rounded-xl text-xs bg-white text-[#070B14] focus:border-[#C59B27] focus:outline-none leading-relaxed mb-1.5"
                        />
                        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full ${
                              descOptimal
                                ? "bg-emerald-500"
                                : effectiveDesc.length > 160
                                ? "bg-rose-500"
                                : "bg-amber-400"
                            }`}
                            style={{ width: `${Math.min(100, (effectiveDesc.length / 160) * 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* Yoast-Style SEO Checklist */}
                      <div className="pt-2 border-t border-slate-200 space-y-2.5">
                        <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                          SEO Analysis Checklist
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {kwInTitle ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={kwInTitle ? "text-slate-700" : "text-slate-500"}>
                            Focus keyword appears in the SEO Title
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {kwInDesc ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={kwInDesc ? "text-slate-700" : "text-slate-500"}>
                            Focus keyword appears in the Meta Description
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {kwInSlug ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={kwInSlug ? "text-slate-700" : "text-slate-500"}>
                            Focus keyword included in the URL permalink slug
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {kwInContent ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-rose-500 shrink-0 mt-0.5" />
                          )}
                          <span className={kwInContent ? "text-slate-700" : "text-slate-500"}>
                            Focus keyword found inside article body
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {titleOptimal ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={titleOptimal ? "text-slate-700" : "text-slate-500"}>
                            SEO Title length is optimal (45-60 chars)
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {descOptimal ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={descOptimal ? "text-slate-700" : "text-slate-500"}>
                            Meta description length is optimal (120-160 chars)
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {lengthGood ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={lengthGood ? "text-slate-700" : "text-slate-500"}>
                            Article length: {wordCount} words (350+ recommended)
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs">
                          {hasHeadings ? (
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          )}
                          <span className={hasHeadings ? "text-slate-700" : "text-slate-500"}>
                            Subheadings present ({headingCount} H2/H3 blocks)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WORDPRESS-STYLE MEDIA MODAL */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl h-[85vh] max-h-[780px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27]">
                    <UploadCloud size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-[#070B14]">
                      {mediaModalTarget === "featured" ? "Set Featured Cover Image" : "Add Media Asset"}
                    </h2>
                    <p className="text-[11px] text-slate-500 hidden sm:block">
                      Upload from computer or pick from previously uploaded library assets
                    </p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setMediaTab("upload")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      mediaTab === "upload"
                        ? "bg-white text-[#070B14] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Upload Files
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaTab("library")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      mediaTab === "library"
                        ? "bg-white text-[#070B14] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Media Library ({mediaLibrary.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaTab("url")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      mediaTab === "url"
                        ? "bg-white text-[#070B14] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Insert from URL
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMediaModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Hidden File Input for Modal */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file);
                if (e.target) e.target.value = "";
              }}
            />

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row bg-[#FAF8F5]">
              {/* TAB 1: UPLOAD FILES */}
              {mediaTab === "upload" && (
                <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-center overflow-y-auto">
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files?.[0];
                      if (file && file.type.startsWith("image/")) {
                        handleFileUpload(file);
                      }
                    }}
                    className="w-full max-w-xl border-2 border-dashed border-slate-300 rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center bg-white hover:border-[#C59B27] transition-colors shadow-2xs"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-[#C59B27] mb-4">
                      {isUploading ? (
                        <Loader2 size={32} className="animate-spin text-[#C59B27]" />
                      ) : (
                        <UploadCloud size={32} />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#070B14] mb-1">
                      {isUploading ? "Uploading to Server..." : "Drop image files here to upload"}
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Upload high-resolution photography, diagrams, or graphics (JPEG, PNG, WebP, SVG up to 15MB)
                    </p>
                    <button
                      type="button"
                      disabled={isUploading}
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-2.5 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50 inline-flex items-center gap-2"
                    >
                      <Upload size={14} />
                      <span>{isUploading ? "Uploading..." : "Select Files from Computer"}</span>
                    </button>
                    {uploadError && (
                      <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{uploadError}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: MEDIA LIBRARY */}
              {mediaTab === "library" && (
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                  {/* Library Grid */}
                  <div className="flex-1 flex flex-col p-4 overflow-hidden border-r border-slate-200 bg-white">
                    <div className="flex items-center justify-between mb-3 gap-3">
                      <div className="relative flex-1 max-w-sm">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={mediaSearch}
                          onChange={(e) => setMediaSearch(e.target.value)}
                          placeholder="Search media assets..."
                          className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:border-[#C59B27] focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#C59B27] hover:text-[#C59B27] flex items-center gap-1.5 transition-colors"
                      >
                        <Plus size={13} />
                        <span>Upload New</span>
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-1">
                      {mediaLibrary
                        .filter((m) => m.name.toLowerCase().includes(mediaSearch.toLowerCase()))
                        .map((media) => {
                          const isSelected = selectedMediaUrl === media.url;
                          return (
                            <button
                              key={media.id}
                              type="button"
                              onClick={() => {
                                setSelectedMediaUrl(media.url);
                                if (!imageAltText) setImageAltText(media.name.replace(/\.[^/.]+$/, ""));
                              }}
                              className={`group relative aspect-square rounded-xl overflow-hidden border-2 text-left transition-all ${
                                isSelected
                                  ? "border-[#C59B27] ring-2 ring-[#C59B27]/30 shadow-md"
                                  : "border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <img
                                src={media.url}
                                alt={media.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                              {isSelected && (
                                <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#C59B27] text-white flex items-center justify-center shadow-xs">
                                  <Check size={12} strokeWidth={3} />
                                </div>
                              )}
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-[10px] text-white font-medium truncate">{media.name}</p>
                              </div>
                            </button>
                          );
                        })}

                      {mediaLibrary.length === 0 && (
                        <div className="col-span-full py-16 text-center text-slate-400">
                          <ImageIcon size={40} className="mx-auto mb-2 opacity-50" />
                          <p className="text-xs font-semibold">No media assets in library yet.</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">Click below to upload an image from your device.</p>
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="mt-3 px-4 py-1.5 bg-[#C59B27] text-white text-xs font-bold rounded-lg hover:bg-[#B38728] transition-colors inline-flex items-center gap-1.5"
                          >
                            <Upload size={13} />
                            <span>Upload First Image</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Attachment Details Sidebar */}
                  <div className="w-full md:w-72 p-4 bg-[#FAF8F5] overflow-y-auto space-y-4 shrink-0 border-t md:border-t-0 md:border-l border-slate-200">
                    <h3 className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                      Attachment Details
                    </h3>

                    {selectedMediaUrl ? (
                      <div className="space-y-3">
                        <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-white">
                          <img
                            src={selectedMediaUrl}
                            alt="Selected attachment"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Alt Text (SEO & Accessibility)
                          </label>
                          <input
                            type="text"
                            value={imageAltText}
                            onChange={(e) => setImageAltText(e.target.value)}
                            placeholder="Describe image for search engines..."
                            className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#C59B27] focus:outline-none"
                          />
                        </div>

                        {mediaModalTarget === "content" && (
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1">
                              Caption (Optional)
                            </label>
                            <input
                              type="text"
                              value={imageCaption}
                              onChange={(e) => setImageCaption(e.target.value)}
                              placeholder="Photo caption underneath image..."
                              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#C59B27] focus:outline-none"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Direct Image URL
                          </label>
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              readOnly
                              value={selectedMediaUrl}
                              className="w-full px-2.5 py-1.5 text-[10px] bg-slate-100 border border-slate-200 rounded-lg text-slate-600 focus:outline-none select-all"
                            />
                            <button
                              type="button"
                              onClick={() => navigator.clipboard.writeText(selectedMediaUrl)}
                              className="p-1.5 text-slate-600 hover:text-[#C59B27] border border-slate-200 rounded-lg bg-white shrink-0"
                              title="Copy URL"
                            >
                              <Copy size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">
                        Select an image from the library grid to view details and insert options.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: INSERT FROM URL */}
              {mediaTab === "url" && (
                <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-center overflow-y-auto">
                  <div className="w-full max-w-lg bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                    <h3 className="text-sm font-bold text-[#070B14]">
                      Insert Image via External URL
                    </h3>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Image Address (URL) *
                      </label>
                      <input
                        type="url"
                        value={selectedMediaUrl}
                        onChange={(e) => setSelectedMediaUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/... or /uploads/..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:border-[#C59B27] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Alt Text (SEO)
                      </label>
                      <input
                        type="text"
                        value={imageAltText}
                        onChange={(e) => setImageAltText(e.target.value)}
                        placeholder="Alternative text for image..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:border-[#C59B27] focus:outline-none"
                      />
                    </div>
                    {mediaModalTarget === "content" && (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Caption (Optional)
                        </label>
                        <input
                          type="text"
                          value={imageCaption}
                          onChange={(e) => setImageCaption(e.target.value)}
                          placeholder="Caption..."
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:border-[#C59B27] focus:outline-none"
                        />
                      </div>
                    )}
                    {selectedMediaUrl && (
                      <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                        <img
                          src={selectedMediaUrl}
                          alt="URL preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-200 bg-white flex items-center justify-between shrink-0">
              <div className="text-xs text-slate-500">
                {selectedMediaUrl ? (
                  <span className="font-semibold text-[#070B14]">Asset ready to insert</span>
                ) : (
                  <span>Choose or upload an image to continue</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMediaModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={!selectedMediaUrl || isUploading}
                  onClick={() => insertSelectedMediaIntoPost(selectedMediaUrl, imageAltText, imageCaption)}
                  className="px-5 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Check size={14} />
                  <span>
                    {mediaModalTarget === "featured" ? "Set as Featured Image" : "Insert into Article"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogClient;
