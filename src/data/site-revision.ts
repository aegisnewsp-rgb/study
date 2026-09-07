import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface SiteRevision {
  commit: string;
  iso: string;
  date: string;
  display: string;
  updatedAt?: string;
}

export function getSiteRevision(): SiteRevision {
  // 1. Try git live query (e.g. host build where .git is present)
  try {
    const commit = execSync('git rev-parse --short HEAD', {
      timeout: 1500,
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim();
    const iso = execSync('git log -1 --format=%cd --date=iso-strict', {
      timeout: 1500,
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim();
    const display = execSync('git log -1 --format=%cd --date=format:"%d %b %Y"', {
      timeout: 1500,
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim();
    if (commit && display) {
      return {
        commit,
        iso: iso || new Date().toISOString(),
        date: iso ? iso.slice(0, 10) : '2026-09-07',
        display,
      };
    }
  } catch {
    // Git not available (e.g. inside Docker container)
  }

  // 2. Read from static site-revision.json (copied into image during build)
  try {
    const jsonPath = join(process.cwd(), 'src', 'data', 'site-revision.json');
    if (existsSync(jsonPath)) {
      const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
      if (data && data.commit && data.display) {
        return data;
      }
    }
  } catch {}

  // 3. Fallback to BUILD_DATE environment variable if set by Docker build-arg
  if (process.env.BUILD_DATE) {
    try {
      const sec = parseInt(process.env.BUILD_DATE, 10);
      if (!isNaN(sec) && sec > 0) {
        const d = new Date(sec * 1000);
        return {
          commit: 'live',
          iso: d.toISOString(),
          date: d.toISOString().slice(0, 10),
          display: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        };
      }
    } catch {}
  }

  // 4. Safe fallback
  return {
    commit: '090d2682',
    iso: '2026-09-07T08:08:12+00:00',
    date: '2026-09-07',
    display: '07 Sep 2026',
  };
}
