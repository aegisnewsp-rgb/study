// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://studyroadmap.in',
  integrations: [
    react(),
    sitemap(),
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
