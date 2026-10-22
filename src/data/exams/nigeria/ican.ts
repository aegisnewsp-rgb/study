import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { economics } from './subjects/economics';
import { mathematics } from './subjects/mathematics';
import { business_law } from './subjects/business-law';

const subjects: Subject[] = [
    accounting,
    economics,
    mathematics,
    business_law,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ican',
  examName: 'ICAN (Institute of Chartered Accountants of Nigeria)',
  country: 'nigeria',
  description: 'The Institute of Chartered Accountants of Nigeria (ICAN) examinations test accounting, auditing, taxation, and business knowledge across multiple levels: Foundation, Intermediate, and Final. ICAN is the professional body for accountants in Nigeria and its qualification is recognized across the West African sub-region and internationally. The examinations are held twice yearly (June and December) and assess candidates on both theoretical knowledge and practical application of accounting principles in Nigerian business contexts.',
  examPattern: 'Multiple papers per diet (June and December): Financial Accounting and Reporting, Auditing and Assurance, Taxation, Business Law, and Management Information Systems. Each paper is 3 hours duration. Foundation level has 4 papers, Intermediate has 5 papers, and Final has 6 papers. Examinations are paper-based with some multiple-choice and long-form questions requiring calculations and narrative answers. Confirm the paper count for your level in the current ICAN examination notice.',
  eligibility: 'For Foundation level: SSCE/NECO with credits in English and Mathematics plus 2 other subjects. For Intermediate level: Completion of Foundation or degree in relevant discipline. For Final level: Completion of Intermediate. HND/Bachelor\'s degree holders in accounting or related fields may gain exemptions from certain levels. Non-accounting degree holders must start from Foundation. Candidates must be registered with ICAN before appearing for examinations.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ICAN (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ICAN (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ICAN (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ICAN (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ICAN (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ICAN (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ICAN (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ICAN (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ICAN (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ICAN (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ICAN (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ICAN (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ICAN (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ICAN (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ICAN (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ICAN (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ICAN (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ICAN (Nigeria) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ICAN (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'For ICAN (Institute of Chartered Accountants of Nigeria), keep ICAN (Institute of Chartered Accountants of Nigeria) application admin (photo specs, IDs) off your ICAN (Institute of Chartered Accountants of Nigeria) study clock by checking https://www.ican.org.ng early.',
  commonMistakes: [
    'An outdated ICAN (Institute of Chartered Accountants of Nigeria) PDF is not a substitute for the current notice at https://www.ican.org.ng.',
    'ICAN runs level-specific papers in two diets a year - June and December - and the work changes with the level: Foundation has 4 papers, Intermediate 5 and Final 6, each paper 3 hours. Settle the level your SSCE/NECO credits and degree qualify you for, then drill that diet rather than a mixed pile; confirm the current paper list on https://www.ican.org.ng.',
    'ICAN eligibility is a level and a registration, not a recollection: Foundation needs SSCE/NECO credits in English and Mathematics plus two further subjects, Intermediate needs the Foundation or a degree in a relevant discipline, and a non-accounting degree holder starts from Foundation. Registration with the institute is required before you may sit any paper - check your own level against https://www.ican.org.ng rather than against a colleague who sat a different diet.',
    'Treat \'sure selection\' ICAN (Institute of Chartered Accountants of Nigeria) ads as marketing; the board does not endorse them.',
    'ICAN papers mix multiple-choice items with long-form questions that need calculations and narrative answers, so a revision pile built on question banks alone leaves the written sections unprepared. Split your time between objective practice and timed written answers, and confirm the mix for your level on https://www.ican.org.ng.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.ican.org.ng',
  conductingBody: 'Institute of Chartered Accountants of Nigeria (ICAN)',
};

export default exam;
