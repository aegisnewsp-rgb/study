---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-007
topicName: Pharmacokinetics — Elimination
weight: 3
country: sa
generated: "2026-04-09T20:00:00"
---

# Pharmacokinetics — Elimination

Elimination is the process by which drugs are removed from the body. Together with absorption, distribution, and metabolism (collectively studied under the ADME framework), elimination determines the drug concentration-time profile that governs both therapeutic efficacy and toxicity. For the SAPC examination, a thorough understanding of elimination pharmacokinetics is essential: it underpins the ability to calculate doses, adjust dosing intervals, individualise therapy in special populations, and avoid toxicity — all core competencies for safe and effective pharmacy practice in South Africa.

This topic connects directly to the South African regulatory and clinical environment. The South African Health Products Regulatory Authority (SAHPRA) requires pharmacists to understand elimination pharmacokinetics when evaluating dose adjustments for patients with renal or hepatic impairment, when counselling patients on dosing of antibiotics such as aminoglycosides and vancomycin, and when assessing drug interactions involving clearance pathways. The Medicines and Related Substances Act (Act 101 of 1965) and its regulations govern the information that must accompany registered medicines, including elimination half-life and clearance data that inform dosing recommendations.

---

## Fundamental Concepts in Drug Elimination

Drug elimination encompasses all processes that irreversibly remove drug from the systemic circulation, whether through renal excretion, hepatic metabolism, biliary excretion, pulmonary elimination, or other pathways. It is important to distinguish elimination from clearance, half-life, and elimination rate — terms that are related but distinct, and that frequently appear in SAPC examination questions.

### Definitions and Core Relationships

**Elimination rate (dC/dt)** is the rate at which drug concentration declines per unit time, typically measured in mass units per volume per time (e.g., mg/L/hour). For first-order elimination kinetics, which describe the majority of drugs at therapeutic concentrations, the elimination rate is proportional to the drug concentration:

dC/dt = −k_e · C

where k_e is the first-order elimination rate constant (per hour) and C is the drug concentration (mg/L).

**Clearance (CL)** is the theoretical volume of plasma from which drug is completely removed per unit time (mL/min or L/hour). It is the fundamental measure of the body's capacity to eliminate drug, independent of concentration (for first-order kinetics). Total body clearance is the sum of all organ clearances:

CL_total = CL_renal + CL_hepatic + CL_other

Clearance is related to the elimination rate constant and volume of distribution by:

CL = k_e · V_d

Rearranging gives k_e = CL / V_d, which shows that the rate at which drug disappears from plasma depends on both how efficiently the body clears the drug (CL) and how widely it distributes (V_d).

**Half-life (t½)** is the time required for the plasma drug concentration to decrease by exactly 50%. It is determined by both clearance and volume of distribution:

t½ = (0.693 · V_d) / CL

This relationship is critically important: half-life is not a direct measure of clearance alone — it is the ratio of volume of distribution to clearance. A drug with a long half-life may have a large volume of distribution, a low clearance, or both. This distinction is essential when interpreting half-life data clinically.

**Steady-state concentration (Css)** is reached when the rate of drug administration equals the rate of drug elimination. At steady state, accumulation ceases and plasma concentrations remain constant (within the therapeutic window for continuously infused drugs). The time to reach steady state depends only on the half-life:

Time to steady state ≈ 4–5 × t½ (independent of dose or dosing interval)

After 1 half-life: 50% of steady state reached
After 2 half-lives: 75% of steady state reached
After 3 half-lives: 87.5% of steady state reached
After 4 half-lives: 93.75% of steady state reached
After 5 half-lives: 96.9% of steady state reached (essentially steady state)

For drugs with long half-lives (e.g., amiodarone with t½ of 26–110 days), this has major clinical implications for loading dose strategies.

**Loading dose** is used when rapid attainment of therapeutic concentrations is required. It is calculated based on the desired peak concentration and the volume of distribution:

Loading dose = (C_target · V_d) / F

where F is the bioavailability (1 for IV administration).

**Maintenance dose rate** is determined by the target steady-state concentration and clearance:

Maintenance dose rate = (C_target · CL) / F

**Accumulation factor (R)** describes how much a drug accumulates at steady state compared to a single dose, and is a function of the dosing interval (τ) relative to the half-life:

R = 1 / (1 − e^(−k_e · τ)) = 1 / (1 − e^(−0.693 · τ / t½))

**Exam tip:** For a drug dosed once daily where the dosing interval equals the half-life (τ = t½), the accumulation factor is approximately 2.0 — meaning steady-state concentrations will be approximately twice those achieved after a single dose.

| Parameter | Symbol | Unit | Definition |
|-----------|--------|------|------------|
| Elimination rate constant | k_e | h⁻¹ | Fraction of drug eliminated per unit time |
| Half-life | t½ | h | Time for concentration to fall by 50% |
| Volume of distribution | V_d | L or L/kg | Theoretical volume in which drug distributes |
| Clearance | CL | mL/min or L/h | Volume of plasma cleared per unit time |
| Bioavailability | F | fraction | Fraction of dose reaching systemic circulation |
| Elimination rate | dC/dt | mg/L/h | Rate of concentration decrease |

---

## Clearance: The Central Concept

Clearance is the single most important measure of elimination capacity. It represents the volume of blood or plasma completely cleared of drug per unit time. Unlike the elimination rate, clearance is concentration-independent under first-order kinetics — meaning the body clears a constant fraction of drug per unit time regardless of concentration (within therapeutic ranges). This linearity is clinically useful: doubling the dose approximately doubles the steady-state concentration.

### Hepatic Clearance

Hepatic clearance (CL_h) describes the removal of drug by the liver. It depends on three principal factors:

1. **Hepatic blood flow (Q_h)** — the rate at which blood is delivered to the liver
2. **Intrinsic clearance (CL_int)** — the inherent capacity of hepatic enzymes to metabolise the drug in the absence of blood flow limitations
3. **Fraction unbound in blood (f_u)** — only unbound drug can be metabolised by hepatic enzymes

These factors are related by the well-stirred model of hepatic clearance:

CL_h = Q_h · (f_u · CL_int) / (Q_h + f_u · CL_int)

This equation reveals two important extremes:

**Low extraction ratio drugs (f_u · CL_int << Q_h):** Hepatic clearance is primarily limited by enzyme activity (intrinsic clearance), not blood flow. Changes in liver blood flow have little effect on clearance. Changes in protein binding (f_u) significantly affect clearance. Examples: phenytoin, warfarin, diazepam, theophylline.

**High extraction ratio drugs (f_u · CL_int >> Q_h):** Hepatic clearance is primarily limited by liver blood flow, not enzyme activity. Changes in blood flow directly change clearance. Changes in protein binding have minimal effect (because flow is the limiting factor). Examples: verapamil, propranolol, morphine, lignocaine.

**SAPC examination note:** When confronted with a hepatic clearance question, ask: is this a high or low extraction drug? This determines whether changes in hepatic blood flow or enzyme activity are more clinically significant. SAHPRA-approved datasheets for drugs metabolised hepatically often specify whether the drug has high or low hepatic extraction — this informs interactions with enzyme inducers (rifampicin, carbamazepine) or inhibitors (erythromycin, ketoconazole, grapefruit juice).

