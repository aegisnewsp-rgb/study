---
exam: du-adm
examName: "DU Unit B Admission (Science)"
subject: physics
subjectName: "Physics"
topic: physic-007
topicName: "Periodic Motion"
weight: 2
country: bangladesh
generated: "2026-09-25T11:25:00"
lastUpdated: "2026-09-25"
---

# Periodic Motion — DU Unit B Admission (Science)

Periodic Motion is a relatively low-weight slot on the DU Unit B Physics paper but the questions it produces are quick to answer once the formulae are memorised, so the points-per-minute return is high. The chapter covers simple harmonic motion (SHM), the simple pendulum, the mass-spring oscillator, damped and forced oscillations, resonance, and the basics of wave motion. Three MCQ patterns recur: (1) compute the period or frequency of a pendulum or spring given its length/mass and $g$ or $k$, (2) relate SHM quantities ($x$, $v$, $a$) at a given phase to amplitude and angular frequency, and (3) recognise resonance and identify which damping regime a given system is in. The chapter also feeds forward into waves and sound in the 2nd Paper, where the same phase and superposition language is reused.

> Verify the live syllabus, paper pattern, and any in-year changes on https://du.ac.bd/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Simple harmonic motion (SHM) — the four signatures.**

A particle undergoes SHM if its acceleration is proportional to its displacement from equilibrium and directed toward equilibrium. Mathematically $\ddot{x} = -\omega^2 x$, where $\omega$ is the angular frequency (rad/s). The four signatures are:

1. **Displacement:** $x(t) = A\cos(\omega t + \phi)$, where $A$ is amplitude and $\phi$ is the initial phase.
2. **Velocity:** $v(t) = -A\omega\sin(\omega t + \phi)$, with maximum $v_{\max} = A\omega$.
3. **Acceleration:** $a(t) = -A\omega^2\cos(\omega t + \phi)$, with maximum $a_{\max} = A\omega^2$.
4. **Restoring force:** $F = -kx = m\ddot{x}$, which gives $\omega = \sqrt{k/m}$.

**Period and frequency.**
- Period $T = 2\pi/\omega$, units s.
- Frequency $f = 1/T = \omega/(2\pi)$, units Hz.

**Energy in SHM.** Total energy is conserved:
$$E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2.$$
Kinetic energy $KE = \tfrac{1}{2}kx^2$ swap rule: $KE = \tfrac{1}{2}k(A^2 - x^2)$ and $PE = \tfrac{1}{2}kx^2$. They exchange twice per cycle.

**Simple pendulum (small angle).** For amplitude $< 10°$, the period is
$$T = 2\pi\sqrt{\frac{L}{g}}.$$
The mass cancels; only $L$ and $g$ matter. A pendulum twice as long has period $\sqrt{2}$ times longer.

**Mass on a spring (vertical or horizontal).** $T = 2\pi\sqrt{m/k}$. Doubling the mass makes the period $\sqrt{2}$ times longer; quadrupling $k$ halves the period.

**Wave basics.**
- Wave speed $v = f\lambda$.
- Transverse wave: oscillations perpendicular to propagation (light, waves on a string). Longitudinal wave: oscillations parallel (sound).
- Superposition: when two waves meet, displacements add. Constructive interference (crest meets crest) gives $A_{\text{tot}} = A_1 + A_2$; destructive gives $|A_1 - A_2|$.
- Standing wave on a string fixed at both ends: $\lambda_n = 2L/n$, $f_n = nv/(2L)$. The lowest frequency is the fundamental $f_1 = v/(2L)$.
- Beats: two close frequencies $f_1$ and $f_2$ produce a periodic variation in amplitude at the **beat frequency** $f_{\text{beat}} = |f_1 - f_2|$. Tuning a guitar string by ear uses this.

**Quick self-check before the exam.**

- Can you write $x$, $v$, $a$ for SHM starting from rest at amplitude $A$?
- Can you compute the period of a 1.5 m pendulum and of a 0.5 kg mass on a 200 N/m spring without a calculator?
- Can you identify whether a wave is transverse or longitudinal from a description?

### 🟡 Standard — Exam Prep (3d-3w)

#### Phase and the $x$–$v$–$a$ triangle

