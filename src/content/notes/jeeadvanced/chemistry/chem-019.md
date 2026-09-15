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
lastUpdated: "2026-09-15"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy is the sequence of operations that converts an **ore** (a mineral from which a metal is profitably extracted) into a usable, refined metal. The four compulsory stages are **concentration of ore**, **extraction of crude metal** (reduction of oxide), **refining**, and **alloying**. JEE Advanced tests the *thermodynamic* logic behind the choice of reductant, read off the **Ellingham diagram** (ΔG° of oxide formation versus temperature).

- **Ore dressing methods:** hydraulic washing, magnetic separation, **froth flotation** (sulphide ores), leaching (bauxite with NaOH, Au/Ag with NaCN).
- **Calcination vs Roasting:** calcination = carbonate/hydrate ores, no SO₂; roasting = sulphide ores, SO₂ released.
- **Reduction choice:** carbon above its crossover line, otherwise metallothermic (Al, Mg) or electrolytic.
- **Refining methods matched to metal:** electrolytic (Cu, Zn), zone (Si, Ge), van Arkel (Ti, Zr, Hf), Mond (Ni), distillation (Zn, Hg).

> 💡 **High-Yield Memory Hook:** "**C-F-R-R-A**" = **C**oncentration → **F**ormation of oxide (**calcination/roasting**) → **R**eduction → **R**efining → **A**lloying. For the Ellingham slopes remember "**CO climbs, CO₂ dives**": the C→CO line slopes *up* (ΔS > 0, gas moles 1 → 2) and the C→CO₂ line slopes *down* (2 → 1 gas moles).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Principles Behind Choosing a Reductant

The Ellingham diagram plots **ΔG°** (standard Gibbs free energy of oxide formation, J·mol⁻¹) on the y-axis against temperature T (K) on the x-axis. A line *lower* on the diagram corresponds to a more stable oxide, hence a stronger reducing agent at that temperature. The governing relation is:

$$\Delta G^{\circ} = \Delta H^{\circ} - T\Delta S^{\circ}$$

For the reaction 2M(s) + O₂(g) → 2MO(s), ΔS° is roughly constant, so each line is straight with slope −ΔS°. Most metal-oxide lines slope **upward** (entropy decreases as gaseous O₂ is consumed); carbon's lines are the exception because CO and CO₂ are gaseous products, making ΔS° sign-dependent on stoichiometry.

#### Comparison Matrix: Common Confusion Points

| Concept | What it really is | Easy misreading | Exam-correct picture |
|---|---|---|---|
| Calcination | Heating carbonate/hydrate ore in *limited/absent* air | "Same as roasting" | No SO₂ released; e.g. CaCO₃ → CaO + CO₂ |
| Roasting | Heating **sulphide** ore in excess air | "Releases CO₂" | SO₂ released; e.g. 2ZnS + 3O₂ → 2ZnO + 2SO₂ |
| Slag | CaSiO₃ from flux + gangue | "Just waste" | Formed by CaO (flux) + SiO₂ (gangue); removes silica |
| Cryolite (Na₃AlF₆) | Solvent lowering Al₂O₃ melt | "Reductant/ore" | Lowers fusion temperature from ~2050 °C to ~950 °C; increases conductivity |
| Van Arkel refining | Vapour-phase iodide transport | "Same as zone refining" | Chemical reaction: Ti + 2I₂ ⇌ TiI₄, decomposed on W filament |
| Zone refining | Segregation by re-melting a molten zone | "Chemical purification" | Physical: impurity stays in liquid zone and sweeps along rod |

#### Refining Methods — Mechanism and Use

Electrolytic refining of copper uses **impure blister Cu as the anode** and a thin strip of pure Cu as the **cathode**, with acidified CuSO₄ as the electrolyte. At the anode: Cu → Cu²⁺ + 2e⁻ (impurities less noble than Cu dissolve; more noble — Ag, Au, Pt — drop as **anode mud**). At the cathode: Cu²⁺ + 2e⁻ → Cu. Purity reaches 99.99%.

**Mond process** for nickel relies on selective carbonyl formation. At ~330 K, Ni + 4CO → Ni(CO)₄ (gas); impurities do not react. Heating the vapour to ~450 K reverses the reaction, depositing ultra-pure Ni pellets.

**Van Arkel–de Boer** refining is used for Ti, Zr, Hf. The metal reacts with I₂ at moderate temperature to form a volatile tetraiodide, which diffuses to a hot tungsten filament (~1700 K) where it decomposes, depositing pure metal and releasing I₂ for reuse.

**Zone refining** is reserved for **semiconductors** (Si, Ge, B, Ga) where parts-per-billion purity matters. A narrow molten zone is moved along the rod; impurities partition preferentially into the liquid and accumulate at one end, which is then cropped.

#### 🎯 Exam-Level Worked Problem

**Question:** In the electrolytic refining of copper, a current of 200 A is passed through acidified CuSO₄ for 1 hour 10 minutes. Calculate the mass of pure copper deposited at the cathode (Cu = 63.5 g·mol⁻¹, F = 96485 C·mol⁻¹, n = 2 for Cu²⁺).

