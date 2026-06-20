"use client";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Star, User } from "lucide-react";
import Link from "next/link";
interface Props {
  agent: any;
  onDelete: (id: number) => void;
}
export default function AgentCard({ agent, onDelete }: Props) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between border-b border-white/10 p-6">
      <img
        src={agent.icon}
        alt={agent.title}
        className="h-24 w-24 object-contain"
      />
      <div className="text-center">
        <h3 className="mb-4 text-3xl font-bold"> {agent.title} </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-yellow-400" /> {agent.rating}
          </div>
          <div className="flex items-center gap-2">
            <User size={18} /> {agent.users}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Link
          href={`/profile/edit-agent/${agent.id}`}
          className="cursor-pointer flex  h-12  w-12  items-center justify-center  rounded-xl bg-primary ">
          <Pencil />
        </Link>
        <button
          onClick={() => onDelete(agent.id)}
          className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-xl bg-states-error2 ">
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
