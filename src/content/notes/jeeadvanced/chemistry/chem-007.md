---

exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-007
topicName: Equilibrium
weight: 5
country: india
generated: "2026-03-24T08:32:07.923846"
diagramPrompt: "Clear scientific diagram of Equilibrium with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---
# Equilibrium

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Equilibrium in Chemistry has two parts: Chemical Equilibrium (this chapter) and Ionic Equilibrium (a closely related but distinct chapter). This file covers the general principles — the equilibrium constant, Le Chatelier's principle, and reaction quotient. Ionic equilibria (pH, buffers, solubility, hydrolysis) are covered separately.

**Key Formulae for Quick Recall:**

- **Law of Mass Action**: For aA + bB ⇌ cC + dD: K_c = [C]^c[D]^d/[A]^a[B]^b
- **K_p = K_c(RT)^{Δn}** where Δn = (c+d) − (a+b) for gaseous reactions
- **K_p = K_c × (RT)^{Δn_g}** — if Δn_g = 0, K_p = K_c
- **Reaction Quotient Q**: Same formula as K_c but with initial concentrations. Compare Q vs K: Q < K → forward reaction proceeds; Q > K → reverse; Q = K → at equilibrium
- **Le Chatelier's Principle**: If a stress is applied to a system at equilibrium, the system shifts to counteract the stress (favors endothermic direction for temperature increase, side with more moles for pressure decrease).
- **K₂ = K₁ × e^{(−ΔH°/R)(1/T₂ − 1/T₁)}** — van 't Hoff equation for temperature dependence of K

⚡ **Exam tip**: In heterogeneous equilibrium (e.g., CaCO₃(s) ⇌ CaO(s) + CO₂(g)), pure solids and liquids are omitted from the equilibrium expression. Only gaseous and aqueous species appear. K_p = P_CO₂ only.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Equilibrium — JEE Chemistry Study Guide**

**1. Types of Equilibrium and Equilibrium Constant**

**Homogeneous Equilibrium**: All reactants and products in the same phase.
Example: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
K_c = [NH₃]² / ([N₂][H₂]³) — concentration-based
K_p = P_NH₃² / (P_N₂ · P_H₂³)

**Heterogeneous Equilibrium**: Reactants and products in different phases.
Example: Fe₃O₄(s) + 4H₂(g) ⇌ 3Fe(s) + 4H₂O(g)
K_c = [H₂O]⁴ / [H₂]⁴ = ([H₂O]/[H₂])⁴ (solid phases omitted)
K_p = (P_H₂O/P_H₂)⁴

**Relation between K_p and K_c**:
K_p = K_c(RT)^{Δn} where Δn = moles of gaseous products − moles of gaseous reactants
For the Haber process: N₂ + 3H₂ ⇌ 2NH₃: Δn = 2 − 4 = −2
K_p = K_c(RT)^{−2} = K_c/(RT)²

**2. Equilibrium Constant — Physical Meaning and Units**

K has NO units when Δn = 0 (dimensionless). For other cases, units depend on the reaction.
K₂ = 1 (dimensionless by convention for all equilibria)
For CO + ½O₂ ⇌ CO₂: K_c has units mol⁻¹/² L⁻¹/² (or (mol/L)^{−1/2})

**Important properties of K**:
- K > 1: Products are favored at equilibrium
- K < 1: Reactants are favored at equilibrium
- K changes with temperature (depends on ΔH°)
- K does NOT change with concentration, pressure, or catalyst (catalyst only speeds up approach to equilibrium)
- K for reverse reaction = 1/K_forward
- K for reaction multiplied by n = (K)^n

**3. Le Chatelier's Principle — Quantitative Treatment**

**Effect of concentration change**:
Adding reactant → Q < K → system shifts right → consumes added reactant
Removing product → Q > K → system shifts right → produces more product to replace removed

**Effect of pressure change** (only for gaseous equilibria with Δn ≠ 0):
Increasing P → shifts toward fewer moles of gas
Decreasing P → shifts toward more moles of gas

**Example**: In PCl₅(g) ⇌ PCl₃(g) + Cl₂(g): Δn = +2. At constant T, if pressure is increased:
- Shift toward PCl₅ (fewer gas moles) — equilibrium shifts left
- K remains constant; new equilibrium established with different concentrations

