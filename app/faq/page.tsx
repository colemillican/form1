// app/faq/page.tsx

import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
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

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            <FAQItem
              q="Do you train models on our data?"
              a="No. Your stack is dedicated to your organization. Your data stays under your control."
            />
            <FAQItem
              q="What’s the difference between On-Prem and Secure GPU?"
              a="On-Prem is installed inside your environment for maximum sovereignty. Secure GPU is a dedicated, locked-down instance for teams that want strong privacy without maintaining hardware."
            />
            <FAQItem
              q="Can the system use our internal documents?"
              a="Yes. We use a local vector database and retrieval pipelines so responses are grounded in your private materials."
            />
            <FAQItem
              q="What kinds of organizations are a fit?"
              a="Teams where confidentiality is non-negotiable—legal, medical, financial, and any organization handling sensitive records."
            />
            <FAQItem
              q="Can you build additional agents and workflows?"
              a="Yes. We can add purpose-built agents for drafting, intake, summarization, internal routing, and other scoped workflows."
            />
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

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-semibold text-slate-950">{q}</span>
        <span className="text-slate-400 transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-sm text-slate-700">{a}</p>
    </details>
  );
}
