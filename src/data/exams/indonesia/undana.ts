import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { language } from './subjects/language';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    mathematics,
    science,
    language,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'undana',
  examName: 'UNDANA Admission (Indonesia)',
  country: 'indonesia',
  description: "Universitas Nusa Cendana (Undana) admission test — public university in East Nusa Tenggara, Indonesia.",
  examPattern: "University-specific entrance or UTBK-based admission. Undana is one of the national selection centres that host the UTBK-SNBT computer-based test, so the syllabus and paper format are set nationally rather than by the university.",
  eligibility: "SMA graduate or equivalent. For domestic students primarily.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UNDANA Admission (Indonesia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UNDANA Admission (Indonesia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UNDANA Admission (Indonesia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UNDANA Admission (Indonesia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UNDANA Admission (Indonesia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UNDANA Admission (Indonesia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UNDANA Admission (Indonesia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UNDANA Admission (Indonesia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UNDANA Admission (Indonesia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UNDANA Admission (Indonesia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UNDANA Admission (Indonesia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UNDANA Admission (Indonesia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UNDANA Admission (Indonesia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UNDANA Admission (Indonesia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UNDANA Admission (Indonesia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UNDANA Admission (Indonesia) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UNDANA Admission (Indonesia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Undana hosts the national UTBK-SNBT computer-based selection, one of the country\'s host locations, so the paper you sit is set nationally and the university\'s own role is the venue and the programme advert. Read the programme requirements at https://undana.ac.id first, then use this hub to sequence the subjects they name.',
  commonMistakes: [
    'Mirrors of a UNDANA \'syllabus 2019\' are a common trap. The test is the national UTBK-SNBT paper, so a document titled after one campus is usually either out of date or is about that campus\'s internal regulations rather than the exam.',
    'Revision spread evenly across every subject when the national paper is not. UTBK-SNBT is a single computer-based sitting with one published duration, so a candidate who gives every topic equal hours can still run out of time in the section that decides the score.',
    'Do not assume UNDANA Admission (Indonesia) is open to every degree title until https://undana.ac.id says so.',
    'Treat \'sure selection\' UNDANA Admission (Indonesia) ads as marketing; the board does not endorse them.',
    'Counting an SMA certificate as the whole eligibility test. Indonesian admission also runs on the national score route, and the mix of results a candidate is expected to present differs by degree level — confirm which applies to the programme you want before you plan the year.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://undana.ac.id',
  conductingBody: 'Universitas Nusa Cendana (Undana)',
};

export default exam;
