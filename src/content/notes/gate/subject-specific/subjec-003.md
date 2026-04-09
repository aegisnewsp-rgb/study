---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-003
topicName: "Heat Transfer — Conduction"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Heat Transfer — Conduction

Conduction is the primary mode of heat transfer in solids and stationary fluids. In GATE, this topic tests your understanding of **Fourier's law**, **thermal resistance networks**, **transient conduction**, and the **Biot/Fourier numbers**. Typically 3–6 marks per year appear from this topic, often combined with convection in compound heat transfer problems.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Fourier's Law of Conduction**
$$q = -k \frac{dT}{dx}$$

Where $q$ = heat flux (W/m²), $k$ = thermal conductivity, $dT/dx$ = temperature gradient (negative because heat flows down gradient).

**Thermal Conductivity $k$:**
- Metals: 10–400 W/m·K (copper ~385, steel ~45)
- Non-metals: 0.02–10 W/m·K (insulation ~0.02–0.05)
- Gases: 0.01–0.1 W/m·K

**Plane Wall Conduction (Steady State)**
$$q = \frac{\Delta T}{R_{th}} = \frac{T_1 - T_2}{L/kA}$$

Where $R_{th} = L/(kA)$ is thermal resistance.

**Thermal Resistance Network:**
- **Series:** $R_{eq} = R_1 + R_2 + R_3 + \ldots$
- **Parallel:** $1/R_{eq} = 1/R_1 + 1/R_2 + 1/R_3 + \ldots$

**Biot Number:** $Bi = \frac{hL_c}{k}$ — Ratio of internal conduction resistance to external convection resistance.
- $Bi < 0.1$: Temperature inside body is nearly uniform → **Lumped capacitance** valid

**Fourier Number:** $Fo = \frac{\alpha t}{L_c^2}$ — Dimensionless time; ratio of heat conduction rate to heat storage rate.

⚡ **Exam Tip:** For unsteady problems, always check $Bi < 0.1$ before using lumped capacitance. If $Bi > 0.1$, use Heisler charts or analytical solutions.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## Fourier's Law — The Conduction Equation

Heat conduction occurs due to lattice vibration (phonons) and free electron transport in solids. Fourier's law is the constitutive equation:

$$\vec{q} = -k \nabla T$$

For one-dimensional steady conduction:
$$\frac{d}{dx}\left(k \frac{dT}{dx}\right) = 0$$

When $k$ is constant: $\frac{d^2T}{dx^2} = 0$ → linear temperature profile.

### Thermal Conductivity — Physical Interpretation

**Metals:** High $k$ due to free electrons. Copper (385 W/m·K) > Aluminum (237) > Steel (45).

**Insulators:** Low $k$ due to air pockets and porous structure. Glass wool, rock wool.

**Effect of temperature:** $k$ may increase (metals) or decrease (insulators, gases) with temperature. Use mean temperature $k_m = (k_1 + k_2)/2$ for linear variation.

## Steady State Conduction — Extended Surfaces (Fins)

Fins increase heat transfer surface area. **Fin equation** (long fin with insulated tip):
$$\frac{d^2T}{dx^2} - m^2(T - T_\infty) = 0$$
Where $m = \sqrt{hP/(kA_c)}$

**Fin heat transfer:**
$$q_{fin} = \sqrt{hPkA_c} \cdot (T_0 - T_\infty) \cdot \tanh(mL)$$

**Fin efficiency:** $\eta_{fin} = \frac{q_{fin}}{q_{fin,ideal}} = \frac{\tanh(mL)}{mL}$

Where $q_{fin,ideal} = hA_{fin}(T_0 - T_\infty)$, $A_{fin} = PL$ (surface area of fin).

### Fin Effectiveness

$$\epsilon_{fin} = \frac{q_{with\,fin}}{q_{without\,fin}} = \frac{\sqrt{hPkA_c} \cdot \tanh(mL)}{hA_c}$$

**Use fins when:** $\epsilon > 2$ or when convection coefficient $h$ is small (natural convection, gases).

## Cylindrical Geometry — Hollow Cylinder

For a hollow cylinder with inner radius $r_i$, outer radius $r_o$, and length $L$:
$$q = \frac{2\pi kL(T_i - T_o)}{\ln(r_o/r_i)}$$

**Critical insulation radius:** $r_{crit} = k_{insulation}/h$ — adding insulation beyond this radius *reduces* heat transfer (important for pipe insulation).

## Spherical Geometry — Hollow Sphere

$$q = \frac{4\pi k(T_i - T_o)}{(1/r_i) - (1/r_o)}$$

## Transient Conduction

### Lumped Capacitance Method ($Bi < 0.1$)

When internal conduction resistance is negligible (small $Bi$), temperature is spatially uniform:
$$\frac{T - T_\infty}{T_i - T_\infty} = e^{-(hA/\rho Vc) \cdot t}$$

**Time constant:** $\tau = \rho VC/(hA) = 1/(hA/\rho VC)$

### Semi-Infinite Solid

For sudden exposure to convection:
$$T(x,t) - T_\infty = (T_i - T_\infty) \cdot \text{erf}\left(\frac{x}{2\sqrt{\alpha t}}\right)$$

Where $\alpha = k/(\rho c)$ is thermal diffusivity.

### Heisler Charts — Finite Bodies

