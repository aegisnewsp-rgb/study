import type { Subject } from '../types';

const listening: Subject = {
  id: 'listening', name: 'Listening', color: '#6b7280',
  topics: [
    { id: 'listen-001', name: 'Understanding Spoken Instructions', weight: 3 as const, description: 'Comprehend oral instructions, announcements, and directions delivered in Malaysian-accented and standard English.' },
    { id: 'listen-002', name: 'Identifying Key Information in Conversations', weight: 3 as const, description: 'Extract main points, specific details, and numeric information from recorded conversations and dialogues in Paper 3.' },
    { id: 'listen-003', name: 'Note-taking from Spoken Texts', weight: 3 as const, description: 'Develop effective shorthand and note organisation skills to capture key details during monologues and presentations.' },
    { id: 'listen-004', name: 'Understanding Different English Accents', weight: 3 as const, description: 'Familiarise yourself with various accents — Malaysian, British, and American — commonly heard in the MUET listening test.' },
    { id: 'listen-005', name: 'Interpreting Intonation & Emphasis', weight: 3 as const, description: 'Identify speaker attitude, emotion, and intent through stress patterns, intonation, and highlighted information.' },
    { id: 'listen-006', name: 'Answering Multiple-choice Listening Questions', weight: 3 as const, description: 'Apply elimination and prediction strategies when answering MCQ listening questions across all three sections of Paper 3.' },
    { id: 'listen-007', name: 'Handling Fast-paced Audio Texts', weight: 3 as const, description: 'Train to keep pace with native-speed audio recordings and maintain concentration throughout the 40-minute listening paper.' },
    { id: 'listen-008', name: 'Reviewing & Checking Responses', weight: 3 as const, description: 'Develop strategies to transfer answers carefully to the answer sheet and review responses before the audio ends.' },
  ]
};

export { listening };
