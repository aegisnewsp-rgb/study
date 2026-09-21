---
exam: mdcat
examName: MDCAT
subject: chemistry
subjectName: Chemistry
topic: chem-15
topicName: Aldehydes and Ketones
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.100623"
lastUpdated: "2026-09-21"
diagramPrompt: "Clear scientific diagram of Aldehydes and Ketones with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"


---

# Aldehydes and Ketones

### 🟢 Lite — Quick Review (1h–1d)
> The fastest MDCAT marks in organic chemistry hide inside this chapter — two reagents can tell an aldehyde from a ketone in under a minute.

Both families carry the **carbonyl group (C=O)**, but an aldehyde (R–CHO) tethers that carbon to at least one hydrogen, while a ketone (R–CO–R′) ties it to two carbon groups. The shared formula **CₙH₂ₙO** makes them **functional group isomers** of each other — same atoms, different arrangement.

| Property | Aldehyde (R–CHO) | Ketone (R–CO–R′) |
|---|---|---|
| Carbonyl partner | H on one side, R on the other | R on both sides |
| Example | Ethanal (CH₃CHO) | Propanone (CH₃COCH₃) |
| Oxidation test | Tollens' → silver mirror | No reaction with Tollens' |
| IUPAC suffix | -al | -one |

> 💡 **Memory Hook — "HALT-CFK":** **H**CN, **A**lcohols (RMgX then H⁺), **L**iAlH₄/NaBH₄, **T**ollens', **C**annizzaro, **F**ehling's, **K**eto-enol are the seven things every carbonyl carbon "loves to react with." If a question mentions a carbonyl and HCN, the answer is cyanohydrin — every time.

### 🟡 Standard — Regular Study (2d–2mo)
> The carbonyl carbon is **sp² hybridised**, planar, with a ~120° bond angle, and carries a partial positive charge (δ⁺) — that electrophilicity drives every named reaction below.

#### Nomenclature and Bonding

Aldehydes take the suffix **-al** (methanal, ethanal, benzaldehyde) and ketones **-one** (propanone, butan-2-one). The C=O double bond is polar: oxygen pulls electrons, generating a dipole moment. Using μ = q × d, where q is partial charge in coulombs, d is the C=O bond length (~1.23 × 10⁻¹⁰ m), μ comes out around **2.3–2.7 D** (debye), higher than most single bonds.

#### Nucleophilic Addition — The Core Mechanism

A nucleophile (Nu⁻) attacks the electrophilic carbonyl carbon, the C=O π-bond breaks, and the oxygen picks up a proton. This is how HCN, NaHSO₃, NH₂OH (forms oxime), and Grignard reagents (RMgX → secondary/tertiary alcohol after workup) all enter the carbonyl.

| Nucleophile | Product type |
|---|---|
| HCN | Cyanohydrin (R–CH(OH)–CN) |
| NaHSO₃ | Bisulphite adduct (crystalline, for purification) |
| NH₂OH | Oxime (C=N–OH) |
| 2,4-DNP | Orange-yellow precipitate (2,4-dinitrophenylhydrazone) |
| RMgX then H₃O⁺ | Alcohol |

#### α-Hydrogen Reactions — Aldol Condensation

A base abstracts the **α-hydrogen** (acidic, pKa ≈ 17–20) to form an enolate, which attacks a second carbonyl molecule. The aldol **addition** gives a β-hydroxy aldehyde; heating drives **condensation** (loss of water) to an α,β-unsaturated carbonyl:

R–CH₂–CHO + R–CH₂–CHO → R–CH₂–CH(OH)–CH₂–CHO → R–CH₂–CH=CH–CHO + H₂O

#### 🎯 Worked Example — Identifying the Carbonyl Compound

A compound has molecular formula C₃H₆O. It gives a silver mirror with Tollens' reagent and a positive iodoform test. What is it?

**Step 1.** C₃H₆O matches CₙH₂ₙO — aldehyde or ketone.
**Step 2.** Tollens' positive → must be an aldehyde (ketones do not respond).
**Step 3.** Iodoform positive requires a CH₃–C(=O)– or CH₃–CH(OH)– group.
**Step 4.** Aldehyde with a methyl ketone motif = **CH₃CHO (ethanal)**. The iodoform reaction proceeds: CH₃CHO + 3 I₂ + 4 NaOH → CHI₃↓ (yellow) + HCOONa + 3 NaI + 3 H₂O.