**South African clinical context:** Rifampicin is one of the most important hepatic enzyme inducers encountered in South African practice. It is used in the treatment of tuberculosis — a condition with high prevalence in South Africa. Rifampicin potently induces CYP3A4 and CYP2C9, dramatically reducing the plasma concentrations of many drugs including warfarin, hormonal contraceptives, antiepileptics, and antiretroviral agents. Understanding hepatic clearance principles is essential for managing these interactions safely.

**South African drug examples metabolised hepatically:**
- **CYP3A4 substrates:** Clarithromycin, midazolam, simvastatin, cyclosporine, alprazolam
- **CYP2C9 substrates:** Warfarin (S-warfarin primarily CYP2C9), losartan, fluvastatin
- **CYP2D6 substrates:** Metoprolol, carvedilol, codeine (CYP2D6 converts codeine to morphine)
- **CYP1A2 substrates:** Theophylline, caffeine, tacrine

### Renal Clearance

Renal clearance (CL_renal) is the volume of plasma completely cleared of drug by the kidney per unit time. It describes the net effect of three simultaneous processes: glomerular filtration, tubular secretion, and tubular reabsorption. The theoretical renal clearance can be expressed as:

CL_renal = (GFR · f_u) + (T_s · f_u) − (T_r)

where GFR is glomerular filtration rate, f_u is the fraction unbound, T_s is the tubular secretion rate, and T_r is the tubular reabsorption rate.

For drugs that are freely filtered, not secreted, and not reabsorbed, renal clearance approximates GFR. This principle underlies the use of endogenous substances like creatinine as markers of renal function.

**Key drugs requiring renal dose adjustment in South African practice:**
- **Aminoglycosides (gentamicin, amikacin):** Almost entirely renally eliminated; narrow therapeutic index; nephrotoxic and ototoxic. SAHPRA guidance requires therapeutic drug monitoring.
- **Vancomycin:** Renally eliminated; narrow therapeutic index; trough monitoring required
- **Digoxin:** Renally eliminated; narrow TI; toxicity risk increases with declining renal function
- **Metformin:** Renally eliminated; risk of lactic acidosis in renal impairment; contraindicated in severe renal failure
- **-cephalosporins (many):** Renally eliminated; dose adjustment required for cefepime, ceftazidime, cefazolin in renal impairment
- **Penicillins (piperacillin, ticarcillin):** Renally eliminated; neurotoxicity risk with accumulation
- **Ribavirin (used with interferons for hepatitis C in SA):** Renally eliminated; haemolytic anaemia risk

### Total Body Clearance

Total body clearance (CL_total) is the sum of all organ clearances. It is the most clinically useful measure because it directly determines the maintenance dose requirement:

CL_total = CL_renal + CL_hepatic + CL_pulmonary + CL_biliary + other

For most drugs, renal and hepatic clearances dominate. Pulmonary elimination is relevant only for volatile anaesthetic agents and a few other gases. Biliary excretion is usually a minor component but can be the primary elimination route for specific drugs (e.g., digoxin, rifampicin).

When calculating loading and maintenance doses in South African pharmacy practice, CL_total is the appropriate clearance value to use. In patients with organ dysfunction, the contribution of individual organ clearances must be assessed individually.

---

## Half-Life and Its Determinants

The half-life (t½) is the most clinically recognisable pharmacokinetic parameter. It is the time for plasma concentration to fall by 50%. Its clinical importance lies in:

- **Predicting time to steady state** (4–5 × t½)
- **Predicting duration of effect** after a single dose
- **Determining appropriate dosing interval** (ideally, τ ≈ t½ for drugs with narrow TI)
- **Calculating loading dose requirements** when t½ is very long

### Determinants of Half-Life

The half-life equation t½ = (0.693 · V_d) / CL reveals two determinants:

**Volume of distribution (V_d):** A large V_d prolongs half-life by distributing drug into a larger theoretical space. Drugs that are highly tissue-bound (e.g., digoxin localises to cardiac tissue; amiodarone to adipose) have large V_d values and long half-lives despite normal clearance. Conversely, drugs confined primarily to plasma (e.g., heparin) have small V_d and short half-lives.

**Clearance (CL):** Impaired clearance directly prolongs half-life. Renal impairment reduces renal clearance; hepatic impairment reduces hepatic clearance. In both cases, the half-life lengthens, and accumulation will occur unless the dose or dosing interval is adjusted.

**The clinical implication:** Half-life tells you how long a drug will persist, but it does not tell you which organ is responsible for elimination. Two drugs with identical half-lives may have very different dominant clearance pathways — one may be hepatically metabolised, the other renally eliminated. Always determine the primary elimination route before adjusting therapy.

### Half-Life Classification and Examples

| Drug | Half-life (adult) | Primary elimination route | Clinical significance |
|------|------------------|--------------------------|----------------------|
| **Morphine** | 2–4 h | Hepatic glucuronidation | Active metabolites (M3G, M6G) accumulate in renal failure |
| **Digoxin** | 36–48 h | Renal | Accumulation risk in renal impairment; long half-life limits rapid dose adjustment |
| **Amiodarone** | 26–110 days | Hepatic (CYP3A4) + faecal | Extremely long half-life; loading dose required; multiple drug interactions |
| **Warfarin** | 36–42 h | Hepatic (CYP2C9) | Active R and S enantiomers; S (more potent) metabolised by CYP2C9 |
| **Fluconazole** | 30–50 h | Renal | Renal excretion; dose adjustment required in renal impairment |
| **Rifampicin** | 3–5 h | Hepatic (CYP3A4) | Potent enzyme inducer; half-life not clinically critical since induction persists |
| **Gentamicin** | 2–3 h | Renal | Once-daily dosing possible; extended interval dosing in renal impairment |
| **Metformin** | 6–7 h | Renal | Accumulation in renal impairment; contraindicated in CrCl <30 mL/min |
| **Phenytoin** | 22–86 h (dose-dependent) | Hepatic (CYP2C9/2C19) | Michaelis-Menten (non-linear) kinetics; small dose increases → large concentration rises |
| **Ciprofloxacin** | 4–6 h | Renal (plus some hepatic) | Renal dose adjustment; crystalluria risk; interaction with divalent cations |

### Practical Half-Life Relationships

**Time to steady state:** As noted above, approximately 4–5 half-lives are required. For a drug with a half-life of 12 hours, steady state is reached in 2–3 days. For amiodarone (t½ up to 110 days), steady state may not be reached for more than a year of continuous dosing — explaining why amiodarone loading regimens are necessary.

**Time to eliminate:** After 4–5 half-lives, approximately 94–97% of a single dose has been eliminated. For most drugs, this represents clinically insignificant concentrations. However, for drugs with long half-lives or active metabolites, residual effect after 4–5 half-lives can be clinically relevant.

**Dosing interval:** The ideal dosing interval is approximately one half-life, producing peak-to-trough fluctuations of approximately 50%. For narrow TI drugs (e.g., aminoglycosides, vancomycin), more frequent dosing or continuous infusion may be used to reduce peak-trough swings. For drugs with very long half-lives, once-daily or alternate-day dosing is common.

