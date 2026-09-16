---
exam: ini-cet
examName: INI CET (AIIMS PG)
subject: pharmacology
subjectName: "Pharmacology"
topic: pharma-001
topicName: "Pharmacokinetics (ADME)"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Pharmacokinetics (ADME)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Pharmacokinetics describes what the body does to a drug through four sequential processes: **A**bsorption, **D**istribution, **M**etabolism, and **E**xcretion. Together they dictate the plasma concentration–time profile that links dose to clinical effect. Mastering ADME means knowing the four governing parameters: bioavailability (F), volume of distribution (Vd), clearance (CL), and half-life (t½).

| Parameter | Formula | SI units | Defines |
|---|---|---|---|
| Bioavailability (F) | F = AUC_oral / AUC_IV | dimensionless (0–1) | Fraction reaching systemic circulation |
| Volume of distribution (Vd) | Vd = Amount in body / Plasma concentration | L (or L/kg) | Apparent space the drug occupies |
| Clearance (CL) | CL = Rate of elimination / Plasma concentration | mL/min or L/h | Volume of plasma cleared per unit time |
| Half-life (t½) | t½ = 0.693 × Vd / CL | hours | Time for plasma level to fall by 50% |

> 💡 **High-Yield Memory Hook:** **"FAD V-CLOCK"** — **F** (bioavailability), **A**bsorption, **D**istribution → **V**d, **C**learance, **L**oading dose, **O**ral first-pass, **C**YP metabolism, **K**idney excretion. Walk each letter when solving dose-calculation MCQs.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Quantitative Framework

Four equations anchor every dose-calculation MCQ in INI CET Pharmacology:

- **Loading dose (LD):** LD = (Vd × Ctarget) / F — depends only on Vd, used when you need rapid therapeutic levels (e.g., digoxin, amiodarone).
- **Maintenance dose (MD):** MD = (CL × Ctarget × τ) / F — depends only on CL and dosing interval τ, used to sustain steady state.
- **Steady-state concentration:** Css = (F × Dose) / (CL × τ) — independent of Vd.
- **Half-life:** t½ = 0.693 × Vd / CL — reaches ~94% of Css after 4–5 half-lives.

> 📌 **Formula Check:** Vd carries litres (or L/kg for weight-based dosing); CL is conventionally mL/min in pharmacology texts and L/h in clinical pharmacy; t½ uses hours.

#### ADME Step-by-Step

1. **Absorption** — governed by F; reduced by first-pass metabolism in the gut wall and liver (high-extraction drugs: nitroglycerin ~1%, propranolol ~26%, lidocaine ~35%).
2. **Distribution** — determined by Vd; lipophilic bases (chloroquine Vd ≈ 13,000 L) bind tissues extensively; hydrophilic drugs (aminoglycosides Vd ≈ 0.25 L/kg) stay in plasma.
3. **Metabolism** — Phase I (CYP450 oxidation/reduction/hydrolysis) typically yields metabolites; Phase II (glucuronidation, sulfation, acetylation) increases water solubility for excretion. CYP3A4 metabolises ~50% of all drugs.
4. **Excretion** — renal (glomerular filtration + tubular secretion ± reabsorption); biliary/fecal for high-MW drugs (>500 Da) and conjugates; minor pulmonary, salivary, breast-milk routes.

#### Concept Comparison Matrix

| Feature | Loading Dose | Maintenance Dose | Steady-State Css |
|---|---|---|---|
| Depends on | Vd, F, target Cp | CL, τ, F, target Cp | Dose rate / CL |
| Independent of | CL, τ, t½ | Vd, t½ | Vd |
| Time to effect | Immediate (first dose) | Reached after 4–5 t½ | Plateau after 4–5 t½ |
| Affected by renal failure | No (only if Vd changes) | Yes — CL drops, so MD ↓ | Yes — Css rises |

| Kinetic Order | Rate equation | t½ behaviour | Classic example |
|---|---|---|---|
| First-order | Rate = k × C | Constant t½ | Most drugs at therapeutic doses |
| Zero-order | Rate = constant (Vmax) | t½ lengthens as dose rises | Ethanol, high-dose phenytoin, high-dose aspirin |
| Michaelis-Menten | Rate = (Vmax × C)/(Km + C) | Approaches zero-order when C ≫ Km | Phenytoin (Km ≈ 5–10 µg/mL) |

#### 🎯 Exam-Level Worked Problem

**Question:** A 70-kg patient with normal renal function receives oral theophylline 300 mg every 8 hours. Reported values: F = 0.96, Vd = 0.45 L/kg, CL = 48 mL/min. (a) Calculate the elimination half-life. (b) What is the expected average steady-state plasma concentration?

#### Solution:

(a) Convert CL to L/h: 48 mL/min × 60 min/h ÷ 1000 = 2.88 L/h.
Vd in litres: 0.45 L/kg × 70 kg = 31.5 L.
t½ = 0.693 × Vd / CL = 0.693 × 31.5 / 2.88 = 7.58 h ≈ 7.6 h.

(b) Css = (F × Dose) / (CL × τ) = (0.96 × 300 mg) / (2.88 L/h × 8 h) = 288 / 23.04 = 12.5 mg/L (therapeutic range 10–20 mg/L → within window).

