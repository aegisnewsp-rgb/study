// HSC English Advanced — NSW Education Standards Authority (NESA)
// Syllabus: English Advanced 11–12 Syllabus (2024)
// First HSC examination for this syllabus: 2026.
// Replaces the English Advanced Stage 6 Syllabus (2017) for Year 11 from 2025
// and Year 12 from 2026.
// Awarding body: NSW Education Standards Authority (NESA).
// Official source: https://curriculum.nsw.edu.au/learning-areas/english/english-advanced-11-12-2024/overview/course
// Year 11 carries three focus areas (Reading to Write: Transition to English
// Advanced, Narratives that Shape our World, Critical Study of Literature) and
// Year 12 carries four (Texts and Human Experiences, Textual Conversations,
// Critical Study of Literature, The Craft of Writing). Topic names below match
// the focus area headings on the official curriculum overview page. NESA does
// not publish per-focus-area assessment weightings, so no weight field is set
// on any row.

import type { Subject } from '../../types';

export const hscEnglishAdvanced: Subject = {
  id: 'hsc-english-advanced',
  name: 'English Advanced',
  color: '#7c3aed',
  topics: [
    {
      id: 'hscengadv-001',
      name: 'Reading to Write: Transition to English Advanced',
      description: 'Common Year 11 module shared with English Standard and English Studies. Students read and view a range of texts to consolidate skills required for senior English study and to develop sophisticated control of language for writing in a variety of forms and purposes.'
    },
    {
      id: 'hscengadv-002',
      name: 'Narratives that Shape our World',
      description: 'Year 11 module. Students explore the ways narratives — literary, non-fiction, visual and multimodal — shape attitudes, values and understandings of self and others. Assessed in school-based tasks and forms the bridge from Year 11 to the Year 12 Common Module.'
    },
    {
      id: 'hscengadv-003',
      name: 'Critical Study of Literature (Year 11)',
      description: 'Year 11 module. Students engage in close study of a Shakespearean drama, additional literary study, and develop skills in critical response, textual analysis and the language features of literary criticism.'
    },
    {
      id: 'hscengadv-004',
      name: 'Texts and Human Experiences',
      description: 'Year 12 Common Module. Students explore texts that give insight into human experiences, with focus on the ways composers represent human experiences and how responders engage with and are affected by these representations. Assessed in HSC Paper 1, Section I.'
    },
    {
      id: 'hscengadv-005',
      name: 'Textual Conversations',
      description: 'Year 12 Module A. Students explore how composers engage with other texts through imitation, appropriation, parody or subversion. Includes prescribed pairings and requires sustained comparative composition. Assessed in HSC Paper 2, Section I.'
    },
    {
      id: 'hscengadv-006',
      name: 'Critical Study of Literature (Year 12)',
      description: 'Year 12 Module B. Students undertake an in-depth critical study of a substantial literary text, examining how meaning is shaped through textual features, form and context. Assessed in HSC Paper 2, Section II.'
    },
    {
      id: 'hscengadv-007',
      name: 'The Craft of Writing',
      description: 'Year 12 Module C. Students develop a portfolio of crafted writing in a range of forms for a range of audiences and purposes. The craft of writing is examined in Paper 1 Section II and is a long-form composition module that refines students\' imaginative, discursive and persuasive voice.'
    }
  ]
};