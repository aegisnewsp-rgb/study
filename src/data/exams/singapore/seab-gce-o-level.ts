// Singapore-Cambridge GCE Ordinary Level (GCE O-Level).
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB) in
// collaboration with Cambridge International Education, under the
// Singapore-Cambridge brand. The MOE Curriculum Planning and Development
// Division owns the syllabus content; SEAB and Cambridge jointly
// administer the examinations. GCE O-Level is the national examination
// taken by Singapore secondary students at the end of Sec 4 (or Sec 5).
//
// This file groups together the GCE O-Level subjects most commonly used
// by Singapore students aiming at the Junior College (JC) or polytechnic
// route: Elementary Mathematics (4052), Pure Physics (6091), Pure
// Chemistry (6092) and Pure Biology (6093). Additional and Combined
// Science syllabuses (4049, 5086, 5087, 5088) are offered in the same
// family but are not bundled here — confirm subject-code compatibility on
// the SEAB GCE O-Level syllabuses page before bundling.
//
// Important: from 2027, the 4052 / 6091 / 6092 / 6093 codes are being
// replaced in the new Singapore-Cambridge Secondary Education Certificate
// (SEC) by K310 / K323 / K324 / K325. The content structure is unchanged;
// only the subject code and the qualification title change. Verify the
// live code on the SEAB 2026 O-Level syllabuses page before committing
// any revision plan.

import type { ExamTemplate, Subject } from '../types';

import { olevelMathematics } from './subjects/olevel-mathematics';
import { olevelPhysics } from './subjects/olevel-physics';

const subjects: Subject[] = [
    olevelMathematics,
    olevelPhysics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'seab-gce-o-level',
  examName: 'Singapore-Cambridge GCE O-Level',
  country: 'singapore',
  description: 'The Singapore-Cambridge GCE O-Level is the national examination taken by Singapore secondary students at the end of Sec 4 (or Sec 5). It is set jointly by the Ministry of Education (MOE) and Cambridge International Education, with the Singapore Examinations and Assessment Board (SEAB) administering the examinations. Students sit six to nine subjects depending on course combination; subjects are offered at Standard only (the single-tier system, as opposed to the Foundation / Standard distinction at PSLE). O-Level results feed into the Joint Admission Exercise (JAE) for Junior College entry and the Joint Polytechnic Admission Exercise (JPAE) for the polytechnic route, alongside the L1R5 / L1R4 aggregate computation.',
  examPattern: 'Each O-Level subject has its own paper pattern. Pure subjects (Mathematics 4052, Additional Mathematics 4049, Pure Physics 6091, Pure Chemistry 6092, Pure Biology 6093) are assessed by a combination of written papers (multiple-choice, structured, free-response) and, for the pure sciences, a school-based Science Practical assessment. Mathematics 4052 is a two-paper written subject. Pure Physics, Pure Chemistry and Pure Biology each carry a multiple-choice paper, a structured-and-free-response paper and a school-based practical. English and Mother Tongue subjects add a written paper to a Listening and Oral component. Confirm the live paper durations, marks and Science Practical weightings on the SEAB 2026 GCE O-Level syllabuses page before planning.',
  eligibility: 'All Singapore secondary students in mainstream schools, and approved private candidates, are eligible to sit the GCE O-Level. School candidates are registered centrally by their school; private candidates apply through the SEAB portal within the published registration window. There is no minimum age; entry is by school cohort. Students with special educational needs may be approved for access arrangements (extra time, enlarged print, scribe) — confirm the framework on the SEAB GCE O-Level page before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Singapore-Cambridge GCE O-Level — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Singapore-Cambridge GCE O-Level — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Singapore-Cambridge GCE O-Level — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Singapore-Cambridge GCE O-Level — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Singapore-Cambridge GCE O-Level — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Singapore-Cambridge GCE O-Level — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Singapore-Cambridge GCE O-Level — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Singapore-Cambridge GCE O-Level — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Singapore-Cambridge GCE O-Level — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Singapore-Cambridge GCE O-Level — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Singapore-Cambridge GCE O-Level — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Singapore-Cambridge GCE O-Level — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Singapore-Cambridge GCE O-Level — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Singapore-Cambridge GCE O-Level',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on O-Level Mathematics Paper 2 (the applied paper) plus one timed O-Level Physics Paper 2 structured section; cross-check the live paper format on the SEAB GCE O-Level syllabuses page.',
  },
  prepOverview:
    'GCE O-Level preparation in Singapore is weight-ordered across the chosen subject combination. For a Sec 4 student taking the standard combination (Mathematics 4052, Additional Mathematics 4049 if capable, one or two pure sciences, English, Mother Tongue, a humanities), the productive pattern is: secure Paper 1 fundamentals first (Mathematics 4052 is taught through the three strands Number and Algebra, Geometry and Measurement, Statistics and Probability; Pure Physics 6091 through six sections covering 20 topics from Measurement to Radioactivity), then spend the largest revision block on Paper 2 applied and structured questions, then layer the school-based Science Practical in the final month. Use SEAB specimen papers and the official MOE syllabus PDFs as the question-style reference — third-party O-Level workbooks vary in tier alignment and may overshoot the actual paper\'s marks. For 3-month plans, target three full Mathematics 4052 papers and two full Pure Physics 6091 papers under timed conditions; for 6-month plans, layer a full content pass before the mock cycle. Always re-check the live subject codes (4052 / 6091 / 6092 / 6093) and any in-year specification changes on https://www.seab.gov.sg/gce-o-level/ before committing a revision plan to a student (singapore).',
  commonMistakes: [
    'Using O-Level Mathematics 4052 past papers labelled for an older year without checking the syllabus change — the 4052 syllabus is reviewed regularly and the topic emphasis shifts.',
    'Skipping the school-based Science Practical — the practical component is part of the Pure Physics / Pure Chemistry / Pure Biology grade and cannot be made up on the theory papers alone.',
    'Cramming for Additional Mathematics 4049 with only Pure Mathematics 4052 past papers — the 4049 syllabus is in three different strands (Algebra, Geometry and Trigonometry, Calculus) and the question style differs.',
    'Leaving the O-Level Mother Tongue listening component to the last week — the listening paper is on a separate day and a missed mark cluster drags the grade down.',
    'Assuming the L1R5 / L1R4 aggregate is computed from the same subjects year-on-year — MOE publishes the L1R5 / L1R4 grouping each posting cycle and the list of qualifying subjects can shift.',
    'Building a revision plan that ignores the 2027 SEC G3 transition — from 2027, subject codes K310 / K323 / K324 / K325 replace 4052 / 6091 / 6092 / 6093; the content is unchanged but the qualification title changes.',
    'Setting a Sec 4 revision plan without confirming whether the student is sitting the subject at Standard only — GCE O-Level is single-tier, unlike PSLE Standard / Foundation.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.seab.gov.sg/gce-o-level/',
};

export default exam;
