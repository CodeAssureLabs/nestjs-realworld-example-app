import { Article } from './article.entity';

/** Joins a title and body excerpt into a single summary line, truncated to maxLength. */
export function formatSummary(title: string, text: string, maxLength: number): string {
  const line = `${title}: ${text}`;
  return line.length > maxLength ? `${line.slice(0, maxLength - 1)}…` : line;
}

/** Formats summaries for a list of articles, one per line. */
export function formatSummaries(articles: Article[], maxLength = 120): string {
  return articles
    .map((article) => formatSummary(article.title, article.description || article.body, maxLength))
    .join('\n');
}
