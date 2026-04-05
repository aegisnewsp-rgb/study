---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-12
topicName: Electric Current and Circuits
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.714561"
diagramPrompt: Clean educational diagram showing Electric Current and Circuits with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration



---
# Electric Current and Circuits

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electric Current and Circuits** — Key Facts for JAMB

**Current and Resistance:**
Electric current $I = Q/t$ (coulombs per second = amperes). For a conductor: $I = nAev_d$ where $n$ = charge carriers per unit volume, $A$ = cross-sectional area, $v_d$ = drift velocity, $e = 1.6 \times 10^{-19}$ C.

Ohm's Law: $V = IR$. Resistance: $R = \rho L/A$ where $\rho$ = resistivity (Ω·m). For metals, $\rho$ increases with temperature: $\rho_T = \rho_0[1 + \alpha(T - T_0)]$. For semiconductors, $\rho$ decreases with temperature.

**Series and Parallel:**
- Series: $R_{eq} = R_1 + R_2 + ...$; same current through each resistor; $V$ splits: $V = V_1 + V_2$
- Parallel: $1/R_{eq} = 1/R_1 + 1/R_2 + ...$; same voltage across each; $I$ splits: $I = I_1 + I_2$
- For two resistors in parallel: $R_{eq} = R_1 R_2/(R_1 + R_2)$

⚡ **Exam tip:** When identical resistors $R$ are connected $n$ in series: $R_{eq} = nR$. In parallel: $R_{eq} = R/n$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Electric Current and Circuits** — JAMB UTME Study Guide

**EMF and Internal Resistance:**
For a real battery with emf $\varepsilon$ and internal resistance $r$, terminal voltage $V = \varepsilon - Ir$. When current flows through internal resistance, energy is lost as heat. Maximum power transferred to external load $R$ occurs when $R = r$, giving $P_{max} = \varepsilon^2/(4r)$.

**Kirchhoff's Laws:**
- **Junction law:** At any junction, $\sum I_{in} = \sum I_{out}$ (charge conservation)
- **Loop law:** Around any closed loop, $\sum \varepsilon = \sum IR$ (energy conservation)

**Wheatstone Bridge:**
Balanced when $R_1/R_2 = R_3/R_4$. Then no current flows through the bridge resistor. Used for precise resistance measurement. Metre bridge: $R_1/R_2 = l_1/l_2$ where $l_1 + l_2 = 100$ cm (wire length).

**Potentiometer:**
Measures emf without drawing current (ideal voltmeter). When a steady current flows through the potentiometer wire, the potential drop per unit length is constant: $k = V_{AB}/L$. Unknown emf $\varepsilon_x$ is balanced at length $l_x$ where $\varepsilon_x = kl_x$. Compare two cells: $\varepsilon_1/\varepsilon_2 = l_1/l_2$.

**Capacitors:**
Capacitance $C = Q/V = \varepsilon_0 A/d$ (parallel plate). Energy stored: $U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$. For series combination of $n$ identical capacitors $C_0$: $C_{eq} = C_0/n$. For parallel: $C_{eq} = nC_0$.

RC time constant: $\tau = RC$. Charging: $V = V_0(1 - e^{-t/RC})$. Discharging: $V = V_0 e^{-t/RC}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Electric Current and Circuits** — Comprehensive Physics Notes

**Drift Velocity Derivation:**
In a conductor, free electrons move randomly at thermal velocity $v_{th} ≈ 10^6$ m/s. An applied electric field $E$ causes a small net drift: $v_d = \mu E$ where $\mu$ = electron mobility (m²/V·s). For copper at room temperature: $\mu ≈ 4.5 \times 10^{-3}$ m²/V·s. For $E = 0.1$ V/m (in a typical circuit), $v_d ≈ 4.5 \times 10^{-4}$ m/s = 0.45 mm/s. Despite the tiny drift velocity, current appears instantaneous because the electric field propagates at close to $c$.

Current density: $J = I/A = n e v_d$ (vector: $\vec{J} = n e \vec{v_d}$). Ohm's law in vector form: $\vec{J} = \sigma \vec{E}$ where $\sigma = 1/\rho$ is conductivity.

**Temperature Dependence of Resistance:**
For metals: $R_T = R_0[1 + \alpha(T - T_0)]$. For copper, $\alpha ≈ 0.00393$ /°C. For tungsten (filament bulbs): $\alpha ≈ 0.0045$/°C. At high temperatures, $R$ becomes approximately linear with $T$.

For semiconductors: $R = R_0 e^{E_g/(2kT)}$ where $E_g$ = band gap (~0.7 eV for silicon, ~1.1 eV). As $T$ increases, carrier concentration $n$ increases exponentially — the dominant effect, so resistance decreases.

