import { formatSummary } from './article-summary.utils';
import { Article } from './article.entity';

/** Builds a short, human-readable summary line for an article. */
export function summarizeArticle(article: Article, maxLength = 120): string {
  const text = article.description || article.body;
  return formatSummary(article.title, text, maxLength);
}
