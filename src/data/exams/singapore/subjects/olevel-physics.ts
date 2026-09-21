// Singapore-Cambridge GCE O-Level Pure Physics — syllabus code 6091.
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB) in
// collaboration with Cambridge International Education, under the
// Singapore-Cambridge brand. MOE Curriculum Planning and Development
// Division designs the content; SEAB and Cambridge jointly administer.
//
// The 6091 syllabus is the upper-secondary physics subject taken at the
// end of Sec 4. It is organised into six sections covering 20 topics:
// I. Measurement; II. Newtonian Mechanics; III. Thermal Physics;
// IV. Waves; V. Electricity and Magnetism; VI. Modern Physics.
// The topic list below uses the official section and topic headings from
// the MOE/SEAB 6091 syllabus, exactly as a Singapore Sec 4 student would
// recognise them.
//
// Important: from 2027, the 6091 code is being replaced in the new
// Singapore-Cambridge Secondary Education Certificate (SEC) by code K323.
// The content structure is unchanged; only the subject code and the
// qualification title change. Verify the live code on the SEAB 2026
// O-Level syllabuses page before committing a revision plan.
//
// Source: MOE/SEAB O-Level Physics 6091 syllabus (updated 2024),
// https://www.moe.gov.sg/api/media/642daf76-cc03-49ab-a163-7e4b318418d5/2023-OLevel-Physics-Syllabus-Updated-2024.pdf
// Source: SEAB 2026 O-Level syllabuses listing,
// https://www.seab.gov.sg/gce-o-level/o-level-syllabuses-examined-for-school-candidates-2026/
import type { Subject } from '../../types';

export const olevelPhysics: Subject = {
  id: 'olevel-physics',
  name: 'Physics (Pure Physics)',
  color: '#3b82f6',
  topics: [
    { id: 'olep-001', name: 'I. Measurement: Physical Quantities, Units and Measurement', weight: 2 as const, description: 'SI units, prefixes, scalar and vector quantities, measurement techniques and uncertainty. A short Section I that underpins every later topic.' },
    { id: 'olep-002', name: 'II. Newtonian Mechanics: Kinematics, Dynamics, Mass/Weight/Density, Turning Effect of Forces, Pressure, Energy, Work and Power', weight: 5 as const, description: 'Equations of motion; Newton\'s three laws; mass, weight and density; moments; pressure in fluids; energy types, work, power and efficiency. Section II is the largest single section by marks at O-Level.' },
    { id: 'olep-003', name: 'III. Thermal Physics: Kinetic Model of Matter, Thermal Processes and Thermal Properties of Matter', weight: 3 as const, description: 'Three states of matter, Brownian motion, internal energy, specific heat capacity and specific latent heat, conduction, convection and radiation. Section III is a heavily tested mid-paper section.' },
    { id: 'olep-004', name: 'IV. Waves: General Properties of Waves, Electromagnetic Spectrum and Light', weight: 4 as const, description: 'Wave terminology, transverse and longitudinal waves, the electromagnetic spectrum, reflection, refraction, total internal reflection, lenses and the eye. Section IV covers all wave optics and is a common Paper-2 final.' },
    { id: 'olep-005', name: 'V. Electricity and Magnetism: Static Electricity, Current Electricity, D.C. Circuits, Practical Electricity, Magnetism, Electromagnetism and Electromagnetic Induction', weight: 5 as const, description: 'Charges and electric fields; current, voltage and resistance; series and parallel circuits; household electricity; magnets and magnetic fields; the motor effect; electromagnetic induction and the transformer. The other half of the largest-paper section by marks.' },
    { id: 'olep-006', name: 'VI. Modern Physics: Radioactivity', weight: 2 as const, description: 'Atomic structure; radioactive decay (alpha, beta, gamma); half-life; safety and uses of radiation. A short but high-yield Section VI.' }
  ]
};
