import type { ExamTemplate, Subject } from '../types';

import { mathematicsL3 } from './subjects/mathematics-l3';

const subjects: Subject[] = [
    mathematicsL3,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ncea-level-3',
  examName: 'NCEA Level 3 (Mathematics / Calculus)',
  country: 'newzealand',
  description: 'NCEA Level 3 is the third year of the National Certificate of Educational Achievement, sat by New Zealand students typically in Year 13 at age 17-18. The Mathematics (Calculus) subject at Level 3 consists of 15 achievement standards spanning differentiation, integration, complex numbers, trigonometry, conic sections, linear programming and probability distributions. Together with Level 3 English and two other approved subjects, Level 3 Mathematics contributes to University Entrance. Level 3 Calculus is also the prerequisite for many first-year university STEM courses (engineering, computer science, physical sciences).',
  examPattern: 'Fifteen achievement standards, with credits ranging from 2 to 6 per standard (43 credits available in total). Six standards are externally assessed by end-of-year NZQA examination in November: 91577 (complex numbers), 91578 (differentiation), 91579 (integration), 91584 (statistical reports), 91585 (probability concepts), and 91586 (probability distributions). The remaining standards are internally assessed by the school. Each standard is graded Not Achieved, Achieved, Merit or Excellence. Differentiation and Integration each carry 6 credits - the largest single credit loads in the schedule.',
  eligibility: 'Open to all students enrolled at a New Zealand secondary school. Most candidates sit NCEA Level 3 in Year 13. Schools expect students to have completed NCEA Level 2 Mathematics with at least Merit in algebra and calculus before taking Level 3 Calculus. The subject is a prerequisite for entry to many first-year university STEM courses, including engineering and the physical sciences at the University of Auckland and the University of Otago.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NCEA Level 3 Calculus — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NCEA Level 3 Calculus — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NCEA Level 3 Calculus — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NCEA Level 3 Calculus — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NCEA Level 3 Calculus — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NCEA Level 3 Calculus — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NCEA Level 3 Calculus — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NCEA Level 3 Calculus — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NCEA Level 3 Calculus — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NCEA Level 3 Calculus — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NCEA Level 3 Calculus — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NCEA Level 3 Calculus — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NCEA Level 3 Calculus — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NCEA Level 3 Calculus — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NCEA Level 3 Calculus — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NCEA Level 3 Calculus — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NCEA Level 3 Calculus — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NCEA Level 3 Calculus — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NCEA Level 3 Calculus',
    duration: '2d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 4).map(t => t.name),
    })),
    strategy: 'Prioritise the highest-credit external standards: 91578 Differentiation (6 credits), 91579 Integration (6 credits), 91577 Complex Numbers (5 credits). Together these 17 credits are more than half the qualification value.',
  },
  prepOverview:
    'NCEA Level 3 Calculus preparation is dominated by two large external standards - 91578 Differentiation (6 credits) and 91579 Integration (6 credits) - which together make up 12 of the 43 available credits and are prerequisites for first-year university calculus. The productive pattern is to start with complex numbers (91577) and trigonometry (91575) early in the year, build differentiations and integrations across Terms 2-3, then close with formal inference (91582) and probability distributions (91586) for the statistics-heavy students. The single highest-leverage resource is the official NZQA exemplars on ncea.education.govt.nz, which show the standard required for Achieved, Merit and Excellence on each standard and the marking schedule used by senior markers. For Excellence-level grades, students should practise writing relational justifications - "because the function is differentiable at the critical point, the derivative test applies" - rather than arriving at a correct numerical answer. Re-check the live standard numbers, assessment specifications and any in-year changes on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before committing a revision plan to a student (newzealand).',
  commonMistakes: [
    'Treating 91578 and 91579 as one continuous topic - differentiation and integration are separate standards with separate assessments; weakness in one will not be saved by strength in the other.',
    'Skipping 91577 Complex Numbers because it looks intimidating - 91577 carries 5 External credits and the algebra of complex numbers is a frequent Excellence discriminator.',
    'Forgetting integration by parts (in 91579) - it appears in nearly every NZQA Level 3 exam paper at the Excellence level.',
    'Confusing 91585 (probability concepts) and 91586 (probability distributions) - 91585 is about rules, expected value and Bayes\' theorem; 91586 is about specific named distributions and their calculations.',
    'Leaving formal inference (91582) until the last month - 91582 requires sustained practice with confidence intervals and hypothesis tests; one-night cramming does not work.',
    'Studying 91574 Linear Programming without graph paper - linear programming is graph-based and an accurate feasible region drawing is the single highest-leverage habit.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics',
};

export default exam;
