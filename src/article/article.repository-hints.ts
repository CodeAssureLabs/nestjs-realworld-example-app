import { IArticlesRO } from './article.interface';
import { ArticleService } from './article.service';

/** Default page size used when warming the article listing cache. */
export const DEFAULT_WARMUP_LIMIT = 20;

/**
 * Pre-fetches the most recent articles so that the first listing request
 * after start-up is served from a warm persistence layer.
 */
export async function warmArticleListing(
  articleService: ArticleService,
  limit = DEFAULT_WARMUP_LIMIT,
): Promise<IArticlesRO> {
  return articleService.findAll(0, { limit, offset: 0 });
}
