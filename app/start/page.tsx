"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import {
  ArrowRight,
  CalendarDays,
  Brain,
  Workflow,
  LineChart,
  Clock,
  ShieldCheck,
  PhoneCall,
  UserCheck,
} from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

// TODO: replace with your real Calendly / Cal.com link when ready
const CALENDAR_EMBED_URL =
  "https://calendly.com/your-workspace/ai-systems-blueprint-call"; // placeholder

export default function CallPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-zinc-950">
        <div className="max-w-5xl mx-auto px-4 pb-12 pt-16 sm:pt-20">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200 mb-4">
              <CalendarDays className="h-3 w-3" />
              <span>Strategy Call</span>
            </div>
            <h1
              className={`${heroFont.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4`}
            >
              Finalize your <span className="text-emerald-400">AI employee build plan</span>.
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mb-4">
              This is a focused working session to turn your AI Systems Blueprint into a concrete
              build plan: which AI employees we’ll create first, how they plug into your tools, and
              what rollout over the next 60–90 days looks like.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-4 w-4 text-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  On this call, we will…
                </p>
              </div>
              <ul className="space-y-3 text-[13px] text-zinc-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-medium">Refine your blueprint.</span> We’ll validate the
                    AI employees you need most (lead intake, scheduling, quoting, follow-up, etc.)
                    and prioritize based on impact.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-medium">Map everything to your stack.</span> Phone
                    system, CRM, calendar, invoicing, website forms — we’ll figure out where each AI
                    employee connects so your ops stay lean, not messy.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-medium">Set expectations and milestones.</span> Scope,
                    timeline, and what “success” looks like in the first 60–90 days of partnership.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <span className="font-medium">Walk through the $2k/mo base partnership.</span>{" "}
                    We’ll talk through how we build, maintain, and iterate on your AI employees over
                    time — and when it makes sense to add more.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[11px] text-zinc-400">
                Think of this less like a “sales call” and more like a systems session. Whether we
                work together or not, you’ll walk away with clarity on how AI can actually carry
                weight in your business.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Who this is for
                  </p>
                  <G>
                    <span className="text-[13px] text-zinc-100">
                      Lean teams that want AI to pull real weight.
                    </span>
                  </G>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  <Clock className="h-3 w-3" />
                  <span>~30 minutes</span>
                </div>
              </div>
              <ul className="space-y-2 text-[12px] text-zinc-300 mb-3">
                <li className="flex gap-2">
                  <UserCheck className="h-3.5 w-3.5 text-emerald-400 mt-[3px]" />
                  <span>Owners who are tired of carrying every conversation and task themselves.</span>
                </li>
                <li className="flex gap-2">
                  <UserCheck className="h-3.5 w-3.5 text-emerald-400 mt-[3px]" />
                  <span>Teams missing calls, reacting late, or losing leads in the chaos.</span>
                </li>
                <li className="flex gap-2">
                  <UserCheck className="h-3.5 w-3.5 text-emerald-400 mt-[3px]" />
                  <span>
                    Businesses ready to invest from ~$2k/month for a real AI ops partner (not a
                    toy).
                  </span>
                </li>
              </ul>
              <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-[11px] text-zinc-400">
                <p className="font-medium text-zinc-200 mb-1">This call is probably not a fit if:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>You’re just curious about AI but not ready to implement.</li>
                  <li>You’re looking for a one-off chatbot instead of ongoing systems.</li>
                  <li>You’re expecting “set and forget” magic without process work.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR + PROCESS */}
      <section className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 space-y-10">
          {/* Calendar */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Pick a time that works
              </p>
            </div>
            <p className="text-[13px] text-zinc-300 mb-4 max-w-2xl">
              Choose a 30-minute slot that fits your schedule. You’ll get a confirmation email with
              a short prep checklist so we can make the most of the time.
            </p>
            <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-950/80 p-3 text-[11px] text-zinc-400 mb-4">
              <p>
                <span className="font-medium text-zinc-200">Heads up:</span> If you already
                generated your AI Systems Blueprint, we’ll have that pulled up on our side. If not,
                we’ll quickly map out the same logic live on the call.
              </p>
            </div>

            {/* Calendar embed placeholder */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
              {/* Replace this iframe src with your actual scheduling link when ready */}
              <div className="aspect-video w-full">
                <iframe
                  src={CALENDAR_EMBED_URL}
                  title="Schedule AI Systems Strategy Call"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="mt-3 text-[11px] text-zinc-500">
              If the calendar doesn’t load for any reason, you can reach out directly and we’ll lock
              in a time manually.
            </p>
          </div>

          {/* Simple 3-step timeline */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-[11px] text-emerald-300">
                  1
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  The call
                </p>
              </div>
              <p className="text-[13px] text-zinc-200 mb-1">
                Clarify your bottlenecks and decide which AI employees to build first.
              </p>
              <p className="text-[11px] text-zinc-400">
                We’ll keep this practical and grounded in how your business already runs today.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-[11px] text-emerald-300">
                  2
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Build plan
                </p>
              </div>
              <p className="text-[13px] text-zinc-200 mb-1">
                We lay out a 60–90 day build roadmap tied to your tools, team, and budget.
              </p>
              <p className="text-[11px] text-zinc-400">
                You’ll know exactly what we’re building, how we’ll measure it, and what we need from
                you.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-[11px] text-emerald-300">
                  3
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Partnership
                </p>
              </div>
              <p className="text-[13px] text-zinc-200 mb-1">
                If it’s a fit, we kick off your $2k/mo base partnership and start building.
              </p>
              <p className="text-[11px] text-zinc-400">
                Our goal is simple: get AI employees handling real workload so your humans can do
                higher-value work.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Quick questions you might have
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 text-[13px] text-zinc-200">
              <div>
                <p className="font-semibold mb-1">Is this just a sales pitch?</p>
                <p className="text-[12px] text-zinc-400">
                  No. We treat this as a systems call first. We’ll talk about working together if it
                 ’s clearly a fit, but the first job is giving you a clear picture of what AI
                  employees can realistically handle in your world.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Do I need technical knowledge?</p>
                <p className="text-[12px] text-zinc-400">
                  Not at all. If you can walk us through how your business works today, we’ll handle
                  the architecture and implementation details. You don’t have to know the tools
                  ahead of time.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">What should I prepare?</p>
                <p className="text-[12px] text-zinc-400">
                  A rough idea of your current call/lead volume, the main tools you use (phone,
                  CRM, calendar, etc.), and the 2–3 parts of the business that feel heaviest or most
                  chaotic.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">What if I’m not sure about the $2k/mo yet?</p>
                <p className="text-[12px] text-zinc-400">
                  That’s okay. The call will make it obvious whether offloading real workload to AI
                  employees is worth that investment. If it’s not the right timing, you’ll still
                  leave with a sharper plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
