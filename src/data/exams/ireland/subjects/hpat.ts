import type { Subject } from '../../types';

// Health Professions Admission Test - Ireland (HPAT-Ireland). Set by the
// Australian Council for Educational Research (ACER) on behalf of the
// participating Irish universities (RCSI, UCD, TCD, UL). Used as part of the
// selection process for undergraduate medicine and, at UL, for Occupational
// Therapy and Speech and Language Therapy. Three sections for standard
// applicants; Section 4 (Written English) applies only to UL applicants for
// those two courses. The section rows below are kept as orientation rows;
// the skill groups ACER names inside each section are added as their own
// revision rows. Topics below are taken from the official HPAT-Ireland
// Information Booklet 2022 (hpat-ireland.acer.org/files/HPAT-Ireland_2022.pdf)
// and the ACER preparation page (hpat-ireland.acer.org/preparation).
// Source: HPAT-Ireland Information Booklet,
// https://hpat-ireland.acer.org/files/HPAT-Ireland_2022.pdf
// (preparation and practice tests: https://hpat-ireland.acer.org/preparation)
// Verify the live paper pattern and section durations on hpat-ireland.acer.org
// before committing a revision plan to a student.
export const hpatSubject: Subject = {
  id: 'hpat',
  name: 'HPAT-Ireland',
  color: '#7c3aed',
  topics: [
    { id: 'hpat-001', name: 'Logical Reasoning and Problem Solving', weight: 5 as const, description: 'Orientation row for section 1, the longest and most heavily weighted of the three sections. After this you can split a section 1 item by the skill it is testing and send it to the right row below instead of working through every item the same way.' },
    { id: 'hpat-002', name: 'Interpersonal Understanding', weight: 4 as const, description: 'Orientation row for section 2, which tests reading a written scenario and working out what the people in it are thinking and feeling. After this you can read a scenario for the people in it rather than for the problem it describes.' },
    { id: 'hpat-003', name: 'Non-Verbal Reasoning', weight: 4 as const, description: 'Orientation row for section 3, which is made up entirely of diagrams and carries no written information at all. After this you can decide whether an item is a sequence, a transformation or a search problem before you start working on it.' },
    { id: 'hpat-004', name: 'Written English', weight: 1 as const, description: 'Orientation row for section 4, which only UL applicants for the two named courses sit. After this you can write short pieces to a time limit that answer the instruction, rather than writing well but writing something else.' },

    { id: 'hpat-005', name: 'Comprehension and Analysis of Written Information', weight: 4 as const, description: 'Section 1. After revising this you can read a passage, table or diagram once and pull out the specific detail the question asks for, without needing to read it a second time.' },
    { id: 'hpat-006', name: 'Quantitative Reasoning and Problem Solving', weight: 4 as const, description: 'Section 1. After revising this you can set up and solve a multi-step numerical or data problem without a calculator being the bottleneck, and check your answer against the options before committing to it.' },
    { id: 'hpat-007', name: 'Inferring Thoughts, Feelings and Intentions', weight: 4 as const, description: 'Section 2. After revising this you can rank the emotions and motives described in a scenario correctly, and choose the response that a person in that situation would most plausibly take next.' },
    { id: 'hpat-008', name: 'Pattern Sequences and Spatial Transformations', weight: 4 as const, description: 'Section 3. After revising this you can continue a shape or number sequence, work out what a mirror image, rotation or fold produces, and find a hidden figure inside a more complicated one.' }
  ]
};
