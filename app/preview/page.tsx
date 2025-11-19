"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { ArrowRight, Sparkles, Workflow, ShieldCheck, Brain } from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

type PreviewPhase = "form" | "loading" | "blueprint";

type FormState = {
  businessName: string;
  industry: string;
  email: string;
  website: string;
  teamSize: string;
  monthlyLeads: string;
  mainBottleneck: string;
  currentTools: string;
  dreamOutcome: string;
  extraContext: string;
};

type AIEmployee = {
  name: string;
  role: string;
  responsibilities: string[];
};

type ThirtyDayPhase = {
  phase: string;
  title: string;
  description: string;
  bullets: string[];
};

type Blueprint = {
  headline: string;
  summary: string;
  aiEmployees: AIEmployee[];
  workflowOverview: string;
  directionalBenefits: string[];
  thirtyDayPlan: ThirtyDayPhase[];
  industryNotes: string;
  nextSteps: string;
};

const initialForm: FormState = {
  businessName: "",
  industry: "",
  email: "",
  website: "",
  teamSize: "",
  monthlyLeads: "",
  mainBottleneck: "",
  currentTools: "",
  dreamOutcome: "",
  extraContext: "",
};

export default function PreviewPage() {
  const [phase, setPhase] = useState<PreviewPhase>("form");
  const [form, setForm] = useState<FormState>(initialForm);
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.email.trim()) {
      setError("Please enter an email so we can send your Blueprint.");
      return;
    }

    try {
      setPhase("loading");

      const res = await fetch("/api/preview-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "AI_SYSTEMS_BLUEPRINT",
          form,
        }),
      });

      if (!res.ok) {
        throw new Error("Preview generation failed");
      }

      const data = (await res.json()) as Blueprint;
      setBlueprint(data);
      setPhase("blueprint");
    } catch (err) {
      console.error(err);
      setError("Something went wrong generating your Blueprint. Please try again.");
      setPhase("form");
    }
  }

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">AI SYSTEMS BLUEPRINT</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight text-zinc-50`}
          >
            A directional <G>AI employee</G> plan for your business—before you commit.
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-zinc-300">
            Share how your operation actually runs today. We&apos;ll use AI to draft a proposed
            systems blueprint: a small team of AI employees, the workflows they&apos;d own, and how
            they&apos;d plug into the tools you already use. It&apos;s a first-pass direction, not a
            final scope or a promise.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* LEFT: FORM / LOADING */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/15 text-[11px] font-bold text-emerald-300">
                      1
                    </span>
                    <span>Tell us how things work today</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                    <Sparkles className="h-3 w-3" />
                    AI-drafted direction
                  </span>
                </div>

                {phase === "loading" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-4 h-10 w-10 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                    <p className="text-sm text-zinc-300">
                      Drafting a first-pass AI systems blueprint based on what you shared…
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Business name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={form.businessName}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="LocalLink Fitness Co."
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Industry
                        </label>
                        <input
                          type="text"
                          name="industry"
                          value={form.industry}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="Home services, gym, clinic, agency…"
                        />
                      </div>
                    </div>

                    {/* Row 2 – email + website */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Website (optional)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={form.website}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>

                    {/* Row 3 – size + volume */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Team size
                        </label>
                        <input
                          type="text"
                          name="teamSize"
                          value={form.teamSize}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="Just me, 3–5, 10+, etc."
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                          Monthly leads or new inquiries
                        </label>
                        <input
                          type="text"
                          name="monthlyLeads"
                          value={form.monthlyLeads}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                          placeholder="Rough estimate is fine"
                        />
                      </div>
                    </div>

                    {/* Bottleneck */}
                    <div>
                      <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                        Biggest bottleneck right now
                      </label>
                      <textarea
                        name="mainBottleneck"
                        value={form.mainBottleneck}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                        placeholder="Where do things break down, slow down, or fall through the cracks?"
                      />
                    </div>

                    {/* Current tools */}
                    <div>
                      <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                        Tools you&apos;re using today
                      </label>
                      <textarea
                        name="currentTools"
                        value={form.currentTools}
                        onChange={handleChange}
                        rows={2}
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                        placeholder="CRMs, scheduling tools, inboxes, spreadsheets, project tools, etc."
                      />
                    </div>

                    {/* Dream outcome */}
                    <div>
                      <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                        If this worked well, what would change?
                      </label>
                      <textarea
                        name="dreamOutcome"
                        value={form.dreamOutcome}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                        placeholder="For example: faster responses, fewer late nights, less hiring pressure, clearer pipeline, more time to think and lead."
                      />
                    </div>

                    {/* Extra context */}
                    <div>
                      <label className="mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                        Anything else we should know?
                      </label>
                      <textarea
                        name="extraContext"
                        value={form.extraContext}
                        onChange={handleChange}
                        rows={2}
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                        placeholder="Optional—but helpful. Unique constraints, sensitive workflows, non-negotiables."
                      />
                    </div>

                    {error && <p className="text-[12px] text-red-400">{error}</p>}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 sm:w-auto"
                      >
                        Generate my AI Systems Blueprint
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <p className="mt-2 text-[11px] text-zinc-500">
                        We&apos;ll email your Blueprint and, if it looks like a fit, refine it with
                        you on a short strategy call. No spam, no pressure.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: BLUEPRINT PREVIEW */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <G>LocalLink</G>
                    <span>Directional Blueprint</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                    <Brain className="h-3 w-3" />
                    AI Systems Draft
                  </span>
                </div>

                {phase === "form" && (
                  <div className="space-y-4 text-sm text-zinc-300">
                    <p>
                      After you submit the form, this panel will show a proposed AI Systems Blueprint
                      for your operation—not a canned template and not a guarantee. You&apos;ll see:
                    </p>
                    <ul className="space-y-2 text-[13px] text-zinc-300">
                      <li>• 2–3 AI employee roles we&apos;d start with and what they&apos;d own.</li>
                      <li>• How they plug into the tools and workflows you already use.</li>
                      <li>• The key operational benefits we&apos;re aiming for (clarity, speed, less chaos).</li>
                      <li>• A first 30-day rollout broken into clear, concrete phases.</li>
                    </ul>
                    <p className="text-[12px] text-zinc-500">
                      Think of it as a first-pass direction you can react to. On a strategy call, we
                      pressure-test it against your real world before anything is built.
                    </p>
                  </div>
                )}

                {phase === "loading" && (
                  <div className="space-y-3 text-sm text-zinc-300">
                    <p className="font-semibold text-zinc-50">
                      Drafting your AI Systems Blueprint…
                    </p>
                    <p className="text-[13px] text-zinc-300">
                      We&apos;re using your answers to sketch a conservative starting point for AI
                      employees in your operation—roles, workflows, and directional benefits.
                    </p>
                  </div>
                )}

                {phase === "blueprint" && blueprint && (
                  <div className="space-y-5 text-sm text-zinc-200">
                    {/* Headline + summary */}
                    <div>
                      <h2
                        className={`${heroFont.className} text-[17px] font-semibold text-zinc-50`}
                      >
                        {blueprint.headline}
                      </h2>
                      <p className="mt-1 text-[13px] text-zinc-300">{blueprint.summary}</p>
                    </div>

                    {/* Proposed AI employees */}
                    <div>
                      <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        Proposed AI employees
                      </h3>
                      <div className="mt-2 space-y-3">
                        {blueprint.aiEmployees.map((emp, idx) => (
                          <div
                            key={`${emp.name}-${idx}`}
                            className="rounded-xl border border-white/10 bg-black/50 p-3"
                          >
                            <p className="text-[13px] font-semibold text-zinc-50">
                              {emp.name}
                            </p>
                            <p className="text-[12px] text-zinc-400">{emp.role}</p>
                            {emp.responsibilities?.length > 0 && (
                              <ul className="mt-2 space-y-1 text-[12px] text-zinc-300">
                                {emp.responsibilities.map((r, rIdx) => (
                                  <li key={rIdx}>• {r}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Workflow + benefits */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                          How it would run day to day
                        </h3>
                        <p className="mt-1 text-[13px] text-zinc-300">
                          {blueprint.workflowOverview}
                        </p>
                      </div>

                      {blueprint.directionalBenefits && blueprint.directionalBenefits.length > 0 && (
                        <div>
                          <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            Directional benefits
                          </h3>
                          <ul className="mt-1 space-y-1 text-[12px] text-zinc-300">
                            {blueprint.directionalBenefits.map((b, idx) => (
                              <li key={idx}>• {b}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* 30-day plan */}
                    {blueprint.thirtyDayPlan && blueprint.thirtyDayPlan.length > 0 && (
                      <div>
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                          First 30 days (proposed)
                        </h3>
                        <div className="mt-2 space-y-2">
                          {blueprint.thirtyDayPlan.map((phaseItem, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-white/10 bg-black/50 p-3"
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                                {phaseItem.phase}
                              </p>
                              <p className="text-[13px] font-semibold text-zinc-50">
                                {phaseItem.title}
                              </p>
                              <p className="mt-1 text-[12px] text-zinc-300">
                                {phaseItem.description}
                              </p>
                              {phaseItem.bullets?.length > 0 && (
                                <ul className="mt-2 space-y-1 text-[12px] text-zinc-300">
                                  {phaseItem.bullets.map((b, bIdx) => (
                                    <li key={bIdx}>• {b}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Industry notes + next steps */}
                    <div className="space-y-3 border-t border-white/10 pt-4">
                      <div>
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                          Notes specific to your world
                        </h3>
                        <p className="mt-1 text-[13px] text-zinc-300">
                          {blueprint.industryNotes}
                        </p>
                      </div>
                      <div className="space-y-3 text-[13px] text-zinc-200">
                        <p className="font-semibold text-zinc-50">Next steps</p>
                        <p className="text-zinc-300">{blueprint.nextSteps}</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Link
                            href="/start"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-black shadow-[0_16px_40px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 sm:w-auto"
                          >
                            Book a strategy session
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          <p className="text-[11px] text-zinc-500">
                            On that call, we stress-test this Blueprint against your real workflows
                            and adjust it before anything is built.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Reassurance block */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-[12px] text-zinc-300">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  What this is (and isn&apos;t)
                </p>
                <p>
                  This is a directional draft of how AI employees could show up in your business—
                  based on what you share and grounded in your existing tools and workflows. It&apos;s
                  not a final scope or a promise. The point is to give you a clear starting point
                  before you spend a dollar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
