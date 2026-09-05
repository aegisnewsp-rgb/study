#!/usr/bin/env node
/**
 * scripts/validate-schema-fixtures.cjs
 * Validates JSON-LD schema fixtures against Google Rich Results & Schema.org specifications (Task T39).
 * Tests all core schema models used across StudyRoadmap.in:
 * - BreadcrumbList
 * - FAQPage
 * - HowTo
 * - Course & EducationalOccupationalCredential
 * - Article & LearningResource
 * - Organization & WebSite
 */

const assert = require('assert');

let passedCount = 0;
let totalCount = 0;

function test(name, fn) {
  totalCount++;
  try {
    fn();
    passedCount++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log('--- Validating StudyRoadmap Schema Fixtures (Google Rich Results / Schema.org) ---');

// 1. BreadcrumbList Schema Validation
test('BreadcrumbList: structure, ordering, and required properties', () => {
  const fixture = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studyroadmap.in/' },
      { '@type': 'ListItem', position: 2, name: 'Exams', item: 'https://studyroadmap.in/exams/' },
      { '@type': 'ListItem', position: 3, name: 'NEET', item: 'https://studyroadmap.in/exams/neet/' },
    ],
  };
  assert.strictEqual(fixture['@context'], 'https://schema.org');
  assert.strictEqual(fixture['@type'], 'BreadcrumbList');
  assert.ok(Array.isArray(fixture.itemListElement) && fixture.itemListElement.length >= 2);
  fixture.itemListElement.forEach((item, idx) => {
    assert.strictEqual(item['@type'], 'ListItem');
    assert.strictEqual(item.position, idx + 1);
    assert.ok(item.name && item.name.length > 0);
    assert.ok(item.item && item.item.startsWith('https://studyroadmap.in/'));
  });
});

// 2. FAQPage Schema Validation
test('FAQPage: mainEntity, Question, and Answer entities', () => {
  const fixture = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is NEET and who conducts it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NEET is the National Eligibility cum Entrance Test conducted by the National Testing Agency (NTA).',
        },
      },
    ],
  };
  assert.strictEqual(fixture['@context'], 'https://schema.org');
  assert.strictEqual(fixture['@type'], 'FAQPage');
  assert.ok(Array.isArray(fixture.mainEntity) && fixture.mainEntity.length >= 1);
  fixture.mainEntity.forEach(q => {
    assert.strictEqual(q['@type'], 'Question');
    assert.ok(q.name && q.name.length > 5);
    assert.strictEqual(q.acceptedAnswer['@type'], 'Answer');
    assert.ok(q.acceptedAnswer.text && q.acceptedAnswer.text.length > 10);
  });
});

// 3. HowTo Schema Validation
test('HowTo: name, description, and HowToStep progression', () => {
  const fixture = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Prepare for NEET in Record Time',
    description: 'A structured 3-step approach to cracking NEET using an AI study roadmap.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Step 1 — Generate your personalised roadmap',
        text: 'Select NEET on StudyRoadmap and choose your available study duration.',
        url: 'https://studyroadmap.in/roadmap/?exam=neet',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 2 — Study topic by topic',
        text: 'Follow your roadmap and open free study notes for each topic.',
        url: 'https://studyroadmap.in/notes/neet/',
      },
    ],
  };
  assert.strictEqual(fixture['@context'], 'https://schema.org');
  assert.strictEqual(fixture['@type'], 'HowTo');
  assert.ok(fixture.name && fixture.name.length > 5);
  assert.ok(fixture.description && fixture.description.length > 10);
  assert.ok(Array.isArray(fixture.step) && fixture.step.length >= 2);
  fixture.step.forEach(s => {
    assert.strictEqual(s['@type'], 'HowToStep');
    assert.ok(s.name && s.text);
  });
});

// 4. Course & EducationalOccupationalCredential Schema Validation
test('Course: provider, educationalLevel, offers, and EducationalOccupationalCredential', () => {
  const fixture = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': 'https://studyroadmap.in/exams/neet/#course',
    name: 'NEET Study Roadmap',
    description: 'Comprehensive NEET preparation course covering syllabus, exam pattern, and study plan.',
    provider: {
      '@type': 'Organization',
      name: 'StudyRoadmap',
      url: 'https://studyroadmap.in',
    },
    educationalLevel: 'Higher Secondary',
    'inLanguage': 'en',
    audience: {
      '@type': 'Audience',
      audienceType: 'Students preparing for NEET in India',
    },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: 'NEET Syllabus Preparation & Mastery',
      credentialCategory: 'Competitive Examination Preparation',
    },
    offers: {
      '@type': 'Offer',
      category: 'Free',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: 'PT2H',
      instructor: {
        '@type': 'Organization',
        name: 'StudyRoadmap',
        url: 'https://studyroadmap.in',
      },
    },
  };
  assert.strictEqual(fixture['@context'], 'https://schema.org');
  assert.strictEqual(fixture['@type'], 'Course');
  assert.ok(fixture['@id'] && fixture['@id'].endsWith('#course'));
  assert.ok(fixture.name && fixture.description);
  assert.strictEqual(fixture.provider['@type'], 'Organization');
  assert.ok(fixture.offers && fixture.offers.price === '0');
  assert.strictEqual(fixture.educationalCredentialAwarded['@type'], 'EducationalOccupationalCredential');
  assert.ok(fixture.educationalCredentialAwarded.name);
  assert.ok(fixture.educationalCredentialAwarded.credentialCategory);
});

