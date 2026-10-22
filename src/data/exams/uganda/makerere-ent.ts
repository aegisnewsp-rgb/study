import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'makerere-ent',
  examName: 'Makerere University (Uganda)',
  country: 'uganda',
  description: 'Makerere University direct admission test — an entrance examination for students who did not meet the direct entry requirements for Makerere University\'s various undergraduate programmes. Makerere University is Uganda\'s oldest and most prestigious university, and admission to many programmes is highly competitive. The supplementary admission test provides a second chance for qualified candidates who narrowly missed direct admission cut-offs.',
  examPattern: 'Varies by programme — typically tests relevant subjects at UACE or equivalent level. For science-based programmes, tests Physics, Chemistry, Biology, and Mathematics. For business programmes, tests Economics, Mathematics, and Commerce. For law programmes, tests English, General Paper, and Legal Knowledge. Format includes MCQs and short-answer questions. The test is typically 2-3 hours per paper and is conducted on the Makerere University campus.',
  eligibility: 'UACE or equivalent with required subject passes. Age limit may apply for some programmes. Candidates must have applied through the Uganda National Council for Higher Education (UNCHE) and been found eligible but not directly admitted. Those who score above the cut-off on the admission test may be offered a place in their chosen programme, subject to capacity.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Makerere University (Uganda) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Makerere University (Uganda) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Makerere University (Uganda) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Makerere University (Uganda) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Makerere University (Uganda) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Makerere University (Uganda) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Makerere University (Uganda) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Makerere University (Uganda) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Makerere University (Uganda) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Makerere University (Uganda) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Makerere University (Uganda) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Makerere University (Uganda) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Makerere University (Uganda) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Makerere University (Uganda) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Makerere University (Uganda) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Makerere University (Uganda) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Makerere University (Uganda) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Makerere University (Uganda) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Makerere University (Uganda)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Work from the programme you are applying to rather than one generic paper set, because the test varies by programme and each one is examined on its own subject list. Take that list from the current notice on https://mak.ac.ug, then rehearse one full paper under a timer — the format mixes MCQs with short-answer questions and a paper runs 2-3 hours, so isolated topic drills are not the same as a sitting.',
  commonMistakes: [
    'Assuming one paper set covers every programme. The subjects tested change with the programme, so revising a list you copied from another programme leaves you unprepared for the one you sat. Check the list for your own programme on https://mak.ac.ug before you finalise your revision.',
    'Rehearsing MCQs only. The format includes short-answer questions as well, and the paper runs 2-3 hours, so practice writing the short-answer section against a clock, not just picking options under time.',
    'Reading UACE as the whole requirement. The entry asks for UACE or equivalent with the subject passes the programme requires, and an age limit may apply to some programmes, so check the programme-specific condition on https://mak.ac.ug rather than assuming the general rule covers you.',
    'No page on this site can promise a Makerere University (Uganda) rank or an admission offer. The admission test score has to clear the cut-off, and even then the place is subject to capacity in the programme you chose, so treat a predicted rank as a rumour.',
    'Applying through UNCHE and being found eligible is not an offer. Admission turns on your admission-test score clearing the cut-off and on capacity in the programme you chose, so treat the UNCHE eligibility result as a checkpoint rather than a result - check the current cut-off on https://mak.ac.ug.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://mak.ac.ug',
  conductingBody: 'Makerere University',
};

export default exam;
