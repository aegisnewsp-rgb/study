import type { Subject } from '../types';

const mental_ability: Subject = {
  id: 'mental-ability', name: 'Mental-Ability', color: '#6b7280',
  topics: [
    { id: 'mental-001', name: 'Topic 1', weight: 3 as const, description: 'Series Completion — finding the next figure, number, or letter in a given pattern or sequence.' },
    { id: 'mental-002', name: 'Topic 2', weight: 3 as const, description: 'Figure Classification — identifying the odd one out or grouping figures based on common attributes.' },
    { id: 'mental-003', name: 'Topic 3', weight: 3 as const, description: 'Spatial Visualization — mentally rotating, folding, or assembling 2D and 3D geometric figures.' },
    { id: 'mental-004', name: 'Topic 4', weight: 3 as const, description: 'Analogy and Matching — determining relationships between pairs of figures and applying the same relationship to find the missing one.' },
    { id: 'mental-005', name: 'Topic 5', weight: 3 as const, description: 'Sequence and Ranking — arranging people or objects in order based on given clues and positional descriptions.' },
    { id: 'mental-006', name: 'Topic 6', weight: 3 as const, description: 'Direction and Distance — solving problems involving turns, directions, and distance traveled from a starting point.' },
    { id: 'mental-007', name: 'Topic 7', weight: 3 as const, description: 'Syllogism and Logic Puzzles — working through multi-step logical puzzles involving constraints and deductions.' },
    { id: 'mental-008', name: 'Topic 8', weight: 3 as const, description: 'NMAT Mental Ability Mock Drills — simulating the time-pressured mental ability section of the actual NMAT exam.' }
  ]
};

export { mental_ability };
