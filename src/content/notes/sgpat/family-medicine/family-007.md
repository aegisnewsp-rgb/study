---
exam: sgpat
examName: Saudi GP Board
subject: family-medicine
subjectName: Family Medicine
topic: family-007
topicName: Core Definitions and the PICO Framework
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Core Definitions and the PICO Framework

### 🟢 Lite — Quick Review (1h–1d)
> One anchor sentence a final-week reader can scan in under a minute before walking into the SCFHS exam hall.

PICO is the four-part question-builder of Evidence-Based Medicine (EBM). Every well-formed clinical question in primary care carries exactly these slots: **P**opulation, **I**ntervention (or Exposure), **C**omparator, **O**utcome. Miss one and the question falls back to a background question — broad, narrative, unsearchable.

| Element | What it specifies | Example in a T2DM vignette |
|---|---|---|
| P | Patient, setting, problem | Adults with T2DM, age 40–70, primary-care clinic |
| I | Action or exposure | Moderate-intensity statin |
| C | Alternative or control | Placebo or no statin |
| O | Measurable endpoint | 5-year major adverse cardiovascular event (MACE) |

> 💡 **High-Yield Memory Hook (Memory Hook):** Say **"PIC-O!"** out loud in the order Population → Intervention → Comparator → Outcome. The "O!" is the punchline: without an Outcome you cannot calculate NNT, ARR, or RRR — three numbers the Saudi GP Board loves to test in MCQs.

### 🟡 Standard — Regular Study (2d–2mo)
> The working layer: how PICO is built, where each element plugs into the EBM cycle, and how the examiner twists it.

#### Anatomy of a Foreground Question

A foreground question asks something the literature can answer numerically. PICO splits the clinical scenario into four searchable slots, and each slot becomes a MeSH term or free-text keyword in PubMed, CINAHL, or the Cochrane Library. The PICOTT extension adds two more — **T**ime frame and **T**ype of study — that decide which study design answers the question.

The same skeleton is reused across four question categories, but two labels swap depending on intent:

| Question category | P | I / E | C | O | Best study design |
|---|---|---|---|---|---|
| Therapy | Defined patients | Intervention | Control / alternative | Benefit endpoint | RCT, then systematic review |
| Harm / Aetiology | Defined patients | Exposure | Unexposed control | Adverse outcome | Cohort, case-control |
| Diagnosis | Patients with suspected disease | Index test | Reference standard | Sensitivity, specificity, LR | Cross-sectional |
| Prognosis | Cohort with a defined condition | — | — | Outcome over time | Cohort, survival analysis |

The exam routinely asks candidates to label a stem as therapy vs harm. A clue: if the stem names something the patient *received*, label it Intervention and expect an RCT; if it names something they were *exposed to*, label it Exposure and expect a cohort or case-control.

#### Building the PICO from a Primary-Care Vignette

A typical Saudi GP Board item gives two or three sentences of patient context and asks the candidate to formulate the question, choose the study design, or spot the missing element. The reliable sequence:

1. Extract the **Person** — age, sex, comorbidities, setting (PICOS descriptor: Person + Practice setting).
2. Name the **Place and Period** — clinic type, country, follow-up window — these tighten external validity.
3. Specify the **Intervention or Exposure** and pair it with a concrete **Comparator** (placebo, active drug, usual care, no exposure).
4. Pin the **Outcome** to a measurable variable with a direction: HbA1c < 7%, BP < 130/80 mmHg, 10-year mortality, ADR rate per 1,000 person-years.
5. Add the **T** in PICOTT — Time horizon and Type of study — before searching.

> 📌 **Formula Check:** PICO is not a numerical formula; it is a *structural* equation. The unit of each slot is a search term, and the "dimensional consistency" rule is that every slot maps to at least one MeSH heading or keyword before the search begins.

#### Worked Walk-Through

Consider the vignette: *A 55-year-old man with T2DM, HbA1c 8.1%, on metformin, attends your primary-care clinic. He asks whether adding a statin will reduce his risk of a heart attack.*

Working the PICO:

- **P** — adults 40–70 with T2DM on metformin in primary care.
- **I** — moderate-intensity statin (e.g., atorvastatin 20 mg).
- **C** — placebo or no statin.
- **O** — 5-year MACE (myocardial infarction, stroke, cardiovascular death).
- **T (Type)** — RCT or systematic review of RCTs.

The question is now searchable: a PubMed query combining "Type 2 Diabetes" AND "Hydroxymethylglutaryl-CoA Reductase Inhibitors" AND "Cardiovascular Diseases" with a Therapy/Narrow filter returns the relevant trials.

> ⚠️ **Examiner Trap:** Candidates who drop the **Comparator** write a one-arm question (e.g., "Does statin reduce MACE in T2DM?"). That phrasing makes relative risk, NNT, and ARR incalculable — three answer options the stem quietly requires. Always supply an explicit comparator, even if it is "usual care" or "no intervention."

### 🔴 Extended — Deep Study (3mo+)
> Where PICO breaks, where it bends, and how SCFHS items exploit both.

#### Where the Standard Skeleton Fails

Qualitative research answers different questions — *why* patients decline a vaccine, *how* a chronic-disease self-management programme is experienced. PICO is too rigid; the qualitative field uses **PICo** (Population, phenomenon of Interest, Context) and pairs it with thematic synthesis rather than meta-analysis. Mark the distinction in any exam stem that mentions interviews, focus groups, or patient experience.

Diagnosis questions carry a hidden fifth element: the **reference standard**. A question phrased as "How accurate is HbA1c ≥ 6.5% for diagnosing diabetes?" needs the comparator to be a gold-standard test (venous fasting glucose, OGTT), not a placebo. Forget this and the question collapses into a therapy frame.

#### Edge Cases the SCFHS Loves

- **Time-frame omission.** A prognosis question without a stated horizon (1-year, 5-year, 10-year) cannot be matched to a cohort study with the right follow-up. Always include months or years.
- **Outcome direction.** "Improvement in glycaemic control" is a background question; "HbA1c reduction ≥ 0.5% at 6 months" is foreground. The examiner uses the vague form as a distractor.
- **Population descriptors as eligibility.** The PICOS pair (Person, Practice setting) doubles as inclusion criteria. A study of inpatients does not answer a primary-care PICO; flag the setting mismatch.
- **PICOTT misuse in therapy.** Adding "Type of study = cohort" to a therapy question signals harm; examiners test whether candidates can read the study-design slot against the question category.

#### Two Advanced Practice Prompts

1. A 62-year-old woman on hormone-replacement therapy for 8 years asks whether her exposure increases breast-cancer risk over the next decade. Build the full PICOTT, name the correct study design, and state one reason a systematic review of RCTs is *not* the first-line evidence source here.
2. A primary-care team is introducing point-of-care HbA1c testing. Write the PICO for diagnostic accuracy, identify the reference standard, and list the two statistics the literature must report to make the test adoptable in your clinic.

> ⚠️ **Examiner Trap (Advanced):** Candidates who answer "RCT" for the hormone-replacement prompt miss the ethical and temporal constraints. Long-term harm questions are answered by cohort and case-control studies, not RCTs — the SCFHS reward candidates who match the design to the question category, not the other way round.

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "Core Definitions and the PICO Framework" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Family Medicine notes](/notes/sgpat/family-medicine/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
