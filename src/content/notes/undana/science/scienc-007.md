---
exam: undana
examName: UNDANA Admission (Indonesia)
subject: science
subjectName: "Science (Saintek)"
topic: scienc-007
topicName: Distinguishing Temperature from Heat
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Distinguishing Temperature from Heat

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Temperature (suhu)** measures the average translational kinetic energy of a body's particles, while **heat (kalor)** is thermal energy in transit between bodies at different temperatures. Temperature is an intrinsic state property; heat is energy that flows only when a temperature difference exists.

- **Temperature unit:** kelvin (K); also expressed in °C. Absolute scale for gas laws.
- **Heat unit:** joule (J) — the SI unit. 1 calorie (cal) = 4.184 J.
- **Key formula:** $Q = m \cdot c \cdot \Delta T$, where $Q$ = heat in joules, $m$ = mass in kg, $c$ = specific heat capacity in J/(kg·K), $\Delta T = T_{final} - T_{initial}$ in K or °C.
- **Direction of flow:** heat moves **spontaneously** from higher to lower temperature until thermal equilibrium.
- **Measurement tools:** temperature → thermometer; heat → calorimeter (indirect, via $\Delta T$).

> 💡 **High-Yield Memory Hook:** **"T is the label, Q is the mail."** Temperature (T) stays *with* the body like a name tag; heat (Q) is the *energy mail* travelling between bodies. If it stays in the system, it is internal energy; if it crosses the boundary, it is heat.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions and SI Units

Temperature and heat are routinely confused because everyday language treats "panas" as one concept. In physics, they are formally distinct quantities with different dimensions.

- **Temperature (T):** scalar state variable, measured in **kelvin (K)**, dimension $[\Theta]$.
- **Heat (Q):** energy in transit, measured in **joule (J)**, dimension $[M L^2 T^{-2}]$.
- **Specific heat capacity (c):** energy needed to raise 1 kg of a substance by 1 K, units J/(kg·K).
- **Power of heat transfer (P):** $P = Q / t$, units watt (W), dimension $[M L^2 T^{-3}]$.

#### Concept Comparison Matrix

| Property | Temperature (T) | Heat (Q) |
|---|---|---|
| Physical nature | State function (intensive) | Energy transfer (extensive) |
| SI unit | Kelvin (K) | Joule (J) |
| Dimension | $[\Theta]$ | $[M L^2 T^{-2}]$ |
| Can it flow? | No — it is read at a point | Yes — only along a $\Delta T$ gradient |
| Direction | Scalar value at equilibrium | High T → low T until equilibrium |
| Measured by | Thermometer | Calorimeter (indirect, via $\Delta T$) |
| Common error | Called "energy that moves" | Confused with "temperature of an object" |

#### Mechanism: Why Heat Flows

The **Zeroth Law of Thermodynamics** states that if body A is in thermal equilibrium with body C, and B is also in equilibrium with C, then A is in equilibrium with B. This law justifies the existence of temperature as a measurable quantity. When two bodies at different temperatures touch, collisions between faster particles (high T) and slower particles (low T) average out the kinetic energies. Heat transfer stops when no temperature difference remains — **not when "heat runs out."**

#### Standard Problem Types in UNDANA Saintek

1. **Statement identification (B/S):** mark statements such as *"suhu berpindah dari benda panas ke benda dingin"* as **false** — only heat transfers.
2. **Black's principle calculation:** mixing water at different temperatures, equating $Q_{released} = Q_{absorbed}$.
3. **Scale conversion:** $\mathrm{K} = °\mathrm{C} + 273.15$; Fahrenheit and Reamur conversions also tested.
4. **Phase-change reasoning:** temperature stays constant during melting/boiling while heat is still absorbed (latent heat $Q = m \cdot L$).

#### 🎯 Exam-Level Worked Problem

**Question:** A 0.5 kg block of aluminium ($c = 900$ J/(kg·K)) at 80 °C is dropped into 1.0 kg of water ($c = 4200$ J/(kg·K)) at 20 °C inside an insulated calorimeter. Assuming no heat loss, what is the equilibrium temperature?

#### Solution:

