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
  description: `The Bihar Public Service Commission (BPSC) Combined Competition Examination is one of the most prestigious civil service examinations in Bihar, India. It recruits candidates for various Group A and Group B posts in the Bihar state government, including District Collector, Deputy Superintendent of Police, Revenue Officer, and other administrative positions. The examination is conducted in three stages: Preliminary Examination (Objective), Main Examination (Descriptive), and Interview. BPSC is considered a gateway for candidates aspiring to serve in the Bihar state civil services.`,
  examPattern: `The BPSC Preliminary Examination consists of one General Studies paper with 100 multiple-choice questions carrying 200 marks, to be completed in 2 hours. The Main Examination has four compulsory papers: General Hindi (100 marks), General Studies Paper 1 (300 marks), General Studies Paper 2 (300 marks), and Optional Subject Paper (300 marks). Each Main paper is of 3 hours duration. The Interview/Personality Test carries 120 marks. The Preliminary serves as a screening test; only those who qualify are allowed to appear for the Main examination.`,
  eligibility: `Candidates must be Indian citizens with a bachelor's degree in any discipline from a recognized university. The age limit is 21-37 years for general category candidates, with relaxations up to 42 years for SC/ST and 40 years for OBC candidates. Female candidates from general category get age relaxation up to 40 years. Candidates must be proficient in Hindi language and of good moral character. Those already employed in government service may also apply subject to certain conditions.`,
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
  },  // SR-BACKFILL-V1,
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
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
