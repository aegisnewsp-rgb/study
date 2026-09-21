// HKDSE Citizenship and Social Development (CSD) — Awarding body: Hong Kong
// Examinations and Assessment Authority (HKEAA). CSD replaced Liberal Studies
// as a HKDSE core subject from the 2024 examination onwards. The curriculum
// has three themes plus a Mainland Study Tour (the study tour is NOT part of
// the public assessment). Source: CDC/HKEAA Citizenship and Social
// Development Curriculum and Assessment Guide (Secondary 4 - 6), 2021,
//   https://cs.edb.edcity.hk/file/C_and_A_guide/202106/CS_CAG_S4-6_Eng_2021.pdf
// and the 2026 HKDSE CSD Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/cs/2026hkdse-e-cs.pdf
// Public assessment is a single 2-hour paper (worth 100% of the subject mark)
// testing knowledge of the three themes, with data-response and short-essay
// items. Re-check the live paper format, the National Security Education
// framework (updated 2025) and any in-year changes on hkeaa.edu.hk before
// committing a revision plan to a student.

import type { Subject } from '../../types';

export const hkdseCsd: Subject = {
  id: 'hkdse-csd',
  name: 'Citizenship and Social Development',
  color: '#dc2626',
  topics: [
    { id: 'hkdse-csd-001', name: 'Theme 1 — Hong Kong under "One Country, Two Systems"', weight: 4 as const, description: 'Topic 1: the meaning and implementation of "one country, two systems" — the origin of the Hong Kong question, the return to China, the constitutional relationship between the country and the HKSAR, the legal basis of "one country, two systems" and the Basic Law, the National Security Law, the political structure of the HKSAR, the significance of rule of law, and the fundamental rights and duties of Hong Kong residents under the Basic Law.' },
    { id: 'hkdse-csd-002', name: 'Theme 1 — National Identity and Cultural Diversity', weight: 3 as const, description: 'Topic 2: contemporary situation of the country and a sense of national identity — political structure of the country, the Chinese nation, Chinese nationality and citizens, national symbols (flag, emblem, anthem), the country\'s achievements in technology, medical care, culture, education, infrastructure and poverty eradication, and the benefits and contributions of the HKSAR\'s participation in national affairs. Topic 3: characteristics of cultural diversity of Hong Kong society and its positive significance.' },
    { id: 'hkdse-csd-003', name: 'Theme 2 — Our Country since Reform and Opening-up', weight: 4 as const, description: 'Topic 1: change in people\'s life and overall national strength — stages of reform and opening-up, changes in income, consumption, education, medical care, life expectancy, poverty eradication, and enhancement of overall national strength (economy, culture, natural resources, education, technology, national defence). Topic 2: the development of the country and the integration of Hong Kong into overall national development, including the Greater Bay Area, the Mainland and Hong Kong Closer Economic Partnership Arrangement (CEPA) and the Five-Year Plans.' },
    { id: 'hkdse-csd-004', name: 'Theme 2 — Participation in International Affairs', weight: 3 as const, description: 'Topic 3: participation in international affairs — the notion of multifaceted diplomacy since the 21st century, actions and initiatives including rescues and assistance, setting up international organisations and forums, the Belt and Road Initiative, and the impact on the country\'s overall development and the active role played by Hong Kong.' },
    { id: 'hkdse-csd-005', name: 'Theme 3 — Economic Globalisation and Technology', weight: 3 as const, description: 'Topic 1: economic globalisation — interdependence of economies of all countries and the cooperation of international economic organisations, development of multinational corporations, global labour and financial market integration, the development of new economies and the impact on individuals (consumption and employment) and on the development of Hong Kong and the country. Topic 2: technological development and information literacy — artificial intelligence, big data, cloud storage, the Internet, social networking sites, instant messaging software, identifying false information, morals and conduct in using technologies, and observing the relevant laws.' },
    { id: 'hkdse-csd-006', name: 'Theme 3 — Sustainable Development and Public Health', weight: 3 as const, description: 'Topic 3: sustainable development — the rationale of sustainable development and the practical experiences of environmental conservation of the country, Hong Kong and other regions, and the roles and responsibilities of different stakeholders. Topic 4: public health and human health — functions and roles of the World Health Organization, contributions of the country and Hong Kong to global public health (particularly in preventing and controlling infectious diseases), and individuals\' responsibilities.' }
  ]
};