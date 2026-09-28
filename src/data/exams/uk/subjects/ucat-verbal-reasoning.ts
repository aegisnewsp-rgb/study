import type { Subject } from '../../types';

// UCAT — Verbal Reasoning (subtest 1 of 4).
//
// Source: UCAT Consortium, "Test Format and Scoring":
// https://www.ucat.ac.uk/about-ucat/test-format/
// Published shape used here: 44 questions, a 1 minute 30 second timed
// instruction section, then 22 minutes of test time, scored on the 300-900
// scale with no negative marking.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official UCAT weighting. The Consortium publishes no mark
// weighting across the subtests. Within a subtest they are ordered by how much
// of the paper each topic actually decides: the question formats that carry the
// marks rank above the cross-cutting techniques that apply across all of them.
// Confirm current timings, scoring and access arrangements on ucat.ac.uk before
// committing a student to a plan (uk).
export const ucatVerbalReasoning: Subject = {
  id: 'ucat-verbal-reasoning',
  name: 'Verbal Reasoning',
  color: '#059669',
  topics: [
    {
      id: 'ucat-vr-001',
      name: 'True, False and Cannot Tell',
      weight: 5,
      description:
        'Every statement after a passage is judged against the passage alone, and outside knowledge has to stay out even when the topic is one you know well. The marker scores the match between statement and passage, not between statement and reality. "Cannot say" is the answer whenever the passage neither confirms nor denies a statement, and it is the option candidates under-use most because it feels like a non-answer. Practise deciding from the one sentence that settles the item rather than from your overall impression of the passage.',
    },
    {
      id: 'ucat-vr-002',
      name: 'Inference and Assumption',
      weight: 4,
      description:
        'The subtest asks the same question from two angles. An inference is a conclusion the passage forces on you — if the passage says it, the inference follows. An assumption is a hidden premise the argument relies on, and it can be true in the world while still not being stated in the passage. The wording of a True/False/Cannot Tell statement is what tells you which of the two you are being asked about, so naming the difference before you answer is what stops a defensible reading from being scored wrong.',
    },
    {
      id: 'ucat-vr-003',
      name: 'Time Management and Pacing',
      weight: 3,
      description:
        'Verbal Reasoning gives you roughly thirty seconds a question across the whole subtest, and that has to cover reading the passage as well as answering. The candidates who score highest treat time as a resource to budget rather than something to find, which means setting a per-passage ceiling in advance and leaving an item rather than defending it. Reading for the shape of each argument first, then returning to the one decisive sentence, is faster than reading the passage closely from the first word.',
    },
  ],
};

export default ucatVerbalReasoning;
