// UCAT ANZ — University Clinical Aptitude Test for Australia and New Zealand
// (UCAT ANZ Consortium).
// Awarding body: UCAT ANZ Consortium (a consortium of universities in
// Australia, New Zealand and the United Kingdom).
// Official source: https://www.ucat.edu.au/about-ucat-anz/test-format/
// The UCAT ANZ is a computer-based admissions test used by universities in
// Australia and New Zealand for entry to medicine, dentistry and some
// clinical science courses. As of the 2025 test cycle, Abstract Reasoning has
// been removed and the test now consists of four subtests: Verbal Reasoning,
// Decision Making, Quantitative Reasoning and Situational Judgement. The
// UCAT ANZ Consortium publishes the official test format on ucat.edu.au.
// Topic names below match the four named subtests in the official test format.
// The UCAT ANZ Consortium publishes per-subtest question counts and timings,
// so weight fields (1-5) reflect the proportion of total testing time each
// subtest receives in the standard UCAT ANZ: VR (21%), DM (29%), QR (24%),
// SJT (26%) (verified at the time of writing from the 2025 UCAT ANZ test
// format page). Re-check the live test format and timing for each cycle on
// ucat.edu.au.

import type { Subject } from '../../types';

export const ucatAnz: Subject = {
  id: 'ucat-anz',
  name: 'UCAT ANZ',
  color: '#dc2626',
  topics: [
    {
      id: 'ucat-001',
      name: 'Verbal Reasoning',
      weight: 4 as const,
      description: 'Critical evaluation of information presented in a written form. Reading comprehension of passages followed by True/False/Can\'t Tell items targeting the ability to find, interpret and weigh information in dense text. The first UCAT ANZ subtest in the standard test sequence.'
    },
    {
      id: 'ucat-002',
      name: 'Decision Making',
      weight: 5 as const,
      description: 'Sound decision making and judgement using complex information. Logic puzzles, syllogisms, Venn diagrams, probability, conditional reasoning and recognising assumptions. The largest UCAT ANZ subtest by allocated testing time.'
    },
    {
      id: 'ucat-003',
      name: 'Quantitative Reasoning',
      weight: 4 as const,
      description: 'Critical evaluation of information presented in a numerical form. Numerical problem solving, percentages, ratios, rates, data interpretation from tables and charts, and basic arithmetic and estimation. The UCAT ANZ on-screen calculator is provided.'
    },
    {
      id: 'ucat-004',
      name: 'Situational Judgement',
      weight: 4 as const,
      description: 'Understanding real world situations and identifying critical factors and appropriate behaviour in dealing with them. Tested through scenarios drawn from healthcare and professional settings; measures integrity, perspective taking, team involvement and resilience.'
    }
  ]
};