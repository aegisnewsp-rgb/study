import type { ExamTemplate, Subject } from '../types';

import { hpatSubject } from './subjects/hpat';

const subjects: Subject[] = [
    hpatSubject,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'hpat',
  examName: 'HPAT-Ireland (Health Professions Admission Test)',
  country: 'ireland',
  description: 'HPAT-Ireland is a 2.5-hour computer-based test used by the Irish medical schools (RCSI, UCD, TCD) and the University of Limerick (UL) as part of the selection process for undergraduate medicine and (at UL only) Occupational Therapy and Speech and Language Therapy. It is set by the Australian Council for Educational Research (ACER) on behalf of the participating universities. The test does not draw on any specific academic curriculum; it assesses general skills - logical reasoning, problem solving, interpersonal understanding and non-verbal reasoning - acquired over a period of time. The HPAT score is combined with the Leaving Certificate points to produce a final selection score; weights differ between universities and must be confirmed each cycle.',
  examPattern: 'Three separately-timed sections for standard applicants: Section 1 - Logical Reasoning and Problem Solving (44 questions, 65 minutes); Section 2 - Interpersonal Understanding (36 questions, 45 minutes); Section 3 - Non-Verbal Reasoning (32 questions, 40 minutes). UL applicants for MSc Occupational Therapy and MSc Speech and Language Therapy also sit Section 4 - Written English (two short written tasks) within the same sitting. Each multiple-choice question has four or five response alternatives with a single correct answer. The HPAT score is scaled and reported by ACER; results are released in early summer. Confirm the live section durations, question counts and any in-year structural changes on hpat-ireland.acer.org before planning.',
  eligibility: 'HPAT-Ireland is open to Leaving Certificate applicants, mature applicants, and graduates applying to participating Irish universities for medicine (RCSI, UCD, TCD), or for UL Occupational Therapy and Speech and Language Therapy. Candidates must register separately for the HPAT (separate fee, separate registration window) in addition to the CAO application; a CAO number is required to register for HPAT. There is no minimum Leaving Certificate grade required to sit HPAT, but candidates must meet the matriculation and subject-specific requirements of their chosen course on CAO. ACER publishes the registration window and fee each cycle on hpat-ireland.acer.org; late registrations are not accepted.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HPAT-Ireland - 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HPAT-Ireland - 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HPAT-Ireland - 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HPAT-Ireland - 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HPAT-Ireland - 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HPAT-Ireland - 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HPAT-Ireland - 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HPAT-Ireland - 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HPAT-Ireland - 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HPAT-Ireland - 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HPAT-Ireland - 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HPAT-Ireland - 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HPAT-Ireland - 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HPAT-Ireland - 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HPAT-Ireland - 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HPAT-Ireland - 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HPAT-Ireland - 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HPAT-Ireland - 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for HPAT-Ireland',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on Section 1 Logical Reasoning and Problem Solving (44 questions in 65 minutes - the highest-weight section), then a timed Section 3 Non-Verbal Reasoning practice, then a Section 2 Interpersonal Understanding practice. The official ACER Practice Tests are the only published real questions and should drive all drill work.',
  },
  prepOverview:
    'HPAT-Ireland preparation is built on familiarisation rather than content memorisation, because the test does not draw on any specific syllabus. The productive pattern is: work through the official ACER Practice Tests first (the only source of real past questions), then expand to additional ACER preparation materials, then build timed practice in 65/45/40-minute blocks matching each section\'s structure. Section 1 Logical Reasoning and Problem Solving carries the most questions and the longest time allocation, so it deserves the largest revision block; Section 3 Non-Verbal Reasoning improves most through repeated timed exposure; Section 2 Interpersonal Understanding rewards wide and critical reading rather than last-minute cramming. A small Section 4 (Written English) only applies to UL applicants for the two named courses - it is automatically scored against linguistic criteria and is best prepared with short timed written pieces. For three-month plans, target three full timed runs of the entire test plus section-specific drills; for six-month plans, layer weekly practice runs before the final pre-test week. Always re-check the live registration window, fee, section durations and the participating universities\' final score-combination rules on https://hpat-ireland.acer.org/ before committing a revision plan to a student (ireland).',
  commonMistakes: [
    'Leaving HPAT registration to the last week - ACER does not accept late registrations and the test is offered once per year in late winter or early spring.',
    'Studying for a specific body of knowledge - HPAT does not draw on a curriculum, so content revision has little benefit; the gain comes from question-style familiarity and pacing.',
    'Spending equal time on all three sections - Section 1 has the longest allocation and the most questions, so a 1:1:1 plan under-revises it.',
    'Using third-party HPAT materials as the primary source - only ACER\'s published Practice Tests are real past questions; other providers offer practice items of varying alignment.',
    'Not running timed practice - the section time limits are tight (65/45/40 minutes) and pacing under timed conditions is the single largest improvement lever.',
    'Forgetting the CAO application - HPAT scores are combined with CAO Leaving Certificate points, so a candidate who misses the CAO timeline forfeits the HPAT attempt for the cycle.',
    'Forgetting that Section 4 (Written English) is only for UL applicants for the named courses - most medical applicants do not sit it, but the UL candidates must.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://hpat-ireland.acer.org/',
};

export default exam;