---

## Renal Excretion

The kidneys are the primary organ for excretion of water-soluble drugs and their metabolites. Renal excretion is the net result of three simultaneous processes occurring in different segments of the nephron.

### Glomerular Filtration

**Mechanism:** Blood is filtered at the glomerulus, where the glomerular filtration rate (GFR) in healthy adults is approximately 125 mL/min (or approximately 180 L/day). The filtration barrier allows passage of water and small solutes while retaining plasma proteins and blood cells.

**Drug filtration:** Only free (unbound) drug is filterable at the glomerulus. Protein-bound drug cannot cross the filtration barrier. The rate of glomerular filtration of a drug is:

Filtration rate = GFR · f_u · C_p

where f_u is the fraction unbound in plasma and C_p is the plasma drug concentration.

**Charge and size selectivity:** Molecules smaller than approximately 7 kDa are freely filtered. Most drugs (molecular weight 200–1000 Da) are well below this threshold. However, for drugs bound to large plasma proteins (e.g., albumin at 66 kDa), filtration is restricted to the unbound fraction only.

**SAPC note:** In health, the filtration rate for freely filtered drugs equals GFR. However, in disease states where protein binding is altered (hypoalbuminaemia, uremia), the unbound fraction increases, and more drug is filterable — though total clearance may not change if secretion and reabsorption compensate. Understanding this is essential for interpreting drug concentration data in patients with nephrotic syndrome or chronic kidney disease.

### Tubular Secretion

**Mechanism:** Active transport of drug from the peritubular capillaries into the tubular lumen occurs primarily in the proximal tubule. This process is active (requires energy) and can exceed glomerular filtration for many drugs, making secretion the dominant renal elimination pathway.

**Transport systems:** Two major families of transporters mediate tubular secretion:

| Transporter Family | Examples | Substrates |
|--------------------|----------|------------|
| **Organic anion transporters (OATs)** | OAT1, OAT3 | PAH, penicillins, cephalosporins, NSAIDs, probenecid, furosemide, methotrexate |
| **Organic cation transporters (OCTs)** | OCT1, OCT2 | Metformin, cimetidine, procainamide, atenolol, digoxin (via P-gp) |
| **P-glycoprotein (P-gp)** | MDR1/ABCB1 | Digoxin, colchicine, loperamide, quinidine |

**Saturation kinetics:** Tubular secretion transporters have finite capacities and can be saturated at therapeutic concentrations. This results in non-linear pharmacokinetics — doubling the dose more than doubles the plasma concentration. Phenytoin is the classic example of saturation kinetics in clinical practice.

**Competition for secretion:** Drugs that share the same transporter system can compete for secretion, reducing the renal clearance of each other. This is the basis for important drug interactions:

- **Probenecid + penicillins/cephalosporins:** Probenecid competitively inhibits OAT1/OAT3, reducing antibiotic clearance and prolonging their plasma half-lives. Historically used therapeutically to reduce dosing frequency.
- **Cimetidine + metformin:** Cimetidine (an OCT inhibitor) reduces renal clearance of metformin, increasing plasma concentrations and risk of lactic acidosis.
- **NSAIDs + methotrexate:** NSAIDs reduce methotrexate renal clearance by inhibiting OAT, causing potentially dangerous methotrexate accumulation — particularly significant with high-dose methotrexate therapy.
- **Gemfibrozil + statins:** Gemfibrozil inhibits OATP1B1 and OATP1B3 (hepatic uptake transporters), but also affects renal transporters, contributing to statin myopathy risk.

**South African context:** NSAIDs are widely used in South Africa and are available over-the-counter (OTC) in Schedule 0, 1, and 2 configurations depending on dose and formulation. Pharmacists dispensing NSAIDs must be aware of the methotrexate interaction, particularly given that methotrexate is used for rheumatoid arthritis and psoriasis in South African patients.

### Tubular Reabsorption

**Mechanism:** Drug that has been filtered at the glomerulus can be passively reabsorbed from the tubular lumen back into the systemic circulation. Reabsorption occurs primarily in the distal tubule and collecting duct, driven by the concentration gradient created by water reabsorption.

**Factors affecting reabsorption:**

1. **Lipophilicity:** Non-ionised, lipophilic drugs cross tubular cell membranes readily and are extensively reabsorbed. Ionised drugs are poorly reabsorbed and are excreted more efficiently. Since urinary pH affects the ionisation of weak acids and bases, pH-dependent reabsorption is clinically significant.

2. **Urinary pH:** For weak acids (pKa 3–8) excreted in alkaline urine, ionisation increases, reabsorption decreases, and urinary excretion increases. For weak bases (pKa 5–10), acid urine promotes ionisation, reduces reabsorption, and increases urinary excretion.
   - **Weak acids (e.g., salicylates, phenobarbitone):** Alkalinisation of urine (sodium bicarbonate) increases excretion — used therapeutically in overdose
   - **Weak bases (e.g., amphetamines, phencyclidine):** Acidification of urine (ammonium chloride, ascorbic acid) increases excretion

3. **Urine flow rate:** High urine flow (diuresis, hydration) reduces the time available for passive reabsorption by decreasing the concentration gradient, thereby increasing renal clearance.

**Clinical application — urinary pH manipulation:**
In South Africa, salicylate (aspirin) overdose is a genuine clinical concern. Sodium bicarbonate alkalinisation of the urine is used in ICU settings to enhance phenobarbitone and salicylate excretion by ion-trapping. This requires monitoring of urinary pH (target >7.5 for salicylates) and plasma bicarbonate.

| Drug | pKa | Optimal excretion pH | Mechanism |
|------|-----|----------------------|-----------|
| Phenobarbitone | 7.3 | Alkaline (pH >7.5) | Ion trapping — non-ionised form reabsorbed; alkaline urine traps ionized drug in lumen |
| Salicylate | 3.0 | Alkaline (pH >7.5) | Same mechanism |
| Amphetamine | 9.9 | Acidic (pH <6.0) | Acidic urine ionises base, reducing reabsorption |
| Phencyclidine (PCP) | 8.5–9.0 | Acidic (pH <5.5) | Same for basic drugs |

### Net Renal Excretion

Net renal excretion of a drug is the sum of filtration, secretion, and reabsorption:

Excretion rate = (Filtration rate) + (Secretion rate) − (Reabsorption rate)

Renal clearance can be derived experimentally by measuring the urine excretion rate and plasma concentration:

CL_renal = (Urine concentration × Urine volume) / Plasma concentration × Time

This is the classic urine collection method for determining renal clearance, historically used in research and for drugs with narrow therapeutic indices.

---

## Non-Renal Clearance Pathways

While the kidneys and liver are the dominant elimination organs, several other pathways contribute to drug elimination and can be clinically significant in certain contexts.

### Biliary Excretion and Enterohepatic Recirculation

**Biliary excretion** is the active transport of drug or metabolite from hepatocytes into bile, followed by passage into the duodenum via the bile duct. This pathway is particularly important for drugs with molecular weights above approximately 500 Da and for compounds with structural features recognised by hepatobiliary transport systems.

