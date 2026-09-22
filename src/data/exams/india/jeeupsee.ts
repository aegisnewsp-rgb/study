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
  examId: 'jeeupsee',
  examName: 'UPSEE',
  country: 'india',
  description: `The Uttar Pradesh State Entrance Examination (UPSEE), also known as AKTU (Dr. A.P.J. Abdul Kalam Technical University) entrance exam, is a state-level engineering and management entrance examination conducted by the university for admission to various undergraduate and postgraduate programmes in engineering, management, and pharmacy colleges affiliated with AKTU across Uttar Pradesh. It was a significant gateway for students in Uttar Pradesh to access quality technical education. However, with the advent of national-level exams like JEE Main, many states have moved towards accepting national scores, and UPSEE has been rebranded and restructured in recent years.`,
  examPattern: `Under historical UPSEE and current AKTU UPTAC (uptac.admissions.nic.in) technical admission patterns, state papers for engineering aspirants historically featured 50 to 75 questions per subject section across Physics, Chemistry, and Mathematics. Scoring typically awarded 4 marks per question with no negative marking under historical state papers, with test duration typically spanning around 3 hours (180 minutes) as notified by Dr. A.P.J. Abdul Kalam Technical University (aktu.ac.in). Current engineering admissions to AKTU-affiliated institutions in Uttar Pradesh are conducted via UPTAC counseling based on NTA JEE Main percentile rankings.`,
  eligibility: `For B.Tech programmes: Candidates must have passed the 10+2 examination from a recognized board with Physics and Mathematics as compulsory subjects. A minimum of typically 45% marks in aggregate (40% for reserved SC/ST candidates) in the qualifying examination is required as officially notified by AKTU (aktu.ac.in). For B.Arch and specialized programs, candidates typically require at least 50% aggregate marks as per Council of Architecture and AKTU guidelines, alongside valid national scorecards.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPSEE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UPSEE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UPSEE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UPSEE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UPSEE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPSEE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UPSEE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPSEE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UPSEE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPSEE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UPSEE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UPSEE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPSEE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UPSEE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPSEE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPSEE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UPSEE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UPSEE — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPSEE',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'UP technical admissions have largely shifted toward national scores (for example JEE Main) and university-notified processes. Treat this hub as a planning map for AKTU-affiliated pathways: strengthen PCM fundamentals, take timed full papers, and always confirm the current admission route, counselling body and eligibility on aktu.ac.in and the live state counselling portal — do not assume older UPSEE-only rules still apply.',
  commonMistakes: [
    'Preparing for a discontinued standalone UPSEE pattern without checking the current AKTU/state counselling notice.',
    'Ignoring JEE Main (or other accepted scores) if the live admission cycle requires them.',
    'No full-length PCM timed practice.',
    'Document and domicile checklist failures at counselling.',
    'Trusting outdated college cut-off PDFs as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://aktu.ac.in/',
};

export default exam;
