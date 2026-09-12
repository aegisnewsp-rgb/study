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

Metallurgy is the branch of chemistry dealing with extracting a pure metal from its ore and shaping it for engineering use. JEE Advanced asks questions on four stages — **concentration**, **conversion to oxide/metal**, **reduction**, and **refining** — and ties them to **Ellingham diagrams** (ΔG° vs T plots for oxide formation).

- **Ellingham rule:** a metal whose oxide line lies *below* another's on the diagram can reduce that oxide. Al and Mg therefore displace Cr, Fe, Mn from their oxides (thermite process).
- **Crossover trick:** the **C → CO** line slopes *upward* (ΔS > 0, 1→2 gas moles), so above ~1073 K coke reduces FeO, ZnO, SnO. Below it, carbon is a weaker reductant than Al/Mg.
- **Refining quick-match:** electrolytic for Cu/Zn, **Mond** for Ni (Ni(CO)₄, 330 K formation → 450 K decomposition), **van Arkel** for Ti/Zr/Hf, zone refining for Si/Ge.

| Stage | Typical reagent/process | Output |
| --- | --- | --- |
| Concentration | Froth flotation (sulphides), NaOH leaching (bauxite) | Ore + gangue separated |
| Conversion | Calcination (carbonates) / Roasting (sulphides → SO₂) | Metal oxide |
| Reduction | Coke / Al / electrolytic / self-reduction | Crude metal |
| Refining | Electrolytic, Mond, van Arkel, zone | Pure metal |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The four-stage chain

Almost every JEE problem maps onto the chain **ore → concentrated ore → oxide → crude metal → pure metal**. Concentration removes **gangue** (worthless matrix) using **hydraulic washing** (density), **magnetic separation** (Fe₃O₄, chromite), **froth flotation** (sulphides — pine oil + air bubbles, xanthate collector), or **leaching** (bauxite with NaOH; gold/silver with dilute NaCN in aerated solution). The concentrated ore is then **calcined** (carbonates/hydrates, no S — CaCO₃ → CaO + CO₂) or **roasted** (sulphides — 2ZnS + 3O₂ → 2ZnO + 2SO₂).

#### Reduction and Ellingham diagrams

The choice of reductant is governed by the **Ellingham diagram**, which plots ΔG° of oxide formation against temperature. Because ΔG° = ΔH° − TΔS°, each line is roughly straight with slope −ΔS°. The line for **2C + O₂ → 2CO rises** (ΔS > 0), while **C + O₂ → CO₂ falls** (ΔS < 0). Their intersection with metal-oxide lines gives the **crossover temperature** above which coke can reduce that oxide. Below the crossover, **Al and Mg** are still better reductants — the basis of the **thermite reaction** Cr₂O₃ + 2Al → Al₂O₃ + 2Cr (ΔG° very negative).

#### Refining methods

| Method | Metal | Principle |
| --- | --- | --- |
| Electrolytic refining | Cu, Zn | Anode = impure blister metal; cathode = pure strip; electrolyte = acidified M²⁺SO₄ |
| Distillation | Zn, Hg, Sn | Volatile metal condensed away from impurities |
| Liquation | Sn, Pb | Metal melted and drained off lower-melting impurities |
| Poling | Cu (Cu₂O removal) | Molten metal stirred with green poles; hydrocarbons reduce Cu₂O |
| Mond process | Ni | Ni + 4CO → Ni(CO)₄ at 330 K; decomposed at 450 K |
| van Arkel–de Boer | Ti, Zr, Hf | Ti + 2I₂ → TiI₄ → Ti + 2I₂ (hot W filament) |
| Zone refining | Si, Ge, B, Ga | Molten zone sweeps impurity (solubility differs in liquid vs solid) |

#### Hall–Héroult for aluminium

The **Bayer process** first gives pure Al₂O₃ from bauxite (SiO₂ and Fe₂O₃ impurities removed). The **Hall–Héroult cell** then electrolyses Al₂O₃ dissolved in molten **cryolite (Na₃AlF₆)** plus a little fluorspar, lowering the operating temperature from ~2050 °C to ~950 °C and raising conductivity. **C(graphite) anode is consumed** (C + O²⁻ → CO + 2e⁻; overall 2Al₂O₃ + 3C → 4Al + 3CO₂).

#### Cyanide process for gold

Native gold dissolves in aerated NaCN solution:

4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH

The complex is then reduced by zinc dust:

2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au

Silver follows an identical pattern. Note that zinc does not reduce free Au directly — it displaces Au from the **dicyanoaurate(I) complex**.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked numerical — electrolytic refining of copper

A copper refinery uses an electrolytic cell with **impure blister Cu anode, pure Cu cathode, and acidified CuSO₄ electrolyte**, passing **0.500 A** for **4.00 h**. Mass of Cu deposited (n = 2, M = 63.55 g mol⁻¹, F = 96485 C mol⁻¹):

- Charge Q = I·t = 0.500 × 4.00 × 3600 = 7200 C
- m = (Q × M) / (n × F) = (7200 × 63.55) / (2 × 96485) = **2.37 g**

> **Trap:** if Hall–Héroult's aluminium were computed with the same charge, **n = 3** (Al³⁺), giving 0.823 g — about a third. Wrong valency is the commonest arithmetic mistake.

#### Edge cases and cross-connections

1. **Self-reduction of copper.** Roasted chalcopyrite CuFeS₂ gives Cu₂S + FeS + SO₂; further air converts FeS to FeO/FeSO₄ (slag), and finally **2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂**, followed by **2Cu₂O + Cu₂S → 6Cu + SO₂**. No external reductant is needed at the end.
2. **Why Al cannot be reduced by coke.** Al₂O₃'s Ellingham line lies *below* the C/CO line at every temperature — coke cannot supply enough free-energy drop.
3. **Coupled reactions.** When combining two Ellingham half-reactions, ΔG°_overall = Σ ΔG°_products − Σ ΔG°_reactants; the driving force is the vertical gap between lines, not the crossover point alone.

#### High-frequency traps

| Mistake | Correct idea |
| --- | --- |
| Roasting ↔ calcination swapped | Carbonate/hydrate → **calcination**; sulphide → **roasting** (SO₂ evolved) |
| C/CO slope direction | **Positive** (1 → 2 gas moles), crosses metal lines going up |
| Solvent in Hall–Héroult | **Cryolite lowers mp**, it is not the ore or reductant |
| van Arkel vs zone refining | van Arkel is *chemical* (volatile iodide); zone is *physical* (impurity segregation) |
| Anode in electrolytic refining | **Impure** Cu dissolves; pure Cu deposits on cathode |

#### Practice prompts

1. Predict, with an Ellingham sketch, whether coke at 1500 K can reduce MgO. Cite the relative line positions.
2. Write balanced equations for the leaching step and the zinc-dust displacement step of the **MacArthur–Forrest cyanide process** for silver.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