**Effect of temperature change**:
van 't Hoff equation: ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁)

For exothermic (ΔH° < 0): Increasing T → K decreases (less product)
For endothermic (ΔH° > 0): Increasing T → K increases (more product)

**Effect of inert gas at constant volume**: No effect on K or equilibrium composition (partial pressures of all components remain same since total moles不变, volume不变).

**Effect of inert gas at constant pressure**: Equilibrium shifts toward more moles of gas (because adding inert gas at constant P means V must increase, reducing all partial pressures equally, so Q = K and the system must shift to keep Q = K — actually check: for PCl₅ ⇌ PCl₃ + Cl₂, Q = P_PCl₃·P_Cl₂/P_PCl₅ = (n_PCl₃·n_Cl₂/n_PCl₅)·(P_total/V)... this gets complex. For most exam purposes: inert gas at constant V → no effect; inert gas at constant P → shifts toward more moles).

**4. Reaction Quotient Q — Identifying Direction of Shift**

For the general reaction, Q = K at equilibrium.
- Q < K: Net forward reaction (products too few) → equilibrium shifts right
- Q > K: Net reverse reaction (products too many) → equilibrium shifts left

**Example**: For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) with K_c = 4.0 at 500 K.
Initial: [SO₂] = 2 M, [O₂] = 1 M, [SO₃] = 0 M
Q = [SO₃]²/([SO₂]²[O₂]) = 0/(4×1) = 0 < K → reaction proceeds forward.
At equilibrium: let x = [SO₃] formed = 2x (from stoichiometry). Then [SO₃] = 2x, [SO₂] = 2 − 2x, [O₂] = 1 − x.
4 = (2x)²/((2−2x)²(1−x)) → solve for x.

**5. Degree of Dissociation (α)**

For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g):
Initially: n₀ moles of PCl₅. At equilibrium: n = n₀(1−α) PCl₅, n₀α PCl₃, n₀α Cl₂.
Total moles at equilibrium = n₀(1 + α).
K_p = (α²P)/(1−α)(1+α) (where P = total pressure) — using partial pressures.

If α is small (weak electrolytes, endothermic dissociation): α = √(K_p/P) for PCl₅ decomposition where total pressure term simplifies.

⚡ **Exam tip**: For a reaction A ⇌ 2B, if initially 1 mole of A is present and dissociation is α, then at equilibrium: [A] = (1−α)/V, [B] = 2α/V. Total moles = 1 + α. Partial pressure of B = (2α/1+α) × P_total.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Equilibrium — Comprehensive JEE Advanced Notes**

**1. Thermodynamic Derivation of Equilibrium Constant**

From Gibbs free energy: ΔG = ΔG° + RT ln Q
At equilibrium: ΔG = 0, Q = K
Therefore: ΔG° = −RT ln K

This is the fundamental link between thermodynamics and equilibrium.

**From chemical potentials**:
For ideal gases: μᵢ = μ°ᵢ + RT ln(Pᵢ/P°)
For the reaction: ΔG° = Σ νᵢ μ°ᵢ(products) − Σ νᵢ μ°ᵢ(reactants)
At equilibrium: Σ νᵢ μᵢ = 0 → leads to K_p = Π (Pᵢ)^{νᵢ}

**van 't Hoff Equation — Temperature Dependence of K**:

d(ln K)/dT = ΔH°/RT²

Integrating between T₁ and T₂:
ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁)

This is the key to solving problems like: "Given K at 298 K and ΔH°, find K at 400 K."

**Example**: For N₂O₄ ⇌ 2NO₂, ΔH° = +57 kJ/mol. K₁ = 0.12 at 298 K. Find K at 400 K.
ln(K₂/0.12) = −(57000/8.314)(1/400 − 1/298)
= −(6855)(−0.00115) = +7.88
K₂ = 0.12 × e^{7.88} = 0.12 × 2650 ≈ 318
(The equilibrium shifts dramatically toward NO₂ at higher temperature — consistent with endothermic dissociation.)

**2. Simultaneous and Consecutive Equilibria**

