// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { readFileSync, readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';

// AdSense/a11y: every note body opens with a markdown `# {topicName}` that
// renders as a SECOND <h1> (the note template already emits <h1>{topicName}</h1>),
// and the body title then jumps straight to the `### 🟢 Lite` tier h3 (h1->h3 skip).
// Demote ALL body-level <h1> to <h2> at the render layer so each note page has
// exactly one <h1> and a sequential outline. Note bodies are the only markdown
// surface, so .astro page <h1>s are untouched (not markdown). The tier-color
// inline script keys off h3 only, and no TOC consumer exists — verified safe.
function rehypeDemoteBodyH1() {
  return (tree) => {
    const walk = (node) => {
      if (node.children) for (const c of node.children) {
        if (c.type === 'element' && c.tagName === 'h1') c.tagName = 'h2';
        walk(c);
      }
    };
    walk(tree);
  };
}

// Load all exam slugs from exams.json to include in sitemap
const EXAMS_JSON_PATH = path.resolve('./public/exams.json');
let examSlugs = [];
try {
  const data = JSON.parse(readFileSync(EXAMS_JSON_PATH, 'utf8'));
  examSlugs = (data.exams || []).map(e => e.examId).filter(Boolean);
} catch (e) {
  console.warn('Could not load exams.json for sitemap:', e.message);
}

// AdSense 2026: bulk-publish flag fix.
// Pre-build a URL→lastmod map from note frontmatter `lastUpdated` (preferred)
// or git mtime of the source file (fallback). Replaces the single `new Date()`
// applied to all 2799 URLs (a textbook bulk-publish reviewer signal).
const NOTES_DIR = path.resolve('./src/content/notes');
const SITE = 'https://studyroadmap.in';
const noteLastMod = new Map();
function walkNotes(dir, examSubject = []) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walkNotes(full, [...examSubject, ent.name]);
    } else if (/\.(md|mdx)$/.test(ent.name)) {
      const slug = ent.name.replace(/\.(md|mdx)$/, '');
      if (examSubject.length < 2) continue;
      const url = `${SITE}/notes/${examSubject.join('/')}/${slug}/`;
      let lastmod;
      try {
        const src = readFileSync(full, 'utf8');
        const m = src.match(/^lastUpdated:\s*["']?(\d{4}-\d{2}-\d{2})/m);
        if (m) lastmod = new Date(m[1] + 'T00:00:00Z');
      } catch {}
      if (!lastmod) {
        try {
          const iso = execSync(`git -C "${path.resolve('.')}" log -1 --format=%cI -- "${full}"`, { encoding: 'utf8' }).trim();
          if (iso) lastmod = new Date(iso);
        } catch {}
      }
      if (!lastmod) {
        try { lastmod = statSync(full).mtime; } catch {}
      }
      if (lastmod) noteLastMod.set(url, lastmod);
    }
  }
}
try { walkNotes(NOTES_DIR); } catch (e) { console.warn('sitemap lastmod walk failed:', e.message); }
console.log(`sitemap: loaded ${noteLastMod.size} per-URL lastmod entries`);

export default defineConfig({
  site: 'https://studyroadmap.in',
  markdown: {
    rehypePlugins: [rehypeDemoteBodyH1],
  },
  integrations: [
    react(),
    sitemap({
      customPages: [
        'https://studyroadmap.in/',
        'https://studyroadmap.in/about/',
        'https://studyroadmap.in/contact/',
        'https://studyroadmap.in/feedback/',
        'https://studyroadmap.in/exams/',
        'https://studyroadmap.in/notes/',
        'https://studyroadmap.in/roadmap/',
        'https://studyroadmap.in/study-plan-generator/',
        'https://studyroadmap.in/privacy/',
        'https://studyroadmap.in/terms/',
        ...examSlugs.map(slug => `https://studyroadmap.in/exams/${slug}/`),
      ],
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const m = noteLastMod.get(item.url);
        if (m) item.lastmod = m.toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@lib': path.resolve('./src/lib'),
        '@utils': path.resolve('./src/utils'),
        '@data': path.resolve('./src/data'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets'),
      },
    },
  },
});
