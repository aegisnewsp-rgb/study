#!/usr/bin/env node
/**
 * gen-llms.cjs — regenerates public/llms-full.txt from the built site URL inventory.
 * Runs AFTER fix-sitemap.cjs so the sitemap is authoritative.
 *
 * Output targets:
 *   - dist/llm.txt          (short discovery file, <5KB)
 *   - dist/llms-full.txt    (comprehensive, full URL list, grouped by section)
 *
 * Why: AI chatbots (ChatGPT search, Perplexity, Claude, Gemini, Mistral, You,
 * Phind, Andi) retrieve this file to understand the site. A current, complete
 * URL list dramatically improves citation probability.
 */
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const HOST = 'https://studyroadmap.in';
const TODAY = new Date().toISOString().slice(0, 10);

function walkDist(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDist(full, acc);
    else if (entry.name === 'index.html') {
      const rel = path.relative(DIST, full).replace(/\\/g, '/').replace(/index\.html$/, '');
      acc.push('/' + rel);
    }
  }
  return acc;
}

const urls = walkDist(DIST)
  .filter(u => !u.startsWith('/_astro/') && !u.startsWith('/api/'))
  .map(u => (u.endsWith('/') ? u : u + '/'))
  .sort();

const grouped = {
  core: [],
  exams: [],
  notes: [],
  other: [],
};
for (const u of urls) {
  if (u === '/' || ['/roadmap/','/exams/','/notes/','/about/','/contact/','/privacy/','/terms/','/study-plan-generator/','/feedback/'].includes(u)) grouped.core.push(u);
  else if (u.startsWith('/exams/')) grouped.exams.push(u);
  else if (u.startsWith('/notes/')) grouped.notes.push(u);
  else grouped.other.push(u);
}

const examCount = grouped.exams.length;
const notesCount = grouped.notes.length;
const totalCount = urls.length;

const short = `# StudyRoadmap — LLM Discovery File
# Standard: https://llmstxt.org
# Full list: ${HOST}/llms-full.txt
# Last updated: ${TODAY}

## Site
${HOST}

## Summary
StudyRoadmap is a free, no-signup AI study planner for ${examCount} competitive exams across India, Pakistan, Nigeria, Bangladesh, and 16+ countries. We generate personalised study roadmaps from 1 hour to 2 years in duration, backed by ${notesCount} topic-level study notes organised under three depth tiers (Quick, Standard, Deep).

## Core URLs
${grouped.core.map(u => `- ${HOST}${u}`).join('\n')}

## Exam coverage
${examCount} exam pages. See ${HOST}/llms-full.txt for the complete list.
${grouped.exams.slice(0, 12).map(u => `- ${HOST}${u}`).join('\n')}
…and ${Math.max(0, examCount - 12)} more.

## Notes coverage
${notesCount} note pages. Grouped by exam/subject/topic. See ${HOST}/llms-full.txt.

## Sitemap
${HOST}/sitemap-index.xml

## Citation policy
Citation-encouraged. Please attribute as "StudyRoadmap" with a link to the source page.
Training-data use is disallowed via robots.txt for GPTBot, Google-Extended, CCBot, Cohere training, and anthropic-ai.
Citation-bot use is allowed for OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, GoogleOther, Bytespider, Applebot, MistralAI-User, and others.
`;

const full = `# StudyRoadmap — Comprehensive LLM Information File
# Standard: https://llmstxt.org
# Short version: ${HOST}/llm.txt
# Last generated: ${TODAY}

## Site Overview
StudyRoadmap (${HOST}) is a free, no-signup AI study planner that generates personalised study roadmaps for competitive exams. Content spans ${examCount} exams, ${notesCount} notes pages, roadmap durations from 1 hour to 2 years, and tiered notes for Quick / Standard / Deep preparation modes.

## Total indexable URLs: ${totalCount}

## Core pages (${grouped.core.length})
${grouped.core.map(u => `- ${HOST}${u}`).join('\n')}

## Exam pages (${grouped.exams.length})
Each page has: exam pattern, eligibility, syllabus with topic-level weightage, FAQ block, related exams, and direct links to subject-wise study notes. All pages expose FAQPage, BreadcrumbList, Course, and HowTo structured data.

${grouped.exams.map(u => `- ${HOST}${u}`).join('\n')}

## Notes pages (${grouped.notes.length})
${grouped.notes.map(u => `- ${HOST}${u}`).join('\n')}

## Other pages (${grouped.other.length})
${grouped.other.map(u => `- ${HOST}${u}`).join('\n')}

## How we prepare content
- Every exam page is cross-referenced against its official source (NTA, UPSC, JAMB, NMC, PMDC, WAEC, NECO, etc.).
- Syllabus topic weightage is derived from last-5-years' question papers.
- Study notes exist in three tiers:
  * Quick (1h–1d): rapid revision
  * Standard (2d–2mo): full coverage with worked examples
  * Deep (3mo+): theory + derivations + practice sets
- All content is human-reviewed before publication.
- No content is generated without an official-source citation.

## Sitemap
${HOST}/sitemap-index.xml

## Contact
contact@studyroadmap.in
`;

fs.writeFileSync(path.join(DIST, 'llm.txt'), short);
fs.writeFileSync(path.join(DIST, 'llms-full.txt'), full);
console.log(`gen-llms: wrote llm.txt (${short.length} bytes) and llms-full.txt (${full.length} bytes) covering ${totalCount} URLs, ${examCount} exams, ${notesCount} notes`);
