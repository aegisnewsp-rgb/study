import type { ExamTemplate, Subject } from '../types';

import { ieltsListening } from './subjects/ielts-listening';
import { ieltsReading } from './subjects/ielts-reading';
import { ieltsWriting } from './subjects/ielts-writing';
import { ieltsSpeaking } from './subjects/ielts-speaking';

const subjects: Subject[] = [
    ieltsListening,
    ieltsReading,
    ieltsWriting,
    ieltsSpeaking,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ielts-kuwait',
  examName: 'IELTS (International English Language Testing System) — Kuwait',
  country: 'kuwait',
  description: 'The International English Language Testing System (IELTS) is the world\'s most widely used English proficiency test for higher-education admission, professional registration and migration. It is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge University Press & Assessment. In Kuwait the test is administered by the British Council at its Kuwait City test centre and by IDP at its Kuwait centre, with both computer-delivered and paper-based formats available. The Academic test is the standard for undergraduate and postgraduate admission; the General Training test is used for work-experience and migration pathways (UK Visas and Immigration accepts IELTS for UK visa purposes). Listening and Speaking are identical across the two test types; Reading and Writing differ. Each of the four skills is scored on a band from 1 to 9 in 0.5 increments, and the Overall Band Score is the mean of the four skill scores, rounded.',
  examPattern: 'Total seat-time approximately 2 hours 45 minutes for Listening, Reading and Writing, plus a separate 11-14 minute Speaking test (taken either on the same day or up to seven days before/after). Listening: 30 minutes plus 10 minutes transfer time (paper only) — 40 questions across 4 recordings. Academic Reading: 60 minutes — 40 questions across 3 long authentic passages. Academic Writing: 60 minutes — 2 tasks (150+ words Task 1 in ~20 minutes, 250+ words Task 2 in ~40 minutes; Task 2 carries twice the weight). Speaking: 11-14 minutes face-to-face with a certified examiner — three parts (introduction and interview, individual long turn, two-way discussion). Re-check the live format, computer-delivered vs paper-based options and seat-time on https://ielts.org/ before committing any revision plan.',
  eligibility: 'No formal prerequisites — candidates register through the British Council (https://takeielts.britishcouncil.org/) or IDP (https://www.ielts.org/) at an approved test centre. In Kuwait, candidates typically register through the British Council Kuwait or IDP IELTS Kuwait. There is no minimum age (candidates under 16 require parental consent in some centres); there is no cap on retakes; ID document on test day is mandatory (passport or Kuwait Civil ID for residents). Special arrangements (extra time, enlarged print) are available with documented evidence applied for in advance.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IELTS (Kuwait) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for IELTS (Kuwait) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for IELTS (Kuwait) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for IELTS (Kuwait) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for IELTS (Kuwait) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IELTS (Kuwait) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for IELTS (Kuwait) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IELTS (Kuwait) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for IELTS (Kuwait) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IELTS (Kuwait) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for IELTS (Kuwait) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for IELTS (Kuwait) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IELTS (Kuwait) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for IELTS (Kuwait) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IELTS (Kuwait) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IELTS (Kuwait) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for IELTS (Kuwait) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for IELTS (Kuwait) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IELTS (Kuwait)',
    duration: '1d',
    focusAreas: [
      { subject: 'Writing (Academic)', topics: ['Task 2 — Essay Structure and Argument', 'Task 1 — Describing Visual Information', 'Assessment Criteria — Task Response, Coherence, Lexical, Grammar'] },
      { subject: 'Reading (Academic)', topics: ['Identifying Information (True/False/Not Given)', 'Academic Passage Reading and Skimming', 'Matching Information and Headings'] },
      { subject: 'Listening', topics: ['Part 3 — Academic Discussion', 'Part 4 — Academic Lecture', 'Question Types — Multiple Choice, Matching, Labelling, Short Answer'] },
      { subject: 'Speaking', topics: ['Part 2 — Individual Long Turn (3-4 min, incl. 1 min prep)', 'Part 3 — Two-Way Discussion (4-5 min)', 'Pronunciation and Fluency Markers'] }
    ],
    strategy: 'Spend the largest block on Writing Task 2 (carries twice the weight of Task 1, and the band descriptor is the easiest to lock down), then on Reading True/False/Not Given (the question type most candidates lose marks on), then on Listening Part 4 (the highest-difficulty recording) and Speaking Part 3 (the strongest band discriminator). Confirm the live format and test-centre availability at the British Council Kuwait or IDP Kuwait before committing.',
  },
  prepOverview:
    'IELTS preparation works across the four skills, with Writing and Reading weighted heaviest on most Kuwaiti candidates\' score goals (undergraduate admission at Kuwait University, the Gulf University for Science and Technology, scholarship programmes, or migration pathways through UKVI). The productive pattern is: lock down the test format and band descriptors for each skill first (Writing Task 2 carries twice Task 1; Speaking Part 3 is the strongest band discriminator), then drill the Reading and Listening completion families and the True/False/Not Given and Yes/No/Not Given distinctions. Use the official IELTS sample tasks and the British Council takeielts.britishcouncil.org preparation resources as the question-style reference; third-party IELTS prep books vary in band alignment with the live Cambridge-marked paper. For one-month plans, target at least one full Academic Reading test plus one full Writing test under timed conditions per week, with daily Listening Part 4 and Speaking Part 3 drills; for three-month plans, layer a content pass (vocabulary, grammar review) before the mock cycle. Always re-check registration windows, seat availability, the computer-delivered vs paper-based choice, and any in-year format changes on https://ielts.org/ and https://takeielts.britishcouncil.org/ before committing a revision plan to a student (kuwait).',
  commonMistakes: [
    'Writing more than 150 words on Task 1 by copying the question or the data — time spent on padding costs marks on Task 2, which carries twice the weight.',
    'Treating True/False/Not Given and Yes/No/Not Given as the same question type — they test different things (passage content vs writer\'s view) and the band drops sharply when they are confused.',
    'Memorising essay templates for Writing Task 2 — examiners recognise memorised phrases and the band for lexical resource drops; paraphrase the question and use topic-specific vocabulary instead.',
    'Leaving Speaking Part 2 prep to the 1-minute prep window — strong Part 2 answers are pre-practised around the common topic cards; winging the cue card costs fluency marks.',
    'Skipping Listening Part 4 because it is the most difficult — Part 4 is academic vocabulary at lecture speed and is the section most candidates under-prepare; daily drill on long-form lecture recordings is the highest-leverage habit.',
    'Using unofficial "band score predictor" tests as the only mock — only Cambridge IELTS Academic practice tests and the official sample tests align with the live paper format.',
    'Failing to check the computer-delivered vs paper-based option at the chosen test centre — keyboard fluency and the lack of the 10-minute transfer time on computer-delivered tests change the test-day plan.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://ielts.org/',
};
export default exam;
