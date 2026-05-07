import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { company_law } from './subjects/company-law';
import { economics } from './subjects/economics';
import { taxation } from './subjects/taxation';

const subjects: Subject[] = [
    accounting,
    company_law,
    economics,
    taxation,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'cs-exec',
  examName: 'CS Executive',
  country: 'india',
  description: `The Company Secretary (CS) Executive Programme is the second stage of the Company Secretaryship qualification conducted by the Institute of Company Secretaries of India (ICSI). It is designed to train professionals in corporate law, company secretarial practices, corporate compliance, and governance. CS professionals play a vital role in ensuring regulatory compliance, corporate governance, and proper functioning of companies. The Executive programme builds on the Foundation level and prepares candidates for mid-level corporate secretarial roles.`,
  examPattern: `The CS Executive examination consists of two modules with a total of eight papers. Module I covers Company Law, Cost and Management Accounting, Economic and Commercial Law, and Tax Laws and Practice. Module II covers Corporate and Management Accounting, Securities Laws and Capital Markets, and Economic, Industrial and Labour Laws. Each paper carries 100 marks and is of 3 hours duration. The exam is conducted in both online (computer-based) and offline (pen-and-paper) modes. Candidates must secure a minimum of 40% marks in each paper and 50% aggregate in each module to pass.`,
  eligibility: `Candidates who have passed the CS Foundation examination are eligible to appear for the CS Executive programme. Graduates or postgraduates in any discipline (except Company Secretaryship) from a recognized university are eligible for direct entry to the Executive programme without appearing for the Foundation. Candidates who have passed the CA Foundation/CPT are also eligible for exemption from CS Foundation. There is no minimum percentage requirement for graduation for direct entry. Students in the final year of graduation may also register provisionally.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CS Executive — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CS Executive — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CS Executive — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CS Executive — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CS Executive — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CS Executive — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CS Executive — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CS Executive — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CS Executive — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CS Executive — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CS Executive — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CS Executive — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CS Executive — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CS Executive — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CS Executive — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CS Executive — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CS Executive — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CS Executive — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CS Executive',
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
