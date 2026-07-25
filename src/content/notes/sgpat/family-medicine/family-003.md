---
exam: sgpat
examName: Saudi GP Board
subject: family-medicine
subjectName: Family Medicine
topic: family-003
topicName: The PICO Framework
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# The PICO Framework

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Evidence-Based Medicine (EBM) integrates the best available research with clinical expertise and patient values. The exam tests your ability to frame a clinical question using **PICO** (Patient, Intervention, Comparison, Outcome) and then appraise diagnostic, therapeutic, and prognostic studies. The high-yield formulas are:

- **PPV = (Sens × Prev) / [(Sens × Prev) + ((1 − Spec) × (1 − Prev))]**
- **NPV = (Spec × (1 − Prev)) / [(Spec × (1 − Prev)) + ((1 − Sens) × Prev)]**
- **LR+ = Sens / (1 − Spec)**, **LR− = (1 − Sens) / Spec**
- **ARR = Risk_treatment − Risk_control**, **NNT = 1 / ARR**

Remember: **sensitivity and specificity are fixed test properties**; **PPV/NPV shift with prevalence**. Use **NNT**, not relative risk reduction, when counselling Saudi primary care patients.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The PICO Framework
A good clinical question has four parts: **P**atient/problem, **I**ntervention (or exposure), **C**omparator, **O**utcome. PICO turns a vague concern (e.g. "does metformin help?") into a searchable question (e.g. "In adults with type 2 diabetes [P], does metformin [I] compared with lifestyle modification [C] reduce cardiovascular mortality [O]?"). The Saudi GP Board commonly presents long vignettes; identifying the PICO shapes your search strategy and appraisal focus.

#### Hierarchy of Evidence
From strongest to weakest: **systematic reviews/meta-analyses of RCTs → individual RCTs → cohort studies → case-control studies → case series/reports → expert opinion**. Within the Saudi MoH Clinical Practice Guideline pathway, recommendations are graded A (RCT-derived) through D (expert consensus). Match study design to the question: therapy → RCT; prognosis → inception cohort; diagnosis → cross-sectional comparison against a gold standard.

#### Diagnostic Test Appraisal
Validity questions: was the **spectrum** of patients representative (spectrum bias)? Did every patient receive the **gold standard** regardless of the index test result (verification bias)? Was the reader **blinded**? Once valid, compute sensitivity, specificity, and likelihood ratios, then apply them using pre-test probability (in many papers local disease prevalence from Saudi registries). A **Fagan nomogram** converts pre-test probability to post-test probability once you know the LR.

#### Therapy and Prognosis Trial Appraisal
Check **randomization with allocation concealment**, **blinding** (patient, provider, outcome assessor), **intention-to-treat analysis**, and **loss to follow-up <20%**. For prognosis, look for an **inception cohort** followed long enough for clinically relevant events and reported as a **hazard ratio** with 95% **confidence interval (CI)**.

#### Decision Metrics for Practice
ARR and NNT translate trial results into bedside language. If a statin trial reports ARR = 0.02 over 5 years, **NNT = 50** for 5 years — a figure that can be shared during informed consent.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Bayesian Reasoning
A common trap is the **positive predictive value paradox**: at low prevalence, even a test with 95% sensitivity and 95% specificity yields many false positives. In a Saudi primary-care screening scenario such as universal vitamin D screening in young adults (low pre-test probability of severe deficiency), a "positive" result in many papers requires confirmatory testing or a higher LR+ threshold. Always anchor PPV to **local prevalence**, not textbook figures from Western populations. Screening in the Kingdom's ministry primary-care centres frequently relies on prevalence-adjusted PPV before initiating referrals.

#### Common Mistakes to Avoid
- **Conflating sensitivity with PPV**: sensitivity describes diseased patients; PPV describes positive-test patients and depends on prevalence.
- **Quoting relative risk reduction** (RRR) to patients instead of NNT — a 50% RRR can correspond to ARR of 0.5% and NNT of 200, which sounds very different in shared decision-making.
- **Ignoring the 95% CI** of an RR or HR; a result that crosses 1.0 is not statistically significant.
- **Forgetting to round NNT appropriately** — always round **up**, because NNT must be a whole treated patient.
- Using **odds ratios** as if they were relative risks when the outcome is common (>10%).
- **Appraising a case-control study** to answer a therapy question — wrong design for the wrong PICO.

#### Practice Prompts
**MCQ 1:** A new rapid antigen test for streptococcal pharyngitis has sensitivity 85% and specificity 90%. In a clinic where pharyngitis prevalence is 20%, what is the PPV?
*Solution:* PPV = (0.85 × 0.20) / [(0.85 × 0.20) + (0.10 × 0.80)] = 0.17 / 0.25 = **0.68 (68%)**.

**MCQ 2:** A hypertension RCT shows event rates of 8% in the active arm and 12% in the placebo arm over 3 years. Compute ARR and NNT.
*Solution:* ARR = 0.12 − 0.08 = **0.04 (4%)**; NNT = 1 / 0.04 = **25 patients for 3 years** to prevent one event.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
