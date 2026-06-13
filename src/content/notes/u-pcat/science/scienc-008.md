---
exam: u-pcat
examName: UPCAT (Philippines)
subject: science
subjectName: Science
topic: scienc-008
topicName: Topic 8
weight: 3
country: philippines
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-06-13"
---

# Topic 8

### 🟢 Lite — Quick Review (1h–1d)

**Electricity and Magnetism** describes the flow of electric charge through conductors and the forces exerted by magnetic fields on charges. The two core formulas for UPCAT are **Ohm's Law (V = IR)** and **Power (P = IV)**, where V is voltage in volts, I is current in amperes, and R is resistance in ohms. For series circuits, total resistance is the arithmetic sum; for parallel circuits, the reciprocal sum equals the sum of individual reciprocals. **Magnetic force** on a moving charge follows **F = qvB sinθ**, with the force perpendicular to both velocity and field. **Electromagnetic induction** uses **ε = −N(dΦ/dt)**, where the induced EMF opposes the change in flux (Lenz's Law). UPCAT typically tests these as direct substitution or circuit analysis MCQs—watch for units (convert mA to A) and direction conventions (conventional current vs. electron flow).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Electric Charge and Current

Electric charge exists in two forms: **positive** (protons) and **negative** (electrons). Like charges repel; opposite charges attract. **Current (I)** is the rate at which charge flows past a point, measured in amperes (A): **I = Q/t**, where Q is charge in coulombs and t is time in seconds. Conventional current is defined as the direction positive charges would move—from the positive terminal to the negative terminal of a battery. **Electron flow**, however, travels in the opposite direction. UPCAT often tests whether you know this distinction.

#### Voltage, Resistance, and Ohm's Law

**Voltage (V)** is the electric potential difference that pushes current through a circuit, measured in volts. **Resistance (R)** opposes current flow and depends on the material's resistivity (ρ), the conductor's length (L), and its cross-sectional area (A): **R = ρL/A**. **Ohm's Law** states that at constant temperature, voltage is directly proportional to current: **V = IR**. This relationship lets you solve for any missing variable when the other two are known.

#### Series and Parallel Circuits

| Circuit Type | Current | Voltage | Total Resistance |
|---|---|---|---|
| **Series** | Same through all components | Splits across components | R₁ + R₂ + ... |
| **Parallel** | Splits across branches | Same across all branches | 1/R₁ + 1/R₂ = 1/R_total |

In UPCAT circuit problems, identify whether components share the same current path (series) or branch paths (parallel) first—this determines which formula to apply.

#### Magnetic Forces and Electromagnetic Induction

A charge moving through a magnetic field experiences a force given by **F = qvB sinθ**, where θ is the angle between velocity and field direction. The force is maximum when the charge moves perpendicular to the field (θ = 90°). **Electromagnetic induction** occurs when magnetic flux through a coil changes: **Φ = BA cosθ** (where θ is the angle between the field and the normal to the surface), and the induced EMF follows **ε = −N(dΦ/dt)**. The negative sign encodes **Lenz's Law**—the induced current flows in a direction that opposes the change in flux that created it.

---

### 🔴 Extended — Deep Study (3mo+)

#### Circuit Analysis: Kirchhoff's Laws and Complex Configurations

Beyond simple series and parallel networks, UPCAT may present mixed configurations requiring **Kirchhoff's Current Law** (KCL: current into a junction equals current out) and **Kirchhoff's Voltage Law** (KVL: sum of voltage drops around any closed loop equals zero). For complex parallel branches, use the **current divider rule**: current through a branch equals the total current multiplied by the ratio of the opposite branch's total resistance to the sum of branch resistances. Combined with Ohm's Law, these tools solve multi-loop circuits systematically.

#### Electromagnetic Induction: Motional EMF and Applications

A conductor moving through a magnetic field experiences an induced EMF even without a complete circuit: **ε = BLv sinθ**, where L is the conductor's length within the field and v is its velocity. This **motional EMF** principle underlies electric generators—mechanical energy (rotating a coil) converts to electrical energy as flux changes continuously. For a rotating coil in a uniform field, the induced EMF varies sinusoidally: **ε = ε₀ sin(ωt)**, where ω is the angular frequency. The Philippines' grid operates at 60 Hz, so UPCAT may test your understanding of frequency and period relationships.

#### Common Mistakes to Avoid

1. **Unit conversion errors**: 1 mA = 10⁻³ A; 1 kΩ = 10³ Ω. Skipping conversion produces answers off by orders of magnitude.
2. **Applying Ohm's Law to non-ohmic devices**: Lamps and diodes do not follow V = IR linearly—their resistance changes with temperature or bias voltage.
3. **Ignoring internal resistance**: Real batteries have internal resistance (r), so terminal voltage is **V = ε − Ir**, not simply the EMF.
4. **Misidentifying flux angle**: In **Φ = BA cosθ**, θ is measured from the field direction to the **normal** of the surface, not to the surface itself.
5. **Direction of induced current**: Lenz's Law requires determining the polarity that opposes the flux change—draw the field lines first.

#### Practice Prompts

1. A 12 V battery with internal resistance 0.5 Ω is connected to a circuit with two parallel resistors of 6 Ω and 12 Ω. Calculate the terminal voltage and the current through each branch.
2. A coil of 200 turns is placed in a magnetic field where flux changes from 0.04 Wb to 0.01 Wb in 0.05 s. Determine the magnitude and direction of the induced EMF.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
