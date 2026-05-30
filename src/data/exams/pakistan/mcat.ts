import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'mcat',
  examName: 'MCAT Pakistan',
  country: 'pakistan',
  description: `The Medical College Admission Test (MCAT) is Pakistan standardized entrance examination for admission to undergraduate medical (MBBS) and dental (BDS) programs in public and private medical colleges across Pakistan. This comprehensive assessment evaluates candidates knowledge and understanding of Biology, Chemistry, Physics, and English at the intermediate college level. MCAT is a mandatory requirement for all medical admissions as per the Pakistan Medical Commission regulations, replacing the previous system where individual universities conducted their own entrance tests. The examination ensures standardized evaluation of candidates seeking careers in medicine and healthcare.`,
  examPattern: `MCAT Pakistan consists of multiple-choice questions divided into four subject areas: Biology carries the highest weightage with approximately 80 questions covering Zoology and Botany, Chemistry has around 60 questions including organic, inorganic, and physical chemistry, Physics contains 40 questions, and English includes 20 questions on vocabulary and comprehension. Total duration is 3 hours and 30 minutes. The examination is conducted in paper-based format at designated testing centers across Pakistan. Each correct answer earns full marks with no negative marking typically applied.`,
  eligibility: `Candidates must have completed HSSC (Pre-Medical) or equivalent with Biology, Chemistry, and Physics as compulsory subjects from a recognized educational board. A minimum of 65% to 70% aggregate marks in HSSC is typically required for admission to public medical colleges, though private colleges may have lower thresholds. Students appearing in their final HSSC examinations may apply provisionally. Foreign qualification holders must provide equivalence certificates from IBCC. Pakistani citizens as well as foreign nationals meeting the educational requirements are eligible to appear for MCAT.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MCAT Pakistan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MCAT Pakistan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MCAT Pakistan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MCAT Pakistan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MCAT Pakistan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MCAT Pakistan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MCAT Pakistan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MCAT Pakistan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MCAT Pakistan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MCAT Pakistan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MCAT Pakistan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MCAT Pakistan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MCAT Pakistan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MCAT Pakistan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MCAT Pakistan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MCAT Pakistan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MCAT Pakistan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MCAT Pakistan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MCAT Pakistan',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://pmdc.pk/',
};

export default exam;
