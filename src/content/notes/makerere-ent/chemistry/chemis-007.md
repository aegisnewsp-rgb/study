---
exam: makerere-ent
examName: Makerere University (Uganda)
subject: organic-chemistry
subjectName: ('chemistry', 'Chemistry')
topic: chemis-007
topicName: Topic 7
weight: 3
country: makerere
generated: "2026-03-25T17:00:00"
---

# Organic Reactions & Mechanisms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Organic Reactions & Mechanisms** — Key Facts for Makerere University (Uganda)
Core concept: Understanding reaction mechanisms allows you to predict products, explain reactivity, and account for stereochemical outcomes
High-yield points: SN1 vs SN2 vs E1 vs E2 mechanisms; electrophilic addition to alkenes; nucleophilic addition to carbonyls; radical halogenation of alkanes; free energy diagrams
⚡ Exam tip: When asked to predict products, always identify the mechanism type first by examining substrate, nucleophile/base strength, and solvent

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Organic Reactions & Mechanisms** — Makerere University (Uganda) Study Guide

## 1. Bond Breaking and Making in Organic Reactions

### Homolytic vs Heterolytic Cleavage

**Homolytic cleavage** (equal sharing of electrons):
A:B → A• + B• (each gets one electron)
- Produces **free radicals**
- Occurs in non-polar bonds under heat or UV light
- **Bond dissociation energy**: Energy needed for homolytic cleavage

**Heterolytic cleavage** (unequal sharing, one atom takes both electrons):
A:B → A⁺ + :B⁻ (or A:⁻ + B⁺)
- Produces **carbocations** (A⁺) or **carbanions** (A:⁻)
- Occurs in polar bonds, especially in polar solvents
- Carbocation: electron-deficient, sp² hybridized, 6 electrons
- Carbanion: electron-rich, pyramidal shape, like NH₃

### Types of Reagents

**Electrophiles** (electron-loving): Electron-deficient species that accept electron pairs
- H⁺, NO₂⁺, AlCl₃, FeBr₃, Br₂ (in reactions where Br–Br bond is polarized)
- Carbocations: R⁺

**Nucleophiles** (nucleus-loving): Electron-rich species that donate electron pairs
- Anions: OH⁻, CN⁻, Cl⁻, Br⁻, NH₂⁻, RCOO⁻
- Neutral with lone pairs: NH₃, H₂O, ROH, ROR
- Carbanions: R:MgX (Grignard), RLi

## 2. Reaction Energy Profiles

### Activation Energy (Ea)
The minimum energy required for reactants to reach the transition state (activated complex).

**Transition state**: The highest energy point on the reaction coordinate — a point of no return where bonds are partially broken and partially formed.

### Reaction Profiles

**Exothermic reactions**: Products are more stable than reactants; ΔH is negative; energy is released.
```
Energy
  |  ∆H < 0
  |  ╱╲
  | ╱  ╲
  |╱    ╲
  └──────→ Reaction coordinate
```

**Endothermic reactions**: Products are less stable than reactants; ΔH is positive; energy is absorbed.

### Rate Laws
- **Molecularity**: Number of molecules/entities involved in the rate-determining step
- **Unimolecular**: 1 molecule → rate = k[A]
- **Bimolecular**: 2 molecules → rate = k[A][B]

## 3. Nucleophilic Substitution Reactions

### SN2 Mechanism (Bimolecular Nucleophilic Substitution)
**Characteristics:**
- One-step mechanism (concerted)
- Nucleophile attacks from the BACK (anti) to the leaving group
- Walden inversion of configuration at the carbon
- Rate = k[substrate][nucleophile] (second order)
- No intermediate (just transition state)

**Mechanism:**
```
        Nu⁻              Nu⁻
          \              /
           C–X    →     C–X
          /              \
         H                H
    (substrate)      (product, inverted)
```

**Favored by:**
- Methyl and primary (1°) halides (less steric hindrance)
- Strong nucleophiles (I⁻, CN⁻, RS⁻, OH⁻)
- Polar aprotic solvents (acetone, DMSO, DMF) — solvate cations, not nucleophilic anions