> ⚠️ **Examiner Trap:** Students commonly forget to weight Vd by body mass or convert mL/min to L/h before dividing. Watch the units — mixing L with mL gives a t½ answer off by 1000-fold. Also remember that "average Css" here is the AUC-based mean; peak (Cmax) and trough (Cmin) bracket it.

#### Common INI CET Pitfalls

- Treating protein binding as a determinant of t½ — only free drug is cleared, so binding shifts Vd, not CL.
- Predicting theophylline accumulation from dose alone without checking CL (falls in heart failure, cirrhosis, viral illness).
- Confusing enzyme inducers (rifampin, carbamazepine, phenytoin, St John's wort — ↑ CL, ↓ Css) with inhibitors (ketoconazole, erythromycin, cimetidine, grapefruit juice — ↓ CL, ↑ toxicity).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

1. **Hepatic vs renal failure dosing** — for renally cleared drugs (aminoglycosides, digoxin, lithium, vancomycin), use the Cockcroft-Gault CL_cr estimate and apply dose fraction = patient CL / normal CL. For hepatically cleared high-extraction drugs (propranolol, morphine), Css is governed by hepatic blood flow, not enzyme capacity — so cirrhosis may not change CL until late-stage.
2. **Non-linear (Michaelis-Menten) kinetics** — at therapeutic doses phenytoin often sits near Km, meaning a 50% dose increase can raise Cp by >100%. TDM with at least two steady-state levels is mandatory.
3. **Bioequivalence** — generic substitution is permitted when 90% CI of AUC and Cmax ratios lies within 80–125% of the innovator.
4. **Pro-drug activation** — enalapril → enalaprilat, codeine → morphine (via CYP2D6 — poor metabolisers get poor analgesia; ultrarapid metabolisers risk toxicity), irinotecan → SN-38.
5. **Active transport and drug interactions** — probenecid blocks OAT-mediated secretion of penicillins and cidofovir; cimetidine inhibits OCT/MATE, raising metformin levels modestly.
6. **TDM targets to memorise** — gentamicin/tobramycin trough <2 mg/L (once-daily: undetectable at 24 h); vancomycin trough 10–20 mg/L; digoxin 0.5–2 ng/mL; lithium 0.6–1.2 mmol/L; phenytoin 10–20 µg/mL; theophylline 10–20 mg/L.

#### Advanced Traps and Exceptions

| Scenario | Apparent rule | True behaviour | Why students miss it |
|---|---|---|---|
| High Vd drug with high CL | Long t½ | t½ may be normal (t½ = 0.693 Vd/CL) | Forgetting Vd and CL co-vary |
| 99% protein-bound drug | Slow elimination | Elimination unchanged unless CL of free fraction changes | Mis-attributing binding to clearance |
| Doubling infusion rate | Doubles Css linearly | True only at steady state with linear kinetics | Stopping infusion early and measuring |
| Renal failure with low-Vd drug | Big t½ change | Modest t½ change because Vd small | Over-extrapolating CL fall to t½ |
| Grapefruit juice + simvastatin | Toxicity warning | AUC ↑ 10–16× via gut CYP3A4 inhibition | Assuming food interactions are minor |

> 💡 **High-Yield Revision Hook:** When a vignette gives two plasma levels at two times, derive k from ln(C₁/C₂)/(t₂−t₁), then CL = k × Vd, then MD = CL × Ctarget × τ / F. Reverse-engineering is faster than memorising every formula.

#### Integration with Adjacent Topics

- **Pharmacodynamics** — F and Css determine the concentration reaching receptors; efficacy (Emax) and potency (EC50) are pharmacodynamic parameters that join pharmacokinetics through the dose–concentration–effect triad.
- **Therapeutic drug monitoring** — applies only to drugs with narrow therapeutic index, non-linear kinetics, or unpredictable CL (phenytoin, aminoglycosides, vancomycin, digoxin, lithium, theophylline, cyclosporine).
- **Clinical toxicology** — elimination enhancement (urinary alkalinisation for salicylates, haemodialysis for methanol/ethylene glycol/lithium) depends on Vd < 1 L/kg and low protein binding.

#### Advanced Practice Prompts

1. A patient on phenytoin 300 mg/day has Cp = 8 µg/mL. The dose is increased to 400 mg/day and Cp rises to 22 µg/mL with signs of toxicity. Using Km = 6 µg/mL and Vmax ≈ 500 mg/day at this Vd, calculate the dose that would yield Cp = 15 µg/mL (steady state).
2. A 60-kg patient with CL_cr = 25 mL/min requires vancomycin. Normal CL is 70 mL/min, Vd = 0.7 L/kg, target trough = 15 mg/L, τ = 12 h. Compute the adjusted maintenance dose and predict time to steady state.

---

## Continue your study

- **[View this topic in your INI CET (AIIMS PG) roadmap](/roadmap/?exam=ini-cet&duration=1mo)** — see where "Pharmacokinetics (ADME)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ini-cet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[INI CET (AIIMS PG) exam overview](/exams/ini-cet/)** — pattern, eligibility, and syllabus
- **[All Pharmacology notes](/notes/ini-cet/pharmacology/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
