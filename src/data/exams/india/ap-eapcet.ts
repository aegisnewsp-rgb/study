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
  examId: 'ap-eapcet',
  examName: 'AP EAPCET',
  country: 'india',
  description: "AP EAPCET (formerly AP EAMCET) is the state entrance exam for engineering, agriculture, and pharmacy programmes in Andhra Pradesh. Conducted by JNTUK on behalf of APSCHE.",
  examPattern: "160 MCQs: Physics(40), Chemistry(40), Mathematics(80), 3 hours, 80 marks per subject in MPC track.",
  eligibility: "Class 12 with PCM with minimum 45% aggregate. Andhra Pradesh domicile required.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AP EAPCET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for AP EAPCET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for AP EAPCET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for AP EAPCET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for AP EAPCET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AP EAPCET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for AP EAPCET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AP EAPCET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for AP EAPCET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AP EAPCET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for AP EAPCET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for AP EAPCET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AP EAPCET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for AP EAPCET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AP EAPCET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AP EAPCET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for AP EAPCET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for AP EAPCET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AP EAPCET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'AP EAPCET (Andhra Pradesh) is the state professional entrance for engineering/agriculture/pharmacy streams. Finish Intermediate textbooks, then previous AP EAPCET papers under timed conditions. Confirm stream codes, dates and syllabus on the official APSCHE / AP EAPCET portal.',
  commonMistakes: [
    'Ignoring Intermediate weightage patterns.',
    'No timed full papers.',
    'Weak chemistry practice.',
    'Application document mistakes.',
    'Confusing AP and TS portals/notices.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://cets.apsche.ap.gov.in/EAPCET/',
};

export default exam;
