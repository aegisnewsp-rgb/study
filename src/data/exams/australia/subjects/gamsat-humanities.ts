// GAMSAT — Humanities and Social Sciences section.
// Official source: https://www.acer.edu.au/gamsat (ACER, retrieved 2026-10-09)
// ACER states the section is "Humanities and Social Sciences - 62 multiple choice
// questions" and "Tests skills in the interpretation and understanding of ideas in
// social and cultural contexts". The sub-topic split below is OUR study organisation
// of that 62-item pool - it is NOT an ACER-published weightage. ACER publishes no
// official per-topic weightage for this section.
import type { Subject } from '../../types';
export const gamsatHumanities: Subject = {
  id: 'humanities-social-sciences', name: 'Humanities and Social Sciences', color: '#7c3aed',
  topics: [
    { id: 'hss-001', name: 'Reading Comprehension and Inference', weight: 5, description: 'Identifying the main claim in an argument; separating what a text states from what it implies; tracking referents across long passages; evaluating the strength and quality of evidence a text uses.' },
    { id: 'hss-002', name: 'Argument and Reasoning', weight: 5, description: 'Identifying premises, conclusions and hidden assumptions; evaluating whether an argument is valid or merely persuasive; spotting common formal fallacies such as affirming the consequent, false dilemma and slippery slopes.' },
    { id: 'hss-003', name: 'Ethics and Moral Reasoning', weight: 4, description: 'Major normative ethical frameworks (deontological, consequentialist, virtue ethics and rights-based); applying them to concrete dilemmas; distinguishing a rights-based argument from a consequence-based one on the same scenario.' },
    { id: 'hss-004', name: 'Social Theory and Inequality', weight: 4, description: 'Classical and contemporary frameworks for explaining social stratification, mobility, culture and institutions; assessing explanations for persistent inequality in income, gender or ethnicity.' },
    { id: 'hss-005', name: 'Philosophy and Epistemology', weight: 4, description: 'Knowledge, belief and justification; competing accounts of truth and reality; how evidence and certainty are conceptualised; applying philosophical distinctions to everyday reasoning rather than to abstract definitions alone.' },
    { id: 'hss-006', name: 'Psychology and Human Behaviour', weight: 4, description: 'Research methods used in psychology including confounding and demand characteristics; developmental stages; cognition, memory and learning; motivation, emotion and social influence.' },
    { id: 'hss-007', name: 'Sociology and Social Institutions', weight: 3, description: 'Family, education, religion, economy and government as institutions; how social norms are formed and enforced; interpreting sociological survey data and case studies without over-generalising.' },
    { id: 'hss-008', name: 'History and Historical Reasoning', weight: 3, description: 'Causes and consequences across major historical periods; evaluating competing interpretations of the same event; using primary versus secondary sources critically; chronology and causation in historical explanation.' },
    { id: 'hss-009', name: 'Economics Applied to Social Context', weight: 3, description: 'Supply, demand and market equilibrium; opportunity cost and trade-offs; incentives, externality and public versus private benefit; interpreting a simple macroeconomic indicator such as inflation or unemployment.' },
    { id: 'hss-010', name: 'Law, Rights and Civic Institutions', weight: 3, description: 'How legal institutions work; rights and entitlements and who enforces them; civic structures and representation; applying a legal or constitutional principle to a described scenario.' },
    { id: 'hss-011', name: 'Data Literacy in Social Context', weight: 2, description: 'Reading proportions, rates and simple summary statistics in social data; spotting when a sample is unrepresentative; interpreting a comparative claim without overstating what the data shows.' },
  ],
};