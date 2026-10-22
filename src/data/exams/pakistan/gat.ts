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
  description: `The Graduate Assessment Test (GAT) is a Pakistan-standardized postgraduate admission test conducted by NTS (National Testing Service) for enrollment in MS/MPhil programs at HEC-recognized universities across Pakistan. This aptitude test evaluates the analytical, quantitative and English language skills required for advanced academic study at the graduate level. GAT serves as a unified screening mechanism replacing individual university entrance tests and is mandatory for admissions to most postgraduate programs. The test is designed to assess whether candidates possess the intellectual skills necessary for success in demanding graduate-level coursework and research. NTS runs GAT-General in several sessions a year and publishes the 2026 schedule, with the test date, announcement date and registration window for each session, on its own site, so M.Phil applicants should read the live NTS schedule rather than assume one fixed annual date.`,
  examPattern: `As officially structured by the National Testing Service (NTS, nts.org.pk), GAT General consists of 100 multiple-choice questions to be completed in 120 minutes (2 hours). The test typically includes sections across Verbal Reasoning, Quantitative Reasoning, and Analytical Reasoning, with section weightages allocated according to the specific paper category (GAT-A, GAT-B, GAT-C, GAT-D) as notified by NTS. GAT is conducted by NTS in paper-based format at designated centers across Pakistan, and the official result card remains valid for two years from the test date.`,
  eligibility: `Candidates holding a recognized Bachelor's degree (typically 16 years of formal education) or equivalent from a Higher Education Commission (HEC, hec.gov.pk) recognized institution are eligible to appear for GAT. While NTS does not impose a single centralized cut-off, individual universities and scholarship programs establish their own admission thresholds as officially notified in their bulletins.`,
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
  prepOverview:
    'Work on verbal reasoning, quantitative reasoning and analytical reasoning as separate blocks, then check how NTS allocates sections to your paper category, whether GAT-A, GAT-B, GAT-C or GAT-D, before you settle the balance. The paper is 100 multiple-choice questions in 120 minutes, so rehearse reading a question and committing to an answer under timed, paper-based conditions. NTS runs GAT-General across several sessions, publishing each session’s own date, its announcement date and the registration window that goes with it, so track the live schedule rather than assuming a single fixed annual sitting. Eligibility rests on a recognized bachelor’s degree or equivalent from an HEC-recognized institution, while each university and scholarship body sets its own admission threshold. Your result card stays usable for two full years counting from the day you sat it.',
  commonMistakes: [
    'Planning around a single fixed annual test date makes applicants miss the published NTS session schedule, because NTS runs GAT-General in several sessions and each has its own registration and test date.',
    'Counting only Verbal and Quantitative questions is a common slip, since the 100 MCQs also include Analytical Reasoning and the section weightage shifts across GAT-A, GAT-B, GAT-C and GAT-D categories.',
    'Retaking the test because an old result card looks expired is a misread, because NTS keeps the official result card good for two full years from the day you sat the paper.',
    'Applying without checking the degree level is a common error, because GAT expects a degree of typically 16 years of formal schooling, or the equivalent, from an HEC-recognized institution.',
    'Ignoring that each university sets its own threshold leads to surprise, because NTS sets no single centralised cut-off of its own, and admission scores are notified separately by each institution.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.nts.org.pk/new/GAT-G.php',
  conductingBody: 'National Testing Service (NTS)',
};

export default exam;
