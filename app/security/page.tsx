// app/security/page.tsx

import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Security & Privacy
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your data belongs
            <span className="block text-slate-500">behind your gate.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            IronGate Systems is designed for organizations that cannot afford
            ambiguity around data control. We deploy AI infrastructure where
            your data lives—inside environments you govern.
          </p>
        </div>
      </section>

      {/* Core principles */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <SecurityPillar
              title="No data leakage"
              body="Your data is never sent to public model endpoints, never shared, and never used to train external systems."
            />
            <SecurityPillar
              title="Dedicated infrastructure"
              body="Each deployment runs on hardware or GPU resources reserved exclusively for your organization."
            />
            <SecurityPillar
              title="Clear operating boundaries"
              body="We define exactly where data flows, who can access it, and how it is logged and audited."
            />
          </div>
        </div>
      </section>

      {/* Deployment comparison */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Deployment models
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            We offer two deployment paths, each designed to meet different
            security and operational requirements.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DeploymentCard
              title="IronGate On-Prem"
              bullets={[
                "AI stack installed inside your physical or virtual environment",
                "No external network dependency required",
                "Ideal for regulated industries and high-risk data",
                "Maximum sovereignty and control",
              ]}
            />

            <DeploymentCard
              title="IronGate Secure GPU"
              bullets={[
                "Dedicated GPU instance (no shared tenants)",
                "Locked-down networking and access controls",
                "No training on your data",
                "Faster deployment without hardware ownership",
              ]}
            />
          </div>
        </div>
      </section>

      {/* What we do / don’t do */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                What we do
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Deploy private LLMs and multimodal models</li>
                <li>• Build local vector databases and retrieval pipelines</li>
                <li>• Implement scoped agents and workflows</li>
                <li>• Maintain and harden systems over time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                What we never do
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Train public models on your data</li>
                <li>• Proxy your data through ChatGPT or public APIs</li>
                <li>• Share infrastructure across organizations</li>
                <li>• Obscure data flow or access boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Security assessment
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              Let’s map your risk profile and deployment needs.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              We’ll review your data sensitivity, workflows, and compliance
              requirements and recommend the right IronGate configuration.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-slate-900"
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

function SecurityPillar({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
    </div>
  );
}

function DeploymentCard({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-slate-950">{title}</h4>
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
