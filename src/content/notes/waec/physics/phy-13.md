---
exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-13
topicName: Electric Current and Circuit Analysis
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.636265"
diagramPrompt: "Clean educational diagram showing Electric Current and Circuit Analysis with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


---

# Electric Current and Circuit Analysis

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WAEC exam.

**Electric Current** is the flow of electric charge, measured in Amperes (A). One ampere = 1 coulomb of charge passing a point per second: $I = Q/t$.

**Key Quantities:**
- **Current (I)**: Rate of charge flow, unit: Ampere (A)
- **Potential Difference (V)**: Work done per unit charge, unit: Volt (V)
- **Resistance (R)**: Opposition to current flow, unit: Ohm (Ω)
- **Resistivity (ρ)**: Material property, unit: Ω·m

**Ohm's Law:** $V = IR$

**Series Circuit Rules:**
- Current is the same through all components: $I = I_1 = I_2 = I_3$
- Total voltage = sum of individual voltages: $V = V_1 + V_2 + V_3$
- Total resistance = sum of all resistances: $R_T = R_1 + R_2 + R_3$

**Parallel Circuit Rules:**
- Voltage is the same across all branches: $V = V_1 = V_2 = V_3$
- Total current = sum of branch currents: $I = I_1 + I_2 + I_3$
- Total resistance: $\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$

⚡ **WAEC Tip**: In WAEC questions, always identify whether components are in series or parallel first. For complex circuits, simplify step by step — start with parallel branches, convert to equivalent resistance, then solve as series.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Electric Power and Energy:**

$$P = IV = I^2R = \frac{V^2}{R}$$

$$E = Pt = IVt$$

Where:
- $P$ = Power (Watts, W)
- $E$ = Energy (Joules, J)
- $t$ = Time (seconds)

**Worked Example:**
A 100W electric bulb operates at 220V. Calculate:
1. The current drawn
2. The resistance of the bulb

Solution:
1. $I = P/V = 100/220 = 0.455\,\text{A}$
2. $R = V/I = 220/0.455 = 484\,\Omega$

**EMF and Internal Resistance:**

A real voltage source has internal resistance $r$:
- $E = V + Ir$ (where $E$ is EMF)
- Terminal voltage $V = E - Ir$
- When delivering current: terminal voltage < EMF
- At short circuit: $V = 0$, current $= E/r$

**Worked Example:**
A battery with EMF 12V and internal resistance 0.5Ω is connected to a 5Ω resistor. Find:
- Total resistance = $5 + 0.5 = 5.5\,\Omega$
- Current $I = E/R_T = 12/5.5 = 2.18\,\text{A}$
- Terminal voltage $V = E - Ir = 12 - (2.18 \times 0.5) = 10.91\,\text{V}$

⚡ **Common Mistake**: Students forget that the total resistance in a parallel circuit formula $\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2}$ gives the reciprocal. The equivalent resistance is always less than the smallest individual resistance.

**Kirchhoff's Laws:**

**First Law (Current/Junction Law):** Sum of currents entering a junction = Sum of currents leaving the junction. This is conservation of charge.

**Second Law (Voltage Law):** In any closed loop, sum of EMF = sum of potential drops ($IR$). This is conservation of energy.

**Solving Circuits with Kirchhoff:**

1. Assign currents to each branch ($I_1, I_2, I_3$)
2. Apply junction law at each junction
3. Apply loop law for each independent loop
4. Solve the simultaneous equations

**Resistivity Formula:**
$$R = \frac{\rho L}{A}$$

Where:
- $\rho$ = resistivity (Ω·m)
- $L$ = length of conductor (m)
- $A$ = cross-sectional area (m²)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Complex Circuit Analysis**

**Thevenin's Theorem:**
Any linear circuit can be replaced by an equivalent circuit with:
- A voltage source $V_{th}$ (open-circuit voltage between terminals)
- A series resistor $R_{th}$

To find $R_{th}$: Short all voltage sources, open circuit current sources, then find resistance between terminals.

**Norton's Theorem:**
Equivalent to Thevenin but with:
- A current source $I_n$ (short-circuit current)
- A parallel resistor $R_n (= R_{th})$

**Maximum Power Transfer:**
Maximum power is delivered to a load when load resistance $R_L = R_{th}$ (or $R_n$ for Norton).
Maximum power $P_{max} = \frac{V_{th}^2}{4R_{th}}$

**Wheatstone Bridge:**
For balanced bridge: $\frac{R_1}{R_2} = \frac{R_3}{R_4}$
- No current flows through the galvanometer when balanced
- Can be used to measure unknown resistance

**Potentiometer:**
- Measures EMF without drawing current
- Uses a uniform wire with sliding contact
- Comparison method: $E_1/E_2 = L_1/L_2$
- Internal resistance of cell: $r = (\frac{E}{V} - 1)R$, where $E$ is EMF, $V$ is terminal voltage, $R$ is external resistance

**Capacitors in Circuits:**

For capacitor charging:
$$q = Q(1 - e^{-t/RC})$$
$$V = V_0(1 - e^{-t/RC})$$

Time constant $\tau = RC$ (time to reach 63% of final value)

For discharging:
$$q = Qe^{-t/RC}$$

**Household Wiring (Nigeria/WAEC Context):**

In Nigerian homes:
- Mains voltage = 230V AC at 50Hz
- Ring circuit wiring for power outlets
- Fuses/circuit breakers protect against overcurrent
- Live (brown), Neutral (blue), Earth (green/yellow)
- Fuse rating should be slightly above normal operating current

⚡ **WAEC Previous Year Pattern:**
Questions frequently ask:
- Calculate current, voltage, resistance in series/parallel circuits
- Find effective resistance of combination
- Power consumption calculations
- EMF and internal resistance problems
- Circuit diagram interpretation

**Dimensional Analysis:**

| Quantity | Symbol | Unit | Dimension |
|----------|--------|------|-----------|
| Current | I | Ampere (A) | A |
| Voltage | V | Volt (V) | kg·m²/(A·s³) |
| Resistance | R | Ohm (Ω) | kg·m²/(A²·s³) |
| Power | P | Watt (W) | kg·m²/s³ |

⚡ **Exam Strategy**: Draw the circuit diagram from the description. Label all known values. For parallel circuits, remember total resistance is always less than the smallest branch resistance. For series, voltage drops add up. Use Ohm's law as your primary equation and substitute systematically.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
