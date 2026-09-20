import type { ExamTemplate, Subject } from '../types';

import { ucatAnz } from './subjects/ucat-anz';

const subjects: Subject[] = [
    ucatAnz,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ucat-anz-nz',
  examName: 'UCAT ANZ (University Clinical Aptitude Test) - New Zealand',
  country: 'newzealand',
  description: 'The UCAT ANZ is a computer-based admissions test used by the University of Auckland and the University of Otago for entry to undergraduate medicine, dentistry and some clinical science courses in New Zealand. The UCAT ANZ Consortium (a group of universities operating in partnership with Pearson VUE) owns and administers the test. As of the 2025 test cycle the test consists of four subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning and Situational Judgement. The UCAT ANZ is sat by New Zealand students typically in Year 13 (or the first year of a gap year).',
  examPattern: 'The standard UCAT ANZ test is computer-based and consists of four separately timed subtests: Verbal Reasoning (target testing time 21 minutes), Decision Making (target testing time 31 minutes), Quantitative Reasoning (target testing time 24 minutes) and Situational Judgement (target testing time 26 minutes). Each subtest is preceded by a one-minute instruction section. The on-screen calculator is available in Quantitative Reasoning. Confirm the live subtest question counts, timings and any extended-testing arrangements on ucat.edu.au before each cycle.',
  eligibility: 'The UCAT ANZ is open to candidates whose educational level is considered equivalent to Year 12 (or higher) and who intend to apply for entry to a participating university in New Zealand or Australia. Candidates typically sit the UCAT ANZ in July-August of Year 13 (or equivalent). Registration is via the UCAT ANZ website and requires a Pearson VUE test booking. In New Zealand, UCAT ANZ is used by the University of Auckland (Faculty of Medical and Health Sciences) and the University of Otago (Otago Medical School). Confirm the live eligibility rules, registration deadlines and the list of participating universities on ucat.edu.au.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UCAT ANZ (New Zealand) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UCAT ANZ (New Zealand) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UCAT ANZ (New Zealand) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UCAT ANZ (New Zealand) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UCAT ANZ (New Zealand) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UCAT ANZ (New Zealand) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UCAT ANZ (New Zealand) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UCAT ANZ (New Zealand) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UCAT ANZ (New Zealand) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UCAT ANZ (New Zealand) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UCAT ANZ (New Zealand) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UCAT ANZ (New Zealand) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UCAT ANZ (New Zealand) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UCAT ANZ (New Zealand) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UCAT ANZ (New Zealand) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UCAT ANZ (New Zealand) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UCAT ANZ (New Zealand) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UCAT ANZ (New Zealand) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UCAT ANZ (New Zealand)',
    duration: '2d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritise Verbal Reasoning, Decision Making and Quantitative Reasoning (the three cognitive subtests). Drill the UCAT ANZ official practice tests and free preparation resources on ucat.edu.au.',
  },
  prepOverview:
    'UCAT ANZ preparation for New Zealand medical and dental school entry is best built around timed practice with the four subtests. The productive pattern is to start with Verbal Reasoning and Quantitative Reasoning (the most familiar subtest styles), then move to Decision Making (which has the longest per-item time but tests logical reasoning that Year 13 students often have less practice with), and finish with Situational Judgement (which has the most items but no prior knowledge required). The single highest-leverage habit is timed practice against the official UCAT ANZ practice tests on ucat.edu.au. The UCAT ANZ Consortium removed Abstract Reasoning from the 2025 cycle onwards; New Zealand students preparing from 2025 onwards should not allocate time to AR practice. In New Zealand, UCAT ANZ scores are used by the University of Auckland (Faculty of Medical and Health Sciences) and the University of Otago (Otago Medical School) - confirm the weight given to UCAT ANZ relative to NCEA results, interviews, and the Undergraduate Medicine and Health Sciences Admission Test (UMAT legacy) on each university\'s admissions page. Re-check the live test format and any free preparation resources on https://www.ucat.edu.au/about-ucat-anz/test-format/ before committing a revision plan to a student (newzealand).',
  commonMistakes: [
    'Practising only without timing - the UCAT ANZ is heavily time-pressured and untimed practice trains slow habits; every drill must run against the official per-subtest time.',
    'Skipping Decision Making because it looks like an English task - Decision Making tests logical reasoning, not reading; over-reading the prompt wastes time.',
    'Forgetting that Quantitative Reasoning has an on-screen calculator - but typing in calculations is slow; mental arithmetic and estimation should be the default, with the calculator used to verify.',
    'Reading every Situational Judgement scenario twice - SJT scenarios are dense; first-pass reading for the key conflict then refer back is faster than re-reading.',
    'Studying for Abstract Reasoning after the 2025 change - Abstract Reasoning was removed from the UCAT ANZ in 2025; studying it now wastes time.',
    'Booking the test late - Pearson VUE test centres in New Zealand fill quickly in July-August; late bookings may force travel to a distant centre or miss preferred sitting dates.',
    'Assuming UCAT ANZ is the only admissions hurdle - the University of Auckland and University of Otago also use interviews (MMI) and academic results; UCAT ANZ is one part of a multi-stage process.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.ucat.edu.au/about-ucat-anz/test-format/',
};

export default exam;