The phase angle $\theta = \omega t + \phi$ rotates at constant angular velocity $\omega$. The position $x = A\cos\theta$, velocity $v = -A\omega\sin\theta$, acceleration $a = -A\omega^2\cos\theta = -\omega^2 x$. The signs tell you the direction of motion at any instant.

A common DU-style question gives you one quantity — say, "the particle is at $x = A/2$ moving in the negative direction" — and asks for another. The phase convention: at $x = A/2$, $\cos\theta = 1/2 \Rightarrow \theta = \pi/3$ or $-\pi/3$ (or $5\pi/3$, etc.). "Moving in the negative direction" means $v < 0$, so $-A\omega\sin\theta < 0 \Rightarrow \sin\theta > 0$, picking $\theta = \pi/3$. Acceleration at that phase is $a = -A\omega^2 \cos\theta = -A\omega^2/2$ (negative, i.e., toward equilibrium, as expected for a particle at positive $x$).

**Velocity as a function of position** (no time needed): $v = \pm\omega\sqrt{A^2 - x^2}$. Sign depends on direction of motion. This comes from energy conservation: $\tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2$.

#### Mass-spring system in detail

For a horizontal mass-spring on a frictionless surface, the equation of motion is $m\ddot{x} = -kx$, giving $T = 2\pi\sqrt{m/k}$ and $f = (1/2\pi)\sqrt{k/m}$. Note the period depends on $m/k$, not on amplitude (a defining feature of SHM).

For a **vertical** spring with mass $m$ hanging at equilibrium, the spring is already stretched by $x_0 = mg/k$. The motion is still SHM about the new equilibrium point, with the same $\omega = \sqrt{k/m}$. The total extension oscillates between $x_0 - A$ and $x_0 + A$.

**Energy argument:** if you pull the mass down by an additional $A$ from the equilibrium stretch and release, the energy stored is $\tfrac{1}{2}kA^2$ above equilibrium. This is the total energy of the SHM. At the highest point (spring extension $x_0 - A$), the spring still has $\tfrac{1}{2}k(x_0-A)^2$ of elastic PE and the mass has $m g A$ of gravitational PE relative to the lowest point. Setting these equal: $\tfrac{1}{2}k(x_0-A)^2 + mgA = \tfrac{1}{2}k(x_0+A)^2 - mgA$? No — easier to use $E = \tfrac{1}{2}kA^2$ about the equilibrium directly.

#### Simple pendulum: small-angle limit and beyond

The exact equation of motion for a pendulum of length $L$ at angle $\theta$ from vertical is
$$\ddot\theta + \frac{g}{L}\sin\theta = 0.$$
For small angles $\sin\theta \approx \theta$, giving $\ddot\theta = -(g/L)\theta$, which is SHM with $\omega = \sqrt{g/L}$ and $T = 2\pi\sqrt{L/g}$. The approximation is good to within 1% for $\theta < 20°$.

For larger amplitudes the period lengthens. A common DU sub-question asks for the period at amplitude $\theta_0$; the first-order correction is
$$T \approx 2\pi\sqrt{\frac{L}{g}}\left(1 + \frac{\theta_0^2}{16}\right)$$
with $\theta_0$ in radians. A pendulum swinging at $\pm 60°$ ($\theta_0 = \pi/3 \approx 1.047$) has a period about 7% longer than the small-angle formula predicts.

#### Damped oscillations

In real oscillators, a drag force $-bv$ dissipates energy. The equation of motion becomes
$$m\ddot{x} + b\dot{x} + kx = 0.$$
Define the damping coefficient $\gamma = b/(2m)$ and the damped angular frequency
$$\omega_d = \sqrt{\omega_0^2 - \gamma^2}, \qquad \omega_0 = \sqrt{k/m}.$$
Three regimes:
- **Underdamped** ($\gamma < \omega_0$): oscillation with exponentially decaying amplitude $A(t) = A_0 e^{-\gamma t}$. The amplitude halves in time $t_{1/2} = \ln 2/\gamma$.
- **Critically damped** ($\gamma = \omega_0$): returns to equilibrium in the shortest time without oscillating.
- **Overdamped** ($\gamma > \omega_0$): returns to equilibrium slowly without oscillating.

The **quality factor** $Q = \omega_0/(2\gamma)$ measures how underdamped a system is. A high-Q oscillator rings for many cycles; a low-Q one dies quickly.

#### Forced oscillations and resonance

