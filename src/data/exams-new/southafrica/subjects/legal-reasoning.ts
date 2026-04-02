import type { Subject } from '../types';

const legal_reasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#6b7280',
  topics: [
    { id: 'legal--001', name: 'Topic 1', weight: 3 as const, description: 'Logical reasoning and argument analysis covering deductive and inductive logic, logical fallacies, and evaluating the strength of legal arguments.' },
    { id: 'legal--002', name: 'Topic 2', weight: 3 as const, description: 'South African legal system structure including the judiciary, the rule of law, the Constitution as supreme law, and the role of the Constitutional Court.' },
    { id: 'legal--003', name: 'Topic 3', weight: 3 as const, description: 'Analysis of landmark South African cases and the doctrine of precedent (stare decisis) — understanding how courts are bound by higher court decisions.' },
    { id: 'legal--004', name: 'Topic 4', weight: 3 as const, description: 'Constitutional law fundamentals including the Bill of Rights, separation of powers, and fundamental rights protections under the 1996 Constitution.' },
    { id: 'legal--005', name: 'Topic 5', weight: 3 as const, description: 'Application of facts to legal principles through scenario-based questions simulating real legal problems encountered in LLB examinations.' },
    { id: 'legal--006', name: 'Topic 6', weight: 3 as const, description: 'Criminal law basics including elements of crime, intention, negligence, and defences under South African common law and the Constitution.' },
    { id: 'legal--007', name: 'Topic 7', weight: 3 as const, description: 'Contract law essentials covering offer, acceptance, consideration, and the validity requirements for legally binding agreements in South Africa.' },
    { id: 'legal--008', name: 'Topic 8', weight: 3 as const, description: 'Legal research and writing fundamentals including how to cite South African legal sources, use law reports, and structure a legal memorandum.' },
    { id: 'legal--009', name: 'Topic 9', weight: 3 as const, description: 'Rights and responsibilities of citizens under the South African Constitution including access to courts, equality rights, and privacy protections.' },
    { id: 'legal--010', name: 'Topic 10', weight: 3 as const, description: 'LLB entrance examination techniques including time management, question interpretation, and structuring well-reasoned written legal responses.' }
  ]
};

export { legal_reasoning };
