import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { science } from './subjects/science';
import { politics } from './subjects/politics';
import { economics } from './subjects/economics';

const subjects: Subject[] = [
    history,
    geography,
    science,
    politics,
    economics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'tnpsc',
  examName: 'TNPSC Group 1',
  country: 'india',
  description: `The Tamil Nadu Public Service Commission (TNPSC) Group 1 Combined Civil Services Examination-I recruits candidates for Group A administrative posts in Tamil Nadu, including Deputy Collector, Deputy Superintendent of Police (DSP Category I), Assistant Commissioner (Commercial Taxes), Deputy Registrar of Co-operative Societies, and District Employment Officer. The selection process comprises Preliminary Examination (Objective), Main Written Examination (Descriptive), and Oral Test (Interview).`,
  examPattern: `The TNPSC Group 1 Preliminary examination consists of a single objective paper with 200 questions carrying 300 marks (3 hours duration): 175 questions in General Studies (Degree Standard) and 25 questions in Aptitude and Mental Ability (SSLC Standard). There is no negative marking. The Main Written Examination consists of four descriptive papers of 3 hours each: Paper I is the Mandatory Tamil Eligibility Test (SSLC Standard, 100 marks, qualifying at 40%); Paper II covers General Studies (250 marks); Paper III covers General Studies (250 marks); and Paper IV covers General Studies (250 marks). The Interview / Oral Test carries 100 marks. Final rank is determined out of 850 marks (750 from Papers II–IV + 100 from Interview).`,
  eligibility: `Candidates must be Indian citizens holding a bachelor's degree in any discipline from a recognized university. As per Tamil Nadu government orders, the age limit as of 1 July of the recruitment year is 21 to 34 years for General / Unreserved candidates, and 21 to 39 years for SCs, SC(A)s, STs, MBCs/DCs, BCs, and BCMs. Adequate knowledge of Tamil (having passed SSLC/HSC with Tamil as a language or passing the TNPSC second-class language test post-appointment) is mandatory. Physical standards apply for DSP posts (minimum height 165 cm for men, 155 cm for women; chest 86 cm with 5 cm expansion for men).`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for TNPSC Group 1 — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for TNPSC Group 1 — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for TNPSC Group 1 — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for TNPSC Group 1 — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for TNPSC Group 1 — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for TNPSC Group 1 — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for TNPSC Group 1 — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for TNPSC Group 1 — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for TNPSC Group 1 — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for TNPSC Group 1 — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for TNPSC Group 1 — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for TNPSC Group 1 — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for TNPSC Group 1 — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for TNPSC Group 1 — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for TNPSC Group 1 — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for TNPSC Group 1 — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for TNPSC Group 1 — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for TNPSC Group 1 — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for TNPSC Group 1',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'TNPSC Group exams emphasise Tamil Nadu history, geography, polity, aptitude and general studies as per the group notification. Use state board + standard GS materials; practise previous TNPSC papers under timed conditions. Confirm group syllabus and dates on tnpsc.gov.in.',
  commonMistakes: [
    'Ignoring Tamil Nadu-specific units.',
    'No full previous-paper timed practice.',
    'Weak aptitude speed.',
    'Outdated group syllabus PDFs.',
    'Application document errors.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.tnpsc.gov.in',
};

export default exam;
