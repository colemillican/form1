"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "./components/SiteChrome";
import {
  ArrowRight,
  Brain,
  Workflow,
  PhoneCall,
  LineChart,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Zap,
} from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function HomePage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <Sparkles className="h-3 w-3" />
              AI Systems for Local Teams
            </div>

            <h1
              className={`${heroFont.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl leading-[1.1]`}
            >
              Give your business a team of{" "}
              <span className="text-emerald-400">AI employees</span> that
              <br className="hidden sm:block" /> handle real workload.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl">
              We help lean local businesses eliminate the chaos of missed calls, slow quotes, and
              manual follow-up by installing fully custom AI employees that run operations — so you
              don’t have to.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/preview"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
              >
                Generate My AI Systems Blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-200 hover:border-emerald-300/60 hover:text-emerald-300 transition"
              >
                Book a Strategy Call
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-zinc-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-emerald-400" />
                <span>Every lead answered instantly</span>
              </div>
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-emerald-400" />
                <span>Scheduling, quoting & follow-up automated</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Built for real local businesses — not tech teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-zinc-950 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <h2
            className={`${heroFont.className} text-2xl sm:text-3xl font-bold text-white mb-8`}
          >
            The problem isn't your team. <span className="text-emerald-400">It's the workload.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <PhoneCall className="h-5 w-5 text-emerald-400" />
                Missed calls = missed revenue
              </h3>
              <p className="text-sm text-zinc-400">
                Most local businesses lose thousands each month from slow responses and inconsistent
                intake. Your AI receptionist fixes that instantly.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                Manual scheduling drains your day
              </h3>
              <p className="text-sm text-zinc-400">
                Back-and-forth texts, reschedules, reminders — your AI coordinator handles it
                automatically.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <LineChart className="h-5 w-5 text-emerald-400" />
                No follow-up = dead leads
              </h3>
              <p className="text-sm text-zinc-400">
                Warm leads fall through the cracks. Your AI follow-up agent nurtures them for days
                and weeks, boosting conversions without extra ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="bg-zinc-950 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <h2 className={`${heroFont.className} text-3xl font-bold text-white mb-6`}>
            What happens when AI employees run your operations?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">Instant Response</p>
              </div>
              <p className="text-sm text-zinc-400">
                Every lead answered instantly by your AI intake specialist — no missed calls, no
                delays, no revenue slipping through the cracks.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">Automated Scheduling</p>
              </div>
              <p className="text-sm text-zinc-400">
                Your AI scheduler books jobs, sends reminders, handles cancellations, and syncs with
                your calendar perfectly.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <LineChart className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">Higher Close Rates</p>
              </div>
              <p className="text-sm text-zinc-400">
                Faster quotes + consistent follow-up = more booked jobs and higher monthly revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2
            className={`${heroFont.className} text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight`}
          >
            Ready to see how AI employees would run <span className="text-emerald-400">your</span>{" "}
            business?
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto mb-8 text-sm">
            Start with your personalized AI Systems Blueprint. Completely free. No call required.
          </p>

          <Link
            href="/preview"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
          >
            Generate My Blueprint
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-4 text-xs text-zinc-400">
            Prefer to talk first?{" "}
            <Link
              href="/start"
              className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
            >
              Book a strategy session
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
