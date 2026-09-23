/** Default page size used when warming the article listing cache. */
export const DEFAULT_WARMUP_LIMIT = 20;

/** Query parameters for warming the article listing cache. */
export interface ArticleListingWarmupHints {
  limit: number;
  offset: number;
}

/** Returns query hints for warming the article listing cache. */
export function getArticleListingWarmupHints(
  limit = DEFAULT_WARMUP_LIMIT,
): ArticleListingWarmupHints {
  return { limit, offset: 0 };
}
