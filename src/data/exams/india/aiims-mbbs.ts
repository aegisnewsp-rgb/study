import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { botany } from './subjects/botany';
import { zoology } from './subjects/zoology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
    botany,
    zoology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'aiims-mbbs',
  examName: 'AIIMS MBBS',
  country: 'india',
  description: `The All India Institute of Medical Sciences (AIIMS) MBBS entrance examination was the premier medical entrance exam for admission to MBBS programmes at AIIMS New Delhi and its satellite campuses across India. From 2020 onwards, AIIMS MBBS was merged with JIPMER and NEET UG, making NEET UG the single nationwide entrance test for all medical colleges in India including AIIMS institutions. The exam evaluated candidates on Physics, Chemistry, and Biology at the 10+2 level, testing conceptual understanding and application of scientific principles essential for medical studies. Lakhs of students appeared for this highly competitive examination annually.`,
  examPattern: `The AIIMS MBBS examination consisted of 200 multiple-choice questions (MCQs) divided across four sections: Physics (60 questions), Chemistry (60 questions), Biology (60 questions including Botany and Zoology), and General Knowledge/Aptitude (20 questions). Total duration was 3 hours and 30 minutes. Each correct answer was awarded 1 mark with no negative marking for incorrect answers. The examination was conducted in a computer-based (CBT) format at designated test centres across India. Questions were designed to test comprehension, application, and analytical skills rather than mere recall.`,
  eligibility: `Candidates must have completed the 10+2 or equivalent examination with Physics, Chemistry, Biology, and English as compulsory subjects from a recognized board. A minimum aggregate of 60% marks in Physics, Chemistry, and Biology (PCB) is required for the general category, with 50% for SC/ST and 55% for OBC candidates. The upper age limit was 25 years for general category with 5-year relaxations for SC/ST/OBC candidates. Only Indian citizens and Overseas Citizens of India (OCI) were eligible to appear for the examination.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AIIMS MBBS — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for AIIMS MBBS — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for AIIMS MBBS — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for AIIMS MBBS — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for AIIMS MBBS — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AIIMS MBBS — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for AIIMS MBBS — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AIIMS MBBS — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for AIIMS MBBS — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AIIMS MBBS — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for AIIMS MBBS — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for AIIMS MBBS — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AIIMS MBBS — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for AIIMS MBBS — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AIIMS MBBS — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AIIMS MBBS — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for AIIMS MBBS — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for AIIMS MBBS — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AIIMS MBBS',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'AIIMS MBBS admissions now primarily use NEET UG ranks under the national counselling framework (confirm the live MCC / AIIMS counselling rules for the year). Prepare via NEET UG: NCERT Biology first, then Chemistry and Physics with full mocks. Use StudyRoadmap NEET notes and roadmaps; verify seat and counselling steps only on official portals.',
  commonMistakes: [
    'Studying obsolete AIIMS-only exam patterns that no longer apply.',
    'Ignoring NEET UG NCERT Biology weight.',
    'No full NEET-length mocks.',
    'Counselling document unpreparedness.',
    'Trusting unofficial seat predictions as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.aiims.edu/',
};

export default exam;
