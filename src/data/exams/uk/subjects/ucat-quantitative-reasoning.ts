import type { Subject } from '../../types';

// UCAT — Quantitative Reasoning (subtest 3 of 4).
//
// Source: UCAT Consortium, "Test Format and Scoring":
// https://www.ucat.ac.uk/about-ucat/test-format/
// Published shape used here: 36 questions, a 2 minute timed instruction
// section, then 26 minutes, scored on the 300-900 scale with one mark per
// correct answer and no negative marking. A basic on-screen calculator is
// available for this subtest.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official UCAT weighting. The Consortium publishes no mark
// weighting across the subtests. Within a subtest they are ordered by how much
// of the paper each topic actually decides: the question formats that carry the
// marks rank above the cross-cutting techniques that apply across all of them.
// Confirm current timings, scoring and access arrangements on ucat.ac.uk before
// committing a student to a plan (uk).
export const ucatQuantitativeReasoning: Subject = {
  id: 'ucat-quantitative-reasoning',
  name: 'Quantitative Reasoning',
  color: '#059669',
  topics: [
    {
      id: 'ucat-qr-001',
      name: 'Speed Shortcuts for Percentages and Ratios',
      weight: 4,
      description:
        'Almost every question reduces to a percentage change, a ratio split, or a proportion with a unit conversion, and the marks go to the candidate who takes the shortest route rather than the one who multiplies four-digit numbers fastest. The arithmetic is rarely harder than GCSE Foundation level; the bar is speed. Drill the common percentage shortcuts and the conversions until they are automatic, and decide in advance after how many seconds you will leave a question and come back to it, because a defended question costs the two you never reached.',
    },
    {
      id: 'ucat-qr-002',
      name: 'Reading Charts and Tables',
      weight: 4,
      description:
        'Each question sits on a chart, a table, or a short passage with figures, and every item costs four steps: reading the stem, locating the data, running the calculation and checking the answer. Reading is the step students most often underestimate, and it is where time is lost invisibly — scanning the whole chart instead of going straight to the series the stem names, or misreading which axis carries the units. Identify the one figure the question needs before you start calculating, and note the units on both axes at the start of a chart set.',
    },
    {
      id: 'ucat-qr-003',
      name: 'Calculator versus Mental Arithmetic',
      weight: 3,
      description:
        'A basic on-screen calculator is available, and the instinct is to use it for everything. The candidates who score highest use it on roughly half the items and run mental arithmetic for the rest, because the calculator popup takes focus from the screen, costs eye movement, and is slower than the arithmetic in your head for simple numbers. The split is a decision to make per question type rather than per mood: estimate first, then reach for the calculator only when the numbers are genuinely awkward or the answer needs to be exact.',
    },
  ],
};

export default ucatQuantitativeReasoning;
