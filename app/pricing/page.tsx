// app/pricing/page.tsx
import Link from "next/link";
import SiteChrome from "../components/SiteChrome";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-44 -left-60 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-200/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-60 -right-60 h-[720px] w-[720px] rounded-full bg-gradient-to-tr from-slate-800/16 via-sky-300/22 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:96px_96px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link href="/security" className="text-sm font-medium text-slate-800 hover:text-slate-950">
              Review security approach →
            </Link>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-600">
            No hype, no generic demos—clear scope, clear controls, clear ownership.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <PlanCard
              eyebrow="Most Control"
              title="IronGate On-Prem"
              subtitle="Installed inside your environment."
              bullets={[
                "Dedicated on-site AI machine (LLM + vector DB + retrieval).",
                "Designed for sensitive records and compliance-driven teams.",
                "Network isolation, access control, and logging by design.",
                "Optional multimodal capability based on scope.",
              ]}
              accent="amber"
              ctaHref="/contact"
              ctaLabel="Scope on-prem deployment"
            />

            <PlanCard
              featured
              eyebrow="Fastest Path"
              title="IronGate Secure GPU"
              subtitle="Dedicated GPU instance, locked down."
              bullets={[
                "Dedicated GPU (no shared model endpoints).",
                "Private vector DB + retrieval pipelines per organization.",
                "Strong privacy without managing hardware.",
                "Great fit when full on-prem isn’t required.",
              ]}
              accent="sky"
              ctaHref="/contact"
              ctaLabel="Scope secure GPU deployment"
            />

            <PlanCard
              eyebrow="Add Capability"
              title="Agents & Workflows"
              subtitle="Tailored automations on top of your stack."
              bullets={[
                "Document drafting and summarization agents.",
                "Intake, triage, and internal routing.",
                "Knowledge base Q&A grounded in your documents.",
                "Integration with your existing tools (scope-based).",
              ]}
              accent="slate"
              ctaHref="/services"
              ctaLabel="Explore services"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <InfoBox
              title="What drives pricing"
              items={[
                "Deployment model (on-prem vs dedicated GPU)",
                "Model size / performance requirements",
                "Data volume and retrieval complexity",
                "Required controls (audit, logging, isolation)",
                "Number of agents, workflows, and integrations",
              ]}
              accent="amber"
            />
            <InfoBox
              title="What you get"
              items={[
                "Dedicated AI stack aligned to your risk profile",
                "Clear operating boundaries and data ownership",
                "Ongoing maintenance, updates, and hardening",
                "Practical rollout support as adoption grows",
              ]}
              accent="sky"
            />
          </div>
        </div>
      </section>

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
                Share your confidentiality requirements, systems, and what success looks
                like. We’ll return a clear plan: deployment recommendation, controls, and a
                build roadmap.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-7 text-white shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                What to bring
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• What data types you handle (PHI, PII, legal docs, etc.)</li>
                <li>• Where your documents live today</li>
                <li>• The top 3 workflows you want AI to assist</li>
                <li>• Your preferred deployment (or let us recommend)</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-slate-100"
              >
                Request assessment →
              </Link>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
              <p className="mt-4 text-xs text-white/70">
                Restoring the human touch by letting AI handle the rest.
              </p>
            </div>
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

function PlanCard({
  eyebrow,
  title,
  subtitle,
  bullets,
  ctaHref,
  ctaLabel,
  featured = false,
  accent,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
  accent: "amber" | "sky" | "slate";
}) {
  const bar =
    accent === "amber"
      ? "from-amber-300/80 via-amber-200/20 to-transparent"
      : accent === "sky"
      ? "from-sky-300/80 via-sky-200/20 to-transparent"
      : "from-slate-900/25 via-slate-400/10 to-transparent";

  return (
    <div
      className={[
        "relative h-full overflow-hidden rounded-[28px] border bg-white p-7 shadow-sm",
        featured ? "border-slate-300" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-br from-amber-300/35 via-orange-200/12 to-sky-300/20 blur-xl" />
      )}
      <div className={`relative`}>
        <div className={`absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r ${bar}`} />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
        <h2 className="relative mt-3 text-xl font-semibold text-slate-950">
          {title}
        </h2>
        <p className="relative mt-1 text-sm text-slate-600">{subtitle}</p>

        <ul className="relative mt-5 space-y-2 text-sm text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-6">
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
    </div>
  );
}

function InfoBox({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: "amber" | "sky";
}) {
  const tint = accent === "amber" ? "to-amber-50/50" : "to-sky-50/50";
  const dot = accent === "amber" ? "bg-amber-400" : "bg-sky-400";
  return (
    <div className={`rounded-3xl border border-slate-200 bg-gradient-to-b from-white ${tint} p-7 shadow-sm`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${dot}`} />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
