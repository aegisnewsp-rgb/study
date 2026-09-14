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
lastUpdated: "2026-09-14"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy converts an **ore** (a mineral from which a metal is commercially extracted) into a usable, pure metal through four stages: **concentration of ore → conversion/extraction → reduction → refining**, followed by optional **alloying**. In JEE Advanced, the most-tested framework is the **Ellingham diagram**, which plots **ΔG°** (standard Gibbs free energy of oxide formation, J·mol⁻¹) against temperature T (K) for the reaction 2M(s) + O₂(g) → 2MO(s).

> 💡 **High-Yield Memory Hook:** **"CROCS"** — the five extraction routes: **C**arbon reduction, **R**oasting + self-reduction, **O**ther-metal (metallothermic, e.g. Al/Mg), e**C**trolytic (Hall–Héroult), **S**pecial (cyanide/van Arkel/Mond/zone). A line **lower** on the Ellingham diagram = stronger oxide former = better reducing agent **above** its crossover.

| Step | Purpose | Example (numbers & units) |
|---|---|---|
| Calcination | Carbonate/hydrate ore, **no S**, ΔT heat in air | CaCO₃ →(1200 K)→ CaO + CO₂ |
| Roasting | Sulphide ore, **SO₂ evolved** | 2ZnS + 3O₂ →(1073 K)→ 2ZnO + 2SO₂ |
| Reduction | ΔG° of MₓOᵧ more positive than reductant's oxide line | Fe₂O₃ + 3CO →(900–1500 K)→ 2Fe + 3CO₂ |
| Electrolytic refining | 99.99% purity; Faraday's law | m = (I·t·M)/(n·F), F = 96485 C·mol⁻¹ |
| Zone refining | Ultra-pure semiconductors (no chemistry) | Si, Ge, B, Ga |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Principles

The thermodynamic feasibility of reduction is governed by the **Ellingham diagram**. For oxide formation, ΔG° = ΔH° − TΔS° (Gibbs–Helmholtz, J·mol⁻¹); the slope of each line equals **−ΔS°**, which depends on whether gas moles change. For most metals, ½O₂(g) → O(in solid), so ΔS° is negative → **upward** slope. For **C(s) + ½O₂ → CO(g)**, gas moles rise from ½ to 1, so ΔS° > 0 → **downward** slope. For **C(s) + O₂ → CO₂(g)**, gas moles stay at 1 → ΔS° ≈ 0 → **nearly horizontal** negative-tilt line. A **crossover** between a metal-oxide line and the C/CO line marks the temperature above which carbon is the stronger reductant.

Reduction of ore oxide MO by C or CO is favourable when ΔG°(C/CO) < ΔG°(MO), i.e. when the reductant's oxide-formation line lies **below** the metal's oxide-formation line on the diagram. The overall ΔG° for a coupled reaction equals Σ ΔG°(products) − Σ ΔG°(reactants); **thermit welding** (Fe₂O₃ + 2Al → Al₂O₃ + 2Fe, ΔG° ≈ −853 kJ·mol⁻¹) exploits Al's strongly negative line.

#### Key Extraction Schemes

- **Iron (blast furnace):** Fe₂O₃ + 3CO → 2Fe + 3CO₂ at the top (900–1500 K); CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiSiO₃ (slag, removed). Pig iron collects at the hearth.
- **Copper (from chalcopyrite CuFeS₂):** partial roasting → self-reduction Cu₂S + 2Cu₂O → 6Cu + SO₂; **electrolytic refining** with impure Cu as **anode**, pure Cu strip as **cathode**, acidified CuSO₄ as electrolyte.
- **Aluminium (Hall–Héroult):** purified Al₂O₃ dissolved in molten **cryolite Na₃AlF₆** + fluorspar CaF₂; melt at ~950–1000 °C instead of ~2050 °C; graphite anode consumed: 2Al₂O₃ + 3C → 4Al + 3CO₂. Density of liquid Al (2.30 g·cm⁻³) > cryolite melt → settles at cathode.
- **Silver/Gold (cyanide process, MacArthur–Forrest):** 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH; then 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au.
- **Nickel (Mond process):** Ni + 4CO →(330 K)→ Ni(CO)₄ →(450 K)→ Ni + 4CO; gives 99.9%+ Ni.
- **Titanium (van Arkel–de Boer):** Ti + 2I₂ →(500 K)→ TiI₄ →(1700 K, W filament)→ Ti + 2I₂ (vapour-phase chemical transport).
- **Zone refining** for Si/Ge: a molten zone is moved along the rod; impurities concentrate in the liquid (segregation coefficient k ≪ 1) and are swept to one end, then cut off.

#### Refining Method Comparison

| Method | Mechanism | Purity | Best for |
|---|---|---|---|
| Electrolytic | Anode dissolves, pure metal deposits at cathode | 99.99% | Cu, Zn, Ni |
| Zone refining | Impurity partitioning into molten zone | 99.999% | Si, Ge, B, Ga |
| Van Arkel | Volatile iodide formation & decomposition | 99.9% | Ti, Zr, Hf |
| Mond | Volatile carbonyl formation & decomposition | 99.9% | Ni |
| Distillation | Boiling-point difference | 99.9% | Zn (1180 K), Hg (630 K) |
| Liquation | Lower-melting metal flows out | ~99% | Sn, Pb, Bi |
| Poling | Reducing atmosphere removes oxide impurities | ~99.5% | Cu (Cu₂O → Cu) |
| Chromatographic | Differential adsorption on silica/alumina | Ultra-trace | Ga, In |

#### 🎯 Exam-Level Worked Problem

