// Digital SAT — Reading and Writing Section.
// Awarding body: College Board.
// Restructured as a multistage adaptive digital assessment since 2024.
// Administered via the Bluebook application: 2 modules, 54 total questions, 64 minutes.
// Official source: https://satsuite.collegeboard.org/sat

import type { Subject } from '../../types';

export const satReadingWriting: Subject = {
  id: 'sat-reading-writing',
  name: 'Reading and Writing',
  color: '#2563eb',
  topics: [
    { id: 'dsatrw-001', name: 'Craft and Structure: Words in Context', weight: 5 as const, description: 'Determining the high-utility meaning of academic and domain-specific vocabulary based on nuanced passage context and tone.' },
    { id: 'dsatrw-002', name: 'Craft and Structure: Text Structure and Purpose', weight: 4 as const, description: 'Analyzing how an author structures a short passage and evaluating the rhetorical function of specific sentences or paragraphs.' },
    { id: 'dsatrw-003', name: 'Craft and Structure: Cross-Text Connections', weight: 4 as const, description: 'Comparing and synthesizing claims, methods, or perspectives presented across two paired short passages.' },
    { id: 'dsatrw-004', name: 'Information and Ideas: Central Ideas and Details', weight: 5 as const, description: 'Extracting primary thesis statements, key supporting details, and implicit claims from informational and literary texts.' },
    { id: 'dsatrw-005', name: 'Information and Ideas: Command of Evidence', weight: 5 as const, description: 'Selecting textual evidence or analyzing quantitative data in tables and graphs to support, refute, or test a hypothesis.' },
    { id: 'dsatrw-006', name: 'Information and Ideas: Inferences', weight: 4 as const, description: 'Formulating the most logical, strictly supported conclusion that finishes an incomplete academic argument.' },
    { id: 'dsatrw-007', name: 'Standard English Conventions: Boundaries and Structure', weight: 5 as const, description: 'Applying punctuation rules for independent clauses, semicolons, colons, dashes, and subordinating conjunctions to eliminate fragments and run-ons.' },
    { id: 'dsatrw-008', name: 'Standard English Conventions: Agreement and Modifiers', weight: 4 as const, description: 'Ensuring grammatical subject-verb agreement, proper verb aspect and tense, pronoun-antecedent clarity, and modifier placement.' },
    { id: 'dsatrw-009', name: 'Expression of Ideas: Rhetorical Synthesis', weight: 4 as const, description: 'Synthesizing bulleted research notes to craft an effective sentence addressing a specified rhetorical goal.' },
    { id: 'dsatrw-010', name: 'Expression of Ideas: Transitions', weight: 5 as const, description: 'Selecting logical linking words indicating cause, contrast, continuation, or sequence between two sentences.' }
  ]
};

export default satReadingWriting;
