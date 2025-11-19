"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import Link from "next/link";
import SiteChrome, { G } from "../components/SiteChrome";
import { Mail, Phone, ArrowRight, Clock, MessageCircle } from "lucide-react";

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
            Let’s talk about <G>how your business actually runs</G>.
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-zinc-300">
            Whether you’re ready for an AI Systems Blueprint or just exploring what “AI employees”
            would look like in your world, this is the place to start. No pressure, no jargon—just a
            clear conversation about your operation and what’s possible.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-black">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 px-6 py-14 sm:px-8 md:flex-row">
          {/* LEFT: Copy + quick options */}
          <div className="md:w-5/12 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <h2
                className={`${heroFont.className} text-[18px] sm:text-[20px] font-semibold text-zinc-50 mb-2`}
              >
                The fastest way to reach us
              </h2>
              <p className="text-[14px] leading-6 text-zinc-300">
                Most owners either want to see their Blueprint first or talk things through live. We
                can do both.
              </p>
              <ul className="mt-4 space-y-3 text-[14px] text-zinc-200">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-zinc-50">Book a strategy session</p>
                    <p className="text-zinc-300">
                      Walk us through your current setup, and we’ll show you where AI employees can
                      plug in. Perfect if you prefer to talk it out.
                    </p>
                    <Link
                      href="/start"
                      className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                    >
                      Book a strategy call
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-zinc-50">Send us your situation</p>
                    <p className="text-zinc-300">
                      Use the form to share how you’re operating today and what’s not working. We’ll
                      respond with next steps or a suggestion for how to start.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-[14px] text-zinc-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Prefer direct contact?
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>support@locallinkstudio.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>We’ll share a direct line once we’re in touch.</span>
                </p>
              </div>
            </div>

            <p className="text-[12px] text-zinc-500">
              No spam, no endless follow-up sequences. If we’re not a fit, we’ll tell you—and
              point you in a better direction if we can.
            </p>
          </div>

          {/* RIGHT: Contact form */}
          <div className="md:w-7/12">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <h2
                className={`${heroFont.className} text-[18px] sm:text-[20px] font-semibold text-zinc-50 mb-4`}
              >
                Tell us how your operation works today.
              </h2>
              <p className="mb-6 text-[14px] leading-6 text-zinc-300">
                A few clear details go a long way. The more specific you are, the more useful our
                first reply and Blueprint will be.
              </p>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                      Business name
                    </label>
                    <input
                      type="text"
                      name="business"
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                      placeholder="LocalLink Fitness Co."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                      Website (if you have one)
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    What best describes your priority?
                  </label>
                  <select
                    name="priority"
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-emerald-400"
                  >
                    <option value="">Select one…</option>
                    <option value="clean-up-chaos">Clean up backend chaos</option>
                    <option value="scale-without-headcount">
                      Scale without adding headcount
                    </option>
                    <option value="improve-lead-handling">Fix lead handling & follow-up</option>
                    <option value="explore-ai">Explore where AI actually fits</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    Briefly describe how you’re operating today.
                  </label>
                  <textarea
                    name="current_setup"
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                    placeholder="Where do leads come from? Who responds? What tools are in the mix? Where do things break down or fall through the cracks?"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    What would a “win” look like 6–12 months from now?
                  </label>
                  <textarea
                    name="ideal_future"
                    rows={3}
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                    placeholder="For example: fewer late nights, faster response times, clearer pipeline, less hiring pressure, etc."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 sm:w-auto"
                  >
                    Send message to LocalLink
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-2 text-[11px] text-zinc-500">
                    We typically respond within one business day with either next steps or a few
                    clarifying questions.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
