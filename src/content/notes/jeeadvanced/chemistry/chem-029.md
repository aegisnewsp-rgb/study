---



exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-029
topicName: Coordination Compounds
weight: 5
country: india
generated: "2026-03-24T08:32:07.933002"
lastUpdated: "2026-09-21"
diagramPrompt: "Clear scientific diagram of Coordination Compounds with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Coordination Compounds

### 🟢 Lite — Quick Review (1h–1d)
> Compact recap for a final-night pass; one fact, one formula, one anchor.

A **coordination compound** is built around a Lewis-acidic metal centre joined to Lewis-basic **ligands** through dative bonds. The ligand count around the metal is the **coordination number** (C.N.), most often 4 or 6 for JEE Advanced problems.

| Quantity | Formula | Variable meaning |
|---|---|---|
| Effective atomic number | EAN = Z − (O.N.) + 2 × (C.N.) | Z = atomic number of metal; O.N. = oxidation state; C.N. = coordination number |
| Spin-only magnetic moment | μ_so = √(n(n+2)) BM | n = number of unpaired electrons; result in Bohr Magnetons |
| Octahedral vs tetrahedral splitting | Δ_t = (4/9) Δ_o | always smaller than Δ_o, never equal |

> 💡 **High-Yield Memory Hook (Memory Hook):** *SCNO* climbs the spectrochemical series from weak to strong field — **S**CN⁻(S) < Cl⁻ < **N**CS⁻(N) < NH₃ < eN < NO₂⁻ < **C**N⁻ < **C**O. Read it as "Stronger Carbon-Nitrogen-Oxygen ends the series."

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working understanding for classroom-level mastery before moving to edge cases.

#### Werner's framework

Werner proposed two valence types per metal. The **primary valence** equals the oxidation state and is satisfied by counter-ions outside brackets; the **secondary valence** equals the coordination number and is satisfied by ligands inside the brackets. For example, in [Co(NH₃)₆]Cl₃, primary valence = +3 (three Cl⁻ outside), secondary valence = 6 (six NH₃ inside).

#### Nomenclature essentials

| Rule | Application |
|---|---|
| Ligands named before the metal, alphabetical order | ammine, aqua, chlorido, nitro |
| Anionic complex gets suffix **-ate**; cationic/neutral keeps element name | ferrate, aluminate, nickel |
| Oxidation state in Roman numerals in parentheses | cobalt(III), iron(II) |
| Anionic ligands end in **-o** (chlorido, not chloro) | dichlorido, not dichloro |

#### Comparison matrix — isomers you must distinguish

