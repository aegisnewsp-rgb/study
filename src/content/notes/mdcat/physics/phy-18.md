---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-18
topicName: Electronics
weight: 3
country: pk
generated: "2026-03-24T08:32:08.092156"
diagramPrompt: "Clean educational diagram showing Electronics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---
# Electronics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT exam.

**What is Electronics for MDCAT?**
Electronics in MDCAT Physics covers semiconductor devices — primarily **diodes**, **transistors** (BJTs), and their applications in rectifier and amplifier circuits. You also need to understand **logic gates** (digital electronics).

**Key Devices and Symbols:**

**Diode:** Allows current flow in one direction only (forward bias). Has a forward voltage drop of ~0.3V (Germanium) or ~0.7V (Silicon).

**Transistor (BJT):** Has three terminals — Collector (C), Base (B), Emitter (E). Used as an **amplifier** or a **switch**.

**Logic Gates:** AND, OR, NOT, NAND, NOR, XOR — each has a truth table you MUST memorise for MDCAT.

**Key Formulas:**

**Semiconductor Diode:**
- Forward bias: Current flows when applied voltage > 0.7V (Si) or 0.3V (Ge)
- Reverse bias: No current (ideally infinite resistance)

**Transistor Current Relationships:**
$$I_E = I_B + I_C$$
$$I_C = \beta I_B$$
where $\beta$ (current gain) typically ranges from 50–200 for small signal transistors.

⚡ **MDCAT Tip:** Always identify whether the transistor is in **cut-off**, **active**, or **saturation** region before solving circuit problems. In active region (amplifier mode): emitter current is the largest, collector current is slightly less, base current is smallest.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**PN Junction Diode — How It Works:**

When a P-type semiconductor (has holes as majority carriers) is joined with N-type (has electrons as majority carriers), a **depletion region** forms at the junction. This region has immobile ions and no free charge carriers — hence very high resistance.

**Forward bias:** Positive terminal to P-side, negative to N-side. This narrows the depletion region and allows current to flow once the barrier voltage is overcome (~0.7V for Si).

**Reverse bias:** Positive terminal to N-side, negative to P-side. This widens the depletion region, preventing current flow. If reverse voltage exceeds **breakdown voltage**, the diode conducts in reverse — this can destroy a normal diode but Zener diodes are designed to operate in this region.

**Zener Diode:** Operates in reverse bias at a precise breakdown voltage. Used as a **voltage regulator** — maintains constant output voltage even when input varies.

**Transistor as an Amplifier:**

In the common emitter configuration:
- Input at base-emitter, output at collector-emitter
- Small change in base current causes large change in collector current
- Voltage gain $A_v = \beta \times (R_C/R_{in})$

The transistor takes power from the DC supply (VCC) and modulates it based on the input signal to produce an amplified output.

**Transistor as a Switch:**
- Cut-off region (IB = 0): No collector current → transistor acts as an OPEN switch
- Saturation region (IB sufficiently large): Maximum collector current → transistor acts as a CLOSED switch

This is the basis of all digital electronics and computer processors.

**Rectifier Circuits:**

**Half-wave rectifier:** Only the positive half-cycle of AC passes through. Negative half is blocked. Output frequency = Input frequency. Average (DC) output = $V_{peak}/\pi$.

**Full-wave rectifier:** Both halves of AC cycle are converted to DC — using a centre-tapped transformer with two diodes, or a bridge rectifier with four diodes. Output frequency = 2 × Input frequency. Average (DC) output = $2V_{peak}/\pi$.

⚡ **MDCAT Tip:** After rectification, the output is pulsating DC — not constant. To get smooth DC, you need a **filter circuit** (capacitor filter). A capacitor in parallel across the output charges during the peaks and discharges during the troughs, smoothing the waveform.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Logic Gates — Truth Tables:**

| Gate | Symbol | Function |
|------|--------|----------|
| AND | ∧ | Output 1 only when ALL inputs are 1 |
| OR | ∨ | Output 1 when ANY input is 1 |
| NOT | ¬ | Inverts the input |
| NAND | — | AND followed by NOT (universal gate) |
| NOR | — | OR followed by NOT (universal gate) |
| XOR | ⊕ | Output 1 when inputs are DIFFERENT |

**Boolean Algebra:**
- $A \cdot 1 = A$ (Identity)
- $A \cdot 0 = 0$ (Null)
- $A + \bar{A} = 1$ (Complement)
- $A \cdot \bar{A} = 0$
- De Morgan's Theorem: $\overline{A \cdot B} = \bar{A} + \bar{B}$ and $\overline{A + B} = \bar{A} \cdot \bar{B}$

**Transistor Biasing and Operating Points:**
For a transistor amplifier to work correctly, it must be biased in the active region. The **Q-point** (quiescent point) is where the transistor operates without an input signal. If the Q-point is too low, the transistor clips the negative half of the signal. If too high, it clips the positive half.

**Load Line Analysis:**
Drawing the DC load line on the output characteristics shows the range of operation. The Q-point should be in the centre of the linear region for undistorted amplification.

**Common MDCAT Exam Patterns:**
1. Identify diode conduction direction in a circuit with multiple sources
2. Calculate output voltage of a half-wave/full-wave rectifier
3. Determine transistor region (cut-off/active/saturation) from given voltages
4. Truth table completion for combinations of logic gates
5. Application of De Morgan's theorems to simplify Boolean expressions

**MDCAT Common Mistakes:**
1. Forgetting that a diode has a threshold voltage — it doesn't conduct below 0.7V
2. In transistor circuits, mixing up which current is which ($I_C = \beta I_B$, not $I_B = \beta I_C$)
3. For logic gates, confusing OR with XOR (OR is "at least one", XOR is "exactly one different")
4. Assuming ideal diodes in reverse bias (in reality, a tiny reverse leakage current exists)
5. In Boolean simplification, not applying De Morgan's theorem correctly

**Priority Order for MDCAT:** Diode basics → Transistor fundamentals → Rectifier circuits → Logic gates → Boolean algebra

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
