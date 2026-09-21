"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.03] text-xs font-semibold"
      aria-label="Direct WhatsApp Chat with Bird Hills Tech"
    >
      <MessageSquare size={16} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
export default WhatsAppButton;
