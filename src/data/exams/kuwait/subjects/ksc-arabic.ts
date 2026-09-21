// Kuwait Secondary Certificate, Arabic Language subject — awarded by the
// Kuwait Ministry of Education at the General Secondary stage (Grades 10 to
// 12). Arabic is one of the eight foundation subjects taught across the new
// 2026/2027 secondary "tracks" regulation, alongside English, Islamic Studies,
// Mathematics, Integrated Sciences, Social Studies, Computing, and Physical
// Education. The Arabic curriculum at terminal level follows the five-domain
// structure used in Kuwait MOE Arabic textbooks: reading comprehension and
// literature, grammar (qawa'id), spelling and writing (imla' wa kitaba),
// rhetoric (balagha), and composition/expression (insha'). Topic strands
// below align with the official Arabic subject domains published in the
// Kuwait MOE Arabic curriculum framework. Source: Kuwait MOE,
// https://www.moe.edu.kw/, the secondary tracks regulation on kuwaitnow.net
// describing the foundation subjects, https://kuwaitnow.net/local/1409/57483/,
// and the ABEGS Kuwait curriculum review (Intermediate and Secondary), which
// describes the Arabic curriculum domain structure,
// https://cdn-files.abegs.org/abegs-marsad-prod/uploads/858632c1-3623-4790-a595-f11d80e5f4ef.pdf
// Re-check the live Arabic terminal-exam content on moe.edu.kw before
// committing any revision plan to a student.

import type { Subject } from '../../types';

export const kscArabic: Subject = {
  id: 'ksc-arabic',
  name: 'Arabic Language',
  color: '#dc2626',
  topics: [
    { id: 'kscar-001', name: 'Reading Comprehension and Literary Texts', weight: 5 as const, description: 'Poetry (pre-Islamic, Umayyad, Abbasid, modern), prose passages and literary criticism — the heaviest domain by marks on the terminal Arabic exam at Thanawiya Amma level.' },
    { id: 'kscar-002', name: 'Grammar (Nahw)', weight: 5 as const, description: 'Sentence structure (jumla ismiyya and fi\'liyya), case endings (i\'rab), subject/predicate, objects, adverbials, conditional sentences and the full Arabic morphological framework.' },
    { id: 'kscar-003', name: 'Morphology (Sarf)', weight: 3 as const, description: 'Verb forms (mujarrad, mazeed fihi), derived nouns, weak verbs, sound and hollow verbs, and how Arabic word patterns map to grammatical function.' },
    { id: 'kscar-004', name: 'Spelling (Imla\') and Writing Mechanics', weight: 3 as const, description: 'Hamza rules, taa marbuta, alif maqsura, alif layyina, sukun and shadda, plus paragraph punctuation and orthographic conventions used in formal Arabic writing.' },
    { id: 'kscar-005', name: 'Rhetoric (Balagha) and Literary Devices', weight: 4 as const, description: 'Ma\'ani (rhetorical meanings — emphasis, restriction, conjunction), Bayaan (clarity — simile, metaphor, metonymy), and Badi\' (embellishment — antithesis, paronomasia) as applied to the studied literary texts.' },
    { id: 'kscar-006', name: 'Composition and Expression (Insha\')', weight: 4 as const, description: 'Argumentative, descriptive, narrative and expository essays; letter writing (formal/informal); introduction-body-conclusion structure; cohesion devices and stylistic register.' },
    { id: 'kscar-007', name: 'Vocabulary and Etymology', weight: 3 as const, description: 'Classical and modern Arabic vocabulary, roots and patterns, semantic fields, and the difference between synonyms in formal vs colloquial register.' }
  ]
};