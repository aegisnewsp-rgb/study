---
exam: slmc
examName: SLMC Medical (Sri Lanka)
subject: chemistry
subjectName: Chemistry
topic: chemis-001
topicName: Organic Chemistry Fundamentals
weight: 3
country: srilanka
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-20"
---

# Organic Chemistry Fundamentals

### 🟢 Lite — Quick Review (1h–1d)
> Skim this in under ten minutes the morning of the exam and you'll have the framework for the 1–2 MCQs that SLMC throws at you from this section.

**Organic chemistry** studies carbon compounds — mainly those built on C–H frameworks. Carbon's tetravalency + catenation produce millions of structures, classified by **functional group** and reactivity, not by atom count.

> 💡 **Memory Hook:** "**C**arbon **F**orms **F**our, and **C**hains **F**orever" — tetravalency (4 bonds) + catenation (long chains) = enormous structural variety.

The four formulas you must own:

| Compound class | General formula | Variable meaning |
|---|---|---|
| Alkane (saturated) | C_nH_(2n+2) | n = number of C atoms (dimensionless) |
| Alkene / cycloalkane | C_nH_(2n) | n = number of C atoms (dimensionless) |
| Alkyne / cycloalkadiene (one triple or two rings/double bonds counted together) | C_nH_(2n−2) | n = number of C atoms (dimensionless) |
| Benzene (aromatic) | C_nH_(2n−6) | n = number of C atoms (dimensionless) |

Plus one diagnostic tool: **Degree of Unsaturation** DoU = (2C + 2 + N − H − X)/2, where C, H, N, X are atom counts (dimensionless). Oxygen and sulfur don't change DoU. Three exam-style uses: pick the right homologous series, spot rings vs double bonds, and check an unknown formula.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Half your marks here come from IUPAC naming and isomer-spotting, so spend disproportionate time on those two.

#### Functional-group ladder
Functional groups dictate reactivity. Ranking by seniority for IUPAC naming (highest → lowest): carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > alkene/alkyne > halide. When two groups appear on the same molecule, the senior one becomes the suffix and the rest become prefixes.

#### Isomerism at a glance

| Type | What varies | Carbon skeleton example | SLMC-favourite test question |
|---|---|---|---|
| Chain | Branching only | n-butane vs isobutane (both C₄H₁₀) | "Same formula, different boiling point — which type?" |
| Position | Same group, different C | propan-1-ol vs propan-2-ol | Identify by lowest locant rule |
| Functional group | Different group, same C/H ratio | propanal vs propanone (both C₃H₆O) | Identify by oxidation product |
| Geometric (cis-trans) | Restricted C=C rotation | cis-but-2-ene vs trans-but-2-ene | Requires each alkene C to carry two different groups |
| Optical | Chiral C (four different substituents) | 2-butanol has two enantiomers | Plane-polarised light rotates oppositely |

#### IUPAC naming — the four moves
1. Find the **longest carbon chain** that contains the principal functional group's carbon.
2. **Number** from the end giving the principal group the **lowest possible locant** — not the substituent.
3. Name substituents as prefixes (methyl-, chloro-, hydroxy-) with their locants.
4. Assemble: locants + prefixes + parent chain length (meth-, eth-, prop-) + ene/yne/anol/anoic acid + principal group locant.

#### Reaction families you'll meet

| Family | Mechanism flavour | Net change |
|---|---|---|
| Substitution (Sₙ1/Sₙ2) | Nucleophile attacks C–X (X = halogen) | H or OH replaces X |
| Electrophilic addition | Alkene + HX, X₂, H₂O | One σ bond adds across C=C |
| Elimination | Loss of H and X from adjacent C | C=C forms |
| Oxidation of alcohols | Primary → aldehyde → acid; secondary → ketone; tertiary → no reaction | C–H bond oxidised |
| Esterification | R-COOH + R'-OH ⇌ R-COO-R' + H₂O, acid-catalysed | Water eliminated |

Markovnikov's rule: H adds to the C with **more** H's already, because it forms the **more stable carbocation** intermediate. Peroxide reverses this only for HBr (radical chain, not carbocation).

#### Worked calculation
A compound has molecular formula C₄H₆. Determine the degree of unsaturation.

DoU = (2C + 2 − H)/2 = (2·4 + 2 − 6)/2 = (8 + 2 − 6)/2 = 4/2 = **2**.

