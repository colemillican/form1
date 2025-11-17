"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { Check } from "lucide-react";

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
            One predictable subscription gets you design, build, hosting, updates, funnels, and AI
            capabilities—depending on what stage your business is in.
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
              blurb: "A modern, managed website that finally matches the quality of your business.",
              points: [
                "Custom website build",
                "Ongoing updates & upkeep",
                "Fast, mobile-first pages",
                "Local SEO-ready structure",
                "Hosting & security included",
              ],
            },
            {
              name: "Growth",
              price: "$249/mo",
              tag: "Most popular",
              blurb:
                "Everything in Launch plus funnels and starter AI tools to reliably turn traffic into leads.",
              points: [
                "Everything in Launch",
                "Optimized sales funnels",
                "Lead forms wired into simple CRM",
                "Starter AI tools (NovaDesk + PulseLead basics)",
                "Monthly improvements & content updates",
              ],
            },
            {
              name: "LocalLink AI Suite",
              price: "$499/mo",
              tag: "For serious scaling",
              blurb:
                "Priority partnership with full AI automation, custom workflows, and first access to new tools.",
              points: [
                "Everything in Growth",
                "Full LocalLink AI Suite (NovaDesk, PulseLead, EchoFlow, LocalLens)",
                "Priority support & faster turnaround",
                "Custom automations for your business",
                "First access to new AI tools & updates",
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

        {/* What's included in every plan */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-3`}
          >
            Every plan includes the essentials
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            No matter which tier you choose, you get a modern website, built on a solid technical
            foundation, hosted and maintained for you. As you move up tiers, we add funnels,
            automations, and AI capabilities on top of that foundation—so you never outgrow your
            system.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-lg px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Not sure which plan is right for you?
          </h3>
          <p className="mt-2 max-w-2xl mx-auto text-zinc-300">
            Start with a free website concept. We'll show you the direction we’d take, outline what
            you need, and recommend the best plan based on your goals.
          </p>

          <a
            href="/preview"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-10 py-3 text-[15px] hover:bg-zinc-200 transition"
          >
            Get my free preview
          </a>

          <ul className="mt-6 space-y-1 text-xs text-zinc-500">
            <li className="inline-flex items-center gap-2 justify-center">
              <Check className="h-3 w-3 text-emerald-400" /> No contracts
            </li>
            <li className="inline-flex items-center gap-2 justify-center">
              <Check className="h-3 w-3 text-emerald-400" /> No pressure
            </li>
            <li className="inline-flex items-center gap-2 justify-center">
              <Check className="h-3 w-3 text-emerald-400" /> Simple, fast process
            </li>
          </ul>
        </div>
      </section>
    </SiteChrome>
  );
}
