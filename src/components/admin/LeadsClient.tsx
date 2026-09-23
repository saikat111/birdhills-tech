"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Users,
  Clock,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Trash2,
  Edit,
  Save,
  X,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface LeadItem {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  service: string | null;
  budget: string | null;
  message: string | null;
  source: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface LeadsClientProps {
  initialLeads: LeadItem[];
}

const statusOptions = ["New", "Contacted", "Qualified", "Won", "Lost"];

export function LeadsClient({ initialLeads }: LeadsClientProps) {
  const [leads, setLeads] = useState<LeadItem[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Filtered leads
  const filtered = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (lead.service && lead.service.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    const matchesSource = sourceFilter === "All" || lead.source === sourceFilter;

    return matchesSearch && matchesStatus && matchesSource;
  });

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLead?.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveNotes = async (id: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: editingNotes }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, notes: editingNotes } : l))
        );
        if (selectedLead?.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, notes: editingNotes } : null));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const openDrawer = (lead: LeadItem) => {
    setSelectedLead(lead);
    setEditingNotes(lead.notes || "");
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E4E7EC] shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, company, email, service..."
            className="w-full text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl pl-10 pr-4 py-2.5 text-[#101828] focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#667085]">
            <Filter size={14} />
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-lg px-2.5 py-1.5 text-[#101828] focus:outline-none"
            >
              <option value="All">All Statuses</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#667085]">
            <span>Source:</span>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="text-xs bg-[#F7F9FC] border border-[#E4E7EC] rounded-lg px-2.5 py-1.5 text-[#101828] focus:outline-none"
            >
              <option value="All">All Sources</option>
              <option value="Contact Form">Contact Form</option>
              <option value="Booking">Booking</option>
              <option value="AI Chatbot">AI Chatbot</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F7F9FC] border-b border-[#E4E7EC] text-[11px] font-bold text-[#667085] uppercase tracking-wider">
                <th className="py-3 px-4">Lead Name / Company</th>
                <th className="py-3 px-4">Service & Budget</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                  onClick={() => openDrawer(lead)}
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#070B14]">{lead.name}</div>
                    <div className="text-[#667085] text-[11px]">
                      {lead.company ? `${lead.company} · ` : ""}
                      {lead.email}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-[#101828]">
                      {lead.service || "General Inquiry"}
                    </div>
                    {lead.budget && (
                      <div className="text-[11px] text-[#C59B27] font-semibold">
                        {lead.budget}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {lead.source}
                    </span>
                  </td>
                  <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border cursor-pointer ${
                        lead.status === "New"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                          : lead.status === "Contacted"
                          ? "bg-sky-50 text-sky-700 border-sky-300"
                          : lead.status === "Qualified"
                          ? "bg-blue-50 text-blue-700 border-blue-300"
                          : lead.status === "Won"
                          ? "bg-purple-50 text-purple-700 border-purple-300"
                          : "bg-rose-50 text-rose-700 border-rose-300"
                      }`}
                    >
                      {statusOptions.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-4 text-slate-400">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => handleDeleteLead(lead.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete lead"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 text-xs">
                    No leads found matching current filter parameters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail & Internal Notes Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-2xs animate-in fade-in">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right-10 duration-200">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#FAF5EB] px-2 py-0.5 rounded">
                    Lead File · {selectedLead.source}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#070B14] mt-1.5">
                    {selectedLead.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Current Pipeline Status
                </label>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                  className="w-full text-xs font-bold bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2.5 text-[#070B14]"
                >
                  {statusOptions.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Information */}
              <div className="bg-[#F7F9FC] p-4 rounded-xl border border-[#E4E7EC] space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#C59B27]" />
                  <a href={`mailto:${selectedLead.email}`} className="text-[#C59B27] font-semibold underline">
                    {selectedLead.email}
                  </a>
                </div>
                {selectedLead.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-600" />
                    <a href={`https://wa.me/${selectedLead.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-emerald-600 font-medium">
                      {selectedLead.phone} (WhatsApp)
                    </a>
                  </div>
                )}
                {selectedLead.company && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <Building size={14} className="text-slate-400" />
                    <span>Company: {selectedLead.company}</span>
                  </div>
                )}
              </div>

              {/* Message / Requirement */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Inquiry / Requirement Details
                </label>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-[#101828] leading-relaxed whitespace-pre-line">
                  {selectedLead.message || "No specific requirement message provided."}
                </div>
              </div>

              {/* Internal Notes */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Internal Consultant Notes
                </label>
                <textarea
                  rows={4}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Record call summary, meeting outcomes, or next follow-up dates..."
                  className="w-full text-xs bg-white border border-[#E4E7EC] rounded-xl p-3 text-[#101828] focus:outline-none focus:border-[#C59B27]"
                />
                <button
                  type="button"
                  onClick={() => handleSaveNotes(selectedLead.id)}
                  disabled={isUpdating}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#070B14] text-white text-xs font-semibold hover:bg-[#111622] transition-colors"
                >
                  <Save size={13} />
                  {isUpdating ? "Saving Notes..." : "Save Internal Notes"}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Registered: {new Date(selectedLead.createdAt).toLocaleString()}</span>
              <button
                type="button"
                onClick={() => handleDeleteLead(selectedLead.id)}
                className="text-rose-600 hover:underline font-semibold inline-flex items-center gap-1"
              >
                <Trash2 size={13} /> Delete Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
