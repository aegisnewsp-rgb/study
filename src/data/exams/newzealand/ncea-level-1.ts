import type { ExamTemplate, Subject } from '../types';

import { mathematicsL1 } from './subjects/mathematics-l1';

const subjects: Subject[] = [
    mathematicsL1,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ncea-level-1',
  examName: 'NCEA Level 1 (Mathematics and Statistics)',
  country: 'newzealand',
  description: 'NCEA Level 1 is the first year of the National Certificate of Educational Achievement, sat by New Zealand students typically in Year 11 at age 15-16. The qualification is awarded by the New Zealand Qualifications Authority (NZQA) and requires 80 credits, of which 10 must be in literacy and 10 in numeracy (usually met through dedicated co-requisite unit standards and Mathematics achievement standards). Mathematics and Statistics at Level 1 consists of four achievement standards (91944-91947), each worth 5 credits, totalling 20 credits - usually enough to meet the numeracy requirement and contribute toward Level 1 certificate credits. Two standards are internally assessed by the school across the year, and two are assessed by end-of-year NZQA examination.',
  examPattern: 'Two internal achievement standards (91944, 91945) and two external achievement standards (91946, 91947), each worth 5 credits. Internal standards are scheduled by the school across Terms 1-3 and submitted to NZQA for moderation. External standards sit as end-of-year NZQA examinations in November/December. Students achieve each standard at one of four grades: Not Achieved, Achieved, Merit (relational thinking) or Excellence (extended abstract thinking).',
  eligibility: 'Open to all students enrolled at a New Zealand secondary school or approved training provider. Most candidates sit NCEA Level 1 in Year 11. No formal prior qualification is required, though most schools assume completion of Year 10 Mathematics at curriculum level 5. Students can be entered for some or all Level 1 standards; the school determines the entry based on student readiness and curriculum coverage.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NCEA Level 1 Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NCEA Level 1 Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NCEA Level 1 Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NCEA Level 1 Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NCEA Level 1 Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NCEA Level 1 Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NCEA Level 1 Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NCEA Level 1 Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NCEA Level 1 Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NCEA Level 1 Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NCEA Level 1 Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NCEA Level 1 Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NCEA Level 1 Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NCEA Level 1 Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NCEA Level 1 Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NCEA Level 1 Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NCEA Level 1 Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NCEA Level 1 Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NCEA Level 1 Mathematics',
    duration: '1d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 4).map(t => t.name),
    })),
    strategy: 'Focus on the two externally assessed standards (91946, 91947) which carry the larger end-of-year weight. Drill NZQA exemplars on ncea.education.govt.nz and the NZQA practice assessment resources.',
  },
  prepOverview:
    'NCEA Level 1 Mathematics and Statistics preparation runs across two parallel tracks: internal standards (91944 statistical enquiry, 91945 contextual methods) that the school submits across Terms 1-3, and external standards (91946 applied context, 91947 mathematical reasoning) that sit as end-of-year NZQA exams in November/December. Start with 91944 and 91945 in Term 1, since the school sets the internal assessment schedule, then run a sustained review cycle for 91946 and 91947 from mid-Term 2 onward. The single highest-leverage resource is the official NZQA exemplars on ncea.education.govt.nz, which show the standard required for Achieved, Merit and Excellence on each standard. For Excellence-level reasoning, students should practise writing relational and extended abstract justifications for each problem, not just arriving at a correct answer. Re-check the live standard numbers, assessment specifications and any in-year changes on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=01&query=mathematics before committing a revision plan to a student (newzealand).',
  commonMistakes: [
    'Treating 91946 and 91947 as one paper - they are separate standards with different assessment emphases (applied context vs reasoning) and require separate practice.',
    'Skipping the statistical enquiry process in 91944 - NZQA\'s "Enquiry Process" has a published sequence (pose, plan, collect, manage, analyse, report); missing any step costs Achieved-level credit.',
    'Writing only answers on 91947 - it explicitly requires demonstrated mathematical reasoning, so visible justification is part of the grade criteria.',
    'Confusing Merit (relational thinking) and Excellence (extended abstract thinking) - they ask for different things in the marking schedule; check the NZQA standard document for each.',
    'Leaving 91945 (Aotearoa/Pacific contexts) too late - the teacher uses Terms 2-3 to set up the context, so student engagement and topic selection need to be early.',
    'Banking on internal resubmission - resubmission for a higher grade is at the teacher\'s discretion and not guaranteed.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.nzqa.govt.nz/ncea/assessment/search.do?level=01&query=mathematics',
};

export default exam;
