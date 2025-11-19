"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import {
  ArrowRight,
  Brain,
  Workflow,
  ShieldCheck,
  Zap,
  LineChart,
  Inbox,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function ServicesPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-zinc-900">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHAT WE DO</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight text-white`}
          >
            <G>AI employees and systems</G> for lean local teams.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-200">
            LocalLink is a small studio out of Auburn, Alabama focused on one thing: installing
            a small stack of AI employees that plug into how your business already runs—so
            intake, follow-up, routing, and admin are handled for you, not by you.
          </p>
        </div>
      </section>

      {/* MAIN SERVICE GRID */}
      <section className="bg-slate-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-2">
          {/* Systems audit & blueprint */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
              alt="Team reviewing systems and workflows"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold text-white`}>
                Systems Audit & AI Blueprint
              </h3>
              <p className="mt-2 text-zinc-300">
                We start by mapping how your business actually runs today—where leads come from,
                how work moves, and where things break—then design a realistic plan for AI
                employees to carry the load.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-start gap-2">
                  <Brain className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  A clear view of your lead, communication, and operations flow across channels.
                </li>
                <li className="inline-flex items-start gap-2">
                  <Workflow className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Defined “AI employee” roles—what they own, where they hand off to humans, and
                  what success looks like.
                </li>
                <li className="inline-flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Guardrails for tone, boundaries, and edge cases so AI stays inside the lines.
                </li>
              </ul>
            </div>
          </article>

          {/* AI employee design & build */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
              alt="Futuristic interface showing AI systems"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold text-white`}>
                AI Employee Design & Build
              </h3>
              <p className="mt-2 text-zinc-300">
                We design and build AI employees that feel like part of your team—using your
                language, your logic, and your tools.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-start gap-2">
                  <Zap className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Custom conversation flows for intake, updates, and follow-up that reflect how
                  you actually talk to customers.
                </li>
                <li className="inline-flex items-start gap-2">
                  <Brain className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Private knowledge bases built from your offers, FAQs, and past messages—so AI
                  isn’t guessing.
                </li>
                <li className="inline-flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Safety, escalation, and “human-in-the-loop” points defined from day one.
                </li>
              </ul>
            </div>
          </article>

          {/* Integrations & automation */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
              alt="Team collaborating with digital tools"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold text-white`}>
                Integrations, Automations & Routing
              </h3>
              <p className="mt-2 text-zinc-300">
                AI employees plug into the tools you&apos;re already using—so they can update
                records, move tasks, and keep everything in sync behind the scenes.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-start gap-2">
                  <Workflow className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Connectors into CRMs, project trackers, calendars, and comms tools (where it
                  makes sense).
                </li>
                <li className="inline-flex items-start gap-2">
                  <Inbox className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Unified workflows across email, forms, SMS, and other channels so nothing falls
                  through the cracks.
                </li>
                <li className="inline-flex items-start gap-2">
                  <Zap className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Automated routing rules: who gets notified, when to escalate, and what gets
                  logged where.
                </li>
              </ul>
            </div>
          </article>

          {/* Ongoing optimization & support */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
              alt="Analytics and optimization dashboards"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold text-white`}>
                Ongoing Optimization & Partnership
              </h3>
              <p className="mt-2 text-zinc-300">
                This isn&apos;t a one-off build. We stay in the loop, watching how your AI
                employees perform and tightening the system over time.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-start gap-2">
                  <LineChart className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Track key metrics like response times, follow-through, and pipeline movement.
                </li>
                <li className="inline-flex items-start gap-2">
                  <Brain className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  Adjust prompts, flows, and rules as your offers, team, and volume evolve.
                </li>
                <li className="inline-flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 mt-[3px]" />
                  High-touch support and transparent communication instead of “good luck, here’s
                  your bot.”
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* EXAMPLE AI EMPLOYEES */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 pb-14 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2
              className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight text-white mb-3`}
            >
              What your AI employees might actually do.
            </h2>
            <p className="text-sm sm:text-[15px] text-zinc-300">
              Every business is different, but most of our partners start with 2–3 core AI
              employees that take over specific, repeatable workloads.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="flex items-center gap-2 text-white font-semibold text-base mb-1">
                <Inbox className="h-4 w-4 text-emerald-400" />
                Lead & Inbox Orchestrator
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                Keeps all new inquiries organized and moving.
              </p>
              <p className="text-sm text-zinc-300">
                Captures leads from multiple channels, tags them, enriches details when possible,
                and routes them to the right person or next automation step—without you chasing
                notifications all day.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="flex items-center gap-2 text-white font-semibold text-base mb-1">
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Follow-Up & Nurture Specialist
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                Makes sure warm leads don&apos;t go cold.
              </p>
              <p className="text-sm text-zinc-300">
                Sends thoughtful, on-brand follow-ups over days and weeks, checks in on quotes,
                and nudges people toward the next step—then flags humans when it&apos;s time to
                step in.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="flex items-center gap-2 text-white font-semibold text-base mb-1">
                <Workflow className="h-4 w-4 text-emerald-400" />
                Task & Project Router
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                Makes sure work lands in the right place.
              </p>
              <p className="text-sm text-zinc-300">
                Converts conversations into tasks, updates statuses in your tools, and keeps your
                pipeline and project boards in sync with what&apos;s actually happening.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="flex items-center gap-2 text-white font-semibold text-base mb-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Reviews & Reputation Builder
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                Turns happy customers into social proof.
              </p>
              <p className="text-sm text-zinc-300">
                Detects when jobs are complete, sends personalized review requests, and guides
                customers to the platforms that matter most—so your online presence reflects the
                quality of your work.
              </p>
            </div>
          </div>
        </div>

        {/* DEEPER EXPLANATION BLOCK + CTA */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-4 text-white`}
          >
            A long-term AI systems partner, not a one-off build.
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            At a simple level, we help you offload real, painful workload onto AI employees that
            are designed around your business—not generic templates. We audit how you operate
            today, design a small stack of AI roles that make sense, wire them into your tools,
            and then keep tuning the system as you grow. If a website or funnel update is part of
            that journey, we handle that too—but the core value is a calm, predictable operation
            where AI quietly does the busywork in the background.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/preview"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.3)] transition hover:bg-zinc-200"
            >
              Start with a free AI Systems Blueprint
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
