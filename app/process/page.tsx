"use client";

import React from "react";
import SiteChrome, { G } from "../components/SiteChrome";
import { Globe, PenTool, Rocket, Repeat } from "lucide-react";

function Step({ n, title, text, icon }: { n: number; title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
      <div className="mt-3 text-zinc-400">{icon}</div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteChrome>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            How <G>it works</G>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            A simple, transparent four-step flow from idea to launch — and beyond.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-4">
            <Step n={1} title="Discovery Call" text="We learn your goals, audience, and what a ‘win’ looks like." icon={<Globe className="h-5 w-5" />} />
            <Step n={2} title="Design & Build" text="We design, write copy, and build a fast, responsive site." icon={<PenTool className="h-5 w-5" />} />
            <Step n={3} title="Review & Launch" text="You review. We refine. Then we go live and submit to Google." icon={<Rocket className="h-5 w-5" />} />
            <Step n={4} title="Ongoing Growth" text="We handle updates, tweaks, and SEO basics as you grow." icon={<Repeat className="h-5 w-5" />} />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
