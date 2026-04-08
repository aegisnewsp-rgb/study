---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-002
topicName: Pharmacokinetics — ADME
weight: 3
country: sa
generated: "2026-03-25T17:00:00"
---

# Pharmacokinetics — Absorption, Distribution, Metabolism, and Excretion (ADME)

Pharmacokinetics describes what the body does to a drug. Understanding ADME processes is critical for rational dosing, predicting drug interactions, and optimizing therapy. For the SAPC examination, you must be able to apply pharmacokinetic principles to clinical scenarios and interpret pharmacokinetic parameters.

---

## Fundamental Concepts

### Bioavailability (F)

Bioavailability is the fraction of an administered dose that reaches the systemic circulation unchanged, expressed as a fraction (f) or percentage (%).

- **Absolute bioavailability** compares the systemic exposure of the extravascular route to the intravenous route: F = AUCₒᵥ / AUCᵢᵥ
- **Relative bioavailability** compares two different formulations of the same drug

**Factors affecting bioavailability:**

| Factor | Effect |
|--------|--------|
| First-pass metabolism | Reduces oral bioavailability (e.g., propranolol, morphine) |
| Aqueous solubility | Poorly soluble drugs have incomplete absorption |
| Particle size | Smaller particles → larger surface area → faster absorption |
| Formulation | Enteric coating, sustained-release → altered absorption |
| Gastric pH | Acidic drugs absorbed in stomach; basic drugs in intestine |
| Transporters (P-gp, OATP) | Can limit or enhance absorption |

**Key reference values:**
- IV bolus: F = 100% (by definition)
- Oral solution: typically high F
- Tablet/capsule: variable, depends on formulation

### Half-Life (t½)

Half-life is the time required for the plasma concentration to decrease by 50%.

- **First-order elimination:** t½ = 0.693 × Vd / CL
- **Steady-state:** reached after approximately 4–5 half-lives
- **Clinical significance:** determines dosing interval and time to steady state

| Half-life | Steady-state time (approx.) | Clinical implication |
|-----------|---------------------------|---------------------|
| 4h | 16–20h | QID dosing possible |
| 12h | 48–60h | BID dosing acceptable |
| 24h | 4–5 days | Once daily dosing feasible |
| 48h | 8–10 days | Loading dose may be needed |

### Volume of Distribution (Vd)

Vd is a theoretical volume that relates the total amount of drug in the body to the plasma concentration: Vd = Dose / C₀

| Vd Range | Interpretation | Drug Examples |
|----------|--------------|---------------|
| <10 L (~body water) | Primarily plasma/water | Heparin, warfarin (highly protein bound) |
| 10–30 L | Blood and interstitial fluid | Many drugs distribute to total body water |
| >30 L | Tissue binding > plasma binding | Lithium, chloroquine, many lipophilic drugs |
| Very large | Extensive tissue sequestration | Ivermectin, tacrolimus |

**Clinical implication:** A large Vd means the drug is largely outside the plasma compartment — dialysis will not effectively remove it.

### Clearance (CL)

Clearance is the volume of plasma cleared of drug per unit time (L/h or mL/min).

- **Hepatic clearance:** CLₕ = Q × (Clᵤᵢ / (Q + Clᵤᵢ))
  where Q = hepatic blood flow, Clᵤᵢ = intrinsic clearance
- **Renal clearance:** CLᵣ = (U × V) / P
  where U = urine concentration, V = urine flow rate, P = plasma concentration

**Total clearance:** CL = CLₕ + CLᵣ (+ other routes)

### Loading Dose and Maintenance Dose

**Loading dose** = (Vd × Cp,target) / F
**Maintenance dose rate** = (CL × Cp,target) / F

A loading dose is used when the therapeutic concentration must be achieved quickly. It is typically needed for drugs with long half-lives.

**Example calculation:**
- Target concentration: 10 mg/L
- Vd: 50 L
- Bioavailability: 0.8
- Loading dose = (50 × 10) / 0.8 = 625 mg

---

## Absorption

### Routes of Administration

