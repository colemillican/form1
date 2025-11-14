"use client";
import React, { useEffect, useState } from "react";
import {
  Bolt,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Globe,
  Monitor,
  Search,
  Check,
} from "lucide-react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "./components/SiteChrome";

/* Headline font */
const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

/* ORIGINAL rotating hero images */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
];

function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.18)),
              url(${src})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== idx}
        />
      ))}
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        {icon}
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

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

export default function Page() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`${heroFont.className} text-[clamp(38px,5.6vw,62px)] font-bold leading-[1.05] tracking-[0.02em]`}
            >
              <G>Stories that connect.</G>
              <br />
              <G>Websites that perform.</G>
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              We bring your story to life online — designing, building, and managing beautiful,
              high-performing websites that help local customers find you, trust you, and reach out.
            </p>

            {/* Centered CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-12 py-4 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)]"
              >
                Get my free website outline
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              No payment. No obligation. We review what you share and send back a custom outline for
              your website.
            </p>

            {/* Badges */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-300" />
                Built for local businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Fully managed partnership
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-300" />
                Fast and mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* The rest of your page remains unchanged… */}
      {/* Feature strip */}
      <section id="services" className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
          <Feature
            icon={<Monitor className="h-5 w-5 text-emerald-400" />}
            title="Cinematic Design"
            text="Bold type, bright imagery, motion-ready UI."
          />
          <Feature
            icon={<Globe className="h-5 w-5 text-emerald-400" />}
            title="Next.js Performance"
            text="Image optimization, caching, clean Core Web Vitals."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="SEO-Ready"
            text="Semantic structure, metadata, local visibility."
          />
        </div>
      </section>

      {/* Work, Process, Contact (unchanged from your current version)… */}
    </SiteChrome>
  );
}














