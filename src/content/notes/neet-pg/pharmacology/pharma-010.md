---
exam: neet-pg
examName: NEET PG
subject: pharmacology
subjectName: Pharmacology
topic: pharma-010
topicName: Chemotherapy — Antimicrobials
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Chemotherapy — Antimicrobials

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Chemotherapy of antimicrobials** is the use of chemical agents (synthetic or naturally derived) to selectively inhibit growth (**bacteriostatic**) or kill (**bactericidal**) infecting microorganisms without unacceptable host toxicity. Selectivity is quantified by the **Chemotherapeutic Index (CI)**.

- **CI = MTD ÷ MED** — both in mg/kg; higher value = wider safety window.
- **MIC (mg·L⁻¹)** = lowest concentration that visibly inhibits growth in broth dilution.
- **MBC (mg·L⁻¹)** = lowest concentration that kills ≥99.9% of the inoculum.
- **Time-dependent killing** → β-lactams, glycopeptides, macrolides; aim **%T > MIC ≥ 40–50%**.
- **Concentration-dependent killing** → aminoglycosides, fluoroquinolones, daptomycin; aim **Cmax/MIC ≥ 8–10** and **AUC24h/MIC ≥ 30 (FQ) / ≥ 10 (AG)**.

> 💡 **High-Yield Memory Hook:** **"Big-Fat Cats Kill Mice Fast"** → **B**acteriostatic vs **B**actericidal, **F**IC index, **C**hemotherapeutic index, **K**illing kinetics (time vs concentration), **M**IC/**M**BC. For synergy vs antagonism use **"FIC < 0.5 = S, 0.5–1 = A (additive), >1 = Ant"**.

| Term | SI / Unit | Definition |
|---|---|---|
| MIC | mg·L⁻¹ (mg/L) | Minimum drug concentration inhibiting visible growth |
| MBC | mg·L⁻¹ | Minimum drug concentration killing ≥99.9% |
| CI | dimensionless | MTD ÷ MED |
| %T > MIC | % | Time free drug exceeds MIC in a dosing interval |
| AUC24h/MIC | dimensionless | Total daily exposure relative to MIC |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Classification by Mechanism of Action
Antimicrobials are best memorised by target. Each class lists must-know members and the *one* exam favourite per class.

- **Cell wall synthesis inhibitors** — β-lactams (penicillins, cephalosporins, carbapenems, monobactams), glycopeptides (vancomycin, teicoplanin), fosfomycin, D-cycloserine, bacitracin.
- **Protein synthesis inhibitors** — aminoglycosides (30S), tetracyclines (30S), macrolides/lincosamides (50S), chloramphenicol (50S), linezolid (50S).
- **Nucleic acid inhibitors** — fluoroquinolones (DNA gyrase/topo-IV), rifampicin (RNA polymerase), acyclovir (viral DNA polymerase).
- **Folate pathway blockers** — sulfonamides block DHPS, trimethoprim blocks DHFR; together they are sequential blockade.
- **Membrane disruptors** — daptomycin (Gram-positive), amphotericin B (binds ergosterol), azoles (inhibit 14-α demethylase).

#### Concept Comparison Matrix — Bacteriostatic vs Bactericidal and Kinetics

| Feature | Bactericidal | Bacteriostatic | Concentration-dependent | Time-dependent |
|---|---|---|---|---|
| Definition | Kills organism (≥3 log₁₀ CFU drop) | Inhibits growth; regrowth on removal | Killing rises with peak level | Killing saturates at ~4× MIC |
| Best PK/PD index | — | — | Cmax/MIC, AUC24h/MIC | %T > MIC |
| Typical classes | β-lactams, aminoglycosides, fluoroquinolones, metronidazole, daptomycin, rifampicin | Tetracyclines, macrolides, chloramphenicol, linezolid, sulfonamides, TMP | Aminoglycosides, FQs, daptomycin | β-lactams, glycopeptides, macrolides |
| PAE | Prolonged (AG, FQ, daptomycin) | Short (β-lactams) | Long PAE | Minimal PAE |
| Clinical target | Endocarditis, meningitis, neutropenia | Uncomplicated UTI, mild RTI | High-dose once-daily AG | Frequent/continuous infusion β-lactam |

#### Combination Therapy and Synergy Testing

The **FIC (Fractional Inhibitory Concentration) Index** determines interaction:
**FIC = FIC_A + FIC_B**, where FIC_A = MIC of A in combination ÷ MIC of A alone. Interpretation: **≤ 0.5 synergism, 0.5–1 additive, > 1 antagonism**.

Classic synergistic regimens: **ampicillin + gentamicin in enterococcal endocarditis**, **RHZE in TB**, **dapsone + rifampicin + clofazimine in leprosy**, **β-lactam + aminoglycoside in febrile neutropenia**. The famous antagonism (bacteriostatic + bactericidal) is clinically meaningful mainly in **pneumococcal meningitis**, not universally.

#### Resistance Mechanisms

| Mechanism | Example |
|---|---|
| Enzymatic inactivation | β-lactamases; AG-modifying enzymes (AAC, APH, ANT) |
| Target modification | PBP2a → MRSA; 23S rRNA mutation → linezolid resistance; ribosomal methylation → MLS_B phenotype |
| Reduced permeability | Porin OprD loss → imipenem resistance in *Pseudomonas* |
| Efflux pumps | MexAB-OprM; Tet efflux in tetracycline resistance |
| Metabolic bypass | Resistant DHPS/DHFR; thymidylate synthase bypass |

#### 🎯 Exam-Level Worked Problem

**Question:** A 65-year-old patient with prosthetic valve endocarditis due to *Enterococcus faecalis* (MIC ampicillin 2 mg/L, MIC gentamicin 4 mg/L) has MICs of 0.5 mg/L and 1 mg/L respectively when combined. Calculate the FIC index, interpret the interaction, and state the dose strategy for gentamicin in this setting.

#### Solution:
1. FIC_A (ampicillin) = 0.5 / 2 = **0.25**
2. FIC_B (gentamicin) = 1 / 4 = **0.25**
3. **FIC index = 0.25 + 0.25 = 0.50** → **synergism** (≤ 0.5).
4. The combination is synergistic because gentamicin’s 30S ribosomal activity becomes accessible only after ampicillin damages the cell wall.
5. Aminoglycosides show **concentration-dependent killing** → use **once-daily high-dose** gentamicin (target **Cmax/MIC ≥ 8–10** and **AUC24h/MIC ≥ 10**), with TDM (peak ~20 mg/L, trough < 1 mg/L) to avoid nephro-/ototoxicity.

> ⚠️ **Examiner Trap:** Students often calculate FIC > 0.5 here by forgetting to divide **combined MIC** by **alone MIC** for *each* drug separately. A common second trap is recommending **multiple daily doses** of gentamicin — wrong, because concentration-dependent killing plus prolonged PAE demands **once-daily dosing**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Adverse-Effect Profiles and Drug-Specific Pearls

1. **Aminoglycosides** — nephro- and ototoxicity; dose by **weight, renal function (CrCl) and TDM**; avoid with loop diuretics.
2. **Chloramphenicol** — dose-dependent marrow suppression, idiosyncratic **aplastic anaemia**, **grey-baby syndrome** (neonates lack UGT).
3. **Fluoroquinolones** — tendinopathy/Achilles rupture, **QT prolongation**, arthropathy in children, dysglycaemia.
4. **Linezolid** — **serotonin syndrome** with SSRIs/MAOIs (weak MAO inhibitor), lactic acidosis, optic and peripheral neuropathy beyond 28 days.
5. **Amphotericin B** — infusion reactions (fever, rigors), nephrotoxicity; **liposomal formulation** reduces toxicity. Azoles — CYP450 inhibition, hepatotoxicity, teratogenicity.
6. **Isoniazid** — peripheral neuropathy (prevent with **pyridoxine/vitamin B6**, **not niacin**), hepatitis; **RIPE** mnemonic: **R**ifampicin + **I**NH = hepatotoxicity, **P**yrazinamide = hyperuricaemia, **E**thambutol = optic neuritis (red-green colour blindness).
7. **Sulfonamides** — **Stevens-Johnson syndrome**, kernicterus in neonates, haemolysis in **G6PD deficiency** (also dapsone and primaquine).
8. **Tetracyclines** — chelate **Ca²⁺** → tooth discolouration, inhibit bone growth → **avoid in pregnancy and < 8 years**.
9. **Rifampicin** — potent **CYP450 inducer** (orange-red body fluids), resistance emerges rapidly → **never monotherapy in TB**.

#### Pharmacodynamic Edge Cases

- **Macrolides, tetracyclines, chloramphenicol** are classically labelled bacteriostatic but turn **bactericidal** against *Streptococcus pyogenes*, *Treponema pallidum* and at high concentrations. Do not memorise labels as absolute.
- **β-lactam “time-dependent” rule**: efficacy plateaus above ~4× MIC; further raising the peak does not improve killing — that is why **prolonged/continuous infusion** is preferred over bolus for *Pseudomonas* and ICU pneumonia.
- **Carbapenems vs other β-lactams**: imipenem is hydrolysed by renal DHP-1 (hence given with **cilastatin**); meropenem is not. Ertapenem lacks anti-Pseudomonal activity — a frequent MCQ distractor.
- **MRSA screening with cefoxitin/oxacillin disc**: ceftaroline and 5th-generation cephalosporins (ceftobiprole) are the **only β-lactams active against MRSA** because they bind **PBP2a**.

#### Prophylaxis Targets | Dose | Timing

- **Surgical site (clean/clean-contaminated)** — cefazolin 2 g IV within 60 min pre-incision.
- **Rheumatic fever recurrence** — **benzathine penicillin G 1.2–2.4 million units every 3–4 weeks IM**.
- **Endocarditis prophylaxis (dental, valvular disease)** — **amoxicillin 2 g oral 30–60 min pre-procedure**.
- **Post-splenectomy** — penicillin V lifelong (children at least until 5 years post-op).
- **Meningococcal exposure** — rifampicin (or ciprofloxacin in adults).

#### Advanced Practice Prompts

1. A patient on **simvastatin** is prescribed **clarithromycin** for community-acquired pneumonia. Predict the interaction, the biochemical mechanism, and the safest macrolide alternative. *(Answer: clarithromycin + simvastatin → rhabdomyolysis via CYP3A4 inhibition; substitute **azithromycin**, which does not significantly inhibit CYP3A4.)*
2. A G6PD-deficient man requires prophylaxis against *Pneumocystis jirovecii* after a renal transplant. He cannot tolerate TMP-SMX. Discuss alternatives and the screening principle behind dapsone exclusion. *(Answer: **dapsone excluded** — oxidative haemolysis; use **atovaquone** or **pentamidine inhalation**, recognising atovaquone is pregnancy Category C and needs fatty food for absorption.)*

> 📌 **Formula Check:** CI = MTD/MED, FIC = MIC_combined/MIC_alone for each drug summed, MIC/MBC in mg·L⁻¹. Targets: AUC24h/MIC ≥ 30 (FQ), ≥ 10 (AG); Cmax/MIC ≥ 8–10 (AG); %T > MIC ≥ 40–50% (β-lactams); FIC ≤ 0.5 synergy.

---

## Continue your study

- **[View this topic in your NEET PG roadmap](/roadmap/?exam=neet-pg&duration=1mo)** — see where "Chemotherapy — Antimicrobials" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet-pg&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET PG exam overview](/exams/neet-pg/)** — pattern, eligibility, and syllabus
- **[All Pharmacology notes](/notes/neet-pg/pharmacology/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
