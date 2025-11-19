"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import SiteChrome from "./components/SiteChrome";
import {
  ArrowRight,
  Brain,
  Workflow,
  LineChart,
  ShieldCheck,
  Clock,
  Inbox,
  Zap,
} from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function HomePage() {
  return (
    <SiteChrome>
      {/* HERO – dominant, bright, scenic */}
      <section className="relative border-b border-white/10 bg-black">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
            alt="Cinematic mountain landscape"
            className="h-full w-full object-cover"
          />
          {/* Stronger tint so text stands out */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-10 pb-14 sm:px-6 sm:pt-12 lg:pt-14">
          <div className="flex min-h-[70vh] w-full flex-col items-center justify-center text-center">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/90 drop-shadow">
              LOCAL AI SYSTEMS PARTNER
            </p>

            <h1
              className={`${heroFont.className} text-[clamp(32px,5vw,52px)] font-bold leading-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]`}
            >
              <span className="text-emerald-300">AI employees</span> that keep your business
              <br className="hidden sm:block" /> moving while you live your life.
            </h1>

            <p className="mt-4 max-w-3xl text-sm sm:text-[15px] text-zinc-100/95 drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)]">
              We design and manage a small team of AI employees behind your website, forms, and
              inboxes—so every lead is answered, follow-up is automatic, and work moves forward
              without you building a big office staff. The result: more time, stronger margins, and
              a calmer brain.
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/preview"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.65)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-300 sm:w-auto"
              >
                Generate My AI Systems Blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/start"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-black/40 px-6 py-3 text-sm font-semibold text-zinc-50 backdrop-blur-sm transition hover:border-emerald-300 hover:text-emerald-100 sm:w-auto"
              >
                Book a Strategy Call
              </Link>
            </div>

            {/* Supporting benefits row */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs text-zinc-100 drop-shadow-[0_3px_16px_rgba(0,0,0,0.7)]">
              <div className="inline-flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-300" />
                <span>Built around how your business already runs</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-emerald-300 sm:inline-block" />
              <div className="inline-flex items-center gap-2">
                <Workflow className="h-4 w-4 text-emerald-300" />
                <span>Leads, follow-up & admin handled for you</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-emerald-300 sm:inline-block" />
              <div className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-300" />
                <span>Designed to save 30–80+ hours every month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 – THE CURRENT REALITY */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2
            className={`${heroFont.className} mb-6 text-xl sm:text-2xl font-bold text-zinc-50`}
          >
            The work isn&apos;t the problem.{" "}
            <span className="text-emerald-400">The bottlenecks are.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <Inbox className="h-4 w-4 text-emerald-400" />
                Missed or late responses
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Leads and customers reach out across text, email, and forms. Replies are manual and
                inconsistent, so opportunities quietly slip away.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <Clock className="h-4 w-4 text-emerald-400" />
                Days lost to admin
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Your team is stuck updating tools, chasing paperwork, and “just checking in” instead
                of doing high-value work that moves revenue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <LineChart className="h-4 w-4 text-emerald-400" />
                Growth that feels random
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                When everything lives in people&apos;s heads and scattered chats, results are
                unpredictable. You&apos;re busy—but not in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – THE NEW SYSTEM / FUTURE STATE */}
      <section className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <h2 className={`${heroFont.className} text-2xl sm:text-3xl font-bold text-zinc-50`}>
              What your operation looks like with AI employees in place.
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] text-zinc-300">
              We don&apos;t add another dashboard. We install a small stack of AI employees that sit
              behind the tools you already use—answering, organizing, and pushing work forward so
              the business runs cleanly whether you&apos;re in the office or on a mountain.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <Zap className="h-4 w-4 text-emerald-400" />
                Every lead acknowledged instantly
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                AI employees respond the moment someone reaches out, ask the right questions, and
                route the conversation to the right person or next step.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <Workflow className="h-4 w-4 text-emerald-400" />
                Workflows that fire every time
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Follow-ups, reminders, and task handoffs no longer depend on memory. The same solid
                play runs for every lead, every project, every week.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-50">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                More profit, less mental load
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                You keep a lean team, but the business feels calmer and more responsive. Revenue
                becomes a function of systems, not heroics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SIMPLE 3-STEP PATH + CTA */}
      <section className="bg-black border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2
              className={`${heroFont.className} mb-3 text-2xl sm:text-3xl font-bold text-zinc-50`}
            >
              See your AI-powered operation before you commit to anything.
            </h2>
            <p className="text-sm sm:text-[15px] text-zinc-300">
              We start with a free AI Systems Blueprint. You&apos;ll see which AI employees we&apos;d
              install, what they&apos;d handle, and the time and money they&apos;re likely to save.
              No pressure, no jargon.
            </p>
          </div>

          <div className="mb-8 grid gap-4 text-sm text-zinc-200 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                STEP 1
              </p>
              <p className="mb-1 font-semibold text-zinc-50">Show us how you run today</p>
              <p className="text-xs text-zinc-300">
                Fill out a short form about your leads, tools, and bottlenecks. Plain language only
                – no tech background required.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                STEP 2
              </p>
              <p className="mb-1 font-semibold text-zinc-50">Get your AI Systems Blueprint</p>
              <p className="text-xs text-zinc-300">
                We map out 2–3 AI employees, where they plug in, and the hours and headcount they
                can realistically replace or protect.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                STEP 3
              </p>
              <p className="mb-1 font-semibold text-zinc-50">Decide if you want us to build</p>
              <p className="text-xs text-zinc-300">
                If it&apos;s a clear win, we turn the blueprint into a build plan and start our
                partnership. If not, you still walk away with clarity.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/preview"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 sm:w-auto"
            >
              Generate My AI Systems Blueprint
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-[11px] text-zinc-400 sm:text-xs">
              Prefer to talk live?{" "}
              <Link
                href="/start"
                className="font-semibold text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
              >
                Book a strategy session
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
