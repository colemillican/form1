"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const hero =
  "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=2000&auto=format&fit=crop";

const tiles = [
  {
    tag: "WE DESIGN",
    title: "Cinematic sites that feel premium",
    blurb: "Strong hero. Clear story. Sharp CTAs.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    tag: "WE BUILD",
    title: "Fast, mobile-first performance",
    blurb: "Next.js + Vercel for speed & reliability.",
    img: "https://images.unsplash.com/photo-1517003213043-72479e869c1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    tag: "WE MANAGE",
    title: "Hosting, updates, and analytics",
    blurb: "We keep it fresh while you run the business.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
];

function Tile({ t }: { t: (typeof tiles)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div
        className="relative aspect-[4/3]"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.6)),url(${t.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] tracking-wide text-zinc-300">
          {t.tag}
        </span>
        <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{t.blurb}</p>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section
        className="relative isolate"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.75)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8">
          <h1 className="text-[clamp(34px,6vw,64px)] font-black leading-[1.02] tracking-tight">
            Websites that <G>look elite</G> and <G>convert fast</G>.
          </h1>
          <p className="mt-3 text-lg max-w-2xl text-zinc-300">
            We design, build, and manage high-impact websites for local businesses. You focus on
            service—<span className="text-zinc-100">we keep the web handled.</span>
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Start your free preview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes grid */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <Tile key={t.title} t={t} />
            ))}
          </div>

          {/* Minimal clarity strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Clear story, strong CTA, easy contact",
              "Fast loads, mobile-first, SEO-ready",
              "Ongoing edits, hosting, and support",
            ].map((l) => (
              <div
                key={l}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-zinc-300"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}


