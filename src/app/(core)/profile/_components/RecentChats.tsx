"use client";
import { Plus } from "lucide-react";
import { RecentChat } from "@/types/profile";
import SearchInput from "./SearchInput";
import ChatItem from "./ChatItem";
interface Props {
  chats: RecentChat[];
}
export default function RecentChats({ chats }: Props) {
  return (
    <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <h2 className="mb-5 text-center text-4xl font-black">مکالمات اخیر</h2>
      <SearchInput />
      <div className="mt-5 max-h-[500px] overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
      <button className=" sticky bottom-4 mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl ">
        <Plus /> مکالمه جدید
      </button>
    </div>
  );
}
