---



exam: cuet
examName: CUET UG
subject: chemistry
subjectName: Chemistry
topic: chem-016
topicName: Electrochemistry
weight: 4
country: india
generated: "2026-03-24T08:32:07.843903"
lastUpdated: "2026-09-06"
diagramPrompt: "Clear scientific diagram of Electrochemistry with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Electrochemistry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Electrochemistry studies the interconversion of chemical and electrical energy through redox reactions at electrode–electrolyte interfaces. In galvanic (voltaic) cells the reaction is spontaneous (ΔG° < 0, E°_cell > 0), while in electrolytic cells an external power source drives a non-spontaneous reaction. Oxidation always occurs at the **anode** and reduction at the **cathode**; the sign of these electrodes flips between cell types.

- **Nernst equation (298 K):** E_cell = E°_cell − (0.0591 / n) log Q, where n = electrons transferred per mole of reaction.
- **Faraday's First Law:** m = (M · I · t) / (n · F), with F = 96485 C·mol⁻¹.
- **Standard Hydrogen Electrode (SHE):** assigned E° = 0.00 V; all other standard reduction potentials are measured relative to it.
- **Molar conductivity:** Λ_m = κ / c; for weak electrolytes, degree of dissociation α = Λ_m / Λ°_m.

| Quantity | Formula | Unit |
| --- | --- | --- |
| EMF–Gibbs link | ΔG° = −nFE°_cell | J·mol⁻¹ |
| Cell constant | G = l / A | cm⁻¹ |
| Kohlrausch | Λ°_m = ν₊λ°₊ + ν₋λ°₋ | S·cm²·mol⁻¹ |

CUET UG typically asks 2–4 MCQs from this unit — focus on Nernst numericals and Faraday's law calculations.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Cell types and sign convention

A **galvanic cell** converts chemical energy into electricity (e.g., Daniell cell: Zn|Zn²⁺||Cu²⁺|Cu). The anode is negative because electrons leave it through the external wire; the cathode is positive. An **electrolytic cell** does the opposite — a battery forces electrons in, so the anode becomes positive (connected to the + terminal of the source) and the cathode negative. Confusing these signs is the single most common error in CUET MCQs.

#### Nernst equation and Gibbs free energy

The Nernst equation generalises the cell potential away from standard conditions:

E_cell = E°_cell − (RT / nF) ln Q

At 298 K, the 2.303RT/F factor collapses to 0.0591 V, giving the base-10 form used in most CUET numericals. Because ΔG° = −nFE°_cell, a positive E°_cell corresponds to a spontaneous reaction and is linked to the equilibrium constant via E°_cell = (0.0591 / n) log K_c at 25 °C.

#### Electrolysis and Faraday's laws

Faraday's First Law states that the mass deposited is directly proportional to the charge passed: m = ZIt, where Z = M / (nF) is the electrochemical equivalent. Faraday's Second Law compares masses liberated by the same charge: m₁/m₂ = (E₁ / E₂), where E = M/n is the equivalent weight.

> **Trap:** for Al³⁺ reduction, use n = 3 (not 1) when substituting into m = MIt/nF.

#### Conductance of solutions

Specific conductivity κ depends on the cell geometry and ion concentration; molar conductivity Λ_m = κ/c removes the concentration effect, allowing fair comparison between electrolytes. For **strong electrolytes**, Λ_m varies linearly with √c (Debye–Hückel–Onsager equation). For **weak electrolytes**, Λ_m rises sharply on dilution as the degree of dissociation α approaches 1.

#### Kohlrausch's law

Kohlrausch's law of independent migration of ions states Λ°_m = ν₊λ°₊ + ν₋λ°₋ at infinite dilution. This lets you calculate the limiting molar conductivity of a weak electrolyte (like acetic acid) indirectly, by adding tabulated λ° values of strong-electrolyte salts.

| Concept | Key point |
| --- | --- |
| Galvanic cell | Spontaneous; anode (−), cathode (+) |
| Electrolytic cell | Non-spontaneous; anode (+), cathode (−) |
| Strong electrolyte | Λ_m vs √c is linear; fully dissociated |
| Weak electrolyte | α = Λ_m / Λ°_m; dissociation rises on dilution |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked example — Nernst calculation

Consider the cell Mg | Mg²⁺(0.01 M) || Ag⁺(0.1 M) | Ag at 298 K. Given E°_Mg²⁺/Mg = −2.37 V and E°_Ag⁺/Ag = +0.80 V, find E_cell.

E°_cell = E°_cathode − E°_anode = 0.80 − (−2.37) = +3.17 V. Reaction: Mg + 2Ag⁺ → Mg²⁺ + 2Ag, so n = 2 and Q = [Mg²⁺]/[Ag⁺]² = 0.01 / (0.1)² = 1.

E_cell = 3.17 − (0.0591 / 2) log(1) = 3.17 V. The reaction stays strongly spontaneous because Q = 1 (a useful sanity check — non-zero Q would lower E_cell).

#### Products of electrolysis — discharge tendency

During electrolysis of mixed electrolytes (e.g., aqueous NaCl with inert electrodes), the species discharged at each electrode depends on **relative discharge potentials**, not just concentration. At the cathode, the order is generally: Al³⁺ > Mg²⁺ > Na⁺ (hydrogen discharge preferred over very negative metals). At the anode, easier oxidation wins: S²⁻ > I⁻ > Br⁻ > Cl⁻ > OH⁻ > F⁻ > SO₄²⁻. For **active electrodes** (Cu, Ag), the anode itself dissolves instead of discharging anions — this is the principle behind electrorefining.

#### Corrosion as an electrochemistry application

Rusting of iron is essentially a microscopic galvanic cell: at anodic spots Fe → Fe²⁺ + 2e⁻, at cathodic spots O₂ + 2H₂O + 4e⁻ → 4OH⁻. The Fe(OH)₂ formed oxidises to hydrated Fe₂O₃ (rust). Cathodic protection — connecting iron to a more active metal like Zn or Mg — reverses the polarity and prevents corrosion.

#### Common mistakes and edge cases

| Mistake | Correct practice |
| --- | --- |
| Using oxidation potentials in E°_cell | Always use standard **reduction** potentials, then subtract (cathode − anode) |
| Writing E = E° + (0.0591/n) log Q | The sign is **minus** in the Nernst equation |
| Plugging mol·L⁻¹ directly into Λ_m = κ/c | Convert c to mol·cm⁻³ (divide mol·L⁻¹ by 1000) when κ is in S·cm⁻¹ |
| Forgetting n in Faraday's law | Match n to the electrons in the half-reaction (Al³⁺ → n = 3) |
| Applying Kohlrausch at finite concentration | Use it only for **limiting** (Λ°_m) values at infinite dilution |

> **Exam tip:** in CUET UG, questions often pair a Nernst numerical with a sign-convention twist on galvanic vs electrolytic cells. Sketch the cell, label anode/cathode first, then substitute into the formula — you'll avoid two errors at once.

#### Practice prompts
1. A solution of CuSO₄ is electrolyzed for 40 minutes with a 2 A current. Find the mass of copper deposited (M_Cu = 63.5 g·mol⁻¹, n = 2). *(Answer: m = (63.5 × 2 × 2400) / (2 × 96485) ≈ 1.58 g.)*
2. The molar conductivity of 0.05 M CH₃COOH is 35 S·cm²·mol⁻¹ and Λ°_m = 390 S·cm²·mol⁻¹. Calculate α and K_a. *(Answer: α = 35/390 ≈ 0.0898; K_a = α²c / (1−α) ≈ 4.4 × 10⁻⁴.)*

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Electrochemistry" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/cuet/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
