---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-006
topicName: Drug-Receptor Interactions and Pharmacodynamics
weight: 3
country: southafrica
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-12"
---

# Drug-Receptor Interactions and Pharmacodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Pharmacodynamics** studies how a drug produces its biochemical effect after binding a receptor. A **receptor** is a specific protein (GPCR, ion channel, enzyme, or nuclear receptor) whose conformation changes when a **ligand** binds, triggering a biological response.

- **Agonist** binds and activates the receptor (has affinity + intrinsic activity).
- **Antagonist** binds but produces no response (has affinity, zero intrinsic activity).
- **Affinity** = how tightly the drug binds (reflected in K_D).
- **Efficacy** = the maximum response (E_max) the drug can produce.
- **Potency** = the dose needed to produce a given effect (reflected in EC_50).

| Must-know formula | Meaning |
| --- | --- |
| Fraction bound = [D] / ([D] + K_D) | Clark occupancy; K_D = concentration at 50% occupancy |
| TI = TD_50 / ED_50 | Therapeutic index; larger = safer margin |

Competitive antagonists shift the dose–response curve **right** (↑EC_50, E_max unchanged). Non-competitive antagonists **lower E_max**.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Receptor binding and the law of mass action
Drug–receptor binding is reversible and governed by mass action: [D] + [R] ⇌ [DR]. The dissociation constant K_D = k_off / k_on (mol/L) is the drug concentration occupying 50% of receptors at equilibrium. A low K_D means high **affinity**; only a small dose is needed to occupy half the receptors. The Clark occupancy equation assumes each bound receptor produces an equal unit of response.

#### Agonist spectrum and intrinsic activity
Intrinsic activity (α) ranges from 0 (pure antagonist) to 1 (full agonist). A **partial agonist** has α between 0 and 1 and produces a lower E_max than a full agonist even at 100% occupancy; in the presence of a full agonist it can act as a functional antagonist. An **inverse agonist** produces a negative response at constitutively active receptors (α < 0). **Allosteric modulators** bind outside the orthosteric site to enhance (positive) or inhibit (negative) the response without directly activating the receptor.

#### Dose–response relationships
The Hill equation describes graded responses: E = E_max × [D]ⁿ / ([D]ⁿ + EC_50ⁿ), where n (Hill coefficient) reflects cooperativity. n > 1 indicates positive cooperativity (steeper curve); n = 1 follows simple Michaelis–Menten kinetics.

| Parameter | Reflects | Affected by competitive antagonist? |
| --- | --- | --- |
| EC_50 / ED_50 | Potency | Yes — increases |
| E_max | Efficacy | No — unchanged |
| Slope (n) | Cooperativity | No — unchanged |

#### Antagonism and the Schild equation
- **Competitive (surmountable):** antagonist competes at the orthosteric site; increasing agonist dose overcomes the block; curve shifts right, E_max preserved.
- **Non-competitive (insurmountable):** antagonist binds irreversibly or at an allosteric site; E_max falls and cannot be restored by more agonist.

The Schild equation, pA2 = log(DR − 1) − log[B], yields the antagonist's affinity (pA2 = −log[A2]); a higher pA2 denotes a more potent antagonist.

#### Therapeutic index and safety
TI = TD_50 / ED_50 estimates the margin between effective and toxic doses in a population. Drugs with narrow TI (digoxin, warfarin, lithium) require plasma-level monitoring regardless of a numerically low ratio.

- ED_50 and TD_50 are **median** population values, not individual safe doses.
- A high TI does not protect against idiosyncratic reactions or patient-specific factors (age, renal function, genetics).
- Receptor **down-regulation** (tachyphylaxis, tolerance) follows sustained agonist exposure; chronic antagonist use can cause **up-regulation** and rebound hypersensitivity on withdrawal.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Spare receptors and the occupancy–response gap
Maximal response in many papers occurs at receptor occupancies well below 100%. These **spare receptors** buffer the system: even if some receptors are lost (e.g. by irreversible antagonism or disease), full E_max can persist until occupancy drops below the threshold. Consequently, EC_50 for response is in standard papers much lower than the K_D for binding.

#### Worked micro-example: pA2 from a Schild experiment
An agonist EC_50 shifts from 1 × 10⁻⁷ M to 4 × 10⁻⁷ M when 1 × 10⁻⁸ M antagonist is present. Dose ratio DR = 4. Applying Schild: pA2 = log(4 − 1) − log(10⁻⁸) = log 3 + 8 ≈ 0.477 + 8 = **8.48**, so the antagonist's A2 ≈ 3.3 × 10⁻⁹ M (high affinity).

#### Common mistakes in the SAPC setting
- Conflating **potency** (EC_50) with **efficacy** (E_max): morphine is less potent but not less efficacious than codeine at equimolar receptor occupation.
- Inverting pA2 logic: a *larger* pA2 means a *more potent* antagonist (more negative log of a smaller molar A2).
- Assuming TI ≥ 10 guarantees safety — narrow-TI drugs such as aminoglycosides still demand monitoring.
- Forgetting that **non-competitive** antagonism lowers E_max, while **competitive** antagonism only shifts EC_50 rightward.

| Antagonist type | EC_50 | E_max | Surmountable? |
| --- | --- | --- | --- |
| Competitive | ↑ | Unchanged | Yes (by ↑ agonist dose) |
| Non-competitive | Unchanged or ↑ | ↓ | No |
| Allosteric (negative) | ↑ | ↓ | In many papers no |

#### Adjacent topics and exam strategy
This topic links directly to **Pharmacokinetics** (ADME shapes [D] at the receptor), **Signal transduction** (second messengers for GPCRs), and **Adverse drug reactions** (TI and receptor regulation). In SAPC papers (3% weighting), expect MCQs defining agonist classes, dose–response curve interpretation, and short EC_50 or TI calculations — practise sketching log-dose curves and annotating shifts caused by each antagonist class.

1. A partial agonist added to a full agonist will **lower** the observed E_max — true or false?
2. Calculate TI for a drug with ED_50 = 10 mg/kg and TD_50 = 300 mg/kg, and comment on its safety margin.

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Drug-Receptor Interactions and Pharmacodynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
