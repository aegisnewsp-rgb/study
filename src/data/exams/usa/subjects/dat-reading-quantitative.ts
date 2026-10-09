// DAT — Reading Comprehension and Quantitative Reasoning.
// Source: American Dental Association, https://www.ada.org/education/testing/exams/dental-admission-test-dat
// — fetched and read independently by this worker on 2026-10-09 (HTTP 200). That page states
// Reading Comprehension is 50 items and Quantitative Reasoning is 40 items, and that total
// administration time is five hours and 15 minutes.
// The per-section timings (Reading Comprehension 60 minutes, Quantitative Reasoning 45 minutes,
// with a 30-minute scheduled break between Perceptual Ability and Reading Comprehension) come from
// the ADA DAT Candidate Guide as retrieved by Manus.
// The ADA publishes no per-topic weightage. Weight values below are StudyRoadmap's own.
import type { Subject } from '../../types';
export const datReadingQuantitative: Subject = {
  id: 'reading-quantitative', name: 'Reading Comprehension and Quantitative Reasoning', color: '#0e7490',
  topics: [
    { id: 'rq-001', name: 'Reading Comprehension: Comprehension and Inference', weight: 5, description: 'Taking in the argument of a dense passage, locating explicit detail, and drawing the inferences the passage supports without importing outside knowledge.' },
    { id: 'rq-002', name: 'Reading Comprehension: Critical Reading and Language', weight: 5, description: 'Identifying the author\'s position and the function of each part of the text, and handling the dense technical vocabulary the passages are built from.' },
    { id: 'rq-003', name: 'Quantitative Reasoning: Arithmetic and Estimation', weight: 5, description: 'Percentage change, ratio and proportion, rate problems, averages, simple probability and statistics, and the arithmetic of everyday applied contexts.' },
    { id: 'rq-004', name: 'Quantitative Reasoning: Algebra and Data Interpretation', weight: 4, description: 'Simple and simultaneous equations, exponents and roots, reading and interpreting graphs and tables, and the estimation items where an approximation is the intended answer.' },
    { id: 'rq-005', name: 'Pacing Across a Five-Hour Examination', weight: 4, description: 'The ADA states a total administration time of five hours and 15 minutes across four sections. Fatigue management and section order are worth marks, and the 30-minute scheduled break falls between Perceptual Ability and Reading Comprehension.' },
  ],
};
