"use client";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import AuthModal from "./AuthModal";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <header className="bg-[#0b0b0f]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <img src="/icones/logo.svg" alt="logo" className="h-12" />
          {mounted ? (
            <button onClick={() => setMenuOpen(true)} className="text-white">
              <Menu size={32} />
            </button>
          ) : (
            <div className="h-8 w-8" />
          )}
        </div>
      </header>
      {mounted && (
        <>
          <MobileMenu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            onAuthOpen={() => setAuthOpen(true)}
          />
          <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
        </>
      )}
    </>
  );
}
