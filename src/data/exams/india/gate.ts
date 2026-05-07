import type { ExamTemplate, Subject } from '../types';

import { engineering_maths } from './subjects/engineering-maths';
import { subject_specific } from './subjects/subject-specific';
import { general_aptitude } from './subjects/general-aptitude';

const subjects: Subject[] = [
    engineering_maths,
    subject_specific,
    general_aptitude,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'gate',
  examName: 'GATE',
  country: 'india',
  description: `The Graduate Aptitude Test in Engineering (GATE) is an all-India entrance examination conducted jointly by the Indian Institute of Technology (IIT) and the Indian Institute of Science (IISc) on behalf of the National Coordination Board. GATE scores are used for admission to postgraduate programmes (M.E., M.Tech., Ph.D.) in premier engineering and technology institutions across India, including IITs, NITs, and IISc. It also serves as a screening test for recruitment by several public sector undertakings (PSUs) such as ONGC, NTPC, and IOCL. GATE is conducted annually in online computer-based format across multiple disciplines of engineering and sciences.`,
  examPattern: `GATE examination consists of 65 questions carrying a total of 100 marks. The question paper is divided into three sections: General Aptitude (15 marks, 10 questions), Mathematics (13-15 marks depending on the paper), and Subject-Specific Section (remaining marks). Questions are of two types: Multiple Choice Questions (MCQs) carrying 1 or 2 marks each, and Numerical Answer Type (NAT) questions carrying 1 or 2 marks each. There is negative marking for MCQs (1/3 mark for 1-mark questions, 2/3 mark for 2-mark questions) but no negative marking for NAT questions. The exam duration is 3 hours.`,
  eligibility: `Candidates with a bachelor's degree in engineering, technology, or science (B.E./B.Tech./B.Pharm.) from a recognized university are eligible to appear for GATE. Candidates in the final year of such programmes may also apply provisionally. Holders of a Master's degree in mathematics, statistics, science, or equivalent are eligible. Candidates belonging to Scheduled Castes, Scheduled Tribes, and Persons with Disabilities (PwD) categories are eligible for concession in eligibility norms. There is no age limit for GATE. Candidates with qualifications obtained through distance education or from open universities are also eligible provided the programme is recognized by the respective regulatory bodies.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GATE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for GATE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for GATE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for GATE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for GATE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GATE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for GATE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GATE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for GATE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GATE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for GATE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for GATE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GATE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for GATE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GATE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GATE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for GATE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for GATE — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GATE',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
