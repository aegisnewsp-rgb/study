---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-018
topicName: "Topic 18"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Control Systems — Time and Frequency Response

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**GATE Weightage:** ~8–12 marks/year (Electrical/Instrumentation); Bode plot and steady-state error are extremely high-yield topics.

---

**First-Order System:** G(s) = K/(τs + 1)
- Time constant τ; Step response: y(t) = K(1 – e^(–t/τ)); Settling time ≈ 4τ

**Second-Order System:** G(s) = ω_n²/(s² + 2ζω_n s + ω_n²)

| ζ | Type | Response |
|---|---|---|
| ζ = 0 | Undamped | Pure oscillation |
| 0 < ζ < 1 | Underdamped | Oscillatory decay |
| ζ = 1 | Critically damped | Fastest no-overshoot |
| ζ > 1 | Overdamped | Slow, no overshoot |

**Pole locations:** s = –ζω_n ± jω_n√(1–ζ²); ω_d = ω_n√(1–ζ²) = damped frequency

**Steady-State Error:** e_ss = 1/(1 + K_p) for step, 1/K_v for ramp, 1/K_a for parabolic

**Bode Plot Rules:**
- Magnitude: –20 dB/decade per pole at origin; –20 dB/decade per pole away from origin; +20 dB/decade per zero
- Phase: –90° per pole at origin; –90° per pole (non-origin); +90° per zero

**Nyquist:** Encircle –1 + j0; Stability if # encirclements = # RHP poles of OLTF

**Gain Margin (GM):** Gain at phase crossover where ∠G(jω) = –180°; GM > 0 required
**Phase Margin (PM):** Phase at gain crossover where |G(jω)| = 1; PM > 0 required; PM ≈ 100ζ

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## First-Order System Response

**Standard form:** G(s) = K/(τs + 1) or normalized: G(s) = 1/(τs + 1)

### Unit Step Response

y(t) = K(1 – e^(–t/τ)) for t ≥ 0

| Parameter | Value |
|---|---|
| Steady-state value | K |
| Time constant τ | Time to reach 63.2% of final |
| Rise time (10%–90%) | ≈ 2.2τ |
| Settling time (2%) | ≈ 4τ |
| Settling time (5%) | ≈ 3τ |

### Unit Ramp Response

For input R(s) = 1/s²:
- y(t) = K(t – τ + τe^(–t/τ))
- Steady-state error e_ss = τ (ramp lag equals time constant)

### Unit Impulse Response

y(t) = (K/τ)·e^(–t/τ) for t ≥ 0

## Second-Order System — Detailed Analysis

**Standard TF:** G(s) = ω_n²/(s² + 2ζω_n s + ω_n²)

### Key Specifications

- **Peak time:** T_p = π/ω_d = π/(ω_n√(1–ζ²))
- **Percent overshoot:** %OS = e^(–πζ/√(1–ζ²)) × 100
- **Settling time (2% criterion):** T_s ≈ 4/(ζω_n)
- **Settling time (5% criterion):** T_s ≈ 3/(ζω_n)
- **Rise time (0–100%):** T_r ≈ (π – θ)/ω_d, where θ = arctan(√(1–ζ²)/ζ)

> **GATE Formula:** ζ from %OS: ζ = –ln(%OS/100) / √(π² + ln²(%OS/100))

### Pole-Zero Map

Poles: s₁,₂ = –ζω_n ± jω_n√(1–ζ²)

- **Real part** = –ζω_n (determines settling time)
- **Imaginary part** = ω_n√(1–ζ²) = ω_d (determines oscillation frequency)

## Steady-State Error Analysis

### Error Constants

| Input Type | Position (step) | Velocity (ramp) | Acceleration (parabola) |
|---|---|---|---|
| Input r(t) | u(t) | t | ½t² |
| Laplace R(s) | 1/s | 1/s² | 1/s³ |
| Steady-state error | 1/(1 + K_p) | 1/K_v | 1/K_a |
| K_p = lim G(s) | K_p | 0 | 0 |
| K_v = lim sG(s) | ∞ | K_v | 0 |
| K_a = lim s²G(s) | ∞ | ∞ | K_a |

**Type number** = number of poles at s = 0 in G(s)

### System Type and Compensation

- Higher type → better steady-state tracking, harder to stabilize
- Type 0: Tracks step, error to ramp/parabola
- Type 1: No error to step/ramp, error to parabola
- Type 2: No error to step/ramp/parabola (often used in position control)

## Bode Plot Construction

### Magnitude Plot

| Element | Slope | Corner frequency |
|---|---|---|
| Pole at origin (1/s) | –20 dB/dec | ω = 0 |
| Simple pole (1/(1+jω/ω_c)) | –20 dB/dec | ω_c |
| Double pole (1/(1+jω/ω_c)²) | –40 dB/dec | ω_c |
| Zero (1 + jω/ω_c) | +20 dB/dec | ω_c |
| Second-order pole (denominator s²/ω_n² + 2ζs/ω_n + 1) | –40 dB/dec | ω_n |

### Phase Plot

| Element | Phase contribution |
|---|---|
| Simple pole | 0° → –90° over 2 decades around ω_c |
| Simple zero | 0° → +90° over 2 decades around ω_c |
| Pole at origin | –90° constant |
| Second-order pole | 0° → –180° depending on ζ |

