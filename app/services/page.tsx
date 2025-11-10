"use client";

import React from "react";
import SiteChrome, { G } from "../components/SiteChrome";
import { Monitor, Search, Smartphone, Repeat, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const items = [
    {
      icon: <Monitor className="h-5 w-5 text-emerald-400" />,
      title: "Website Design & Build",
      blurb: "Fast, mobile-first sites that look legit and convert visitors.",
    },
    {
      icon: <Search className="h-5 w-5 text-emerald-400" />,
      title: "Google Business & SEO Basics",
      blurb: "Claim, clean up, and optimize so customers can actually find you.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-emerald-400" />,
      title: "Branding & Copy Polish",
      blurb: "Logos, colors, and clear messaging that match your market.",
    },
    {
      icon: <Repeat className="h-5 w-5 text-emerald-400" />,
      title: "Monthly Site Care",
      blurb: "Updates, security, and tweaks handled for you — stay focused.",
    },
  ];

  return (
    <SiteChrome>
      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            What <G>we do</G>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Clarity over complexity. We ship clean, modern sites plus the essentials that help your business show up and stand out.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((c) => (
              <article key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 inline-flex items-center gap-2">
                  {c.icon}
                  <span className="text-[15px] font-semibold">{c.title}</span>
                </div>
                <p className="text-[14px] leading-6 text-zinc-300">{c.blurb}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200 transition"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