Two degrees of unsaturation. C₄H₆ could hold one triple bond (but-1-yne, but-2-yne), two double bonds (buta-1,3-diene), one ring + one double bond (cyclobutene, methylenecyclopropane), or two rings.

> ⚠️ **Examiner Trap:** Students double-count. DoU = 2 means two total — not "two double bonds equals four." Each ring or π bond costs **one** degree.

---

### 🔴 Extended — Deep Study (3mo+)
> Push past pattern-matching into mechanism reasoning — this is what separates a 70% scorer from a 90% scorer.

#### Electron-displacement effects — the real driver

| Effect | Symbol | How it acts | Consequence for pKa / pKb |
|---|---|---|---|
| Inductive | +I / −I | Through σ bonds, falls off with distance | Electron-donating alkyls (+I) **reduce** carboxylic-acid acidity; electron-withdrawing −CF₃ (−I) **increase** it |
| Mesomeric / resonance | +M / −M | Through π system, felt further than inductive | −NO₂ (−M and −I) on phenol drops pKa from ~10 to ~7 |
| Hyperconjugation | σ(C–H) → empty p | Stabilises carbocations, radicals | (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺ — predicts Markovnikov outcome |

#### Acidity / basicity orders you should derive, not memorise

| Acid / base | Order | Why |
|---|---|---|
| Carboxylic acids | HCOOH > CH₃COOH > CH₃CH₂COOH | +I of alkyls destabilises the conjugate base; formic has no alkyl |
| Substituted acetic acids | Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH > CH₃COOH | Each additional Cl adds −I, stabilising the anion |
| Amines (gas phase / aprotic) | (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃ | Lone pair in sp³ vs s character raises availability |
| Amines (aqueous / protic) | (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ | Solvation of the protonated amine dominates; tertiary is sterically crowded |

#### Hybridisation tells the story
sp carbon holds 50% s-character; electrons sit closer to the nucleus. Terminal alkyne C–H (sp, pKa ≈ 25) is **far more acidic** than alkene C–H (sp², pKa ≈ 44) or alkane C–H (sp³, pKa ≈ 50). Use this to rationalise any acidity ordering without memorising numbers.

#### Stability ladder of intermediates
Carbocation: 3° > 2° > 1° > methyl — hyperconjugation and +I donate electron density into the empty p.
Free radical: 3° > 2° > 1° > methyl — same logic, weaker effect.
Carbanion: methyl > 1° > 2° > 3° — opposite, because negative charge is destabilised by electron-donating groups.

#### Edge cases that trip up toppers

| Case | Wrong assumption | Correct view |
|---|---|---|
| Phenol vs cyclohexanol | Both are "alcohols" | Phenol is acidic (pKa ≈ 10) because the phenoxide is stabilised by resonance; cyclohexanol is neutral (pKa ≈ 17) |
| Vinyl halide vs alkyl halide | Both undergo Sₙ2 | Vinyl C–X has partial double-bond character (lone pair of X overlaps with π), so Sₙ1/Sₙ2 is suppressed |
| Combustion of aromatic | Same products as open chain | Balanced on C and H only; complete combustion always gives CO₂ + H₂O regardless of saturation |
| Oxygen in DoU | Affects the count | Oxygen is divalent and cancels out — ignore it in the formula |
| Glucose formula C₆H₁₂O₆ and acetic acid dimer | Two "different" compounds | Glucose has DoU = 1 (one ring); the acid "dimer" is held by two H-bonds, not a ring |

#### Two advanced practice prompts

1. Rank p-nitrophenol, p-cresol, and phenol in order of acidity. Predict qualitatively what changes in the para substituent and check whether −I alone explains any difference, or whether −M is required.
2. 2-Bromobutane reacts with NaOH. Predict the major and minor products under aqueous and alcoholic conditions respectively. State which mechanism (Sₙ1, Sₙ2, E1, E2) dominates in each, naming the orbital-geometry reason (backside attack requires anti-periplanar leaving group for E2, while Sₙ1 proceeds via a planar carbocation open to either face).

> 📌 **Formula Check:** DoU = (2C + 2 + N − H − X)/2 — dimensionless counts only. Plug in atom counts, never gram or mole values.

---

## Continue your study

- **[View this topic in your SLMC Medical (Sri Lanka) roadmap](/roadmap/?exam=slmc&duration=1mo)** — see where "Organic Chemistry Fundamentals" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=slmc&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SLMC Medical (Sri Lanka) exam overview](/exams/slmc/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/slmc/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
