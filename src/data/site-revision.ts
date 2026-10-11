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

  // 2. BUILD_DATE, set by deploy.sh as a Docker build-arg (deploy.sh:104).
  //    This MUST outrank the static JSON below. The Docker build context excludes
  //    .git/ (.dockerignore), so step 1 always throws inside the image build; the
  //    committed site-revision.json is a snapshot that only refreshes when someone
  //    remembers to run scripts/update-revision.cjs. Preferring it here made every
  //    Docker deploy publish a false "Last revised" date and a stale commit SHA on
  //    the homepage footer and on /revision.json. The build date is always true.
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

  // 3. Last resort: static site-revision.json. Only reached when git is absent AND
  //    BUILD_DATE was not passed, so this value is unverifiable — treat it as
  //    possibly stale rather than as deploy truth.
  try {
    const jsonPath = join(process.cwd(), 'src', 'data', 'site-revision.json');
    if (existsSync(jsonPath)) {
      const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
      if (data && data.commit && data.display) {
        return data;
      }
    }
  } catch {}

  // 4. Safe fallback
  return {
    commit: '090d2682',
    iso: '2026-09-07T08:08:12+00:00',
    date: '2026-09-07',
    display: '07 Sep 2026',
  };
}
