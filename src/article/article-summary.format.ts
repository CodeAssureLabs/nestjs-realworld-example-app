/** Joins a title and body excerpt into a single summary line, truncated to maxLength. */
export function formatSummary(title: string, text: string, maxLength: number): string {
  const line = `${title}: ${text}`;
  return line.length > maxLength ? `${line.slice(0, maxLength - 1)}…` : line;
}
