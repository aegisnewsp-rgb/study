import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from './types';

import { makeRoadmap } from './_lib/roadmap';

// NCLEX (National Council Licensure Examination) — US nursing licensure exam
// administered by the National Council of State Boards of Nursing (NCSBN).

const safe_effective_care: Subject = {
  id: 'safe-effective-care',
  name: 'Safe & Effective Care',
  color: '#0ea5e9',
  topics: [
    { id: 'sec-001', name: 'Management of Care', weight: 5, description: 'Delegation, leadership, ethical/legal issues, advocacy.' },
    { id: 'sec-002', name: 'Safety & Infection Control', weight: 5, description: 'Standard precautions, restraints, accident/injury prevention.' },
    { id: 'sec-003', name: 'Care Coordination', weight: 4, description: 'Discharge planning, referrals, continuity of care.' },
    { id: 'sec-004', name: 'Ethical & Legal Practice', weight: 4, description: 'Informed consent, advance directives, confidentiality.' },
    { id: 'sec-005', name: 'Quality Improvement', weight: 3, description: 'Performance improvement, evidence-based practice.' },
    { id: 'sec-006', name: 'Information Management', weight: 3, description: 'Documentation, reporting, informatics basics.' },
  ],
};

const health_promotion: Subject = {
  id: 'health-promotion',
  name: 'Health Promotion & Maintenance',
  color: '#10b981',
  topics: [
    { id: 'hp-001', name: 'Lifespan Growth & Development', weight: 5, description: 'Infant through older adult developmental milestones.' },
    { id: 'hp-002', name: 'Maternal & Newborn Care', weight: 5, description: 'Antepartum, intrapartum, postpartum, neonatal nursing.' },
    { id: 'hp-003', name: 'Reproductive Health', weight: 4, description: 'Family planning, STIs, contraception education.' },
    { id: 'hp-004', name: 'Health Screening & Immunisation', weight: 4, description: 'Age-appropriate screening and vaccination schedules.' },
    { id: 'hp-005', name: 'Patient Education & Self-Care', weight: 4, description: 'Teaching principles across health literacy levels.' },
    { id: 'hp-006', name: 'Nutrition Across the Lifespan', weight: 3, description: 'Age-specific dietary needs and deficiencies.' },
  ],
};

const psychosocial: Subject = {
  id: 'psychosocial',
  name: 'Psychosocial Integrity',
  color: '#8b5cf6',
  topics: [
    { id: 'ps-001', name: 'Therapeutic Communication', weight: 5, description: 'Active listening, boundaries, crisis intervention.' },
    { id: 'ps-002', name: 'Mental Health Disorders', weight: 5, description: 'Mood, anxiety, psychotic, substance use disorders.' },
    { id: 'ps-003', name: 'Stress & Coping', weight: 4, description: 'Adaptation, grief, situational and maturational stressors.' },
    { id: 'ps-004', name: 'Cultural & Spiritual Care', weight: 4, description: 'Cultural competence, religious considerations.' },
    { id: 'ps-005', name: 'Abuse & Neglect', weight: 4, description: 'Identification, reporting obligations, mandatory reporting.' },
    { id: 'ps-006', name: 'End-of-Life & Grief', weight: 3, description: 'Palliative care, hospice, bereavement support.' },
    { id: 'ps-007', name: 'Behavioural Management', weight: 3, description: 'De-escalation, restraints, seclusion protocols.' },
  ],
};

const physiological: Subject = {
  id: 'physiological',
  name: 'Physiological Integrity',
  color: '#f59e0b',
  topics: [
    { id: 'pi-001', name: 'Basic Care & Comfort', weight: 5, description: 'Hygiene, mobility, rest, pain management.' },
    { id: 'pi-002', name: 'Pharmacological Therapies', weight: 5, description: 'Medication administration, IV therapy, dose calculation.' },
    { id: 'pi-003', name: 'Reduction of Risk', weight: 5, description: 'Complication prevention, diagnostic testing, lab values.' },
    { id: 'pi-004', name: 'Physiological Adaptation', weight: 5, description: 'Acute and chronic illness, fluid/electrolyte balance.' },
    { id: 'pi-005', name: 'Cardiovascular Nursing', weight: 4, description: 'ECG, hemodynamics, cardiac medications.' },
    { id: 'pi-006', name: 'Respiratory Nursing', weight: 4, description: 'ABGs, oxygen therapy, ventilation support.' },
    { id: 'pi-007', name: 'Neurological Nursing', weight: 4, description: 'Stroke, seizure, traumatic brain injury care.' },
    { id: 'pi-008', name: 'Renal & Urinary', weight: 3, description: 'Dialysis, fluid balance, urinary catheters.' },
    { id: 'pi-009', name: 'Gastrointestinal Nursing', weight: 3, description: 'NG tubes, ostomy care, GI bleeding.' },
    { id: 'pi-010', name: 'Endocrine Nursing', weight: 3, description: 'Diabetes management, thyroid disorders.' },
  ],
};

