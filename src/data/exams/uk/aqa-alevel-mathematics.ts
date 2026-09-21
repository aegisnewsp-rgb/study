import type { ExamTemplate, Subject } from '../types';

import { mathematicsAlevel } from './subjects/mathematics-alevel';

const subjects: Subject[] = [
  mathematicsAlevel,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'aqa-alevel-mathematics',
  examName: 'A-Level Mathematics (AQA 7357)',
  country: 'uk',
  description: 'AQA A-level Mathematics (specification code 7357) is one of the most widely taken A-levels in England and Wales and the standard route into engineering, physics, computer science, economics, actuarial and mathematics degrees. It is a linear two-year course: students normally begin in Year 12 after GCSEs and sit all three papers at the end of Year 13. There is no coursework and no separate practical endorsement — the whole qualification is decided by the three written papers. Candidates who intend to take a STEM degree at a selective university are often advised to pair it with A-level Further Mathematics, which is a separate specification (7367) with its own papers, though it is not a requirement for this qualification. The A-level builds directly on GCSE Mathematics at higher tier, so a secure GCSE foundation in algebra, ratio and trigonometry matters far more at the start than speed.',
  examPattern: 'Three written papers, sat at the end of the two-year course. Each paper is 2 hours, carries 100 marks and is worth 33⅓% of the A-level, so the qualification totals 300 marks. Paper 1 and Paper 2 assess the pure content (sections A to I: proof, algebra and functions, coordinate geometry, sequences and series, trigonometry, exponentials and logarithms, differentiation, integration and numerical methods), with mechanics (vectors, quantities and units, kinematics, forces and Newton\u2019s laws, moments) added on Paper 2. Paper 3 assesses the same pure content together with statistics (statistical sampling, data presentation and interpretation, probability, statistical distributions and hypothesis testing). A calculator is permitted in all three papers. Question styles range from short single-mark items to multi-step modelling and proof problems, and reasoning, proof and interpretation are assessed across the papers rather than in a separate section. Confirm the live paper structure, formula booklet and calculator rules on aqa.org.uk before planning entry for a student.',
  eligibility: 'No statutory prior qualification is required, but the course assumes GCSE Mathematics at higher tier — schools and colleges generally set a minimum entry grade (commonly a strong pass at higher tier) and set their own admission policies. Students normally start in Year 12 at age 16-17 and sit all papers at the end of Year 13; there is no modular or January route in the current linear specification. Because all assessment is terminal, a Year 12 knowledge gap tends to surface in the end-of-course papers rather than in an early module result. A scientific calculator is required for all three papers and formulae are provided in the published booklet, so candidates are assessed on selection and application rather than recall of the booklet. Further Mathematics (7367) is a separate A-level and is not required for 7357. Verify current entry requirements and the live calculator and formula booklet policy on aqa.org.uk.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for A-Level Mathematics (AQA 7357) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for A-Level Mathematics (AQA 7357) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for A-Level Mathematics (AQA 7357) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for A-Level Mathematics (AQA 7357) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for A-Level Mathematics (AQA 7357) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for A-Level Mathematics (AQA 7357) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for A-Level Mathematics (AQA 7357) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for A-Level Mathematics (AQA 7357) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for A-Level Mathematics (AQA 7357) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for A-Level Mathematics (AQA 7357) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for A-Level Mathematics (AQA 7357) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for A-Level Mathematics (AQA 7357) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for A-Level Mathematics (AQA 7357) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for A-Level Mathematics (AQA 7357)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Work the highest-priority sections first — algebra and functions, differentiation, integration and exponentials and logarithms carry the most question surface across all three papers. Revise by attempting whole past-paper questions rather than re-reading notes, and keep mechanics and statistics ticking over with a short timed set each day, because they appear on Papers 2 and 3 and are easy to neglect until too late.',
  },
  prepOverview:
    'AQA A-level Mathematics (7357) rewards a two-year plan that keeps the pure content moving ahead of mechanics and statistics. Start Year 12 with algebra and functions, then coordinate geometry, trigonometry, exponentials and logarithms, differentiation and integration — that sequence mirrors the specification and stops later topics from landing on shaky algebra. Mechanics is best introduced alongside vectors and kinematics once differentiation is comfortable, because variable acceleration is a calculus topic in disguise; statistics sits naturally after probability and the binomial distribution, with the normal distribution and hypothesis testing following once students are confident with the large data set. The single most useful habit is timed work on whole AQA past papers and specimen materials rather than topic-by-topic revision, because all three papers mix sections and the mark scheme rewards exact method and notation. Students who lose marks most often do so on algebra slips inside calculus, on integration where a substitution or by-parts choice was needed, and on mechanics problems where forces were not resolved before applying Newton\u2019s laws. For short plans, prioritise algebra and functions, differentiation, integration and exponentials and logarithms, then add one timed paper; for a 3mo or longer plan, complete a full content pass before the first mock cycle and reserve the final weeks for past papers and error review. Always re-check the current paper structure, formula booklet and any in-year specification updates on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/specification-at-a-glance before committing a student to a revision plan (uk).',
  commonMistakes: [
    'Treating algebra as finished after GCSE — most lost marks in calculus questions are actually algebra slips, and partial fractions and the factor theorem are assumed knowledge.',
    'Revising pure content only — mechanics appears on Paper 2 and statistics on Paper 3, so neglecting either caps the grade before the pure work is even counted.',
    'Learning integration rules without practising the choice between substitution, by parts and the trapezium rule, which is exactly how the questions are set.',
    'Reading notes instead of attempting past-paper questions under time, which hides the fact that method marks depend on showing each step clearly.',
    'Applying Newton\u2019s laws without resolving forces first, or ignoring moments on non-uniform rods, in the mechanics sections.',
    'Assuming a formula sheet removes the need to recall derivations — the published booklet gives results, not the reasoning, and proof and reasoning questions are assessed directly.',
  ],
  lastUpdated: '2026-09-21',
  officialSource: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/specification-at-a-glance',
};

export default exam;
