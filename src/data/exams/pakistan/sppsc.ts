import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { sindh_studies } from './subjects/sindh-studies';

const subjects: Subject[] = [
    english,
    gk,
    sindh_studies,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sppsc',
  examName: 'SPSC (Sindh)',
  country: 'pakistan',
  description: `The Sindh Public Service Commission (SPSC) is a constitutional body that conducts competitive examinations for recruitment to civil service posts in the Sindh province of Pakistan. SPSC conducts examinations for the Sindh Superior Judicial Service, Sindh Civil Service (Provincial Management Service), and various other provincial posts. The commission is headquartered in Karachi and conducts written examinations, viva voce (interviews), and other selection processes to identify qualified candidates for administrative, judicial, and secretariat positions within the Sindh provincial government.`,
  examPattern: `The SPSC Combined Competitive Examination for Sindh Civil Service consists of a written examination followed by an interview. The written examination includes: English (Essay, Précis Writing, and Grammar - 100 marks), Urdu (Translation and Essay - 100 marks), General Knowledge (Pakistan Affairs, Islamic Studies, Current Affairs, and Sindh-specific topics - 100 marks), and Optional Subjects (two papers of 100 marks each selected from a list including History, Geography, Political Science, Economics, Sociology, Agriculture, Sindhi language and literature, and others). Each paper is of 3 hours duration. The preliminary written examination serves as a screening test. The interview/Personality Test carries 100 marks.`,
  eligibility: `Candidates must be Pakistani nationals with a bachelor's degree (at least second division) from an HEC-recognized university. The age limit is 21-33 years for general category, with relaxations for Sindh government employees (up to 40 years), candidates from tribal areas, and SC/ST categories. Candidates must be domiciled in Sindh province. Female candidates and transgender persons with Sindh domicile are also eligible. Candidates must not have been convicted for any criminal offence and must be of good moral character. Candidates with Sindhi as a subject at the intermediate or bachelor's level may get preference in certain positions.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SPSC (Sindh) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SPSC (Sindh) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SPSC (Sindh) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SPSC (Sindh) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SPSC (Sindh) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SPSC (Sindh) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SPSC (Sindh) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SPSC (Sindh) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SPSC (Sindh) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SPSC (Sindh) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SPSC (Sindh) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SPSC (Sindh) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SPSC (Sindh) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SPSC (Sindh) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SPSC (Sindh) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SPSC (Sindh) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SPSC (Sindh) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SPSC (Sindh) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SPSC (Sindh)',
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
