"use client";

import SiteChrome from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-zinc-300">This is a minimal test page to satisfy TypeScript.</p>
        </div>
      </section>
    </SiteChrome>
  );
}
