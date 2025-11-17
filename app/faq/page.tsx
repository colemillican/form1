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
            We&apos;re a small startup out of Auburn, Alabama, partnering long-term with local
            businesses. Here&apos;s how our preview, pricing, and AI tools actually work in
            practice.
          </p>
        </div>
      </section>

      {/* Q&A + visual */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          {/* Q&A */}
          <div className="space-y-7 text-zinc-300 text-sm sm:text-[15px]">
            {/* Preview flow */}
            <div>
              <div className="font-semibold text-zinc-100">
                How does the free homepage preview work?
              </div>
              <p className="mt-1">
                You fill out a short form with details about your business and goals. We take that
                and build a conceptual homepage direction—story, structure, and visual feel—that
                we show you inside our preview portal. If it feels like a fit, you can start a
                project from there. If not, no hard feelings.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="font-semibold text-zinc-100">
                How long does a typical site take to launch?
              </div>
              <p className="mt-1">
                Sites go live within 7 days after we start the project. That includes
                design, build, and a round or two of feedback. If you have a tight deadline, we&apos;ll
                tell you exactly what&apos;s realistic based on scope.
              </p>
            </div>

            {/* What they need vs you */}
            <div>
              <div className="font-semibold text-zinc-100">
                What do you need from me to get started?
              </div>
              <p className="mt-1">
                A short preview form, a quick kickoff conversation, your logo, any photos you want
                us to use, and a clear description of your services. You don&apos;t need to write
                perfect copy or plan every page—we guide that with you.
              </p>
            </div>

            {/* Pricing model */}
            <div>
              <div className="font-semibold text-zinc-100">
                Why a monthly subscription instead of a one-time fee?
              </div>
              <p className="mt-1">
                Most websites go stale because they&apos;re treated like a one-off project. The
                subscription model lets us design, build, host, and actively maintain your site over
                time—updating copy, swapping photos, tuning funnels, and keeping things fast and
                secure—without surprise invoices for every small change.
              </p>
            </div>

            {/* Tiers & AI */}
            <div>
              <div className="font-semibold text-zinc-100">
                What&apos;s the difference between the tiers and the AI suite?
              </div>
              <p className="mt-1">
                All plans include website design, hosting, upkeep, basic SEO, and optimized sales
                funnels. Our middle and top tiers unlock our LocalLink AI tools—things like an AI
                front desk assistant, lead qualification flows, and simple performance summaries.
                The top tier also comes with priority support and first access to new tools as we
                release them.
              </p>
            </div>

            {/* Ownership / leaving */}
            <div>
              <div className="font-semibold text-zinc-100">
                Do I own my content? Can I leave later if I need to?
              </div>
              <p className="mt-1">
                Yes. You own your content, branding, and assets. If you ever need to move in a
                different direction, we don&apos;t hold your site hostage. We&apos;ll help you
                transition cleanly instead of locking you in.
              </p>
            </div>

            {/* Who it's for */}
            <div>
              <div className="font-semibold text-zinc-100">
                Who is LocalLink a good fit for?
              </div>
              <p className="mt-1">
                We&apos;re built for local businesses that care about their work but don&apos;t
                have the time or desire to babysit websites and tech. Think gyms, trades and home
                services, boutique shops, and small professional services. If you want a sharp,
                modern site and a partner to manage it, we&apos;re probably a good fit.
              </p>
            </div>

            {/* Who it's not for */}
            <div>
              <div className="font-semibold text-zinc-100">
                Who is LocalLink <span className="italic">not</span> a good fit for?
              </div>
              <p className="mt-1">
                If you&apos;re looking for a huge corporate rebrand, a complex web app, or a
                one-time build with no ongoing relationship, we&apos;re probably not your people.
                We focus on being a lean, long-term digital partner for smaller teams.
              </p>
            </div>

            {/* AI concerns */}
            <div>
              <div className="font-semibold text-zinc-100">
                Do I have to use the AI tools if I just want a website?
              </div>
              <p className="mt-1">
                No. You can stay on a plan that focuses purely on design, hosting, upkeep, SEO, and
                funnels. The AI layer is there when you&apos;re ready for it—especially if you want
                to reduce admin work and tighten follow-up without hiring more staff.
              </p>
            </div>

            {/* Next step */}
            <div>
              <div className="font-semibold text-zinc-100">
                What&apos;s the best next step if I&apos;m interested?
              </div>
              <p className="mt-1">
                Start with the free preview. It gives you something concrete to react to and lets
                both of us see if the partnership makes sense. From there, we can lock in a plan and
                timeline if it feels right.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
              alt="Futuristic interface and city skyline"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-5 text-xs sm:text-sm text-zinc-200">
              <div className="font-semibold mb-1">A small team, thinking long-term</div>
              <p>
                LocalLink Digital is a young company on purpose. We&apos;re not here to churn out
                quick templates and disappear—we&apos;re looking for a handful of local partners to
                grow with as the web and AI keep evolving.
              </p>
              <button
                onClick={() => (window.location.href = "/preview")}
                className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-[11px] font-semibold text-black hover:bg-zinc-200"
              >
                Start with a free preview
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
