---
exam: sa-pharm
examName: SAPC (South Africa)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-003
topicName: Reaction Mechanisms — Nucleophilic Substitution and Elimination
weight: 3
country: southafrica
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-14"
---

# Reaction Mechanisms — Nucleophilic Substitution and Elimination

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Nucleophilic substitution** replaces a leaving group on a carbon with a nucleophile; **elimination** removes the leaving group plus a β-hydrogen to form an alkene. Both pathways compete from the same alkyl substrate, and the outcome is decided by **substrate class, nucleophile/base strength, and solvent**.

- **SN2**: one step, bimolecular, **inversion of configuration** (Walden), rate = k[substrate][nucleophile]. Favoured by **methyl/1° carbons**, polar aprotic solvent, strong unhindered nucleophile.
- **SN1**: two steps via a **planar carbocation** → racemisation, rate = k[substrate]. Favoured by **3° carbons**, polar protic solvent, weak nucleophile.
- **E2**: one step, **anti-periplanar** H–C–C–LG geometry, gives **Zaitsev** alkene unless a **bulky base** (t-BuO⁻) forces Hofmann.
- **E1**: two steps sharing the SN1 carbocation; favoured by 3° substrate, polar protic solvent, weak base.

**SAPC Chemistry high-yield pointers:** (1) **3° carbons never do SN2**; (2) the **best leaving groups are the weakest bases** (I⁻ > Br⁻ > Cl⁻ > F⁻); (3) bulky base → E2, strong unhindered nucleophile → SN2.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The Four Competing Pathways

All four mechanisms begin with the same substrate — typically a **haloalkane (R–X)** or a protonated alcohol (R–OH₂⁺) — and diverge based on three variables: **substrate structure**, **reagent character (nucleophile vs base)**, and **solvent**. The table below summarises the deciding factors.

| Mechanism | Steps | Rate law | Stereochemistry | Favoured substrate | Favoured reagent/solvent |
|---|---|---|---|---|---|
| SN2 | 1 (concerted) | k[R–X][Nu⁻] | Inversion (Walden) | Methyl, 1° | Strong unhindered Nu⁻; polar aprotic |
| SN1 | 2 (via C⁺) | k[R–X] | Racemisation (planar C⁺) | 3°, allylic, benzylic | Weak Nu; polar protic |
| E2 | 1 (concerted) | k[R–X][Base] | Anti-periplanar required | 3°, 2° (with strong base) | Strong base; polar aprotic |
| E1 | 2 (via C⁺) | k[R–X] | Zaitsev alkene | 3°, allylic, benzylic | Weak base; polar protic |

#### Mechanism Arrows and Intermediates

In **SN2**, the nucleophile attacks the electrophilic carbon from the **backside** (opposite the leaving group) in a single transition state; the carbon undergoes **sp³ → sp² → sp³** motion, producing **inversion**. In **SN1**, the leaving group departs first to generate a **planar sp² carbocation**, then the nucleophile attacks either face → **50:50 racemate**. The **E2** transition state demands that the β-H and the leaving group be **anti-periplanar (180° dihedral)**, which is why cyclohexane substrates give the **trans-diaxial** alkene exclusively. The **E1** mechanism shares the SN1 carbocation, so the two always co-occur on 3° substrates in polar protic media.

#### Deciding the Product: A Three-Question Workflow

1. **What is the carbon class?** Methyl/1° → SN2/E2; 2° → all four possible, reagent-dependent; 3° → SN1/E1/E2 (never SN2).
2. **What is the reagent?** Strong **unhindered** anion (I⁻, CN⁻, N₃⁻, RS⁻, OH⁻) acts as nucleophile → substitution. Strong **bulky** base (t-BuO⁻, LDA) acts as base → elimination.
3. **What is the solvent?** Polar protic (H₂O, EtOH) stabilises the carbocation → SN1/E1. Polar aprotic (acetone, DMSO, DMF) leaves the nucleophile "naked" and reactive → SN2/E2.

