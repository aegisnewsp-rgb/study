import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Topic 1', weight: 3 as const, description: 'Newton\'s laws of motion, kinematics, and dynamics essential for understanding forces in the human body and medical devices. Frequently tested in HEPC Medical with application to biomechanics.' },
    { id: 'physic-002', name: 'Topic 2', weight: 3 as const, description: 'Properties of matter including elasticity, surface tension, and fluid statics — foundational for understanding blood flow, respiration, and fluid therapy in clinical settings.' },
    { id: 'physic-003', name: 'Topic 3', weight: 3 as const, description: 'Wave phenomena, sound, and optics including the Doppler effect and lens systems, relevant to medical imaging techniques such as ultrasound and optical instruments.' },
    { id: 'physic-004', name: 'Topic 4', weight: 3 as const, description: 'Electric fields, circuits, and electromagnetism underpinning ECG machines, defibrillators, and MRI technology used in South African hospitals.' },
    { id: 'physic-005', name: 'Topic 5', weight: 3 as const, description: 'Geometric optics including reflection, refraction, and lens theory — essential for understanding vision correction and microscopes used in medical laboratories.' },
    { id: 'physic-006', name: 'Topic 6', weight: 3 as const, description: 'Heat and thermodynamics covering calorimetry, heat transfer, and the gas laws — applied in understanding metabolic processes and respiratory physiology.' },
    { id: 'physic-007', name: 'Topic 7', weight: 3 as const, description: 'Modern physics including atomic structure, radioactivity, and nuclear physics, the basis for radiation therapy, X-rays, and nuclear medicine imaging.' },
    { id: 'physic-008', name: 'Topic 8', weight: 3 as const, description: 'Work, energy, and power with conservation laws applied to physiological systems such as muscle mechanics and joint movement analysis.' },
    { id: 'physic-009', name: 'Topic 9', weight: 3 as const, description: 'Gravitation and orbital mechanics with limited direct medical application but included for comprehensive NSC physics coverage.' },
    { id: 'physic-010', name: 'Topic 10', weight: 3 as const, description: 'Circular motion and rotational dynamics relevant to analysing joint rotations and centrifugal processes in medical equipment.' },
    { id: 'physic-011', name: 'Topic 11', weight: 3 as const, description: 'Momentum and collisions covering impulse, conservation of momentum, and their relevance to trauma physics and impact injuries.' },
    { id: 'physic-012', name: 'Topic 12', weight: 3 as const, description: 'Electrostatics including Coulomb\'s law and electric potential — foundational for understanding nerve impulses and electrical signalling in the nervous system.' },
    { id: 'physic-013', name: 'Topic 13', weight: 3 as const, description: 'Alternating current and electromagnetic induction powering AC-powered medical devices and inductive charging in healthcare equipment.' },
    { id: 'physic-014', name: 'Topic 14', weight: 3 as const, description: 'Dimensional analysis, measurement, and error handling — essential scientific skills for laboratory work and clinical data interpretation.' },
    { id: 'physic-015', name: 'Topic 15', weight: 3 as const, description: 'Revision of core NSC physics concepts and problem-solving strategies tailored for the HEPC Medical entrance examination.' }
  ]
};

export { physics };
