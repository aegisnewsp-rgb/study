---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-11
topicName: Current Electricity and Circuits
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.046406"
diagramPrompt: Clean educational diagram showing Current Electricity and Circuits with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration



---
# Current Electricity and Circuits

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Current Electricity** — Key Facts

Electric current is the flow of charge. By convention, current direction is the direction of flow of positive charge (opposite to electron flow).

$$I = \frac{Q}{t}$$

SI unit: Ampere (A), where 1 A = 1 C/s

**Ohm's Law:**
$$V = IR$$

where V = potential difference (volts), I = current (amps), R = resistance (ohms)

**Resistance:**
$$R = \frac{\rho L}{A}$$

where ρ = resistivity (Ω·m), L = length (m), A = cross-sectional area (m²)

**Resistivity of common materials (at 20°C):**
- Copper: 1.68 × 10⁻⁸ Ω·m
- Iron: 9.71 × 10⁻⁸ Ω·m
- nichrome: 1.10 × 10⁻⁶ Ω·m

**Series and Parallel:**

| Configuration | Same through | Same across |
|---------------|---------------|-------------|
| Series | Current (I) | Voltage (V) |
| Parallel | Voltage (V) | Current (I) |

Series: $R_{eq} = R_1 + R_2 + ...$
Parallel: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$

⚡ **ECAT Exam Tip:** For power dissipation: $P = VI = I^2R = \frac{V^2}{R}$. In series, the element with highest resistance dissipates most power. In parallel, the element with lowest resistance dissipates most power.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding...

**EMF and Internal Resistance:**

EMF (electromotive force) is the energy provided per coulomb of charge:
$$\varepsilon = \frac{W}{q}$$

Real battery has internal resistance r. Terminal voltage:
$$V = \varepsilon - Ir$$

Power transferred to load: $P = VI = I(\varepsilon - Ir) = I\varepsilon - I^2r$

Maximum power transfer occurs when $R = r$ (load equals internal resistance).

**Kirchhoff's Laws:**

**Junction Law (KCL):** At any junction, sum of currents entering = sum leaving
$$\sum I_{in} = \sum I_{out}$$

**Loop Law (KVL):** Around any closed loop, sum of potential differences = 0
$$\sum V = 0$$

**Sign Convention:**
- Current entering a junction: positive
- EMF (positive terminal to negative): +ε
- EMF (negative terminal to positive): -ε
- Resistor in direction of current: -IR
- Resistor against direction of current: +IR

**Wheatstone Bridge:**

When $R_1/R_2 = R_3/R_4$, the bridge is balanced and no current flows through the middle resistor.

This principle is used in metre bridge and Carey Foster bridge experiments.

**Potentiometer:**

A potentiometer measures emf without drawing current (ideal voltmeter).

Principle: If uniform potential gradient exists along wire, potential difference is proportional to length.

$$V \propto l$$

For comparing emf of two cells: $\frac{\varepsilon_1}{\varepsilon_2} = \frac{l_1}{l_2}$

⚡ **ECAT Exam Tip:** In metre bridge problems, the unknown resistance $R = \frac{l_1}{l_2} \times S$ where S is the known resistance in the left gap.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Solving Complex Circuits:**

**Loop Analysis:**
1. Assign currents to each branch
2. Write KVL equations for each independent loop
3. Solve using Cramer's rule or matrix method

**Node Analysis:**
1. Assign node voltages
2. Write KCL equations at each node
3. Solve for node voltages

**Delta-Star Transformation:**

Sometimes circuits cannot be simplified directly. Use delta-star (π-T) transformation:

$$R_Y = \frac{R_\Delta R_C}{R_A + R_B + R_C}$$

$$R_A = \frac{R_{AB} \cdot R_{AC}}{R_{AB} + R_{BC} + R_{CA}}$$

(and cyclic permutations)

This is useful for finding equivalent resistance of complex networks.

**RC Circuits:**

**Charging:** $q = Q(1 - e^{-t/RC})$, $V = V_0(1 - e^{-t/RC})$
**Discharging:** $q = Qe^{-t/RC}$, $V = V_0e^{-t/RC}$

Time constant: $\tau = RC$ (time to reach 63% of final value)

**Thermoelectric Effects:**

When temperature differences cause electric currents or vice versa:

1. **Seebeck Effect:** Temperature difference → electric current (thermoelectric generator)
2. **Peltier Effect:** Electric current → temperature difference (refrigeration)
3. **Thomson Effect:** Temperature gradient along conductor with current → absorption/emission of heat

Thermoelectric power (Seebeck coefficient): $S = dV/dT$

**Cell Combinations:**

**Series:** n identical cells
- Net emf: $n\varepsilon$
- Net internal resistance: $nr$
- Maximum current: $I_{max} = \frac{n\varepsilon}{R + nr}$

**Parallel:** n identical cells
- Net emf: $\varepsilon$
- Net internal resistance: $r/n$
- Useful for providing larger current capacity

**Mixed grouping:** For maximum current through external resistance R:
$$I = \frac{n\varepsilon}{R + nr/n} \quad \text{when } m \text{ cells in series, } n \text{ in parallel}$$

Optimal arrangement: $mR = nr$ (external resistance equals total internal resistance per branch)

⚡ **ECAT 2024 Analysis:** Questions on potentiometer, metre bridge, and RC charging/discharging appeared in recent papers. For circuits with multiple loops, always check number of independent equations: for n loops, you need n independent KVL equations.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
