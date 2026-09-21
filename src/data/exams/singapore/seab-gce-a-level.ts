// Singapore-Cambridge GCE Advanced Level (GCE A-Level).
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB) in
// collaboration with Cambridge International Education, under the
// Singapore-Cambridge brand. The MOE Curriculum Planning and Development
// Division owns the syllabus content; SEAB and Cambridge jointly
// administer the examinations. GCE A-Level is the two-year junior-college
// (JC) or pre-university (polytechnic) examination taken at the end of JC2
// or Year 6 of the polytechnic pre-university track.
//
// This file groups together the A-Level subjects most commonly used by
// Singapore JC students aiming at engineering, computing, physical-science
// or quantitative-finance university courses: H2 Mathematics (9758). H1
// Mathematics (8865), H2 Physics (9749), H2 Chemistry (9476) and H2
// Biology (9747 / 9477) are offered in the same family but are not
// bundled here — confirm subject-code compatibility on the SEAB GCE
// A-Level syllabuses page before bundling.
//
// Important: from 2025, the 9758 syllabus is examined under the current
// 6-strand content structure; H2 Biology moved from code 9744 to 9477
// with first examination 2026. Verify the live codes and any in-year
// specification changes on the SEAB 2026 A-Level syllabuses page.

import type { ExamTemplate, Subject } from '../types';

import { alevelH2Mathematics } from './subjects/alevel-h2-mathematics';

const subjects: Subject[] = [
    alevelH2Mathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'seab-gce-a-level',
  examName: 'Singapore-Cambridge GCE A-Level',
  country: 'singapore',
  description: 'The Singapore-Cambridge GCE A-Level is the two-year junior-college (JC) or pre-university examination taken by Singapore students at the end of JC2 (or Year 6 of the polytechnic pre-university track). It is set jointly by MOE and Cambridge International Education, with SEAB administering. Subjects are offered at H1, H2 and H3 levels — H1 is half the content of H2 with reduced paper pattern; H2 is the standard JC subject; H3 is an extension taken as an additional subject by stronger students. A typical JC candidate sits three H2 subjects, one H1 subject, plus H1 General Paper and H1 Project Work; results feed into the Joint Admissions Exercise (JAE) for local university entry through the A-Level / IB / Polytechnic aggregate.',
  examPattern: 'Each A-Level subject has its own paper pattern. H2 Mathematics 9758 is a three-paper written subject — Paper 1 (Pure Mathematics), Paper 2 (Statistics and Probability) and Paper 3 (calculus and extended content) — each with a published duration and mark weighting. H2 Physics 9749, H2 Chemistry 9476 and H2 Biology 9747 each carry multiple written papers plus a school-based practical. H1 subjects are shorter — H1 Mathematics 8865 is a single two-paper subject. Confirm the live paper durations, marks and any in-year specification changes on the SEAB 2026 A-Level syllabuses page before planning.',
  eligibility: 'All Singapore JC students, MI / IB students sitting A-Level as a partial qualification, and approved private candidates are eligible to sit the GCE A-Level. School candidates are registered centrally by their JC or MI; private candidates apply through the SEAB portal within the published registration window. There is no minimum age; entry is by JC cohort. Students with special educational needs may be approved for access arrangements — confirm the framework on the SEAB GCE A-Level page before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Singapore-Cambridge GCE A-Level — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Singapore-Cambridge GCE A-Level — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Singapore-Cambridge GCE A-Level — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Singapore-Cambridge GCE A-Level — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Singapore-Cambridge GCE A-Level — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Singapore-Cambridge GCE A-Level — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Singapore-Cambridge GCE A-Level — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Singapore-Cambridge GCE A-Level — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Singapore-Cambridge GCE A-Level — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Singapore-Cambridge GCE A-Level — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Singapore-Cambridge GCE A-Level — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Singapore-Cambridge GCE A-Level — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Singapore-Cambridge GCE A-Level — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Singapore-Cambridge GCE A-Level',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on H2 Mathematics Paper 1 (Pure Mathematics, which carries Calculus and the algebra-heavy strands), then a timed Paper 2 (Probability and Statistics); cross-check the live paper format on the SEAB GCE A-Level syllabuses page.',
  },
  prepOverview:
    'A-Level preparation in Singapore is weight-ordered across the chosen subject combination. For a JC2 candidate taking the standard combination (three H2 + one H1 + H1 General Paper + H1 Project Work), the productive pattern is: secure the H1 General Paper and H1 Project Work first as the lowest-effort gain, then spend the largest revision block on the candidate\'s H2 Mathematics 9758 (organised into the six content strands Functions and Graphs, Sequences and Series, Vectors, Introduction to Complex Numbers, Calculus, and Probability and Statistics — Calculus alone carries more marks than any other strand), then layer the other H2 subjects and the H1 subject in priority order based on the university course. Use SEAB specimen papers and the official MOE Pre-University H2 Mathematics (2024) syllabus document as the question-style reference — third-party A-Level workbooks vary in tier alignment and may overshoot the actual paper\'s marks. For 3-month plans, target three full H2 Mathematics 9758 papers plus one H2 Physics / Chemistry / Biology Paper 4 practical under timed conditions; for 6-month plans, layer a full content pass before the mock cycle. Always re-check the live subject codes (9758 / 8865 / 9749 / 9476 / 9747 / 9477) and any in-year specification changes on https://www.seab.gov.sg/gce-a-level/ before committing a revision plan to a student (singapore).',
  commonMistakes: [
    'Using H2 Mathematics 9758 past papers labelled for an older year without checking the syllabus change — the 9758 syllabus was revised for first examination 2025 and the content emphasis shifted slightly.',
    'Skipping the school-based Science Practical — the practical component is part of the H2 Physics / Chemistry / Biology grade and cannot be made up on the theory papers alone.',
    'Cramming for H2 Mathematics 9758 without a graphing calculator (GC) — Papers 2 and 3 of 9758 require a permitted GC and the marks schedule assumes its use.',
    'Leaving the H1 General Paper essay component to the last week — GP is a separate skill set (argument, framing, contemporary issues) that does not transfer from H2 subjects.',
    'Assuming H1 Mathematics 8865 has the same topic list as H2 Mathematics 9758 — H1 has a reduced strand set (no Vectors, no Introduction to Complex Numbers) and a single two-paper structure.',
    'Building a JC2 revision plan that ignores the H2 / H1 weighting in the A-Level aggregate — local university admissions compute a rank point score that weights H2 more heavily than H1.',
    'Setting a JC2 plan without confirming the H3 / H4 / H5 grade boundaries for the candidate\'s year — SEAB publishes the grade boundary curves each year and the shift at the A boundary is the most common reason for a missed university offer.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.seab.gov.sg/gce-a-level/',
};

export default exam;
