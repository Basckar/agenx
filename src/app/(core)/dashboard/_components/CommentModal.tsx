"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { DashboardComment } from "@/types/dashboard";

interface Props {
  comment: DashboardComment;
  onClose: () => void;
}

export default function CommentModal({ comment, onClose }: Props) {
  const [reply, setReply] = useState("");

  const handleSend = () => {
    console.log(reply);
    setReply("");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#121218] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">{comment.agentName}</h3>

          <button
            onClick={onClose}
            className="w-8 h-8 flex justify-center items-center border-2 border-white/50 rounded-full">
            <X />
          </button>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm text- black/50">{comment.userName}</p>

          <p className="leading-8 text- black/50">{comment.text}</p>
        </div>

        <div className="relative w-full">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="پاسخ شما..."
            className="mb-4 h-32 w-full rounded-2xl border border-white/10 bg-white/5 p-4 pr-8 outline-none"
          />

          {reply.length > 0 && (
            <button
              onClick={() => setReply("")}
              className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-transparent transition-all duration-200 hover:border-states-error2 hover:bg-states-error2/20 hover:scale-110"
              aria-label="پاک کردن پاسخ">
              <X
                size={16}
                className="text-white/50 hover:text-states-error2 transition-colors duration-200"
              />
            </button>
          )}
        </div>

        <button
          onClick={handleSend}
          className="w-full rounded-2xl bg-primary py-3 font-bold">
          ارسال پاسخ
        </button>
      </div>
    </div>
  );
}
