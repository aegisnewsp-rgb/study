export const listening: Subject = {
  id: 'listening', name: 'Listening (Paper 1)', color: '#10b981',
  topics: [
    { id: 'muet-listen-001', name: 'Main Ideas and Key Details', weight: 5 as const, description: 'Identifying main points, supporting details, and specific information from spoken academic and general texts — core MUET listening comprehension skill tested in Paper 1.' },
    { id: 'muet-listen-002', name: 'Inference from Spoken Texts', weight: 5 as const, description: 'Drawing conclusions from tone, speaker attitude, and implied meanings in conversations, interviews, and presentations — highest-weight listening topic for MUET.' },
    { id: 'muet-listen-003', name: 'Attitudes and Opinions', weight: 4 as const, description: 'Identifying speaker\'s purpose, attitude, agreement/disagreement, and emotional tone in various listening contexts (news, discussions, academic talks).' },
    { id: 'muet-listen-004', name: 'Note-Taking and Information Transfer', weight: 4 as const, description: 'Extracting and recording key information from spoken texts, completing diagrams, tables, and flowcharts from audio sources — practical academic skill for Malaysian university study.' },
    { id: 'muet-listen-005', name: 'Different Accents and Speaking Styles', weight: 3 as const, description: 'Understanding Malaysian English, British, American, and other accents in various contexts (formal presentations, casual conversations, broadcasts) — exposure to diverse speaker varieties.' },
    { id: 'muet-listen-006', name: 'Signal Words and Discourse Markers', weight: 3 as const, description: 'Recognizing transitions, cause-effect markers, contrast signals, and organizational cues in spoken discourse to follow complex arguments and lectures.' }
  ]
};