1. Apply conservation of energy: $Q_{released} = Q_{absorbed}$.
2. Heat released by aluminium: $Q_{Al} = m_{Al} \cdot c_{Al} \cdot (T_i^{Al} - T_f) = 0.5 \times 900 \times (80 - T_f)$.
3. Heat absorbed by water: $Q_{w} = m_{w} \cdot c_{w} \cdot (T_f - T_i^{w}) = 1.0 \times 4200 \times (T_f - 20)$.
4. Equate: $0.5 \times 900 \times (80 - T_f) = 1.0 \times 4200 \times (T_f - 20)$.
5. Simplify: $450(80 - T_f) = 4200(T_f - 20)$ → $36000 - 450 T_f = 4200 T_f - 84000$ → $120000 = 4650 T_f$ → $T_f \approx 25.8\ °\mathrm{C}$.
6. Convert to Kelvin: $T_f = 25.8 + 273.15 = 298.95\ \mathrm{K}$.

**Answer:** approximately **25.8 °C (298.95 K)**.

> ⚠️ **Examiner Trap:** Many students assume the equilibrium temperature is the simple arithmetic mean (50 °C) because they treat both substances as identical. They forget that water has a much higher specific heat capacity (4200 vs 900 J/(kg·K)) and a larger mass, so the water dominates the final temperature. Always compute via $m \cdot c$, not by intuition.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Boundary Conditions and Edge Cases

- **Phase transitions:** during melting or boiling, $\Delta T = 0$ yet $Q \neq 0$. The energy goes into breaking intermolecular bonds, not raising temperature. Distinguishing latent heat ($Q = mL$) from sensible heat ($Q = mc\Delta T$) is a frequent UNDANA trap.
- **Temperature vs internal energy:** internal energy $U$ of an ideal gas depends *only* on $T$, but for real substances $U$ also depends on volume and phase. Heat $Q$ is *not* equal to $U$; they are linked by the First Law: $\Delta U = Q - W$.
- **Heat is not a fluid:** the obsolete "caloric" theory treated heat as a substance. Modern physics recognises heat as energy transfer by conduction, convection, or radiation — none of which are material.
- **Kelvin requirement in gas laws:** PV = nRT demands T in kelvin. Plugging °C values directly yields wrong answers because the gas-law zero point is absolute zero (0 K = −273.15 °C), not the freezing point of water.
- **Direction of spontaneous flow:** heat never spontaneously flows from cold to hot — that would violate the Second Law. A refrigerator moves heat the "wrong" way only by consuming external work.

#### Advanced Traps Table

| Trap | Wrong Assumption | Correct Resolution |
|---|---|---|
| "Same Q → same final T" | Two bodies receiving equal heat reach the same temperature | Final T depends on $m \cdot c$ of each body |
| "Suhu bisa berpindah" | Temperature moves between bodies | Only heat (Q) moves; T is read at equilibrium |
| "$\Delta T$ in °C for PV = nRT" | Use Celsius difference directly | Convert to kelvin; 1 K = 1 °C in size, but zero point differs |
| "Benda bersuhu besar otomatis melepas Q" | High T means heat is being lost | High T only indicates *capability* to release; flow requires contact and gradient |
| "Kalori = kkalori" | Food calorie equals physics calorie | 1 food Calorie (kcal) = 1000 cal = 4184 J |

#### Connections to Adjacent Topics

- **Thermodynamics:** First Law ties $Q$, $W$, and $\Delta U$; Zeroth Law underpins temperature scales.
- **Kinetic theory of gases:** $T$ is proportional to the mean translational kinetic energy per particle: $\overline{KE} = \tfrac{3}{2} k_B T$, with $k_B = 1.38 \times 10^{-23}$ J/K.
- **Heat transfer modes:** conduction (Fourier's law, $q = -k \, dT/dx$), convection (Newton's law of cooling, $Q = hA\Delta T$), and radiation (Stefan–Boltzmann, $P = \epsilon \sigma A T^4$).
- **Calorimetry:** extends Black's principle to mixtures with phase change, often the second-most-tested sub-topic in UNDANA Saintek physics.

#### Two Advanced Practice Prompts

1. **Mixed-phase problem:** 200 g of ice at 0 °C is dropped into 500 g of water at 60 °C ($L_{fusion} = 3.34 \times 10^5$ J/kg). Will all ice melt? Justify with numerical comparison of $Q$ available versus $Q$ required.
2. **Absolute-zero reasoning:** a gas in a sealed rigid container is cooled from 27 °C to −73 °C. By what factor does its pressure change, and why must the temperature first be converted to kelvin before applying $\frac{P_1}{T_1} = \frac{P_2}{T_2}$?

---

## Continue your study

- **[View this topic in your UNDANA Admission (Indonesia) roadmap](/roadmap/?exam=undana&duration=1mo)** — see where "Distinguishing Temperature from Heat" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=undana&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNDANA Admission (Indonesia) exam overview](/exams/undana/)** — pattern, eligibility, and syllabus
- **[All Science (Saintek) notes](/notes/undana/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
