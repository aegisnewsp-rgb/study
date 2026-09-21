// HKDSE English Language — Awarding body: Hong Kong Examinations and
// Assessment Authority (HKEAA). The HKDSE English Language examination is
// built around four public-examination papers plus School-based Assessment
// (SBA). Topics below map to the published Mode of Assessment and the four
// papers; the assessment objectives (Reading, Writing, Listening, Speaking)
// published in the HKDSE English Language Assessment Framework are
// distributed across each paper. Paper 1 Reading and Paper 3 Listening &
// Integrated Skills use a graded approach with Part A compulsory plus a
// choice of Part B1 (easier, max Level 4) or Part B2 (harder, full range).
// Source: 2026 HKDSE English Language Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/eng_lang/2026hkdse-e-elang.pdf
// and the CDC/HKEAA English Language Curriculum and Assessment Guide
// (Secondary 4 - 6) referenced therein. Weights reflect paper weightings:
// Reading 20%, Writing 25%, Listening & Integrated Skills 30%, Speaking 10%
// in the public examination; SBA 15%. Re-check the live paper pattern,
// grading approach and SBA regulations on hkeaa.edu.hk before committing.

import type { Subject } from '../../types';

export const hkdseEnglish: Subject = {
  id: 'hkdse-english',
  name: 'English Language',
  color: '#0ea5e9',
  topics: [
    { id: 'hkdse-engl-001', name: 'Paper 1 — Reading (20%, 1.5 hours)', weight: 4 as const, description: 'Two parts, each worth 10%. Part A is compulsory. Part B requires a choice between B1 (easier, max attainable Level 4) and B2 (more difficult, full range of levels). A graded approach. Candidates respond to a variety of written texts of different lengths and difficulty. Tests understanding purpose/meaning, main theme, key details, contextual meaning of words, tone and mood, and the ability to distinguish and evaluate views, attitudes and arguments.' },
    { id: 'hkdse-engl-002', name: 'Paper 2 — Writing (25%, 2 hours)', weight: 5 as const, description: 'Part A (10%) — a short guided task of about 200 words: candidates are given the situation, purpose and relevant information. Part B (15%) — a longer, more open-ended task of about 400 words: candidates choose 1 of 4 questions. Tests ability to write for different contexts, audiences and purposes with relevant content; use varied vocabulary, linguistic devices and language patterns; plan and produce coherent, structured texts; and use appropriate tone, style, register and genre features.' },
    { id: 'hkdse-engl-003', name: 'Paper 3 — Listening and Integrated Skills (30%, about 2 hours)', weight: 5 as const, description: 'Two parts, each worth 15%. Part A is compulsory; Part B requires a choice between B1 and B2 with the same grading rule as Paper 1. Parts B1 and B2 are integrated listening, reading and writing tasks of different difficulty based on the same theme. Candidates process information by selecting and combining data from spoken and written sources to complete listening and writing tasks in a practical work or study situation. At least one writing task requires an extended piece of writing (100-200 words).' },
    { id: 'hkdse-engl-004', name: 'Paper 4 — Speaking (10%, about 20 minutes)', weight: 3 as const, description: 'Part A — Group Interaction (about 10 minutes preparation, 8 minutes discussion per group of four candidates based on a short text); Part B — Individual Response (1 minute per candidate, responding individually to examiner\'s questions based on the group task). Tests ability to express information and ideas with elaboration, use a range of vocabulary, establish and maintain spoken exchanges, produce coherent structured speeches, pronounce clearly, and use appropriate pace, volume, intonation, stress and gesture.' },
    { id: 'hkdse-engl-005', name: 'School-based Assessment — SBA Reading/Viewing Programme (15%)', weight: 3 as const, description: 'Compulsory for school candidates (private candidates are exempt). A reading/viewing programme in which S4-S6 students read or view 2 to 4 texts, including at least one print and one non-print text, and write personal reflections. Students take part in a discussion or make an individual presentation. Two SBA marks are reported (one in S5 and one in S6): one must be from a group interaction, one from an individual presentation. Marks are based on oral performance; the written work is not itself scored.' },
    { id: 'hkdse-engl-006', name: 'Assessment Objectives Across All Papers', weight: 3 as const, description: 'Cross-paper strands tested throughout the four papers: (a) understanding and interpreting the purpose and meaning of a broad range of texts; (b) identifying the main theme and key details; (c) identifying the contextual meaning of words and phrases; (d) interpreting tone and mood of a writer or speaker; (e) distinguishing and evaluating views, attitudes and arguments in fairly complex texts; (f) understanding the use of a range of language features; (g) interpreting, analysing, selecting and organising ideas and information from various sources.' }
  ]
};