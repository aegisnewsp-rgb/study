import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'must-adm',
  examName: 'MUST Admission (Tanzania)',
  country: 'tanzania',
  description: 'Mzumbe University (MU) runs its own entrance test for competitive undergraduate programmes, alongside Tanzania\'s centralized TCU admission system. Mzumbe is a comprehensive public university in Morogoro, best known for law, public administration, business and economics. Do not confuse it with Mbeya University of Science and Technology, a different university whose web address is must.ac.tz — this page is about Mzumbe.',
  examPattern: 'Varies by programme applied for — typically tests relevant subjects at CSEE or ACSEE level depending on the programme. For law and business programmes, tests English, Mathematics, and General Knowledge. For science programmes, tests Physics, Chemistry, and Mathematics. Questions are MCQ and short-answer. Each paper is approximately 2 hours. The test is paper-based and conducted on campus.',
  eligibility: 'CSEE (Form IV) certificate with minimum passes for diploma programmes. ACSEE certificate with relevant subject passes for degree programmes. Each programme has specific subject requirements — Law typically requires a credit in English at CSEE; Business programmes require Mathematics. Candidates must apply through the TCU system and separately to Mzumbe University for programmes requiring the admission test.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MUST Admission (Tanzania) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MUST Admission (Tanzania) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MUST Admission (Tanzania) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MUST Admission (Tanzania) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MUST Admission (Tanzania) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MUST Admission (Tanzania) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MUST Admission (Tanzania) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MUST Admission (Tanzania) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MUST Admission (Tanzania) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MUST Admission (Tanzania) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MUST Admission (Tanzania) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MUST Admission (Tanzania) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MUST Admission (Tanzania) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MUST Admission (Tanzania) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MUST Admission (Tanzania) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MUST Admission (Tanzania) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MUST Admission (Tanzania) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MUST Admission (Tanzania) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MUST Admission (Tanzania)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Mzumbe publishes its own admission advert and applies through admission.mzumbe.ac.tz, so the test you actually sit depends on the programme advert you are answering. Read the advert first, then use this hub to sequence the CSEE or ACSEE subjects it names.',
  commonMistakes: [
    'Assuming the Mzumbe test is the TCU route. Direct entry through TCU and the university\'s own entrance test are separate applications, and the university advert is the one that names the papers you sit.',
    'Reading must.ac.tz and assuming it is Mzumbe. That address belongs to Mbeya University of Science and Technology; Mzumbe\'s own sites are mu.ac.tz and admission.mzumbe.ac.tz.',
    'Mugging "the programme decides" as a rule. Decide which programme you are applying to first, then read only the subject list that advert names — the test papers do not overlap enough to revise them all.',
    'Timing a full mock without the real paper length. At roughly two hours per paper, a candidate who only ever rehearses in 30-minute sittings misjudges which questions to abandon and arrives having run out of paper mid-way.',
    'Treating a coaching video\'s "Mzumbe pattern" as current. The test has changed more than once and the advert is the only source that says which CSEE or ACSEE papers this year\'s candidates sit.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://mu.ac.tz',
  conductingBody: 'Mzumbe University',
};

export default exam;
