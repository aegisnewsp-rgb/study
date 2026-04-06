import type { ExamTemplate, Subject } from '../types';

import { varc } from './subjects/varc';
import { decision_making } from './subjects/decision-making';
import { qa } from './subjects/qa';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    varc,
    decision_making,
    qa,
    gk,
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
  examId: 'xat',
  examName: 'XAT',
  description: 'XAT (Xavier Aptitude Test) is a national-level management entrance examination conducted by XLRI Jamshedpur on behalf of Xavier Association of India. It is one of India\'s oldest and most prestigious MBA entrance exams, used by over 100 B-schools for admission. XAT is known for its unpredictable and challenging format, particularly in Decision Making, Verbal Ability, and Quantitative Aptitude sections. Unlike other exams, XAT includes a dedicated Decision Making section with case lets and scenario-based questions testing ethical reasoning and business judgment. The exam has undergone multiple pattern changes — recently including a 25-minute General Knowledge section and an essay writing component. Data Interpretation and Quantitative Ability questions in XAT are generally considered more difficult than CAT. Strong performance in XAT can secure admission to top B-schools including XLRI, XIMB, SPJain, and IMT.',
  examPattern: 'XAT exam pattern has evolved over years. Currently it consists of multiple sections: Verbal and Logical Reasoning (VA+LR), Decision Making (DM), Quantitative Aptitude and Data Interpretation (QA+DI), General Knowledge (GK), and an Essay Writing section. The total number of questions varies (around 75-100) with a duration of about 180 minutes. Each question carries 1 mark with negative marking of 0.25 for wrong answers (0.10 for GK). Recent patterns have introduced multi-select questions where more than one option may be correct. Essay writing (typically 15-20 minutes) is part of some B-school selections post-XAT score receipt.',
  eligibility: 'Candidates must hold a bachelor\'s degree in any discipline with minimum 50% marks from a recognized university for general category. Final year students can apply provisionally. There is no age limit. Work experience is considered by some institutes for specific programs but is not mandatory for XAT eligibility. Candidates from all academic backgrounds including Commerce, Arts, Science, and Engineering appear for XAT.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for XAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for XAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for XAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for XAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for XAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for XAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for XAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for XAT',
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
