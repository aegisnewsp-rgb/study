---
exam: tnpsc
examName: TNPSC Group 1
subject: geography
subjectName: "Geography"
topic: geogra-009
topicName: Key Demographic Indicators
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Key Demographic Indicators

### 🟢 Lite — Quick Review (1h–1d)
> Compact summary for last-minute revision before the prelims.

Census 2011 puts India's population density at 382 persons per km², sex ratio at 943 females per 1000 males, and literacy at 74.04% — three numbers that recur in TNPSC Group 1 Geography. **Key Demographic Indicators** are the statistical ratios demographers use to compress population size, growth, and composition into single comparable numbers. TNPSC questions almost always test the formula, the unit, and the data source.

| Indicator | Formula (per 1000 unless noted) | Source |
|---|---|---|
| Crude Birth Rate (CBR) | Live births ÷ mid-year population × 1000 | SRS |
| Crude Death Rate (CDR) | Deaths ÷ mid-year population × 1000 | SRS |
| Infant Mortality Rate (IMR) | Infant deaths (<1 yr) ÷ live births × 1000 | SRS |
| Maternal Mortality Ratio (MMR) | Maternal deaths ÷ live births × **100000** | SRS |
| Total Fertility Rate (TFR) | Sum of age-specific fertility rates (15–49) | NFHS |
| Sex Ratio | Females ÷ males × 1000 | Census |
| Density | Total population ÷ geographical area (km²) | Census |

> 💡 **High-Yield Memory Hook (Memory Hook):** "**BCDS-IMS-TL**" — Births, CDR, Density, Sex Ratio, IMR, MMR, Sex ratio, TFR, Literacy. The first letter of each indicator tells you its denominator source: **S** = SRS annual, **C** = Census decennial, **N** = NFHS quinquennial. Memorising the source-letter removes 80% of "which survey?" traps.

### 🟡 Standard — Regular Study (2d–2mo)
> Full conceptual coverage with mechanisms, traps, and one worked problem.

#### What makes a rate "crude" versus "specific"

A **crude rate** uses the entire mid-year population in the denominator — convenient, but it hides compositional effects. CBR and CDR are crude because they ignore age structure. A **specific rate** narrows the denominator to a biologically or demographically relevant subgroup: IMR uses live births, TFR sums fertility for women aged 15–49, MMR uses live births. TNPSC frequently asks "why is IMR not expressed per 1000 of total population?" — answer: because only newborns can die as infants, so the at-risk population is births, not residents.

#### Comparison matrix of commonly confused rates

| Indicator | Denominator | Multiplier | What it actually captures |
|---|---|---|---|
| CBR | Mid-year total population | × 1000 | Birth frequency in whole society |
| General Fertility Rate (GFR) | Women aged 15–49 | × 1000 | Birth frequency per reproductive-age woman |
| TFR | Synthetic cohort of women 15–49 | None (children/woman) | Lifetime births a woman would have at current ASFRs |
| IMR | Live births in same year | × 1000 | Risk of dying before age 1 |
| MMR | Live births in same year | × **100000** | Risk of maternal death per pregnancy |

Notice the **100× difference** between IMR and MMR multipliers — the most common calculation slip in TNPSC numericals. Also notice TFR has **no multiplier**; it is already in "children per woman," not per 1000.

#### Mechanism of natural growth and total change

Population change over a year obeys:

> **P(t+1) = P(t) + (Births − Deaths) + (In-migrants − Out-migrants)**

The first bracketed term is **natural growth** (CBR − CDR), the second is **net migration**. SRS reports natural growth; Census reports total change. When a question gives only the decadal growth rate (e.g. 17.7% for 2001–11), natural growth alone will not reproduce it because migration is embedded in the total.

#### Worked problem (TNPSC mains style)

A district reports 45,000 live births, 1,260 infant deaths, and 18 maternal deaths in 2023. The mid-year population is 3,00,000. Compute (a) IMR, (b) MMR, (c) CBR, and (d) NGR if CDR is 7.2.

- IMR = (1,260 / 45,000) × 1000 = **28.0 per 1000 live births**
- MMR = (18 / 45,000) × 100,000 = **40 per 100,000 live births**
- CBR = (45,000 / 3,00,000) × 1000 = **15.0 per 1000**
- NGR (per 1000) = CBR − CDR = 15.0 − 7.2 = **7.8 per 1000**; in percent = **0.78% per annum**

