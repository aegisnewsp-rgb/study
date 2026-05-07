import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { economics } from './subjects/economics';
import { accounting } from './subjects/accounting';

const subjects: Subject[] = [
    mathematics,
    english,
    economics,
    accounting,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'wassce',
  examName: 'WASSCE (Ghana)',
  country: 'ghana',
  description: 'West African Senior School Certificate Examination (WASSCE) for Ghana — Ghana\'s national secondary school leaving exam, equivalent to the Nigerian WAEC exam. Required for university admission in Ghana. The WASSCE is administered by the West African Examinations Council (WAEC) and is taken by Senior High School (SHS) students in their third year (SHS 3). It is the benchmark examination for both university admission and employment in Ghana.',
  examPattern: 'Core: English, Mathematics, Integrated Science. Electives: Physics, Chemistry, Biology, Economics, Geography, Government, etc. Written papers + practical for science subjects. The core subjects are compulsory for all candidates. Elective subjects are chosen based on the student\'s programme track (Science, Business, General Arts, Home Economics, Visual Arts). Science subjects have practical components. Papers include essay-type, short-answer, and MCQ questions. The examination is held in May/June.',
  eligibility: 'Junior High School (JHS) completion certificate. Minimum WASSCE grades required for university admission. Candidates must have completed JHS 3 and be registered SHS 3 students. For university admission, candidates typically need a minimum of 6 credits including the three core subjects. Competitive programmes like Medicine require A1 in Biology and Chemistry plus Physics and Elective Mathematics. The WASSCE grades are graded A1-D7, with A1 being the highest.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for WASSCE (Ghana) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for WASSCE (Ghana) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for WASSCE (Ghana) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for WASSCE (Ghana) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for WASSCE (Ghana) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for WASSCE (Ghana) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for WASSCE (Ghana) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for WASSCE (Ghana) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for WASSCE (Ghana) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for WASSCE (Ghana) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for WASSCE (Ghana) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for WASSCE (Ghana) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for WASSCE (Ghana) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for WASSCE (Ghana) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for WASSCE (Ghana) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for WASSCE (Ghana) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for WASSCE (Ghana) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for WASSCE (Ghana) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for WASSCE (Ghana)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.waecgh.org',
};

export default exam;
