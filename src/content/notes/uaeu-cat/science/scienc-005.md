---
exam: uaeu-cat
examName: UAE University CAT
subject: science
subjectName: Science
topic: scienc-005
topicName: "Scientific Literacy & Core Physical Measurements"
weight: 3
country: uae
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Scientific Literacy & Core Physical Measurements

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Scientific literacy** means using evidence-based knowledge to read data, judge claims, and draw conclusions about the physical world — the OECD PISA framing used in CAT Science. Every quantitative answer rests on the **seven SI base quantities**, each fixed by an exact standard since the 2019 redefinition.

| Quantity | Symbol | SI Unit | Standard definition (post-2019) |
|---|---|---|---|
| Length | l | metre (m) | Fixed by the speed of light in vacuum, c = 299 792 458 m/s |
| Mass | m | kilogram (kg) | Fixed by the Planck constant, h = 6.626 070 15 × 10⁻³⁴ J·s |
| Time | t | second (s) | 9 192 631 770 cycles of the Cs-133 hyperfine transition |
| Electric current | I | ampere (A) | Fixed by the elementary charge, e = 1.602 176 634 × 10⁻¹⁹ C |
| Temperature | T | kelvin (K) | Fixed by the Boltzmann constant, k = 1.380 649 × 10⁻²³ J/K |
| Amount of substance | n | mole (mol) | Exactly 6.022 140 76 × 10²³ elementary entities |
| Luminous intensity | Iᵥ | candela (cd) | Fixed by the luminous efficacy of 540 THz radiation, K_cd = 683 lm/W |

> 💡 **High-Yield Memory Hook:** **"Lazy Monkeys Snack And Take Kid-sized Candies"** — Length, Mass, Second, Ampere, Temperature, Kilogram/mole, Candela. Pair with **"LMTKAMI"** for the seven symbols.

Three conversions that appear in nearly every CAT Science paper:
- 1 km = 10³ m, 1 cm = 10⁻² m, 1 mm = 10⁻³ m, 1 µm = 10⁻⁶ m, 1 nm = 10⁻⁹ m.
- **Accuracy** = closeness to the true value; **precision** = how tightly repeated measurements cluster.
- **Significant figures** = all certain digits plus one estimated digit on the instrument's smallest division.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Base vs Derived Units

Base units are the independent seven. **Derived units** are products of base units raised to integer powers, and they carry a **dimensional formula** showing exactly which bases are involved. CAT items often ask you to pick the derived unit from a list or to spot an equation that fails the **dimensional homogeneity** check (both sides must reduce to the same dimensions).

| Quantity | Formula | SI Unit | Dimensional formula |
|---|---|---|---|
| Speed (v) | d / t | m·s⁻¹ | [L T⁻¹] |
| Force (F) | m · a | newton (N) = kg·m·s⁻² | [M L T⁻²] |
| Work (W) | F · d | joule (J) = kg·m²·s⁻² | [M L² T⁻²] |
| Power (P) | W / t | watt (W) = J·s⁻¹ | [M L² T⁻³] |
| Density (ρ) | m / V | kg·m⁻³ | [M L⁻³] |
| Charge (Q) | I · t | coulomb (C) = A·s | [A T] |

#### The Scientific Method Loop

Scientific literacy rests on the cycle: **observation → hypothesis → experiment → data → conclusion → peer review**. A CAT item may describe a published result and ask which step was skipped — usually the **control** or the **repeat trial** that converts an anecdotal observation into evidence.

#### Significant Figures — The Rules

- **Non-zero digits** always count: 235.4 has **4** sig figs.
- **Leading zeros** never count: 0.0042 has **2** sig figs.
- **Captive zeros** (between non-zeros) count: 502 has **3** sig figs.
- **Trailing zeros** count only if a decimal point is present: 20.0 has **3**; 200 has **1**.
- In multiplication or division, the answer keeps the **fewest** sig figs of the inputs; in addition or subtraction, the answer keeps the **fewest decimal places**.

#### Accuracy vs Precision vs Error Type

| Term | Meaning | Typical cause |
|---|---|---|
| Accuracy | Mean reading matches accepted value | Calibration, systematic error |
| Precision | Repeated readings cluster tightly | Instrument resolution, random error |
| Systematic error | Bias in the same direction every time | Zero error, miscalibrated balance |
| Random error | Scatter around the mean | Reading fluctuation, parallax |

#### 🎯 Exam-Level Worked Problem

