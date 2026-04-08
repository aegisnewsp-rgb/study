---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-006
topicName: Drug-Receptor Interactions and Pharmacodynamics
weight: 3
country: sa
generated: "2026-03-25T17:00:00"
---

# Drug-Receptor Interactions and Pharmacodynamics

Pharmacodynamics describes what a drug does to the body — its mechanism of action, the nature of its effects, and the relationship between drug concentration and response. Together with pharmacokinetics (what the body does to the drug, covered in Pharmacokinetics — ADME), pharmacodynamics forms the scientific foundation of rational therapeutics. For the SAPC examination, you must demonstrate a thorough understanding of receptor theory, the quantitative relationship between drug dose and effect, and the factors that determine drug selectivity and specificity.

This topic also links directly to pharmaceutical chemistry, as a drug's chemical structure determines its ability to interact with specific biological targets. Structure-Activity Relationships (SAR) explain why small modifications to a drug's structure can dramatically alter its potency, efficacy, and toxicity — a concept frequently examined by the SAPC in questions involving analog recognition and prodrug design.

---

## Drug Targets and Selectivity

Most drugs exert their effects by binding to specific molecular structures in the body. The chemical nature of this binding and the consequent biological response define the drug's pharmacological profile.

### Major Drug Target Categories

| Target Type | Description | Examples |
|-------------|-------------|---------|
| **Receptors** | Proteincaceous cellular structures that transduce signals | GPCRs, ion channels, nuclear receptors, kinases |
| **Enzymes** | Catalytic proteins that speed up biochemical reactions | ACE, HMG-CoA reductase, COX, MAO |
| **Ion channels** | Pores allowing regulated ion flow across membranes | Calcium channels, sodium channels, GABA-A |
| **Transport proteins** | Carriers that move substances across membranes | P-gp, SERT, DAT, OATP |
| **Structural proteins** | Proteins providing mechanical or structural function | Tubulin (anticancer agents), fibrin (thrombolytics) |
| **Nucleic acids** | DNA and RNA as targets | Alkylating agents, antimetabolites, antibiotics |

**SAPC note:** The majority of clinically useful drugs act on receptors (approximately 40–50% of drugs on the market), followed by enzymes and ion channels. Understanding the target type helps predict the drug's mechanism and potential adverse effects.

### Selectivity vs Specificity

**Selectivity** refers to the ability of a drug to produce its intended effect while minimizing unwanted effects. A highly selective drug acts on a single target type or pathway.

**Specificity** refers to the degree to which a drug interacts with only one particular receptor subtype.

- **Example of high selectivity:** Omeprazole inhibits H⁺/K⁺-ATPase (proton pump) specifically with minimal off-target effects
- **Example of low selectivity:** Non-selective NSAIDs inhibit COX-1 and COX-2, producing both therapeutic effects (anti-inflammatory) and adverse effects (GI mucosal damage via COX-1 inhibition)
- **Example of specificity:** Zolpidem is highly specific for the benzodiazepine binding site on GABA-A receptors (α₁ subtype) — this explains its relative lack of anxiolytic and muscle relaxant effects compared to non-selective benzodiazepines

**Why selectivity matters in South African pharmacy practice:**
Traditional medicines and herbal remedies commonly used in South Africa may contain compounds that lack selectivity, contributing to drug interactions. For example, St. John's wort induces multiple CYP enzymes and P-gp, reducing selectivity of co-administered drugs.

---

## Receptor Theory

### The Drug-Receptor Interaction

A drug must first bind to its receptor to produce an effect. This binding is governed by the same principles as any other molecular interaction — primarily non-covalent forces:

| Force Type | Strength | Example |
|-----------|----------|---------|
| **Hydrogen bonding** | Moderate | Drug-H bond with receptor amino acids |
| **Van der Waals forces** | Weak | Transient dipolar interactions; additive |
| **Electrostatic/ionic bonds** | Strong | Salt bridges at physiological pH |
| **Hydrophobic interactions** | Moderate | Driving force for drug partition into lipid membrane |
| **Covalent bonds** | Very strong (irreversible) | Aspirin acetylation of COX; alkylating agents |

**Affinity** — the tendency of a drug to bind to its receptor. Measured by the equilibrium dissociation constant (K_d): a lower K_d means higher affinity.

**Intrinsic activity / Efficacy (α)** — the ability of a bound drug to activate the receptor and produce a biological response once bound.

