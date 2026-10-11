// Medical College Admission Test (MCAT) — Critical Analysis and Reasoning
// Skills (CARS).
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The CARS section tests comprehension, analysis, and reasoning skills
// across passages drawn from the humanities and social sciences. AAMC
// organises the section around THREE skills: Foundations of Comprehension
// (about 30% of the section), Reasoning Within the Text (about 30%), and
// Reasoning Beyond the Text (about 40%). There is no fourth CARS skill and
// no "Quantitative Reasoning" skill — that term belongs to a different MCAT
// section. The section is 53 passage-based questions in 90 minutes, and
// passage content splits roughly 50% humanities / 50% social sciences.
// CARS is the only MCAT section that does not require content-specific
// science knowledge.
//
// Source: AAMC, CARS Section Overview (skills, question count, passage split),
//   https://students-residents.aamc.org/whats-mcat-exam/critical-analysis-and-reasoning-skills-section-overview
// Source: AAMC, CARS Passage Types (humanities and social sciences disciplines),
//   https://students-residents.aamc.org/critical-analysis-and-reasoning-skills/critical-analysis-and-reasoning-skills-section-passage-types
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
    { id: 'mcatcars-004', name: 'Humanities Passages', weight: 4 as const, description: 'Passages drawn from architecture, art, dance, ethics, literature, music, philosophy, popular culture, religion, and theater. Humanities passages focus on relationships between ideas and are often conversational or opinionated in style, so tone and word choice matter as much as the assertions. About half of CARS passage content is humanities.' },
    { id: 'mcatcars-005', name: 'Social Sciences Passages', weight: 4 as const, description: 'Passages drawn from anthropology, archaeology, economics, education, geography, history, linguistics, political science, population health, psychology, and sociology. Social sciences passages tend to be more factual and scientific in tone, describing interpretations, implications, or applications of theories, observations, or trends. About half of CARS passage content is social sciences.' },
    { id: 'mcatcars-006', name: 'Studies of Diverse Cultures Passages', weight: 3 as const, description: 'AAMC cross-cutting passage type that can sit in either the humanities or the social sciences bucket depending on the focus of the text. Tests reading for perspective and context without prior subject knowledge. No prior coursework is needed: everything required is in the passage and the questions.' },
    { id: 'mcatcars-007', name: 'Skills Breakdown and Section Weighting', weight: 3 as const, description: 'How the 53-question, 90-minute CARS section divides across the three AAMC skills (about 30% / 30% / 40%) and the roughly 50/50 humanities-social-sciences passage split, and how to turn those weights into a study plan. Includes the common "CARS Skill 4" myth and why it is wrong.' },
    { id: 'mcatcars-008', name: 'Passage Mapping and Timing Strategy', weight: 4 as const, description: 'Active reading techniques for CARS: marking the argument structure as you read, anticipating the items, and managing time across roughly nine-to-ten passages. Distinct from content skills but central to score.' }
  ]
};
