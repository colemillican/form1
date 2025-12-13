import Link from "next/link";

export default function FAQPage() {
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
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Clear answers,
            <span className="block text-slate-600">no fluff.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            These are the questions serious teams ask when evaluating private AI.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <FAQItem
                q="Does our data ever leave our environment?"
                a="For IronGate On-Prem, your data stays inside your environment. For IronGate Secure GPU, your system runs in a dedicated, single-tenant environment with controlled ingress/egress. We do not route your sensitive content through public model endpoints."
              />
              <FAQItem
                q="Do you train models on our data?"
                a="No. Your data is not used to train public models. Any tuning or configuration is done within your isolated deployment and under your control."
              />
              <FAQItem
                q="Can IronGate run without internet access?"
                a="Yes, depending on your requirements. On-prem systems can be deployed in a restricted network environment with offline operation for core inference and retrieval."
              />
              <FAQItem
                q="What is the difference between On-Prem and Secure GPU?"
                a="On-Prem is hardware installed in your environment for maximum control and sovereignty. Secure GPU is a dedicated compute environment for organizations that want strong privacy without maintaining hardware."
              />
              <FAQItem
                q="What models do you use?"
                a="We select models based on your use cases and constraints (latency, hardware, accuracy, modality). The system is designed so models can be swapped as your needs evolve."
              />
              <FAQItem
                q="How do permissions and access work?"
                a="We implement role-based access aligned with your organization. You control who can query what data, and we can segment knowledge bases by department or function."
              />
              <FAQItem
                q="What does implementation look like?"
                a="We start with an assessment, then deploy your private AI stack, then build agents/workflows as needed. We support monitoring, updates, and ongoing refinement."
              />
              <FAQItem
                q="How is pricing structured?"
                a="Pricing depends on deployment tier, hardware/compute requirements, integrations, and the number of workflows/agents. We begin with an assessment and provide a clear proposal."
              />
              <FAQItem
                q="What kind of support do you provide?"
                a="We provide ongoing maintenance, monitoring, model updates, and workflow improvements. We treat IronGate as infrastructure—not a one-time install."
              />
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Still have questions?
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-950">
                Get a direct answer from IronGate.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                No hype, no generic demos—just a conversation about your systems and your data.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
                >
                  Request assessment →
                </Link>
              </div>

              <div className="mt-6 text-xs text-slate-600">
                Prefer to start with security?{" "}
                <Link href="/security" className="font-semibold text-slate-900 hover:underline">
                  Read the security page.
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
        <span className="text-sm font-semibold text-slate-950">{q}</span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 group-open:bg-white">
          Toggle
        </span>
      </summary>
      <p className="mt-3 text-sm text-slate-700">{a}</p>
    </details>
  );
}
