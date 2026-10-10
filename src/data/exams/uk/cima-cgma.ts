import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { cimaOperational } from './subjects/cima-operational';
import { cimaManagement } from './subjects/cima-management';
import { cimaStrategic } from './subjects/cima-strategic';

const subjects: Subject[] = [
  cimaOperational,
  cimaManagement,
  cimaStrategic,
];

const exam: ExamTemplate = {
  examId: 'cima-cgma',
  examName: 'CIMA CGMA (Chartered Global Management Accountant)',
  country: 'uk',
  description:
    'The CGMA is the Chartered Global Management Accountant qualification, awarded jointly by the Chartered Institute of Management Accountants and the American Institute of CPAs, which now operate together as AICPA & CIMA. The Professional Qualification has three levels — Operational, Management and Strategic — and is assessed in two very different ways. Nine Objective Tests are computer-based, computer-marked and available on demand all year. Three Case Study Examinations, one per level, are computer-based, human-marked, three hours long, taken on pre-seen material four times a year. Passing the examinations is necessary but not sufficient: the designation also requires three years of verified relevant professional experience.',
  examPattern:
    'Objective Tests: nine in total, three at each level, each 90 minutes, computer-based and computer-marked, available on demand at Pearson VUE centres or online throughout the year. AICPA & CIMA states that as soon as you complete an Objective Test you receive a provisional pass or fail result at the test centre, "ratified in your My Profile within 48 hours". Case Study Examinations: three in total, one per level, each three hours, computer-based and human-marked, using pre-seen material, offered four times a year in February, May, August and November. Results are published 6 to 8 weeks after the relevant window closes. Objective Test items include short multiple-choice questions, number-entry questions and drag-and-drop formats, and they test all component learning outcomes across the entire subject. There is also an optional entry route: the Certificate in Business Accounting, whose exams run 120 minutes, with BA1, BA2 and BA3 each containing 60 Objective Test questions and BA4 containing 85.',
  eligibility:
    'CIMA states that everyone is invited to register and that candidates "may have little or no accounting background". Candidates with previous education or relevant work experience may receive exemptions from parts of the syllabus. Registration as a candidate is required before entering examinations — passing the examinations alone does not confer the designation. The CGMA designation additionally requires three years of verified relevant professional experience, assessed through CIMA\'s Practical Experience Requirements process. Candidates may begin with the optional Certificate in Business Accounting, which CIMA describes as suitable for people with little or no accounting background.',
  calendarDates: {
    applicationStart: 'Objective Tests can be entered on demand year round. Case Study Examinations run in four windows: February, May, August and November.',
    resultDate: 'Objective Test results are provisional immediately and confirmed within 48 hours. Case Study results are published 6–8 weeks after the close of the relevant examination window.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'CIMA CGMA study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'CIMA CGMA study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'CIMA CGMA study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'CIMA CGMA study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'CIMA CGMA study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'CIMA CGMA study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'CIMA CGMA study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'CIMA CGMA study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'CIMA CGMA study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'CIMA CGMA study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'CIMA CGMA study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'CIMA CGMA study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'CIMA CGMA study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'CIMA CGMA study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'CIMA CGMA study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'CIMA CGMA study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'CIMA CGMA study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'CIMA CGMA study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Plan for candidates close to a Case Study window with Objective Tests still outstanding',
    duration: '1mo',
    focusAreas: [
      { subject: 'Operational Level', topics: ['P1 Management Accounting', 'Operational Case Study'] },
      { subject: 'Management Level', topics: ['F2 Advanced Financial Reporting'] },
      { subject: 'Strategic Level', topics: ['E3 Strategic Management', 'F3 Financial Strategy'] },
    ],
    strategy: 'Get every Objective Test entered before you attempt a Case Study. The Objective Tests are computer-marked, on demand, and return a provisional result within the session, so they are the cheapest marks available and the fastest feedback you will get. The Case Studies are human-marked, three hours, on pre-seen material, so they reward analysis of material you have already worked rather than new learning. For a Case Study sitting, spend the first fortnight building the pre-seen document notes and the final fortnight writing and timing three hours of continuous output — the exam fails people on stamina and on structure, not on facts.',
  },
  prepOverview:
    'Plan the qualification backwards from the designation, not forwards from the syllabus. Passing the examinations does not make you a CGMA; three years of verified relevant professional experience are also required, and CIMA assesses that through its Practical Experience Requirements. If you do not yet have that experience, the examinations are still worth taking for employability, but the timeline you are planning is longer than the syllabus suggests and you should start logging evidence now rather than at the end.\n\nThen exploit the asymmetry between the two assessment types. Nine Objective Tests are computer-marked, available on demand all year, and give a provisional result at the test centre within the session. That makes them low-risk, low-cost marks and fast feedback. Three Case Studies are human-marked, three hours each, on pre-seen material, four times a year, with results 6 to 8 weeks after the window closes. Those need planning around a published date and a practice regime of continuous timed writing.\n\nBecause Objective Tests sample all component learning outcomes across the whole subject rather than testing one chapter, breadth beats depth. The nine modules — E1, P1, F1, E2, P2, F2, E3, P3, F3 — are individually large, and a candidate who has covered every module thinly will outscore one who has mastered two. Practise in the mixed item formats the syllabus describes, including number-entry and drag-and-drop, because the format itself costs marks if you have only met multiple choice.\n\nBudget against the fee tiers honestly. AICPA & CIMA sets fees by tier — Tier 1 covers Western Europe, Australia, Singapore, the United States and Canada; Tier 2 is the rest of the world; Tier 3 is Sub-Saharan Africa — and the gap between Tier 1 and Tier 3 is roughly fifty per cent of the cost. Registration and re-registration are separate line items from the annual student subscription, and study materials and tuition are additional to both.',
  commonMistakes: [
    'Believing passing the examinations makes you a CGMA. The designation also requires three years of verified relevant professional experience, assessed through CIMA\'s Practical Experience Requirements.',
    'Registering later than you think you need to. Registration as a candidate is required before entering examinations, and registration, re-registration and the annual student subscription are separate charges.',
    'Treating the Objective Test formats as interchangeable. The syllabus describes short multiple-choice, number-entry and drag-and-drop items, so a candidate who has only practised multiple choice loses marks on format alone.',
    'Attempting a Case Study without working the pre-seen material. Case Studies are human-marked and assess integrated application of pre-seen material, not recall from the study notes.',
    'Underestimating the three hours. Each Case Study is a three-hour continuous piece of work, and the failure mode is running out of output quality two-thirds of the way through rather than running out of content.',
    'Ignoring the exam windows. Objective Tests are on demand, but Case Study Examinations run only four times a year, and results come 6 to 8 weeks after the window closes.',
    'Assuming the fee is one number. Fees are tiered by test-centre region, and study materials and tuition are additional to the examination and registration fees.',
    'Missing the provisional-result advantage. Objective Test results are provisional within the session and confirmed within 48 hours, which is the fastest feedback loop in the qualification.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.aicpa-cima.com/resources/landing/exams',
};

export default exam;