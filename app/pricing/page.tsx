// app/pricing/page.tsx

import Link from "next/link";
import SiteChrome from "../components/SiteChrome";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Private AI infrastructure,
            <span className="block text-slate-500">scoped to your risk profile.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate Systems deploys a dedicated AI stack for your organization—either
            installed on-prem or hosted on a dedicated Secure GPU. Pricing is driven by
            deployment model, workload, and the number of agents/workflows you want
            operational.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(2,6,23,0.22)] hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link
              href="/security"
              className="text-sm font-medium text-slate-800 hover:text-slate-950"
            >
              Review security approach →
            </Link>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-600">
            No hype, no generic demos—clear scope, clear controls, clear ownership.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* On-Prem */}
            <PlanCard
              eyebrow="Most Control"
              title="IronGate On-Prem"
              subtitle="Installed inside your environment."
              priceLine="Project + monthly support"
              bullets={[
                "Dedicated on-site AI machine (LLM + vector DB + retrieval).",
                "Designed for sensitive records and compliance-driven teams.",
                "Network isolation, access control, and logging by design.",
                "Optional multimodal capability based on scope.",
              ]}
              footnote="Best for legal, medical, and any organization where sovereignty is central."
              ctaHref="/contact"
              ctaLabel="Scope on-prem deployment"
            />

            {/* Secure GPU (Featured) */}
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-br from-amber-300/50 via-orange-200/20 to-sky-300/25 blur-xl" />
              <PlanCard
                featured
                eyebrow="Fastest Path"
                title="IronGate Secure GPU"
                subtitle="Dedicated GPU instance, locked down."
                priceLine="Monthly subscription"
                bullets={[
                  "Dedicated GPU (no shared model endpoints).",
                  "Private vector DB + retrieval pipelines per organization.",
                  "Strong privacy without managing hardware.",
                  "Great fit when full on-prem isn’t required.",
                ]}
                footnote="Best for teams that want strong privacy and speed to deployment."
                ctaHref="/contact"
                ctaLabel="Scope secure GPU deployment"
              />
            </div>

            {/* Agents */}
            <PlanCard
              eyebrow="Add Capability"
              title="Agents & Workflows"
              subtitle="Tailored automations on top of your stack."
              priceLine="Add-on packages"
              bullets={[
                "Document drafting and summarization agents.",
                "Intake, triage, and internal routing.",
                "Knowledge base Q&A grounded in your documents.",
                "Integration with your existing tools (scope-based).",
              ]}
              footnote="Best when you want measurable operational lift beyond the core AI machine."
              ctaHref="/services"
              ctaLabel="Explore services"
            />
          </div>

          {/* Pricing notes */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What drives pricing
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Deployment model (on-prem vs dedicated GPU)</li>
                <li>• Model size / performance requirements</li>
                <li>• Data volume and retrieval complexity</li>
                <li>• Required controls (audit, logging, isolation)</li>
                <li>• Number of agents, workflows, and integrations</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What you get
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Dedicated AI stack aligned to your risk profile</li>
                <li>• Clear operating boundaries and data ownership</li>
                <li>• Ongoing maintenance, updates, and hardening</li>
                <li>• Practical rollout support as adoption grows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Start with an assessment
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                We’ll outline the right deployment and scope in one call.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Share your confidentiality requirements, systems, and what “success” looks
                like. We’ll return a clear plan: deployment recommendation, controls, and a
                build roadmap.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                What to bring
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• What data types you handle (PHI, PII, legal docs, etc.)</li>
                <li>• Where your documents live today</li>
                <li>• The top 3 workflows you want AI to assist</li>
                <li>• Your preferred deployment (or let us recommend)</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
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

function PlanCard({
  eyebrow,
  title,
  subtitle,
  priceLine,
  bullets,
  footnote,
  ctaHref,
  ctaLabel,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  priceLine: string;
  bullets: string[];
  footnote: string;
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative h-full overflow-hidden rounded-[28px] border bg-white p-7 shadow-sm",
        featured ? "border-slate-300" : "border-slate-200",
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300/70 via-slate-200 to-sky-300/50" />

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          {priceLine}
        </p>
        <p className="mt-1 text-sm text-slate-700">
          Scoped after assessment to match your data, workload, and controls.
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-slate-500">{footnote}</p>

      <div className="mt-6">
        <Link
          href={ctaHref}
          className={[
            "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm transition",
            featured
              ? "bg-slate-950 text-white hover:bg-slate-900"
              : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
          ].join(" ")}
        >
          {ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
