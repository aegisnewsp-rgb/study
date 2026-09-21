// Law School Admission Test (LSAT) — Canadian applicants.
//
// Awarding body: Law School Admission Council (LSAC).
// The LSAT is a computer-based standardised exam required for
// admission to most US law schools and many Canadian law schools,
// including the law schools at the University of Toronto, Osgoode
// Hall at York University, McGill, University of British Columbia,
// University of Alberta, University of Calgary, Dalhousie, and
// others. The LSAT includes two scored Logical Reasoning sections,
// one scored Reading Comprehension section, one unscored section
// (either Logical Reasoning or Reading Comprehension), and LSAT
// Argumentative Writing (administered separately, unscored). The
// Analytical Reasoning section was discontinued starting August 2024.
//
// Source: LSAC, Frequently Asked Questions about the LSAT,
//   https://www.lsac.org/lsat/frequently-asked-questions-about-lsat
// Source: LSAC, Changes are coming to the LSAT in August 2024,
//   https://www.lsac.org/lsat/lsat-changes-coming-august-2024

import type { ExamTemplate, Subject } from '../types';

import { logicalReasoning } from './subjects/logical-reasoning';
import { readingComprehension } from './subjects/reading-comprehension';
import { argumentativeWriting } from './subjects/argumentative-writing';

const subjects: Subject[] = [
    logicalReasoning,
    readingComprehension,
    argumentativeWriting,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'lsat-ca',
  examName: 'LSAT (Law School Admission Test) — Canadian applicants',
  country: 'canada',
  description: 'The Law School Admission Test (LSAT) is a computer-based standardised exam administered by the Law School Admission Council (LSAC). It is required for admission to most US law schools and to many Canadian law schools, including the law schools at the University of Toronto, Osgoode Hall at York University, McGill, University of British Columbia, University of Alberta, University of Calgary, Dalhousie, and others. The LSAT tests the reading, reasoning, and writing skills that law school faculty rate as important for entering students. The exam is offered internationally at Prometric test centres, with multiple administrations per year.',
  examPattern: 'Three scored multiple-choice sections (two Logical Reasoning and one Reading Comprehension), one unscored multiple-choice section (either Logical Reasoning or Reading Comprehension) used for question validation, and LSAT Argumentative Writing (administered separately, unscored but reported to law schools). The Logical Reasoning sections test argument evaluation, assumption identification, flaw analysis, and inference. The Reading Comprehension section tests comprehension and reasoning across humanities, social sciences, natural sciences, and law-related passages. Confirm the live section count, item count, timing, and scoring scale on the LSAC LSAT landing page before scheduling. Analytical Reasoning was discontinued starting August 2024.',
  eligibility: 'No formal eligibility requirements for taking the LSAT. Candidates are typically in their final undergraduate year or have completed a bachelor\'s degree. There is no prerequisite coursework, but LSAC recommends a strong foundation in reading comprehension and reasoning. Canadian applicants register through the LSAC LSAT Registration System and select a Prometric test centre in Canada. There is no limit on retakes within LSAC\'s published policy. Confirm the live application window, fees, test-centre availability, and writing-sample requirements on the LSAC LSAT Registration System.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LSAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for LSAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for LSAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for LSAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for LSAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LSAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for LSAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LSAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for LSAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LSAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for LSAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for LSAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LSAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for LSAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LSAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LSAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for LSAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for LSAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the LSAT',
    duration: '2d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Prioritise Logical Reasoning strength/weaken and assumption items, then Reading Comprehension inference and main-idea items. Practice timed single sections daily for the final week.',
  },
  prepOverview:
    'LSAT preparation for a Canadian applicant is typically a 3-6 month structured plan with content and skill review first, then timed practice tests, then full-length LSAT practice tests under timed conditions. The skill review covers Logical Reasoning (argument structure, assumptions, strengthen/weaken, flaws, inference, conditional reasoning) and Reading Comprehension (passage types, main idea, inference, tone, function, comparative reading). Logical Reasoning is the largest single component of the LSAT score and benefits from daily practice. The LSAC official prep tests and Khan Academy LSAT collection are the standard free resources. The writing sample is unscored but reported to law schools and should be practised at least once. Confirm the live section count, item count, timing, scoring scale, and writing-sample requirements on https://www.lsac.org/ before locking a study plan to a student (canada).',
  commonMistakes: [
    'Cramming Logical Reasoning in the last week — LR is the largest component of the LSAT score and benefits from months of daily practice.',
    'Using outdated practice tests labelled before the August 2024 LSAT change — the LSAT removed the Analytical Reasoning section starting August 2024.',
    'Treating the writing sample as unimportant because it is unscored — law schools see the writing sample and use it in admissions decisions.',
    'Skipping comparative reading passages — they are a separate RC passage type with their own pattern.',
    'Reading RC passages too quickly — RC items require careful reading of the passage\'s argument structure, not just the topic.',
    'Sitting the LSAT without timed practice test experience — pacing is critical, especially in the LR sections.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.lsac.org/lsat',
};

export default exam;