**Wheatstone Bridge — Numerical:**
Example: $R_1 = 2 \Omega$, $R_2 = 4 \Omega$, $R_3 = 4 \Omega$, $R_4 = 8 \Omega$. $R_1/R_2 = 0.5$, $R_3/R_4 = 0.5$. Bridge is balanced, so the $R_4$ resistor carries no current. Equivalent resistance: $R_{eq} = (R_1+R_2) || (R_3+R_4) = (6)(12)/18 = 4 \Omega$. Actually let me redo: $(2+4) = 6$ in series; $(4+8) = 12$ in series. These two branches in parallel: $1/R_{eq} = 1/6 + 1/12 = 3/12 = 1/4$. So $R_{eq} = 4 \Omega$.

**Potentiometer — Precision Measurement:**
A potentiometer can measure emf with zero current drawn from the source (ideal). For a cell of emf $\varepsilon$ and internal resistance $r$, the potentiometer gives $\varepsilon$ (open circuit, no current drawn). To measure $r$: first read $\varepsilon$ with switch open, then close switch and read terminal voltage $V$ at balance: $r = (\varepsilon/V - 1)R_{load}$.

**Kirchhoff's Matrix Method:**
For a circuit with $n$ loops and $b$ branches:
1. Label currents $I_1, I_2, ...$ in each branch (choose directions arbitrarily)
2. Write $(n-1)$ independent junction equations
3. Write the remaining $(b - (n-1))$ loop equations using consistent sign conventions
4. Solve using Cramer's rule or substitution

Example: Two loops with a shared branch. Loop 1: $\varepsilon_1 - I_1 R_1 - (I_1 - I_2)R_3 = 0$. Loop 2: $\varepsilon_2 - I_2 R_2 + (I_1 - I_2)R_3 = 0$. Solve for $I_1$ and $I_2$.

**Delta-Star Transformation:**
For three resistors $R_{AB}, R_{BC}, R_{CA}$ in delta (triangle): equivalent star resistances:
- $R_A = R_{AB} R_{CA}/(R_{AB} + R_{BC} + R_{CA})$
- $R_B = R_{AB} R_{BC}/(R_{AB} + R_{BC} + R_{CA})$
- $R_C = R_{BC} R_{CA}/(R_{AB} + R_{BC} + R_{CA})$

For equal resistors $R$ in delta: $R_{star} = R/3$ in each star arm.

**Capacitor Charging — Differential Equation:**
$VC = Q$ (capacitor voltage). Kirchhoff's voltage law: $\varepsilon = I(R + r) + Q/C = R(dQ/dt) + Q/C + r(dQ/dt)$. For $r \approx 0$: $RC(dQ/dt) + Q = C\varepsilon$. Solution: $Q(t) = C\varepsilon(1 - e^{-t/RC})$. At $t = \tau = RC$: $Q = C\varepsilon(1 - e^{-1}) = 0.63C\varepsilon$ (63% charged). Time to fully charge (practically): $5\tau$.

**Power Dissipation:**
Instantaneous power $P = IV = I^2R = V^2/R$. For a resistor: all power becomes heat. For a battery delivering power: $P = \varepsilon I$. For a battery receiving power (charging): $P = \varepsilon I$ (same formula, but $I$ is negative direction, so power is negative — battery absorbs energy).

**JAMB Pattern Analysis:**
Common JAMB questions: (1) Find equivalent resistance of complex networks, (2) Calculate terminal voltage given emf and internal resistance, (3) Use metre bridge to find unknown resistance, (4) RC time constant problems. A typical JAMB 2023 question: "A cell of emf 6 V and internal resistance 1 Ω delivers a current of 1 A to an external resistor. Find the external resistance." Answer: $V = \varepsilon - Ir$; $1 = 6 - 1(1)$; $R = 1/1 = 5 \Omega$.

---


---
## 📊 JAMB Exam Essentials

| Detail | Value |
|---|---|
| Questions | 180 MCQs (UTME) |
| Subjects | 4 subjects (language + 3 for course) |
| Time | 2 hours |
| Marking | +1 per correct answer |
| Score | 400 max (used for university admission) |
| Registration | January – February each year |

### 🎯 High-Yield Topics for JAMB
- Use of English (Grammar + Comprehension) — 60 marks
- Biology for Science students — 40 marks
- Chemistry (Organic + Physical) — 40 marks
- Physics (Mechanics + Optics) — 35 marks
- Mathematics (Algebra + Geometry) — 40 marks

### 📝 Previous Year Question Patterns
- Q: "The process of photosynthesis requires..." [2024 Biology]
- Q: "The electronic configuration of Fe is..." [2024 Chemistry]
- Q: "Find the value of x if 2x + 5 = 15..." [2024 Mathematics]

### 💡 Pro Tips
- Use of English carries the most weight — master grammar rules and comprehension strategies
- JAMB syllabus is your Bible — questions come directly from it. Download and use it.
- Past questions are highly predictive — repeat patterns appear every year
- For Science students, Biology and Chemistry are high-scoring if you study NCERT-level content

### 🔗 Official Resources
- [JAMB Official](https://www.jamb.gov.ng/)
- [JAMB Syllabus](https://www.jamb.gov.ng/syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