**Transporters involved in biliary excretion:**

| Transporter | Location | Substrates |
|-------------|----------|------------|
| **P-glycoprotein (P-gp/ABCB1)** | Canalicular membrane | Digoxin, colchicine, quinidine, loperamide |
| **Bile salt export pump (BSEP/ABCB11)** | Canalicular membrane | Bile salts; drug-induced cholestasis with some drugs |
| **MRP2 (ABCC2)** | Canalicular membrane | Glucuronide conjugates (e.g., bilirubin glucuronide), methotrexate |
| **OATP1B1/1B3 (SLCO1B1/1B3)** | Basolateral (uptake) | Statins (atorvastatin, pravastatin, rosuvastatin), rifampicin |

**Enterohepatic recirculation (EHC):** Many drugs excreted in bile are not fully eliminated — instead, the drug or conjugate in bile enters the duodenum, where intestinal bacteria can hydrolyse glucuronide or sulfate conjugates, releasing the parent drug or aglycone, which is then reabsorbed. This creates a循环 of absorption, hepatic metabolism, biliary excretion, intestinal hydrolysis, and reabsorption, effectively prolonging the half-life of the drug.

**Drugs with significant enterohepatic recirculation:**
- **Oestrogens (ethinyloestradiol, oestradiol):** Conjugated oestrogens are excreted in bile; hydrolysis and reabsorption extend half-life; this is clinically relevant as oral contraceptives undergo EHC
- **Morphine:** Morphine-3-glucuronide is excreted in bile and hydrolysed to morphine in the intestine, contributing to prolonged analgesic effect
- **Chloramphenicol:** Glucuronide conjugate excreted in bile and hydrolysed
- **Diazepam:** Metabolites undergo EHC; contributes to long half-life of active metabolites (temazepam, oxazepam)
- **Thyroid hormones (T4, T3):** Undergo significant EHC, relevant in hypothyroidism management

**Clinical significance in South Africa:** Rifampicin is a potent inducer of hepatobiliary transporters and CYPs. It reduces the plasma concentrations of drugs undergoing EHC by inducing the enzymes and transporters involved. Understanding biliary excretion is relevant for drugs used in HIV/AIDS patients in South Africa (e.g., atazanavir, which relies on biliary excretion and is affected by transporter interactions) and for oncology patients.

### Pulmonary Elimination

The lungs eliminate volatile substances and gases by diffusion from blood into alveolar air. This pathway is clinically significant for:

**Inhaled anaesthetic agents:**
- Halothane, sevoflurane, isoflurane, desflurane — eliminated primarily via pulmonary exhalation
- Not metabolised hepatically; recovery from anaesthesia is determined by pulmonary ventilation and solubility (blood:gas partition coefficient)
- Low blood:gas solubility (e.g., desflurane) → rapid onset and recovery
- High blood:gas solubility (e.g., halothane) → slow onset and recovery

**Alcohol (ethanol):**
- Small fraction eliminated via pulmonary exhalation — the basis of breathalyser testing
- Primarily eliminated by hepatic metabolism (alcohol dehydrogenase); pulmonary elimination is negligible

**Volatile substances of abuse:**
- Toluene, benzene, and other industrial solvents — eliminated via lungs
- Not clinically relevant for mainstream pharmacy practice

### Intestinal Elimination

The intestine can eliminate drugs directly through faecal excretion, particularly for drugs that are poorly absorbed or that undergo biliary excretion with subsequent instability in the intestinal environment. Direct intestinal secretion (transintestinal excretion) can contribute to elimination for drugs that are substrates for intestinal transporters (e.g., P-gp in the intestinal mucosa), though this pathway is generally less significant than biliary excretion.

### Other Pathways

**Salivary excretion:** Some drugs are excreted in saliva (e.g., lithium, rifampicin, phenytoin). Salivary concentrations can approximate free plasma concentrations for some drugs and are used for therapeutic monitoring in specific contexts.

**Sweat:** Minimal excretion for most drugs; relevant for a few compounds (e.g., certain heavy metals, rifampicin in sweat causing red-orange discoloration of body fluids — patient counselling point).

**Milk (lactation):** Drug excretion into breast milk is relevant for nursing mothers. The ratio of milk to plasma concentration (M:P ratio) depends on pKa, molecular weight, protein binding, and lipophilicity. Basic drugs concentrate in milk (ion trapping); acidic drugs are generally lower in milk than plasma.

**Hair:** Incorporation of drugs into hair over time; relevant for forensic and doping control applications, not clinical pharmacy.

---

## Creatinine Clearance Estimation

Estimating renal function is fundamental to safe prescribing of renally eliminated drugs. In clinical practice, GFR is most commonly estimated using endogenous creatinine clearance or estimation equations such as the Cockcroft-Gault equation or CKD-EPI formulas.

### Endogenous Creatinine Clearance

Creatinine is a naturally occurring waste product of muscle creatine metabolism. It is:
- Freely filtered at the glomerulus
- Not significantly protein-bound
- Not reabsorbed to a significant degree (minor reabsorption occurs)
- Secreted by the renal tubules (minor component, but increases in renal impairment)

Because creatinine meets most criteria for an ideal filtration marker, creatinine clearance (CrCl) is used as a clinical surrogate for GFR. However, tubular secretion of creatinine means that measured CrCl overestimates true GFR, particularly in patients with muscle wasting (low creatinine production) or in advanced renal disease (increased creatinine secretion relative to filtration).

**24-hour urine creatinine clearance calculation:**

CrCl = (Urine creatinine concentration × Urine volume) / (Plasma creatinine concentration × Collection time in minutes)

Expressed in mL/min:

CrCl (mL/min) = [U_cr (mg/dL) × V_24h (mL)] / [P_cr (mg/dL) × 1440 min]

### Cockcroft-Gault Equation

The Cockcroft-Gault equation estimates creatinine clearance from serum creatinine, age, body weight, and sex:

**For males:**
CrCl (mL/min) = [(140 − age) × body weight (kg)] / [72 × serum creatinine (mg/dL)]

**For females:**
CrCl (mL/min) = [(140 − age) × body weight (kg) × 0.85] / [72 × serum creatinine (mg/dL)]

The 0.85 correction factor for females accounts for the lower average muscle mass and therefore lower creatinine production.

**Limitations of Cockcroft-Gault:**
- Requires actual body weight; not ideal for obese patients
- Not valid in patients with rapidly changing renal function
- Underestimates GFR at near-normal renal function
- Overestimates GFR in advanced renal disease (creatinine secretion becomes more prominent)
- Does not apply to children (different muscle mass relationship)

### CKD-EPI and eGFR

The Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI) equation is now preferred in many guidelines for estimating GFR, as it is more accurate at near-normal GFR values. The formula incorporates serum creatinine, age, sex, and race (using Black race coefficient for patients who self-identify as Black):

eGFR = 141 × min(S_cr/κ, 1)^α × max(S_cr/κ, 1)^−1.209 × 0.993^age × 1.018 [if female] × 1.159 [if Black]

