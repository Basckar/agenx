"use client";

import { useState } from "react";

import { ShoppingBag, Music2, Palette, Plus, X } from "lucide-react";

import { Interest } from "@/types/profile";

interface Props {
  interests: Interest[];

  onRemove: (id: number) => void;
}

export default function InterestsSection({ interests, onRemove }: Props) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const getIcon = (title: string) => {
    switch (title) {
      case "خرید":
        return ShoppingBag;

      case "موسیقی":
        return Music2;

      case "هنر":
        return Palette;

      default:
        return ShoppingBag;
    }
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-black">علاقه های شما</h2>

      <div className="grid grid-cols-2 gap-4">
        {interests.map((interest) => {
          const Icon = getIcon(interest.title);

          return (
            <div
              key={interest.id}
              onClick={() =>
                setActiveId(activeId === interest.id ? null : interest.id)
              }
              className=" group relative flex items-center justify-center  gap-6 rounded-full  border  border-white/10 bg-white/10 px-5 py-4  backdrop-blur-xl transition-all duration-300 hover:border-primary/30 ">
              <Icon size={22} />

              <span className="text-xl font-bold">{interest.title}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(interest.id);
                }}
                className={` absolute  -left-1 -top-1  flex h-7  w-7 items-center   justify-center rounded-full  bg-states-error2/20  text-states-error2 transition-all  duration-300 cursor-pointer ${activeId === interest.id ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"} `}>
                <X size={14} />
              </button>
            </div>
          );
        })}

        <button
          type="button"
          className=" flex items-center  justify-center gap-3 rounded-full bg-primary py-4 text-2xl font-bold text-white transition hover:opacity-90 ">
          <Plus />
          اضافه
        </button>
      </div>
    </div>
  );
}
