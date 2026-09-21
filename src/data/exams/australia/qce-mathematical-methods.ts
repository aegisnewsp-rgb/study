// Queensland Certificate of Education (QCE) — Mathematical Methods and
// Specialist Mathematics.
// Awarding body: Queensland Curriculum and Assessment Authority (QCAA).
// Syllabus: Mathematical Methods General senior syllabus (2025) v1.3 and
// Specialist Mathematics General senior syllabus (2025), for first completion
// in 2026 or beyond.
// Official sources:
//   https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods
//   https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics
// Mathematical Methods is the standard prerequisite for engineering, science and
// commerce degrees at Queensland universities. Specialist Mathematics is the
// highest-tier QCE mathematics course. Both subjects are four-Unit courses
// with Unit 4 the summative external assessment. Re-check the live syllabus
// and any in-year updates on qcaa.qld.edu.au.

import type { ExamTemplate, Subject } from '../types';

import { qceMathematicalMethods } from './subjects/qce-mathematical-methods';
import { qceSpecialistMathematics } from './subjects/qce-specialist-mathematics';

const subjects: Subject[] = [
    qceMathematicalMethods,
    qceSpecialistMathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'qce-mathematical-methods',
  examName: 'QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)',
  country: 'australia',
  description: 'QCE Mathematical Methods is the calculus-rich, algebra-rich, statistics-bearing mathematics subject required for entry to most science, engineering, commerce and mathematics degrees at Queensland universities. QCE Specialist Mathematics is the highest-tier QCE mathematics course and is required for entry to engineering, science and mathematics degrees. Both subjects are General senior subjects administered by the Queensland Curriculum and Assessment Authority (QCAA), with four Units of study and a summative Unit 4 external assessment.',
  examPattern: 'General senior subjects in the QCE consist of four Units of study. Units 1-3 are school-based; Unit 4 is summative and externally assessed. External assessment for Mathematical Methods consists of two papers: a technology-active paper (calculator-assumed) and a technology-free paper. External assessment for Specialist Mathematics also consists of two papers covering the full Unit 4 syllabus. The QCAA publishes a Mathematical Methods formula book, sample examinations and instrument-specific marking guides. Confirm the live paper structure, calculator policy and any instrument-specific marking guide on qcaa.qld.edu.au before each cycle.',
  eligibility: 'The QCE is the senior secondary qualification awarded by the QCAA. Mathematical Methods Units 1-4 has no formal prerequisite beyond Year 10 mathematics. Specialist Mathematics Units 3-4 normally requires concurrent enrolment in Mathematical Methods Units 3-4. Both subjects are ATAR-contributing and the QCAA publishes an ATAR-eligibility list each year. Check the live eligibility rules and any in-year changes on qcaa.qld.edu.au.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for QCE Mathematical Methods & Specialist Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for QCE Mathematical Methods & Specialist Mathematics',
    duration: '5d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritise Unit 4 calculus and statistics in Mathematical Methods and vectors and mechanics in Specialist Mathematics. Drill the QCAA published sample examinations under timed conditions.',
  },
  prepOverview:
    'QCE Mathematical Methods and QCE Specialist Mathematics are best prepared together because Specialist Mathematics extends Methods at the higher end of the syllabus. For Mathematical Methods, secure the calculus strands (Unit 2 onwards) before adding trigonometric functions, integration techniques and statistics. For Specialist Mathematics, secure the calculus strands first, then add vectors, mechanics, complex numbers and statistical inference. The single highest-leverage habit is timed practice against the QCAA sample examinations and instrument-specific marking guides. Re-check the live syllabus, sample examinations and any updates on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Skipping Unit 4 because it is school-managed before external — Unit 4 is the summative Unit and the source of all external assessment items; weak Unit 4 preparation shows up directly in the external examination.',
    'Confusing QCE Mathematical Methods with VCE Mathematical Methods — the two syllabuses use similar names but different content and assessment patterns.',
    'Memorising formulae instead of building from first principles — Unit 4 Specialist Mathematics rewards students who can derive integration formulas and chain-rule shortcuts, not just recall them.',
    'Ignoring the technology-free paper — students who rely on CAS (computer algebra system) for derivative and integral steps struggle when the technology is removed.',
    'Leaving the QCAA sample examination until the last week — sample papers reflect the live paper structure and rubric; familiarity with them is the single biggest preparation lever.',
    'Skipping Specialist Mathematics vectors and mechanics practice — these are Units 3-4 topics with their own distinctive question style and worth significant marks in the Specialist Mathematics external assessment.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods',
};

export default exam;