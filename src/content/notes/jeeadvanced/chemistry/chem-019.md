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
lastUpdated: "2026-09-09"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Metallurgy** is the sequence of operations that converts an ore into a usable, pure metal: concentration → extraction (reduction) → refining → alloying. JEE Advanced tests the *thermodynamics* of reduction, not memorised lists of ores.

- **Steps**: (i) concentration — hydraulic washing, magnetic separation, froth flotation (sulphides), leaching; (ii) calcination (carbonates/hydrates, no SO₂) vs roasting (sulphides → oxide + SO₂); (iii) reduction — carbon, self-reduction, electrolytic, or metallothermic; (iv) refining — electrolytic, zone, van Arkel, Mond, distillation, liquation.
- **Ellingham diagram**: ΔG° vs T straight lines for 2M + O₂ → 2MO. The line *lower* on the plot ⇒ stronger affinity for O₂ ⇒ a *better reducing agent* above it. **C/CO** slope is positive (ΔS > 0, 1→2 gas moles); **C/CO₂** slope is negative (2→1).
- **Must-know Faraday**: m = (I·t·M)/(n·F), F = 96485 C·mol⁻¹, n = valency of deposited ion.

| Reductant | Used for | Why |
| --- | --- | --- |
| Coke (C/CO) | Fe, Zn, Sn | Carbon lies below most oxides above crossover T |
| Self-reduction | Cu from CuFeS₂ | Partial roasting leaves FeS which reduces Cu₂O |
| Electrolysis | Al (Hall–Héroult), Na, Mg | Highly negative ΔG° oxides — only electricity works |
| Al / Mg (metallothermic) | Cr, Ti | Below crossover, Al/Mg lines lie below Cr₂O₃, TiCl₄ |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Conversion

The first job is separating the **ore** from the **gangue** (earthy matrix). Hydraulic washing exploits density differences for oxide ores; magnetic separation works for chromite (FeCr₂O₄) and haematite (Fe₂O₃); froth flotation uses a pine-oil froth and collectors (e.g. xanthates) for **sulphide ores** because sulphides are preferentially wetted by oil. Leaching dissolves the valuable component selectively — bauxite with **NaOH** (Bayer process) and gold/silver ores with **dilute NaCN** in aerated water.

Once concentrated, the ore is converted to a reducible form. **Calcination** heats carbonates and hydroxides in limited/no air: CaCO₃ → CaO + CO₂, Al₂O₃·2H₂O → Al₂O₃ + 2H₂O. **Roasting** heats sulphides in excess air: 2ZnS + 3O₂ → 2ZnO + 2SO₂. The released SO₂ is the feedstock for sulphuric acid — examiners love asking what is done with the gas.

#### Reduction and the Ellingham Diagram

Reduction feasibility is read off the **Ellingham diagram**: plot ΔG°(oxide formation) against T for each metal. A line lying *lower* means a stronger oxide; that metal will reduce any oxide lying above it. The carbon lines are special. For **2C + O₂ → 2CO**, ΔS > 0 (1 mol gas → 2 mol gas), so the line slopes **upward**. For **C + O₂ → CO₂**, ΔS < 0, so the line slopes **downward**. Where C/CO crosses a metal-oxide line, carbon becomes the better reductant *above* that crossover — and that is why coke reduces ZnO near 1673 K but cannot reduce Al₂O₃ at any practical temperature.

#### Worked Reduction Examples

- **Iron (blast furnace)**: Fe₂O₃ → Fe₃O₄ → FeO → Fe in the upper stack via CO; CaCO₃ → CaO → CaSiO₃ **slag** drops to the bottom carrying SiO₂ gangue away from the metal.
- **Copper (self-reduction)**: 2CuFeS₂ + O₂ → Cu₂S + 2FeS + SO₂; then Cu₂S + 2Cu₂O → 6Cu + SO₂ — note the *no external reductant* part.
- **Aluminium (Hall–Héroult)**: 2Al₂O₃ + 3C → 4Al + 3CO₂; cryolite (Na₃AlF₆) drops the melt from ~2050 °C to ~950 °C, graphite anode is consumed.

