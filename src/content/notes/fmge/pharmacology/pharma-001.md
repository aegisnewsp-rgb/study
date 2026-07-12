---
exam: fmge
examName: FMGE
subject: pharmacology
subjectName: "Pharmacology"
topic: pharma-001
topicName: "General Pharmacology"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-12"
---

# General Pharmacology

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your FMGE.

General Pharmacology is the umbrella covering **pharmacokinetics** (ADME — Absorption, Distribution, Metabolism, Excretion) and **pharmacodynamics** (receptor-level drug action). Master these five formulas because FMGE expects numerical fluency, not just definitions.

| Parameter | Formula | Clinical anchor |
|---|---|---|
| Volume of distribution (Vd) | Dose (IV) / Plasma Css | High Vd = lipophilic drug, sequestered in tissue |
| Half-life (t½) | 0.693 × Vd / Cl | Predicts time to steady state (≈4–5 × t½) |
| Therapeutic Index | TD50 / ED50 | Digoxin, lithium, warfarin → low TI, needs monitoring |
| Loading dose | Vd × Target Cp / F | Used when t½ is long (amiodarone, digoxin) |
| Maintenance dose | Css × Cl × τ / F | Keeps plateau within the therapeutic window |

- **Agonist** = affinity + intrinsic activity; **antagonist** = affinity only (zero intrinsic activity).
- **Competitive antagonists** shift the dose–response curve rightward (surmountable); **non-competitive** lower the maximum response (insurmountable).
- Drug nomenclature trap: the **generic (INN) name** is universal; the brand name is manufacturer-specific.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Pharmacokinetics — what the body does to the drug

The ADME sequence dictates plasma concentration. **Bioavailability (F)** is the fraction of an oral dose reaching systemic circulation after surviving first-pass hepatic metabolism; F = 1 for IV doses, the gold reference. A drug like **propranolol** has low oral F because of extensive first-pass loss, so oral doses are multiples of the IV dose.

**Volume of distribution (Vd)** is an apparent, not anatomical, volume — calculated as Dose / Plasma concentration. A Vd larger than total body water (~42 L in a 70 kg adult) implies extensive tissue binding, as seen with chloroquine, digoxin, and amiodarone.

> Most clinical drugs follow **first-order kinetics** — a fixed fraction eliminated per unit time. **Zero-order kinetics** (ethanol, high-dose phenytoin, salicylates) eliminates a fixed amount per unit time, which is why their plasma levels rise disproportionately after a small dose increase.

Clearance (Cl) integrates hepatic and renal elimination; half-life t½ = 0.693 × Vd / Cl. Because t½ is the single most practical number, it sets both the dosing interval and the time to steady state (≈4–5 × t½).

#### Pharmacodynamics — what the drug does to the body

Drugs act through **receptors** (proteins, ion channels, enzymes, nucleic acids). **Affinity** is the attraction between drug and receptor; **intrinsic activity** is the ability to trigger a response once bound. **Potency** refers to the dose producing a given effect (EC50), while **efficacy** is the maximum response (Emax).

| Antagonist type | Dose–response effect | Example |
|---|---|---|
| Competitive (reversible) | Parallel rightward shift; Emax unchanged | Atropine at muscarinic receptors |
| Non-competitive | Maximum response depressed | Phenoxybenzamine at α-receptors (irreversible) |
| Partial agonist | Lower Emax than full agonist; can antagonise a full agonist in same system | Buprenorphine at μ-opioid receptors |

#### Adverse reactions and monitoring

