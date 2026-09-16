---
exam: ini-cet
examName: INI CET (AIIMS PG)
subject: pharmacology
subjectName: "Pharmacology"
topic: pharma-002
topicName: Absorption Covers the Rate and Extent of Drug
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Absorption Covers the Rate and Extent of Drug

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Drug absorption is the translocation of a drug molecule from its administration site into the systemic circulation. The FDA defines **bioavailability (F)** as both the **rate** and **extent** to which the active ingredient reaches the site of action. Rate is described by Cmax and tmax; extent is captured by the Area Under the Curve (AUC).

| Parameter | Symbol | What it measures | Unit |
|---|---|---|---|
| Extent of absorption | AUC | Total drug reaching circulation | ng·h/mL (or µg·h/mL) |
| Rate of absorption | Cmax | Peak plasma concentration | mg/L |
| Rate of absorption | tmax | Time to reach Cmax | h |
| Bioavailability | F | Fraction absorbed intact | dimensionless (0–1) |
| IV reference standard | F = 1 | 100% (no absorption barrier) | dimensionless |

> 💡 **High-Yield Memory Hook:** **"ACE the Rate, AUC the Extent"** — **A**bsorption **C**max/tmax for rate, **A**rea **U**nder the **C**urve for extent. A bioequivalence study must show both falling within 80–125%.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definition and Framework

Bioavailability integrates two pharmacokinetic dimensions. **Extent** is the total amount of drug that reaches systemic circulation, quantified by AUC using the trapezoidal rule. **Rate** is how quickly it arrives, captured by Cmax (peak height) and tmax (time to peak). A drug can have high extent with slow rate (sustained-release theophylline) or rapid rate with poor extent (insulin orally — destroyed in the gut).

#### Formula Toolbox

| Formula | Variables and SI Units | Clinical Use |
|---|---|---|
| F = (AUC_extravenous / Dose_extravenous) × (Dose_IV / AUC_IV) | AUC in ng·h/mL, Dose in mg, F dimensionless | Absolute bioavailability vs IV |
| F_rel = (AUC_test × Dose_ref) / (AUC_ref × Dose_test) | All ratios dimensionless | Generic vs brand comparison |
| Bioequivalence: 90% CI of log(AUC), Cmax | Ratio unitless, window 0.80–1.25 | FDA generic approval |
| Cmax ≈ (F × Dose) / Vd | Cmax mg/L, F unitless, Dose mg, Vd L | Predicting peak level |
| Henderson–Hasselbalch: pH = pKa + log₁₀([A⁻]/[HA]) | pH, pKa dimensionless | Ion trapping across membranes |
| Fick's diffusion: J = −D·A·(dC/dx) | J mol/(m²·s), D m²/s, A m², dC/dx mol/m⁴ | Driving force for absorption |

#### Lipinski's Rule of Five (Oral Absorption Predictor)

1. Molecular weight ≤ 500 Da.
2. Calculated logP ≤ 5 (lipophilicity).
3. H-bond donors ≤ 5 (–OH and –NH groups).
4. H-bond acceptors ≤ 10 (N and O atoms).
5. Violating ≥2 rules predicts poor oral absorption.

#### Factors Modifying Absorption Rate and Extent

- **Physicochemical:** particle size, salt form, crystal polymorphism, pKa, lipophilicity.
- **Physiological:** gastric emptying, intestinal motility, blood flow at absorption site.
- **Formulation:** immediate-release vs modified-release, enteric coating, excipients.
- **Disease states:** achlorhydria, celiac disease, Crohn's disease, congestive heart failure.

#### Concept Comparison Matrix

| Concept | Rate Measure | Extent Measure | Common Confusion |
|---|---|---|---|
| Bioavailability (F) | Cmax, tmax | AUC | Students equate F with potency |
| Bioequivalence | Cmax ratio | AUC ratio | Required for generic substitution |
| First-pass metabolism | Reduces rate by delaying arrival | Reduces extent by hepatic extraction | Forgotten in oral propranolol, nitroglycerin |
| Henderson–Hasselbalch | Governs absorption rate across pH gradients | Indirectly affects total absorbed fraction | Applied wrong sign for weak bases |

#### 🎯 Exam-Level Worked Problem

**Question:** An oral tablet of drug X (200 mg) yields AUC₀₋∞ = 480 ng·h/mL. The same drug given IV (100 mg) yields AUC₀₋∞ = 600 ng·h/mL. Calculate absolute bioavailability and predict whether a generic formulation showing AUC ratio of 0.92 and Cmax ratio of 1.18 can be declared bioequivalent.

