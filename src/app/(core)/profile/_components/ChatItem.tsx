import { ArrowLeftSquare } from "lucide-react";
import { RecentChat } from "@/types/profile";
interface Props {
  chat: RecentChat;
}
export default function ChatItem({ chat }: Props) {
  return (
    <button className="flex w-full items-center justify-between border-b border-white/10 py-6">
      <span className="line-clamp-1"> {chat.title} </span>
      <ArrowLeftSquare size={28} />
    </button>
  );
}
