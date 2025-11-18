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
            A <G>simple</G>, partnership-based approach to pricing.
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-zinc-300 text-[15px] leading-relaxed">
            We don’t charge for pages, hours, or features.  
            We price based on the systems we build together and the ongoing value they create—saving
            time, reducing busywork, and keeping your operations running smoother than ever.  
            As your business grows, your automation grows with it.
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
            We focus on outcomes: saved hours, smoother processes, clearer visibility, and fewer
            balls dropped. Our work should feel like your operations getting lighter and more in
            control month after month.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {/* VALUE CARD 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">
                  AI “employees” that support your team
                </h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                We call them AI employees—not because they replace people, but because they
                take on repetitive, systemized tasks: answering common questions, qualifying leads,
                routing inquiries, and helping your real team spend more time on high-value work.
              </p>
            </div>

            {/* VALUE CARD 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">
                  Website & funnel infrastructure
                </h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                A modern website and sales funnel built to convert—where calls, forms, and leads
                flow into clean systems instead of scattered spreadsheets and inbox chaos.
              </p>
            </div>

            {/* VALUE CARD 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-semibold text-white">
                  A long-term tech & AI partner
                </h3>
              </div>
              <p className="mt-2 text-[14px] text-zinc-300 leading-relaxed">
                We stay on top of the tech and AI side so you don&apos;t have to. As tools evolve,
                we adapt your systems, suggest new automations, and keep your business aligned with
                what actually works—not every shiny new thing.
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
            many AI employees we&apos;re building and maintaining for you. Each one is designed
            to take real, repeatable work off your plate—saving time, minimizing errors, and
            reducing the need for extra headcount as you grow.
          </p>

          <div className="mt-8 space-y-6">
            {/* Line 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Base AI Operations Partnership
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                We start by aligning your website, funnels, and core systems, then layer in your
                first AI employee. This gives you a clear digital foundation plus a tangible,
                day-to-day reduction in manual work.
              </p>
            </div>

            {/* Line 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Additional AI employees over time
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                As we learn your operations, we can roll out additional AI employees—each focused
                on a specific area like intake, scheduling, follow-up, or internal admin. 
                The goal is not to replace your team, but to remove the low-leverage work that
                slows them down.
              </p>
            </div>

            {/* Line 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">
                Typical partner investment range
              </h4>
              <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                Most of our partners invest between{" "}
                <span className="text-white">$2,500–$5,000/month</span>, depending on scope and how
                many AI employees we&apos;re actively building and maintaining. We’ll map this out
                transparently before you make any commitments.
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
            Want to see what this could look like for your business?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-zinc-300 text-sm leading-relaxed">
            Book a short intro call.  
            We&apos;ll walk through your current bottlenecks, explore where AI employees and 
            better systems can save you time and money, and outline what a partnership with 
            Local Link Studio might look like.
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
