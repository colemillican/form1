"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

/**
 * TODO: Replace these with your real LIVE Stripe payment links.
 * Example: const LAUNCH_LINK = "https://buy.stripe.com/...";
 */
const LAUNCH_LINK = "https://buy.stripe.com/test_launch_placeholder";
const GROWTH_LINK = "https://buy.stripe.com/test_growth_placeholder";
const PRO_LINK = "https://buy.stripe.com/test_pro_placeholder";

export default function PlansPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">
            CHOOSE YOUR PLAN
          </p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Lock in your <G>Local Link Studio</G> subscription.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
            You&apos;ve seen your concept and project details. Now pick the
            subscription that fits how you want to work with us—every plan
            includes design, hosting, and ongoing care. Higher tiers unlock our
            growing stack of AI tools and closer partnership.
          </p>
        </div>
      </section>

      {/* PLAN GRID */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {/* Launch Plan */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              STARTER WEBSITE
            </div>
            <div className="mt-2 text-lg font-semibold">Launch</div>
            <div className="mt-1 text-emerald-300 font-semibold text-xl">
              $149<span className="text-sm text-zinc-400">/mo</span>
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              A modern, fully managed website so your business finally has a
              sharp, trustworthy online home—without you touching the tech.
            </p>
            <ul className="mt-4 text-sm text-zinc-300 space-y-1 flex-1">
              <li>• Custom-designed homepage & core pages</li>
              <li>• Hosting, maintenance & security handled for you</li>
              <li>• Local SEO-ready structure & content framework</li>
              <li>• Ongoing content tweaks & small updates</li>
              <li>• Email support</li>
            </ul>
            <a
              href={LAUNCH_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Start on Launch
            </a>
          </div>

          {/* Growth Plan */}
          <div className="rounded-2xl border border-emerald-400/60 bg-gradient-to-b from-emerald-500/15 via-emerald-400/10 to-black p-6 flex flex-col shadow-[0_0_40px_rgba(16,185,129,0.35)]">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                MOST POPULAR
              </div>
              <div className="rounded-full border border-emerald-300/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                AI ENABLED
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">Growth</div>
            <div className="mt-1 text-emerald-200 font-semibold text-xl">
              $299<span className="text-sm text-emerald-100/70">/mo</span>
            </div>
            <p className="mt-2 text-sm text-emerald-50/90">
              For owners who want a sharper site and practical AI tools that
              save time and help capture more customers—without adding
              complexity.
            </p>
            <ul className="mt-4 text-sm text-emerald-50/90 space-y-1 flex-1">
              <li>• Everything in Launch</li>
              <li>• Conversion-focused funnels & lead forms</li>
              <li>• Access to core Local AI Suite tools</li>
              <li>• Simple performance snapshots & recommendations</li>
              <li>• Faster content & update turnaround</li>
            </ul>
            <a
              href={GROWTH_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Start on Growth
            </a>
          </div>

          {/* Pro AI Suite */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-300">
              FULL AI SUITE
            </div>
            <div className="mt-2 text-lg font-semibold">Pro AI Suite</div>
            <div className="mt-1 text-emerald-300 font-semibold text-xl">
              $499<span className="text-sm text-zinc-400">/mo</span>
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              For teams that want Local Link Studio as a long-term tech partner:
              full AI stack access, priority support, and deeper collaboration
              on systems and strategy.
            </p>
            <ul className="mt-4 text-sm text-zinc-300 space-y-1 flex-1">
              <li>• Everything in Growth</li>
              <li>• Full Local AI Suite access as it evolves</li>
              <li>• Priority support & quicker iteration loops</li>
              <li>• Input on future tools tailored to your workflows</li>
              <li>• Closer, long-term partnership on tech & AI</li>
            </ul>
            <a
              href={PRO_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Start on Pro AI Suite
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-3`}
          >
            One subscription. Ongoing partnership.
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            No surprise invoices or one-off project fees—just a clear monthly
            subscription where Local Link Studio handles the design, tech, and
            AI side of your business so you can stay focused on the work only
            you can do.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
