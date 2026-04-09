---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-002
topicName: "Thermodynamic Cycles and Steam Turbines"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Thermodynamic Cycles and Steam Turbines

Power cycles are a staple of the GATE ME and XE papers. The **Rankine cycle** dominates steam turbine questions, while the **Brayton**, **Otto**, and **Diesel** cycles appear in gas turbine and IC engine contexts. Expect 3–8 marks from this topic annually, with cycle analysis and efficiency calculations being the most frequent question types.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Rankine Cycle — The Steam Power Cycle**

Four processes: Pump → Boiler → Turbine → Condenser → Pump (back to boiler)

| Component | Process | Energy Change |
|-----------|---------|---------------|
| Pump | Isentropic compression | Work input (small) |
| Boiler | Constant pressure heat addition | $q_{in} = h_3 - h_1$ |
| Turbine | Isentropic expansion | Work output $w_T = h_3 - h_4$ |
| Condenser | Constant pressure heat rejection | $q_{out} = h_4 - h_1$ |

$$\eta_{Rankine} = \frac{w_{net}}{q_{in}} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$$

**Key Modifications:**
- **Reheating:** Increases average temp of heat addition → higher efficiency
- **Regeneration:** Feedwater heating → reduces fuel requirement
- **Supercritical:** Boiler pressure above critical point (22.06 MPa) → no boiling transition

**Brayton Cycle (Gas Turbine)**
$$\eta = 1 - \frac{T_1}{T_2} = 1 - r_p^{(\gamma-1)/\gamma}$$
Where $r_p = P_2/P_1$ is pressure ratio.

**Otto Cycle (SI Engines):** $\eta = 1 - \frac{1}{r^{\gamma-1}}$ where $r = V_1/V_2$ (compression ratio)

**Diesel Cycle:** $\eta = 1 - \frac{1}{\gamma}\cdot\frac{r^\gamma - 1}{r - 1}\cdot\frac{1}{cutoff\text{-}ratio^{\gamma-1}}$

⚡ **Exam Tip:** Rankine cycle is almost always paired with steam tables in GATE — memorize how to read $h, s$ values.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## Rankine Cycle — Detailed Analysis

The Rankine cycle is the ideal cycle for **steam power plants**. Unlike Carnot, it uses turbines that expand steam isentropically (rather than isothermally, which is impractical).

### T-s Diagram Key Points

- **Pump work** is small relative to turbine work (visually, the pump leg is nearly vertical)
- **Boiler heat addition** appears as area under the curve between saturated liquid and superheated steam
- **Turbine work** is the drop across the turbine
- **Condenser rejection** is the horizontal line at low pressure

### Rankine vs Carnot Efficiency

| Rankine | Carnot |
|---------|--------|
| Turbine exhaust is wet steam | Requires isothermal expansion (impractical) |
| Pump work is small | Pump work would be large |
| Easier to construct | Ideal but not realizable |

The Carnot efficiency $\eta = 1 - T_L/T_H$ is a theoretical maximum. Rankine approaches it but cannot equal it because the turbine exhaust contains moisture (wet steam) rather than saturated vapor.

### Reheat Cycle

**Purpose:** Reduce turbine exit moisture and increase efficiency.

Two turbine stages with **reheating** between them:
- High-pressure turbine expands steam to an intermediate pressure
- Steam is reheated in the boiler (or reheater)
- Low-pressure turbine expands to condenser pressure

**Efficiency improvement:** Reheat increases average temperature of heat rejection → higher cycle efficiency, but with diminishing returns beyond 2–3 reheat stages.

### Regenerative Cycle

**Feedwater heating** uses extracted steam to preheat the feedwater, reducing the amount of heat required in the boiler.

**Open feedwater heater:** Extracted steam mixes directly with feedwater (isenthalpic mixing).

**Closed feedwater heater:** Extracted steam condenses on tube exterior, transferring heat without mixing.

**Efficiency impact:** Regeneration increases cycle efficiency by reducing the $q_{in}$ requirement, but reduces net work output since some steam is bled before doing full work in the turbine.

### Supercritical Rankine Cycle

Operating above the **critical pressure** (22.06 MPa, 374°C):
- No distinct phase transition (no boiling)
- Water directly goes from liquid to supercritical fluid
- Higher thermal efficiency (typically 40–45% for modern plants)
- Requires specialized materials due to high pressures and temperatures

## Brayton Cycle — Gas Turbines

The Brayton cycle consists of:
1. **Isentropic compression** (compressor)
2. **Constant pressure heat addition** (combustion chamber)
3. **Isentropic expansion** (turbine)
4. **Constant pressure heat rejection** (exhaust)

$$\eta_{Brayton} = 1 - \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma} = 1 - \frac{T_1}{T_2}$$

**Key observations:**
- Higher pressure ratio → higher efficiency, but also higher turbine inlet temperature
- $T_3$ (turbine inlet temp) is limited by material constraints (~1200–1500 K)
- Gas turbine requires **regeneration** for efficiency gains at low pressure ratios

### Deviation from Ideal Brayton

