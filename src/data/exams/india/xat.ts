import type { ExamTemplate, Subject } from '../types';

import { varc } from './subjects/varc';
import { decision_making } from './subjects/decision-making';
import { qa } from './subjects/qa';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    varc,
    decision_making,
    qa,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'xat',
  examName: 'XAT',
  description: 'XAT (Xavier Aptitude Test) is a national-level management entrance examination conducted by XLRI Jamshedpur on behalf of Xavier Association of India. It is one of India\'s oldest and most prestigious MBA entrance exams, used by over 100 B-schools for admission. XAT is known for its unpredictable and challenging format, particularly in Decision Making, Verbal Ability, and Quantitative Aptitude sections. Unlike other exams, XAT includes a dedicated Decision Making section with case lets and scenario-based questions testing ethical reasoning and business judgment. The exam has undergone multiple pattern changes — recently including a 25-minute General Knowledge section and an essay writing component. Data Interpretation and Quantitative Ability questions in XAT are generally considered more difficult than CAT. Strong performance in XAT can secure admission to top B-schools including XLRI, XIMB, SPJain, and IMT.',
  examPattern: 'XAT exam pattern has evolved over years. Currently it consists of multiple sections: Verbal and Logical Reasoning (VA+LR), Decision Making (DM), Quantitative Aptitude and Data Interpretation (QA+DI), General Knowledge (GK), and an Essay Writing section. The total number of questions varies (around 75-100) with a duration of about 180 minutes. Each question carries 1 mark with negative marking of 0.25 for wrong answers (0.10 for GK). Recent patterns have introduced multi-select questions where more than one option may be correct. Essay writing (typically 15-20 minutes) is part of some B-school selections post-XAT score receipt.',
  eligibility: 'Candidates must hold a bachelor\'s degree in any discipline with minimum 50% marks from a recognized university for general category. Final year students can apply provisionally. There is no age limit. Work experience is considered by some institutes for specific programs but is not mandatory for XAT eligibility. Candidates from all academic backgrounds including Commerce, Arts, Science, and Engineering appear for XAT.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for XAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for XAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for XAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for XAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for XAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for XAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for XAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for XAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for XAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for XAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for XAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for XAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for XAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for XAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for XAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for XAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for XAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for XAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for XAT',
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
