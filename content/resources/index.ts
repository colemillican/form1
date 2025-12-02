// content/resources/index.ts
import AiAgentsForHvacArticle, {
  meta as aiAgentsForHvacMeta,
} from "./ai-agents-for-hvac";

import AutomateFollowupArticle, {
  meta as automateFollowupMeta,
} from "./automate-customer-followup";

import ScaleHvacArticle, {
  meta as scaleHvacMeta,
} from "./how-to-scale-your-hvac-company";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO string
  readingTime: string;
  tags: string[];
};

export type Article = ArticleMeta & {
  component: React.ComponentType;
};

export const articles: Article[] = [
  { ...aiAgentsForHvacMeta, component: AiAgentsForHvacArticle },
  { ...automateFollowupMeta, component: AutomateFollowupArticle },
  { ...scaleHvacMeta, component: ScaleHvacArticle },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