**Potency** — the amount of drug required to produce a given effect. Reflects both affinity and efficacy. Determined by the EC₅₀ (concentration producing 50% of maximum effect).

### Agonists, Antagonists, and Modulators

#### Full Agonists

A full agonist binds to and activates a receptor, producing the maximum possible response the tissue can achieve (Emax). It has both high affinity and high intrinsic activity.

- **Examples:** Morphine (μ-opioid agonist), Isoprenaline (β-adrenoceptor agonist), Diazepam (GABA-A positive allosteric modulator)
- **Key property:** Occupancy of all available receptors is not required to produce Emax — spare receptors (receptor reserve) allow maximal effect at lower drug concentrations

#### Partial Agonists

A partial agonist has high affinity but lower intrinsic activity compared to a full agonist. It cannot produce the full Emax even at saturating concentrations.

- **Clinical examples:** Buprenorphine (partial μ-opioid agonist — ceiling effect on respiratory depression, lower abuse potential), Aripiprazole (partial dopamine D₂ agonist — used as antipsychotic), Buspirone (partial 5-HT₁A agonist — anxiolytic without sedation)
- **Antagonist-like property:** Because it occupies receptors without producing full activation, a partial agonist can competitively block a full agonist — this is called "functional antagonism" or "partial agonism"
- **SAPC examination note:** Questions often present partial agonists in the context of ceiling effects — e.g., buprenorphine's ceiling effect on respiratory depression makes it safer than morphine in overdose, but also limits its analgesic efficacy

#### Antagonists

Antagonists bind to receptors without activating them, thereby blocking the binding and effects of agonists.

| Type | Mechanism | Example | Clinical Notes |
|------|-----------|---------|----------------|
| **Competitive (surmountable)** | Reversible binding at same site as agonist; effect can be overcome with higher agonist concentration | Naloxone (opioid antagonist), Propranolol (β-blocker), Atropine (muscarinic antagonist) | Shift dose-response curve to the right; parallel |
| **Non-competitive (insurmountable)** | Either reversible at a different site (allosteric) or irreversible (covalent binding) | Phenoxybenzamine (α-blocker, covalent), Ketanserin (5-HT₂, allosteric) | May reduce Emax; not overcome by increasing agonist |
| **Physiological antagonism** | Drug produces opposite physiological effect through different receptor pathway | Histamine (H₁) vs β₂-agonist bronchodilation | Not true antagonism at same receptor |
| **Chemical antagonism** | Direct chemical interaction (e.g., chelation) | Dimercaprol (BAL) chelates lead, mercury | Outside receptor context |

**Competitive vs non-competitive — key distinction for SAPC:**
On a log dose-response curve, a competitive antagonist shifts the curve to the right (parallel) without reducing Emax. A non-competitive antagonist shifts down (reduces Emax) and may also shift right.

**pA₂ value:** The negative logarithm of the molar concentration of antagonist that makes it necessary to double the agonist concentration to achieve the original response. A higher pA₂ indicates a more potent antagonist. Used to characterise competitive antagonists.

#### Allosteric Modulators

Allosteric modulators bind to a site distinct from the orthosteric (agonist) site and modulate receptor activity.

- **Positive allosteric modulators (PAMs):** Enhance agonist effects without directly activating the receptor. Example: Benzodiazepines on GABA-A receptors (enhance GABA binding)
- **Negative allosteric modulators (NAMs):** Reduce agonist effects. Example: Maraviroc (CCR5 antagonist — blocks HIV entry by binding allosterically to CCR5)

**Advantage of allosteric modulators:** Often produce effect only when the endogenous agonist is present (substrate-dependent), resulting in greater physiological selectivity and fewer adverse effects.

---

## Dose-Response Relationships

### The Graded Dose-Response Curve

When response is plotted against drug concentration on a logarithmic scale, a sigmoidal (S-shaped) curve is obtained. This curve reveals three key parameters:

```
Log [Drug]
    │
100%├───────────────────────────────── ─────── Emax (maximum effect)
    │                           ⁿⁿⁿⁿⁿ
    │                      ⁿⁿ
    │                 ⁿⁿ
    │            ⁿⁿ
    │       ⁿⁿ
    │  ⁿⁿ
  0%├───┼───┼───┼───┼───┼───┼───
    EC₅₀      1       10      100
```

