import type { Subject } from '../types';

const legal_reasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#6b7280',
  topics: [
    { id: 'legal--001', name: 'Introduction to Law', weight: 3 as const, description: 'Sources of law, classifications of law (public/private, municipal/international), and the hierarchy of norms in Tanzania\'s legal system.' },
    { id: 'legal--002', name: 'Tanzanian Legal System', weight: 3 as const, description: 'Structure of courts, the Constitution of Tanzania 1977, fundamental rights, and the role of the Attorney General.' },
    { id: 'legal--003', name: 'Contract Law Basics', weight: 3 as const, description: 'Formation of contract, essential elements, capacity, and legality — contract questions frequently appear in law entrance examinations.' },
    { id: 'legal--004', name: 'Law of Torts', weight: 3 as const, description: 'Negligence, strict liability, vicarious liability, and defences — tortious liability is commonly tested in Tanzania law admissions.' },
    { id: 'legal--005', name: 'Criminal Law Fundamentals', weight: 3 as const, description: 'Elements of crime (actus reus, mens rea), categories of offences, and general defences under Tanzanian criminal law.' },
    { id: 'legal--006', name: 'Constitutional Law', weight: 3 as const, description: 'Bill of Rights, separation of powers, judicial review, and federalism under Tanzania\'s constitutional framework.' },
    { id: 'legal--007', name: 'Property Law', weight: 3 as const, description: 'Land law, ownership, possessory rights, and the Customary Land Act — directly relevant to Tanzanian real property issues.' },
    { id: 'legal--008', name: 'Legal Reasoning & Logic', weight: 3 as const, description: 'Deductive and inductive reasoning, identifying relevant facts, applying legal principles, and distinguishing cases.' },
    { id: 'legal--009', name: 'Statutory Interpretation', weight: 3 as const, description: 'Rules of interpretation (literal, golden, mischief), maxims of equity, and how courts construe legislation in Tanzania.' },
    { id: 'legal--010', name: 'Legal Writing & Mooting', weight: 3 as const, description: 'Legal argument structure, citation conventions, and the basics of legal research for introductory mooting exercises.' },
  ]
};

export { legal_reasoning };