| Route | Bioavailability | Onset | Notes |
|-------|----------------|-------|-------|
| **Intravenous (IV)** | 100% (direct to bloodstream) | Immediate | Bypasses absorption; all drug available |
| **Intramuscular (IM)** | Variable (depends on formulation) | Rapid | Depot formulations; absorption via muscle capillaries |
| **Subcutaneous (SC)** | Variable; slightly slower than IM | Rapid | For proteins/peptides; good absorption |
| **Oral (PO)** | Variable; subject to first-pass | Slower | Most common; affected by gastric emptying, food |
| **Rectal (PR)** | Variable; ~50% avoids first-pass | Variable | Partially bypasses liver; useful if oral not possible |
| **Transdermal** | Low but sustained | Slow | Patches; fentanyl, nicotine, hormones |
| **Inhaled** | Variable | Rapid (for local) | For respiratory drugs; systemic via alveolar absorption |
| **Topical** | Low systemic absorption | Local only | Skin, eye; limited systemic toxicity |

### Mechanisms of Drug Absorption

1. **Passive diffusion** — most drugs; follows concentration gradient; no energy required. Depends on: lipophilicity, ionization state, surface area, concentration gradient.
2. **Carrier-mediated transport** — active or facilitated; for structurally specific compounds (e.g., levodopa via LAT1 transporter).
3. **Endocytosis/exocytosis** — for large molecules (e.g., insulin, enoxaparin).
4. **Paracellular route** — through tight junctions; limited; hydrophilic drugs only.

### Factors Affecting Oral Absorption

**Gastric emptying rate:** Faster emptying → faster absorption in small intestine. Prokinetic agents (metoclopramide) accelerate; anticholinergics delay.

**Intestinal transit time:** Longer small intestinal transit → more absorption for drugs with absorption windows (e.g., metformin, gabapentin).

**Food effects:**
| Type of drug | Food effect | Mechanism |
|-------------|-------------|-----------|
| Fat-soluble drugs | Increased absorption | Fat stimulates bile secretion |
| Drugs requiring acidity | Variable | Food buffers gastric pH |
| Drugs with absorption windows | Decreased if taken with food | Food delays gastric emptying |
| MAO inhibitors | Dietary tyramine interactions | — |
| Rifampicin | Decreased absorption | Induction of transporters |

**Drug interactions affecting absorption:**
- Antacids (raise gastric pH) → decreased absorption of weakly acidic drugs
- Chelation (tetracyclines + calcium, iron) → form insoluble complexes
- P-gp inhibitors (ketoconazole, erythromycin) → increased absorption of P-gp substrates

### SAPC Note on Absorption

For the SAPC examination, be particularly aware of drugs with significant first-pass metabolism (propranolol, morphine, lidocaine, nitrates, testosterone) — their oral bioavailability is low and variable, and dose adjustments are required when switching between routes.

---

## Distribution

### Protein Binding

Most drugs bind to plasma proteins, primarily albumin and α₁-acid glycoprotein (AAG):

- **Albumin:** binds acidic and neutral drugs (warfarin, benzodiazepines, NSAIDs)
- **α₁-acid glycoprotein:** binds basic drugs (propranolol, lignocaine, quinidine)
- **Only free (unbound) drug is pharmacologically active** — it distributes, is metabolized, and exerts effects

**Displacement interactions:**
When two drugs compete for the same binding site, the more tightly bound drug displaces the other, increasing the free fraction of the displaced drug.

| Drug | Primary binding protein |
|------|----------------------|
| Warfarin | Albumin |
| Phenytoin | Albumin |
| Quinolones | Albumin |
| Sulfonamides | Albumin |
| Quetiapine | α₁-acid glycoprotein |

**Clinical significance of displacement:**
- Warfarin + sulfonamides → increased free warfarin → bleeding risk
- Valproic acid + phenytoin → displacement → phenytoin toxicity

### Tissue Distribution

**Blood-brain barrier (BBB):**
- Tight junctions between endothelial cells
- Only lipophilic, low molecular weight drugs cross effectively
- Efflux transporters (P-gp, BCRP) limit CNS penetration
- **Examples of CNS-penetrating drugs:** morphine, diazepam, fluoxetine, chlorpromazine
- **Poorly penetrating:** heparin, gentamicin, most proteins/peptides

