"use client";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className=" bg-[#0b0b0f]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <img src="icones/logo.svg" alt="logo" className="h-12" />
          {mounted ? (
            <button onClick={() => setOpen(true)} className="text-white">
              <Menu size={32} />
            </button>
          ) : (
            <div className="h-8 w-8" />
          )}
        </div>
      </header>
      {mounted && <MobileMenu open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
