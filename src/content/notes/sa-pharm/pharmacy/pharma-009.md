---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-009
topicName: Adverse Drug Reactions and Pharmacovigilance
weight: 3
country: southafrica
generated: "2026-04-09T20:00:00"
lastUpdated: "2026-09-17"
---

# Adverse Drug Reactions and Pharmacovigilance

### 🟢 Lite — Quick Review (1h–1d)
> Two facts every SAPC candidate gets wrong: an ADR is not the same as an adverse event, and reporting in South Africa goes through SAHPRA, not the old MCC.

An **Adverse Drug Reaction (ADR)** is any noxious, unintended response to a medicine used at normal human doses for diagnosis, treatment, or physiological modification (WHO definition adopted by SAPC). **Pharmacovigilance (PV)** is the science and the set of activities that detect, assess, understand, prevent, and monitor such reactions, operating in South Africa under SAHPRA with reports flowing to the WHO Uppsala Monitoring Centre (UMC) in Sweden.

- **ADR classification (Rawlins-Thompson):** Type A Augmented, Type B Bizarre, Type C Chronic, Type D Delayed, Type E End-of-use, Type F Failure.
- **Seriousness criteria:** death, life-threatening, hospitalisation, persistent disability, congenital anomaly, medically important event.
- **Naranjo score cut-offs:** ≥9 Definite, 5–8 Probable, 1–4 Possible, ≤0 Doubtful (dimensionless).
- **SAHPRA signal trigger:** PRR ≥ 2, χ² ≥ 4, ≥ 3 case reports.

> 💡 **High-Yield Memory Hook:** "**A**rrested → **A**ugmented (Type A dose-related common)" and "**B**izarre = **B**ackward (Type B, not dose-related)". Six ADRs read as **A B C D E F** — Augmented, Bizarre, Chronic, Delayed, End-of-use, Failure.

---

### 🟡 Standard — Regular Study (2d–2mo)
> The Standard tier tests the *mechanism*: why an ADR is more than an adverse event, why signal detection needs a 2×2 table, and why the Naranjo algorithm cannot give a single "yes".

#### Distinguishing ADR From Adverse Event

The first trap in a SAPC MCQ is collapsing two distinct terms. An **Adverse Event (AE)** is any untoward medical occurrence in a patient taking a medicine; causality with the drug is not required. An **ADR** adds the causal link and restricts the dose range to what is normally used in humans. The same rash is an AE during data review but only earns the ADR label after a positive causality assessment.

#### South African Reporting Pathway

A pharmacist in South Africa documents the suspected reaction on the SAHPRA ADR reporting form, the MedSafety App, or the e-Reporting portal. SAHPRA forwards the case to the WHO UMC, where it enters **VigiBase**, the global signal-detection database. Newer medicines carry a black triangle (▼) symbol; any suspected reaction to a ▼ drug is reportable even when non-serious.

#### Concept Comparison Matrix

| Feature | Adverse Event (AE) | Adverse Drug Reaction (ADR) |
|---|---|---|
| Causality with drug | Not required | Established or strongly suspected |
| Dose range | Any exposure, including overdose | Normal therapeutic/prophylactic dose |
| Reportable in SA | Only if drug-related | Always when suspected |
| Typical exam wording | "untoward occurrence" | "noxious, unintended response" |

| Signal metric | Formula | Threshold for signal | What it actually measures |
|---|---|---|---|
| PRR | [a/(a+b)] / [c/(c+d)] | ≥ 2 AND χ² ≥ 4 AND a ≥ 3 | Disproportionality of reporting |
| ROR | (a·d) / (b·c) | Lower CI > 1 | Odds of reporting event with drug X |
| Naranjo | Σ of 10 weighted items | ≥ 9 = Definite | Individual case causality |

#### Pharmacist's Legal Duty

Under the **Pharmacy Act 53 of 1974** and current **Good Pharmacy Practice (GPP) rules**, the pharmacist must counsel the patient, document the reaction in the patient profile, and submit an ADR report especially for ▼ drugs, Schedule 5 substances, vaccines, and lack-of-efficacy reports. Failure to document breaches the duty of care.

#### Worked Examination Item