**Key parameters derived from the curve:**
- **EC₅₀** — concentration producing 50% of maximum effect; reflects drug potency
- **Slope (Hill coefficient, n_H)** — steep slope = small change in concentration produces large change in effect; reflects cooperativity of binding
- **Emax** — maximum achievable effect; reflects intrinsic efficacy (not the same as potency)

**Therapeutic index (TI)** — the ratio of the dose that produces toxicity in 50% of subjects (TD₅₀) to the dose that produces the therapeutic effect in 50% of subjects (ED₅₀):
TI = TD₅₀ / ED₅₀

- **Narrow TI drugs** require careful plasma concentration monitoring: phenytoin, digoxin, lithium, warfarin, aminoglycosides
- **Wide TI drugs** have a greater margin of safety: paracetamol (within therapeutic dose range)
- In South African pharmacy practice, narrow TI drugs are a particular concern in dispensing and counselling

**ED₉₅, TD₅₀, LD₅₀ — examination definitions:**
| Parameter | Definition |
|-----------|-----------|
| ED₅₀ | Dose producing therapeutic effect in 50% of population |
| TD₅₀ | Dose producing toxicity in 50% of population |
| LD₅₀ | Dose producing death in 50% of population (animal studies) |
| TI | TD₅₀ / ED₅₀ |
| Safety margin | (TD₅₀ − ED₅₀) / ED₉₉ × 100 |

### The Quantal Dose-Response Curve

Unlike the graded curve (individual variation), the quantal curve plots the proportion of a population that responds at each dose level. This reveals:

- **Minimum effective concentration (MEC)** — threshold for effect in an individual
- **Individual variation** — shown by the shape/slope of the quantal curve
- **Therapeutic window** — range of doses producing therapeutic effect without toxicity

**Clinical application:** The therapeutic window concept is used in South African pharmacy practice when switching between brands — even generically equivalent products should be considered for narrow TI drugs.

---

## Structure-Activity Relationships (SAR)

### Fundamental Principle

Structure-Activity Relationships describe how the chemical structure of a drug determines its biological activity. Small structural modifications can:
- Change affinity for the target receptor
- Alter pharmacokinetic properties (absorption, distribution, metabolism, excretion)
- Change the type of activity (agonist → antagonist)
- Introduce toxicity or improve selectivity

### Key SAR Concepts for SAPC

#### 1. Steric Effects

The three-dimensional shape and size of a molecule affect how it fits into a receptor binding site.

- **Example — Beta-blockers (SAE -olol):** The aryloxypropanolamine moiety (para-substituted phenyl ring + O + CH₂-CH(OH)-N) is essential for β-receptor activity. Replacing the para-substituent with a bulkier group changes potency and selectivity.
- **Propranolol** (naphthyl ring) — non-selective β-blocker
- **Atenolol** (para-amide substituent) — β₁-selective
- **Carvedilol** (carbazole moiety) — non-selective with α-blocking activity

#### 2. Electronic Effects

The distribution of electrons in a molecule (influenced by substituents) affects drug-receptor binding.

- **pKa and ionization:** Most drugs are weak acids or bases; their ionization state at physiological pH determines membrane permeability and receptor interaction
- **Strong electron-withdrawing groups** (e.g., NO₂, SO₂NH₂ in sulfonamides) — important for antimicrobial activity
- **Ester hydrolysis:** Prodrugs like enalapril (ACE inhibitor prodrug) are converted to active enalaprilat by esterases; replacing ester with acid (enalaprilat) creates a drug requiring IV administration

#### 3. Lipophilicity Effects

The partition coefficient (log P) between lipid and aqueous phases determines:
- Membrane permeability and oral absorption
- Volume of distribution
- CNS penetration (requires optimal lipophilicity)
- Metabolic susceptibility

| Property | Effect |
|----------|--------|
| Too hydrophilic | Poor membrane penetration; limited oral absorption |
| Too lipophilic | Poor aqueous solubility; high tissue binding; rapid metabolism |
| Optimal log P | Balanced absorption and distribution |

**Example — Morphine vs codeine:**
- Both are phenanthrene opioids
- Morphine (two free hydroxyl groups) is more hydrophilic
- Codeine (6-O-methylmorphine) is more lipophilic → greater oral bioavailability (~90% vs ~35%) and less water solubility
- Methadone (highly lipophilic synthetic opioid) has large Vd and long half-life

#### 4. Key Pharmacological Stems and SAR (SAPC High-Yield)