where S_cr is serum creatinine (mg/dL), κ is 0.7 (females) or 0.9 (males), and α is −0.329 (females) or −0.411 (males).

**SAPC examination note:** The Cockcroft-Gault equation is the one most commonly examined in SAPC and board examinations. You must be able to calculate CrCl using this equation and interpret the result to determine dose adjustment requirements. The CKD-EPI formula, while more accurate, is less frequently examined because of its complexity.

### Practical Application in South African Pharmacy Practice

**Step 1: Estimate renal function.** Calculate CrCl using Cockcroft-Gault or obtain eGFR from laboratory results.

**Step 2: Categorise renal function.**

| Renal Function Category | CrCl (mL/min) | Dose Adjustment Required |
|------------------------|--------------|------------------------|
| Normal | ≥90 | None |
| Mild impairment | 60–89 | Minor adjustments for some drugs |
| Moderate impairment | 30–59 | Significant dose reduction or interval extension for many drugs |
| Severe impairment | 15–29 | Major dose reductions required; many drugs contraindicated |
| Kidney failure | <15 (or dialysis) | Most drugs require dose adjustment; dialysis considerations |

**Step 3: Apply dose adjustment.** For drugs requiring renal dose adjustment, the regimen can be modified by:
- **Reducing the maintenance dose** (maintaining the same dosing interval)
- **Increasing the dosing interval** (maintaining the same dose)
- **Both reducing dose and extending interval**

The choice depends on the drug's pharmacokinetic profile and therapeutic index. For drugs with narrow TI, the dose is typically reduced proportionally. For drugs with long half-lives where accumulation is the primary concern, extending the dosing interval is preferred.

**Common drugs requiring dose adjustment in renal impairment (South African formulary context):**

| Drug | renal impairment adjustment |
|------|---------------------------|
| Gentamicin | Extended interval dosing: CrCl 50–80: 80% dose q24h; CrCl 20–50: 60% dose q24h; CrCl <20: 40% dose q24h |
| Vancomycin | Loading dose 25–30 mg/kg; maintenance based on trough monitoring |
| Amikacin | Similar to gentamicin; therapeutic drug monitoring essential |
| Ceftazidime | CrCl 31–50: 1g q12h; CrCl 16–30: 1g q24h; CrCl <15: 0.5g q24h |
| Cefepime | CrCl >60: 1–2g q12h; CrCl 30–60: 1–2g q24h; CrCl <30: 0.5–1g q24h |
| Piperacillin-tazobactam | CrCl <40: extended infusion considered |
| Metformin | Contraindicated if CrCl <30 mL/min; caution if CrCl <45 mL/min |
| Digoxin | Reduce dose; monitor levels; toxicity risk increases with declining function |
| Fluconazole | CrCl <50: 50% dose; CrCl <20: single loading dose then 50% dose |

---

## Elimination Rate Constants

The first-order elimination rate constant (k_e) is a fundamental parameter describing the fraction of drug eliminated per unit time. It is an instantaneous rate (the slope of the concentration-time curve on a semi-log plot) and is independent of concentration under first-order kinetics.

### Relationship Between k_e and Half-Life

The elimination rate constant and half-life are related by:

t½ = 0.693 / k_e

Therefore:

k_e = 0.693 / t½

For a drug with a half-life of 6 hours: k_e = 0.693 / 6 = 0.1155 h⁻¹

This means approximately 11.55% of the drug in the body is eliminated each hour.

### Determining k_e from Concentration-Time Data

When plasma drug concentrations are measured at multiple time points after a single IV bolus dose, and the natural log of concentration is plotted against time, a straight line is obtained (first-order kinetics). The slope of this line equals −k_e/2.303. From the slope, k_e can be determined:

k_e = −slope × 2.303

The intercept of the line gives the extrapolated concentration at time zero (C_0), from which the volume of distribution can be calculated if the dose is known: V_d = Dose / C_0.

**The method of residuals:** For drugs that follow multi-compartment kinetics (see below), the method of residuals (also called stripping or peeling) is used to resolve the individual exponential components of the elimination curve.

### Zero-Order vs First-Order Elimination

**First-order elimination:** The rate of elimination is proportional to the drug concentration. Most drugs exhibit first-order elimination at therapeutic concentrations. The rate equation is:

dC/dt = −k_e · C

The plasma concentration decreases exponentially. A plot of ln(C) vs time is linear. The half-life is constant regardless of concentration.

**Zero-order elimination:** The rate of elimination is constant regardless of concentration. This is characteristic of processes that are saturated at therapeutic concentrations (i.e., the elimination capacity is exceeded). The rate equation is:

dC/dt = −k_0

where k_0 is the zero-order elimination rate constant (mass/time). A plot of C vs time is linear (not log). The half-life is not constant — it increases as concentration decreases.

**Clinical examples of zero-order elimination:**
- **Phenytoin:** Saturates hepatic enzymes at therapeutic concentrations; small dose increases produce disproportionately large increases in plasma concentration; this is the basis of phenytoin's Michaelis-Menten kinetics
- **Warfarin:** At therapeutic doses, warfarin is almost entirely eliminated by hepatic metabolism, but its metabolism involves saturable steps — however, at standard doses the kinetics are approximately first-order
- **Aspirin (at high doses):** Acetylation of COX involves enzyme saturation at high doses
- **Alcohol (ethanol):** Alcohol dehydrogenase is saturated at moderate blood alcohol concentrations; elimination rate is approximately zero-order over the range of intoxication

**Michaelis-Menten kinetics:** The general model for saturable elimination is:

dC/dt = −(V_max · C) / (K_m + C)

where V_max is the maximum elimination rate and K_m is the substrate concentration at which the elimination rate is half of V_max.

- When C << K_m: Equation reduces to first-order: dC/dt ≈ −(V_max/K_m) · C
- When C >> K_m: Equation approaches zero-order: dC/dt ≈ −V_max
- The transition between first-order and zero-order occurs around therapeutic concentrations for phenytoin

---

## Multi-Compartment Models

The simplest pharmacokinetic model is the one-compartment model, which assumes the body behaves as a single, well-mixed compartment. Drug entering the plasma instantly distributes throughout the entire volume of distribution. This is a useful approximation for many drugs, but it is physiologically unrealistic — drugs do not distribute instantaneously to all tissues.

In reality, drugs distribute at different rates to different tissues, creating concentration gradients between plasma and various body compartments. This results in multi-compartment kinetics, most commonly described as two-compartment or three-compartment models.

### The Two-Compartment Model

In a two-compartment model, the body is conceptualised as two interconnected compartments:

1. **Central compartment (V1):** Comprises plasma and rapidly perfused tissues (heart, liver, kidney, lungs). Drug appears in and disappears from this compartment most rapidly.

2. **Peripheral compartment (V2):** Comprises slowly perfused tissues (muscle, fat, skin). Drug equilibrates with the central compartment more slowly.

**The elimination half-life (t½_β)** reflects the rate of elimination from the body as a whole and is determined by the rate constants:
- **k₁₂:** Rate constant for distribution from central to peripheral compartment
- **k₂₁:** Rate constant for distribution from peripheral back to central compartment
- **k_e:** Elimination rate constant (central compartment elimination)

