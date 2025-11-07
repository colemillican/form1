"use client";
import { useEffect, useState } from "react";

/** Change this to your brand name if needed */
const BRAND_NAME = "Form1";

/* Inline logo */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Form1 logo">
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#23B8A5" />
          <stop offset="100%" stopColor="#9BE564" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
      <path
        d="M20 20v24h12M32 44h12V20"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // (Optional) lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black md:hidden shadow">
      {/* Header row with logo + brand + hamburger */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <LogoMark size={28} />
          <span className="text-white text-base font-semibold tracking-wide">
            {BRAND_NAME}
          </span>
        </div>

        <button
          className="text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Click-away area (transparent, only active when open). Doesn't visually cover the screen. */}
      <button
        className={`fixed inset-0 z-40 md:hidden ${open ? "block" : "hidden"} bg-transparent`}
        onClick={() => setOpen(false)}
        aria-label="Close menu backdrop"
      />

      {/* Side drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed top-0 right-0 z-50 h-screen w-[78%] max-w-[320px] bg-black border-l border-neutral-800 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <LogoMark size={22} />
            <span className="text-white text-sm font-semibold">{BRAND_NAME}</span>
          </div>
          <button
            className="text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-4 py-4 gap-3 text-white text-base">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="py-2 px-2 rounded hover:bg-neutral-900 transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="py-2 px-2 rounded hover:bg-neutral-900 transition"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className="py-2 px-2 rounded hover:bg-neutral-900 transition"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-2 px-2 rounded hover:bg-neutral-900 transition"
          >
            Contact
          </a>
        </nav>
      </aside>
    </nav>
  );
}

