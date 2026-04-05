---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-13
topicName: Electromagnetic Induction (EMI)
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.088376"
diagramPrompt: Clean educational diagram showing Electromagnetic Induction (EMI) with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Electromagnetic Induction (EMI)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electromagnetic induction** is the phenomenon where a changing magnetic field induces an electromotive force (EMF) in a conductor. This principle underlies generators, transformers, and many electrical devices.

**Faraday's Law of Electromagnetic Induction:**
The induced EMF is directly proportional to the rate of change of magnetic flux:
$$\varepsilon = -\frac{d\Phi}{dt}$$
Where $\Phi = BA\cos\theta$ is the magnetic flux (Wb), and the negative sign represents **Lenz's Law**.

**Magnetic Flux:**
$$\Phi = BA\cos\theta$$
- $B$ = magnetic flux density (Tesla, T)
- $A$ = area of loop (m²)
- $\theta$ = angle between magnetic field and normal to surface

**Lenz's Law:**
The direction of induced current is such that it opposes the change causing it. This is a consequence of conservation of energy — the induced current creates its own magnetic field that tries to cancel the change.

**Key Formulas:**
- **Motional EMF**: $\varepsilon = B\ell v$ (rod of length $\ell$ moving perpendicularly in uniform $B$ field)
- **General case**: $\varepsilon = B\ell v\sin\theta$
- **Self-induction**: $\varepsilon = -L\frac{dI}{dt}$ where $L$ is self-inductance
- **Inductor energy**: $U = \frac{1}{2}LI^2$

**Transformer:**
$$\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}$$
- Step-up: $N_s > N_p$, $V_s > V_p$
- Step-down: $N_s < N_p$, $V_s < V_p$

⚡ **MDCAT Tip:** Lenz's Law always confirms energy conservation. When a magnet moves toward a coil, the induced current creates a magnetic field that REPELS the magnet. When the magnet moves away, the induced current ATTRACTS the magnet. The induced current always opposes the motion, not the magnetic field itself.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Induced EMF in a Rotating Coil:**

For a coil rotating in a uniform magnetic field:
$$\varepsilon = \varepsilon_0 \sin(\omega t)$$
Where $\varepsilon_0 = NBA\omega$ is the peak EMF:
- $N$ = number of turns
- $B$ = magnetic flux density
- $A$ = area of each turn
- $\omega$ = angular velocity (rad/s)
- $f$ = frequency, $\omega = 2\pi f$

**Root Mean Square (RMS) Values:**
$$V_{rms} = \frac{V_0}{\sqrt{2}}, \quad I_{rms} = \frac{I_0}{\sqrt{2}}$$
For sinusoidal AC, the RMS value is the peak value divided by $\sqrt{2}$.

**Inductive Reactance:**
$$X_L = \omega L = 2\pi f L$$
This is the "resistance" of an inductor to AC current. Units: Ohms (Ω).

**Capacitive Reactance:**
$$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$$
This is the "resistance" of a capacitor to AC current.

**Series RLC Circuit:**
$$Z = \sqrt{R^2 + (X_L - X_C)^2}$$
$$\tan\phi = \frac{X_L - X_C}{R}$$
Where $Z$ is impedance, $\phi$ is the phase angle.

**Resonance:**
At resonance, $X_L = X_C$, so $Z = R$ (minimum impedance). This occurs at:
$$\omega_0 = \frac{1}{\sqrt{LC}}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}}$$

**Power in AC:**
$$P_{avg} = V_{rms} I_{rms} \cos\phi$$
Where $\cos\phi$ is the power factor.

⚡ **Common Student Mistakes:** Confusing instantaneous EMF with RMS values. Forgetting that the negative sign in Faraday's Law has physical meaning (Lenz's Law). Using peak values instead of RMS in power calculations.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Self-Inductance:**

