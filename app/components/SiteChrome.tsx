import Link from "next/link";
import MobileNav from "./MobileNav";

type NavItem = { label: string; href: string };

export default function SiteChrome({
  items = [
    { label: "Services", href: "/services" },
    { label: "Security", href: "/security" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ],
  ctaHref = "/contact",
  ctaLabel = "Request assessment",
  sticky = true,
}: {
  items?: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
  sticky?: boolean;
}) {
  return (
    <header
      className={[
        sticky ? "sticky top-0 z-50" : "",
        "border-b border-slate-200/70 bg-white/70 backdrop-blur",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Mobile */}
        <MobileNav
          items={[
            { label: "Home", href: "/" },
            ...items,
            { label: "Contact", href: "/contact" },
          ]}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />

        {/* Desktop */}
        <div className="hidden items-center justify-between md:flex">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark />
            <LogoWordmark />
          </Link>

          <nav className="flex items-center gap-8 text-sm text-slate-700">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={ctaHref}
              className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(2,6,23,0.22)] hover:bg-slate-900"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
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
