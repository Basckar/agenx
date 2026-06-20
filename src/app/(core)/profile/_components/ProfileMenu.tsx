"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, UserPen, Users, Info, Bot, FileText } from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = [
    { title: "ادیت پروفایل", icon: UserPen, href: "profile/edit-profile" },
    { title: "توسعه دهندگان", icon: Users, href: "/developers" },
    { title: "درباره ما", icon: Info, href: "/about" },
    { title: "ایجنت های من", icon: Bot, href: "profile/my-agents" },
    { title: "قوانین و مقررات", icon: FileText, href: "/rules" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/15">
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-16 z-50 w-64 rounded-[30px] border border-white/10 bg-gray p-4 backdrop-blur-xl  ">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex w-full items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5">
                <Icon size={18} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
