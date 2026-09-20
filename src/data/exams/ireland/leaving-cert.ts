import type { ExamTemplate, Subject } from '../types';

import { lcMathematics } from './subjects/lc-mathematics';
import { lcEnglish } from './subjects/lc-english';
import { lcBiology } from './subjects/lc-biology';
import { lcGaeilge } from './subjects/lc-gaeilge';

const subjects: Subject[] = [
    lcMathematics,
    lcEnglish,
    lcBiology,
    lcGaeilge,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'leaving-cert',
  examName: 'Leaving Certificate (Established)',
  country: 'ireland',
  description: 'The Leaving Certificate (Established) is the two-year senior-cycle examination taken by students in Ireland at the end of sixth year, typically at age 17-18. It is set by the National Council for Curriculum and Assessment (NCCA), with the State Examinations Commission (SEC) administering the examinations each June. Most students take six to eight subjects (one of which must be Irish unless exempted); English, Irish and Mathematics are the only mandatory subjects, and most subjects are assessed at Ordinary and Higher level, with Foundation level only available for Mathematics and Irish. The qualification feeds directly into CAO points for entry to Irish Higher Education Institutions and is also recognised internationally for undergraduate admission.',
  examPattern: 'Subjects are examined by terminal written examination in June of sixth year. Most subjects run for the final two years (fifth year and sixth year); Mathematics and some Applied subjects also include a coursework or project component. Higher level Mathematics carries 25 CAO bonus points for grade H6 or above. There is no common Leaving Certificate paper; each subject has its own paper pattern (durations and marks) published by the State Examinations Commission. From September 2025, a redeveloped specification is being phased in for Biology, Chemistry, Physics, Business and a number of other subjects; English, Irish and Mathematics specifications are in development with first examinations no earlier than 2027. Confirm the live paper pattern and the redevelopment schedule on gov.ie and curriculumonline.ie before planning.',
  eligibility: 'The Leaving Certificate (Established) is taken by students in the final year of senior cycle in Irish post-primary schools (recognised by the Department of Education and Youth), by Further Education and Training (FET) learners and by approved private candidates registered through the State Examinations Commission. There is no statutory minimum age for a school candidate; private candidates must meet the published registration rules and sit the examinations at an approved centre. Reasonable accommodations are available for candidates with documented special educational needs, with applications routed through the school. Always confirm the latest eligibility rules, exemption rules for Irish, and the registration deadlines on examinations.ie and gov.ie before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Leaving Certificate (Established) - 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Leaving Certificate (Established) - 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Leaving Certificate (Established) - 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Leaving Certificate (Established) - 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Leaving Certificate (Established) - 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Leaving Certificate (Established) - 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Leaving Certificate (Established) - 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Leaving Certificate (Established) - 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Leaving Certificate (Established) - 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Leaving Certificate (Established) - 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Leaving Certificate (Established) - 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Leaving Certificate (Established) - 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Leaving Certificate (Established) - 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Leaving Certificate (Established) - 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Leaving Certificate (Established) - 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Leaving Certificate (Established) - 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Leaving Certificate (Established) - 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Leaving Certificate (Established) - 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Leaving Certificate (Established)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on Higher Level Mathematics (Functions and Algebra carry the most marks across the two Higher papers), then on English Paper 1 (composing) and Biology Paper 2 (the bulk of the experiment-and-investigation mark). Confirm the live paper pattern on examinations.ie before committing.',
  },
  prepOverview:
    'Leaving Certificate preparation is weight-ordered across the candidate\'s chosen subjects. The productive pattern is: lock down the mandatory trio (Mathematics, English, Irish) first as the foundation of any CAO aggregate, then layer the optional subjects in priority order based on the candidate\'s university course. Higher Level Mathematics is doubly important - it carries 25 CAO bonus points for grade H6 or above in addition to its mark weight. Use the official NCCA syllabus PDFs as the question-style reference (curriculumonline.ie hosts every current subject specification) and the State Examinations Commission past papers as the closest match to the live paper style; third-party grind schools vary in tier alignment. For three-month plans, target two full past papers per Higher Level subject plus the Mathematics Project; for six-month plans, layer a full content pass before the mock cycle. Always re-check the live paper pattern, the redevelopment schedule (new Biology, Chemistry, Physics, Business specifications are being phased in from September 2025; English, Irish and Mathematics specifications are in development) and any in-year rule changes on https://www.curriculumonline.ie/senior-cycle/ and https://www.gov.ie/en/department-of-education/ before committing a revision plan to a student (ireland).',
  commonMistakes: [
    'Choosing Higher Level Mathematics only for the 25 CAO bonus points without confirming the candidate can sustain the higher-grade mark range - H6 is the threshold, not H7.',
    'Leaving the Mathematics Project or any required coursework until the last fortnight - it is internally marked and feeds into the final grade.',
    'Studying only past paper questions without working through the strand structure - the NCCA syllabus lists each strand\'s learning outcomes and gaps there show up as avoidable marks.',
    'Using Higher Level past papers when entered for Ordinary, or vice versa - question depth and the mark schedule differ across levels.',
    'Skipping the prescribed text list in English and the prescribed prose / poetry in Irish - the SEC paper draws exclusively from the published list for the candidate\'s exam year.',
    'Ignoring the redevelopment schedule - the new Biology, Chemistry, Physics and Business specifications apply to the 2025 fifth-year cohort (first examination 2027) and the question style shifts where they apply.',
    'Treating Foundation Level Mathematics as equivalent to Ordinary Level for CAO purposes - Foundation contributes 0 points to the aggregate, so most Level 8 courses remain out of reach.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.curriculumonline.ie/senior-cycle/',
};

export default exam;
