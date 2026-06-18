---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-005
topicName: States of Matter
weight: 3
country: india
generated: "2026-03-28T21:09:28"
lastUpdated: "2026-06-18"
---

# States of Matter

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**States of matter** — solid, liquid, gas — are governed by the tug-of-war between **intermolecular forces** and the **thermal (kinetic) energy** of particles. The **ideal gas equation** is the single most-tested relationship: **PV = nRT**, where P is pressure (Pa), V is volume (m³), n is moles, R = 8.314 J mol⁻¹ K⁻¹, and T is absolute temperature (K). For real gases, replace it with the **van der Waals equation**: (P + a n²/V²)(V − nb) = nRT, where **a** corrects for attractive forces and **b** for the finite volume of molecules. For JEE Main, expect: (i) one numerical on combined gas laws (Boyle's, Charles's, Gay-Lussac's), (ii) identification of the correct intermolecular force, and (iii) a compressibility factor (Z = PV/nRT) question where Z = 1 (ideal), Z < 1 (attractions dominate), or Z > 1 (repulsions dominate).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

### The Big Picture
Every phase is just a different balance between two energies: **kinetic energy** (∝ T) trying to spread particles apart, and **intermolecular potential energy** pulling them together. When KE >> PE → **gas**; when PE >> KE → **solid**; when they are comparable → **liquid**.

### Gas Laws (Combinable)
| Law | Statement | Equation (constant) |
|---|---|---|
| Boyle's | P inversely proportional to V at constant T, n | P₁V₁ = P₂V₂ |
| Charles's | V directly proportional to T at constant P, n | V₁/T₁ = V₂/T₂ |
| Gay-Lussac's | P directly proportional to T at constant V, n | P₁/T₁ = P₂/T₂ |
| Avogadro's | V directly proportional to n at constant P, T | V₁/n₁ = V₂/n₂ |

### Real Gases and the van der Waals Equation
At **high P / low T**, real gases deviate from PV = nRT. The van der Waals constants carry physical meaning:
- **a** — measure of attractive forces between molecules (larger for polar/H-bonding gases like H₂O, NH₃).
- **b** — excluded volume per mole (≈ 4 × actual molecular volume; e.g. for N₂, b ≈ 0.039 L mol⁻¹).

**Critical constants** from van der Waals:
- **P_c = a / 27b²**
- **V_c = 3b**
- **T_c = 8a / 27Rb**
- **Z_c = P_c V_c / (R T_c) = 3/8 = 0.375** — a value nearly universal for many real gases.

### Dalton's Law of Partial Pressures
For a non-reacting mixture: **P_total = Σ P_i**, with **P_i = x_i · P_total**, where **x_i** is the mole fraction of component i. JEE Main frequently tests the wet/dry gas collection trick — subtract water vapour pressure from total pressure using this identity.

### Compressibility Factor
**Z = PV / nRT**. Plot Z vs P at fixed T:
- **Z = 1** → ideal.
- **Z < 1** → attractions win (low-to-moderate P).
- **Z > 1** → repulsions / finite size win (high P).
At the **Boyle temperature** T_B = a / (Rb), Z ≈ 1 over a wide pressure range.

### Liquid-Phase Properties
- **Surface tension** (γ): force per unit length along the surface; decreases with rising T; explains spherical droplets and capillary rise.
- **Viscosity** (η): resistance to flow; given by η = (F/A)/(dv/dx). For liquids, η **decreases** with T (contrast with gases, where η **increases** with T).
- **Vapour pressure** rises with T per **Clausius–Clapeyron**: ln(P₂/P₁) = −ΔH_vap/R (1/T₂ − 1/T₁).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

### Law of Corresponding States
When you rescale a gas's P, V, T by their critical values — **P_r = P/P_c, T_r = T/T_c, V_r = V/V_c** — every real gas collapses onto nearly the same Z vs P_r curve. This is the **law of corresponding states**: gases with the same (T_r, P_r) behave identically. The **acentric factor ω** quantifies the small residual deviations and is useful for petroleum-fluid characterization.

### Intermolecular Force Hierarchy (memorize the ranking)
**Ion–ion > ion–dipole > H-bonding > dipole–dipole > London dispersion.** London forces exist in *all* molecules and dominate for non-polar species (N₂, O₂, halogens, noble gases). H-bonding needs H bonded to F, O, or N — explaining why H₂O (M = 18) has a higher boiling point than HF (M = 20) only between 0–100 °C where H-bond chains in HF break, but water still boils higher overall due to extensive 3-D H-bonding.

### Worked Numeric
A 2.00 L flask at 300 K contains 0.500 mol O₂. Using van der Waals (a = 1.36 L² atm mol⁻², b = 0.0319 L mol⁻¹):
- P = nRT/(V − nb) − a n²/V²
- = (0.5 × 0.0821 × 300)/(2.00 − 0.5 × 0.0319) − (1.36 × 0.25)/(4.00)
- = 12.315/1.984 − 0.085 ≈ 6.208 − 0.085 ≈ **6.12 atm**
- Ideal-gas prediction: 6.16 atm — small deviation because 300 K is far above O₂'s T_c = 154.6 K.

### Common Mistakes
1. Forgetting to convert °C to K before applying Charles's/Gay-Lussac's law — units must be **kelvin**.
2. Using total pressure instead of partial pressure in Dalton's-law problems involving gases collected over water.
3. Confusing the trend of viscosity with T for **liquids (decreases)** vs **gases (increases)**.
4. Mixing up critical constants — V_c = 3b (not b, not 2b).

### Practice Prompts
1. A gas has a = 4.0 L² atm mol⁻² and b = 0.05 L mol⁻¹. Calculate T_c, P_c, and Z_c. (Ans: T_c = 8a/(27Rb), P_c = a/(27b²), Z_c = 3/8.)
2. At the Boyle temperature of a van der Waals gas, show that Z ≈ 1 to second order in pressure and predict whether T_B > T_c or T_B < T_c.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
