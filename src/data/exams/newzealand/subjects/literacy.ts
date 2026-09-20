// NCEA University Entrance Literacy requirement.
// Awarding body: NZQA (New Zealand Qualifications Authority).
// Specification: University Entrance literacy requirement, 10 credits at
// Level 2 or above made up of 5 reading credits and 5 writing credits.
// Source: NZQA literacy requirements for University Entrance,
// https://www2.nzqa.govt.nz/ncea/understanding-secondary-quals/university-entrance/literacy-for-ue/
// The reading and writing credits can come from the dedicated co-requisite
// unit standards, the Te Reo Matatini equivalents, or a wide range of Level 2
// or above achievement standards in approved subjects (English, History,
// Geography, Art History, Media Studies, Classical Studies, Religious Studies
// and many others). The topic list below covers the dedicated co-requisite
// unit standards plus the most common Level 2/3 achievement standards
// contributing to UE literacy. Where the same standard contributes credits
// to both reading and writing (e.g. Art History 3.1), the credits can be
// split between the two requirements. Topic weights reflect published credit
// value and weighting toward the reading or writing requirement. Re-check
// the live literacy achievement standards spreadsheet on nzqa.govt.nz before
// committing any revision plan to a student.

import type { Subject } from '../../types';

export const literacy: Subject = {
  id: 'literacy',
  name: 'Literacy',
  color: '#0d9488',
  topics: [
    { id: 'lit-001', name: 'Demonstrate understanding of ideas and information in written texts (US32403)', weight: 5 as const, description: 'Read and understand ideas and information in a range of written texts; analyse how language features and structure convey meaning. Dedicated UE Literacy Reading co-requisite, 5 credits.' },
    { id: 'lit-002', name: 'Write texts to communicate ideas and information (US32405)', weight: 5 as const, description: 'Produce written texts that communicate ideas and information effectively for a purpose and audience. Dedicated UE Literacy Writing co-requisite, 5 credits.' },
    { id: 'lit-003', name: 'English reading and writing at Level 2 (e.g. AS 91101, AS 91102)', weight: 4 as const, description: 'Level 2 English: analyse specified aspects of studied written and/or visual text(s); produce crafted writing using language features appropriately. Source of UE reading and writing credits.' },
    { id: 'lit-004', name: 'English reading and writing at Level 3 (e.g. AS 91472, AS 91473, AS 91474, AS 91475)', weight: 4 as const, description: 'Level 3 English: respond critically to written and/or visual text(s); produce fluent, crafted writing; research an area and produce a report. Source of UE reading and writing credits.' },
    { id: 'lit-005', name: 'History reading and writing standards (Level 2 and Level 3)', weight: 3 as const, description: 'AS 91229, AS 91230, AS 91434, AS 91435, AS 91436 etc.: examine primary and secondary sources, and communicate historical understanding. Counts toward UE reading and writing credits.' },
    { id: 'lit-006', name: 'Geography and other social science literacy standards (Level 2 and Level 3)', weight: 3 as const, description: 'Geography, Media Studies, Classical Studies, Religious Studies, Art History and similar standards that contribute reading and/or writing credits to UE literacy. See the UE literacy spreadsheet for the full list.' },
    { id: 'lit-007', name: 'Te Reo Matatini equivalents (US32413, US32415)', weight: 4 as const, description: 'Te Reo Matatini reading (US32413) and writing (US32415) unit standards for students working in te reo Māori; substitute for the English-medium literacy co-requisite unit standards.' }
  ]
};
