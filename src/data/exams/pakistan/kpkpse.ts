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
    'Every KP PMS paper carries 100 marks, and KPPSC splits the examination into compulsory and optional written papers before candidates who qualify go on to psychological evaluation and viva voce. Build your coverage around general knowledge and general science, then English, current affairs, Islamic studies and Pakistan affairs, and add optional subjects for the recruitment cycle you are applying in. Use the official KPPSC recruitment notice to fix the paper combination and any category-specific conditions rather than an older description. Before applying, verify that you are domiciled in Khyber Pakhtunkhwa, hold a second-division bachelor’s degree of 14 or 16 years recognized by HEC, and fall inside the 21 to 30 age requirement as measured at the advertisement cutoff date. Qualifiers train at the Civil Services Academy before departmental posting.',
  commonMistakes: [
    'Missing the Khyber Pakhtunkhwa domicile requirement disqualifies a candidate, because KPPSC recruitment notices require domicile in the province.',
    'Preparing for only the compulsory papers leaves the optional ones uncovered, because the KPPSC competitive examination pairs compulsory and optional written papers, each individual paper carrying 100 marks.',
    'Reading 21 to 30 as a fixed age band ignores the statutory relaxations, since backward-region and in-service government personnel categories receive separate upper-age extensions under the official KPPSC rules.',
    'Stopping after the written papers is a mistake, because a written-stage pass carries you only as far as the psychological evaluation and the viva voce, and the Civil Services Academy training comes before any departmental posting.',
    'Preparing for a generic civil service exam misses what KP PMS selects, because the recruitment targets provincial administrative posts such as Deputy Commissioner and Assistant Commissioner along with various provincial secretary posts.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.kppsc.gov.pk/',
  conductingBody: 'Khyber Pakhtunkhwa Public Service Commission (KPPSC)',
};

export default exam;
