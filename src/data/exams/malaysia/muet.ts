// Malaysian University English Test (MUET) — Majlis Peperiksaan Malaysia
// (Malaysian Examinations Council), a statutory body under the Malaysian
// Ministry of Education.
//
// Awarding body: Majlis Peperiksaan Malaysia (MEC). Paper codes 800/1-800/4.
// The four components are weighted equally at 25% each and each component is
// marked out of 90, giving an aggregated score out of 360.
//
// Source: MEC, Malaysian University English Test (MUET) 800 — Regulations and
//   Test Specifications (ISBN 978-983-2321-69-9), applying from Session 1 2021
//   onward until further notice.
//   https://portal.mpm.edu.my/images/dokumen/calon-peperiksaan/muet/regulation/Regulations_and_Test_Specifications.pdf

import type { ExamTemplate, Subject } from '../types';

import { reading } from './subjects/reading';
import { writing } from './subjects/writing';
import { listening } from './subjects/listening';
import { speaking } from './subjects/speaking';

const subjects: Subject[] = [
    reading,
    writing,
    listening,
    speaking,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'muet',
  examName: 'MUET (Malaysia)',
  country: 'malaysia',
  description: "The Malaysian University English Test (MUET) is an English proficiency test sat for entry to Malaysian public universities, administered by Majlis Peperiksaan Malaysia (MEC) and sat three times a year. Each of the four papers is marked out of 90 and carries a 25% weighting, so the aggregated score runs out of 360. The reporting scale runs from Band 1 up to Band 5+ in half-band steps at the top: 331-360 is Band 5+, 294-330 is Band 5.0, 258-293 is Band 4.5, 211-257 is Band 4.0, 164-210 is Band 3.5 and 123-163 is Band 3.0. There is no Band 6. Most programmes ask for Band 4 or above.",
  examPattern: "MUET is a written, invigilated test, not a computer-delivered one. It runs as four papers, each weighted 25% and each marked out of 90: Paper 800/1 Listening in 50 minutes, 800/2 Speaking in 30 minutes, 800/3 Reading in 75 minutes and 800/4 Writing in 75 minutes, for 360 marks in aggregate. The Listening paper has 5 parts built on 7 listening texts and 30 questions, and each text is heard twice. The Reading paper has 7 parts, 10 texts and 40 questions. The Writing paper has 2 tasks and 75 minutes in total. The Speaking paper is Part 1, a 2-minute individual presentation after 2 minutes of preparation, and Part 2, a group discussion with up to 4 candidates after 3 minutes of preparation, running 8 to 12 minutes. Listening, Reading and Writing are taken on the same day; Speaking is sat on a different day, subject to room availability. All four components must be attempted for a band score to be awarded. The separate online version is MUET on Demand (MoD), which carries its own fee.",
  eligibility: "Malaysian secondary or pre-university students. Required for UPU and university admission alongside STPM/Matriculation. Candidates register through the MEC online portal, and a candidate who misses a paper cannot be awarded a band score, because all four components must be attempted.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MUET (Malaysia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MUET (Malaysia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MUET (Malaysia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MUET (Malaysia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MUET (Malaysia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MUET (Malaysia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MUET (Malaysia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MUET (Malaysia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MUET (Malaysia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MUET (Malaysia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MUET (Malaysia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MUET (Malaysia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MUET (Malaysia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MUET (Malaysia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MUET (Malaysia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MUET (Malaysia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MUET (Malaysia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MUET (Malaysia) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MUET (Malaysia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'The four papers are weighted equally, so time spent on one paper cannot be traded against another. Rehearse Speaking Part 1 to the clock first, because a 2-minute talk after only 2 minutes of preparation is the hardest constraint to meet and it is not self-paced. Then drill Listening against the 50-minute limit with every text played twice, the condition the real paper imposes. Leave Writing Task 1 and Task 2 timed inside 75 minutes rather than writing to quality and checking the clock. Finish with Reading, where 40 questions across 10 texts is the densest paper.',
  },
  prepOverview:
    'MUET is sat three times a year, as MUET Session 1, Session 2 and Session 3, and results stay valid for five years from release. Because the four papers carry identical 25% weightings and equal 90-mark maxima, a candidate cannot buy a better aggregate by sacrificing one paper: each of the four contributes the same 90 marks to a 360 total. The most common planning error is treating the scale as running 1-6, which encourages targets that do not exist. Convert the band a programme names into the aggregated score behind it, so a requirement for Band 4.0 is read as 211-257 in total rather than as a fraction of a six-band scale. Sit the papers in the order that exposes a timing weakness early: Speaking first in rehearsal, because a 2-minute presentation after 2 minutes of preparation is the constraint most easily missed, then Listening at 50 minutes with every text played twice, then Writing and Reading. Registration is through the MEC portal, and because a missed paper means no band score at all, check the session dates against when you can actually sit before you book anything.',
  commonMistakes: [
    'Believing the scale runs 1 to 6 — MUET tops out at Band 5+, with Band 4.0 and Band 4.5 as distinct steps and no Band 6 existing at all. A candidate aiming at a "Band 6" is aiming at a grade the council does not award.',
    'Assuming the test can be taken online — MUET is a written, invigilated sitting. MUET on Demand is a separate product, sat online and carrying its own fee and its own certificate, so anyone who wants a MUET result has to book the invigilated papers.',
    'Booking only the papers that feel comfortable — all four components must be attempted for a band score to be awarded, and MEC will issue no certificate to a candidate who skips one. Because the Speaking paper is sat on a different day from the other three, treat that date as part of the booking rather than an extra.',
    'Missing the accommodation deadline and assuming a later request will be considered — applications for specific arrangements have to reach MEC before the test date, and the council states it will not consider cases reported after it.',
    'Leaving the test fee unpaid and expecting a result anyway — the council withholds results from candidates who have not settled in full, so an unpaid fee converts a completed sitting into no certificate. What each product costs is answered in the FAQ on what MUET costs to sit.'
  ],
  lastUpdated: '2026-10-20',
  officialSource: 'https://portal.mpm.edu.my/images/dokumen/calon-peperiksaan/muet/regulation/Regulations_and_Test_Specifications.pdf',
};

export default exam;
