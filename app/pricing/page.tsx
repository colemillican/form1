"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function PricingPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">PRICING</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Clear <G>monthly pricing</G>. No surprise invoices.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            One predictable subscription gets you design, build, hosting, and ongoing updates. As you
            grow, you can layer in funnels and AI tools—without rebuilding everything from scratch.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Launch",
              price: "$149/mo",
              tag: "Best for getting online",
              blurb:
                "A modern, managed website that finally matches the quality of your business.",
              points: [
                "Custom-designed website build",
                "Ongoing updates & upkeep",
                "Mobile-first, fast-loading pages",
                "Local SEO-ready structure & metadata",
                "Hosting, security & performance monitoring",
              ],
            },
            {
              name: "Growth",
              price: "$249/mo",
              tag: "For growing lead flow",
              blurb:
                "Everything in Launch plus funnels and starter AI tools to turn traffic into real leads.",
              points: [
                "Everything in Launch",
                "Optimized sales funnels & landing pages",
                "Lead capture forms wired into simple tracking",
                "Starter AI tools (NovaDesk & PulseLead basics)",
                "Monthly iteration on copy & layout",
              ],
            },
            {
              name: "LocalLink AI Suite",
              price: "$399/mo",
              tag: "For serious, systems-based teams",
              blurb:
                "Priority partnership with full AI capabilities and ongoing optimization as you scale.",
              points: [
                "Everything in Growth",
                "Full LocalLink AI Suite (NovaDesk, PulseLead, EchoFlow, LocalLens)",
                "Priority support & faster turnaround",
                "Custom automations for your workflows",
                "First access to new AI tools & experiments",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                {tier.tag}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">{tier.name}</div>
              <div className="mt-1 text-emerald-300 font-semibold">{tier.price}</div>
              <p className="mt-2 text-sm text-zinc-300">{tier.blurb}</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1 flex-1">
                {tier.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a
                href="/preview"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
              >
                Start with a free preview
              </a>
            </div>
          ))}
        </div>

        {/* What’s included in every plan */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-3`}
          >
            Every plan includes the essentials
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            No matter which tier you choose, you get a modern website, built on a solid technical
            foundation, hosted and maintained for you. We handle design, performance, basic SEO
            setup, security updates, and small content tweaks—so your site keeps feeling sharp as your
            business grows. As you move up tiers, we add funnels and AI capabilities on top of that
            same foundation, instead of making you start over.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
