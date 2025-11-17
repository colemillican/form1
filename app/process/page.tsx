"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">HOW IT WORKS</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            A <G>simple process</G> built for busy owners.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We start with a free homepage concept, confirm it&apos;s a fit, then handle the build,
            launch, and ongoing updates (plus AI as you grow). Clear checkpoints, minimal lift on
            your side, and no guesswork about what&apos;s next.
          </p>
        </div>
      </section>

      {/* STEPS + SUMMARY */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 space-y-10">
          {/* Steps */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              n={1}
              title="Preview"
              text="You fill out a short form and we build a free homepage concept: story, structure, and visual direction tailored to your business."
            />
            <Step
              n={2}
              title="Project Start"
              text="If you like the direction, we finalize scope, pick a plan, and send a clear payment link. No surprises, no hidden line items."
            />
            <Step
              n={3}
              title="Build & Launch"
              text="We design, write, and build your site on a modern stack. You review at 1–2 key checkpoints before we launch to production."
            />
            <Step
              n={4}
              title="Ongoing Care & AI"
              text="After launch, we keep the site updated, tuned, and aligned with your offers—layering in AI tools as you grow into our higher tiers."
            />
          </div>

          {/* What we need vs what we handle */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-3">
                What we need from you
              </h2>
              <p className="text-[14px] leading-6 text-zinc-300 mb-3">
                The goal is to get you a sharp, effective digital presence without eating your whole
                week. Here&apos;s what we typically ask for:
              </p>
              <ul className="space-y-2 text-[14px] text-zinc-300">
                <li>• 15–30 minutes to fill out the preview form.</li>
                <li>• 30–45 minutes for a kickoff call once you&apos;re ready to start.</li>
                <li>• Your logo, any photos you like, and basic service details.</li>
                <li>• Honest, straightforward feedback at 1–2 review checkpoints.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-3">
                What we handle for you
              </h2>
              <p className="text-[14px] leading-6 text-zinc-300 mb-3">
                Our job is to take the digital side off your plate so you can stay focused on the
                work you&apos;re actually in business to do.
              </p>
              <ul className="space-y-2 text-[14px] text-zinc-300">
                <li>• Story, layout, and design for your core pages.</li>
                <li>• Modern build, hosting, performance, and basic SEO foundations.</li>
                <li>• Ongoing content tweaks, updates, and refinements over time.</li>
                <li>• For higher tiers, rollout and tuning of our LocalLink AI tools.</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <a
              href="/preview"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.3)] transition hover:bg-zinc-200"
            >
              Start with a free homepage preview
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
