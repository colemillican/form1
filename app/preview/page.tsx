"use client";

import React, { useState, FormEvent } from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Workflow,
  PhoneCall,
  Clock,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

type Phase = "form" | "loading" | "blueprint";

type FormState = {
  businessName: string;
  industry: string;
  teamSize: string;
  mainChannel: string;
  painPoints: string[];
  budgetRange: string;
  email: string;
};

type AgentRecommendation = {
  name: string;
  role: string;
  description: string;
  impact: string;
  kpi: string;
};

type Speaker = "Customer" | "AI Assistant";

type ScriptLine = {
  speaker: Speaker;
  text: string;
};

type Blueprint = {
  summaryHeadline: string;
  summaryBody: string;
  bottlenecks: string[];
  agents: AgentRecommendation[];
  flowOverview: string;
  sampleScript: {
    intro: string;
    lines: ScriptLine[];
  };
  roi: {
    hoursSavedPerMonth: number;
    valueOfHours: number;
    lostLeadsRecovered: number;
    confidenceNote: string;
  };
  nextSteps: string[];
};

const painPointOptions = [
  { id: "missedCalls", label: "Missed calls & slow response" },
  { id: "noFollowUp", label: "Leads falling through the cracks" },
  { id: "manualScheduling", label: "Manual scheduling & reminders" },
  { id: "slowQuotes", label: "Slow quotes & estimates" },
  { id: "reviews", label: "Not collecting enough reviews" },
  { id: "ownerBrain", label: "Everything lives in the owner’s head" },
];

const teamSizeOptions = ["Solo operator", "2–5 people", "6–15 people", "16+ people"];

const budgetOptions = [
  "I’m just exploring",
  "Under $1,500 / month",
  "$1,500–$3,000 / month",
  "$3,000–$6,000 / month",
  "$6,000+ / month",
];

