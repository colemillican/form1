// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://www.locallinkstudio.com/sitemap.xml
  `.trim();

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
