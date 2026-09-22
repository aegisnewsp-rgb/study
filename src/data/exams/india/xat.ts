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
  examPattern: 'As conducted by XLRI Jamshedpur (https://xatonline.in), the Xavier Aptitude Test (XAT) comprises sections covering Verbal & Logical Ability, Decision Making, Quantitative Ability & Data Interpretation, and General Knowledge, alongside an Analytical Essay component. Total questions generally range around 95-105 with an overall duration of approximately 180 to 210 minutes as specified in the official information bulletin. As notified in the official XLRI guidelines (https://xatonline.in), a negative marking of 0.25 marks applies to incorrect MCQs.',
  eligibility: 'Per the official XLRI notification (https://xatonline.in), candidates must hold a recognized Bachelor\'s degree of minimum three years duration in any discipline from a recognized university. Students completing their final graduation examination by the notified cutoff date are eligible to apply provisionally. There is no minimum percentage bar or upper age limit for registration.',
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
  prepOverview:
    'XAT (XLRI) rewards decision quality under time pressure: Verbal & Logical Ability, Decision Making, Quantitative Ability & DI, plus GK and a descriptive essay in recent cycles (confirm live pattern). Phase 1: daily RC + critical reasoning; Decision Making case sets with written justification. Phase 2: QA/DI accuracy before speed; build a decision log of ethical vs business trade-offs. Phase 3: full XAT mocks with the official section order and time limits; review Decision Making first. Pair StudyRoadmap topic notes with XLRI sample patterns; verify dates and marking on the official XAT site.',
  commonMistakes: [
    'Treating Decision Making like CAT LRDI puzzles and guessing without a consistent stakeholder framework.',
    'Skipping mocks that include the essay/GK components present in the current notification.',
    'Over-focusing on obscure quant while under-practising long RC and critical reasoning.',
    'Ignoring negative marking strategy and random-attempting every item.',
    'Using last year\'s section timings instead of the live XAT bulletin.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://xatonline.in/',
};

export default exam;
