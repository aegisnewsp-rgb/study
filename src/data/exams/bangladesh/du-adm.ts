import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
    english,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'du-adm',
  examName: 'DU Unit B Admission (Science)',
  country: 'bangladesh',
  description: 'Dhaka University Unit B (Science Unit) admission test is for candidates seeking entry into the Faculty of Science, Faculty of Engineering and Technology, and Faculty of Agriculture. This unit is highly competitive and primarily attracts science background students from HSC. The test evaluates candidates on Physics, Chemistry, Biology/Mathematics (depending on the programme), and English. Strong performance in this test combined with HSC GPA determines admission to prestigious science and engineering programmes at Bangladesh\'s oldest and most prestigious university.',
  examPattern: 'MCQ-based written test: Physics(30 marks), Chemistry(25 marks), Biology or Mathematics(25 marks), English(20 marks). Total 100 marks. Duration 1 hour. For Engineering and Technology faculty, Mathematics is mandatory instead of Biology. Viva voce is conducted for shortlisted candidates applying to the Faculty of Engineering and Technology.',
  eligibility: 'HSC or equivalent with Science background (Physics, Chemistry, Mathematics/Biology) with minimum GPA of 4.0 in these subjects combined. For Engineering and Technology, Mathematics is mandatory. Candidates must be Bangladeshi nationals. Students appearing in their final HSC examination may apply provisionally. Foreign nationals holding Bangladeshi certificates must provide equivalence from the appropriate Bangladeshi education board.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DU Unit B Admission (Science) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for DU Unit B Admission (Science) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for DU Unit B Admission (Science) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for DU Unit B Admission (Science) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for DU Unit B Admission (Science) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DU Unit B Admission (Science) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for DU Unit B Admission (Science) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DU Unit B Admission (Science) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for DU Unit B Admission (Science) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DU Unit B Admission (Science) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for DU Unit B Admission (Science) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for DU Unit B Admission (Science) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DU Unit B Admission (Science) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for DU Unit B Admission (Science) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DU Unit B Admission (Science) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DU Unit B Admission (Science) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for DU Unit B Admission (Science) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for DU Unit B Admission (Science) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for DU Unit B Admission (Science)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://du.ac.bd',
};

export default exam;
