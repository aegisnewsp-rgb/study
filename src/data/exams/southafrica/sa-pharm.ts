import type { ExamTemplate, Subject } from '../types';

import { pharmacy } from './subjects/pharmacy';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { business_law } from './subjects/business-law';

const subjects: Subject[] = [
    pharmacy,
    chemistry,
    biology,
    business_law,
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
  examId: 'sa-pharm',
  examName: 'SAPC (South Africa)',
  country: 'southafrica',
  description: 'South African Pharmacy Council (SAPC) examination — the licensing examination for pharmacists trained outside South Africa who wish to register and practice as pharmacists in South Africa. The SAPC is the statutory body that regulates the pharmacy profession in South Africa. Foreign-qualified pharmacists must pass both the Pharmacy Technician Assessment (for technicians) or the Pharmacist\'s Examination (for pharmacists) to obtain registration with the SAPC.',
  examPattern: 'The examination covers Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Clinical Pharmacy, and Pharmacy Practice/Law. Questions are presented as MCQs, short-answer questions, and case-based scenarios. There may also be a practical component assessing dispensing skills and pharmaceutical calculations. The examination is typically held over 2 days. For those seeking specialization, additional board examinations may be required.',
  eligibility: 'A recognised pharmacy degree (B.Pharm or equivalent) from an accredited institution outside South Africa. Completed internship (or equivalent supervised practice). Candidates must have their foreign qualification assessed by the SAPC and found to be substantially equivalent to the South African qualification. A period of supervised practice in South Africa may be required before taking the exam. English language proficiency is required.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SAPC (South Africa) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SAPC (South Africa) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SAPC (South Africa) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SAPC (South Africa) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SAPC (South Africa) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SAPC (South Africa) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SAPC (South Africa) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SAPC (South Africa)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.sapc.za.org',
};

export default exam;
