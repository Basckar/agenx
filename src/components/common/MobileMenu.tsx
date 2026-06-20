"use client";
import { X, User, Info, Sparkles, HelpCircle, LogIn } from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
  onAuthOpen: () => void;
}
export default function MobileMenu({ open, onClose, onAuthOpen }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={` fixed inset-0 z-40 

bg-black/60 backdrop-blur-sm transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"} `}
      />
      <aside
        className={` fixed right-0 top-0 z-50 h-screen w-[280px] border-l border-white/10 bg-[#0f0f15] backdrop-blur-3xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
        <div className="flex items-center justify-between p-6">
          <img src="/icones/logo.svg" alt="logo" className="h-12" />
          <button
            onClick={onClose}
            className="text-white/60 

transition hover:text-white">
            <X />
          </button>
        </div>
        <nav className="space-y-2 px-4">
          <button
            onClick={() => {
              onClose();
              onAuthOpen();
            }}
            className="flex w-full items-center gap-3 rounded-2xl p-3 text-right transition hover:bg-white/5">
            <LogIn size={18} /> ثبت نام / ورود
          </button>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5"
            href="/dashboard">
            <User size={18} /> داشبرد
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5"
            href="/assistant">
            <Sparkles size={18} /> دستیارها
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5"
            href="/about">
            <Info size={18} /> درباره ما
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5"
            href="/rules">
            <HelpCircle size={18} /> قوانین و مقررات
          </a>
        </nav>
      </aside>
    </>
  );
}
