import { EntityRepository } from '@mikro-orm/mysql';
import { Article } from './article.entity';

/** Default page size used when warming the article listing cache. */
export const DEFAULT_WARMUP_LIMIT = 20;

/**
 * Pre-fetches the most recent articles so that the first listing request
 * after start-up is served from a warm persistence layer.
 */
export async function warmArticleListing(
  articleRepository: EntityRepository<Article>,
  limit = DEFAULT_WARMUP_LIMIT,
): Promise<Article[]> {
  return articleRepository.find({}, { orderBy: { createdAt: 'desc' }, limit, offset: 0 });
}
