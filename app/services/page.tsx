// app/services/page.tsx
import Link from "next/link";
import SiteChrome from "../components/SiteChrome";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-44 -left-56 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-200/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-gradient-to-tr from-slate-800/16 via-sky-300/22 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:92px_92px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Private AI systems,
            <span className="block text-slate-500">engineered and maintained.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate Systems builds and maintains private AI machines for organizations
            that cannot send sensitive data to public clouds. Your team gets the power
            of AI while your data stays under your control.
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
        </div>
      </section>

      {/* Offerings */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <ServiceCard
              tag="Core"
              title="Private AI Machine"
              desc="A dedicated AI stack: local LLM, local vector database, retrieval pipelines, and optional multimodal capability."
              bullets={[
                "Dedicated to your org (no shared endpoints)",
                "Grounded answers from your documents",
                "Designed around confidentiality boundaries",
              ]}
              accent="amber"
            />
            <ServiceCard
              tag="Deployment"
              title="On-Prem Installation"
              desc="Hardware installed within your environment for maximum sovereignty and control."
              bullets={[
                "Network isolation and access control",
                "Local data flow with clear boundaries",
                "Best for legal, medical, regulated teams",
              ]}
              accent="slate"
            />
            <ServiceCard
              tag="Deployment"
              title="Secure GPU Hosting"
              desc="A dedicated GPU instance for teams that want strong privacy without maintaining physical hardware."
              bullets={[
                "Dedicated instance (not shared)",
                "Private vector DB + retrieval per org",
                "Fast path to production capability",
              ]}
              accent="sky"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Agents & workflows
              </p>
              <p className="mt-3 text-sm text-slate-700">
                For organizations that want more than Q&A: we build agents and workflows
                on top of your private stack—scoped to your tools, your data, and your risk
                profile.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Drafting, summarization, and internal knowledge support</li>
                <li>• Intake, triage, routing, and structured data capture</li>
                <li>• Secure retrieval over policies, SOPs, and case material</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div
                className="h-56 w-full"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="relative p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Maintenance & hardening
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  Infrastructure requires stewardship. We maintain the system as your usage
                  grows—upgrades, monitoring, performance tuning, and security hardening.
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-600">
                  Built for serious work. Built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Next step
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">
                Let’s scope your private AI deployment.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                We’ll map your data flows, tools, and confidentiality requirements, then
                recommend on-prem vs secure GPU and a practical build plan.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-7 text-white shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Request assessment
              </p>
              <p className="mt-3 text-sm text-white/80">
                One call. Clear boundaries. Clear scope.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-slate-100"
              >
                Contact IronGate →
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

function ServiceCard({
  tag,
  title,
  desc,
  bullets,
  accent,
}: {
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  accent: "amber" | "sky" | "slate";
}) {
  const bar =
    accent === "amber"
      ? "from-amber-300/70 via-amber-200/20 to-transparent"
      : accent === "sky"
      ? "from-sky-300/70 via-sky-200/20 to-transparent"
      : "from-slate-900/25 via-slate-400/10 to-transparent";

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${bar}`} />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {tag}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm text-slate-700">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
