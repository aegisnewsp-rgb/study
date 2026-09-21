import type { ExamTemplate, Subject } from '../types';

import { qsscMathematics } from './subjects/qssc-mathematics';
import { qsscEnglish } from './subjects/qssc-english';
import { qsscIslamicStudies } from './subjects/qssc-islamic-studies';

const subjects: Subject[] = [
    qsscMathematics,
    qsscEnglish,
    qsscIslamicStudies,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'qatar-secondary-certificate',
  examName: 'Qatar General Secondary Education Certificate',
  country: 'qatar',
  description: 'The Qatar General Secondary Education Certificate (Shahadat Al-Thanawiyya Al-\'Amma) is the three-year upper-secondary qualification taken at the end of Grade 12 in the State of Qatar. It is set and awarded by the Ministry of Education and Higher Education (MoEHE), with the Examination Affairs Sector administering the terminal examinations each June. Candidates are streamed at upper secondary into four published tracks: the Scientific Track (مسار علمي, daytime and adult-education variants), the Arts and Humanities Track (مسار آداب وإنسانيات, daytime and adult-education variants), the Technological Track (مسار تكنولوجي), and parallel education. The 2024-2025 cycle recorded a Scientific Track daytime pass rate of around 85-90 percent and an Arts and Humanities Track daytime pass rate of around 79-82 percent. The certificate is required for admission to Qatar University and the universities of the Qatar Foundation Education City cluster, and is recognised internationally for undergraduate admission as the equivalent of UK A-Levels, US High School Diploma, or other upper-secondary qualifications depending on track.',
  examPattern: 'Terminal written examinations administered by the MoEHE Examination Affairs Sector across 80-plus examination centres each June. Each subject has its own paper pattern, duration and mark weight set by the Scientific Subjects and Literary Subjects Evaluation Departments of the MoEHE Student Evaluation Department. The Scientific Track carries the heaviest Mathematics and Sciences weighting; the Arts and Humanities Track places more weight on Arabic, Islamic Studies, English and Social Studies; the Technological Track connects academic study with technology-oriented learning. From the 2026-2027 academic year the MoEHE has unified the Grade 10 science curriculum (physics, chemistry and biology) and is introducing a new sciences pathway. Re-check the live paper pattern, the track-specific subject list, and any in-year regulation changes on https://www.edu.gov.qa/ before planning.',
  eligibility: 'Students enrolled at a Qatari public secondary school or a recognised private secondary school offering the MoEHE national curriculum sit the terminal examinations administered by the MoEHE. Most candidates complete the three-year secondary cycle at age 17-18. Private candidates and transfers from international curricula apply through the Examination Affairs Sector at the MoEHE headquarters. Reasonable accommodations are available for candidates with documented special educational needs. Always confirm the latest eligibility rules, track-change rules, and registration deadlines on https://www.edu.gov.qa/ before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Qatar General Secondary Education Certificate — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Qatar General Secondary Education Certificate — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Qatar General Secondary Education Certificate — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Qatar General Secondary Education Certificate — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Qatar General Secondary Education Certificate — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Qatar General Secondary Education Certificate — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Qatar General Secondary Education Certificate — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Qatar General Secondary Education Certificate — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Qatar General Secondary Education Certificate — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Qatar General Secondary Education Certificate — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Qatar General Secondary Education Certificate — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Qatar General Secondary Education Certificate — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Qatar General Secondary Education Certificate — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Qatar General Secondary Education Certificate — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Qatar General Secondary Education Certificate — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Qatar General Secondary Education Certificate — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Qatar General Secondary Education Certificate — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Qatar General Secondary Education Certificate — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Qatar General Secondary Education Certificate',
    duration: '1d',
    focusAreas: [
      { subject: 'Mathematics', topics: ['Algebra — Quadratics and Polynomials', 'Calculus — Differentiation', 'Calculus — Integration and Differential Equations'] },
      { subject: 'English Language', topics: ['Writing — Communicating, Organising and Register', 'Reading — Comprehension, Vocabulary and Strategies', 'Grammar and Vocabulary in Context'] },
      { subject: 'Islamic Studies', topics: ['Quran — Surah Al-Hashr Memorisation and Surah Aal Imran Tafsir', 'Hadith — Ittqa\' al-Shubuhat and Qimat al-Ata\'', 'Fiqh — Ahkam al-Jihad and Masadir al-Tashri\''] }
    ],
    strategy: 'Spend the largest block on Mathematics Algebra and Calculus (the heaviest single strand at Grade 12 advanced at ~69 percent of the Mathematics paper), then on English Writing (the strongest band differentiator and the strand most candidates can move up quickly with focused practice), then on Islamic Studies Quran and Hadith modules (the most mark-loaded modules in the Term 1 + Term 2 textbook). Confirm the live terminal paper pattern on https://www.edu.gov.qa/ before committing.',
  },
  prepOverview:
    'Qatar General Secondary Education Certificate preparation follows the MoEHE tracks and the official terminal-exam pattern published by the Examination Affairs Sector. The productive pattern is: lock down the heaviest strand of each subject first (Mathematics Algebra and Calculus at ~69 percent, English Writing at the highest band discriminator), then layer the remaining strands in priority order based on the chosen track. Use the MoEHE Curriculum Standards documents (Mathematics 2018 standards, English K-12 standards) and the MoEHE-issued Grade 12 textbooks as the question-style reference; third-party Thanawiyya Qatar books vary in question alignment with the live MoEHE paper. For three-month plans, target at least one full past paper per subject plus a track-specific revision cycle; for six-month plans, layer a full content pass before the mock cycle. From the 2026-2027 academic year the MoEHE has introduced a new unified Grade 10 science curriculum and is updating the Grade 12 sciences pathway — confirm the candidate\'s school\'s track status, the live subject list, and any in-year rule changes on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).',
  commonMistakes: [
    'Assuming the Scientific and Arts/Humanities Tracks are still the only routes — from 2026-2027 the MoEHE has introduced a new unified science pathway at Grade 10 and is updating the Grade 12 sciences track, so the subject list at terminal level depends on the chosen track and year.',
    'Studying only past papers without working through the MoEHE Curriculum Standards for Mathematics strand structure — gaps in Algebra and Calculus show up as avoidable marks on the terminal paper, where the strand carries the majority of the marks.',
    'Treating English Reading and Writing as separate skills instead of using the Grade 12 CEFR B2 exit descriptor as the integrated target — the MoEHE English standards publish Reading and Writing together at the Grade 12 exit level.',
    'Leaving Islamic Studies Quran memorisation until the last fortnight — the Term 1 module (Surah Al-Hashr memorisation and Surah Aal Imran tafsir) carries the most mark-loaded Quran content and feeds directly into the terminal paper.',
    'Choosing the Scientific Track without confirming the prerequisite mark — most medical, engineering and science programmes at Qatar University require the qualifying five subjects (Biology, Chemistry, Physics, Mathematics and English) at a minimum grade.',
    'Using unofficial "Thanawiyya Qatar" prep books instead of the MoEHE-issued textbook — the live terminal question style is published by the MoEHE Scientific and Literary Subjects Evaluation Departments, and third-party materials drift from the official format.',
    'Ignoring the new unified Grade 10 science curriculum introduced from 2026-2027 — physics, chemistry and biology are now taught as a unified science, and candidates entering Grade 11 from this cohort will see terminal content shaped by the new framework.'
  ],
  lastUpdated: '2026-09-21',
  officialSource: 'https://www.edu.gov.qa/',
};
export default exam;
