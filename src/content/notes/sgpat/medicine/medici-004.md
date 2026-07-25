---
exam: sgpat
examName: Saudi GP Board
subject: medicine
subjectName: Medicine
topic: medici-004
topicName: Core measures of disease frequency
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Core measures of disease frequency

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Evidence-Based Medicine (EBM)** in Saudi GP Board Topic 4 is the discipline of converting a primary-care clinical doubt into a searchable question, finding the best external evidence, critically appraising it, and applying it to an individual patient. The framework is **PICO** (Patient/Problem, Intervention, Comparison, Outcome), and the evidence hierarchy ranks **systematic reviews/meta-analyses** above **randomised controlled trials (RCTs)**, which sit above **cohort**, **case-control**, and **cross-sectional** studies.

- **Sensitivity** = TP / (TP + FN); **Specificity** = TN / (TN + FP) — both prevalence-independent.
- **PPV / NPV** change with prevalence; OR ≈ RR only when the outcome is rare (<10%).
- **NNT = 1 / ARR**; a 95% CI crossing the null means the result is not statistically significant.

Exam weight ≈ 3%, mostly single-best-answer MCQs on interpreting a 2×2 table or an abstract.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core measures of disease frequency

**Prevalence** is a snapshot proportion: existing cases divided by the population at that point. **Incidence rate** requires person-time at risk in the denominator and is the only valid measure for *new* events. The relationship **Prevalence ≈ Incidence × Duration** explains why chronic, long-lasting diseases (e.g. diabetes) dominate primary-care workloads even with low incidence.

#### Measures of association

For cohort studies and RCTs, calculate **Relative Risk (RR) = Incidence_exposed / Incidence_unexposed**. For case-control studies, only the **Odds Ratio (OR) = (a×d)/(b×c)** is valid because incidence is unknown. **Absolute Risk Reduction (ARR)** and the derived **NNT = 1/ARR** translate efficacy into something a GP can discuss with a patient.

#### Diagnostic test interpretation

A 2×2 table yields four operating characteristics. Sensitivity and specificity are intrinsic to the test; PPV and NPV shift with prevalence — a useful screening test in a low-prevalence community can yield more false positives than true positives.

| Measure | Formula | Clinical use |
| --- | --- | --- |
| Sensitivity | TP / (TP + FN) | Rule-out: a negative test rules out disease (SnNout) |
| Specificity | TN / (TN + FP) | Rule-in: a positive test rules in disease (SpPin) |
| PPV | TP / (TP + FP) | Probability of disease given a positive test |
| NNT | 1 / ARR | Number of patients to treat to prevent one bad outcome |

#### Hypothesis testing and bias

Set **H₀** (no difference) against **H₁**; **α = 0.05** is the Type I error threshold, **power = 1 − β** is set at 0.80 by convention. Randomisation and blinding counter **selection**, **information**, and **confounding** bias — the three traps most tested in Saudi GP Board MCQs.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Sample size and confidence intervals

For comparing two proportions, **n = [Z_{α/2}√(2p̄q̄) + Z_β√(p₁q₁ + p₂q₂)]² / (p₁ − p₂)²**, with **p̄ = (p₁ + p₂)/2**. For estimating prevalence, **n = Z²·P(1−P) / d²**, where d is the desired margin of error. Underestimating **cluster effects** or **expected dropout (typically 10–20%)** is the single most common reason family-medicine audits finish underpowered.

#### Intention-to-treat vs per-protocol

**Intention-to-treat (ITT)** analyses every randomised patient in their allocated group, preserving randomisation and reflecting real-world effectiveness. **Per-protocol** analyses only adherers, inflating efficacy but inviting confounding by adherence behaviour. SCFHS-aligned critical-appraisal tools (CONSORT for trials, STROBE for observational studies) explicitly grade this distinction.

#### Adjacent topics and exam traps

EBM sits beside **preventive-medicine screening criteria** (Wilson & Jungner) and **clinical-practice guideline appraisal** (AGREE II). Candidates regularly lose marks by (1) quoting RR reduction without ARR/NNT, (2) treating a non-significant p-value as equivalence, or (3) using OR where RR is requested in an RCT stem.

| Bias type | Where it arises | Mitigation |
| --- | --- | --- |
| Selection | Non-random allocation | Randomisation, concealed allocation |
| Information | Differential measurement | Blinding outcome assessors |
| Confounding | Extraneous prognostic factor | Restriction, matching, multivariate adjustment |
| Recall | Case-control interviews | Use objective records |

#### Practice prompts

1. A screening test has 95% sensitivity, 90% specificity, and is applied where disease prevalence is 1%. Calculate NPV and explain why a positive result needs confirmatory testing.
2. An RCT reports RR = 0.70 (95% CI 0.42–1.08). State the point estimate, interpret the CI, and compute NNT if control event rate is 20%.

---

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "Topic 4" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Medicine notes](/notes/sgpat/medicine/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
