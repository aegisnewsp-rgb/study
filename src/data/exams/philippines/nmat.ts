import type { ExamTemplate, Subject } from '../types';

import { verbal } from './subjects/verbal';
import { logical } from './subjects/logical';
import { quantitative } from './subjects/quantitative';
import { mental_ability } from './subjects/mental-ability';

const subjects: Subject[] = [
    verbal,
    logical,
    quantitative,
    mental_ability,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'nmat',
  examName: 'NMAT (Philippines)',
  country: 'philippines',
  description: 'National Medical Admission Test (NMAT) is the Philippines\' standardised entrance exam for medical schools — required for admission to all medical schools in the Philippines. The NMAT is a national standardised examination administered by the Center for Educational Measurement (CEM) on behalf of the Association of Philippine Medical Colleges (APMC). It is a rigorous aptitude test that measures the academic preparedness of candidates for medical school.',
  examPattern: 'Part I: Verbal (analogies, reading comprehension), Inductive Reasoning, Quantitative (math fundamentals, problem solving), Perceptual Acuity. Part II: Physics, Chemistry, Biology, Social Sciences. Scored on percentile. Part I is designed to measure mental abilities and is taken first. Part II covers the four science subjects studied at the undergraduate level. Each subtest has 200-250 items. The exam is computer-based and can be taken at designated testing centers across the Philippines.',
  eligibility: 'Bachelor\'s degree (any field) with minimum GPA requirement. NMAT score valid for 2 years. Most medical schools require a minimum NMAT percentile score of 40-50, though top schools like UP Manila, Ateneo, and De La Salle require 80-90+. Candidates must have completed all undergraduate prerequisite courses (Biology, Physics, General Chemistry, Organic Chemistry, Biochemistry). The NMAT can be taken while completing the bachelor\'s degree or after graduation.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NMAT (Philippines) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NMAT (Philippines) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NMAT (Philippines) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NMAT (Philippines) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NMAT (Philippines) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NMAT (Philippines) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NMAT (Philippines) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NMAT (Philippines) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NMAT (Philippines) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NMAT (Philippines) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NMAT (Philippines) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NMAT (Philippines) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NMAT (Philippines) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NMAT (Philippines) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NMAT (Philippines) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NMAT (Philippines) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NMAT (Philippines) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NMAT (Philippines) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NMAT (Philippines)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.cem-inc.org',
};

export default exam;
