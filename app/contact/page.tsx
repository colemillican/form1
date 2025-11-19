"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { Phone, Mail, ArrowRight, Clock, MessageCircle } from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function ContactPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">CONTACT</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight text-zinc-50`}
          >
            Two simple ways to talk with <G>LocalLink</G>.
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-zinc-300">
            When you&apos;re ready to see what AI employees and better systems could mean for your
            business, you don&apos;t need a long form. Book a strategy call or send us an email, and
            we&apos;ll meet you where you are.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-black">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 px-6 py-14 sm:px-8 md:flex-row">
          {/* Strategy call */}
          <div className="md:w-1/2">
            <div className="h-full rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <Clock className="h-4 w-4" />
                Strategy Session
              </div>
              <h2
                className={`${heroFont.className} text-[18px] sm:text-[20px] font-semibold text-zinc-50 mb-2`}
              >
                Book a call to walk through your operation.
              </h2>
              <p className="text-[14px] leading-6 text-zinc-300">
                In 30–45 minutes, we&apos;ll map how your business runs today, where work is getting
                stuck, and how a small team of AI employees could plug into the tools you&apos;re
                already using.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Perfect if you think out loud and want to ask real questions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    We&apos;ll talk through leads, follow-up, admin, and where AI employees could
                    start taking weight off your team.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>No hard sell—just an honest look at fit, timeline, and results.</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400"
                >
                  Book a strategy call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-[11px] text-zinc-500">
                  We use this call to decide if a partnership makes sense on both sides.
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="md:w-1/2">
            <div className="h-full rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <Mail className="h-4 w-4" />
                Email Our Team
              </div>
              <h2
                className={`${heroFont.className} text-[18px] sm:text-[20px] font-semibold text-zinc-50 mb-2`}
              >
                Prefer to write it out?
              </h2>
              <p className="text-[14px] leading-6 text-zinc-300">
                Send us a quick overview of your business, how things work today, and what you&apos;re
                hoping to change. We&apos;ll reply with next steps or a suggestion for where to
                start.
              </p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/60 p-4 text-[14px] text-zinc-200">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Email
                </p>
                <a
                  href="mailto:info@locallinkdigital.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  info@locallinkdigital.com
                  <ArrowRight className="h-3 w-3" />
                </a>
                <p className="mt-3 text-[12px] text-zinc-400">
                  A short note on your industry, team size, and biggest bottlenecks is plenty. If it
                  looks like a fit, we&apos;ll usually suggest a Blueprint or a call as the next step.
                </p>
              </div>

              <div className="mt-5 flex items-start gap-3 text-[13px] text-zinc-300">
                <MessageCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                <p>
                  Not sure which option to pick? Email us with{" "}
                  <span className="font-semibold text-zinc-50">“Quick question”</span> in the subject
                  line and we&apos;ll point you in the right direction.
                </p>
              </div>

              <p className="mt-4 text-[11px] text-zinc-500">
                No lists, no spam. If we aren&apos;t the right partner, we&apos;ll say so and, if
                possible, point you toward something that makes more sense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