function buildBlueprint(form: FormState): Blueprint {
  const name = form.businessName || "Your business";
  const industry = form.industry || "your industry";

  // --- Bottlenecks ---
  const bottlenecks: string[] = [];
  if (form.painPoints.includes("missedCalls")) {
    bottlenecks.push(
      "Inbound calls and messages aren’t answered consistently, which means missed revenue and frustrated customers."
    );
  }
  if (form.painPoints.includes("noFollowUp")) {
    bottlenecks.push(
      "Leads are not followed up with in a structured way, so warm prospects quietly disappear."
    );
  }
  if (form.painPoints.includes("manualScheduling")) {
    bottlenecks.push(
      "Scheduling, rescheduling, and reminders are handled manually, draining time from higher-value work."
    );
  }
  if (form.painPoints.includes("slowQuotes")) {
    bottlenecks.push(
      "Quotes and estimates take too long to prepare, so fast-moving customers choose competitors."
    );
  }
  if (form.painPoints.includes("reviews")) {
    bottlenecks.push(
      "Happy customers aren’t consistently asked for reviews, limiting social proof and organic growth."
    );
  }
  if (form.painPoints.includes("ownerBrain")) {
    bottlenecks.push(
      "Key knowledge lives in the owner’s head, making it hard to scale or delegate confidently."
    );
  }

  if (bottlenecks.length === 0) {
    bottlenecks.push(
      "Operations rely heavily on manual effort, which caps growth and makes the business harder to run than it needs to be."
    );
  }

  // --- Agents ---
  const agents: AgentRecommendation[] = [];

  if (form.painPoints.includes("missedCalls") || form.painPoints.includes("noFollowUp")) {
    agents.push({
      name: "Lead Intake & Phone Agent",
      role: "24/7 first point of contact",
      description:
        "Answers calls and messages instantly, collects key details, and routes qualified leads to the right person or system.",
      impact:
        "Virtually eliminates missed calls and dramatically cuts response times, improving close rates and customer experience.",
      kpi: "Response time to new leads, contact rate, booked jobs from inbound calls.",
    });
  }

  if (form.painPoints.includes("manualScheduling")) {
    agents.push({
      name: "Scheduling & Reminders Coordinator",
      role: "Owns the calendar",
      description:
        "Books, reschedules, and confirms appointments automatically across phone, text, and web forms.",
      impact:
        "Removes back-and-forth scheduling and reduces no-shows with smart reminders and confirmations.",
      kpi: "No-show rate, time spent on scheduling, number of appointments booked.",
    });
  }

  if (form.painPoints.includes("slowQuotes")) {
    agents.push({
      name: "Smart Estimator Agent",
      role: "Builds quotes using your rules",
      description:
        "Uses your pricing logic and templates to create clean, consistent quotes and send them to customers in minutes.",
      impact:
        "Shortens the quote turnaround time so you win more jobs before competitors even respond.",
      kpi: "Quote turnaround time, quote-to-close rate, average job value.",
    });
  }

  if (form.painPoints.includes("noFollowUp")) {
    agents.push({
      name: "Lead Nurture & Follow-Up Agent",
      role: "Keeps leads warm automatically",
      description:
        "Follows up with interested leads over days and weeks via SMS and email, checking in and answering simple questions.",
      impact:
        "Ensures no lead is forgotten, increases conversion on existing demand without extra ad spend.",
      kpi: "Follow-up touchpoints per lead, conversion rate from warm leads, cost per acquired customer.",
    });
  }

  if (form.painPoints.includes("reviews")) {
    agents.push({
      name: "Reviews & Reputation Builder",
      role: "Turns happy customers into public proof",
      description:
        "Reaches out after jobs are completed, asks for reviews on the platforms that matter, and handles simple replies.",
      impact:
        "Builds a stronger online presence that makes you the obvious choice before you even speak to a prospect.",
      kpi: "Review volume, average rating, new customers citing reviews.",
    });
  }

  if (form.painPoints.includes("ownerBrain") || agents.length === 0) {
    agents.push({
      name: "Knowledge & SOP Copilot",
      role: "Turns your brain into a system",
      description:
        "Captures your processes, FAQs, and best practices so every AI employee works consistently the way you want.",
      impact:
        "Makes your operations repeatable and scalable, so growth doesn’t depend on you being in every conversation.",
      kpi: "Tasks handled without owner intervention, onboarding time for new staff/agents.",
    });
  }

  // --- ROI estimates (simple heuristic) ---
  let hoursSavedPerMonth = 30 + form.painPoints.length * 10;
  if (form.teamSize === "6–15 people") hoursSavedPerMonth += 20;
  if (form.teamSize === "16+ people") hoursSavedPerMonth += 40;

  const valueOfHours = hoursSavedPerMonth * 50; // assume $50/hr blended value
  const lostLeadsRecovered = 10 + form.painPoints.length * 5;

  const summaryHeadline = `${name} can offload a full-time workload to AI in the next 60–90 days.`;

  const summaryBody = `${name} is operating in ${industry}, where speed, responsiveness, and consistency win. Right now, too much of that work is happening manually. By installing a small stack of AI employees, you can capture more of the demand you’re already generating, while pulling the owner and core team out of low-leverage tasks.`;

  const flowOverview =
    "Incoming calls, texts, and web leads are captured by your Lead Intake & Phone Agent. Qualified opportunities are handed to your Scheduling or Estimator agents, which book the job or send a polished quote. From there, follow-up and reviews are handled automatically, feeding clean data into your CRM so you always know what’s happening without chasing people.";

  const lines: ScriptLine[] = [
    {
      speaker: "Customer",
      text: "Hey, I found you online. Do you have any availability this week for a quote?",
    },
    {
      speaker: "AI Assistant",
      text: `Absolutely, thanks for reaching out to ${name}. I can help with that. What kind of work are you looking to get done?`,
    },
    {
      speaker: "Customer",
      text: "We need someone to come look at a leak and maybe quote replacing some old fixtures.",
    },
    {
      speaker: "AI Assistant",
      text: "Got it. I’ll grab a few quick details and then I can get you on the schedule. What’s the address for the job?",
    },
    {
      speaker: "AI Assistant",
      text: "Perfect. We have availability on Thursday at 10am or Friday at 2pm. Which works better for you?",
    },
    {
      speaker: "Customer",
      text: "Thursday at 10 works.",
    },
    {
      speaker: "AI Assistant",
      text: "You’re all set for Thursday at 10am. I’ll send a confirmation text and a reminder before we arrive. If anything changes, you can just reply to that message. Sound good?",
    },
  ];

  const sampleScript: Blueprint["sampleScript"] = {
    intro: `Here’s how your AI Lead Intake Agent might handle a real call for ${name}:`,
    lines,
  };

  const roi = {
    hoursSavedPerMonth,
    valueOfHours,
    lostLeadsRecovered,
    confidenceNote:
      "These are directional estimates based on what we see across similar local businesses. Your actual numbers could be higher if you’re currently missing a lot of calls or responding slowly to leads.",
  };

  const nextSteps = [
    "Clarify your top 2–3 processes to automate first (leads, scheduling, quoting, or reviews).",
    "Map your existing tools (phone system, CRM, calendar, invoicing) so we can integrate instead of replace.",
    "Start with 2–3 core AI employees, prove the ROI in 60–90 days, then layer on more automation where it makes sense.",
  ];

  return {
    summaryHeadline,
    summaryBody,
    bottlenecks,
    agents,
    flowOverview,
    sampleScript,
    roi,
    nextSteps,
  };
}

