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
  examId: 'gaokao',
  examName: 'Gaokao (China National College Entrance)',
  country: 'china',
  description: 'Gaokao is China\'s national university entrance examination — one of the largest and most consequential exams in the world. Over 13 million students appear annually. It determines admission to undergraduate programmes at Chinese universities and is the single most important academic milestone in a Chinese student\'s life. The exam is administered nationally over 2-3 days in June. Students choose between the Science stream (理科) or Arts stream (文科), which determines their university placement and future career paths.',
  examPattern: '3 mandatory subjects + 1 elective: Chinese Language(150 marks, 150 minutes), Mathematics(150 marks, 150 minutes), English(150 marks, 120 minutes), plus one elective from either: Physics/History (Science stream) or Politics/Geography/History (Arts stream). Each paper is 3+ hours. Science stream includes Physics, Chemistry, Biology; Arts stream includes Politics, History, Geography. Total marks: 750.',
  eligibility: 'High school graduation certificate (普通高中毕业证书), minimum age typically 17. Students must be from mainland China or meet specific residency requirements. Students from Hong Kong, Macau, and Taiwan may have separate admission channels. Foreign nationals studying in China may apply through specific scholarship programmes or as international students through separate channels.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Gaokao (China) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Gaokao (China) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Gaokao (China) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Gaokao (China) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Gaokao (China) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Gaokao (China) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Gaokao (China) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Gaokao (China) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Gaokao (China) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Gaokao (China) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Gaokao (China) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Gaokao (China) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Gaokao (China) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Gaokao (China) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Gaokao (China) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Gaokao (China) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Gaokao (China) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Gaokao (China) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Gaokao (China)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.neea.edu.cn',
};

export default exam;
