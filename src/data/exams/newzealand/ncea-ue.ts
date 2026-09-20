import type { ExamTemplate, Subject } from '../types';

import { literacy } from './subjects/literacy';
import { numeracy } from './subjects/numeracy';

const subjects: Subject[] = [
    literacy,
    numeracy,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ncea-ue',
  examName: 'University Entrance (NCEA UE Literacy and Numeracy)',
  country: 'newzealand',
  description: 'University Entrance (UE) is the minimum requirement for entry to a New Zealand university, awarded automatically once a student has met all the requirements on their NCEA Record of Achievement. The UE award has three components: NCEA Level 3, 14 credits at Level 3 in each of three approved subjects, and 10 literacy credits at Level 2 or above plus 10 numeracy credits at Level 1 or above. This exam file tracks the literacy and numeracy components - the most common blocker for UE-eligible students.',
  examPattern: 'Literacy: 10 credits at Level 2 or above, with at least 5 reading and 5 writing credits. Credits can come from the dedicated co-requisite unit standards (US32403 reading, US32405 writing), Te Reo Matatini equivalents (US32413, US32415), or any Level 2 or above achievement standards on the published UE literacy list (English, History, Geography, Art History, Media Studies, Classical Studies, Religious Studies, and others). Numeracy: 10 credits at Level 1 or above, made up of the dedicated co-requisite unit standard (US32406) or Te Pāngarau standard (US32412), or certain achievement standards on the published UE numeracy list.',
  eligibility: 'Open to all students enrolled at a New Zealand secondary school or training provider working toward NCEA. To be awarded UE, the student must have: (1) NCEA Level 3, (2) 14 credits at Level 3 in each of three approved subjects (one of which can be a "subjects-rich" set of standards), and (3) the literacy and numeracy requirements. The literacy and numeracy components can be earned at any point during the student\'s NCEA programme and do not all need to be at Level 3.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NCEA UE Literacy and Numeracy — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NCEA UE Literacy and Numeracy — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NCEA UE Literacy and Numeracy — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NCEA UE Literacy and Numeracy — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NCEA UE Literacy and Numeracy — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NCEA UE Literacy and Numeracy — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NCEA UE Literacy and Numeracy — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NCEA UE Literacy and Numeracy — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NCEA UE Literacy and Numeracy — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NCEA UE Literacy and Numeracy — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NCEA UE Literacy and Numeracy — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NCEA UE Literacy and Numeracy — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NCEA UE Literacy and Numeracy — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NCEA UE Literacy and Numeracy — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NCEA UE Literacy and Numeracy — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NCEA UE Literacy and Numeracy — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NCEA UE Literacy and Numeracy — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NCEA UE Literacy and Numeracy — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NCEA UE Literacy and Numeracy',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Identify the missing credits: which of reading, writing, and numeracy is short? Use the dedicated co-requisite unit standards (US32403 reading, US32405 writing, US32406 numeracy) wherever possible - they are school-internal and fast to schedule.',
  },
  prepOverview:
    'University Entrance literacy and numeracy preparation is built around filling the credit gaps as quickly as possible. The simplest path is the dedicated co-requisite unit standards: US32403 (5 credits reading), US32405 (5 credits writing) and US32406 (5 credits numeracy) together satisfy the literacy requirement (10 credits) and half the numeracy requirement (5 of 10). A second numeracy standard is then needed, which can come from the published UE numeracy achievement standards spreadsheet. For students taking Level 2 or Level 3 English, History, Geography, Media Studies, Classical Studies or Art History, the achievement standards in those subjects often double as UE literacy credits - the school just needs to make sure each standard contributes to the right requirement (reading or writing). Re-check the live literacy and numeracy achievement standards spreadsheets on https://www2.nzqa.govt.nz/ncea/understanding-secondary-quals/university-entrance/ before committing a revision plan to a student (newzealand).',
  commonMistakes: [
    'Assuming Level 1 English credits count toward UE literacy - literacy credits must be at Level 2 or above; Level 1 English standards are excluded.',
    'Letting the literacy credits split between reading and writing break the requirement - 5 of each are required; a student with 7 reading and 3 writing credits does not meet UE literacy.',
    'Treating the dedicated co-requisite unit standards as second-class - US32403, US32405 and US32406 are NZQA-endorsed and carry the same credit value as achievement standards.',
    'Forgetting to check the Te Reo Matatini and Te Pāngarau equivalents - students on a Māori-medium pathway can use US32413, US32415 and US32412 instead of the English-medium standards.',
    'Leaving numeracy until Year 13 - the dedicated co-requisite numeracy standard (US32406) is usually scheduled at the school in Year 10 or 11 and can be used for UE numeracy across the whole NCEA programme.',
    'Forgetting the University Entrance numeracy requirement was changed for 2024 - the current rule is 10 credits at Level 1 or above with no subject restriction.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www2.nzqa.govt.nz/ncea/understanding-secondary-quals/university-entrance/',
};

export default exam;
