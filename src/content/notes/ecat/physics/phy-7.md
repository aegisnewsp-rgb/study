---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-7
topicName: Oscillations and SHM
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.043179"
lastUpdated: "2026-06-27"
diagramPrompt: "Clean educational diagram showing Oscillations and SHM with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Oscillations and SHM

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Simple Harmonic Motion (SHM)** is a periodic motion where the restoring force obeys **F = −kx**, making acceleration a = −ω²x. The displacement follows **x(t) = A sin(ωt + φ)**, where **A** is amplitude, **ω = √(k/m)** is angular frequency, and **φ** is phase. Time period **T = 2π/ω = 2π√(m/k)** for a spring-mass system and **T = 2π√(L/g)** for a simple pendulum. Total energy is constant: **E = ½kA²**.

At the **mean position**, velocity is maximum and acceleration is zero; at the **extremes**, the body is momentarily at rest but acceleration peaks at −ω²A. **Phase**: displacement leads velocity by π/2, and displacement leads acceleration by π. In ECAT MCQs, watch for ω vs f confusion and the trap of adding the π-phase when comparing x and v graphs.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Defining equation and solution

The defining test for SHM is **a = −ω²x**. Starting from F = −kx and Newton's second law, m(d²x/dt²) = −kx, which is the differential equation whose general solution is **x(t) = A sin(ωt + φ)**. Here **ω = √(k/m)** is fixed by the system, while **A** and **φ** are set by initial conditions (x₀ and v₀).

#### Velocity, acceleration, and phase

Differentiating gives **v(t) = Aω cos(ωt + φ)** and **a(t) = −Aω² sin(ωt + φ)** = −ω²x. Hence:
- x leads v by **π/2** (90°)
- x leads a by **π** (180°); v leads a by **π/2**
- |v|max = Aω occurs at the mean position; |a|max = Aω² occurs at the extremes.

#### Energy interchange

Total mechanical energy **E = ½kA²** is conserved in ideal SHM. Splitting it:
- **KE(t) = ½kA² cos²(ωt + φ)**
- **PE(t) = ½kA² sin²(ωt + φ)**

KE and PE oscillate at **twice the frequency** of displacement, and their time-average over a cycle is each equal to E/4.

#### Spring-mass vs pendulum

| System | ω | Period T |
|---|---|---|
| Spring-mass | √(k/m) | 2π√(m/k) |
| Simple pendulum (small θ) | √(g/L) | 2π√(L/g) |

Note that the pendulum's T is **independent of mass and amplitude** (for θ ≲ 10°); only L and g matter.

#### Typical ECAT question patterns

1. Finding T or f from given k and m (or L and g) — usually a 1-mark direct plug.
2. Reading off A, T, φ from a displacement-time graph.
3. Comparing KE and PE at a stated position x = (A/2) or phase ωt.
4. Phase-shift problems: "by how much does velocity lead displacement?"

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Projection-of-circle viewpoint

SHM is the **shadow of uniform circular motion** projected onto a diameter. A particle moving with constant angular speed ω around a circle of radius A has x-coordinate A cos(ωt + φ); this is mathematically identical to the SHM solution. The connection explains why ω appears in radians per second and why phase φ maps onto the starting angle on the circle.

#### Damped and forced oscillations

In a real medium, a resistive force −b(dx/dt) introduces damping. Solutions decay as **x(t) = A₀ e^(−bt/2m) cos(ω′t + φ)**, where ω′ = √(ω₀² − (b/2m)²). The amplitude envelope falls exponentially while the (slightly reduced) angular frequency persists. Three regimes:
- **Underdamped** (b < 2√(km)): oscillatory decay.
- **Critically damped** (b = 2√(km)): fastest non-oscillatory return.
- **Overdamped** (b > 2√(km)): slow non-oscillatory return.

Adding a periodic driving force F₀ sin(ωd t) gives a steady-state solution at the driving frequency; amplitude peaks when **ωd = ω₀** — the **resonance** condition, central to ECAT conceptual questions on tuning circuits and Tacoma-Narrows-type examples.

#### Edge cases and common traps

- A body on a frictionless incline attached to a spring still obeys SHM with the **same** ω = √(k/m); gravity merely shifts the equilibrium, not ω.
- For a pendulum, the small-angle approximation sin θ ≈ θ (in radians) is what makes T independent of amplitude. For θ ≈ 30°, the true period is ~1.7% longer — a frequent trap.
- Don't confuse angular frequency ω (rad/s) with ordinary frequency f (Hz). The factor **2π** between them trips up many students.

#### Worked example

A 0.5 kg block attached to a spring (k = 200 N/m) is pulled 0.1 m and released.
- ω = √(200/0.5) = √400 = **20 rad/s**
- T = 2π/20 ≈ **0.314 s**
- f = 1/T ≈ **3.18 Hz**
- Total energy E = ½(200)(0.1)² = **1.0 J**
- Maximum speed vmax = Aω = 0.1 × 20 = **2 m/s**

#### Practice prompts

1. A simple pendulum of length 1.0 m has T ≈ 2.01 s on Earth. What is its length on a planet where T = 4.0 s? (Answer: L ≈ 4.0 m.)
2. At what displacement (as a fraction of A) is KE equal to PE in SHM? (Answer: x = A/√2.)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
