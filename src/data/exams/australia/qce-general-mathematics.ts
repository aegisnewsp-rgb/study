// Queensland Certificate of Education (QCE) — General Mathematics and
// Specialist Mathematics.
// Awarding body: Queensland Curriculum and Assessment Authority (QCAA).
// Syllabus: General Mathematics General senior syllabus (2025) v1.3 and
// Specialist Mathematics General senior syllabus (2025), for first completion
// in 2026 or beyond.
// Official sources:
//   https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics
//   https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics
// General Mathematics is the most common senior mathematics subject in the QCE
// and is the standard prerequisite for non-STEM tertiary study. Specialist
// Mathematics is the highest-tier QCE mathematics course and is required for
// entry to engineering, science and mathematics degrees. Re-check the live
// syllabus and any in-year updates on qcaa.qld.edu.au before committing a
// revision plan.

import type { ExamTemplate, Subject } from '../types';

import { qceGeneralMathematics } from './subjects/qce-general-mathematics';
import { qceSpecialistMathematics } from './subjects/qce-specialist-mathematics';

const subjects: Subject[] = [
    qceGeneralMathematics,
    qceSpecialistMathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'qce-general-mathematics',
  examName: 'QCE General Mathematics & Specialist Mathematics (QCAA 2025)',
  country: 'australia',
  description: 'QCE General Mathematics and QCE Specialist Mathematics are the two senior mathematics courses administered by the Queensland Curriculum and Assessment Authority (QCAA) for the Queensland Certificate of Education. General Mathematics is a four-Unit General senior subject covering consumer arithmetic, measurement, algebra, linear equations, matrices, trigonometry, bivariate data, sequences, Earth geometry, interest, depreciation and statistics. Specialist Mathematics is the highest-tier QCE mathematics subject, covering vectors, complex numbers, advanced calculus, mechanics and statistical inference. Both subjects are four-Unit courses with Unit 4 the summative external assessment.',
  examPattern: 'General senior subjects in the QCE consist of four Units of study. Units 1-3 are school-based; Unit 4 is summative and externally assessed. External assessment for General Mathematics consists of two papers: Paper 1 (calculator-assumed) and Paper 2 (calculator-free). External assessment for Specialist Mathematics consists of two papers covering the full Unit 4 syllabus. Confirm the live paper structure, calculator policy, formula book and any instrument-specific marking guide on qcaa.qld.edu.au before each cycle.',
  eligibility: 'The QCE is the senior secondary qualification awarded by the QCAA. To be awarded the QCE, a student must accumulate at least 20 credits from completed Units (General, Applied or Short Courses). General Mathematics Units 1-4 has no formal prerequisite beyond Year 10 mathematics. Specialist Mathematics Units 3-4 normally requires concurrent enrolment in Mathematical Methods Units 3-4. Both subjects are ATAR-contributing and the QCAA publishes an ATAR-eligibility list each year. Check the live eligibility rules and any in-year changes on qcaa.qld.edu.au.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for QCE General Mathematics & Specialist Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for QCE General Mathematics & Specialist Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for QCE General Mathematics & Specialist Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for QCE General Mathematics & Specialist Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for QCE General Mathematics & Specialist Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for QCE General Mathematics & Specialist Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for QCE General Mathematics & Specialist Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for QCE General Mathematics & Specialist Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for QCE General Mathematics & Specialist Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for QCE General Mathematics & Specialist Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for QCE General Mathematics & Specialist Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for QCE General Mathematics & Specialist Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for QCE General Mathematics & Specialist Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for QCE General Mathematics & Specialist Mathematics',
    duration: '5d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Concentrate on Unit 4 (the externally assessed summative Unit) in both General Mathematics and Specialist Mathematics. Drill the QCAA published sample examinations under timed conditions and review the instrument-specific marking guides.',
  },
  prepOverview:
    'QCE General Mathematics and QCE Specialist Mathematics are best prepared together because Specialist Mathematics extends General Mathematics at the higher end of the syllabus. For General Mathematics, the productive pattern is to follow the four Units in sequence (consumer arithmetic and measurement in Units 1-2, bivariate data and sequences in Unit 3, interest/depreciation and statistical inference in Unit 4), with regular use of the QCAA formula book and the published sample examinations. For Specialist Mathematics, secure the calculus strands (Unit 2 onwards) before adding vectors, mechanics, complex numbers and statistical inference. The single highest-leverage habit is timed practice against the QCAA sample examinations and the instrument-specific marking guides. Re-check the live syllabus, sample examinations and any updates on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Skipping Unit 4 because it is school-managed before external — Unit 4 is the summative Unit and the source of all external assessment items; weak Unit 4 preparation shows up directly in the external examination.',
    'Treating the QCE General Mathematics formula book as optional — the QCAA publishes a General Mathematics formula book that students are expected to use fluently; not knowing what is in it costs marks.',
    'Confusing QCE Mathematical Methods with VCE Mathematical Methods — the two syllabuses use similar names but different content and assessment patterns.',
    'Memorising formulae instead of building from first principles — Unit 4 Specialist Mathematics rewards students who can derive integration formulas and chain-rule shortcuts, not just recall them.',
    'Leaving the QCAA sample examination until the last week — sample papers reflect the live paper structure and rubric; familiarity with them is the single biggest preparation lever.',
    'Ignoring the calculator-free paper in General Mathematics — Paper 2 is technology-free and assesses algebraic manipulation without a CAS calculator; over-reliance on technology in school assessment costs marks on this paper.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics',
};

export default exam;