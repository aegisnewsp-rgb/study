// Kuwait Secondary Certificate, English subject — awarded by the Kuwait
// Ministry of Education at the General Secondary stage (Grades 10 to 12).
// The official textbook used in Kuwait public secondary schools is "Over To
// You" (Student's Book + Workbook), published by the Ministry of Education's
// Curriculum Development Sector and currently adopted across Grades 10, 11
// and 12. The Grade 12 syllabus was issued by the ELT General Supervision
// for the 2025-2026 second term and published on eltsupervisionkw.com — the
// second-term units 7-12 are the basis for the topic names below, with the
// Grade 10/11 syllabus published by the same ELT Supervision following the
// same unit-of-work structure. Source: ELT General Supervision, Kuwait MOE,
// Grade 12 syllabus, second term 2025-2026,
// https://eltsupervisionkw.com/wp-content/uploads/2026/01/public-schools-g.-12-b-syllabus-2025-2026-modified.pdf
// Re-check the live secondary English syllabus, including any 2026/2027
// tracks-system revision, on eltsupervisionkw.com and moe.edu.kw before
// committing any revision plan to a student.

import type { Subject } from '../../types';

export const kscEnglish: Subject = {
  id: 'ksc-english',
  name: 'English (Over To You)',
  color: '#10b981',
  topics: [
    { id: 'ksceng-001', name: 'Unit 7 — Long Lives', weight: 3 as const, description: 'Reading about elderly life and interview comprehension; grammar focus on direct vs reported questions and statements; vocabulary collocations with make/do, phrasal verbs; writing an article with argumentative structure.' },
    { id: 'ksceng-002', name: 'Unit 8 — Town and Country', weight: 3 as const, description: 'Reading about rural life and the end of village communities; grammar on inverted sentences and idiomatic "and"; vocabulary word families and suffixes; comparing/contrasting speaking tasks; writing a recommendations email.' },
    { id: 'ksceng-003', name: 'Unit 9 — New Ways and Old', weight: 3 as const, description: 'Listening to conversations about different approaches to work and life; grammar on causative verbs across present/past/future; vocabulary on suffixes and sports idioms; reading and writing a biography; comparing past and present.' },
    { id: 'ksceng-004', name: 'Unit 10 — Pushing the Limits', weight: 4 as const, description: 'Reading a Kuwaiti climber profile and interviews; grammar on past perfect simple and continuous; vocabulary on phrasal verbs with "come" and adjectives beginning with "a"; persuasive writing responding to an advert.' },
    { id: 'ksceng-005', name: 'Unit 11 — The Final Frontier', weight: 3 as const, description: 'Reading a factfile and a report on space-age technology; grammar on the passive with modal verbs and either-or / neither-nor constructions; vocabulary on space and technology register; writing a report on space technology.' },
    { id: 'ksceng-006', name: 'Unit 12 — Geniuses', weight: 3 as const, description: 'Reading about talented children and geniuses; grammar on relative clauses, "-ing" verbs and "as...as" comparisons; vocabulary on nouns and adjectives; writing a recommendation letter; pronunciation practice on focus and rhythm.' },
    { id: 'ksceng-007', name: 'Grammar Across Units (Direct/Indirect, Inversions, Causatives, Past Perfect, Passive Modals, Relative Clauses)', weight: 4 as const, description: 'Cross-unit grammar strands drawn from the official Grade 12 Over To You syllabus — direct and reported speech, inverted sentences for emphasis, causative verbs (have/get something done), past perfect simple and continuous, passive voice with modal verbs, defining and non-defining relative clauses.' }
  ]
};