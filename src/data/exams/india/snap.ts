import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';
import { qa } from './subjects/qa';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    logical_reasoning,
    qa,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'snap',
  examName: 'SNAP',
  description: 'SNAP (Symbiosis National Aptitude Test) is a national-level MBA entrance examination conducted by Symbiosis International University for admission to its various institutes including SCMHRD, SIBM, SIOM, and others. SNAP is unique among Indian MBA exams as it has a lower difficulty level compared to CAT/XAT but is still competitive due to the reputation of Symbiosis institutes. The exam consists of four sections: General English (Reading Comprehension, Verbal Reasoning, Verbal Ability), Quantitative Data Interpretation & Sufficiency (Quantitative Aptitude, Data Interpretation, Data Sufficiency), Analytical & Logical Reasoning (Puzzles, Syllogisms, Blood Relations, Coding), and General Awareness (Current Affairs, Static GK). Unlike other exams, SNAP has a differential marking scheme where some questions carry 2 marks and others 1 mark. The test is conducted in online mode with a total duration of 60 minutes for 60 questions. Candidates must score above the sectional and overall cut-offs to be shortlisted for Group Discussion and Personal Interview rounds at individual institutes.',
  examPattern: 'SNAP is conducted in an online proctored format with 60 multiple choice questions to be answered in 60 minutes. The sections and their typical weightings are: General English (15 questions), Quantitative Data Interpretation & Sufficiency (20 questions), Analytical & Logical Reasoning (15 questions), and General Awareness (15 questions). The marking scheme is not uniform — questions carry either 1 mark or 2 marks. There is negative marking of 0.25 marks for wrong answers. The score is scaled out of 60 (though recent patterns may vary). Shortlisted candidates appear for institute-specific Group Discussion and Personal Interview rounds.',
  eligibility: 'Candidates must hold a bachelor\'s degree in any discipline with minimum 50% marks (45% for SC/ST) from a recognized university. Final year students awaiting results can apply provisionally. There is no age limit for SNAP. Candidates can appear for SNAP and apply to multiple Symbiosis institutes simultaneously by paying separate institute fees. Work experience is preferred by some institutes for specific programs but is not mandatory for appearing in SNAP.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SNAP — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SNAP — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SNAP — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SNAP — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SNAP — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SNAP — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SNAP — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SNAP — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SNAP — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SNAP — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SNAP — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SNAP — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SNAP — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SNAP — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SNAP — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SNAP — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SNAP — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SNAP — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SNAP',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'SNAP is a short, high-speed SIU MBA entrance (typically ~60 minutes with English, Quant and Reasoning — confirm live). Phase 1: speed foundations — arithmetic, algebra basics, grammar and short LR sets. Phase 2: timed 15–20 minute sectional sprints daily; track accuracy vs attempts. Phase 3: full SNAP-length mocks every 3–4 days; practise skipping traps fast. GK/current affairs weight varies by year — check the current SNAP brochure. Use StudyRoadmap roadmaps for remaining weeks.',
  commonMistakes: [
    'Preparing with 2-hour CAT mocks only and never practising 60-minute high-speed papers.',
    'Attempting every question and burning time on one DI set.',
    'Ignoring official negative marking and attempt strategy from the live notice.',
    'Under-practising verbal speed (fillers, grammar, short RC).',
    'Memorising outdated SNAP pattern lengths from older blogs.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.snaptest.org/',
};

export default exam;