| Stem | Drug Class | SAR Notes |
|------|-----------|-----------|
| **-olol** | Beta-blockers | Aryloxypropanolamine skeleton essential; para-substitution on phenyl ring determines β₁ vs β₂ selectivity |
| **-pril** | ACE inhibitors | Sulphydryl (captopril), carboxyl (enalapril), or phosphoryl (fosinopril) group at active site; proline at C-terminus |
| **-sartan** | ARBs | Biphenyl tetrazole group critical for AT₁ receptor binding; non-peptide; losartan is the prototype |
| **-statin** | HMG-CoA reductase inhibitors | Polyketide-derived; mevastatin (natural), simvastatin (semi-synthetic), pravastatin (hydrophilic, derived) |
| **-coxib** | COX-2 selective inhibitors | Celecoxib, rofecoxib — sulfonamide/ methyl sulfone at position 3; diarylheterocycle core; selectivity reduces GI toxicity |
| **-mazole** | Azole antifungals | Imidazole (ketoconazole) vs triazole (fluconazole); azole ring coordinates Fe in cytochrome P450 14α-demethylase |
| **-caine** | Local anesthetics | Esters (procaine, lignocaine) vs amides (bupivacaine); aromatic ring + intermediate chain + tertiary amine; pKa ~8-9 |
| **-azepam / -zolam** | Benzodiazepines | 1,4-diazepine ring fused to benzene; Cl substituent on 7-position enhances CNS activity; triazolam has heterocyclic ring |

### Prodrug Design

A prodrug is a chemically modified drug that is inactive in vitro but converted to the active drug in vivo by enzymatic action.

**Purposes of prodrug design:**
1. **Improve oral bioavailability** — e.g., valacyclovir (L-valyl ester of acyclovir) is better absorbed than acyclovir itself
2. **Reduce GI irritation** — e.g., sulfasalazine (PAS + sulfapyridine) targets colon for IBD treatment
3. **Target specific tissue** — e.g., fluorouracil (5-FU) prodrugs for cancer chemotherapy
4. **Mask unpleasant taste** — e.g., erythromycin estolate (taste-masked)
5. **Extend duration of action** — e.g., benzathine penicillin G (depot IM formulation)

**SAPC examination note:** Prodrug activation is often a Phase I (oxidation) or Phase II (conjugation) reaction. Questions may ask you to identify which metabolic step activates a prodrug. Classic examples: codeine (CYP2D6 → morphine), enalapril (hydrolysis → enalaprilat), cyclophosphamide (CYP activation → phosphoramide mustard).

---

## Pharmacodynamic Drug Interactions

Understanding drug interactions is essential for safe dispensing. Pharmacodynamic interactions occur when one drug modifies the effect of another without altering its pharmacokinetics.

### Types of Pharmacodynamic Interactions

#### Additive Effect
The combined effect equals the sum of individual effects. No synergy or antagonism.

**Example:** Aspirin + paracetamol — both analgesic-antipyretics with additive effects through different mechanisms (COX inhibition + possibly central mechanisms)

#### Synergism (Potentiation)
The combined effect is greater than the sum of individual effects.

**Examples:**
- **Trimethoprim + sulfamethoxazole (co-trimoxazole):** Sequential blockade of folate synthesis pathway in bacteria — each drug inhibits a different step; together they are bactericidal (each alone is bacteriostatic)
- **Levodopa + carbidopa:** Carbidopa prevents peripheral conversion of levodopa to dopamine, allowing more levodopa to reach the CNS (pharmacokinetic synergy in practice, but pharmacodynamic synergy in terms of therapeutic effect)
- **ACE inhibitor + potassium-sparing diuretic:** Enhanced hyperkalaemia risk

#### Antagonism
One drug reduces the effect of another.

| Type | Mechanism | Example |
|------|-----------|---------|
| **Competitive antagonism** | Reversible binding at same receptor site | Naloxone + morphine; Flumazenil + benzodiazepines |
| **Physiological antagonism** | Opposite effects on same physiological system | β₂-agonist (bronchodilation) vs β-blocker (bronchospasm risk) |
| **Chemical antagonism** | Direct chemical interaction | Protamine + heparin (forms stable complex) |
| **Functional antagonism** | Same endpoint, different pathways | Diphenhydramine (H₁) + bronchodilator (β₂) both reduce allergic bronchospasm |

### Important Pharmacodynamic Interactions in South African Practice

