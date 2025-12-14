// app/security/page.tsx
import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function SecurityPage() {
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
                "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.14,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/85 to-slate-100" />
          <div className="absolute -top-44 -left-56 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-amber-300/40 via-orange-200/18 to-transparent blur-3xl" />
          <div className="absolute -bottom-56 -right-56 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-slate-800/16 via-sky-300/22 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Security & Privacy
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your data belongs
            <span className="block text-slate-500">behind your gate.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate Systems is designed for organizations that cannot afford ambiguity
            around data control. We deploy AI infrastructure where your data lives—inside
            environments you govern.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
            >
              Request assessment →
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-800 hover:text-slate-950">
              Review pricing approach →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Pillar
              title="No data leakage"
              body="Your data is never sent to public model endpoints, never shared, and never used to train external systems."
              accent="amber"
            />
            <Pillar
              title="Dedicated infrastructure"
              body="Each deployment runs on hardware or GPU resources reserved exclusively for your organization."
              accent="sky"
            />
            <Pillar
              title="Clear operating boundaries"
              body="We define exactly where data flows, who can access it, and how it is logged and audited."
              accent="slate"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-950">Deployment models</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            Two paths. Same philosophy: capability without sacrificing control.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Box
              title="IronGate On-Prem"
              accent="amber"
              items={[
                "AI stack installed inside your physical or virtual environment",
                "No external network dependency required",
                "Ideal for regulated industries and high-risk data",
                "Maximum sovereignty and control",
              ]}
            />
            <Box
              title="IronGate Secure GPU"
              accent="sky"
              items={[
                "Dedicated GPU instance (no shared tenants)",
                "Locked-down networking and access controls",
                "No training on your data",
                "Faster deployment without hardware ownership",
              ]}
            />
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-amber-50/40 p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What we do
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Deploy private LLMs and multimodal models</li>
                <li>• Build local vector databases and retrieval pipelines</li>
                <li>• Implement scoped agents and workflows</li>
                <li>• Maintain and harden systems over time</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-sky-50/40 p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What we never do
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Train public models on your data</li>
                <li>• Proxy your data through public AI endpoints</li>
                <li>• Share infrastructure across organizations</li>
                <li>• Obscure data flow or access boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Security assessment
            </p>
            <p className="mt-2 text-2xl font-semibold">
              Let’s map your risk profile and deployment needs.
            </p>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              We’ll review your data sensitivity, workflows, and compliance requirements and
              recommend the right IronGate configuration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-slate-100"
              >
                Request assessment →
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/15"
              >
                View FAQ →
              </Link>
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

function Pillar({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: "amber" | "sky" | "slate";
}) {
  const bar =
    accent === "amber"
      ? "from-amber-300/70 via-amber-200/20 to-transparent"
      : accent === "sky"
      ? "from-sky-300/70 via-sky-200/20 to-transparent"
      : "from-slate-900/25 via-slate-400/10 to-transparent";

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${bar}`} />
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
    </div>
  );
}

function Box({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: "amber" | "sky";
}) {
  const tint = accent === "amber" ? "to-amber-50/40" : "to-sky-50/40";
  return (
    <div className={`rounded-3xl border border-slate-200 bg-gradient-to-b from-white ${tint} p-7 shadow-sm`}>
      <h4 className="text-lg font-semibold text-slate-950">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-950" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
