import Link from "next/link";

export default function AboutPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-40 -left-56 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-amber-300/35 via-orange-200/18 to-transparent blur-3xl" />
          <div className="absolute -bottom-56 -right-56 h-[720px] w-[720px] rounded-full bg-gradient-to-tr from-slate-700/18 via-sky-300/14 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Built for serious work.
            <span className="block text-slate-600">Built to protect what matters.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            We believe the most important work is human work—care, judgment, service,
            and presence. IronGate exists to remove the digital burden and restore
            the human touch through the power of private AI.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-[0_26px_80px_rgba(15,23,42,0.2)]">
              {/* Replace src with your hosted mp4 when ready */}
              <video
                className="h-auto w-full"
                controls
                preload="metadata"
                poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
              >
                <source src="/video/irongate-brand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Mission
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-950">
                Enhance the human touch through the power of private AI.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                We build private AI infrastructure that strengthens operations, protects
                sensitive records, and gives your people time back to do what they do best.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[0.7rem] text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  Private
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  Powerful
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  Human-first
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Principles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            What we believe stays true.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Principle
              title="Privacy is not optional."
              desc="Sensitive information should not become a training set or a public risk."
            />
            <Principle
              title="Capability must be responsible."
              desc="We build systems you can stand behind—clear boundaries, real controls."
            />
            <Principle
              title="Humans stay at the center."
              desc="AI clears the digital burden so your people can focus on service and judgment."
            />
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

function Principle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}
