"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">{n}</span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">HOW WE WORK</p>
          <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
            A <G>lean</G> process that ships great work.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            Clear steps, quick feedback, and reliable communication. No bloated timelines.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-5 sm:grid-cols-3">
          <Step n={1} title="Discover" text="Goals, audience, tone, and examples. We align on outcomes and scope." />
          <Step n={2} title="Design" text="Cinematic hero, clean layout, premium type. Review and refine together." />
          <Step n={3} title="Launch" text="Ship to Vercel. Wire analytics. Ongoing updates and support." />
        </div>
      </section>
    </SiteChrome>
  );
}




