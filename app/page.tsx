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
  Sparkles,
  ShieldCheck,
  Clock,
  Zap,
  Inbox,
} from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function HomePage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-zinc-900">
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
              <span className="text-emerald-400">AI employees</span> that actually do the work.
            </h1>

            <p className="text-base sm:text-lg text-zinc-100/90 max-w-2xl">
              We help lean local businesses replace scattered manual tasks with a small stack of
              AI employees—built to handle intake, follow-up, routing, and admin—so your humans can
              focus on real work instead of inbox chaos.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/preview"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
              >
                Generate My AI Systems Blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-100 hover:border-emerald-300/60 hover:text-emerald-300 transition"
              >
                Book a Strategy Call
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-zinc-200/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-400" />
                <span>AI employees tuned to your processes</span>
              </div>
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-emerald-400" />
                <span>Leads, tasks, and follow-up handled automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Built for real-world trades & local services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-slate-950 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <h2
            className={`${heroFont.className} text-2xl sm:text-3xl font-bold text-white mb-8`}
          >
            The problem isn’t effort. <span className="text-emerald-400">It’s scattered systems.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <Inbox className="h-5 w-5 text-emerald-400" />
                Too many conversations, no clear flow
              </h3>
              <p className="text-sm text-zinc-300">
                Leads and customers are spread across text, email, DMs and forms. You’re stuck
                jumping between apps, hoping nothing gets missed.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                Admin is eating your day
              </h3>
              <p className="text-sm text-zinc-300">
                Updates, reminders, data entry, basic questions, task routing—your team is burning
                hours on work a well-designed AI employee could own.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                <LineChart className="h-5 w-5 text-emerald-400" />
                No repeatable system = hard growth
              </h3>
              <p className="text-sm text-zinc-300">
                When everything lives in people’s heads and ad-hoc messages, it’s impossible to
                scale cleanly. You grow, but the chaos grows faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="bg-slate-950 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <h2 className={`${heroFont.className} text-3xl font-bold text-white mb-6`}>
            What happens when AI employees carry real weight?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">You move faster than competitors</p>
              </div>
              <p className="text-sm text-zinc-300">
                Leads are acknowledged instantly, questions are answered quickly, and next steps are
                clear—without you hovering over every inbox.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">Your team gets their time back</p>
              </div>
              <p className="text-sm text-zinc-300">
                Repetitive admin work is handled by AI employees, so your humans can spend more time
                on jobs, customers, and decisions that actually move the needle.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <div className="flex items-center gap-2 mb-2">
                <LineChart className="h-5 w-5 text-emerald-400" />
                <p className="text-white font-semibold">Your operations become predictable</p>
              </div>
              <p className="text-sm text-zinc-300">
                With consistent workflows and automated follow-through, revenue is less “random,”
                and more a function of a system that keeps running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2
            className={`${heroFont.className} text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight`}
          >
            Ready to see how AI employees would run <span className="text-emerald-400">your</span>{" "}
            business?
          </h2>
          <p className="text-zinc-200 max-w-xl mx-auto mb-8 text-sm">
            Start with your personalized AI Systems Blueprint. Completely free. No call required.
          </p>

          <Link
            href="/preview"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
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
