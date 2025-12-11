// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050608] text-slate-100">
      {/* Background gradient + vignette */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#050608] to-black" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 mix-blend-overlay" />

      {/* Page wrapper */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <header className="mb-10 flex items-center justify-between border-b border-slate-800/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-amber-500/60 bg-gradient-to-br from-[#0f1013] to-black shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              <div className="h-4 w-4 border-l-2 border-b-2 border-amber-400/90" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-amber-400/90">
                IRONGATE
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Systems
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 md:flex">
            <a href="#how-it-works" className="hover:text-slate-100">
              How it works
            </a>
            <a href="#solutions" className="hover:text-slate-100">
              Solutions
            </a>
            <a href="#who-we-serve" className="hover:text-slate-100">
              Who we serve
            </a>
            <a href="#contact" className="hover:text-slate-100">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full border border-amber-500/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:border-amber-400 hover:text-amber-200 md:inline-block"
            >
              Request assessment
            </Link>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="grid flex-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          {/* LEFT: HERO + CONTENT */}
          <section aria-labelledby="hero-heading" className="space-y-12">
            {/* HERO */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/80">
                PRIVATE AI INFRASTRUCTURE
              </p>

              <h1
                id="hero-heading"
                className="mb-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
              >
                Private AI.
                <span className="block text-slate-400">
                  Installed inside your walls.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-slate-300/90 sm:text-base">
                IronGate Systems builds and maintains fully isolated AI machines
                for organizations that cannot risk cloud exposure. Your data
                never leaves your gate—yet your team works with the power of
                world-class intelligence every day.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="rounded-full bg-amber-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:bg-amber-400"
                >
                  Request private AI assessment
                </Link>
                <a
                  href="#how-it-works"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 hover:text-slate-100"
                >
                  How IronGate works →
                </a>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-500">
                Restoring the human touch by letting AI handle the rest.
              </p>
            </div>

            {/* THREE PILLARS */}
            <section
              aria-labelledby="pillars-heading"
              className="space-y-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-[#090b10] to-black/40 p-6 shadow-[0_0_60px_rgba(15,23,42,0.8)]"
            >
              <h2
                id="pillars-heading"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                The IronGate Difference
              </h2>
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
                    Total Isolation
                  </p>
                  <p className="mt-2 text-xs text-slate-300/90">
                    Your AI runs on hardware you control. No external LLMs, no
                    shared data plane, no third-party training on your records.
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
                    Serious Intelligence
                  </p>
                  <p className="mt-2 text-xs text-slate-300/90">
                    Local LLMs, vector search, retrieval pipelines, and
                    multimodal models working together as one central machine.
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
                    Human-First Design
                  </p>
                  <p className="mt-2 text-xs text-slate-300/90">
                    AI handles the digital burden so your people can practice
                    law, medicine, and service—with more time and focus.
                  </p>
                </div>
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="space-y-5">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  How IronGate Works
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">
                  We install a private AI machine inside your environment and
                  connect it to the systems that run your business—securely and
                  deliberately.
                </p>
              </div>

              <ol className="space-y-4 text-sm">
                <li className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-[0.7rem] font-semibold text-slate-200">
                    1
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Assessment & Mapping
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      We audit your data flows, systems, and confidentiality
                      requirements—legal, medical, or internal—and define where
                      AI can safely operate.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-[0.7rem] font-semibold text-slate-200">
                    2
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Private AI Installation
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      We deploy your IronGate machine—local LLM, multimodal
                      model, vector database, and retrieval pipelines—within the
                      walls of your organization or in a dedicated secure GPU
                      environment.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-[0.7rem] font-semibold text-slate-200">
                    3
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Agents, Workflows & Evolution
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      We build agents and workflows tailored to your practice:
                      drafting, intake, summarization, routing, scheduling, and
                      more—then refine them as your team uses the system.
                    </p>
                  </div>
                </li>
              </ol>
            </section>
          </section>

          {/* RIGHT: CINEMATIC PANEL */}
          <aside className="space-y-8">
            {/* Cinematic "server" block */}
            <section
              aria-label="IronGate visual"
              className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#050608] via-[#0b0d12] to-black shadow-[0_0_80px_rgba(15,23,42,0.9)]"
            >
              <div className="absolute inset-0 opacity-60 mix-blend-screen">
                <div className="absolute -left-10 top-0 h-72 w-72 rotate-12 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 -rotate-6 rounded-full bg-slate-500/10 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-6 p-6">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
                    Inside the Gate
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    A single, central AI machine—LLM, multimodal model, vector
                    memory, and retrieval—running on hardware or secure GPU
                    entirely dedicated to you.
                  </p>
                </div>

                {/* "Stack" visualization */}
                <div className="space-y-3 text-xs">
                  <div className="rounded-xl border border-amber-500/60 bg-black/40 px-4 py-3 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Central Intelligence Layer
                    </p>
                    <p className="mt-1 text-[0.7rem] text-slate-200">
                      Private LLM & multimodal model tuned to your organization,
                      secured behind your network perimeter.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-[#050609] to-[#0b0d12] px-4 py-3">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-200">
                      Vector Memory & Retrieval
                    </p>
                    <p className="mt-1 text-[0.7rem] text-slate-300/90">
                      Local vector database, document indexing, and retrieval
                      pipelines—no external data sharing, ever.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-[#050609] to-[#050609] px-4 py-3">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-200">
                      Agents & Workflows
                    </p>
                    <p className="mt-1 text-[0.7rem] text-slate-300/90">
                      Custom agents for drafting, intake, routing, and
                      operations—designed around your practice and your people.
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[0.7rem] text-slate-400">
                  <span>On-prem or dedicated GPU deployment.</span>
                  <span className="text-amber-300">Zero shared clouds.</span>
                </div>
              </div>
            </section>

            {/* WHO WE SERVE */}
            <section id="who-we-serve" className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Who IronGate Serves
              </h2>
              <div className="space-y-2 text-xs text-slate-300/90">
                <p>
                  IronGate is built for organizations where confidentiality is
                  not optional:
                </p>
                <ul className="space-y-1 pl-4">
                  <li className="list-disc">
                    Law firms and legal teams managing privileged information
                  </li>
                  <li className="list-disc">
                    Medical practices and hospitals handling patient records
                  </li>
                  <li className="list-disc">
                    Financial and insurance organizations with high-stakes data
                  </li>
                  <li className="list-disc">
                    Any team that wants the power of AI without exposing its
                    core to public clouds
                  </li>
                </ul>
              </div>
            </section>

            {/* SOLUTIONS */}
            <section id="solutions" className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Deployment Options
              </h2>
              <div className="space-y-3 text-xs text-slate-300/90">
                <div className="rounded-xl border border-slate-800/80 bg-[#050609] px-4 py-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    IronGate On-Prem
                  </p>
                  <p className="mt-1">
                    A dedicated AI machine installed inside your walls. Ideal
                    for legal, medical, and any environment where compliance and
                    sovereignty are paramount.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-[#050609] px-4 py-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    IronGate Secure GPU Cloud
                  </p>
                  <p className="mt-1">
                    A fully isolated GPU instance for teams that want serious
                    privacy without hardware. No shared models, no public
                    training on your data.
                  </p>
                </div>
              </div>
            </section>

            {/* CONTACT / CTA */}
            <section
              id="contact"
              className="mt-4 space-y-3 rounded-2xl border border-slate-800/80 bg-black/40 p-4"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Begin Your Assessment
              </h2>
              <p className="text-xs text-slate-400">
                Share a few details about your organization, and we’ll map out
                what a private AI system behind your gate could look like.
              </p>
              <p className="text-[0.7rem] text-slate-500">
                Replace hours of digital labor with an intelligence layer that
                protects your data and strengthens your people.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:bg-amber-400"
              >
                Go to contact page
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
