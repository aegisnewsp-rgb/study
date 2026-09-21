// Medical College Admission Test (MCAT) — Canadian applicants.
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The MCAT is a computer-based standardised exam required for
// admission to most US and Canadian medical schools. Canadian medical
// schools that require the MCAT include the schools at the University
// of Toronto, McMaster, McGill, University of British Columbia,
// University of Alberta, University of Calgary, Dalhousie, and others;
// always confirm the live requirement on the school's admissions page.
//
// Source: AAMC, What's on the MCAT Exam? (publication),
//   https://students-residents.aamc.org/whats-mcat-exam/publication-chapters/whats-mcat-exam
// Source: AAMC, MCAT content outline download,
//   https://students-residents.aamc.org/media/9261/download

import type { ExamTemplate, Subject } from '../types';

import { chemPhys } from './subjects/chem-phys';
import { cars } from './subjects/cars';
import { bioBiochem } from './subjects/bio-biochem';
import { psychSoc } from './subjects/psych-soc';

const subjects: Subject[] = [
    chemPhys,
    cars,
    bioBiochem,
    psychSoc,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'mcat-ca',
  examName: 'MCAT (Medical College Admission Test) — Canadian applicants',
  country: 'canada',
  description: 'The Medical College Admission Test (MCAT) is a computer-based standardised exam administered by the Association of American Medical Colleges (AAMC). It is required for admission to most US medical schools and to a growing number of Canadian medical schools, including those at the University of Toronto, McMaster, McGill, University of British Columbia, University of Alberta, University of Calgary, Dalhousie, and others. The MCAT tests the concepts and reasoning skills that medical school faculty rate as important for entering students, with content drawn from first-year university chemistry, physics, biology, biochemistry, psychology, and sociology. The exam is offered at international test centres including locations across Canada, with multiple administrations per year.',
  examPattern: 'Four multiple-choice sections, each scored on a 118-132 scale, totalling 472-528: (1) Chemical and Physical Foundations of Biological Systems (Chem/Phys), (2) Critical Analysis and Reasoning Skills (CARS), (3) Biological and Biochemical Foundations of Living Systems (Bio/Biochem), (4) Psychological, Social, and Biological Foundations of Behavior (Psych/Soc). The exam also includes a test-day certification, an optional tutorial, two optional ten-minute breaks, and an optional mid-exam lunch break. Confirm the live section length, total seat time, scoring scale, and break policy on the AAMC MCAT landing page before scheduling. CARS does not require content-specific science knowledge and tests comprehension and reasoning across humanities and social-science passages.',
  eligibility: 'No formal eligibility requirements for taking the MCAT. Candidates are typically in their final undergraduate year or have completed a bachelor\'s degree. Canadian applicants register through the AAMC MCAT Registration System and select an international test centre. There is no prerequisite coursework, but AAMC recommends a year each of general chemistry, organic chemistry, physics, biology, biochemistry, psychology, and sociology. Some candidates sit the MCAT in the summer between their third and fourth undergraduate years; confirm the live application window, fees, and test-centre availability on the AAMC MCAT Registration System.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MCAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MCAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MCAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MCAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MCAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MCAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MCAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MCAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MCAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MCAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MCAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MCAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MCAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MCAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MCAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MCAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MCAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MCAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the MCAT',
    duration: '2d',
    focusAreas: subjects.slice(0, 4).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Prioritise CARS practice (timed passages), the highest-yield Chem/Phys topics (Kinetics and Thermodynamics, Acid-Base and Electrochemistry), and a one-pass sweep of Bio/Biochem and Psych/Soc foundational concepts.',
  },
  prepOverview:
    'MCAT preparation for a Canadian applicant is typically a 3-6 month structured plan with content review first, then passage-based practice, then full-length AAMC practice exams under timed conditions. The content review covers first-year university chemistry, physics, biology, biochemistry, introductory psychology and sociology, and the four scientific inquiry and reasoning skills (SIRS). CARS is the highest-leverage section for most candidates and benefits from daily timed passage practice from the start of the plan. The AAMC MCAT Official Prep Hub and the Khan Academy MCAT collection are the standard free resources. Confirm the live scoring scale, section timing, registration window, and test-centre availability on https://students-residents.aamc.org/ and the AAMC MCAT Registration System before locking a study plan to a student (canada).',
  commonMistakes: [
    'Cramming CARS at the end of the plan — CARS is a reasoning skill that builds over months of daily practice, not a content review task.',
    'Using third-party full-length exams as the primary score predictor — only the AAMC official practice exams reflect the live exam\'s scoring and timing.',
    'Skipping the foundational concepts in Bio/Biochem and Psych/Soc in favour of memorising facts — the MCAT tests reasoning over memorisation.',
    'Treating the MCAT like an undergraduate science final — the MCAT integrates content across disciplines and tests application, not recall.',
    'Ignoring the SIRS skills (scientific inquiry and reasoning) when studying content — each science passage tests content AND reasoning skills together.',
    'Sitting the MCAT before completing the recommended coursework — the exam assumes first-year university chemistry, physics, biology, biochemistry, psychology, and sociology.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://students-residents.aamc.org/whats-mcat-exam/publication-chapters/whats-mcat-exam',
};

export default exam;
