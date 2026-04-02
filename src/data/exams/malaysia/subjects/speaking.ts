export const speaking: Subject = {
  id: 'speaking', name: 'Speaking (Paper 3)', color: '#8b5cf6',
  topics: [
    { id: 'muet-speak-001', name: 'Individual Presentation Skills', weight: 5 as const, description: 'Delivering well-structured oral presentations on given topics, supporting ideas with examples, using academic vocabulary, and maintaining coherent arguments — highest-weight MUET speaking component.' },
    { id: 'muet-speak-002', name: 'Spoken Interaction and Discussion', weight: 5 as const, description: 'Participating in group discussions, responding to others\' points, expressing opinions, agreeing/disagreeing politely, and building on peers\' contributions — core MUET Paper 3 Group Discussion task.' },
    { id: 'muet-speak-003', name: 'Fluency and Coherence in Speech', weight: 4 as const, description: 'Speaking without excessive hesitation, using connected speech, discourse markers, and logical organization of ideas to maintain comprehensible, coherent spoken discourse.' },
    { id: 'muet-speak-004', name: 'Pronunciation and Intonation', weight: 4 as const, description: 'Clear pronunciation of English sounds, word stress, sentence stress, and intonation patterns that aid comprehension — assessed across all MUET speaking tasks.' },
    { id: 'muet-speak-005', name: 'Vocabulary and Grammatical Accuracy', weight: 4 as const, description: 'Using a range of topic-specific vocabulary, appropriate register, and grammatically accurate sentences in spontaneous and prepared spoken responses.' },
    { id: 'muet-speak-006', name: 'Critical Thinking and Response', weight: 3 as const, description: 'Analyzing questions, synthesizing information from multiple sources, evaluating arguments, and formulating thoughtful responses under time pressure in group discussion contexts.' }
  ]
};
