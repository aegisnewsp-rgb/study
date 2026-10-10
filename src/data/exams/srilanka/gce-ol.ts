import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { gceOlEnglish } from './subjects/gceol-english';
import { gceOlMathematics } from './subjects/gceol-mathematics';
import { gceOlScience } from './subjects/gceol-science';
import { gceOlLanguage } from './subjects/gceol-language';

const subjects: Subject[] = [
  gceOlEnglish,
  gceOlMathematics,
  gceOlScience,
  gceOlLanguage,
];

const exam: ExamTemplate = {
  examId: 'gce-ol',
  examName: 'GCE O/L (General Certificate of Education Ordinary Level, Sri Lanka)',
  country: 'srilanka',
  description:
    'The GCE Ordinary Level is the national school-leaving examination of Sri Lanka, administered by the Department of Examinations. It is not a single fixed shape: the number of papers depends on the subject. Most subjects are examined in two papers, while Sinhala/Tamil Language and Literature and Art are three-paper subjects. The Department publishes the session times subject by subject — the ordinary two-paper pattern runs 08:30 to 11:40 for one paper, a 3 hour 10 minute sitting, with the second paper later the same day. English Language is the exception that proves the point: Paper I is 08:30–09:30 and Paper II is 09:45–11:45.',
  examPattern:
    'The 2026 timetable published by the Department sets these session times: ordinary Paper I and Paper II subjects 08:30–11:40 (3 hours 10 minutes); Sinhala/Tamil Language and Literature Paper III 13:00–15:00 (2 hours); History Paper II 08:30–11:40 and Paper I 13:00–14:00; English Language Paper I 08:30–09:30 and Paper II 09:45–11:45; Art Paper I 08:30–09:30, Paper III 09:45–11:45 and Paper II 13:15–15:15; Mathematics Paper I 08:30–10:30 and Paper II 13:00–16:10; Science Paper II 08:30–11:40 and Paper I 13:00–14:00. The Department does not publish one common total-mark value or one common paper-weighting scheme across all subjects — marking schemes are issued subject by subject. The published English Language scheme is a worked example: Paper I is 40 marks, Paper II is 60 marks, 100 marks in total.',
  eligibility:
    'The Department of Examinations issues its own application notices for each sitting, and the current notice for the 2026/2027 cycle could not be located on the official pages reviewed, so the eligibility wording is not reproduced here rather than reconstructed from memory. Candidates who sat the GCE O/L in a previous year, or who are sitting it as a private candidate, should read the current notice on the Department\'s own site and confirm the fee and application window directly, because the Department did not publish the current O/L examination fee on the calendar, timetable or examination pages reviewed.',
  calendarDates: {
    examDates: 'The 2026 paper dates published by the Department are 8 December 2026 (Religion), 9 December (Sinhala/Tamil Language and Literature), 10 December (History), 11 December (English Language and related subjects), 12 December (Music, Literary Texts, Drama and Theatre), 14 December (Art and Mathematics), 15 December (technology subjects), 16 December (Science) and 17 December (Business and Accounting Studies, Geography, Civic Education, Entrepreneurship Studies, second and foreign languages). Confirm on the Department\'s own calendar before travelling — a second retrieval returned a different sitting window for an earlier cycle.',
    resultDate: 'Results are released by the Department and published through its results service; no fixed date is published on the calendar page reviewed.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'GCE O/L study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'GCE O/L study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'GCE O/L study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'GCE O/L study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'GCE O/L study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'GCE O/L study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'GCE O/L study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'GCE O/L study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'GCE O/L study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'GCE O/L study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'GCE O/L study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'GCE O/L study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'GCE O/L study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'GCE O/L study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'GCE O/L study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'GCE O/L study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'GCE O/L study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'GCE O/L study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Last-ditch GCE O/L plan in the two weeks before the December papers',
    duration: '2w',
    focusAreas: [
      { subject: 'Mathematics', topics: ['Geometry and Mensuration', 'Algebra', 'Statistics and Probability'] },
      { subject: 'Science', topics: ['Basic Chemistry', 'Human Biology and Health'] },
      { subject: 'English Language', topics: ['Summary, Note and Paragraph Writing', 'Grammar, Usage and Editing'] },
      { subject: 'Sinhala/Tamil Language and Literature', topics: ['Grammar and Language Structure'] },
    ],
    strategy: 'English Language and Mathematics first, because they carry the most transferable marks and both are examined in a timed paper where technique moves the score faster than knowledge. English Paper II in particular rewards structured paragraph writing, which is a week of practice rather than a term of reading. Mathematics Paper II runs from 13:00 to 16:10, nearly three hours, so build to three-hour sittings rather than two. Science has the shortest single-paper session but the widest syllabus, so triage: Basic Chemistry and Human Biology return the most for the hours. Do not spend the last two days reading — sit full timed papers instead.',
  },
  prepOverview:
    'The structure of this exam differs from the single-paper entrance tests it is often compared with, and that difference should drive your plan. There is no common total mark and no common paper weighting across subjects, because the Department sets marking schemes subject by subject through its Evaluation Reports section. So the first thing to do is read the marking scheme for each subject you sit, not a general O/L revision guide. The English scheme gives a useful model of what to expect: Paper I 40 marks, Paper II 60 marks, so the paper carrying more marks is the one carrying the writing.\n\nTimetable the revision by session length rather than by topic. The 2026 timetable gives you ordinary subjects 3 hours 10 minutes per paper, Mathematics Paper II nearly three hours, English Language two hours, and History and Science split papers of very different lengths. Practise in blocks that match, because an hour of concentration is a trainable resource and the subjects that need it differ.\n\nProtect the date. The 2026 papers run over ten days in December, so the subjects are not simultaneous — you can revise all of them properly only if you treat it as a sequence rather than as one weekend. Work out which subject sits earliest and front-load it.\n\nVerify everything against the Department itself. This page reproduces the Department\'s published timetable, and a second, independent retrieval of the Department\'s own documents returned a different window for an earlier cycle of the examination. The Department does not publish the current O/L examination fee on the calendar page reviewed, and the current eligibility notice could not be located either. Both gaps are recorded here as gaps rather than filled in.',
  commonMistakes: [
    'Assuming a common total mark across all subjects. The Department publishes no single common mark total or paper weighting; marking schemes are issued subject by subject.',
    'Assuming every subject is two papers. Sinhala/Tamil Language and Literature and Art are three-paper subjects, and their third paper is a two-hour session in a different slot.',
    'Memorising one O/L timetable and reusing it. The Department publishes a timetable per sitting and the shape of the timetable changes with the subjects chosen.',
    'Leaving Mathematics Paper II short of practice. It is scheduled 13:00–16:10 in the 2026 timetable — nearly three hours, longer than any other single session.',
    'Practising English Language writing untimed. Paper II is 09:45–11:45 in the 2026 timetable and carries 60 of the subject\'s 100 marks, so paragraph structure under time is the single highest-return habit.',
    'Assuming the ordinary two-paper timing applies to History and Science. In the 2026 timetable both are split across a long morning paper and a short afternoon paper.',
    'Trusting a revision guide for the paper shape rather than the Department\'s own timetable. The schedule is published by the Department and changes between sittings.',
    'Booking travel on a single "O/L date". In 2026 the papers run from 8 to 17 December, so subjects are spread across ten days.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.doenets.lk/examcalendar',
};

export default exam;
