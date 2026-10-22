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
// Source: EQAO, Unpacking the OSSLT: A Guide for Educators (September 2026),
//   https://www.eqao.com/wp-content/uploads/2026/09/unpacking-the-OSSLT.pdf
// Source: EQAO, Understanding the Opinion Essay Scoring Guides (September 2026),
//   https://www.eqao.com/wp-content/uploads/2026/09/understanding-the-opinion-essay-scoring-guides.pdf

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
  examPattern: 'Two sessions, Session A and Session B, each completed in one sitting. Session A is designed to be completed in approximately 65 minutes and Session B in approximately 75 minutes, and the sessions can be attempted one after the other, either back to back with a short break or on two different dates and times. The test is online: students use a digital device at their school, during the regular school day, and the school decides the session times inside the administration windows EQAO sets. The scored part of the test is 37 operational questions, 35 selected-response and two open-response. The reading component carries 23 selected-response reading questions plus one open-response reading question, and the writing component carries 12 selected-response writing questions plus one open-response opinion essay. There are four types of reading selection: real-life narrative, information paragraph, news report and dialogue. The opinion essay is the long-writing task: a series of paragraphs supporting an opinion, in three or more paragraphs, of approximately 500 words. Each test also embeds a field-test component whose items are not used in determining results. Outcomes are reported on a scale score from 200 to 400, with 300 the minimum for a successful outcome.',
  eligibility: 'All Ontario students enrolled in a school that follows the Ontario Curriculum are eligible to attempt the OSSLT. The first scheduled administration is in the second semester of Grade 10. Students who do not pass may retake the OSSLT in a subsequent administration. A student who has had two opportunities to write the OSSLT and has been unsuccessful at least once is eligible to enrol in the Ontario Secondary School Literacy Course (OSSLC); principals have discretion to allow a student to enrol before a second opportunity where they judge it to be in the student\'s best interest, and mature students may enrol directly. Completing either the OSSLT or the OSSLC satisfies the literacy graduation requirement for the Ontario Secondary School Diploma. Accommodations are available for English Language Learners, students with Individual Education Plans (IEPs), and students with documented special education needs; confirm the live accommodations policy on eqao.com.',
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
    strategy: 'Prioritise the opinion essay and the reading open-response task, then the selected-response writing questions, alongside the three explicit reading skills (Reading 1, 2, 3). Drill the four reading selection types and the OSSLT conventions rubric.',
  },
  prepOverview:
    'OSSLT preparation works best as a balanced Reading and Writing pass: Reading first (the three reading skills plus the four selection types), then Writing (the two long-writing tasks and conventions). For students sitting the OSSLT in Grade 10, a one-month plan can carry a full Reading skills pass plus one timed long-writing task per day in the last week; a two-month plan can layer two full Reading selection-type passes before the writing block. The single highest-leverage habit is timed practice with the four EQAO reading selection types (Real-Life Narrative, Information Paragraph, News Report, Dialogue) and with the opinion essay prompt and the reading open-response task. Use the EQAO sample assessments and the OSSLT Framework as the question-style reference. The 2026-27 administration windows are 3 November to 30 November 2026 and 30 March to 19 April 2027, with individual results reported by the end of January 2027 and the end of May 2027 respectively, and EQAO publishes the current window and session information on https://www.eqao.com/the-assessments/osslt/.',
  commonMistakes: [
    'Treating the OSSLT as a reading comprehension test only — the open-response reading question and the opinion essay are scored on their own rubrics and need timed, typed practice on a keyboard.',
    'Skipping the News Report selection type because it looks short — News Report items test a distinct set of skills (lead, who/what/when/where/why, graphic elements).',
    'Writing the opinion essay as a single paragraph — EQAO requires three or more paragraphs, an introduction, a development section that may run to more than one paragraph, and a conclusion, with an opinion stated and supported.',
    'Ignoring conventions (spelling, punctuation, subject-verb agreement) in the opinion essay — EQAO scores it on a separate Conventions rubric, and a response of fewer than 30 words, excluding the prompt wording, is coded at the lowest conventions level.',
    'Using only novel-style passages for Reading practice — the OSSLT is built from four selection types, and Real-Life Narrative plus Dialogue each have their own pattern that does not transfer from fiction study.',
    'Leaving the OSSLC backup path unknown — a student who has had two opportunities to write the OSSLT and has been unsuccessful at least once is eligible for the Ontario Secondary School Literacy Course, and principals may allow enrolment before a second attempt where it serves the student\'s best interest.'
  ],
  lastUpdated: '2026-10-20',
  officialSource: 'https://www.eqao.com/the-assessments/osslt/',
  conductingBody: 'Education Quality and Accountability Office (EQAO)',
};

export default exam;
