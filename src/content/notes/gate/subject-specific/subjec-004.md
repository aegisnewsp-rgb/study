---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-004
topicName: "Heat Transfer — Convection and Radiation"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Heat Transfer — Convection and Radiation

Convection and radiation are the two modes of heat transfer involving energy transport by motion or electromagnetic waves. In GATE, convection problems test your ability to apply **dimensional analysis** and **Nusselt number correlations**, while radiation requires understanding of **black body radiation laws** and **view factor algebra**. Together these topics contribute 4–7 marks annually.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Newton's Law of Cooling**
$$q = hA(T_s - T_\infty)$$

Where $h$ = convective heat transfer coefficient, $A$ = surface area, $T_s$ = surface temperature, $T_\infty$ = fluid temperature.

**Dimensional Analysis — Key Correlations:**

| Regime | Correlation | Application |
|--------|-------------|-------------|
| **Laminar** (internal) | $Nu_D = 0.664 Re_D^{1/3} Pr^{1/3}$ | Entry length |
| **Turbulent** (internal) | $Nu_D = 0.023 Re_D^{0.8} Pr^{0.4}$ | Fully developed |
| **Laminar** (external) | $Nu_L = 0.664 Re_L^{1/3} Pr^{1/3}$ | Flat plate |
| **Natural convection** | $Nu_L = 0.59 Ra_L^{1/4}$ (laminar) | Vertical plates |

**Black Body Radiation Laws:**
- **Stefan-Boltzmann:** $E = \sigma T^4$ (W/m²)
- **Wien's Law:** $\lambda_{max}T = 2898$ μm·K
- **Emissivity** $\varepsilon$: $E = \varepsilon \sigma T^4$

**Kirchhoff's Law:** $\varepsilon = \alpha$ (emissivity equals absorptivity at thermal equilibrium)

⚡ **Exam Tip:** Always convert $T$ to **Kelvin** in radiation calculations. The $T^4$ dependence makes Kelvin vs Celsius errors devastating.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## Forced Convection — External Flow

### Governing Parameters

- **Reynolds Number** $Re_L = \rho UL/\mu = UL/\nu$ — Ratio of inertial to viscous forces
- **Prandtl Number** $Pr = \mu C_p/k = \nu/\alpha$ — Ratio of momentum to thermal diffusivity
- **Nusselt Number** $Nu_L = hL/k$ — Ratio of convective to conductive heat transfer

### Flat Plate — Laminar and Turbulent

**Local Nusselt number:**
- Laminar ($Re_x < 5 \times 10^5$): $Nu_x = 0.332 Re_x^{1/2} Pr^{1/3}$
- Turbulent ($Re_x > 5 \times 10^5$): $Nu_x = 0.0296 Re_x^{0.8} Pr^{0.33}$

**Average Nusselt number (entire plate):**
$$Nu_L = (0.037 Re_L^{0.8} - 850) Pr^{1/3}$$

### Flat Plate — Combined Laminar-Turbulent

Use critical Reynolds $Re_c = 5 \times 10^5$:
$$Nu_L = 0.037(Re_L^{0.8} - 18700) Pr^{1/3} + 0.664 Re_L^{0.5} Pr^{1/3}$$

## Forced Convection — Internal Flow

### Entrance Effects

Thermal entrance length: $L_t \approx 0.05 Re_D Pr \cdot D$ (laminar)

Hydrodynamic entrance: $L_h \approx 0.05 Re_D \cdot D$

### Fully Developed Laminar Flow (Circular Pipe)

| Boundary Condition | $Nu_D$ |
|-------------------|--------|
| Constant wall temperature (CFT) | 3.66 |
| Constant heat flux (CHF) | 4.36 |

### Turbulent Flow in Pipes (Dittus-Boelter)

**Heating:** $Nu_D = 0.023 Re_D^{0.8} Pr^{0.4}$
**Cooling:** $Nu_D = 0.023 Re_D^{0.8} Pr^{0.3}$

**⚠️ Limitations:** $0.7 < Pr < 160$, $Re_D > 10,000$, $L/D > 10$.

### Sieder-Tate Correlation (More General)

