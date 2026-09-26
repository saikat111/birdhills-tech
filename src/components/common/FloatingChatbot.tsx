"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  CheckCircle2,
  Minimize2,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
}

const quickActions = [
  "I need a website",
  "I need marketing",
  "I need branding",
  "I need custom software",
  "I need AI",
  "I want to grow my business",
];

interface FloatingChatbotProps {
  settings?: Record<string, string>;
}

export function FloatingChatbot({ settings = {} }: FloatingChatbotProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const welcomeMessage =
    settings["ai_welcome_message"] ||
    "Tell us what you're trying to build. I'll help you find the right direction.";
  const fallbackPhone = settings["phone"] || "+971 52 440 5785";
  const fallbackEmail = settings["email"] || "contact@birdhillstech.com";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro-1",
      sender: "assistant",
      text: welcomeMessage,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [isQualified, setIsQualified] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or restore session ID
  useEffect(() => {
    let sid = localStorage.getItem("bht_chat_session_id");
    if (!sid) {
      sid = `bht_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      localStorage.setItem("bht_chat_session_id", sid);
    }
    setSessionId(sid);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const message = textToSend || inputText;
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: `usr_${Date.now()}`,
      sender: "user",
      text: message.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          message: userMessage.text,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      const botMessage: Message = {
        id: `bot_${Date.now()}`,
        sender: "assistant",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
      if (data.qualification?.isQualified) {
        setIsQualified(true);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot_err_${Date.now()}`,
          sender: "assistant",
          text: `Thank you for reaching out. Please leave your email or WhatsApp number at ${fallbackEmail} or call ${fallbackPhone} and our team will get back to you immediately.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className={`fixed right-6 z-50 ${isOpen ? "bottom-6" : "bottom-24"}`}>
      {/* Closed State Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#070B14] text-white shadow-xl hover:shadow-2xl border border-[#C59B27]/40 hover:bg-[#0B0F19] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]"
          aria-label="Open Bird Hills AI Assistant"
        >
          <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 shrink-0 shadow-sm border border-[#C59B27]/40 overflow-hidden">
            <Image
              src="/images/logo-icon.png"
              alt="Bird Hills Tech"
              width={26}
              height={26}
              className="object-contain"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#070B14] rounded-full"></span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white pr-1">
            Ask Bird Hills AI
          </span>
        </button>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-[#070B14] text-white p-4 flex items-center justify-between border-b border-[#C59B27]/20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white p-1.5 flex items-center justify-center shrink-0 border border-[#C59B27]/40 shadow-sm overflow-hidden">
                <Image
                  src="/images/logo-icon.png"
                  alt="Bird Hills AI Avatar"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Bird Hills AI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] text-amber-200/80">Dubai Growth & Tech Advisor</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
                title="Minimize"
              >
                <Minimize2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Qualified Banner if lead info captured */}
          {isQualified && (
            <div className="bg-emerald-50 border-b border-emerald-100 px-3 py-2 text-xs text-emerald-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" />
                Inquiry registered with our Dubai team!
              </div>
              <Link
                href="/book-a-meeting"
                className="font-bold underline text-emerald-900 inline-flex items-center gap-1 hover:text-emerald-700"
              >
                <Calendar size={12} /> Book time
              </Link>
            </div>
          )}

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF8F5]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-white p-1 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-[#C59B27]/30 overflow-hidden">
                    <Image
                      src="/images/logo-icon.png"
                      alt="Bird Hills AI"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed max-w-[82%] whitespace-pre-line shadow-xs ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white rounded-tr-none font-medium shadow-[#C59B27]/20"
                      : "bg-white text-[#101828] border border-slate-200/80 rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User size={13} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-[#C59B27]/30 shadow-2xs overflow-hidden">
                  <Image
                    src="/images/logo-icon.png"
                    alt="Bird Hills AI"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white border border-[#E4E7EC] rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 shrink-0 max-h-24 overflow-y-auto">
            {quickActions.map((action) => (
              <button
                key={action}
                type="button"
                onClick={() => handleSendMessage(action)}
                disabled={isLoading}
                className="text-[11px] font-medium bg-[#FAF8F5] hover:bg-[#C59B27]/10 text-[#101828] hover:text-[#C59B27] border border-[#E4E7EC] hover:border-[#C59B27]/30 rounded-full px-2.5 py-1 transition-colors disabled:opacity-50"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E4E7EC] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your project goals or question..."
              className="flex-1 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white hover:brightness-105 disabled:opacity-40 transition-all shrink-0 shadow-sm shadow-[#C59B27]/25"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default FloatingChatbot;
