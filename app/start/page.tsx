"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

/* --------------------------- Shared Page Shell -------------------------- */

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex h-14 items-center justify-between border-b border-white/10 bg-black/80 px-5 backdrop-blur">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500">
            <div className="h-3 w-3 rounded-md border-2 border-white/90 border-b-transparent" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            LocalLink Digital
          </span>
        </Link>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          Project Start
        </span>
      </header>
      {children}
    </div>
  );
}

/* ---------------------------- Main Page Logic ---------------------------- */

type ProjectFormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  websiteUrl: string;
  businessAddress: string;
  logoUrl: string;
  projectNotes: string;
};

export default function StartProjectPage() {
  const [form, setForm] = useState<ProjectFormState>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    businessAddress: "",
    logoUrl: "",
    projectNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: when you're ready, send `form` to Supabase / API route here.

    setSubmitted(true);
    setLoading(false);

    // Later, you can redirect to a payment page here if you want:
    // window.location.href = "/payment";
  };

  const scrollToForm = () => {
    const el = document.getElementById("project-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageShell>
      <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-5xl flex-col px-5 py-10 lg:px-8">
        {/* BIG HERO SECTION */}
        <header className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Next step
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Build Your Website
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-lg text-zinc-300">
            You&apos;ve seen your homepage concept. Now choose how you want to
            start your project and we&apos;ll turn that direction into a
            production-ready site.
          </p>
        </header>

        {/* TWO GIANT CTA CARDS */}
        <section className="mb-16 grid gap-6 md:grid-cols-2">
          {/* BOOK A CALL CARD */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/40 hover:bg-white/10">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <h2 className="text-2xl font-semibold text-white">
                📞 Book a Call
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                A focused 20–30 minute intro call to walk through your concept,
                confirm scope, and lock in timelines.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>• Review your concept live</li>
                <li>• Get clear pricing &amp; timeline</li>
                <li>• Ask questions and explore options</li>
              </ul>

              <a
                href="https://calendly.com/your-link/intro-call" // TODO: replace with your real booking link
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,250,250,0.35)] hover:bg-zinc-200"
              >
                Book an Intro Call
              </a>
              <p className="mt-2 text-[11px] text-zinc-400">
                Best if you like to talk things through and move fast.
              </p>
            </div>
          </div>

          {/* START WITH FORM CARD */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/40 hover:bg-white/10">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <h2 className="text-2xl font-semibold text-white">
                📝 Start With a Form
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                Prefer to skip the call for now? Share your project details and
                we&apos;ll follow up with a clear outline and next steps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>• Ideal if you&apos;re busy</li>
                <li>• Put everything in writing</li>
                <li>• Get a structured project breakdown</li>
              </ul>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.55)] hover:bg-emerald-300"
              >
                Fill Out Project Form
              </button>
              <p className="mt-2 text-[11px] text-zinc-400">
                We&apos;ll review this alongside your concept and respond with a
                detailed plan.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT FORM */}
        <section
          id="project-form"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Project details form
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            This helps us scope your build properly and line it up with the
            homepage direction you just saw. The more detail you share, the
            smoother and faster the project will move.
          </p>

          {submitted ? (
            <div className="mt-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              Thanks for sharing your project details. We&apos;ll review
              everything alongside your concept preview and follow up with next
              steps and a payment link.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Your name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@business.com"
                    className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Business name
                  </label>
                  <input
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    required
                    placeholder="Your Business Name"
                    className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300">
                  Current website (if you have one)
                </label>
                <input
                  name="websiteUrl"
                  value={form.websiteUrl}
                  onChange={handleChange}
                  placeholder="https://yourcurrentwebsite.com"
                  className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Business address
                  </label>
                  <textarea
                    name="businessAddress"
                    value={form.businessAddress}
                    onChange={handleChange}
                    rows={3}
                    placeholder="123 Main Street, City, ST 12345"
                    className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">
                    Logo (URL)
                  </label>
                  <input
                    name="logoUrl"
                    value={form.logoUrl}
                    onChange={handleChange}
                    placeholder="Paste a link to your logo file"
                    className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-black/40 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300">
                  Anything else we should know?
                </label>
                <textarea
                  name="projectNotes"
                  value={form.projectNotes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Specific pages you need, special features (booking, forms, menus, etc.), or anything else that would help us scope this properly."
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-8 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit project details"}
              </button>
            </form>
          )}
        </section>
      </main>
    </PageShell>
  );
}
