import type { ExamTemplate, Subject } from '../types';

import { anatomy } from './subjects/anatomy';
import { physiology } from './subjects/physiology';
import { biochemistry } from './subjects/biochemistry';
import { pharmacology } from './subjects/pharmacology';
import { pathology } from './subjects/pathology';

const subjects: Subject[] = [
    anatomy,
    physiology,
    biochemistry,
    pharmacology,
    pathology,
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
  examId: 'ini-cet',
  examName: 'INI CET (AIIMS PG)',
  country: 'india',
  description: `The Institute of National Importance Combined Entrance Test (INI CET) is a national-level entrance examination for admission to postgraduate medical programmes (MD, MS, DM, M.Ch., MDS) in top medical institutions of India including AIIMS (New Delhi and other campuses), JIPMER Puducherry, NIMHANS Bengaluru, PGIMER Chandigarh, and SCTIMST Trivandrum. Previously, AIIMS PG and JIPMER PG were separate exams, but they have been merged into INI CET under the National Medical Commission framework to streamline admissions to these prestigious institutions.`,
  examPattern: `The INI CET examination consists of 200 multiple-choice questions (MCQs) to be completed in 3 hours (180 minutes). The question paper covers all subjects taught during the MBBS programme: Pre-clinical subjects (Anatomy, Physiology, Biochemistry), Para-clinical subjects (Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine), and Clinical subjects (Medicine and its specialties, Surgery and its specialties, Obstetrics and Gynecology, Pediatrics). Each question carries 1 mark, with 1/3 mark deducted for each incorrect answer. The exam is conducted in online (computer-based) mode at designated test centres. The medium of the exam is English.`,
  eligibility: `Candidates must have completed their MBBS degree from an institution recognized by the National Medical Commission (NMC) and must have completed their compulsory rotating internship on or before the date of counselling. For MD/MS programmes, candidates must have scored a minimum of 55% aggregate marks in the MBBS professional examinations (50% for SC/ST/OBC candidates with disability). For DM/M.Ch. programmes, candidates must have completed the respective postgraduate degree (MD/MS) and meet the specialty-specific requirements. Candidates from reserved categories, physically disabled candidates, and foreign nationals are eligible as per NMC guidelines.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for INI CET (AIIMS PG) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for INI CET (AIIMS PG) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for INI CET (AIIMS PG) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for INI CET (AIIMS PG) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for INI CET (AIIMS PG) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for INI CET (AIIMS PG) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for INI CET (AIIMS PG) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for INI CET (AIIMS PG)',
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