| Process | Ore / Crude Metal | Key Reagent | Output Purity |
| --- | --- | --- | --- |
| Bayer | Bauxite (Al₂O₃·2H₂O) | NaOH (leaching) | Pure Al₂O₃ |
| Hall–Héroult | Al₂O₃ | Electricity + cryolite | ~99.7% Al |
| Mond | Impure Ni | CO (forms Ni(CO)₄ at ~330 K) | 99.9% Ni |
| Van Arkel–de Boer | Ti, Zr, Hf | I₂ → volatile MI₄ → hot W filament | Ultra-pure metal |
| Zone refining | Si, Ge, Ga, B | Moving molten zone | Semiconductor-grade |
| Cyanide | Au / Ag ore | NaCN + Zn dust | Pure Au / Ag |

#### Common Exam Traps

- **Calcination vs roasting** — carbonate/hydrate vs sulphide; missing SO₂ means it's calcination.
- **Anode vs cathode in Cu refining** — *impure* Cu is the **anode** (it dissolves); pure Cu strip is the **cathode** (it grows).
- **Valency n** — Al³⁺ gives n = 3, Cu²⁺ gives n = 2, Ag⁺ gives n = 1 in Faraday's law.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Thermodynamic Mechanism Behind Ellingham

For any oxide-formation reaction 2M(s) + O₂(g) → 2MO(s), ΔG° = ΔH° − TΔS°. ΔH° is large and negative (very exothermic bond formation), ΔS° is negative because gas moles *decrease* from 1 to 0 — so the line slopes *upward* with T. For carbon, **C(s) + ½O₂ → CO(g)** produces gas, giving ΔS° > 0 and a *downward* slope. The Gibbs–Helmholtz equation explains why every metal-oxide line is approximately linear and why only the *relative* position matters for predicting a spontaneous reduction: ΔG°(red) = ΔG°(MO_product) − ΔG°(MO_reactant) < 0.

#### Refining — Matching Method to Metal

1. **Electrolytic refining** of Cu: anode = impure blister Cu, cathode = pure Cu strip, electrolyte = acidified CuSO₄ with a little H₂SO₄; noble impurities (Au, Ag, Pt) drop as **anode mud** and are recovered.
2. **Zone refining** relies on the partition coefficient k ≠ 1 of an impurity between solid and liquid; passing a molten zone sweeps impurities to one end. Used only for **semiconductors** because the technique is slow and expensive.
3. **Van Arkel–de Boer**: Ti(s) + 2I₂(g) → TiI₄(g) → Ti(s) + 2I₂(g) on a hot W filament. The iodide is volatile at ~500 K and decomposes at ~1700 K.
4. **Mond process**: Ni(s) + 4CO(g) ⇌ Ni(CO)₄(g); forward at ~330 K, reverse at ~450 K. Only Ni forms a volatile carbonyl under these conditions — that selectivity is the chemistry.

#### Cyanide and Gold — Full Mechanism

Native gold dissolves in aerated dilute NaCN because of complexation, not oxidation by CN⁻ alone:
- 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH
- 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au↓ (Zn is more electropositive; it reduces Au⁺ inside the complex).

The role of **O₂** is non-obvious and frequently asked — without O₂ the reaction is thermodynamically unfavourable.

#### Practice Prompts

1. The Ellingham line for 2Mg + O₂ → 2MgO lies *below* that for 2C + O₂ → 2CO at 1000 K. Predict whether Mg or C will reduce TiO₂ at this temperature and write the balanced redox equation.
2. In an electrolytic refining cell, current I = 200 A flows for t = 1 hour through acidified CuSO₄. Compute the mass of Cu deposited at the cathode (M = 63.5 g·mol⁻¹, n = 2, F = 96485 C·mol⁻¹). Answer: m = (200 × 3600 × 63.5)/(2 × 96485) ≈ 23.7 g.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
