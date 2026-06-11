import { Star } from "lucide-react";
import { Assistant } from "@/types/assistant";
interface Props {
  assistant: Assistant;
}
export default function AssistantCard({ assistant }: Props) {
  const Icon = assistant.icon;
  return (
    <div className=" relative h-54 overflow-hidden rounded-[32px] border-y-3 border-white/20 bg-white/[0.04] backdrop-blur-3xl transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01] ">
      <div className="absolute inset-0 bg-[radial gradient(circle_at_top,rgba(139,92,246,0.18),transparent_50%)]" />
      <div className="relative z-10">
        <div className=" flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg primary/10">
            <Icon size={42} className="text-primary" />
          </div>
        </div>
        <div className=" flex items-center justify-between py-2 px-4">
          <h2 className="text-xl font-bold text-white">{assistant.title}</h2>

          <div className="flex items-center gap-1 text-concession">
            <Star size={16} fill="currentColor" />
            <span className="text-md text-white">{assistant.rating}</span>
          </div>
        </div>
        <p className="text-[11px] font-light p-2 leading-7 text-white">
          {assistant.description}
        </p>
      </div>
    </div>
  );
}
