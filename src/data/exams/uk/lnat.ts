import type { ExamTemplate, Subject } from '../types';

import { lnat } from './subjects/lnat';

const subjects: Subject[] = [
  lnat,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'lnat',
  examName: 'LNAT (National Admissions Test for Law)',
  country: 'uk',
  description: 'The LNAT is the admissions test a group of UK universities use for entry to undergraduate law, and it is sat at a Pearson VUE test centre rather than in school. It is deliberately not a test of legal knowledge: the Consortium states it is designed to test intellectual ability rather than knowledge of a subject, and that there are no facts to learn for it. The test has two sections. Section A is 42 multiple-choice questions based on 12 argumentative passages, with three or four questions on each, answered in 95 minutes. Section B is one essay chosen from three questions, written in 40 minutes. The two sections together make a 2¼ hour test, and the Section A mark out of 42 is the LNAT score that universities see. There is no pass or fail mark, and because each admissions cycle has its own test window the score travels with that year’s UCAS application rather than being improvable within the round.',
  examPattern: 'Two sections sat in a single sitting at a Pearson VUE test centre, 2¼ hours in total. Section A: 42 multiple-choice questions based on 12 argumentative passages, with 3 or 4 questions on each passage, in 95 minutes — you can review your answers at any point during the 95 minutes, but once you begin Section B you cannot return to Section A. Section B: one essay chosen from three questions, in 40 minutes, marked on your ability to argue economically and to come to a conclusion. The Section A answers are marked by computer and produce a score out of 42, which is the LNAT score, and there is no pass or fail mark. The current practice test states the real test now offers 4 possible answers per multiple-choice question. Different test dates use different papers, drawn by the Consortium from banks of questions and essay topics that it says are calibrated so scores are comparable across variants. Confirm current timings, essay counts and access arrangements at lnat.ac.uk before booking.',
  eligibility: 'The LNAT is used by a group of UK universities for entry to their undergraduate law programmes, and candidates register individually and book an appointment at a Pearson VUE test centre — there is no school-entry route and it is not sat as a class. The Consortium states there are no general exemptions, although an individual university may grant one to an individual candidate in extreme cases. Because each admissions cycle has its own test window and different dates use different papers, a score cannot be improved within the same round, so booking early enough to leave practice time matters more than it does for a test with resits. Candidates with a disability or a documented need can apply for examination access requirements, and these must be arranged before booking rather than at the centre. Your result and essay are sent to the universities automatically using the ten-digit UCAS personal identifier you enter at registration, so an error there means the result does not arrive and the burden of correcting it is yours. Universities differ in how much weight they give the LNAT alongside grades and the personal statement, and some law courses do not require it at all, so check each course’s stated position and the current list of users at lnat.ac.uk rather than assuming a threshold.',
  prepOverview: 'An LNAT plan works because the test is finite and published, not because the content is large. Nothing has to be memorised, so every hour of preparation should be spent practising under the real conditions rather than reading about the test. Start by sitting one complete timed paper — Section A in 95 minutes with no pauses, then Section B in 40 minutes — and mark Section A honestly out of 42, because the number you start from is the only baseline you will get. Then split the work by section rather than by topic. For Section A, take one passage at a time, answer its three or four questions, and write one line on why each wrong option was wrong; the recurring pattern (an overstated hedge, a swapped cause, a fact imported from outside the passage) is what you are learning to see, and it is worth more than another ten passages read passively. For Section B, do not write full essays every session — plan three different past questions in fifteen minutes each, choosing the one you could argue best in thirty seconds, then write one full essay a week and reread it against the exact question. Practise Section A with a watch visible from the first session, because the constraint is not difficulty but the 95-minute wall. In the final week sit at least two full papers back to back so the transition from Section A to an essay feels routine rather than abrupt, and stop adding new technique in the last two days. Re-check current timings, essay counts and access arrangements on https://lnat.ac.uk/ before committing to a plan (uk).',
  commonMistakes: [
    'Revising law or current affairs to prepare; the Consortium states there are no facts to learn, and the paper rewards how you read an argument, not what you already know about it.',
    'Answering Section A from memory of the passage instead of checking the printed words — an option that is true in the world but not supported by the passage is still wrong.',
    'Running out of time because the first passages were read too carefully; twelve passages in 95 minutes leaves a little over two minutes per question once reading is included, so a passage must be worked, not studied.',
    'Spending Section B planning to be balanced — an essay that lists considerations on both sides and never commits misses the stated requirement to come to a conclusion.',
    'Treating Section A and Section B as one block: once Section B begins you cannot return to the multiple-choice section, so leaving Section A questions unreviewed means they are lost.',
    'Booking late, then relying on a single practice paper — and entering the UCAS personal identifier wrongly, which the Consortium states leaves the burden of correction on the candidate.',
  ],
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for the LNAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for the LNAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for the LNAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for the LNAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for the LNAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for the LNAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for the LNAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for the LNAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for the LNAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for the LNAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for the LNAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for the LNAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for the LNAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for the LNAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for the LNAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for the LNAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for the LNAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for the LNAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the LNAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'With one day left, sit one full Section A under the real clock in the morning — 12 passages, 42 questions, 95 minutes, no pauses — then mark it out of 42 and spend the afternoon reviewing every wrong answer by naming why the option failed: overstated, swapped cause and effect, or a fact the passage never gave you. In the evening, plan two different Section B questions in fifteen minutes each and write one full essay, holding yourself to a stated position from the first paragraph and finishing with a conclusion that answers the exact question. Do not start reading legal material; the test is stated to require no subject knowledge and new facts will not survive the clock. Stop early and sleep — Section A is a speed test, and a tired reader is a slow one.',
  },
  lastUpdated: '2026-09-21',
  officialSource: 'https://lnat.ac.uk/what-is-lnat/test-format/',
};

export default exam;
