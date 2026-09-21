// Law School Admission Test (LSAT) — Argumentative Writing.
//
// Awarding body: Law School Admission Council (LSAC).
// LSAT Argumentative Writing is an unscored writing sample
// administered separately from the multiple-choice LSAT, typically
// online and proctored. The task presents a decision and asks the
// candidate to write an essay choosing one of two positions and
// arguing for it. The writing sample is sent to law schools as
// part of the LSAT score report.
//
// Source: LSAC, Argumentative Writing,
//   https://www.lsac.org/lsat/taking-lsat/test-format/argumentative-writing
// Verify the live task prompt format, timing, and any in-year
// changes on lsac.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const argumentativeWriting: Subject = {
  id: 'argumentative-writing',
  name: 'LSAT Argumentative Writing',
  color: '#16a34a',
  topics: [
    { id: 'lsataw-001', name: 'Reading the Decision Prompt', weight: 5 as const, description: 'Understanding the LSAT Argumentative Writing decision prompt: identifying the goal, the two options, the audience, and the criteria for choosing between the options.' },
    { id: 'lsataw-002', name: 'Choosing and Stating the Position', weight: 5 as const, description: 'Selecting one of the two options and stating the position clearly in the opening paragraph. The position should be defensible, not necessarily the one you personally prefer.' },
    { id: 'lsataw-003', name: 'Developing Arguments with Reasons and Evidence', weight: 5 as const, description: 'Building a coherent argument by supporting the position with reasons, evidence, and examples. Each reason should be developed in its own paragraph.' },
    { id: 'lsataw-004', name: 'Addressing the Counter-Position', weight: 4 as const, description: 'Acknowledging the strongest argument for the opposing position and explaining why the chosen position is still preferable. Demonstrates nuanced thinking.' },
    { id: 'lsataw-005', name: 'Organisation and Paragraph Structure', weight: 4 as const, description: 'Using clear paragraph structure: topic sentence, supporting sentences, transitions, and a closing sentence that ties the argument together.' },
    { id: 'lsataw-006', name: 'Language and Conventions', weight: 3 as const, description: 'Writing clearly, concisely, and with correct spelling, grammar, and punctuation. Conventions affect the writing sample\'s perceived quality.' },
    { id: 'lsataw-007', name: 'Time Management for the Writing Sample', weight: 3 as const, description: 'Planning the essay in 5 minutes, drafting in 25 minutes, reviewing in 5 minutes. The total time is fixed; pacing matters.' },
    { id: 'lsataw-008', name: 'What Law Schools Look For', weight: 3 as const, description: 'Understanding the holistic criteria law schools use: clarity, organisation, reasoning, and writing quality. The writing sample is unscored but visible to admissions.' }
  ]
};
