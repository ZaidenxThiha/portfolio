"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUp, ChevronDown, Smile } from "lucide-react";
import { QUICK_ACTIONS } from "@/lib/quick-actions";
import { getMockResponse, isContactQuery } from "@/lib/chat-responses";
import type { ChatMessage } from "@/types";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ContactCard } from "@/components/chat/ContactCard";

let idCounter = 0;
const nextId = () => `m${idCounter++}`;

export function ChatClient() {
  const params = useSearchParams();
  const initialQuery = params.get("query") ?? "";

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
  const endRef = useRef<HTMLDivElement | null>(null);
  const handledInitial = useRef(false);

  function ask(query: string) {
    const q = query.trim();
    if (!q) return;
    setMessages((prev) => [...prev, { id: nextId(), role: "user", content: q }]);
    setThinking(true);
    window.setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "assistant", content: getMockResponse(q) },
      ]);
    }, 1200);
  }

  // Fire the query that came from the landing page once (deferred so we don't
  // call setState synchronously inside the effect body).
  useEffect(() => {
    if (handledInitial.current || !initialQuery) return;
    handledInitial.current = true;
    const t = window.setTimeout(() => ask(initialQuery), 0);
    return () => window.clearTimeout(t);
  }, [initialQuery]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput("");
    ask(q);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ChatHeader />

      {/* Messages */}
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-6">
        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={m.id} className="flex justify-end">
              <div className="max-w-[80%] rounded-3xl bg-[#0171E3] px-5 py-2.5 text-white">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={m.id} className="flex flex-col gap-4">
              {isContactQuery(messages[i - 1]?.content ?? "") ? <ContactCard /> : null}
              <p className="leading-relaxed text-neutral-900">{m.content}</p>
            </div>
          ),
        )}
        {thinking ? (
          <div className="flex gap-1.5 px-1 py-2">
            <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" />
          </div>
        ) : null}
        <div ref={endRef} />
      </div>

      {/* Bottom bar */}
      <div className="sticky bottom-0 mx-auto w-full max-w-3xl px-4 pb-4">
        <div className="mb-3 flex justify-center">
          <button
            type="button"
            onClick={() => setShowQuestions((v) => !v)}
            className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-800"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showQuestions ? "" : "-rotate-180"}`}
            />
            {showQuestions ? "Hide quick questions" : "Show quick questions"}
          </button>
        </div>

        {showQuestions ? (
          <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
            {QUICK_ACTIONS.map(({ label, icon: Icon, color, query }) => (
              <button
                key={label}
                type="button"
                onClick={() => ask(query)}
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                <Icon size={18} color={color} />
                {label}
              </button>
            ))}
            <button
              type="button"
              aria-label="More questions"
              className="liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700"
            >
              <Smile className="h-5 w-5" />
            </button>
          </div>
        ) : null}

        <form
          onSubmit={onSubmit}
          className="flex items-center rounded-full bg-neutral-100 py-2 pr-2 pl-6"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything"
            className="text-md w-full border-none bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0171E3] text-white transition-colors hover:bg-blue-600 disabled:opacity-70"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </form>

      </div>
    </div>
  );
}
