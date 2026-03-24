export interface NewsItem {
  /** Unique URL — used as ID for dedup */
  id: string;
  /** Headline */
  title: string;
  /** Link to the article */
  url: string;
  /** Source publication name */
  source: string;
  /** ISO date string */
  published: string;
  /** ISO 3166-1 alpha-2 country code */
  country: 'india' | 'pakistan' | 'nigeria' | null;
  /** Relevant exam tags auto-detected from content */
  tags: string[];
}

let _news: NewsItem[] = [];

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const raw = require('../../news.json');
  _news = Array.isArray(raw) ? raw : [];
} catch {
  // news.json not yet created — news section stays empty
  _news = [];
}

export const NEWS: NewsItem[] = _news;

export function getCountryFlag(country: NewsItem['country']): string {
  const map: Record<string, string> = {
    india: '🇮🇳',
    pakistan: '🇵🇰',
    nigeria: '🇳🇬',
  };
  return country ? (map[country] ?? '🌐') : '🌐';
}

export function formatNewsDate(iso: string): string {
  try {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffH = diffMs / 3_600_000;
    if (diffH < 1) return 'Just now';
    if (diffH < 24) return `${Math.floor(diffH)}h ago`;
    const diffD = diffH / 24;
    if (diffD < 7) return `${Math.floor(diffD)}d ago`;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  } catch {
    return '';
  }
}
