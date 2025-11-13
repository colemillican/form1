"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function FAQPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">FAQ</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Straightforward answers to <G>common questions</G>.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            Here’s what most business owners want to know before we start. If something’s not
            covered here, we’ll talk through it together.
          </p>
        </div>
      </section>

      {/* Q&A + visual */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
          {/* Q&A */}
          <div className="space-y-6 text-zinc-300 text-sm sm:text-[15px]">
            <div>
              <div className="font-semibold text-zinc-100">
                How long does a typical site take to launch?
              </div>
              <p className="mt-1">
                Most projects launch in about 2–3 weeks once we’ve had our kickoff and collected
                content. If you need something faster, we’ll be honest about what’s realistic.
              </p>
            </div>
            <div>
              <div className="font-semibold text-zinc-100">
                What do you need from me to get started?
              </div>
              <p className="mt-1">
                A short conversation about your business, any existing logo/brand pieces, a few
                examples of sites you like, and basic details about your services. We’ll guide the
                rest.
              </p>
            </div>
            <div>
              <div className="font-semibold text-zinc-100">
                Do I really need a monthly subscription?
              </div>
              <p className="mt-1">
                Most sites die from neglect—stale content, broken pieces, slow performance. The
                monthly model lets us keep your site healthy, current, and fast without one-off
                invoices every time you need a change.
              </p>
            </div>
            <div>
              <div className="font-semibold text-zinc-100">
                Can I leave or move the site later if I need to?
              </div>
              <p className="mt-1">
                Yes. You own your content and branding. If you ever outgrow the setup, we’ll help
                you transition cleanly instead of locking you in.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
              alt="Owner talking with a customer in a shop"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-5 text-xs sm:text-sm text-zinc-200">
              <div className="font-semibold mb-1">Built for busy owners</div>
              <p>
                Our goal is simple: give you a website you’re proud to send people to, without
                adding another complicated system to your plate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}



