import Link from "next/link";

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Request a private AI assessment.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            Share a few details about your organization. We will outline a clear, practical
            path to installing a private AI system that fits your risk profile and daily operations.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
            <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Work email" name="email" placeholder="you@company.com" type="email" />
                <Field label="Company" name="company" placeholder="Company name" />
                <Field label="Industry" name="industry" placeholder="Law, medical, finance, etc." />
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Select
                  label="Deployment preference"
                  name="deployment"
                  options={[
                    "On-Prem (inside our environment)",
                    "Secure GPU (dedicated environment)",
                    "Not sure yet",
                  ]}
                />
                <Select
                  label="Data sensitivity"
                  name="sensitivity"
                  options={[
                    "Highly sensitive (privileged / patient / regulated)",
                    "Sensitive (internal operations)",
                    "General business data",
                  ]}
                />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  What do you want IronGate to handle?
                </label>
                <textarea
                  name="goals"
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 outline-none focus:border-slate-400"
                  placeholder="Example: intake + routing, summarization of records, internal knowledge Q&A, drafting, operational automation..."
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
                >
                  Submit request →
                </button>
                <p className="text-xs text-slate-500">
                  This form is front-end only right now. We can wire it to email next.
                </p>
              </div>
            </form>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What happens next
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <Step n="1" t="We assess your environment" d="Systems, data flows, and confidentiality requirements." />
                <Step n="2" t="We propose the right deployment" d="On-prem or secure GPU—based on risk and operations." />
                <Step n="3" t="We install and maintain" d="Your private AI stack, plus agents/workflows if needed." />
              </div>

              <div className="mt-6 text-xs text-slate-600">
                Want to review privacy first?{" "}
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

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      <select
        name={name}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Step({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900">
        {n}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{t}</p>
        <p className="mt-1 text-sm text-slate-600">{d}</p>
      </div>
    </div>
  );
}
