import { Search } from "lucide-react";
export default function SearchInput() {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center gap-3">
        <Search size={18} />
        <input
          placeholder="جستجو..."
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
