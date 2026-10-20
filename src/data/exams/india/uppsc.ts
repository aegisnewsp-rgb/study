import type { ExamTemplate, Subject } from '../types';

import { general_studies } from './subjects/general-studies';
import { english } from './subjects/english';
import { hindi } from './subjects/hindi';

const subjects: Subject[] = [
    general_studies,
    english,
    hindi,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'uppsc',
  examName: 'UPPSC RO/ARO',
  description: `The UPPSC RO/ARO (Review Officer/Assistant Review Officer) examination is a clerical-level recruitment conducted by the Uttar Pradesh Public Service Commission for positions in the state secretariat and various government departments. It has an Uttar Pradesh-specific focus, with significant weightage to regional history, culture, geography and administrative setup, and the Hindi paper carries substantial marks. The exam is regarded as a stepping stone for candidates aspiring to higher administrative posts through the UP PCS exam, and the selection process also includes typing and shorthand tests for certain positions. It runs two eliminatory stages, and final selection rests on the Mains performance rather than on the screening paper; the stage-by-stage paper structure and the paper-wise marks are set out in the exam-pattern section below.`,
  examPattern: 'The RO/ARO examination consists of two stages. Preliminary Examination (screening test) is an objective MCQ paper of 300 marks covering General Studies (History, Geography, Indian Polity, Economy, General Science, Environment, Current Affairs), Hindi (Grammar, Vocabulary, Comprehension), and Reasoning/Intelligence — check the official UPPSC information bulletin for the current paper-wise marks. Mains Examination (conventional type) has papers in General Hindi (150 marks), General Studies I (200 marks — History, Geography of India and UP), General Studies II (200 marks — Indian Polity, Governance, International Relations), and an optional subject paper — check the official UPPSC information bulletin for the current paper-wise marks. Both stages are eliminatory. Final selection is based on Mains performance.',
  eligibility: 'Candidates must be Indian citizens aged between 21-40 years for general category — check the official UPPSC notification for the current age limits. Educational qualification is a bachelor\'s degree from a recognized university. Proficiency in Hindi (reading and writing) is mandatory. Computer knowledge is essential for the role. Age relaxation of 5 years for SC/ST and 3 years for OBC candidates applies. Candidates must be of good character and sound health. Domicile of Uttar Pradesh is preferred for certain reserved positions.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPPSC RO/ARO — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UPPSC RO/ARO — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UPPSC RO/ARO — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UPPSC RO/ARO — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UPPSC RO/ARO — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPPSC RO/ARO — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UPPSC RO/ARO — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPPSC RO/ARO — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UPPSC RO/ARO — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPPSC RO/ARO — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UPPSC RO/ARO — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UPPSC RO/ARO — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPPSC RO/ARO — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UPPSC RO/ARO — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPPSC RO/ARO — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPPSC RO/ARO — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UPPSC RO/ARO — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UPPSC RO/ARO — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPPSC RO/ARO',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'RO/ARO is a two-stage exam, not the three-stage PCS structure, and it has no CSAT paper. Phase 1: NCERT and standard General Studies, reasoning and intelligence practice. Phase 2: UP-specific content (regional history, culture, geography, administrative setup) plus current affairs on a monthly revision cycle. Phase 3: General Hindi grammar, vocabulary and comprehension to exam standard, then timed written practice for the conventional-type Mains. Confirm the paper-wise pattern and marks on uppsc.up.nic.in for the live notification, because the Prelims total has been described differently across cycles.',
  commonMistakes: [
    'Ignoring Uttar Pradesh-specific content.',
    'Neglecting General Hindi, which carries substantial marks in both Prelims and the Mains paper.',
    'Applying UPPSC PCS figures (three stages, interview, 42-year age limit) to an RO/ARO application.',
    'Weak answer structure for mains.',
    'Outdated optional/GS paper lists.',
    'Random current affairs without monthly revision notes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://uppsc.up.nic.in/',
};

export default exam;