**SN2 reactivity order:**
CH₃X > 1°RX > 2°RX > 3°RX (steric hindrance)
I⁻ > Br⁻ > Cl⁻ > F⁻ (weaker C–X bond = better leaving group)

### SN1 Mechanism (Unimolecular Nucleophilic Substitution)
**Characteristics:**
- Two-step mechanism (stepwise)
- First step: slow ionization to form carbocation (rate-determining)
- Second step: fast attack by nucleophile
- Rate = k[substrate] only (first order)
- Racemization occurs (planar carbocation attacked from both sides)

**Mechanism:**
Step 1 (slow): R₃C–X → R₃C⁺ + X⁻ (carbocation intermediate)
Step 2 (fast): R₃C⁺ + Nu⁻ → R₃C–Nu

**Carbocation Stability:**
3° > 2° > 1° > methyl (more alkyl groups = more stable via hyperconjugation)

**Favored by:**
- Tertiary (3°) and secondary (2°) substrates
- Weak nucleophiles (H₂O, ROH, halides)
- Polar protic solvents (water, carboxylic acids) — stabilize ions through solvation

**Carbocation Rearrangements:**
- Hydride shift: H⁻ moves from adjacent carbon to stabilize carbocation
- Methyl shift: CH₃ group moves
- Always shifts toward MORE stable carbocation

**Example**: (CH₃)₃C–CH(Br)–CH₃ (2-bromo-2-methylbutane)
Ionization → tertiary carbocation at C-2
Or rearranged: (CH₃)₂C⁺–CH(CH₃)–CH₃ (even more stable tertiary at C-2 after methyl shift from C-3)

### SN1 vs SN2 — Decision Tree

| Factor | Favors SN2 | Favors SN1 |
|--------|-----------|-----------|
| Substrate | Methyl, 1°, 2° | 3°, 2° |
| Nucleophile | Strong | Weak |
| Leaving group | Good (I⁻ > Br⁻ > Cl⁻) | Good |
| Solvent | Polar aprotic | Polar protic |
| Stereochemistry | Inversion | Racemization |

**⚠️ Important**: 3° substrates almost always undergo E2 (with strong base) or SN1 (with weak nucleophile), NOT SN2 (too sterically hindered).

## 4. Elimination Reactions

### E2 Mechanism (Bimolecular Elimination)
**Characteristics:**
- One-step, concerted (anti-periplanar geometry required)
- Strong base abstracts H⁺ while leaving group departs simultaneously
- Rate = k[substrate][base] (second order)
- Hofmann product favored with bulky bases (夺取more substituted = more hindered)

**Anti-periplanar requirement**: The H and leaving group must be on opposite sides (180° dihedral angle) for the orbital overlap needed to form the π bond.

**Mechanism:**
```
    H           H
     \         /
      C=====C   →   C≡C + H–B + X⁻
     /         \
    R           R
  (E2 elimination)
```

**Zaitsev's Rule**: The more substituted alkene (more alkyl groups on double-bond carbons) is the major product.
- Exception: Hofmann product (less substituted) dominates when bulky bases (t-BuOK, NaNH₂) are used

### E1 Mechanism (Unimolecular Elimination)
**Characteristics:**
- Two-step (same as SN1: ionization to carbocation, then H⁺ abstraction by base)
- Rate = k[substrate] (first order)
- Usually competes with SN1 when carbocation is formed
- Zaitsev product favored (less substituted carbons lose H⁺ faster if selectivity exists)

**Mechanism:**
Step 1 (slow): R–X → R⁺ + X⁻ (carbocation)
Step 2 (fast): R⁺ + B⁻ → alkene + BH

### E1 vs E2 vs SN1 vs SN2 — Competition

**Primary substrate (1°):**
- With strong base → E2 (predominant) or SN2
- With weak base → SN2

**Secondary substrate (2°):**
- With strong base → E2 (predominant) or SN2
- With weak base → mixture of E1/SN1 (but E1 requires ionizing conditions)

**Tertiary substrate (3°):**
- With strong base → E2 (predominant)
- With weak base → SN1 (or E1)
- Almost NEVER SN2

**Elimination vs Substitution factors:**
- Higher temperature → favors elimination (more endothermic)
- Bulky base → favors E2 (dehydrohalogenation)
- Weak nucleophile + polar protic → SN1/E1

