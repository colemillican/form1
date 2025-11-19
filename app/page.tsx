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
      {/* HERO */}
      <section className="relative border-b border-slate-200 bg-slate-900 text-slate-900">
        {/* Cinematic background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
            alt="Futuristic workspace"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-18">
          {/* Mobile padding is tighter so hero is closer to nav */}
          <div className="max-w-3xl">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              LOCAL AI SYSTEMS PARTNER
            </p>
            <h1
              className={`${heroFont.className} text-[clamp(30px,5vw,44px)] font-bold leading-tight text-white`}
            >
              AI employees that give you your{" "}
              <span className="text-emerald-300">time, margins, and headspace</span> back.
            </h1>
            <p className="mt-3 text-sm sm:text-[15px] text-slate-100/90">
              We design and manage a small team of AI employees behind your website, forms, and
              inboxes—so every lead gets handled, work moves forward on its own, and your business
              can grow without you building a giant office staff.
            </p>
          </div>

          {/* CTA block */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/preview"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 transition hover:bg-emerald-300 sm:w-auto"
            >
              Generate My AI Systems Blueprint
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/start"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300/70 bg-slate-900/40 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200 sm:w-auto"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Quick promise row */}
          <div className="mt-5 grid grid-cols-1 gap-3 text-xs text-slate-100/90 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-emerald-300" />
              <span>AI employees tuned to your real processes</span>
            </div>
            <div className="flex items-center gap-2">
              <Workflow className="h-4 w-4 text-emerald-300" />
              <span>Leads, follow-up & admin handled automatically</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-300" />
              <span>Designed to save 30–80+ hours a month</span>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS – LIGHT BACKGROUND */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2
            className={`${heroFont.className} text-xl sm:text-2xl font-bold text-slate-900 mb-6`}
          >
            You&apos;re not short on effort.{" "}
            <span className="text-emerald-600">You&apos;re short on leverage.</span>
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Inbox className="h-4 w-4 text-emerald-500" />
                Conversations everywhere, system nowhere
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Leads and customers are spread across text, email, DMs, and forms. You&apos;re
                constantly bouncing between apps, hoping nothing gets missed.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock className="h-4 w-4 text-emerald-500" />
                Admin is eating your calendar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Updates, reminders, basic questions, recaps, tracking tasks—your day disappears
                into work that doesn&apos;t actually grow the business.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <LineChart className="h-4 w-4 text-emerald-500" />
                Growth feels random, not repeatable
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When everything lives in people&apos;s heads and ad-hoc messages, it&apos;s hard to
                predict next month, let alone the next year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP / RESULTS */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <h2 className={`${heroFont.className} text-2xl sm:text-3xl font-bold text-slate-900`}>
              We install AI employees that quietly run the boring parts of your business.
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] text-slate-600">
              Instead of another dashboard or half-baked chatbot, we build a small stack of AI
              employees that sit behind the scenes—answering, organizing, and pushing work forward
              so you can buy back your time and scale without a giant payroll.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Zap className="h-4 w-4 text-emerald-500" />
                Faster than any human
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                New leads get acknowledged instantly, simple questions are handled automatically,
                and next steps are clear—without you hovering over the inbox.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Workflow className="h-4 w-4 text-emerald-500" />
                Workflows that don&apos;t depend on memory
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                AI employees follow the same play every time: log the lead, update the tools, send
                the follow-up, and loop in the right human when needed.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                More profit, less mental load
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                You keep the same headcount (or less), but the business feels calmer, more
                responsive, and more predictable month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE 3-STEP CTA SECTION */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2
              className={`${heroFont.className} text-2xl sm:text-3xl font-bold text-slate-900 mb-2`}
            >
              See your future operation before you commit.
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600">
              Start with a free AI Systems Blueprint that shows how AI employees would plug into
              your business, what they&apos;d handle, and how many hours they&apos;d likely save.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-3 mb-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                STEP 1
              </p>
              <p className="font-semibold text-slate-900 mb-1">Tell us how you run today</p>
              <p className="text-xs text-slate-600">
                Fill out a short form about your leads, tools, and bottlenecks. No tech jargon
                required.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                STEP 2
              </p>
              <p className="font-semibold text-slate-900 mb-1">
                Get your AI Systems Blueprint
              </p>
              <p className="text-xs text-slate-600">
                We map out 2–3 AI employees we&apos;d install, what they&apos;d handle, and the
                time/money they&apos;d likely save.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                STEP 3
              </p>
              <p className="font-semibold text-slate-900 mb-1">Decide if you want us to build</p>
              <p className="text-xs text-slate-600">
                If it looks like a fit, we turn the blueprint into a build plan and kick off your
                partnership. If not, you still keep the clarity.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/preview"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:bg-emerald-400 sm:w-auto"
            >
              Generate My AI Systems Blueprint
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-[11px] text-slate-500 sm:text-xs">
              Prefer to talk it through?{" "}
              <Link
                href="/start"
                className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-600"
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
