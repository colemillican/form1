"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import { Check } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function PricingPage() {
  const tiers = [
    {
      name: "Launch",
      price: "$149/mo",
      tag: "Best for getting online",
      highlight: false,
      badge: "",
      blurb:
        "A modern, managed website that finally matches the quality of your business—without you touching the tech.",
      points: [
        "Custom website design & build",
        "Ongoing updates & upkeep",
        "Fast, mobile-first pages",
        "Local SEO-ready structure & metadata",
        "Hosting, security & performance monitoring",
      ],
      // 🔗 Replace with your real Stripe payment link
      buyLink: "https://buy.stripe.com/launch-plan-placeholder",
    },
    {
      name: "Growth",
      price: "$249/mo",
      tag: "Most popular",
      highlight: true,
      badge: "Recommended",
      blurb:
        "Everything in Launch plus funnels and starter AI tools to reliably turn traffic into leads and booked work.",
      points: [
        "Everything in Launch",
        "Optimized sales funnels & landing pages",
        "Lead forms wired into simple tracking/CRM",
        "Starter AI tools (NovaDesk & PulseLead basics)",
        "Monthly improvements to copy, layout & UX",
      ],
      // 🔗 Replace with your real Stripe payment link
      buyLink: "https://buy.stripe.com/growth-plan-placeholder",
    },
    {
      name: "LocalLink AI Suite",
      price: "$499/mo",
      tag: "For serious scaling",
      highlight: false,
      badge: "",
      blurb:
        "Priority partnership with full AI automation, custom workflows, and first access to new tools as we build them.",
      points: [
        "Everything in Growth",
        "Full LocalLink AI Suite (NovaDesk, PulseLead, EchoFlow, LocalLens)",
        "Priority support & faster turnaround",
        "Custom automations for your workflows",
        "Quarterly strategy check-ins on site & AI",
      ],
      // 🔗 Replace with your real Stripe payment link
      buyLink: "https://buy.stripe.com/ai-suite-plan-placeholder",
    },
  ];

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">PRICING</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Simple <G>monthly plans</G> for serious local businesses.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            One subscription gets you design, build, hosting, updates, and support. As you grow, you
            can add funnels and AI tools on top of the same foundation—without rebuilding from
            scratch.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const baseClasses =
              "rounded-2xl p-6 flex flex-col border bg-white/5 transition-transform duration-200";
            const highlightClasses = tier.highlight
              ? "border-emerald-400/60 bg-emerald-500/10 shadow-[0_18px_45px_rgba(16,185,129,0.35)] scale-[1.02]"
              : "border-white/10";

            return (
              <div key={tier.name} className={`${baseClasses} ${highlightClasses}`}>
                {/* Badge & tag */}
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                    {tier.tag}
                  </div>
                  {tier.badge && (
                    <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mt-2 text-lg font-semibold text-white">{tier.name}</div>
                <div className="mt-1 text-emerald-300 font-semibold">{tier.price}</div>
                <p className="mt-2 text-sm text-zinc-300">{tier.blurb}</p>

                <ul className="mt-4 text-sm text-zinc-300 space-y-1 flex-1">
                  {tier.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>

                {/* Primary CTA – preview */}
                <a
                  href="/preview"
                  className={`mt-5 inline-flex h-10 items-center justify-center rounded-full text-sm font-semibold transition
                    ${
                      tier.highlight
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-zinc-900 text-white hover:bg-zinc-800"
                    }`}
                >
                  Start with a free preview
                </a>

                {/* Secondary CTA – Buy now */}
                <a
                  href={tier.buyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-full border border-emerald-400/70 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 transition"
                >
                  Buy now
                </a>
              </div>
            );
          })}
        </div>

        {/* What's included in every plan */}
        <div className="mx-auto max-w-screen-lg px-6 pb-10 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-3`}
          >
            Every plan includes the core essentials
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            No matter which tier you choose, you get a modern website, built on a solid technical
            stack, hosted and maintained for you. We handle design, performance, SEO basics,
            security, and small content tweaks—so your site keeps feeling sharp as your business
            grows. You can upgrade or downgrade tiers as your needs change.
          </p>
        </div>
      </section>

      {/* MINI FAQ / REASSURANCE */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-10 sm:px-8 grid gap-8 md:grid-cols-3 text-sm text-zinc-300">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-2">
              Is there a big upfront build fee?
            </h3>
            <p>
              No. The build cost is baked into your subscription. That way, you can get a premium
              site without a painful one-time invoice, and we stay invested in keeping it great
              long term.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-2">
              Can I move between plans later?
            </h3>
            <p>
              Yes. As your business or lead volume grows, we can move you from Launch to Growth or
              the LocalLink AI Suite without rebuilding everything from scratch.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-2">
              Do I have to use the AI tools?
            </h3>
            <p>
              No. AI is there when you&apos;re ready for it. Many clients start on Launch or Growth,
              then layer in AI as they get busier and want to offload more admin work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-lg px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Not sure which plan is right for you?
          </h3>
          <p className="mt-2 max-w-2xl mx-auto text-zinc-300">
            Start with a free website & AI preview. We&apos;ll show you the direction we&apos;d
            take, outline what you actually need, and recommend the best tier based on your goals
            and budget.
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
