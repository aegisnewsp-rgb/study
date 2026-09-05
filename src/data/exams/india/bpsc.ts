import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    current_affairs,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'bpsc',
  examName: 'BPSC',
  country: 'india',
  description: `The Bihar Public Service Commission (BPSC) Combined Competitive Examination (CCE) recruits candidates for Group A and Group B executive and administrative posts in Bihar, including Sub-Divisional Officer (SDO), Deputy Superintendent of Police (DSP), Revenue Officer, and Block Development Officer (BDO). The selection process operates in three successive stages: Preliminary Examination (Objective), Main Examination (Written Descriptive), and Interview (Personality Test).`,
  examPattern: `The BPSC Preliminary Examination consists of a single General Studies paper with 150 multiple-choice questions carrying 150 marks (2 hours duration). Negative marking is 1/3 mark (-0.33) per incorrect answer. The Main Examination comprises five papers: General Hindi (100 marks, qualifying at 30%), General Studies Paper 1 (300 marks), General Studies Paper 2 (300 marks), Essay Paper (300 marks), and an Optional Subject paper (100 marks, qualifying MCQ format). The final merit list is determined by marks in GS Paper 1, GS Paper 2, Essay (900 marks total), plus the Interview (120 marks), totalling 1020 marks.`,
  eligibility: `Candidates must be Indian citizens holding a bachelor's degree in any discipline from a recognized university. Minimum age ranges between 20, 21, or 22 years depending on the specific service post (20 for DSP/Prison, 21 for Administrative/Finance, 22 for others) as of 1 August of the exam year. Maximum age limits: 37 years for General (Male), 40 years for General (Female) and BC/EBC (Male & Female), and 42 years for SC/ST (Male & Female). Physical measurements apply for Bihar Police Service posts (minimum height 5 feet 5 inches for General/BC males).`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for BPSC — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for BPSC — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for BPSC — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for BPSC — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for BPSC — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for BPSC — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for BPSC — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for BPSC — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for BPSC — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for BPSC — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for BPSC — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for BPSC — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for BPSC — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for BPSC — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for BPSC — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for BPSC — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for BPSC — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for BPSC — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for BPSC',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'BPSC Combined exams test GS and optional/state-specific papers depending on the notification. Build NCERT + Bihar special (history, geography, polity, current) foundations; answer-writing practice for mains if applicable. Confirm exam stages and syllabus on the official BPSC website for the live advert.',
  commonMistakes: [
    'Ignoring Bihar-specific GS while only reading national materials.',
    'No answer-writing practice for descriptive stages.',
    'Outdated syllabus PDFs.',
    'Skipping current affairs notebooks.',
    'Treating prelims cut-offs as fixed guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://bpsc.bihar.gov.in/',
};

export default exam;
