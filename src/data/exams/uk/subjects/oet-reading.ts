// OET — Reading sub-test.
// Source: the official "OET Test Handbook 2026",
// https://cdn-aus.aglty.io/oet/pdf-files/OET%20Test%20Handbook%202026.pdf — fetched and
// text-extracted independently by this worker on 2026-10-09.
// Verbatim from the handbook: Reading, 60 minutes, 3 parts, 42 questions; "Part A takes 15
// minutes. Parts B and C take 45 minutes." Listening and Reading are the same for all
// candidates regardless of profession. 1 mark per correct answer, converted from a score out of
// 42 to the 500 scale.
// Topic split below is StudyRoadmap's own organisation. Weight values are our prioritisation.
import type { Subject } from '../../types';
export const oetReading: Subject = {
  id: 'reading', name: 'Reading', color: '#15803d',
  topics: [
    { id: 're-001', name: 'Part A: Expeditious Reading for Detail', weight: 5, description: 'Fifteen minutes for the first part, scanning an unfamiliar text for specific information rather than reading it in order. Scanning is a different skill from reading and needs separate practice.' },
    { id: 're-002', name: 'Part B: Matching Headings and Paragraph Functions', weight: 5, description: 'Placing information into the structure of a text — which heading belongs to which paragraph, and what each paragraph does in the argument.' },
    { id: 're-003', name: 'Part C: Inference, Attitude and Gist', weight: 5, description: 'Inferring stance and drawing conclusions the text licenses, distinguishing a text-supported inference from an unsupported one that merely sounds plausible.' },
    { id: 're-004', name: 'Healthcare Terminology in Unmodified Texts', weight: 4, description: 'Reading clinical and administrative prose without glossary help, including abbreviations and register shifts between a patient leaflet, a guideline and a research abstract.' },
    { id: 're-005', name: 'Time Management Across the 60 Minutes', weight: 4, description: 'The handbook sets Part A at 15 minutes and Parts B and C at 45 minutes combined. Candidates who do not protect the Part A budget lose the whole of Part B and C.' },
  ],
};
