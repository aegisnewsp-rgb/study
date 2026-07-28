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
  examPattern: 'The RAS exam is conducted in three stages. Prelims is a single paper of 200 MCQs (General Knowledge and General Aptitude) for 200 marks with 1/3 negative marking, duration 3 hours. Candidates who clear Prelims appear for Mains, which comprises four conventional type papers: GS-I (Indian History, World History, Geography of India and Rajasthan), GS-II (Indian Polity, Governance, International Relations), GS-III (Economics, Science and Technology, Environment), and GS-IV (Logical Reasoning, Decision Making, Interpersonal Skills). Each Mains paper is of 200 marks. The final stage is a Personality Test of 100 marks. The final merit list is prepared from Mains marks after adding interview marks. The exam is conducted in Hindi and English (except language papers).',
  eligibility: 'Candidates must be Indian citizens and hold a bachelor\'s degree in any discipline from a recognized university. The age limit is 21-40 years for general category, with relaxation for SC/ST/OBC and other reserved categories. Physical standards may be specified for certain posts. Final year students awaiting results can also apply provisionally. Domicile of Rajasthan is not mandatory, though it may be considered in final selection for state-level posts.',
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