## 5. Electrophilic Addition to Alkenes

### General Mechanism (Two-step)
1. **Electrophilic attack**: The π electrons of the C=C attack the electrophile E⁺ → forms carbocation intermediate
2. **Nucleophilic attack**: The nucleophile (X⁻) attacks the carbocation → addition product

**Anti-addition**: In alkenes, addition across the double bond is usually anti (from opposite sides) due to the mechanism.

### Addition of HX (Hydrohalogenation)
**Regioselectivity — Markovnikov's Rule:**
- H adds to the carbon with MORE hydrogen atoms
- X adds to the carbon with FEWER hydrogen atoms

**Mechanism with carbocation rearrangement:**
If the initially formed carbocation can rearrange to a more stable one, it will:
- Secondary carbocation → tertiary carbocation (via hydride or methyl shift)
- The rearranged carbocation then captures the nucleophile

**Example**: 2-methylbut-2-ene + HBr → 2-bromo-2-methylbutane (after rearrangement from secondary to tertiary carbocation, if formed)

### Addition of X₂ (Halogenation)
- Anti-addition (bromine adds anti to each other across the double bond)
- Cyclic bromonium ion intermediate (three-membered ring with Br⁺)
- Nucleophilic attack opens the ring from the back → trans product

**Bromination stereochemistry:**
```
      Br           Br
       \         /
        C=====C    →   trans-1,2-dibromocyclohexane
       /         \
      H           H
```
For cyclohexene: trans-1,2-dibromo product (both Br on opposite faces).

### Addition of H₂O (Hydration)
- Acid-catalyzed addition of water
- Markovnikov addition (H to carbon with more H, OH to carbon with fewer H)
- Reverse reaction: dehydration of alcohols

### Addition of H₂ (Hydrogenation)
- Requires metal catalysts: Pt, Pd, Ni (Raney Ni)
- Syn-addition (both H add to same face)
- Saturation of double bond: alkene → alkane

**Heat of hydrogenation** (measure of stability):
- Ethene: −136 kJ/mol
- Propene: −124 kJ/mol
- 2-methylpropene: −119 kJ/mol
- Benzene: −208 kJ/mol (much less than expected for cyclohexatriene!)

## 6. Nucleophilic Addition to Carbonyl Compounds

### General Mechanism
1. Nucleophile attacks carbonyl carbon (electrophilic due to O's electronegativity)
2. π bond electrons move to oxygen → tetrahedral alkoxide intermediate
3. Alkoxide is protonated → alcohol product

**Rate enhanced by:**
- More electrophilic carbonyl carbon (electron-withdrawing groups)
- Less hindered carbonyl (sterics)

### Acid-Catalyzed Nucleophilic Addition
1. Protonate the carbonyl oxygen → makes carbonyl carbon MORE electrophilic
2. Nucleophile attacks
3. Deprotonate to give product

### Nucleophiles in Carbonyl Addition

**Water (Hydration):**
R–CHO + H₂O ⇌ R–CH(OH)₂ (gem-diol)
Equilibrium favors gem-diol for chloral (Cl₃C–CHO) due to electron-withdrawing Cl₃C– group.

**Alcohols (Acetal Formation):**
R–CHO + 2R'OH ⇌ R–CH(OR')₂ + H₂O (acetal)
R–CO–R' + 2R"OH → R–C(OR")₂–R' + H₂O (ketal)
Reaction requires acid catalysis and removal of water.

**Hydrogen Cyanide (HCN):**
R–CHO + HCN → R–CH(OH)–CN (cyanohydrin)
Base-catalyzed (CN⁻ is the nucleophile).
Used in industrial synthesis of hydroxy acids.

**Grignard Reagents (RMgX):**
R–CHO + R'MgX → R–CH(OMgX)–R' → (H₃O⁺) → R–CH(OH)–R'
- Formaldehyde → 1° alcohol
- Aldehyde → 2° alcohol
- Ketone → 3° alcohol

**Amines:**
R–CHO + R'NH₂ → R–CH=N–R' (imine/schiff base)
R–CO–R' + R"NHNH₂ → R–C=N–NHR" (hydrazone)

