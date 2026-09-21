---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-011
topicName: "Conduct an experiment to investigate a situation using experimental design principles (91583)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Conduct an experiment to investigate a situation using experimental design principles (91583) — NCEA Level 3 Calculus Notes

Achievement Standard 91583 carries 4 credits and tests the Level 3 progression of experimental design. It builds on 91265 (Level 2) by adding controls, replicates, randomisation, and blocking, and requires the experiment to be analysed with formal statistical methods (typically from 91582).

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: independent vs dependent variable; controlled variables; replication (≥5 per treatment); randomisation; blocking; pilot testing; data collection; formal statistical analysis; conclusions in context.
- **Merit** requires relational thinking — selecting the right experimental design for the question, choosing appropriate controls.
- **Excellence** requires extended abstract thinking — justifying design choices, reflecting on limitations.

#### Examiner traps

- Confusing independent and dependent variables.
- Not controlling for confounding variables.
- Using too few replicates (less than 5 is usually inadequate for formal inference).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Experimental design principles

**Independent variable** — the variable the experimenter manipulates. e.g., the type of fertiliser.

**Dependent variable** — the variable measured to see the effect. e.g., plant height after 4 weeks.

**Controlled variables** — variables held constant so they cannot affect the dependent variable. e.g., same amount of water, same amount of sunlight, same soil type, same plant species.

**Replication** — repeating each treatment multiple times to estimate variability. At Level 3, aim for at least 5 replicates per treatment (more is better for formal inference).

**Randomisation** — assigning treatments to experimental units at random, to avoid systematic bias.

**Blocking** — grouping similar experimental units together to control for known sources of variability.

#### Conducting the experiment

1. **Plan.** Write a clear plan with the variables, the controls, the number of replicates, and the randomisation scheme.
2. **Pilot test.** Run a small pilot to identify issues with the protocol.
3. **Carry out.** Follow the plan, recording data carefully.
4. **Manage data.** Check for errors, missing values, outliers. Tabulate the data.
5. **Analyse.** Calculate summary statistics, display the data, and apply formal statistical methods (e.g., two-sample t-test, ANOVA) to compare treatments.
6. **Report.** Summarise findings in a written report with reference to the experimental context, including p-values and confidence intervals.

#### Formal statistical analysis

At Level 3, the analysis should include formal statistical methods:

- **Two-sample t-test:** compare two treatment means.
- **One-way ANOVA:** compare three or more treatment means.
- **Chi-square test:** compare observed and expected frequencies for categorical data.

For each, state the hypotheses, calculate the test statistic, find the p-value, and interpret the result.

#### Worked example: fertiliser trial

A farmer wants to test three fertilisers (A, B, C) on plant growth. Each fertiliser is applied to 5 randomly selected plots (15 plots total). Plant height is measured after 4 weeks.

- Independent variable: fertiliser type (A, B, C).
- Dependent variable: plant height.
- Controlled variables: plot size, water, sunlight, plant species, initial plant height.
- Replication: 5 plots per fertiliser.
- Randomisation: random assignment of fertilisers to plots.
- Analysis: one-way ANOVA comparing the three treatment means.

If the ANOVA p-value < 0.05, conclude that at least one fertiliser produces a different mean plant height. Follow up with post-hoc tests (Tukey's HSD) to identify which pairs differ.

#### Randomisation and blocking

Randomisation equalises the effect of all unknown variables across treatments. Without it, the experimenter might assign the "best" plots to one treatment and the "worst" plots to another.

Blocking captures known variability within blocks. If one side of the field gets more sunlight, block by side so each fertiliser appears in each block.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why replication matters

Replication allows estimation of variability and detection of differences. Without replication, we cannot:

- Estimate the standard error.
- Perform formal inference (t-tests, ANOVA).
- Distinguish signal from noise.

At Level 3, the recommended minimum is 5 replicates per treatment, but 10 or more is better for detecting smaller effects.

#### Why randomisation matters

Randomisation prevents systematic bias. Without it, the experimenter might (consciously or unconsciously) assign treatments in a way that favours a particular outcome.

Randomisation is the foundation of the randomised controlled trial (RCT), the gold standard for causal inference in clinical trials and other fields.

#### Why blocking matters

Blocking increases precision. If there is a known source of variability (e.g., a gradient in sunlight across a field), blocking groups the experimental units by that source so the variation is captured within blocks rather than between treatments.

The analysis can then account for the blocking structure (e.g., randomised block ANOVA), increasing the power to detect treatment effects.

#### Common misconceptions (and the correction)

- "Replication means doing the experiment multiple times." No — replication means repeating each treatment within a single experiment.
- "Randomisation is just random assignment." No — randomisation is also about the order of measurements, the assignment of observers, and other design choices.
- "Blocking is the same as replication." No — blocking controls for known variability; replication estimates variability.
- "I can change the design mid-experiment." No — pre-register the design to avoid p-hacking and confirmation bias.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91583 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
