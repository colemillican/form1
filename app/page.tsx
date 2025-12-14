// app/page.tsx
import Link from "next/link";
import SiteChrome from "./components/SiteChrome";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      {/* Lightweight page animations (no libs) */}
      <style>{`
        @keyframes igFloatA { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(18px,-14px,0) scale(1.04)} 100%{transform:translate3d(0,0,0) scale(1)} }
        @keyframes igFloatB { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(-16px,12px,0) scale(1.05)} 100%{transform:translate3d(0,0,0) scale(1)} }
        @keyframes igSweep { 0%{transform:translateX(-55%) skewX(-12deg); opacity:.10} 50%{opacity:.20} 100%{transform:translateX(55%) skewX(-12deg); opacity:.10} }
        @keyframes igPulse { 0%{opacity:.45} 50%{opacity:.80} 100%{opacity:.45} }
        @media (prefers-reduced-motion: reduce) { .ig-animA,.ig-animB,.ig-sweep,.ig-pulse{animation:none!important} }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:84px_84px]" />

          {/* Brand color fields */}
          <div
            className="ig-animA absolute -top-44 -left-64 h-[720px] w-[720px] rounded-full bg-gradient-to-br from-amber-300/55 via-orange-200/25 to-transparent blur-3xl"
            style={{ animation: "igFloatA 11s ease-in-out infinite" }}
          />
          <div
            className="ig-animB absolute -bottom-64 -right-64 h-[760px] w-[760px] rounded-full bg-gradient-to-tr from-slate-800/18 via-sky-300/22 to-transparent blur-3xl"
            style={{ animation: "igFloatB 13s ease-in-out infinite" }}
          />

          <div className="absolute left-1/2 top-24 h-[540px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0)_62%)]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/10 via-slate-950/0 to-transparent" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
          {/* Messaging kept consistent */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              Private AI Infrastructure
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-slate-950">Private AI, installed</span>
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
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
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(2,6,23,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/22 to-sky-300/0 opacity-0 transition-opacity group-hover:opacity-100" />
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

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.7rem] text-slate-700">
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

          {/* Visual card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_26px_80px_rgba(15,23,42,0.18)]">
                <div className="relative h-60 w-full">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300/22 via-transparent to-sky-300/22" />

                  <div
                    className="ig-sweep absolute -left-1/2 top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{ animation: "igSweep 6.5s ease-in-out infinite" }}
                  />

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

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Your private AI stack
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    A single, central AI machine dedicated to your organization:
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-800">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>Local LLM and multimodal model.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>Local vector database and retrieval pipelines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
                      <span>Optional agents and workflows tailored to your team.</span>
                    </li>
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-amber-50/40 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                        On-Prem
                      </p>
                      <p className="mt-1">
                        Hardware installed in your environment for maximum control.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-sky-50/40 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Secure GPU
                      </p>
                      <p className="mt-1">
                        Dedicated GPU in a locked-down cloud for teams that do not need
                        full on-prem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Three key points */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card
              title="Private by design"
              body="Your AI runs on infrastructure dedicated to you. No shared model endpoints, no training on your data, and no surprise cloud hops."
              accent="amber"
            />
            <Card
              title="Serious intelligence"
              body="Local models, vector search, and retrieval give your team fast, reliable answers built on your documents, not the public internet."
              accent="sky"
            />
            <Card
              title="Human-first work"
              body="AI clears digital clutter so your people can focus on law, medicine, and service—not endless screens and admin."
              accent="slate"
            />
          </div>
        </div>
      </section>

      {/* Brand story + mission */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Our mission
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Enhance the human touch through the power of private AI.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                We believe the most important work is human work—care, judgment, service,
                and presence. IronGate exists to remove the digital burden that pulls
                teams away from that calling. We build private AI infrastructure that
                strengthens operations, protects sensitive records, and gives your people
                time back to do what they do best.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  Read the full story →
                </Link>
                <span className="text-xs text-slate-500">Built for serious work. Built to last.</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-8 shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.55),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.45),transparent_55%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  What “IronGate” means
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Intelligence belongs behind a gate.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Your organization should not have to trade confidentiality for capability.
                  We deploy AI where your data lives—inside your environment—so your systems
                  become faster, stronger, and more secure over time.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-[0.7rem] text-white/80">
                  <Mini title="Private" body="Data stays in your control." />
                  <Mini title="Powerful" body="Real infrastructure, not hype." />
                  <Mini title="Human" body="Time back for real work." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
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
            <Step n="1. Assessment" body="We map your systems, data flows, and confidentiality requirements, then agree on where AI can operate safely." />
            <Step n="2. Installation" body="We deploy your IronGate stack on-prem or on a dedicated GPU and connect it to the tools your team already uses." />
            <Step n="3. Agents & support" body="We design agents and workflows for tasks like drafting, intake, and summarization, then support your team as usage grows." />
          </div>
        </div>
      </section>

      {/* Who we serve + deployment */}
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
                    A private AI machine installed within your environment. Best for legal,
                    medical, and any practice where compliance and sovereignty are central.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    IronGate Secure GPU
                  </p>
                  <p className="mt-2">
                    A dedicated GPU instance for organizations that want strong privacy
                    without maintaining hardware. No shared models and no training on your
                    data.
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
              Share a few details about your organization, and we will outline a clear,
              practical path to installing a private AI system that fits your risk profile
              and daily operations.
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
              No hype, no generic demos—just a direct conversation about your systems and
              your data.
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

function Card({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: "amber" | "sky" | "slate";
}) {
  const bar =
    accent === "amber"
      ? "from-amber-300/70 via-amber-200/20 to-transparent"
      : accent === "sky"
      ? "from-sky-300/70 via-sky-200/20 to-transparent"
      : "from-slate-900/30 via-slate-400/10 to-transparent";

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${bar}`} />
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Mini({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
      <p className="font-semibold text-white/90">{title}</p>
      <p className="mt-1">{body}</p>
    </div>
  );
}

function Step({ n, body }: { n: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {n}
      </p>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
    </div>
  );
}
