// Higher School Certificate (HSC) — English Advanced.
// Awarding body: NSW Education Standards Authority (NESA).
// Syllabus: English Advanced 11–12 Syllabus (2024), replacing the English
// Advanced Stage 6 Syllabus (2017). Year 11 implementation from 2025;
// Year 12 from 2026, with Year 12 teaching of the new syllabus beginning in
// Term 4 of 2026; the first HSC examination for the new syllabus is in 2027.
// Official source: https://curriculum.nsw.edu.au/learning-areas/english/english-advanced-11-12-2024/overview/course
// English is the only mandatory HSC course for the award of the Higher School
// Certificate; students who choose English Advanced rather than English Standard
// typically intend an ATAR English result and have a stronger pattern of Stage 5
// English achievement. Re-check the prescribed text list and any in-year
// changes to the syllabus on curriculum.nsw.edu.au.

import type { ExamTemplate, Subject } from '../types';

import { hscEnglishAdvanced } from './subjects/hsc-english-advanced';

const subjects: Subject[] = [
    hscEnglishAdvanced,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'hsc-english-advanced',
  examName: 'HSC English Advanced (NESA 2024)',
  country: 'australia',
  description: 'English Advanced is one of four HSC English courses (English Standard, English Advanced, English Extension 1, English Extension 2) administered by the NSW Education Standards Authority (NESA). English is the only mandatory HSC course; English Advanced is the higher-tariff option chosen by students with strong Stage 5 English results who intend an ATAR English mark. The 2024 syllabus is organised across Year 11 focus areas (Reading to Write: Transition to English Advanced, Narratives that Shape our World, Critical Study of Literature) and Year 12 focus areas (Texts and Human Experiences, Textual Conversations, Critical Study of Literature, The Craft of Writing). The HSC examination is set by NESA, marked externally and contributes to the Australian Tertiary Admission Rank (ATAR).',
  examPattern: 'Year 11 Course: 120 indicative hours across three 40-hour units - Reading to write: Transition to English Advanced (first), Narratives that shape our world, and Critical study of literature. There are no prescribed texts in Year 11. Year 12 Course: 120 indicative hours across four 30-hour units - Texts and human experiences (first), Textual conversations, Critical study of literature, and The craft of writing. Students closely study 4 prescribed texts, drawing at least one each from prose fiction, poetry, and one of drama, nonfiction, film or media, with at least one authored by Shakespeare. HSC examination: two papers totalling 100 marks. Paper 1, Texts and human experiences: 40 marks, with 10 minutes reading time and 1 hour 30 minutes working time. Section I is 20 marks across Questions 1-5, about 45 minutes, answered on the paper; Section II is 20 marks for Question 6, about 45 minutes, answered in the Section II Writing Booklet. Paper 2: 60 marks, with 5 minutes reading time and 2 hours working time, split into three 20-mark sections of about 40 minutes each - Section I Textual conversations, Section II Critical study of literature, Section III The craft of writing - answered in the Paper 2 Writing Booklet. NESA states the structure of both papers is the same as the 2019 English Advanced papers, and that the first HSC examination under the 2024 syllabus will be held in 2027.',
  eligibility: 'English Advanced is a Board Developed Course at the Higher School Certificate level; it carries 2 units of credit toward the HSC. To be awarded the HSC, a student must complete Year 11 and Year 12 courses and sit the HSC English examination. There is no published prerequisite for English Advanced beyond Stage 5 English achievement; schools set their own placement policy. English Advanced may be studied alongside English Extension 1 in Year 11 and Year 12, and a small number of high-achieving students add English Extension 2 in Year 12. Results are reported against standards (Band 1 - Band 6, with Band 6 the highest) and contribute to the ATAR via UAC scaling.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HSC English Advanced — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HSC English Advanced — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HSC English Advanced — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HSC English Advanced — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HSC English Advanced — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HSC English Advanced — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HSC English Advanced — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HSC English Advanced — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HSC English Advanced — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HSC English Advanced — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HSC English Advanced — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HSC English Advanced — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HSC English Advanced — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HSC English Advanced — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HSC English Advanced — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HSC English Advanced — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HSC English Advanced — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HSC English Advanced — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for HSC English Advanced',
    duration: '3d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(3, 7).map(t => t.name),
    })),
    strategy: 'Prioritise the Year 12 modules (Texts and Human Experiences, Textual Conversations, Critical Study of Literature, The Craft of Writing). Re-read the prescribed texts with HSC sample responses; drill Paper 1 Section II composition forms (imaginative, discursive, persuasive).',
  },
  prepOverview:
    'HSC English Advanced is built around the prescribed text list and the Year 12 unit structure. The productive Year 11 pattern is to read widely and write in multiple forms to consolidate the language features studied in Reading to write and the critical apparatus needed for Critical study of literature, since Year 11 carries no prescribed texts. The productive Year 12 pattern is to read the four prescribed texts in the first half of Year 12, then drill composition and analytical response in timed conditions against the HSC examination specifications. Each examination paper has its own weighting, so timed practice should be split in the same proportion as the papers: Paper 1 is 40 marks and Paper 2 is 60 marks, and The craft of writing is examined in Paper 2 Section III rather than on Paper 1. NESA publishes the HSC English prescriptions in the relevant focus areas of the syllabus and a written examination specifications document for each course. The single highest-leverage habit is to write a full Paper 1 Section II composition under timed conditions every two weeks and to mark against the published HSC marking guidelines. Re-check the live prescribed text list, paper structure and school-based assessment requirements on https://curriculum.nsw.edu.au/learning-areas/english/english-advanced-11-12-2024/overview/course before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Treating English as the easy HSC subject — English Advanced demands sustained reading, regular composition, and a working knowledge of the prescribed text list, which is harder than Year 10 patterns suggest.',
    'Skipping the prescribed text list and improvising on a familiar text — the four prescribed texts are examinable, so any other material must be deliberately related to the prescribed work rather than examined in its own right.',
    'Writing discursive and persuasive compositions as one continuous paragraph — NESA expects clear paragraph structure, topic sentences and signposting, and the marking guidelines score these separately.',
    'Failing to quote from the prescribed text in analytical responses — unsupported generalities about a text cannot earn full marks in the textual analysis sections.',
    'Using a summary rather than an analysis as the opening paragraph in Paper 1 Section I — the unseen stimulus section rewards a thesis-driven response that integrates evidence from the stimulus, not a narrative of its content.',
    'Leaving The Craft of Writing composition practice to the last two weeks of Term 3 — the module requires a sustained writing habit across Year 12 and rewards students who regularly write in multiple forms.'
  ],
  lastUpdated: '2026-10-20',
  officialSource: 'https://curriculum.nsw.edu.au/learning-areas/english/english-advanced-11-12-2024/overview/course',
  conductingBody: 'NSW Education Standards Authority (NESA)',
};

export default exam;