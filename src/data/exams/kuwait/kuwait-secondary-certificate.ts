import type { ExamTemplate, Subject } from '../types';

import { kscMathematics } from './subjects/ksc-mathematics';
import { kscEnglish } from './subjects/ksc-english';
import { kscArabic } from './subjects/ksc-arabic';

const subjects: Subject[] = [
    kscMathematics,
    kscEnglish,
    kscArabic,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kuwait-secondary-certificate',
  examName: 'Kuwait Secondary Certificate (Thanawiya Amma)',
  country: 'kuwait',
  description: 'The Kuwait Secondary Certificate (Shahadat Al-Thanawiya Al-\'Aama / General Secondary Certificate) is the three-year upper-secondary qualification taken by students in the State of Kuwait at the end of Grade 12. It is set and awarded by the Kuwait Ministry of Education (MOE), Curriculum Development Sector, with the Examination Affairs Sector administering the terminal examinations each June. Until the 2025-2026 cycle, students in Grade 11 and Grade 12 chose between a Scientific section and a Literary section; from the 2026-2027 academic year the MOE introduced a tracks regulation (laitat al-masarat) with eight official paths: Mathematics, Sciences, Languages, Commerce, Industrial, Technology and Artificial Intelligence, Law, and Social Sciences. The certificate is required for admission to Kuwait University, the Kuwait University College of Science, the College of Basic Education, the Higher Institute of Theatrical Arts, and the Kuwaiti technical institutes, and is also recognised internationally for undergraduate admission.',
  examPattern: 'Terminal written examination at the end of Grade 12 in June. Each subject has its own paper pattern, duration and mark weight set by the Examination Affairs Sector of the MOE and published on the ministry website. Foundation subjects (Islamic Studies, Arabic, English, Integrated Sciences, Social Studies, Mathematics, Computing, Exploration) are taught from Grade 10 and examined at terminal level; from Grade 11 the subjects follow the chosen track. Re-check the live paper pattern for the candidate\'s terminal year, the track-specific subject list, and any in-year regulation changes on https://www.moe.edu.kw/ before planning.',
  eligibility: 'Students enrolled at a Kuwaiti public secondary school or a recognised private secondary school offering the Kuwaiti national curriculum sit the terminal examinations administered by the MOE. Most candidates complete the three-year secondary cycle at age 17-18. Private candidates and transfers from international curricula apply through the Examination Affairs Sector at the MOE headquarters (South Surra, Ministries Area). Reasonable accommodations are available for candidates with documented special educational needs. Always confirm the latest eligibility rules, track-change rules, and registration deadlines on https://www.moe.edu.kw/ before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Kuwait Secondary Certificate (Thanawiya Amma) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Kuwait Secondary Certificate (Thanawiya Amma)',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on Mathematics (Algebra and Number Theory carries the most terminal marks), then on Arabic (Reading Comprehension and Grammar together dominate the Arabic exam). Confirm the live terminal paper pattern on https://www.moe.edu.kw/ before committing.',
  },
  prepOverview:
    'Kuwait Secondary Certificate preparation follows the MOE tracks regulation and the official terminal-exam pattern published by the Examination Affairs Sector. The productive pattern is: lock down the three foundation subjects (Arabic, English, Mathematics) first as these sit across every terminal cohort, then layer the track-specific subjects in priority order based on the candidate\'s chosen path (Sciences, Mathematics, Languages, Commerce, Industrial, Technology and AI, Law, or Social Sciences). Use the official Over To You syllabus for English, the Kuwait MOE Mathematics curriculum, and the Arabic domain structure (reading, grammar, morphology, spelling, rhetoric, composition) as the question-style reference; third-party Thanawiya Amma books vary in question alignment with the live MOE paper. For three-month plans, target at least one full past paper per foundation subject plus a track-specific revision cycle; for six-month plans, layer a full content pass before the mock cycle. From the 2026-2027 academic year the new tracks regulation is being phased in experimentally in 12 schools across all educational districts — confirm the candidate\'s school\'s track status, the live subject list and any in-year rule changes on https://www.moe.edu.kw/ before committing a revision plan to a student (kuwait).',
  commonMistakes: [
    'Assuming the Scientific and Literary section choice is still the only route — from 2026/2027 the MOE introduced eight official tracks, and the subject list at terminal level depends on the chosen track.',
    'Studying only past papers without working through the Over To You unit structure for English — the Grade 12 published units map directly to exam items, and gaps there cost avoidable marks.',
    'Treating Arabic grammar (nahw) as separate from Arabic morphology (sarf) — terminal Arabic questions test both, and weak morphology pulls marks across the rhetoric and composition sections.',
    'Forgetting the terminal exam\'s required minimum cumulative GPA of 1.0 across the 48 counted units — failure to graduate is not only about the terminal paper.',
    'Choosing a Mathematics or Sciences track without confirming the candidate can sustain the prerequisite mark — the published GPA gate for track subjects is at least 2.0 on the GPA scale.',
    'Leaving the Grade 12 capstone project or any track-specific coursework until the last fortnight — it feeds into the terminal certificate in many tracks.',
    'Ignoring the official Kuwait MOE Arabic curriculum domains — five-domain coverage (literature, grammar, morphology, spelling, composition) is the published framework the exam is built around.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.moe.edu.kw/',
};
export default exam;
