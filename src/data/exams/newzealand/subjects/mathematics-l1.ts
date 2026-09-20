// NCEA Level 1 Mathematics and Statistics.
// Awarding body: NZQA (New Zealand Qualifications Authority).
// Specification: Mathematics and Statistics achievement standards, Level 1
// (revision 2024 for first assessment in 2024 onwards). Four achievement
// standards, each worth 5 credits, totalling 20 credits toward NCEA Level 1.
// Two are internally assessed (91944, 91945) and two are externally assessed
// by end-of-year examination (91946, 91947). The strand keywords (Number,
// Algebra, Geometry, Measurement, Statistics, Probability) come from the NZC
// Mathematics and Statistics learning area. Topic weights reflect published
// credit value: all four standards carry 5 credits, with external assessments
// weighted slightly higher because they sit in the end-of-year exam window.
// Source: NZQA NCEA Level 1 Mathematics and Statistics achievement standards,
// https://www.nzqa.govt.nz/ncea/assessment/search.do?level=01&query=mathematics&view=all
// Re-check the live standard numbers and assessment methods on nzqa.govt.nz
// before committing any revision plan to a student.

import type { Subject } from '../../types';

export const mathematicsL1: Subject = {
  id: 'mathematics-l1',
  name: 'Mathematics and Statistics',
  color: '#2563eb',
  topics: [
    { id: 'mathl1-001', name: 'Explore data using a statistical enquiry process (91944)', weight: 4 as const, description: 'Plan, collect, manage and present data to answer a question; describe patterns and trends in context, communicate findings with appropriate graphs and summary statistics. Internal, 5 credits.' },
    { id: 'mathl1-002', name: 'Use mathematical methods to explore problems that relate to life in Aotearoa New Zealand or the Pacific (91945)', weight: 4 as const, description: 'Select and use mathematical methods, including number, measurement, algebra, geometry, statistics or probability, applied to a context connected to Aotearoa or the Pacific. Internal, 5 credits.' },
    { id: 'mathl1-003', name: 'Interpret and apply mathematical and statistical information in context (91946)', weight: 5 as const, description: 'Make sense of given mathematical and statistical information, select and apply appropriate methods to solve problems in context, and communicate findings. External examination, 5 credits.' },
    { id: 'mathl1-004', name: 'Demonstrate mathematical reasoning (91947)', weight: 5 as const, description: 'Solve problems using number, algebra, geometry, measurement, statistics or probability with relational and extended abstract thinking; justify reasoning. External examination, 5 credits.' }
  ]
};
