import type { Subject } from '../../types';

// UCAT — Decision Making (subtest 2 of 4).
//
// Source: UCAT Consortium, "Test Format and Scoring":
// https://www.ucat.ac.uk/about-ucat/test-format/
// Published shape used here: 35 questions, a 1 minute 30 second timed
// instruction section, then 37 minutes, scored on the 300-900 scale. Single
// answer questions carry one mark and multiple-statement questions carry two,
// with one mark awarded for a partially correct response, and there is no
// negative marking.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official UCAT weighting. The Consortium publishes no mark
// weighting across the subtests. Within a subtest they are ordered by how much
// of the paper each topic actually decides: the question formats that carry the
// marks rank above the cross-cutting techniques that apply across all of them.
// Confirm current timings, scoring and access arrangements on ucat.ac.uk before
// committing a student to a plan (uk).
export const ucatDecisionMaking: Subject = {
  id: 'ucat-decision-making',
  name: 'Decision Making',
  color: '#059669',
  topics: [
    {
      id: 'ucat-dm-001',
      name: 'Syllogisms and Logical Puzzles',
      weight: 4,
      description:
        'Decision Making has more time a question than Verbal Reasoning because each stem has to be worked rather than read. The marking is not uniform: single-answer items are worth one mark while multiple-statement items are worth two, and a partially correct response on a multiple-statement item still scores one. That partial-credit floor is what makes structured logical-puzzle and syllogism items worth attempting rather than skipping, because working out three of four statements already pays. Translate the stem into a small diagram or a set of formal statements before evaluating the options.',
    },
    {
      id: 'ucat-dm-002',
      name: 'Venn Diagrams and Probability',
      weight: 4,
      description:
        'The statistical items cluster into Venn-diagram problems, especially three-set Venns, and probability problems covering single events, conditional probability and selection with or without replacement. The skill being tested is choosing the right representation: a three-set Venn is usually fastest drawn as regions rather than as a formula, and "without replacement" changes the denominator on the second draw, which is where most errors are made. Argument evaluation sits in the same subtest and asks whether the data on the page actually supports the conclusion drawn from it.',
    },
    {
      id: 'ucat-dm-003',
      name: 'Assumptions and Flaws',
      weight: 3,
      description:
        'Short argument-evaluation items give you a passage making a claim, and you have to identify either the unstated premise the argument relies on or the step in the reasoning that does not follow. The UCAT does not use formal names — no question says "spot the straw man" — but the answer choices test the same skill. Naming the flaw is what lets you recognise it faster, and spotting the unstated premise is what lets you see when a conclusion is unsupported. Read the claim first, then ask what has to be true for it to stand.',
    },
  ],
};

export default ucatDecisionMaking;
