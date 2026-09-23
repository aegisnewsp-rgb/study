---
exam: uaeu-cat
examName: UAE University CAT
subject: science
subjectName: Science
topic: scienc-008
topicName: Circuit Analysis
weight: 3
country: uae
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Circuit Analysis

### 🟢 Lite — Quick Review (1h–1d)

> Last-minute recall anchor: every resistor, capacitor, or inductor problem in the CAT reduces to KCL, KVL, and one equivalent resistor.

**Circuit analysis** maps unknown voltages and currents onto the laws of conservation. **Kirchhoff's Current Law (KCL)** forces the algebraic sum of currents into a node to equal the sum leaving it. **Kirchhoff's Voltage Law (KVL)** forces the sum of potential drops around any closed loop to zero. Combine both with **Ohm's Law**, and any linear resistive network becomes solvable.

| Law | Equation | Variables / SI Units |
|---|---|---|
| Ohm's Law | $V = I R$ | $V$ in V, $I$ in A, $R$ in Ω |
| Series resistors | $R_{eq} = R_1 + R_2 + \dots + R_n$ | all in Ω |
| Parallel resistors | $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}$ | all in Ω |
| Voltage divider (2-R) | $V_{out} = V_{in}\,\dfrac{R_2}{R_1 + R_2}$ | $V$ in V, $R$ in Ω |
| Current divider (2-branch) | $I_1 = I_{tot}\,\dfrac{R_2}{R_1 + R_2}$ | $I$ in A, $R$ in Ω |

- Series current is identical everywhere; series voltages add.
- Parallel voltage is identical across branches; parallel currents add.

> 💡 **High-Yield Memory Hook (Memory Hook):** "**KCL = currents cancel at a node; KVL = voltages cancel round a loop.**" Tag it to the word **NODE-LOOP** and the two laws stick together. Voltage divider = the resistor **across which you measure** sits in the numerator.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The two conservation laws

KCL reflects **charge conservation**: $\sum I_{in} = \sum I_{out}$ at every junction. KVL reflects **energy conservation**: walking a closed loop, every rise in potential must be cancelled by a drop, so $\sum \Delta V = 0$. Pick a sign convention once and stick to it — most CAT errors come from flipping a sign mid-loop, not from misreading values.

#### Building equivalents, one step at a time

Reduction strategy is mechanical:

1. Identify sub-networks that are purely series or purely parallel.
3. Replace each with a single equivalent resistor using the formulas in Lite.
4. Repeat until one source drives one resistor.

For a 2- or 3-loop network the same approach works, but KCL/KVL equations replace brute-force reduction. The **node-voltage method** picks a reference (ground) node, writes KCL at every other node, and solves simultaneous linear equations. The **mesh-current method** assumes a circulating current in each independent loop, applies KVL around each, and solves for the mesh currents; branch currents are sums of the meshes that share them.

#### Concept comparison matrix

| Technique | Best used when… | Output | Watch for |
|---|---|---|---|
| Series/parallel reduction | Network has obvious two-terminal combinations | $R_{eq}$ | A "parallel-looking" branch actually series across the source |
| Node-voltage method | Few nodes, many sources | Node voltages $V_i$ | Singular matrix if a voltage source ties two nodes without series R |
| Mesh-current method | Few loops, few current sources | Mesh currents $I_m$ | Current sources become supermesh constraints |
| Thevenin equivalent | Solving for one load value repeatedly | $V_{th}$, $R_{th}$ | $R_{th}$ found with independent sources zeroed (V→short, I→open) |
| Norton equivalent | Same as Thevenin, current-driven load preferred | $I_N$, $R_N$ | $R_N = R_{th}$; conversion: $V_{th} = I_N R_N$ |

#### Divider rules save time

The voltage divider outputs the voltage **across the resistor in the numerator**. The current divider sends the larger share of current through the **smaller** resistor — invert the ratio of the opposite branch's resistance. Both rules assume no loading from external circuits.

#### Power and energy

