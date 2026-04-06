import type { ExamTemplate, Subject } from '../types';

import { subject_combinations } from './subjects/subject-combinations';

const subjects: Subject[] = [
    subject_combinations,
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
  examId: 'ijmb',
  examName: 'IJMB (Interim Joint Matriculation Board)',
  country: 'nigeria',
  description: 'The Interim Joint Matriculation Board (IJMB) is an alternative pathway to JAMB for admission into Nigerian universities. Managed and conducted by Ahmadu Bello University (ABU), Zaria, IJMB is a two-year programme that results in an IJMB certificate accepted by all Nigerian universities for direct entry into 200 level (second year). It serves as a bridge between the O-Level/SSCE and university education, allowing candidates to bypass the 100 level and enter directly into their chosen degree programmes based on their IJMB results.',
  examPattern: '3-4 subjects depending on programme choice, each paper 3 hours duration. Conducted by Ahmadu Bello University. The programme involves continuous assessment during the two-year course and final examinations. Science candidates typically take Physics, Chemistry, and Biology/Mathematics; Arts candidates take relevant combinations based on their intended university course. Each subject is examined separately with rigorous testing of A-Level equivalent knowledge.',
  eligibility: 'SSCE/NECO holder with minimum 5 credits including English and Mathematics (for most programmes). The programme is designed for candidates seeking direct entry into 200 level university programmes. O-Level results must be within 5 years of the IJMB examination. Students who have already attempted JAMB may also enroll in IJMB as an alternative pathway. Foreign nationals with equivalent qualifications may also apply.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IJMB (Nigeria) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IJMB (Nigeria) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IJMB (Nigeria) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IJMB (Nigeria) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IJMB (Nigeria) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IJMB (Nigeria) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IJMB (Nigeria) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IJMB (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://abu.edu.ng/ijmb',
};

export default exam;
