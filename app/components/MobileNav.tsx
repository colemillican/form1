"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function MobileNav({
  items = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Security", href: "/security" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaHref = "/contact",
  ctaLabel = "Request assessment",
}: {
  items?: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => pathname ?? "/", [pathname]);

  useEffect(() => {
    // Close the drawer on route changes
    setOpen(false);
  }, [activeHref]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <LogoWordmark />
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm hover:bg-slate-50"
        >
          Menu
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={[
          "fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm transform border-l border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.25)] transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <LogoMark />
            <LogoWordmark />
          </div>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigate
          </p>

          <nav className="mt-4 space-y-2">
            {items.map((item) => {
              const active =
                item.href === "/"
                  ? activeHref === "/"
                  : activeHref.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold",
                    active
                      ? "border-slate-300 bg-slate-50 text-slate-950"
                      : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="text-slate-400">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Start here
            </p>
            <p className="mt-2 text-sm text-slate-700">
              No hype, no generic demos—just a direct conversation about your systems and your data.
            </p>
            <Link
              href={ctaHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              {ctaLabel} →
            </Link>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-200 px-5 py-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} IronGate Systems.
          </p>
        </div>
      </aside>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white shadow-sm">
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-slate-50 via-white to-amber-50" />
      <div className="relative h-3 w-3 border-l-2 border-b-2 border-slate-800" />
    </div>
  );
}

function LogoWordmark() {
  return (
    <div className="leading-tight">
      <div className="text-xs font-semibold tracking-[0.18em] text-slate-700">
        IRONGATE
      </div>
      <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
        Systems
      </div>
    </div>
  );
}
