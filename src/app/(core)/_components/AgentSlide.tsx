"use client";
import { Assistant } from "@/types/assistant";
interface Props {
  assistant: Assistant;
}
export default function AgentSlide({ assistant }: Props) {
  const Icon = assistant.icon;
  return (
    <div className="mx-auto !ml-0 w-[37vw] min-w-[110px] max-w-[165px] aspect-[137/198] overflow-hidden  rounded-t-[70px] bg-white/[0.04] p-3 text-center backdrop-blur-xl ">
      <div className="  flex justify-center">
        <div className=" flex h-24 w-24 items-center justify-center rounded-[28px]   ">
          <Icon size={60} className="text-primary" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className=" text-md font-black"> {assistant.title} </h3>
        <div> ⭐ {assistant.rating} </div>
      </div>
      <p className="text-sm text-white/60"> {assistant.description} </p>
    </div>
  );
}
