import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'llb-ent',
  examName: 'LLB Admission (South Africa)',
  country: 'southafrica',
  description: 'LLB (Bachelor of Laws) entrance requirements for South African universities — varies by university. Some require separate entrance tests alongside NSC (National Senior Certificate) results. The LLB is a four-year professional degree that qualifies graduates to become advocates or attorneys in South Africa. Universities like the University of Cape Town (UCT), University of the Witwatersrand (Wits), Stellenbosch University, and the University of Pretoria (UP) have their own additional admission criteria.',
  examPattern: 'Varies by university — typically subject performance in NSC plus any additional entrance tests. Some universities require the National Benchmark Tests (NBT) in Academic Literacy and Quantitative Literacy. Others conduct their own tests — for example, Wits requires the Wits Writing Test. The test typically covers academic literacy, writing skills, logical reasoning, and sometimes legal reasoning. Format varies from MCQ tests to essay writing. Duration is typically 2-4 hours.',
  eligibility: 'NSC (National Senior Certificate) with minimum degree-level passes. Specific subject requirements for law. A minimum of 50% in four NSC subjects including Life Orientation is typically required. For law, English Home Language or First Additional Language at 50%+ is usually mandatory, along with a Humanities subject. Some universities require the NBT as an additional requirement. The LLB is competitive and most universities have a higher cut-off than the minimum.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LLB Admission (South Africa) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for LLB Admission (South Africa) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for LLB Admission (South Africa) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for LLB Admission (South Africa) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for LLB Admission (South Africa) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LLB Admission (South Africa) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for LLB Admission (South Africa) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LLB Admission (South Africa) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for LLB Admission (South Africa) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LLB Admission (South Africa) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for LLB Admission (South Africa) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for LLB Admission (South Africa) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LLB Admission (South Africa) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for LLB Admission (South Africa) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LLB Admission (South Africa) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LLB Admission (South Africa) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for LLB Admission (South Africa) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for LLB Admission (South Africa) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for LLB Admission (South Africa)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'There is no single South African LLB entrance paper: universities set their own requirements on top of National Senior Certificate results, and some sit the National Benchmark Tests in Academic Literacy and Quantitative Literacy while others run their own test, such as the Wits Writing Test. The format runs from multiple choice to essays across roughly two to four hours, so someone drilled on multiple choice can be caught out by an essay paper. The published floor is typically 50% across four NSC subjects including Life Orientation, with English counted as either Home Language or First Additional Language at that level, plus a Humanities subject, and in practice each university sets a cut-off above that floor. Check your own university requirement and the NBT format on https://www.nbt.ac.za. The roadmaps and topic notes here cover academic literacy, writing and logical reasoning.',
  commonMistakes: [
    'Applying on the bare minimum — most universities set a higher cut-off than the published floor.',
    'Assuming every university runs the same paper — some set their own, such as the Wits Writing Test, and the NBT covers academic and quantitative literacy.',
    'Leaving out Life Orientation, the language and the subject choice — the rule is typically 50% across four NSC subjects, and English Home Language or a First Additional Language is usually mandatory at that level, along with a Humanities subject.',
    'Budgeting two hours for the paper; the format runs roughly 2-4 hours depending on the university.',
    'Practising only multiple choice — some papers are set as essay writing rather than MCQ, and a candidate who prepares for one can meet the other cold.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.nbt.ac.za',
};

export default exam;
