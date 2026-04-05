---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-7
topicName: Oscillations
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.083753"
diagramPrompt: Clean educational diagram showing Oscillations with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Oscillations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Oscillations** are repetitive back-and-forth motions about an equilibrium position. Examples include pendulums, springs, and LC circuits. **Simple Harmonic Motion (SHM)** is the simplest form of oscillation.

**Simple Harmonic Motion (SHM):**
An oscillation where the restoring force is directly proportional to the displacement and directed toward the equilibrium position:
$$F = -kx$$
$$a = -\frac{k}{m}x = -\omega^2 x$$

Where:
- $k$ = spring constant or effective stiffness
- $m$ = mass
- $\omega$ = angular frequency = $\sqrt{k/m}$

**Key Equations for SHM:**
$$x = A\cos(\omega t + \phi) \quad \text{or} \quad x = A\sin(\omega t + \phi)$$
$$v = \frac{dx}{dt} = -\omega A\sin(\omega t + \phi)$$
$$a = \frac{dv}{dt} = -\omega^2 A\cos(\omega t + \phi) = -\omega^2 x$$

Where:
- $A$ = amplitude (maximum displacement)
- $\phi$ = phase constant (determines initial position)
- $\omega = 2\pi f = \frac{2\pi}{T}$

**Period and Frequency:**
$$T = \frac{2\pi}{\omega}, \quad f = \frac{1}{T} = \frac{\omega}{2\pi}$$

**For a mass-spring system:**
$$T = 2\pi\sqrt{\frac{m}{k}}$$

**For a simple pendulum:**
$$T = 2\pi\sqrt{\frac{L}{g}}$$
(valid for small angles where $\sin\theta \approx \theta$)

⚡ **MDCAT Tip:** In SHM, acceleration is ALWAYS proportional to and opposite to displacement. At maximum displacement ($x = \pm A$), speed is zero and acceleration is maximum. At equilibrium ($x = 0$), speed is maximum and acceleration is zero.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Energy in SHM:**

For a mass-spring system:
$$E = \frac{1}{2}kx^2 + \frac{1}{2}mv^2 = \frac{1}{2}kA^2 = \text{constant}$$

- At $x = A$: All energy is potential ($E = \frac{1}{2}kA^2$, $v = 0$)
- At $x = 0$: All energy is kinetic ($E = \frac{1}{2}mv_{max}^2$)
- At intermediate positions: Sum of KE and PE = constant

**Velocity and Acceleration in Terms of Displacement:**
$$v = \omega\sqrt{A^2 - x^2}$$
$$a = -\omega^2 x$$

**Damped Oscillations:**

Real oscillations die out due to resistive forces (friction, air resistance):
$$F = -kx - bv$$

Types of damping:
- **Light damping**: System oscillates with gradually decreasing amplitude
- **Critical damping**: Returns to equilibrium as quickly as possible without oscillating
- **Overdamping**: Returns to equilibrium slowly without oscillating

For a damped oscillator:
$$x = A_0 e^{-bt/2m}\cos(\omega_d t + \phi)$$

Where $\omega_d = \sqrt{\omega_0^2 - (b/2m)^2}$ is the damped angular frequency.

**Quality Factor (Q):**
$$Q = \frac{\omega_0 m}{b} = \frac{2\pi \times \text{energy stored}}{\text{energy lost per cycle}}$$

High Q means light damping (oscillations persist); low Q means heavy damping.

**Forced Oscillations and Resonance:**

When an external periodic force drives the system:
$$F = F_0\cos(\omega t)$$

At steady state, the system oscillates at the driving frequency $\omega$:
$$x = A\cos(\omega t - \delta)$$

**Amplitude of forced oscillation:**
$$A = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (b\omega/m)^2}}$$

**Resonance:**
When $\omega = \omega_0$, the denominator is minimum and amplitude is maximum. This is resonance.

At resonance:
$$A_{max} = \frac{F_0}{b\omega_0}$$

⚡ **Common Student Mistakes:** Confusing $\omega$ (angular frequency, rad/s) with $f$ (frequency, Hz). Forgetting that the period of a pendulum depends on $L$ and $g$, NOT on amplitude or mass. Confusing natural frequency with driven frequency.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**SHM and Circular Motion:**

SHM is the projection of uniform circular motion onto a diameter. A point moving in a circle of radius $A$ with angular velocity $\omega$ has:
- x-coordinate: $x = A\cos(\omega t + \phi)$
- y-coordinate: $y = A\sin(\omega t + \phi)$

This explains why we use cosine and sine functions for SHM.

**The Simple Pendulum — Detailed Analysis:**