**Placental transfer:**
- Most drugs cross the placenta to some degree
- Lipophilic drugs cross most readily
- FDA Pregnancy Categories (historical): A (safest) → B → C → D → X (contraindicated)
- SAHPRA requires careful risk-benefit assessment

### Apparent Volume of Distribution — Extended Interpretation

| Drug | Vd (L/kg) | Interpretation |
|------|-----------|----------------|
| Warfarin | 0.1–0.2 | Mostly confined to plasma (highly protein bound) |
| Digoxin | 3–5 | Large Vd → tissue binding → monitor levels, avoid toxicity |
| Chloroquine | 100–300 | Extreme tissue sequestration |
| Lithium | 0.6–0.9 | Vd approximates total body water |

---

## Metabolism

### Phase I Reactions (Functionalization)

Phase I introduces or reveals a functional group through oxidation, reduction, or hydrolysis. Primarily mediated by the **cytochrome P450 (CYP) enzyme system**.

**CYP enzymes relevant to pharmacy:**

| Enzyme | Substrates | Inducers | Inhibitors |
|--------|-----------|---------|-----------|
| CYP3A4 | Most drugs (~50%); midazolam, simvastatin, clarithromycin, amiodarone | Rifampicin, phenytoin, carbamazepine | Ketoconazole, erythromycin, grapefruit juice |
| CYP2D6 | Beta-blockers, antidepressants, codeine (to morphine), tramadol | Few (dexamethasone modest) | Quinidine, fluoxetine, paroxetine |
| CYP2C19 | PPIs, clopidogrel (activation), diazepam, phenytoin | Rifampicin | Omeprazole, fluconazole, ticlopidine |
| CYP2C9 | S-warfarin, NSAIDs, phenytoin, sulphonylureas | Rifampicin | Fluconazole, metronidazole |
| CYP1A2 | Theophylline, clozapine, caffeine, olanzapine | Smoking, carbamazepine | Ciprofloxacin, fluvoxamine |

**Important pharmacogenetic considerations:**

- **CYP2D6 poor metabolizers:** cannot convert codeine to morphine → no analgesic effect
- **CYP2C19 poor metabolizers:** reduced activation of clopidogrel → increased cardiovascular events
- **CYP2C9 poor metabolizers:** warfarin sensitivity → lower doses required

### Phase II Reactions (Conjugation)

Phase II adds endogenous substances (glucuronic acid, sulphate, glutathione, acetate, amino acids) to make the drug more water-soluble and facilitate excretion.

| Reaction | Substrate example | Outcome |
|----------|------------------|---------|
| Glucuronidation | Paracetamol, morphine, diazepam | UDP-glucuronosyltransferases (UGT) |
| Sulphation | Paracetamol (alternative pathway), oestrogens | Sulfotransferases |
| Acetylation | Isoniazid, hydralazine, sulfonamides | N-acetyltransferases (NAT) |
| Glutathione conjugation | Paracetamol (toxic metabolite neutralization) | Glutathione S-transferases |

**First-pass metabolism:** After oral administration, drugs absorbed from the GI tract travel via the portal vein to the liver before reaching the systemic circulation. A drug with extensive first-pass metabolism will have low oral bioavailability (F << 1).

