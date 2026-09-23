---
exam: sgpat
examName: Saudi GP Board
subject: family-medicine
subjectName: Family Medicine
topic: family-006
topicName: PICO Framework
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# PICO Framework

### 🟢 Lite — Quick Review (1h–1d)
> One sentence to anchor the day: a PICO question is the only thing standing between a vague clinical doubt and a clean literature search.

PICO turns a bedside question into something PubMed can answer. Each letter is a fixed slot you must fill before you touch a database.

| Letter | Slot | What to write | Saudi GP Board pitfall |
|---|---|---|---|
| **P** | Patient / Population | Age, sex, comorbidities, setting | Leaving it as "diabetic" loses the search |
| **I** | Intervention or Exposure | The therapy, test, or prognostic factor | Confusing intervention with comparator |
| **C** | Comparator | Placebo, standard care, or gold-standard test | Omitting it makes every study eligible |
| **O** | Outcome | Mortality, MI, HbA1c, NNT, LR+ | Choosing a surrogate instead of a patient-important endpoint |

A fifth letter, **T (Time frame)**, is optional and only matters when duration changes the answer (e.g., 30-day vs 5-year mortality).

> 💡 **High-Yield Memory Hook — "PICOT, like a patient file":** write P first (who is on the couch), then I (what you propose), then C (what you would otherwise do), then O (what the patient will actually notice). The T is the follow-up visit date.

Branch the question type before you search: therapy → RCT, diagnosis → cross-sectional with blind gold-standard comparison, prognosis → cohort, harm → cohort or case-control.

---

### 🟡 Standard — Regular Study (2d–2mo)
> This tier walks through the framework as it is actually tested in the Saudi GP Board constructed-response and MCQ stems.

#### The four slots, written to be searchable

The Population slot is the single most-skipped element in Saudi GP Board answers. A vague "T2DM patient" returns 90,000 hits; "adult with uncontrolled T2DM on metformin in primary care" returns a workable set. Add comorbidity, sex, and setting whenever the vignette supplies them.

The Intervention slot is not always a drug. For diagnostic questions the I is the **index test** (rapid streptococcal antigen, point-of-care HbA1c). For prognosis and harm questions the I becomes the **exposure** (smoking, hypertension, BRCA status).

The Comparator slot decides which half of the literature you retrieve. "Placebo" and "standard care" are not interchangeable — standard care in a 2024 Saudi PHC clinic looks different from placebo in a trial setting. When no real comparator exists, write "no comparator" and accept that only single-arm evidence will surface.

The Outcome slot must be **patient-important** (mortality, MI, stroke, quality of life, NNT to prevent one event) and not a surrogate (LDL change, blood-pressure reduction alone). The Saudi GP Board repeatedly tests this exact swap.

#### PICO vs background questions

| Feature | Background question | Foreground (PICO) question |
|---|---|---|
| Trigger | General knowledge gap | Specific clinical decision |
| Format | "What is X?" | "In P, does I vs C change O?" |
| Source | Textbook, UpToDate | Primary studies, systematic reviews |
| Saudi GP Board weight | Low | High — appears in every EBM stem |

#### Mapping question type to study design

| Question type | Best evidence | Common flaw in candidate answers |
|---|---|---|
| Therapy / prevention | RCT → systematic review of RCTs | Choosing a case-control |
| Diagnosis | Cross-sectional or cohort with **independent blind** comparison to gold standard | Using a case-control for diagnostic accuracy |
| Prognosis | Longitudinal cohort | Quoting treatment effect instead of survival |
| Harm / etiology | Cohort (preferred) or case-control | Demanding an RCT for an unethical exposure |

#### Worked exam-level problem

A 54-year-old man with T2DM, HbA1c 8.9% on metformin 1 g bd, asks whether adding an SGLT2 inhibitor will reduce his risk of cardiovascular events.

Step 1 — extract the P: adult, T2DM, suboptimal control on metformin, primary care, established CV risk factors.
Step 2 — extract the I: SGLT2 inhibitor added to metformin.
Step 3 — extract the C: metformin alone (or placebo add-on).
Step 4 — extract the O: major adverse cardiovascular events (MACE) or cardiovascular mortality — patient-important, not HbA1c change.
Step 5 — search: PubMed Clinical Queries, therapy filter, narrow, with MeSH terms for each PICO slot.
Step 6 — design: RCT with cardiovascular outcomes (EMPA-REG, CANVAS, DECLARE pattern).

> ⚠️ **Examiner Trap:** candidates write "does SGLT2 lower HbA1c?" — that is a surrogate outcome, fetches different trials, and answers the wrong clinical question. The Saudi GP Board blueprint marks this as an Outcome failure even when the rest of the PICO is correct.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases and adjacent links — read this after the EBM cycle and critical-appraisal chapters are already familiar.

#### Where PICO breaks down

1. **Qualitative questions.** Patient experience, adherence barriers, and satisfaction cannot be forced into I/C/O. SPIDER (Sample, Phenomenon of Interest, Design, Evaluation, Research type) is the published alternative; the Saudi GP Board rarely tests it, but mention it if the stem uses words like "lived experience".
2. **Single-arm interventions.** If no ethical comparator exists (e.g., a new diagnostic pathway replacing an obsolete test), the C slot is empty. State this explicitly; do not invent a sham comparator.
3. **Time-to-event outcomes.** Add T (e.g., 5-year all-cause mortality). PICOT matters most when the answer is duration-dependent, as in cancer screening intervals.
4. **Over-specified P.** "Adult Saudi male aged 54 with T2DM, HbA1c 8.9%, on metformin 1 g bd, eGFR 75, in a Riyadh PHC" is too narrow to retrieve evidence. Keep three to five defining features; drop the rest into the search exclusion filter.

#### Connections the exam exploits

| Adjacent topic | How PICO feeds into it | Common crossover trap |
|---|---|---|
| Critical appraisal of therapy | PICO determines which RRR, ARR, NNT are valid | Re-computing NNT from a mismatched population |
| Diagnostic test appraisal | PICO forces an independent blind gold-standard comparison | Forgetting blindness — inflating sensitivity |
| Prognosis | PICO defines the inception cohort and follow-up start | Using prevalent cases instead of incident |
| Systematic reviews | Each PICO slot becomes a MeSH/keyword string | Missing MeSH explosion terms |

#### Advanced practice prompts

1. A 7-year-old with sore throat: convert to PICO for "does rapid antigen test vs throat culture reduce antibiotic prescribing?". Identify which letter is the index test, which is the gold standard, and what study design answers it.
2. A 62-year-old smoker: write the PICO for "does annual low-dose CT vs no screening reduce lung-cancer mortality?". State why an RCT is feasible here but would be unethical for a smoking-and-lung-cancer harm question.

> 📌 **High-Yield Board Note:** every EBM stem on the Saudi GP Board blueprint assumes you can write a PICO, name the correct study design, and then interpret the resulting number. If you can do the first two, the appraisal numbers (RRR, ARR, NNT, Sn, Sp, LR+, LR−, HR) follow mechanically.

---

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "PICO Framework" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Family Medicine notes](/notes/sgpat/family-medicine/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
