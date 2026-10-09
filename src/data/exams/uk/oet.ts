import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { oetListening } from './subjects/oet-listening';
import { oetReading } from './subjects/oet-reading';
import { oetWriting } from './subjects/oet-writing';

const subjects: Subject[] = [
  oetListening,
  oetReading,
  oetWriting,
];

const exam: ExamTemplate = {
  examId: 'oet',
  examName: 'OET (Occupational English Test)',
  country: 'uk',
  description:
    'OET is an English-language test for healthcare professionals, designed for professions where the language of work is clinical rather than academic. The official OET Test Handbook 2026 lists twelve healthcare professions it is available for: Dentistry, Dietetics, Medicine, Nursing, Occupational Therapy, Optometry, Pharmacy, Physiotherapy, Podiatry, Radiography, Speech Pathology and Veterinary Science. It assesses four sub-tests — Listening, Reading, Writing and Speaking — of which Listening and Reading are the same for every candidate regardless of profession, while Writing and Speaking are tailored to the candidate\'s profession. The four sub-tests are reported on a 0 to 500 scale in ten-point increments, mapped to a letter grade from E (lowest) to A (highest).',
  examPattern:
    'Four sub-tests. Listening: approximately 40 minutes, three parts, 42 questions. Reading: 60 minutes, three parts, 42 questions, with Part A at 15 minutes and Parts B and C at 45 minutes. Writing: 45 minutes in total — the handbook states this as 5 minutes of reading time and 40 minutes of writing time — one task, assessed on six criteria. Speaking: 20 minutes in total, two role-play tasks, with the handbook specifying a warm-up of about 2 to 3 minutes, 3 minutes of preparation per role play, and 5 minutes for each role play, assessed on two sets of criteria. Each correct answer in Listening and Reading earns one mark, and the score out of 42 is converted to the 500 scale. OET is delivered three ways: OET Test on Paper at an approved test centre, OET Test on Computer at an approved test venue, and OET@Home on the candidate\'s own computer with remote proctoring where the technical and environmental requirements are met.',
  eligibility:
    'There is no academic entry requirement; OET is available to candidates in the twelve listed healthcare professions. What determines whether a result is usable is recognition rather than eligibility. In the United Kingdom the official OET site states that the test is "accepted by the Nursing and Midwifery Council, the General Medical Council, and to apply for the Health and Care Worker visa". In Ireland it names the Nursing and Midwifery Board of Ireland, the Irish Medical Board and the Dental Council of Ireland. In Australia and New Zealand the official pages state recognition by healthcare boards and councils and, respectively, by the Department of Home Affairs for specified visa categories and by Immigration New Zealand for ANZCO level 4 and 5 roles, but neither page names a specific nursing or medical council. In Canada the official page states recognition by every College of Physicians & Surgeons with an English-proficiency requirement, by the majority of provincial nursing boards and by nearly all key pharmacy regulators, and names the Medical Council of Canada as recommending OET for international medical graduates preparing for MCC examinations — without naming a specific nursing council.',
  calendarDates: {
    examDates: 'OET publishes test dates for the year rather than a single calendar date. For 2026 the published windows were 12 January to 9 December for computer tests, 10 January to 19 December for Global Paper tests and 9 January to 18 December for Americas Paper tests. Booking closes per sitting, generally seven days before a computer test.',
    resultDate: 'Results for 2026 computer tests were published through 18 December 2026, with late-2026 paper sittings reported through 5 January 2027.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'OET study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'OET study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'OET study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'OET study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'OET study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'OET study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'OET study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'OET study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'OET study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'OET study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'OET study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'OET study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'OET study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'OET study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'OET study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'OET study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'OET study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'OET study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Four-week OET plan for a booked test sitting',
    duration: '1mo',
    focusAreas: [
      { subject: 'Listening', topics: ['Listening for Attitude, Modality and Register', 'Numbers, Names and Spellings Under Time Pressure'] },
      { subject: 'Reading', topics: ['Part A: Expeditious Reading for Detail', 'Time Management Across the 60 Minutes'] },
      { subject: 'Writing and Speaking', topics: ['The Writing Task: A Profession-Specific Letter', 'The Six Writing Assessment Criteria'] },
    ],
    strategy: 'Writing first, because it is the sub-test where a fortnight of practice changes the score most and the one that is least often prepared. Run a full 45-minute task every second day from day one, with the 5 minutes of reading time enforced, and mark it against the published criteria rather than against your own judgement. Listening and Reading second, and only under strict timing — approximately 40 minutes for 42 Listening questions and 60 minutes for Reading, where Part A gets 15 minutes and Parts B and C share 45. Speaking last, because it needs rehearsal with another person rather than solo study, and because the role-plays are short enough that they improve quickly once you stop memorising answers.',
  },
  prepOverview:
    'Start with what OET is for, because it changes how you prepare. OET uses healthcare language, not academic language, and the official handbook is explicit that Listening and Reading are the same for every candidate regardless of profession. So two things follow: do not prepare OET as though it were IELTS with a health theme, and do not split your preparation by profession. The Listening and Reading material is identical for a dentist and a vet.\n\nThe profession-specific part is Writing and Speaking, and that is where your profession\'s own register has to show. The Writing task is a letter written in response to a set of case notes, assessed on six criteria, and Speaking is two role-plays assessed on two sets of criteria. Practise letters to the audience OET actually specifies, and rehearse role-plays with another person, because Speaking is the one sub-test you cannot practise convincingly alone.\n\nScore the sub-tests separately rather than as a total, because each is reported on its own 0 to 500 scale with its own letter grade. The handbook\'s grade bands are A 450 to 500, B 350 to 440, C+ 300 to 340, C 200 to 290, D 100 to 190 and E 0 to 90. A candidate with a B overall and a C+ in Writing has a problem, and it is a specific one: they can probably not yet write an acceptable professional letter, and that is a specific, fixable thing.\n\nThen confirm that your score is the one your regulator wants. OET is recognised by named bodies in the UK and Ireland and described more generally in Australia, New Zealand and Canada. Check the recognising organisation\'s current requirement for the specific registration route you are applying for, because a general statement of recognition and a stated score requirement for your profession are different claims, and the second one is the one that decides whether your result is usable.\n\nPractise under the real delivery mode. OET@Home is remote-proctored and has technical and environmental requirements; OET on Computer and OET on Paper behave differently in a way candidates discover too late.',
  commonMistakes: [
    'Preparing OET as general English. The language is healthcare language, and the handbook states that Listening and Reading are the same for every candidate regardless of profession.',
    'Assuming OET has nine sub-tests. The official handbook sets out four: Listening, Reading, Writing and Speaking.',
    'Studying for a total rather than for four separate sub-test scores. Each sub-test is reported on its own 0–500 scale with its own letter grade, and the bands are A 450–500, B 350–440, C+ 300–340, C 200–290, D 100–190, E 0–90.',
    'Spending the whole 40 minutes of the Writing task writing. The handbook specifies 5 minutes of reading time and 40 minutes of writing time, and the reading time is where the plan is formed.',
    'Memorising Speaking answers. The role-plays are interactive and assessed on interaction; recited answers are conspicuous and score poorly.',
    'Over-running Part A of the Reading sub-test. The handbook gives Part A 15 minutes and Parts B and C the remaining 45, so an overrun in Part A costs the whole of the later parts.',
    'Assuming every regulator is named on the OET country page. The official pages name specific councils for the UK, Ireland and — for physicians and pharmacists — Canada, but describe Australian and New Zealand recognition more generally without naming a specific nursing or medical council.',
    'Forgetting the OET@Home technical and environmental requirements before choosing that delivery mode.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://cdn-aus.aglty.io/oet/pdf-files/OET%20Test%20Handbook%202026.pdf',
};

export default exam;