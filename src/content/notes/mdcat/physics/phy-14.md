---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-14
topicName: Alternating Current (AC)
weight: 3
country: pk
generated: "2026-03-24T08:32:08.089173"
diagramPrompt: "Clean educational diagram showing Alternating Current (AC) with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---
# Alternating Current (AC)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT exam.

**What is AC for MDCAT?**
AC is current that changes direction periodically. In Pakistan (and globally), mains electricity is 220-240V, 50 Hz AC. You need to understand **AC waveform parameters**, **phasor diagrams**, and **reactive circuits** (LR, CR, LCR).

**AC Parameters:**
- Instantaneous current: $i = I_0 \sin(\omega t)$ or $i = I_0 \cos(\omega t)$
- Angular frequency: $\omega = 2\pi f$ (rad/s)
- Frequency $f = 50$ Hz (Pakistan), $T = 1/f = 0.02$ s = 20 ms
- RMS values: $I_{rms} = I_0/\sqrt{2}$, $V_{rms} = V_0/\sqrt{2}$

**Why RMS?**
AC constantly changes — we need a value that represents the same power as an equivalent DC. RMS is the effective value of AC for power calculations.

⚡ **MDCAT Tip:** Mains voltage 220V AC in Pakistan is the RMS value. The peak voltage is $220 \times \sqrt{2} \approx 311$ V. This matters when dealing with capacitors and peak voltage ratings.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Reactance — Opposition to AC:**

**Inductive Reactance:** $X_L = \omega L = 2\pi f L$ (in Ohms)
- Inductor opposes changes in current (like inertia in mechanics)
- Current lags voltage by 90° in a purely inductive circuit

**Capacitive Reactance:** $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$
- Capacitor opposes changes in voltage
- Current leads voltage by 90° in a purely capacitive circuit

**Key difference:** $X_L$ increases with frequency (inductive reactance rises at high frequency), while $X_C$ decreases with frequency (capacitive reactance falls at high frequency).

**Series LR Circuit:**
$$Z = \sqrt{R^2 + X_L^2} = \sqrt{R^2 + (\omega L)^2}$$
$$\tan \phi = \frac{X_L}{R}$$
Current lags voltage by angle φ.

**Series CR Circuit:**
$$Z = \sqrt{R^2 + X_C^2} = \sqrt{R^2 + (1/\omega C)^2}$$
$$\tan \phi = \frac{X_C}{R}$$
Current leads voltage by angle φ.

**Power in AC Circuits:**
- **Real power (P):** $P = V_{rms} I_{rms} \cos\phi$ (Watts) — dissipated in resistive components
- **Reactive power (Q):** $Q = V_{rms} I_{rms} \sin\phi$ (VAR) — exchanged between source and reactive components
- **Apparent power (S):** $S = V_{rms} I_{rms}$ (VA)
- Power factor $\cos\phi = R/Z$

⚡ **MDCAT Tip:** In pure inductance or pure capacitance, $\cos\phi = 0$ — all power is reactive, no real power dissipation. In pure resistance, $\cos\phi = 1$ — all power is real.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Series LCR Circuit — Complete Analysis:**

$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + (\omega L - 1/\omega C)^2}$$

$$\tan\phi = \frac{X_L - X_C}{R}$$

**Resonance condition:** When $X_L = X_C$, i.e., $\omega L = 1/\omega C$
$$\omega_r = \frac{1}{\sqrt{LC}}, \quad f_r = \frac{1}{2\pi\sqrt{LC}}$$

At resonance:
- Impedance is minimum ($Z = R$)
- Current is maximum for a given voltage
- Power factor = 1 (current in phase with voltage)
- This is the condition used in tuning circuits (radio, TV)

**Quality Factor (Q-factor):**
$$Q = \frac{\omega_r L}{R} = \frac{1}{\omega_r CR}$$
- High Q = sharp resonance (narrow bandwidth) — used in oscillators
- Low Q = broad resonance (wide bandwidth) — used in power transmission

**Transformer — AC Power Transmission:**
$$\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}$$
- **Step-up transformer:** $N_s > N_p$, $V_s > V_p$, $I_s < I_p$
- **Step-down transformer:** $N_s < N_p$, $V_s < V_p$, $I_s > I_p$

Efficiency: $\eta = \frac{P_{out}}{P_{in}} \times 100\%$. In an ideal transformer: $P_{in} = P_{out}$ → $V_p I_p = V_s I_s$.

**AC Generator (Dynamo) — Working Principle:**
A coil rotating in a magnetic field produces alternating EMF:
$$\varepsilon = \varepsilon_0 \sin(\omega t) \quad \text{where} \quad \varepsilon_0 = NBA\omega$$

- $N$ = number of turns
- $B$ = magnetic field strength
- $A$ = area of coil
- $\omega$ = angular velocity of rotation

**Choke Coil (Inductor) in AC Circuits:**
A coil with high inductance used to limit AC current without power loss (unlike a resistor). Two types:
- **Iron choke:** Used in low-frequency applications (mains frequency 50 Hz)
- **Air choke:** Used in high-frequency circuits

**MDCAT Patterns — Frequently Asked Questions:**
1. Find current and phase angle in a series LCR circuit at a given frequency
2. Calculate resonant frequency and current at resonance
3. Determine RMS current and power dissipated in a circuit
4. Find the turns ratio of a transformer for a given input/output voltage
5. Phase relationship between current and voltage in pure R, L, and C circuits

**MDCAT Common Mistakes:**
1. Confusing peak and RMS values — always convert to RMS for power calculations
2. Adding reactances without considering their opposite signs ($X_L - X_C$)
3. Forgetting that the sign of $\phi$ determines whether current leads or lags
4. In resonance, confusing $X_L$ and $X_C$ — they are equal but NOT zero individually
5. Mixing up $\omega$ and $f$ in formulas ($X_L = \omega L = 2\pi f L$ — both forms are valid)

**Priority Order for MDCAT:** AC parameters → RMS values → Reactance → Series circuits → Resonance → Transformer

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
