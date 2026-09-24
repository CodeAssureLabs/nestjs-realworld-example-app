import { formatSummary } from './article-summary.format';
import { Article } from './article.entity';

/** Builds a short, human-readable summary line for an article. */
export function summarizeArticle(article: Article, maxLength = 120): string {
  const text = article.description || article.body;
  return formatSummary(article.title, text, maxLength);
}

/** Formats summaries for a list of articles, one per line. */
export function formatSummaries(articles: Article[], maxLength = 120): string {
  return articles.map((article) => summarizeArticle(article, maxLength)).join('\n');
}
