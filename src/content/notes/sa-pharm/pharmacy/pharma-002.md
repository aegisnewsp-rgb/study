---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-002
topicName: Pharmacokinetics — ADME
weight: 3
country: southafrica
generated: "2026-03-25T17:00:00"
lastUpdated: 2026-03-25
---


# Pharmacokinetics — Absorption, Distribution, Metabolism, and Excretion (ADME)

Pharmacokinetics describes what the body does to a drug. Understanding ADME processes is critical for rational dosing, predicting drug interactions, and optimizing therapy. For the SAPC examination, you must be able to apply pharmacokinetic principles to clinical scenarios and interpret pharmacokinetic parameters.

---

### 🟢 Lite — Quick Review (1h–1d)

> Short pass for the hour before you walk into the exam hall.
{title} is the chapter that explains **why two people on the same nominal dose get different blood levels**, and it is pure arithmetic underneath: four symbols, two equations, one ratio that ties them together.

**The four parameters, and what each one physically means:**

| Parameter | Definition | What it is actually measuring |
|---|---|---|
| **F** | Fraction of the dose reaching systemic circulation unchanged | How much the body discards before the drug arrives |
| **Vd** | Dose ÷ C0 | An apparent *volume*, not a real one — how far drug spreads out of plasma |
| **CL** | Volume of plasma cleared per unit time | The body's elimination *machinery* in L/h or mL/min |
| **t½** | Time for plasma level to halve | The only derived one: t½ = 0.693 × Vd ÷ CL |

That last row is the exam's favourite. **Half-life is not a fourth fact — it is arithmetic from Vd and CL.** Change either and t½ moves; nothing else does.

**The two dosing equations, and why they use different parameters:**

- **Loading dose** = (Vd × Cp,target) ÷ F — a *volume* question: fill the compartment to the target level.
- **Maintenance rate** = (CL × Cp,target) ÷ F — a *clearance* question: replace what the body removes each interval.

A large-Vd, slow-clearance drug needs **both** — the loading dose because distribution is slow to complete, the maintenance dose because clearance keeps draining the level back down.

**Absorption, in one line each:**

- IV is F = 100% by definition; every other route is a set of reasons F < 1.
- Passive diffusion dominates and obeys lipophilicity and ionisation; carrier-mediated transport handles structurally specific compounds (levodopa via LAT1); endocytosis handles proteins and peptides.
- Oral F is capped by the **first pass** — portal blood reaches the liver before the systemic circulation. Propranolol ~25%, morphine ~35%, oral lidocaine ~35%. Route switching for these drugs needs a dose change.
- Protein binding decides everything downstream: only the **free** drug distributes, metabolises and acts.

**Metabolism, in one line each:**

- **Phase I** — CYP450 does oxidation, reduction and hydrolysis, and exposes or installs the reactive group. The five enzymes SAPC asks by name: CYP3A4 (the biggest slice, induced by rifampicin, inhibited by ketoconazole), CYP2D6 (codeine to morphine, inhibited by quinidine and fluoxetine), CYP2C19 (clopidogrel activation, inhibited by omeprazole), CYP2C9 (S-warfarin, inhibited by fluconazole), CYP1A2 (theophylline, induced by smoking, inhibited by ciprofloxacin).
- **Phase II** — glucuronidation, sulphation, acetylation, glutathione conjugation. These make the molecule water-soluble so it can leave.

**Excretion, in one line each:**

- Glomerular filtration is passive and only sees the **free** drug, so renal clearance is capped near fu × GFR (~120 mL/min).
- Tubular secretion is active and carrier-mediated — the only way clearance can exceed that cap. Probenecid blocks it for penicillins.
- Tubular reabsorption is pH-dependent: **acidify to dump a weak base, alkalinise to dump a weak acid** (the salicylate overdose protocol).

**The trap SAPC builds questions around:** time to steady state is **4–5 half-lives regardless of dose or dosing interval**. Doubling the dose does not make steady state arrive sooner — it only raises the level it arrives at.

