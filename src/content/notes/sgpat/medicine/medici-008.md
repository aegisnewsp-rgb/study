---
exam: sgpat
examName: Saudi GP Board
subject: medicine
subjectName: Medicine
topic: medici-008
topicName: Study Designs and the Evidence Pyramid
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Study Designs and the Evidence Pyramid

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Evidence-Based Medicine (EBM)** integrates the best available research evidence with clinical expertise and patient values to guide primary-care decisions. The **hierarchy of evidence** ranks **systematic reviews** and **meta-analyses** of **RCTs** at the top, descending through individual RCTs, cohort studies, case-control studies, cross-sectional surveys, and case reports. A clinical question is structured using the **PICO framework** (Population, Intervention, Comparison, Outcome). Diagnostic test performance is read off a **2×2 table**: **Sensitivity = TP/(TP+FN)** rules out disease when negative (SnNout), while **Specificity = TN/(TN+FP)** rules it in when positive (SpPin). **NNT = 1/ARR** quantifies treatment benefit. Two high-yield exam pointers: (1) **cohort studies yield Relative Risk**, **case-control studies yield Odds Ratio**; (2) a non-significant *p*-value means absence of evidence, not evidence of absence — always check the **confidence interval**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Study Designs and the Evidence Pyramid
Each design answers a different question and carries a distinct risk of **bias**. **RCTs** randomise participants to intervention vs control, balancing confounders and supporting causal inference. **Cohort studies** follow exposed and unexposed groups forward in time to calculate **incidence** and **Relative Risk (RR = incidence_exposed / incidence_unexposed)**. **Case-control studies** start with diseased vs non-diseased subjects and look backward for exposure, producing an **Odds Ratio (OR = ad/bc)**; they are efficient for rare diseases but cannot directly give incidence. **Cross-sectional studies** measure exposure and disease simultaneously at one time point, yielding **prevalence** rather than incidence.

#### Diagnostic Test Appraisal (2×2 Table)
| Test result | Disease + | Disease − |
|---|---|---|
| Positive | TP | FP |
| Negative | FN | TN |

- **Sensitivity** = TP/(TP+FN) — proportion of diseased correctly identified.
- **Specificity** = TN/(TN+FP) — proportion of non-diseased correctly identified.
- **PPV** = TP/(TP+FP) and **NPV** = TN/(TN+FN) depend on disease prevalence in the tested population.

#### Measures of Treatment Effect
The **Absolute Risk Reduction (ARR)** = control event rate − experimental event rate. **NNT = 1/ARR** tells the clinician how many patients must be treated for one additional patient to benefit. **Relative Risk Reduction (RRR)** looks larger than ARR and is often misreported in promotional material.

#### Biostatistics Essentials
The **p-value** is the probability of observing the data (or more extreme) assuming the null hypothesis is true; *p* < 0.05 is the conventional threshold but is not a measure of effect size. A **95% confidence interval (CI)** provides a range of plausible values for the true effect — narrow intervals reflect precision, and intervals crossing 1.0 (for RR/OR) or 0 (for mean differences) indicate non-significance. **Intention-to-treat analysis** preserves randomisation by analysing participants in their assigned group regardless of crossover or dropout.

#### Critical Appraisal Steps
1. **Validity** — appropriate design, randomisation, blinding, complete follow-up.
2. **Importance** — magnitude and precision of the effect.
3. **Applicability** — match between study population and the Saudi primary-care patient.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bias, Confounding, and Causation
**Selection bias** distorts who enters the study (e.g. healthy-worker effect in occupational cohorts). **Information/recall bias** distorts how exposures are measured — particularly problematic in case-control designs relying on memory. **Confounding** occurs when a third variable influences both exposure and outcome (e.g. smoking confounding the alcohol–cancer relationship); it is controlled by randomisation, restriction, matching, stratification, or multivariate regression. **Publication bias** selectively favours positive results, inflating effect estimates in meta-analyses — assessed by funnel plots and Egger's test.

#### Screening Concepts
Screening tests require higher sensitivity than confirmatory tests because the goal is to miss no cases. **Lead-time bias** falsely extends apparent survival by earlier diagnosis without altering mortality. **Length-time bias** over-represents slowly progressive cases in prevalence-based screening studies. Wilson and Jungner criteria guide whether screening is justified in a Saudi MoH primary-care context (e.g. diabetes, breast cancer).

#### Worked Example
A screening mammography study of 10,000 women: 200 have breast cancer (180 test positive, 20 false negative); among the 9,800 without cancer, 980 false positive. **Sensitivity = 180/200 = 90%**; **Specificity = 8,820/9,800 = 90%**; **PPV = 180/(180+980) = 15.5%**; **NPV = 8,820/8,840 = 99.8%**. Even with strong sensitivity and specificity, PPV is modest because prevalence is only 2%.

#### Common Mistakes
- Reporting RRR instead of ARR inflates perceived benefit; always calculate **NNT**.
- Applying **OR** as if it were **RR** in cohort studies overestimates risk when outcomes are common (>10%).
- Treating *p* > 0.05 as "no effect" ignores study power and CI width.

#### Practice Prompts
1. A cohort study of 1,000 statin users and 1,000 non-users records 30 vs 60 MIs over 5 years. Calculate RR, ARR, RRR, and NNT.
2. From the 2×2 data above (180 TP, 20 FN, 980 FP, 8,820 TN), explain why PPV would rise if the same test were applied to a high-risk clinic where prevalence is 20%.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