For a pendulum of length $L$ with mass $m$ at angle $\theta$:
- Restoring force: $mg\sin\theta$
- For small $\theta$: $mg\sin\theta \approx mg\theta$
- Equation of motion: $mL\frac{d^2\theta}{dt^2} = -mg\theta$
- This gives: $\frac{d^2\theta}{dt^2} = -\frac{g}{L}\theta$

So for small oscillations:
$$\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$

**Important:** The period is independent of mass and amplitude (for small angles).

**Compound (Physical) Pendulum:**

For a rigid body oscillating about a pivot:
$$T = 2\pi\sqrt{\frac{I}{mgd}}$$

Where:
- $I$ = moment of inertia about the pivot
- $d$ = distance from pivot to centre of mass
- $g$ = acceleration due to gravity

The centre of oscillation is at distance $I/(md)$ from the pivot.

**Torsional Oscillations:**

For a torsion pendulum (twist and release):
$$T = 2\pi\sqrt{\frac{I}{\kappa}}$$

Where $\kappa$ is the torsional constant (torque per unit angular displacement).

**Coupled Oscillations:**

When two oscillators are connected (e.g., two pendulums via a spring):
- Normal modes: Synchronized oscillations at natural frequencies
- Beat frequency: When driven slightly off resonance, oscillations pulse at $|f_1 - f_2|$

**LC Oscillations (Electrical):**

In an LC circuit (no resistance):
$$q = Q_0\cos(\omega t), \quad I = -I_0\sin(\omega t)$$
$$\omega = \frac{1}{\sqrt{LC}}$$

Energy alternates between capacitor (electric field) and inductor (magnetic field):
$$U_E = \frac{q^2}{2C}, \quad U_B = \frac{1}{2}LI^2, \quad U_{total} = \frac{Q_0^2}{2C}$$

This is analogous to mass-spring oscillation.

**Comparison of Oscillators:**

| System | Displacement | Restoring Agent | $\omega$ |
|--------|-------------|-----------------|----------|
| Mass-spring | $x$ | Spring force $-kx$ | $\sqrt{k/m}$ |
| Simple pendulum | $\theta$ | Gravity $mg\sin\theta$ | $\sqrt{g/L}$ |
| Torsion pendulum | $\theta$ | Torque $-\kappa\theta$ | $\sqrt{\kappa/I}$ |
| LC circuit | $q$ | Induced EMF $-L\frac{dI}{dt}$ | $\sqrt{1/LC}$ |

**SHM Velocity Diagram:**

The phase difference between quantities in SHM:
- Displacement $x$ and velocity $v$: $v$ leads $x$ by $90°$ ($\pi/2$)
- Velocity $v$ and acceleration $a$: $a$ leads $v$ by $90°$ ($\pi/2$)
- Acceleration $a$ and displacement $x$: $a$ and $x$ are $180°$ ($\pi$) out of phase

**Graphical Representation:**

At $t = 0$:
- $x = A\cos\phi$
- $v = -A\omega\sin\phi$
- $a = -A\omega^2\cos\phi = -\omega^2 x$

**SHM Parameters Summary:**

For $x = A\cos(\omega t + \phi)$:
- Maximum displacement: $|x|_{max} = A$
- Maximum velocity: $|v|_{max} = \omega A$ (at $x = 0$)
- Maximum acceleration: $|a|_{max} = \omega^2 A$ (at $x = \pm A$)

**Practical Applications:**

1. **Shock absorbers**: Critical damping prevents bouncing
2. **Tuning forks**: Pure tone due to specific frequency
3. **MTF frequency**: Mechanical systems have natural frequencies — avoid driving at these to prevent resonance damage
4. **Bridges**: Tacoma Narrows collapse due to wind-driven resonance
5. **Radio tuning**: LC circuits resonate at carrier frequency
6. **Musical instruments**: Specific frequencies produce desired notes

**Damping in Real Systems:**

**Natural frequency of damped oscillator:**
$$\omega_d = \sqrt{\omega_0^2 - \gamma^2}$$
Where $\gamma = b/(2m)$ is the damping constant.

**Logarithmic decrement:**
$$\delta = \ln\frac{x_n}{x_{n+1}} = \frac{bT}{2m}$$

From this, damping constant can be determined.

**Energy decay in damped oscillator:**
$$E = E_0 e^{-bt/m}$$

⚡ **MDCAT Examination Patterns:** Identify SHM from the condition $a \propto -x$. Solve problems involving period and frequency of spring-mass and pendulum systems. Calculate energy in SHM. Distinguish between free, damped, and forced oscillations. Explain resonance and its effects. Derive the equation of motion for SHM systems. Compare SHM with circular motion.
