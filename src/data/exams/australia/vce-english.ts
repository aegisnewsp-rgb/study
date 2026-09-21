// Victorian Certificate of Education (VCE) — English.
// Awarding body: Victorian Curriculum and Assessment Authority (VCAA).
// Study Design: VCE English and English as an Additional Language Study
// Design (2023), implementing Units 1-2 from 2023 and Units 3-4 from 2024.
// Official source: https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/english-and-english-additional-language/english-and-english-additional-language-eal
// English is the only compulsory study in the VCE. Students must satisfactorily
// complete three units of English; two of the three must be at Units 3 and 4.
// Re-check the live study design and any notice to schools on vcaa.vic.edu.au.

import type { ExamTemplate, Subject } from '../types';

import { vceEnglish } from './subjects/vce-english';

const subjects: Subject[] = [
    vceEnglish,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'vce-english',
  examName: 'VCE English (VCAA 2023)',
  country: 'australia',
  description: 'VCE English is the mainstream English course in the Victorian Certificate of Education, administered by the Victorian Curriculum and Assessment Authority (VCAA). English is the only compulsory study in the VCE and contributes to the Australian Tertiary Admission Rank (ATAR) at Units 3 and 4. The 2023 Study Design re-organised the Units 3-4 Areas of Study into three components: Reading and responding to texts (Unit 3-4 Area of Study 1), Creating texts (Unit 3 Area of Study 2) and Analysing argument (Unit 4 Area of Study 2). Students produce analytical and creative responses and are assessed through School-Assessed Coursework and an end-of-year written examination.',
  examPattern: 'Units 3 and 4 consist of three Areas of Study: Reading and responding to texts (a Unit 3-4 Area of Study 1), Creating texts (Unit 3 Area of Study 2), and Analysing argument (Unit 4 Area of Study 2). School-Assessed Coursework tasks (SACs) cover each Area of Study in Units 3 and 4. The end-of-year examination is set by the VCAA. The Units 3-4 English examination consists of three sections corresponding to the three Areas of Study, with timing and weighting published in the annual Examination Specifications document. Confirm the live examination structure and any notice to schools on vcaa.vic.edu.au before each cycle.',
  eligibility: 'To be awarded the VCE, a student must satisfactorily complete at least 16 units of study including English (or English as an Additional Language). Three units of English must be completed; at least two must be at Units 3 and 4. There is no formal prerequisite for VCE English Units 1-2; Unit 3-4 normally requires satisfactory completion of Units 1-2. Results are reported as a study score out of 50 and contribute to the ATAR through VTAC scaling.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for VCE English — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for VCE English — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for VCE English — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for VCE English — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for VCE English — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for VCE English — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for VCE English — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for VCE English — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for VCE English — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for VCE English — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for VCE English — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for VCE English — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for VCE English — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for VCE English — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for VCE English — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for VCE English — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for VCE English — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for VCE English — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for VCE English',
    duration: '3d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritise the Reading and Responding to texts Area of Study (which is the largest on the end-of-year examination). Drill timed analytical responses against published sample materials and the Examination Specifications.',
  },
  prepOverview:
    'VCE English is built on three Areas of Study at Units 3 and 4. The productive pattern is to complete Reading and Responding to Texts across the year (it is the largest assessment component), with regular practice in Creating Texts (Unit 3) and Analysing Argument (Unit 4). The single highest-leverage habit is timed practice against the published sample materials and the Examination Specifications document published each year by the VCAA. The 2023 Study Design is the current one for Units 3-4 assessment from 2024 onwards; confirm any in-year updates via Notice to Schools. Re-check the live study design, examination specifications and any Notice to Schools on https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/english-and-english-additional-language/english-and-english-additional-language-eal before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Reading texts without taking practice notes — VCE English analytical responses depend on a working vocabulary of language features and quotes; without regular note-taking, the end-of-year examination cannot be answered well.',
    'Treating Creating Texts as a once-off composition task — the 2023 Study Design expects a portfolio approach; one strong piece is not enough to evidence sustained craft.',
    'Misreading the Analysing Argument brief — students confuse it with Reading and Responding to texts and produce literary analysis instead of argument analysis.',
    'Ignoring the difference between mainstream English and English as an Additional Language — the EAL course is structured differently and its outcomes and SAC rubrics are aligned to EAL students, not mainstream English.',
    'Failing to confirm the live Examination Specifications — the timing, weighting and section structure for the Units 3-4 English examination are published annually and may shift year to year; the November Notice to Schools carries any in-year changes.',
    'Skipping the language features vocabulary — the marking scheme rewards precise language features terminology (tone, register, modality, visual composition) rather than general statements about a text.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/english-and-english-additional-language/english-and-english-additional-language-eal',
};

export default exam;