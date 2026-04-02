import type { Subject } from '../types';

const forensic: Subject = {
  id: 'forensic', name: 'Forensic Medicine', color: '#6b7280',
  topics: [
    { id: 'forens-001', name: 'Thanatology', weight: 3 as const, description: 'Death, signs of death, modes of death, changes after death (rigor, algor, livor mortis), and death certificate.' },
    { id: 'forens-002', name: 'Forensic Toxicology', weight: 3 as const, description: 'Poisons classification, signs and symptoms, fatal dose, and medicolegal aspects of poisoning cases.' },
    { id: 'forens-003', name: 'Trauma and Injuries', weight: 3 as const, description: 'Mechanical injuries, burns, fractures, defence wounds, and their medicolegal interpretation.' },
    { id: 'forens-004', name: 'Sexual Jurisprudence', weight: 3 as const, description: 'Virginity, sexual assault, Sodomy, and related medicolegal examinations and evidence.' },
    { id: 'forens-005', name: 'Forensic Psychiatry', weight: 3 as const, description: 'Insanity, legal tests of insanity, feigned insanity, and McNaughton rules for court testimony.' },
    { id: 'forens-006', name: 'Autopsy and IPC Sections', weight: 3 as const, description: 'Forensic post-mortem procedure, Inquest, relevant IPC sections (302, 304, 376), and court protocols.' },
  ]
};

export { forensic };
