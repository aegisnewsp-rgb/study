import type { ExamTemplate, Subject } from '../types';

import { language_comprehension } from './subjects/language-comprehension';
import { mathematical_skills } from './subjects/mathematical-skills';
import { data_analysis } from './subjects/data-analysis';
import { reasoning } from './subjects/reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    language_comprehension,
    mathematical_skills,
    data_analysis,
    reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'mat',
  examName: 'MAT',
  country: 'india',
  description: `The Management Aptitude Test (MAT) is a national-level entrance examination conducted by the All India Management Association (AIMA) four times a year (February, May, September, and December) for admission to MBA and equivalent programmes in over 600 management institutions across India. MAT is one of the oldest and most widely accepted management entrance exams, providing candidates the flexibility to take the exam in either Paper-Based Test (PBT) or Computer-Based Test (CBT) mode. It is accepted by a large network of AICTE-approved B-schools and is considered a good alternative for candidates who wish to apply to multiple B-schools through a single exam.`,
  examPattern: `The MAT examination consists of five sections with 200 multiple-choice questions in total: Language Comprehension (40 questions), Mathematical Skills (40 questions), Data Analysis and Sufficiency (40 questions), Intelligence and Critical Reasoning (40 questions), and General Awareness (40 questions). Each question carries 1 mark, totaling 200 marks. The duration is 2 hours 30 minutes (150 minutes). There is no negative marking in MAT. The exam can be taken in Paper-Based Test (PBT) mode or Computer-Based Test (CBT) mode. Candidates are awarded scores on a scaled basis for comparison across different test forms.`,
  eligibility: `Candidates with a bachelor's degree in any discipline with a minimum of 50% aggregate marks (45% for SC/ST candidates) from a recognized university are eligible to appear for MAT. Candidates in their final year of graduation may also apply provisionally. There is no upper age limit. Candidates should have a valid email ID as the MAT scorecard is sent electronically. Work experience is not mandatory but is preferred by some B-schools for certain specializations.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://mat.aima.in/',
};

export default exam;