The overall terminal elimination rate constant (λ_z) is the smallest rate constant in the system, reflecting the slowest process — typically the return of drug from the peripheral compartment to the central compartment followed by elimination. The half-life of this terminal phase is the clinically relevant half-life for dosing decisions.

**Parameters of the two-compartment model:**

| Parameter | Description |
|-----------|-------------|
| C_0 | Extrapolated plasma concentration at time zero |
| V1 | Central compartment volume of distribution |
| V2 | Peripheral compartment volume of distribution |
| Vd_area | Total volume of distribution (V1 + V2) |
| k₁₂, k₂₁ | Inter-compartmental rate constants |
| k_e | Elimination rate constant |
| t½_α | Distribution half-life (initial rapid phase) |
| t½_β | Elimination half-life (terminal phase) |
| AUC | Total area under the concentration-time curve |

**Interpretation of alpha and beta phases:**
- **Alpha (α) phase — distribution phase:** Drug rapidly equilibrates between plasma and highly perfused tissues. Plasma concentrations fall quickly but this phase is not elimination per se — drug is moving into peripheral tissues. The half-life of this phase (t½_α) is typically short (minutes to a few hours).
- **Beta (β) phase — terminal elimination phase:** Drug is being eliminated from the body as a whole (from both compartments). The terminal half-life (t½_β) is what matters clinically for dosing frequency decisions. The rate-limiting step is the slower peripheral compartment returning drug to the central compartment for elimination.

**Clinical relevance:** For drugs with significant distribution phases, plasma concentrations drawn too early after dosing may not reflect the concentration at the target tissue. For antibiotics like aminoglycosides, the peak is drawn at 30–60 minutes after the end of infusion (after the distribution phase), and the trough is drawn just before the next dose (at true elimination phase).

### The Three-Compartment Model

More complex drugs may require a three-compartment model, with an additional deep peripheral compartment representing poorly perfused tissues (e.g., CNS, bone). This is relevant for drugs with very long terminal half-lives and complex tissue distribution.

Amiodarone is an example of a drug that is best described by a multi-compartment model: it has a rapid distribution phase followed by a prolonged terminal elimination phase spanning weeks.

### Clinical Implications of Multi-Compartment Kinetics

**Dosing timing and sampling:** For drugs with multi-compartment kinetics, therapeutic drug monitoring samples must be drawn at the appropriate time relative to dosing to reflect clinically relevant concentrations.

**Loading dose rationale:** For drugs with large volumes of distribution and slow terminal elimination, a loading dose is necessary to rapidly achieve therapeutic concentrations. The loading dose fills the peripheral compartments as well as the central compartment. Without a loading dose, it would take an impractically long time (4–5 terminal half-lives) to reach steady state by maintenance dosing alone.

**Drug interactions at distribution:** Some drug interactions occur at the level of tissue distribution rather than at metabolic enzymes or renal transporters. For example, digoxin interacts with other drugs at the P-gp transporter in the kidney (renal secretion), but also distributes to cardiac tissue, and drugs that alter P-gp activity can affect digoxin distribution.

---

## Non-Linear Pharmacokinetics

Most drugs follow linear pharmacokinetics, where clearance and volume of distribution are independent of dose. Under linear conditions, doubling the dose doubles the plasma concentration at all time points, and the half-life remains constant. This is predictable and simplifies dosing.

Non-linear pharmacokinetics occurs when the pharmacokinetic processes become saturated or induced at therapeutic concentrations, causing changes in clearance or volume of distribution that are concentration-dependent.

### Causes of Non-Linearity

**Enzyme saturation (Michaelis-Menten elimination):** When metabolic enzymes become saturated, elimination approaches a maximum rate (V_max) regardless of further increases in concentration. The elimination rate becomes independent of concentration (zero-order). This is seen with phenytoin, high-dose salicylates, and alcohol.

**Capacity-limited metabolism:** Some drugs induce or suppress their own metabolism at higher doses, causing clearance to change over time. Carbamazepine auto-induces CYP3A4, so its clearance increases during the first few weeks of therapy until a new steady state is reached at a higher clearance and lower plasma concentration.

**Protein binding saturation:** At high drug concentrations, plasma protein binding sites become saturated. Further increases in dose produce disproportionately larger increases in free (unbound) drug. Since it is the free drug that is pharmacologically active and that can be metabolised and excreted, saturation of binding can alter both the apparent volume of distribution and clearance.

### Clinical Consequences of Non-Linearity

**Phenytoin is the prototype for non-linear kinetics in clinical practice:**

At therapeutic concentrations (10–20 mg/L), phenytoin follows approximately first-order kinetics. However, as concentrations approach and exceed the K_m (approximately 4–8 mg/L for many patients), enzyme saturation occurs. The consequences are:

- Small dose increases produce large, unpredictable increases in plasma concentration
- The half-life increases as saturation progresses
- Small differences in dose can mean the difference between subtherapeutic, therapeutic, and toxic concentrations
- Therapeutic drug monitoring is essential; aiming for 10–20 mg/L with narrow TI

Phenytoin also demonstrates dose-dependent protein binding. At high concentrations, binding sites become saturated, increasing the free fraction. Total serum phenytoin concentrations may remain within therapeutic range while free (active) concentrations rise significantly. In patients with hypoalbuminaemia (common in chronic kidney disease, liver disease, malnutrition), the free fraction is already elevated, and total phenytoin concentrations may underestimate the free concentration.

**The Sheiner-Tozer equation** corrects total phenytoin concentrations for low serum albumin:

Corrected total phenytoin = Measured total phenytoin / (f_u × Correction factor)

where f_u = (0.9 × albumin g/L) + 0.1 for adults, approximately.

### Drugs with Non-Linear Kinetics — SA Clinical Context

| Drug | Type of Non-Linearity | Clinical Significance |
|------|----------------------|----------------------|
| **Phenytoin** | Saturable metabolism (Michaelis-Menten) | Small dose increases → disproportionate concentration rises; TDM essential |
| **Carbamazepine** | Auto-induction of CYP3A4 | Clearance increases over first 2–4 weeks; initial doses may become subtherapeutic |
| **Valproic acid** | Protein binding saturation + metabolism saturation | Total concentration may not reflect free drug; monitor free levels in special cases |
| **Warfarin** | Near-saturation at therapeutic doses | Small dose adjustments recommended; INR monitoring critical |
| **Aspirin (high dose)** | COX enzyme saturation | Zero-order kinetics at anti-inflammatory doses |
| **Allopurinol** | Xanthine oxidase saturation | Minor clinical significance |

---

## Dosing in Renal and Hepatic Impairment

Dose adjustment in organ dysfunction is one of the most practically important applications of elimination pharmacokinetics. Failure to adjust doses appropriately leads to drug accumulation, toxicity, or therapeutic failure.

### Renal Impairment

Renal impairment affects the elimination of drugs that are primarily renally excreted or that have active metabolites eliminated renally. The approach to dose adjustment involves:

**Step 1: Identify drugs requiring dose adjustment.** Most antibiotics, cardiovascular drugs, and analgesics have renal dose adjustment guidelines in product labelling and formularies. Essential references include the SAHPRA-approved datasheet and the South African National Formulary (SANF).

**Step 2: Quantify renal function.** Calculate CrCl using Cockcroft-Gault or obtain eGFR from laboratory reports. In South Africa, serum creatinine is routinely available; however, cystatin C-based estimates are more accurate in certain populations and may be used where available.

**Step 3: Select adjustment strategy.** Choose between dose reduction, interval extension, or both. The guiding principle is to maintain the same peak concentration (C_max) while adjusting the trough to avoid accumulation.

**Dose reduction vs interval extension:**

| Strategy | Method | When Preferred |
|----------|--------|----------------|
| **Dose reduction** | Lower dose, same interval | Drugs with narrow TI where maintaining C_max is important (e.g., digoxin) |
| **Interval extension** | Same dose, longer interval | Drugs where maintaining drug exposure over time is less critical; simpler for patients |
| **Both** | Reduce dose and extend interval | Moderate-to-severe impairment for most drugs; allows flexibility |

**Step 4: Monitor for efficacy and toxicity.** Plasma concentration monitoring, clinical response, and renal function should all be monitored. Drug concentrations must be interpreted in the context of current renal function.

**Special considerations in South Africa:**

**HIV and renal impairment:** Tenofovir disoproxil fumarate (TDF) is a cornerstone of antiretroviral therapy in South Africa and is associated with nephrotoxicity (Fanconi syndrome, acute tubular necrosis). Patients on TDF-containing regimens require regular monitoring of renal function. Alternative formulations (tenofovir alafenamide, TAF) have improved renal safety profiles.

**Tuberculosis and renal impairment:** Isoniazid, rifampicin, and pyrazinamide are all used in TB treatment. Rifampicin is primarily hepatically eliminated and does not require renal dose adjustment. Isoniazid is hepatically metabolised (N-acetyltransferase) but the parent drug is partially excreted renally; dose adjustment is not routinely required in mild-to-moderate renal impairment. Pyrazinamide is renally eliminated; dose reduction is required in severe renal impairment.

### Hepatic Impairment

Hepatic impairment is more complex to manage pharmacokinetically because the liver is responsible for both metabolism (Phase I and Phase II reactions) and biliary excretion. No single liver function test reliably predicts hepatic drug clearance.

**Markers of hepatic function relevant to drug elimination:**

| Test | What it Measures | Limitations |
|------|----------------|-------------|
| **Serum albumin** | Synthetic function | Low in chronic liver disease, malnutrition, nephrotic syndrome |
| **Prothrombin time/INR** | Synthetic function | Elevated in liver disease; affected by vitamin K status |
| **Bilirubin** | Excretory function | Elevated in cholestasis; not directly related to metabolism |
| **Child-Pugh score** | Composite clinical score | Validated for prognosis, not specifically for drug dosing |
| **MELD score** | Composite laboratory score | Used for liver transplant listing; not for drug dosing |
| **CYP enzyme activity** | Metabolic capacity | Difficult to measure clinically; reduced in cirrhosis |

**Effects of hepatic impairment on pharmacokinetics:**

1. **Reduced Phase I metabolism:** CYP450 enzymes are downregulated in advanced liver disease. CYP1A2, CYP2C9, and CYP2C19 are particularly affected. CYP3A4 is relatively preserved in early cirrhosis.

2. **Reduced Phase II metabolism:** Glucuronidation (UGT enzymes) and sulfation are relatively preserved compared to oxidation reactions, though they are also impaired in severe disease.

3. **Reduced protein synthesis:** Albumin production decreases, reducing plasma protein binding. For highly protein-bound drugs, the free fraction increases. This can increase apparent clearance (more free drug is available for elimination) but also increases pharmacological effect and risk of toxicity.

4. **Reduced hepatic blood flow:** In advanced liver disease with portal hypertension, hepatic blood flow decreases. This primarily affects the clearance of high extraction ratio drugs, which depend on blood flow for elimination.

5. **Ascites and altered volume of distribution:** Third-spacing of fluid into the peritoneal cavity (ascites) can increase the volume of distribution for water-soluble drugs, reducing initial plasma concentrations. For lipophilic drugs, body composition changes (loss of lean body mass, increased fat) alter the volume of distribution.

6. **Impaired biliary excretion:** Cholestatic liver disease reduces biliary excretion of drugs and their metabolites, particularly those with significant enterohepatic recirculation.

**Dosing in hepatic impairment — practical approach:**

| Child-Pugh Score | Classification | CYP Activity | Dosing Approach |
|------------------|---------------|--------------|-----------------|
| **5–6** | Child-Pugh A (mild) | Near normal | Most drugs at normal doses; some drugs with narrow TI require reduction |
| **7–9** | Child-Pugh B (moderate) | Significantly reduced | Reduce doses; many drugs require 50% dose reduction |
| **10–15** | Child-Pugh C (severe) | Severely reduced | Many drugs contraindicated; avoid or use with extreme caution |

**Drugs requiring caution or dose reduction in hepatic impairment (South African context):**

| Drug | Hepatic impairment concern | Recommendation |
|------|--------------------------|----------------|
| **Metoprolol** | Reduced CYP2D6 metabolism; increased bioavailability | Reduce dose; avoid in advanced disease |
| **Morphine** | Reduced glucuronidation; active metabolites accumulate | Reduce dose; avoid in severe hepatic impairment |
| **Lactulose** | Used for hepatic encephalopathy; not dose-adjusted | N/A for pharmacokinetic reasons |
| **Midazolam** | Reduced CYP3A4 metabolism; prolonged sedation | Reduce dose; prolonged half-life in cirrhosis |
| **Oxycodone** | Reduced CYP metabolism; reduced clearance | Reduce dose; avoid in severe impairment |
| **Simvastatin** | Reduced CYP3A4 metabolism; increased myopathy risk | Avoid in active liver disease; use lowest effective dose |
| **Warfarin** | Reduced CYP2C9 metabolism; increased INR | Monitor INR closely; reduced dose requirement |
| **Paracetamol** | GSH depletion risk in hepatic impairment | Avoid high doses; therapeutic doses generally safe |

**Paracetamol (acetaminophen) and liver disease:** This is a critical SAPC topic. Paracetamol is metabolised primarily by sulfation and glucuronidation (Phase II) at therapeutic doses, with a small fraction oxidised by CYP2E1 to the toxic metabolite N-acetyl-p-benzoquinone imine (NAPQI). In healthy individuals, NAPQI is rapidly detoxified by glutathione. In hepatic impairment, glutathione stores may be depleted, increasing the risk of NAPQI-mediated hepatotoxicity even at therapeutic paracetamol doses. Patients with chronic liver disease (including alcoholic liver disease) are at increased risk. The maximum recommended paracetamol dose in these patients is 2–3 g/day (reduced from the standard 4 g/day), though this remains an area of some clinical debate.

---

## SAHPRA, the National Formulary, and Elimination Pharmacokinetics