#### Solution:
Total charge Q = I × t = 200 A × (70 × 60 s) = 200 × 4200 = **8.4 × 10⁵ C**.

Mass deposited (Faraday's first law):

$$m = \frac{Q \times M}{n \times F} = \frac{(8.4 \times 10^{5}) \times 63.5}{2 \times 96485}$$

$$m = \frac{5.334 \times 10^{7}}{1.9297 \times 10^{5}} \approx 276.4 \text{ g}$$

#### Result: ~276 g of Cu deposited at the cathode.

> ⚠️ **Examiner Trap:** Students often plug n = 1 (treating Cu as Cu⁺) or n = 3 (confusing with Al³⁺ in Hall–Héroult). Cu in CuSO₄ is **Cu²⁺**, so n = 2. Using n = 1 would *double* the mass; using n = 3 would *underestimate* by one-third. Always identify the ion actually migrating through the electrolyte, not the metal's other common valency.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Thermodynamic Limits and Coupled Reactions

Reduction of an ore by a more reactive metal is judged by the *difference* in ΔG° lines: if line A (reductant-oxide) lies below line B (ore-oxide) at the working temperature, B is reducible by A. The combined ΔG° is the algebraic sum:

$$\Delta G^{\circ}_{\text{overall}} = \sum \Delta G^{\circ}_{\text{products}} - \sum \Delta G^{\circ}_{\text{reactants}}$$

This is why **thermite welding** (Fe₂O₃ + 2Al → Al₂O₃ + 2Fe) works spectacularly: ΔG°(Al₂O₃) ≪ ΔG°(Fe₂O₃), giving a large negative ΔG° overall and an adiabatic temperature exceeding 2500 K.

#### Extraction Walk-Throughs

**Iron** is reduced in a blast furnace in three temperature zones. At the top (500–900 K) Fe₂O₃ + 3CO → 2Fe + 3CO₂; in the middle (900–1500 K) CO + Fe₃O₄ → 3FeO + CO₂ then FeO + CO → Fe + CO₂; at the bottom limestone decomposes (CaCO₃ → CaO + CO₂) and the resulting CaO fluxes SiO₂ gangue into CaSiO₃ slag, which floats above molten pig iron.

**Copper** from chalcopyrite CuFeS₂ involves partial roasting, then self-reduction: 2Cu₂O + Cu₂S → 6Cu + SO₂. The matte is finally electrorefined.

**Aluminium** flows through Bayer → Hall–Héroult. Bayer digests bauxite with NaOH at ~470 K to give soluble NaAlO₂; on dilution and seeding, pure Al(OH)₃ precipitates, which is calcined to Al₂O₃. Hall–Héroult electrolyses this Al₂O₃ dissolved in molten cryolite at ~1233 K with carbon anodes. The overall cell reaction is:

$$2\text{Al}_2\text{O}_3 + 3\text{C} \rightarrow 4\text{Al} + 3\text{CO}_2$$

The graphite anode is *consumed* (oxidised to CO₂), which is why it must be replaced periodically.

#### Advanced Traps and Edge Cases

1. **Crossover-direction trap:** On the Ellingham diagram, the C/CO line slopes *up*; the C/CO₂ line slopes *down*. Crossover with a metal-oxide line occurs only for the **C → CO** line, and only at high temperature. Below that crossover, carbon is a *weaker* reductant than Al, Mg, or Ca — which is precisely why Mg is used to reduce TiCl₄ (Kroll process), not coke.
2. **Anode mud identity:** In Cu electrorefining, Ag, Au and Pt fall as anode mud because they are *less* reactive than Cu and refuse to dissolve. Confusing this with "anode dissolves entirely" is a common mistake.
3. **Cyanide process stoichiometry:** The gold complex is **Na[Au(CN)₂]**, not AuCN. Zinc shavings then displace Au via 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au. Skipping the dicyanoaurate(I) intermediate forfeits one mark per JEE question.
4. **Valency in Faraday calculations:** Al³⁺ → n = 3 (Hall–Héroult), Cu²⁺ → n = 2 (electrorefining), Ag⁺ → n = 1 (cyanide-precipitate electrorefining). Match n to the ion, never to the metal symbol alone.
5. **Cryolite's role confusion:** Na₃AlF₆ is neither ore nor reductant. It is a *flux-solvent* that lowers the operating temperature by ~1100 K and raises conductivity so that electrolysis is economically viable.
6. **Zone vs van Arkel distinction:** Zone refining is a *physical* segregation process (impurity partition coefficient k ≠ 1 between solid and liquid); van Arkel is a *chemical* transport process via volatile iodide. JEE Advanced routinely offers "which method for which metal?" pairs and these two are the most commonly swapped.

#### Practice Prompts

1. A 250 A current is passed through molten cryolite-alumina electrolyte for 6 hours. Determine the mass of Al produced (Al = 27 g·mol⁻¹, n = 3, F = 96485 C·mol⁻¹).
2. Why cannot carbon reduce Al₂O₃ at any industrially feasible temperature, even though the C/CO line ultimately falls below the Al₂O₃ line? Discuss in terms of crossover temperature and the volatility of Al.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
