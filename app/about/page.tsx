"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import { Bot, BarChart3, Globe } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function AboutPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">ABOUT US</p>

          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            A modern studio built for <G>small businesses</G>.
          </h1>

          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink Studio is a small, mission-driven digital studio out of Auburn, Alabama —
            built to help local businesses stay modern, competitive, and confident in a rapidly
            changing world of websites, funnels, and AI.
          </p>
        </div>
      </section>

      {/* MISSION COPY */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-8 space-y-8 text-zinc-300 leading-relaxed">
          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              Built for long-term partnerships — not quick projects.
            </h2>

            <p>
              We don’t think like a freelance designer or a one-and-done agency. We act as a
              dedicated partner in your corner — keeping your website sharp, your funnels working,
              and your business aligned with the newest tech and AI tools. Your business keeps
              evolving, and our job is to make sure your digital presence evolves with it.
            </p>

            <p>
              Our mission isn’t to sell trends or bury you in dashboards. We take care of the
              technical work while you stay focused on what you do best: running your business,
              serving customers, and growing your team. Meanwhile, we keep an eye on what’s coming
              next so you’re never falling behind.
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              You stay in control — always.
            </h2>

            <p>
              Transparency is a core value at LocalLink Studio. You maintain full ownership of your
              content, branding, domain, and direction. We don’t lock you in, hide access, or make
              changes behind your back. You stay in the driver’s seat; we simply provide the engine.
            </p>

            <p>
              Every partnership involves shared decision-making. You’ll always know what we’re doing,
              why it matters, and how it affects your business. We guide, support, build, and
              maintain — but you decide where we’re headed.
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              Helping businesses stay modern, clear, and competitive.
            </h2>

            <p>
              Most small businesses don’t have time to keep up with new marketing tools, website
              standards, AI workflows, automation, and funnel strategy. That’s where we come in —
              translating modern technology into simple, useful systems that actually help your
              business grow.
            </p>

            <p>
              Whether it&apos;s a beautiful website, a streamlined booking flow, or practical AI
              that handles busywork — our goal is to give you the same digital leverage big
              companies enjoy, without the complexity or cost.
            </p>
          </div>
        </div>
      </section>

      {/* ============== AI TOOLS SECTION (MATCHING HOME) ============== */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              LOCAL AI SUITE (GROWTH & PRO PLANS)
            </p>
            <h3
              className={`${heroFont.className} mt-2 text-[clamp(22px,3vw,30px)] font-semibold tracking-tight`}
            >
              AI tools built for local businesses, not tech companies.
            </h3>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
              Our higher tiers unlock a focused stack of AI tools designed to feel like extra hands
              for your team—answering questions, qualifying leads, and keeping you in the loop—
              without you having to learn a new piece of software.
              <br />
              <br />
              <span className="text-emerald-300/80">
                These tools are an actively developing feature of LocalLink Studio. Early partners
                get new capabilities as we build them—smarter automations, deeper insights, and
                simple AI assistants designed specifically for local business workflows.
              </span>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* NovaDesk AI */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">NovaDesk AI</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    WEBSITE FRONT DESK
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                An AI “front desk” on your site that can answer common questions, collect contact
                details, and route real leads to you—so fewer calls and messages slip through the
                cracks.
              </p>
            </div>

            {/* PulseLead Engine */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <BarChart3 className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">PulseLead Engine</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    LEAD CAPTURE & SCORING
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Every form submission flows into a simple lead engine that scores interest,
                highlights the best opportunities, and sends you clean summaries instead of messy
                inbox noise.
              </p>
            </div>

            {/* EchoFlow Assistant */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">EchoFlow Assistant</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    FOLLOW-UP SUPPORT
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Light-touch follow-up help for leads—drafted emails and messages you can approve or
                personalize so you stay in front of people without having to remember every thread.
              </p>
            </div>

            {/* LocalLens Insights */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <Globe className="h-4 w-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LocalLens Insights</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    SIMPLE PERFORMANCE SNAPSHOTS
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Plain-language snapshots of what your site and funnels are doing for you—no
                analytics degree required. Just clear signals on what&apos;s working and what we
                should tweak next.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/preview"
              className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-10 py-3 hover:bg-zinc-200 transition"
            >
              Start your free preview
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
