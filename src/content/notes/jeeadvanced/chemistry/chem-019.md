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

**Metallurgy** is the sequence of steps that turns a **mineral ore** into a usable, pure metal: **concentration → extraction (reduction) → refining → alloying**. Gangue (worthless rock) is removed using **froth flotation** (sulphide ores), **magnetic separation**, **hydraulic washing**, or **leaching** (NaOH for bauxite, NaCN for Au/Ag). The oxide is then reduced by **carbon, Al, Mg, H₂, or electrolysis**, chosen by reading the **Ellingham diagram** (ΔG° vs T). Final purity comes from **electrolytic refining (Cu)**, **Mond process (Ni via Ni(CO)₄)**, **van Arkel (Ti/Zr via volatile iodide)**, or **zone refining (Si, Ge)**.

- **Calcination** = carbonate/hydrate ore heated in *limited/absence* of air (no SO₂); **Roasting** = sulphide ore heated in *excess* air (SO₂ released).
- At **high T**, the C → CO line dips below most metal-oxide lines, so coke reduces Fe₂O₃, ZnO, SnO₂.
- **Faraday's law** for refining: **m = (I · t · M) / (n · F)**, F = 96485 C mol⁻¹.

| Quick match | Process |
| --- | --- |
| Cu, Zn purification | Electrolytic refining |
| Ni ultra-pure | Mond (Ni(CO)₄) |
| Ti, Zr, Hf | van Arkel–de Boer |
| Si, Ge semiconductors | Zone refining |
| Au from ore | Cyanide process + Zn displacement |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Steps of extraction

Every metal follows the same four-stage pipeline, but the chemistry at each stage depends on the ore type. **Concentration** separates ore from gangue: **froth flotation** exploits sulphur's affinity for pine-oil froth (used for PbS, ZnS, CuFeS₂), **leaching** dissolves the valuable component selectively (bauxite in NaOH gives soluble NaAlO₂; gold in aerated NaCN gives Na[Au(CN)₂]). **Calcination vs roasting** is the next discriminator: carbonates and hydroxides (limestone, bauxite, malachite) decompose in limited air giving CO₂/H₂O; sulphides (galena, zinc blende) must be roasted in excess air so the metal forms its oxide and sulphur leaves as SO₂.

#### Reduction and the Ellingham diagram

Reduction is chosen by plotting **ΔG° of oxide formation versus temperature**. The line for **2C + O₂ → 2CO** has a *positive slope* (ΔS > 0, gas moles 1 → 2), so it falls steeply and crosses most M–O lines above ~700 °C. Above that crossover, coke reduces the metal oxide; below it, **Al, Mg, Ca** are stronger reductants — that is why the **thermite reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr** works at room temperature. Coupled reactions are additive: ΔG°(overall) = ΣΔG°(products) − ΣΔG°(reactants).

#### Refining methods

The crude metal still contains 1–5 % impurities; choice of refining depends on the metal. **Electrolytic refining** of Cu uses impure blister copper as anode, a pure Cu strip as cathode, and acidified CuSO₄ as electrolyte — pure Cu (99.99 %) deposits on the cathode while noble impurities (Au, Ag, Pt) drop as **anode mud**. **Vapour-phase refining** covers two distinct techniques: the **Mond process** (Ni + 4CO ⇌ Ni(CO)₄ at 330 K, decomposed at 450 K) and the **van Arkel–de Boer process** (Ti + 2I₂ ⇌ TiI₄, decomposed on a hot W filament at 1700 K).

| Refining method | Best for | Principle |
| --- | --- | --- |
| Electrolytic | Cu, Zn, Ag | Anode dissolves, pure metal plates on cathode |
| Zone melting | Si, Ge, B, Ga | Impurity rejected by moving molten zone |
| van Arkel | Ti, Zr, Hf | Volatile iodide decomposed on hot wire |
| Mond | Ni | Volatile carbonyl decomposed by heat |
| Liquation / distillation | Sn, Pb / Zn, Hg | Melting-point / boiling-point difference |
| Poling | Cu (oxide removal) | Hydrocarbon stream reduces Cu₂O |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked example — Faraday's law in copper refining

A copper refinery runs at **I = 1500 A** for **t = 8 h** through an electrolytic cell. Mass of pure copper deposited:

m = (I · t · M) / (n · F) = (1500 × 8 × 3600 × 63.55) / (2 × 96485)
m = 2.736 × 10⁹ / 192970 ≈ **14 180 g ≈ 14.18 kg Cu**

Units check: A·s = C, g·mol⁻¹/(C·mol⁻¹) = g. Always use **n = 2** for Cu²⁺; substituting n = 1 (treating Cu as Cu⁺) halves the answer — a frequent trap. For Al in Hall-Héroult refining, **n = 3**.

#### Edge cases and high-yield traps

- **Hall-Héroult** cell: pure Al₂O₃ is dissolved in molten **cryolite (Na₃AlF₆)** with a little CaF₂, dropping the operating temperature from ~2050 °C to ~950–1000 °C. The **graphite anode is consumed** (C + O²⁻ → CO + 2e⁻ then CO₂); cryolite itself is *neither* ore nor reductant.
- **Cyanide process** sequence must be written in two steps — first **4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH** (leaching), then **2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au** (displacement). Writing Zn reacting directly with ore skips the dicyanoaurate intermediate and loses a step's marks.
- **Blast-furnace iron** chemistry is layered: at the top, Fe₂O₃ + 3CO → 2Fe + 3CO2 (reduction); in the middle, CaCO₃ → CaO + CO₂; lower down, CaO + SiO₂ → CaSiO₃ (slag). Pig iron collects at the hearth; slag floats above it.
- **Thermodynamic vs kinetic reality**: Al₂O₃ has ΔG° *more negative* than Fe₂O₃, so thermodynamically Al should reduce Fe₂O₃ (it does — thermite). The reverse, Fe reducing Al₂O₃, is non-spontaneous — yet *industrially* iron cannot displace Al because Al₂O₃ is kinetically protected by a stable passivating layer until cryolite dissolves it.

#### Common mistakes (exam traps)

- Swapping anode and cathode in electrolytic refining (impure = anode, pure = cathode).
- Saying carbon is *always* the strongest reductant — only above the crossover T.
- Using n = 1 for Cu or n = 2 for Al in Faraday's-law numericals.
- Treating cryolite as the ore in Hall-Héroult.

#### Practice prompts

1. The Ellingham line for 2Mg + O₂ → 2MgO lies well below that for 2C + O₂ → 2CO at 298 K. Predict which metal can reduce MgO and write the balanced equation at 298 K. *(Answer: C cannot reduce MgO at 298 K; the reaction MgO + C → Mg + CO has ΔG° > 0. Si or Ca would be required — this is why Mg is itself produced electrolytically, not by carbon reduction.)*
2. In the van Arkel process for Ti, identify the role of I₂, the W filament temperature (~1700 K), and why TiI₄ — not TiCl₄ — is the transported species. *(I₂ oxidises Ti to volatile TiI₄ at ~500 K; TiI₄ diffuses to the 1700 K filament where ΔG° of decomposition becomes favourable; iodide is preferred because TiI₄ has a lower decomposition temperature than TiCl₄, sparing the W filament.)*

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
