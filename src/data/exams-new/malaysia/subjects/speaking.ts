import type { Subject } from '../types';

const speaking: Subject = {
  id: 'speaking', name: 'Speaking', color: '#6b7280',
  topics: [
    { id: 'speaki-001', name: 'Part 1: Individual Reponse — Topic Discussion', weight: 3 as const, description: 'Deliver a 1–2 minute spontaneous response on familiar and academic topics, demonstrating fluency and relevant content.' },
    { id: 'speaki-002', name: 'Part 2: Individual Presentation — Planning', weight: 3 as const, description: 'Organise a 3-minute presentation with a clear introduction, main points, and conclusion based on a visual stimulus card.' },
    { id: 'speaki-003', name: 'Part 2: Individual Presentation — Delivery', weight: 3 as const, description: 'Deliver a well-structured presentation with appropriate body language, eye contact, and variedintonation to engage the listener.' },
    { id: 'speaki-004', name: 'Part 3: Group Discussion — Turn-taking', weight: 3 as const, description: 'Participate actively in a group discussion by taking turns, responding to others\' points, and contributing new ideas politely.' },
    { id: 'speaki-005', name: 'Part 3: Group Discussion — Elaboration', weight: 3 as const, description: 'Build on groupmates\' contributions by providing reasons, examples, and counter-arguments to deepen the discussion.' },
    { id: 'speaki-006', name: 'Pronunciation & Intonation Clarity', weight: 3 as const, description: 'Focus on clear pronunciation of problematic sounds for Malaysian speakers and natural intonation patterns for emphasis.' },
    { id: 'speaki-007', name: 'Vocabulary Range in Speaking', weight: 3 as const, description: 'Use a wide range of topic-specific and academic vocabulary appropriately during individual and group speaking tasks.' },
    { id: 'speaki-008', name: 'Managing Nerves & Speaking Fluency', weight: 3 as const, description: 'Develop confidence through regular speaking practice, and maintain fluency by avoiding excessive fillers and unnatural pauses.' },
  ]
};

export { speaking };
