import type { ExamTemplate, Subject } from '../types';

import { medical_knowledge } from './subjects/medical-knowledge';
import { english } from './subjects/english';
import { clinical_skills } from './subjects/clinical-skills';

const subjects: Subject[] = [
    medical_knowledge,
    english,
    clinical_skills,
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
  examId: 'doh',
  examName: 'DOH (UAE)',
  country: 'uae',
  description: 'Dubai Health Authority (DOH) exam — a licensing examination for healthcare professionals seeking to practice in Dubai\'s health facilities. The DOH is the regulatory and licensing authority for all healthcare professionals and facilities operating in the Emirate of Dubai. The licensing exam is a requirement for all healthcare practitioners — doctors, nurses, dentists, pharmacists, and allied health professionals — before they can obtain a professional license to practice in Dubai.',
  examPattern: 'Professional competency assessment through computer-based testing. Format varies by profession. For physicians, the exam covers medical knowledge relevant to their specialty, patient management, and professional ethics. For pharmacists, it covers Pharmacology, Pharmaceutics, Clinical Pharmacy, and Pharmaceutical Chemistry. For nurses, it covers nursing theory, clinical skills, and healthcare ethics. The exam is typically MCQ-based with questions drawn from a large pool, and each attempt presents a different set of questions.',
  eligibility: 'Recognised primary medical qualification. Post-graduate experience may be required for specialists. All candidates must have completed their primary healthcare qualification from an accredited institution. Physicians must have completed internship and, for specialists, must have completed residency/fellowship training. Nurses must hold a nursing qualification (diploma or degree). English language proficiency (IELTS 6.0 or equivalent) is required for most professions. A valid employment offer from a Dubai health facility may also be required.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DOH (UAE) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DOH (UAE) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DOH (UAE) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DOH (UAE) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DOH (UAE) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DOH (UAE) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DOH (UAE) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for DOH (UAE)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.doh.gov.ae',
};

export default exam;
