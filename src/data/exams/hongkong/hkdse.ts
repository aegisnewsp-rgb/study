import type { ExamTemplate, Subject } from '../types';

import { hkdseMathematics } from './subjects/hkdse-mathematics';
import { hkdseEnglish } from './subjects/hkdse-english';
import { hkdseCsd } from './subjects/hkdse-csd';
import { hkdseBiology } from './subjects/hkdse-biology';
import { hkdseChemistry } from './subjects/hkdse-chemistry';
import { hkdsePhysics } from './subjects/hkdse-physics';
import { hkdseEconomics } from './subjects/hkdse-economics';

const subjects: Subject[] = [
  hkdseMathematics,
  hkdseEnglish,
  hkdseCsd,
  hkdseBiology,
  hkdseChemistry,
  hkdsePhysics,
  hkdseEconomics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'hkdse',
  examName: 'Hong Kong Diploma of Secondary Education (HKDSE)',
  country: 'hongkong',
  description: "The Hong Kong Diploma of Secondary Education Examination (HKDSE) is the public examination sat at the end of the three-year senior secondary course (Secondary 6) in Hong Kong schools. It is set and awarded by the Hong Kong Examinations and Assessment Authority (HKEAA) under the Hong Kong Examinations and Assessment Authority Ordinance (Cap. 261). The HKDSE replaced the Hong Kong Certificate of Education Examination (HKCEE) and the Hong Kong Advanced Level Examination (HKALE) from the first cohort in 2012. Category A subjects include four core subjects (Chinese Language, English Language, Mathematics and Citizenship and Social Development, the last replacing Liberal Studies from the 2024 examination) and a wide range of elective subjects. The qualification is required for admission to UGC-funded degree programmes via JUPAS, to self-financing programmes, and is recognised internationally for undergraduate admission.",
  examPattern: "Category A subjects are assessed through public examination and School-based Assessment (SBA). Most Category A subjects follow a Public Examination + SBA model, with the Public Examination usually weighted 80-85% and SBA 15-20%. The Compulsory Part of Mathematics is typically assessed through two papers (Paper 1 conventional, 65%; Paper 2 multiple-choice, 35%); the Extended Part Modules 1 and 2 are each a single 2.5-hour paper. English Language has four papers (Reading 20%, Writing 25%, Listening and Integrated Skills 30%, Speaking 10%) plus SBA (15%) using a graded approach with Part A compulsory and Part B1/B2 choice. Most elective subjects follow a two-paper pattern (Paper 1 compulsory part, Paper 2 elective part) plus SBA. Re-check the live paper pattern, SBA regulations, and any in-year changes on https://www.hkeaa.edu.hk/ before planning.",
  eligibility: "Students enrolled in a Hong Kong secondary school offering the senior secondary curriculum, or qualified private candidates, are eligible to sit the HKDSE. Most candidates sit the examination at the end of Secondary 6 at age 17-18, having completed the three-year senior secondary course. Private candidates are typically school leavers, mature applicants, or students studying a non-HKDSE curriculum at a registered Hong Kong school. Special arrangements are available for candidates with documented special educational needs. Candidates must register through their school or as a private candidate via the HKEAA Online Registration system during the published registration window (typically September-October each year). Always confirm the latest eligibility rules, registration deadlines, and SBA requirements on https://www.hkeaa.edu.hk/ before submission.",
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HKDSE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HKDSE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HKDSE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HKDSE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HKDSE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HKDSE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HKDSE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HKDSE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HKDSE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HKDSE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HKDSE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HKDSE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HKDSE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HKDSE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HKDSE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HKDSE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HKDSE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HKDSE — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the HKDSE',
    duration: '1d',
    focusAreas: [
      { subject: 'Mathematics (Compulsory Part)', topics: ['Number and Algebra — Quadratic Equations and Functions', 'Number and Algebra — Polynomials, Equations and Sequences', 'Measures, Shape and Space — Geometry of Circles', 'Data Handling — Probability and Statistics'] },
      { subject: 'English Language', topics: ['Paper 1 — Reading (20%, 1.5 hours)', 'Paper 2 — Writing (25%, 2 hours)', 'Paper 3 — Listening and Integrated Skills (30%, about 2 hours)'] },
      { subject: 'Citizenship and Social Development', topics: ['Theme 1 — Hong Kong under "One Country, Two Systems"', 'Theme 2 — Our Country since Reform and Opening-up', 'Theme 3 — Economic Globalisation and Technology'] }
    ],
    strategy: "Spend the largest block on the core subjects — Mathematics, English Language and Citizenship and Social Development — because these are sat by every HKDSE candidate and gate JUPAS admission. In the elective subjects, lock down the highest-weight topics first (Biology and Physics: I and II; Chemistry: IX and X; Economics: C and D). Re-check the live paper pattern and SBA requirements on hkeaa.edu.hk before committing.",
  },
  prepOverview:
    "HKDSE preparation follows the published HKEAA Assessment Framework for each Category A subject, layered with the three-year senior secondary curriculum published by the EDB and CDC. The productive study pattern is: lock down the four core subjects (Chinese, English, Mathematics, CSD) first because every HKDSE candidate sits these and they gate JUPAS admission, then add the elective subjects in the candidate's chosen path (sciences, business, humanities, arts). For the Mathematics Compulsory Part, weight-sorted study starts with Number and Algebra (Quadratic Equations, Functions, Polynomials, Equations and Sequences) — the largest paper-1 strand — followed by Measures, Shape and Space and Data Handling; Extended Part Module 1 (Calculus and Statistics) and Module 2 (Algebra and Calculus) are optional and depend on the candidate's JUPAS programme choice. For English Language, drill the four papers plus the SBA reading/viewing programme; the Part A/B1/B2 graded approach on Papers 1 and 3 means choosing Part B1 caps the attainable grade at Level 4. For Citizenship and Social Development, the single 2-hour paper tests the three themes — Hong Kong under One Country Two Systems, Our Country since Reform and Opening-up, and Interconnected Contemporary World — plus data-response items. For elective subjects (Biology, Chemistry, Physics, Economics), use the HKEAA past papers and the briefing-session exemplar questions as the question-style reference; third-party HKDSE books vary in question alignment. For three-month plans, target one full past paper per core subject plus a mock cycle; for six-month plans, layer a content pass before the mock cycle. Always re-check the live Subject Assessment Frameworks, SBA regulations, the National Security Education framework (updated 2025), and any in-year changes on https://www.hkeaa.edu.hk/ before committing a revision plan to a student (hong kong).",
  commonMistakes: [
    "Choosing Part B1 instead of Part B2 in the HKDSE English Language Paper 1 Reading or Paper 3 Listening and Integrated Skills without realising the grade cap — Part B1 caps the attainable level at 4, while Part B2 is required for the full Level 5 range.",
    "Studying only the Compulsory Part of HKDSE Mathematics when applying for JUPAS science, engineering, business or economics programmes that expect or weight Extended Part Module 1 (Calculus and Statistics) or Module 2 (Algebra and Calculus).",
    "Under-preparing for the Citizenship and Social Development paper by treating it as a memorisation-only subject — CSD tests data-response skills and the ability to apply concepts, not just recall facts about One Country Two Systems or the Belt and Road Initiative.",
    "Treating HKDSE Biology/Chemistry/Physics as a single combined-science block — each subject has its own Compulsory Part topics and Elective Part topics with very different weightings.",
    "Leaving SBA components (English Language reading/viewing programme; Science practical skills and investigative work) until the final term — SBA contributes 15-20% of the subject mark and is assessed in S5 and S6.",
    "Using unofficial HKDSE past papers instead of the official HKEAA past papers and the briefing-session exemplar questions — the live paper format and the Part A/B1/B2 graded approach change in-year, and unofficial materials drift from the live format.",
    "Ignoring the HKDSE Mathematics assessment framework updates — the Compulsory Part was revised for progressive implementation from S4 in the 2023/24 school year, and the live weighting on hkeaa.edu.hk must be re-checked each cycle.",
    "Choosing elective subjects in S4 without reference to JUPAS programme prerequisites — some programmes require specific electives (e.g. Physics for Engineering; Biology or Chemistry for Medicine and Life Sciences).",
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.hkeaa.edu.hk/',
};
export default exam;