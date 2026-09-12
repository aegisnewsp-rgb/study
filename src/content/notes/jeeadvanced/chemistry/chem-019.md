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
lastUpdated: "2026-09-12"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Metallurgy** is the sequence of operations that converts an ore into a usable, pure metal: **concentration → extraction (reduction) → refining**, with optional alloying at the end. In JEE Advanced, marks hinge on three areas — the **Ellingham diagram**, **specific extraction flowsheets** (Fe, Cu, Al, Zn, Ag, Au), and **refining methods**.

- **Steps:** ore dressing → calcination (carbonates, no S) or roasting (sulphides, evolves SO₂) → reduction → refining.
- **Ellingham rule:** a metal oxide whose ΔG° line sits *lower* on the ΔG° vs T plot is more stable; a reductant whose line sits *higher* can reduce it. C/CO line has **positive slope**, C/CO₂ has **negative slope** — they cross most metal-oxide lines at high T, making **carbon a stronger reductant above the crossover**.
- **Hall-Héroult cell:** 2Al₂O₃ + 3C → 4Al + 3CO₂; cryolite (Na₃AlF₆) lowers the melt from ~2050 °C to ~950 °C.
- **Refining picks:** electrolytic for Cu/Zn, **Mond** (Ni(CO)₄) for Ni, **van Arkel** (volatile Iodide) for Ti/Zr/Hf, **zone** for Si/Ge.
- **Faraday's law:** m = (I·t·M)/(n·F); remember n = 2 for Cu²⁺, 3 for Al³⁺, 1 for Ag⁺.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Conversion to Oxide
The first job is separating **ore mineral** from **gangue** (worthless matrix). Hydraulic washing uses gravity; magnetic separation lifts magnetite (Fe₃O₄); froth flotation uses a pine-oil froth that carries sulphide particles (Cu, Zn, Pb) upward. Leaching dissolves the valuable component chemically — **bauxite with NaOH (Bayer)** and **Au/Ag with NaCN (cyanide)** are the JEE favourites. The concentrated ore is then converted to its oxide: **calcination** for carbonates and hydroxides (e.g., CaCO₃ → CaO + CO₂) and **roasting** for sulphides (e.g., 2ZnS + 3O₂ → 2ZnO + 2SO₂).

#### Ellingham Diagram and Choice of Reductant
For the oxide-formation reaction 2M + O₂ → 2MO, plotting ΔG° = ΔH° − TΔS° versus T gives a nearly straight line whose slope is −ΔS°. A line lower on the diagram means a more stable oxide. A reductant R is feasible only if its R-oxide line lies **above** the M-oxide line so that the coupled reaction is ΔG° < 0. The **C/CO line slopes upward** (ΔS > 0, gas moles 1 → 2) and the **C/CO₂ line slopes downward** (ΔS < 0, 2 → 1); they intersect most metal-oxide lines, so carbon becomes a stronger reductant at high T.

| Reduction route | Best reductant | Typical ore → metal |
| --- | --- | --- |
| Carbon reduction | Coke above crossover T | ZnO → Zn, Fe₂O₃ → Fe (blast furnace) |
| Self-reduction | Sulphide itself | Cu₂S + Cu₂O → 6Cu + SO₂ |
| Electrolytic | Electricity | Al₂O₃ → Al (Hall-Héroult), NaCl → Na |
| Displacement | Zn, Fe, Mg | 2Na[Au(CN)₂] + Zn → 2Au |

#### Refining Methods
Refining choices are dictated by what purity is needed and the metal's chemistry. **Electrolytic refining** of copper uses impure blister Cu as anode and a pure Cu strip as cathode in acidified CuSO₄, giving 99.99% purity. **Vapour-phase refining** converts the metal to a volatile compound and back: van Arkel (Ti + 2I₂ ⇌ TiI₄ at 500 K → decomposed on a 1700 K W filament) and Mond process (Ni + 4CO ⇌ Ni(CO)₄ at 330 K → decomposed at 450 K). **Zone refining** sweeps a molten zone along a rod; impurities stay in the liquid because of their higher solubility there, yielding ultra-pure Si, Ge, and Ga used in semiconductors.

> Tip: Mond works only for nickel because Ni(CO)₄ is the only common metal carbonyl that forms easily and decomposes cleanly — examiners ask this as a direct single-correct MCQ.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Blast Furnace and the Iron Flowsheet
The integrated iron process layers coke, ore (Fe₂O₃/haematite), and limestone (CaCO₃) from the top of a tall shaft. Hot air injected at the tuyeres combusts coke to CO, and the rising CO reduces the descending ore in stages: Fe₂O₃ → Fe₃O₄ → FeO → Fe. CaCO₃ decomposes to CaO, which joins SiO₂ gangue as **CaSiO₃ slag** that floats above molten **pig iron**. The overall reduction is Fe₂O₃ + 3CO → 2Fe + 3CO₂, with the Ellingham diagram justifying why CO works at ~900–1500 K but not below.

#### Worked Faraday Example
Calculate the mass of Cu deposited in 2 hours by a 5.0 A current through acidified CuSO₄. Using m = (I·t·M)/(n·F) = (5.0 × 7200 × 63.5)/(2 × 96485) = 11.85 g. Trap: students plug n = 1 and overshoot the answer by a factor of two — for CuSO₄ the discharging ion is Cu²⁺, so n = 2.

| Refining method | Purity | Mechanism | Used for |
| --- | --- | --- | --- |
| Electrolytic | 99.99% | Anode dissolves, cathode plates | Cu, Zn, Ag |
| Zone refining | 99.9999% | Segregation of impurity in molten zone | Si, Ge, B, Ga |
| Vapour phase (van Arkel) | 99.9%+ | Volatile iodide decomposed on hot W wire | Ti, Zr, Hf |
| Mond | 99.9%+ | Volatile Ni(CO)₄ formed then decomposed | Ni only |
| Liquation | crude | Metal melts and drains from impurities | Sn, Pb |

#### Connections and Common Traps
1. **Cryolite is not the ore** — it only lowers Al₂O₃'s melting point and boosts conductivity; the actual carbon anode is consumed (C + O²⁻ → CO/CO₂ + electrons), so its mass decreases each run.
2. **Zone refining vs van Arkel** — the former is a physical solubility partition with no chemistry; the latter is a reversible chemical-transport cycle (M + 2I₂ ⇌ MI₄). Examiners pair them to test whether you understand *why* ultra-pure Ti and Si need different routes.
3. **Thermite vs carbon reduction** — Cr₂O₃ + 2Al → Al₂O₃ + 2Cr works because Al's ΔG° line is below Cr₂O₃'s at room temperature; carbon cannot reduce Cr₂O₃ economically.

#### Practice prompts:
- Sketch the Ellingham diagram and predict whether Mg can reduce SiO₂ at 1500 K — justify using line positions.
- 10.0 A is passed through molten Al₂O₃ for 5.0 hours. Compute the Al collected (n = 3, M = 27 g·mol⁻¹).

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
