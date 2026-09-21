---
exam: sgpat
examName: Saudi GP Board
subject: family-medicine
subjectName: Family Medicine
topic: family-004
topicName: Disease Prevention Framework
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Disease Prevention Framework

### 🟢 Lite — Quick Review (1h–1d)

> One sentence to carry into the exam hall: every preventive action is defined by **where in the disease timeline** it acts — before risk, before disease, before complication, or before harm from over-investigation.

The five Leavell–Clark–Jamoulle levels, in order, are **primordial → primary → secondary → tertiary → quaternary**. Quaternary was added by Jamoulle in 1986 and is the level most often missed in MCQs.

| Level | Target population | Typical GP action | Saudi example |
|---|---|---|---|
| Primordial | Whole society, no risk yet | National policy, salt/sugar regulation | Saudi MoH sugar-tax policy |
| Primary | Healthy, at risk | Vaccination, counselling, statins | Influenza vaccine annually |
| Secondary | Asymptomatic, early disease | Screening + early treatment | Mammography 40–74 (MoH schedule) |
| Tertiary | Established disease | Rehab, complication control | Post-MI cardiac rehabilitation |
| Quaternary | Patient at risk of over-medicalisation | Stop unnecessary tests | Avoid PSA in men >75 or <50 |

> 💡 **High-Yield Memory Hook:** **"P-P-P-P-Q"** = *Primordial, Primary, Secondary, Tertiary, Quaternary*. Read the patient in front of you and slide down the list: has society given them risk, have they chosen risk, do they have silent disease, do they have complications, or are we about to harm them with over-investigation?

Two quick numerics you must own — **PPV** (positive predictive value) and **NNS** (number needed to screen) — both behave badly in low-prevalence populations, which is the single most-tested screening principle.

### 🟡 Standard — Regular Study (2d–2mo)

> Standard tier for the Saudi GP Board written exam: build the framework, memorise the screening criteria, and walk a numerical stem from incidence to PPV.

#### The five levels, mechanistically

The Leavell and Clark model (1965) originally had three levels keyed to the **natural history of disease**: susceptibility → pre-clinical → clinical → disability. Primordial was added upstream (preventing the emergence of risk factors themselves) and quaternary downstream (preventing iatrogenic harm from the medical system itself).

#### Primary prevention — reduce incidence

Acts on a **healthy person** before disease begins. Theominator in the incidence equation is shrunk by removing susceptible individuals or by blocking exposure. Vaccination, smoking-cessation counselling, statin chemoprophylaxis in selected adults, folic acid in pre-conception, and seatbelt legislation all belong here. On the Saudi GP Board, primary-prevention MCQs cluster around vaccination schedules in pregnancy (influenza inactivated, Tdap 27–36 weeks, COVID-19 booster) and aspirin in pre-eclampsia prevention.

#### Secondary prevention — detect early

Acts on **asymptomatic disease** during the recognisable latent phase. Goal is to shrink duration of disease (increase prevalence, paradoxically, in the short term) and improve outcome. Saudi MoH Adult Clinical Practice Guidelines operationalise this through screening intervals:

| Condition | Test | Saudi MoH / USPSTF interval | Key caveat |
|---|---|---|---|
| Breast cancer | Mammography | 40–74, every 1–2 years | Shared decision 40–49 |
| Colorectal cancer | FIT | 45–75, annually | Colonoscopy every 10 yr alternative |
| Diabetes | HbA1c or FPG | Overweight + ≥35 yr, every 3 yr | Earlier if risk factors |
| Dyslipidaemia | Lipid panel | Men ≥35, women ≥45, every 5 yr | Earlier with CV risk factors |
| Cervical cancer | HPV/Pap | Women 25–65, every 3–5 yr | Stop at 65 with adequate prior screening |

#### Tertiary prevention — limit disability

Targets a patient with **established disease** to soften complications. Cardiac rehab post-MI, diabetic foot-care programmes, tight glycaemic control to prevent nephropathy, and stroke secondary-prevention clinics belong here. Theominator in the prevalence equation (existing cases) cannot be lowered; instead, complication incidence is cut.

#### Quaternary prevention — protect from over-medicalisation

Defined by Jamoulle (1986) as action taken to protect patients from **excessive medical intervention**. Two operational actions: (1) stop investigating self-limiting illness, and (2) apply Wilson & Jungner before offering a test. Exam stems frequently present an asymptomatic low-risk patient with a normal physical and ask what NOT to do — the answer is almost always "no further test" rather than "screen more".

#### Wilson and Jungner screening criteria (WHO, 1968)

Ten criteria you must recite for any "is this disease worth screening?" stem. The four most-tested:

