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
  examId: 'cucet-pg',
  examName: 'CUCET (PG)',
  country: 'india',
  description: `The Central Universities Common Entrance Test for Postgraduate programmes (CUCET PG) is a national-level entrance examination conducted jointly by the member universities of the Central University system. It serves as a unified entrance test for admission to various postgraduate programmes (M.A., M.Sc., M.Com., LL.M., M.Tech., etc.) at 10 central universities across India. CUCET PG provides a single-window opportunity for candidates to apply to multiple universities and programmes simultaneously, saving time and effort while ensuring a standardized selection process.`,
  examPattern: `CUCET PG consists of multiple-choice questions (MCQs) from the relevant subject/domain as well as a General Awareness section. The exam pattern varies by programme but typically includes 100 questions carrying 100 marks (1 mark per question) to be completed in 2 hours. The question paper is divided into domains: Domain Knowledge (based on the undergraduate subject), General Awareness, and Logical Reasoning/Analytical skills in some papers. The exam is conducted in an online (computer-based) mode at designated test centres. There is a negative marking of 0.25 marks for each wrong answer.`,
  eligibility: `Candidates who have completed a bachelor's degree in the relevant discipline with a minimum of 50% aggregate marks (45% for SC/ST/PwD candidates) from a recognized university are eligible to appear for CUCET PG. The eligibility criteria vary slightly across participating universities. Some universities may require a specific subject combination at the undergraduate level. Candidates in their final year of graduation may also apply provisionally. For professional programmes like MBA, a valid CAT/XAT/CMAT score may also be considered.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CUCET (PG) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CUCET (PG) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CUCET (PG) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CUCET (PG) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CUCET (PG) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CUCET (PG) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CUCET (PG) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CUCET (PG)',
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