$$Nu_D = 0.027 Re_D^{0.8} Pr^{1/3} \left(\frac{\mu}{\mu_s}\right)^{0.14}$$

Where $\mu_s$ = viscosity at surface temperature.

## Natural (Free) Convection

Driven by buoyancy: $\Delta \rho/\rho = \Delta T/T$ causes fluid motion.

**Rayleigh Number:** $Ra_L = Gr_L \cdot Pr = \frac{g\beta\Delta T L^3}{\nu^2} \cdot Pr$

**Grashof Number:** $Gr_L = \frac{g\beta\Delta T L^3}{\nu^2}$ — Ratio of buoyancy to viscous forces

| Geometry | $Nu_L$ Correlation |
|----------|-------------------|
| Vertical plate (laminar) | $Nu_L = 0.59 Ra_L^{1/4}$ for $10^4 < Ra < 10^9$ |
| Vertical plate (turbulent) | $Nu_L = 0.13 Ra_L^{1/3}$ for $10^9 < Ra < 10^{13}$ |
| Horizontal plate (heated top) | $Nu_L = 0.54 Ra_L^{1/4}$ for $10^4 < Ra < 10^7$ |
| Horizontal cylinder | $Nu_D = [0.6 + \frac{0.387 Ra_D^{1/6}}{[1+(0.559/Pr)^{9/16}]^{8/27}}]^2$ |

## Radiation — Black Body and Real Surfaces

### Black Body Characteristics

A **black body** absorbs all incident radiation and emits maximum energy at any temperature.

**Spectral distribution — Planck's Law:**
$$E_{\lambda,b}(\lambda,T) = \frac{2\pi hc^2}{\lambda^5} \cdot \frac{1}{e^{hc/(\lambda kT)} - 1}$$

This peaks at $\lambda_{max}T = 2898$ μm·K (**Wien's displacement law**).

### Stefan-Boltzmann Law

$$E_b = \sigma T^4$$

Where $\sigma = 5.67 \times 10^{-8}$ W/m²·K⁴

**Gray surface:** $E = \varepsilon \sigma T^4$

### Emissivity and Absorptivity

| Surface | $\varepsilon$ |
|---------|----------------|
| Black body | 1.0 |
| White polished | 0.02–0.05 |
| Black paint | 0.9–0.95 |
| Concrete | 0.85–0.95 |
| Human skin | 0.95 |

**Kirchhoff's Law of Radiation:**
$$\varepsilon_\lambda = \alpha_\lambda \quad \text{(at each wavelength and temperature)}$$

At thermal equilibrium, good emitters is good absorber.

### Radiation Heat Transfer Between Surfaces

**Between two black surfaces:**
$$q_{12} = A_1 F_{12} \sigma (T_1^4 - T_2^4)$$

Where $F_{12}$ = view factor from surface 1 to 2.

**For gray surfaces:**
$$q_{12} = \frac{\sigma(T_1^4 - T_2^4)}{\frac{1-\varepsilon_1}{\varepsilon_1 A_1} + \frac{1}{A_1 F_{12}} + \frac{1-\varepsilon_2}{\varepsilon_2 A_2}}$$

**⚡ Common Mistake:** For large enclosures ($A_2 \gg A_1$), radiative resistance simplifies to $(1-\varepsilon_1)/\varepsilon_1$.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## Thermal Boundary Layer — Detailed Theory

### Velocity Boundary Layer

- **δ:** Thickness where $u = 0.99U_\infty$
- **δ_c:** Thermal boundary layer thickness (where $T = T_\infty$ at wall)
- **Prandtl analogy:** When $Pr \approx 1$, momentum and thermal boundary layers are similar

### Energy Equation for Forced Convection

For steady, fully developed laminar flow:
$$\frac{d}{dx}\left[\frac{(T_s - T)}{T_s - T_m}\right] = \text{const}$$

**Colburn Analogy:** $St \cdot Pr^{2/3} = f/8$ where $St = h/(\rho u C_p)$ (Stanton number).

## Combined Convection and Radiation

In many engineering applications, both modes occur simultaneously:

$$q_{total} = h_{conv}A(T_s - T_\infty) + \varepsilon\sigma A(T_s^4 - T_{surr}^4)$$

**⚠️ Note:** $T_{surr}$ is the surrounding surface temperature, not ambient air temperature.

## View Factor Algebra

### View Factor Definitions

- $F_{12}$: Fraction of radiation leaving surface 1 that strikes surface 2
- Reciprocity: $A_1 F_{12} = A_2 F_{21}$
- Summation: $\sum_{j=1}^{N} F_{ij} = 1$

### View Factor for Special Cases

**Infinite parallel plates:**
$$F_{12} = 1 \quad \text{(large surfaces facing each other)}$$

**Small object in large enclosure:**
$$F_{12} \approx 1 \quad \text{(object "sees" mostly the enclosure)}$$

**Disk to coaxial parallel disk:**
$$F_{12} = \frac{1}{2}\left[1 - \frac{(D/2)^2 - (H/2)^2 + S^2}{S^2}\right]$$
Where $S = \sqrt{H^2 + (D/2)^2}$

## Radiation Shielding

For two parallel infinite plates with $n$ radiation shields of emissivity $\varepsilon_s$:
$$q_{shielded} = \frac{\sigma(T_1^4 - T_2^4)}{\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} + 2(n)\left(\frac{2}{\varepsilon_s} - 1\right)}$$

