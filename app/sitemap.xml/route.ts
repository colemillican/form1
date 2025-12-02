// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { articles } from "../../content/resources";

export async function GET() {
  const baseUrl = "https://www.locallinkstudio.com";

  // Static pages
  const staticPages = [
    "",
    "/services",
    "/pricing",
    "/process",
    "/contact",
    "/about",
    "/resources",
  ];

  const staticUrls = staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `;
    })
    .join("");

  // Dynamic article pages
  const articleUrls = articles
    .map((article) => {
      return `
        <url>
          <loc>${baseUrl}/resources/${article.slug}</loc>
          <lastmod>${article.date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    })
    .join("");

  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${articleUrls}
    </urlset>
  `.trim();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
