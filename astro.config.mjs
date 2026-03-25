// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://studyroadmap.in',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        // Exclude individual topic notes pages — thin placeholder content + noindex
        // Keep: /notes/ (index), /notes/{exam}/ (exam index), /notes/{exam}/{subject}/ (subject index)
        // Exclude: /notes/{exam}/{subject}/{topic}/ (individual topic pages — 4 URL segments after domain)
        const parts = page.replace('https://studyroadmap.in', '').split('/').filter(Boolean);
        // Topic pages have 4 path segments: notes/exam/subject/topicId
        const isTopicPage = parts.length === 4 && parts[0] === 'notes';
        return !isTopicPage;
      },
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