| Isomer type | Trigger | Canonical example |
|---|---|---|
| Linkage | Ambidentate ligand binds through two donor atoms | [Co(NH₃)₅(NO₂)]²⁺ vs [Co(NH₃)₅(ONO)]²⁺ |
| Coordination | Exchange of ligands between cation and anion | [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆] |
| Ionisation | A counter-ion is itself a ligand candidate | [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br |
| Solvate (hydrate) | Water is ligand vs water of crystallisation | [Cr(H₂O)₆]Cl₃ vs [Cr(H₂O)₅Cl]Cl₂·H₂O |
| Geometrical (cis-trans) | Different ligand positions in MA₂B₂, MA₂BC, MABCD square planar | cis-/trans-[Co(NH₃)₂Cl₂]⁺ |
| Optical | Non-superimposable mirror image, no plane/centre of symmetry | cis-[Co(en)₂Cl₂]⁺, [Co(en)₃]³⁺ |

#### Worked example, end to end

A complex is given as **[Co(en)₂Cl₂]⁺**. Find its IUPAC name, the spin-only magnetic moment, and the count of stereoisomers.

1. **Name.** en = ethylenediamine (neutral, bis-ligand), Cl⁻ = chlorido. Alphabetical order places en before chlorido. Cobalt is in +3 oxidation state. Result: **dichloridobis(ethylenediamine)cobalt(III)**.
2. **d-electron count.** Co(III) → d⁶. In an octahedral field with Cl⁻ (weak-field, low in spectrochemical series), Δ_o < P, so the configuration is **t₂g⁴ eg²** → n = 4 unpaired electrons.
3. **μ_so.** μ_so = √(4 × 6) = √24 ≈ **4.90 BM**.
4. **Isomers.** Two geometric forms (cis, trans) plus the cis form splits into a non-superimposable Δ/Λ pair → **3 stereoisomers total**.

> ⚠️ **Examiner Trap:** students write "4 isomers" by counting cis, trans, and a "meso" form that does not exist here. The trans isomer has a centre of symmetry and is optically inactive; only cis gives the enantiomeric pair.

---

### 🔴 Extended — Deep Study (3mo+)
> Beyond the syllabus: edge cases, mathematical limits, and how this chapter interlocks with others.

#### Where CFT breaks down — and what replaces it

Crystal Field Theory treats ligands as point charges, so it correctly predicts d-orbital splitting, magnetism, and (qualitatively) colour. It fails quantitatively for π-bonding ligands (CO, CN⁻, alkenes) and cannot explain why [Ni(CO)₄] is tetrahedral while [Ni(CN)₄]²⁻ is square planar despite both being d¹⁰. **Ligand Field Theory (LFT)**, a hybrid of CFT and Molecular Orbital Theory, introduces metal–ligand π-back-bonding: CO donates into empty metal d-orbitals (σ) and accepts electron density from filled metal d-orbitals into its π* (back-donation). Net effect: a stronger field and a greater Δ_o than CFT predicts.

#### Eight traps that surface repeatedly in JEE Advanced numericals

1. **Δ_t = 4/9 Δ_o** — never write Δ_t = Δ_o.
2. **[MA₃B₃] octahedral** has **fac / mer** isomers, not cis / trans.
3. **EAN ≠ 36** universally — it is the *noble-gas configuration rule*; square planar d⁸ complexes such as [Ni(CN)₄]²⁻ deliberately break it.
4. **Spin-only formula fails for lanthanoids** (large orbital contribution); for 3d ions the experimental μ usually exceeds μ_so by ~0.2–0.4 BM.
5. **High oxidation state does not guarantee low spin** unless the ligand is high in the spectrochemical series.
6. **Ambidentate donor atoms**: NO₂⁻-N (nitro) vs NO₂⁻-O (nitrito); SCN⁻-S (thiocyanato) vs SCN⁻-N (isothiocyanato).
7. **Stepwise vs overall stability constants** — overall β_n = K₁ × K₂ × … × K_n; chelate effect raises β_n by entropy, not enthalpy alone.
8. **Colour is complementary** — observe the colour opposite the absorbed wavelength on the colour wheel; absorption at 500 nm (green) → complex looks red.

#### Adjacent-topic links

- **d-block trends**: ionisation enthalpy, variable oxidation states, and the very existence of coordination chemistry all stem from small (n−1)d–ns gap.
- **Biomolecules**: haemoglobin (Fe²⁺–porphyrin), chlorophyll (Mg²⁺–porphyrin), vitamin B₁₂ (Co³⁺–corrin) — same donor-atom logic as synthetic ligands.
- **Electrochemistry**: stability constants control the potential of M^(n+)/M couples through the Nernst-like relation E = E° − (0.0591/n) log β_n — useful for titration calculations.

#### Advanced prompts

1. For [Co(en)₃]³⁺, predict the spin state, μ_so, and the sign of optical rotation (Δ vs Λ). Justify the Δ_o ranking of en vs NH₃ using the spectrochemical series.
2. A solution of [Fe(H₂O)₆]²⁺ is pale green, but [Fe(CN)₆]⁴⁻ is yellow. Using colour-wheel logic and the spectrochemical series, identify the wavelength absorbed in each case and explain the shift.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Coordination Compounds" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