**Minimum phase systems** have a one-to-one correspondence between magnitude and phase.

## Nyquist Stability Criterion

**Nyquist plot:** Plot G(jω) as ω goes from 0 to ∞ (complex plane).

**Stability test:** Z = N + P, where:
- Z = number of closed-loop poles in RHP
- N = number of encirclements of –1+j0 (clockwise direction)
- P = number of open-loop poles in RHP

**For stability:** Z = 0 → N = –P (no net encirclements if P = 0 and system stable)

### Gain and Phase Margin from Nyquist

- **Gain Margin:** GM = 1/|G(jω_p)| where ω_p = phase crossover (∠G = –180°)
- **Phase Margin:** PM = 180° + ∠G(jω_g) where ω_g = gain crossover (|G| = 1)
- Both must be positive for stability
- Typical desired: GM > 6 dB, PM > 30°–45°

## Nichols Chart

A Nichols chart combines:
- **M-contours:** constant closed-loop magnitude (|G/(1+G)| = constant, in dB)
- **N-contours:** constant closed-loop phase

Used to read closed-loop response from open-loop Nyquist data.

Key use: Find resonant peak M_r (maximum |T(jω)|) and resonant frequency ω_r from the highest M-contour tangent to the Nyquist plot.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Delay Time, Rise Time, Peak Time — Exact Formulas

For underdamped second-order (ζ < 1):

**Delay time (10% to 50% response):** T_d ≈ (1 + 0.7ζ) / ω_n

**Rise time (0% to 100%):** T_r = (π – φ) / ω_d, where φ = arctan(ω_d/ζω_n)

**Peak time:** T_p = π / ω_d

**Maximum (peak) overshoot:** M_p = |G(jω_d)| at ω = ω_d = exp(–πζ/√(1–ζ²))

## Compensation Techniques

### Lag Compensator

G_c(s) = (1 + αT s) / (1 + T s), where α > 1

- Increases K_p (improves steady-state error)
- Small negative impact on phase margin
- Adds low-frequency gain without significantly altering high-frequency response

### Lead Compensator

G_c(s) = (1 + T s) / (1 + αT s), where α < 1

- Increases phase margin (improves transient response)
- Increases bandwidth (faster response)
- May amplify high-frequency noise

### Lead-Lag Compensator

Combines both: G_c(s) = (1 + T₁s)(1 + T₂s) / ((1 + αT₁s)(1 + αT₂s))
- T₁ = lead time constant (α < 1)
- T₂ = lag time constant (α > 1)

## Frequency Response — Resonance Peak

For standard second-order:

**Resonant frequency:** ω_r = ω_n√(1 – 2ζ²) (only exists if ζ < 1/√2 ≈ 0.707)

**Resonant peak:** M_r = 1/(2ζ√(1–ζ²)) (only if ζ < 0.707)

> **GATE Trick:** If asked "what is the nature of system with given ζ?" — check: ζ < 0 → unstable oscillations grow; ζ = 0 → sustained oscillation; 0 < ζ < 1 → decaying oscillations.

## Bode Plot — Asymptotic vs Actual

Asymptotic Bode is approximate (straight lines at corner frequencies). Actual magnitude at corner frequency for a simple pole:
- 20·log|G(jω_c)| = –20·log√2 = –3 dB (exactly)

The **asymptotic approximation error** is:
- Simple pole/zero: max 3 dB error at corner
- Double pole/zero: max 6 dB error at corner

## Closed-Loop Frequency Response

|T(jω)| = |G(jω)| / |1 + G(jω)|

Using Nichols chart, you can determine:
- Closed-loop bandwidth (ω_BW where |T| drops to –3 dB of low-frequency gain)
- Bandwidth ≈ ω_n for second-order systems
- Higher ζ → narrower bandwidth, less ringing

## Relationship Between Time and Frequency Domain

| Parameter | Time Domain | Frequency Domain |
|---|---|---|
| Settling time | T_s ≈ 4/(ζω_n) | Bandwidth related |
| Peak time | T_p = π/ω_d | Resonant peak M_r |
| Overshoot | %OS = e^(–πζ/√(1–ζ²)) | M_r (higher M_r → higher %OS) |
| Natural frequency | ω_n | Crossover frequency ω_c |

**Approximate relations:**
- PM ≈ 100ζ (for ζ between 0.2 and 0.8)
- GM depends on high-frequency gain of G(s)
- ω_c (crossover) ≈ ω_n for well-damped systems

## GATE Exam Strategy — Time and Frequency Response

**Expected question types:**
1. Find %OS, T_s, T_p from given ζ, ω_n
2. Draw Bode plot magnitude/phase from given G(s)
3. Find GM and PM from Bode or Nyquist
4. Determine steady-state error for step/ramp/parabolic input
5. Find closed-loop transfer function from Bode data
6. Stability analysis using Nyquist

**Common GATE mistakes:**
- Using settling time formula T_s = 4/(σ) where σ = real part of dominant pole (not ζω_n)
- Confusing ω_d (damped frequency) with ω_n (natural frequency)
- Drawing Bode with wrong slopes for repeated poles/zeros
- Forgetting that GM/PM must be positive — negative means unstable
- Miscounting poles at origin for type number

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
