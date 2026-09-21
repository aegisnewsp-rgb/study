// Medical College Admission Test (MCAT) — Critical Analysis and Reasoning
// Skills (CARS).
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The CARS section tests comprehension, analysis, and reasoning skills
// across passages drawn from the humanities and social sciences. AAMC
// organises the section around four skills: Foundations of Comprehension,
// Reasoning Within the Text, Reasoning Beyond the Text, and Quantitative
// Reasoning. CARS is the only MCAT section that does not require
// content-specific science knowledge.
//
// Source: AAMC, Critical Analysis and Reasoning Skills (CARS),
//   https://students-residents.aamc.org/prepare-mcat-exam/critical-analysis-and-reasoning-skills
// Source: AAMC, CARS Skill 1: Foundations of Comprehension,
//   https://students-residents.aamc.org/critical-analysis-and-reasoning-skills/critical-analysis-and-reasoning-skills-section-skill-1-foundations-comprehension
// Source: AAMC, CARS Passage Types,
//   https://students-residents.aamc.org/critical-analysis-and-reasoning-skills/critical-analysis-and-reasoning-skills-section-passage-types
// Verify the live CARS section length and passage distribution on
// aamc.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const cars: Subject = {
  id: 'cars',
  name: 'Critical Analysis and Reasoning Skills (CARS)',
  color: '#7c3aed',
  topics: [
    { id: 'mcatcars-001', name: 'Foundations of Comprehension', weight: 5 as const, description: 'Reading a CARS passage for basic meaning: identifying the main idea, theme, tone, the author\'s purpose, and the structure of the argument. CARS Skill 1 from the AAMC CARS framework.' },
    { id: 'mcatcars-002', name: 'Reasoning Within the Text', weight: 5 as const, description: 'Following the author\'s argument: identifying claims and evidence, distinguishing strengthen/weaken statements, recognising assumptions, and evaluating the logic of the argument as it is presented. CARS Skill 2.' },
    { id: 'mcatcars-003', name: 'Reasoning Beyond the Text', weight: 5 as const, description: 'Applying the passage to new situations: drawing inferences, recognising analogies, identifying implications, and judging how a new scenario would be affected by the author\'s argument. CARS Skill 3.' },
    { id: 'mcatcars-004', name: 'Humanities Passages', weight: 4 as const, description: 'Passages drawn from philosophy, literature, art history, music, religion, and ethics. Tests interpretation of narrative voice, symbolic meaning, and historical or cultural context. Roughly one-third of CARS passages.' },
    { id: 'mcatcars-005', name: 'Social Sciences Passages', weight: 4 as const, description: 'Passages drawn from psychology, sociology, political science, economics, education, and anthropology. Tests argument evaluation, claim-evidence reasoning, and recognition of methodological language. Roughly one-third of CARS passages.' },
    { id: 'mcatcars-006', name: 'Natural Sciences-Related Passages for Non-Scientists', weight: 3 as const, description: 'Passages that touch on science but are written for a general audience. Tests the ability to interpret scientific reasoning without needing specialist knowledge. Roughly one-fifth to one-quarter of CARS passages.' },
    { id: 'mcatcars-007', name: 'Quantitative Reasoning in CARS', weight: 3 as const, description: 'Reading simple tables, graphs, and numerical claims inside CARS passages. CARS Skill 4. The math is introductory (ratios, percentages, basic inference); the skill is reading numbers as part of an argument, not solving algebra.' },
    { id: 'mcatcars-008', name: 'Passage Mapping and Timing Strategy', weight: 4 as const, description: 'Active reading techniques for CARS: marking the argument structure as you read, anticipating the items, and managing time across roughly nine-to-ten passages. Distinct from content skills but central to score.' }
  ]
};