export default function PreviewBlueprintPage() {
  const [phase, setPhase] = useState<Phase>("form");
  const [formState, setFormState] = useState<FormState>({
    businessName: "",
    industry: "",
    teamSize: "2–5 people",
    mainChannel: "",
    painPoints: [],
    budgetRange: "I’m just exploring",
    email: "",
  });

  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePainPointToggle = (id: string) => {
    setFormState((prev) => {
      const selected = new Set(prev.painPoints);
      if (selected.has(id)) {
        selected.delete(id);
      } else {
        selected.add(id);
      }
      return { ...prev, painPoints: Array.from(selected) };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPhase("loading");

    setTimeout(() => {
      const bp = buildBlueprint(formState);
      setBlueprint(bp);
      setPhase("blueprint");
    }, 900);
  };

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-zinc-950">
        <div className="max-w-6xl mx-auto px-4 pb-12 pt-16 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">
            {/* Left: Headline + Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200 mb-4">
                <Sparkles className="h-3 w-3" />
                AI Systems Blueprint
              </div>
              <h1
                className={`${heroFont.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4`}
              >
                See how AI employees would actually
                <span className="text-emerald-400"> run your business</span>.
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl mb-6">
                Answer a few questions and we’ll generate a personalized AI Systems Blueprint
                showing the exact agents we’d install, what they’d handle, and how much time and
                money they could save you—before you ever hop on a call.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-zinc-300">
                <div className="inline-flex items-center gap-2">
                  <Brain className="h-4 w-4 text-emerald-400" />
                  <span>Designed for lean local teams</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-emerald-400" />
                  <span>Maps real operations, not just “ideas”</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>No obligation, just clarity</span>
                </div>
              </div>
            </div>

            {/* Right: Highlight card */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/40 via-emerald-400/0 to-sky-500/40 blur-2xl opacity-60" />
              <div className="relative rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <G />
                    <span>Preview Partnership</span>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                    <Clock className="h-3 w-3" />
                    <span>~60 seconds</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-200 mb-3">
                  “What would it look like if we gave you a small team of custom AI employees?”
                </p>
                <p className="text-xs text-zinc-400 mb-4">
                  Your blueprint breaks this down into real roles, tasks, and numbers—so it doesn’t
                  feel like a science project. It feels like a plan.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <PhoneCall className="h-3 w-3 text-emerald-400" />
                      <span className="font-medium text-zinc-100">Inbound calls</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      See how an AI receptionist could answer, qualify, and book jobs in your tone.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <LineChart className="h-3 w-3 text-emerald-400" />
                      <span className="font-medium text-zinc-100">Time & ROI</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Get a directional estimate of hours saved and value unlocked each month.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/5 to-zinc-900 px-4 py-3 text-[11px] text-emerald-100 border border-emerald-400/40">
                  “This is the closest thing to seeing the future of your operations without
                  wiring anything up yet.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + BLUEPRINT */}
      <section className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1.2fr)] items-start">
            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-zinc-100 tracking-wide">
                  Tell us how your business runs today
                </h2>
                <span className="text-[11px] text-zinc-400">No fluff — just the essentials.</span>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">
                      Business name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formState.businessName}
                      onChange={handleInputChange}
                      placeholder="Acme Plumbing & HVAC"
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formState.industry}
                      onChange={handleInputChange}
                      placeholder="Plumbing, HVAC, roofing, dental, etc."
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">Team size</label>
                    <select
                      name="teamSize"
                      value={formState.teamSize}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    >
                      {teamSizeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">
                      Main way new customers find you
                    </label>
                    <input
                      type="text"
                      name="mainChannel"
                      value={formState.mainChannel}
                      onChange={handleInputChange}
                      placeholder="Google, referrals, Facebook, etc."
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium text-zinc-300">
                    Where does the friction live right now?
                  </label>
                  <p className="text-[11px] text-zinc-500 mb-1">
                    Pick the issues that feel most real. We’ll design your AI employees around
                    these first.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {painPointOptions.map((opt) => {
                      const selected = formState.painPoints.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handlePainPointToggle(opt.id)}
                          className={`flex items-start gap-2 rounded-2xl border px-3 py-2 text-left text-[11px] ${
                            selected
                              ? "border-emerald-400/80 bg-emerald-400/10 text-emerald-50"
                              : "border-white/10 bg-zinc-950/40 text-zinc-300 hover:border-emerald-400/60 hover:bg-zinc-900"
                          }`}
                        >
                          <span
                            className={`mt-[2px] h-3 w-3 rounded-full border ${
                              selected
                                ? "border-emerald-300 bg-emerald-400/90"
                                : "border-zinc-600 bg-zinc-900"
                            }`}
                          />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">
                      What’s your rough budget comfort zone for this?
                    </label>
                    <select
                      name="budgetRange"
                      value={formState.budgetRange}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-zinc-300">
                      Email (optional — for sending a PDF copy)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="you@business.com"
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/70"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950 transition"
                  >
                    Generate my AI Systems Blueprint
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-2 text-[11px] text-zinc-500">
                    You’ll see your personalized blueprint on this page in under a minute. No sales
                    call required to get value.
                  </p>
                </div>
              </form>
            </div>

            {/* Blueprint / Loading */}
            <div className="space-y-4">
              {phase === "form" && (
                <div className="rounded-3xl border border-dashed border-white/15 bg-zinc-900/40 p-5 sm:p-6 text-sm text-zinc-300">
                  <h2 className="text-sm font-semibold text-zinc-100 mb-2">
                    Your AI Systems Blueprint will appear here
                  </h2>
                  <p className="text-[13px] text-zinc-400 mb-4">
                    Once you submit the form, we’ll draft a snapshot of how AI employees could plug
                    into your day-to-day operations — from first contact to booked job to review.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-[11px] text-zinc-400">
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-3">
                      <div className="mb-1 font-medium text-zinc-100">What you’ll see</div>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Top bottlenecks in your current flow</li>
                        <li>Recommended AI employee roles</li>
                        <li>High-level operations map</li>
                        <li>Sample customer conversation</li>
                        <li>Directional time & ROI estimate</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-3">
                      <div className="mb-1 font-medium text-zinc-100">How this helps</div>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Turns “AI” into concrete roles</li>
                        <li>Clarifies where to start first</li>
                        <li>Makes the partnership tangible</li>
                        <li>Frames the $2k/mo base as cheap</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {phase === "loading" && (
                <div className="rounded-3xl border border-emerald-400/50 bg-zinc-900/80 p-5 sm:p-6 shadow-2xl animate-pulse">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      Drafting your blueprint…
                    </span>
                  </div>
                  <p className="text-sm text-zinc-200 mb-2">
                    We’re mapping your bottlenecks to specific AI employees and estimating the time
                    and revenue they could unlock.
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    This is a quick simulation — the full partnership goes much deeper. But this
                    will give you a clear, honest first look.
                  </p>
                </div>
              )}

              {phase === "blueprint" && blueprint && (
                <div className="space-y-4">
                  {/* Executive summary */}
                  <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                        <Brain className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        Executive Summary
                      </p>
                    </div>
                    <h2 className="text-sm sm:text-base font-semibold text-zinc-50 mb-2">
                      {blueprint.summaryHeadline}
                    </h2>
                    <p className="text-[13px] text-zinc-300">{blueprint.summaryBody}</p>
                  </div>

                  {/* Bottlenecks + Agents */}
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                        Bottlenecks we see
                      </p>
                      <ul className="space-y-2 text-[13px] text-zinc-300">
                        {blueprint.bottlenecks.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 sm:p-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-1">
                        AI employees we’d start with
                      </p>
                      <div className="space-y-3">
                        {blueprint.agents.map((agent, i) => (
                          <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3"
                          >
                            <div className="flex justify-between gap-2 mb-1">
                              <div>
                                <p className="text-[13px] font-semibold text-zinc-50">
                                  {agent.name}
                                </p>
                                <p className="text-[11px] text-emerald-300">{agent.role}</p>
                              </div>
                            </div>
                            <p className="text-[11px] text-zinc-300 mb-1">{agent.description}</p>
                            <p className="text-[11px] text-zinc-400">
                              <span className="font-medium text-zinc-200">Impact: </span>
                              {agent.impact}
                            </p>
                            <p className="text-[11px] text-zinc-500 mt-1">
                              <span className="font-medium text-zinc-300">Watch: </span>
                              {agent.kpi}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flow + Call example */}
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Workflow className="h-4 w-4 text-emerald-400" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                          High-level operations flow
                        </p>
                      </div>
                      <p className="text-[13px] text-zinc-300 mb-3">{blueprint.flowOverview}</p>
                      <div className="mt-2 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Leads captured instantly</span>
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Jobs booked or quotes sent automatically</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Follow-up & reviews handled on autopilot</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <PhoneCall className="h-4 w-4 text-emerald-400" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                          Example call handled by your AI agent
                        </p>
                      </div>
                      <p className="text-[11px] text-zinc-400 mb-2">{blueprint.sampleScript.intro}</p>
                      <div className="space-y-2 text-[11px]">
                        {blueprint.sampleScript.lines.map((line, idx) => (
                          <div
                            key={idx}
                            className={`rounded-2xl border px-3 py-2 ${
                              line.speaker === "AI Assistant"
                                ? "border-emerald-400/40 bg-emerald-400/5 text-emerald-100"
                                : "border-white/10 bg-zinc-950/60 text-zinc-200"
                            }`}
                          >
                            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                              {line.speaker}
                            </div>
                            <div>{line.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ROI + Next steps */}
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
                    <div className="rounded-3xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-zinc-900 to-zinc-900/80 p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <LineChart className="h-4 w-4 text-emerald-300" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                          Directional time & ROI snapshot
                        </p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3 text-[13px] text-zinc-100 mb-3">
                        <div>
                          <p className="text-xs text-emerald-200 mb-1">Hours offloaded monthly</p>
                          <p className="text-xl font-semibold">
                            {blueprint.roi.hoursSavedPerMonth.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-emerald-200 mb-1">
                            Value of those hours (est.)
                          </p>
                          <p className="text-xl font-semibold">
                            ${blueprint.roi.valueOfHours.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-emerald-200 mb-1">
                            Leads saved / month (est.)
                          </p>
                          <p className="text-xl font-semibold">
                            {blueprint.roi.lostLeadsRecovered.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-[11px] text-emerald-100 mb-2">
                        Compared to a $2,000/mo base partnership, even conservative numbers make the
                        math hard to ignore.
                      </p>
                      <p className="text-[11px] text-emerald-200/80">
                        {blueprint.roi.confidenceNote}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                          If we were partnering next month, we’d…
                        </p>
                        <ul className="space-y-2 text-[13px] text-zinc-300 mb-3">
                          {blueprint.nextSteps.map((step, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-500" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/60 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/20"
                        >
                          Talk about building these AI employees
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <p className="mt-2 text-[11px] text-zinc-500">
                          On the call, we’d refine this blueprint into a concrete build plan tied to
                          your exact tools and team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
