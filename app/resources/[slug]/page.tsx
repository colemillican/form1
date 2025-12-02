import { notFound } from "next/navigation";
import { Exo_2 } from "next/font/google";
import SiteChrome from "../../components/SiteChrome";
import { articles, getArticleBySlug } from "@/content/resources";

const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// Pre-generate all article routes (SSG)
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// NOTE: params is now a Promise in new Next.js
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // unwrap the promise

  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const Component = article.component;
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
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.65)] prose prose-invert max-w-none">
            <Component />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
