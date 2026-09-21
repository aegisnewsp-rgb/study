import type { Subject } from '../../types';

// LNAT (National Admissions Test for Law) — the two sections the test is split
// into, plus the reasoning skills Section A actually rewards, written as
// separate revision topics so a student can plan an hour at a time.
//
// Source: LNAT Consortium Ltd, "Test format":
// https://lnat.ac.uk/what-is-lnat/test-format/ (fetched 2026-09-21).
// Extract filed at /data/sources/lnat/test-format.txt.
// Officially stated: a 2¼ hour test in two sections; Section A is 42 multiple
// choice questions based on 12 argumentative passages, with 3 or 4 questions on
// each, in 95 minutes; Section B is one essay from three questions in 40
// minutes. The FAQ page (https://lnat.ac.uk/faqs/) states the result is a score
// out of 42 and that there is no pass or fail mark. The live practice page
// (https://lnat.ac.uk/how-to-prepare/practice-test/) states the real test now
// has 4 possible answers per multiple-choice question.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official LNAT weighting. The Consortium publishes no mark
// weighting across the two sections. Confirm current timings, essay counts and
// access arrangements at lnat.ac.uk before committing a student to a plan (uk).
export const lnat: Subject = {
  id: 'lnat',
  name: 'LNAT',
  color: '#1d4ed8',
  topics: [
    {
      id: 'section-a-passage-comprehension',
      name: 'Section A — Reading the Passage for What It Says',
      weight: 5,
      description:
        'Section A gives you 42 multiple-choice questions drawn from 12 argumentative passages, so you meet three or four questions on each passage inside 95 minutes. The passages argue a position rather than narrate an event, which means the decisive sentence is usually a claim, a concession or a piece of evidence rather than a description. Read the question stem first, then read the passage hunting for the sentence that question turns on; a full careful read of all twelve passages will not fit inside the time. The most common way to lose a mark is to answer from recollection of the passage rather than from the words actually printed in it.',
    },
    {
      id: 'section-a-inference-and-assumption',
      name: 'Section A — Inference and Assumption',
      weight: 4,
      description:
        'A run of Section A questions asks what follows from a passage rather than what it states outright: the conclusion the writer is driving at, the assumption a step depends on, or the claim an argument would collapse without. Practise reducing each passage to its argument in one sentence — what is being claimed, what is offered as support, and what has been left unsaid. Once you can name the gap, the answer options sort themselves: one will bridge the gap the argument needs, and the others will either restate the passage or go further than the passage can carry.',
    },
    {
      id: 'section-a-eliminating-options',
      name: 'Section A — Eliminating Wrong Options',
      weight: 3,
      description:
        'Each question now offers four possible answers, and the fastest reliable technique is elimination rather than selection. Wrong options tend to fail in a small number of recognisable ways: they overstate a hedge the passage deliberately left open, they swap a cause for an effect, they swap a comparison for an absolute, or they import a fact from outside the passage. Train on the official practice test until you can name which of those failures you are looking at, because naming it is what stops you re-reading the same two options for a minute and a half.',
    },
    {
      id: 'section-b-planning-the-essay',
      name: 'Section B — Planning Under 40 Minutes',
      weight: 4,
      description:
        'Section B gives you 40 minutes and a choice of three questions, and the official guidance is a recommended maximum of 750 words, ideally about 500 to 600. Spend the first three or four minutes choosing the question you can argue best rather than the one you know most about, then write a two-line plan: the position you will take and the two or three reasons that carry it. Students who skip the plan usually produce an essay that surveys the topic and never commits to a view, which is the failure the section is designed to detect. Budget the last five minutes to reread for the one paragraph that has drifted off the question.',
    },
    {
      id: 'section-b-arguing-to-a-conclusion',
      name: 'Section B — Arguing to a Conclusion',
      weight: 5,
      description:
        'The essay is marked on your ability to argue economically and to come to a conclusion, so what is being looked for is one line of reasoning carried through to a stated position rather than a balanced list of considerations. State your position in the opening paragraph and spend the body making the strongest case for it, dealing with the obvious objection in one paragraph rather than giving it equal weight. Write in plain sentences with connectives that show the movement of the argument — because, therefore, however, even so — and keep the conclusion answering the exact question asked. A shorter essay with a clear spine scores better than a longer one that hedges.',
    },
  ],
};

export default lnat;
