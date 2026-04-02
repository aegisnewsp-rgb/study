import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
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
  examId: 'must-adm',
  examName: 'MUST Admission (Tanzania)',
  country: 'tanzania',
  description: 'Mzumbe University of Tanzania (MUST) admission test is the entrance examination for undergraduate programmes at Mzumbe University, one of Tanzania\'s leading public universities. Mzumbe University is particularly known for its programmes in law, public administration, business, and economics. The university conducts its own admission test for competitive programmes to supplement the TCU centralized admission system.',
  examPattern: 'Varies by programme applied for — typically tests relevant subjects at CSEE or ACSEE level depending on the programme. For law and business programmes, tests English, Mathematics, and General Knowledge. For science programmes, tests Physics, Chemistry, and Mathematics. Questions are MCQ and short-answer. Each paper is approximately 2 hours. The test is paper-based and conducted on campus.',
  eligibility: 'CSEE (Form IV) certificate with minimum passes for diploma programmes. ACSEE certificate with relevant subject passes for degree programmes. Each programme has specific subject requirements — Law typically requires a credit in English at CSEE; Business programmes require Mathematics. Candidates must apply through the TCU system and separately to Mzumbe University for programmes requiring the admission test.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MUST Admission (Tanzania) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MUST Admission (Tanzania) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MUST Admission (Tanzania) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MUST Admission (Tanzania) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MUST Admission (Tanzania) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MUST Admission (Tanzania) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MUST Admission (Tanzania) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MUST Admission (Tanzania)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://must.ac.tz',
};

export default exam;
