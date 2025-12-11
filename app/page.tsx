// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-slate-100">
              <div className="h-3 w-3 border-l-2 border-b-2 border-slate-700" />
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                IRONGATE
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Systems
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#who-we-serve" className="hover:text-slate-900">
              Who we serve
            </a>
            <a href="#deployment" className="hover:text-slate-900">
              Deployment
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-800 md:inline-block"
            >
              Request assessment
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20 lg:px-8">
          {/* Hero text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Private AI Infrastructure
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Private AI, installed
              <span className="block text-slate-500">
                inside your walls.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-600">
              IronGate Systems builds and maintains private AI machines for
              organizations that cannot send sensitive data to public clouds.
              Your team gets the power of AI while your data stays under your
              control.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-800"
              >
                Request private AI call
              </Link>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Learn how it works →
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-500">
              Restoring the human touch by letting AI handle the rest.
            </p>
          </div>

          {/* Simple visual card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Your private AI stack
              </p>
              <p className="mt-2 text-sm text-slate-700">
                A single, central AI machine dedicated to your organization:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Local LLM and multimodal model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Local vector database and retrieval pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Optional agents and workflows tailored to your team.</span>
                </li>
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="rounded-xl bg-white p-3 border border-slate-200">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    On-Prem
                  </p>
                  <p className="mt-1">
                    Hardware installed in your environment for maximum control.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 border border-slate-200">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Secure GPU
                  </p>
                  <p className="mt-1">
                    Dedicated GPU in a locked-down cloud for teams that do not
                    need full on-prem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three key points */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Private by design
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Your AI runs on infrastructure dedicated to you. No shared model
                endpoints, no training on your data, and no surprise cloud hops.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Serious intelligence
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Local models, vector search, and retrieval give your team fast,
                reliable answers built on your documents, not the public internet.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Human-first work
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                AI clears digital clutter so your people can focus on law,
                medicine, and service—not endless screens and admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How it works
            </h2>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              A straightforward process to install private AI in your practice.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                1. Assessment
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We map your systems, data flows, and confidentiality
                requirements, then agree on where AI can operate safely.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                2. Installation
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We deploy your IronGate stack on-prem or on a dedicated GPU and
                connect it to the tools your team already uses.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                3. Agents & support
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We design agents and workflows for tasks like drafting, intake,
                and summarization, then support your team as usage grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve + deployment */}
      <section
        id="who-we-serve"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Who we serve
              </h2>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Built for teams where confidentiality is non-negotiable.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Law firms and legal departments</li>
                <li>• Medical practices and hospitals</li>
                <li>• Financial and insurance organizations</li>
                <li>• Any team that wants AI without sending core records to public models</li>
              </ul>
            </div>

            <div id="deployment">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Deployment options
              </h2>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                Choose the level of control your data requires.
              </p>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    IronGate On-Prem
                  </p>
                  <p className="mt-2">
                    A private AI machine installed within your environment. Best
                    for legal, medical, and any practice where compliance and
                    sovereignty are central.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    IronGate Secure GPU
                  </p>
                  <p className="mt-2">
                    A dedicated GPU instance for organizations that want strong
                    privacy without maintaining hardware. No shared models and
                    no training on your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Start the conversation
            </h2>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Explore what private AI behind your own gate could look like.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Share a few details about your organization, and we will outline a
              clear, practical path to installing a private AI system that fits
              your risk profile and daily operations.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-800"
            >
              Go to contact page
            </Link>
            <p className="text-xs text-slate-500">
              No hype, no generic demos—just a direct conversation about your
              systems and your data.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} IronGate Systems.</span>
          <span>Private AI, built for serious work.</span>
        </div>
      </footer>
    </main>
  );
}
