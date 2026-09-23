import { EntityRepository, QueryOrder } from '@mikro-orm/mysql';

import { Article } from './article.entity';
import { IArticlesRO } from './article.interface';

/** Default page size used when warming the article listing cache. */
export const DEFAULT_WARMUP_LIMIT = 20;

/**
 * Pre-fetches the most recent articles so that the first listing request
 * after start-up is served from a warm persistence layer.
 */
export async function warmArticleListing(
  articleRepository: EntityRepository<Article>,
  limit = DEFAULT_WARMUP_LIMIT,
): Promise<IArticlesRO> {
  const [articles, articlesCount] = await articleRepository.findAndCount(
    {},
    { populate: ['author'], orderBy: { createdAt: QueryOrder.DESC }, limit },
  );

  return { articles: articles.map(a => a.toJSON()), articlesCount };
}