Apply a periodic driving force $F(t) = F_0\cos(\omega_f t)$. The steady-state solution has the same frequency as the driver:
$$x(t) = A(\omega_f)\cos(\omega_f t - \delta).$$
The amplitude is
$$A(\omega_f) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_f^2)^2 + (2\gamma\omega_f)^2}}.$$
This peaks at the **resonance frequency**
$$\omega_{\text{res}} = \sqrt{\omega_0^2 - 2\gamma^2},$$
slightly below the natural frequency $\omega_0$. At resonance the amplitude is $A_{\max} = F_0/(2m\gamma\omega_0)$.

Examples: pushing a swing at its natural frequency makes it swing higher (resonance). A glass shatters when an opera singer hits its natural frequency. The Tacoma Narrows Bridge collapse is a famous example of resonance under wind-driven forcing.

#### Wave motion: speed, superposition, standing waves

Wave on a string under tension $T$ with linear mass density $\mu$: $v = \sqrt{T/\mu}$. Doubling tension quadruples $v$? No — $v \propto \sqrt{T}$, so doubling $T$ gives $\sqrt{2}$ times the speed.

**Superposition of two waves** of equal amplitude $A$ and slightly different frequency $\omega_1, \omega_2$ produces a beat pattern. The resulting displacement is
$$x(t) = 2A\cos\left(\frac{\omega_1-\omega_2}{2}t\right)\cos\left(\frac{\omega_1+\omega_2}{2}t\right),$$
i.e., a high-frequency carrier modulated by a slow envelope. The envelope frequency is $f_{\text{beat}} = |f_1 - f_2|/1$ (some texts define beat as $|f_1 - f_2|$; in physics we say "beat frequency" $= |f_1 - f_2|$ and "envelope frequency" $= |f_1 - f_2|/2$ — be careful which is asked).

**Standing waves on a string** form when two waves of equal amplitude and frequency travel in opposite directions. Nodes are points of zero displacement, antinodes are points of maximum. The distance between adjacent nodes is $\lambda/2$. For a string of length $L$ fixed at both ends, the allowed wavelengths are $\lambda_n = 2L/n$, frequencies $f_n = nv/(2L)$. The lowest is the **fundamental** $f_1 = v/(2L)$; higher modes are harmonics ($2f_1$, $3f_1$, …).

For a string fixed at one end and free at the other, $\lambda_n = 4L/(2n-1)$ — only odd harmonics. The note of a guitar string (fixed at both ends) vs an organ pipe open at both ends (similar) vs closed at one end (only odd harmonics) is a frequent viva question for Engineering and Technology applicants.

#### Worked example

**Problem.** A 0.4 kg mass on a spring with $k = 200$ N/m is pulled 6 cm from equilibrium and released from rest. Find (a) the period and frequency, (b) the maximum speed, (c) the speed and acceleration when $x = 3$ cm, (d) the time taken to first reach $x = 0$ from the start.

**Solution.** $\omega = \sqrt{k/m} = \sqrt{200/0.4} = \sqrt{500} \approx 22.36$ rad/s.

**(a)** $T = 2\pi/\omega = 2\pi/22.36 \approx 0.281$ s. $f = 1/T \approx 3.56$ Hz.

**(b)** $v_{\max} = A\omega = 0.06 \times 22.36 = 1.34$ m/s.

**(c)** At $x = 0.03$ m: $v = \pm\omega\sqrt{A^2 - x^2} = \pm 22.36 \sqrt{0.06^2 - 0.03^2} = \pm 22.36 \times 0.05196 = \pm 1.16$ m/s. Sign depends on direction. Acceleration $a = -\omega^2 x = -500 \times 0.03 = -15$ m/s² (toward equilibrium).

**(d)** Starting from $x = A$ at $t = 0$ at rest, $x(t) = A\cos(\omega t)$. First time at $x = 0$ is when $\cos(\omega t) = 0$, i.e., $\omega t = \pi/2$, giving $t = \pi/(2\omega) = \pi/44.72 = 0.0702$ s. That is $T/4$, as expected for SHM.

### 🔴 Deep — Mastery (1mo+)

#### Coupled oscillators and normal modes

Two masses $m$ connected by three springs (left wall — $m$ — $m$ — right wall, with three equal springs) have two normal modes: **in-phase** (both move together, $\omega_1 = \sqrt{k/m}$) and **out-of-phase** (moves against each other, $\omega_2 = \sqrt{3k/m}$). The general motion is a superposition of both modes, and energy can shift between them — this is how a beating pattern emerges in a two-mass system.

