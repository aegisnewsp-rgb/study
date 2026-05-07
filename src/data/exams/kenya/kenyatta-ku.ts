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
  examId: 'kenyatta-ku',
  examName: 'Kenyatta University Admission Test (Kenya)',
  country: 'kenya',
  description: 'Kenyatta University (KU) is one of Kenya\'s largest public universities, located near Nairobi. The university conducts its own admission tests for various undergraduate programmes, especially those that are competitive such as Medicine, Law, Engineering, and Computer Science. KU admission test evaluates candidates on their subject-specific knowledge, general aptitude, and language proficiency. The test is administered on campus and is a key component of the selection process alongside KCSE performance for courses that receive more applicants than available slots.',
  examPattern: 'Typically consists of 2-3 papers depending on the programme applied for: Subject-specific paper (relevant to the chosen course, e.g., Biology and Chemistry for Medicine, Mathematics and Physics for Engineering), English and General Aptitude test, and sometimes a programme-specific paper. Each paper is 1-2 hours. Questions are primarily multiple choice with some structured short-answer questions. For Education programmes, there may be an interview component.',
  eligibility: 'KCSE holder with minimum C+ mean grade for most programmes. Specific programmes require minimum grades in relevant subjects — for example, Engineering requires C+ in Mathematics and Physics, Medicine requires A in Biology, A- in Chemistry, and A- in Physics/Mathematics. KU\'s own cut-off points vary by programme and change annually based on demand. Candidates must apply through KUCCPS first, and shortlisted candidates are invited for the university\'s own admission test.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Kenyatta University (Kenya) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Kenyatta University (Kenya) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Kenyatta University (Kenya) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Kenyatta University (Kenya) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Kenyatta University (Kenya) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Kenyatta University (Kenya) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Kenyatta University (Kenya) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Kenyatta University (Kenya) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Kenyatta University (Kenya) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Kenyatta University (Kenya) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Kenyatta University (Kenya) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Kenyatta University (Kenya) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Kenyatta University (Kenya) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Kenyatta University (Kenya) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Kenyatta University (Kenya) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Kenyatta University (Kenya) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Kenyatta University (Kenya) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Kenyatta University (Kenya) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Kenyatta University (Kenya)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ku.ac.ke',
};

export default exam;