- **Type A** reactions are **augmented**, dose-dependent, and predictable (e.g., bleeding with warfarin).
- **Type B** reactions are **bizarre**, idiosyncratic, and unpredictable (e.g., malignant hyperthermia with halothane).
- Drug interactions split into **pharmacokinetic** (one drug alters another's ADME — probenecid blocks penicillin secretion) and **pharmacodynamic** (combined receptor effect — β-lactam + aminoglycoside synergy).

#### FMGE-style question patterns

- "Drug X has Vd = 500 L; identify the likely property" — think lipophilic, tissue-bound.
- "Calculate maintenance dose given Cl, Css, τ, F" — a direct arithmetic MCQ.
- "Agonist added shifts curve right and lowers Emax" — that is a **partial agonist** acting against a full agonist.
- "Identify zero-order kinetics drug" — ethanol, phenytoin (high dose), salicylate, heparin (at high dose).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and mechanisms worth remembering

**Receptor regulation** runs in two directions. Chronic agonist exposure typically causes **down-regulation** (tolerance, e.g., opioids, β-agonists), whereas chronic antagonist exposure can cause **up-regulation**, producing rebound hyperactivity on sudden withdrawal — the classic example being rebound tachycardia and angina after abrupt β-blocker stoppage.

**Therapeutic index** is a population statistic, not a patient-specific guarantee. Digoxin (TI ≈ 2–3), lithium (TI ≈ 2–3), warfarin, and aminoglycosides all demand **therapeutic drug monitoring (TDM)**. Even a "safe" drug like penicillin can be lethal in an allergic individual — Type B reactions ignore TI entirely.

> The **therapeutic window** plotted as plasma concentration on the x-axis versus response on the y-axis is a better clinical tool than TI alone, because it directly shows where efficacy meets toxicity for that patient.

#### Connections to system pharmacology

Every system-based topic — ANS, CVS, CNS, antimicrobials — leans on General Pharmacology vocabulary. When the paper asks "mechanism of action of ondansetron," the answer uses **competitive antagonism at 5-HT3 receptors**. When it asks "why does rifampicin fail as oral contraception," the answer uses **enzyme induction accelerating steroid metabolism** — a pharmacokinetic interaction. Mastery of ADME, dose–response curves, and antagonism types therefore multiplies marks across the entire paper.

#### Common errors examiners exploit

- Equating **potency with efficacy** — morphine is less potent than fentanyl but both have high efficacy at μ-receptors.
- Forgetting that **first-pass metabolism** only applies to orally absorbed drugs — IV, IM, SC, transdermal, and sublingual routes bypass it.
- Treating **all competitive antagonists as reversible** — phenoxybenzamine and aspirin are irreversible covalent binders.
- Misapplying **half-life rules to zero-order drugs** — t½ lengthens as concentration rises for phenytoin, making dose escalation dangerous.

#### Worked micro-example

A 60 kg patient needs digoxin; target plasma concentration = 0.0015 mg/L, Vd ≈ 7 L/kg, F (oral) ≈ 0.7.
Loading dose = Vd × Target Cp / F = (7 × 60 × 0.0015) / 0.7 = 0.63 / 0.7 ≈ **0.9 mg**.

Maintenance dose depends on Cl (≈ 70 mL/min for a normal adult converted to L/h = 4.2 L/h) and τ = 24 h:
MD = (Css × Cl × τ) / F = (0.0015 × 4.2 × 24) / 0.7 ≈ **0.216 mg/day** → rounded to **0.25 mg/day**.

#### Practice prompts

1. A drug has EC50 = 1 µg/mL and Emax = 100 %; another has EC50 = 10 µg/mL and Emax = 60 %. Compare their **potency** and **efficacy**, and predict the curve shift if a non-competitive antagonist is added.
2. Theophylline clearance falls in heart failure. Using t½ = 0.693 × Vd / Cl, explain how the dosing interval should change, and identify the kinetic order most likely governing its elimination at therapeutic levels.

---

## Continue your study

- **[View this topic in your FMGE roadmap](/roadmap/?exam=fmge&duration=1mo)** — see where "General Pharmacology" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=fmge&duration=1d)** — 1-day sprint covering highest-weight topics
- **[FMGE exam overview](/exams/fmge/)** — pattern, eligibility, and syllabus
- **[All Pharmacology notes](/notes/fmge/pharmacology/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
