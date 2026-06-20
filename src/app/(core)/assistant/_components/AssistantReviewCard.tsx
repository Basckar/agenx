import { Brain, Star, User } from "lucide-react";

import { Assistant } from "@/types/assistant";

interface Props {
  assistant: Assistant;
}

export default function AssistantReviewCard({ assistant }: Props) {
  return (
    <div className="mb-10 mt-4 rounded-[36px] border border-white/10 bg-white/5 p-5 backdrop-blur-3xl">
      {/* top */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-black text-white">{assistant.title}</h2>

        <div className="flex items-center gap-2 text-concession">
          <span className="text-3xl font-bold  text-white">
            {assistant.rating}
          </span>
          <Star size={20} fill="currentColor" />
        </div>
      </div>
      {/* info */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/60">
          <User size={18} />

          <span>
            تعداد کاربران:
            {assistant.users}
            نفر
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/60">
          <Brain size={18} />

          <span>
            سطح هوش:
            {assistant.iqLevel}
          </span>
        </div>
      </div>

      {/* title */}
      <div className=" flex aline-center justify-between">
        <h3 className="mb-4 text-2xl font-black text-white">نظر شما</h3>

        {/* stars */}
        <div className="mb-8 flex items-center gap-2 text-concession">
          {Array.from({
            length: 5,
          }).map((_, i) => (
            <Star
              key={i}
              size={24}
              fill={i < 3 ? "currentColor" : "transparent"}
            />
          ))}
        </div>
      </div>
      {/* input */}
      <div className="flex items-center gap-4">
        <input
          placeholder="نظرتو برامون بنویس..."
          className="h-12 flex-1 rounded-full border border-white bg-white/10 pr-4 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white"
        />

        <button className="h-12 rounded-full border border-white bg-states-success px-4 text-xl font-bold text-white transition hover:scale-105">
          ثبت
        </button>
      </div>
    </div>
  );
}