**SAHPRA and SAPC note:** Be aware that many traditional medicines used in South Africa can induce or inhibit CYP enzymes (e.g., St. John's wort, garlic, ginkgo, certain traditional herbal remedies), leading to drug interactions.

---

## Excretion

### Renal Excretion

Renal excretion involves three processes:

**1. Glomerular filtration (GFR ~120 mL/min):**
- Only free drug is filtered (protein-bound drug stays in plasma)
- Modified by renal function
- Creatinine clearance (CrCl) used to estimate GFR
- Cockcroft-Gault equation: CrCl = [(140 − age) × weight (kg)] / [72 × serum creatinine (μmol/L)] (×0.85 for females)

**2. Tubular secretion (active, carrier-mediated):**
- Occurs in proximal tubule
- Competes for transport carriers (organic anion transporter, organic cation transporter)
- Examples: penicillins, cephalosporins, diuretics, metformin
- **Drug interactions:** Probenecid inhibits secretion of penicillins and cefoxitin

**3. Tubular reabsorption (passive):**
- Occurs primarily in distal tubule
- Lipophilic drugs are reabsorbed (reducing excretion)
- Urine pH influences reabsorption of weakly acidic/weakly basic drugs
  - **Acidification** (NH₄Cl): increases excretion of weak bases
  - **Alkalinization** (NaHCO₃): increases excretion of weak acids (e.g., salicylate overdose)

### Biliary and Fecal Excretion

- Some drugs (especially those with molecular weight > 500 Da) are excreted in bile
- Enterohepatic circulation: drug is excreted in bile → intestinal bacteria deconjugate → reabsorption → back to liver
- **Examples:** rifampicin, ethinyloestradiol, chloramphenicol
- **Clinical consequence:** interruption of enterohepatic circulation (e.g., by antibiotics) can reduce drug exposure

### Other Routes of Excretion

| Route | Notes |
|-------|-------|
| Pulmonary | Volatile anesthetics, alcohol |
| Salivary | Drugs excreted into saliva; useful for monitoring (e.g., carbamazepine) |
| Breast milk | Depends on pKa, protein binding, lipophilicity; many drugs are contraindicated |
| Sweat | Certain drugs (antimicrobials, some illicit drugs) |

---

## Pharmacokinetic Compartmental Models

### One-Compartment Model

Assumes drug distributes instantaneously throughout the body. Concentration declines mono-exponentially after absorption and distribution cease.

- **Elimination:** C = C₀ × e^(−kₑt)
- **Half-life:** t½ = 0.693 / kₑ
- **Example drugs:** Aminoglycosides (gentamicin), lithium

### Two-Compartment Model

Distinguishes central compartment (plasma) and peripheral compartment (tissues). Useful for drugs that redistribute over time.

- **Alpha phase (distribution):** initial rapid decline
- **Beta phase (elimination):** slower terminal decline
- **Example drugs:** Thiopentone, digoxin, many antihypertensives

### Michaelis-Menten Kinetics (Non-linear)

At high concentrations, metabolic and excretory pathways become saturated → zero-order kinetics.

- **Equation:** dC/dt = −(Vₘₐₓ × C) / (Kₘ + C)
- **Clinical examples:** Phenytoin, methanol, ethanol, aspirin at high doses
- **Sign:** half-life increases as dose increases (opposite of first-order kinetics)
- **Important for:** phenytoin loading and maintenance dosing to avoid toxicity

---

## SAPC Examination Tips

1. **Half-life calculations** — Be able to calculate when steady state will be reached and how much of a loading dose is needed. Steady state is reached in ~4–5 half-lives regardless of dose or dosing interval.
2. **Bioavailability and first-pass** — Identify drugs with low oral bioavailability (propranolol ~25%, morphine ~35%, lidocaine oral ~35%) and understand why they cannot be given orally.
3. **Protein binding and interactions** — Know which drugs are highly protein-bound and can displace each other. The classic exam question pairs warfarin with a displacing drug.
4. **CYP450 interactions** — Be able to identify the major CYP enzymes, their substrates, inducers, and inhibitors. The rifampicin-ketoconazole pair is a classic exam example.
5. **Renal dosing** — Estimate renal function using Cockcroft-Gault. For drugs with narrow therapeutic indices (gentamicin, vancomycin, digoxin), adjusted dosing is essential.
6. **Enterohepatic circulation** — Understand how interruption (e.g., by cholestyramine, antibiotics) affects drug levels.

### Common Examination Trap

A common SAPC trap is to confuse half-life with time to steady state. Remember: the time to steady state depends ONLY on the half-life, not on the dose or dosing frequency. Doubling the dose does NOT make steady state arrive faster — it just raises the steady-state concentration. Similarly, a drug with a 48-hour half-life will take 8–10 days to reach steady state regardless of the dose given.