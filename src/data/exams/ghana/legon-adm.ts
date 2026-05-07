import type { ExamTemplate, Subject } from '../types';

import { wassce_subjects } from './subjects/wassce-subjects';
import { english } from './subjects/english';

const subjects: Subject[] = [
    wassce_subjects,
    english,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'legon-adm',
  examName: 'Legon Admissions (Ghana)',
  country: 'ghana',
  description: 'University of Ghana (Legon) admission test — a supplementary entrance exam for students who did not meet direct admission requirements to UG. The University of Ghana is the oldest and most prestigious university in Ghana. Each year, the university receives far more qualified applicants than it can admit. The admission test provides a pathway for candidates who have strong WASSCE results but narrowly missed the direct admission cut-off for their preferred programme.',
  examPattern: 'Tests relevant subjects based on programme choice. Typically written examinations. For Science applicants, tests Biology, Chemistry, and Physics. For Business applicants, tests Mathematics, Economics, and Accounting. For Arts applicants, tests English, History, and a chosen elective. For Law applicants, tests English, Literature, and Government or History. Each paper is typically 1-2 hours, consisting of MCQs and short-answer questions. The test is conducted on the Legon campus.',
  eligibility: 'WASSCE with required grades. Legon admissions are competitive with cut-off points per programme. Candidates must have a minimum of 6 credits in WASSCE including English and Mathematics (for most programmes). The admission test is typically offered to candidates whose WASSCE grades meet the programme\'s minimum subject requirements but whose aggregate score is slightly below the cut-off for direct admission. Performance in the test determines whether they are offered a place.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Legon Admissions (Ghana) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Legon Admissions (Ghana) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Legon Admissions (Ghana) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Legon Admissions (Ghana) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Legon Admissions (Ghana) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Legon Admissions (Ghana) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Legon Admissions (Ghana) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Legon Admissions (Ghana) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Legon Admissions (Ghana) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Legon Admissions (Ghana) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Legon Admissions (Ghana) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Legon Admissions (Ghana) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Legon Admissions (Ghana) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Legon Admissions (Ghana) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Legon Admissions (Ghana) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Legon Admissions (Ghana) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Legon Admissions (Ghana) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Legon Admissions (Ghana) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Legon Admissions (Ghana)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ug.edu.gh',
};

export default exam;
