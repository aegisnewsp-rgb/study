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
lastUpdated: "2026-07-28"
---

# Pharmacokinetics (ADME)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your INI CET (AIIMS PG) exam.

**Pharmacokinetics** quantifies what the body does to a drug, summarized by the **ADME** framework. The four governing parameters — **bioavailability (F), volume of distribution (V_d), clearance (CL), and half-life (t½)** — drive nearly every PG-level numerics question.

- **First-order kinetics** governs most drugs at therapeutic doses; **zero-order kinetics** applies to ethanol, phenytoin, high-dose aspirin, and methotrexate.
- **t½ = 0.693 × V_d / CL** — altering V_d (e.g., by changing body composition) or CL (renal/hepatic impairment) directly changes dosing interval.
- **Loading dose = (C_target × V_d) / F**; **maintenance dose = CL × C_target × τ / F**.
- Hepatic metabolism phases: **Phase I** (CYP450-mediated oxidation/reduction) → **Phase II** (conjugation — glucuronidation, sulfation, acetylation).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before INI CET.

#### Core parameters and their clinical meaning

The "four horsemen" of pharmacokinetics form the basis of every dosing calculation in INI CET MCQs.

| Parameter | Symbol | Definition | Typical units |
| --- | --- | --- | --- |
| Bioavailability | F | Fraction of drug reaching systemic circulation unchanged | 0–1 (fraction) or % |
| Volume of distribution | V_d | Apparent volume needed to contain total drug at plasma concentration | L or L/kg |
| Clearance | CL | Volume of plasma cleared of drug per unit time | mL/min or L/h |
| Half-life | t½ | Time for plasma concentration to fall by 50% | hours |

#### Kinetics order and saturation behaviour

**First-order kinetics** (linear) means a constant *fraction* of drug is eliminated per unit time — CL is constant, t½ is independent of dose. **Zero-order kinetics** (non-linear) means a constant *amount* is eliminated per unit time — CL falls as concentration rises, and t½ lengthens with dose.

Drugs following zero-order kinetics at clinical doses:

- **Phenytoin** — therapeutic window 10–20 µg/mL; saturable CYP2C9/2C19 hydroxylation.
- **Ethanol** — saturable alcohol dehydrogenase pathway.
- **High-dose aspirin** — saturable glycine conjugation.
- **Theophylline, methotrexate** — concentration-dependent saturation kinetics.

> **Mnemonic — "Phenytoin's Friend Eats Aspirin at Midnight":** **P**henytoin, **F**riend = **F**olate inhibitors (MTX), **E**thanol, **A**spirin, **M**idnight = **M**idazolam (CYP3A4 saturable, partial).

#### Worked dosing example

A 70 kg patient needs gentamicin. Target peak C_max = 8 µg/mL; V_d ≈ 0.25 L/kg; F (IV) = 1.

- **Loading dose** = (8 µg/mL × 0.25 L/kg × 70 kg) / 1 = **140 mg**.
- If CL = 5 L/h, then t½ = 0.693 × (0.25 × 70) / 5 = **2.4 h**.

#### Common INI CET traps

- Confusing **steady-state** achievement (3–5 × t½) with **loading dose** purpose (immediate therapeutic level).
- Forgetting **F** in oral dosing formulas — a frequent MCQ distractor.
- Assuming all CYP450 metabolism = Phase I; **CYP-reductase** reactions can be Phase I only.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline for INI CET.

#### Phase I vs Phase II metabolism

| Feature | Phase I | Phase II |
| --- | --- | --- |
| Reaction type | Oxidation, reduction, hydrolysis | Conjugation (glucuronidation, sulfation, acetylation, methylation, glutathione) |
| Key enzymes | CYP450 (CYP3A4 most abundant), FMO, esterases | UGT, SULT, NAT, GST |
| Effect on drug | Often activates prodrugs; can form toxic intermediates (e.g., NAPQI from paracetamol) | Generally inactivates and increases water solubility for excretion |
| Genetic polymorphism | CYP2D6, CYP2C19 (poor/ultrarapid metabolizers) | NAT2 (slow/fast acetylators — isoniazid, hydralazine, procainamide) |

#### Clearance physiology and dosing in organ dysfunction

Total CL = **CL_hepatic + CL_renal + CL_other**. Hepatic clearance follows the **well-stirred model**: CL_h = Q_h × f_u × CL_int / (Q_h + f_u × CL_int), where Q_h is hepatic blood flow (~1.5 L/min), f_u is unbound fraction, and CL_int is intrinsic clearance.

In **renal impairment**, dose adjustment factor = 1 − (f_e × (1 − CrCl_normal / CrCl_patient)), where f_e is fraction excreted unchanged. INI CET repeatedly tests this with **digoxin, aminoglycosides, vancomycin, and lithium**.

#### Practice prompts

1. A 60-year-old patient with creatinine clearance 30 mL/min is started on amikacin. How will you adjust the maintenance dose if the usual adult dose assumes CrCl 100 mL/min and f_e for amikacin ≈ 0.95?
2. A patient on chronic phenytoin therapy develops toxicity after starting fluconazole. Identify the mechanism, the CYP isoform involved, and the expected change in V_d and t½.

> **Exam strategy:** INI CET questions on pharmacokinetics cluster around **dosing calculations (20%), kinetics order (15%), and CYP-mediated interactions (25%)**. Commit the four formulas and the zero-order mnemonic to memory — they appear at least once in every recent paper.

## Continue your study

- **[View this topic in your INI CET (AIIMS PG) roadmap](/roadmap/?exam=ini-cet&duration=1mo)** — see where "Topic 1" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ini-cet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[INI CET (AIIMS PG) exam overview](/exams/ini-cet/)** — pattern, eligibility, and syllabus
- **[All Pharmacology notes](/notes/ini-cet/pharmacology/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
