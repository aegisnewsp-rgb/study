// UPCAT — Reading Comprehension subtest.
// Official source: https://upcat.up.edu.ph/htmls/aboutupcat.html (UP Office of Admissions,
// retrieved 2026-10-09). UP names "Reading Comprehension (in English and Filipino)" as one of
// four subtests and publishes no question count, duration or weightage.
// The topic split below is StudyRoadmap's own study organisation, NOT an UP blueprint.
import type { Subject } from '../../types';
export const upcatReadingComprehension: Subject = {
  id: 'reading-comprehension', name: 'Reading Comprehension', color: '#6d28d9',
  topics: [
    { id: 'rc-001', name: 'Locating the Explicit Answer', weight: 5, description: 'The items where the answer is stated outright. Fast, high-yield, and the block that a candidate loses by over-reading instead of scanning.' },
    { id: 'rc-002', name: 'Inference from Stated Evidence', weight: 5, description: 'Drawing a conclusion the passage supports without stating it, while staying strictly inside what the text licenses rather than what you know about the world.' },
    { id: 'rc-003', name: 'Tone, Attitude and Purpose', weight: 4, description: 'Reading the author\'s stance — cautious, critical, celebratory, regretful — from word choice and emphasis, and distinguishing it from the tone of an individual quoted speaker.' },
    { id: 'rc-004', name: 'Structure, Cohesion and Argument Mapping', weight: 4, description: 'Tracking how a paragraph is built: claim, evidence, counter-argument, concession. Following a pronoun reference across a long text is where most candidates lose their place.' },
    { id: 'rc-005', name: 'Main Idea and Summarising', weight: 4, description: 'Separating the central claim from the interesting detail, and compressing a passage to its idea without importing a topic the passage only touches.' },
    { id: 'rc-006', name: 'Vocabulary in Context', weight: 3, description: 'Pinpointing a word\'s meaning from its sentence, and distinguishing a near-synonym that changes the argument\'s force from an interchangeable one.' },
  ],
};
