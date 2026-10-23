import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'law-ent-uga',
  examName: 'Uganda Law Admission',
  country: 'uganda',
  description: 'Uganda law school entrance examination — the admission test for the Law Development Centre (LDC) Diploma in Law programme, which is the mandatory professional qualification for lawyers in Uganda. The LDC programme is the gateway to the Uganda Bar. The entrance examination ensures that candidates possess the foundational skills required for legal education at the professional level.',
  examPattern: 'Typically covers English Language (comprehension, grammar, essay writing), General Paper (current affairs, logical reasoning, critical analysis), and Legal Knowledge (basic principles of law, the 1995 Constitution of Uganda, structure of the Ugandan legal system). Questions are MCQs and short-answer. The exam is usually a half-day paper-based test conducted at the Law Development Centre in Kampala.',
  eligibility: 'Minimum of an undergraduate degree (bachelor\'s) in any field from a recognised university for the postgraduate Diploma route, OR excellent UACE results for the graduate entry scheme. English proficiency is essential. Candidates must be of good character and not have any serious criminal record. Applications are submitted to the Law Development Centre during the annual admission window.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Uganda Law Admission — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Uganda Law Admission — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Uganda Law Admission — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Uganda Law Admission — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Uganda Law Admission — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Uganda Law Admission — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Uganda Law Admission — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Uganda Law Admission — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Uganda Law Admission — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Uganda Law Admission — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Uganda Law Admission — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Uganda Law Admission — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Uganda Law Admission — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Uganda Law Admission — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Uganda Law Admission — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Uganda Law Admission — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Uganda Law Admission — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Uganda Law Admission — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Uganda Law Admission',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'For Uganda Law Admission, revisit weak Uganda Law Admission units the day after a timed Uganda Law Admission set, and do not pay until https://ldc.ac.ug shows an open window.',
  commonMistakes: [
    'Missing the entry route you actually qualify for. There are two: the postgraduate Diploma route for candidates with an undergraduate degree in any field, and the graduate entry scheme for those with excellent UACE results, and they are not interchangeable. Confirm which route the Law Development Centre is admitting on this cycle, then read the notice on https://ldc.ac.ug for the admission window.',
    'A Uganda Law Admission mock with a different number of items trains the wrong stamina.',
    'Skimming Legal Knowledge as general knowledge. That section is set on the basic principles of law, Uganda\'s 1995 Constitution and the structure of the Ugandan legal system, so a plan built on the English Language and General Paper sections alone leaves it unprepared. Check the paper structure on https://ldc.ac.ug.',
    'Good character is part of the entry requirement and the academic route does not cover it: candidates must have no serious criminal record as well as the degree or UACE result and the English proficiency check, so verify that line against your own application before you submit - https://ldc.ac.ug.',
    'The Uganda Law Admission paper is normally a half-day written test at the Law Development Centre in Kampala, mixing MCQs with short answers over English Language (comprehension, grammar, essay writing), the General Paper and Legal Knowledge. Read the structure as a memory aid; https://ldc.ac.ug carries the live notice.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ldc.ac.ug',
  conductingBody: 'Law Development Centre (LDC)',
};

export default exam;
