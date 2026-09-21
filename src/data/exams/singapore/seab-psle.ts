// Singapore Primary School Leaving Examination (PSLE).
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB), with
// the syllabus owned by the Ministry of Education (MOE) Curriculum Planning
// and Development Division. PSLE is the national examination taken by
// Primary 6 students at the end of their primary education. The four
// examinable subjects are English Language, Mother Tongue Language (Chinese,
// Malay or Tamil), Mathematics, and Science. Each subject is offered at
// Standard and Foundation levels; Standard papers are scored on Achievement
// Levels (AL) 1 to 8, and Foundation papers are scored on AL A to E.
//
// Verify the live PSLE paper formats, registration window, and any
// in-year AL scoring changes against the official SEAB page
// (https://www.seab.gov.sg/psle/) and the MOE PSLE scoring FAQ
// (https://www.moe.gov.sg/psle-fsbb/psle/psle-scoring-system) before
// committing any revision plan to a student.

import type { ExamTemplate, Subject } from '../types';

import { psleMathematics } from './subjects/psle-mathematics';
import { psleScience } from './subjects/psle-science';

const subjects: Subject[] = [
    psleMathematics,
    psleScience,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'seab-psle',
  examName: 'Primary School Leaving Examination (PSLE)',
  country: 'singapore',
  description: 'The PSLE is the national examination taken by all Primary 6 students in Singapore at the end of their primary education. It is set by MOE and administered by SEAB. Four subjects are examinable — English Language, Mother Tongue Language (Chinese, Malay or Tamil), Mathematics, and Science — each offered at Standard and Foundation levels. The PSLE Score is the sum of the four subject Achievement Levels; under the current scoring system, the total score can range from 4 (best) to 32. PSLE results are used for posting to secondary schools through the Secondary 1 Posting Process, in combination with affiliation and other tie-breakers.',
  examPattern: 'Each PSLE subject has its own paper pattern. Standard Mathematics: one written paper of a published duration, plus a separate paper that combines short-answer and structured / open-ended questions, marked against the MOE PSLE Mathematics assessment criteria. Standard Science: one written paper that combines multiple-choice and open-ended items. Foundation papers exist for English, Mathematics, Science and Mother Tongue, with shorter durations and lower marks. All subjects are scored on Achievement Levels (Standard AL1 to AL8, Foundation ALA to ALE). Confirm the live paper durations, marks and AL band boundaries on https://www.seab.gov.sg/psle/ before planning.',
  eligibility: 'All Primary 6 students in Singapore mainstream primary schools, and private candidates who meet MOE registration rules, are eligible to sit the PSLE. Schools register candidates centrally; private candidates apply through the SEAB registration portal. Students with special educational needs may be approved for access arrangements (extra time, enlarged print, scribe) — confirm the current framework at the SEAB PSLE page. There is no minimum age; registration is by school year cohort, not by calendar age.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for PSLE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for PSLE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for PSLE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for PSLE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for PSLE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for PSLE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for PSLE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for PSLE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for PSLE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for PSLE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for PSLE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for PSLE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for PSLE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for PSLE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for PSLE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for PSLE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for PSLE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for PSLE — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the PSLE',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on PSLE Mathematics heuristic word problems (the largest paper load), then at least one timed open-ended PSLE Science passage under exam conditions; cross-check the official MOE paper format on the SEAB PSLE page.',
  },
  prepOverview:
    'PSLE preparation centres on the four examinable subjects (English, Mother Tongue, Mathematics, Science), each offered at Standard or Foundation. A Singapore Primary 6 student\'s productive revision pattern is weight-ordered: in Mathematics, secure arithmetic fluency (whole numbers, fractions, decimals, percentages, ratio) before moving on to algebraic thinking, measurement, geometry and data analysis, with the heuristics set (draw a model, work backwards, before-after, part-whole, supposition, simultaneous-equations form) reserved as the final cross-strand layer; in Science, hold the four-theme structure (Diversity, Systems, Cycles, Energy and Interactions) in parallel and reserve the open-ended paper-2 questions for last because they test interpretation rather than recall. Use MOE-released past-year PSLE papers and the SEAB specimen papers as the question-style reference — third-party PSLE workbooks vary in AL alignment and may overshoot the actual paper\'s marks. For 1-month plans, target two full PSLE Mathematics papers under timed conditions plus a Science open-ended pass; for 6-month plans, layer a content pass before the mock cycle. Always re-check the live paper format and AL scoring bands on https://www.seab.gov.sg/psle/ and the MOE PSLE page (https://www.moe.gov.sg/psle-fsbb/psle/psle-scoring-system) before committing a plan to a student (singapore).',
  commonMistakes: [
    'Treating PSLE Foundation as identical to PSLE Standard — Foundation is shorter and uses a different AL band, and over-training Standard questions wastes Foundation marks.',
    'Studying only MOE past-year papers without working through the four Mathematics strands (Number and Algebra, Measurement and Geometry, Statistics) — gaps in arithmetic fluency cost marks on the whole paper.',
    'Drilling open-ended Science questions from sources other than MOE — the open-ended PSLE Science questions test process skills and the answer phrasing matters.',
    'Leaving the heuristics revision to the last week — PSLE Mathematics word problems need the model-drawing, before-after and simultaneous-equations moves to be automatic.',
    'Assuming the Achievement Level bands are unchanged year-on-year — confirm the live AL bands and foundation grade mapping on the SEAB PSLE page before final target-setting.',
    'Building a plan around PSLE English or Mother Tongue without confirming which Mother Tongue (Chinese, Malay or Tamil) the student sits — the format and language demands differ between Mother Tongue subjects.',
    'Setting a revision plan that ignores the PSLE Score ceiling at 32 — students and parents should know whether the target secondary school is realistic under the current scoring system before cramming.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.seab.gov.sg/psle/',
};

export default exam;
