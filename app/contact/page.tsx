"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function ContactPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">GET STARTED</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Let&apos;s talk about your <G>digital presence</G>.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We&apos;re a small startup out of Auburn, Alabama, partnering with local businesses that
            want a modern website, a clear funnel, and a practical path into AI—without babysitting
            the tech themselves.
          </p>
        </div>
      </section>

      {/* CONTENT + CTAS */}
      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
          {/* Explainer */}
          <div className="space-y-5 text-sm sm:text-[15px] text-zinc-300 leading-relaxed">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
              How we usually start
            </h3>
            <p>
              The first step with most partners is simple: we learn the basics about your business,
              then build a free homepage preview that shows how your story, services, and calls to
              action could look on a modern site.
            </p>
            <p>
              From there, we either hop on a quick call to talk through details, or you move
              straight into a project start if everything already feels right. No pressure, no
              drawn-out sales process—just a clear look at what we can do together.
            </p>
            <p className="text-zinc-400 text-xs sm:text-[13px]">
              If you&apos;re not sure whether you need AI tools yet, that&apos;s fine. We can start
              with the website and add the LocalLink AI suite as your needs grow.
            </p>
          </div>

          {/* CTA Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-3">
                Choose how to reach out
              </h3>

              <div className="space-y-4 text-sm text-zinc-300">
                <div>
                  <div className="font-semibold text-zinc-100 mb-1">
                    Option 1: Start with a free preview
                  </div>
                  <p>
                    Fill out a short form, and we&apos;ll send you a custom homepage concept built
                    around your business and goals.
                  </p>
                  <a
                    href="/preview"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.3)] hover:bg-zinc-200 transition"
                  >
                    Start my free homepage preview
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-zinc-100 mb-1">
                    Option 2: Book a quick intro call
                  </div>
                  <p>
                    Prefer to talk it through first? Schedule a short call and we&apos;ll walk you
                    through how LocalLink could fit into your business.
                  </p>
                  <a
                    href="https://calendly.com/your-link/intro-call"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-emerald-400 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.55)] hover:bg-emerald-300 transition"
                  >
                    Book a 20–30 minute call
                  </a>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-zinc-500">
                You can also email us directly at{" "}
                <a
                  href="mailto:hello@locallinkdigital.com"
                  className="underline decoration-dotted underline-offset-2 hover:text-zinc-300"
                >
                  hello@locallinkdigital.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
