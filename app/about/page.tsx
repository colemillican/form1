"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function AboutPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">ABOUT US</p>

          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            A modern studio built for <G>small businesses</G>.
          </h1>

          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink Studio is a small, mission-driven digital studio out of Auburn, Alabama —
            built to help local businesses stay modern, competitive, and confident in a rapidly
            changing world of websites, marketing, and AI.
          </p>
        </div>
      </section>

      {/* MISSION COPY */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-8 space-y-8 text-zinc-300 leading-relaxed">
          
          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              Built for long-term partnerships — not quick projects.
            </h2>

            <p>
              We don’t think like a freelance designer or a one-and-done agency. We act as a 
              dedicated partner in your corner — keeping your website sharp, your funnels working, 
              and your business aligned with the newest tech and AI tools. Your business keeps 
              evolving, and our job is to make sure your digital presence evolves with it.
            </p>

            <p>
              Our mission isn’t to sell trends or overwhelm you with dashboards. We take care of 
              the technical work, while you stay focused on what you do best: running your business, 
              serving customers, and growing your team. Meanwhile, we keep an eye on what’s coming, 
              and make sure you’re never falling behind.
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              You stay in control — always.
            </h2>

            <p>
              Transparency is a core value at LocalLink Studio. You maintain full ownership of your 
              content, your branding, your domain, and your direction. We don’t “lock you in,” hide 
              access, or make changes behind your back. You stay in the driver’s seat; we simply provide 
              the engine.
            </p>

            <p>
              Every partnership involves shared decision-making. You’ll always know what’s happening, 
              why it matters, and how it affects your business. We guide, support, build, and maintain — 
              but you determine the path forward.
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white`}
            >
              Helping businesses stay modern, clear, and competitive.
            </h2>

            <p>
              Most small businesses don’t have time to keep up with new marketing tools, website 
              standards, AI workflows, automation, and customer funnel strategies. That’s where 
              we come in — translating modern technology into simple, useful tools that genuinely 
              help your business grow.
            </p>

            <p>
              Whether it's a beautiful website, a streamlined booking flow, or practical AI that
              handles your busywork — our goal is to give you the same digital leverage that big 
              companies have, without the complexity or cost.
            </p>
          </div>
        </div>
      </section>

      {/* AI TOOL PREVIEW */}
      <section className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8">
          <h2
            className={`${heroFont.className} text-[24px] sm:text-[28px] font-semibold tracking-tight text-white text-center mb-8`}
          >
            A growing suite of <G>practical AI tools</G> for local business.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Tool 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 font-bold text-lg mb-2">Nexus AI Assistant</div>
              <p className="text-sm text-zinc-300">
                A friendly AI “team member” that answers questions, organizes info, and handles
                tedious admin tasks so you can stay focused on your work.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 font-bold text-lg mb-2">LeadFlow Finder</div>
              <p className="text-sm text-zinc-300">
                AI-powered lead generator that captures inquiries, qualifies customers, and makes 
                sure you never miss an opportunity.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 font-bold text-lg mb-2">Insight Engine</div>
              <p className="text-sm text-zinc-300">
                Simple analytics interpreted for humans — weekly updates that explain what’s working 
                on your site and what could convert better.
              </p>
            </div>

            {/* Tool 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 font-bold text-lg mb-2">TaskPilot Automations</div>
              <p className="text-sm text-zinc-300">
                Lightweight automations that send reminders, confirm bookings, follow up with 
                customers, and streamline repetitive work.
              </p>
            </div>

            {/* Tool 5 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-300 font-bold text-lg mb-2">StudioSync Updates</div>
              <p className="text-sm text-zinc-300">
                Automatic content and performance updates to keep your website modern without you 
                lifting a finger.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/preview"
              className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-10 py-3 hover:bg-zinc-200 transition"
            >
              Start your free preview
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