When multiple equilibria occur in the same system:

**Example**: In the "chamber process" for sulfuric acid:
SO₂ + ½O₂ ⇌ SO₃ ... K₁
SO₃ + H₂O → H₂SO₄ ... (essentially goes to completion, no K)
Combined: SO₂ + H₂O + ½O₂ ⇌ H₂SO₄ ... K = K₁ × K₂

For simultaneous equilibria sharing a common intermediate:
Equilibrium 1: A ⇌ B, K₁
Equilibrium 2: B ⇌ C, K₂
Net: A ⇌ C, K = K₁ × K₂

**Complex reactions**: The overall equilibrium constant is the product of stepwise equilibrium constants.

**3. Equilibrium in Advanced Gas Phase Systems**

**Decomposition of CaCO₃ in a closed vessel**:
CaCO₃(s) ⇌ CaO(s) + CO₂(g)
K_p = P_CO₂ (only the gas appears)
This is called the "decomposition pressure." At a given T, P_CO₂ is fixed regardless of amounts of CaCO₃ or CaO present (as long as both solid phases are present).

**On heating**: P_CO₂ increases. When P_CO₂ exceeds atmospheric pressure, CaCO₃ decomposes completely in an open container.

**Active mass**: In equilibrium expressions, we use concentrations (mol/L for solutions, partial pressures for gases). The term "active mass" of a solid is defined as 1 (or its molar concentration in the solid phase). So pure solids and liquids don't appear in K expressions.

**4. Shifting Paradigms — The Onsager Reciprocal Relations**

In equilibrium, the affinities (driving forces) are zero. Near equilibrium, the rates of processes are proportional to their affinities — linear non-equilibrium thermodynamics.

This extends beyond JEE scope but provides the theoretical basis for why Le Chatelier's principle works — systems respond to minimize applied stress.

**5. Equilibrium in Heterogeneous Systems — Detailed Examples**

**Example 1**: C(s) + H₂O(g) ⇌ CO(g) + H₂(g)
K_c = [CO][H₂O]/[H₂O] = [CO][H₂]/[H₂] — wait, carefully:
Actually: K_c = [CO][H₂]/[H₂O] (C is solid, omitted)
K_p = P_CO · P_H₂ / P_H₂O

**Example 2**: NH₄HS(s) ⇌ NH₃(g) + H₂S(g)
K_p = P_NH₃ · P_H₂S (solids omitted)
If initially only NH₄HS is present, let x = partial pressure of NH₃ = partial pressure of H₂S (from stoichiometry).
K_p = x². Solve for x: x = √K_p.

**If initially one gas is already present** (say, some NH₃ is added), the equilibrium shifts:
Adding NH₃ → increases P_NH₃ → Q > K_p → shift toward NH₄HS (left) → consumes some NH₃ and H₂S. New equilibrium with different partial pressures.

**6. Degree of Dissociation — Advanced Treatment**

For PCl₅ ⇌ PCl₃ + Cl₂:
Total pressure P, initial moles n₀.
At equilibrium: n_PCl₅ = n₀(1−α), n_PCl₃ = n₀α, n_Cl₂ = n₀α
Total moles = n₀(1+α)
Pᵢ = (nᵢ/total) × P

P_PCl₅ = [n₀(1−α)/n₀(1+α)] × P = [(1−α)/(1+α)] × P
P_PCl₃ = [α/(1+α)] × P
P_Cl₂ = [α/(1+α)] × P

K_p = (P_PCl₃ · P_Cl₂) / P_PCl₅ = [α²/(1+α)² × P²] / [(1−α)/(1+α)] × P
= α²P/(1−α²)

This is the exact formula. For small α: α²P/(1−α²) ≈ α²P → α ≈ √(K_p/P)

**7. Effect of Temperature on Equilibrium — van 't Hoff Analysis**

**For endothermic reactions** (ΔH° > 0):
As T increases → ln K increases → K increases → products favored.
As T decreases → K decreases → reactants favored.

**For exothermic reactions** (ΔH° < 0):
As T increases → K decreases → reactants favored.
As T decreases → K increases → products favored.

