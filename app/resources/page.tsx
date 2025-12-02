"use client";

import Link from "next/link";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";
import { articles } from "../../content/resources";

const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function ResourcesPage() {
  // Newest articles first
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">
            RESOURCES
          </p>

          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Practical <G>insights</G> for modern businesses.
          </h1>

          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            Actionable articles on AI, automation, website strategy, and
            systems that help local businesses grow with clarity — not chaos.
          </p>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-[0_24px_55px_rgba(0,0,0,0.75)]"
              >
                {/* BADGE + DATE */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                {/* TITLE */}
                <h3
                  className={`${heroFont.className} mt-2 text-[18px] font-semibold text-white group-hover:text-emerald-300 transition`}
                >
                  {article.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* TAGS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* READ MORE */}
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center text-[13px] font-medium text-zinc-300 group-hover:text-emerald-300">
                    Read article →
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
