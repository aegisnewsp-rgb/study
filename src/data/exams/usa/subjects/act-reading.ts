// ACT — Reading Section.
// Awarding body: ACT, Inc.
// 40 questions, 35 minutes assessing reading comprehension across prose fiction, social science, humanities, and natural science.
// Official source: https://www.act.org/content/act/en/products-and-services/the-act.html

import type { Subject } from '../../types';

export const actReading: Subject = {
  id: 'act-reading',
  name: 'Reading',
  color: '#d97706',
  topics: [
    { id: 'actrd-001', name: 'Key Ideas and Details: Central Claims and Arguments', weight: 5 as const, description: 'Locating explicitly stated details, summarizing paragraphs, and determining the central thesis of dense prose passages.' },
    { id: 'actrd-002', name: 'Key Ideas and Details: Drawing Logical Inferences', weight: 5 as const, description: 'Synthesizing implicit premises and deducing unstated consequences supported by direct passage evidence.' },
    { id: 'actrd-003', name: 'Craft and Structure: Point of View and Rhetorical Purpose', weight: 4 as const, description: 'Evaluating an author\'s attitude, tone, bias, and rhetorical strategy in literary narratives and persuasive essays.' },
    { id: 'actrd-004', name: 'Craft and Structure: Contextual Vocabulary and Figurative Meaning', weight: 4 as const, description: 'Deciphering metaphorical language and determining the exact contextual definition of common words in academic prose.' },
    { id: 'actrd-005', name: 'Integration of Knowledge: Comparative Paired Passages', weight: 4 as const, description: 'Analyzing agreements, subtle disagreements, and complementary evidence across two related informational passages.' }
  ]
};

export default actReading;
