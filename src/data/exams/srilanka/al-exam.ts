import type { ExamTemplate, Subject } from '../types';

import { science_stream } from './subjects/science-stream';
import { commerce_stream } from './subjects/commerce-stream';
import { arts_stream } from './subjects/arts-stream';

const subjects: Subject[] = [
    science_stream,
    commerce_stream,
    arts_stream,
];


function makeRoadmap(subjects: Subject[], duration: string, totalDays: number, description: string): RoadmapTemplate {
  const dailyCapacity = Math.max(1, Math.floor(subjects.reduce((sum, s) => sum + s.topics.length, 0) / totalDays));
  const dailyTopics: DailyTopicItem[] = [];
  let day = 1;
  const usedTopics = new Set<string>();

  while (day <= totalDays) {
    for (const subject of subjects) {
      const available = subject.topics.filter(t => !usedTopics.has(t.id));
      const toUse = available.slice(0, dailyCapacity);
      for (const topic of toUse) {
        usedTopics.add(topic.id);
        dailyTopics.push({ ...topic, subject: subject.name });
      }
    }
    day++;
    if (usedTopics.size >= subjects.reduce((s, sb) => s + sb.topics.length, 0)) break;
  }

  return { duration, totalDays, dailyTopics, description };
}

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
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for A/L Examination (Sri Lanka) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for A/L Examination (Sri Lanka) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for A/L Examination (Sri Lanka) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for A/L Examination (Sri Lanka) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for A/L Examination (Sri Lanka) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for A/L Examination (Sri Lanka) — 6 Months'),
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
  lastUpdated: '2026-03-25',
  officialSource: 'https://doenets.lk',
};

export default exam;
