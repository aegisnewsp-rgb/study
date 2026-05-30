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

import { makeRoadmap } from '../_lib/roadmap';
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
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for INI CET (AIIMS PG) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for INI CET (AIIMS PG) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for INI CET (AIIMS PG) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for INI CET (AIIMS PG) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for INI CET (AIIMS PG) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for INI CET (AIIMS PG) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for INI CET (AIIMS PG) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for INI CET (AIIMS PG) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for INI CET (AIIMS PG) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for INI CET (AIIMS PG) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for INI CET (AIIMS PG) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for INI CET (AIIMS PG) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for INI CET (AIIMS PG) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for INI CET (AIIMS PG) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for INI CET (AIIMS PG) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for INI CET (AIIMS PG) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for INI CET (AIIMS PG) — 2 Years'),
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
  lastUpdated: '2026-05-30',
  officialSource: 'https://www.aiimsexams.ac.in/',
};

export default exam;
