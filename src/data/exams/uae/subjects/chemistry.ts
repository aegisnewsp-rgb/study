export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Introduction to Organic Chemistry and Hydrocarbons', weight: 3 as const, description: 'Carbon bonding, saturated and unsaturated hydrocarbons, and homologous series - the baseline organic chemistry needed to read drug names on HAAD clinical items.' },
    { id: 'chemis-002', name: 'IUPAC Nomenclature of Organic Compounds', weight: 5 as const, description: 'Naming parent chains, substituents and functional groups - tested whenever a HAAD item lists a generic drug and asks for the correct functional-group class.' },
    { id: 'chemis-003', name: 'Isomerism in Organic Chemistry', weight: 4 as const, description: 'Structural, geometric and optical isomerism - applied to drug action where one enantiomer is therapeutic and the other is inactive or harmful (e.g. thalidomide).' },
    { id: 'chemis-004', name: 'Alkenes and Alkynes: Properties and Reactions', weight: 2 as const, description: 'Addition reactions, polymerisation and oxidation of unsaturated hydrocarbons - background for lipid metabolism and drug formulation questions.' },
    { id: 'chemis-005', name: 'Aromatic Chemistry: Benzene and Its Derivatives', weight: 5 as const, description: 'Benzene ring stability, electrophilic substitution and substituent effects - the basis of most modern drug scaffolds tested in HAAD pharmacology MCQs.' },
    { id: 'chemis-006', name: 'Alcohols, Phenols, and Ethers', weight: 3 as const, description: 'Hydrogen bonding, oxidation of alcohols and phenolic antiseptic action - ties directly to clinical disinfectants, alcohol-based hand rubs and phenol disinfectants.' },
    { id: 'chemis-007', name: 'Aldehydes and Ketones', weight: 3 as const, description: 'Carbonyl reactions and oxidation-reduction - tested in carbohydrate metabolism, bedside glucose testing and Phase I hepatic drug metabolism.' },
    { id: 'chemis-008', name: 'Carboxylic Acids and Their Derivatives', weight: 4 as const, description: 'Acidity, ester and amide bond formation - relevant to aspirin-class analgesics, fatty-acid metabolism and the peptide bond in clinical biochemistry.' },
    { id: 'chemis-009', name: 'Amines and Nitrogen Compounds', weight: 5 as const, description: 'Basicity, amide formation and quaternary ammonium salts - heavily tested because anaesthetics, neurotransmitters and many antibiotic classes contain nitrogen.' },
    { id: 'chemis-010', name: 'Biomolecules: Carbohydrates, Proteins, and Lipids', weight: 5 as const, description: 'Monosaccharides, amino acids, peptide bonds, fatty acids and triglycerides - the foundations for interpreting blood glucose, urea, lipid panel and liver-function results.' }
  ]
};