### 🟡 Standard — Regular Study (2d–2mo)

#### Fundamental Concepts

##### Bioavailability (F)

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

##### Half-Life (t½)

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

##### Volume of Distribution (Vd)

Vd is a theoretical volume that relates the total amount of drug in the body to the plasma concentration: Vd = Dose / C₀

| Vd Range | Interpretation | Drug Examples |
|----------|--------------|---------------|
| <10 L (~body water) | Primarily plasma/water | Heparin, warfarin (highly protein bound) |
| 10–30 L | Blood and interstitial fluid | Many drugs distribute to total body water |
| >30 L | Tissue binding > plasma binding | Lithium, chloroquine, many lipophilic drugs |
| Very large | Extensive tissue sequestration | Ivermectin, tacrolimus |

**Clinical implication:** A large Vd means the drug is largely outside the plasma compartment — dialysis will not effectively remove it.

##### Clearance (CL)

Clearance is the volume of plasma cleared of drug per unit time (L/h or mL/min).

- **Hepatic clearance:** CLₕ = Q × (Clᵤᵢ / (Q + Clᵤᵢ))
  where Q = hepatic blood flow, Clᵤᵢ = intrinsic clearance
- **Renal clearance:** CLᵣ = (U × V) / P
  where U = urine concentration, V = urine flow rate, P = plasma concentration

**Total clearance:** CL = CLₕ + CLᵣ (+ other routes)

##### Loading Dose and Maintenance Dose

**Loading dose** = (Vd × Cp,target) / F
**Maintenance dose rate** = (CL × Cp,target) / F

A loading dose is used when the therapeutic concentration must be achieved quickly. It is typically needed for drugs with long half-lives.

**Example calculation:**
- Target concentration: 10 mg/L
- Vd: 50 L
- Bioavailability: 0.8
- Loading dose = (50 × 10) / 0.8 = 625 mg

---

#### Absorption

##### Routes of Administration

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

##### Mechanisms of Drug Absorption

1. **Passive diffusion** — most drugs; follows concentration gradient; no energy required. Depends on: lipophilicity, ionization state, surface area, concentration gradient.
2. **Carrier-mediated transport** — active or facilitated; for structurally specific compounds (e.g., levodopa via LAT1 transporter).
3. **Endocytosis/exocytosis** — for large molecules (e.g., insulin, enoxaparin).
4. **Paracellular route** — through tight junctions; limited; hydrophilic drugs only.

##### Factors Affecting Oral Absorption

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

##### SAPC Note on Absorption

For the SAPC examination, be particularly aware of drugs with significant first-pass metabolism (propranolol, morphine, lidocaine, nitrates, testosterone) — their oral bioavailability is low and variable, and dose adjustments are required when switching between routes.

---

#### Distribution

##### Protein Binding

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

##### Tissue Distribution

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

##### Apparent Volume of Distribution — Extended Interpretation

| Drug | Vd (L/kg) | Interpretation |
|------|-----------|----------------|
| Warfarin | 0.1–0.2 | Mostly confined to plasma (highly protein bound) |
| Digoxin | 3–5 | Large Vd → tissue binding → monitor levels, avoid toxicity |
| Chloroquine | 100–300 | Extreme tissue sequestration |
| Lithium | 0.6–0.9 | Vd approximates total body water |

---

#### Metabolism

##### Phase I Reactions (Functionalization)

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

##### Phase II Reactions (Conjugation)

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

#### Excretion

##### Renal Excretion

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

##### Biliary and Fecal Excretion

- Some drugs (especially those with molecular weight > 500 Da) are excreted in bile
- Enterohepatic circulation: drug is excreted in bile → intestinal bacteria deconjugate → reabsorption → back to liver
- **Examples:** rifampicin, ethinyloestradiol, chloramphenicol
- **Clinical consequence:** interruption of enterohepatic circulation (e.g., by antibiotics) can reduce drug exposure

##### Other Routes of Excretion

