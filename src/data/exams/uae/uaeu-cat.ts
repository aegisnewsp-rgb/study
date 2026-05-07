import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { science } from './subjects/science';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    mathematics,
    english,
    science,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'uaeu-cat',
  examName: 'UAE University CAT',
  country: 'uae',
  description: 'United Arab Emirates University (UAEU) College Admission Test — a standardised admissions test for undergraduate admission to UAEU\'s various colleges. UAEU is the UAE\'s flagship national university, located in Al Ain. The test is required for Emirati nationals and UAE residents seeking admission to undergraduate programmes, particularly in the Colleges of Business, Engineering, Health Sciences, and Humanities. UAE nationals are given priority in admission.',
  examPattern: 'Tests English, Mathematics, and analytical skills. Computer-based adaptive format. The English section assesses reading comprehension, vocabulary, and writing skills. Mathematics covers algebra, geometry, statistics, and quantitative reasoning. The analytical skills section tests logical reasoning, pattern recognition, and problem-solving. Each section is timed separately. The test adapts to candidate performance — correct answers lead to harder questions, incorrect answers to easier ones.',
  eligibility: 'High school completion (Tawjihi or equivalent) with minimum GPA requirements. UAE nationals given priority. For UAE nationals, the minimum GPA requirement is typically lower. Residents must have a high school diploma with good academic standing. Some programmes have additional subject requirements — for example, Engineering requires high school Mathematics. The test is conducted in Arabic and English depending on the programme.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UAE University CAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UAE University CAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UAE University CAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UAE University CAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UAE University CAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UAE University CAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UAE University CAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UAE University CAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UAE University CAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UAE University CAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UAE University CAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UAE University CAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UAE University CAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UAE University CAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UAE University CAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UAE University CAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UAE University CAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UAE University CAT — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UAE University CAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.uaeu.ac.ae',
};

export default exam;
