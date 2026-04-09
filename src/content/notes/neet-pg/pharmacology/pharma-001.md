---
exam: neet-pg
examName: NEET PG
subject: pharmacology
subjectName: Pharmacology
topic: pharma-001
topicName: Pharmacokinetics (PK) — Absorption, Distribution, Metabolism, Excretion
weight: 3
country: neet
generated: "2026-03-25T17:00:00"
---

# Pharmacokinetics (PK) — Absorption, Distribution, Metabolism, Excretion

### 🟢 Lite — Quick Review (1h–1d)

**Bioavailability (F):**
- Fraction of drug that reaches systemic circulation unchanged
- **IV drugs:** F = 100% (reference standard)
- **Oral drugs:** F varies (first-pass metabolism reduces it)

**First-Pass Metabolism:**
- Oral drugs → portal circulation → liver → systemic circulation
- High first-pass: Propranolol, Lidocaine, Nitroglycerin, Morphine
- **Bioavailability formula:** F = (AUCoral / AUCiv) × 100

**Volume of Distribution (Vd):**
> Vd = (Amount of drug in body) / (Plasma drug concentration)

| Vd | Interpretation |
|---|---|
| < 5 L (body water ~5L) | Drug stays in plasma (highly protein-bound, hydrophilic) |
| 10-20 L | Well-distributed to tissues |
| > 40 L | Extensive tissue binding (lipophilic, high tissue affinity) |

**Loading Dose Formula:**
> Loading Dose = (Vd × Target Cp) / Bioavailability (F)

**Maintenance Dose Rate:**
> Dose rate = (Cl × Target Cp) / Bioavailability (F)

**Clearance (Cl):**
> Cl = Vd × Ke (elimination rate constant)
> Also: Cl = (Dose / AUC)

---

### 🟡 Standard — Regular Study (2d–2mo)

**Routes of Administration:**

| Route | Bioavailability | Onset | Uses |
|---|---|---|---|
| **IV** | 100% | Immediate | Emergency,病房 drugs |
| **IM** | Variable (faster than SC) | Minutes | Vaccines, antibiotics |
| **SC** | Slower absorption | ~15-30 min | Insulin, heparin |
| **Oral** | Variable (first-pass) | Slow | Most chronic drugs |
| **Inhalation** | Rapid | Minutes | Asthma, anesthesia |
| **Topical** | Minimal systemic | Local action | Skin, eye, lung |
| **Rectal** | Partial bypass of liver | Variable | Antiemetics, analgesics |

**Factors Affecting Drug Absorption:**

1. **pH and ionization:**
   - Weak acids (aspirin, sulfonamides) → absorbed in acidic stomach (pH 1-3)
   - Weak bases (morphine, amphetamines) → absorbed in basic intestine
   - **Henderson-Hasselbalch equation:**
     - For weak ACID: pH = pKa + log ([ionized]/[unionized])
     - For weak BASE: pH = pKa + log ([unionized]/[ionized])
   - Ionized drugs cannot cross lipid membranes (trapped in ionizable compartments)

2. **Lipophilicity** — higher lipid solubility → faster absorption

3. **Surface area** — intestinal villi (large surface area) >> stomach

4. **Blood flow** — active absorption sites need adequate perfusion

5. **P-glycoprotein (P-gp)** — efflux pump in gut → reduces drug absorption (e.g., digoxin)

**Drug Distribution:**

**Protein Binding:**
- **Albumin** — binds most acidic drugs (warfarin, sulfonamides, bilirubin)
- **α1-acid glycoprotein (AAG)** — binds basic drugs (propranolol, quinidine)
- ** lipoprotein** — binds lipid-soluble drugs
- **Only FREE (unbound) drug is pharmacologically active** and available for distribution/metabolism/excretion
- **Displacement interactions:** Two drugs competing for same binding site → ↑ free fraction of one drug (e.g., sulfonamides displacing warfarin → ↑ bleeding risk)

**Special Barriers:**

| Barrier | Drugs That Cross | Clinical Relevance |
|---|---|---|
| **Blood-brain barrier (BBB)** | Lipophilic, low MW | CNS drugs; infection, tumor |
| **Placenta** | Most lipophilic drugs | Teratogenicity (thalidomide, alcohol) |
| **Blood-testis barrier** | Limited | Protects germ cells |
| **Tissue barriers** | Variable | Site-specific delivery |

