import type { ExamTemplate, Subject } from '../types';

import { reasoning } from './subjects/reasoning';
import { quant } from './subjects/quant';
import { english } from './subjects/english';
import { general_awareness } from './subjects/general-awareness';

const subjects: Subject[] = [
    reasoning,
    quant,
    english,
    general_awareness,
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
  examId: 'sbi-po',
  examName: 'SBI PO',
  description: 'SBI PO (Probationary Officer) is one of the most sought-after banking examinations in India, conducted by the State Bank of India for recruitment to officer cadre positions. The three-stage selection process comprises Preliminary Examination (objective online test), Main Examination (objective + descriptive online test), and Group Exercise & Interview. The Prelims tests Reasoning, Quantitative Aptitude, and English Language in a time-bound format. The Mains is more comprehensive with Reasoning, Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and an English Descriptive Test. The exam demands both speed and accuracy, with negative marking of 0.25 in Prelims and 0.25 in Mains objective questions. Success in SBI PO opens doors to a prestigious career in India\'s largest public sector bank with attractive compensation and growth opportunities.',
  examPattern: 'Preliminary Exam (100 marks, 1 hour): Reasoning (35 questions), Quantitative Aptitude (35 questions), English Language (30 questions). Main Examination (250 marks, 3 hours 20 min): Reasoning (45 questions), Data Analysis (35 questions), English Language (35 questions), General/Economy/Banking Awareness (40 questions), plus English Descriptive Test (Letter and Essay, 50 marks). Group Exercise (20 marks) and Interview (30 marks) follow for shortlisted candidates. Final merit list is prepared from Main (200) + GE (20) + Interview (30).',
  eligibility: 'Candidates must be Indian citizens aged between 21-30 years for general category with educational relaxation. A bachelor\'s degree in any discipline from a recognized university is mandatory. Final year students are not eligible. The age relaxation is 5 years for SC/ST, 3 years for OBC, and 5 years for persons with disabilities. Computer working knowledge is essential. There is no separate banking awareness test but it forms a major part of the General Awareness section.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SBI PO — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SBI PO — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SBI PO — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SBI PO — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SBI PO — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SBI PO — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SBI PO — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SBI PO',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