| Route | Notes |
|-------|-------|
| Pulmonary | Volatile anesthetics, alcohol |
| Salivary | Drugs excreted into saliva; useful for monitoring (e.g., carbamazepine) |
| Breast milk | Depends on pKa, protein binding, lipophilicity; many drugs are contraindicated |
| Sweat | Certain drugs (antimicrobials, some illicit drugs) |

---

#### Pharmacokinetic Compartmental Models

##### One-Compartment Model

Assumes drug distributes instantaneously throughout the body. Concentration declines mono-exponentially after absorption and distribution cease.

- **Elimination:** C = C₀ × e^(−kₑt)
- **Half-life:** t½ = 0.693 / kₑ
- **Example drugs:** Aminoglycosides (gentamicin), lithium

##### Two-Compartment Model

Distinguishes central compartment (plasma) and peripheral compartment (tissues). Useful for drugs that redistribute over time.

- **Alpha phase (distribution):** initial rapid decline
- **Beta phase (elimination):** slower terminal decline
- **Example drugs:** Thiopentone, digoxin, many antihypertensives

##### Michaelis-Menten Kinetics (Non-linear)

At high concentrations, metabolic and excretory pathways become saturated → zero-order kinetics.

- **Equation:** dC/dt = −(Vₘₐₓ × C) / (Kₘ + C)
- **Clinical examples:** Phenytoin, methanol, ethanol, aspirin at high doses
- **Sign:** half-life increases as dose increases (opposite of first-order kinetics)
- **Important for:** phenytoin loading and maintenance dosing to avoid toxicity

---

#### SAPC Examination Tips

1. **Half-life calculations** — Be able to calculate when steady state will be reached and how much of a loading dose is needed. Steady state is reached in ~4–5 half-lives regardless of dose or dosing interval.
2. **Bioavailability and first-pass** — Identify drugs with low oral bioavailability (propranolol ~25%, morphine ~35%, lidocaine oral ~35%) and understand why they cannot be given orally.
3. **Protein binding and interactions** — Know which drugs are highly protein-bound and can displace each other. The classic exam question pairs warfarin with a displacing drug.
4. **CYP450 interactions** — Be able to identify the major CYP enzymes, their substrates, inducers, and inhibitors. The rifampicin-ketoconazole pair is a classic exam example.
5. **Renal dosing** — Estimate renal function using Cockcroft-Gault. For drugs with narrow therapeutic indices (gentamicin, vancomycin, digoxin), adjusted dosing is essential.
6. **Enterohepatic circulation** — Understand how interruption (e.g., by cholestyramine, antibiotics) affects drug levels.

##### Common Examination Trap

A common SAPC trap is to confuse half-life with time to steady state. Remember: the time to steady state depends ONLY on the half-life, not on the dose or dosing frequency. Doubling the dose does NOT make steady state arrive faster — it just raises the steady-state concentration. Similarly, a drug with a 48-hour half-life will take 8–10 days to reach steady state regardless of the dose given.


### 🔴 Extended — Deep Study (3mo+)

> Deep study for the derivation half of this chapter: which variables actually move the concentration-time curve, rather than which constant to memorise.
#### Half-life is the one parameter that is not a fact about the drug

Every other symbol in this chapter is measurable on its own terms: F is a ratio of two areas under a curve, Vd is a dose over a concentration, CL is a volume per unit time. Half-life is the odd one out, because it is not measured at all — it is *computed* from the other two, t½ = 0.693 × Vd ÷ CL.

That has a direct consequence for how the chapter is examined. A question that gives you a half-life and a Vd and asks for clearance is not asking you to recall a drug property; it is asking you to notice that only two of the three parameters are independent. Give any two and the third is determined. This is why a drug's half-life "changes" when something alters protein binding or induces an enzyme — Vd or CL moved, and t½ is simply the readout.

The trap that follows is worth stating outright, because the note's own exam-tips section flags it: **time to steady state depends only on half-life.** Not on the dose, not on the interval, not on the route. Doubling the dose of a drug with a 24-hour half-life does not bring you to steady state any sooner — it brings you to a *higher* steady state four to five days later. The corollary is that a 48-hour half-life needs eight to ten days, which is why those drugs carry a loading dose at all.

