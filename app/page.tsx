// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Subtle motion (no libs, no plugins) */}
      <style>{`
        @keyframes igFloatA {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(22px, -16px, 0) scale(1.04); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes igFloatB {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-18px, 14px, 0) scale(1.05); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes igSweep {
          0% { transform: translateX(-55%) skewX(-12deg); opacity: .12; }
          50% { opacity: .22; }
          100% { transform: translateX(55%) skewX(-12deg); opacity: .12; }
        }
        @keyframes igPulse {
          0% { opacity: .45; }
          50% { opacity: .75; }
          100% { opacity: .45; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ig-animA, .ig-animB, .ig-sweep, .ig-pulse { animation: none !important; }
        }
      `}</style>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white shadow-sm">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-slate-50 via-white to-amber-50" />
              <div className="relative h-3 w-3 border-l-2 border-b-2 border-slate-800" />
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-700">
                IRONGATE
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                Systems
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#how-it-works" className="hover:text-slate-950">
              How it works
            </a>
            <a href="#who-we-serve" className="hover:text-slate-950">
              Who we serve
            </a>
            <a href="#deployment" className="hover:text-slate-950">
              Deployment
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(2,6,23,0.25)] hover:bg-slate-900 md:inline-block"
            >
              Request assessment
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Cinematic background (light + heavy) */}
        <div className="absolute inset-0 -z-10">
          {/* Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

          {/* Dark “ink” vignette at bottom for weight */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/10 via-slate-950/0 to-transparent" />

          {/* Color fields (amber = IronGate accent, slate = steel, subtle blue for tech) */}
          <div
            className="ig-animA absolute -top-40 -left-56 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-200/25 to-transparent blur-3xl"
            style={{ animation: "igFloatA 10s ease-in-out infinite" }}
          />
          <div
            className="ig-animB absolute -bottom-56 -right-56 h-[720px] w-[720px] rounded-full bg-gradient-to-tr from-slate-700/20 via-sky-300/18 to-transparent blur-3xl"
            style={{ animation: "igFloatB 12s ease-in-out infinite" }}
          />

          {/* Grid texture for “systems” vibe */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />

          {/* Subtle radial spotlight behind hero content */}
          <div className="absolute left-1/2 top-24 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_62%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
          {/* Hero text (COPY UNCHANGED) */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              Private AI Infrastructure
            </p>

            {/* Stronger, heavier headline treatment */}
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-slate-950">Private AI, installed</span>
              <span className="block bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent">
                inside your walls.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-700">
              IronGate Systems builds and maintains private AI machines for
              organizations that cannot send sensitive data to public clouds.
              Your team gets the power of AI while your data stays under your
              control.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {/* Stronger CTA styling */}
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(2,6,23,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Request private AI call</span>
                <span className="relative ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-800 hover:text-slate-950"
              >
                Learn how it works →
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-600">
              Restoring the human touch by letting AI handle the rest.
            </p>

            {/* Minimal credibility strip — adds gravity without extra words */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.7rem] text-slate-600">
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 shadow-sm">
                On-prem capable
              </span>
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 shadow-sm">
                Dedicated GPU option
              </span>
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 shadow-sm">
                Sensitive-data ready
              </span>
            </div>
          </div>

          {/* Right visual — “monolith” with depth + color + motion */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_26px_80px_rgba(15,23,42,0.18)]">
                {/* Top visual panel */}
                <div className="relative h-60 w-full">
                  {/* Background image (swap anytime) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Heavy overlays for weight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 via-transparent to-sky-300/20" />

                  {/* Animated sweep for “power” */}
                  <div
                    className="ig-sweep absolute -left-1/2 top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    style={{ animation: "igSweep 6s ease-in-out infinite" }}
                  />

                  {/* Subtle “status” light */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
                    <span
                      className="ig-pulse h-2 w-2 rounded-full bg-amber-300"
                      style={{ animation: "igPulse 1.8s ease-in-out infinite" }}
                    />
                    <span className="text-xs font-medium tracking-wide text-white/90">
                      IRONGATE CORE ONLINE
                    </span>
                  </div>
                </div>

                {/* Card content (COPY UNCHANGED) */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Your private AI stack
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    A single, central AI machine dedicated to your organization:
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-800">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
                      <span>Local LLM and multimodal model.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
                      <span>Local vector database and retrieval pipelines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
                      <span>Optional agents and workflows tailored to your team.</span>
                    </li>
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                        On-Prem
                      </p>
                      <p className="mt-1">
                        Hardware installed in your environment for maximum control.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
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

              {/* Under-card accent line adds “weight” visually */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Everything below stays as you had it (copy unchanged) */}
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

      <section id="how-it-works" className="border-b border-slate-200 bg-white">
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

      <section id="who-we-serve" className="border-b border-slate-200 bg-slate-50">
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
              className="rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
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
