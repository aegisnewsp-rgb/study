// Shared PCM exam note pooling definitions
// Maps PCM exam ID -> subject ID -> notes pool (exam ID) to use

export const PCM_EXAM_SUBJECT_ROUTING: Record<string, Record<string, string>> = {
  bitsat: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  viteee: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  vitee: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  'mht-cet': { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  kcet: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain', biology: 'neet' },
  wbjee: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain', biology: 'neet' },
  comedk: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  keam: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  gujcet: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  upsee: { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  'ap-eapcet': { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  'ts-eapcet': { physics: 'neet', mathematics: 'jeeadvanced', chemistry: 'jeemain' },
  aimer: { physics: 'neet', biology: 'neet', chemistry: 'jeemain' },
  aims: { physics: 'neet', biology: 'neet', chemistry: 'jeemain' },
  'aiims-mbbs': { physics: 'neet', biology: 'neet', chemistry: 'jeemain' },
  'aiims-bds': { physics: 'neet', biology: 'neet', chemistry: 'jeemain' },
};

/**
 * Returns {exam, subject} for a pooled exam topic, or null if not routable.
 */
export function getPcmNotesPool(examId: string, subjectId: string): { exam: string; subject: string } | null {
  const examRouting = PCM_EXAM_SUBJECT_ROUTING[examId.toLowerCase()];
  if (!examRouting) return null;
  const pool = examRouting[subjectId.toLowerCase()];
  if (!pool) return null;
  return { exam: pool, subject: subjectId };
}
