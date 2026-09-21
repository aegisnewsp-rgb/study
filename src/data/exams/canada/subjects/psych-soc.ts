// Medical College Admission Test (MCAT) — Psychological, Social, and
// Biological Foundations of Behavior (Psych/Soc).
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The Psych/Soc section tests concepts from psychology, sociology, and
// biology that explain the behaviour and social interactions of
// individuals and groups. AAMC organises the content into five
// foundational concepts covering sensation, cognition, learning,
// social interaction, and social structure.
//
// Source: AAMC, What's on the MCAT Exam? (PDF Outline),
//   https://students-residents.aamc.org/prepare-mcat-exam/whats-mcat-exam-pdf-outline
// Source: AAMC, MCAT content outline download,
//   https://students-residents.aamc.org/media/9261/download
// Verify the live section length, scoring, and any in-year content
// changes on aamc.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const psychSoc: Subject = {
  id: 'psych-soc',
  name: 'Psychological, Social, and Biological Foundations of Behavior',
  color: '#f59e0b',
  topics: [
    { id: 'mcatps-001', name: 'Sensation, Perception and Attention', weight: 4 as const, description: 'Sensory transduction, threshold, Weber\'s law, signal detection theory, visual and auditory processing, perceptual organisation, attention (selective, divided, sustained), and consciousness. AAMC Foundational Concept 6.' },
    { id: 'mcatps-002', name: 'Cognition, Memory and Language', weight: 5 as const, description: 'Information processing, encoding, storage and retrieval, long-term versus working memory, forgetting, language production and comprehension, problem solving, decision making, and judgement under uncertainty. AAMC Foundational Concept 6.' },
    { id: 'mcatps-003', name: 'Learning, Motivation and Emotion', weight: 4 as const, description: 'Classical and operant conditioning, observational learning, cognitive learning, reinforcement schedules, motivation theories (drive reduction, arousal, incentive), emotion theories, and stress responses. AAMC Foundational Concept 6.' },
    { id: 'mcatps-004', name: 'Development, Personality and Psychopathology', weight: 4 as const, description: 'Piaget\'s stages, attachment theory, Erikson\'s stages, Freud and the psychodynamic tradition, trait theories, the five-factor model, anxiety disorders, mood disorders, schizophrenia, and personality disorders. AAMC Foundational Concept 7.' },
    { id: 'mcatps-005', name: 'Self-Concept, Social Interaction and Socialisation', weight: 4 as const, description: 'Self-concept, self-esteem, self-efficacy, identity formation, attitudes, persuasion, conformity (Asch, Milgram), obedience, group dynamics, prejudice, discrimination, and stereotyping. AAMC Foundational Concept 8.' },
    { id: 'mcatps-006', name: 'Social Structure, Stratification and Demographics', weight: 4 as const, description: 'Family, education, religion, economy, government, healthcare, social class, stratification, mobility, demographic transition, urbanisation, immigration, and aging. AAMC Foundational Concept 9.' },
    { id: 'mcatps-007', name: 'Biology of Behaviour: Neuroanatomy and Neurochemistry', weight: 5 as const, description: 'The neuron, action potentials, synapses and neurotransmitters, the central and peripheral nervous systems, the brainstem, limbic system, cerebral cortex, the endocrine system, and the biological basis of behaviour. AAMC Foundational Concept 10.' },
    { id: 'mcatps-008', name: 'Research Methods, Statistics and Ethics in Psychology', weight: 3 as const, description: 'Experimental versus correlational designs, variables and controls, sampling, descriptive and inferential statistics, effect size, confidence intervals, research ethics, and informed consent. AAMC SIRS Skills 1 and 2.' }
  ]
};
