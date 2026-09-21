import type { ExamTemplate, Subject } from '../types';

import { ucat } from './subjects/ucat';

const subjects: Subject[] = [
  ucat,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ucat',
  examName: 'UCAT (University Clinical Aptitude Test)',
  country: 'uk',
  description: 'The UCAT is the admissions test most UK medical and dental schools use to rank applicants, and it is sat at a Pearson VUE test centre rather than in school. It is computer-delivered and multiple-choice, with four separately timed subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning and Situational Judgement. The three cognitive subtests are scored on a common 300–900 scale and add up to a total between 900 and 2700, while Situational Judgement is reported as a band from 1 to 4. The standard test runs just under two hours, each subtest is preceded by a timed instruction section, and the test cannot be paused once it has started. Because there is one test window per admissions cycle, the score you get travels with that year’s application, which makes the preparation plan short and front-loaded rather than stretched across a school year.',
  examPattern: 'Four separately timed subtests in multiple-choice format, sat in a single sitting at a Pearson VUE test centre. Verbal Reasoning: 44 questions, a 1 minute 30 second instruction section, then 22 minutes of test time, scored 300–900. Decision Making: 35 questions, a 1 minute 30 second instruction section, 37 minutes, scored 300–900 — single-answer questions are worth one mark and multiple-statement questions two, with one mark awarded for a partially correct response. Quantitative Reasoning: 36 questions, a 2 minute instruction section, 26 minutes, scored 300–900. Situational Judgement: 69 questions, a 1 minute 30 second instruction section, 26 minutes, reported as bands 1 to 4 with band 1 the highest. There is no negative marking, and your performance on one question does not influence which other questions are presented, so the test is not adaptive and a weak subtest does not compound itself. The standard test is just under 2 hours in total; an extended version and access arrangements are available for eligible candidates through the UCAT Consortium. Confirm the live timings, scoring and rules on ucat.ac.uk before booking.',
  eligibility: 'The UCAT is required by most UK medical and dental schools for entry to their undergraduate medicine or dentistry programmes, and it is normally taken in the year before you intend to start the course. Candidates register and book an individual appointment at a Pearson VUE test centre — there is no school-entry route, and it cannot be sat as a class. Because each admissions cycle has one test window, a score cannot be improved within the same round, so booking early enough to leave practice time matters more than it does for a test with resits. Candidates with a disability or a documented condition can apply for access arrangements, which include an extended version of the test. Universities differ in how they weight the UCAT against grades and interview performance, so check each course’s stated requirements rather than assuming a single threshold. Always confirm current entry requirements, fees and the booking process on ucat.ac.uk.',
  prepOverview: 'A UCAT plan only works if it is short, timed and front-loaded. The test measures speed and judgement under pressure rather than curriculum knowledge, so preparation means practice against the clock, not reading. Start by sitting one full timed test to find which subtest is genuinely your weakest, because candidates routinely misjudge this: Verbal Reasoning feels hardest, while Quantitative Reasoning is often where marks actually leak away through slow arithmetic. Then work in short blocks — a timed set of one subtest, immediate review of every wrong answer, and one line on why it went wrong. The review earns more than the volume, because the recurring errors are predictable: running out of time on a passage in Verbal Reasoning, failing to separate the statements in a Decision Making item, taking the long route through a proportion in Quantitative Reasoning, and answering Situational Judgement from personal instinct rather than from the guidance the scenario is testing. Build the routine around the three things the UCAT Consortium publishes: the question tutorials, the official practice tests and the timed mock. Sit mocks under test conditions, with the instruction sections and no pausing, because the mental cost of those instructions is part of what the real sitting tests. For a short plan, prioritise the subtest with the most headroom plus one full timed mock; for a month or more, cycle all four subtests weekly and keep the mock count high. Since the score cannot be improved inside the cycle, treat the final week as consolidation rather than as a chance to learn a new technique. Re-check current timings, booking dates and access arrangements on https://www.ucat.ac.uk/ before committing to a plan (uk).',
  commonMistakes: [
    'Preparing by reading instead of practising under time — the UCAT is a timing test, and a candidate who knows the content but has never sat a full timed subtest usually runs out of time in Verbal Reasoning.',
    'Bringing outside knowledge into Verbal Reasoning; the answer has to be decided from the passage alone, and “cannot say” is the correct option whenever the passage neither confirms nor denies the statement.',
    'Skipping multiple-statement Decision Making questions, when they carry two marks and a partially correct response still scores one.',
    'Doing Quantitative Reasoning arithmetic the long way — the marks are lost to slow percentages, ratios and unit conversions rather than to difficult mathematics.',
    'Answering Situational Judgement from personal opinion instead of from the professional guidance the scenario tests, and rushing it because it feels like the soft subtest when it is in fact the longest question set.',
    'Booking late and ending up with a date that leaves no room to practise, then relying on a single mock before the real sitting.',
  ],
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for the UCAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for the UCAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for the UCAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for the UCAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for the UCAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for the UCAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for the UCAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for the UCAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for the UCAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for the UCAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for the UCAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for the UCAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for the UCAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for the UCAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for the UCAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for the UCAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for the UCAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for the UCAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the UCAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'With one day left, spend it on timed practice rather than on technique. Sit one full mock in the morning under real conditions — instruction sections included, no pausing — then use the afternoon to review every wrong answer and re-drill the two subtests with the most headroom. Prioritise Verbal Reasoning and Quantitative Reasoning for marks, keep Decision Making ticking over because its multiple-statement questions carry partial credit, and read the Situational Judgement scenarios carefully without over-investing time. Stop in the evening; the test rewards a rested candidate and no new method learned overnight will survive the clock.',
  },
  lastUpdated: '2026-09-21',
  officialSource: 'https://www.ucat.ac.uk/about-ucat/test-format/',
};

export default exam;
