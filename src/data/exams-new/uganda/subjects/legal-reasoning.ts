import type { Subject } from '../types';

const legal_reasoning: Subject = {
  id: 'legal-reasoning',
  name: 'Legal Reasoning',
  color: '#6b7280',
  topics: [
    {
      id: 'legal--001',
      name: 'Introduction to Law and Legal Systems',
      weight: 3 as const,
      description: 'Foundational concepts of law, the nature and sources of law, and an overview of legal systems with emphasis on the common law tradition in Uganda.',
    },
    {
      id: 'legal--002',
      name: 'Constitutional Law of Uganda',
      weight: 3 as const,
      description: 'The 1995 Constitution of Uganda as amended, fundamental rights and freedoms, the structure of government, and the supremacy of the Constitution.',
    },
    {
      id: 'legal--003',
      name: 'Law of Torts',
      weight: 3 as const,
      description: 'General principles of tortious liability including negligence, nuisance, defamation, and trespass under Ugandan case law and statutes.',
    },
    {
      id: 'legal--004',
      name: 'Contract Law',
      weight: 3 as const,
      description: 'Formation of contracts, essential elements, capacity, terms, performance, and remedies for breach under Ugandan contract law.',
    },
    {
      id: 'legal--005',
      name: 'Criminal Law',
      weight: 3 as const,
      description: 'General principles of criminal liability, elements of major crimes, criminal omissions, and penalties under the Ugandan Penal Code Act.',
    },
    {
      id: 'legal--006',
      name: 'Evidence Law',
      weight: 3 as const,
      description: 'Rules governing the admissibility, weight, and types of evidence in Ugandan courts, including hearsay, confessions, and the burden of proof.',
    },
    {
      id: 'legal--007',
      name: 'Human Rights and Access to Justice',
      weight: 3 as const,
      description: 'Human rights protections under the Constitution, the role of the Uganda Human Rights Commission, and mechanisms for enforcing rights in courts.',
    },
    {
      id: 'legal--008',
      name: 'Legal Reasoning and Logic',
      weight: 3 as const,
      description: 'Application of logical reasoning to legal problems, identifying relevant facts, applicable law, and constructing sound legal arguments.',
    },
    {
      id: 'legal--009',
      name: 'Legal Writing and Drafting',
      weight: 3 as const,
      description: 'Principles of legal drafting including interpretation of statutes, use of legal terminology, and structuring of legal opinions and memoranda.',
    },
    {
      id: 'legal--010',
      name: 'Customary Law and Practice',
      weight: 3 as const,
      description: 'Overview of customary law in Uganda, its interaction with statutory law, and the status of traditional practices in modern legal practice.',
    },
  ],
};

export { legal_reasoning };
