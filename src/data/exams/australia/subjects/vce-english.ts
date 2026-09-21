// VCE English — Victorian Curriculum and Assessment Authority (VCAA)
// Study Design: VCE English and English as an Additional Language Study
// Design (2023), implementing Units 1-2 from 2023 and Units 3-4 from 2024.
// Awarding body: Victorian Curriculum and Assessment Authority (VCAA).
// Official source: https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/english-and-english-additional-language/english-and-english-additional-language-eal
// The 2023 Study Design organises VCE English Units 3-4 around three Areas
// of Study: Reading and responding to texts (a Unit 3-4 Area of Study shared
// across both units), Creating texts (Unit 3), and Analysing argument
// (Unit 4). English is the only compulsory study in the VCE. Topic names
// below match the official Areas of Study headings. VCE English has only
// three Areas of Study in the official Study Design; this is below the
// StudyRoadmap six-topic target and is documented in the build report.

import type { Subject } from '../../types';

export const vceEnglish: Subject = {
  id: 'vce-english',
  name: 'English',
  color: '#7c3aed',
  topics: [
    {
      id: 'vceeng-001',
      name: 'Reading and Responding to Texts (Unit 3-4 Area of Study 1)',
      description: 'Reading and responding to a range of texts (literary, non-fiction, visual and multimodal) across Unit 3 and Unit 4. Students produce analytical responses demonstrating understanding of argument, perspective, language features and context. Assessed in the Unit 3-4 School-Assessed Coursework and in the end-of-year examination.'
    },
    {
      id: 'vceeng-002',
      name: 'Creating Texts (Unit 3 Area of Study 2)',
      description: 'Creating a sustained piece of writing (imaginative, persuasive or discursive) that demonstrates craft in language, form and structure. Assessed as part of the Unit 3 School-Assessed Coursework.'
    },
    {
      id: 'vceeng-003',
      name: 'Analysing Argument (Unit 4 Area of Study 2)',
      description: 'Analysing the ways argument is constructed in contemporary media texts and producing a written commentary on a selected text. Assessed as part of the Unit 4 School-Assessed Coursework and is one of the three texts sections on the end-of-year examination.'
    }
  ]
};