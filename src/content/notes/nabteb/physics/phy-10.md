---
exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-10
topicName: Electric Current and Circuits
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.561582"
diagramPrompt: "Clean educational diagram showing Electric Current and Circuits with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"
---

# Electric Current and Circuits

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary of electric current and circuits for NABTEB physics.

**Electric current** is the flow of electric charge, typically through a conductor. It is measured in **Amperes (A)**.

**Key Definitions:**
- **Electric current ($I$):** Rate of flow of charge: $I = \frac{Q}{t}$ (1 A = 1 C/s)
- **Potential difference ($V$):** Work done per unit charge: $V = \frac{W}{Q}$ (1 V = 1 J/C)
- **Resistance ($R$):** Opposition to current flow: $R = \frac{V}{I}$ (1 Ω = 1 V/A)
- **Electromotive force (emf):** Energy source providing voltage (e.g., battery): $\varepsilon = \frac{W}{Q}$

**Ohm's Law:**
$$V = IR$$

This states that the potential difference across a conductor is directly proportional to the current flowing through it, provided temperature remains constant.

**Resistivity:**
$$\rho = \frac{RA}{l}$$

Where $A$ is cross-sectional area, $l$ is length. Unit: Ω·m.
Factors affecting resistance: length ($R \propto l$), cross-section ($R \propto 1/A$), material (resistivity $\rho$), temperature ($R$ increases with temperature for metals).

**Power Dissipated:**
$$P = IV = I^2R = \frac{V^2}{R}$$

Unit: Watt (W). Energy: $E = Pt$.

**Series and Parallel Circuits:**

| | Series | Parallel |
|--|--------|---------|
| Current | Same through all components | Divides at junctions |
| Voltage | Divides across components | Same across all components |
| Equivalent Resistance | $R_s = R_1 + R_2 + R_3$ | $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots$ |

⚡ **NABTEB Exam Tip:** In parallel circuits, current divides. The larger resistance gets the smaller current share. Total resistance in parallel is ALWAYS less than the smallest individual resistance.

---

### 🟡 Standard — Regular Study (2d–2mo)

> For NABTEB students who want thorough understanding of electric circuits.

**Series Circuits:**

In a series circuit, all components are connected end-to-end, forming a single path for current.

**Characteristics:**
- Current is the same through all components: $I = I_1 = I_2 = I_3$
- Voltage divides: $V = V_1 + V_2 + V_3$
- Total resistance: $R_T = R_1 + R_2 + R_3$
- If one component fails (opens), the entire circuit stops working

**Voltage Drop Across Each Resistor:**
$$V_1 = IR_1, \quad V_2 = IR_2, \quad V_3 = IR_3$$

**Parallel Circuits:**

In a parallel circuit, components are connected across the same two points, providing multiple paths for current.

**Characteristics:**
- Voltage is the same across all branches: $V = V_1 = V_2 = V_3$
- Current divides: $I = I_1 + I_2 + I_3$
- Total resistance: $\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$
- If one branch opens, other branches continue working

**Current Division in Two Parallel Resistors:**
$$I_1 = I \times \frac{R_2}{R_1 + R_2}, \quad I_2 = I \times \frac{R_1}{R_1 + R_2}$$

(More current flows through the smaller resistance)

**EMF and Internal Resistance:**

A real battery has internal resistance ($r$), which causes the terminal voltage to drop when current flows.

$$\varepsilon = V + Ir$$

Where $\varepsilon$ = emf, $V$ = terminal voltage, $I$ = current, $r$ = internal resistance.

**Maximum Power Transfer:**
Power delivered to external load is maximum when $R_{\text{load}} = r$.

$$P_{\max} = \frac{\varepsilon^2}{4r}$$

**Circuit Analysis — Solving Complex Circuits:**

**Step 1:** Identify series and parallel combinations; simplify step by step
**Step 2:** Calculate equivalent resistances
**Step 3:** Use Ohm's law to find total current
**Step 4:** Work backwards to find currents and voltages in each branch

**Kirchhoff's Laws:**

**Kirchhoff's Current Law (KCL):** At any junction, the sum of currents entering equals the sum leaving.
$$\sum I_{\text{in}} = \sum I_{\text{out}}$$

**Kirchhoff's Voltage Law (KVL):** Around any closed loop, the sum of emfs equals the sum of potential drops.
$$\sum \varepsilon = \sum IR$$

**Heating Effect of Current:**

When current flows through a resistor, electrical energy is converted to heat energy.

**Joule's Law:**
$$H = I^2Rt$$

