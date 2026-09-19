export const mental_ability: Subject = {
  id: 'mental-ability', name: 'Mental-Ability', color: '#6b7280',
  topics: [
    { id: 'mental-001', name: 'Hidden Figure: Simple Geometric Targets', weight: 5 as const, description: 'Locating a single closed shape (triangle, square, circle) embedded in a denser complex figure under timed conditions.' },
    { id: 'mental-002', name: 'Hidden Figure: Compound Multi-Element Targets', weight: 5 as const, description: 'Finding composite targets where multiple shapes share edges, vertices, or arcs within the distractor figure.' },
    { id: 'mental-003', name: 'Hidden Figure: Feature Isolation Strategy', weight: 3 as const, description: 'Using edge-tracing and unique feature isolation to ignore distractors that only partially match the target.' },
    { id: 'mental-004', name: 'Mirror Image: Vertical-Axis Reflection', weight: 5 as const, description: 'Identifying the figure that is the left-right mirror reflection of the stimulus across a vertical axis.' },
    { id: 'mental-005', name: 'Mirror Image: Horizontal-Axis Reflection', weight: 3 as const, description: 'Distinguishing top-bottom mirrors from the stimulus across a horizontal axis as tested in Perceptual Acuity.' },
    { id: 'mental-006', name: 'Mirror Image: Reflection vs. Rotation Trap', weight: 3 as const, description: 'Avoiding the common trap where a 180-degree rotation is mistaken for a mirror image in NMAT items.' },
    { id: 'mental-007', name: 'Identical Information: String and Code Matching', weight: 4 as const, description: 'Choosing the option whose alphanumeric string, code, or sequence exactly matches the stimulus stem.' },
    { id: 'mental-008', name: 'Identical Information: Near-Duplicate Figures', weight: 4 as const, description: 'Spotting the figure that exactly matches the stimulus when distractors differ by a single stroke or count change.' }
  ]
};
