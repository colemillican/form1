import Link from "next/link";

export default function ServicesPage() {
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
            <Link href="/contact" className="hover:text-slate-950">
              Contact
            </Link>
            <Link href="/pricing" className="hover:text-slate-950">
              Pricing
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-40 -left-56 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-amber-300/40 via-orange-200/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-56 -right-56 h-[720px] w-[720px] rounded-full bg-gradient-to-tr from-slate-700/18 via-sky-300/16 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Private AI infrastructure,
            <span className="block text-slate-600">installed and maintained.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate Systems builds and maintains private AI machines for organizations
            that cannot send sensitive data to public clouds. Your team gets the power of AI
            while your data stays under your control.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request private AI call →
            </Link>
            <Link
              href="/security"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm hover:bg-slate-50"
            >
              View security posture
            </Link>
          </div>
        </div>
      </section>

      {/* Offer blocks */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Deployment tier
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">
              IronGate On-Prem
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              A private AI machine installed within your environment. Best for legal,
              medical, and any practice where compliance and sovereignty are central.
            </p>

            <div className="mt-5 grid gap-3 text-sm text-slate-700">
              <Item title="Local LLM + multimodal model" desc="Runs where your data lives." />
              <Item title="Local vector database + retrieval" desc="Private search over your documents." />
              <Item title="Role-based access" desc="Aligned with your org structure." />
              <Item title="Ongoing maintenance" desc="Updates, monitoring, and refinements." />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
              >
                Request assessment
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50"
              >
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Deployment tier
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">
              IronGate Secure GPU
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              A dedicated GPU instance for organizations that want strong privacy without
              maintaining hardware. No shared models and no training on your data.
            </p>

            <div className="mt-5 grid gap-3 text-sm text-slate-700">
              <Item title="Dedicated GPU compute" desc="Single-tenant environment." />
              <Item title="Private retrieval stack" desc="Vector memory + RAG pipelines." />
              <Item title="Controlled integrations" desc="Only the connectors you approve." />
              <Item title="Operational support" desc="Monitoring, upgrades, iteration." />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
              >
                Request assessment
              </Link>
              <Link
                href="/security"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50"
              >
                Security details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Add-ons
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Agents and workflows, built around your practice.
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We can build additional agents and workflows onto your IronGate system—
              tailored to your team, your permissions, and your daily operations.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Drafting & summarization" desc="Draft internal docs, summarize records, and generate structured outputs." />
            <Card title="Intake & routing" desc="Automate intake, triage, and routing to the right person with context." />
            <Card title="Knowledge base Q&A" desc="Ask questions over your internal knowledge without exposing it publicly." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_26px_80px_rgba(15,23,42,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Start the conversation
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Explore what private AI behind your own gate could look like.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-700">
              Share a few details about your organization, and we will outline a clear,
              practical path to installing a private AI system that fits your risk profile
              and daily operations.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
              >
                Request private AI call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}