> ⚠️ **Examiner Trap:** Students see "iodoform test positive" and assume ethanol (CH₃CH₂OH) qualifies as a carbonyl compound. Ethanol is a **secondary alcohol precursor** — it gives iodoform because it is oxidised in situ to acetaldehyde first. The question's formula C₃H₆O rules out ethanol entirely; pick CH₃CHO.

#### Distinguishing Tests — At a Glance

| Test | Aldehyde (aliphatic) | Ketone | Aromatic aldehyde |
|---|---|---|---|
| Tollens' | Silver mirror | No reaction | Silver mirror |
| Fehling's | Brick-red Cu₂O | No reaction | **No reaction** |
| 2,4-DNP | Orange-yellow ppt. | Orange-yellow ppt. | Orange-yellow ppt. |
| Iodoform | If CH₃CO– present | If CH₃CO– present | No |
| Schiff's | Pink restored | Slow / none | Pink restored |

#### Reduction Routes to Match the Substrate

LiAlH₄ or NaBH₄ reduces C=O to an alcohol in both aldehydes and ketones. To strip the oxygen entirely (C=O → CH₂), use **Clemmensen** (Zn-Hg/HCl, acidic) or **Wolff-Kishner** (NH₂–NH₂/KOH, ethylene glycol, basic). Choose Clemmensen when the molecule has base-sensitive groups; Wolff-Kishner when it has acid-sensitive groups.

### 🔴 Extended — Deep Study (3mo+)
> Two aldehydes refuse to play by the α-hydrogen rules — they have no α-hydrogen at all. That single absence reroutes the entire mechanism.

**Formaldehyde (HCHO), benzaldehyde (C₆H₅CHO), and 2,2-dimethylpropanal** lack α-hydrogens, so they cannot enolise. Concentrated base instead drives **Cannizzaro disproportionation** — one molecule is oxidised to the carboxylate while another is reduced to the alcohol:

2 C₆H₅CHO + KOH → C₆H₅COOK + C₆H₅CH₂OH

#### Edge Cases and Exceptions

| Scenario | Why it misleads students | Correct handling |
|---|---|---|
| Benzaldehyde + Fehling's | "It's an aldehyde, so it should react" | Aromatic aldehydes give a negative Fehling's — only aliphatic aldehydes reliably respond |
| Tollens' result described | "It forms a precipitate" | It forms a **silver mirror** (metallic Ag deposits on glass), not a ppt. |
| Clemmensen vs Wolff-Kishner | Both reduce C=O to CH₂ | Use Clemmensen (acidic) for base-stable substrates; Wolff-Kishner (basic, high T) for acid-stable substrates; never both |
| Aldol product missing H₂O | Stopping at the β-hydroxy aldehyde | The condensed α,β-unsaturated carbonyl is the exam answer when "heating" or "Δ" is mentioned |
| Cannizzaro as universal | Believing all aldehydes do it | Restricted to α-H-free aldehydes; others prefer aldol |

#### Preparing Carbonyl Compounds

- Primary alcohol + PCC (or Cu, Δ) → aldehyde.
- Secondary alcohol + oxidant → ketone.
- Ozonolysis of alkene, then reductive workup (Zn/H₂O) → aldehydes and/or ketones.
- **Rosenmund reduction**: acid chloride + H₂/Pd-BaSO₄ → aldehyde (Pd poisoned to halt at aldehyde).
- **Stephen reaction**: nitrile + SnCl₂/HCl → aldimine → hydrolysis → aldehyde.

#### Acidity and Tautomerism

The α-hydrogen's pKa (~17–20) is high compared with most C–H bonds because the resulting carbanion is stabilised by resonance into the carbonyl. This same acidity lets aldehydes/ketones interconvert with their **enol tautomers** (keto-enol tautomerism), the foundation for halogenation at the α-carbon and racemisation of α-chiral centres.

#### Advanced Practice Prompts

1. **Product prediction.** Acetophenone (C₆H₅COCH₃) reacts with I₂/NaOH, then with concentrated KOH followed by acidification. Identify each intermediate and final product, naming the named reaction in each step.
2. **Reagent selection.** You must convert cyclohexanone to cyclohexane but the substrate contains an acid-sensitive ester group. Choose between Clemmensen and Wolff-Kishner and justify in one sentence.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Aldehydes and Ketones" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/mdcat/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