The South African Health Products Regulatory Authority (SAHPRA) is the statutory body that regulates medicines in South Africa, successor to the Medicines Control Council (MCC). SAHPRA evaluates pharmacokinetic data (including elimination parameters) as part of medicines registration, ensuring that dosing recommendations in approved datasheets reflect the known elimination characteristics of the drug.

**SAHPRA datasheet requirements for elimination data:**
- Terminal elimination half-life (t½)
- Total body clearance (CL)
- Renal clearance (if relevant)
- Non-renal clearance (if relevant)
- Dose adjustment recommendations for renal and hepatic impairment
- Pharmacokinetic data in special populations (elderly, paediatrics)

The South African National Formulary (SANF) and the Standard Treatment Guidelines (STGs) provide practical dosing guidance that incorporates elimination pharmacokinetics. The STGs are used extensively in the public sector and are based on the best available evidence for the South African context.

**SAHPRA guidance on drug interactions affecting elimination:**

Drugs that inhibit or induce major elimination pathways are subject to SAHPRA-mandated interaction labelling. Key interactions pharmacists must know include:

- **Rifampicin (CYP3A4 and P-gp inducer):** Reduces plasma concentrations of many drugs — anticoagulants, antiretrovirals, antiepileptics, hormonal contraceptives, statins
- **Erythromycin, clarithromycin, ketoconazole, itraconazole (CYP3A4 inhibitors):** Increases plasma concentrations of drugs metabolised by CYP3A4 — statins (risk of myopathy/rhabdomyolysis), benzodiazepines, calcium channel blockers, cyclosporine
- **Cimetidine (CYP inhibitor, OCT inhibitor):** Reduces renal clearance of some drugs (metformin, procainamide)
- **Grapefruit juice (CYP3A4 and P-gp inhibitor in gut wall):** Increases bioavailability of oral CYP3A4 substrates — relevant for oral drug formulations only

**Examination note:** SAPC examinations frequently test the pharmacokinetic consequences of enzyme induction and inhibition. Rifampicin is the most clinically important inducer in South Africa given the high burden of tuberculosis. Rifampicin-induced reductions in drug concentration can lead to treatment failure (e.g., of antiepileptic drugs, antiretrovirals, hormonal contraceptives) — this has major public health implications.

**Fixed-dose combinations and elimination considerations:**
Fixed-dose combinations (FDCs) commonly used in South Africa (e.g., co-trimoxazole for PCP prophylaxis, fixed-dose ARV combinations) must be evaluated for potential pharmacokinetic interactions between components. The pharmacokinetic profile of each component should be considered, and where possible, combinations that minimise competition for elimination pathways should be selected.

---

## SAPC Examination Tips

1. **Clearance vs elimination rate:** Clearances are not rates. Clearance is a volume-per-time measure (mL/min), not a concentration-per-time measure. Know the units and be able to manipulate the equations relating clearance, volume of distribution, and half-life.
2. **Half-life determinants:** Remember the half-life equation t½ = (0.693 × Vd) / CL. Both Vd and CL determine half-life. A patient with a large Vd may have a normal clearance but a long half-life. Conversely, reduced clearance with normal Vd prolongs the half-life. Both scenarios lead to accumulation if doses are not adjusted.
3. **Creatinine clearance calculations:** The Cockcroft-Gault equation is the most commonly examined method. Be precise with the units and be aware of the female correction factor (× 0.85). Understand the limitations — CrCl overestimates GFR due to creatinine secretion.
4. **Renal excretion mechanisms:** Know the three processes (filtration, secretion, reabsorption) and be able to explain how each contributes to net renal clearance. Understand how urinary pH manipulation works and which drugs are amenable to this approach.
5. **High vs low extraction ratio drugs:** For hepatic clearance, be able to explain how changes in hepatic blood flow and enzyme activity affect different drugs. High extraction drugs (e.g., morphine, propranolol) are flow-limited; low extraction drugs (e.g., phenytoin, theophylline) are enzyme-limited.
6. **Multi-compartment kinetics:** Distinguish the distribution phase (alpha) from the terminal elimination phase (beta). The terminal half-life is what matters for dosing frequency. The distribution half-life is why peak concentrations should be drawn at the correct time after infusion.
7. **Non-linear kinetics:** Phenytoin is the key example. Understand why small dose increases produce large concentration changes when enzymes are saturated, and why the half-life appears to increase as saturation is approached.
8. **Dose adjustment in renal/hepatic impairment:** Be systematic. Calculate renal function first, then determine which elimination pathways are relevant, then apply the appropriate adjustment strategy. Do not guess — use established guidelines.
9. **SAHPRA and regulatory context:** Know the South African regulatory framework and how it informs dosing recommendations. Understand the clinical significance of rifampicin interactions in the SA context. Be aware of the key drugs requiring renal dose adjustment (aminoglycosides, vancomycin, metformin, digoxin, fluconazole).
10. **Loading dose calculations:** Be able to calculate loading dose from Vd and target concentration, and explain why loading doses are needed for drugs with long half-lives. Understand the relationship between half-life, time to steady state, and loading dose requirement.

### Common Examination Traps

**Trap 1: Confusing half-life with time to eliminate.** The common rule is that 4–5 half-lives reach steady state, not that the drug is eliminated in 4–5 half-lives. For a drug with a half-life of 48 hours (e.g., digoxin), steady state is reached in 8–10 days, and the drug is still being eliminated long after that.

**Trap 2: Forgetting that half-life depends on both Vd and CL.** A drug with a long half-life may have a large Vd (not necessarily impaired clearance) or low clearance (not necessarily large Vd). Always determine the primary elimination route when adjusting therapy.

**Trap 3: Overlooking tubular secretion when estimating renal clearance.** Using only GFR (assuming filtration-only elimination) will overestimate the clearance of actively secreted drugs (e.g., penicillins) and underestimate the risk of competitive interactions at tubular transporters. Be aware when drugs are actively secreted.

**Trap 4: Ignoring non-linear kinetics for phenytoin.** Students often apply linear proportional reasoning (double the dose → double the concentration) to phenytoin, which is dangerous. At therapeutic concentrations, phenytoin is close to saturation, and a small dose increase can produce a large concentration rise, potentially into the toxic range. This is one of the highest-risk calculation errors in clinical pharmacy.

**Trap 5: Assuming hepatic impairment dose adjustment is the same as renal dose adjustment.** There is no single equation analogous to Cockcroft-Gault for hepatic impairment. The Child-Pugh classification is used as a semi-quantitative guide, but hepatic impairment is far more complex than renal impairment. The absence of a simple formula means clinical judgement is required.

**Trap 6: Misinterpreting accumulation factor.** The accumulation factor R = 1/(1 − e^(−0.693τ/t½)) is commonly misunderstood. For τ = t½, R = 2. This means steady-state concentrations will be approximately twice the concentration after a single dose. Many students confuse whether the accumulation factor means 2-fold or 50% accumulation.

**Trap 7: Not knowing which half-life to use in multi-compartment models.** When calculating dosing for drugs with multi-compartment kinetics, you must use the terminal (beta) half-life for dosing interval decisions. The distribution half-life (alpha) is not relevant for determining how often a drug should be dosed to maintain therapeutic concentrations.
