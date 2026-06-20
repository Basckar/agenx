"use client";

import { useState } from "react";

import { DashboardComment } from "@/types/dashboard";

import CommentModal from "./CommentModal";
import { Icon } from "@/components/icons/Icon";

interface Props {
  comments: DashboardComment[];
}

export default function DashboardComments({ comments }: Props) {
  const [selectedComment, setSelectedComment] =
    useState<DashboardComment | null>(null);

  return (
    <>
      <div className="max-h-[400px] space-y-4 overflow-y-auto pr-1 rounded-[32px] border-y-3 border-white/20 bg-white/[0.04] backdrop-blur-3xl p-4 pr-4 custom-scroll">
        {comments.map((comment) => (
          <div
            onClick={() => setSelectedComment(comment)}
            key={comment.id}
            className="  p-5 backdrop-blur-xl cursor-pointer rounded-[32px] border-y-3 border-white/20 bg-white/[0.04]">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h1 className="text-xl text-white">{comment.userName}</h1>
                <span className="text-xs text- black/50">
                  {comment.createdAt}
                </span>
              </div>
              <h3 className="font-bold text-white bg-primary rounded-xl p-2">
                {comment.agentName}
              </h3>
            </div>

            <p className="line-clamp-2 text-sm leading-7 text-white/50">
              {comment.text}
            </p>

            <div className="mt-4 w-full border-t border-white   text-sm font-bold text-white transition hover:opacity-90 flex items-center gap-2 flex items-center justify-between">
              مشاهده و پاسخ
              <span className="inline-block h-8 w-8 mt-2">
                <Icon name="btn" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedComment && (
        <CommentModal
          comment={selectedComment}
          onClose={() => setSelectedComment(null)}
        />
      )}
    </>
  );
}
