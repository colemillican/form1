"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function AboutPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHO WE ARE</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            A startup out of <G>Auburn, Alabama</G> building the next wave of local business tech.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink Digital is a small, focused team in Auburn, AL on a mission to help local
            businesses keep up with modern technology and the oncoming wave of AI—without having to
            become tech companies themselves.
          </p>
        </div>
      </section>

      {/* STORY / MISSION */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-14 sm:px-8 space-y-8 text-zinc-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Built for real local businesses
            </h2>
            <p>
              You&apos;re great at what you do—running a gym, a service company, a local shop—but
              the digital side of your business rarely gets the attention it deserves. The website is
              dated, the tech stack is scattered, and AI feels like something only big companies can
              use.
            </p>
            <p>
              That&apos;s the gap we&apos;re here to fill. We design and maintain modern websites,
              align them with clear sales funnels, and layer in AI where it actually helps—so you can
              stay focused on the work that made your business successful in the first place.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Long-term partnerships, not quick hits
            </h3>
            <p>
              We&apos;re not here to throw a few tools at you, collect a fee, and disappear.
              LocalLink is built around long-term partnerships with a small number of serious owners.
              We want to be the team you trust with your digital presence and your AI roadmap as
              technology keeps evolving.
            </p>
            <p>
              Your business will change. New offers, new locations, new seasons. Your website and AI
              stack should evolve with you—without you having to wrestle with dashboards, plugins, or
              complicated tools.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our mission in one line
            </h3>
            <p>
              <span className="font-semibold text-white">
                We handle the modern tech and AI layer for local businesses so you can focus on what
                you do best.
              </span>{" "}
              That means design, upkeep, SEO, funnels, and—increasingly—a practical stack of AI tools
              that actually move the needle, not just sound impressive.
            </p>
            <p>
              Right now, we&apos;re intentionally small. We&apos;re looking for a handful of
              strategic partners to grow with: owners who care about their craft, who want to look
              sharp online, and who are ready to tap into AI without losing their mind—or their
              time—to it.
            </p>
          </div>
        </div>
      </section>

      {/* FUTURE + AI TOOLS */}
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-screen-2xl px-6 pt-10 pb-16 sm:px-8 space-y-10">
          {/* Cinematic / mission card */}
          <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-cyan-400/10 to-zinc-900/80 p-5 sm:p-6 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_0%_0%,rgba(52,211,153,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.35),transparent_55%)]" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/90">
                The LocalLink AI stack
              </p>
              <h2
                className={`${heroFont.className} mt-2 text-[clamp(22px,3vw,30px)] font-semibold tracking-tight text-white`}
              >
                Building a practical AI toolkit for real local businesses.
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-emerald-50/90">
                We&apos;re actively developing a stack of AI tools designed for one thing: helping
                small, local teams feel like they have extra employees—without adding extra payroll.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-emerald-100/80">
                As an early partner, you don&apos;t just get a website. You get a front-row seat to
                the tools we&apos;re building next—and a say in what we build for owners like you.
              </p>
            </div>
          </div>

          {/* AI tools grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Tool 1 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    ND
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    NovaDesk AI
                  </div>
                  <p className="text-[11px] text-zinc-400">AI front desk assistant</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                An AI “employee” that can answer common questions, handle simple booking requests,
                and route real leads to you—whether they come in from your website, contact form, or
                messaging.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    PL
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    PulseLead Engine
                  </div>
                  <p className="text-[11px] text-zinc-400">Lead generator & qualifier</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Smart lead capture flows that ask the right questions, qualify interest, and tag
                leads so you can quickly see who&apos;s serious—and follow up with the right message
                at the right time.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400 to-emerald-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    EF
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    EchoFlow Assistant
                  </div>
                  <p className="text-[11px] text-zinc-400">AI admin & follow-up helper</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Tools that draft follow-up emails, reminders, and check-ins based on how people
                interact with your site—helping you stay present without manually chasing every
                lead.
              </p>
            </div>

            {/* Tool 4 */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-emerald-400">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black uppercase">
                    LL
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    LocalLens Insights
                  </div>
                  <p className="text-[11px] text-zinc-400">Local insights & reporting</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200">
                Simple, human-readable summaries of how your site and funnels are performing:
                what&apos;s working, what&apos;s dropping off, and where a small tweak could unlock
                more customers.
              </p>
            </div>
          </div>

          <div className="max-w-2xl text-xs sm:text-sm text-zinc-400">
            We&apos;re actively looking for a few strategic partners who want to grow with us—
            owners who see the wave of AI coming and would rather be early, prepared, and supported
            than playing catch-up later.
          </div>

          {/* CTA */}
          <div className="pt-4 flex justify-center">
            <a
              href="/preview"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300 px-8 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] hover:from-emerald-300 hover:via-emerald-200 hover:to-cyan-200 hover:-translate-y-[1px] transition-transform"
            >
              Become a strategic partner
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
