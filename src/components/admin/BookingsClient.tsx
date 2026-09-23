"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Trash2,
  X,
  Save,
} from "lucide-react";

interface BookingItem {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  message: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface BookingsClientProps {
  initialBookings: BookingItem[];
}

const statusOptions = ["Pending", "Confirmed", "Completed", "Cancelled"];

export function BookingsClient({ initialBookings }: BookingsClientProps) {
  const [bookings, setBookings] = useState<BookingItem[]>(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<BookingItem | null>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
        );
        if (selectedBooking?.id === id) {
          setSelectedBooking((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveNotes = async (id: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: editingNotes }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, notes: editingNotes } : b))
        );
        if (selectedBooking?.id === id) {
          setSelectedBooking((prev) => (prev ? { ...prev, notes: editingNotes } : null));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking record?")) return;
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== id));
        if (selectedBooking?.id === id) setSelectedBooking(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F7F9FC] border-b border-[#E4E7EC] text-[11px] font-bold text-[#667085] uppercase tracking-wider">
                <th className="py-3 px-4">Client / Company</th>
                <th className="py-3 px-4">Service Focus</th>
                <th className="py-3 px-4">Scheduled Date & Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedBooking(b);
                    setEditingNotes(b.notes || "");
                  }}
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#070B14]">{b.name}</div>
                    <div className="text-[#667085] text-[11px]">
                      {b.company ? `${b.company} · ` : ""}
                      {b.phone}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium text-[#101828]">{b.service}</td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-[#070B14] flex items-center gap-1.5">
                      <CalendarIcon size={13} className="text-[#C59B27]" />
                      <span>{b.date}</span>
                    </div>
                    <div className="text-[11px] text-[#667085] mt-0.5">{b.timeSlot}</div>
                  </td>
                  <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border cursor-pointer ${
                        b.status === "Pending"
                          ? "bg-amber-50 text-amber-700 border-amber-300"
                          : b.status === "Confirmed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                          : b.status === "Completed"
                          ? "bg-blue-50 text-blue-700 border-blue-300"
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
                  <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => handleDelete(b.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete booking"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}

              {bookings.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400 text-xs">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Drawer */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-2xs animate-in fade-in">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right-10 duration-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#FAF5EB] px-2 py-0.5 rounded">
                    Consultation File
                  </span>
                  <h3 className="text-xl font-extrabold text-[#070B14] mt-1.5">
                    {selectedBooking.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBooking(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Meeting Status
                </label>
                <select
                  value={selectedBooking.status}
                  onChange={(e) => handleStatusChange(selectedBooking.id, e.target.value)}
                  className="w-full text-xs font-bold bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2.5 text-[#070B14]"
                >
                  {statusOptions.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#E6D5A7] space-y-1 text-xs">
                <div className="font-bold text-[#C59B27] flex items-center gap-1.5">
                  <CalendarIcon size={14} />
                  <span>{selectedBooking.date}</span>
                </div>
                <div className="text-slate-700 font-medium flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{selectedBooking.timeSlot}</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-[#F7F9FC] p-4 rounded-xl border border-[#E4E7EC] space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#C59B27]" />
                  <a href={`mailto:${selectedBooking.email}`} className="text-[#C59B27] underline">
                    {selectedBooking.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-emerald-600" />
                  <a href={`https://wa.me/${selectedBooking.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                    {selectedBooking.phone}
                  </a>
                </div>
                {selectedBooking.company && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <Building size={14} className="text-slate-400" />
                    <span>Company: {selectedBooking.company}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              {selectedBooking.message && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">
                    Discussion Request
                  </label>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-[#101828]">
                    {selectedBooking.message}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Internal Meeting Notes & Calendar Link
                </label>
                <textarea
                  rows={4}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Record Google Meet link, attendee names, or meeting outcomes..."
                  className="w-full text-xs bg-white border border-[#E4E7EC] rounded-xl p-3 text-[#101828] focus:outline-none focus:border-[#C59B27]"
                />
                <button
                  type="button"
                  onClick={() => handleSaveNotes(selectedBooking.id)}
                  disabled={isUpdating}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#070B14] text-white text-xs font-semibold hover:bg-[#111622] transition-colors"
                >
                  <Save size={13} />
                  {isUpdating ? "Saving..." : "Save Notes"}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Booked on: {new Date(selectedBooking.createdAt).toLocaleString()}</span>
              <button
                type="button"
                onClick={() => handleDelete(selectedBooking.id)}
                className="text-rose-600 hover:underline font-semibold"
              >
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
