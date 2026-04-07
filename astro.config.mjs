// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { readFileSync } from 'fs';

// Load all exam slugs from exams.json to include in sitemap
const EXAMS_JSON_PATH = path.resolve('./public/exams.json');
let examSlugs = [];
try {
  const data = JSON.parse(readFileSync(EXAMS_JSON_PATH, 'utf8'));
  examSlugs = (data.exams || []).map(e => e.examId).filter(Boolean);
} catch (e) {
  console.warn('Could not load exams.json for sitemap:', e.message);
}

export default defineConfig({
  site: 'https://studyroadmap.in',
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
        ...examSlugs.map(slug => `https://studyroadmap.in/exams/${slug}/`),
      ],
    }),
  ],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@data': path.resolve('./src/data'),
      },
    },
  },
});