**Component efficiencies:**
- Compressor: $\eta_c = (T_{2s} - T_1)/(T_2 - T_1)$
- Turbine: $\eta_t = (T_3 - T_4)/(T_3 - T_{4s})$

Where $s$ denotes isentropic conditions.

## Otto and Diesel Cycles

Both are **air-standard cycles** for reciprocating engines.

### Otto Cycle (Spark Ignition)

- Constant volume heat addition
- **Compression ratio** $r = V_1/V_2$ determines efficiency
- $\eta_{Otto} = 1 - r^{-(\gamma-1)}$
- Higher compression ratio → higher efficiency (but limited by knocking in SI engines)

### Diesel Cycle (Compression Ignition)

- Constant pressure heat addition (idealized)
- **Cut-off ratio** $\rho = V_3/V_2$ affects efficiency
- $\eta_{Diesel} = 1 - \frac{1}{\gamma}\cdot\frac{r^\gamma - 1}{(\rho - 1)r^{\gamma-1}}$
- Diesel engines typically have higher thermal efficiency than Otto engines

**⚡ Common Mistake:** Students confuse compression ratio and cut-off ratio. In Diesel cycle, efficiency decreases with increasing cut-off ratio (more heat added at constant pressure).

| Cycle | Heat Addition | Heat Rejection | Typical Use |
|-------|--------------|-----------------|-------------|
| Otto | Constant V | Constant V | SI engines |
| Diesel | Constant P | Constant V | CI engines |
| Dual | V + P | Constant V | Modern engines |

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## Combined Cycles and Advanced Concepts

### Combined Gas-Vapor (Rankine + Brayton)

**Combined cycle power plant** uses Brayton cycle topping and Rankine cycle bottoming:
- Gas turbine exhaust heat generates steam in HRSG (Heat Recovery Steam Generator)
- Steam turbine produces additional power
- Combined efficiency: 50–60% (vs ~35% for standalone cycles)

This is the dominant technology in modern power generation.

### Binary Vapor Cycles (Mercury-Water)

Historical concept using mercury (boiling at higher temp) as working fluid in a topping cycle, with steam as bottoming cycle. Largely superseded by combined gas-vapor cycles.

## Rankine Cycle with Superheat, Reheat, and Regeneration

For a complete Rankine cycle with superheat, reheat, and feedwater heating:

**Steam properties needed from steam tables:**
- Saturated liquid line: $h_f$, $s_f$
- Saturated vapor line: $h_g$, $s_g$
- Superheated steam: interpolate in tables for given $P, T$

**Isentropic expansion in turbine:**
$$s_3 = s_4 \implies \text{Find } h_4 \text{ using steam tables}$$

If $s_3 > s_g$ at turbine exit pressure → mixture (use $x_4$ quality)
$$h_4 = h_f + x_4(h_g - h_f)$$

## Brayton Cycle — Regeneration Effects

With regeneration (heat exchanger using turbine exhaust to preheat compressed air):
- Reduces fuel consumption
- Effective at low pressure ratios
- Maximum benefit when $T_4 \approx T_2$ (turbine exit temp equals compressor exit temp)

**Optimum pressure ratio for maximum specific work (no regeneration):**
$$\left(\frac{P_2}{P_1}\right)_{opt} = \left(\frac{T_3}{T_1}\right)^{\gamma/[2(\gamma-1)]}$$

## Example Problem

**GATE 2021 (ME) Style:**
In a Rankine cycle, steam enters the turbine at 10 MPa, 500°C and condenses at 0.1 bar. Find the cycle efficiency and turbine exit quality.

*Solution approach:*
1. At turbine inlet (state 3): $h_3, s_3$ from superheated steam tables at 10 MPa, 500°C
2. Isentropic expansion: $s_3 = s_4$ at 0.1 bar → find $h_4$
   - If $s_4 < s_g$ at 0.1 bar → quality $x_4 = (s_4 - s_f)/s_{fg}$
   - $h_4 = h_f + x_4 \cdot h_{fg}$
3. Pump work: $h_2 - h_1 \approx v_f \Delta P$ (approximately, for incompressible liquid)
4. Efficiency: $\eta = [(h_3 - h_4) - (h_2 - h_1)]/(h_3 - h_2)$

**⚡ GATE Tip:** Always check if turbine exit quality is acceptable (should be > ~85-90% for most designs). Low quality causes **cavitation** in the condenser.

## Summary Table — Cycle Efficiencies

| Cycle | Maximum Efficiency | Limiting Factor |
|-------|-------------------|----------------|
| Carnot | $1 - T_L/T_H$ | Requires isothermal expansion |
| Rankine | Lower than Carnot | Moisture in turbine exhaust |
| Brayton | $1 - T_1/T_2$ | Material temp limit $T_3$ |
| Otto | $1 - r^{-(\gamma-1)}$ | Knocking, compression ratio |
| Diesel | Lower than Otto | Cut-off ratio |

---

## Previous Year GATE Pattern

| Year | Topic Focus | Marks |
|------|-------------|-------|
| 2023 | Rankine with reheat, efficiency | 5 |
| 2022 | Brayton cycle, pressure ratio | 2 |
| 2021 | Otto vs Diesel efficiency | 3 |
| 2020 | Combined cycle | 2 |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
