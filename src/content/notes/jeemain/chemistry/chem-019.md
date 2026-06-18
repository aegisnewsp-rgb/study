---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-019
topicName: Metallurgy
weight: 3
country: india
generated: "2026-03-28T21:11:22"
lastUpdated: "2026-06-18"
---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Metallurgy** is the sequence of operations used to obtain a pure metal from its ore. The four mandatory stages are **(i) concentration of ore**, **(ii) conversion to oxide (or other suitable form)**, **(iii) reduction to crude metal**, and **(iv) refining**. For JEE Main, concentrate on the **Ellingham diagram** (ΔG° vs T plot for oxide formation) — a metal/element whose oxide-formation line lies **below** can reduce the oxide of one whose line lies above. Remember the two key pyrometallurgical steps: **calcination** (limited air, drives off CO₂/H₂O from carbonates and hydroxides of Zn, Fe, Cu) and **roasting** (excess air, converts sulphides to oxides, e.g. 2ZnS + 3O₂ → 2ZnO + 2SO₂). High-yield facts: **Mond process** purifies **Ni** via Ni(CO)₄; **van Arkel** purifies **Ti, Zr, Hf** via the volatile iodide; **froth flotation** concentrates **sulphide ores** using pine oil collectors; the **Bayer process** digests **bauxite** with **NaOH** to give sodium aluminate. Feasibility formula: **ΔG° = ΔH° − TΔS°**, and **ΔG° = −nFE°** links free energy to cell potential.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Ore Dressing (Concentration)
Removal of **gangue** (earthy impurities) is the first step. **Hydraulic washing / levigation** works for oxide and carbonate ores (e.g., haematite, SnO₂) — lighter sand particles wash away in a stream of water while denser ore settles. **Magnetic separation** pulls out magnetite (Fe₃O₄), chromite, and wolframite using electromagnets. **Froth flotation** is the technique for **sulphide ores** (ZnS, PbS, CuFeS₂); the ore is wetted by oil (pine oil/Eucalyptus oil) while gangue is wetted by water. Air is blown in, sulphide particles rise with the froth, and **collectors** like potassium ethyl xanthate stabilise the froth. **Leaching** is used when the ore is soluble in a reagent but gangue is not — bauxite (Al₂O₃·2H₂O) is digested in concentrated NaOH to form soluble NaAlO₂, leaving behind insoluble Fe₂O₃, SiO₂, TiO₂ (Bayer process).

#### Conversion to Oxide
**Calcination** = heating ore strongly **below its melting point in limited/absence of air**. It drives off volatile impurities as CO₂ or H₂O:
- ZnCO₃ → ZnO + CO₂
- CaCO₃ → CaO + CO₂
- 2Fe(OH)₃ → Fe₂O₃ + 3H₂O

**Roasting** = heating ore strongly **below its melting point in excess air**, mainly applied to **sulphide ores**:
- 2ZnS + 3O₂ → 2ZnO + 2SO₂
- 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂
The released SO₂ is used to manufacture H₂SO₄.

