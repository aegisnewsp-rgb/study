import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'comedk',
  examName: 'COMEDK',
  country: 'india',
  description: "COMEDK UGET is the entrance exam for admission to private engineering colleges in Karnataka. Conducted annually, it is a merit-based exam testing Physics, Chemistry, and Mathematics.",
  examPattern: "180 MCQs: Physics(60), Chemistry(60), Mathematics(60), 3 hours, 180 marks total. No negative marking.",
  eligibility: "Class 12 PCM with minimum 45% aggregate. Indian citizen only.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for COMEDK — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for COMEDK — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for COMEDK — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for COMEDK — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for COMEDK — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for COMEDK — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for COMEDK — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for COMEDK — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for COMEDK — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for COMEDK — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for COMEDK — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for COMEDK — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for COMEDK — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for COMEDK — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for COMEDK — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for COMEDK — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for COMEDK — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for COMEDK — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for COMEDK',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'COMEDK UGET is for private engineering colleges in Karnataka (PCM). Treat it as a Class 11–12 accuracy + speed exam; finish NCERT then timed mocks. Confirm syllabus, marking and dates on the official COMEDK portal.',
  commonMistakes: [
    'Ignoring official mock/pattern updates.',
    'Weak organic chemistry and modern physics practice.',
    'No full-length timed papers.',
    'Random guessing under negative marking if applicable.',
    'Confusing COMEDK with KCET counselling rules.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.comedk.org/',
};

export default exam;