## 7. Radical Reactions

### Free Radical Halogenation of Alkanes
**Reaction**: RH + X₂ → RX + HX (requires UV light or heat)

**Mechanism:**
**Initiation**: X₂ → 2X• (radicals generated)
**Propagation**:
- X• + RH → HX + R• (hydrogen abstraction)
- R• + X₂ → RX + X• (halogen abstraction)
**Termination**:
- X• + X• → X₂
- R• + R• → R–R
- R• + X• → RX

**Selectivity**: 3° > 2° > 1° > CH₄ (based on C–H bond strength)
- CH₃–H: 435 kJ/mol (strongest)
- 1° C–H: 410 kJ/mol
- 2° C–H: 397 kJ/mol
- 3° C–H: 389 kJ/mol (weakest → most reactive to abstraction)

**Multiple substitution**: Products include mono-, di-, tri- halogenated compounds. To get monohalogenated product, use large excess of alkane relative to halogen.

### Allylic Bromination (NBS)
**Reagent**: N-bromosuccinimide (NBS) + light (hv)
**Selectivity**: Brominates allylic (C adjacent to C=C) positions
**Mechanism**: Involves allylic radical stabilization

## 8. Oxidation and Reduction

### Oxidation (LOSS of electrons, or GAIN of O, LOSS of H)
- Primary alcohol → aldehyde → carboxylic acid
- Secondary alcohol → ketone
- Aldehyde → carboxylic acid
- Alkene → diol (cold dilute KMnO₄) or CO₂ (hot conc. KMnO₄)
- Alkylbenzene → benzoic acid (hot KMnO₄)

### Reduction (GAIN of electrons, or LOSS of O, GAIN of H)
- Aldehyde → primary alcohol
- Ketone → secondary alcohol
- Carboxylic acid → alcohol (LiAlH₄, not NaBH₄)
- Ester → alcohol (LiAlH₄)
- Amide → amine (LiAlH₄)
- Nitro → amine (Sn/HCl or H₂/Pd)
- C=C → C–C (H₂/Pt or H₂/Ni) — but NOT aromatic ring

### Oxidizing Agents
- **K₂Cr₂O₇/H₂SO₄**: Orange → green; oxidizes 1° alcohol to acid (via aldehyde), 2° alcohol to ketone
- **KMnO₄**: Purple → brown MnO₂ (or colorless in dilute/cold); similar uses to dichromate
- **Tollens' Reagent** (Ag(NH₃)₂⁺): Oxidizes aldehydes only → Ag⁰ (silver mirror); ketones don't react
- **Fehling's Solution** (Cu²⁺ tartrate): Oxidizes aldehydes → Cu₂O (red precipitate)

### Reducing Agents
- **NaBH₄**: Reduces aldehydes and ketones to alcohols; does NOT reduce esters, acids, or amides
- **LiAlH₄**: Stronger than NaBH₄; reduces esters, amides, carboxylic acids; requires dry conditions (reacts with water)
- **H₂/Ni or Pt or Pd**: Catalytic hydrogenation; reduces C=C, C≡C, C=O, nitro groups
- **Sn/HCl**: Reduces nitro groups to amines

## 9. Exam-Style Questions & Tips

**Common exam question patterns at Makerere:**
1. "Draw the mechanism for [reaction] and name the intermediate(s)"
2. "Predict the major product and mechanism for the reaction of [substrate] with [reagent]"
3. "State whether the reaction proceeds by SN1, SN2, E1, or E2 mechanism and give your reasoning"
4. "Draw an energy diagram for [reaction type]"
5. "Explain why [substrate] reacts faster/slower than [other substrate] in [type] reactions"
6. "When 2-bromopropane is treated with NaOH, which reaction predominates: substitution or elimination? Explain."

**⚡ Exam tips:**
- When drawing mechanisms, ALWAYS show curly arrows correctly — from electron pair to electrophile/nucleophile
- In elimination, anti-periplanar geometry is required for E2 — draw Newman projections to check
- Carbocation rearrangements can only occur if they lead to a MORE stable carbocation — never less stable
- Remember: LiAlH₄ reduces more functional groups than NaBH₄

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## 10. Curly Arrow Conventions — Mastering Arrow Pushing