**Question:** In the electrolytic refining of copper, a current of **200 A** is passed through acidified CuSO₄ solution for **1 hour 30 minutes**. Calculate the mass of pure copper deposited at the cathode. (Molar mass Cu = 63.5 g·mol⁻¹, n = 2, F = 96485 C·mol⁻¹)

#### Solution:
Using Faraday's first law: **m = (I × t × M) / (n × F)**
- I = 200 A, t = 1.5 × 3600 = 5400 s
- Q = I × t = 200 × 5400 = 1.08 × 10⁶ C
- m = (1.08 × 10⁶ × 63.5) / (2 × 96485)
- m = (6.858 × 10⁷) / (1.9297 × 10⁵)
- m ≈ **355.3 g** of copper deposited.

> ⚠️ **Examiner Trap:** Students often use **n = 1** (treating Cu as monovalent like in Cu₂O) instead of **n = 2** for Cu²⁺ in CuSO₄. Each Cu²⁺ ion accepts **two** electrons at the cathode, so the valency is unambiguously 2 — never 1. Using n = 1 doubles the calculated mass and is instantly flagged wrong.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

1. **Crossover misreading on the Ellingham diagram.** The C/CO line slopes **downward** (ΔS° > 0) but C/CO₂ slopes **upward** (ΔS° < 0). At very high T, C/CO undercuts most metal oxides; at low T, the same metals (Al, Mg) are *better* reductants than carbon — this is why **Aluminothermy** of Cr₂O₃ and **Kroll** reduction of TiCl₄ by Mg work.
2. **Calcination vs Roasting trap.** Calcination is *thermal decomposition* in absence/limited air for carbonates/hydrates (no SO₂). Roasting is *oxidation with excess air* for sulphides → SO₂. JEE MCQs frequently swap the labels.
3. **Anode/cathode in electrolytic refining.** Reverse roles: **anode = impure blister metal (oxidised/dissolved)**; **cathode = thin pure-metal starter strip where ions reduce**. Forgetting this gives the wrong direction of metal flow.
4. **n in Faraday's law.** Al in Hall–Héroult uses **n = 3** (Al³⁺), Cu uses **n = 2**, Ag uses **n = 1**. Always cross-check the stable ion.
5. **Cryolite's actual role.** Na₃AlF₆ is a **solvent + conductivity enhancer** (ionic melt), not the ore and not the reductant. **Graphite anode is consumed** (C + O²⁻ → CO + 2e⁻) — it is *not* inert like Pt in many aqueous cells.
6. **Van Arkel vs Zone refining.** Van Arkel is a **chemical transport** process (volatile MI₄). Zone refining is a **physical partition** process (no reaction). They are not interchangeable.
7. **Cyanide process sequence.** Leaching → precipitation by Zn is a **two-step aqueous displacement** from the *complex* Na[Au(CN)₂], not from metallic gold directly. Zn is chosen because E°(Zn²⁺/Zn) < E°([Au(CN)₂]⁻/Au).
8. **Slag selection (acidic vs basic flux).** Acidic gangue SiO₂ needs basic flux CaO (or MgO); basic gangue like FeO needs acidic flux SiO₂ or borax. Slag must be fusible — CaSiO₃ (melting point ~1500 K) is the classical choice.
9. **Thermodynamic vs kinetic limits.** ΔG° < 0 is *necessary but not sufficient* — kinetics, contact area, and slag removal matter. Carbon reduction of Al₂O₃ is thermodynamically feasible above ~2000 K but kinetically pointless; electrolysis bypasses this.
10. **Poling vs Liquation.** Poling uses **reducing gases/sticks** (green wood, CH₄) to reduce Cu₂O impurity in molten Cu. Liquation simply **melts out** the lower-melting metal from a solid mixture. Different principles, different apparatus.

#### Alloys Snapshot

| Alloy | Composition | Property / Use |
|---|---|---|
| Brass | Cu + Zn (≈30% Zn) | Ductile, musical instruments, fittings |
| Bronze | Cu + Sn (≈10% Sn) | Cast statues, bearings |
| Steel | Fe + C (0.2–2%) + Cr/Ni/Mn | Construction, tools |
| Duralumin | Al + Cu (4%) + Mg + Mn | Aircraft frames (age-hardenable) |
| Solder | Pb + Sn (60:40 eutectic) | Low-melt ~460 K joining |
| Amalgam | Hg + Ag/Sn | Dental fillings |

#### Connection to Adjacent Topics

- **Coordination chemistry:** Na[Au(CN)₂] and Ni(CO)₄ are direct applications of ligand-field theory and the 18-electron/Effective Atomic Number rule.
- **Electrochemistry:** Faraday's law and standard reduction potentials underpin both electrolytic refining (Cu, Zn) and the cyanide displacement by Zn.
- **Thermodynamics:** Gibbs–Helmholtz connects Ellingham diagrams with reaction spontaneity — directly tested in the same JEE paper as Thermochemistry and Chemical Equilibrium.
- **s-Block and p-Block extraction:** Hall–Héroult (Al) and Dow's process (Mg from seawater) extend the same electrolytic-melt principle.

#### Practice Prompts

1. Sketch the Ellingham diagram and identify the crossover temperature for C/CO with **ZnO** (~1270 K) and with **MgO** (above 1850 K). Explain why Mg is used to reduce TiCl₄ (not TiO₂) in the **Kroll process**.
2. The Mond process for nickel involves formation of **Ni(CO)₄** at 330 K and decomposition at 450 K. Justify the temperature choice using ΔG° vs T and discuss why iron (which forms Fe(CO)₅) does **not** get carried over with Ni.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
