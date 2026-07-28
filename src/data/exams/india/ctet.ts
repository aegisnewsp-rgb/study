import type { ExamTemplate, Subject } from '../types';

import { child_pedagogy } from './subjects/child-pedagogy';
import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { social } from './subjects/social';

const subjects: Subject[] = [
    child_pedagogy,
    english,
    mathematics,
    science,
    social,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ctet',
  examName: 'CTET',
  country: 'india',
  description: `The Central Teacher Eligibility Test (CTET) is a national-level examination conducted by the Central Board of Secondary Education (CBSE) to determine the eligibility of candidates for appointment as teachers for Classes I to VIII in schools governed by the Central government and schools under the NDMC, as well as schools aided by the central government. CTET is also recognized by many state governments and private schools as a benchmark for teacher recruitment. It assesses a candidate's knowledge of child development, pedagogy, language proficiency, mathematics, and environmental studies.`,
  examPattern: `CTET consists of two papers. Paper I is for candidates aspiring to teach Classes I to V and has five sections: Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics (30 questions), and Environmental Studies (30 questions). Paper II is for Classes VI to VIII and covers Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics and Science (60 questions) or Social Studies/Social Science (60 questions). Each paper has 150 MCQs of 1 mark each, to be completed in 150 minutes. There is no negative marking.`,
  eligibility: `For Paper I (Classes I-V): Candidates must have passed Senior Secondary (or its equivalent) with at least 50% marks and must have passed or be appearing in the final year of a 2-year Diploma in Elementary Education (D.El.Ed). For Paper II (Classes VI-VIII): Candidates must have graduation with at least 50% marks and must have passed or be appearing in the final year of a 1-year Bachelor of Education (B.Ed.) programme. Candidates with B.El.Ed., D.El.Ed., and D.Ed. qualifications from various states are also eligible.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CTET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CTET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CTET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CTET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CTET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CTET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CTET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CTET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CTET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CTET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CTET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CTET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CTET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CTET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CTET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CTET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CTET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CTET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CTET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'CTET (CBSE) tests Child Development & Pedagogy, languages, and subject content for Paper I (I–V) and/or Paper II (VI–VIII). Phase 1: CDP theories (Piaget, Vygotsky, Kohlberg, inclusive education) with classroom examples. Phase 2: pedagogy of languages and Maths/EVS or Maths/Science/Social Science as per paper choice. Phase 3: previous-year and full mocks; review wrong pedagogy items carefully — they are high-weight. Confirm paper choice, dates and validity on ctet.nic.in; use StudyRoadmap roadmaps for remaining weeks.',
  commonMistakes: [
    'Rote-memorising psychologist names without applying them to classroom scenarios.',
    'Ignoring language pedagogy while over-reading content-only subject books.',
    'Preparing the wrong paper (I vs II) relative to the classes you will teach.',
    'Skipping full-length timed papers and only doing topic quizzes.',
    'Trusting unofficial answer keys over NCERT-aligned pedagogy concepts.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ctet.nic.in',
};

export default exam;