1. The condition should be an **important health problem**.
2. There should be a **recognisable latent stage**.
3. There should be a **suitable test or examination**, **acceptable** to the population.
4. There should be an **accepted treatment** for patients with recognised disease.

#### Worked exam-style stem — PPV in low prevalence

A GP screens 10,000 asymptomatic adults with a new rapid test for a disease whose prevalence is 1%. The test has sensitivity 95% and specificity 90%. The registrar is told "this test will catch nearly everyone who has the disease". She is now asked: if a patient is told they are positive, what is the probability they actually have the disease?

Build a 2×2 table from the 100 true cases (1% of 10,000):

| | Disease present | Disease absent | Total |
|---|---|---|---|
| Test + | TP = 100 × 0.95 = **95** | FP = 9,900 × 0.10 = **990** | 1,085 |
| Test − | FN = **5** | TN = **8,910** | 8,915 |
| Total | 100 | 9,900 | 10,000 |

PPV = TP / (TP + FP) = 95 / 1,085 ≈ **8.8%**. More than nine in ten people told they are "positive" do not have the disease. 

> ⚠️ **Examiner Trap:** the registrar quoted sensitivity (95%) as if it were PPV. In screening, sensitivity answers "of the diseased, how many are caught?" — PPV answers "of those caught, how many are truly diseased?". PPV collapses when prevalence is low, even with a near-perfect test.

#### Quick-reference quantitative toolkit

| Quantity | Formula | Dimension |
|---|---|---|
| Incidence rate | new cases / population at risk, per year | year⁻¹ |
| Prevalence | existing cases / total population, at a point in time | dimensionless (%) |
| Sensitivity | TP / (TP + FN) | dimensionless (%) |
| PPV | TP / (TP + FP) | dimensionless (%) |
| Relative Risk | incidence exposed / incidence unexposed | dimensionless |
| NNS to prevent one death | 1 / (absolute mortality reduction per screened person) | persons |

### 🔴 Extended — Deep Study (3mo+)

> Deep tier: the limits, the edge cases, and two OSCE-style practice prompts.

#### Why prevalence determines screening yield

The PPV calculation above exposes a deeper rule: in any population, **PPV rises with prevalence**, falls with it, and is bounded by the test's specificity ceiling. The same test with 99% specificity in a 1% prevalence population still produces more false positives than true positives. Saudi GP Board questions test this by asking "why do we screen only high-risk groups for [rare condition]?" — the answer is *pre-test probability*, not test quality.

#### Five advanced traps examiners set

1. **Relative vs absolute risk reduction.** Stating "statins reduce MI by 30%" hides a 30% *relative* cut on a small baseline, producing a tiny absolute benefit. Counselling should quote ARR and NNT (number needed to treat), not RRR.
2. **Lead-time and length-time bias.** Screening appears to prolong survival, but lead-time bias adds diagnosis-time to survival without adding life; length-time bias over-represents slow-growing disease. Trials that do not adjust for these overestimate benefit.
3. **The "more screening is better" fallacy.** USPSTF and Saudi MoH explicitly advise against annual executive check-ups in asymptomatic adults; frequency should match evidence-based intervals, not patient anxiety.
4. **Confusing primordial with primary.** Primordial prevents the *risk factor from emerging in the population* (school nutrition policy); primary prevents the *disease in a person who already has the risk factor* (statins in a hypertensive).
5. **Forgetting behavioural models.** Smoking-cessation MCQs often hinge on the **Transtheoretical (Stages of Change) Model**: pre-contemplation, contemplation, preparation, action, maintenance. Motivational Interviewing is the matching counselling technique — used only when the patient is in contemplation, not pre-contemplation.

#### Two advanced practice prompts

1. **OSCE station — 32-year-old male smoker, no comorbidities, BP 122/78.** Counsel him on cardiovascular prevention. Deliver a 3-minute brief covering: (a) which level of prevention you are operating at (primary), (b) the stage-of-change assessment before recommending nicotine-replacement therapy, (c) one absolute-risk calculator you will use (e.g. ACC/AHA Pooled Cohort Equation or WHO CVD risk chart for the Eastern Mediterranean region), and (d) the screening tests you will add today (lipids, HbA1c, BP recheck).
2. **Written MCQ stem — 58-year-old woman, asymptomatic, FIT negative last year, asks for a CT colonography "to be safe".** Select the best answer from: (A) repeat FIT in 1 year, (B) CT colonography now, (C) colonoscopy now, (D) no further testing for 3 years, (E) repeat FIT in 2 years plus genetic counselling. Correct answer is determined by the MoH interval (A or E); the trap option (B) is the quaternary-prevention violation — extra radiation and incidental findings without evidence-based indication.

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "Disease Prevention Framework" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Family Medicine notes](/notes/sgpat/family-medicine/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
