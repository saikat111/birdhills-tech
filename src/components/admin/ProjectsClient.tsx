"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Star,
  ExternalLink,
  X,
  Search,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  category: string;
  shortDesc: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  servicesJson: string;
  techJson: string;
  coverImage: string;
  featured: boolean;
  status: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
}

interface ProjectsClientProps {
  initialProjects: ProjectItem[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    client: "",
    industry: "",
    category: "Web",
    shortDesc: "",
    description: "",
    challenge: "",
    approach: "",
    solution: "",
    results: "",
    servicesRaw: "Web Development",
    techRaw: "Next.js, TypeScript",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    status: "published",
    seoTitle: "",
    seoDescription: "",
  });

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openCreateModal = () => {
    setEditingProject(null);
    setForm({
      title: "",
      slug: "",
      client: "",
      industry: "Enterprise",
      category: "Web",
      shortDesc: "",
      description: "",
      challenge: "",
      approach: "",
      solution: "",
      results: "",
      servicesRaw: "Web Development\nUI/UX Design",
      techRaw: "Next.js, TypeScript, Tailwind CSS",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      status: "published",
      seoTitle: "",
      seoDescription: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p: ProjectItem) => {
    setEditingProject(p);
    let servList: string[] = [];
    let techList: string[] = [];
    try {
      servList = JSON.parse(p.servicesJson);
    } catch {
      servList = [p.servicesJson];
    }
    try {
      techList = JSON.parse(p.techJson);
    } catch {
      techList = [p.techJson];
    }

    setForm({
      title: p.title,
      slug: p.slug,
      client: p.client,
      industry: p.industry,
      category: p.category,
      shortDesc: p.shortDesc,
      description: p.description,
      challenge: p.challenge,
      approach: p.approach,
      solution: p.solution,
      results: p.results,
      servicesRaw: servList.join("\n"),
      techRaw: techList.join(", "),
      coverImage: p.coverImage,
      featured: p.featured,
      status: p.status,
      seoTitle: p.seoTitle || "",
      seoDescription: p.seoDescription || "",
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const servicesArray = form.servicesRaw.split("\n").map((s) => s.trim()).filter(Boolean);
    const techArray = form.techRaw.split(",").map((t) => t.trim()).filter(Boolean);

    const payload = {
      ...form,
      servicesJson: JSON.stringify(servicesArray),
      techJson: JSON.stringify(techArray),
    };

    try {
      if (editingProject) {
        const res = await fetch(`/api/admin/projects/${editingProject.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          setProjects((prev) =>
            prev.map((p) => (p.id === editingProject.id ? data.project : p))
          );
          setIsModalOpen(false);
        }
      } else {
        const res = await fetch("/api/admin/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          setProjects((prev) => [data.project, ...prev]);
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFeatured = async (p: ProjectItem) => {
    try {
      const res = await fetch(`/api/admin/projects/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !p.featured }),
      });
      if (res.ok) {
        setProjects((prev) =>
          prev.map((item) =>
            item.id === p.id ? { ...item, featured: !p.featured } : item
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E4E7EC] shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, client, category..."
            className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl pl-10 pr-4 py-2.5 text-[#101828] focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
        >
          <Plus size={15} />
          Add Case Study
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl border border-[#E4E7EC] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/9] bg-slate-100">
                <Image
                  src={p.coverImage}
                  alt={p.title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="bg-white/95 px-2 py-0.5 rounded text-[10px] font-bold text-[#070B14]">
                    {p.category}
                  </span>
                  {p.featured && (
                    <span className="bg-amber-400 text-amber-950 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5">
                      <Star size={10} className="fill-amber-950" /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[11px] text-[#C59B27] font-semibold">{p.client}</div>
                <h3 className="text-base font-bold text-[#070B14] leading-snug">
                  <a
                    href={`/work/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    {p.title}
                    <ExternalLink size={12} className="text-slate-400" />
                  </a>
                </h3>
                <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                  {p.shortDesc}
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#F7F9FC] border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => toggleFeatured(p)}
                className={`text-[11px] font-semibold px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                  p.featured
                    ? "text-amber-700 bg-amber-50"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Star size={12} className={p.featured ? "fill-amber-500" : ""} />
                {p.featured ? "Featured" : "Set Featured"}
              </button>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => openEditModal(p)}
                  className="p-1.5 text-slate-400 hover:text-[#C59B27] rounded-lg"
                  title="Edit"
                >
                  <Edit2 size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(p.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                  title="Delete"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] shadow-2xl border border-[#E4E7EC] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#070B14]">
                {editingProject ? "Edit Case Study" : "Add New Case Study"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1 sm:col-span-2">
                  <label className="font-bold text-[#070B14] uppercase">Project Title</label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setForm({
                        ...form,
                        title,
                        slug: !editingProject
                          ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                          : form.slug,
                      });
                    }}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Slug</label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Client Name</label>
                  <input
                    type="text"
                    required
                    value={form.client}
                    onChange={(e) => setForm({ ...form, client: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Industry</label>
                  <input
                    type="text"
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  >
                    <option value="Web">Web</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Branding">Branding</option>
                    <option value="Marketing">Marketing</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="AI">AI</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#070B14] uppercase">Cover Image URL</label>
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    required
                    value={form.coverImage}
                    onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                    className="flex-1 bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                  />
                  {form.coverImage && (
                    <img
                      src={form.coverImage}
                      alt="Thumbnail"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                    />
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#070B14] uppercase">Short Description (Cards)</label>
                <input
                  type="text"
                  required
                  value={form.shortDesc}
                  onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
                  className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#070B14] uppercase">Full Overview</label>
                <textarea
                  rows={2}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">01. Challenge</label>
                  <textarea
                    rows={2}
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">02. Approach</label>
                  <textarea
                    rows={2}
                    value={form.approach}
                    onChange={(e) => setForm({ ...form, approach: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">03. Solution</label>
                  <textarea
                    rows={2}
                    value={form.solution}
                    onChange={(e) => setForm({ ...form, solution: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">04. Results & Metrics</label>
                  <textarea
                    rows={2}
                    value={form.results}
                    onChange={(e) => setForm({ ...form, results: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Services (One per line)</label>
                  <textarea
                    rows={2}
                    value={form.servicesRaw}
                    onChange={(e) => setForm({ ...form, servicesRaw: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#070B14] uppercase">Tech Stack (Comma separated)</label>
                  <textarea
                    rows={2}
                    value={form.techRaw}
                    onChange={(e) => setForm({ ...form, techRaw: e.target.value })}
                    className="w-full bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl p-3 text-[#101828]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <label className="flex items-center gap-2 font-semibold">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="rounded text-[#C59B27]"
                  />
                  Feature on Homepage
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C59B27] hover:bg-[#B38728] text-white font-bold shadow-sm"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