**NSAIDs + Antihypertensives:**
- NSAIDs inhibit renal prostaglandins → sodium and water retention
- Reduces the effectiveness of ACE inhibitors, ARBs, and diuretics
- Blood pressure may increase by 3–10 mmHg
- Particularly important in SA where hypertension is highly prevalent

**Warfarin + NSAIDs:**
- Both increase bleeding risk through different mechanisms
- NSAIDs inhibit platelet function (COX-1) and may cause GI erosion
- Warfarin reduces clotting factors
- Combined effect significantly elevates risk of serious bleeding — a common and dangerous interaction in SA pharmacy practice

**Opioid analgesics + Benzodiazepines/Z-drugs:**
- Combined CNS depressant effects → profound sedation, respiratory depression
- SA Medicines Control Council (now SAHPRA) has issued warnings about combined prescribing
- Particularly relevant in pain management and surgical aftercare

**Fluoroquinolones + NSAIDs:**
- Both can lower seizure threshold
- Combined use increases risk of seizures — especially relevant in patients with CNS disorders

---

## Therapeutic Drug Monitoring (TDM) and Pharmacodynamic Monitoring

### When TDM is Clinically Indicated

Not all drugs require plasma concentration monitoring. TDM is indicated when:

1. **Narrow therapeutic index** — small changes in concentration produce large changes in effect
2. **Highly variable pharmacokinetics** — first-pass metabolism, genetic polymorphisms
3. **Poor correlation between dose and effect** — individual clearance varies significantly
4. **Target is reached slowly** — accumulate to steady state over time
5. **Non-linear pharmacokinetics** — small dose changes → large concentration changes

| Drug | Therapeutic Range | Monitoring Rationale |
|------|------------------|---------------------|
| **Digoxin** | 0.5–2.0 ng/mL | Narrow TI; heart failure patients; toxicity risk |
| **Phenytoin** | 10–20 mg/L (total), 1–2 mg/L (free) | Non-linear kinetics (Michaelis-Menten); protein binding changes |
| **Gentamicin** | Peak: 5–10 mg/L; Trough: <2 mg/L | Narrow TI; nephrotoxicity and ototoxicity |
| **Vancomycin** | Trough: 10–15 mg/L (or 15–20 for serious infections) | Narrow TI |
| **Lithium** | 0.6–1.2 mmol/L | Narrow TI; renal excretion; toxicity closely related to levels |
| **Warfarin** | INR: 2.0–3.5 (target varies by indication) | Not a true plasma concentration, but monitored similarly |
| **Carbamazepine** | 4–12 mg/L | Auto-induction of metabolism; active metabolite (CBZ-10,11-epoxide) |
| **Theophylline** | 10–20 mg/L | Narrow TI; large inter-individual variation |

**SAHPRA and SAPC note:** In South Africa, the regulatory environment requires that pharmacists counselling patients on narrow TI drugs must check therapeutic ranges. Be familiar with the SAHPRA guidelines on TDM and the role of the pharmacist in interpreting results.

### Pharmacodynamic Monitoring Beyond TDM

Not all drug effects can be measured by plasma concentrations. Clinical monitoring parameters are equally important:

| Drug Class | Monitoring Parameter |
|-----------|---------------------|
| ACE inhibitors | Serum potassium, serum creatinine, blood pressure |
| Warfarin | INR, signs of bleeding |
| Amiodarone | TFT (thyroid), LFTs, pulmonary function |
| Methotrexate | FBC, renal function, hepatic enzymes |
| Lithium | Serum lithium, renal function, thyroid function |
| Digoxin | ECG, serum potassium (hypokalaemia → digoxin toxicity) |

---

## Adverse Drug Reactions (ADRs) and Pharmacovigilance

### Classification of ADRs

#### Type A (Augmented) Reactions — Predictable, Dose-Dependent

These are extensions of the pharmacological effect. They are common, predictable, and often avoidable with dose adjustment.

**Characteristics:**
- Related to the primary pharmacological effect of the drug
- Dose-dependent and reversible
- Often affect the same organ systems as the therapeutic effect
- Examples: bradycardia with β-blockers; constipation with opioids; hypokalaemia with thiazides

**Management:** Usually dose reduction or discontinuation; often preventable with appropriate prescribing

#### Type B (Bizarre) Reactions — Unpredictable, Not Dose-Dependent

