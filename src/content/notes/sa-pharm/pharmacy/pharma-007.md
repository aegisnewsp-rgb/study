---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-007
topicName: Pharmacokinetics — Elimination
weight: 3
country: southafrica
generated: "2026-04-09T20:00:00"
lastUpdated: "2026-09-15"
---

# Pharmacokinetics — Elimination

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Elimination** is the irreversible removal of drug from the body, covering **biotransformation** (mainly liver) plus **excretion** (renal, biliary, pulmonary, salivary, mammary). For SAPC intern-level questions, three relationships do most of the work:

| Equation | Formula | Use in exam |
|---|---|---|
| Clearance | CL = ke × Vd | Predict steady-state exposure |
| Half-life | t½ = 0.693 / ke | Time to reach steady state |
| Steady state | Css = (F × D) / (CL × τ) | Maintenance dosing |

- CL has units of L·h⁻¹ (or mL·min⁻¹); ke has units of h⁻¹; Vd has units of L; t½ has units of h.
- Most therapeutic drugs follow **first-order kinetics**: a constant *fraction* (not amount) is removed per unit time.
- Loading dose depends on Vd, not clearance. Maintenance dose depends on CL.

> 💡 **High-Yield Memory Hook:** "**CL**earance = **k**ill **V**olume" (CL = ke × Vd). For dosing, remember **L**oading = **V**d × target, **M**aintenance = **CL** × target × τ.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core concepts and pathways

Elimination comprises two arms working in parallel: **biotransformation** (Phase I oxidation/reduction/hydrolysis, Phase II conjugation) and **excretion** of parent drug or metabolites. Renal elimination uses three mechanisms — glomerular filtration, active tubular secretion, and passive reabsorption — and is quantified by **CLrenal**. Hepatic elimination is governed by the **well-stirred liver model**: CLhepatic = Q × (fu × CLint) / (Q + fu × CLint), where Q is hepatic blood flow (~1.5 L·min⁻¹), fu is the unbound fraction in plasma, and CLint is the enzyme's intrinsic clearance.

#### Comparison matrix: commonly confused pairs

| Feature | First-order elimination | Zero-order (saturation) elimination |
|---|---|---|
| Rate | Proportional to concentration | Constant rate regardless of concentration |
| Kinetic profile | Linear; t½ is constant | Non-linear; t½ increases with dose |
| Typical drugs | Most drugs at therapeutic dose | Ethanol, phenytoin, high-dose aspirin |
| Dosing implication | Predictable Css | Therapeutic drug monitoring essential |
| AUC vs dose | AUC proportional to dose | AUC increases disproportionately |

| Feature | Loading dose | Maintenance dose |
|---|---|---|
| Determines | How quickly target Cp is reached | How much drug is given per interval |
| Depends on | Vd and target concentration | CL, F, target Css, and τ |
| Equation | LD = (Vd × Ctarget) / F | MD = (CL × Css × τ) / F |
| Units | mg | mg per interval |

#### 🎯 Exam-Level Worked Problem

**Question:** A 70 kg patient receives gentamicin 80 mg IV every 8 hours. Reported pharmacokinetics: Vd = 0.25 L·kg⁻¹, ke = 0.30 h⁻¹. Calculate (a) the elimination half-life, (b) total body clearance, and (c) the expected peak steady-state concentration if F = 1 and infusion is given as a 30-minute infusion.

#### Solution:

(a) Vd = 0.25 × 70 = **17.5 L**
t½ = 0.693 / ke = 0.693 / 0.30 = **2.31 h**

(b) CL = ke × Vd = 0.30 × 17.5 = **5.25 L·h⁻¹**
In mL·min⁻¹: 5.25 × 1000 / 60 ≈ **87.5 mL·min⁻¹**

(c) At steady state, rate in = rate out, so average Css,avg = (F × D) / (CL × τ) = (1 × 80) / (5.25 × 8) = **1.905 mg·L⁻¹**

> ⚠️ **Examiner Trap:** Students often divide 80 mg by t½ to get clearance — clearance is **not** dose divided by half-life. Always use CL = ke × Vd or CL = F·D/AUC. Also, do not confuse Css,avg with Css,peak; peak requires the infusion duration and a one-compartment bolus-over-time equation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and deeper mechanisms

The **hepatic extraction ratio (E)** classifies drugs into clinically important behaviour groups. For high-E drugs (E > 0.7, e.g. propranolol, lidocaine), CLhepatic ≈ Q and is sensitive to blood flow changes (shock, congestive heart failure). For low-E drugs (E < 0.3, e.g. warfarin, diazepam), CLhepatic ≈ fu × CLint and is sensitive to plasma protein binding and enzyme induction/inhibition.

**Non-linear kinetics** appear when CLint saturates at therapeutic doses. Phenytoin follows Michaelis–Menten elimination: rate = (Vmax × C) / (Km + C). Below Km, kinetics appear first-order; above Km, clearance drops, t½ lengthens, and a small dose increase produces a disproportionately large plasma rise — the classic reason for therapeutic drug monitoring.

**Multi-compartmental drugs** (e.g. aminoglycosides, digoxin) display a distribution phase (α) followed by a terminal elimination phase (β). The reported "half-life" for dosing should use λz, the terminal slope, not ke derived from early plasma points. The SAPC has flagged questions where students use α to set dosing intervals — this overestimates elimination and risks toxicity.

| Parameter | Symbol | Standard SI unit | Dimension |
|---|---|---|---|
| Clearance | CL | L·h⁻¹ (or mL·min⁻¹) | L³·T⁻¹ |
| Volume of distribution | Vd | L | L³ |
| Elimination rate constant | ke / λz | h⁻¹ | T⁻¹ |
| Half-life | t½ | h | T |
| Hepatic blood flow | Q | L·min⁻¹ | L³·T⁻¹ |
| Unbound fraction | fu | dimensionless | — |
| Intrinsic clearance | CLint | mL·min⁻¹·g⁻¹ liver | L³·T⁻¹·M⁻¹ |

#### Common examination pitfalls

1. Confusing CLcr (creatinine clearance, an estimate of GFR) with CLrenal of the drug — drug CLrenal scales with fu and active secretion, not just filtration.
2. Forgetting that obesity increases Vd of lipophilic drugs, lengthening t½ without changing CL.
3. Mixing units: a clearance of 87.5 mL·min⁻¹ equals 5.25 L·h⁻¹ — choose the unit before substituting into Css.
4. Using oral F instead of 1 in IV dosing equations (for IV, F = 1 by definition).
5. Equating AUC0–∞ with Css,avg × τ — they are equal only at true steady state with linear kinetics.

#### Advanced practice prompts

1. A patient with CLcr = 30 mL·min⁻¹ receives a drug that is 90% renally excreted unchanged. If the normal CL is 10 L·h⁻¹ and non-renal CL is unchanged, recalculate the maintenance dose needed to preserve the same Css when the dosing interval is doubled.
2. Phenytoin Vmax = 500 mg·day⁻¹ and Km = 4 mg·L⁻¹. Predict the steady-state Cp at a 300 mg·day⁻¹ dose and explain why the relationship is non-linear.

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Pharmacokinetics — Elimination" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
