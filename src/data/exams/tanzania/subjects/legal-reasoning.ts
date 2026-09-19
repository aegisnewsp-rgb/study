export const legal_reasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#6b7280',
  topics: [
    { id: 'legal--001', name: 'Analytical Reasoning', weight: 5 as const, description: 'Logic puzzles, sequencing, conditional rules, grouping and matching problems. Explicitly listed in the law-ent-tz exam pattern as a core Logical Reasoning component.' },
    { id: 'legal--002', name: 'Logical Reasoning', weight: 5 as const, description: 'Syllogisms, deductive and inductive arguments, assumption identification, conclusion drawing from premises. Stated directly in the law-ent-tz examPattern.' },
    { id: 'legal--003', name: 'Argument Analysis', weight: 4 as const, description: 'Evaluating the strength of arguments, identifying assumptions and flaws, weighing evidence. Named in the law-ent-tz examPattern as part of Logical Reasoning.' },
    { id: 'legal--004', name: 'Tanzanian Legal System', weight: 4 as const, description: 'Court hierarchy (Primary Courts, High Court, Court of Appeal, CAT), sources of law, statutory interpretation, role of the judiciary. Stated in law-ent-tz examPattern.' },
    { id: 'legal--005', name: 'Constitution of Tanzania', weight: 4 as const, description: 'Basic structure of the 1977 Union Constitution and the Zanzibar Constitution, fundamental rights, directive principles. Tested as part of Legal Concepts.' },
    { id: 'legal--006', name: 'Legal Terminology', weight: 4 as const, description: 'Key Latin and English legal terms: habeas corpus, mens rea, actus reus, prima facie, estoppel, ultra vires, sui generis. Required for the legal writing and concepts section.' },
    { id: 'legal--007', name: 'Critical Reasoning', weight: 3 as const, description: 'Identifying logical fallacies, evaluating evidence, distinguishing fact from opinion, detecting bias in argument presentation.' },
    { id: 'legal--008', name: 'Legal Concepts and Principles', weight: 3 as const, description: 'Introduction to jurisprudence, basic principles of contract, tort, criminal and constitutional law as tested at the law-ent-tz admission stage.' },
    { id: 'legal--009', name: 'Legal Reading Comprehension', weight: 3 as const, description: 'Reading and analysing legal passages, extracting rules and holdings from case summaries, interpreting statute excerpts.' },
    { id: 'legal--010', name: 'Sources of Tanzanian Law', weight: 2 as const, description: 'Constitution, legislation, case law (precedent), customary law, Islamic law (for Mainland/Tanzania), subsidiary legislation. Lower-weight but routinely tested.' }
  ]
};