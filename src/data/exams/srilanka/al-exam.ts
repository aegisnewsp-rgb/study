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
  description: 'Sri Lanka GCE Advanced Level (A-Level) examination is the national university entrance exam. Students choose a stream (Science, Commerce, Arts) and sit 3 main subjects plus a compulsory Common General Test. Results determine university admission. The exam is administered by the Department of Examinations, Sri Lanka, and is held annually. It is the most important examination for students seeking higher education in Sri Lanka\'s public universities.',
  examPattern: 'Every candidate sits 3 main subjects plus the compulsory Common General Test, and may add General English. Subjects are drawn from one stream: Commerce (Business Studies, Accounting, Economics), Science (Chemistry, Physics, with Biology or Combined Mathematics), Arts (Economics, Geography, History, Political Science). Papers include MCQs, structured, and essay questions. Each subject has 3 papers: Paper I (MCQ), Paper II (structured + essay), and a practical or project component for science subjects. Exams are held over several weeks in August/September.',
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
  prepOverview:
    'Start from the stream your O-Level results qualify you for, then plan a revision order rather than a subject list: take each main subject in the same three-paper shape — an objective Paper I you can drill for speed, a written Paper II carrying the structured and essay responses, and, in Science, the practical or project component that sits alongside them. Because the papers run across several weeks in August and September, finish one full pass of a subject before opening the next and leave the last stretch for mixed timed practice. Treat the Common General Test — general knowledge and quantitative skills — as its own component rather than an afterthought, and weigh an optional General English paper against the hours it takes from your three main ones. Results are ranked by a normalised Z-score rather than by raw marks, and because that normalisation shifts with the difficulty of each year\'s paper, practise to the standard instead of chasing a target number.',
  commonMistakes: [
    'Rehearsing against last year\'s paper pack and treating its timings as this year\'s — the timetable is set and amended for each series, so read the current one at https://doenets.lk.',
    'Planning around one assumed exam day — the papers are sat in consecutive daily sittings running from August into September, so check which days you are actually registered for.',
    'Choosing a stream without first checking that stream\'s approved subject combinations — you sit subjects within the combination your registered stream allows, and a degree programme can add a subject requirement on top of that.',
    'Treating an unofficial answer key or a grade-calculator as a result; the Department of Examinations publishes the outcome, and a rumoured cut-off circulating on a forum is not one.',
    'Check the published credit requirement yourself against https://doenets.lk the week you apply — do not rely on memory of last year\'s rule.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://doenets.lk',
};

export default exam;
