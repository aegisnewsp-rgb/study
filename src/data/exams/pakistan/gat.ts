import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { quantitative } from './subjects/quantitative';
import { logical_reasoning } from './subjects/logical-reasoning';

const subjects: Subject[] = [
    english,
    quantitative,
    logical_reasoning,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'gat',
  examName: 'GAT Pakistan',
  country: 'pakistan',
  description: `The Graduate Assessment Test (GAT) is Pakistan standardized postgraduate admission test conducted by NTS (National Testing Service) for enrollment in MS/MPhil programs at HEC-recognized universities across Pakistan. This aptitude test evaluates candidates analytical reasoning, quantitative reasoning, and English language skills required for advanced academic study at the graduate level. GAT serves as a unified screening mechanism replacing individual university entrance tests and is mandatory for admissions to most postgraduate programs. The test is designed to assess whether candidates possess the intellectual skills necessary for success in demanding graduate-level coursework and research.`,
  examPattern: `GAT General consists of 100 multiple-choice questions to be completed in 120 minutes (2 hours). The test is divided into three sections: Verbal Reasoning carries 20 questions, Quantitative Reasoning contains 30 questions, and Analytical Reasoning has 20 questions. Additionally, there is a Subject Knowledge section with 30 questions specific to the candidates academic background. GAT is conducted by NTS in paper-based pencil-and-paper format at designated centers across Pakistan. The score is valid for two years from the date of the test.`,
  eligibility: `Candidates holding a Bachelors degree (16 years of education) or equivalent from an HEC-recognized university are eligible to appear for GAT. There is no minimum percentage requirement for appearing in GAT, though individual universities may set their own passing thresholds for admission to specific programs. Students in their final year of bachelor's degree may also apply provisionally. GAT scores are used by universities for admission decisions as well as by various government departments and organizations for employment screening purposes.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GAT Pakistan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for GAT Pakistan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for GAT Pakistan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for GAT Pakistan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for GAT Pakistan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GAT Pakistan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for GAT Pakistan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GAT Pakistan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for GAT Pakistan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GAT Pakistan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for GAT Pakistan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for GAT Pakistan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GAT Pakistan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for GAT Pakistan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GAT Pakistan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GAT Pakistan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for GAT Pakistan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for GAT Pakistan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GAT Pakistan',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://www.nts.org.pk/new/GAT-G.php',
};

export default exam;
