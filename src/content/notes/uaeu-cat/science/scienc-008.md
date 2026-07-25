---
exam: uaeu-cat
examName: UAE University CAT
subject: science
subjectName: Science
topic: scienc-008
topicName: Circuit Analysis
weight: 3
country: uae
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Circuit Analysis

### 🟢 Lite — Quick Review (1h–1d)

**Electric Current and Ohm's Law** describes the flow of charge through a conductor. Current (I) is the rate of charge flow: **I = Q/t**, measured in **amperes (A)**. Charge carriers are electrons in metals, ions in electrolytes.

**Ohm's Law** states: **V = IR**, where V is potential difference in volts, I is current in amperes, and R is resistance in ohms (Ω). Resistance depends on the material's resistivity (ρ), length (L), and cross-sectional area (A): **R = ρL/A**.

**Key facts:** Power dissipated in a resistor: **P = IV = I²R = V²/R** (watts). Resistors in series add directly: **Rₛ = R₁ + R₂ + ...** Resistors in parallel: **1/Rₚ = 1/R₁ + 1/R₂ + ...** EMF is the energy supplied per unit charge by a source.

**Exam pointers:** Circuit problems with mixed series-parallel arrangements are frequent. Watch for units — convert mm² to m² for area when calculating resistance. The direction of conventional current (positive to negative) differs from electron flow direction.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Definitions and Core Relationships

Electric current is the **time rate of change of charge**: I = dQ/dt. For a steady current, I = Q/t. The unit ampere (A) equals 1 coulomb per second (C/s). Current exists whenever a potential difference (voltage) is applied across a conductor, creating an electric field that accelerates charge carriers.

**Ohm's Law** applies to ohmic conductors where V ∝ I, giving the linear relationship V = IR. However, not all materials obey Ohm's law — filaments, diodes, and semiconductors are non-ohmic. Resistance R depends on the conductor's geometry and material property called **resistivity (ρ)**: R = ρL/A. Resistivity varies with temperature; for metals, ρ increases approximately linearly with temperature: ρ(T) = ρ₀[1 + α(T − T₀)], where α is the temperature coefficient of resistance.

#### Circuit Analysis

For **series circuits**, the same current flows through each component. Total resistance sums algebraically: Rₛ = ΣRᵢ. Total voltage drops sum to source EMF: V = ΣVᵢ.

For **parallel circuits**, all components share the same voltage across each branch. Branch currents divide according to Ohm's law. Total resistance obeys reciprocal addition: 1/Rₚ = Σ(1/Rᵢ). The equivalent resistance of a parallel combination is always less than the smallest individual resistor.

#### Power and Energy

Electrical power is the rate of energy transfer: **P = IV**. Substituting Ohm's law gives alternative forms: P = I²R = V²/R. Energy consumed is W = Pt, measured in joules (J) or kilowatt-hours (kWh). The kilowatt-hour is a commercial unit of energy: 1 kWh = 3.6 × 10⁶ J.

#### Typical Exam Patterns

Circuit problems typically ask for: (1) equivalent resistance using series/parallel rules, (2) unknown current or voltage using Ohm's law, (3) power dissipated in specific resistors, or (4) determining current through a branch using Kirchhoff's laws (if combined networks). Numerical answers require consistent unit conversion — ensure all lengths in metres and areas in m² before substituting into R = ρL/A.

---

### 🔴 Extended — Deep Study (3mo+)

#### Derivation of Resistivity Relationship

Starting from the microscopic model of conduction: I = nqAvd, where n is charge carrier density (carriers/m³), q is charge per carrier (C), A is cross-sectional area (m²), and vd is the drift velocity (m/s). The drift velocity is small (≈mm/s) but the large n in conductors produces measurable current. Combining with V = EL (electric field E = V/L) and the definition R = V/I yields R = ρL/A, confirming that resistivity ρ = 1/(nqμ) depends on carrier density and mobility μ — explaining why copper (high n) has lower resistivity than nichrome (low n).

#### Mixed Series-Parallel Networks

Most exam circuits combine both configurations. Systematic reduction: (1) identify all parallel branches, calculate their equivalent resistances, (2) replace each parallel group with its single equivalent resistor, (3) combine all series resistors, (4) repeat until one equivalent resistance remains. Then work backwards to find individual branch currents using current division: for two parallel resistors, I₁ = I × R₂/(R₁ + R₂).

#### Temperature Effects and Superconductivity

Metallic resistance increases with temperature. For a conductor: R(T) = R₀[1 + α(T − T₀)]. For a semiconductor, resistance decreases with temperature (negative α) because thermal excitation increases carrier density. At extremely low temperatures, certain materials enter the **superconducting state** with exactly zero resistivity — current persists indefinitely without a voltage source.

#### Common Mistakes

1. **Confusing current at junctions**: Charge conservation requires total current entering = total current leaving (Kirchhoff's Current Law). Current does not "use up" in a circuit — the same current returns through the negative terminal.
2. **Forgetting internal resistance**: Real voltage sources have internal resistance r, so terminal voltage V = EMF − Ir. This matters when the load resistance is comparable to r.
3. **Unit errors**: Area must be in m² (not mm²) and length in m (not cm) when using R = ρL/A. Resistivity values are typically given in Ω·m × 10⁻⁸.

#### Practice Prompts

1. A copper wire (ρ = 1.68 × 10⁻⁸ Ω·m) has length 2.0 m and diameter 0.50 mm. Calculate its resistance at 20°C. If connected to a 12 V battery, find the current and power dissipated.
2. In a circuit with R₁ = 4 Ω and R₂ = 6 Ω in parallel, fed by a 24 V source with internal resistance 1 Ω, determine: (a) equivalent external resistance, (b) terminal voltage, (c) current through each parallel branch.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
