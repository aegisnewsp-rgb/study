---
exam: sgpat
examName: Saudi GP Board
subject: medicine
subjectName: Medicine
topic: medici-006
topicName: Topic 6
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-04"
---

# Topic 6

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Evidence-Based Medicine (EBM)** integrates best current research evidence with clinical expertise and patient values to guide primary care decisions. The 2×2 contingency table is the single most-tested framework: it underpins the **odds ratio (OR = ad/bc)** for case-control studies, the **relative risk (RR = incidence in exposed ÷ incidence in unexposed)** for cohort and RCT data, and all four diagnostic measures (**sensitivity, specificity, PPV, NPV**).

Three high-yield numbers to memorise: **ARR** = risk in control − risk in treatment; **NNT = 1/ARR**; **I² statistic** quantifies heterogeneity in a meta-analysis. **Sensitivity** rules **out** disease (SnNout); **specificity** rules **in** (SpPin). A **p-value < 0.05** confirms statistical—but never clinical—significance.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The 2×2 Table Foundation

Every cross-tabulation of an outcome against exposure or disease status produces four cells: **a** (exposed + outcome), **b** (exposed, no outcome), **c** (unexposed + outcome), **d** (unexposed, no outcome). From these you derive all epidemiological and diagnostic indices. In a **case-control study** (outcome first), prevalence is fixed by design so only the **OR** is valid. In a **cohort study** or **RCT** (exposure first), you can compute true incidence, making **RR** and **ARR** the appropriate measures.

#### Measures of Therapeutic Effect

- **RR = [a/(a+b)] / [c/(c+d)]** — ratio of risk; RR = 1 means no effect.
- **ARR** = control event rate − experimental event rate.
- **NNT = 1/ARR** — patients you must treat for one extra patient to benefit (rounded **up** to next whole number).
- **NNH = 1/ARI** — counterpart for harm.

A **95% confidence interval (CI)** that crosses 1.0 means the result is not statistically significant at α = 0.05.

#### Diagnostic Test Evaluation

| Measure | Formula | Clinical Use |
|---|---|---|
| Sensitivity | TP / (TP+FN) | High → rule out (SnNout) |
| Specificity | TN / (TN+FP) | High → rule in (SpPin) |
| PPV | TP / (TP+FP) | Probability of disease given positive test |
| NPV | TN / (TN+FN) | Probability of no disease given negative test |
| LR+ | Sensitivity / (1−Specificity) | >10 = strong rule-in |
| LR− | (1−Sensitivity) / Specificity | <0.1 = strong rule-out |

#### Hierarchy of Evidence and Bias Control

Evidence ranks: **systematic reviews/meta-analyses > RCTs > cohort > case-control > case reports**. RCTs minimise confounding through **randomisation** and **allocation concealment**; **intention-to-treat analysis** preserves randomisation despite dropouts. Observational studies require adjustment for **confounding** via stratification, matching, or multivariable regression.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Critical Appraisal Tools and Meta-Analysis Pitfalls

Systematic reviews follow **PRISMA** reporting standards; RCTs use **CONSORT**; observational studies use **STROBE**; qualitative studies use **SRQR**. Critical appraisal questions for therapy studies (CASP) probe randomisation quality, baseline comparability, blinding of assessors, follow-up completeness, and treatment-effect size with precision.

A **meta-analysis** pools effect estimates, but its validity hinges on **heterogeneity** assessment. The **I² statistic** quantifies the percentage of variability due to between-study differences rather than chance: I² < 25% (low), 25–50% (moderate), 50–75% (substantial), >75% (consider not pooling). A fixed-effect model assumes one true effect; a **random-effects model** is preferred when I² is substantial. **Publication bias**—where positive trials are preferentially published—is screened with funnel plots and Egger's test; a missing bottom-left quadrant of small negative studies suggests bias.

#### Clinical Significance vs Statistical Significance

A large trial may detect a tiny absolute effect (e.g., RR = 0.98, p < 0.001) that is statistically significant but clinically trivial. Always interpret the **point estimate**, the **width of the CI**, and the **NNT** in the context of cost, side effects (NNH), and patient preference.

#### Connections to GP Practice

Saudi GP Board candidates apply these concepts when writing **journal clubs**, formulating **clinical practice guidelines** (graded A–C), interpreting pharma advertisements, counselling patients about screening (e.g., breast, colorectal, diabetes), and rationalising referrals. A screening test with high sensitivity but low prevalence (common in primary care) yields low PPV—producing false positives and over-investigation. Use **LR+ and LR− with pre-test probability (Fagan nomogram)** to individualise test interpretation.

#### Common Mistakes

- Computing RR in a case-control study (impossible denominators).
- Reporting p-value as the probability the null is true (it is the probability of these data, *or more extreme*, *given* the null).
- Treating NNT from one trial as transferable to a different population without checking baseline risk.
- Forgetting that PPV/NPV change with prevalence even when sensitivity/specificity are fixed.

#### Practice Prompts

1. A cohort study finds 30 events among 500 aspirin users and 50 among 500 non-users. Calculate **RR, ARR, NNT**, and interpret whether aspirin is protective.
2. A screening test has sensitivity 90% and specificity 80% applied to a population with disease prevalence 2%. Compare **PPV** at 2% and 20% prevalence and explain why mass screening can paradoxically harm patients through false positives.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
