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

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'fmge',
  examName: 'FMGE',
  country: 'india',
  description: `The Foreign Medical Graduate Examination (FMGE) is a screening test conducted by the National Board of Examinations (NBE) for Indian citizens (or Overseas Citizens of India) who hold a medical degree from a foreign institution and wish to practice medicine in India. All medical degrees obtained from countries outside India must be verified through FMGE before a candidate can be registered with the National Medical Commission (NMC) or any State Medical Council to practice as a qualified medical professional in India. The exam is held twice a year (June and December).`,
  examPattern: `As conducted by the National Board of Examinations in Medical Sciences (NBEMS https://natboard.edu.in), the screening test comprises 300 multiple-choice questions administered in two separate sessions of 150 questions each (Part A and Part B). The exam covers pre-clinical, para-clinical, and clinical medical subjects. Each question carries 1 mark, with no negative marking as notified in the official NBEMS information bulletin (https://natboard.edu.in). As specified by NBEMS (https://natboard.edu.in), the allotted time is 150 minutes (2 hours 30 minutes) for each part in online computer-based testing mode.`,
  eligibility: `Indian citizens or Overseas Citizens of India holding a primary medical qualification (MBBS or equivalent) from a medical institution listed in the WHO World Directory of Medical Schools or recognized by the respective country's competent authority. The medical college and university awarding the degree must be recognized by the country's medical regulatory body. Candidates must have completed their internship or be eligible to complete it before the examination. Candidates with medical degrees from China (and certain other countries) need to have studied and completed the entire MBBS programme in that country (no credit transfer allowed).`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for FMGE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for FMGE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for FMGE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for FMGE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for FMGE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for FMGE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for FMGE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for FMGE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for FMGE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for FMGE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for FMGE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for FMGE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for FMGE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for FMGE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for FMGE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for FMGE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for FMGE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for FMGE — 2 Years'),
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
  prepOverview:
    'FMGE (NBEMS) is the screening test for foreign medical graduates seeking registration in India. Coverage spans the full MBBS map with high weight on Medicine, Surgery, OBG, PSM, Pathology and Pharma. Phase 1: subject-wise high-yield notes; Phase 2: large-volume MCQs with negative-marking discipline if applicable; Phase 3: full mocks. Confirm eligibility, attempts and pattern on the official NBEMS FMGE notice.',
  commonMistakes: [
    'Studying only pre-clinical subjects and under-preparing clinical and PSM blocks.',
    'No timed full papers before the exam window.',
    'Ignoring official eligibility and internship documentation rules.',
    'Using outdated pattern claims from forums.',
    'Skipping systematic revision of high-yield image/clinical vignette styles if present in recent papers.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://natboard.edu.in/viewnbeexam?exam=fmge',
};

export default exam;
