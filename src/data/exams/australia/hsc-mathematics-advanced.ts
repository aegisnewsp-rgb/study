// Higher School Certificate (HSC) — Mathematics Advanced.
// Awarding body: NSW Education Standards Authority (NESA).
// Syllabus: Mathematics Advanced 11–12 Syllabus (2024), replacing the Stage 6
// Syllabus (2017). Year 11 implementation from 2025; Year 12 from 2026; first
// HSC examination for the new syllabus in 2026.
// Official source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview
// NESA overview page for the 2017 syllabus still published for reference:
// https://educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-mathematics/mathematics-advanced-stage-6-2017
// Re-check the live specification and any in-year assessment adjustments on
// curriculum.nsw.edu.au before committing a revision plan.

import type { ExamTemplate, Subject } from '../types';

import { hscMathematicsAdvanced } from './subjects/hsc-mathematics-advanced';

const subjects: Subject[] = [
    hscMathematicsAdvanced,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'hsc-mathematics-advanced',
  examName: 'HSC Mathematics Advanced (NESA 2024)',
  country: 'australia',
  description: 'Mathematics Advanced is one of three HSC mathematics courses (alongside Mathematics Standard and Mathematics Extension 1/2) administered by the NSW Education Standards Authority (NESA). It is the most common ATAR-contributing mathematics course for students aiming at science, engineering, commerce and mathematics degrees. The 2024 syllabus covers Functions, Trigonometric Functions, Exponential and Logarithmic Functions, Calculus, Statistical Analysis, Sequences and Series, and Financial Mathematics across Year 11 and Year 12. The HSC examination is set by NESA, marked externally, and contributes to the Australian Tertiary Admission Rank (ATAR) through the HSC and the UAC scaling process.',
  examPattern: 'Year 11 Course: 4 school-based assessment tasks across the year covering Functions, Trigonometric Functions, Exponential and Logarithmic Functions, Calculus and Statistical Analysis. Year 12 Course: HSC examination at the end of Year 12 (Term 4, typically October-November). The HSC examination consists of two written papers, each weighted 50%, both of which allow approved calculators. Paper 1 is 2 hours 10 minutes plus 5 minutes reading time; Paper 2 is 2 hours 10 minutes plus 5 minutes reading time. Both papers contain a mix of short-response questions and longer structured questions and assess the seven Areas of Study plus Working Mathematically. A small number of questions may be common to Mathematics Advanced and Mathematics Extension 1. Confirm the live paper structure, calculator policy and approved calculator list on the NESA Mathematics Advanced syllabus page before each examination cycle.',
  eligibility: 'To be awarded the HSC, a student must complete Year 11 and Year 12 courses and sit the HSC examination. There is no prerequisite for Mathematics Advanced at the school level beyond satisfactory completion of Stage 5 Mathematics. Schools make the Mathematics Standard vs Mathematics Advanced placement decision, normally at the end of Year 10, based on student achievement, the school\'s mathematics placement policy and post-school aspirations. Students who find the Year 11 course demanding may transfer to Mathematics Standard 2 at the end of Year 11. Mathematics Advanced is an ATAR course; results are reported against standards (Band 1 - Band 6, with Band 6 the highest) and converted to an HSC mark and a scaled ATAR mark.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HSC Mathematics Advanced — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HSC Mathematics Advanced — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HSC Mathematics Advanced — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HSC Mathematics Advanced — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HSC Mathematics Advanced — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HSC Mathematics Advanced — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HSC Mathematics Advanced — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HSC Mathematics Advanced — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HSC Mathematics Advanced — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HSC Mathematics Advanced — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HSC Mathematics Advanced — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HSC Mathematics Advanced — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HSC Mathematics Advanced — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HSC Mathematics Advanced — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HSC Mathematics Advanced — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HSC Mathematics Advanced — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HSC Mathematics Advanced — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HSC Mathematics Advanced — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for HSC Mathematics Advanced',
    duration: '3d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 4).map(t => t.name),
    })),
    strategy: 'Concentrate on Functions, Calculus, Trigonometric Functions and Exponential and Logarithmic Functions. Drill HSC past papers (2020-2024) one paper per day with full working and self-mark against the published marking guidelines.',
  },
  prepOverview:
    'HSC Mathematics Advanced is best approached as a weight-led content pass: secure Functions and Trigonometric Functions first (they underpin Calculus and the Year 12 modelling questions), then build Calculus fluency (differentiation rules, curve sketching, integration techniques, applications), then layer in Exponential and Logarithmic Functions and Statistical Analysis. Sequences and Series and Financial Mathematics are Year 12 add-ons that combine percentage and series reasoning. The single highest-leverage habit is timed past-paper practice: the HSC examination reuses question structures across years and the marking guidelines are published by NESA. For Year 11 students starting Year 12, the most productive pre-exam pattern is one Year 12 topic per week with a past-paper question at the end of each, plus a full mock paper each month. Re-check the live calculator policy, paper structure and any in-year specification adjustments on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Leaving HSC past-paper practice until the last fortnight — question style, time pressure and the working-out expectations of the marking guidelines need at least eight weeks of regular practice.',
    'Confusing radians and degrees on Paper 1 — NESA expects exact values in radians for trigonometric identities; converting at the start of every relevant question saves marks.',
    'Treating Working Mathematically as a bonus strand — reasoning, communication and problem solving are assessed in every question, not on a separate rubric.',
    'Skipping Financial Mathematics because it looks applied — Year 12 Paper 2 carries a sizeable financial mathematics component and the per-cent compound interest formula variants are common HSC traps.',
    'Using a non-approved calculator — the NESA-approved calculator list is published every year; an unapproved calculator on HSC day may void a student\'s paper.',
    'Memorising formulae instead of building from first principles — derivative of sin x, product rule, quotient rule and chain rule must be derivable, not just recallable, for full marks in extended-response questions.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview',
};

export default exam;