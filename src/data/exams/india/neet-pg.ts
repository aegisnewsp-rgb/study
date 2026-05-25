import type { ExamTemplate, Subject } from '../types';

import { anatomy } from './subjects/anatomy';
import { physiology } from './subjects/physiology';
import { biochemistry } from './subjects/biochemistry';
import { pharmacology } from './subjects/pharmacology';
import { pathology } from './subjects/pathology';
import { microbiology } from './subjects/microbiology';
import { psm } from './subjects/psm';

const subjects: Subject[] = [
    anatomy,
    physiology,
    biochemistry,
    pharmacology,
    pathology,
    microbiology,
    psm,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'neet-pg',
  examName: 'NEET PG',
  country: 'india',
  description: `The National Eligibility cum Entrance Test for Postgraduate (NEET PG) is the sole entrance examination for admission to various postgraduate medical programmes (MD, MS, PG Diploma) in India. Conducted by the National Board of Examinations (NBE), NEET PG is mandatory for all medical graduates seeking admission to government, private, and deemed medical colleges across India. The examination is considered one of the most competitive postgraduate medical entrance exams in the world, with over 2 lakh candidates appearing annually for approximately 50,000 MD/MS seats. NEET PG scores are also used for NBEMS recruitment and state quota counselling.`,
  examPattern: `NEET PG consists of 200 multiple-choice questions to be completed in 3 hours 30 minutes (210 minutes). The question paper covers all subjects taught during the MBBS programme. The distribution includes Pre-clinical subjects (Anatomy - 17 questions, Physiology - 17 questions, Biochemistry - 16 questions), Para-clinical subjects (Pathology - 25 questions, Pharmacology - 20 questions, Microbiology - 13 questions, Forensic Medicine - 10 questions, Community Medicine - 25 questions), and Clinical subjects (Medicine and its allied - 37 questions, Surgery and its allied - 25 questions, Obstetrics and Gynecology - 25 questions, Pediatrics - 15 questions). Each correct answer scores 4 marks, with 1 mark deducted for each wrong answer. The exam is conducted online (CBT) in English only.`,
  eligibility: `Candidates must have completed their MBBS degree or a provisional MBBS pass certificate recognized by the National Medical Commission (NMC) and must have completed their compulsory rotating internship on or before the prescribed date. Candidates must be registered with the NMC or State Medical Council. The maximum number of attempts for NEET PG is 4. There is no minimum marks requirement at MBBS level for appearing in NEET PG, though for admission to postgraduate courses, the eligibility criteria are set by the participating universities and counselling authorities. Foreign medical graduates must also qualify NEET PG and fulfill NMC's criteria for practicing in India.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NEET PG — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NEET PG — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NEET PG — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NEET PG — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NEET PG — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NEET PG — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NEET PG — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NEET PG — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NEET PG — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NEET PG — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NEET PG — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NEET PG — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NEET PG — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NEET PG — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NEET PG — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NEET PG — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NEET PG — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NEET PG — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NEET PG',
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
