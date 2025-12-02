import { Exo_2 } from "next/font/google";
import SiteChrome from "../../components/SiteChrome";
import { articles } from "../../../content/resources";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

export default function ArticlePage({ params }: PageProps) {
  const rawSlug = params.slug;
  const normalizedSlug = decodeURIComponent(rawSlug).toLowerCase();

  // Find article by slug (case-insensitive, more forgiving)
  const article = articles.find(
    (a) => a.slug.toLowerCase() === normalizedSlug
  );

  // If no article found, show a helpful debug screen instead of a 404
  if (!article) {
    return (
      <SiteChrome>
        <section className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8">
            <h1
              className={`${heroFont.className} text-[clamp(26px,3.6vw,40px)] font-bold tracking-tight text-red-300`}
            >
              Article not found
            </h1>

            <p className="mt-4 text-sm text-zinc-300">
              The URL slug{" "}
              <code className="rounded bg-zinc-900 px-1 py-0.5">
                {rawSlug === "" ? "(empty string)" : rawSlug}
              </code>{" "}
              didn&apos;t match any known article.
            </p>

            <p className="mt-6 text-sm text-zinc-300">
              Known slugs (from <code>content/resources/index.ts</code>):
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm text-zinc-200">
              {articles.map((a) => (
                <li key={a.slug}>
                  <code className="rounded bg-zinc-900 px-1 py-0.5">
                    {a.slug}
                  </code>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-zinc-300">
              Make sure the slug in your article&apos;s{" "}
              <code>meta.slug</code> matches the part of the URL after{" "}
              <code>/resources/</code>, and that the Resources page links use{" "}
              <code>{`/resources/${"{article.slug}"}`}</code>.
            </p>

            <div className="mt-8">
              <a
                href="/resources"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-emerald-300 hover:text-emerald-200"
              >
                <span className="text-[14px]">←</span>
                <span>Back to all resources</span>
              </a>
            </div>
          </div>
        </section>
      </SiteChrome>
    );
  }

  // If we DID find the article, render it nicely
  const ArticleComponent = article.component;
  const publishedDate = new Date(article.date);

  return (
    <SiteChrome>
      {/* HEADER */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            RESOURCES •{" "}
            {publishedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            • {article.readingTime}
          </p>

          <h1
            className={`${heroFont.className} mt-3 text-[clamp(26px,3.6vw,40px)] font-bold tracking-tight text-white`}
          >
            {article.title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            {article.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/resources"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-300 hover:text-emerald-300"
            >
              <span className="text-[14px]">←</span>
              <span>Back to all resources</span>
            </a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 sm:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
            <ArticleComponent />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
