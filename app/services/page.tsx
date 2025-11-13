"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import { Monitor, Globe, Search, Wrench } from "lucide-react";
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
            <G>Websites that work</G> as hard as you do.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink combines cinematic design, clean engineering, and ongoing care to give your
            local business a website that looks sharp, loads fast, and keeps working behind the
            scenes while you’re on the job.
          </p>
        </div>
      </section>

      {/* MAIN SERVICE GRID */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-2">
          {/* Design */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
              alt="Designer working on interface"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Cinematic, Story-Driven Design
              </h3>
              <p className="mt-2 text-zinc-300">
                We build homepages and key pages that feel intentional—strong headlines, clear
                sections, and visuals that tell your story in seconds.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-emerald-400" /> Homepage & core subpages built to
                  guide the eye.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-emerald-400" /> Brand-matched color, typography,
                  and visual rhythm.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-emerald-400" /> Clear, bold calls-to-action that
                  drive leads.
                </li>
              </ul>
            </div>
          </article>

          {/* Performance */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Developer working with code and devices"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Performance, Speed & Stability
              </h3>
              <p className="mt-2 text-zinc-300">
                Built on Next.js and deployed to modern infrastructure, your site feels snappy and
                reliable on any device.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Mobile-first, responsive layouts.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Image optimization, caching, and
                  lazy loading built in.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" /> Hosted on modern infrastructure for
                  smooth, consistent uptime.
                </li>
              </ul>
            </div>
          </article>

          {/* SEO */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
              alt="City street with local businesses"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Local SEO-Ready Foundation
              </h3>
              <p className="mt-2 text-zinc-300">
                We don’t “do SEO packages.” Instead, we bake in a healthy foundation that helps
                people actually find you when they search.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-400" /> Structured headlines, copy, and
                  semantic HTML.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-400" /> Clean title, description, and
                  social previews.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-400" /> Sitemap and robots best practices
                  out of the box.
                </li>
              </ul>
            </div>
          </article>

          {/* Ongoing management */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
              alt="Owner working in a cozy local business"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>
                Fully Managed & Kept Fresh
              </h3>
              <p className="mt-2 text-zinc-300">
                After launch, we stay in your corner—updating content, tightening performance, and
                making sure your site doesn’t fall behind.
              </p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400" /> Content updates and small tweaks
                  included.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400" /> Analytics wired so you can see
                  what’s working.
                </li>
                <li className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400" /> Ongoing technical and visual
                  improvements over time.
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* DEEPER EXPLANATION BLOCK */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-4`}
          >
            What LocalLink actually does for you
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            At a simple level, we handle everything your website needs so you don’t have to think
            about it. We learn your story, design a site that genuinely reflects who you are, and
            build it on a modern stack that’s fast and reliable. Then we stay with you long term:
            updating copy and photos when your business changes, keeping things optimized for
            phones, tightening performance, and making sure the experience always feels sharp when a
            new customer lands on your site for the first time. You get the benefits of a full-time
            web team—design, development, and maintenance—without having to hire or manage any of
            it.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}








