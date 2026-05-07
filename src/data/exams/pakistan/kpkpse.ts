import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { islamic_studies } from './subjects/islamic-studies';
import { pakistan_affairs } from './subjects/pakistan-affairs';

const subjects: Subject[] = [
    english,
    gk,
    islamic_studies,
    pakistan_affairs,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kpkpse',
  examName: 'KPK PMS',
  country: 'pakistan',
  description: `The Khyber Pakhtunkhwa Public Service Commission Provincial Management Service (KP PMS) examination is the premier civil service recruitment test for the Khyber Pakhtunkhwa province. This comprehensive examination recruits candidates for administrative positions in the provincial civil service, including positions like Deputy Commissioner, Assistant Commissioner, and various provincial secretary posts. The examination evaluates candidates across multiple subjects including English, Current Affairs, Pakistan Affairs, Islamic Studies, General Knowledge, and General Science. Successful candidates undergo training at the Civil Services Academy before being posted to various departments across the province.`,
  examPattern: `The KP PMS examination consists of multiple written papers: English (Essay, Precis, and Grammar), Current Affairs of Pakistan and World, Pakistan Affairs, Islamic Studies, General Knowledge, and General Science. Each paper carries 100 marks. The examination is conducted in Peshawar and other designated centers. After passing the written examination, candidates appear for a psychological test and interview. The final selection is based on combined marks from written examination, psychological test, and interview performance.`,
  eligibility: `Candidates must be Pakistani nationals domiciled in Khyber Pakhtunkhwa province with at least a second division Bachelors degree (16 years of education) from an HEC-recognized university. The age limit is 21-30 years for most positions with relaxations for government employees and certain other categories. Female candidates and those from tribal areas are encouraged to apply. Candidates must be of good character and must not have been dismissed from government service for misconduct or have a criminal record.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KPK PMS — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KPK PMS — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KPK PMS — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KPK PMS — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KPK PMS — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KPK PMS — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KPK PMS — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KPK PMS — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KPK PMS — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KPK PMS — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KPK PMS — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KPK PMS — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KPK PMS — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KPK PMS — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KPK PMS — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KPK PMS — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KPK PMS — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KPK PMS — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KPK PMS',
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
