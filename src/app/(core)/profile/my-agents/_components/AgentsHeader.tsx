"use client";
import { Funnel, Plus } from "lucide-react";
interface Props {
  onAdd: () => void;
  onFilter: () => void;
}
export default function AgentsHeader({ onAdd, onFilter }: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-4xl font-black"> ایجنت های من </h1>
      <div className="flex items-center gap-3">
        <button
          onClick={onFilter}
          className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
          <Funnel />
        </button>
        <button
          onClick={onAdd}
          className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-2xl bg-states-success">
          <Plus />
        </button>
      </div>
    </div>
  );
}
