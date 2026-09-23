import { summarizeArticle } from './article-summary.helper';
import { Article } from './article.entity';
export { formatSummary } from './article-summary.utils';

/** Formats summaries for a list of articles, one per line. */
export function formatSummaries(articles: Article[], maxLength = 120): string {
  return articles.map((article) => summarizeArticle(article, maxLength)).join('\n');
}