Where $H$ = heat energy (in Joules, if $I$ is in A, $R$ in Ω, $t$ in s).

**Applications:**
- Electric kettle, iron, heater: use heating effect of current
- Fuse wires: melt when current exceeds safe limit, protecting circuits
- Filament bulbs: thin wire glows white-hot, producing light

**⚡ NABTEB Exam Tip:** For circuits with both series and parallel components, reduce the circuit step by step. Start from the innermost parallel branch, find its equivalent resistance, then combine with series resistors.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage of electric current and circuits for NABTEB students.

**Detailed Derivation — Series and Parallel Resistors:**

**Series Derivation:**
Current $I$ flows through each resistor in succession.
Voltage across each: $V_1 = IR_1$, $V_2 = IR_2$, $V_3 = IR_3$
Total voltage: $V = V_1 + V_2 + V_3 = I(R_1 + R_2 + R_3)$
Total resistance: $R_T = \frac{V}{I} = R_1 + R_2 + R_3$

**Parallel Derivation:**
Each resistor is connected directly across the voltage source.
Current through each: $I_1 = \frac{V}{R_1}$, $I_2 = \frac{V}{R_2}$, $I_3 = \frac{V}{R_3}$
Total current: $I = I_1 + I_2 + I_3 = V\left(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}\right)$
Total resistance: $\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$

**Special Case — Two Parallel Resistors:**
$$R_T = \frac{R_1 R_2}{R_1 + R_2}$$

**Potential Divider:**

A potential divider uses series resistors to obtain a fraction of the supply voltage:
$$V_1 = V \times \frac{R_1}{R_1 + R_2}$$

**Applications:**
- Volume controls in audio equipment
- Setting reference voltages in circuits
- Biasing transistors

**The Wheatstone Bridge:**

A bridge circuit used to measure unknown resistance:
- When balanced: $\frac{R_1}{R_2} = \frac{R_3}{R_4}$
- Unknown resistance: $R_x = R_3 \times \frac{R_2}{R_1}$ (for the configuration where $R_1$ and $R_2$ are the ratio arms)

When NOT balanced, the bridge can be simplified using Kirchhoff's laws.

**Temperature Dependence of Resistance:**

For metals: $R_T = R_0(1 + \alpha \Delta T)$
Where $\alpha$ = temperature coefficient of resistance (K⁻¹)

For semiconductors/thermistors: resistance DECREASES with increasing temperature (negative temperature coefficient).

For superconductors: resistance drops to zero below critical temperature.

**Conductors, Insulators, and Semiconductors:**

| Material | Resistivity | Behaviour |
|----------|-------------|-----------|
| Conductor | ~10⁻⁸ to 10⁻⁶ Ω·m | Low resistance |
| Insulator | ~10¹⁰ to 10²⁰ Ω·m | Very high resistance |
| Semiconductor | ~10⁻⁵ to 10⁶ Ω·m | Conductivity between conductor and insulator |

**EMF vs Terminal Voltage:**

For a battery with emf $\varepsilon$ and internal resistance $r$, supplying current $I$ to external resistance $R$:
- Internal potential drop: $Ir$
- Terminal voltage: $V = \varepsilon - Ir$
- When $I = 0$ (open circuit): $V = \varepsilon$ (maximum terminal voltage)
- When $r \gg R$ (short circuit approximation): $V \approx 0$

**Measuring Instruments:**

**Ammeter:**
- Connected IN SERIES with the circuit
- Should have very low resistance (ideal = 0 Ω) to minimise circuit disturbance
- Converts to show current in Amperes

**Voltmeter:**
- Connected IN PARALLEL across the component
- Should have very high resistance (ideal = ∞ Ω) to draw minimal current
- Converts to show potential difference in Volts

**Potentiometer:**

A device for measuring potential difference without drawing current (since it is a null method):
- Works on principle of uniform potential gradient along a uniform wire
- Unknown emf compared with standard emf
- More accurate than voltmeter for measuring emf

**⚡ NABTEB Quick Reference:**
- $I = Q/t$ (current = charge/time)
- $V = IR$ (Ohm's Law)
- $P = IV = I^2R = V^2/R$ (power)
- $H = I^2Rt$ (Joule's Law — heating)
- Series: $R_T = R_1 + R_2 + R_3$; $V$ divides; $I$ same
- Parallel: $1/R_T = 1/R_1 + 1/R_2 + 1/R_3$; $I$ divides; $V$ same
- $\varepsilon = V + Ir$ (battery with internal resistance)
- $R = \rho l/A$ (resistivity)
- $R_T = R_0(1 + \alpha \Delta T)$ (temperature dependence)
