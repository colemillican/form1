"use client";

import React from "react";
import { Exo_2 } from "next/font/google";
import { ArrowRight, Bot, Settings, Users } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function PricingPhilosophyPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-emerald-300/80">
            PRICING PHILOSOPHY
          </p>

          <h1
            className={`${heroFont.className} text-[clamp(30px,4.5vw,48px)] font-bold tracking-tight`}
          >
            An investment in <G>systems</G>, not software.
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-zinc-300 text-[15px] leading-relaxed">
            Local Link Studio isn’t a freelancer marketplace, a website template shop, or a
            “one-and-done” project.  
            We become your long-term technology and AI partner—building systems that replace
            bottlenecks, eliminate manual work, and scale with your business for years.
          </p>
        </div>
      </section>

      {/* WHAT YOU'RE REALLY BUYING */}
      <section className="bg-black border-b border-white/10">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-8">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight text-white`}
          >
            What you&apos;re actually investing in
          </h2>

          <p className="mt-3 max-w-3xl text-zinc-300 text-sm leading-relaxed">
            Most agencies charge for pages, hours, or features.  
            We focus on outcomes: saved hours, smoother processes, clearer visibility, and
            fewer dropped balls. Our work should feel like your operations getting lighter and
            more in control month after month.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">AI “employees”</h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                Not replacing people—supporting them.  
                These automations handle repetitive, systemized tasks so your real team can spend
                more time on high-value work.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">
                  Website & funnel infrastructure
                </h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                A modern digital foundation that captures leads, organizes data, and makes your
                operations easier—not harder.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">A long-term AI partner</h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                As tech evolves, we evolve your systems.  
                You stay focused on what you do best—while we keep your digital operations modern,
                stable, and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="bg-gradient-to-b from-black to-zinc-950 border-b border-white/10">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-8">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight`}
          >
            How our pricing works
          </h2>

          <p className="mt-3 max-w-3xl text-zinc-300 text-sm leading-relaxed">
            Every business runs differently. We price based on the depth of partnership and how
            many AI employees we’re building and maintaining for you.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Base AI Operations Partnership
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                We align your website, funnels, systems, and build your first AI employee.
                Immediate, tangible operational relief.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Additional AI employees over time
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                As we learn your operations, we roll out additional automations in scheduling,
                intake, follow-ups, internal admin, and more.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Typical partner investment range
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                Most partners invest between{" "}
                <span className="text-white">$2,500–$5,000/mo</span>, depending on scope and volume
                of AI employees. Everything is mapped transparently before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(26px,4vw,40px)] font-bold tracking-tight`}
          >
            Want to see what this looks like for your business?
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-zinc-300 text-sm leading-relaxed">
            Book a short intro call.  
            We’ll walk through your bottlenecks and outline opportunities where systems + AI
            employees can save time, money, and operational stress.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-black px-10 h-12 font-semibold text-sm hover:bg-zinc-200 transition"
          >
            Book a systems audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
