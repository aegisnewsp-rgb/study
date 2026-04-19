// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
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
        'https://studyroadmap.in/study-plan-generator/',
        'https://studyroadmap.in/privacy/',
        'https://studyroadmap.in/terms/',
        ...examSlugs.map(slug => `https://studyroadmap.in/exams/${slug}/`),
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
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