**Example**: Haber process N₂ + 3H₂ ⇌ 2NH₃, ΔH° = −92 kJ/mol.
This is exothermic → high T disfavors NH₃ (K decreases). But high T is needed for sufficient reaction rate. Industrial compromise: ~400–500°C with catalyst.

**Le Chatelier at work**: The industrial Haber process uses:
- Moderate to high pressure (favors fewer gas moles → NH₃)
- Moderate temperature (450°C compromise between yield and rate)
- Catalyst (Fe with K₂O, Al₂O₃ promoters) — doesn't affect K, only rate
- Continuous removal of NH₃ from reaction mixture — shifts equilibrium right

**8. Disturbing Equilibrium — Compressibility and Shift Direction**

For the general gas-phase reaction with Δn:
When pressure is increased (volume decreased), the effect on Q depends on Δn.

For aA + bB ⇌ cC + dD (all gases):
Q = (P_C/P°)^c (P_D/P°)^d / [(P_A/P°)^a (P_B/P°)^b]

If total pressure is increased n-fold (volume decreases n-fold), each partial pressure increases n-fold (assuming ideal gas behavior):
New Q = n^{(c+d−a−b)} × original Q = n^{Δn} × original Q

- If Δn > 0: Q increases → shift left (reverse reaction favored)
- If Δn < 0: Q decreases → shift right (forward reaction favored)
- If Δn = 0: Q unchanged → no shift

**9. Equilibrium in Dissociation of Weak Electrolytes**

For a weak electrolyte HA ⇌ H⁺ + A⁻:
K_a = [H⁺][A⁻]/[HA]

If initial concentration is c and degree of dissociation is α:
K_a = cα²/(1−α) ≈ cα² (for α << 1)
α = √(K_a/c)

**Ostwald's Dilution Law**: α ∝ 1/√c, K_a independent of c.

**For polyprotic acids** (H₂SO₄, H₃PO₄):
Stepwise dissociation constants K₁, K₂, K₃.
For H₂SO₄: K₁ (complete, strong acid behavior) ≈ ∞; K₂ ≈ 1.2 × 10⁻² (weak).
For H₃PO₄: K₁ = 7.5 × 10⁻³, K₂ = 6.2 × 10⁻⁸, K₃ = 4.8 × 10⁻¹³.

⚡ **Exam tip**: When calculating pH of a mixture of weak acid and its salt (buffer), use Henderson-Hasselbalch: pH = pK_a + log([salt]/[acid]). For salts of weak acids with strong bases (e.g., Na₂CO₃), hydrolysis constant K_h = K_w/K_a, degree of hydrolysis h = √(K_h/c).

**10. Solubility Product and Selective Precipitation**

For AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq):
K_sp = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰

**Molar solubility** s = [Ag⁺] = [Cl⁻] = √K_sp

**Selective precipitation**: When two salts are present, adding a reagent precipitates the one with lower solubility product first.

**Example**: A solution has [Cl⁻] = 0.1 M. Adding AgNO₃ to precipitate AgCl:
[Ag⁺] required = K_sp/[Cl⁻] = 1.8 × 10⁻¹⁰/0.1 = 1.8 × 10⁻⁹ M
This very low [Ag⁺] means AgCl precipitates readily.

**For salts with different stoichiometries** (e.g., Ag₂CrO₄ vs AgCl):
Compare molar solubilities directly, not K_sp values.
Ag₂CrO₄: K_sp = 1.1 × 10⁻¹² = s × (2s)² = 4s³ → s = (K_sp/4)^{1/3} = (2.75 × 10⁻¹³)^{1/3} ≈ 6.5 × 10⁻⁵ M
AgCl: K_sp = 1.8 × 10⁻¹⁰ = s² → s = √(1.8 × 10⁻¹⁰) = 1.34 × 10⁻⁵ M
Despite higher K_sp, AgCl is actually less soluble (lower s) than Ag₂CrO₄. Always compare molar solubilities, not K_sp directly for salts of different types.

⚡ **Exam tip**: In ionic equilibrium problems with common ion effect, the solubility product remains constant (it's a function of temperature only). What changes is the molar solubility, which decreases in presence of a common ion. Write the dissociation equation carefully, include the common ion concentration from the added salt, then solve.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
