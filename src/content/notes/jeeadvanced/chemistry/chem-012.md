---
exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-012
topicName: Solutions
weight: 5
country: india
generated: "2026-03-24T08:32:07.925948"
diagramPrompt: Clear scientific diagram of Solutions with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style

---

# Solutions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Solutions** — Key Facts for JEE Advanced

**Concentration Terms:**
- Molarity (M): mol solute/L solution
- Molality (m): mol solute/kg solvent
- Mole fraction (x): mol component/total mol
- Mass percentage: (mass solute/mass solution) × 100
- Parts per million (ppm): mg solute/kg solution (for dilute aqueous)

**Raoult's Law:**
P_solution = x_solvent × P°_solvent
P_solution = x₁P°₁ + x₂P°₂ (for two components)
Deviation: Positive (N₂O, HCl) or Negative (CHCl₃ + C₆H₆)

**Ideal vs Real Solutions:**
- Ideal: Follows Raoult's law at all concentrations
- Real: Positive or negative deviations
- Positive deviation → A−B interactions weaker than A−A, B−B
- Negative deviation → A−B interactions stronger than A−A, B−B

**Key Formulas:**
- Molarity (M) = (Mass × 1000) / (Molar mass × V_mL)
- Mole fraction (x₁) = n₁/(n₁ + n₂)
- m = (Mass solute/M_solute) / (Mass solvent/1000)

⚡ **Exam Tip:** When a question gives mass of solute and mass of solvent, molality (m) is often easier to use than molarity since molality is independent of temperature. Molarity changes with temperature (volume changes) but molality doesn't.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Solutions** — Chemistry Study Guide

**Raoult's Law in Detail:**

For a solution of two volatile liquids A and B:
P_total = x_A P°_A + x_B P°_B

Partial vapor pressure of A: p_A = x_A P°_A
Partial vapor pressure of B: p_B = x_B P°_B

*y_A (mole fraction in vapor) = p_A / P_total*
*y_B = p_B / P_total*

**Composition of Liquid and Vapor Phases:**

At any given temperature, the vapor phase is richer in the more volatile component (lower boiling point/higher P°).
Dew point: Temperature at which vapor begins to condense
Bubble point: Temperature at which liquid begins to boil