> ⚠️ **Examiner Trap:** Students routinely divide maternal deaths by 1000 instead of 100,000, producing an MMR of 0.4 instead of 40. The multiplier differs by two orders of magnitude from IMR — write it out every time. A second trap: converting NGR to a percent by moving the decimal the wrong way (7.8 per 1000 is 0.78%, not 7.8%).

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, demographic transition, and exam-specific traps.

#### Where the numbers come from — source discipline

The Registrar General of India runs two parallel systems. **Census of India** is a decennial enumeration (last 2011; next postponed) and is the only source for absolute population, density, literacy, and migration streams. **Sample Registration System (SRS)** is a continuous demographic surveillance in selected areas and publishes annual estimates of CBR, CDR, IMR, and MMR. **NFHS** (National Family Health Survey) provides TFR, SRB, and maternal-child health indicators roughly every five years. TNPSC question stems often quote "per Census" or "as per SRS" — mixing them (e.g. attributing TFR to Census) is a frequent error.

#### Demographic Transition and India's stage

The four-stage model (Thompson–Notestein) traces a society from high CBR + high CDR (Stage 1, pre-industrial), through falling CDR with still-high CBR (Stage 2, early industrial), to falling CBR with low CDR (Stage 3, late industrial), and finally both rates low and oscillating (Stage 4, post-industrial). India's IMR has dropped, TFR has fallen below the **2.1 replacement level** (NFHS-5 reports TFR = 2.0), and CDR is low — but **state-level heterogeneity** keeps the country in late Stage 3: Kerala, Tamil Nadu, and Goa behave like Stage 4, while Bihar, UP, and MP still display Stage 2–3 mortality profiles. A national "India is in Stage 4" answer is wrong for TNPSC.

#### Advanced traps and exceptions

1. **Child Sex Ratio vs. Sex Ratio.** Overall Sex Ratio (2011: 943) improved from 933 in 2001, but Child Sex Ratio (0–6 years) **fell to 914** in 2011 from 927 in 2001 — evidence of intensifying prenatal gender bias. TNPSC matches "improving" with the wrong indicator.
2. **Density is geographically lopsided.** Census 2011 extremes — Bihar (~1106), Arunachal Pradesh (~17) per km². Tamil Nadu sits near the all-India average (~555). Memorise the top-3 and bottom-3 states, not a single national figure.
3. **Literacy definition.** A person aged **7 years and above** who can read and write any language with understanding is literate. Children below 7 and populations of all ages in the denominator are wrong formulations.
4. **Dependency Ratio nuance.** Youth dependency (0–14) and old-age dependency (65+) can move in opposite directions; TNPSC sometimes asks which is rising in India — answer: old-age, as fertility declines.
5. **Migration streams.** Census classifies migrants by **place of birth** (lifetime migrant) and **place of last residence** (recent migrant). Rural-to-urban is the dominant stream, but urban-to-urban has grown faster in the last two decades.
6. **GRR vs. NRR.** Gross Reproduction Rate counts daughters a woman would bear at current ASFRs; NRR applies female-only survival rates. NRR = 1 is the true replacement threshold — slightly below 1 corresponds to TFR of 2.1 because of male births and mortality.

#### Practice prompts for self-test

1. A state has TFR 1.6, IMR 22, MMR 65, and overall Sex Ratio 1050. Identify which indicator is **inconsistent** with a typical late-Stage-3 Indian state and justify. *(Hint: Sex Ratio above 1000 is biologically unusual — possible reporting artefact or male out-migration.)*
2. SRS reports IMR = 28 and NFHS-5 reports TFR = 2.0. If replacement is 2.1, will India's population stabilise in 30 years? Argue using momentum: even sub-replacement TFR continues to add population because of the youthful age structure. *(Answer: no, momentum persists 30–40 years post-replacement.)*

## Continue your study

- **[View this topic in your TNPSC Group 1 roadmap](/roadmap/?exam=tnpsc&duration=1mo)** — see where "Key Demographic Indicators" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=tnpsc&duration=1d)** — 1-day sprint covering highest-weight topics
- **[TNPSC Group 1 exam overview](/exams/tnpsc/)** — pattern, eligibility, and syllabus
- **[All Geography notes](/notes/tnpsc/geography/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
