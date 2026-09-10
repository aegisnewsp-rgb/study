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

Metallurgy is the sequence of steps that converts an **ore** (a mineral from which a metal is profitably extracted) into a usable, purified metal: **concentration of ore → extraction (reduction) → refining → alloying**. Gangue (worthless rocky matrix) is removed using **hydraulic washing, magnetic separation, froth flotation** (sulphide ores), or **leaching** (bauxite with NaOH, gold with NaCN).

**Calcination** is heating a carbonate/hydrate ore in limited/absent air (CaCO₃ → CaO + CO₂). **Roasting** is heating a sulphide ore in excess air (2ZnS + 3O₂ → 2ZnO + 2SO₂). The metal oxide is then reduced by **C, CO, Al, Mg, H₂** or **electrolysis**, with the choice governed by the **Ellingham diagram** (ΔG° of oxide formation vs T).

- **Al** → Bayer process → Hall–Héroult electrolysis (cryolite flux, n = 3).
- **Fe** → blast furnace reduction by CO (Fe₂O₃ → Fe₃O₄ → FeO → Fe).
- **Cu** → self-reduction of CuFeS₂ + electrolytic refining (n = 2, anode impure).
- **Ni** → Mond process via Ni(CO)₄ (formation 330 K, decomposition 450 K).
- **Au** → cyanide process: 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH; Zn displaces Au from the complex.

> Tip: Memorise the Ellingham crossover of C/CO with Al₂O₃ and MgO — JEE asks it almost every year.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Reduction principles and Ellingham diagram

For an oxide-formation reaction 2M + O₂ → 2MO, a **negative ΔG°** means the oxide is stable. The Ellingham plot is a straight line of slope **−ΔS°**: most metal-oxide lines slope **upward** (entropy decreases as gas is consumed). The lines for **C → CO** and **C → CO₂** behave differently — the C/CO line has a **positive slope** (ΔS > 0, 1 → 2 gas moles) and crosses nearly every metal-oxide line, making **carbon a stronger reductant above the crossover temperature**. The C/CO₂ line has a **negative slope** (2 → 1 gas moles) and never crosses MgO/Al₂O₃ — so Al and Mg cannot be reduced by carbon at any practical T.

A metal M₁ reduces the oxide of M₂ if the ΔG° line of **M₁'s oxide lies below** that of M₂'s oxide at that temperature (more negative = thermodynamically favoured). This is the basis of **metallothermic reduction**: Cr₂O₃ + 2Al → Al₂O₃ + 2Cr (thermite), and TiCl₄ + 2Mg → Ti + 2MgCl₂ (Kroll process).

#### Refining methods

| Method | Best for | Principle |
| --- | --- | --- |
| Electrolytic refining | Cu, Zn (99.99%) | Anode = impure metal, cathode = pure strip, electrolyte = salt of metal |
| Zone refining | Si, Ge, B, Ga | Impurity more soluble in melt → swept along molten zone |
| van Arkel–de Boer | Ti, Zr, Hf | Metal + I₂ → volatile MI₄ → decomposed on hot W filament |
| Mond process | Ni | Ni + 4CO ⇌ Ni(CO)₄ (volatile, forms 330 K, decomposes 450 K) |
| Liquation | Sn, Pb, Bi | Metal melts and flows away from higher-melting impurities |
| Distillation | Zn, Hg | Boiling-point difference used to vapourise and recondense |
| Poling | Cu (removes O₂ as Cu₂O) | Molten metal stirred with green poles; hydrocarbons reduce Cu₂O |

#### Faraday's law for electrolytic steps

Mass deposited **m = (I · t · M) / (n · F)**, where **I** = current (A), **t** = time (s), **M** = molar mass (g mol⁻¹), **n** = valency of the ion, **F** = 96 485 C mol⁻¹.

- Hall–Héroult: overall 2Al₂O₃ + 3C → 4Al + 3CO₂; cryolite (Na₃AlF₆) lowers melt from ~2050 °C to ~950 °C and raises conductivity.
- Cyanide process (gold): Zn then displaces Au from the **dicyanoaurate(I)** complex, not from the ore — 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au.

> Tip: The **graphite anode** in Hall–Héroult is consumed (C + O²⁻ → CO + 2e⁻); it is NOT inert. Mark this on the cell diagram or you lose a step.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked example — Ellingham + mass calculation

**Q.** Chromium is obtained by reducing Cr₂O₃ with Al powder (thermite). At 1673 K, ΔG°f(Al₂O₃) = −840 kJ mol⁻¹ and ΔG°f(Cr₂O₃) = −330 kJ mol⁻¹. Is the reaction feasible? If 10⁴ C of charge is passed through a downstream electrorefining cell for chromium (as Cr²⁺), what mass of Cr deposits (n = 2, M = 52)?

**Solution.** The coupled reaction: Cr₂O₃ + 2Al → Al₂O₃ + 2Cr.
ΔG°overall = ΔG°f(Al₂O₃) − ΔG°f(Cr₂O₃) = −840 − (−330) = **−510 kJ mol⁻¹**.
Negative → **spontaneous**, justifying Al as reductant above the crossover.

Mass deposited: m = (I·t·M)/(n·F) = (10⁴ · 52)/(2 · 96 485) ≈ **2.69 g**.

#### Common traps JEE Advanced exploits

- **Reversing anode/cathode** in electrolytic refining — impure blister Cu is the **anode** (dissolves), pure Cu strip is the **cathode** (deposits).
- **Wrong n in Faraday's law** — Al³⁺ → n = 3; Cu²⁺ → n = 2; Ag⁺ → n = 1.
- **Cryolite confusion** — Na₃AlF₆ is a **flux/solvent**, not the ore; ore is Al₂O₃ from the Bayer step (Bayer: Al₂O₃·2H₂O + 2NaOH → 2NaAlO₂ + 3H₂O, then seeding gives pure Al(OH)₃ → Al₂O₃).
- **van Arkel vs zone refining** — zone refining is **physical** (no chemistry, exploits partition coefficient); van Arkel is a **chemical transport** (vapour-phase iodide).
- **Slag identification** — in the blast furnace, CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ (slag). Slag is **calcium silicate**, not CaCO₃.

#### Cross-links

Alloys depend directly on refining purity — **brass** (Cu + Zn), **bronze** (Cu + Sn), **duralumin** (Al + Cu + Mg + Mn) and **stainless steel** (Fe + Cr + Ni). The same Ellingham reasoning recurs in **extraction of lanthanides**, **thermochemical cycles**, and corrosion chemistry.

| Alloy | Composition | Use |
| --- | --- | --- |
| Brass | Cu + Zn | Cartridge cases, fittings |
| Bronze | Cu + Sn | Statues, bearings |
| Duralumin | Al + Cu + Mg + Mn | Aircraft frames |
| Solder | Pb + Sn | Joining metal surfaces |
| Amalgam | Hg + Ag/Sn | Dental fillings |

#### Practice prompts

1. Justify, using Ellingham slopes and crossover, why **Al reduces Cr₂O₃** but **carbon cannot reduce Al₂O₃** at any industrial temperature.
2. A current of 150 A passes through acidified CuSO₄ for 50 min with impure Cu as anode and pure Cu as cathode. Calculate the mass lost at the anode (n = 2, M_Cu = 63.5).

> Strategy: JEE Advanced typically asks 1 MCQ + 1 numerical (or one linked paragraph) on Metallurgy. Spend ≤ 6 min; reserve Ellingham interpretation and Hall–Héroult cell labelling as priority.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
