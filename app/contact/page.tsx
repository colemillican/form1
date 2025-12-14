// app/contact/page.tsx
import SiteChrome from "../components/SiteChrome";
import Link from "next/link";

export default function ContactPage() {
  // Replace these with your real contact details
  const email = "contact@irongatesystems.com";
  const phoneDisplay = "(555) 555-5555";
  const phoneTel = "+15555555555";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteChrome />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-44 -left-60 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-200/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-60 -right-60 h-[720px] w-[720px] rounded-full bg-gradient-to-tr from-slate-800/14 via-sky-300/22 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Request an assessment.
            <span className="block text-slate-500">We’ll scope it the right way.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700">
            Share a few details about your organization, and we will outline a clear,
            practical path to installing a private AI system that fits your risk profile
            and daily operations.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact form (static markup; wire later) */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Send a message
              </p>
              <p className="mt-2 text-sm text-slate-700">
                No hype, no generic demos—just a direct conversation about your systems and your data.
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Name
                  </label>
                  <input
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Email
                  </label>
                  <input
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                    placeholder="you@company.com"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Organization
                  </label>
                  <input
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                    placeholder="Company / practice name"
                    type="text"
                    name="org"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    What are you trying to accomplish?
                  </label>
                  <textarea
                    className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                    placeholder="Data sensitivity, workflows, preferred deployment (on-prem vs secure GPU), and timelines."
                    name="message"
                  />
                </div>

                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(2,6,23,0.20)] transition hover:-translate-y-0.5 hover:bg-slate-900"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/22 to-sky-300/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Submit request</span>
                  <span className="relative ml-2">→</span>
                </button>

                <p className="text-xs text-slate-500">
                  This form is currently a placeholder. If you want it live, we’ll add a simple API route
                  and email delivery.
                </p>
              </form>
            </div>

            {/* Direct contact info (obvious) */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-7 text-white shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Reach us directly
                </p>

                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block text-lg font-semibold text-white hover:text-white/90"
                    >
                      {email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                      Phone
                    </p>
                    <a
                      href={`tel:${phoneTel}`}
                      className="mt-1 block text-lg font-semibold text-white hover:text-white/90"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

                <p className="mt-4 text-sm text-white/80">
                  Restoring the human touch by letting AI handle the rest.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div
                  className="h-56 w-full"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-transparent" />
                <div className="relative p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    What to include
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• What data types you handle (PHI, PII, legal docs, etc.)</li>
                    <li>• Where your documents live today</li>
                    <li>• Your top 3 workflows to improve</li>
                    <li>• Preferred deployment (or we’ll recommend)</li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link href="/security" className="text-sm font-medium text-slate-800 hover:text-slate-950">
                      Review security →
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-slate-800 hover:text-slate-950">
                      Review pricing →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Note
            </p>
            <p className="mt-2 text-sm text-slate-700">
              We do not route sensitive data through public AI endpoints. We scope boundaries first, then deploy.
            </p>
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