**Cytochrome P450 Enzymes (Phase I Metabolism):**

| Enzyme | Substrates | Inducers | Inhibitors |
|---|---|---|---|
| **CYP3A4** | Most drugs (50% of Rx) | Carbamazepine, phenytoin, rifampin, OCPs, glucocorticoids | Ketoconazole, erythromycin, grapefruit juice, protease inhibitors |
| **CYP2D6** | Beta-blockers, antidepressants, opioids (codeine → morphine), antipsychotics | Not significantly induced | Quinidine, fluoxetine, paroxetine |
| **CYP2C9** | Warfarin, NSAIDs, phenytoin | Rifampin, phenobarbital | Amiodarone, fluconazole |
| **CYP2C19** | PPIs, clopidogrel (activation), diazepam | Rifampin | Omeprazole, fluoxetine |
| **CYP1A2** | Theophylline, caffeine, warfarin, clozapine | Smoking, charcoal-broiled meat, rifampin | Cimetidine, fluoroquinolones, omeprazole |

**Phase II Metabolism (Conjugation):**
- **Glucuronidation** — most common; morphine, acetaminophen, chloramphenicol, carbamazepine
- **Acetylation** — sulfonamides, INH, procainamide (slow acetylators → ↑ toxicity)
- **Sulfation** — acetaminophen, catecholamines
- **Methylation** — catecholamines (COMT inhibitors: entacapone)
- **Glutathione conjugation** — acetaminophen (depleted in overdose → hepatotoxicity)

**Excretion:**

- **Renal excretion** — most important route
  - GFR (glomerular filtration) — free drug only
  - Active tubular secretion — organic anion/cation transporters (probenecid, cimetidine block this)
  - Tubular reabsorption — passive reabsorption of unionized drugs (pH-dependent)
  - **pH-dependent excretion:** Acidify urine → excrete weak bases; Alkalinize urine → excrete weak acids (e.g., salicylate overdose → sodium bicarbonate to enhance excretion)

- **Biliary/fecal excretion** — some drugs (glucuronide conjugates → hydrolyzed by gut bacteria → reabsorbed = **enterohepatic circulation**)

- **Pulmonary excretion** — volatile anesthetics (exhaled)

- **Breast milk excretion** — basic, lipid-soluble drugs

---

### 🔴 Extended — Deep Study (3mo+)

**Pharmacokinetics — Mathematical Models:**

**One-Compartment Model (IV bolus):**
> Cp = C0 × e^(-Ke × t)
> Half-life (t½) = 0.693 / Ke
> At steady state (after 4-5 half-lives): 94-97% of steady state achieved

**Two-Compartment Model:**
- Central compartment (plasma, well-perfused organs)
- Peripheral compartment (muscle, fat, less-perfused tissues)
- **Context-sensitive half-life** — time for plasma concentration to decline by 50% after stopping infusion; clinically relevant for anesthesia

**Zero-order vs First-order Kinetics:**

| | Zero-order | First-order |
|---|---|---|
| **Rate** | Constant (independent of concentration) | Proportional to concentration |
| **Half-life** | Variable (↑ as [drug] ↓) | Constant |
| **Graph** | Linear (C vs t) | Exponential (log C vs t) |
| **Examples** | Phenytoin, ethanol, aspirin (high doses), warfarin | Most drugs at therapeutic doses |

**Michaelis-Menten Kinetics:**
> V = (Vmax × [S]) / (Km + [S])
- At low [S] (Km >> [S]): first-order kinetics
- At high [S] ([S] >> Km): zero-order kinetics (saturation)
- **Phenytoin** — follows MM kinetics; small dose increase → large plasma concentration increase → toxicity

**Drug-Drug Interactions via PK Mechanisms:**

1. **Enzyme induction** (↑ metabolism → ↓ drug effect):
   - Rifampin → ↓ warfarin, ↓ OCPs, ↓ cyclosporine, ↓ digoxin
   - Carbamazepine/Phenobarbital/Phenytoin → ↓ many drugs
   - St. John's wort → ↓ OCPs, ↓ protease inhibitors

