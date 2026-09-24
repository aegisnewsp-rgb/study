// ACT — Science Section.
// Awarding body: ACT, Inc.
// 40 questions, 35 minutes assessing scientific analysis, data representation, research summaries, and conflicting viewpoints.
// Official source: https://www.act.org/content/act/en/products-and-services/the-act.html

import type { Subject } from '../../types';

export const actScience: Subject = {
  id: 'act-science',
  name: 'Science',
  color: '#7c3aed',
  topics: [
    { id: 'actsci-001', name: 'Data Representation: Graph and Table Interpretation', weight: 5 as const, description: 'Reading multi-axis scatterplots, bar graphs, contour maps, and data tables to interpolate and extrapolate values.' },
    { id: 'actsci-002', name: 'Research Summaries: Experimental Design and Variables', weight: 5 as const, description: 'Identifying independent, dependent, and controlled variables, and assessing why specific controls were included in scientific experiments.' },
    { id: 'actsci-003', name: 'Research Summaries: Interpreting Experimental Results', weight: 4 as const, description: 'Evaluating trends, mathematical correlations, and anomalies across successive laboratory trials and iterations.' },
    { id: 'actsci-004', name: 'Conflicting Viewpoints: Evaluating Competing Hypotheses', weight: 4 as const, description: 'Comparing and critiquing divergent theories proposed by multiple scientists or students discussing a scientific phenomenon.' },
    { id: 'actsci-005', name: 'Scientific Investigation: Testing Predictions and New Data', weight: 4 as const, description: 'Predicting how adding new experimental observations would confirm, weaken, or invalidate alternative scientific claims.' }
  ]
};

export default actScience;
