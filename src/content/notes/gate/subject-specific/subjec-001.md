---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-001
topicName: "Thermodynamics — Laws and Applications"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Thermodynamics — Laws and Applications

Thermodynamics forms the backbone of Thermal Engineering in GATE ME and XE papers. Questions from this topic appear almost every year, typically carrying 2–5 marks. A strong grip on the **laws of thermodynamics**, **energy quantities (enthalpy, entropy)**, and **cyclic processes** is essential for scoring well.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Zeroth Law of Thermodynamics**
If two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. This establishes the concept of **temperature** as a fundamental property.

**First Law of Thermodynamics (Energy Conservation)**
$$\Delta U = Q - W$$
Where $\Delta U$ = change in internal energy, $Q$ = heat added to system, $W$ = work done by system. **Energy is conserved** — it cannot be created or destroyed.

**Second Law of Thermodynamics**
- Clausius: Heat cannot spontaneously flow from a colder body to a hotter body.
- Kelvin-Planck: No heat engine can have 100% thermal efficiency.
- Introduces **entropy** ($S$) as a measure of disorder or irreversibility.

**Key Definitions**
| Term | Formula / Description |
|------|----------------------|
| **Enthalpy** $H$ | $H = U + PV$ |
| **Entropy** $S$ | $dS = \delta Q/T$ (for reversible) |
| **Specific Heat** $C_p - C_v = R$ | For ideal gases |

**Carnot Cycle**
- Most efficient ideal cycle operating between two temperatures
- Efficiency: $\eta_{Carnot} = 1 - T_L/T_H$
- All processes are internally reversible and isothermal/adiabatic

**Pv Diagrams**
- Area under the curve = boundary work done
- Isothermal: $PV = C$; Adiabatic: $PV^\gamma = C$

⚡ **Exam Tip:** Focus on identifying which law applies in a given scenario. Common mistake: confusing $Q$ and $W$ signs — remember $W$ is work done *by* the system.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## The Zeroth Law and Temperature

The Zeroth Law, formulated after the First and Second Laws (hence the name), defines thermal equilibrium and allows us to define temperature scales. Two systems in contact reach **thermal equilibrium** when no net heat transfer occurs between them — their temperatures are equal.

**Thermometric properties** used in thermometers: volume (mercury), pressure (gas), resistance (RTD), EMF (thermocouple).

## First Law of Thermodynamics

The First Law is a statement of **energy conservation**. For a closed system undergoing a cycle:

$$\oint \delta Q = \oint \delta W$$

For a non-cyclic process:

$$\Delta U = Q - W$$

**Sign Convention (GATE Standard):**
- Heat added TO system: $+Q$
- Work done BY system: $+W$
- Internal energy increases with heat addition, decreases with work output

### Important Relations for Ideal Gates

| Relation | Formula |
|----------|---------|
| $C_p - C_v = R$ | Mayer's relation |
| $C_p/C_v = \gamma$ | Adiabatic index |
| $U = m \cdot C_v \cdot T$ | Internal energy (ideal gas) |
| $H = m \cdot C_p \cdot T$ | Enthalpy (ideal gas) |

**Molar specific heats:**
- For monatomic gases: $C_v = 3R/2$, $C_p = 5R/2$
- For diatomic gases (at room temp): $C_v = 5R/2$, $C_p = 7R/2$

### Polytropic Process

For $PV^n = C$:
$$W = \frac{P_2V_2 - P_1V_1}{1-n} \quad (n \neq 1)$$

Special cases: $n=0$ (isobaric), $n=1$ (isothermal), $n=\gamma$ (adiabatic), $n=\infty$ (isochoric)

## Second Law of Thermodynamics

The Second Law addresses **directionality** of processes and introduces entropy.

### Clausius Inequality

$$\oint \frac{\delta Q}{T} \leq 0$$

For reversible cycles: equality holds. For irreversible cycles: the integral is negative.

### Entropy

$$dS = \left(\frac{\delta Q}{T}\right)_{rev}$$

**Entropy change for ideal gas:**
$$\Delta S = mC_v \ln\frac{T_2}{T_1} + mR \ln\frac{V_2}{V_1}$$

Entropy is a **property** — its change depends only on initial and final states, not the path.

### Carnot's Theorem

