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
      customPages: [
        'https://studyroadmap.in/',
        'https://studyroadmap.in/about/',
        'https://studyroadmap.in/contact/',
        'https://studyroadmap.in/feedback/',
        'https://studyroadmap.in/exams/',
        'https://studyroadmap.in/exams/neet/',
        'https://studyroadmap.in/exams/jeemain/',
        'https://studyroadmap.in/exams/jeeadvanced/',
        'https://studyroadmap.in/exams/upsc/',
        'https://studyroadmap.in/exams/ssc-cgl/',
        'https://studyroadmap.in/exams/cat/',
        'https://studyroadmap.in/exams/gate/',
        'https://studyroadmap.in/exams/clat/',
        'https://studyroadmap.in/exams/nda/',
        'https://studyroadmap.in/exams/ibps-po/',
        'https://studyroadmap.in/exams/sbi-po/',
        'https://studyroadmap.in/exams/fmge/',
        'https://studyroadmap.in/exams/mdcat/',
        'https://studyroadmap.in/exams/jamb/',
        'https://studyroadmap.in/exams/waec/',
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
