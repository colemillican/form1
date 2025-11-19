"use client";

import React, { useState } from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "What do you mean by “AI employees”?",
    answer:
      "We use “AI employees” as a simple way to describe focused AI agents that handle specific responsibilities inside your business: answering leads, sending follow-ups, routing tasks, updating tools, and more. They’re designed around your real processes and tools, not generic chatbots dropped on your website.",
  },
  {
    question: "What kinds of businesses is LocalLink a good fit for?",
    answer:
      "We’re built for lean, service-based businesses that handle a steady stream of inquiries and projects—think home services, clinics, gyms, studios, agencies, and local professional services. If you have repeatable workflows and conversations, AI employees can remove a lot of friction.",
  },
  {
    question: "Do you replace my team or support staff?",
    answer:
      "No. Our goal is to remove the repetitive, low-leverage work that burns your team out—so they can focus on judgment calls, relationships, and high-value execution. In practice, AI employees reduce the need for extra admin hires and make your existing team more effective.",
  },
  {
    question: "What does the AI Systems Blueprint include?",
    answer:
      "Your Blueprint outlines 2–3 AI employee roles we’d install, where they plug into your tools, what tasks they own, and the time/money they’re likely to save. It also covers guardrails, handoff rules to humans, and a high-level implementation plan so you know exactly what you’re saying yes to.",
  },
  {
    question: "How long does it take to get from Blueprint to live system?",
    answer:
      "Most projects move from signed agreement to live AI employees in 3–6 weeks, depending on complexity and how many tools we’re integrating with. We’d rather move a bit slower and get it right than rush something you don’t fully trust.",
  },
  {
    question: "Do you need access to my data and tools?",
    answer:
      "Yes, but only the minimum needed. We typically ask for scoped, view-only access at first so we can map your workflows. As we build, we’ll set up secure API keys and permissions so AI employees can do their jobs without overreaching. You stay in control of what they can and can’t touch.",
  },
  {
    question: "How do you handle privacy and security?",
    answer:
      "We treat your data like it’s our own. We rely on battle-tested infrastructure, follow least-privilege access principles, and put clear guardrails around what AI can store, access, and say. If you have specific compliance needs, we’ll walk through them before we start.",
  },
  {
    question: "What if something goes wrong or the AI says the wrong thing?",
    answer:
      "We design every role with clear boundaries and escalation rules. In sensitive situations, AI employees route directly to a human instead of guessing. Early on, we run in a controlled or “shadow” mode so we can catch issues before they’re fully live—and we monitor and tune continuously.",
  },
  {
    question: "Can you help with my website too, or only AI systems?",
    answer:
      "Yes, we can handle both. If your website is holding the rest of the system back, we’ll either clean it up or rebuild what’s necessary so your AI employees have a solid foundation to work from.",
  },
  {
    question: "What does working together actually feel like day to day?",
    answer:
      "Most owners tell us it feels like somebody finally grabbed the messy backend of the business and started quietly fixing it. You’ll have clear checkpoints, simple updates from us, and the sense that more and more of the boring work is being handled without you having to chase it.",
  },
];

function FAQCard({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-sm sm:text-[15px] font-semibold text-zinc-50">
          {item.question}
        </span>
        {open ? (
          <ChevronUp className="h-4 w-4 flex-shrink-0 text-emerald-300" />
        ) : (
          <ChevronDown className="h-4 w-4 flex-shrink-0 text-emerald-300" />
        )}
      </button>
      <div
        className={`mt-2 text-xs sm:text-[13px] text-zinc-300 transition-all duration-200 ${
          open ? "max-h-40 sm:max-h-56 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="pt-2 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">FAQ</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight text-zinc-50`}
          >
            Straight answers about partnering with <G>LocalLink</G>.
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-zinc-300">
            If you’re wondering what “AI employees” actually look like in your business, how the
            Blueprint works, or what it feels like to hand us the backend, you’re in the right
            place.
          </p>
        </div>
      </section>

      {/* FAQ GRID */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {FAQS.map((item) => (
              <FAQCard key={item.question} item={item} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-zinc-300">
              Still unsure if this is the right move for your business?
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/start"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 sm:w-auto"
              >
                Book a strategy session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/preview"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-black/40 px-7 py-3 text-sm font-semibold text-zinc-50 backdrop-blur-sm transition hover:border-emerald-300 hover:text-emerald-100 sm:w-auto"
              >
                Start with a free AI Systems Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