**Question:** A student measures a rectangular block three times with a ruler marked in millimetres and records lengths 4.32 cm, 4.30 cm and 4.33 cm. The true length is 4.00 cm. Which statement is correct?
A) The measurements are accurate but not precise.
B) The measurements are precise but not accurate.
C) The measurements are both accurate and precise.
D) The ruler has a zero error and the measurements are accurate after correction.

#### Solution:
- **Precision** requires the three readings to cluster tightly. They range from 4.30 to 4.33 cm — spread of just 0.03 cm, well within the 0.01 cm resolution of a millimetre ruler → **high precision**.
- **Accuracy** requires closeness to the true value (4.00 cm). All three readings are ≈ 0.30 cm too high → **systematic bias, not accurate**.
- A zero error of +0.30 cm on the ruler would shift every reading by the same amount, exactly matching the pattern. Subtracting 0.30 cm returns 4.02, 4.00, 4.03 cm — accurate **after** correction.
- Answer: **D**.

> ⚠️ **Examiner Trap:** Students pick **B** because they confuse the high reproducibility with high precision and forget that precision only describes scatter, not truth. Then they miss that a constant offset is the fingerprint of a zero error, which a simple correction fixes.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Exceptions

1. **Vectors vs scalars.** Speed is the magnitude of velocity; CAT items swap "speed" and "velocity" and test whether displacement matters. A 100 m eastward then 100 m westward run has average speed > 0 but average velocity = 0.
2. **Prefix drift when converting across 10³ jumps.** 0.0012 km ↔ 1.2 m ↔ 120 cm ↔ 1200 mm. Skipping a decimal place gives 12 cm or 120 mm — a classic sign-figure trap in 3% weight numericals.
3. **Dimensional check misuse.** An equation like s = ut + (1/2)at² is dimensionally homogeneous only if every term is [L]; CAT items sometimes give a wrong power (s = ut²) to test if you expand to [L T⁻²] and reject.
4. **Artefact-free definitions.** Before 2019 the kilogram was a platinum-iridium cylinder in France; since the 26th CGPM it is fixed by the Planck constant, so mass no longer drifts and the definition is reproducible anywhere.
5. **Reporting beyond instrument resolution.** A balance that reads 0.1 g cannot justify 5.4327 g; the last three digits are fabrication. CAT items give a result like "3.40 g" from a 0.01 g balance and expect you to reject it.
6. **Exact vs measured constants.** The speed of light (299 792 458 m/s) and 1 inch = 2.54 cm are exact by definition and carry **infinite** significant figures — they never limit the sig figs of a calculation.

#### Edge Cases in Dimensional Analysis

Dimensional analysis cannot catch missing dimensionless factors. The period of a pendulum, T = 2π√(L/g), is dimensionally [T] from L/g, but the factor **2π** is dimensionless and invisible to the method. CAT items exploit this by giving a dimensionally sound but numerically wrong formula and asking whether dimensional analysis alone validates it.

#### Connections to Adjacent Topics

- **Kinematics** uses speed and acceleration with dimensional homogeneity.
- **Electricity** uses ampere and coulomb, both linked through Q = I·t.
- **Thermodynamics** leans on the kelvin, redefined by the Boltzmann constant, which removes ambiguity over the triple-point-of-water artefact definition.
- **Data-handling** in Biology and Chemistry reuses sig-fig rules and accuracy/precision language — the topic is genuinely cross-disciplinary at the CAT level.

#### Two Advanced Practice Prompts

1. A voltmeter reads 6.000 V across a resistor carrying 0.500 A. Calculate the resistance in ohms to the correct number of significant figures, then state the dimensional formula of resistance. *(Answer: 12.0 Ω; [M L² T⁻³ A⁻²]; three sig figs limited by the current.)*
2. A thermometer graduated every 0.5 °C records three readings of 36.0, 36.5 and 36.0 °C for a water bath whose true temperature is 35.0 °C. Comment on precision, accuracy, and the probable source of error. *(Highly precise — spread 0.5 °C matches the smallest division; systematically high by 1.0 °C, indicating a calibration offset rather than random error.)*

---

## Continue your study

- **[View this topic in your UAE University CAT roadmap](/roadmap/?exam=uaeu-cat&duration=1mo)** — see where "Scientific Literacy & Core Physical Measurements" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uaeu-cat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UAE University CAT exam overview](/exams/uaeu-cat/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/uaeu-cat/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
