import ProfileCard from "./_components/ProfileCard";

import RecentChats from "./_components/RecentChats";
import { profileUser, recentChats } from "@/data/profile";
export default function ProfilePage() {
  return (
    <div className=" bg-[#0a0a0a]">
      <main className="mx-auto max-w-md px-5 py-10 ">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1">
            <ProfileCard user={profileUser} />
          </div>
        </div>
        <RecentChats chats={recentChats} />
      </main>
    </div>
  );
}
