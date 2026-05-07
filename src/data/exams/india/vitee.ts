import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { english } from './subjects/english';
import { general_aptitude } from './subjects/general-aptitude';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    english,
    general_aptitude,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'vitee',
  examName: 'VITEEE',
  country: 'india',
  description: "VITEEE is the entrance exam for VIT University Vellore, Chennai, Amaravati, and Bhopal campuses. One of India's largest private university entrance exams with over 2 lakh candidates. Tests PCM and English in a computer-based format.",
  examPattern: "125 MCQs: Physics(35), Chemistry(35), Mathematics/Biology(40), English(5), Aptitude(10), 2h 30min.",
  eligibility: "Class 12 PCM/PCB with minimum 60% aggregate. NRI candidates eligible through separate channel.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for VITEEE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for VITEEE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for VITEEE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for VITEEE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for VITEEE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for VITEEE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for VITEEE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for VITEEE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for VITEEE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for VITEEE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for VITEEE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for VITEEE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for VITEEE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for VITEEE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for VITEEE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for VITEEE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for VITEEE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for VITEEE — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for VITEEE',
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
