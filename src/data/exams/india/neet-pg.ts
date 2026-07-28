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
  description:
    "NEET PG (National Eligibility cum Entrance Test for Postgraduate) is the national entrance exam for MD, MS and PG Diploma seats in India, conducted under the National Board of Examinations in Medical Sciences (NBEMS). Scores feed All-India and state counselling for government, private and deemed colleges; competition is extreme relative to clinical seats. This hub covers the broad MBBS-wide pattern, eligibility, high-yield subject weights and free study roadmaps. Always confirm registration windows, fees, internship cut-off dates, attempt rules and seat matrix on the current NBEMS / counselling authority notices — rules change by cycle.",
  examPattern:
    "Typical recent pattern: about 200 multiple-choice questions in 3 hours 30 minutes (210 minutes), computer-based, English only. Coverage spans the full MBBS map — pre-clinical (Anatomy, Physiology, Biochemistry), para-clinical (Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine / PSM) and clinical (Medicine & allied, Surgery & allied, Obstetrics & Gynaecology, Paediatrics, plus other clinical allotments as notified). Approximate historical question shares often cited in prep circles: Pathology and Community Medicine among the heavier para-clinical blocks; Medicine among the heavier clinical blocks — treat published shares as planning aids, not guarantees. Scoring is commonly +4 / −1 (confirm in the live information bulletin). Build stamina with full 210-minute mocks and a review system that separates knowledge gaps from silly negative-marking losses.",
  eligibility:
    "MBBS (or provisional pass certificate) from an NMC-recognised college, plus completion of compulsory rotating internship by the date NBEMS states for that cycle. Registration with NMC or a State Medical Council is required as per the bulletin. Attempt limits and other candidature rules have changed over years — do not rely on older blogs; read the current NEET-PG information bulletin. Foreign medical graduates must meet NMC eligibility for Indian practice and the exam notice requirements. Final seat allotment also depends on counselling authorities (MCC / state) and category documents. Verify every date and certificate rule on official portals before fee payment.",
  prepOverview:
    "NEET PG rewards integrated MBBS revision under negative marking, not first-year nostalgia or last-minute app marathons. Phase 1 (map): one full pass of high-yield notes for Pathology, Pharmacology, Microbiology, PSM, Medicine, Surgery, OBG and Paediatrics — these usually decide rank bands — while keeping Anatomy/Physiology/Biochemistry as rapid revision, not deep re-learning. Phase 2 (Q-bank): daily timed blocks (50–100 Qs) with written error logs tagged by subject and mistake type (concept / recall / misread / guess). Phase 3 (simulation): full-length 200-Q mocks weekly, then twice weekly in the last 6–8 weeks; review only until you can teach the correct approach without reopening the explanation first. Protect sleep and one light revision subject the day before mocks so exam-day fatigue is familiar. Use StudyRoadmap subject notes and a free roadmap for remaining weeks; pair with standard PG Q-banks and previous-style papers. Confirm pattern and schedule only on natboard.edu.in / the live NBEMS bulletin.",
  commonMistakes: [
    'Re-reading entire first-year textbooks instead of high-yield integrated notes plus timed Q-banks under +4/−1 discipline.',
    'Ignoring Pathology, PSM and clinical subjects while over-investing in low-return pre-clinical minutiae.',
    'Taking untimed topic quizzes only and never sitting full 210-minute mocks with negative-marking review.',
    'Trusting outdated attempt-limit, internship cut-off or seat-matrix posts instead of the current NBEMS bulletin.',
    'Skipping error-log analysis — repeating the same misread and guess patterns across hundreds of questions.',
  ],
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
  lastUpdated: '2026-07-28',
  officialSource: 'https://natboard.edu.in/viewnbeexam?exam=neetpg',
};

export default exam;
