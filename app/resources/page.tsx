// app/resources/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "../../content/resources";

export const metadata: Metadata = {
  title: "Resources for Home-Service & HVAC Businesses | Local Link Studio",
  description:
    "Guides, articles, and insights on AI systems, automation, and scaling for HVAC and home-service businesses.",
};

export default function ResourcesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Resources &amp; Insights
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-300">
          Articles and guides for HVAC and home-service owners who want to grow
          with systems, automation, and AI instead of more stress.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="group rounded-2xl border border-white/5 bg-zinc-900/40 p-5 transition hover:border-emerald-400/60 hover:bg-zinc-900"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              • {article.readingTime}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-emerald-300">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              {article.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-emerald-400">
              Read article
              <span className="ml-1">↗</span>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
