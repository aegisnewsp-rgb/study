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

**Metallurgy** is the sequence of operations that converts a metal-bearing ore into a usable, pure metal: concentration of ore → extraction of crude metal → refining → alloying. For JEE Advanced the high-yield items are the Ellingham diagram (ΔG° vs T lines for oxide formation), the four reduction routes (carbon, self-reduction, electrolytic, displacement), and the refining methods matched to each metal.

- **Calcination** is for carbonate/hydrate ores (no SO₂); **roasting** is for sulphide ores (produces SO₂).
- **Ellingham diagram**: the lower a metal's ΔG° line, the stronger that metal is as a reductant; the C → CO line has a positive slope and crosses most metal-oxide lines at high T, so carbon becomes a stronger reductant only **above** the crossover.
- **Faraday's law** for electrolytic refining: m = (I·t·M)/(n·F), with F = 96485 C·mol⁻¹ and n = valency of the depositing ion.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration, Calcination, Roasting

The first step removes gangue. **Hydraulic washing** suits oxide ores; **magnetic separation** works for magnetite (Fe₃O₄); **froth flotation** selectively carries sulphide particles using pine oil and collectors like sodium ethyl xanthate. Leaching dissolves the wanted ion — NaOH for bauxite (Al₂O₃) and NaCN for native Au/Ag. The concentrated ore is then converted: calcination (CaCO₃ → CaO + CO₂, no sulphur present) versus roasting (2ZnS + 3O₂ → 2ZnO + 2SO₂, for sulphides).

#### Ellingham Diagram and Reduction

ΔG° = ΔH° − TΔS° is plotted against T for each oxidation reaction 2M + O₂ → 2MOₓ. A more negative ΔG° at a given T means a more stable oxide, so the metal below that line can reduce the oxide above it. The C/CO line slopes upward (ΔS > 0 because 1 mole gas → 2 moles gas) and crosses most metal lines; below the crossover Al, Mg and Ca are thermodynamically better reductants, which is why the **thermite** reaction Cr₂O₃ + 2Al → Al₂O₃ + 2Cr works without external heat once initiated.

#### Specific Extractions

| Metal | Ore | Reduction route |
| --- | --- | --- |
| Fe | Haematite Fe₂O₃ | Blast furnace with coke + CaCO₃ flux; CaO + SiO₂ → CaSiO₃ slag |
| Cu | Chalcopyrite CuFeS₂ | Partial roasting + self-reduction by FeS; electrolytic refining |
| Zn | Zinc blende ZnS | Roasting → carbon reduction at ~1673 K; electrolytic/distillation refining |
| Al | Bauxite (Bayer → Al₂O₃) | Hall–Héroult electrolysis with cryolite flux at ~950 °C |
| Au/Ag | Native or in ore | Cyanide leaching → Zn displacement |

#### Refining Methods

- **Electrolytic refining** (Cu, Zn): impure anode dissolves, pure metal deposits on cathode, electrolyte = acidified CuSO₄, purity ≈ 99.99 %.
- **Zone refining**: a molten zone travels through a rod; impurities concentrate in the liquid and are swept to one end — used for Si, Ge, Ga, In.
- **Mond process**: Ni + 4CO → Ni(CO)₄ at ~330 K; Ni(CO)₄ → Ni + 4CO at ~450 K.
- **van Arkel–de Boer**: Ti + 2I₂ → TiI₄ → Ti on a hot tungsten filament; used for Ti, Zr, Hf.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Faraday's Law Worked Example

In electrolytic refining of copper, a current of 200 A passes for 1 hour through acidified CuSO₄ with n = 2 and M(Cu) = 63.5 g·mol⁻¹:

m = (I·t·M)/(n·F) = (200 × 3600 × 63.5)/(2 × 96485) = 4.56 × 10⁷/1.93 × 10⁵ ≈ 236.9 g of Cu deposited on the cathode. Charge per mole of electrons = F; per mole of Cu (n = 2) = 2F = 1.93 × 10⁵ C. Substituting the wrong n (e.g. 1 for Cu²⁺) halves the answer.

#### Common Mistakes and Traps

| Trap | Correction |
| --- | --- |
| Treating calcination and roasting as interchangeable | Calcination = no S, no SO₂; Roasting = sulphide ores, SO₂ evolved |
| Saying carbon is always the strongest reductant | Carbon dominates only **above** the C/CO crossover; Al, Mg, Ca are stronger below it |
| Inverting anode/cathode in Cu refining | Anode = impure blister Cu (dissolves); cathode = pure Cu strip (deposits); electrolyte = acidified CuSO₄ |
| Assigning n = 1 for Al in Hall–Héroult | Al³⁺ has n = 3; cryolite is a flux, not a reductant; graphite anode is consumed (C + O₂ → CO/CO₂) |
| Writing Zn + Au directly instead of via complex | Cyanide process: 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH; then 2Na[Au(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Au |

#### Connections and Strategy

- **Common Confusions**: zone refining exploits a **physical** partition of impurity between solid and melt; van Arkel is a **chemical** vapour-phase transport. Do not conflate them.
- **Slag formation** in the blast furnace: CaCO₃ → CaO + CO₂; CaO + SiO₂ (acidic gangue) → CaSiO₃ (fusible slag). This is the textbook example of flux selection by acid–base character.
- **Exam weightage**: JEE Advanced typically asks 1 MCQ or integer-type question per paper (~3–5 % of chemistry), often testing Ellingham diagram crossover reasoning or a refining method's principle.
- **Two practice prompts**: (1) Predict whether Mg can reduce Al₂O₃ at 1500 K using Ellingham diagram positions. (2) Calculate the mass of Al deposited at the cathode when 0.5 F of charge is passed through molten Al₂O₃ with cryolite, using n = 3.

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
