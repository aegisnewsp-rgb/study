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
lastUpdated: "2026-09-13"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy is the science of extracting a metal from its **ore** (a mineral from which the metal is commercially extracted) and converting it into a usable form. The four mandatory stages are **concentration of ore**, **extraction** (reduction of oxide to metal), **refining** (purification), and **alloying**.

- **Concentration methods** depend on ore type: hydraulic washing (oxide ores, density difference), magnetic separation (magnetite, Fe₃O₄), froth flotation (sulphide ores, pine oil collectors), leaching (bauxite with NaOH; Au/Ag with NaCN).
- **Calcination vs roasting**: calcination = carbonate/hydrate ores, no SO₂ released (e.g. CaCO₃ → CaO + CO₂); roasting = sulphide ores, SO₂ released (e.g. 2ZnS + 3O₂ → 2ZnO + 2SO₂).
- **Reduction** is chosen from the **Ellingham diagram** (ΔG° vs T plot for oxide formation): a metal oxide line lying above the reductant's oxide line means the reductant can take the oxygen away.
- **Refining flashcards**: electrolytic (Cu, Zn), zone (Si, Ge, Ga — semiconductors), van Arkel (Ti, Zr, Hf via iodide), Mond (Ni via Ni(CO)₄), distillation (Zn, Hg), liquation (Sn, Pb), poling (Cu).
- **Hall–Héroult** uses cryolite (Na₃AlF₆) to dissolve Al₂O₃ near 950 °C; carbon anode is consumed: 2Al₂O₃ + 3C → 4Al + 3CO₂.
- **Faraday's law** for electrolytic mass: m = (I·t·M)/(n·F), with F = 96485 C·mol⁻¹; n = 3 for Al, 2 for Cu, 1 for Ag.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The Four-Stage Flow

Every metallurgical process — from bauxite to aluminium, or from chalcopyrite to copper — moves through the same four stages. Recognising which stage a question targets saves marks, because JEE Advanced often tests one stage in isolation (e.g. "which refining method?" or "which concentration method for a sulphide ore?").

#### Concentration of Ore

The gangue (worthless matrix) is removed before reduction, since feeding gangue into the furnace wastes energy and flux.

| Method | Ore type | Key reagent / principle |
| --- | --- | --- |
| Hydraulic washing | Oxide ores (tin, haematite) | Gravity separation in water stream |
| Magnetic separation | Magnetite (Fe₃O₄) | Ferrous ore attracted to magnet |
| Froth flotation | Sulphide ores (CuFeS₂, ZnS, PbS) | Pine oil + air bubbles; gangue wets, ore floats |
| Leaching | Bauxite (NaOH), Au/Ag (NaCN) | Chemical dissolution of the metal |

#### Calcination and Roasting

Both convert the concentrated ore into a metal oxide (or free metal for roasting of certain sulphides). The delimiter is sulphur content, not temperature.

- **Calcination** (absence of air, or limited air): CaCO₃ → CaO + CO₂; ZnCO₃ → ZnO + CO₂. Used when the ore carries carbonates, hydroxides, or hydrated oxides.
- **Roasting** (excess hot air): 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂; 2ZnS + 3O₂ → 2ZnO + 2SO₂. The SO₂ produced is the source of sulphuric acid in smelters — a frequent assertion-reason trap.

#### Reduction and the Ellingham Diagram

The Ellingham diagram plots ΔG° of oxide formation versus T for various metals. A metal-oxide line that sits **higher** than the reductant-oxide line means the reductant can pull the oxygen. The lines for C → CO and C → CO₂ cross most metal-oxide lines at high temperature, which is why coke becomes the universal reductant above ~1000 K.

| C–O line | Slope sign | Reason |
| --- | --- | --- |
| 2C + O₂ → 2CO | Positive (line rises) | Gas moles increase: 1 → 2 |
| C + O₂ → CO₂ | Negative (line falls) | Gas moles decrease: 2 → 1 |

