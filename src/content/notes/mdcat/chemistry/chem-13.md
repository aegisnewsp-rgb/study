---
exam: mdcat
examName: MDCAT
subject: chemistry
subjectName: Chemistry
topic: chem-13
topicName: Hydrocarbons
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.099787"
lastUpdated: "2026-09-19"
diagramPrompt: "Clear scientific diagram of Hydrocarbons with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"


---

# Hydrocarbons

### 🟢 Lite — Quick Review (1h–1d)
> The single test of "which family?" is the molecular formula and the bond type — get those right and the rest of the chapter falls in line.

Hydrocarbons contain only carbon and hydrogen. The carbon skeleton (catenation) decides the family, and the family decides every reaction you will see on the MDCAT paper.

- **Alkanes** — single C–C bonds, **saturated**, formula C_nH_(2n+2). Methane is the smallest (n = 1).
- **Alkenes** — one C=C, **unsaturated**, formula C_nH_(2n) where n ≥ 2.
- **Alkynes** — one C≡C, formula C_nH_(2n–2) where n ≥ 2.
- **Aromatics** — benzene-type ring with delocalised π-electrons; the parent is C_6H_6.

Degree of unsaturation = (2C + 2 – H)/2. Each ring or π bond adds one; a triple bond adds two.

> 💡 **High-Yield Memory Hook:** "**ANE** is **A**lone, **ENE** has **1** π, **YNE** has **2** π." Memorise: CnH(2n+2) → alkane, CnH(2n) → alkene, CnH(2n–2) → alkyne. If the H-count drops by 2, one degree of unsaturation appeared.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard-tier read for MDCAT Chemistry 2026: build the chain–group–reactivity mental model and you can answer every Hydrocarbons MCQ in under 90 seconds.

#### Hybridisation and Bonding Backbone

Each carbon family corresponds to a fixed hybridisation, and that hybridisation is what controls geometry and reactivity.

| Family | Hybridisation | Geometry | Bonds per C |
|---|---|---|---|
| Alkane (–C–C–) | sp³ | Tetrahedral, 109.5° | 4 σ |
| Alkene (=C–) | sp² | Trigonal planar, 120° | 3 σ + 1 π |
| Alkyne (≡C–) | sp | Linear, 180° | 2 σ + 2 π |
| Benzene (aromatic) | sp² | Planar hexagonal, 120° | σ framework + delocalised π |

The π bond is weaker than σ (≈ 65 kcal/mol vs ≈ 85 kcal/mol for C–C σ). That single fact explains why alkenes and alkynes react faster than alkanes: electrophiles attack the exposed π electrons.

#### General Formulas vs Structural Reality

A formula alone is ambiguous — MDCAT in many papers exploits this. C_nH_(2n) fits **both** an alkene and a cycloalkane. C_nH_(2n–2) fits an alkyne, a diene, **or** a cycloalkene. The exam will require you to look at the structure or the reaction to disambiguate.

| Molecular formula | Aliphatic family | Cyclic possibility |
|---|---|---|
| C_nH_(2n+2) | Alkane | None (a saturated ring needs 2H fewer) |
| C_nH_(2n) | Alkene | Cycloalkane |
| C_nH_(2n–2) | Alkyne | Cycloalkene or diene |
| C_6H_6 | Benzene (aromatic) | None — count π-electrons: 6 (Hückel 4n+2, n=1) |

#### Nomenclature Workflow (IUPAC)

1. Find the longest carbon chain that contains the maximum number of multiple bonds.
2. Number the chain so the first multiple bond gets the lowest locant; double bonds outrank substituents but the rule still applies to the *first* encountered π.
3. Replace the terminal –e with –ene (alkene) or –yne (alkyne); the position number precedes the suffix (e.g. but-2-ene, not 2-butene).
4. List substituents alphabetically with their locants before the parent name.

#### Worked Numerical: Combustion Stoichiometry

How many moles of O₂ are required to combust **1 mole of propane (C₃H₈)** completely?

Using the general formula CnH(2n+2) + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O, with n = 3:

Moles of O₂ = (3·3 + 1)/2 = 10/2 = **5 mol O₂**.

Products: 3 mol CO₂ and 4 mol H₂O. This stoichiometric ratio is the template the examiner expects when a combustion question is asked.

> ⚠️ **Examiner Trap:** Students in many papers use the shortcut "2 mol O₂ per C and 0.5 mol O₂ per H" and forget the (3n+1)/2 form. For propane that gives 6 + 2 = 8 mol — wrong. The general-formula derivation is faster and always correct.

#### Reactivity Order and Why It Matters

Alkanes < benzene < alkenes ≈ alkynes in electrophilic reactions.

