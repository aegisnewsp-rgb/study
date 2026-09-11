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

**Metallurgy** is the science of extracting a pure metal from its ore and shaping it for use. The four sequential steps are **concentration of ore**, **extraction (reduction)**, **refining**, and **alloying**.

- **Concentration:** hydraulic washing, magnetic separation, **froth flotation** (sulphide ores), **leaching** (bauxite with NaOH; Au/Ag with NaCN).
- **Extraction:** **calcination** for carbonate/hydrate ores (no SO₂), **roasting** for sulphide ores (SO₂ evolved); reductant chosen via **Ellingham diagram** (ΔG° vs T).
- **Refining:** electrolytic (Cu, Zn), zone refining (Si, Ge), van Arkel (Ti, Zr), Mond process (Ni).
- **Hall-Héroult** cell reduces Al₂O₃ dissolved in molten **cryolite (Na₃AlF₆)** at ~950 °C with a graphite anode.

| Step | Example | Reagent |
| --- | --- | --- |
| Calcination | CaCO₃ → CaO + CO₂ | Heat only |
| Roasting | 2ZnS + 3O₂ → 2ZnO + 2SO₂ | O₂ (air) |
| Leaching | Al₂O₃·2H₂O + 2NaOH → 2NaAlO₂ + 3H₂O | NaOH |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration of the Ore

Ores contain **gangue** (worthless matrix). Hydraulic washing removes lighter silica gangue from heavier oxide ores. **Froth flotation** selectively floats sulphide particles using pine oil and collectors like potassium ethyl xanthate, while gangue settles. **Leaching** dissolves the wanted mineral: bauxite in NaOH (Bayer process), gold/silver in aerated dilute NaCN.

#### Calcination vs Roasting

Both are preliminary oxidising/decomposing steps, but they are not interchangeable. **Calcination** heats carbonate/hydrate ores in limited/no air — no SO₂ is released — e.g. CaCO₃ → CaO + CO₂; Al₂O₃·2H₂O → Al₂O₃ + 2H₂O. **Roasting** heats sulphide ores in excess air, producing SO₂ — e.g. 2ZnS + 3O₂ → 2ZnO + 2SO₂. The SO₂ is often captured for sulphuric acid manufacture (contact process feed).

#### Ellingham Diagram and Choice of Reductant

For oxide formation 2M + O₂ → 2MₓOᵧ, plotting ΔG° vs T gives a line of slope −ΔS°. Because gas moles decrease (2 → 1 for solid + O₂ → solid oxide), ΔS° < 0 and slopes are typically positive. The **C → CO** line has the *opposite* trend (ΔS° > 0, 1 mol gas → 2 mol gas), so it slopes upward and crosses most metal-oxide lines at high T. Above that crossover, carbon becomes the stronger reductant; below it, metals like Al and Mg win (basis of the **thermite** reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr).

#### Reduction and Refining

After reduction, crude metal is refined. For Cu, **electrolytic refining** uses impure blister Cu as the **anode**, a thin pure Cu strip as the **cathode**, and acidified CuSO₄ as the electrolyte — anode dissolves, pure Cu deposits at cathode (99.99% purity). For Ni, the **Mond process** forms volatile Ni(CO)₄ at ~330 K, which decomposes at ~450 K to give 99.95% Ni.

| Method | Best for | Principle |
| --- | --- | --- |
| Electrolytic | Cu, Zn | Anode dissolves; pure metal at cathode |
| Zone refining | Si, Ge, B, Ga | Impurity stays in molten zone |
| Van Arkel | Ti, Zr, Hf | Ti + 2I₂ → TiI₄ → Ti + 2I₂ (on W filament) |
| Mond | Ni | Ni + 4CO ⇌ Ni(CO)₄ |

#### Key Formulae

- Faraday's law: **m = (I × t × M) / (n × F)**, with F = 96485 C·mol⁻¹. For Cu²⁺, n = 2; for Al³⁺, n = 3; for Ag⁺, n = 1.
- Gibbs–Helmholtz: **ΔG° = ΔH° − TΔS°**; spontaneous when ΔG° < 0.
- Cyanide process overall: 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH, followed by Zn displacement: 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mechanism Depth

In the **Hall-Héroult** cell, pure Al₂O₃ (from Bayer process) is dissolved in molten cryolite (Na₃AlF₆) with a little CaF₂ to lower the melting point from ~2050 °C to ~950–1000 °C and raise conductivity. At the carbon anode: C + 2O²⁻ → CO₂ + 4e⁻ (anode is consumed — *not inert*). At the iron cathode: Al³⁺ + 3e⁻ → Al. Liquid Al (ρ ≈ 2.70 g·cm⁻³) collects at the bottom and is tapped periodically.

In **van Arkel–de Boer refining**, only metals whose iodides are volatile yet unstable at high T (Ti, Zr, Hf, V) work — that's why it is *not* used for Fe, Cu, or Ni. In **zone refining**, a molten zone travels along a rod; the solute partition coefficient k < 1 means impurities concentrate in the liquid and are swept to one end, which is then cropped. No chemical reaction occurs, which is why it is unrivalled for semiconductors.

#### Worked Micro-Example

A copper refinery passes 0.500 A for 1.00 h through acidified CuSO₄. Mass of Cu deposited?
- t = 3600 s, I = 0.500 A, M(Cu) = 63.55 g·mol⁻¹, n = 2, F = 96485 C·mol⁻¹
- m = (0.500 × 3600 × 63.55) / (2 × 96485) = 114390 / 192970 ≈ **0.593 g Cu**

If the same charge were passed through AgNO₃ (n = 1), exactly twice this mass (~1.186 g Ag) would deposit — a favourite assertion-reason trap.

#### Common Exam Traps

- Treating calcination and roasting as synonyms.
- Assuming carbon is always a stronger reductant than Al or Mg.
- Reading the C/CO₂ line slope incorrectly (it slopes *downward*, not upward).
- Calling cryolite "the ore of aluminium" — it is only the solvent.
- Reversing anode/cathode in electrolytic refining of Cu.

#### Practice Prompts

1. Using Ellingham diagram reasoning, explain why Mg, not C, is chosen to reduce TiCl₄ to Ti (Kroll process).
2. Pure silicon for solar cells is made by zone refining, not electrolytic refining. Justify this choice in two lines, naming the property that makes Si unsuitable for electrolysis from aqueous solution.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
