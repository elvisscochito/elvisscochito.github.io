/**
 * Derive a short label from a project path string.
 * Examples:
 *  - "Web dev" -> "Web"
 *  - "Data science" -> "Data"
 *  - "Mobile dev" -> "Mobile"
 *
 * Keeps behavior simple and deterministic so it can be unit-tested.
 */
export function shortLabelFromPath(path) {
  if (!path || typeof path !== 'string') return '';

  // Remove common suffixes like "dev" or "science" and any trailing whitespace
  const cleaned = path
    .replace(/\s+dev$/i, '')
    .replace(/\s+science$/i, '')
    .trim();

  return cleaned;
}

export default shortLabelFromPath;
