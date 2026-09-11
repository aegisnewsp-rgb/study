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
lastUpdated: "2026-09-11"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy is the science and technology of extracting a pure metal from its ore and shaping it for use. The four sequential steps are **concentration of ore**, **extraction of crude metal**, **refining**, and **alloying**.

- **Calcination** heats carbonate/hydrate ores in limited/no air: CaCO₃ → CaO + CO₂.
- **Roasting** heats sulphide ores in excess air: 2ZnS + 3O₂ → 2ZnO + 2SO₂.
- **Ellingham diagram** plots ΔG° of oxide formation vs T; lower line = stronger oxide former = weaker reductant for that metal.
- **C/CO line** slopes upward (ΔS > 0, gas moles 1→2) and crosses most metal lines, so coke becomes a better reductant above the crossover.
- **Refining picks**: electrolytic for Cu/Zn (99.99%), **zone refining** for Si/Ge, **van Arkel** for Ti/Zr/Hf, **Mond** for Ni.

| Method | Target metal | Core principle |
| --- | --- | --- |
| Hall–Héroult | Al | Electrolysis of Al₂O₃ dissolved in cryolite (Na₃AlF₆) at ~950 °C |
| Mond process | Ni | Formation/decomposition of volatile Ni(CO)₄ |
| Cyanide process | Au, Ag | Leaching with NaCN/O₂, then Zn displacement |
| Zone refining | Si, Ge | Impurity segregation in molten zone |

JEE Advanced asks 1–2 questions per paper, usually a reasoning item on Ellingham diagrams or a numerical on Faraday's law applied to Hall–Héroult.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Conversion

Ore is separated from **gangue** (worthless matrix) using physical or chemical methods. **Froth flotation** is reserved for sulphide ores because mineral particles preferentially attach to air bubbles coated with collectors like pine oil. **Leaching** dissolves the valuable component selectively: bauxite is digested in NaOH to form soluble [Al(OH)₄]⁻, and gold/silver ores are treated with dilute NaCN in presence of O₂.

The concentrated ore is converted to a reducible form. **Calcination** drives off CO₂ or H₂O from carbonates and hydroxides. **Roasting** is used for sulphides and produces SO₂, which is the basis of contact-process H₂SO₄ manufacture downstream.

#### Reduction and the Ellingham Diagram

Reduction of the metal oxide is governed by thermodynamics: a metal M is extracted by a reductant R if the Ellingham line for R_xO_y lies **below** the line for M_xO_y at the operating temperature, making ΔG°(combined) negative. The **C/CO line** rises with T because 2C + O₂ → 2CO produces more gas moles (ΔS > 0), giving carbon its increasing reducing power at higher temperatures.

| Reaction | ΔS sign | Slope on diagram |
| --- | --- | --- |
| 2C + O₂ → 2CO | Positive | Upward (line rises with T) |
| C + O₂ → CO₂ | Negative | Downward |
| 2M + O₂ → 2MO | Roughly negative | Slight downward |

#### Worked Relationships

In the blast furnace for iron, the cascade is Fe₂O₃ → Fe₃O₄ → FeO → Fe, with CaO + SiO₂ → CaSiO₃ slag removing silica gangue. For copper, partial roasting of chalcopyrite gives Cu₂S and FeS; FeS further oxidises to FeO + SO₂, and the FeO slags off, after which Cu₂S self-reduces: Cu₂S + O₂ → 2Cu + SO₂.

For aluminium, **Bayer process** purifies bauxite to Al₂O₃, then **Hall–Héroult** electrolyses it. The overall cell reaction is 2Al₂O₃ + 3C → 4Al + 3CO₂, with the **graphite anode being consumed**, not inert.

#### Common Exam Traps

- Confusing calcination (no S) with roasting (sulphide → SO₂).
- Assuming carbon beats aluminium below the C/Al crossover.
- Reversing anode/cathode in electrolytic refining of Cu.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Faraday's Law and the Hall–Héroult Calculation

Mass deposited in electrolytic refining follows:

$$m = \frac{I \times t \times M}{n \times F}$$

where *I* is current in amperes, *t* in seconds, *M* the molar mass of the metal, *n* its valency (Al³⁺ → n = 3; Cu²⁺ → n = 2; Ag⁺ → n = 1), and *F* = 96485 C·mol⁻¹. A JEE Advanced numerical may ask: *Find the mass of Al produced when 2.0 × 10⁴ A passes for 1 hour, with 100% current efficiency.* Plug in: m = (2.0×10⁴ × 3600 × 27)/(3 × 96485) ≈ 6.71 × 10³ g ≈ 6.71 kg of Al.

#### Refining Comparison and Purity Demands

| Method | Mechanism | Typical purity | Used for |
| --- | --- | --- | --- |
| Electrolytic | Anode dissolves, cathode plates | 99.99% | Cu, Zn |
| Zone refining | Segregation coefficient < 1 | 99.9999%+ | Si, Ge, Ga |
| Van Arkel | Metal + I₂ → MI₄ → M + 2I₂ on W filament | Very high | Ti, Zr, Hf |
| Mond | Ni + 4CO ⇌ Ni(CO)₄ at 330 K; decomposes at 450 K | Very high | Ni |
| Liquation | Melting point difference | Moderate | Sn, Pb |
| Distillation | Boiling point difference | High | Zn, Hg |

#### Edge Cases and Links

The **cyanide process** for native Au/Ag proceeds in two distinct stages: leaching 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH, followed by **zinc displacement** 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au. Confusing the two stages or skipping the complex formation is a frequent MCQ trap.

Thermite welding (Fe₂O₃ + 2Al → Al₂O₃ + 2Fe) exploits ΔG°(Al₂O₃) being far more negative than ΔG°(Fe₂O₃); aluminium sits well below iron on the Ellingham diagram at ordinary temperatures, which is the opposite of carbon's situation.

#### Common Mistakes

- **Wrong valency in Faraday's law** — using n = 1 for Al instead of n = 3.
- **Treating the cryolite as the ore** — it is a flux/solvent that lowers melting point from ~2050 °C to ~950 °C and boosts conductivity.
- **Calling the graphite anode inert** — it is consumed: C + O²⁻ → CO + 2e⁻ / CO₂ + 4e⁻.

#### Practice Prompts

1. Using the Ellingham diagram, justify why coke reduces ZnO at ~1673 K but cannot reduce Al₂O₃ at the same temperature.
2. A 5.00 A current is passed through acidified CuSO₄ for 40 minutes. Calculate the mass of Cu deposited (M = 63.5, n = 2) and the volume of O₂ at STP liberated at the anode.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
