import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';

const subjects: Subject[] = [
    mathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'aqa-gcse-mathematics',
  examName: 'GCSE Mathematics (AQA 8300)',
  country: 'uk',
  description: 'AQA GCSE Mathematics (specification code 8300) is the most widely sat GCSE in England and Wales, with several hundred thousand candidates each summer. It is taken by students aged 14-16 in Year 11 and is the standard mathematics qualification for sixth form, college, apprenticeship and employment routes. The specification is set by the AQA awarding body and assessed at two tiers — Foundation (grades 1-5) and Higher (grades 4-9, with a grade 3 allowed on Higher tier in limited cases). All exam papers are sat at the end of the course; there is no coursework. The qualification is part of the Department for Education\'s performance tables and is required for the English Baccalaureate.',
  examPattern: 'Three written papers at the end of Year 11. Paper 1 is non-calculator; Papers 2 and 3 allow a calculator. Each paper is 1 hour 30 minutes and carries 80 marks. Tier determines which paper codes the candidate sits (Foundation F1/F2/F3 or Higher H1/H2/H3), and the available grade range. Foundation tier covers grades 1-5; Higher tier covers grades 4-9. Content is the same across tiers — assessed at different depths. Question styles include short single-mark items, multi-step structured questions, and problem-solving questions worth 3-5 marks. Mathematical reasoning, proof, and use of mathematical notation are assessed throughout. Confirm the live tier rules and assessment arrangements on aqa.org.uk before planning a student\'s entry.',
  eligibility: 'No statutory prior learning requirement; schools and colleges set their own entry policies. Most candidates sit the GCSE in Year 11 at age 15-16. Candidates who have not yet reached grade 4 in mathematics at the end of Key Stage 4 are required by the Department for Education to continue mathematical study. Tier decisions are made by the school based on mock performance, professional judgement, and the candidate\'s capacity for higher-tier content; foundation tier caps the grade at 5. A scientific calculator is permitted for Papers 2 and 3. Formulae are not provided on the higher-tier Paper 3 in line with the current specification; verify the live formula sheet policy at aqa.org.uk.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GCSE Mathematics (AQA 8300) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for GCSE Mathematics (AQA 8300) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GCSE Mathematics (AQA 8300) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for GCSE Mathematics (AQA 8300) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GCSE Mathematics (AQA 8300) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for GCSE Mathematics (AQA 8300) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for GCSE Mathematics (AQA 8300) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GCSE Mathematics (AQA 8300) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for GCSE Mathematics (AQA 8300) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GCSE Mathematics (AQA 8300) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GCSE Mathematics (AQA 8300) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for GCSE Mathematics (AQA 8300) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for GCSE Mathematics (AQA 8300) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GCSE Mathematics (AQA 8300)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on the highest-weight topics (Algebra, Ratio/Proportion) and previous-paper questions at the relevant tier.',
  },
  prepOverview:
    'AQA GCSE Mathematics (8300) preparation is built around the six published content strands, but the productive study pattern is weight-ordered: start with Number until fluency is automatic, then spend the largest block on Algebra (linear and quadratic manipulation, simultaneous equations, graphs), then Ratio/Proportion/Rates, with Geometry, Probability and Statistics layered in across the year. Tier decision (Foundation vs Higher) should be provisional by the end of Year 10 and confirmed after the second set of Year 11 mocks; sitting the wrong tier caps the grade and the school submits the entry. Use AQA\'s past papers and specimen assessment materials as the single source of question style — third-party GCSE Maths books vary in tier alignment. For revision timing, 1mo plans should focus on weak strands and three full past papers under timed conditions; 3mo plans can carry a full content pass plus a mock cycle. Always re-check tier rules, calculator policy and any in-year specification changes on https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300 before committing a revision plan to a student (uk).',
  commonMistakes: [
    'Studying only past paper questions without working through the strand structure — gaps in Algebra show up as avoidable marks on Paper 3.',
    'Using foundation-tier past papers when entered for Higher — question style and depth differ enough to mis-train timing.',
    'Leaving the calculator policy to the night before the exam — Paper 1 is non-calculator and covers 80 marks of the qualification.',
    'Assuming all formula will be provided — verify the live formula sheet policy on aqa.org.uk for the current specification.',
    'Treating tier choice as a student preference rather than a school decision based on mock evidence.',
    'Skipping non-calculator practice — Paper 1 catches out students who rely on a calculator for every computation.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300',
};

export default exam;
