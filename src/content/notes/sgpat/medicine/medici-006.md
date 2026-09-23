---
exam: sgpat
examName: Saudi GP Board
subject: medicine
subjectName: Medicine
topic: medici-006
topicName: The 2×2 Table Foundation
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# The 2×2 Table Foundation

### 🟢 Lite — Quick Review (1h–1d)
> The single fact that drives every calculation here is cell position: rows hold exposure, columns hold disease.

The 2×2 contingency table cross-classifies any study group into four mutually exclusive cells — **a** (exposed + diseased), **b** (exposed + non-diseased), **c** (unexposed + diseased), **d** (unexposed + non-diseased). Every measure of association and diagnostic validity in the SCFHS GP Board syllabus is just an arithmetic rearrangement of these four letters.

| Measure | Formula | What it answers |
|---|---|---|
| Sensitivity | a / (a + c) | Diseased people who test positive |
| Specificity | d / (b + d) | Non-diseased people who test negative |
| PPV | a / (a + b) | Positive-test probability of disease |
| NPV | d / (c + d) | Negative-test probability of no disease |
| Risk Ratio | [a/(a+b)] ÷ [c/(c+d)] | Cohort studies |
| Odds Ratio | (a × d) / (b × c) | Case-control studies |

> 💡 **High-Yield Memory Hook:** **"Rows = Risk factor, Columns = Condition."** Then read column totals down for sensitivity/specificity and row totals across for PPV/NPV — the denominator tells you what is fixed.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Sensitivity and specificity are fixed; PPV and NPV move with prevalence — that single sentence decides half the exam stems.

#### Orientation and Cell Logic

Rows carry exposure status (exposed above, unexposed below); columns carry disease status (diseased left, non-diseased right). Flipping this orientation silently swaps sensitivity with specificity and ruins every downstream calculation. Column totals (a + c) and (b + d) sum the diseased and the non-diseased respectively — these denominators anchor sensitivity and specificity because they fix the disease status. Row totals (a + b) and (c + d) sum the exposed and unexposed — they anchor PPV, NPV, RR, and attributable risk because they fix the exposure status.

#### Diagnostic vs Aetiological Measures

Sensitivity and specificity are intrinsic test properties, dimensionless proportions, and remain stable across populations with different prevalence. PPV and NPV, in contrast, are prevalence-dependent: as prevalence rises, PPV climbs and NPV falls for the same test. In low-prevalence screening contexts (e.g., community TB screening in Saudi Arabia), a positive result may carry a PPV below 50% even with sensitivity and specificity both above 90%.

#### Study Design Determines the Measure

Cohort studies track exposure → outcome and yield Risk Ratio directly because incidence can be measured. Case-control studies sample on disease status, so incidence cannot be calculated; Odds Ratio is the valid measure. The Odds Ratio approximates the Risk Ratio only under the **rare disease assumption** — typically when prevalence is below 10%. When the outcome is common (e.g., diabetes in older Saudi primary-care cohorts), the OR will overestimate the RR, and that overestimation is itself a tested exam point.

| Design | Sampling axis | Preferred measure | Formula used |
|---|---|---|---|
| Cohort | by exposure | Risk Ratio | [a/(a+b)] ÷ [c/(c+d)] |
| Case-control | by disease | Odds Ratio | (a × d) / (b × c) |
| Cross-sectional | whole population | Prevalence ratio | (a + c) / (a + b + c + d) |

#### Worked Exam-Style Resolution

A SCFHS-style stem presents this completed table from a screening evaluation of 1,000 adults for Type 2 Diabetes using HbA1c ≥ 6.5%:

|  | Diabetic (D+) | Non-diabetic (D−) |
|---|---|---|
| **Test +** | a = 90 | b = 60 |
| **Test −** | c = 10 | d = 840 |

Step 1 — Sensitivity: a / (a + c) = 90 / (90 + 10) = 90 / 100 = **0.90 (90%)**. The denominator is the column total of diseased patients.

Step 2 — Specificity: d / (b + d) = 840 / (60 + 840) = 840 / 900 ≈ **0.933 (93.3%)**.

