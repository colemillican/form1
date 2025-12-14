// app/faq/page.tsx
import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-44 -left-60 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-amber-300/40 via-orange-200/18 to-transparent blur-3xl" />
          <div className="absolute -bottom-60 -right-60 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-slate-800/14 via-sky-300/22 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Answers, clearly.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            Private AI raises practical questions around data, deployment, and control.
            Here are straightforward answers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link href="/security" className="text-sm font-medium text-slate-800 hover:text-slate-950">
              Security overview →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            <FAQItem
              q="Do you train models on our data?"
              a="No. Your stack is dedicated to your organization. No training on your data, no shared endpoints."
              accent="amber"
            />
            <FAQItem
              q="What’s the difference between On-Prem and Secure GPU?"
              a="On-Prem is installed inside your environment for maximum sovereignty. Secure GPU is a dedicated, locked-down instance for teams that want strong privacy without maintaining hardware."
              accent="sky"
            />
            <FAQItem
              q="Can the system use our internal documents?"
              a="Yes. We use a local vector database and retrieval pipelines so responses are grounded in your private materials."
              accent="slate"
            />
            <FAQItem
              q="What kinds of organizations are a fit?"
              a="Teams where confidentiality is non-negotiable—legal, medical, financial, and any organization handling sensitive records."
              accent="amber"
            />
            <FAQItem
              q="Can you build additional agents and workflows?"
              a="Yes. We build purpose-built agents for drafting, intake, summarization, routing, and other scoped workflows."
              accent="sky"
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Still have questions?
            </p>
            <p className="mt-2 text-sm text-slate-700">
              No hype. No generic demos. We’ll discuss your systems and your risk profile directly.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
            >
              Contact IronGate →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} IronGate Systems.</span>
          <span>Private AI, built for serious work.</span>
        </div>
      </footer>
    </main>
  );
}

function FAQItem({
  q,
  a,
  accent,
}: {
  q: string;
  a: string;
  accent: "amber" | "sky" | "slate";
}) {
  const dot =
    accent === "amber"
      ? "bg-amber-400"
      : accent === "sky"
      ? "bg-sky-400"
      : "bg-slate-900";

  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="flex items-center gap-3 text-sm font-semibold text-slate-950">
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          {q}
        </span>
        <span className="text-slate-400 transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-sm text-slate-700">{a}</p>
    </details>
  );
}
