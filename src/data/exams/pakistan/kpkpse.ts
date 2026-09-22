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
  examPattern: `As notified by the Khyber Pakhtunkhwa Public Service Commission (KPPSC https://kppsc.gov.pk), the competitive examination consists of compulsory and optional written papers, with individual papers carrying 100 marks. Candidates qualifying the written stage proceed to the psychological evaluation and viva voce (interview) as laid down in the official KPPSC regulations.`,
  eligibility: `Per official KPPSC recruitment notices (https://kppsc.gov.pk), candidates must be domiciled in Khyber Pakhtunkhwa and hold at least a second-division Bachelor's degree (14 or 16 years of formal education recognized by the Higher Education Commission https://hec.gov.pk). As specified in the official KPPSC notification (https://kppsc.gov.pk), the general age requirement is 21 to 30 years as of the advertisement cutoff date, with statutory relaxations for backward regions and in-service government personnel.`,
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
  prepOverview:
    'KPK PMS preparation works best in three phases: (1) map the live syllabus and paper pattern from the official notice, (2) finish high-weight topics with timed practice sets and an error log, (3) sit full-length mocks matching official duration and marking. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://www.kppsc.gov.pk/ for the current cycle — rules change by year and country (pakistan).',
  commonMistakes: [
    'Using outdated KPK PMS pattern or syllabus PDFs instead of the live official notice.',
    'Practising only untimed quizzes and never sitting full-length mocks under exam fatigue.',
    'Ignoring high-weight sections while over-studying low-yield topics.',
    'No written error log — repeating the same mistake types across mocks.',
    'Treating unofficial cut-offs or rank predictors as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.kppsc.gov.pk/',
};

export default exam;
