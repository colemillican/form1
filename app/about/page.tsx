// app/about/page.tsx
import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.14,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/85 to-slate-100" />
          <div className="absolute -top-44 -left-60 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-200/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-60 -right-60 h-[740px] w-[740px] rounded-full bg-gradient-to-tr from-slate-800/14 via-sky-300/22 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            About IronGate
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            A company built for
            <span className="block text-slate-500">order, control, and real work.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-700">
            IronGate Systems exists to give organizations the power of AI without handing
            their most sensitive information to public clouds. We build private AI machines
            and retrieval systems that live where your data lives—inside environments you
            govern.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link href="/security" className="text-sm font-medium text-slate-800 hover:text-slate-950">
              Security principles →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                The mission
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Enhance the human touch through the power of private AI.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                We believe the most important work is human work—care, judgment, service,
                craftsmanship, presence. But modern operations pull people into screens,
                systems, and administrative noise.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                IronGate is built to move that burden away from humans. We deploy AI that
                can handle information work—search, drafting, summarization, internal routing—
                while keeping your data under your control. The goal is not to replace people.
                The goal is to restore people to the work that matters.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Done correctly, AI increases capacity. Capacity improves service. Service is
                the purpose of business. That is the standard we aim for.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge text="Order" accent="amber" />
                <Badge text="Truth" accent="sky" />
                <Badge text="Security" accent="slate" />
                <Badge text="Beauty" accent="amber" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div
                  className="h-56 w-full"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="relative p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    What we build
                  </p>
                  <p className="mt-3 text-sm text-slate-700">
                    A private AI core: local LLM, local vector database, retrieval pipelines,
                    and optional multimodal capability—deployed on-prem or on a dedicated secure GPU.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-7 text-white shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  The IronGate standard
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>• Your data stays under your control.</li>
                  <li>• Systems are built with clear boundaries.</li>
                  <li>• Capability must serve real people doing real work.</li>
                </ul>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
                <p className="mt-4 text-xs text-white/70">
                  Private AI, installed inside your walls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              If you’re a fit
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-950">
              We should talk if confidentiality is non-negotiable.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Law, healthcare, finance, insurance—any organization where data control is central.
              We’ll scope the right deployment and draw clean boundaries before anything goes live.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
            >
              Request assessment →
            </Link>
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

function Badge({ text, accent }: { text: string; accent: "amber" | "sky" | "slate" }) {
  const cls =
    accent === "amber"
      ? "border-amber-300/60 bg-amber-50 text-slate-900"
      : accent === "sky"
      ? "border-sky-300/60 bg-sky-50 text-slate-900"
      : "border-slate-300 bg-white text-slate-900";
  return (
    <span className={`rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${cls}`}>
      {text}
    </span>
  );
}
