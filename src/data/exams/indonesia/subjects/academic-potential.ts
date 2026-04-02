export const academic_potential: Subject = {
  id: 'academic_potential', name: 'TPA — Academic Potential Test', color: '#8b5cf6',
  topics: [
    { id: 'utbk-tpa-001', name: 'Verbal Reasoning (Penalaran Verbal)', weight: 5 as const, description: 'Synonyms, antonyms, analogies, sentence completion, and logical verbal relationships — core verbal reasoning component of UTBK TPA section.' },
    { id: 'utbk-tpa-002', name: 'Numerical Reasoning (Penalaran Numerik)', weight: 5 as const, description: 'Number sequences, numerical patterns, basic arithmetic, percentages, ratios, and data interpretation from tables and graphs — highest-weight quantitative reasoning topic.' },
    { id: 'utbk-tpa-003', name: 'Figural/Abstract Reasoning (Penalaran Figural)', weight: 4 as const, description: 'Pattern recognition in visual series, spatial reasoning, matrix completion, and figural analogies — tests non-verbal logical thinking ability.' },
    { id: 'utbk-tpa-004', name: 'Logical Reasoning (Penalaran Logis)', weight: 4 as const, description: 'Syllogisms, logical deduction, cause-effect relationships, argument evaluation, and identifying assumptions in propositions.' },
    { id: 'utbk-tpa-005', name: 'Analytical Reasoning (Penalaran Analitis)', weight: 4 as const, description: 'Complex logical puzzles, data analysis, sequencing problems, and multi-step deductive reasoning — frequently combined with reading comprehension in UTBK.' }
  ]
};