For $Bi > 0.1$, use Heisler/Grober charts:
1. Find Fourier number $Fo = \alpha t/L_c^2$
2. Find Biot numbers for each dimension
3. Read dimensionless temperature $\theta^* = (T - T_\infty)/(T_i - T_\infty)$

**⚡ Common Mistake:** Confusing $L_c$ (characteristic length) with actual thickness. For a slab: $L_c = V/A = L/2$ for one-sided convection.

## Thermal Resistance in Composite Walls

For a composite wall with $n$ layers:

$$R_{total} = \frac{1}{h_1A} + \sum_{i=1}^{n}\frac{L_i}{k_iA} + \frac{1}{h_2A}$$

$$q = \frac{\Delta T_{overall}}{R_{total}}$$

⚡ **GATE Tip:** For cylindrical pipes, resistance is $\ln(r_o/r_i)/(2\pi kL)$ — don't forget the $\ln$ term!

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## Exact Solution — Transient Conduction

### Transient Heat Equation

For one-dimensional conduction with constant properties:
$$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$$

**Boundary conditions:**
- Insulated surface: $\partial T/\partial x = 0$ at $x=0$
- Convection: $-k \partial T/\partial x = h(T - T_\infty)$ at $x=L$

### Separation of Variables Solution

For a slab initially at $T_i$, suddenly exposed to convection at $x=0$ with insulated $x=L$:
$$T(x,t) - T_\infty = \sum_{n=1}^{\infty} A_n \cos(\lambda_n x) e^{-\alpha \lambda_n^2 t}$$

Where eigenvalues $\lambda_n$ satisfy $\tan(\lambda_n L) = Bi/\lambda_n L$.

### Infinite and Semi-Infinite Bodies

**Infinite solid:** Only valid for times such that thermal penetration hasn't reached boundaries.
$$T - T_\infty = (T_i - T_\infty) \cdot \text{erf}\left(\frac{x}{2\sqrt{\alpha t}}\right)$$

**Semi-infinite solid with convection:**
$$\frac{T - T_\infty}{T_i - T_\infty} = 1 - \text{erf}\left(\frac{x}{2\sqrt{\alpha t}}\right) + \frac{h\sqrt{\alpha t}}{k} \cdot \text{ierfc}\left(\frac{x}{2\sqrt{\alpha t}}\right)$$

## Contact Resistance

When two solids are joined, imperfect contact creates a temperature discontinuity:
$$R_{contact} = \frac{\Delta T}{q}$$

**Reducing contact resistance:** Increase contact pressure, use thermal interface materials (thermal grease, indium foil).

## Thermal Diffusivity — Physical Meaning

$$\alpha = \frac{k}{\rho c}$$

| Material | $\alpha$ (m²/s) |
|----------|----------------|
| Copper | $1.1 \times 10^{-4}$ |
| Aluminum | $9.7 \times 10^{-5}$ |
| Steel | $1.2 \times 10^{-5}$ |
| Air | $2.2 \times 10^{-5}$ |
| Water | $1.4 \times 10^{-7}$ |

High $\alpha$ → heat spreads quickly (copper). Low $\alpha$ → heat stays localized (water is slow).

## Dimensionless Numbers — Summary

| Number | Formula | Physical Significance |
|--------|---------|----------------------|
| **Biot** $Bi$ | $hL_c/k$ | Internal conduction / External convection resistance |
| **Fourier** $Fo$ | $\alpha t/L_c^2$ | Dimensionless time |
| **Fourier-Biot** | $Fo \cdot Bi = ht/k\rho c$ | Combined parameter |
| **Thermal resistance** | $R_{th} = \Delta T/q$ | Resistance to heat flow |

## Example Problem

**GATE 2022 (ME) Style:**
A large steel plate (k = 45 W/m·K, ρ = 7800 kg/m³, c = 500 J/kg·K) of thickness 10 cm, initially at 200°C, is suddenly cooled by convection with air at 30°C (h = 100 W/m²·K). Find the time for the center to reach 100°C.

*Solution approach:*
1. $L_c = V/A = 0.05$ m (half-thickness)
2. $Bi = hL_c/k = 100 \times 0.05/45 = 0.111$ → borderline, use Heisler or lumped
3. Since $Bi \approx 0.1$, use lumped: $\theta/\theta_i = e^{-hAt/\rho Vc}$
4. $t = -\ln(70/170) \times \rho Vc/(hA) = 0.88 \times 7800 \times 0.05 \times 500 / 100 \approx 1715$ s ≈ 28.5 minutes

**Check:** $Bi = 0.111 > 0.1$ — using exact Heisler chart would give slightly different value. For GATE, state your assumption.

## Fins — Extended Analysis

### Fin with Convective Tip (not insulated)

$$q_{fin} = \sqrt{hPkA_c} \cdot (T_0 - T_\infty) \cdot \frac{\sinh(mL) + (h/mk)\cosh(mL)}{\cosh(mL) + (h/mk)\sinh(mL)}$$

### Fin Array Effectiveness

$$q_{total} = q_{unfinned} + N \cdot q_{fin} \cdot \eta_{fin}$$

Where $N$ = number of fins, $\eta_{fin}$ = fin efficiency.

---

## Previous Year GATE Pattern

| Year | Topic Focus | Marks |
|------|-------------|-------|
| 2023 | Thermal resistance, composite wall | 3 |
| 2022 | Transient conduction, Bi number | 5 |
| 2021 | Fin efficiency, extended surfaces | 2 |
| 2020 | Cylindrical conduction, critical radius | 3 |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
