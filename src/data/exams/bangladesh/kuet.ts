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
  examId: 'kuet',
  examName: 'KUET Admission Test',
  country: 'bangladesh',
  description: 'Khulna University of Engineering and Technology (KUET) admission test is a highly competitive exam for undergraduate engineering programmes in southern Bangladesh. KUET is one of the nine public engineering universities in Bangladesh and focuses on engineering, technology, and applied sciences. The admission test selects candidates for various undergraduate programmes including Computer Science, Electrical, Civil, Mechanical, and other engineering disciplines.',
  examPattern: '100 MCQs: Mathematics(40 questions), Physics(30 questions), Chemistry(20 questions), plus 10 questions from English/General Knowledge combined. Each question carries 1 mark. There is no negative marking. The exam duration is typically 1.5 to 2 hours.',
  eligibility: 'HSC or equivalent with minimum GPA requirements in Science group — minimum GPA 4.0 in Physics, Chemistry, and Mathematics combined. Bangladeshi nationals only. Students who have passed SSC and HSC in Science group from recognized boards are eligible. Diploma holders in engineering may also be eligible for some programmes under special quotas.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KUET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KUET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KUET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KUET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KUET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KUET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KUET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KUET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KUET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KUET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KUET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KUET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KUET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KUET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KUET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KUET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KUET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KUET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KUET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Khulna University of Engineering and Technology (KUET) admission test is a highly competitive exam for undergraduate engineering programmes in southern Bangladesh. KUET is one of the nine public engineering universities in Bangladesh and focuses on engineering, technology, and applied sciences. For KUET Admission Test, hold KUET Admission Test ID-photo and fee rules against https://kuet.ac.bd in the same week as your first KUET Admission Test mock.',
  commonMistakes: [
    'Screenshot cut-offs from last cycle do not bind KUET Admission Test this year — https://kuet.ac.bd does.',
    'A KUET Admission Test mock with a different number of items trains the wrong stamina.',
    'A friend who sat KUET Admission Test two years ago is not your eligibility officer; https://kuet.ac.bd is.',
    'If a page promises you will \'crack KUET Admission Test\' with this plan, it is not this site.',
    'Use 100 MCQs: Mathematics(40 questions), Physics(30 questions), Chemistry(20 questions), plus 10 questions from… only as a memory aid for KUET Admission Test, then match the live paper on https://kuet.ac.bd.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://kuet.ac.bd',
};

export default exam;
