import type { Subject } from '../../types';

// Health Professions Admission Test - Ireland (HPAT-Ireland). Set by the
// Australian Council for Educational Research (ACER) on behalf of the
// participating Irish universities (RCSI, UCD, TCD, UL). Used as part of the
// selection process for undergraduate medicine and, at UL, for Occupational
// Therapy and Speech and Language Therapy. Three sections for standard
// applicants; Section 4 (Written English) applies only to UL applicants for
// those two courses. Topics below are taken from the official HPAT-Ireland
// Information Booklet 2022 (hpat-ireland.acer.org/files/HPAT-Ireland_2022.pdf)
// and the ACER preparation page (hpat-ireland.acer.org/preparation).
// Source: HPAT-Ireland Information Booklet,
// https://hpat-ireland.acer.org/preparation
// Verify the live paper pattern and section durations on hpat-ireland.acer.org
// before committing a revision plan to a student.
export const hpatSubject: Subject = {
  id: 'hpat',
  name: 'HPAT-Ireland',
  color: '#7c3aed',
  topics: [
    { id: 'hpat-001', name: 'Logical Reasoning and Problem Solving', weight: 5 as const, description: 'Section 1 - comprehension and analysis of written passages, tables, charts and graphs; reasoning to draw conclusions, identify assumptions, evaluate arguments and solve quantitative and qualitative problems. Largest section by mark weight.' },
    { id: 'hpat-002', name: 'Interpersonal Understanding', weight: 4 as const, description: 'Section 2 - identifying, understanding and inferring the thoughts, feelings, behaviour and intentions of people from written scenarios; recognising emotion, motivation and social dynamics in health-relevant contexts.' },
    { id: 'hpat-003', name: 'Non-Verbal Reasoning', weight: 4 as const, description: 'Section 3 - abstract pattern recognition across shape-and-pattern sequences, mirror images, figure rotations, folding, embedded figures and logical set combinations. Assessed entirely through diagrams.' },
    { id: 'hpat-004', name: 'Written English', weight: 1 as const, description: 'Section 4 - required only for UL MSc Occupational Therapy and MSc Speech and Language Therapy applicants. Two short written tasks marked automatically against linguistic criteria; preparation via short timed written pieces.' }
  ]
};
