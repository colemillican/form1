"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import { Monitor, Globe, Search, Wrench, Bot, BarChart3 } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function ServicesPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHAT WE DO</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            <G>Websites, funnels, and AI</G> for real local businesses.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink is a startup out of Auburn, Alabama focused on one thing: giving local
            businesses a modern website, a clear sales funnel, and a practical AI layer—managed
            for you long term so you don&apos;t have to babysit any of it.
          </p>
        </div>
      </section>

      {/* MAIN SERVICE GRID */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-2">
          {/* Website design + upkeep */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
              alt="Designer working on interface"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Website Design & Ongoing Upkeep
              </h3>
              <p className="mt-2 text-zinc-300">
                We design and build a site that actually matches the quality of your work—and then
                we keep it updated as your business evolves.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-emerald-400" /> Cinematic, story-driven layouts
                  for your homepage and key pages.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-emerald-400" /> Brand-matched colors,
                  typography, and imagery that feel sharp—not cheesy.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400" /> Ongoing content tweaks and
                  updates included in your monthly plan.
                </li>
              </ul>
            </div>
          </article>

          {/* Performance + infrastructure */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Developer working with code and devices"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Modern Performance & Infrastructure
              </h3>
              <p className="mt-2 text-zinc-300">
                Your website is built on a modern stack so it feels snappy, secure, and dependable
                on any device.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Mobile-first, responsive layouts
                  that feel natural on phones.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Image optimization, caching, and
                  best practices baked in.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Hosted on modern infrastructure
                  for smooth uptime and fast loads.
                </li>
              </ul>
            </div>
          </article>

          {/* SEO + funnels */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
              alt="City street with local businesses"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Local SEO & Conversion-Focused Funnels
              </h3>
              <p className="mt-2 text-zinc-300">
                We set up a clean SEO foundation and map your site around a simple, optimized path
                from visitor → lead → paying customer.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-400" /> Structured headlines, copy, and
                  semantic HTML for search engines.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-400" /> Clean titles, meta descriptions,
                  and social previews so you look good when shared.
                </li>
                <li className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-emerald-400" /> Clear call-to-action flows
                  tuned to book trials, calls, or quotes—not just page views.
                </li>
              </ul>
            </div>
          </article>

          {/* AI layer */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
              alt="Futuristic interface and city skyline"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                LocalLink AI Suite (For Growth & Pro Plans)
              </h3>
              <p className="mt-2 text-zinc-300">
                For partners on our higher tiers, we&apos;re rolling out a focused stack of AI tools
                built for local businesses—not tech companies.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-emerald-400" />{" "}
                  <span className="font-medium">NovaDesk AI</span> – an AI front desk assistant to
                  answer common questions and handle simple booking requests.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-emerald-400" />{" "}
                  <span className="font-medium">PulseLead Engine</span> – lead capture and
                  qualification flows that tag and score incoming leads.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-emerald-400" />{" "}
                  <span className="font-medium">EchoFlow Assistant</span> – AI-powered follow-up
                  drafts and reminders based on how people interact with your site.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-emerald-400" />{" "}
                  <span className="font-medium">LocalLens Insights</span> – simple summaries of what
                  your site is doing for you, in plain language.
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* DEEPER EXPLANATION BLOCK + CTA */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-4`}
          >
            A long-term digital partner, not a one-off project
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            At a simple level, LocalLink handles everything your website needs so you don&apos;t
            have to think about it. We learn your story, design a site that genuinely reflects who
            you are, and build it on a modern stack that&apos;s fast and reliable. Then we stay with
            you long term—keeping copy and visuals current, tuning for mobile, and tightening your
            funnels as we learn what works. As you grow into our higher tiers, we layer in practical
            AI tools that feel like extra hands for your team, not another dashboard to manage.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/preview"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.3)] transition hover:bg-zinc-200"
            >
              Start with a free website & AI preview
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
