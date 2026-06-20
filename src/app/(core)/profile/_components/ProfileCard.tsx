"use client";
import { User } from "lucide-react";
import { ProfileUser } from "@/types/profile";
import ProfileMenu from "@/app/(core)/profile/_components/ProfileMenu";

interface Props {
  user: ProfileUser;
}
export default function ProfileCard({ user }: Props) {
  return (
    <div className="relative rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl z-10">
      <div className="flex items-center justify-between ">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <User size={34} />
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold"> {user.name} </h2>
          <p className="text- black/50"> {user.plan} </p>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}