**Worked check**: For Al reduction of Cr₂O₃ (thermite), the Al₂O₃ line sits below Cr₂O₃ at all temperatures, so the coupled reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr has ΔG° < 0 throughout — Al wins.

#### Refining at a Glance

| Refining | Examples | Mechanism |
| --- | --- | --- |
| Electrolytic | Cu, Zn | Anode = impure metal; cathode = pure strip; electrolyte = metal sulphate |
| Zone refining | Si, Ge, Ga, B | Impurity soluble in melt, swept along rod |
| Van Arkel | Ti, Zr, Hf | Metal + I₂ → MI₄ (volatile) → decomposes on hot W filament |
| Mond | Ni | Ni + 4CO → Ni(CO)₄ at 330 K; decomposes at 450 K |
| Distillation | Zn, Hg, | Boiling-point gap |
| Liquation | Sn, Pb | Low-melting metal drains out |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Thermodynamic Traps

The Ellingham diagram hides three traps the examiner exploits:

1. **Crossover reversals.** Mg and Al are *better* reductants than carbon *below* their crossover temperatures. Industrial Al extraction cannot use carbon — it needs electrolysis (Hall–Héroult). Above the crossover, carbon wins. The exam loves asking which is the stronger reductant at a stated temperature.
2. **Coupled reactions.** When you couple two Ellingham lines, ΔG°_overall = Σ ΔG°_products − Σ ΔG°_reactants. For Cr₂O₃ + 2Al → Al₂O₃ + 2Cr, the negative slope of Al₂O₃ dominates and ΔG° stays negative across all T.
3. **ΔS sign.** Slope = −ΔS°. A positive slope means ΔS < 0 on the *forward* oxide-formation direction; for 2C + O₂ → 2CO the entropy rises (more gas moles), so the oxidation of C to CO is favoured as T increases.

#### Hall–Héroult and Faraday's Law

In electrolytic refining of Cu, the **impure blister copper** is the **anode** (it dissolves as Cu²⁺); a thin strip of **pure copper** is the **cathode** (Cu²⁺ deposits). Electrolyte is acidified CuSO₄. Reversing anode and cathode is the most common error.

For mass deposited:

```
m = (I · t · M) / (n · F)
```

where I in amperes, t in seconds, M in g·mol⁻¹, n = valency (1 for Ag, 2 for Cu, 3 for Al), F = 96485 C·mol⁻¹. **Worked example**: a current of 5 A passes through acidified CuSO₄ for 40 minutes. Mass of Cu deposited = (5 × 2400 × 63.5) / (2 × 96485) ≈ 3.95 g.

#### Cyanide Process — Two-Step, Not One

Silver and gold are extracted by **leaching first**, then **displacement**:

1. **Leaching**: 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH
2. **Zinc displacement**: 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au

Writing Zn directly as "Au + Zn → …" loses the complex-formation step that examiners award marks for.

#### Practice Prompts

1. An ore contains both ZnS and Ag₂S. Outline, with equations, the route to pure Zn (metal) and pure Ag (metal). Identify the concentration method for each and justify the choice of reductant using the Ellingham diagram (crossover ~1273 K).
2. Predict, with reasoning, whether carbon or magnesium is the better reductant for TiO₂ at 800 K. Given that industrial Ti uses the Kroll process (Mg reduction of TiCl₄), explain why TiO₂ is not directly reduced by Mg in practice.

#### Common Mistakes

- Treating cryolite as the ore; it is only a flux that lowers the melt from ~2050 °C to ~950 °C and raises conductivity.
- Forgetting that the Hall–Héroult **graphite anode is consumed** (forms CO/CO₂); it is not inert.
- Applying zone refining to metals like Cu — zone refining is for **semiconductors** whose host impurity is soluble in the melt but not in the solid.
- Confusing **van Arkel** (chemical vapour transport, metal + I₂) with **zone refining** (physical segregation, no reaction). Both give ultra-pure product but the mechanism is different.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
