import type { ExamTemplate, Subject } from '../types';

import { arabic } from './subjects/arabic';
import { mathematics } from './subjects/mathematics';

const subjects: Subject[] = [
    arabic,
    mathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sgpat',
  examName: 'Saudi General Aptitude Test (SGPAT)',
  country: 'saudi',
  description: "Saudi General Aptitude Test (Qiyas/القدرات) — ETEC's national aptitude test for verbal and quantitative reasoning, used by Saudi universities as one component of an admission decision.",
  examPattern: "The test is built from verbal and quantitative reasoning rather than from subject knowledge. ETEC's own guidance lists the verbal side as semantic relationships — analogy, related terms, odd-one-out — and linguistic structures such as sentence completion and reading, with the quantitative side carrying the reasoning load. The paper-delivered sitting is split into several short timed sections rather than two long halves, and some of those questions are experimental and never count towards your score, so attempt every one. A computer-delivered version runs to a different structure and a different question count — confirm which form you have been assigned before you plan your revision.",
  eligibility: "Open to candidates sitting the test as part of a Saudi university application — check the current eligibility notice on ETEC's Qiyas service page before you register. ETEC sets no pass mark of its own; the score that matters is the minimum your target university and programme set, and those minimums differ between programmes and institutions. Results stay valid for five years from the test date.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Saudi General Aptitude Test (SGPAT) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Saudi General Aptitude Test (SGPAT) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Saudi General Aptitude Test (SGPAT) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Saudi General Aptitude Test (SGPAT)',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Work in short timed blocks built the way the paper is built, rather than by textbook chapter, and keep the verbal and quantitative sides rotating from the first week so neither goes cold. Full-length sets come last: build them in the section format you have actually been assigned, not the one you assume you will get, because the paper and computer versions do not match. Treat any practice score as a practice number — what matters is the score ETEC reports and how your target university weighs it. Confirm the current sittings and registration route at https://etec.gov.sa/en/service/Generalabilitytest/servicegoal before fixing a calendar.',
  commonMistakes: [
    'Timing the paper as two long halves — it runs as five separate 25-minute sections, and a section clock does not pause for you.',
    'Leaning on a past paper you have already worked through. ETEC re-forms the paper for each sitting, so recall of an old question tells you about the old paper.',
    'Reading a forum cut-off as an offer — each university builds its own admission composite, so the same result can rank differently at two of them.',
    'Fixing your calendar from last year\'s dates. Sittings follow the academic term, so confirm the current ones at https://etec.gov.sa/en/service/Generalabilitytest/servicegoal.',
    'Converting a practice score into a predicted rank. What you compute yourself is not the reported score, which the university combines with your school results.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://etec.gov.sa/en/service/Generalabilitytest/servicegoal',
};

export default exam;
