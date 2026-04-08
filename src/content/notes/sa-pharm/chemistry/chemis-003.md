---
exam: sa-pharm
examName: SAPC (South Africa)
subject: organic-chemistry
subjectName: Organic Chemistry
topic: chemis-003
topicName: Reaction Mechanisms — Nucleophilic Substitution and Elimination
weight: 3
---

## Reaction Mechanisms — Nucleophilic Substitution and Elimination

Understanding reaction mechanisms allows you to predict products, explain reactivity patterns, and design synthetic routes — essential skills for pharmaceutical chemistry. In the SAPC exam, SN1, SN2, E1, and E2 mechanisms are consistently tested, often through analysis of reaction conditions and substrate structure.

### Bond Cleavage and Formation

**Heterolytic Cleavage:** Bond breaks unevenly — one atom receives both electrons → **carbocation** (electron-deficient, electrophile) and **carbanion** (electron-rich, nucleophile).

**Homolytic Cleavage:** Bond breaks evenly — each atom receives one electron → two **free radicals** (important in polymerization and halogenation).

### Nucleophilic Substitution Reactions

#### SN2 Mechanism — Bimolecular Nucleophilic Substitution

**Mechanism:** Concerted, single step. The nucleophile attacks from the **back side** (180° from the leaving group), pushing the leaving group off the front — like an umbrella turning inside out in the wind.

**Rate Law:** Rate = k[Substrate][Nucleophile] — **bimolecular**

**Characteristics:**
- Inversion of configuration at the chiral centre (Walden inversion)
- Backside attack requires **less steric hindrance** — better with less substituted carbon
- Strong nucleophile required in **polar aprotic solvent** (acetone, DMSO, DMF)
- No intermediate — single transition state
- Steric hindrance dramatically slows the reaction

**Favourable conditions:** Methyl > 1° > 2° alkyl halides. 3° almost never undergoes SN2.

**Good nucleophiles (strong, anionic):** OH⁻, CN⁻, RO⁻, N₃⁻, I⁻, RS⁻

#### SN1 Mechanism — Unimolecular Nucleophilic Substitution

**Mechanism:** Two steps. Step 1 — slow ionization to form a **carbocation intermediate**. Step 2 — rapid nucleophilic attack on the carbocation.

**Rate Law:** Rate = k[Substrate] only — **unimolecular**

**Characteristics:**
- **Racemization** occurs at the chiral centre (if applicable) because the planar carbocation can be attacked from either face
- Rate depends **only on substrate** — carbocation stability is key
- **More substituted carbocations are more stable** (tertiary > secondary > primary > methyl)
- Polar **protic solvent** stabilizes the carbocation intermediate and the leaving group anion
- Rearrangements possible (hydride shift, methyl shift) when a more stable carbocation can form

**Favourable conditions:** Tertiary and secondary substrates. Polar protic solvents (water, alcohols). Weak nucleophiles (H₂O, ROH).

### Carbocation Stability

| Type | Structure | Stability |
|------|-----------|-----------|
| Methyl | CH₃⁺ | Least stable |
| Primary (1°) | RCH₂⁺ | Unstable |
| Secondary (2°) | R₂CH⁺ | Moderate |
| Tertiary (3°) | R₃C⁺ | Most stable |
| Allylic | R-CH=CH-CH₂⁺ | Stabilized by resonance |
| Benzyllic | C₆H₅-CH₂⁺ | Very stable (resonance) |

**Resonance-stabilized carbocations** (allylic and benzylic) can form more readily than their non-resonance-stabilized counterparts.

### Competition Between SN1 and SN2

| Factor | Favours SN2 | Favours SN1 |
|--------|------------|-------------|
| Substrate | Methyl, 1° | 2°, 3° |
| Nucleophile | Strong (anionic) | Weak |
| Solvent | Polar aprotic | Polar protic |
| Leaving group | Good (I⁻ > Br⁻ > Cl⁻ > F⁻) | Good |
| Steric hindrance | Low | High |
| Carbocation stability | Not relevant | Critical |

### Elimination Reactions

#### E2 Mechanism — Bimolecular Elimination

**Mechanism:** Concerted, single step. A base removes a proton (β-hydrogen) while the leaving group departs simultaneously, forming a double bond.

**Requirements:**
1. **Anti-periplanar geometry** — the hydrogen and leaving group must be 180° apart (trans-diaxial in cyclohexane)
2. Strong base (or strong nucleophile acting as base)
3. Good leaving group

**Rate:** Rate = k[Substrate][Base] — bimolecular

**Zaitsev's Rule:** The more substituted (more stable) alkene is the major product. Exception: bulky bases (t-BuO⁻, DBU) give the **Hofmann product** (less substituted alkene) due to steric hindrance.

#### E1 Mechanism — Unimolecular Elimination

**Mechanism:** Same first step as SN1 — ionization to carbocation. Step 2 — base removes a β-hydrogen from the carbocation, forming a double bond.

**Rate:** Rate = k[Substrate] — unimolecular

**Characteristics:**
- Same conditions and substrate requirements as SN1
- Carbocation intermediate → rearrangements possible
- Competes directly with SN1 — polar protic solvent, weak base
- Regioselectivity follows Zaitsev's Rule

### Substitution vs. Elimination Competition

| Condition | Favours Substitution | Favours Elimination |
|-----------|---------------------|---------------------|
| Substrate | Methyl, 1° (SN2) | 3° (E2) |
| Base/nucleophile strength | Weak nucleophile | Strong base (especially bulky) |
| Solvent | Polar aprotic (SN2) | Polar protic (E1) |
| Temperature | Lower | Higher (endothermic, ΔS positive) |
| Steric hindrance | Low | High |

### Leaving Group Ability

Better leaving groups = more stable anions when departed:

**Good to Poor:** I⁻ > Br⁻ > Cl⁻ >> F⁻

Tosylate (TsO⁻) and mesylate (MsO⁻) are excellent leaving groups — frequently used in pharmaceutical synthesis.

### Pharmaceutical Chemistry Connections

- **Drug metabolism Phase I reactions** often involve nucleophilic attack on drug metabolites (e.g., cytochrome P450 oxidation creates electrophilic intermediates that react with nucleophiles in proteins/DNA)
- **SN1-like reactions** occur in the formation of oxonium ions during glycoside hydrolysis
- **E2 reactions** are used in the laboratory synthesis of pharmaceutical intermediates — understanding anti-periplanar requirements explains why some elimination reactions fail

### SAPC Examination Tips

1. **Always check substrate first** — 3° → E1/SN1; methyl/1° → SN2; 2° is the battleground (analyze conditions)
2. **Temperature matters** — high temperature favours elimination over substitution (more positive entropy change for elimination)
3. **Drawing the mechanism matters** — show arrows correctly: nucleophile → substrate, leaving group ← departing. Never draw arrows crossing atoms.
4. **Zaitsev vs. Hofmann** — unless a bulky base is specified, draw the more substituted alkene as the major product.
5. **Anti-periplanar geometry** — in cyclohexane E2, the H and leaving group must both be axial and trans to each other.
