// Western Australian Certificate of Education (WACE) — Mathematics Methods and
// Mathematics Specialist.
// Awarding body: School Curriculum and Standards Authority (SCSA).
// Syllabus: Mathematics Methods ATAR (Year 11 and Year 12, refreshed for
// teaching from January 2025-2026) and Mathematics Specialist ATAR (Year 11
// and Year 12, refreshed for teaching from January 2025-2026).
// Official sources:
//   https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods
//   https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist
// Mathematics Methods ATAR is the standard prerequisite for engineering, science
// and commerce degrees at Western Australian universities. Mathematics
// Specialist ATAR extends Methods with vectors, complex numbers, advanced
// calculus, mechanics and statistical inference. Re-check the live syllabus and
// any examination design briefs on senior-secondary.scsa.wa.edu.au before
// committing a revision plan.

import type { ExamTemplate, Subject } from '../types';

import { waceMathematicsMethods } from './subjects/wace-mathematics-methods';
import { waceMathematicsSpecialist } from './subjects/wace-mathematics-specialist';

const subjects: Subject[] = [
    waceMathematicsMethods,
    waceMathematicsSpecialist,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'wace-mathematics-methods',
  examName: 'WACE Mathematics Methods & Mathematics Specialist (SCSA)',
  country: 'australia',
  description: 'WACE Mathematics Methods ATAR and WACE Mathematics Specialist ATAR are the two ATAR-contributing mathematics courses in the Western Australian Certificate of Education, administered by the School Curriculum and Standards Authority (SCSA). Mathematics Methods ATAR covers functions, calculus, discrete and continuous probability distributions, and integration. Mathematics Specialist ATAR extends Methods with vectors, complex numbers, advanced calculus, mechanics and statistical inference. Both subjects comprise four Units of study, with Units 3 and 4 the ATAR-contributing courses.',
  examPattern: 'Each subject comprises four Units. Units 1 and 2 are Year 11 (school-based assessment). Units 3 and 4 are Year 12 and are externally assessed by SCSA in the ATAR Year 12 examination. The Year 12 examination design briefs are published annually by SCSA and describe the paper structure, weighting and permitted technology for each subject. Mathematics Methods and Mathematics Specialist each have their own examination. Confirm the live examination design briefs and any updates on senior-secondary.scsa.wa.edu.au before each cycle.',
  eligibility: 'The WACE is the senior secondary qualification awarded by the SCSA. Mathematics Methods ATAR Units 1-4 has no formal prerequisite beyond Year 10 mathematics achievement. Mathematics Specialist ATAR Units 3-4 normally requires concurrent enrolment in Mathematics Methods ATAR Units 3-4. Both subjects are ATAR courses and contribute to the ATAR through school-based moderation and the ATAR examination. Check the live WACE requirements and any updates on senior-secondary.scsa.wa.edu.au.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for WACE Mathematics Methods & Mathematics Specialist — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for WACE Mathematics Methods & Mathematics Specialist',
    duration: '5d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritise the Unit 3 and Unit 4 Topics for each subject (these are the externally assessed ATAR Topics). Drill SCSA sample assessment materials and the published examination design briefs.',
  },
  prepOverview:
    'WACE Mathematics Methods ATAR and Mathematics Specialist ATAR are best prepared together because Specialist extends Methods at the higher end of the syllabus. The productive pattern is to follow the four Units in sequence, securing Unit 1-2 content first (functions, basic calculus, probability), then the ATAR-contributing Unit 3-4 Topics (further differentiation, integrals, discrete and continuous random variables, complex numbers, vectors, mechanics, statistical inference). The single highest-leverage habit is timed practice against the SCSA sample assessment materials and the published examination design briefs. Re-check the live syllabus, examination design briefs and any in-year updates on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Skipping the SCSA examination design brief — the design brief sets out the structure, weighting and technology rules for each ATAR Year 12 examination; ignoring it costs preparation efficiency.',
    'Treating Mathematics Specialist as just harder Methods — Specialist has its own Topic strands (Vectors, Complex Numbers, Mechanics, Differential Equations) and missing these strands costs marks.',
    'Confusing WACE Mathematics Methods with HSC Mathematics Advanced or VCE Mathematical Methods — the three syllabuses use similar names but different content and assessment patterns.',
    'Memorising formulae instead of building from first principles — Specialist Mathematics rewards students who can derive integration formulas and chain-rule shortcuts, not just recall them.',
    'Leaving SCSA sample assessment materials until the last week — sample papers reflect the live paper structure and rubric; familiarity with them is the single biggest preparation lever.',
    'Ignoring the SCSA-approved calculator policy — the ATAR examination lists approved calculators; an unapproved calculator may lead to marks being disallowed.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods',
};

export default exam;