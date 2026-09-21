// Ontario Secondary School Literacy Test (OSSLT) — Education Quality
// and Accountability Office (EQAO).
//
// Awarding body: Education Quality and Accountability Office (EQAO),
// an arm's-length agency of the Ontario Ministry of Education.
// Successful completion of the OSSLT is one of the requirements for
// the Ontario Secondary School Diploma (OSSD). The test is grounded
// in Ontario Curriculum literacy expectations for all subjects up to
// the end of Grade 9 and is typically first attempted in Grade 10.
//
// Source: EQAO OSSLT landing page,
//   https://www.eqao.com/the-assessments/osslt/
// Source: EQAO OSSLT Framework,
//   https://www.eqao.com/wp-content/uploads/2021/01/framework-osslt.pdf
// Source: EQAO OSSLT FAQ,
//   https://www.eqao.com/frequently-asked-questions/faq-osslt/

import type { ExamTemplate, Subject } from '../types';

import { reading } from './subjects/reading';
import { writing } from './subjects/writing';

const subjects: Subject[] = [
    reading,
    writing,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'osslt',
  examName: 'OSSLT: Ontario Secondary School Literacy Test',
  country: 'canada',
  description: 'The Ontario Secondary School Literacy Test (OSSLT) is a computer-based provincial assessment administered by the Education Quality and Accountability Office (EQAO), an arm\'s-length agency of the Ontario Ministry of Education. It measures whether students are meeting the minimum standard for literacy across all subjects up to the end of Grade 9. The OSSLT is grounded in the Ontario Curriculum\'s literacy expectations for every subject, and successful completion is one of the requirements for the Ontario Secondary School Diploma (OSSD). Students typically first attempt the OSSLT in Grade 10 and may retake it in subsequent administrations until they pass.',
  examPattern: 'Two sessions (Session A and Session B), normally sat on the same day with a break in between but scheduled separately by the school if needed. The OSSLT uses a linear test design and is computer-based. The two sessions together contain a set of selected-response items plus two open-response items (one reading, one writing). Reading selections are drawn from four types: Real-Life Narrative, Information Paragraph, News Report and Dialogue. Each selection is followed by multiple-select items targeting reading skills and is paired with conventions items where applicable. Writing tasks include a News Report and a Series of Paragraphs expressing an opinion. Verify the live item count, session timing and platform on the EQAO OSSLT landing page before each administration.',
  eligibility: 'All Ontario students enrolled in a school that follows the Ontario Curriculum are eligible to attempt the OSSLT. The first scheduled administration is in the second semester of Grade 10. Students who do not pass may retake the OSSLT in a subsequent administration; students who do not pass after multiple attempts may satisfy the literacy graduation requirement through the Ontario Secondary School Literacy Course (OSSLC). Accommodations are available for English Language Learners, students with Individual Education Plans (IEPs), and students with documented special education needs; confirm the live accommodations policy on eqao.com.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for OSSLT (EQAO) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for OSSLT (EQAO) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for OSSLT (EQAO) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for OSSLT (EQAO) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for OSSLT (EQAO) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for OSSLT (EQAO) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for OSSLT (EQAO) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for OSSLT (EQAO) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for OSSLT (EQAO) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for OSSLT (EQAO) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for OSSLT (EQAO) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for OSSLT (EQAO) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for OSSLT (EQAO) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for OSSLT (EQAO) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for OSSLT (EQAO) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for OSSLT (EQAO) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for OSSLT (EQAO) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for OSSLT (EQAO) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the OSSLT (EQAO)',
    duration: '2d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Prioritise the two long-writing tasks (News Report, Series of Paragraphs) and the three explicit reading skills (Reading 1, 2, 3). Drill the four reading selection types and the OSSLT conventions rubric.',
  },
  prepOverview:
    'OSSLT preparation works best as a balanced Reading and Writing pass: Reading first (the three reading skills plus the four selection types), then Writing (the two long-writing tasks and conventions). For students sitting the OSSLT in Grade 10, a one-month plan can carry a full Reading skills pass plus one timed long-writing task per day in the last week; a two-month plan can layer two full Reading selection-type passes before the writing block. The single highest-leverage habit is timed practice with the four EQAO reading selection types (Real-Life Narrative, Information Paragraph, News Report, Dialogue) and with the two long-writing task stems (News Report, Series of Paragraphs). Use the EQAO sample assessments and the OSSLT Framework as the question-style reference. Re-check session timing, accommodations, and the live administration window on https://www.eqao.com/the-assessments/osslt/ before committing a revision plan to a student (canada).',
  commonMistakes: [
    'Treating the OSSLT as a reading comprehension test only — the long-writing tasks carry a large share of the marks and need timed, hand-written practice.',
    'Skipping the News Report selection type because it looks short — News Report items are heavily weighted and test a distinct set of skills (lead, who/what/when/where/why, graphic elements).',
    'Writing the Series-of-Paragraphs response as a single paragraph — the rubric requires clearly separate paragraphs with a stated opinion and supported reasons.',
    'Ignoring conventions (spelling, punctuation, subject-verb agreement) inside the long-writing tasks — the rubric scores conventions separately and drops the language score on frequent errors.',
    'Using only novel-style passages for Reading practice — the OSSLT is built from four selection types, and Real-Life Narrative plus Dialogue each have their own pattern that does not transfer from fiction study.',
    'Leaving the OSSLC backup path unknown — students who do not pass the OSSLT after multiple administrations may meet the literacy requirement through the Ontario Secondary School Literacy Course; check the live policy on eqao.com.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.eqao.com/the-assessments/osslt/',
};

export default exam;
