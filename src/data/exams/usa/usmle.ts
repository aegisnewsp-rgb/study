import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { usmleStep1 } from './subjects/usmle-step-1';
import { usmleStep2ck } from './subjects/usmle-step-2-ck';
import { usmleStep3 } from './subjects/usmle-step-3';

const subjects: Subject[] = [
  usmleStep1,
  usmleStep2ck,
  usmleStep3,
];

const exam: ExamTemplate = {
  examId: 'usmle',
  examName: 'USMLE (United States Medical Licensing Examination)',
  country: 'usa',
  description:
    'The United States Medical Licensing Examination is the licensing assessment for physicians practising in the United States, sponsored by the Federation of State Medical Boards (FSMB) and the National Board of Medical Examiners (NBME). It is taken in three steps. Step 1 assesses understanding of the basic sciences crucial for practising medicine. Step 2 CK evaluates clinical knowledge and the ability to apply medical concepts in patient care. Step 3 tests the ability to apply medical knowledge and understanding of biomedical and clinical science for unsupervised practice, and is described by the FSMB/NBME as one of the final steps to licensure. International medical graduates follow the same three-step path, and credentials issued by other bodies are assessed separately by the relevant state medical board.',
  examPattern:
    'Three steps. Step 1: assesses understanding of the basic sciences crucial for practising medicine, covering physiology, biochemistry, anatomy, pathology, pharmacology, microbiology, genetics, neuroscience, epidemiology and the ethical and legal framework of medicine. Step 2 CK: evaluates clinical knowledge and the ability to apply medical concepts in patient care, organised around presentations rather than around diseases — internal medicine, obstetrics and gynaecology, paediatrics, surgery, psychiatry, prevention and diagnostics. Step 3: tests the ability to apply medical knowledge and understanding of biomedical and clinical science for unsupervised practice, covering management and initial stabilisation, undifferentiated presentations, inpatient and discharge management, emergency care, chronic disease, patient safety and professionalism. NBME also publishes Clinical Science Subject Exams, the IFOM and NBME Self-Assessments as separate assessments; those are not steps of the USMLE. NBME and FSMB have announced that USMLE exam administrations will be reduced in 2029 under a Designated Testing Dates model, which changes scheduling but not the three-step structure.',
  eligibility:
    'Candidates register for USMLE steps through the NBME. The exam is computer-based and is delivered at Pearson VUE test centres. NBME operates a Fee Assistance Program for eligible students and residents for Step 1 and Step 2 CK, which reduces the cost of those two steps. Test accommodations are available and are applied for through NBME. Because this page could not be checked against the live NBME and FSMB registration requirements at build time, confirm eligibility, identity documents, scheduling windows and fees directly on the official sites linked below before registering — do not rely on a third-party summary of them.',
  subjects,
  durations: {
    '1mo': makeRoadmap(subjects, '1mo', 30, 'USMLE study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'USMLE study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'USMLE study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'USMLE study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'USMLE study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'USMLE study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Minimum-viable revision when a USMLE step is close',
    duration: '1mo',
    focusAreas: [
      { subject: 'Step 1 (Basic Sciences)', topics: ['Pathology: Cell Injury and Inflammation', 'Pharmacology', 'Biochemistry and Metabolism'] },
      { subject: 'Step 2 CK (Clinical Knowledge)', topics: ['Medicine by Presentation', 'Diagnostic Testing and Imaging'] },
      { subject: 'Step 3 (Unsupervised Practice)', topics: ['Management and Initial Stabilisation', 'Undifferentiated and New Presentations'] },
    ],
    strategy: 'Diagnose first: run a timed block per step and mark the section you actually lose marks in. With under a month, rebuilding content is slower than repairing the specific topics costing you marks, and for Step 2 CK and Step 3 presentation-style practice outperforms re-reading because those steps assess applied management rather than recall.',
  },
  prepOverview:
    'The three steps test different things, so one study method applied to all three wastes time. Step 1 rewards consolidating fragmented facts into systems you can reason from — high-yield review paired with practice questions on the same topic, not reading followed by a separate question block days later. Step 2 CK rewards breadth of presentations; work through cases organised by presenting complaint rather than by diagnosis, because the exam asks "this patient presents with X, what now". Step 3 rewards prioritisation under time pressure, and is best prepared by running timed management problems and deliberately practising the decision of what to defer. Use the free NBME practice materials and NBME self-assessments for calibration, and treat any third-party score predictor as a rough signpost rather than a prediction. Confirm the current step structure, registration requirements, accommodations process, fees and testing windows directly with NBME and FSMB before you book anything.',
  commonMistakes: [
    'Studying all three steps with one method. They assess different abilities and the practice that works for Step 1 is not the practice that works for Step 2 CK.',
    'Preparing Step 2 CK by reading diseases instead of presentations. The step assesses applying medical concepts in patient care, so case-based breadth matters more than single-system depth.',
    'Ignoring NBME and FSMB announcements. FSMB/NBME have announced reduced USMLE administrations in 2029 under a Designated Testing Dates model, and schedules change.',
    'Missing the NBME Fee Assistance Program. Assistance exists for Step 1 and Step 2 CK for eligible students and residents, and applying late is the usual reason it is missed.',
    'Trusting a third-party score predictor as a result. Only the score NBME issues is real; predictors are rough and frequently wrong.',
    'Overrunning on Step 3. The step tests judgement about what to prioritise and what to defer, so deliberately practise deferring lower-priority problems under time pressure.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.usmle.org/',
};

export default exam;