---

exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-019
topicName: Metallurgy
weight: 5
country: india
generated: "2026-03-24T08:32:07.929169"
lastUpdated: "2026-09-08"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy is the branch of chemistry dealing with extraction of a metal from its ore and shaping it for engineering use. The four mandatory stages are **concentration of ore**, **conversion to oxide / free metal**, **reduction to crude metal**, and **refining**.

- **Ellingham diagram** plots ΔG° of oxide formation versus T. A line lying *lower* means the metal binds oxygen more strongly and can itself act as a reductant for oxides above it.
- **Calcination** is for carbonate/hydrate ores (no SO₂). **Roasting** is for sulphide ores (SO₂ released).
- **Hall–Héroult** reduces Al₂O₃ dissolved in molten **cryolite (Na₃AlF₆)** at ~950 °C using carbon anodes.
- **Mond process** purifies Ni via volatile Ni(CO)₄ formed at 330 K and decomposed at 450 K.

| Process | Ore / metal | Key reagent |
| --- | --- | --- |
| Bayer | Bauxite (Al₂O₃·xH₂O) | NaOH (leaching) |
| Hall–Héroult | Pure Al₂O₃ | Cryolite + C anode |
| Cyanide | Native Au / Ag | NaCN + O₂, then Zn |
| Mond | Impure Ni | CO gas |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Conversion

The first stage removes **gangue** using hydraulic washing (gravity), magnetic separation (Fe₃O₄, chromite), **froth flotation** for sulphide ores (pine oil + collectors like xanthates), and leaching (NaOH for bauxite; NaCN for native Au/Ag). The concentrated ore is then converted: calcination for carbonates (ZnCO₃ → ZnO + CO₂) and roasting for sulphides (2CuFeS₂ + O₂ → Cu₂S + 2FeS + SO₂).

#### Reduction Governed by Thermodynamics

The Ellingham diagram makes one principle quantitative: a metal M whose ΔG°(MₓOᵧ) line sits *above* that of reductant R can be reduced by R if the coupled ΔG° is negative. The **C/CO** line has a *positive* slope (1 mol gas → 2 mol gas, ΔS > 0), so it crosses most metal-oxide lines at high T and makes coke the cheapest reductant above ~1073 K for zinc and iron.

#### Worked Faraday Calculation

For electrolytic refining of copper, the relevant equation is:

$$m = \dfrac{I \times t \times M}{n \times F}$$

where m = mass deposited (g), I = current (A), t = time (s), M = molar mass (g·mol⁻¹), n = electrons per ion (Cu²⁺ ⇒ n = 2), and F = 96485 C·mol⁻¹.

| Refining method | Metal(s) | Purity / principle |
| --- | --- | --- |
| Electrolytic | Cu, Zn, Ag | 99.99 %; anode dissolves, pure cathode strip |
| Zone refining | Si, Ge, B, Ga | Ultra-pure; impurity partitioning in molten zone |
| Van Arkel–de Boer | Ti, Zr, Hf | Ti + 2I₂ → TiI₄ → Ti on W filament |
| Liquation | Sn, Pb | Lower-melting metal drains out |
| Distillation | Zn, Hg | Volatile metal condensed separately |
| Poling | Cu (Cu₂O removal) | Hydrocarbon poles reduce oxide to metal |

#### Specific Extractions

- **Iron**: blast furnace, Fe₂O₃ + 3CO → 2Fe + 3CO₂ at the top; CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ slag.
- **Copper**: partial roasting of CuFeS₂ followed by self-reduction (2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂; Cu₂O + Cu₂S → 6Cu + SO₂), then electrolytic refining.
- **Aluminium**: Bayer route for Al₂O₃, then Hall–Héroult electrolysis with cryolite flux.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases on the Ellingham Diagram

The slope of every metal-oxide line is **−ΔS°**, dominated by the loss of one mole of O₂ on forming the solid oxide. Carbon is unusual because two lines must be drawn: C → CO (ΔS > 0, upward slope) and C → CO₂ (ΔS < 0, downward slope). The crossover between Al₂O₃ and C/CO occurs near 1700 °C, but **below** every crossover temperature Mg and Al remain stronger reductants than carbon — the thermodynamic basis of the thermite welding reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr (ΔG° ≈ −250 kJ mol⁻¹).

#### Vapour-Phase and Complex Routes

Van Arkel–de Boer and Mond are both chemical-transport methods but exploit different chemistries. Van Arkel forms a volatile **iodide** (TiI₄ bp 377 °C) that decomposes on a hot W filament at 1700 °C. Mond forms a volatile **carbonyl** Ni(CO)₄ (bp 43 °C) at 330 K and cracks at 450 K. The cyanide process combines leaching and reduction: 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH, after which zinc dust precipitates gold: 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au.

#### Common Mistakes

| Trap | Correct point |
| --- | --- |
| Confusing calcination with roasting | Calcination ⇒ no S in ore; roasting ⇒ sulphide → SO₂ |
| Using wrong n in Faraday's law | Cu²⁺ ⇒ n = 2; Al³⁺ ⇒ n = 3; Ag⁺ ⇒ n = 1 |
| Cryolite = ore in Hall–Héroult | Cryolite is a solvent lowering melting point to ~950 °C |
| Reversing electrodes in Cu refining | Anode = impure blister Cu; cathode = pure Cu strip |
| Carbon always beats Mg/Al | Only true *above* the crossover temperature on the Ellingham plot |

#### Exam Strategy

JEE Advanced tests ~5 % weight from this unit, typically one MCQ + one numerical per paper. Numerical questions routinely involve Faraday's law applied to Hall–Héroult (mass of Al from given ampere-hours). Assert–reason type questions probe Ellingham slopes and slope signs. Memorise the specific reagents, temperatures, and ΔG° crossover values for Fe, Cu, Zn, Al, Ag, and Au extractions rather than generic principles.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
