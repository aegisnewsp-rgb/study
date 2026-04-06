import type { ExamTemplate, Subject } from '../types';

import { anatomy } from './subjects/anatomy';
import { physiology } from './subjects/physiology';
import { biochemistry } from './subjects/biochemistry';
import { pharmacology } from './subjects/pharmacology';
import { pathology } from './subjects/pathology';
import { microbiology } from './subjects/microbiology';
import { forensic } from './subjects/forensic';
import { psm } from './subjects/psm';

const subjects: Subject[] = [
    anatomy,
    physiology,
    biochemistry,
    pharmacology,
    pathology,
    microbiology,
    forensic,
    psm,
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
  examId: 'fmge',
  examName: 'FMGE',
  country: 'india',
  description: `The Foreign Medical Graduate Examination (FMGE) is a screening test conducted by the National Board of Examinations (NBE) for Indian citizens (or Overseas Citizens of India) who hold a medical degree from a foreign institution and wish to practice medicine in India. All medical degrees obtained from countries outside India must be verified through FMGE before a candidate can be registered with the National Medical Commission (NMC) or any State Medical Council to practice as a qualified medical professional in India. The exam is held twice a year (June and December).`,
  examPattern: `FMGE consists of 300 multiple-choice questions divided into two parts: Part A (150 questions) and Part B (150 questions). The exam covers all subjects taught during the MBBS programme including Pre-Clinical (Anatomy, Physiology, Biochemistry), Para-Clinical (Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine), and Clinical subjects (Medicine, Surgery, Obstetrics and Gynecology, Pediatrics, and others). Each question carries 1 mark, with no negative marking. The total duration is 2 hours 30 minutes for each part (5 hours total). The exam is conducted in online (computer-based) mode.`,
  eligibility: `Indian citizens or Overseas Citizens of India holding a primary medical qualification (MBBS or equivalent) from a medical institution listed in the WHO World Directory of Medical Schools or recognized by the respective country's competent authority. The medical college and university awarding the degree must be recognized by the country's medical regulatory body. Candidates must have completed their internship or be eligible to complete it before the examination. Candidates with medical degrees from China (and certain other countries) need to have studied and completed the entire MBBS programme in that country (no credit transfer allowed).`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for FMGE — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for FMGE — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for FMGE — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for FMGE — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for FMGE — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for FMGE — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for FMGE — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for FMGE',
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