A 62-year-old patient on warfarin starts amiodarone and develops a nosebleed three days later. Her INR rises from 2.4 to 7.1. On the Naranjo questionnaire the responses are: previous reports on the interaction (+1), reaction after suspected drug (+2), improvement on dechallenge (+1), rechallenge not done (0), alternative causes ruled out (0), placebo not given (0), drug level not measured (0), dose–response not tested (0), no prior similar reaction (0), objective evidence present (+1). Total score = 5.

**Resolution steps:** Score 5 sits inside the 5–8 Probable band, so causality is Probable. The reaction qualifies as serious (life-threatening bleed with INR > 7). Reporting is mandatory through the MedSafety App to SAHPRA. The pharmacist records the event in the patient profile, dispenses vitamin K under prescriber instruction, and flags the interaction in dispensing software.

> ⚠️ **Examiner Trap:** Candidates who answer "Definite" because the bleed "obviously" followed the drug miss that rechallenge was not performed, which costs 2 points. Definite requires either a positive rechallenge or a confirmed toxic drug level — neither is present here.

---

### 🔴 Extended — Deep Study (3mo+)
> The Extended tier exposes the silent assumptions inside signal statistics and the rare failure modes that surface only years after marketing authorisation.

#### Disproportionality Metrics Are Not Risk

The PRR and ROR are calculated from spontaneous reports, which suffer under-reporting, stimulated reporting after media events, and notoriety bias. A PRR of 3 with only four reports does not mean three-fold risk in the population; it means reports of drug X with event Y are over-represented relative to other drug-event pairs in the same database. Real-world risk still requires an epidemiological study (cohort or case-control) to quantify incidence, often expressed as **incidence rate IR = new ADR cases / person-time** in reactions per 1000 patient-years.

#### Edge Cases in the Naranjo Algorithm

Two answers that look identical can move the total by 2 points. Rechallenge performed positively gives +2; rechallenge performed negatively gives −1; rechallenge not performed gives 0. Candidates routinely score 0 when the answer is −1 for an alternative cause being more likely, which pushes a "Possible" case into "Doubtful". The WHO-UMC standardised case causality assessment is the preferred second-opinion tool when Naranjo returns 1–4.

#### Traps and Exceptions

1. **Type B reactions can become dose-related** at very high exposures (e.g., heparin-induced thrombocytopenia at therapeutic doses still behaves as Bizarre, but the same antibody response at micro-doses is irrelevant clinically).
2. **Lack of efficacy is reportable** for contraceptives, vaccines, and Schedule 5 medicines even when no symptom occurred — a missed dose of an oral contraceptive leading to pregnancy falls under Type F Failure.
3. **▼ black triangle status persists** for at least five years after marketing authorisation; removing the symbol does not retroactively cancel prior reporting duties.
4. **Withdrawal precedent:** rofecoxib (Vioxx) was pulled from the South African market in 2004 after cardiovascular signal detection, illustrating that PV can trigger Dear Healthcare Professional Letters and full deregistration, not merely label updates.
5. **AEFI reporting:** Adverse Events Following Immunisation follow a parallel channel through the **National Adverse Drug Event Monitoring Centre (NADEMC)** and the Notifiable Medical Conditions system, distinct from a standard ADR form but using the same SAHPRA infrastructure.
6. **Risk Management Plans (RMP)** are binding post-marketing commitments; Periodic Safety Update Reports (PSURs) are submitted on a schedule set by SAHPRA, with accelerated submissions after any new signal.

#### Adjacent Connections

ADR reporting feeds into toxicology (overdose management), clinical pharmacy (reconciliation on admission), and public health (vaccine safety surveillance). The same MedSafety App submission supports both an SAHPRA report and an AEFI notification, so a single suspected reaction after a COVID-19 vaccine can trigger both pathways without duplicate paperwork.

#### Advanced Practice Prompts

1. A hospital reports four cases of severe neutropenia with clozapine inside one month. Calculate the PRR using a 2×2 table where a = 4, b = 96, c = 120, d = 17 780, then state whether a signal is generated.
2. A patient rechallenged with the same antibiotic develops the same Stevens-Johnson syndrome rash within 48 hours. Apply the Naranjo algorithm and explain why the causality category changes from Possible (after first event) to Definite (after rechallenge).

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Adverse Drug Reactions and Pharmacovigilance" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
