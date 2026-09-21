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

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro-1",
      sender: "assistant",
      text: "Tell us what you're trying to build. I'll help you find the right direction.",
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
          text: "Thank you for reaching out. Please leave your email or WhatsApp number at contact@birdhillstech.com or call +971 52 440 5785 and our team will get back to you immediately.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed right-6 z-50 ${isOpen ? "bottom-6" : "bottom-24"}`}>
      {/* Closed State Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B1730] text-white shadow-xl hover:shadow-2xl border border-slate-700/60 hover:bg-[#102042] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D68BD]"
          aria-label="Open Bird Hills AI Assistant"
        >
          <div className="relative w-8 h-8 rounded-full bg-[#1D68BD] flex items-center justify-center text-white shrink-0 group-hover:bg-[#2563EB] transition-colors">
            <Sparkles size={16} className="animate-pulse text-sky-200" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0B1730] rounded-full"></span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white pr-1">
            Ask Bird Hills AI
          </span>
        </button>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-[#E4E7EC] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-[#0B1730] text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1D68BD] flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Bird Hills AI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] text-slate-400">Dubai Growth & Tech Advisor</div>
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
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F7F9FC]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-[#1D68BD] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed max-w-[82%] whitespace-pre-line shadow-xs ${
                    m.sender === "user"
                      ? "bg-[#1D68BD] text-white rounded-tr-none font-medium"
                      : "bg-white text-[#101828] border border-[#E4E7EC] rounded-tl-none"
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
                <div className="w-6 h-6 rounded-full bg-[#1D68BD] text-white flex items-center justify-center shrink-0">
                  <Bot size={13} />
                </div>
                <div className="bg-white border border-[#E4E7EC] rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D68BD] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D68BD] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D68BD] animate-bounce [animation-delay:0.4s]"></span>
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
                className="text-[11px] font-medium bg-[#F7F9FC] hover:bg-[#EBF3FE] text-[#101828] hover:text-[#1D68BD] border border-[#E4E7EC] rounded-full px-2.5 py-1 transition-colors disabled:opacity-50"
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
              className="flex-1 text-xs sm:text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-3 py-2 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#1D68BD] focus:bg-white transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2 rounded-xl bg-[#1D68BD] text-white hover:bg-[#155196] disabled:opacity-40 disabled:hover:bg-[#1D68BD] transition-colors shrink-0"
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