#### Reduction and the Ellingham Diagram
The **Ellingham diagram** plots ΔG° of formation of oxides (per mole O₂) against temperature. A more negative ΔG° means a more stable oxide. **A metal whose oxide line lies lower in the diagram can reduce the oxide of any metal whose line lies above it.** For carbon, the C → CO line slopes **downward** above ~710 °C because ΔS° is large and positive (formation of gaseous CO from solid C increases entropy). This is why coke can reduce Fe₂O₃, ZnO, SnO₂ at blast-furnace temperatures but **cannot** reduce the very stable oxides Al₂O₃, MgO, CaO — these require **electrolytic reduction** in molten state (Hall–Héroult for Al, Down's process for Na).

#### Refining Methods
- **Distillation**: Zn, Hg, Sn boil and condense separately.
- **Liquation**: low-melting metals like Sn, Pb, Bi are melted and tapped away from solid impurities.
- **Electrolytic refining**: impure metal = **anode**, thin strip of pure metal = **cathode**, acidified salt solution of metal = **electrolyte**. At cathode: Mⁿ⁺ + ne⁻ → M. Used for Cu, Zn, Ni, Ag, Au.
- **Zone refining**: a moving molten zone sweeps impurities to one end; used for **semiconductors** (Si, Ge, B, Ga, In).
- **Vapour phase refining — Mond process**: Ni + 4CO → Ni(CO)₄ (400 K) → Ni + 4CO (450 K). Impure nickel forms the volatile tetracarbonyl that decomposes back to pure Ni.
- **Vapour phase refining — van Arkel**: Ti + 2I₂ → TiI₄ → Ti + 2I₂ (on a hot tungsten filament). Used for Ti, Zr, Hf, V.

#### Iron and Copper Extraction
In the **blast furnace**, Fe₂O₃ + 3CO → 2Fe + 3CO₂; **limestone (CaCO₃)** decomposes to CaO which acts as the **flux**, combining with silica gangue to give **CaSiO₃ slag** (CaO + SiO₂ → CaSiO₃). Copper is extracted from **copper pyrites CuFeS₂** by partial roasting followed by smelting in a **Bessemer converter** (self-reduction: Cu₂S + 2Cu₂O → 6Cu + SO₂) and finally **electrolytic refining**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Thermodynamic Basis of Reduction
Reduction of a metal oxide MₓOᵧ by a reductant R is feasible only when ΔG° (combined reaction) < 0. Using **ΔG° = ΔH° − TΔS°** and the Ellingham plot:

- For metal oxide formation, ΔS° is **negative** (gas moles decrease: 2M(s) + O₂(g) → 2MO(s)), so the line slopes **upward** with T.
- For C + ½O₂ → CO, ΔS° is **positive** (gas moles increase), so the line slopes downward.
- The two lines therefore cross; above the intersection (~710 °C for Fe, ~1000 °C for Zn), **carbon becomes a stronger reducing agent than the metal itself**.

When ΔG° is converted to a corresponding cell potential via **ΔG° = −nFE°**, a reaction is spontaneous only if E°cell > 0. This is the same feasibility criterion as in electrochemistry, and explains why fused-salt electrolysis is the only viable route for Al, Mg, Na.

#### Edge Cases and Frequently-Missed Facts
- **Calcination is for carbonates/hydroxides; roasting is for sulphides.** A common JEE trap asks for the product of "roasting limestone" — limestone is calcined, not roasted.
- **Coke cannot reduce Al₂O₃, MgO, CaO**, because the C/CO line never crosses below their very stable oxide lines at practical furnace temperatures.
- **Bessemer converter** uses **self-reduction**, not an external reductant. Cu₂S and Cu₂O produced during roasting exchange oxygen: 2Cu₂O + Cu₂S → 6Cu + SO₂.
- **Zone refining** works because most impurities are more soluble in the **molten** phase than the **solid**; they are dragged along with the moving heater.
- **In the Mond process the carbonyl must decompose at a different temperature than it forms** — that is why heating to 450 K is essential after the 400 K volatilisation step.
- **Froth flotation** uses **depressants** (e.g., NaCN for ZnS) to selectively float one sulphide while suppressing another from a mixed ore (PbS–ZnS separation).
- **Chromatographic / ion-exchange methods** are not metallurgical refining routes for metals, though they appear as distractors.

#### Worked Example
A sample of cuprite ore (Cu₂O) weighs **2.40 g**. After complete reduction it yields **1.92 g of copper**. Molar mass of Cu₂O = 143 g mol⁻¹ (2 × 63.5 + 16); mass of Cu in 2.40 g Cu₂O = (127/143) × 2.40 = **2.13 g**. Percentage purity = (1.92 / 2.13) × 100 = **90.1 %**.

#### Common Mistakes
- Mixing up **flux** (added reagent, e.g., CaO, SiO₂, borax) with **gangue** (unwanted earthy material to be removed).
- Forgetting that in **electrolytic refining** the anode mud contains **noble metals** (Ag, Au, Pt) — these do **not** oxidise and settle at the bottom.
- Assuming all refining methods work for all metals — **Mond process is specific to Ni**, **van Arkel is specific to Ti/Zr/Hf**.

#### Practice Prompts
1. Justify using coke as a reducing agent for ZnO above 1000 °C but not for Al₂O₃, with reference to the Ellingham diagram and the signs of ΔH°, ΔS°.
2. Explain how electrolytic refining of blister copper yields pure copper at the cathode and accumulates silver/gold in the anode mud. Write the cathode half-reaction and identify the impurities that remain in solution versus those that plate out.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