Power in any element is $P = I V = I^2 R = V^2 / R$, with $P$ in watts. The **maximum power transfer theorem** says a load receives peak power when its resistance equals $R_{th}$ of the source network; the delivered power is then $P_{max} = V_{th}^2 / (4 R_{th})$.

#### Worked solution: a 3-resistor divider

A 12 V battery in series with $R_1 = 4\,\Omega$, $R_2 = 6\,\Omega$, $R_3 = 12\,\Omega$. Find the voltage across $R_3$.

Step 1 — total resistance: $R_{tot} = 4 + 6 + 12 = 22\,\Omega$.

Step 2 — series current: $I = V/R = 12/22 \approx 0.545\,\text{A}$.

Step 3 — voltage across $R_3$: $V_3 = I R_3 = 0.545 \times 12 = 6.55\,\text{V}$ (two units: V, A, Ω).

Step 4 — divider shortcut: $V_3 = 12 \times 12/22 = 6.55\,\text{V}$. Same answer; the divider rule bypasses the current calculation.

> ⚠️ **Examiner Trap:** students routinely flip the divider ratio and write $V_3 = 12 \times 6/22$. That value equals $V_2$, not $V_3$. The numerator must match the resistor you're measuring across.

---

### 🔴 Extended — Deep Study (3mo+)

#### AC steady state in one paragraph

Replace each resistor by $R$, each inductor by $jX_L$ where $X_L = 2\pi f L$, and each capacitor by $-jX_C$ where $X_C = 1/(2\pi f C)$. The network is now linear in complex numbers; KCL/KVL still hold, and Ohm's Law generalises to $V = I Z$. Impedances add in series and as parallel inverses, exactly like resistors.

| Quantity | Definition | SI unit | Conversion |
|---|---|---|---|
| Peak voltage | Maximum instantaneous value | V | — |
| Peak-to-peak | $V_{pp} = 2 V_{peak}$ | V | factor of 2 |
| RMS | $V_{rms} = V_{peak}/\sqrt{2}$ for a sinusoid | V | factor $1/\sqrt{2}$ |
| Reactance $X$ | $2\pi f L$ or $1/(2\pi f C)$ | Ω | sign distinguishes L from C |
| Impedance $Z$ | $R + jX$ | Ω | magnitude $\sqrt{R^2+X^2}$, phase $\arctan(X/R)$ |

#### Boundary conditions worth memorising

- DC steady state: capacitor behaves as an **open circuit**, inductor as a **short circuit**.
- Very high frequency: capacitor is a **short**, inductor is an **open**.
- At resonance of a series RLC: $X_L = X_C$, impedance is purely resistive and minimum; current is maximum.

#### Common mistakes, ranked by frequency

1. Putting the wrong resistor in the divider numerator.
2. Treating a current source as if it could be opened during Thevenin reduction (open the *voltage* source instead).
3. Forgetting the $1/\sqrt{2}$ factor when an AC answer is asked in RMS but the diagram labels peak.
4. Adding reactances as if they were real numbers — they must be added as complex quantities.
5. Writing $R_{eq} < R_{min}$ for parallel combinations and then trying to "fix" it by averaging.

#### Advanced practice prompts

1. A Thevenin source has $V_{th} = 9\,\text{V}$ and $R_{th} = 3\,\Omega$. Compute (a) the Norton current $I_N$, (b) the load resistance that draws maximum power, and (c) that maximum power value.
2. A series RLC has $R = 10\,\Omega$, $L = 20\,\text{mH}$, $C = 5\,\mu\text{F}$. Find the resonant frequency, then the impedance at $f = 2 f_0$. Express both in standard SI units (Hz and Ω).

> 📌 **Formula Check:** every resistor formula above uses Ω; every AC reactance uses Ω but **carries a sign** ($+jX_L$, $-jX_C$); every voltage is in volts, every current in amperes. Mixing peak and RMS in one calculation is the single fastest way to lose a mark.

---

## Continue your study

- **[View this topic in your UAE University CAT roadmap](/roadmap/?exam=uaeu-cat&duration=1mo)** — see where "Circuit Analysis" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uaeu-cat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UAE University CAT exam overview](/exams/uaeu-cat/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/uaeu-cat/science/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
