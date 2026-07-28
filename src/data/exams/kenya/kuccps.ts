import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { subject_clusters } from './subjects/subject-clusters';

const subjects: Subject[] = [
    mathematics,
    english,
    subject_clusters,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kuccps',
  examName: 'KUCCPS Placement (Kenya)',
  country: 'kenya',
  description: 'The Kenya Universities and Colleges Central Placement Service (KUCCPS) places students into university programmes based on KCSE (Kenya Certificate of Secondary Education) grades. There is no separate placement examination — admission is determined entirely by KCSE performance. Students apply through KUCCPS by selecting courses from the available programme list, and placement is done based on cluster points calculated from KCSE grades in the four cluster subjects relevant to the chosen programme. KUCCPS manages placement for all public universities and is the official body for ensuring transparent and merit-based placement of students into higher education in Kenya.',
  examPattern: 'Based on KCSE cluster subjects — no separate exam. Points are calculated from KCSE grades in 4 cluster subjects plus redundancy subjects. The cluster system uses the 48-point scale where each grade (A=12, A-=11, B+=10, B=9, B-=8, C+=7, C=6, C-=5, D+=4, D=3, E=0) is multiplied by the subject weight and summed to produce a cluster points score. Each programme specifies the four subjects that form its cluster.',
  eligibility: 'KCSE holder with minimum C+ for most programmes (some require higher, some accept C). Must apply through KUCCPS during the application window after KCSE results are released. The minimum subject requirements vary by programme — for example, Medicine typically requires A in Biology, A- in Chemistry, A- in Physics/Mathematics, and B+ in English. Candidates must meet both the overall KCSE mean grade requirement and the specific cluster subject requirements for their chosen programme.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KUCCPS (Kenya) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KUCCPS (Kenya) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KUCCPS (Kenya) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KUCCPS (Kenya) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KUCCPS (Kenya) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KUCCPS (Kenya) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KUCCPS (Kenya) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KUCCPS (Kenya) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KUCCPS (Kenya) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KUCCPS (Kenya) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KUCCPS (Kenya) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KUCCPS (Kenya) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KUCCPS (Kenya) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KUCCPS (Kenya) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KUCCPS (Kenya) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KUCCPS (Kenya) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KUCCPS (Kenya) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KUCCPS (Kenya) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KUCCPS (Kenya)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'KUCCPS Placement (Kenya) preparation works best in three phases: (1) map the live syllabus and paper pattern from the official notice, (2) finish high-weight topics with timed practice sets and an error log, (3) sit full-length mocks matching official duration and marking. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://kuccps.net for the current cycle — rules change by year and country (kenya).',
  commonMistakes: [
    'Using outdated KUCCPS Placement (Kenya) pattern or syllabus PDFs instead of the live official notice.',
    'Practising only untimed quizzes and never sitting full-length mocks under exam fatigue.',
    'Ignoring high-weight sections while over-studying low-yield topics.',
    'No written error log — repeating the same mistake types across mocks.',
    'Treating unofficial cut-offs or rank predictors as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://kuccps.net',
};

export default exam;
