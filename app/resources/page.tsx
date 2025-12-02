vimport Link from "next/link";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { articles } from "../../content/resources";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  title: "Resources & Insights for Local Businesses | LocalLink Studio",
  description:
    "Practical guides, insights, and strategies for small and home-service businesses that want to modernize with systems, automation, and AI.",
};

export default function ResourcesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">
            RESOURCES
          </p>

          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Practical insights for{" "}
            <G>modern small businesses</G>.
          </h1>

          <p className="mt-3 max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            Articles and playbooks for HVAC and local service owners who want
            to stay competitive with better systems, cleaner websites, and
            practical AI—not more noise or complexity.
          </p>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                LATEST ARTICLES
              </p>
              <h2
                className={`${heroFont.className} mt-2 text-[clamp(20px,3vw,26px)] font-semibold tracking-tight text-white`}
              >
                Learn how to turn your website and systems into real leverage.
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-300">
              Every article is written with owners in mind—no fluff, no jargon.
              Just clear explanations of what to fix, what to automate, and
              what actually moves the needle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-[0_24px_55px_rgba(0,0,0,0.75)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="mt-3 text-base sm:text-[17px] font-semibold text-white group-hover:text-emerald-200">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
                  {article.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-300">
                  <span>Read article</span>
                  <span className="text-[13px] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
