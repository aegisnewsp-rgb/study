import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'acsee',
  examName: 'ACSEE (Tanzania)',
  country: 'tanzania',
  description: 'Tanzania Advanced Certificate of Secondary Education (ACSEE) is the national examination for post-secondary selection. Equivalent to A-Levels, it determines university admission in Tanzania. The ACSEE is administered by the National Examinations Council of Tanzania (NECTA) and is taken by students who have successfully completed their CSEE (Form IV). It is the key determinant for admission to Tanzania\'s public universities through the Tanzania Commission for Universities (TCU).',
  examPattern: '6-7 papers including compulsory General Studies plus 3 elective subjects. Essay, short answer, and MCQ formats. General Studies is compulsory and covers civics, communication skills, and basic mathematics. Elective subjects are chosen based on the student\'s desired university programme — natural sciences (Physics, Chemistry, Biology, Mathematics), business (Economics, Commerce, Accounting), or humanities (History, Geography, Languages). Each paper is 3 hours.',
  eligibility: 'CSEE (Form IV) certificate with minimum passes. Selection based on ACSEE results and subject clusters. Students must have passed at least 4 subjects at CSEE level. University admission is coordinated through TCU which sets minimum subject and grade requirements for each programme. Competitive programmes like Medicine, Engineering, and Law require specific subject combinations and high grades.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACSEE (Tanzania) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ACSEE (Tanzania) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ACSEE (Tanzania) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ACSEE (Tanzania) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ACSEE (Tanzania) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACSEE (Tanzania) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ACSEE (Tanzania) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACSEE (Tanzania) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ACSEE (Tanzania) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACSEE (Tanzania) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ACSEE (Tanzania) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ACSEE (Tanzania) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACSEE (Tanzania) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ACSEE (Tanzania) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACSEE (Tanzania) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACSEE (Tanzania) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ACSEE (Tanzania) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ACSEE (Tanzania) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ACSEE (Tanzania)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Tanzania Advanced Certificate of Secondary Education (ACSEE) is the national examination for post-secondary selection. Equivalent to A-Levels, it determines university admission in Tanzania. NECTA publishes ACSEE sitting rules at https://www.necta.go.tz; this hub only orders Form VI subjects for university selection.',
  commonMistakes: [
    'If your ACSEE (Tanzania) brochure has no date, throw it out and open https://www.necta.go.tz.',
    'A ACSEE (Tanzania) mock with a different number of items trains the wrong stamina.',
    'A friend who sat ACSEE (Tanzania) two years ago is not your eligibility officer; https://www.necta.go.tz is.',
    'StudyRoadmap will not promise a ACSEE (Tanzania) outcome — only a study order.',
    'Use 6-7 papers including compulsory General Studies plus 3 elective subjects. Essay, short answer, and MCQ… only as a memory aid for ACSEE (Tanzania), then match the live paper on https://www.necta.go.tz.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.necta.go.tz',
};

export default exam;
