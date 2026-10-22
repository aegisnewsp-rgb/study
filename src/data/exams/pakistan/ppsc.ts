import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { pakistan_affairs } from './subjects/pakistan-affairs';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    gk,
    pakistan_affairs,
    current_affairs,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ppsc',
  examName: 'PPSC (Pakistan)',
  country: 'pakistan',
  description: `The Punjab Public Service Commission (PPSC) is a government body that conducts competitive examinations for recruitment to various civil service posts in the Punjab province of Pakistan. PPSC examinations are conducted for positions in the Punjab Superior Judicial Service, Punjab Civil Service (PMS), and various other Group A and B posts in the provincial government. The commission conducts written examinations, interview boards, and other selection procedures to identify qualified candidates for positions such as Deputy Commissioner, Assistant Commissioner, and various provincial secretariat posts.`,
  examPattern: `The PPSC Combined Competitive Examination for Punjab Civil Service (PMS) has a written examination followed by a psychological test and interview, and it is held in phases. As advertised for the 2025 cycle, the written examination carries 1200 marks: six compulsory papers of 100 marks each (English Essay; English Précis, Comprehension and Translation; Urdu Essay, Précis, Comprehension and Translation; Islamic Studies or Ethics for non-Muslim candidates; Pakistan Studies; and a General Knowledge objective paper), together 600 marks, plus three optional subjects of 200 marks each, chosen so that no more than one comes from any single subject group. The psychological test and interview/viva voce carry a further 300 marks. Candidates must secure 50% of the written aggregate (600 marks) to reach the interview, and then 50% in the interview itself. The General Knowledge objective paper carries negative marking of 0.25 marks per wrong answer. Confirm the current cycle's paper list and totals in the PPSC advertisement before planning around them, because they are re-notified for each examination.`,
  eligibility: `Candidates must hold a graduate degree (at least second division) from a recognized university and be domiciled in Punjab. The age limit advertised for the 2025 cycle is 21 to 30 years as on 1st January 2026: officials of the Punjab or Federal Government who are domiciled in Punjab and have at least 4 years service get an upper age limit of 35 years, and special persons may receive up to 15 years relaxation. Male, female and transgender candidates may all apply. Confirm the age band and cut-off date in the current advertisement, since the Commission re-notifies them for each cycle.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for PPSC (Pakistan) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for PPSC (Pakistan) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for PPSC (Pakistan) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for PPSC (Pakistan) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for PPSC (Pakistan) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for PPSC (Pakistan) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for PPSC (Pakistan) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for PPSC (Pakistan) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for PPSC (Pakistan) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for PPSC (Pakistan) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for PPSC (Pakistan) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for PPSC (Pakistan) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for PPSC (Pakistan) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for PPSC (Pakistan) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for PPSC (Pakistan) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for PPSC (Pakistan) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for PPSC (Pakistan) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for PPSC (Pakistan) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for PPSC (Pakistan)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Use the PPSC Combined Competitive Examination pattern for the Punjab Civil Service to set your revision order: English, Urdu, Islamic Studies or Ethics, Pakistan Studies and the General Knowledge objective paper, then three optional subjects chosen so that no more than one falls in any single subject group. The written aggregate is 1200 marks, 600 of them from the compulsory papers and the remainder from your optionals, and you need 50% of that aggregate to reach the interview, then 50% in the interview itself. Negative marking on the General Knowledge objective paper makes careless guessing expensive, so drill answer selection. Read the current advertisement for the paper list, totals, age band and cut-off date, and check your Punjab domicile and graduate-degree standing against it.',
  commonMistakes: [
    'Adding up only the optional subjects leaves a candidate 600 marks short, because six compulsory papers of 100 marks contribute 600 marks and three optional subjects of 200 marks add 600 more, for the 1200-mark written total.',
    'Guessing freely on the General Knowledge objective paper is costly, because every wrong answer there is docked at a quarter of a mark on top of the 100-mark weight.',
    'Picking two optional subjects from the same group is rejected, because no more than one optional subject may come from any single subject group, and each optional carries 200 marks.',
    'Hitting 50% in the interview without the written threshold still eliminates a candidate, because 50% of the written aggregate (600 marks) is required to reach the viva.',
    'Judging the 21 to 30 age band on the exam date is wrong, because the advertised cutoff for the 2025 cycle is age as on 1st January 2026, with relaxations to 35 years for specified government servants and up to 15 years for special persons.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.ppsc.gop.pk/',
  conductingBody: 'Punjab Public Service Commission (PPSC)',
};

export default exam;