For T-x diagram (at constant P):
- Lower curve: liquid composition (Raoult's law)
- Upper curve: vapor composition (Dalton's law)

For P-x diagram (at constant T):
- Straight line (for ideal): Raoult's law
- Curves above/below: real solutions with deviations

**Azeotropes:**

*Maximum boiling azeotrope:* (negative deviation)
Example: Chloroform + Acetone
Forms due to strong A−B interactions (H-bonding between CHCl₃ and acetone)
At azeotropic composition, liquid and vapor have same composition.
P_total is minimum for given composition.

*Minimum boiling azeotrope:* (positive deviation)
Example: Ethanol + Water (at 95.6% ethanol by mass, BP = 78.1°C)
At azeotropic composition, liquid and vapor have same composition.
P_total is maximum for given composition.
Cannot be separated by simple distillation.

⚡ **Exam Tip:** If a mixture forms an azeotrope, no matter how long you distill, you cannot get either component pure beyond the azeotropic composition. This is a common JEE trick — students assume repeated distillation can separate any mixture.

**Colligative Properties:**

Four main colligative properties (all depend on number of solute particles, NOT their nature):

1. **Relative lowering of vapor pressure:**
   ΔP/P° = x_solute = n₂/(n₁ + n₂) ≈ n₂/n₁ (dilute)
   Or: P_solution = (1 − x_solute)P° = x_solvent P°

2. **Elevation of boiling point:**
   ΔT_b = K_b × m
   K_b = (R × M₁ × T_b²) / (ΔH_vap × 1000)
   where M₁ = molar mass of solvent, T_b = boiling point of pure solvent in K, ΔH_vap = enthalpy of vaporization

3. **Depression of freezing point:**
   ΔT_f = K_f × m
   K_f = (R × M₁ × T_f²) / (ΔH_fus × 1000)
   where T_f = freezing point of pure solvent, ΔH_fus = enthalpy of fusion

4. **Osmotic pressure:**
   π = CRT = (n/V)RT (van't Hoff's equation)
   For dilute solutions: πV = nRT
   Units: atm or Pa
   C = molarity of solute particles

*Example problem pattern:* Find molecular mass of solute if 5 g dissolved in 100 mL water raises BP by 0.5°C. K_b for water = 0.52 K kg/mol.
ΔT_b = 0.5 = 0.52 × m → m = 0.5/0.52 = 0.96 mol/kg
m = (5/M_solute)/(0.1) → M_solute = 5/(0.96 × 0.1) = 52 g/mol

**van't Hoff Factor (i):**

For electrolytes that dissociate: i = 1 + (ν − 1)α
where ν = number of ions formed, α = degree of dissociation

For NaCl: ν = 2, for CaCl₂: ν = 3
ΔT_b = i × K_b × m

*When dissociation is complete:*
i ≈ 2 for NaCl (complete dissociation gives 2 ions)
i ≈ 3 for CaCl₂ (complete dissociation gives 3 ions)
i ≈ 1 for glucose (non-electrolyte)

⚡ **Exam Tip:** In questions involving ionic compounds, always include van't Hoff factor (i) when calculating colligative properties. For weak electrolytes like CH₃COOH, i is close to 1 (undissociated) at normal concentrations.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Solutions** — Comprehensive Chemistry Notes

**Thermodynamic Derivation of Raoult's Law:**

For an ideal solution, Raoult's law can be derived from chemical potentials:
μ_i = μ°_i + RT ln x_i (for component i in solution)

At equilibrium between liquid and vapor:
μ_i(liquid) = μ_i(vapor)
For pure liquid: μ°_i(liquid) = μ°_i(vapor) + RT ln P°_i
For solution: μ_i(liquid) = μ°_i(liquid) + RT ln x_i

Setting equal: μ°_i(liquid) + RT ln x_i = μ°_i(vapor) + RT ln p_i
Since: μ°_i(liquid) − μ°_i(vapor) = −RT ln P°_i (from pure component equilibrium)
Substituting: μ°_i(liquid) + RT ln x_i = μ°_i(vapor) + RT ln p_i
Rearranging: p_i = x_i P°_i ... (Raoult's law)

**Deviations from Raoult's Law:**

*Positive deviation:* p_i > x_i P°_i
Causes:
- A−B interactions weaker than A−A or B−B
- Escape tendency of each component increases
- Examples: ethanol + cyclohexane, benzene + acetone
- Results: Maximum vapor pressure (maximum boiling azeotrope or minimum boiling?)

Wait — positive deviation gives MINIMUM boiling azeotrope. Because higher vapor pressure means lower boiling point.
Ethanol-water forms minimum boiling azeotrope at 95.6% ethanol (positive deviation).

*Negative deviation:* p_i < x_i P°_i
Causes:
- A−B interactions stronger than A−A or B−B
- Escape tendency of each component decreases
- Examples: chloroform + acetone (forms H-bond), water + nitric acid
- Results: Minimum vapor pressure (maximum boiling azeotrope)

**Henry's Law:**

For gas in liquid solution at low concentration (dilute):
p_gas = K_H × x_gas
or: m = K_P × p_gas

Where K_H is Henry's constant (different from Raoult's constant).
At low concentrations, solute follows Henry's law.
At high concentrations, solute follows Raoult's law.
Raoult's law extrapolated to infinite dilution gives Henry's law.

*JEE example:* CO₂ in cold drinks
The solubility of CO₂ increases with pressure (Henry's law: p = K_H × x)
When pressure is released (opening the bottle), p decreases, and CO₂ escapes (bubbles).
At higher temperature, K_H decreases (less gas dissolves), so warm soda goes flat faster.

*Common gases and their Henry's constants (for JEE reference):*
| Gas | K_H (atm/mol fraction⁻¹) |
|---|---|
| N₂ | 8.7 × 10⁴ |
| O₂ | 4.4 × 10⁴ |
| CO₂ | 1.6 × 10³ |
| H₂ | 7.1 × 10⁴ |
| NH₃ | 9.1 × 10³ |

**Molecular Mass Determination via Colligative Properties:**

*Method 1: Boiling Point Elevation*
Unknown solute (non-electrolyte) mass m g, solvent mass M g.
ΔT_b = K_b × m/(M_solute × M_solvent in kg)
→ M_solute = (K_b × m × 1000) / (ΔT_b × M_solvent in g)

*Method 2: Freezing Point Depression*
Same formula with K_f instead of K_b

*Method 3: Osmotic Pressure (most sensitive for large molecules)*
π = CRT
For dilute solutions: πV = nRT → M = (mRT)/(πV)
Because π can be measured at very low concentrations, this method is best for polymers and biomolecules.

⚡ **Exam Tip:** If a solute associates (e.g., acetic acid dimerizes in benzene), the effective number of particles decreases → i < 1. If a solute dissociates, i > 1. Always compare expected i with observed colligative property effect.

**Abnormal Molecular Mass (i factor for associations/dissociations):**

*Association example:* Benzoic acid in benzene forms dimers (2 molecules associate)
Effective i = 1/2 (for every 2 molecules, only 1 particle exists)
ΔT_f (observed) < ΔT_f (calculated) by factor of 2

*Dissociation example:* NaCl in water, ideally i = 2, but due to ion pairing at high concentration, i ≈ 1.7-1.8 instead of 2.

**Keller's Method for Molecular Mass:**

Use limiting law at infinite dilution:
ΔT_f/K_f = m = (w₂/M₂) × (1000/w₁)
So M₂ = K_f × (w₂ × 1000)/(ΔT_f × w₁)

At infinite dilution, i → ν (total ions for strong electrolyte)

**Osmosis and Reverse Osmosis:**

*Osmosis:* Solvent flows from lower to higher concentration through semipermeable membrane
*Reverse osmosis:* Applying pressure greater than π forces solvent to flow from higher to lower concentration
Used in desalination and water purification

*Isotonic solutions:* Same osmotic pressure
*Hypotonic:* Lower osmotic pressure (solvent flows in)
*Hypertonic:* Higher osmotic pressure (solvent flows out)

**Fractional Distillation and Lever Rule:**

On a T-x-y diagram:
For a given total composition x_total, draw horizontal line at boiling temperature
Intersect with liquid curve gives liquid composition x_L
Intersect with vapor curve gives vapor composition x_V
Lever rule: x_L/(x_V − x_L) = distance from V to total / distance from L to total

This allows calculation of amounts of liquid and vapor at equilibrium.

**Binary Phase Diagrams (Temperature-Composition):**

For minimum boiling azeotrope (positive deviation):
Vapor pressure shows maximum at azeotropic composition
Boiling point shows minimum at azeotropic composition
Distillation can give pure component A and azeotrope, but not pure B beyond azeotrope.

For maximum boiling azeotrope (negative deviation):
Vapor pressure shows minimum at azeotropic composition
Boiling point shows maximum at azeotrope
Distillation can give pure component B and azeotrope, but not pure A beyond azeotrope.

**Solubility and Temperature:**

For most solids in liquids: solubility increases with temperature (endothermic dissolution).
For gases in liquids: solubility decreases with temperature (exothermic dissolution).
For gases: ΔH_sol < 0 (exothermic), so higher T decreases solubility.

*Van't Hoff equation for solubility:*
ln K_sp = −ΔH°/(RT) + ΔS°/R
From temperature dependence, one can find ΔH of solution.

**Surface Tension and Solutions:**

Solute effects on surface tension:
- Inorganic salts (NaCl, KCl): Increase surface tension (positively adsorbed? No, they're excluded from surface)
- Organic compounds (alcohols, fatty acids): Decrease surface tension (surface active agents)

Surfactants (surface active agents) have hydrophilic head and hydrophobic tail.
At surface, they orient to minimize contact between hydrophobic tail and water.

**Viscosity and Solutions:**

Liquid mixtures may show non-ideal viscosity behavior:
η_mix = η_A × φ_A + η_B × φ_B (linear, rare)
Usually deviations occur: η_mix > linear average (positive deviation) or < average (negative)

Temperature dependence: η = A × e^(Ea/RT)
Logarithmic form: ln η = ln A + Ea/(RT)

⚡ **Exam Tip:** Among colligative properties, osmotic pressure gives the most accurate molecular mass for polymers because it is measured at very low concentrations where solute-solute interactions are minimal. This has been a JEE Advanced application question.

**Ternary Solutions (Three Components):**

For systems with three liquids (e.g., chloroform + acetic acid + water):
Triangular coordinate system used:
- Each vertex = pure component
- Each side = binary mixture of two components
- Interior = ternary mixture
Lever rule extends to triangular plots.

**Non-Ideal Solutions and Activity:**

For real solutions: p_i = γ_i × x_i × P°_i
where γ_i is activity coefficient (γ_i → 1 as x_i → 1)

For dilute solution of solute:
p_solvent → Raoult's law as x → 1
p_solute → Henry's law as x → 0
Both connect smoothly in between.

**Practice Problem: JEE Advanced Level:**

Problem: A solution of benzene and toluene has mole fraction of benzene = 0.4. At 298 K, P°_benzene = 0.126 atm, P°_toluene = 0.037 atm.
Find: (a) total vapor pressure, (b) mole fraction of benzene in vapor.

Solution:
(a) P_total = x_B P°_B + x_T P°_T
= 0.4 × 0.126 + 0.6 × 0.037
= 0.0504 + 0.0222 = 0.0726 atm

(b) y_B = p_B/P_total = 0.0504/0.0726 = 0.694
Vapor is richer in benzene (more volatile component), which confirms the rule.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
