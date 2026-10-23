import type { ExamTemplate } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';

const subjects = [physics, chemistry, mathematics, english];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'manipal-met',
  examName: 'Manipal MET',
  country: 'india',
  description: `The Manipal MET (Manipal Entrance Test) is a university-level entrance examination conducted by Manipal Academy of Higher Education (MAHE), Manipal, for admission to various undergraduate and postgraduate programmes across its campuses in Manipal, Bengaluru, and Dubai. MAHE is one of the largest and most prestigious deemed-to-be-universities in India, offering programmes in medicine, engineering, management, humanities, and sciences. The Manipal MET is the gateway for admission to MBBS, B.Tech, BBA, MBA, and numerous other professional programmes offered by the institution.`,
  examPattern: `The Manipal MET for undergraduate engineering programmes (B.Tech) covers Mathematics, Physics, Chemistry and English as its sections, with questions designed to test conceptual understanding and problem-solving abilities at the 10+2 level. For MBBS admission, NEET UG scores are accepted, though MAHE may also conduct its own MET for other health sciences programmes. The BBA/MBA MET consists of sections on English Language, Quantitative Aptitude, Logical Reasoning, and General Awareness. The exam is conducted in online (computer-based) mode. Duration and number of questions vary by programme. Per the official MAHE B.Tech MET 2026 information bulletin (https://cia.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf), the paper runs for 120 minutes for 60 questions and 240 marks: 45 multiple-choice items — Mathematics (15), Physics (10), Chemistry (10) and English (10) — plus 15 numerical-answer items, Mathematics (5), Physics (5) and Chemistry (5). Every correct answer scores 4. An incorrect multiple-choice answer costs 1; numerical-answer items carry no negative marking, and unanswered questions score 0 either way.`,
  eligibility: `For B.Tech programmes: Candidates must have passed 10+2 or equivalent with Physics and Mathematics as compulsory subjects, along with one of Chemistry/Biotechnology/Computer Science/Biology with a minimum of 50% aggregate marks in PCM. For MBBS: Candidates must register, appear and qualify in NEET UG 2026; counselling and seat allotment are conducted by MCC, KEA or JCECEB as applicable. For BBA: Candidates must have passed 10+2 or equivalent in any stream with a minimum of 50% aggregate marks. For MBA: A bachelor's degree in any discipline with a minimum of 50% aggregate marks from a recognized university is required, along with a valid CAT/MAT/CMAT/ME score or MET score.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Manipal MET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Manipal MET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Manipal MET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Manipal MET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Manipal MET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Manipal MET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Manipal MET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Manipal MET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Manipal MET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Manipal MET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Manipal MET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Manipal MET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Manipal MET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Manipal MET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Manipal MET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Manipal MET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Manipal MET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Manipal MET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Manipal MET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Manipal MET is the entrance for Manipal Academy programmes (engineering and others as notified). Focus on PCM accuracy and speed plus English/aptitude if included. Full official-pattern mocks. Confirm syllabus and dates on the official Manipal admissions site.',
  commonMistakes: [
    'Only JEE Advanced prep without MET-speed practice.',
    'Ignoring English/aptitude components if present.',
    'No full-length mocks.',
    'Assuming the B.Tech MET paper follows one marking rule throughout: 45 of its 60 items are multiple-choice and lose a mark when wrong, while the 15 numerical answers cost nothing to attempt.',
    'Application deadline misses.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://manipal.edu/mu-met',
  conductingBody: 'Manipal Academy of Higher Education (MAHE)',
};

export default exam;
