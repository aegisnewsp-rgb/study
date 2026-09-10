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
lastUpdated: "2026-09-10"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Metallurgy** is the sequence of operations that converts a metal-bearing mineral into a usable, pure metal: **(i)** concentration of ore (removal of gangue), **(ii)** conversion to oxide or free metal (calcination for carbonates/hydrates, roasting for sulphides), **(iii)** reduction to crude metal, **(iv)** refining, and **(v)** alloying.

The **Ellingham diagram** plots ΔG° of oxide formation versus temperature. A line lying lower indicates a more stable oxide and therefore a stronger reducing agent for any metal whose oxide line sits above it.

| Step | Goal | One-line clue |
| --- | --- | --- |
| Concentration | Remove gangue | Froth flotation for sulphides |
| Calcination | Carbonate → oxide | No SO₂ evolved |
| Roasting | Sulphide → oxide | SO₂ released |
| Reduction | Oxide → metal | Choose by Ellingham position |
| Refining | → 99.99 % pure | Method depends on metal |

- **Must-know rule:** Below the C/CO crossover, Al and Mg reduce oxides; above it, coke wins (used in blast furnace for Fe).
- **Faraday's law** governs electrolytic refining: m = (I·t·M)/(n·F) with F = 96485 C mol⁻¹.
- **JEE Advanced pattern:** One MCQ + one numerical on Ellingham interpretation; one numerical on Faraday's law, almost every year.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Pretreatment

Ores are crushed, ground, and separated from gangue using physical or chemical differences. **Hydraulic washing** exploits density (used for tin ore). **Magnetic separation** removes Fe₃O₄ / chromite. **Froth flotation** selectively floats sulphide ores by wetting them with pine oil while gangue sinks in water. **Leaching** dissolves the valuable component chemically — bauxite with aqueous NaOH (Bayer process) and gold/silver with dilute NaCN aerated with O₂.

#### Calcination vs Roasting

Both convert ores to oxides but apply to different classes. **Calcination** heats carbonates and hydroxides in limited air: CaCO₃ → CaO + CO₂. **Roasting** heats sulphides in excess air: 2ZnS + 3O₂ → 2ZnO + 2SO₂. The SO₂ evolved in roasting is often trapped for H₂SO₄ manufacture — a frequent MCQ line.

#### Reduction and the Ellingham Diagram

The reaction 2M(s) + O₂(g) → 2MO(s) gives ΔG° = ΔH° − TΔS°. Because ΔS° is nearly constant, the plot is a near-straight line whose slope = −ΔS°. For the C + ½O₂ → CO line, ΔS° > 0 (gas moles increase 1 → 2), giving a **positive slope** that crosses most metal-oxide lines between 500–1000 K. Above that crossover, carbon becomes the thermodynamically superior reductant — the basis of blast-furnace reduction of Fe₂O₃.

#### Worked Extraction Pathways

| Metal | Ore | Reduction step | Refining |
| --- | --- | --- | --- |
| Fe | Haematite Fe₂O₃ | Coke + CO in blast furnace, slag CaSiO₃ | — |
| Cu | Chalcopyrite CuFeS₂ | Partial roasting then self-reduction by FeS | Electrolytic (anode impure, cathode pure strip, CuSO₄ + H₂SO₄ bath) |
| Zn | Zinc blende ZnS | Roasting then C reduction at 1673 K | Electrolytic or distillation (Zn boils at 1180 K) |
| Al | Bauxite (Bayer → Al₂O₃) | Hall–Héroult electrolysis in cryolite–CaF₂ melt at ~950 °C | — (already 99.9 %) |
| Au | Native / low-grade | Cyanide leaching then Zn displacement | — |

- **Hall–Héroult overall:** 2Al₂O₃ + 3C → 4Al + 3CO₂; the graphite anode is **consumed**, not inert.
- **Cyanide leach:** 4Au + 8NaCN + 2H₂O + O₂ → 4Na[Au(CN)₂] + 4NaOH, followed by 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au.

#### Common Traps

Confusing calcination with roasting, misreading Ellingham slopes, and swapping anode/cathode in electrolytic refining cost the most marks. Always state the **valency n** correctly when applying Faraday's law: n = 2 for Cu²⁺, n = 3 for Al³⁺.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Refining Methods Compared

| Method | Principle | Metals / elements | Purity |
| --- | --- | --- | --- |
| Electrolytic refining | Anodic dissolution + cathodic deposition | Cu, Zn, Ag, Au | 99.99 % |
| Zone refining | Impurity preferentially stays in molten zone | Si, Ge, Ga, B | Ultra-pure |
| Van Arkel–de Boer | Metal + I₂ → volatile MI₄ → decomposes on W filament at 1700 K | Ti, Zr, Hf | Very high |
| Mond process | Ni + 4CO (330 K) → Ni(CO)₄; decompose at 450 K | Ni | 99.9 % |
| Liquation | Metal melts and drains from impurities | Sn, Pb, Bi | Moderate |
| Distillation | Boiling-point separation | Zn, Hg | High |
| Poling | Reducing gas / wood agitates molten metal to remove oxides | Cu (removes Cu₂O as Cu₂O + C → 2Cu + CO) | Moderate |

#### Ellingham Mechanics and Coupled Reactions

For a metallothermic reduction such as the thermite reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr, the overall ΔG° is the algebraic sum of the constituent oxide-formation Gibbs energies with reversed sign for the oxide being reduced. Because Al₂O₃ line sits far below Cr₂O₃ across the entire temperature range, ΔG° is large and negative, releasing ~470 kJ per mole of Cr.

#### Edge Cases and Cross-Links

- **Disproportionation in roasting:** Cu₂S + 2Cu₂O → 6Cu + SO₂ is *self-reduction* and never needs an external reductant — JEE loves asking why no extra reagent is required.
- **Si as semiconductor:** Zone-refined Si is the bridge between metallurgy (purification technique) and p–n junction physics (band gap 1.1 eV).
- **Ti extraction (Kroll process, related to van Arkel):** TiO₂ + 2C + 2Cl₂ → TiCl₄ (then reduced by molten Mg under Ar). Worth noting because it links to Mg metallothermy.

#### Common Mistakes Recap

1. Treating cryolite as an ore — it is a flux/solvent that lowers Al₂O₃'s melting point from ~2050 °C to ~950 °C.
2. Forgetting that the graphite anode in Hall–Héroult is consumed: net 3C are oxidised per 4Al produced.
3. Using n = 1 for Al in Faraday's law; correct n = 3 (Al³⁺).
4. Believing van Arkel and zone refining are the same — one is a chemical vapour transport, the other a physical solubility-based segregation.

#### Practice Prompts

1. **Numerical:** A current of 15.0 A passes through acidified CuSO₄ for 1 hour. Find the mass of Cu deposited at the cathode (M = 63.55 g mol⁻¹, n = 2). Answer: (15·3600·63.55)/(2·96485) ≈ 17.8 g.
2. **Reasoning:** On an Ellingham diagram, the Mg/MgO line lies below the C/CO line at 298 K but above it above ~2000 K. Predict the reductant of choice for MgO at each temperature and justify with the sign of ΔG°overall.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
