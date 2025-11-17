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
  Bot,
  BarChart3,
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
              <G>Modern websites.</G>
              <br />
              <G>Proven funnels. Practical AI.</G>
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-zinc-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              LocalLink Studio is a small startup out of Auburn, Alabama focused on one thing:
              giving local businesses a sharp website, a clear path from visitor to customer, and a
              simple way to tap into AI—without hiring a full tech team or living inside dashboards.
            </p>

            {/* Centered CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href="/preview"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-12 py-4 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)]"
              >
                Get my free website & AI preview
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-300" />
                Built for real local businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Fully managed, long-term partnership
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-300" />
                Website + AI stack
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
            title="Cinematic websites"
            text="Story-driven layouts that feel premium on any screen and actually match the quality of your work."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="Local SEO & funnels"
            text="Pages and flows mapped around one clear goal: turning visitors into trial members, calls, or booked jobs."
          />
          <Feature
            icon={<Bot className="h-5 w-5 text-emerald-400" />}
            title="AI tools (as you grow)"
            text="Optional AI assistants and lead engines that plug into your site without making your life more complicated."
          />
        </div>
      </section>

      {/* ============== PROCESS SUMMARY ============== */}
      <section id="process" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            A simple four-step path from idea to launch
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              n={1}
              title="Preview"
              text="You fill out a short form. We build a free homepage concept that shows your story, structure, and visual direction."
            />
            <Step
              n={2}
              title="Plan"
              text="If it feels like a fit, we lock in a plan and subscription tier that matches your scope and goals."
            />
            <Step
              n={3}
              title="Build"
              text="We design, write, and build your site on a modern stack—then review it together before launch."
            />
            <Step
              n={4}
              title="Grow"
              text="We keep your site updated and tuned, layering in AI tools and funnel tweaks as your business grows."
            />
          </div>
        </div>
      </section>

      {/* ============== AI TOOLS SECTION ============== */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              LOCAL AI SUITE (GROWTH & PRO PLANS)
            </p>
            <h3
              className={`${heroFont.className} mt-2 text-[clamp(22px,3vw,30px)] font-semibold tracking-tight`}
            >
              AI tools built for local businesses, not tech companies.
            </h3>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
              Our higher tiers unlock a focused stack of AI tools designed to feel like extra hands
              for your team—answering questions, qualifying leads, and keeping you in the loop—
              without you having to learn a new piece of software.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">NovaDesk AI</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    WEBSITE FRONT DESK
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                An AI “front desk” on your site that can answer common questions, collect contact
                details, and route real leads to you—so fewer calls and messages slip through the
                cracks.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <BarChart3 className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">PulseLead Engine</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    LEAD CAPTURE & SCORING
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Every form submission flows into a simple lead engine that scores interest,
                highlights the best opportunities, and sends you clean summaries instead of messy
                inbox noise.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">EchoFlow Assistant</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    FOLLOW-UP SUPPORT
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Light-touch follow-up help for leads—drafted emails and messages you can approve or
                personalize so you stay in front of people without having to remember every thread.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Globe className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LocalLens Insights</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    SIMPLE PERFORMANCE SNAPSHOTS
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Plain-language snapshots of what your site and funnels are doing for you—no
                analytics degree required. Just clear signals on what&apos;s working and what we
                should tweak next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT / PREVIEW CTA ============== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Start with a free website & AI preview
            </h3>
            <p className="mt-2 max-w-lg text-zinc-200">
              Share a few details about your business. We&apos;ll sketch a concept that shows how
              your website, funnels, and AI tools could work together—then you decide if it feels
              right.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                No long-term contracts
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Clear monthly pricing, no hidden fees
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Fully managed after launch, AI optional as you grow
              </li>
            </ul>
          </div>

          <div className="max-w-xl">
            <a
              href="/preview"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white font-semibold text-black transition hover:bg-zinc-200"
            >
              Go to the free preview form
            </a>
            <p className="mt-2 text-xs text-zinc-500">
              The preview is free and no-pressure. It&apos;s the fastest way for both of us to see
              whether we&apos;re a good fit.
            </p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
