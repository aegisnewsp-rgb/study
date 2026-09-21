// Qatar General Secondary Education Certificate — English Language.
// Awarding body: Ministry of Education and Higher Education (MoEHE), State of
// Qatar. Source: Curriculum Standards for the State of Qatar, English
// Language, KG to Grade 12 (MoEHE, via the ABEGS Marsad regional education
// archive), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/e6ad4393-a0fa-4b0c-8bfb-f7f530c76a4b.pdf
// The MoEHE English standards document organises the Grade 12 exit level at
// CEFR B2 Low-Mid, with four skill strands (Listening L1-L3, Speaking S1-S5,
// Reading R1-R5, Writing W1-W4) plus the cross-strand competency framework
// drawn from the Qatar National Curriculum Framework (Supreme Education
// Council, 2016). Topics below are the MoEHE published skill strands with
// their sub-strand descriptors, grouped into study-ready units. Re-check
// the live Grade 12 textbook edition, the CEFR mapping and any in-year
// curriculum changes on https://www.edu.gov.qa/ before committing any
// revision plan to a student.

import type { Subject } from '../../types';

export const qsscEnglish: Subject = {
  id: 'qssc-english',
  name: 'English Language',
  color: '#0ea5e9',
  topics: [
    { id: 'qssceng-001', name: 'Listening — Main Ideas, Details and Strategies', weight: 4 as const, description: 'Listening and responding appropriately to main ideas and details across a range of recorded texts, using strategies such as predicting, monitoring and inferring to understand meaning at MoEHE Grade 12 L1-L3 sub-strand level (CEFR B2 Low-Mid exit).' },
    { id: 'qssceng-002', name: 'Speaking — Communicating, Register and Audience', weight: 4 as const, description: 'Communicating personal and general information appropriately, developing speaking strategies, using appropriate register for the context, and adapting delivery for small and large audiences (MoEHE S1-S5 sub-strands).' },
    { id: 'qssceng-003', name: 'Reading — Comprehension, Vocabulary and Strategies', weight: 5 as const, description: 'Reading and responding to main ideas and details, working with sounds-spelling relationships at advanced word level, developing appropriate reading strategies, and showing interest in reading across literary and informational texts (MoEHE R1-R5 sub-strands).' },
    { id: 'qssceng-004', name: 'Writing — Communicating, Organising and Register', weight: 5 as const, description: 'Communicating information appropriately in writing, organising, spelling and punctuating written work, developing writing strategies (planning, drafting, revising), and using appropriate register for the audience (MoEHE W1-W4 sub-strands).' },
    { id: 'qssceng-005', name: 'Grammar and Vocabulary in Context', weight: 4 as const, description: 'Grammar structures and vocabulary at the CEFR B2 Low-Mid exit level — complex sentence patterns, modal verbs, passive forms, conditionals, reported speech, phrasal verbs, collocations, and academic vocabulary in context.' },
    { id: 'qssceng-006', name: 'Critical Thinking and Response to Texts', weight: 3 as const, description: 'Inferring implicit meaning, evaluating argument and evidence, comparing perspectives across texts, and producing a sustained written or spoken response that synthesises information from two or more sources.' },
    { id: 'qssceng-007', name: 'CEFR B2 Communicative Competence', weight: 3 as const, description: 'Pragmatic competence (using suitable strategies in communication), sociolinguistic competence (register, politeness, formality), and the linguistic range expected at MoEHE Grade 12 exit mapped to the CEFR B2 Low-Mid descriptor.' }
  ]
};
