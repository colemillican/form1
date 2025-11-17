"use client";

import React, { useEffect, useState } from "react";
import {
  Bolt,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Globe,
  Monitor,
  Search,
  Check,
} from "lucide-react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "./components/SiteChrome";

/* Headline font */
const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

/* Hero carousel images (your scenic set) */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
];

function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % HERO_IMAGES.length),
      30000 // 30 seconds
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.18)),
              url(${src})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== idx}
        />
      ))}
      {/* Subtle darkening overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        {icon}
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <SiteChrome>
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`
                ${heroFont.className}
                text-[40px] sm:text-[48px] lg:text-[60px]
                font-bold
                leading-[1.05]
                tracking-[0.01em]
                text-center
                text-white
                drop-shadow-[0_8px_26px_rgba(0,0,0,0.35)]
              `}
            >
              <G>Stories that connect.</G>
              <br />
              <G>Websites that perform.</G>
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-zinc-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              We bring your story to life online — designing, building, and managing beautiful,
              high-performing websites that help local customers find you, trust you, and reach you.
            </p>

            {/* Centered CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href="/preview"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-12 py-4 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)]"
              >
                Get my free website outline
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-300" />
                Built for local businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Fully managed partnership
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-300" />
                Fast and mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURE STRIP ============== */}
      <section
        id="services"
        className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
          <Feature
            icon={<Monitor className="h-5 w-5 text-emerald-400" />}
            title="Cinematic design"
            text="Bold type, bright imagery, and layouts built to feel premium on any screen."
          />
          <Feature
            icon={<Globe className="h-5 w-5 text-emerald-400" />}
            title="Modern performance"
            text="Fast-loading, Next.js-powered builds tuned for Core Web Vitals."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="Local SEO ready"
            text="Clean structure, metadata, and content strategy for local visibility."
          />
        </div>
      </section>

      {/* ============== AI STACK / FUTURE-FOCUSED ============== */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 space-y-10">
          {/* Cinematic AI mission card */}
          <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-cyan-400/10 to-zinc-900/80 p-5 sm:p-6 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_0%_0%,rgba(52,211,153,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.35),transparent_55%)]" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/90">
                The LocalLink AI stack
              </p>
              <h2
                className={`${heroFont.className} mt-2 text-[clamp(22px,3vw,30px)] font-semibold tracking-tight text-white`}
              >
                Websites that perform today. AI tools that prepare you for tomorrow.
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-emerald-50/90">
                We&apos;re a startup out of Auburn, Alabama, building not just websites—but a
                practical AI toolkit for real local businesses. The goal: make your small team feel
                like it has extra employees without adding extra payroll.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-emerald-100/80">
                As an early partner, you get a modern site, fully managed—and a front-row seat to
                the AI tools we&apos;re rolling out next.
              </p>
            </div>
          </div>

          {/* AI tools grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Tool 1 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    ND
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    NovaDesk AI
                  </div>
                  <p className="text-[11px] text-zinc-400">AI front desk assistant</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                An AI “employee” that can answer common questions, handle simple booking requests,
                and route real leads to you—so fewer messages slip through the cracks.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    PL
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    PulseLead Engine
                  </div>
                  <p className="text-[11px] text-zinc-400">Lead generator & qualifier</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Smart lead flows that ask the right questions, qualify interest, and tag leads so
                you can see at a glance who&apos;s serious—and follow up with confidence.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400 to-emerald-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    EF
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    EchoFlow Assistant
                  </div>
                  <p className="text-[11px] text-zinc-400">AI admin & follow-up helper</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Drafts follow-up emails, reminders, and check-ins based on how people interact with
                your site—helping you stay present without manually chasing every lead.
              </p>
            </div>

            {/* Tool 4 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-emerald-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    LL
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    LocalLens Insights
                  </div>
                  <p className="text-[11px] text-zinc-400">Local insights & reporting</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Simple, human-readable summaries of how your site and funnels are performing:
                what&apos;s working, what&apos;s dropping off, and where a small tweak could unlock
                more customers.
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-xs sm:text-sm text-zinc-400">
            We&apos;re intentionally partnering with a small number of local businesses to shape
            this stack. If you&apos;d rather be early, prepared, and supported than playing catch-up
            later, we&apos;d love to talk.
          </p>
        </div>
      </section>

      {/* ============== PROCESS SUMMARY ============== */}
      <section id="process" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            A simple three-step build
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Step
              n={1}
              title="Discover"
              text="We learn your story, audience, and goals so the site feels like an extension of your business."
            />
            <Step
              n={2}
              title="Design"
              text="We build a cinematic, conversion-focused layout tailored to your brand and offers."
            />
            <Step
              n={3}
              title="Launch"
              text="We deploy, monitor, and manage your site so it stays fast, secure, and up to date."
            />
          </div>
        </div>
      </section>

      {/* ============== BOTTOM CTA (FUNNELS TO PREVIEW) ============== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-[1.4fr,1fr] items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Start with a free homepage concept.
              </h3>
              <p className="mt-2 max-w-xl text-zinc-200">
                Share a few details about your business and we&apos;ll sketch a homepage direction
                tailored to you—story, structure, and visual feel. No pressure, no hard sell.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  No long-term contracts
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Clear monthly pricing and scope
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Option to grow into our AI suite over time
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-3">
              <a
                href="/preview"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.3)] transition hover:bg-zinc-200"
              >
                Start my free preview
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-xs text-zinc-500 max-w-xs text-left sm:text-right">
                We&apos;re currently taking on a small number of new partners. If it&apos;s a good
                fit, we&apos;ll walk you through next steps and timing after your preview.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
