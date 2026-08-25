import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'engineering-ent',
  examName: 'IOE Entrance (Nepal)',
  country: 'nepal',
  description: "Engineering entrance examination for admission to Nepal's engineering colleges, particularly under Tribhuvan University Institute of Engineering.",
  examPattern: "100 MCQs: Mathematics(40), Physics(30), Chemistry(20), English(10). 2 hours. Questions at +2 Science level.",
  eligibility: "+2 Science with Physics, Chemistry, Mathematics. Minimum 45% in PCM.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IOE Entrance (Nepal) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for IOE Entrance (Nepal) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for IOE Entrance (Nepal) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for IOE Entrance (Nepal) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for IOE Entrance (Nepal) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IOE Entrance (Nepal) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for IOE Entrance (Nepal) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IOE Entrance (Nepal) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for IOE Entrance (Nepal) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IOE Entrance (Nepal) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for IOE Entrance (Nepal) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for IOE Entrance (Nepal) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IOE Entrance (Nepal) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for IOE Entrance (Nepal) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IOE Entrance (Nepal) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IOE Entrance (Nepal) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for IOE Entrance (Nepal) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for IOE Entrance (Nepal) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IOE Entrance (Nepal)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Engineering entrance examination for admission to Nepal\'s engineering colleges, particularly under Tribhuvan University Institute of Engineering. For IOE Entrance (Nepal), revisit weak IOE Entrance (Nepal) units the day after a timed IOE Entrance (Nepal) set, and do not pay until https://ioe.edu.np shows an open window.',
  commonMistakes: [
    'Mirrors of IOE Entrance (Nepal) \'syllabus 2019\' are a common trap; start from https://ioe.edu.np.',
    'Skipping full IOE Entrance (Nepal) papers until the final weekend is how scores stall.',
    'Photo, ID, and attempt-limit rules for IOE Entrance (Nepal) live on https://ioe.edu.np, not on WhatsApp.',
    'StudyRoadmap will not promise a IOE Entrance (Nepal) outcome — only a study order.',
    'Who the board describes as eligible for IOE Entrance (Nepal): +2 Science with Physics, Chemistry, Mathematics. Minimum 45% in PCM. Re-read it on https://ioe.edu.np the week you apply.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ioe.edu.np',
};

export default exam;
