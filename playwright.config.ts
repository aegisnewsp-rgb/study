import { defineConfig, devices } from '@playwright/test';

// Minimal Playwright config — Chromium only, runs against production by default.
// Override base via env: SR_BASE_URL=http://localhost:4321 npx playwright test
export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts$/,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: process.env.SR_BASE_URL || 'https://studyroadmap.in',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5_000,
    trace: 'off',
  },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },
  ],
});
