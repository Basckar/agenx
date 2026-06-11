"use client";
import { Search } from "lucide-react";
interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 z-10"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو"
        className={`h-12 w-42 rounded-3xl border-x-2 border-white/20 bg-white/15 backdrop-blur-2xl text-sm text-white outline-none transition-all duration-300 p-4 placeholder:text-white/60 focus:border-primary/40 focus:bg-white/10`}
      />
    </div>
  );
}
