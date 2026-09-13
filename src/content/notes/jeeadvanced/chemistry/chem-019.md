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
lastUpdated: "2026-09-13"
diagramPrompt: "Clear scientific diagram of Metallurgy with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Metallurgy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Metallurgy converts an ore into a usable metal through four stages: **concentration of ore**, **extraction (reduction)** of the crude metal, **refining**, and **alloying**. The driving question at every stage is thermodynamic: which reductant pulls ΔG° most negative for the target oxide at the operating temperature?

For JEE Advanced, the Ellingham diagram (ΔG° vs T plot of oxide formation) decides the choice of reductant. A line lying lower means stronger oxide formation, hence a stronger reducing agent above any crossover temperature. Carbon's C→CO line has positive slope (gas moles 1→2), so it overtakes many metal oxides above ~1000 K and dominates Fe, Zn, Sn reduction.

- **Must-know formula:** Faraday's law of electrolysis — m = (I × t × M) / (n × F), where F = 96485 C·mol⁻¹; use n = 2 for Cu²⁺, n = 3 for Al³⁺.
- **High-yield fact:** Hall–Héroult uses cryolite (Na₃AlF₆) only as a flux to drop Al₂O₃ melting point from ~2050 °C to ~950 °C; the graphite anode is consumed.
- **High-yield fact:** Mond process purifies Ni via volatile Ni(CO)₄ (formed at ~330 K, decomposed at ~450 K).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concentration and Conversion Steps

Ore dressing removes **gangue** (matrix) using hydraulic washing, magnetic separation, **froth flotation** (sulphide ores), and leaching. Leaching is chemical: bauxite dissolves in NaOH (Bayer process), while Au/Ag dissolve in aerated NaCN (cyanide process). Calcination suits carbonate/hydrate ores with no sulphur (CaCO₃ → CaO + CO₂). Roasting suits sulphide ores (ZnS + O₂ → ZnO + SO₂). Confusing the two is a routine MCQ trap.

#### Reduction and the Ellingham Diagram

Choose the reductant whose ΔG° line sits below the metal oxide line at the operating temperature. The Gibbs–Helmholtz equation ΔG° = ΔH° − TΔS° governs the slope.

| Reductant oxide line | Slope sign | Reason (gas moles) | Crossover behaviour |
| --- | --- | --- | --- |
| 2C + O₂ → 2CO | Positive (+ΔS) | 0 → 2 moles of gas | Crosses most metal oxides upward at high T |
| C + O₂ → CO₂ | Negative (−ΔS) | 1 → 0 moles of gas | Stays low only at low T |
| 2Mg + O₂ → 2MgO | Nearly flat | Solid oxide, solid metal | Strong below crossover, weak above |

#### Worked Relationships for Specific Metals

- **Fe** in the blast furnace: Fe₂O₃ → Fe₃O₄ → FeO → Fe using CO at 900–1500 K; CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ slag.
- **Cu** from chalcopyrite CuFeS₂: partial roasting then self-reduction by remaining FeS; blister Cu is finally electrorefined.
- **Al** from bauxite: Bayer converts ore to pure Al₂O₃, then Hall–Héroult electrolyses it in molten cryolite (overall 2Al₂O₃ + 3C → 4Al + 3CO₂).

#### Refining Method Selection

| Method | Principle | Typical metal |
| --- | --- | --- |
| Electrolytic | Anode dissolves, pure metal plates cathode | Cu, Zn |
| Zone refining | Impurity stays in molten zone (segregation) | Si, Ge, Ga |
| Van Arkel | Metal + I₂ → volatile MI₄ → decomposes on W filament | Ti, Zr, Hf |
| Mond | Ni + 4CO → Ni(CO)₄ (volatile) | Ni |
| Liquation / distillation | Lower-melting metal drains or boils off | Sn, Zn, Hg |

- **Exam tip:** Match the refining method to the property exploited — volatility for Mond, distillation; solubility difference for zone refining; electrochemical series for electrorefining.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mechanism Depth

The Ellingham diagram assumes oxide formation only. When two reactions are coupled (e.g., thermite: 2Al + Cr₂O₃ → Al₂O₃ + 2Cr), ΔG°_overall = Σ ΔG°_products − Σ ΔG°_reactants. Aluminium's oxide line sits far below Cr₂O₃'s at all temperatures, so ΔG°_overall stays strongly negative and the reaction is self-sustaining once ignited.

In Hall–Héroult, current efficiency is below 100% because some current liberates Na from cryolite. The graphite anode is consumed: C + O²⁻ → CO + 2e⁻ (later CO₂), so the cell needs periodic anode replacement. Cryolite is neither ore nor reductant — it is a solvent that lowers the melt from ~2050 °C to ~950 °C and raises conductivity.

#### Common Mistakes to Avoid

| Mistake | Correction |
| --- | --- |
| Anode = pure Cu in electrorefining | Anode = impure blister Cu; cathode = thin pure Cu strip |
| n = 1 for Cu²⁺ in Faraday law | n = 2 for Cu²⁺, n = 3 for Al³⁺, n = 1 for Ag⁺ |
| Zone refining = van Arkel | Zone refining is physical (no reaction); van Arkel uses I₂ chemistry |
| Cryolite is the ore in Hall–Héroult | Cryolite is a flux; ore is pure Al₂O₃ from Bayer process |
| C/CO and C/CO₂ lines both rise with T | C/CO rises; C/CO₂ falls (1→0 gas moles) |

#### Worked Numeric Example

**Q:** In electrolytic refining of copper, 0.50 A passes through acidified CuSO₄ for 45 minutes. How much pure Cu plates the cathode? (M_Cu = 63.5 g·mol⁻¹, n = 2, F = 96485 C·mol⁻¹)

**Solution:** Q = I × t = 0.50 × 2700 = 1350 C. Then m = (Q × M) / (n × F) = (1350 × 63.5) / (2 × 96485) = 85725 / 192970 ≈ 0.444 g of Cu.

#### Exam Strategy and Practice Prompts

JEE Advanced carries ~5% weight from this chapter, usually 1–2 questions per paper — one MCQ on Ellingham slopes and one numerical on Faraday's law or process identification. Memorising oxide-formula to metal mapping (haematite Fe₂O₃, chromite FeCr₂O₄, bauxite AlO(OH)) saves disambiguation time.

1. **Practice prompt 1:** For each metal oxide listed (MgO, Al₂O₃, ZnO, FeO), identify at what temperature range carbon becomes a better reductant than the metal itself, using Ellingham crossover points.
2. **Practice prompt 2:** Compute the mass of aluminium deposited in a Hall–Héroult cell operating at 20,000 A for 8 hours assuming n = 3, M_Al = 27 g·mol⁻¹, and 90% current efficiency.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Metallurgy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeeadvanced/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