These are not related to the primary pharmacological effect and occur in susceptible individuals only.

**Characteristics:**
- Not related to dose; occur even at therapeutic doses
- Immunological (allergic/hypersensitivity) or genetic (pharmacogenetic)
- Examples: anaphylaxis with penicillin; sulphonamide hypersensitivity; G6PD deficiency-induced haemolysis with primaquine; CYP2D6 poor metabolizer → codeine not converted to morphine
- Can be severe and life-threatening

#### Type C (Chronic) Reactions

Associated with long-term use.

**Examples:** Tardive dyskinesia with long-term dopamine antagonist use; osteoporosis with chronic corticosteroid use; peripheral neuropathy with prolonged isoniazid use

#### Type D (Delayed) Reactions

Manifest long after drug exposure.

**Examples:** Vaginal adenocarcinoma in daughters of women who took diethylstilboestrol during pregnancy; teratogenic effects (thalidomide → phocomelia); drug-induced cancers (immunosuppressants → lymphomas)

#### Type E (End-of-use) Reactions

Occur after abrupt discontinuation.

**Examples:** Rebound hypertension after sudden clonidine withdrawal; adrenal insufficiency after abrupt corticosteroid withdrawal; benzodiazepine withdrawal seizures

#### Type F (Failure of Therapy)

Therapeutic failure due to pharmacokinetic interactions or other factors.

**Examples:** Failure of oral contraceptives with CYP enzyme-inducing drugs; failure of warfarin with vitamin K-containing foods (inconsistent); resistance development in antimicrobials

### Pharmacovigilance in South Africa

**SAHPRA** (South African Health Products Regulatory Authority) is the regulatory body responsible for pharmacovigilance in South Africa. The Medicines and Related Substances Act (Act 101 of 1965) provides the legal framework.

**Key obligations for pharmacists:**
- All suspected adverse drug reactions should be reported to SAHPRA
- Reporting is particularly important for:
  - New drugs (on the market less than 5 years)
  - Products used in children and pregnant women
  - Vaccines and biological products
  - Generically substituted products
  - Traditional medicines that may have unknown ADR profiles
- Yellow Card system: In South Africa, pharmacovigilance reporting forms are available through SAHPRA's Medikament database

**Medicines and Related Substances Act (Act 101 of 1965) — relevant provisions:**
- Section 21 — requires SAHPRA approval for clinical trials
- The Act mandates reporting of serious ADRs by healthcare professionals
- Generic substitution provisions (Regulation 10) require pharmacists to notify prescribers of generic substitution

---

## Individual Variation in Drug Response

### Pharmacogenetics

Genetic polymorphisms in drug-metabolising enzymes, transporters, and receptors contribute to individual variation in drug response.

| Enzyme/Target | Polymorphism | Clinical Consequence |
|--------------|--------------|---------------------|
| **CYP2D6** | Poor, intermediate, extensive, ultra-rapid metabolisers | Codeine: no effect in PMs; toxicity in UMTs (→ morphine); tramadol, metoprolol |
| **CYP2C9** | Reduced function alleles | Warfarin: increased bleeding risk; requires lower doses |
| **CYP2C19** | Poor metabolisers | Clopidogrel: reduced activation → increased CV events; omeprazole: increased exposure |
| **CYP3A5** | Expressers vs non-expressers | Tacrolimus: higher clearance in expressers → higher dose requirements |
| **G6PD** | Deficiency | Primaquine, dapsone, sulfonamides → haemolytic anaemia |
| **NAT2** | Slow vs rapid acetylators | Isoniazid: peripheral neuropathy (slow acetylators need pyridoxine); hydralazine-induced lupus |
| **VKORC1** | Polymorphism | Warfarin sensitivity; different maintenance doses for different genotypes |
| **OPRM1** (μ-opioid receptor) | A118G polymorphism | Reduced response to opioid analgesics in G allele carriers |

**SAPC examination note:** Pharmacogenetics questions often test your knowledge of clinically actionable polymorphisms. The CYP2D6-codeine relationship is the most commonly examined in SAPC contexts — understand why some patients get no analgesic effect from codeine and others may experience toxicity.

### Factors Affecting Drug Response in Specific Populations