Step 3 — PPV: a / (a + b) = 90 / (90 + 60) = 90 / 150 = **0.60 (60%)**. Notice that even a strong test gives a moderate PPV because the disease prevalence in this group is only 100 / 1,000 = 10%.

Step 4 — NPV: d / (c + d) = 840 / (10 + 840) = 840 / 850 ≈ **0.988 (98.8%)**. The high NPV reflects the low prevalence.

Step 5 — Likelihood Ratio for a positive test: LR+ = Sensitivity / (1 − Specificity) = 0.90 / (1 − 0.933) = 0.90 / 0.067 ≈ **13.4**. A LR+ above 10 is conventionally considered to generate a large shift from pre-test to post-test probability.

> ⚠️ **Examiner Trap:** Candidates who compute PPV using the diseased column total (90 / 100) report 90% and call it "the chance the patient has diabetes given a positive test." That is sensitivity, not PPV. PPV's denominator is the row total of test-positives, not the column total of the diseased.

---

### 🔴 Extended — Deep Study (3mo+)

> Where Standard stops at arithmetic, Extended begins at where the arithmetic misleads.

#### Boundary Conditions and Mathematical Edges

- When a cell equals zero, the Odds Ratio becomes zero or undefined and the standard log-OR confidence interval collapses. The **Haldane–Anscombe correction** adds 0.5 to every cell before calculating, preserving continuity for the natural-log transform used in 95% CI construction: ln(OR) ± 1.96 × √(1/a + 1/b + 1/c + 1/d).
- Sensitivity and specificity mathematically cannot both reach 100% when the test is imperfect, but they can be traded off along a **Receiver Operating Characteristic (ROC) curve**. The area under that curve (AUC) summarises discriminative ability and is itself a frequently tested concept adjacent to the 2×2 table.
- When prevalence approaches 100%, PPV saturates toward 1 and NPV collapses toward 0 — a counterintuitive but clinically important edge in high-prevalence clinic populations.
- When prevalence approaches 0%, NPV saturates toward 1 and PPV collapses toward 0 — the screening paradox where a "good" test produces mostly false positives.

#### Connections to Adjacent Topics

- **Attributable Risk** = [a/(a+b)] − [c/(c+d)], the absolute excess risk in the exposed group; its population analogue is the **Population Attributable Risk**, which incorporates prevalence.
- **Number Needed to Harm (NNH)** = 1 / Attributable Risk in cohort contexts; an OR-derived NNH must be flagged as approximate.
- **Fagan's nomogram** uses sensitivity and specificity (via likelihood ratios) to convert pre-test probability into post-test probability — the practical clinical application of the same four cells.
- **Mantel–Haenszel** stratification handles confounders by pooling stratum-specific ORs; same 2×2 layout repeated across each stratum.

#### Common Mistakes and Advanced Traps

1. Reading the wrong row total — using the diseased column as the denominator for PPV (an extremely frequent stem error that yields a falsely reassuring number).
3. Choosing OR for a cohort design with a common outcome and reporting it as equivalent to RR.
4. Forgetting that Sensitivity and Specificity are properties of the test, not the disease — moving the test to a higher-prevalence clinic raises PPV without changing sensitivity at all.
5. Confusing **incidence** (new cases / population at risk over time) with **prevalence** (existing cases / total population at a point in time); only prevalence can be read directly from a cross-sectional 2×2 cell count.

#### Advanced Practice Prompts

1. A screening programme reports Sensitivity 0.85 and Specificity 0.90. In a community with 2% prevalence, what PPV do you expect? Apply Bayes' theorem directly using the four cells reconstructed from a hypothetical cohort of 10,000 to verify numerically.
2. A case-control study of bladder cancer yields a = 200, b = 50, c = 80, d = 170. Calculate the OR, then state whether the rare-disease assumption holds and whether OR ≈ RR is justified. Apply the Haldane–Anscombe correction to demonstrate its effect on the estimate.

---

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "The 2×2 Table Foundation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Medicine notes](/notes/sgpat/medicine/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
