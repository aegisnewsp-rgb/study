import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { science } from './subjects/science';
import { politics } from './subjects/politics';
import { economics } from './subjects/economics';

const subjects: Subject[] = [
    history,
    geography,
    science,
    politics,
    economics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'tnpsc',
  examName: 'TNPSC Group 1',
  country: 'india',
  description: `The TNPSC Group 1 preliminary exam has a 3-hour time limit on one objective OMR sheet, and a wrong answer costs no marks. The three deductions that do apply are clerical rather than penalty-based — a mis-written register number, a blank answer bubble, a missing thumb impression — each itemised with its section number under exam pattern. Preliminary marks never reach the final rank: the stage only screens, and selection is decided by a written stage followed by a 100-mark oral test. The live notification is Advertisement No. 736 (Notification No. 05/2026, 23 June 2026), recruiting 26 posts in revenue administration, labour and co-operative registration.`,
  examPattern: `As notified by the Tamil Nadu Public Service Commission (https://tnpsc.gov.in), the TNPSC Group 1 Preliminary examination is a single OMR-based objective paper with 200 questions carrying 300 marks (3 hours duration): 175 questions in General Studies (Degree Standard) and 25 questions in the Aptitude and Mental Ability Test (SSLC Standard). Minimum qualifying marks in the Preliminary are 90 for SC, SC(A), ST, MBC/DC, BC(OBCM) and BCM candidates and 120 for all others; the Preliminary is a screening test only and its marks are not counted in the final total. Advertisement No. 736 (Notification No. 05/2026, dated 23 June 2026) prescribes no negative marking for a wrong answer, but it does fix three objective-paper deductions in section 1.11.3: 2 marks for an incorrectly written register number where the OMR answer sheet is non-personalised, and 0.5 mark each for leaving a question's answer bubble blank or for not affixing the left thumb impression at Part I of page 1. Section 6.3 is not a penalty clause — it states that Papers II–IV are evaluated only after a candidate qualifies in Paper I. A question-booklet-number error is not a five-mark penalty either: unshaded, out-of-range or wrongly darkened booklet-number bubbles invalidate the entire OMR answer sheet under sections 1.11.1.8 to 1.11.1.12, and shading more than one bubble for a question leaves that answer unevaluated. The Main Written Examination consists of four descriptive papers of 3 hours each: Paper I Mandatory Tamil Eligibility Test (100 marks, minimum 40 qualifying), and Papers II–IV General Studies (Degree Standard, 250 marks each), for which the minimum qualifying marks are 225 for SC, SC(A), ST, MBC/DC, BC(OBCM) and BCM candidates and 300 for all others. Papers II–IV are evaluated only if the candidate qualifies in Paper I, and appearance in all Main papers and the interview is compulsory. Together with the 100-mark oral interview, final selection rank is determined out of 850 marks as specified in the official TNPSC notification (https://tnpsc.gov.in).`,
  eligibility: `Per the official TNPSC recruitment notification (https://tnpsc.gov.in), candidates must hold a Bachelor's degree in any discipline from a recognized university. As prescribed in the official bulletin (https://tnpsc.gov.in), the age limits as on 1 July 2026 are 21 to 34 years for candidates in the Others category, with an upper age limit of 39 years for reserved-category candidates. Every post in Advertisement No. 736 sits on that same 34/39 ceiling, Assistant Commissioner (Commercial Taxes) included: its any-degree row reads 34 and 39 like the rest of them. Only a candidate who already holds a B.L. degree gains a year on that post, taking it to 35 in the Others category and 40 in the reserved categories. The three notified concessions then run alongside those ceilings rather than replacing them: 44 for Others and 49 for reserved candidates with benchmark disability, 50 and 55 for ex-servicemen, and 39 for a destitute widow — a figure that lifts an Others candidate from 34 but leaves a reserved candidate at the 39 they already hold. Deputy Superintendent of Police (Category-1) is the one post the notification marks NA for benchmark disability, because persons with benchmark disability are not eligible to apply for it. Adequate knowledge of Tamil is mandatory as notified: a candidate is deemed to possess it by passing SSLC, HSC or a Degree with Tamil as one of the languages, by having studied the High School Course in Tamil medium, or by passing the TNPSC Second Class Language Test (Full Test) in Tamil.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for TNPSC Group 1 — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for TNPSC Group 1 — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for TNPSC Group 1 — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for TNPSC Group 1 — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for TNPSC Group 1 — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for TNPSC Group 1 — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for TNPSC Group 1 — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for TNPSC Group 1 — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for TNPSC Group 1 — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for TNPSC Group 1 — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for TNPSC Group 1 — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for TNPSC Group 1 — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for TNPSC Group 1 — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for TNPSC Group 1 — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for TNPSC Group 1 — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for TNPSC Group 1 — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for TNPSC Group 1 — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for TNPSC Group 1 — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for TNPSC Group 1',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'TNPSC Group exams emphasise Tamil Nadu history, geography, polity, aptitude and general studies as per the group notification. Use state board + standard GS materials; practise previous TNPSC papers under timed conditions. Confirm group syllabus and dates on tnpsc.gov.in.',
  commonMistakes: [
    'Ignoring Tamil Nadu-specific units.',
    'No full previous-paper timed practice.',
    'Weak aptitude speed.',
    'Outdated group syllabus PDFs.',
    'Application document errors.'
  ],
  lastUpdated: '2026-10-18',
  officialSource: 'https://www.tnpsc.gov.in',
};

export default exam;
