export const business_law: Subject = {
  id: 'business-law', name: 'Business Law', color: '#6b7280',
  topics: [
    { id: 'busine-001', name: 'Foundations of South African Law', weight: 3 as const, description: 'Sources of SA law, hierarchy of courts, role of the Constitution, and how statutes and common law govern commercial transactions.' },
    { id: 'busine-002', name: 'Contract Law & Pharmaceutical Agreements', weight: 4 as const, description: 'Offer, acceptance, consideration, capacity, legality, breach of contract, remedies, and how pharmacy supply agreements are formed.' },
    { id: 'busine-003', name: 'Sale of Goods Act & Supply Chain', weight: 3 as const, description: 'Rights and duties of buyer and seller, passing of ownership, delivery, latent defects, and remedies under the Sale of Goods Act.' },
    { id: 'busine-004', name: 'Partnership Law & Business Structures', weight: 2 as const, description: 'Formation, duties, and dissolution of partnerships, partners\' liability, and how partnerships differ from companies in pharmacy practice.' },
    { id: 'busine-005', name: 'Companies Act & Corporate Governance', weight: 4 as const, description: 'Company formation, director duties, shareholder rights, and corporate governance principles under the Companies Act 71 of 2008.' },
    { id: 'busine-006', name: 'Consumer Protection Act & Patient Rights', weight: 4 as const, description: 'CPA rights (right to safe goods, disclosure), pharmacist duty to inform patients, and the National Patient Rights Charter.' },
    { id: 'busine-007', name: 'Intellectual Property Law & Patents', weight: 3 as const, description: 'Patentability, registration, infringement, and how IP protection applies to pharmaceutical formulations, trademarks, and generic substitution.' },
    { id: 'busine-008', name: 'Medicines & Related Substances Act (Act 101 of 1965)', weight: 5 as const, description: 'Scheduling of medicines, licensing, dispensing rules, record-keeping, and SAPC regulations under the Medicines and Related Substances Act.' }
  ]
};