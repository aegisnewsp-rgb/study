import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { legal_reasoning } from './subjects/legal-reasoning';

const subjects: Subject[] = [
    english,
    gk,
    legal_reasoning,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'loe',
  examName: 'LOE Nepal (Bachelor Entrance)',
  country: 'nepal',
  description: "Nepal's Bachelor-level entrance examinations for various programmes at Tribhuvan University and other universities.",
  examPattern: "Varies by faculty — typically 100 MCQs in relevant subjects, 2 hours. Tests subject knowledge at +2 level.",
  eligibility: "+2 (Higher Secondary Education Board) completion or equivalent. Minimum percentage requirements vary by programme.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LOE Nepal (Bachelor Entrance) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for LOE Nepal (Bachelor Entrance) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LOE Nepal (Bachelor Entrance) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for LOE Nepal (Bachelor Entrance) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LOE Nepal (Bachelor Entrance) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for LOE Nepal (Bachelor Entrance) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for LOE Nepal (Bachelor Entrance) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LOE Nepal (Bachelor Entrance) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for LOE Nepal (Bachelor Entrance) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LOE Nepal (Bachelor Entrance) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LOE Nepal (Bachelor Entrance) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for LOE Nepal (Bachelor Entrance) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for LOE Nepal (Bachelor Entrance) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for LOE Nepal (Bachelor Entrance)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Nepal\'s Bachelor-level entrance examinations for various programmes at Tribhuvan University and other universities. For LOE Nepal (Bachelor Entrance), if two blogs disagree on LOE Nepal (Bachelor Entrance) marking, https://psc.gov.np wins; this page only sequences LOE Nepal (Bachelor Entrance) study.',
  commonMistakes: [
    'If your LOE Nepal (Bachelor Entrance) brochure has no date, throw it out and open https://psc.gov.np.',
    'A LOE Nepal (Bachelor Entrance) mock with a different number of items trains the wrong stamina.',
    'Some LOE Nepal (Bachelor Entrance) programmes add extra subject prerequisites after you pay — check https://psc.gov.np.',
    'StudyRoadmap will not promise a LOE Nepal (Bachelor Entrance) outcome — only a study order.',
    'Who the board describes as eligible for LOE Nepal (Bachelor Entrance): +2 (Higher Secondary Education Board) completion or equivalent. Minimum percentage requirements vary by… Re-read it on https://psc.gov.np the week you apply.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://psc.gov.np',
};

export default exam;
