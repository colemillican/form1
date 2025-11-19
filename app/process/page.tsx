"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import Link from "next/link";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold text-zinc-50">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">HOW IT WORKS</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight text-zinc-50`}
          >
            A <G>calm, simple process</G> for installing AI employees.
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-zinc-300">
            We start with a free AI Systems Blueprint, agree on a focused build, then quietly roll
            your AI employees into the tools you already use. Clear checkpoints, minimal lift on
            your side, and no mystery about what happens next.
          </p>
        </div>
      </section>

      {/* STEPS + SUMMARY */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl space-y-10 px-6 py-14 sm:px-8">
          {/* Steps */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              n={1}
              title="Blueprint Request"
              text="You answer a short set of questions about your offers, tools, and bottlenecks. We use that to design your AI Systems Blueprint: 2–3 AI employee roles, where they plug in, and the impact they can realistically have."
            />
            <Step
              n={2}
              title="Strategy & Agreement"
              text="We review the Blueprint with you, tighten the plan, and agree on scope, timeline, and investment. You know exactly what we’re building and how it will show up in your day-to-day."
            />
            <Step
              n={3}
              title="Build & Installation"
              text="We design your AI employees, connect them to your tools, and run them through real scenarios. You review at 1–2 key checkpoints before anything starts handling live conversations or workflows."
            />
            <Step
              n={4}
              title="Optimize & Grow"
              text="Once live, we monitor how your AI employees perform, tune prompts and flows, and expand their responsibilities over time—so your system gets sharper as your business grows."
            />
          </div>

          {/* What we need vs what we handle */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                What we need from you
              </h2>
              <p className="mb-3 text-[14px] leading-6 text-zinc-300">
                The process is built to respect your time. We only pull you in where your context
                and judgment actually matter.
              </p>
              <ul className="space-y-2 text-[14px] text-zinc-300">
                <li>• 15–20 minutes to complete the AI Systems Blueprint form.</li>
                <li>• 45–60 minutes for a kickoff / strategy call once you’re ready.</li>
                <li>• View-only access to the tools you already use (CRM, inbox, calendars, etc.).</li>
                <li>• A handful of real messages or scenarios that represent your day-to-day.</li>
                <li>• Honest feedback at each review checkpoint so we can dial in the fit.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                What we handle for you
              </h2>
              <p className="mb-3 text-[14px] leading-6 text-zinc-300">
                Our job is to turn a messy, manual operation into a calm, repeatable system powered
                by AI employees—not hand you another dashboard to babysit.
              </p>
              <ul className="space-y-2 text-[14px] text-zinc-300">
                <li>• Mapping your lead, communication, and operations flow end to end.</li>
                <li>• Designing each AI employee’s role, boundaries, and escalation rules.</li>
                <li>• Building prompts, knowledge bases, and integrations into your tools.</li>
                <li>• Testing with real scenarios before going live on customer-facing channels.</li>
                <li>• Ongoing monitoring, tuning, and expansion as your volume and needs grow.</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <Link
              href="/preview"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400"
            >
              Start with a free AI Systems Blueprint
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
