import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { logical_reasoning } from './subjects/logical-reasoning';

const subjects: Subject[] = [
    english,
    mathematics,
    logical_reasoning,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'toafa',
  examName: 'TOEFL (Nigeria)',
  country: 'nigeria',
  description: `The Test of English as a Foreign Language (TOEFL) is a standardized assessment of English language proficiency for non-native English speakers, widely accepted by universities and institutions in Nigeria and globally for admission to undergraduate and postgraduate programmes. In Nigeria, the TOEFL is particularly important for students seeking admission to foreign universities, international scholarship programmes, and for visa applications. The Internet-based Test (iBT) format is the most commonly taken version, evaluating reading, listening, speaking, and writing skills in an academic context.`,
  examPattern: `The TOEFL iBT consists of four sections: Reading (36-56 questions, 60-80 minutes) testing comprehension of academic texts; Listening (36-51 questions, 60-90 minutes) assessing understanding of lectures and conversations; Speaking (4 tasks, 17 minutes) evaluating ability to express ideas in English; and Writing (2 tasks, 50 minutes) testing written expression skills. The total score is 120 (30 per section). The test is conducted entirely via the Internet at designated TOEFL iBT test centres. The Speaking and Writing sections are graded by both AI scoring and human raters. The TOEFL ITP (institutional testing programme) is also available in Nigeria for in-country use by institutions.`,
  eligibility: `There are no formal eligibility requirements or prerequisites for appearing in TOEFL. Anyone regardless of age, educational background, or nationality can register and appear for the TOEFL test. However, candidates typically take the TOEFL for academic purposes, immigration requirements, or professional certification. Candidates must present a valid identity document (passport is preferred) on the test day. For admission to universities, most institutions require a minimum TOEFL score of 80-100 (internet-based) or 550-600 (paper-based) depending on the programme and institution. Candidates can retake the test as many times as they wish, with a minimum gap of 3 days between attempts.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for TOEFL (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for TOEFL (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for TOEFL (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for TOEFL (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for TOEFL (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for TOEFL (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for TOEFL (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for TOEFL (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for TOEFL (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for TOEFL (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for TOEFL (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for TOEFL (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for TOEFL (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for TOEFL (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for TOEFL (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for TOEFL (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for TOEFL (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for TOEFL (Nigeria) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for TOEFL (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.ets.org/toefl',
};

export default exam;
