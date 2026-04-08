#!/usr/bin/env node
/**
 * IndexNow submission script — ping Bing + Yandex after each deploy
 * for instant indexing of new/updated pages.
 *
 * Usage: node scripts/submit-indexnow.cjs
 *
 * This submits the key pages to IndexNow API for instant discovery.
 * Run this after each deploy or content update.
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const INDEXNOW_KEY = '768e8e4ccf584461a27d47565748d133';
const HOST = 'studyroadmap.in';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Core pages to always submit
const corePages = [
  '/',
  '/roadmap/',
  '/exams/',
  '/notes/',
  '/study-plan-generator/',
  '/about/',
  '/contact/',
];

// Scan dist/exams/ for generated exam pages
const distExamsBase = path.join(__dirname, '..', 'dist', 'exams');
const examPages = [];
if (fs.existsSync(distExamsBase)) {
  for (const dir of fs.readdirSync(distExamsBase, { withFileTypes: true })) {
    if (dir.isDirectory()) {
      examPages.push(`/exams/${dir.name}/`);
    }
  }
}

const allUrls = [...corePages, ...examPages].map(p => `https://${HOST}${p}`);

// Submit to IndexNow (Bing endpoint — also shared with Yandex, Seznam, Naver)
const payload = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: allUrls.slice(0, 10000), // IndexNow max 10k per request
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  console.log(`IndexNow response: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log(`Successfully submitted ${allUrls.length} URLs to IndexNow`);
  } else {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => console.log('Response:', body));
  }
});

req.on('error', (e) => console.error('IndexNow error:', e.message));
req.write(payload);
req.end();

console.log(`Submitting ${allUrls.length} URLs (${corePages.length} core + ${examPages.length} exam pages)`);
