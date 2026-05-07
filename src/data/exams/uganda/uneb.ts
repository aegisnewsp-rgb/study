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
  examId: 'uneb',
  examName: 'UNEB UACE (Uganda)',
  country: 'uganda',
  description: 'Uganda National Examinations Board (UNEB) UACE (Uganda Advanced Certificate of Education) is the national A-Level equivalent exam for university entrance in Uganda. The UACE is taken after two years of advanced secondary education (S.5 and S.6) and is the primary criterion for admission to Ugandan universities. UNEB administers the exam annually, and results are used by the Uganda National Council for Higher Education (UNCHE) for university placement.',
  examPattern: 'At least 3 principal passes in relevant subjects. Compulsory General Paper. Essay and MCQ formats. Students typically take 3-4 subjects in their chosen combination: Science (Physics, Chemistry, Biology, Mathematics), Arts (History, Geography, Economics, Divinity), or Commercial (Economics, Mathematics, Commerce, Accounting). The General Paper tests general knowledge, communication, and critical thinking. Each subject has three papers: Papers 1 and 2 (theory) and Paper 3 (practical or essay depending on subject).',
  eligibility: 'UCE (Form IV) certificate with minimum passes. Subject combinations must meet university course requirements. Students must have completed S.6 (Senior 6) of secondary education. For university admission, a minimum of 2 principal passes at the same sitting is typically required, though competitive programmes like Medicine and Law require 3 principal passes with specific subject grades.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UNEB UACE (Uganda) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UNEB UACE (Uganda) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UNEB UACE (Uganda) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UNEB UACE (Uganda) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UNEB UACE (Uganda) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UNEB UACE (Uganda) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UNEB UACE (Uganda) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UNEB UACE (Uganda) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UNEB UACE (Uganda) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UNEB UACE (Uganda) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UNEB UACE (Uganda) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UNEB UACE (Uganda) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UNEB UACE (Uganda) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UNEB UACE (Uganda) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UNEB UACE (Uganda) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UNEB UACE (Uganda) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UNEB UACE (Uganda) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UNEB UACE (Uganda) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UNEB UACE (Uganda)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.uneb.ac.ug',
};

export default exam;