Each shield approximately halves the radiative heat transfer.

## Boiling and Condensation

### Nucleate Boiling (Pool Boiling — Rohsenow Correlation)

$$q = \mu_{lg} h_{fg} \left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} \left[\frac{C_{p,l}\Delta T}{C_s h_{fg} Pr_l^n}\right]^3$$

### Critical Heat Flux (CHF)

$$q_{CHF,max} \approx 0.15 h_{fg} \rho_v^{1/2} [\sigma g(\rho_l - \rho_v)]^{1/4}$$

### Condensation — Nusselt Theory

For film condensation on vertical plate:
$$h = 0.943 \left[\frac{\rho_l(\rho_l - \rho_v)g h_{fg}k_l^3}{\mu_l L(T_{sat} - T_s)}\right]^{1/4}$$

## Example Problem

**GATE 2023 (ME) Style:**
Air at 300 K flows over a flat plate at 350 K with $h = 50$ W/m²·K and $\varepsilon = 0.8$. Surface emissivity is 0.8. Find the total heat transfer per unit width for a plate of length 1 m.

*Solution approach:*
1. Convection: $q_{conv} = hA\Delta T = 50 \times 1 \times 50 = 2500$ W/m
2. Radiation: Treat as gray surface in large enclosure at $T_{surr} \approx T_\infty = 300$ K
   $q_{rad} = \varepsilon\sigma A(T_s^4 - T_{surr}^4)$
   $= 0.8 \times 5.67\times10^{-8} \times 1 \times (350^4 - 300^4)$
   $= 0.8 \times 5.67\times10^{-8} \times 1 \times (1.5\times10^{10} - 8.1\times10^9)$
   $\approx 305$ W/m
3. Total: $q_{total} \approx 2805$ W/m

**⚡ GATE Tip:** At moderate temperatures, convection dominates. Radiation becomes significant above ~500 K or when convection coefficient is very low (natural convection).

## Dimensionless Number Summary

| Number | Formula | Physical Meaning |
|--------|---------|------------------|
| Reynolds $Re$ | $\rho UL/\mu$ | Inertial / Viscous |
| Prandtl $Pr$ | $\mu C_p/k$ | Momentum / Thermal diffusivity |
| Nusselt $Nu$ | $hL/k$ | Convective / Conductive |
| Grashof $Gr$ | $g\beta\Delta TL^3/\nu^2$ | Buoyancy / Viscous |
| Rayleigh $Ra$ | $Gr \cdot Pr$ | Combined free convection |
| Stanton $St$ | $h/(\rho u C_p)$ | Heat transfer / Thermal capacity |
| Biot $Bi$ | $hL/k$ | Internal / External resistance |

---

## Previous Year GATE Pattern

| Year | Topic Focus | Marks |
|------|-------------|-------|
| 2023 | Convection correlation, radiation | 4 |
| 2022 | Natural convection, Nusselt number | 3 |
| 2021 | View factor, radiation shield | 2 |
| 2020 | Boiling, condensation | 3 |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
