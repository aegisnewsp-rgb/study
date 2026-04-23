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
    if (dir.isDirectory()) examPages.push(`/exams/${dir.name}/`);
  }
}

// Scan dist/notes/ (recursive) for every generated note page.
// IndexNow accepts up to 10k URLs per request; we batch if needed.
const distNotesBase = path.join(__dirname, '..', 'dist', 'notes');
const notePages = [];
function walkNotes(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkNotes(full, `${prefix}/${entry.name}`);
    else if (entry.name === 'index.html' && prefix !== '') notePages.push(`${prefix}/`);
  }
}
if (fs.existsSync(distNotesBase)) walkNotes(distNotesBase, '/notes');

const allUrls = [...corePages, ...examPages, ...notePages].map(p => `https://${HOST}${p}`);

// Submit in 5000-URL batches (IndexNow per-request cap is 10k, we use 5k for headroom).
function submit(batch) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList: batch,
    });
    const req = https.request({
      hostname: 'api.indexnow.org', port: 443, path: '/IndexNow', method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) },
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ code: res.statusCode, body: body.slice(0, 200) }));
    });
    req.on('error', e => resolve({ code: 0, body: e.message }));
    req.write(payload); req.end();
  });
}

(async () => {
  console.log(`Submitting ${allUrls.length} URLs (${corePages.length} core + ${examPages.length} exams + ${notePages.length} notes) in batches of 5000`);
  for (let i = 0; i < allUrls.length; i += 5000) {
    const batch = allUrls.slice(i, i + 5000);
    const r = await submit(batch);
    console.log(`batch ${i}-${i + batch.length - 1}: http=${r.code}${r.body ? ' ' + r.body : ''}`);
  }
})();
