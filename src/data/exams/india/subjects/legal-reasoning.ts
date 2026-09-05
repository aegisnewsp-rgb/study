export const legal_reasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#6b7280',
  topics: [
    { id: 'legal--001', name: 'Legal Maxims & Latin Phrases', weight: 3 as const, description: 'Latin legal maxims and doctrine meanings frequently applied to factual legal scenarios in law entrance exams.' },
    { id: 'legal--002', name: 'Constitutional Law & Fundamental Rights', weight: 4 as const, description: 'Articles 12-35, basic structure doctrine, writ jurisdiction, directive principles, and judicial review principles.' },
    { id: 'legal--003', name: 'Law of Torts & Strict Liability', weight: 4 as const, description: 'Negligence, nuisance, trespass, defamation, strict and absolute liability, and tortious compensation rules.' },
    { id: 'legal--004', name: 'Law of Contracts & Agreement Formation', weight: 4 as const, description: 'Offer, acceptance, lawful consideration, capacity, void agreements, breach of contract, and specific relief.' },
    { id: 'legal--005', name: 'Criminal Law & General Exceptions', weight: 4 as const, description: 'Mens rea, actus reus, general exceptions, right of private defence, abetment, conspiracy, and criminal liability.' },
    { id: 'legal--006', name: 'Vicarious Liability & Master-Servant Relations', weight: 3 as const, description: 'Employer liability, course of employment doctrine, independent contractor exceptions, and state liability.' },
    { id: 'legal--007', name: 'Family Law & Succession Principles', weight: 2 as const, description: 'Marriage, dissolution, maintenance, guardianship, adoption, and succession principles under Indian personal laws.' },
    { id: 'legal--008', name: 'Intellectual Property & Cyber Law', weight: 3 as const, description: 'Copyright, trademarks, patents, IT Act cyber offences, digital privacy, and electronic evidence basics.' },
    { id: 'legal--009', name: 'International Law & Treaties', weight: 2 as const, description: 'Sources of international law, state sovereignty, ICJ jurisdiction, UN conventions, and human rights treaties.' },
    { id: 'legal--010', name: 'Environmental Law & Public Interest Litigation', weight: 3 as const, description: 'Precautionary principle, polluter pays doctrine, PIL locus standi, Article 21 environmental rights, and NGT powers.' },
    { id: 'legal--011', name: 'Legal Principle-Fact Scenarios', weight: 5 as const, description: 'Deductive application of given statutory principles strictly to fact patterns without assuming external knowledge.' },
    { id: 'legal--012', name: 'Judicial Structure & Supreme Court Precedents', weight: 3 as const, description: 'Hierarchy of courts in India, doctrine of precedent (stare decisis), judicial independence, and landmark apex rulings.' }
  ]
};