**Elderly patients (South Africa):**
- Altered pharmacokinetics (reduced renal/hepatic function, reduced albumin → altered protein binding)
- Altered pharmacodynamics (increased CNS sensitivity to benzodiazepines, increased sensitivity to anticholinergic effects)
- Polypharmacy — increased risk of drug interactions
- Changed body composition (reduced lean body mass, increased fat) → altered Vd for lipophilic drugs
- SAHPRA guidance on prescribing in the elderly: start low, go slow

**Paediatric patients:**
- Ontogeny of drug-metabolising enzymes (CYP enzymes mature at different rates)
- Different Vd values (higher total body water → higher Vd for water-soluble drugs in infants)
- Absorption differences (gastric pH, immature gut flora)
- Most drugs in South Africa are not formally studied in children — off-label use is common; SAPC expects you to recognise this and exercise appropriate caution

**Renal impairment:**
- Reduced elimination of renally cleared drugs (gentamicin, digoxin, vancomycin, metformin)
- Dose adjustment is required for drugs with narrow TI
- Cockcroft-Gault equation used to estimate CrCl (see Pharmacokinetics — ADME)

**Hepatic impairment:**
- Reduced CYP enzyme activity
- Reduced protein synthesis → reduced albumin → increased free fraction of protein-bound drugs
- Reduced first-pass metabolism (may increase oral bioavailability of some drugs)
- Reduced hepatic blood flow → reduced clearance of high extraction ratio drugs

---

## SAPC Examination Tips

1. **Drug-receptor binding** — Be clear on the difference between affinity, efficacy, potency, and the relationship to dose-response curves. Know how competitive and non-competitive antagonists differ graphically.
2. **Agonist-antagonist distinctions** — You must be able to describe whether a drug is a full agonist, partial agonist, or antagonist and explain the clinical significance. Buprenorphine is the most commonly examined partial agonist.
3. **Therapeutic index** — Know how to calculate TI and interpret it. Narrow TI drugs require monitoring; understand specific examples (digoxin, phenytoin, lithium, aminoglycosides).
4. **SAR and stems** — Recognising drug stems (-olol, -pril, -statin, -coxib, etc.) can rapidly identify drug class, which helps with predicting mechanism, interactions, and adverse effects.
5. **Pharmacodynamic interactions** — Be able to predict whether two drugs will interact synergistically, additively, or antagonistically. The warfarin-NSAID interaction and the NSAID-antihypertensive interaction are SAPC favourites.
6. **Pharmacogenetics** — Know the key pharmacogenetic polymorphisms: CYP2D6 (codeine), CYP2C9 (warfarin), CYP2C19 (clopidogrel), G6PD (primaquine). Understand how these affect prescribing.
7. **ADRs** — Be able to classify ADRs as Type A through F and explain the underlying mechanism. Type B (hypersensitivity) vs Type A (augmented pharmacology) is a frequent distinction required.
8. **SAHPRA obligations** — Understand the pharmacist's role in pharmacovigilance and know that adverse drug reactions must be reported. This is both an exam topic and a professional obligation.

### Common Examination Traps

**Trap 1: Confusing potency with efficacy.** A more potent drug (lower EC₅₀) is not necessarily a more efficacious drug. Furosemide is more potent than hydrochlorothiazide as a diuretic, but both produce similar maximum diuresis — furosemide just works at a lower dose. Do not equate low dose with high efficacy.

**Trap 2: Misunderstanding partial agonists.** Students often think partial agonists are simply "weaker" agonists. They are — but they can also act as antagonists by blocking the effect of full agonists. Remember: aripiprazole is a partial D₂ agonist used to treat schizophrenia precisely because it provides some dopamine blockade while allowing partial activation.

**Trap 3: Equating therapeutic index with safety.** A drug with a wide TI is not necessarily "safe" — it still has adverse effects. A drug with a narrow TI is not necessarily dangerous — it simply requires careful dose individualisation and monitoring. Always consider the clinical context.

**Trap 4: Forgetting prodrug activation routes.** Codeine is NOT active per se — it requires CYP2D6 conversion to morphine. This is a pharmacogenetic issue with real clinical consequences. Similarly, clopidogrel requires CYP2C19 activation — PPIs that inhibit CYP2C19 can reduce its efficacy.

**Trap 5: Confusing pharmacodynamic with pharmacokinetic interactions.** An interaction can be both. For example, quinidine (CYP2D6 inhibitor) reduces conversion of codeine to morphine (pharmacokinetic), but quinidine also has additive pharmacodynamic effects on the heart when combined with other QT-prolonging drugs. Always consider both dimensions.
