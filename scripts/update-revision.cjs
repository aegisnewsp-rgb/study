#!/usr/bin/env node
// scripts/update-revision.cjs
// Generates/updates src/data/site-revision.json and public/revision.json from current git HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcJson = path.join(rootDir, 'src', 'data', 'site-revision.json');
const publicJson = path.join(rootDir, 'public', 'revision.json');

let commit = '090d2682';
let iso = new Date().toISOString();
let display = '07 Sep 2026';
let date = iso.slice(0, 10);

try {
  const gitCommit = execSync('git rev-parse --short HEAD', { cwd: rootDir, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  const gitIso = execSync('git log -1 --format=%cd --date=iso-strict', { cwd: rootDir, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  const gitDisplay = execSync('git log -1 --format=%cd --date=format:"%d %b %Y"', { cwd: rootDir, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  
  if (gitCommit) commit = gitCommit;
  if (gitIso) {
    iso = gitIso;
    date = gitIso.slice(0, 10);
  }
  if (gitDisplay) display = gitDisplay;
} catch (e) {
  // If git fails, try existing file
  if (fs.existsSync(srcJson)) {
    try {
      const existing = JSON.parse(fs.readFileSync(srcJson, 'utf-8'));
      if (existing.commit) commit = existing.commit;
      if (existing.iso) iso = existing.iso;
      if (existing.display) display = existing.display;
      if (existing.date) date = existing.date;
    } catch {}
  }
}

const revisionData = {
  commit,
  iso,
  date,
  display,
  updatedAt: new Date().toISOString()
};

fs.mkdirSync(path.dirname(srcJson), { recursive: true });
fs.mkdirSync(path.dirname(publicJson), { recursive: true });

fs.writeFileSync(srcJson, JSON.stringify(revisionData, null, 2) + '\n');
fs.writeFileSync(publicJson, JSON.stringify(revisionData, null, 2) + '\n');

console.log('Site revision updated:', `${display} (${commit})`);
