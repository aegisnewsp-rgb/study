// Weights below are relative study importance within this paper, on the 1-5 scale declared by
// Topic in src/data/exams/types.ts. The LOE general-knowledge paper publishes no per-topic marks
// table, so weights follow how much examinable ground each topic covers in the Constitution of
// Nepal (2015) and the Nepalese statute book - they are not a published marks allocation.
// Facts and article/Part numbers are from the Government of Nepal English text of the
// Constitution (ag.gov.np) and the Nepal Gazette publication date; see
// /data/sources/nepal/constitution-2015-extract.md.
export const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'The Constitution of Nepal (2015)', weight: 5 as const, description: 'The supreme law, published in the Nepal Gazette on 20 September 2015 (2072.6.3) and replacing the Interim Constitution of 2007. Learn its Part structure - Part 3 Fundamental Rights and Duties, Part 5 Structure of State and Distribution of State Power - and the amendment procedure, because most general-knowledge questions trace back to it.' },
    { id: 'gk-002', name: 'Nepal\'s Legal System and Court Structure', weight: 4 as const, description: 'Article 127 creates three tiers - Supreme Court, High Court and District Court - and allows judicial bodies at the local level for alternative dispute settlement. Article 128 makes the Supreme Court a court of record and the final authority to interpret the Constitution and laws; Article 139 places a High Court in each State.' },
    { id: 'gk-003', name: 'Human Rights in Nepal', weight: 4 as const, description: 'Part 3 Fundamental Rights and Duties of the 2015 Constitution is the anchor: read each right with the remedy attached to it and the body that hears a complaint. Exam questions usually ask which right covers a situation, not which article number it carries.' },
    { id: 'gk-004', name: 'The Republic of Nepal', weight: 3 as const, description: 'How the state changed shape: the 1990 constitutional monarchy, the Interim Constitution of 2007, the declaration of the federal democratic republic, and the 2015 Constitution that fixed the present institutions. Learn the sequence and what each step created.' },
    { id: 'gk-005', name: 'Nepalese Legal History', weight: 3 as const, description: 'From the Muluki Ain as the country\'s first single legal code, through legal change in the Rana and Panchayat periods, to the 1990 and 2007 constitutional settlements and the codification that produced the Acts studied today.' },
    { id: 'gk-006', name: 'Key Nepalese Legislation', weight: 4 as const, description: 'The statutes a law-entrance or general-knowledge paper expects you to place by name and subject: the Muluki Civil and Criminal Codes, contract, evidence, citizenship and procedure law - and which body enacts each.' },
    { id: 'gk-007', name: 'Notable Nepalese Legal Cases', weight: 3 as const, description: 'Landmark judgments and the rule each settled: constitutional interpretation by the Supreme Court under Article 128, judicial review of legislation, and rights-based public-interest decisions. Revise them as case - holding - principle, not as facts.' },
    { id: 'gk-008', name: 'Nepalese Government and Politics', weight: 4 as const, description: 'The federal architecture in operation: President and Vice-President (Part 6), the Federal Executive (Part 7) and Federal Legislature (Part 8), the Attorney General (Part 12), the Commission for the Investigation of Abuse of Authority (Part 21), and the interrelation between federation, State and local level (Part 20).' }
  ]
};
