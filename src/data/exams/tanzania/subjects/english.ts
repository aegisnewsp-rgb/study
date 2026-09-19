export const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Reading and Comprehension', weight: 5 as const, description: 'Skimming, scanning, intensive and extensive reading, connotation and denotation, citation using APA style. Heaviest NECTA 122/1 component at 50% of Language Skills paper.' },
    { id: 'englis-002', name: 'Writing Skills', weight: 5 as const, description: 'Essays, note-taking, official/business/personal documents, minutes, CVs and reports. NECTA 122/1 tested in section B at 60 marks; central to the law-ent-tz English paper.' },
    { id: 'englis-003', name: 'Interpretation and Translation', weight: 3 as const, description: 'Translating between English and Kiswahili, interpreting texts, idiom handling. NECTA 122/1 at 12.5%.' },
    { id: 'englis-004', name: 'Novels and Short Stories', weight: 3 as const, description: 'Appreciation of set novels and short stories (Armah, Achebe, Ndunguru, Safo, Omowale). NECTA 122/2 literary works component.' },
    { id: 'englis-005', name: 'Language Theory and Functions', weight: 2 as const, description: 'Functions of language, levels of language analysis, language varieties. Covers the NECTA 122/1 topic officially titled "Introduction to Language".' },
    { id: 'englis-006', name: 'Word Formation', weight: 2 as const, description: 'Morphology: prefixes, suffixes, roots, inflection and derivation, compounding. NECTA 122/1 at 12.5%.' },
    { id: 'englis-007', name: 'Listening Skills', weight: 2 as const, description: 'Proofreading, public announcements, summarising, idiomatic expressions, register. NECTA 122/1 sub-component of Language Skills.' },
    { id: 'englis-008', name: 'Speaking Skills', weight: 2 as const, description: 'Pronunciation, stress and intonation, narration, debate organisation, speech presentation. NECTA 122/1 sub-component of Language Skills.' },
    { id: 'englis-009', name: 'Plays and Drama', weight: 2 as const, description: 'Analysis of set plays (Imbuga, Ngugi wa Thiong\'o, Bukenya, Ibsen, Ruganda). NECTA 122/2 component of literary appreciation.' },
    { id: 'englis-010', name: 'Poetry', weight: 2 as const, description: 'Poetic devices, analysis of set poems (Mloka, Institute of Education selections). NECTA 122/2 literary works component.' }
  ]
};