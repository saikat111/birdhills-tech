"use client";

import React, { useState, useRef } from "react";
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Search,
  Save,
  X,
  AlertCircle,
  Sparkles,
  UploadCloud,
  Upload,
  Loader2,
} from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  mimeType?: string | null;
  size?: number | null;
  createdAt: string | Date;
}

interface MediaClientProps {
  initialMedia: MediaItem[];
}

const PRESET_ASSETS = [
  {
    name: "Dubai Skyline & Downtown Financial Center",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Sheikh Zayed Road High-Rise Architecture",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Dubai International Financial Centre (DIFC)",
    url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Modern Technology & Software Engineering",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Executive Corporate Boardroom & Meeting",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Creative Brand Identity & Editorial Design",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Digital Performance Analytics & Growth Dashboard",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
  {
    name: "Luxury E-Commerce & Retail Experience",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    mimeType: "image/jpeg",
  },
];

export function MediaClient({ initialMedia }: MediaClientProps) {
  const [mediaList, setMediaList] = useState<MediaItem[]>(initialMedia);
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [modalTab, setModalTab] = useState<"upload" | "url">("upload");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    url: "",
    mimeType: "image/jpeg",
  });

  const handleDirectUpload = async (file: File) => {
    if (!file) return;
    setIsUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setMediaList((prev) => [data.media, ...prev]);
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message || "Failed to upload image file");
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleAddMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add media asset");

      setMediaList((prev) => [data.media, ...prev]);
      setIsModalOpen(false);
      setForm({ name: "", url: "", mimeType: "image/jpeg" });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddPreset = async (preset: { name: string; url: string; mimeType: string }) => {
    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(preset),
      });
      const data = await res.json();
      if (res.ok) {
        setMediaList((prev) => [data.media, ...prev]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete media asset "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
      if (res.ok) {
        setMediaList((prev) => prev.filter((m) => m.id !== id));
      } else {
        alert("Failed to delete media asset");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting media asset");
    }
  };

  const filteredMedia = mediaList.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Media Assets & Imagery
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Central repository of curated photography, brand graphics, and Unsplash assets. Copy URLs directly into services, projects, or blog posts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleDirectUpload(f);
              if (e.target) e.target.value = "";
            }}
          />
          <button
            type="button"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 disabled:opacity-50"
          >
            {isUploading ? <Loader2 size={15} className="animate-spin" /> : <UploadCloud size={15} />}
            <span>{isUploading ? "Uploading..." : "Upload Image"}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setError(null);
              setModalTab("url");
              setIsModalOpen(true);
            }}
            className="px-3.5 py-2 bg-white border border-[#E4E7EC] hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl shadow-2xs transition-colors inline-flex items-center gap-1.5"
          >
            <Plus size={15} />
            <span>Add via URL</span>
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="relative w-full sm:w-96">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search media by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] placeholder:text-slate-400 focus:outline-none focus:border-[#C59B27]"
        />
      </div>

      {/* Curated Presets Bar if media list is small */}
      {mediaList.length < 8 && (
        <div className="p-5 bg-[#F7F9FC] rounded-2xl border border-[#E4E7EC] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#070B14] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#C59B27]" />
              Quick Stock Presets (Dubai High-Res Photography)
            </h3>
            <span className="text-[10px] text-slate-400">Click to instantly add to library</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_ASSETS.map((p) => {
              const alreadyAdded = mediaList.some((m) => m.url === p.url);
              return (
                <button
                  key={p.name}
                  type="button"
                  disabled={alreadyAdded}
                  onClick={() => handleAddPreset(p)}
                  className={`text-xs px-3 py-1.5 rounded-xl border transition-all text-left flex items-center gap-2 ${
                    alreadyAdded
                      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-default"
                      : "bg-white hover:bg-[#FAF5EB] text-[#070B14] hover:text-[#C59B27] border-[#E4E7EC] shadow-2xs"
                  }`}
                >
                  <Plus size={12} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredMedia.map((media) => {
          const isCopied = copiedId === media.id;
          return (
            <div
              key={media.id}
              className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={media.url}
                  alt={media.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Full Image"
                    className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 backdrop-blur-2xs transition-colors"
                  >
                    <ExternalLink size={13} />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleDelete(media.id, media.name)}
                    title="Delete"
                    className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-rose-600 backdrop-blur-2xs transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#070B14] line-clamp-1 mb-1">
                    {media.name}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-400 truncate mb-3">{media.url}</p>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(media.id, media.url)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    isCopied
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-[#F7F9FC] hover:bg-[#FAF5EB] text-[#C59B27] border border-[#E4E7EC]"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Image URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}

        {filteredMedia.length === 0 && (
          <div className="col-span-full p-12 text-center text-xs text-slate-400 bg-white rounded-2xl border border-[#E4E7EC]">
            No media assets found. Use the quick stock presets above or click &ldquo;Add Media Asset&rdquo; to add images.
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-5 border-b border-[#E4E7EC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-bold text-[#070B14]">Add Media Asset</h3>
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs">
                  <button
                    type="button"
                    onClick={() => setModalTab("upload")}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                      modalTab === "upload"
                        ? "bg-white text-[#070B14] shadow-xs"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab("url")}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                      modalTab === "url"
                        ? "bg-white text-[#070B14] shadow-xs"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Image URL
                  </button>
                </div>
              </div>
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

            {modalTab === "upload" ? (
              <div className="p-6 space-y-4">
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files?.[0];
                    if (file && file.type.startsWith("image/")) {
                      handleDirectUpload(file);
                    }
                  }}
                  className="border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-[#FAF8F5] hover:border-[#C59B27] transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#C59B27] mb-3">
                    {isUploading ? (
                      <Loader2 size={26} className="animate-spin text-[#C59B27]" />
                    ) : (
                      <UploadCloud size={26} />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#070B14] mb-1">
                    {isUploading ? "Uploading image..." : "Drag and drop image file"}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    PNG, JPG, WebP, SVG up to 15MB
                  </p>
                  <button
                    type="button"
                    disabled={isUploading}
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors disabled:opacity-50 inline-flex items-center gap-1.5"
                  >
                    <Upload size={13} />
                    <span>{isUploading ? "Uploading..." : "Select from Computer"}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAddMedia} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Asset Name / Label *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Dubai Office Tech Workspace"
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                  />
                </div>

                {form.url && (
                  <div className="pt-2">
                    <span className="block text-[11px] font-bold text-slate-500 mb-1.5">
                      Live Preview:
                    </span>
                    <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                      <img
                        src={form.url}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={() => {}}
                      />
                    </div>
                  </div>
                )}

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
                    {isSubmitting ? "Saving..." : "Add to Library"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
