// =======================================================
// TYPES
// =======================================================
import type { JSX } from "react";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  component: () => JSX.Element;
};

// =======================================================
// IMPORT YOUR ARTICLES
// =======================================================
import AiAgentsForHvac, {
  meta as aiAgentsMeta,
} from "./ai-agents-for-hvac";

import AutomateCustomerFollowup, {
  meta as automateFollowupMeta,
} from "./automate-customer-followup";

import ScaleHvacCompany, {
  meta as scaleHvacMeta,
} from "./how-to-scale-your-hvac-company";

console.log("ARTICLE IMPORTS:", {
  AiAgentsForHvac,
  aiAgentsMeta,
  AutomateCustomerFollowup,
  automateFollowupMeta,
  ScaleHvacCompany,
  scaleHvacMeta,
});

// =======================================================
// EXPORT ARTICLE LIST
// =======================================================

export const articles: Article[] = [
  { ...aiAgentsMeta, component: AiAgentsForHvac },
  { ...automateFollowupMeta, component: AutomateCustomerFollowup },
  { ...scaleHvacMeta, component: ScaleHvacCompany },
];

// =======================================================
// GET ARTICLE BY SLUG
// =======================================================
export function getArticleBySlug(slug?: string) {
  if (!slug) return undefined;

  return articles.find(
    (article) => article.slug.toLowerCase() === slug.toLowerCase()
  );
}