#### Loading dose and maintenance dose answer two different questions about the same target

Both equations aim at the same number, Cp,target, and that is exactly why students conflate them.

The **loading dose** multiplies target concentration by **Vd**. It asks a spatial question: how much drug must I put into this apparent volume to make the plasma level equal the target? It has no time component at all, which is why it is given once.

The **maintenance rate** multiplies target concentration by **CL**. It asks a *rate* question: how much drug must I replace each interval to offset what the body just removed? It is per unit time, which is why it is a continuous rate rather than a single dose.

A drug needs both precisely when Vd is large or CL is slow. Consider a compound with a Vd of 50 L, F of 0.8, and a 24-hour half-life. Four days of oral dosing produces almost no early effect, because distribution has barely begun and clearance is still filling the compartment — so you give a loading dose to reach target immediately, then the maintenance rate to hold it. Omit the loading dose and the patient waits four to five days for a level the drug could have reached in one.

#### First-pass metabolism is an absorption event that shows up as a bioavailability number

It is worth separating where first-pass metabolism happens from what it causes. The event is anatomical: drug absorbed from the gut enters the portal vein and reaches the liver *before* it reaches the systemic circulation. Any drug the liver extracts on that first transit has already been lost by the time it could have acted.

The consequence is that F is route-dependent in a way that has nothing to do with absorption across the gut wall. Propranolol, morphine, nitrates, oral lidocaine and testosterone are all well absorbed and all have low oral bioavailability, for one reason.

This is the mechanism behind a practical rule: **switching route for a drug with meaningful first-pass loss requires changing the dose.** The absorbed fraction has not changed — the fraction that survived the liver has. Anyone moving a patient from oral to intravenous propranolol without recalculating is delivering several times the intended systemic exposure.

#### Renal excretion has a hard ceiling that secretion alone can lift

The three processes are usually listed as equals, and they are not equal in kind. Glomerular filtration is passive and it can only ever see unbound drug, because protein-bound drug never leaves the plasma column. That places a structural ceiling on how fast a drug can leave by the kidney — roughly fu multiplied by GFR, about 120 mL/min for an unbound drug and proportionally less for a highly bound one.

**Tubular secretion is the only route that breaks that ceiling.** It is active and carrier-mediated, so it can move drug against its gradient and can concentrate it in the urine beyond what filtration alone would allow. Probenecid blocking penicillin secretion is the clean demonstration: the interaction is not pharmacological, it is competitive transport at the proximal tubule.

**Reabsorption is the reverse and is the most clinically useful of the three,** because it is chemically tunable. Urine pH determines how much of a weakly acidic or weakly basic drug is ionised and therefore trapped in the tubular lumen. Alkalinising the urine with sodium bicarbonate converts more salicylate to its ionised form, which cannot diffuse back across the membrane — so excretion accelerates. The same reasoning in reverse, acidifying with ammonium chloride, accelerates clearance of weak bases. This is pH manipulation as a therapeutic action, not a laboratory curiosity.

#### Non-linear kinetics break the assumption the rest of the chapter rests on

Every equation above assumes elimination capacity is unlimited, so the rate of removal is proportional to concentration. At therapeutic concentrations that is true for most drugs. At high concentrations it stops being true: metabolising enzymes saturate, the rate plateaus at Vmax, and elimination becomes a fixed amount per unit time — zero order.

The clinical signature is a half-life that **rises as the dose rises**, which is the opposite of first-order behaviour and is therefore the single fact that identifies saturation when it appears in a question. Phenytoin, ethanol, methanol and high-dose aspirin are the named examples.

It also explains why phenytoin dosing is set up as a loading phase followed by careful maintenance rather than a simple weight-based regimen. Once elimination is capacity-limited, doubling the dose does not double the level, and the margin between therapeutic and toxic concentrations narrows as the dose climbs.

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Pharmacokinetics — ADME" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

