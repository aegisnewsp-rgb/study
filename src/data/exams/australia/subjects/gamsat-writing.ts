// GAMSAT — Written Communication (essay) section.
// Official source: https://www.acer.edu.au/gamsat (ACER, retrieved 2026-10-09)
// ACER states the section is "Written Communication - 2 essay responses" and
// "Assess ability to generate and develop ideas in writing". The marks and timing
// split below is OUR planning aid; ACER does not publish a per-task mark breakdown.
import type { Subject } from '../../types';
export const gamsatWriting: Subject = {
  id: 'written-communication', name: 'Written Communication', color: '#b45309',
  topics: [
    { id: 'wc-001', name: 'Argument Structure and Thesis', weight: 5, description: 'Formulating a clear position, stating it early, and organising the body so each paragraph advances part of one argument; planning a 30-minute essay in under five.' },
    { id: 'wc-002', name: 'Paragraph and Coherence', weight: 5, description: 'Writing paragraphs with a single controlling idea, topic sentences that signpost rather than announce, and transitions that carry a logical relationship instead of just a connective word.' },
    { id: 'wc-003', name: 'Analysis of Ideas in Prose', weight: 5, description: 'Taking a prompt on an abstract idea, generating candidate arguments, and developing the best one with worked examples rather than assertion; distinguishing exposition from explanation.' },
    { id: 'wc-004', name: 'Evidence, Examples and Critical Voice', weight: 4, description: 'Weighing competing viewpoints fairly and saying why one is stronger; using concrete examples without padding; avoiding unsupported appeals to authority or to what "most people" think.' },
    { id: 'wc-005', name: 'Language Control and Tone', weight: 3, description: 'Sentence-level clarity, precise word choice, register appropriate to an academic argument, and cutting hedging, filler and inflated phrasing that hides the argument rather than making it.' },
    { id: 'wc-006', name: 'Timed Essay Technique', weight: 4, description: 'Timing two responses within the writing allowance, reserving time to check for structural errors, handling a prompt that resists a familiar answer, and recovering when an essay goes off-plan mid-way.' },
  ],
};