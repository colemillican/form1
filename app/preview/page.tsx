import Link from "next/link";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <Link href="/services" className="hover:text-slate-950">
              Services
            </Link>
            <Link href="/security" className="hover:text-slate-950">
              Security
            </Link>
            <Link href="/faq" className="hover:text-slate-950">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-slate-950">
              About
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
          >
            Request assessment
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Security & data privacy
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Intelligence belongs behind a gate.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate is designed so your organization does not have to trade confidentiality
            for capability. We deploy AI where your data lives—inside your environment or a
            dedicated, controlled compute space.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Block
              title="Data stays in your control"
              desc="On-prem systems keep data inside your environment. Secure GPU deployments use dedicated resources with controlled access."
            />
            <Block
              title="No training on your records"
              desc="Your information is not used to train public models. Any tuning is done within your isolated deployment under your control."
            />
            <Block
              title="Designed for serious environments"
              desc="Built for teams handling privileged, patient, regulated, or sensitive operational data."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            At a high level
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            How data typically flows.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            We keep this page high-level. In an assessment, we map your exact systems and
            produce a tailored data-flow plan.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <DiagramBox title="Your systems" desc="EHR, DMS, case files, CRM, internal docs." />
              <DiagramBox title="IronGate retrieval" desc="Indexing + vector memory + RAG pipelines." />
              <DiagramBox title="Private inference" desc="Local LLM / multimodal model generates output." />
            </div>
            <div className="mt-4 text-xs text-slate-600">
              Key point: We do not route sensitive content through public model endpoints.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_26px_80px_rgba(15,23,42,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Next step
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Get a security-first assessment.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-700">
              We’ll map your risk profile, data flows, and operational needs—then recommend the
              right deployment (on-prem or secure GPU) with clear boundaries and controls.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
              >
                Request assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Block({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function DiagramBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-sm text-slate-800">{desc}</p>
    </div>
  );
}
