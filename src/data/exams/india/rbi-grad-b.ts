import type { ExamTemplate, Subject } from '../types';

import { economics } from './subjects/economics';
import { finance } from './subjects/finance';
import { management } from './subjects/management';
import { english } from './subjects/english';
import { quant } from './subjects/quant';

const subjects: Subject[] = [
    economics,
    finance,
    management,
    english,
    quant,
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
  examId: 'rbi-grad-b',
  examName: 'RBI Grade B',
  description: 'RBI Grade B is a prestigious officers examination conducted by the Reserve Bank of India for recruitment to various officer-level posts in RBI. The exam has three phases: Phase I (Preliminary objective exam), Phase II (Main descriptive exam with Economic & Social Issues, English Descriptive Writing, and Finance & Management papers), and a Personal Interview. Phase I tests Reasoning, Quantitative Aptitude, English Language, and General Awareness in a time-bound online format with negative marking. Phase II requires descriptive answers testing in-depth knowledge of macroeconomic concepts, banking and financial sector issues, social issues in India, and management principles. General Awareness includes current affairs and banking awareness, with special emphasis on RBI policies, monetary policy, financial inclusion, and the Indian financial system. It is one of the most competitive banking sector exams, attracting candidates from across the country with a multi-stage selection process demanding both speed and depth.',
  examPattern: 'Phase I is an online objective test of 200 marks covering Reasoning (60 questions), Quantitative Aptitude (60 questions), English Language (30 questions), and General Awareness (80 questions) with 1/4 negative marking. Phase II consists of three descriptive papers: Economic & Social Issues (100 marks) — covering Indian economy, social issues, and development economics; English Writing Skills (100 marks) — essay, precise writing, and comprehension; and Finance & Management (100 marks) — financial system, financial markets, and management functions. Each phase is eliminatory. The final selection is based on Phase II and Interview marks taken together.',
  eligibility: 'Candidates must have a minimum of 60% marks (or equivalent grade) in Class X, Class XII, and bachelor\'s degree. The age limit is 21-30 years for general category with relaxation for SC/ST/OBC. Candidates with post-graduation or professional qualifications like CA/CFA/MBA can also apply. Final year students are not eligible. The candidate must be a citizen of India, Nepal, Bhutan, or a Tibetan refugee who has settled in India before January 1, 1962, subject to government rules.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for RBI Grade B — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for RBI Grade B — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for RBI Grade B — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for RBI Grade B — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for RBI Grade B — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for RBI Grade B — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for RBI Grade B — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for RBI Grade B',
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
