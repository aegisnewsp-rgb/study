// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://studyroadmap.com',
  integrations: [
    react(),
    sitemap({
      customPages: [
        'https://studyroadmap.com/',
        'https://studyroadmap.com/about/',
        'https://studyroadmap.com/contact/',
        'https://studyroadmap.com/feedback/',
        'https://studyroadmap.com/exams/',
        'https://studyroadmap.com/exams/neet/',
        'https://studyroadmap.com/exams/jeemain/',
        'https://studyroadmap.com/exams/jeeadvanced/',
        'https://studyroadmap.com/exams/upsc/',
        'https://studyroadmap.com/exams/ssc-cgl/',
        'https://studyroadmap.com/exams/cat/',
        'https://studyroadmap.com/exams/gate/',
        'https://studyroadmap.com/exams/clat/',
        'https://studyroadmap.com/exams/nda/',
        'https://studyroadmap.com/exams/ibps-po/',
        'https://studyroadmap.com/exams/sbi-po/',
        'https://studyroadmap.com/exams/fmge/',
        'https://studyroadmap.com/exams/mdcat/',
        'https://studyroadmap.com/exams/jamb/',
        'https://studyroadmap.com/exams/waec/',
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