const subjects = [safe_effective_care, health_promotion, psychosocial, physiological];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':  { days: 1,   desc: '60-minute exam-eve triage: highest-yield Management of Care and Safety topics, SATA pattern recognition.' },
  '2h':  { days: 1,   desc: 'Two-hour priority pass — top 6 client-needs categories, one quick recall drill per topic.' },
  '3h':  { days: 1,   desc: 'Three-hour focus block — 9 highest-yield NCLEX categories with one clinical scenario each.' },
  '5h':  { days: 1,   desc: 'Five-hour intensive — 12 top-weight topics across all four client-needs areas, with NGN question patterns.' },
  '12h': { days: 1,   desc: 'Half-day crash — ~30% of the weighted syllabus, 20 min/topic, focus on NGN item types.' },
  '1d':  { days: 1,   desc: 'One-day intensive — top 20% by weight, 25 min/topic, single-pass with quick recall questions.' },
  '2d':  { days: 2,   desc: 'Two-day rapid revision — 30% coverage, weight-sorted, balanced across client-needs categories.' },
  '3d':  { days: 3,   desc: 'Three-day plan — 40% syllabus, 30-40 min/topic, includes brief recap each evening.' },
  '5d':  { days: 5,   desc: 'Five-day plan — 55% coverage of weighted topics, ~3 hours/day, one mini mock on day 5.' },
  '7d':  { days: 7,   desc: 'One-week plan — 70% coverage, 3-4 hours/day, two practice sessions over the week.' },
  '10d': { days: 10,  desc: 'Ten-day plan — 85% coverage, ~3 hours/day, daily revision of prior topic, two mini mocks.' },
  '2w':  { days: 14,  desc: 'Two-week plan — full syllabus, ~3 hours/day, last 2 days for full mock + NGN practice.' },
  '1mo': { days: 30,  desc: 'One-month plan — full syllabus at ~2-3 topics/day, weekly mini mocks, final week revision sprint.' },
  '2mo': { days: 60,  desc: 'Two-month plan — full syllabus + topic-wise practice, alternate-week mocks, weak-topic sessions.' },
  '3mo': { days: 90,  desc: 'Three-month plan — first month content, second month practice + mocks, third month revision + mock cycles.' },
  '6mo': { days: 180, desc: 'Six-month plan — foundation phase (8 weeks) + advanced phase (10 weeks) + revision phase (6 weeks).' },
  '1yr': { days: 365, desc: 'One-year plan — full syllabus twice (concept pass + advanced pass), monthly mocks, ~2 hours/day baseline.' },
  '2yr': { days: 730, desc: 'Two-year plan — Year 1 foundation + concept depth, Year 2 advanced + mocks + final revision; ~2 hours/day.' },
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint on the highest-yield client-needs categories most likely to surface on the NCLEX.',
  duration: '2d',
  focusAreas: [
    { subject: 'Safe & Effective Care', topics: ['Management of Care', 'Safety & Infection Control', 'Ethical & Legal Practice'] },
    { subject: 'Pharmacological Therapies', topics: ['Pharmacological Therapies', 'Medication administration', 'IV therapy'] },
    { subject: 'Health Promotion & Maintenance', topics: ['Maternal & Newborn Care', 'Lifespan Growth & Development'] },
  ],
  strategy: 'Prioritise Management of Care and Pharmacological Therapies — they are the heaviest categories. Drill NGN item types (SATA, ordered response, case study). Review the most-missed lab values and basic safety priorities.',
};

const exam: ExamTemplate = {
  examId: 'nclex',
  examName: 'NCLEX',
  country: 'india',
  description: 'The National Council Licensure Examination (NCLEX) is the standardised licensing exam for nurses in the United States and Canada. Administered by the National Council of State Boards of Nursing (NCSBN), the NCLEX is required for entry-level practice as a Registered Nurse (NCLEX-RN) or a Licensed Practical / Vocational Nurse (NCLEX-PN). Computer-adaptive testing, NGN (Next Generation NCLEX) item types since 2023, four major client-needs categories, and a pass/fail scoring model.',
  examPattern: 'Computer-adaptive test (CAT) using NGN item types: multiple choice, select-all-that-apply (SATA), ordered response, hot-spot, drag-and-drop, case studies, and matrix/grid items. RN candidates answer 75-145 items over up to 5 hours; PN candidates answer 85-205 items over up to 5 hours. Scoring is pass/fail with no numeric score; the exam ends when the algorithm determines competence with 95% confidence. Untimed item-by-item, but total seat-time is capped.',
  eligibility: "Apply to a US state board of nursing (or Canadian province) for an Authorisation to Test (ATT). Candidates must have completed (or be within 6 months of completing) an approved nursing programme — ADN, BSN, or diploma for RN; LPN/LVN programme for PN. International nurses must obtain a CGFNS VisaScreen certificate and apply to the relevant state board. Re-write eligibility varies by state.",
  subjects,
  durations,
  rescueMode,
  prepOverview:
    'NCLEX preparation works best in three phases: (1) map the four client-needs categories from the NCSBN test plan and identify the heaviest-weighted topics in each, (2) finish high-weight topics with NGN-format practice sets and an error log, (3) sit full-length computer-adaptive mocks matching the official seat-time. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://www.ncsbn.org/ for the current cycle — rules change by year and by state board of nursing.',
  commonMistakes: [
    'Using outdated NCLEX-RN pattern PDFs instead of the live NCSBN test plan and Next Generation NCLEX (NGN) item types.',
    'Practising only single-answer MCQs and ignoring NGN item types (SATA, ordered response, case study, matrix/grid).',
    'Treating the four client-needs categories as equal — Management of Care, Safety/Infection Control, Pharmacological Therapies, and Physiological Adaptation are the heaviest.',
    'No written error log — repeating the same clinical-judgement mistakes across mocks.',
    'Treating unofficial "NCLEX predictor" scores as guarantees. The exam is pass/fail and computer-adaptive; only the official result matters.'
  ],
  lastUpdated: '2026-09-17',
  officialSource: 'https://www.ncsbn.org/',
};
export default exam;
