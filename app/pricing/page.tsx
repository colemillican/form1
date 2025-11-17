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
            One predictable subscription gets you design, build, hosting, and ongoing updates.
            No giant upfront project fee, no nickel-and-diming for small changes.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Launch",
              price: "$99/mo",
              tag: "For getting online",
              blurb:
                "A modern, managed website that covers the essentials for your local business.",
              points: [
                "Custom-designed website with ongoing upkeep",
                "SEO management for local search visibility",
                "Optimized sales funnel for your core offer",
              ],
            },
            {
              name: "Growth + AI",
              price: "$199/mo",
              tag: "Best value",
              blurb:
                "Everything in Launch plus AI capabilities to help you capture, qualify, and convert more leads.",
              points: [
                "All Launch features included",
                "AI-enhanced lead capture & inquiry handling",
                "Smart, conversion-focused funnel refinements over time",
              ],
            },
            {
              name: "Pro AI Suite",
              price: "$349/mo",
              tag: "For serious teams",
              blurb:
                "Priority support, advanced AI capabilities, and first access to our evolving AI tool stack for local businesses.",
              points: [
                "All Growth + AI features included",
                "Priority support & faster turnaround on updates",
                "First in line for our LocalLink AI suite and future AI tools",
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
              <div className="mt-2 text-lg font-semibold">{tier.name}</div>
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
                Start a project with this plan
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
            foundation, hosted and maintained for you. Every plan includes website design and
            ongoing upkeep, SEO management, and optimized sales funnels so your site doesn&apos;t
            just look good—it quietly works in the background to bring you more customers.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