**Arrow types:**
1. **Single-headed fishhook (↔)**: Electron pair movement (homo-cleavage: radical reactions)
2. **Double-headed arrow (→)**: Two-electron movement (heterolysis or nucleophilic attack)
3. **Resonance arrows (↔)**: Electron delocalization, same energy structures

**Rules for drawing mechanistic arrows:**
- Arrows start FROM a lone pair or bond, point TO where the new bond forms or electrons go
- Never exceed the octet rule in the arrow-pushing mechanism
- Positive charges attract electron flow (electrophiles attack electron-rich sites)
- In carbocation rearrangements: show hydride or methyl shift with two fishhook arrows

## 11. Carbanion Chemistry

### Formation of Carbanions
Carbanions are negatively charged carbon species (R:⁻).

**Sources:**
- Grignard reagents (RMgX): C is nucleophilic (carbanion-like)
- Organolithium (RLi): Strongly nucleophilic carbanion
- acetylides (R–C≡C:⁻)

### Reactions of Carbanions
- Attack electrophilic centers (SN2, carbonyl addition)
- As bases in E2 reactions

## 12. Reaction Coordinate Diagrams — Detailed Analysis

For an SN1 reaction:
```
          Energy
            |         Carbocation + Nu⁻
            |        ╱
            |       ╱  (after rate-determining step)
            |      ╱
            |     ╱
            |    ╱
            |   ╱  Transition state 2
            |  ╱
            | ╱
            |╱ Transition state 1
            ●
            |__________________→ Reaction coordinate
         R–X (reactants)
```

**Transition state 1** (highest point of first step): Formation of [R...X]‡
**Intermediate**: Carbocation R⁺ + X⁻ (in a "valley")
**Transition state 2**: [R...Nu]‡

For SN2:
```
          Energy
            |    [R...Nu...X]‡
            |   ╱
            |  ╱
            | ╱
            |╱
            ●
            |__________________→ Reaction coordinate
         R–X (reactants)       R–Nu + X⁻ (products)
```
One transition state, no intermediate.

## 13. Concerted vs Stepwise Reactions

**Concerted reactions**: All bond-making and bond-breaking occur in a single step (e.g., SN2, E2, Diels-Alder).
**Stepwise reactions**: Intermediate(s) formed between steps (e.g., SN1, E1).

## Practice Problems

**Q1**: 1-bromo-1-methylcyclohexane undergoes elimination with ethanolic KOH. Draw all possible alkene products and name them. Which would be major?

**Q2**: When 3-bromo-2-methylbutane is treated with NaOH, a mixture of products forms. Draw and name all possible organic products. Which mechanisms operate?

**Q3**: Draw the reaction profile diagram for an SN1 reaction. Label: reactants, products, intermediates, transition states, activation energies for each step, ΔH.

**Q4**: Explain why 2-bromo-2-methylpropane undergoes hydrolysis (with AgNO₃ in ethanol/water) much faster than 2-bromopropane.

**Q5**: In the addition of HBr to propene, if the carbocation at C-2 could form (secondary), why might rearrangement to a more stable intermediate occur?

## Common Mistakes to Avoid

1. **Drawing curly arrows incorrectly**: Arrows ALWAYS point from electron source to electron sink. Don't draw arrows pointing toward electrons.
2. **Forgetting anti-periplanar geometry for E2**: If the leaving group and β-hydrogen are not anti-periplanar, E2 cannot occur — the reaction may be slow or may not happen.
3. **Confusing SN1/SN2 rate laws**: SN1 rate depends only on substrate; SN2 rate depends on substrate AND nucleophile.
4. **Thinking carbocations rearrange to ANY more stable form**: They only rearrange once — the new carbocation may not rearrange further if it's already very stable.
5. **Forgetting the role of solvent**: Polar protic solvents favor SN1/E1 (stabilize ions); polar aprotic solvents favor SN2 (don't solvate nucleophiles as well).
6. **Miscounting the number of beta-hydrogens for elimination**: A carbon adjacent to the leaving group may have 0, 1, 2, or 3 hydrogens to abstract — the most substituted alkene is usually favored.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
