import type { ExamTemplate, Subject } from '../types';

import { subject_combinations } from './subjects/subject-combinations';

const subjects: Subject[] = [
    subject_combinations,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ijmb',
  examName: 'IJMB (Interim Joint Matriculation Board)',
  country: 'nigeria',
  description: 'The Interim Joint Matriculation Board (IJMB) is an alternative pathway to JAMB for admission into Nigerian universities. Managed and conducted by Ahmadu Bello University (ABU), Zaria, IJMB is a two-year programme that results in an IJMB certificate accepted by all Nigerian universities for direct entry into 200 level (second year). It serves as a bridge between the O-Level/SSCE and university education, allowing candidates to bypass the 100 level and enter directly into their chosen degree programmes based on their IJMB results.',
  examPattern: '3-4 subjects depending on programme choice, each paper 3 hours duration. Conducted by Ahmadu Bello University. The programme involves continuous assessment during the two-year course and final examinations. Science candidates typically take Physics, Chemistry, and Biology/Mathematics; Arts candidates take relevant combinations based on their intended university course. Each subject is examined separately with rigorous testing of A-Level equivalent knowledge.',
  eligibility: 'SSCE/NECO holder with minimum 5 credits including English and Mathematics (for most programmes). The programme is designed for candidates seeking direct entry into 200 level university programmes. O-Level results must be within 5 years of the IJMB examination. Students who have already attempted JAMB may also enroll in IJMB as an alternative pathway. Foreign nationals with equivalent qualifications may also apply.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IJMB (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for IJMB (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for IJMB (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for IJMB (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for IJMB (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IJMB (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for IJMB (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IJMB (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for IJMB (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IJMB (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for IJMB (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for IJMB (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IJMB (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for IJMB (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IJMB (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IJMB (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for IJMB (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for IJMB (Nigeria) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IJMB (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'The Interim Joint Matriculation Board was set up under statute 5 of the Ahmadu Bello University law and is run by the IJMB Secretariat inside ABU\'s Institute of Education. Register through the Secretariat site, then plan two years of A-level-equivalent study around the subject combination your target programme needs.',
  commonMistakes: [
    'An outdated IJMB PDF is not a substitute for the current notice at http://ijmb.abu.edu.ng/, the Secretariat site run from ABU\'s Institute of Education.',
    'Assuming every paper runs to three hours regardless of subject. Papers are set to A-level standard, and the Secretariat\'s own notice is the only place the per-subject duration is confirmed — check it before you build a timetable.',
    'Picking subjects from what is easiest to study rather than what the target programme accepts. The combination is fixed by the course you are aiming at, and a paper you cannot sit is a lost year rather than a weaker result.',
    'If a page promises you will \'crack IJMB\' with this plan, it is not this site.',
    'Reading IJMB as a shortcut past the certificate. It is a two-year programme whose own assessments sit inside the course, so the certificate is earned across the whole span rather than in one terminal sitting.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'http://ijmb.abu.edu.ng/',
};

export default exam;