#### Solution:

1. Dose-normalise oral AUC: 480 / 200 = 2.4 ng·h/mL per mg.
2. Dose-normalise IV AUC: 600 / 100 = 6.0 ng·h/mL per mg.
3. Absolute F = 2.4 / 6.0 = **0.40 (40%)**.
4. Bioequivalence needs the **90% confidence interval** of log-transformed AUC and Cmax ratios to lie entirely within 0.80–1.25.
5. Point estimate AUC ratio 0.92 lies within window, but Cmax ratio 1.18 sits at the edge; without the 90% CI bounds provided, bioequivalence **cannot be confirmed** from point estimates alone.

> ⚠️ **Examiner Trap:** Students quote the point estimates (0.92, 1.18) and declare the generic bioequivalent. The FDA criterion requires the **90% CI of log-transformed ratios** (not point estimates) to fall within 0.80–1.25. Point estimates alone are insufficient evidence.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Advanced Traps

| Scenario | Trap | Correct Approach |
|---|---|---|
| IV infusion reaching steady state | F = 1 only if drug enters systemic circulation intact | Extravasation or degradation in IV line reduces F below 1 |
| Drugs with saturable first-pass metabolism | F increases non-linearly with dose | Propranolol, hydralazine show dose-dependent F |
| Active transport (e.g., levodopa) | F can exceed dose-normalised predictions | Carrier saturation at high doses lowers F |
| Chiral drugs with stereoselective absorption | Bioavailability differs per enantiomer | R/S reporting required for regulatory submission |
| Prodrugs (e.g., enalapril → enalaprilat) | Measuring parent vs active metabolite alters F | Bioassay must reflect active moiety |
| Enterohepatic recycling | Secondary AUC peaks mimic re-absorption | Use AUC₀₋∞ from first absorption phase |

#### Mathematical Limits and Boundary Conditions

At the extremes of Fick's law, absorption rate (J) approaches zero when the concentration gradient (dC/dx) flattens — this defines the absorption plateau seen with sustained-release matrices. Conversely, when dC/dx is maximal (immediately post-dose), absorption rate peaks. AUC, however, integrates over time and therefore depends on the **total** drug crossing the membrane, independent of instantaneous rate.

For weak acids at gastric pH 1.5 versus plasma pH 7.4, Henderson–Hasselbalch predicts the ionised fraction shifts by 10^6-fold for a drug with pKa 4.4. The un-ionised fraction crosses the gastric mucosa, but the sheer surface-area advantage of the small intestine (≈200 m² vs stomach 0.05 m²) means most absorption of weak acids still occurs intestinally despite ion trapping.

#### Connection to Adjacent Topics

- **Distribution:** F feeds into steady-state concentration Css = (F × Dose / τ) / CL.
- **Metabolism:** Hepatic extraction ratio (Eh) determines how much oral drug survives first pass.
- **Excretion:** Bioavailability does not predict elimination half-life.
- **Biopharmaceutics Classification System (BCS):** Class I (high solubility, high permeability) drugs have predictable F; Class III/IV require formulation enhancement.

#### Common Mistakes in INI CET

1. Reporting F as a percentage without dose normalisation.
2. Confusing Cmax with bioavailability — a sustained-release product may have equal AUC but lower Cmax.
3. Assuming rectal administration always bypasses first-pass — lower rectal drainage enters systemic, not portal, circulation.
4. Mixing up absolute F (vs IV) with relative F (vs another oral product).

#### Advanced Practice Prompts

1. A drug given orally 100 mg yields AUC = 300 ng·h/mL; the same dose IV gives AUC = 1000 ng·h/mL. If hepatic extraction ratio is 0.70, calculate the fraction absorbed intact and the fraction lost to incomplete absorption. (Answer: F = 0.30; fraction absorbed intact = 0.30 / 0.30 = 1.0 if extraction alone explains loss; otherwise partition loss between gut wall and liver.)
2. Why does sublingual nitroglycerin (F ≈ 0.40) avoid first-pass metabolism while oral nitroglycerin has F < 0.01 despite identical molecule?

---

## Continue your study

- **[View this topic in your INI CET (AIIMS PG) roadmap](/roadmap/?exam=ini-cet&duration=1mo)** — see where "Absorption Covers the Rate and Extent of Drug" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ini-cet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[INI CET (AIIMS PG) exam overview](/exams/ini-cet/)** — pattern, eligibility, and syllabus
- **[All Pharmacology notes](/notes/ini-cet/pharmacology/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
