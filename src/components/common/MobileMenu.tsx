"use client";
import { X, User, Info, Sparkles, HelpCircle } from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
}
export default function MobileMenu({ open, onClose }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={` fixed 

inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"} `}
      />
      <aside
        className={` fixed right-0 top-0 z-50 h-screen w-[280px] bg-gray border-l border-white/10 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
        <div className="flex items-center justify-between p-6">
          <img src="icones/logo.svg" alt="logo" className="h-12" />
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X />
          </button>
        </div>
        <nav className="space-y-2 px-4">
          <a className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5">
            <User size={18} /> پروفایل
          </a>

          <a className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5">
            <Sparkles size={18} />
            داشبرد
          </a>
        </nav>
      </aside>
    </>
  );
}
