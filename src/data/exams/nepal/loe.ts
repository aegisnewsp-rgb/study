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
    'Start from the notes on this page, then rehearse under the clock. A typical paper is 100 MCQs in the relevant subjects over 2 hours at +2 level, so a short quiz session is not a rehearsal — work through full 100-question sets against a two-hour timer. Before you fix that plan, pin down the faculty you are applying to, because the pattern varies by faculty while the minimum percentage requirement is set per programme.',
  commonMistakes: [
    'Treating an undated brochure as the syllabus. The paper is typically 100 MCQs in 2 hours and the subjects it covers vary by faculty, so a handout that never names the faculty it is for is not a revision plan. Read the current notice on https://psc.gov.np before you plan your sets.',
    'Practising on a mock with the wrong number of questions. A paper is typically 100 MCQs in 2 hours, so a shorter set teaches you a pace you will not be held to. Time full 100-item sets instead, and check the current notice on https://psc.gov.np if you are unsure what the paper contains.',
    'Studying above the level the paper is set at. The questions test subject knowledge at +2 (Higher Secondary Education Board) level, so university material is time taken from the level you are actually examined at. Revise the +2 course first, and widen your reading only once that is secure.',
    'A study order is all this page can offer for LOE Nepal - no admission outcome is promised. What the Public Service Commission measures is your +2 (Higher Secondary Education Board) result or its equivalent, so the order in which you revise is the part of this you can actually control.',
    'Reading "or equivalent" as a decision already made. The entry asks for +2 (Higher Secondary Education Board) or an equivalent qualification, and sets a minimum percentage per programme, so an equivalent route still has to clear the threshold for the bachelor programme you are applying to. Read how your own result is assessed on https://psc.gov.np the week you apply.',
    'Treating the programme list as final. Some LOE Nepal bachelor programmes add extra subject prerequisites after payment, and those conditions are set per programme, so check what your own programme asks for on https://psc.gov.np before you treat the entry as settled.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://psc.gov.np',
};

export default exam;
