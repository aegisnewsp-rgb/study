import type { Subject } from '../../types';

// UCAT (University Clinical Aptitude Test) — the four separately timed subtests
// in the order the Consortium publishes them.
//
// Source: UCAT Consortium, "Test Format and Scoring":
// https://www.ucat.ac.uk/about-ucat/test-format/
// Subtest sizes and times used here are the published ones: Verbal Reasoning 44
// questions / 22 minutes, Decision Making 35 / 37 minutes, Quantitative
// Reasoning 36 / 26 minutes, Situational Judgement 69 / 26 minutes, each
// preceded by a timed instruction section, and the three cognitive subtests
// scored 300-900 with Situational Judgement banded 1-4.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official UCAT weighting. The Consortium publishes no mark
// weighting across the subtests. Confirm current timings, scoring and access
// arrangements on ucat.ac.uk before committing a student to a plan (uk).
export const ucat: Subject = {
  id: 'ucat',
  name: 'UCAT',
  color: '#059669',
  topics: [
    {
      id: 'verbal-reasoning',
      name: 'Verbal Reasoning',
      weight: 5,
      description:
        'Verbal Reasoning is 44 questions in 22 minutes, so the constraint is time rather than knowledge: roughly thirty seconds a question across the passages. Practise answering from the passage alone, because this subtest rewards refusing to bring outside knowledge into a true, false or cannot say decision. "Cannot say" is the answer whenever the passage neither confirms nor denies a statement, and it is the option candidates under-use most. Build speed by reading for the shape of each argument first, then going back to the one sentence that decides the question.',
    },
    {
      id: 'decision-making',
      name: 'Decision Making',
      weight: 4,
      description:
        'Decision Making gives you 37 minutes for 35 questions, more time a question than Verbal Reasoning because each stem has to be worked. Single-answer questions carry one mark and multiple-statement questions carry two, with one mark for a partially correct response, so on a multiple-statement item working out three of the four statements still scores. That marking shape makes structured items worth attempting rather than skipping, and it rewards a methodical translation of the stem over raw speed.',
    },
    {
      id: 'quantitative-reasoning',
      name: 'Quantitative Reasoning',
      weight: 4,
      description:
        'Quantitative Reasoning is 36 questions in 26 minutes with an on-screen calculator permitted, and the marks usually go to the candidate who takes the shortest route rather than the one who calculates fastest. Most questions resolve into a proportion, a percentage change, a rate or a unit conversion, so the time is lost in the arithmetic rather than in the reading. Drill the conversions and the common percentage shortcuts until they are automatic, and decide in advance after how many seconds you will leave a question and come back to it.',
    },
    {
      id: 'situational-judgement',
      name: 'Situational Judgement',
      weight: 3,
      description:
        'Situational Judgement is 69 questions in 26 minutes, reported as bands 1 to 4 with band 1 the highest, and marked against the consensus of a panel of experts rather than a simple right-or-wrong key. Full marks go to a response matching the ideal answer and partial marks to one that is close, so the useful practice is calibrating your judgement to what the professional guidance asks for rather than memorising slogans. Read each scenario twice: once for what is happening, once for what the question is actually asking you to weigh.',
    },
  ],
};

export default ucat;
