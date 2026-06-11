"use client";

import { useEffect, useRef, useState } from "react";

import { X, Send } from "lucide-react";

import { Assistant } from "@/types/assistant";

import AssistantReviewCard from "./AssistantReviewCard";

interface Message {
  id: number;

  role: "user" | "assistant";

  content: string;
}

interface Props {
  assistant: Assistant;

  onClose: () => void;
}

export default function AssistantModal({ assistant, onClose }: Props) {
  const Icon = assistant.icon;

  /*
   -----------------------------------
   states
   -----------------------------------
  */

  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");

  const [showReview, setShowReview] = useState(false);

  /*
   -----------------------------------
   refs
   -----------------------------------
  */

  const scrollRef = useRef<HTMLDivElement>(null);

  const lockRef = useRef(false);

  const reviewOpenedRef = useRef(false);

  const chatStartedRef = useRef(false);

  const touchStartY = useRef(0);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!chatStartedRef.current) return;

      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (deltaY < 80) return;

      if (container.scrollTop > 0) return;

      if (lockRef.current) return;

      lockRef.current = true;

      if (!reviewOpenedRef.current) {
        reviewOpenedRef.current = true;

        setShowReview(true);

        setTimeout(() => {
          lockRef.current = false;
        }, 700);

        return;
      }

      onClose();
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);

      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onClose]);
  /*
   -----------------------------------
   send message
   -----------------------------------
  */

  const handleSend = () => {
    if (!input.trim()) return;

    /*
     چت شروع شد
    */

    chatStartedRef.current = true;

    const userMessage: Message = {
      id: Date.now(),

      role: "user",

      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,

        role: "assistant",

        content: "این یک پاسخ آزمایشی از سرور است.",
      };

      setMessages((prev) => [...prev, aiMessage]);

      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,

            behavior: "smooth",
          });
        }
      });
    }, 1000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 p-4 backdrop-blur-xl">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative  mx-auto flex h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-[42px] border-y border-white bg-white/20">
        {/* glow */}
        <div className="absolute inset-0 transparent_40%)]" />

        {/* close */}
        <button
          onClick={onClose}
          className="absolute left-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20 hover:text-primary">
          <X size={18} />
        </button>

        {/* header */}
        <div
          className={`
            relative z-30
            flex items-center gap-3
            px-5 py-5
            transition-all duration-500

            ${
              hasMessages
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }
          `}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl ">
            <Icon size={38} className="text-primary" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">{assistant.title}</h2>
          </div>
        </div>

        {/* content */}
        <div className="relative flex-1 overflow-hidden">
          {/* scroll area */}
          <div
            ref={scrollRef}
            className="hide-scrollbar h-full overflow-y-auto px-5 scroll-smooth "
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, black 92%, transparent 100%)",

              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, black 92%, transparent 100%)",
            }}>
            {/* hero */}
            {!hasMessages && (
              <div className="flex min-h-full flex-col items-center justify-center text-center">
                <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-[32px] ">
                  <Icon size={100} className="text-primary" />
                </div>

                <h1 className="mb-4 text-5xl font-black text-white">
                  {assistant.title}
                </h1>

                <p className="max-w-[280px] text-lg leading-8 text-white/60">
                  امروز درباره چی میخوای کد بزنی؟
                </p>
              </div>
            )}
            {/* message.role === "user" ? "justify-end" : "justify-start" */}
            {/* messages */}
            {hasMessages && (
              <div className="space-y-4 py-6">
                {messages.map((message) => (
                  <div key={message.id} className={`flex justify-start`}>
                    <div
                      className={` max-w-[80%] rounded-3xl px-4 py-3  text-sm  leading-7 transition-all  break-all whitespace-pra-wrap ${message.role === "user" ? "bg-primary text-white " : "bg-white/5 text-white/60 "} `}>
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* review */}
            <div
              className={` overflow-hidden  transition-all duration-700 ease-out ${showReview ? `mt-6 max-h-[500px]  opacity-100  translate-y-0` : `max-h-0 opacity-0 translate-y-10`}  `}>
              <AssistantReviewCard assistant={assistant} />
            </div>

            <div className="h-20" />
          </div>
        </div>

        {/* input */}
        <div className="relative z-30  p-4">
          <div className="flex items-center gap-3 rounded-full border border-white/15  bg-white/5 px-4 py-3 backdrop-blur-xl">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="سوال خود را بپرسید..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/60"
            />

            <button
              onClick={handleSend}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:scale-105">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