#### Quality factor and energy decay

For an underdamped oscillator, $Q = \omega_0 m / b$. Energy decays as $E(t) = E_0 e^{-b t/m}$. The fractional energy loss per cycle is $\Delta E/E = 2\pi/Q$. A quartz crystal oscillator has $Q \sim 10^4$, so it loses only ~0.06% of its energy per cycle. A poorly tuned violin string might have $Q \sim 10$.

#### Coupled pendulums (Wilberforce-like)

Two pendulums connected by a weak spring exchange energy slowly. If one is set swinging, the other gradually picks up motion while the first slows; eventually the situation reverses. The energy transfer is periodic with a "beat" timescale much longer than the pendulum period. This is qualitatively a useful mental model for coupled oscillations in many-body quantum systems.

#### Travelling waves: phase velocity and group velocity

For a wave packet — a localised disturbance built from many frequencies — the envelope travels at the **group velocity** $v_g = d\omega/dk$, while individual crests within the packet travel at the **phase velocity** $v_p = \omega/k$. In a non-dispersive medium $v_g = v_p$ (e.g., light in vacuum, sound in air at audible frequencies). In a dispersive medium $v_g \ne v_p$ (e.g., light in glass, water waves at the surface). DU Unit B rarely asks the difference explicitly; mention it if the question hints at "signal" vs "wave".

#### Practice prompts

1. A pendulum of length 1 m is taken to the Moon where $g = 1.62$ m/s². Find the new period and compare to Earth.
2. A 0.2 kg mass on a spring oscillates at 2 Hz with amplitude 5 cm. Find the spring constant and the total energy.
3. A damped oscillator loses half its amplitude in 5 s. Find $\gamma$ and the time to lose half its energy.
4. Two tuning forks at 256 Hz and 260 Hz are struck simultaneously. How many beats per second does a listener hear?
5. A string of length 0.6 m fixed at both ends has its fundamental at 200 Hz. Find the wave speed and the frequency of the 4th harmonic.

#### Connections to adjacent topics

SHM is the bridge between Newtonian Mechanics (Physic-003) and Waves (covered in HSC Physics 2nd Paper). The same phase language appears in AC circuits (Physic-011/012), where current and voltage oscillate at $\omega$ and the impedance has a frequency-dependent form $Z = \sqrt{R^2 + (X_L - X_C)^2}$. Resonance in mechanical systems is the direct analogue of resonance in electrical circuits.

### Common traps

- **Period of a pendulum depends on amplitude only at large angles.** For small oscillations the period is amplitude-independent. DU questions sometimes give amplitude and ask for period; if it's $< 10°$, ignore amplitude.
- **Confusing $\omega$, $f$ and $T$.** $\omega$ is in rad/s, $f$ in Hz, $T$ in seconds. They satisfy $\omega = 2\pi f = 2\pi/T$. A common mistake is to substitute $\omega$ into a formula expecting $f$ — usually off by a factor of $2\pi$.
- **Mixing up the spring and pendulum period formulas.** A 0.5 kg mass on a 200 N/m spring has $T = 2\pi\sqrt{m/k}$ regardless of $g$. A pendulum has $T = 2\pi\sqrt{L/g}$ regardless of mass. Don't swap them.
- **Sign of acceleration in SHM.** Acceleration always points toward equilibrium. At $x = +A/2$, $a$ is negative (toward zero). Students who flip the sign lose the direction mark.
- **Beat frequency definitions.** Some textbooks define beat frequency as $|f_1 - f_2|$ and others as $|f_1 - f_2|/2$. Check the chapter convention in your NCTB HSC book before the exam; most Bangladeshi textbooks use $|f_1 - f_2|$ for "beat frequency heard by ear".
- **Resonance frequency vs natural frequency.** Resonance frequency is slightly *less* than natural frequency in a damped system. Only in the undamped limit do they coincide. If the question gives damping, use $\omega_{\text{res}} = \sqrt{\omega_0^2 - 2\gamma^2}$.

---

*Verify all numerical claims against the official DU Unit B notice at https://du.ac.bd/ and the NCTB HSC Physics 1st Paper syllabus before planning your revision timetable around them.*