#### Common SAPC Traps

- Drawing **retention** of configuration for SN1 (should be racemisation).
- Putting the β-H and leaving group **syn-periplanar** in an E2 transition state.
- Using F⁻ as a leaving group without first converting –OH to a tosylate (–OTs) or alkylating to an alkyl iodide.
- Assuming Hofmann (less substituted) alkene by default — **Zaitsev rules** unless a bulky base is present.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Carbocation Stability and the SN1/E1 Decision

Because SN1 and E1 share the **same rate-determining step** (ionisation of C–X), anything that stabilises the intermediate accelerates both. **Carbocation stability order**: 3° > 2° > 1° > methyl, augmented by **hyperconjugation** (alkyl groups donate electron density into the empty p-orbital) and **resonance delocalisation** (allylic, benzylic, and acylium cations). Rearrangements (hydride or methyl shift) are diagnostic of SN1/E1 — if a 1,2-shift "fixes" a less stable cation, the mechanism is almost certainly stepwise.

#### Stereochemistry in Cyclic Systems

On cyclohexane rings, the **anti-periplanar constraint** forces the β-H and leaving group into **axial positions on adjacent carbons**. A trans-1-bromo-2-methylcyclohexane with both substituents axial therefore eliminates rapidly to 1-methylcyclohexene, while the cis isomer (one axial, one equatorial) is far slower. The SAPC paper frequently tests this with Newman-projection questions: always draw the **staggered conformation** that places H and LG 180° apart.

#### Quantitative Rate Comparison (Worked Snippet)

For a generic primary alkyl bromide reacting with NaI in acetone (Finkelstein, classic SN2):

```
Rate = k × [R–Br] × [I⁻]
       k(1° R–Br) ≈ 1 (reference)
       k(2° R–Br) ≈ 1/30     ← steric hindrance
       k(3° R–Br) ≈ 1/10⁴    ← SN2 essentially shut down
```

Reverse the solvent to aqueous ethanol and add AgNO₃ — the Ag⁺ sequesters Br⁻ and a **polar protic** medium now dominates, switching 3° substrates into SN1 territory (precipitate of AgBr confirms ionisation).

#### Solvation of the Nucleophile

Polar **protic** solvents (H₂O, ROH, HCO₂H) hydrogen-bond to the nucleophile, lowering its ground-state energy but also its reactivity — yet they stabilise the developing carbocation in the transition state, so SN1/E1 win. Polar **aprotic** solvents (DMSO, DMF, acetone, MeCN) solvate **cations** well but leave **anions poorly solvated** ("naked" nucleophile), maximising SN2/E2 rates.

#### Connections to Other SAPC Topics

- **Alcohol reactions**: PBr₃, SOCl₂, and conc. H₂SO₄/heat all convert –OH into a better leaving group, channeling the molecule into these four mechanisms.
- **Aromatic chemistry**: Aryl halides (sp² C–X) resist SN1/SN2; they need the **benzyne (E1cb)** or **nucleophilic aromatic substitution** mechanism instead — a frequent distractor.
- **Pharmaceutical context** (SAPC applied emphasis): the metabolism of many drug molecules proceeds through **SN2 conjugation** (e.g. glutathione transferase) or **E1 dehydration** of β-hydroxy intermediates; predicting metabolic stability depends on identifying the most reactive carbon in the molecule.

#### Practice Prompts

1. **Mechanism drawing**: For 2-bromo-2-methylbutane + ethanol (warm), show the major product, classify the mechanism, and justify the choice of solvent.
2. **Product prediction**: Treat (R)-2-bromobutane with NaCN in DMSO. Draw the major product in 3D, name the mechanism, state the rate law, and explain why using NaOH in water would give a different major pathway.

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Reaction Mechanisms — Nucleophilic Substitution and Elimination" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/sa-pharm/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
