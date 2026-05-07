import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { subject_combination } from './subjects/subject-combination';

const subjects: Subject[] = [
    english,
    subject_combination,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'putme',
  examName: 'Post-UTME (Nigeria)',
  country: 'nigeria',
  description: 'Post-UTME is the screening examination conducted by individual Nigerian universities after the JAMB UTME. Each university designs its own Post-UTME test, which evaluates candidates on subject-specific knowledge relevant to their chosen course. The Post-UTME score, combined with the JAMB UTME score, determines a candidate\'s admission chances. As there are over 50 universities in Nigeria, each with unique Post-UTME formats, preparation must be tailored to the specific university. Competition is intense, particularly for popular courses like Medicine, Law, and Engineering.',
  examPattern: 'Format varies by university — typically 40-100 MCQs in relevant subjects, 1-2 hours duration. Most universities test Use of English (compulsory) plus 2-3 subjects relevant to the candidate\'s chosen programme. Some universities like UNILAG use fully CBT format while others use paper-based tests. Lagos State universities use EKO-KSS, Ogun uses OGUN-SS, Oyo uses OYOSTATE-SS. Questions are drawn from the JAMB UTME syllabus and the university\'s subject requirements.',
  eligibility: 'Must have sat JAMB UTME and scored the minimum cut-off mark set by the university and course of choice. Each university publishes its own cut-off marks annually based on JAMB\'s national guidelines. Candidates must also meet the university\'s O-Level subject requirements. The combination of JAMB score and Post-UTME score determines the admission ranking. Candidates can only sit Post-UTME at one university per admission year.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Post-UTME (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Post-UTME (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Post-UTME (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Post-UTME (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Post-UTME (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Post-UTME (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Post-UTME (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Post-UTME (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Post-UTME (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Post-UTME (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Post-UTME (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Post-UTME (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Post-UTME (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Post-UTME (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Post-UTME (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Post-UTME (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Post-UTME (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Post-UTME (Nigeria) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Post-UTME (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.jamb.gov.ng',
};

export default exam;
