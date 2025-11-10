"use client";

import React from "react";
import SiteChrome, { G } from "../components/SiteChrome";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const qa = [
    {
      q: "How long does a project take?",
      a: "Most small business sites ship in 2–3 weeks once we have content (text, photos, logo). Rush options available.",
    },
    {
      q: "Can you update my current site instead of rebuilding?",
      a: "Yes. If your stack allows it, we can refresh design, content, and performance without a full rebuild.",
    },
    {
      q: "Do you handle hosting and domains?",
      a: "We’ll set up reliable hosting and DNS with you and keep ownership in your name. We prioritize speed and security.",
    },
    {
      q: "What happens after launch?",
      a: "We offer simple care plans for updates, tweaks, and SEO basics so your site stays fresh and effective.",
    },
  ];

  return (
    <SiteChrome>
      <section className="bg-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Questions we get <G>a lot</G>
          </h1>
          <div className="mt-6 mx-auto max-w-3xl space-y-4">
            {qa.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 open:bg-white/10 transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{item.q}</span>
                  <HelpCircle className="size-5 text-zinc-400 group-open:rotate-180 transition" />
                </summary>
                <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
