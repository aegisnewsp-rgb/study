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
  examId: 'ruet',
  examName: 'RUET Admission Test',
  country: 'bangladesh',
  description: 'Rajshahi University of Engineering and Technology (RUET) admission test is the entrance examination for undergraduate engineering programmes at RUET, located in Rajshahi, Bangladesh. RUET is one of the premier public engineering universities in the country, offering degrees in Civil, Electrical, Mechanical, Computer Science, and Textile Engineering. The admission process is highly competitive, testing candidates from the science background in essential engineering prerequisites.',
  examPattern: 'RUET admission runs in two stages, not one. Stage one is the Preliminary Test, a multiple-choice paper: the published seat plans for that sitting are titled for an MCQ paper, and the preliminary result is published as one sheet per shift, across three shifts (Shift 2 runs 12.00-01.00 PM and Shift 3 03.00-04.00 PM). Candidates who clear it are named on an eligible-candidates list, issued by group, for Group-KA and Group-KHA, with a tribal list published alongside them. Stage two is a written test, for which RUET separately issues an admit card and then publishes the written test result ahead of the final admission test result. This page works to a breakdown of 100 preliminary MCQ questions - Mathematics 40, Physics 30, Chemistry 20 and English/General Knowledge 10, one mark each, with no negative marking. RUET publishes its session circular and prospectus as scanned images rather than as text, so confirm the current subject-wise split against the circular for the session you are sitting before you build a timetable around it.',
  eligibility: 'HSC or equivalent with a minimum GPA of 4.0 in Physics, Chemistry, and Mathematics (combined). Science group students from HSC or equivalent are eligible. Diploma holders in engineering may apply for credit transfer in some programmes. Bangladeshi nationals only under the general quota. Foreign students may apply through designated quotas with proper equivalence certificates from the Bangladeshi education board.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for RUET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for RUET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for RUET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for RUET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for RUET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for RUET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for RUET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for RUET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for RUET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for RUET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for RUET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for RUET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for RUET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for RUET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for RUET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for RUET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for RUET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for RUET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for RUET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'For RUET Admission Test, a crash week for RUET Admission Test only works after you have the live RUET Admission Test paper map from https://ruet.ac.bd.',
  commonMistakes: [
    'Screenshot cut-offs from last cycle do not bind RUET Admission Test this year — https://ruet.ac.bd does.',
    'The RUET preliminary is one multiple-choice paper of 100 questions worth a mark apiece - 40 in Mathematics, 30 in Physics, 20 in Chemistry, 10 in English/General Knowledge - so revising only the chapters you find comfortable leaves the rest of the syllabus untouched. RUET admission runs in two stages and the written test after the preliminary is the second, so clearing the MCQ paper is not the whole selection. Time a complete paper against the published duration from https://ruet.ac.bd before you trust a mock average.',
    'Applying under the general quota because it looks open. RUET limits that quota to Bangladeshi nationals, while anyone else applies through one of the designated quotas with equivalence certificates from the Bangladeshi education board - so the quota you register under decides which papers you must produce. Check the quota rules on https://ruet.ac.bd.',
    'No RUET Admission Test rank is promised here, and none should be read into a study order. Rajshahi University of Engineering and Technology admits on the HSC Science-group result you already hold, so aim the sequence at the aggregate those departments actually use, and let https://ruet.ac.bd confirm the threshold for this cycle.',
    'Reading your marks off a previous admission circular instead of the eligibility requirement itself. RUET sets one combined figure across Physics, Chemistry and Mathematics, and that figure has to clear the stated minimum on its own. The requirement is set out in the eligibility section above.'
  ],
  lastUpdated: '2026-10-20',
  officialSource: 'https://ruet.ac.bd',
  conductingBody: 'Rajshahi University of Engineering and Technology (RUET)',
};

export default exam;
