"use client";

import React from "react";
import SiteChrome, { G } from "../components/SiteChrome";
import { Check, ArrowRight, Clock, DollarSign } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter Site",
      price: "$499",
      desc: "One-page site, mobile-first, contact form.",
      features: [
        "1 page (expandable later)",
        "Modern design & copy polish",
        "Basic on-page SEO",
        "Google Business guidance",
      ],
      highlight: false,
    },
    {
      name: "Business Boost",
      price: "$999",
      desc: "Multi-page site, services pages, launch support.",
      features: [
        "Up to 5 pages",
        "Conversion-focused layout",
        "On-page SEO + indexing",
        "Launch & analytics setup",
      ],
      highlight: true,
    },
    {
      name: "Full Presence",
      price: "$1499",
      desc: "Brand kit, site, and growth essentials.",
      features: [
        "Up to 8 pages",
        "Light brand kit & copywriting",
        "SEO basics + Google Business",
        "3 months of site care",
      ],
      highlight: false,
    },
  ];

  return (
    <SiteChrome>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Simple, transparent <G>pricing</G>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">Pick a starting point. We’ll tailor details to your business and budget.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={[
                  "rounded-2xl border p-6 md:p-8 flex flex-col bg-white/5",
                  tier.highlight ? "border-white/30 shadow-[0_8px_40px_-15px_rgba(0,0,0,0.5)]" : "border-white/10",
                ].join(" ")}
              >
                {tier.highlight && (
                  <span className="self-start rounded-full bg-white/10 text-white text-xs px-3 py-1 mb-4">
                    Most popular
                  </span>
                )}
                <h2 className="text-lg font-semibold">{tier.name}</h2>
                <p className="mt-1 text-zinc-300">{tier.desc}</p>
                <div className="mt-5 text-4xl font-semibold">{tier.price}</div>
                <ul className="mt-5 space-y-2 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={[
                    "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 transition text-sm font-semibold",
                    tier.highlight
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-white/20 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  Choose {tier.name} <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> 2–3 week average build
            </span>
            <span className="inline-flex items-center gap-2">
              <DollarSign className="h-4 w-4" /> No hidden fees
            </span>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
