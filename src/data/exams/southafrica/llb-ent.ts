import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
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
  examId: 'llb-ent',
  examName: 'LLB Admission (South Africa)',
  country: 'southafrica',
  description: 'LLB (Bachelor of Laws) entrance requirements for South African universities — varies by university. Some require separate entrance tests alongside NSC (National Senior Certificate) results. The LLB is a four-year professional degree that qualifies graduates to become advocates or attorneys in South Africa. Universities like the University of Cape Town (UCT), University of the Witwatersrand (Wits), Stellenbosch University, and the University of Pretoria (UP) have their own additional admission criteria.',
  examPattern: 'Varies by university — typically subject performance in NSC plus any additional entrance tests. Some universities require the National Benchmark Tests (NBT) in Academic Literacy and Quantitative Literacy. Others conduct their own tests — for example, Wits requires the Wits Writing Test. The test typically covers academic literacy, writing skills, logical reasoning, and sometimes legal reasoning. Format varies from MCQ tests to essay writing. Duration is typically 2-4 hours.',
  eligibility: 'NSC (National Senior Certificate) with minimum degree-level passes. Specific subject requirements for law. A minimum of 50% in four NSC subjects including Life Orientation is typically required. For law, English Home Language or First Additional Language at 50%+ is usually mandatory, along with a Humanities subject. Some universities require the NBT as an additional requirement. The LLB is competitive and most universities have a higher cut-off than the minimum.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LLB Admission (South Africa) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LLB Admission (South Africa) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LLB Admission (South Africa) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LLB Admission (South Africa) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LLB Admission (South Africa) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LLB Admission (South Africa) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LLB Admission (South Africa) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for LLB Admission (South Africa)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.che.ac.za',
};

export default exam;