For a solenoid:
$$L = \frac{\mu_0 N^2 A}{\ell}$$
Where:
- $\mu_0 = 4\pi \times 10^{-7}$ H/m (permeability of free space)
- $N$ = number of turns
- $A$ = cross-sectional area
- $\ell$ = length of solenoid

**Energy Stored in an Inductor:**
$$U = \frac{1}{2}LI^2$$

The energy can also be expressed in terms of magnetic field:
$$U = \frac{B^2}{2\mu_0} \times \text{volume}$$

**Mutual Inductance:**
When two coils are inductively coupled:
$$M = \frac{\varepsilon_2}{dI_1/dt}$$
For two solenoids coaxially wound:
$$M = k\sqrt{L_1 L_2}$$
Where $k$ is the coupling coefficient ($0 \leq k \leq 1$).

**EMF Induced in a Moving Rod:**

Consider a rod of length $\ell$ moving with velocity $v$ perpendicular to a uniform magnetic field $B$:
$$\varepsilon = B\ell v$$

If the rod moves at angle $\theta$ to the field direction:
$$\varepsilon = B\ell v\sin\theta$$

If the rod is part of a closed circuit moving in a magnetic field, the induced EMF causes a current $I = \varepsilon/R$ where $R$ is the circuit resistance.

**Back EMF in Motors:**
When a motor rotates in a magnetic field, the changing flux induces an EMF that OPPOSES the applied voltage (Lenz's Law). This is called back EMF: $\varepsilon_{back} = k\Phi\omega$.

At starting ($\omega = 0$), back EMF is zero, so starting current is high.

**Eddy Currents:**
When a conductor experiences changing magnetic flux, circulating currents (eddy currents) are induced within the conductor. These cause energy loss (heating).

**Applications of Eddy Currents:**
- Electromagnetic braking (trains, roller coasters)
- Induction heating
- Metal detectors

**Reducing Eddy Currents:**
- Laminations (thin sheets insulated from each other)
- Using materials with high resistivity

**Inductance in LR Circuits:**

For a series LR circuit with applied DC voltage $V$:
$$I = \frac{V}{R}\left(1 - e^{-Rt/L}\right)$$

Time constant: $\tau = L/R$
After $5\tau$, current reaches $>99\%$ of maximum.

**Decay of Current in LR Circuit:**
$$I = I_0 e^{-Rt/L}$$

**LC Oscillations:**

An ideal LC circuit (no resistance) oscillates with natural frequency:
$$\omega_0 = \frac{1}{\sqrt{LC}}$$

The energy oscillates between the capacitor (electric field) and inductor (magnetic field):
$$U_E = \frac{q^2}{2C}, \quad U_B = \frac{1}{2}LI^2, \quad U_{total} = \frac{q_0^2}{2C}$$

This is analogous to a spring-mass mechanical oscillator.

**Damped Oscillations:**
In a real RLC circuit, oscillations are damped because energy is dissipated as heat in the resistor.

**Quality Factor (Q-factor):**
$$Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR}$$

High Q means low damping — oscillations persist longer. This is important in tuning circuits (radio, telecommunications).

**Faraday's Law Applications:**
- Electric generators (mechanical → electrical)
- Transformers (changing voltage levels)
- Induction cooktops
- Wireless charging
- Guitar pickups
- Dynamoometers

**Alternator vs Generator:**
An alternator is an AC generator where the magnetic field rotates inside a stationary armature. A DC generator uses a commutator to produce DC.

**Back EMF in Transformers:**
In an ideal transformer (100% efficient):
$$V_p I_p = V_s I_s$$

For real transformers, efficiency $< 100\%$ due to:
- Copper losses (I²R in windings)
- Iron losses (eddy currents, hysteresis)
- Flux leakage

⚡ **MDCAT Examination Patterns:** Apply Faraday's Law and Lenz's Law to calculate induced EMF. Solve problems involving moving conductors in magnetic fields. Calculate RMS values for AC circuits. Solve RLC circuit impedance problems. Find resonant frequency. Explain transformer operation and efficiency. Distinguish between AC and DC generators.
