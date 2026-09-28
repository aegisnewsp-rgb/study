import type { Subject } from '../../types';

// UCAT — Situational Judgement (subtest 4 of 4).
//
// Source: UCAT Consortium, "Test Format and Scoring":
// https://www.ucat.ac.uk/about-ucat/test-format/
// Published shape used here: 69 questions, a 1 minute 30 second timed
// instruction section, then 26 minutes, reported as a band from 1 to 4 with
// band 1 the highest. A response matching the published ideal answer scores
// full marks and a "close to ideal" response scores partial marks.
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official UCAT weighting. The Consortium publishes no mark
// weighting across the subtests. Within a subtest they are ordered by how much
// of the paper each topic actually decides: the question formats that carry the
// marks rank above the cross-cutting techniques that apply across all of them.
// Confirm current timings, scoring and access arrangements on ucat.ac.uk before
// committing a student to a plan (uk).
export const ucatSituationalJudgement: Subject = {
  id: 'ucat-situational-judgement',
  name: 'Situational Judgement',
  color: '#059669',
  topics: [
    {
      id: 'ucat-sj-001',
      name: 'Appropriateness and Importance',
      weight: 5,
      description:
        'Each item asks you to judge two distinct things, and confusing them drops you a band on the final report. Appropriateness is about whether an action is the right thing to do in the situation; importance is about how much it matters relative to the other things competing for attention. Read the scenario for the dimension the question is actually testing before you rate anything, and keep the four-point scale you answer on separate from the band you are finally reported in.',
    },
    {
      id: 'ucat-sj-002',
      name: 'Pacing the 69 Scenarios',
      weight: 4,
      description:
        'Sixty-nine items in 26 minutes is roughly twenty-three seconds per item, and that has to cover reading the scenario, reading the question and clicking a rating. The arithmetic alone forces a pace. The subtest rewards calibration far more than deliberation, and a candidate who reads each scenario three times in search of certainty runs out of time and lands in band 3 or band 4. Decide your rating on the first careful read and move on; a considered first answer is usually the one that matches the panel.',
    },
    {
      id: 'ucat-sj-003',
      name: 'Banding and Partial-Mark Scoring',
      weight: 3,
      description:
        'The result is reported as one of four bands, and the published band descriptions tell you what each band says about your judgement relative to a panel of senior doctors and admissions tutors. Knowing the bands shapes how you study, because the difference between a band 2 and a band 3 candidate is calibration rather than luck. Partial marks for a "close to ideal" response mean that being approximately right still scores, so the useful practice is calibrating towards the professional guidance the scenario tests rather than memorising slogans.',
    },
  ],
};

export default ucatSituationalJudgement;
