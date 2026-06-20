"use client";
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
interface CategoryItem {
  name: string;
  count: number;
}
interface Props {
  open: boolean;
  onClose: () => void;
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  latest: boolean;
  setLatest: (value: boolean) => void;
  mostViewed: boolean;
  setMostViewed: (value: boolean) => void;
  categories: CategoryItem[];
}
export default function AgentFilters({
  open,
  onClose,
  search,
  setSearch,
  category,
  setCategory,
  latest,
  setLatest,
  mostViewed,
  setMostViewed,
  categories,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  if (!open) return null;
  return (
    <div
      ref={wrapperRef}
      className="absolute top-0  w-full z-50 rounded-[32px] border border-white/10   p-5 backdrop-blur-xl bg-white/10">
      <div className="flex gap-4 mb-5 ">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className=" h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 outline-none ">
          <option value="" className="bg-black/5 text-black rounded-xl">
            {" "}
            همه دسته بندی ها{" "}
          </option>
          {categories.map((item) => (
            <option
              key={item.name}
              value={item.name}
              className="bg-black/5 text-black rounded-xl">
              {item.name} ({item.count})
            </option>
          ))}
        </select>
        <div className="relative   w-full">
          <Search
            size={20}
            className=" absolute right-4 top-1/2 -translate-y-1/2 text- black/50 "
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو..."
            className=" h-12 w-full rounded-full border border-white/10 bg-white/5 px-12 pl-4 outline-none "
          />
        </div>
      </div>
      <div className="space-y-4">
        <label className="flex items-center justify-between">
          <span>جدیدترین ها</span>
          <input
            type="checkbox"
            checked={latest}
            onChange={(e) => setLatest(e.target.checked)}
            className="h-4 w-4"
          />
        </label>
        <label className="flex items-center justify-between">
          <span>بیشترین بازدید</span>
          <input
            type="checkbox"
            checked={mostViewed}
            onChange={(e) => setMostViewed(e.target.checked)}
            className="h-4 w-4"
          />
        </label>
      </div>
    </div>
  );
}
