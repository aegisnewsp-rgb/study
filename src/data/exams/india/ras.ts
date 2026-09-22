import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { economics } from './subjects/economics';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    economics,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ras',
  examName: 'RPSC RAS',
  description: 'RPSC RAS (Rajasthan Administrative Service) is a prestigious state-level competitive exam conducted by the Rajasthan Public Service Commission for recruitment to various administrative posts in the Rajasthan government. The exam consists of three stages: Prelims (objective MCQ screening test), Mains (descriptive written exam with GS papers I-IV and Hindi), and finally a Personality Test/Interview. The Prelims tests General Knowledge with special emphasis on Rajasthan — its history including the Maurya, Gupta, Sultanate, and Mughal periods, freedom struggle, and Rajasthan-specific culture, art, and heritage. Geography covers physical, economic, and human geography of Rajasthan, India\'s climate, and world geography. Indian Polity tests the Indian Constitution, governance, federal structure, and constitutional bodies. General Studies II covers science and technology, current events, and logical reasoning. Success requires deep understanding of Rajasthan-specific content alongside national and international affairs, making regional focus essential for scoring well in this highly competitive exam.',
  examPattern: 'As regulated by the Rajasthan Public Service Commission (RPSC https://rpsc.rajasthan.gov.in), the Combined Competitive Examination comprises three successive stages: Preliminary, Main, and Personality Test. The Prelims paper features 150 questions for 200 marks (3 hours, 1/3 negative marking) as officially notified by RPSC (https://rpsc.rajasthan.gov.in). As prescribed in the official RPSC syllabus (https://rpsc.rajasthan.gov.in), the Main Examination consists of four compulsory papers (200 marks each): Paper I (GS-I), Paper II (GS-II), Paper III (GS-III), and Paper IV covering General Hindi (120 marks) and General English (80 marks). As notified by RPSC (https://rpsc.rajasthan.gov.in), the viva voce carries 100 marks, establishing a combined aggregate merit base of 900 marks.',
  eligibility: 'Per the official RPSC recruitment notification (https://rpsc.rajasthan.gov.in), candidates must hold a degree from a recognized university. As specified in the commission\'s official bulletin (https://rpsc.rajasthan.gov.in), the standard age limit is 21 to 40 years as of 1st January, with category-wise age relaxations of 5 to 10 years for Rajasthan domicile reserved categories.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for RPSC RAS — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for RPSC RAS — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for RPSC RAS — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for RPSC RAS — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for RPSC RAS — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for RPSC RAS — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for RPSC RAS — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for RPSC RAS — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for RPSC RAS — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for RPSC RAS — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for RPSC RAS — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for RPSC RAS — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for RPSC RAS — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for RPSC RAS — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for RPSC RAS — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for RPSC RAS — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for RPSC RAS — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for RPSC RAS — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for RPSC RAS',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Rajasthan RAS (RPSC) typically has Prelims and Mains with strong Rajasthan GS weight. Build national GS + Rajasthan history, geography, economy and current schemes; practise answer writing for mains. Confirm pattern on rpsc.rajasthan.gov.in for the live advert.',
  commonMistakes: [
    'Ignoring Rajasthan-specific GS.',
    'No mains answer-writing practice.',
    'Weak prelims MCQ timing.',
    'Outdated syllabus PDFs.',
    'Unstructured current affairs.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://rpsc.rajasthan.gov.in/',
};

export default exam;
