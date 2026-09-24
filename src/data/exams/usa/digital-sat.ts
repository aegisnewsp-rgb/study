import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { satReadingWriting } from './subjects/sat-reading-writing';
import { satMath } from './subjects/sat-math';

const subjects: Subject[] = [
  satReadingWriting,
  satMath,
];

const exam: ExamTemplate = {
  examId: 'digital-sat',
  examName: 'Digital SAT (College Board)',
  country: 'usa',
  description: 'The Digital SAT is the computer-adaptive college admissions examination administered worldwide by the College Board. Administered through the official Bluebook application, the exam evaluates college readiness across two 64-to-70-minute sections: Reading and Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). The total testing time is 2 hours and 14 minutes. Section scores range from 200 to 800, combining for a composite score between 400 and 1600. The test features multistage adaptive testing where performance on the first module determines the difficulty and scoring ceiling of the second module.',
  examPattern: 'Two sections divided into two stages each, totaling four modules. Section 1 (Reading and Writing) features Module 1 (27 questions, 32 minutes) followed by an adaptive Module 2 (27 questions, 32 minutes). After a 10-minute scheduled break, Section 2 (Math) presents Module 1 (22 questions, 35 minutes) followed by an adaptive Module 2 (22 questions, 35 minutes). All Reading and Writing items are four-option multiple choice based on standalone short passages. Approximately 75% of Math items are multiple choice, while 25% are student-produced response grid-ins. A built-in graphing calculator powered by Desmos is available throughout all Math modules. There is no penalty for guessing.',
  eligibility: 'Open to secondary school students and international university applicants of all nationalities. No formal prerequisites or educational credentials are required, though students typically sit the exam in the spring of Year 11 (Junior year) or autumn of Year 12 (Senior year). Registration is completed online through the College Board portal (collegeboard.org). Test centers are operated at high schools and authorized testing sites worldwide on designated international test dates.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Digital SAT — 1 Hour Emergency Triage'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Digital SAT — 2 Hours Review'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Digital SAT — 3 Hours Priority Pass'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Digital SAT — 5 Hours High-Yield Focus'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Digital SAT — 12 Hours Comprehensive Review'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Digital SAT — 1 Day Full Pass'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Digital SAT — 2 Days Strategic Review'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Digital SAT — 3 Days Core Drill'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Digital SAT — 5 Days Practice Cycle'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Digital SAT — 1 Week Mastery Sprint'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Digital SAT — 10 Days Section Polish'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Digital SAT — 2 Weeks Intensive Plan'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Digital SAT — 1 Month Adaptive Preparation'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Digital SAT — 2 Months Foundation to Mastery'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Digital SAT — 3 Months Complete Candidate Plan'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Digital SAT — 6 Months Long-Term Preparation'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Digital SAT — 1 Year College Prep Course'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Digital SAT — 2 Years Complete Curriculum'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Targeted cramming plan for Digital SAT test-eve triage',
    duration: '1d',
    focusAreas: subjects.map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritize Standard English Conventions boundaries, linear systems, and quadratic functions. Mastering Module 1 accuracy ensures routing to the higher-difficulty Module 2 where top scaled scores are unlocked.',
  },
  prepOverview: 'Preparation for the Digital SAT demands mastery of multistage adaptive dynamics. Because Module 1 accuracy determines whether a candidate receives the harder or easier Module 2, pacing on Module 1 is critical: an early string of errors routes the student to the easier module, capping maximum score potential regardless of subsequent performance. Allocate roughly 71 seconds per question on Reading and Writing and 95 seconds per question on Math. Leverage the built-in Desmos calculator on Math to rapidly graph quadratic intersections, find system solutions, and calculate regressions rather than computing tedious algebraic derivations manually. For Reading and Writing, memorize the high-frequency punctuation boundaries (semicolons separating independent clauses, colons introducing explanations or lists, em-dashes isolating parenthetical commentary). Practice exclusively using official College Board practice tests inside the Bluebook application to become accustomed to the digital interface, countdown timer, and question flagging tools.',
  commonMistakes: [
    'Rushing through Module 1 and committing careless arithmetic or punctuation errors, which routes the candidate to the easier Module 2 and caps the maximum score.',
    'Calculating algebraic solutions manually by hand instead of utilizing the embedded Desmos graphing calculator to find polynomial roots and intersections instantaneously.',
    'Spending more than 90 seconds on a single complex Reading passage question instead of eliminating obvious foils, guessing, flagging, and moving forward.',
    'Confusing colon and semicolon usage: colons require a complete independent clause before the colon but can introduce a phrase or list, whereas semicolons strictly link two independent clauses.',
    'Entering improper formats on Math student-produced response grid-ins, such as writing mixed numbers instead of improper fractions or rounded decimals.',
    'Practicing with legacy paper SAT materials, which feature long multi-question reading passages rather than the short discrete paragraph prompts tested on the Digital SAT.',
  ],
  lastUpdated: '2026-09-24',
  officialSource: 'https://satsuite.collegeboard.org/sat',
};

export default exam;
