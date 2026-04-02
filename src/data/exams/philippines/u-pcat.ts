import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { english } from './subjects/english';
import { filipino } from './subjects/filipino';

const subjects: Subject[] = [
    mathematics,
    science,
    english,
    filipino,
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
  examId: 'u-pcat',
  examName: 'UPCAT (Philippines)',
  country: 'philippines',
  description: 'University of the Philippines College Admission Test (UPCAT) is the entrance exam for the University of the Philippines system — the most prestigious university system in the Philippines. The UP system comprises 8 constituent universities across the country. UPCAT is a highly competitive exam that tests the knowledge and skills developed over four years of secondary education. Performance in UPCAT is the primary criterion for admission, alongside the applicant\'s high school grades.',
  examPattern: 'Language and Reading Comprehension, Math, Science (Physics, Chemistry, Biology), and IQ-style questions. Written and MCQ format. The Language and Reading Comprehension section tests English vocabulary, grammar, and reading skills. Math covers algebra, geometry, trigonometry, and statistics. Science covers fundamental concepts in Physics, Chemistry, and Biology. The IQ-style questions assess abstract reasoning and pattern recognition. The exam is paper-based and typically runs from early morning to noon on scheduled dates.',
  eligibility: 'Graduating high school student or high school graduate with above-average grades. Must meet UPCAT cut-off scores. For incoming freshmen, candidates must be in the top third of their graduating class with a general weighted average of at least 85%. The UPCAT cut-off score varies by campus and programme — competitive courses like Engineering, Biology, and Psychology require higher scores. For transfer applicants, additional requirements apply.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPCAT (Philippines) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPCAT (Philippines) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPCAT (Philippines) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPCAT (Philippines) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPCAT (Philippines) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPCAT (Philippines) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPCAT (Philippines) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPCAT (Philippines)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://up.edu.ph',
};

export default exam;
