import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    mathematics,
    english,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'buet-adm',
  examName: 'BUET Admission Test',
  country: 'bangladesh',
  description: 'BUET Admission Test is the extremely competitive entrance exam for Bangladesh University of Engineering and Technology — the premier engineering university in Bangladesh. Only top ~1% of applicants are admitted. The test assesses candidates in Mathematics, Physics, Chemistry, and English at the HSC level, with Mathematics carrying the highest weightage. Candidates who pass the written test are called for a viva voce examination as the final stage of selection.',
  examPattern: 'Written + MCQ: Mathematics(100 marks), Physics(50 marks), Chemistry(50 marks), English(25 marks). Total 225 marks. Shortlisted candidates then appear for viva voce. The examination is held in Dhaka and other divisional cities simultaneously.',
  eligibility: 'HSC or equivalent with GPA 4.0+ in Physics, Chemistry, and Mathematics (combined minimum 13.5 in these three subjects). Bangladesh citizen only. Foreign nationals may apply under specific quotas. Students from science background in HSC/equivalent are eligible.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for BUET Admission — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for BUET Admission — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for BUET Admission — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for BUET Admission — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for BUET Admission — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for BUET Admission — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for BUET Admission — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for BUET Admission — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for BUET Admission — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for BUET Admission — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for BUET Admission — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for BUET Admission — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for BUET Admission — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for BUET Admission — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for BUET Admission — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for BUET Admission — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for BUET Admission — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for BUET Admission — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for BUET Admission',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://buet.ac.bd',
};

export default exam;