2. **Enzyme inhibition** (↓ metabolism → ↑ drug effect):
   - Ketoconazole/erythromycin → ↑ terfenadine → **Torsades de Pointes** (cardiotoxicity)
   - Grapefruit juice (furanocoumarins) → inhibits CYP3A4 → ↑ felodipine, simvastatin, cyclosporine
   - Cimetidine → ↓ CYP enzymes → ↑ many drugs
   - Disulfiram-like reaction: Metronidazole, first-generation sulfonylureas + alcohol

**Protein Binding Displacement — Clinical Scenarios:**
- Sulfonamides + Warfarin → ↑ free warfarin → bleeding
- Sulfonamides + Methotrexate → ↑ free methotrexate → myelosuppression
- NSAIDs + Lithium → ↓ renal excretion → lithium toxicity
- Probenecid + Penicillin → ↓ tubular secretion of penicillin → ↑ penicillin levels (probenecid used therapeutically for this)

**Bioequivalence:**
- Two formulations bioequivalent if AUC and Cmax are within 80-125%
- Therapeutic equivalence — same clinical effect

**Therapeutic Drug Monitoring (TDM):**
| Drug | Therapeutic Range | Notes |
|---|---|---|
| Digoxin | 0.5-2 ng/mL | Narrow therapeutic index |
| Lithium | 0.6-1.2 mEq/L | Renal excretion |
| Phenobarbital | 10-40 μg/mL | Enzyme inducer |
| Phenytoin | 10-20 μg/mL | Nonlinear kinetics |
| Theophylline | 10-20 μg/mL | Narrow TI; 1A2 substrate |
| Vancomycin | 10-20 μg/mL (trough) | Nephrotoxicity |
| Aminoglycosides | Trough <1, Peak variable | Concentration-dependent killing |

**Drug Half-Lives — Key for NEET:**

| Drug | Half-life | Clinical Pearl |
|---|---|---|
| Warfarin | 36-42 hours | Long; needs weeks to reach steady state |
| Digoxin | 36-48 hours | Long; toxicities persist |
| Lithium | 18-24 hours | Renal excretion; narrow TI |
| Phenytoin | 12-36 hours | Dose-dependent (MM kinetics) |
| Aminoglycosides | 2-4 hours | Concentration-dependent killing |
| Cephalosporins | 1-8 hours | Most are short |

**Special Population Considerations:**

- **Elderly:** ↓ hepatic blood flow, ↓ GFR, ↓ albumin → altered PK
- **Hepatic impairment:** ↓ Phase I > Phase II; ↓ albumin; ↓ hepatic blood flow
- **Renal impairment:** ↓ excretion of renally cleared drugs (adjust dose)
- **Pregnancy:** ↑ Vd for some drugs; ↑ hepatic metabolism for others

**Key NEET-PG Clinical Pearls:**
- **Grapefruit juice** — inhibits intestinal CYP3A4 + P-gp → ↑ simvastatin, felodipine, cyclosporine levels
- **Smoking** — induces CYP1A2 → ↓ theophylline, ↓ clozapine levels
- **Charcoal-broiled meat** — induces CYP1A2 (same as smoking)
- **Cruciferous vegetables** (cabbage, broccoli) — induce CYP450 → ↓ drug levels
- **Alcohol** — induces CYP2E1; acute use inhibits CYP2E1 (disulfiram reaction with metronidazole)
- **Probenecid** — blocks tubular secretion of penicillin; used to ↑ penicillin levels
- **Cimetidine** — non-selective CYP inhibitor; causes ↑ levels of many drugs; use famotidine or ranitidine instead (less interaction)
- **pH会影响药物排泄：** Sodium bicarbonate → alkalinize urine → ↑ excretion of aspirin, phenobarbital (acidic drugs)
- **Acidification of urine** (NH4Cl) → ↑ excretion of weak bases (amphetamines, PCP)
- **Enterohepatic circulation** — drug enters bile as glucuronide → gut bacteria hydrolyze → free drug reabsorbed → prolonged effect (e.g., morphine, estrogens, OCPs)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