No heat engine operating between two reservoirs can be more efficient than a Carnot engine. The Carnot efficiency sets the maximum possible:

$$\eta_{max} = \eta_{Carnot} = 1 - \frac{T_L}{T_H}$$

⚡ **Common Mistake:** Students often forget that $T$ must be in **Kelvin** for Carnot efficiency calculations.

## Carnot Cycle — Step by Step

1. **Isothermal Expansion (1→2):** Heat $Q_H$ absorbed at $T_H$, work done, entropy increases
2. **Adiabatic Expansion (2→3):** No heat exchange, temperature drops from $T_H$ to $T_L$, work done
3. **Isothermal Compression (3→4):** Heat $Q_L$ rejected at $T_L$, work done on system
4. **Adiabatic Compression (4→1):** No heat exchange, temperature rises from $T_L$ to $T_H$

$$\eta = 1 - \frac{Q_L}{Q_H} = 1 - \frac{T_L}{T_H}$$

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## Detailed Analysis of Thermodynamic Processes

### Reversible vs Irreversible Processes

A **reversible process** can be reversed by an infinitesimal change, leaving no trace on surroundings. All real processes are **irreversible**. Causes of irreversibility: friction, unrestrained expansion, heat transfer through finite temperature difference, mixing.

**Entropy generation** $S_{gen} \geq 0$ quantifies irreversibility:
$$S_{gen} = \Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings}$$

For reversible processes: $S_{gen} = 0$. For irreversible: $S_{gen} > 0$.

## Tds Equations (Gibbs Equations)

$$T\,dS = dU + P\,dV \quad \text{(First Tds equation)}$$
$$T\,dS = dH - V\,dP \quad \text{(Second Tds equation)}$$

These are fundamental relations connecting entropy changes to other properties.

## Availability and Exergy

**Exergy** (available work) represents the maximum useful work obtainable when a system comes to equilibrium with surroundings:

For a closed system:
$$\psi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0)$$

Exergy destruction: $\psi_{destroyed} = T_0 S_{gen}$

## Pv Diagrams — Work and Area

| Process | Curve Shape | Work Expression |
|---------|-------------|----------------|
| Isochoric | Vertical line | $W = 0$ |
| Isobaric | Horizontal line | $W = P(V_2 - V_1)$ |
| Isothermal | Hyperbola $PV = C$ | $W = P_1V_1 \ln(V_2/V_1)$ |
| Adiabatic | Steeper curve $PV^\gamma = C$ | $W = \frac{P_1V_1 - P_2V_2}{\gamma - 1}$ |
| Polytropic | $PV^n = C$ | $W = \frac{P_2V_2 - P_1V_1}{1-n}$ |

**⚡ GATE Tip:** In isothermal processes for ideal gases, $\Delta U = 0$ (internal energy depends only on temperature). In adiabatic processes, $Q = 0$.

## Cp and Cv — Deeper Understanding

The difference $C_p - C_v = R$ holds for all ideal gases. For real gases, this difference varies with pressure and temperature.

**Degrees of freedom approach:**
$$C_v = \frac{f}{2}R, \quad C_p = \frac{f+2}{2}R$$

Where $f$ = degrees of freedom (3 for monatomic, 5 for diatomic, 6 for polyatomic at room temp).

## Example Problem

**GATE 2022 (ME) Style:**
Steam at 10 bar, 300°C undergoes an isothermal process to a pressure of 1 bar. Find the heat transferred and work done per kg.

*Solution approach:* For isothermal expansion of steam (treated as ideal gas approximation for low pressures), $T =$ constant.
$$W = RT \ln\frac{P_1}{P_2} = 0.461 \times 573 \times \ln(10) \approx 610 \text{ kJ/kg}$$
Since $\Delta U = 0$ (isothermal for ideal gas), $Q = W$.

**Key insight:** Steam tables may be needed for exact calculations — always check if the working medium is ideal gas or real steam.

---

## Previous Year GATE Pattern

| Year | Topic Focus | Marks |
|------|-------------|-------|
| 2023 | Entropy change in processes | 2 |
| 2022 | Carnot efficiency, Cp-Cv | 5 |
| 2021 | First law application, Pv work | 3 |
| 2020 | Entropy, irreversibility | 2 |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