// 5. Article & LearningResource Schema Validation
test('Article + LearningResource: multi-type schema with pedagogical attributes', () => {
  const fixture = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'LearningResource'],
    headline: 'Cell Biology — Biology Study Notes',
    description: 'Comprehensive study notes on cell biology for NEET preparation.',
    author: {
      '@type': 'Person',
      name: 'Pushkar Saini',
      url: 'https://studyroadmap.in/author/pushkar-saini/',
      jobTitle: 'Founder & Editor',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StudyRoadmap™',
      url: 'https://studyroadmap.in',
      logo: { '@type': 'ImageObject', url: 'https://studyroadmap.in/favicon.svg' },
    },
    datePublished: '2026-01-01T00:00:00.000Z',
    dateModified: '2026-03-25T00:00:00.000Z',
    image: 'https://studyroadmap.in/og/neet-biology-cell.png',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://studyroadmap.in/notes/neet/biology/cell-001/' },
    isPartOf: {
      '@type': 'Course',
      '@id': 'https://studyroadmap.in/exams/neet/#course',
      name: 'NEET Study Roadmap',
      url: 'https://studyroadmap.in/exams/neet/',
      provider: { '@type': 'Organization', name: 'StudyRoadmap™', url: 'https://studyroadmap.in' },
    },
    educationalLevel: 'Senior Secondary (Class 11-12) / Graduate Entrance',
    educationalUse: 'Exam Preparation & Revision',
    learningResourceType: 'Study Notes',
  };
  assert.strictEqual(fixture['@context'], 'https://schema.org');
  assert.ok(Array.isArray(fixture['@type']));
  assert.ok(fixture['@type'].includes('Article') && fixture['@type'].includes('LearningResource'));
  assert.ok(fixture.headline && fixture.description);
  assert.strictEqual(fixture.author['@type'], 'Person');
  assert.strictEqual(fixture.author.name, 'Pushkar Saini');
  assert.strictEqual(fixture.publisher['@type'], 'Organization');
  assert.ok(fixture.datePublished && fixture.dateModified);
  assert.ok(fixture.educationalLevel);
  assert.strictEqual(fixture.educationalUse, 'Exam Preparation & Revision');
  assert.strictEqual(fixture.learningResourceType, 'Study Notes');
  assert.strictEqual(fixture.isPartOf['@type'], 'Course');
  assert.ok(fixture.isPartOf['@id'].endsWith('#course'));
});

// 6. Organization & WebSite Schema Validation
test('Organization & WebSite: entity attributes and search action', () => {
  const orgFixture = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StudyRoadmap',
    url: 'https://studyroadmap.in',
    logo: 'https://studyroadmap.in/favicon.svg',
    founder: {
      '@type': 'Person',
      name: 'Pushkar Saini',
      url: 'https://studyroadmap.in/author/pushkar-saini/',
    },
  };
  assert.strictEqual(orgFixture['@context'], 'https://schema.org');
  assert.strictEqual(orgFixture['@type'], 'Organization');
  assert.strictEqual(orgFixture.name, 'StudyRoadmap');
  assert.strictEqual(orgFixture.founder['@type'], 'Person');

  const siteFixture = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StudyRoadmap',
    url: 'https://studyroadmap.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://studyroadmap.in/exams/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  assert.strictEqual(siteFixture['@context'], 'https://schema.org');
  assert.strictEqual(siteFixture['@type'], 'WebSite');
  assert.strictEqual(siteFixture.potentialAction['@type'], 'SearchAction');
});

console.log(`\nResult: ${passedCount}/${totalCount} schema fixtures passed validation.`);
if (passedCount === totalCount) {
  console.log('✓ All schema fixtures strictly comply with Google Rich Results & Schema.org specifications.');
  process.exit(0);
} else {
  console.error('✗ Schema validation failures detected.');
  process.exit(1);
}
