import type { ExamTemplate, Subject } from '../types';

import { science_stream } from './subjects/science-stream';
import { commerce_stream } from './subjects/commerce-stream';
import { arts_stream } from './subjects/arts-stream';

const subjects: Subject[] = [
    science_stream,
    commerce_stream,
    arts_stream,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'al-exam',
  examName: 'A/L Examination (Sri Lanka)',
  country: 'srilanka',
  description: 'Sri Lanka GCE Advanced Level (A-Level) examination is the national university entrance exam. Students choose a stream (Science, Commerce, Arts) and sit exams in 3-4 subjects. Results determine university admission. The exam is administered by the Department of Examinations, Sri Lanka, and is held annually. It is the most important examination for students seeking higher education in Sri Lanka\'s public universities.',
  examPattern: '3-4 subjects depending on stream: Commerce (Business Studies, Accounting, Economics, ICT), Science (Chemistry, Physics, Biology, Mathematics), Arts (Economics, Geography, History, Political Science). Papers include MCQs, structured, and essay questions. Each subject has 3 papers: Paper I (MCQ), Paper II (structured + essay), and a practical or project component for science subjects. Exams are held over several weeks in August/September.',
  eligibility: 'GCE O-Level with minimum 6 credits including English. GCE A-Level stream selection based on O-Level results. Students typically select their stream based on career interests — Science for medicine/engineering, Commerce for business, Arts for humanities/social sciences. University admission cut-off points vary by university programme and change annually based on demand.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for A/L Examination (Sri Lanka) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for A/L Examination (Sri Lanka) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for A/L Examination (Sri Lanka) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for A/L Examination (Sri Lanka) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for A/L Examination (Sri Lanka) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for A/L Examination (Sri Lanka) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for A/L Examination (Sri Lanka) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for A/L Examination (Sri Lanka) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for A/L Examination (Sri Lanka) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for A/L Examination (Sri Lanka) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for A/L Examination (Sri Lanka) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for A/L Examination (Sri Lanka) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for A/L Examination (Sri Lanka) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for A/L Examination (Sri Lanka) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for A/L Examination (Sri Lanka) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for A/L Examination (Sri Lanka) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for A/L Examination (Sri Lanka) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for A/L Examination (Sri Lanka) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for A/L Examination (Sri Lanka)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://doenets.lk',
};

export default exam;
