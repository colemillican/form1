"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

type Step = {
  n: string;
  title: string;
  line: string;
  img: string;
  detail: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Discover",
    line: "Goals, audience, style — fast.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    detail:
      "A short call + a simple intake form gives us your voice, target customers, and the main action you want them to take. We agree on the page structure and visual tone.",
  },
  {
    n: "02",
    title: "Design",
    line: "Cinematic hero. Clear story. CTA.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    detail:
      "We craft a bold hero with a single message, then add supporting sections. Typography and spacing do the heavy lifting so your message reads instantly.",
  },
  {
    n: "03",
    title: "Launch",
    line: "Vercel deploy, domain, analytics.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    detail:
      "We connect your domain, set up SSL, wire basic analytics, and submit for indexing. After launch, we keep iterating based on real traffic.",
  },
];

export default function ProcessPage() {
  return (
    <SiteChrome>
      {/* Page Header */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-[clamp(36px,6vw,56px)] font-black leading-[1.05] tracking-tight">
            A <G>simple</G> process with a <G>clear</G> outcome.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-300">
            We move quickly and keep decisions easy. Less friction, more progress.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 pb-12 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="overflow-hidden rounded-2xl border border-white/10">
                <div
                  className="relative aspect-[4/5]"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.6)),url(${s.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-6 bg-black/70 backdrop-blur">
                  <div className="text-emerald-300/90 text-xs tracking-[0.35em]">{s.n}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{s.title}</h3>
                  <p className="text-sm text-zinc-400">{s.line}</p>
                  <details className="mt-3 group">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-emerald-300/90">
                      More detail
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{s.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Start your preview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}


