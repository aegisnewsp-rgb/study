import type { Subject } from '../types';

const filipino: Subject = {
  id: 'filipino', name: 'Filipino', color: '#6b7280',
  topics: [
    { id: 'filipi-001', name: 'Topic 1', weight: 3 as const, description: 'Gramatika at Pang-uri — mga bahagi ng pananalita, pokus, at tamang paggamit ng mga pang-uri sa pangungusap.' },
    { id: 'filipi-002', name: 'Topic 2', weight: 3 as const, description: 'Panghalip at Pangukol — paggamit ng mga panghalip na panao, pamatlig, at pamanahon sa konteksto.' },
    { id: 'filipi-003', name: 'Topic 3', weight: 3 as const, description: 'Wastong Baybay at Palalim — mga panuntunan sa ortograpiya at wastong pagbaybay ng mga salitang Filipino.' },
    { id: 'filipi-004', name: 'Topic 4', weight: 3 as const, description: 'Pagbasa at Pag-unawa — pagtukoy ng pangunahing kaisipan, detalye, layunin, at tono sa mga tekstong Filipino.' },
    { id: 'filipi-005', name: 'Topic 5', weight: 3 as const, description: 'Idiomatic Expressions at Salawikain — mga Pawagan, Sawikain, at Kasabihang may kinalaman sa kulturang Filipino.' },
    { id: 'filipi-006', name: 'Topic 6', weight: 3 as const, description: 'Sanhi at Bunga — pagtukoy ng ugnayan ng sanhi at bunga sa mga pangungusap at talataan.' },
    { id: 'filipi-007', name: 'Topic 7', weight: 3 as const, description: 'Panitikan at Kultura — mga akda,awit, at may-kulturang teksto na kabilang sa syllabus ng Filipino sa senior high.' },
    { id: 'filipi-008', name: 'Topic 8', weight: 3 as const, description: 'UPCAT Filipino Practice Test — pagsasanay sa wastong paggamit ng wikang Filipino na may presentasyong UPCAT.' }
  ]
};

export { filipino };
