---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-009
topicName: Topic 9
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-06-18"
---

# Topic 9

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Solubility (s)** and the **solubility product constant (Ksp)** describe how much of a sparingly soluble ionic salt dissolves in water at a given temperature. For a salt $A_xB_y$ in equilibrium with its saturated solution, $A_xB_y(s) \rightleftharpoons xA^{y+}(aq) + yB^{x-}(aq)$, the equilibrium expression is **Ksp = [A^(y+)]^x · [B^(x-)]^y**, and the pure solid and water are omitted. If **s** mol/L of salt dissolves, then [A^(y+)] = xs and [B^(x-)] = ys, giving **Ksp = x^x · y^y · s^(x+y)**. The **ion product Q** uses actual ion concentrations: when **Q > Ksp** precipitation occurs, **Q = Ksp** the solution is saturated, **Q < Ksp** it is unsaturated. A **common ion** (senama) shifts the equilibrium left and lowers **s**; for example, adding Cl⁻ to a saturated AgCl solution drops s = Ksp/[Cl⁻]. Lowering pH dissolves salts whose anions are conjugate bases of weak acids (CO₃²⁻, S²⁻, OH⁻ from weak bases). UTBK frequently tests stoichiometric conversion between s and Ksp, the Q-versus-Ksp rule, and pH effects on carbonate/sulfide/hydroxide precipitates.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Deriving Ksp from Molar Solubility
For any sparingly soluble electrolyte $A_xB_y(s)$ the heterogeneous equilibrium has only aqueous species in the mass-action expression:

$$K_{sp} = [A^{y+}]^x [B^{x-}]^y$$

If **s** mol/L dissolves, the stoichiometry gives [A^(y+)] = xs and [B^(x-)] = ys, so:

$$K_{sp} = (xs)^x (ys)^y = x^x y^y s^{(x+y)}$$

Worked examples:
- **AgCl (1:1):** Ksp = s² → s = √Ksp
- **Ag₂CrO₄ (2:1):** Ksp = (2s)²(s) = 4s³ → s = ∛(Ksp/4)
- **Ca₃(PO₄)₂ (3:2):** Ksp = (3s)³(2s)² = 108 s⁵ → s = ⁵√(Ksp/108)

This shows the inverse relationship: **the larger the stoichiometric exponents, the smaller s for the same Ksp.**

#### Predicting Precipitation: Q vs Ksp
Compute the **ion product Q** with actual concentrations (not equilibrium ones). The decision rule:

| Condition | State | Observation |
|---|---|---|
| Q < Ksp | Unsaturated | No precipitate |
| Q = Ksp | Saturated | Equilibrium; incipient precipitate |
| Q > Ksp | Supersaturated | Precipitate forms until Q = Ksp |

#### Common-Ion Effect and pH Influence
Adding a **senama ion** (e.g., NaCl into a saturated AgCl solution) raises one ion's concentration, forcing Q above Ksp, so the salt precipitates until s falls. Approximate: **s' ≈ s / (1 + [common ion]/Ksp)**. Acidic pH raises the solubility of salts whose anions are conjugate bases of weak acids: H⁺ protonates CO₃²⁻ → HCO₃⁻ → H₂CO₃, removing anion from solution and pulling the dissolution equilibrium rightward. The same logic applies to S²⁻, OH⁻ from weak bases, and PO₄³⁻.

#### Typical UTBK Question Types
- Calculate **s** from a given Ksp, or vice versa (multiple-choice with three stoichiometries).
- Decide whether mixing two solutions **forms a precipitate** by comparing Q with Ksp.
- Determine the **minimum [anion]** (often from a weak acid's Kₐ and pH) needed to start precipitation of a metal hydroxide or sulfide — the basis of qualitative cation group analysis.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtler Mechanisms
**1. Hydroxide precipitation requires pH control.** To precipitate M(OH)ₙ fully, the hydroxide concentration must reach [OH⁻] = ⁿ√(Ksp / [M^n⁺]). Converting this to pH lets you compute the **minimum pH** for quantitative removal of a metal ion in analytical chemistry — a classic UTBK two-step problem combining Ksp and Kᵥ of water.

**2. Selective precipitation.** When two cations share the same anion (e.g., both form sulfides), you can separate them by controlling [S²⁻]. The ion that precipitates first is the one whose **required [S²⁻] = Ksp / [M^n⁺]** is reached first as the precipitant is added — provided the two Ksp values differ by at least 10⁴. This is the principle behind group I–V cation analysis.

**3. Simultaneous equilibria and complex ions.** AgCl dissolves in NH₃ because Ag⁺ forms [Ag(NH₃)₂]⁺, removing Ag⁺ from solution and forcing the AgCl equilibrium right. The "effective" solubility becomes s = √(Ksp · (1 + β₂[NH₃]²)) where β₂ is the formation constant. Conversely, adding CN⁻ dissolves AgCN, while adding Cl⁻ to Ag₂CrO₄ reduces s without forming complexes.

**4. Temperature dependence.** Dissolution of most salts is endothermic, so Ksp and s rise with T; a few (e.g., Ca(OH)₂) are exothermic and become less soluble when heated.

#### Common Mistakes Examined
- Forgetting the **stoichiometric exponents**: writing Ksp = s² for Ag₂CrO₄ is the single most common UTBK error.
- Including [AgCl(s)] or [H₂O] in the equilibrium expression — both are constant or pure and must be omitted.
- Confusing **molar solubility s** with **ionic concentration**: in a saturated Ag₂CrO₄ solution, [Ag⁺] = 2s while s itself is the moles of salt per litre.
- Treating pH as irrelevant for hydroxides, sulfides, and carbonates; the UTBK routinely exploits this by giving pH data and asking for conditional solubility.

#### Practice Prompts
1. *Ksp(AgCl) = 1.8 × 10⁻¹⁰ at 25 °C.* Find **s** in pure water and in 0.10 M NaCl. (Answer: s ≈ 1.34 × 10⁻⁵ M pure; 1.8 × 10⁻⁹ M with common ion.)
2. *500 mL of 0.0010 M Ca(NO₃)₂ is mixed with 500 mL of 0.0020 M NaF. Ksp(CaF₂) = 1.5 × 10⁻¹⁰.* Does a precipitate form? (Final [Ca²⁺] = 5.0 × 10⁻⁴ M, [F⁻] = 1.0 × 10⁻³ M; Q = 5.0 × 10⁻¹⁰ > Ksp → **yes, CaF₂ precipitates**.)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
