---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-14
topicName: Alternating Current (AC)
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.048771"
lastUpdated: "2026-07-25"
diagramPrompt: "Clean educational diagram showing Alternating Current (AC) with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Alternating Current (AC)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Alternating Current reverses direction sinusoidally with time, written as V(t) = V₀ sin(ωt + φ), where V₀ is the peak voltage in volts, ω is the angular frequency in rad/s, and φ is the phase angle in radians. The **root-mean-square (RMS)** value is the equivalent DC value delivering the same heating effect: V_rms = V₀/√2 and I_rms = I₀/√2.

- **Inductor (L):** current lags voltage by 90°; X_L = ωL in ohms.
- **Capacitor (C):** current leads voltage by 90°; X_C = 1/(ωC) in ohms.
- **Resistor (R):** voltage and current stay in phase.
- Impedance: Z = √(R² + (X_L − X_C)²), and average power P = V_rms·I_rms·cos φ.

For ECAT, expect 1–2 MCQs testing the √2 conversion, reactance formulae, or the transformer ratio V_p/V_s = N_p/N_s.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Sinusoidal Voltage and Current
An AC source produces a voltage V(t) = V₀ sin(ωt + φ) and current I(t) = I₀ sin(ωt + φ). The angular frequency ω = 2πf links to the time period T = 1/f. Peak-to-peak voltage is 2V₀, while the **average over a full cycle is zero** — examiners frequently exploit this misconception in MCQs.

#### RMS and Power
RMS values translate an AC quantity into an equivalent DC value that dissipates the same average power in a resistor. For a sine wave, V_rms = V₀/√2 ≈ 0.707 V₀. Average power dissipated in any AC element is P_av = V_rms·I_rms·cos φ, where cos φ is the **power factor**.

| Element | Reactance | Phase of V vs I | Avg power |
| --- | --- | --- | --- |
| Resistor R | 0 | In phase | V_rms·I_rms |
| Inductor L | X_L = ωL | Current lags by 90° | 0 |
| Capacitor C | X_C = 1/(ωC) | Current leads by 90° | 0 |

#### RLC Behaviour and Transformers
The total opposition to AC is **impedance** Z = √(R² + (X_L − X_C)²) in ohms. Resonance occurs when X_L = X_C, giving f₀ = 1/(2π√(LC)). Transformers step AC voltage up or down using mutual induction; the turns ratio gives V_p/V_s = N_p/N_s, with I_p/I_s = N_s/N_p for an ideal transformer.

> Tip: For ECAT, plug f into ω = 2πf before using X_L = ωL or X_C = 1/(ωC) — mixing f and ω is the most common mistake.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Phasor Representation and Power Factor
A sinusoid V(t) = V₀ sin(ωt + φ) maps to a rotating **phasor** of length V₀ at angle φ in the complex plane. The real part projects the instantaneous value. In RLC circuits, the phasor diagram helps compute total voltage: V = √(V_R² + (V_L − V_C)²). The **power factor** cos φ = R/Z tells the fraction of apparent power (V_rms·I_rms) actually dissipated; industrial users correct low power factors with capacitor banks.

#### Common Pitfalls
Forgetting that **X_L rises linearly with f** while **X_C falls as 1/f** leads to sign errors in impedance. Using V₀ instead of V_rms in P = V²/R overestimates heating by a factor of two. Pure inductors and capacitors store energy in magnetic and electric fields respectively, returning it each cycle — average dissipation is zero, a frequent conceptual MCQ trap.

| Pitfall | Correction |
| --- | --- |
| Confusing V₀ with V_rms | V_rms = V₀/√2; use it for power |
| Using f instead of ω | ω = 2πf; X_L = ωL, X_C = 1/(ωC) |
| Assuming P exists in pure L/C | Avg P = 0; only R dissipates |
| Treating transformer as DC device | Transformers need changing flux, i.e., AC |

#### Micro-Example
A 230 V, 50 Hz AC source feeds a series RL circuit with R = 60 Ω and L = 0.2 H. Compute X_L = 2π(50)(0.2) = 62.83 Ω; Z = √(60² + 62.83²) ≈ 86.9 Ω. Peak voltage V₀ = √2 × 230 = 325.27 V, so peak current I₀ = 325.27/86.9 ≈ 3.74 A. Power factor cos φ = 60/86.9 ≈ 0.69.

#### Practice Prompts
1. Find the frequency at which X_L = X_C for L = 10 mH, C = 1 μF. *(Answer: 1591.5 Hz)*
2. A step-up transformer has 200 primary turns and 1000 secondary turns; if V_p = 110 V, compute V_s. *(Answer: 550 V)*

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Alternating Current (AC)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
