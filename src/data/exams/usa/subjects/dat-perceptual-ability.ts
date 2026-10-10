// DAT — Perceptual Ability Test.
// Source: American Dental Association, https://www.ada.org/education/testing/exams/dental-admission-test-dat
// — fetched and read independently by this worker on 2026-10-09 (HTTP 200). That page states the
// Perceptual Ability section contains 90 items. ADA also links its own Perceptual Ability Test
// question instructions, which confirm the section is accompanied by specific candidate instructions.
// Topic split below is StudyRoadmap's own study organisation of the item types the ADA publishes
// instructions for. The ADA publishes no per-item-type breakdown. Weight values are our own.
import type { Subject } from '../../types';
export const datPerceptualAbility: Subject = {
  id: 'perceptual-ability', name: 'Perceptual Ability Test', color: '#7c3aed',
  topics: [
    { id: 'pa-001', name: 'Keyhole Problems', weight: 5, description: 'Three-dimensional block structures presented in an isometric keyhole view. The item shows a solid and an opening in it; you choose the shape that fits the opening exactly.' },
    { id: 'pa-002', name: 'Top-View and Projection Matching', weight: 5, description: 'Given a three-dimensional object and a viewpoint, choosing the matching top view or a projection of the object.' },
    { id: 'pa-003', name: 'Paper Folding', weight: 5, description: 'A transparent sheet with a pattern is folded along stated lines; you choose the pattern that results. This is where candidates most often lose marks, because a single misread fold invalidates the answer.' },
    { id: 'pa-004', name: 'Maze Tracing and Direction-Following', weight: 4, description: 'Finding the route from a starting point to a target without leaving the lines, and following instructions of the form "go to the X that has a Y".' },
    { id: 'pa-005', name: 'Object Rotation and Mirror Imaging', weight: 4, description: 'Identifying the view of an object after rotation or from a mirror, and recognising the reflection that matches.' },
    { id: 'pa-006', name: 'Spatial Practice and Speed', weight: 4, description: 'The section is 90 items inside a fixed seat in a five-hour-15-minute examination, so the binding constraint is sustained pace rather than concept. Practising without a calculator under real time matters more than solving slowly.' },
  ],
};
