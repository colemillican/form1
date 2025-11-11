"use client";

import React from "react";
import SiteChrome from "../components/SiteChrome";
import { ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <SiteChrome>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 sm:px-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Thanks — we’ll be in touch <G>shortly</G>
          </h1>
          <p className="mt-3 text-zinc-400">We’ll review your details and send a quick follow-up with next steps.</p>
          <div className="mt-8">
            <a href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10">
              See pricing <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
