import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { science } from './subjects/science';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    mathematics,
    english,
    science,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'uaeu-cat',
  examName: 'UAE University CAT',
  country: 'uae',
  description: 'United Arab Emirates University (UAEU) College Admission Test — a standardised admissions test for undergraduate admission to UAEU\'s various colleges. UAEU is the UAE\'s flagship national university, located in Al Ain. The test is required for Emirati nationals and UAE residents seeking admission to undergraduate programmes, particularly in the Colleges of Business, Engineering, Health Sciences, and Humanities. UAE nationals are given priority in admission.',
  examPattern: 'Tests English, Mathematics, and analytical skills. Computer-based adaptive format. The English section assesses reading comprehension, vocabulary, and writing skills. Mathematics covers algebra, geometry, statistics, and quantitative reasoning. The analytical skills section tests logical reasoning, pattern recognition, and problem-solving. Each section is timed separately. The test adapts to candidate performance — correct answers lead to harder questions, incorrect answers to easier ones.',
  eligibility: 'High school completion (Tawjihi or equivalent) with minimum GPA requirements. UAE nationals given priority. For UAE nationals, the minimum GPA requirement is typically lower. Residents must have a high school diploma with good academic standing. Some programmes have additional subject requirements — for example, Engineering requires high school Mathematics. The test is conducted in Arabic and English depending on the programme.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UAE University CAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UAE University CAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UAE University CAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UAE University CAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UAE University CAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UAE University CAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UAE University CAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UAE University CAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UAE University CAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UAE University CAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UAE University CAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UAE University CAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UAE University CAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UAE University CAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UAE University CAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UAE University CAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UAE University CAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UAE University CAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UAE University CAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'The English section carries writing as well as reading and vocabulary, so a revision plan built only from reading passages leaves part of that section untouched. Set your writing practice inside a timed block and treat the writing task as part of the English score rather than as an extra.',
  commonMistakes: [
    'Taking the CAT in a language your programme does not use. The paper is set in Arabic and English, and which of the two your programme uses is decided by admissions rather than by you, so revising the other version is time you will not get back. Ask admissions which language your programme expects before you split your revision time. Details on https://www.uaeu.ac.ae.',
    'Leaving the general-knowledge block to the last night. The lists on this page carry a General Knowledge set that has to be learnt rather than drilled - the seven emirates and their geography, the 1971 federation and the federal structure - which no general drill produces. Start that block early and confirm the live format on https://www.uaeu.ac.ae.',
    'Treating the CAT as the only thing that decides your place. Admission also turns on the minimum GPA your programme asks for - which for UAE nationals is typically lower - and on programme-level subject requirements, with Engineering, for example, requiring high school Mathematics. A plan that stops at CAT practice leaves both out of reach. Check your programme\'s entry rules on https://www.uaeu.ac.ae.',
    'The CAT measures English, mathematics and analytical skills, with the English paper covering reading comprehension, vocabulary and writing. A revision plan centred only on mathematics leaves those language and reasoning tasks without systematic practice. Check the section requirements for the intended programme on https://www.uaeu.ac.ae before choosing practice tasks and building a timetable.',
    'Practising UAE University CAT at one fixed difficulty. The paper adapts as you answer - a correct answer routes you to a harder item, a wrong one to an easier one - so how far you get on a fixed-level mock is not how far you will get in the hall, and each section is timed separately, which a single blended practice timer does not test. Re-check the current format on https://www.uaeu.ac.ae.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.uaeu.ac.ae',
  conductingBody: 'United Arab Emirates University (UAEU)',
};

export default exam;
