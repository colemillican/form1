// app/resources/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  articles,
  getArticleBySlug,
} from "../../../content/resources"; // Relative import: adjust if needed

// Generate static params so Next.js knows the routes at build time
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Dynamic metadata for SEO
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Local Link Studio",
    };
  }

  const url = `https://www.locallinkstudio.com/resources/${article.slug}`;

  return {
    title: `${article.title} | Local Link Studio`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Local Link Studio`,
      description: article.description,
      url,
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const ArticleComponent = article!.component;
  const publishedDate = new Date(article!.date);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article!.title,
    description: article!.description,
    datePublished: article!.date,
    author: {
      "@type": "Organization",
      name: "Local Link Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Local Link Studio",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.locallinkstudio.com/resources/${article!.slug}`,
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* JSON-LD SEO data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-8">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
          {publishedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          • {article!.readingTime}
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          {article!.title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-zinc-300">
          {article!.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {article!.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article body */}
      <ArticleComponent />
    </main>
  );
}