- **Alkanes**: free-radical substitution, Cl₂/Br₂ in UV light. Non-polar, low reactivity.
- **Alkenes / Alkynes**: electrophilic addition across the π bond — HBr, H₂O/H⁺, H₂/Ni, Br₂ in CCl₄ (decolourizes).
- **Benzene**: electrophilic substitution only — the aromatic π cloud holds together; addition would cost the 150 kJ/mol resonance stabilisation. Substitution preserves aromaticity.

#### Markovnikov's Rule (Standard Form)

When HX (HCl, HBr, HI) or H₂O/H⁺ adds to an unsymmetrical alkene:

> The hydrogen goes to the carbon of the C=C that already has more hydrogens; the halogen (or OH) goes to the more substituted carbon.

Carbocation stability is the underlying reason: a secondary carbocation is more stable than a primary, so the proton adds to give the more substituted cation.

> ⚠️ **Examiner Trap:** MDCAT tests standard Markovnikov. If the question adds the word "peroxide" or specifies "in the presence of HBr + ROOR", switch to **anti-Markovnikov** (Kharasch effect) — Br attaches to the less substituted carbon. Read the conditions before you answer.

### 🔴 Extended — Deep Study (3mo+)
> Where this topic slips up the strongest MDCAT candidates: edge cases in general formulas, isomers, and the few rare reaction types examiners reserve for top-percentile questions.

#### Degrees of Unsaturation — The Cleanest Diagnostic

Use the formula DoU = (2C + 2 – H – X + N)/2, where C = carbons, H = hydrogens, X = halogens, N = nitrogens (oxygen and sulfur are ignored). Each DoU equals one ring **or** one π bond. A benzene ring therefore reports DoU = 4 (3 π bonds + 1 ring).

| Compound | Formula | DoU | Structural meaning |
|---|---|---|---|
| Hexane | C₆H₁₄ | 0 | Pure alkane chain |
| Hexene | C₆H₁₂ | 1 | One C=C |
| Hexyne | C₆H₁₀ | 2 | One C≡C |
| Cyclohexane | C₆H₁₂ | 1 | One ring |
| Benzene | C₆H₆ | 4 | Three π + one ring |

#### Isomerism — Where MDCAT Questions In many papers Hide

1. **Chain isomers** differ in the carbon skeleton (n-butane vs isobutane).
2. **Position isomers** differ in the location of the multiple bond (but-1-ene vs but-2-ene).
3. **Functional-group isomers** share a formula but belong to different families (C₃H₆ = propene or cyclopropane).
4. **Geometric (cis-trans) isomers** appear in alkenes where each double-bond carbon carries two different groups.

Boiling-point rule that examiners love: **branching lowers boiling point** because London dispersion forces decrease as the molecule becomes more spherical. n-pentane boils at 36 °C while neopentane (2,2-dimethylpropane) boils at 9.5 °C — same formula C₅H₁₂, different surface area.

#### Advanced Trap Table

1. **Benzene resists addition** — never write "Br₂/Br₂ in CCl₄ decolourises benzene at room temperature"; benzene needs a Lewis-acid catalyst (FeBr₃ or AlCl₃) and undergoes substitution, not addition.
2. **Alkynes show two-stage addition** — a controlled 1 mol of H₂/Ni stops at the alkene; a second 1 mol pushes to the alkane. The reverse logic also applies: addition of 1 mol HX to an alkyne gives a vinyl halide, not a dihalide.
3. **Cyclopropane tests the model** — its formula is C₃H₆ (looks like an alkene) yet it is a saturated cycloalkane. The ring strain (~27 kcal/mol) is the only "energy cost" feature.
4. **Combustion of alkenes vs alkanes** — alkenes burn with a slightly smoky flame because the carbon-to-hydrogen ratio is higher; an examiner's image-based question can show this.
5. **Markovnikov vs peroxide** — read the question stem. "HBr in presence of peroxide" flips the regiochemistry. HCl and HI do **not** show the peroxide effect in practice; the trap answer is HCl + peroxide → anti-Markovnikov (incorrect; HCl is too slow to radicalise).
6. **Free-radical halogenation selectivity** — Br₂ is selective (gives tertiary H abstraction preferred); Cl₂ is non-selective. MDCAT can ask which halogen substitution gives the highest tertiary yield.

#### Practice Prompts

1. A hydrocarbon with molecular formula C₅H₁₀ gives a single monobromination product and decolourises bromine in CCl₄ within seconds. Name the compound and identify the hybridisation of each carbon.
2. Write the IUPAC name and the major Markovnikov product when 2-methylbut-2-ene reacts with HCl. State the carbocation intermediate formed in the rate-determining step.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Hydrocarbons" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/mdcat/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
