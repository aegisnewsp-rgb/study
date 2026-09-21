// Victorian Certificate of Education (VCE) — Mathematical Methods and
// Specialist Mathematics.
// Awarding body: Victorian Curriculum and Assessment Authority (VCAA).
// Study Design: VCE Mathematics Study Design (2023), implementing Units 1-2
// from 2023 and Units 3-4 from 2024.
// Official sources:
//   https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods
//   https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics
// Mathematical Methods is the most common prerequisite for engineering, science
// and commerce degrees at Victorian universities. Specialist Mathematics
// extends Methods with vectors, complex numbers, kinematics and mechanics, and
// is the prerequisite for tertiary-level mathematics, physics and engineering
// courses. Re-check the live study design, examination specifications and any
// notice to schools on vcaa.vic.edu.au before committing a revision plan.

import type { ExamTemplate, Subject } from '../types';

import { vceMathematicalMethods } from './subjects/vce-mathematical-methods';
import { vceSpecialistMathematics } from './subjects/vce-specialist-mathematics';

const subjects: Subject[] = [
    vceMathematicalMethods,
    vceSpecialistMathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'vce-mathematical-methods',
  examName: 'VCE Mathematical Methods & Specialist Mathematics (VCAA 2023)',
  country: 'australia',
  description: 'VCE Mathematical Methods is a calculus-rich, algebra-rich, statistics-bearing course that prepares students for science, engineering, commerce and mathematics tertiary study. VCE Specialist Mathematics extends Methods with vectors, complex numbers, kinematics and mechanics. Both subjects are commonly taken together as the mathematics pair for entry to engineering, science and mathematics degrees. The 2023 Mathematics Study Design covers Units 1 and 2 (introductory, school-assessed) and Units 3 and 4 (ATAR-contributing, externally assessed). This exam file covers both subjects together because they share the four Areas of Study and are commonly studied side by side.',
  examPattern: 'Units 1 and 2: school-based assessment only. Units 3 and 4 are the ATAR-contributing courses and culminate in two end-of-year written examinations per subject. Mathematical Methods Units 3 and 4 consists of two written examinations each of 2 hours plus 5 minutes reading time. Examination 1 covers Functions, relations and graphs; Algebra, number and structure; and Calculus. Examination 2 covers Calculus and Data analysis, probability and statistics. Specialist Mathematics Units 3 and 4 also consists of two written examinations each of 2 hours plus 5 minutes reading time. A technology-free section applies to part of each Methods examination; a single approved technology is permitted in the technology-active section. Confirm the live technology policy, approved calculators and any notice to schools on vcaa.vic.edu.au before each cycle.',
  eligibility: 'The VCE is the senior secondary qualification awarded by the Victorian Curriculum and Assessment Authority (VCAA). To be awarded the VCE, a student must satisfactorily complete at least 16 units of study including English (or English as an Additional Language). Mathematical Methods Units 1-2 has no formal prerequisite beyond satisfactory completion of Year 10 mathematics. Specialist Mathematics Units 1-2 normally requires concurrent or prior enrolment in Mathematical Methods Units 1-2. Mathematical Methods Units 3-4 requires Mathematical Methods Units 1-2 (or equivalent). Specialist Mathematics Units 3-4 requires Specialist Mathematics Units 1-2 plus concurrent enrolment in Mathematical Methods Units 3-4. Both subjects are ATAR courses and contribute to the ATAR through VTAC scaling.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for VCE Mathematical Methods & Specialist Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for VCE Mathematical Methods & Specialist Mathematics',
    duration: '5d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 4).map(t => t.name),
    })),
    strategy: 'Prioritise Calculus, Functions relations and graphs, and Data analysis probability and statistics in Methods, then Vectors and Mechanics in Specialist. Drill the published Examination 1 and Examination 2 sample materials under timed conditions; check working against the published marking scheme.',
  },
  prepOverview:
    'VCE Mathematical Methods and Specialist Mathematics are best tackled together because the Specialist Areas of Study extend the Methods Areas of Study. The productive pattern is weight-led content pass: secure Functions, relations and graphs and Algebra, number and structure first, then build Calculus fluency (chain rule, product rule, integration techniques, applications), then layer in Data analysis, probability and statistics. Specialist Mathematics adds Vectors, Complex Numbers and Mechanics on top. The single highest-leverage habit is timed practice against the published sample materials and the Examination Specifications documents published by the VCAA. The examination features a technology-free section and a technology-active section; practice both. Re-check the live examination specifications, technology policy and any notice to schools on https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Treating Specialist Mathematics as just harder Methods — Specialist has its own Areas of Study (Vectors and Mechanics in particular) and missing these strands costs marks on Examination 2.',
    'Confusing degrees and radians in circular function work — Methods Examination 1 is technology-free and tests exact values; convert early and keep radians throughout.',
    'Skipping the technology-free section of Methods Examination 1 — students who rely on CAS (computer algebra system) for derivative and integral steps struggle when the technology is removed.',
    'Mixing up the two Methods Areas of Study in Calculus — the same calculus skills appear across both Areas of Study but with different assessment emphases; review past examinations to learn the split.',
    'Forgetting to set up and solve differential equations when required — differential equations appear in Methods Unit 4 and in Specialist Mechanics, and missing the integration step is a common loss of three marks.',
    'Leaving Specialist Mechanics practice to the last week of Term 3 — mechanics questions (Newton\'s second law, energy, momentum) reward a steady habit of practice across the year.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods',
};

export default exam;