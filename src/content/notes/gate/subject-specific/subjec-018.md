---
exam: gate
examName: "GATE"
subject: subject-specific
subjectName: "Subject-Specific"
topic: subjec-018
topicName: "Control Systems — Time and Frequency Response"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-20"
---

# Control Systems — Time and Frequency Response

> A closed-loop system's behaviour in time and in frequency are two views of the same transfer function G(s). On the jω-axis G(s) becomes G(jω), and Bode, Nyquist and polar plots become interchangeable pictures of step-response shape.

### 🟢 Lite — Quick Review (1h–1d)
> Five numbers describe almost every second-order step response. Memorise them and you can answer 70% of GATE questions on this topic.

A second-order closed loop follows $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$, where $\zeta$ is the damping ratio (dimensionless) and $\omega_n$ is the natural frequency in rad/s. Poles live at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$, so the real part fixes decay rate and the imaginary part fixes oscillation speed.

- **Rise time** (underdamped, 0–100%): $t_r \approx (\pi - \beta)/\omega_d$, with $\beta = \cos^{-1}\zeta$ in rad and $\omega_d = \omega_n\sqrt{1-\zeta^2}$ in rad/s.
- **Peak time**: $t_p = \pi/\omega_d$ in seconds.
- **Settling time** (2% band): $t_s \approx 4/(\zeta\omega_n)$ seconds.
- **Steady-state error** (unity feedback): $e_{ss} = 1/(1+K_p)$ for step, $1/K_v$ for ramp, $1/K_a$ for parabolic input.
- **Resonant peak**: $M_r = 1/(2\zeta\sqrt{1-\zeta^2})$ — valid only for $0 \le \zeta \le 0.707$.

> 💡 **High-Yield Memory Hook — "PT MR SP"**: Peak Time, M_r, Settling, Phase margin — read the Bode plot's PM to estimate Mp, and read Mr from the polar plot. Larger PM ⇒ smaller overshoot.

### 🟡 Standard — Regular Study (2d–2mo)
> Most GATE marks on this topic come from converting between the two domains. Practise the mapping once and the rest of the chapter falls in line.

#### From poles to step-response shape

The location of closed-loop poles dictates everything you can read on an oscilloscope trace. Pull the poles toward the left-half plane and the response speeds up; rotate them closer to the imaginary axis and the system rings more. Two scalars — $\zeta$ and $\omega_n$ — encode that geometry completely for a dominant second-order pair.

| Specification | Formula | Units | Behaviour as ζ ↑ | Behaviour as ωn ↑ |
|---|---|---|---|---|
| Rise time $t_r$ | $(\pi - \cos^{-1}\zeta)/\omega_d$ | s | Increases (slower) | Decreases (faster) |
| Peak time $t_p$ | $\pi/\omega_d$ | s | Slight increase | Decreases |
| Settling time $t_s$ | $4/(\zeta\omega_n)$ (2%) | s | Decreases | Decreases |
| Overshoot $M_p$ | $\exp(-\zeta\pi/\sqrt{1-\zeta^2})$ | % | Decreases sharply | No change |
| Resonant peak $M_r$ | $1/(2\zeta\sqrt{1-\zeta^2})$ | dimensionless | Decreases; =1 at ζ=0.707 | — |

#### Steady-state error constants

For unity feedback, define three numbers from $G(s)$ as $s\to 0$:

- **Position constant** $K_p = \lim_{s\to 0} G(s)$ — dimensionless.
- **Velocity constant** $K_v = \lim_{s\to 0} sG(s)$ — units of s⁻¹.
- **Acceleration constant** $K_a = \lim_{s\to 0} s^2 G(s)$ — units of s⁻².

A type-N system has N integrators in the forward path, so $K_p\to\infty$ for N≥1, $K_v\to\infty$ for N≥2, $K_a\to\infty$ for N≥3. The corresponding $e_{ss}$ to step, ramp and parabolic inputs falls to zero at that boundary.

#### Frequency-domain stability margins

Pick the **gain-crossover** $\omega_{gc}$ where $|G(j\omega)|=1$ (0 dB). The **phase margin** $PM = 180° + \angle G(j\omega_{gc})$ predicts overshoot — every extra 10° of PM roughly trims 5–10% off Mp. Pick the **phase-crossover** $\omega_{pc}$ where $\angle G(j\omega)=-180°$. The **gain margin** $GM = 1/|G(j\omega_{pc})|$, expressed in dB as $-20\log|G(j\omega_{pc})|$, tells how much loop gain you can add before instability.

| Margin | Read at | Predicts |
|---|---|---|
| Phase margin (PM) | $\omega_{gc}$ (gain crossover) | Overshoot, relative stability |
| Gain margin (GM) | $\omega_{pc}$ (phase crossover) | Robustness to gain drift |

#### 🎯 Exam-Level Worked Problem

A unity-feedback system has open-loop transfer function $G(s) = \dfrac{20}{s(s+2)(s+5)}$. Find the gain margin and phase margin, and comment on the closed-loop step response.

**Step 1 — Identify the form.** Substitute $s = j\omega$ and split into magnitude and phase. Break points occur at $\omega = 2$ and $\omega = 5$ rad/s where the corner frequencies sit.

**Step 2 — Phase-crossover frequency $\omega_{pc}$.** Phase of $G(j\omega) = -90° - \tan^{-1}(\omega/2) - \tan^{-1}(\omega/5)$. Setting this to $-180°$ gives $\tan^{-1}(\omega/2) + \tan^{-1}(\omega/5) = 90°$, which holds when $(1)(\omega/5)+(1)(\omega/2) = 0$ in the product-of-tangents form — actually use the identity $\tan(A+B) = (\tan A + \tan B)/(1 - \tan A \tan B) \to \infty$, so $\tan^{-1}(\omega/2)\tan^{-1}(\omega/5) = 1$. Numerically $\omega_{pc} \approx 3.16$ rad/s.

**Step 3 — Gain margin.** $|G(j\omega_{pc})| = \dfrac{20}{\omega_{pc}\sqrt{\omega_{pc}^2+4}\sqrt{\omega_{pc}^2+25}} \approx \dfrac{20}{3.16 \cdot \sqrt{14} \cdot \sqrt{35}} \approx 0.30$. So $GM = 1/0.30 \approx 3.33$, i.e. $20\log(3.33) \approx 10.45$ dB. Positive ⇒ stable.

**Step 4 — Gain-crossover.** Set $|G(j\omega_{gc})| = 1$. Numerical search gives $\omega_{gc} \approx 1.65$ rad/s. Phase there: $\angle G(j\omega_{gc}) = -90° - \tan^{-1}(0.825) - \tan^{-1}(0.33) \approx -90° - 39.5° - 18.3° = -147.8°$.

**Step 5 — Phase margin.** $PM = 180° - 147.8° \approx 32.2°$.

**Step 6 — Step-response interpretation.** With PM ≈ 32°, closed-loop overshoot lands near 30–35%. Settling time (approximate, dominant pole near $-1$) lies around 4 s. The system is stable but oscillatory.

> ⚠️ **Examiner Trap:** Many candidates write $GM \approx 10$ dB (rounded too early) and miss that GM is also the *maximum allowable gain increase* — adding 3.33× of extra gain pushes the closed loop to the verge of instability. Always quote GM as both a ratio and a dB value.

### 🔴 Extended — Deep Study (3mo+)
> The trap that costs marks in GATE is rarely the formula — it is the domain in which you apply it. Read the question twice: is it asking for time response or frequency response?

#### Limits and boundary cases worth memorising

| Condition | Consequence |
|---|---|
| $\zeta = 0$ | Undamped oscillation; $M_r \to \infty$, $PM = 0°$ |
| $\zeta = 1$ | Critically damped; no overshoot, slowest rise among non-oscillatory responses |
| $\zeta = 0.707$ | $M_r = 1$; below this value a resonant peak appears in the frequency response |
| $\zeta > 0.707$ | $M_r = 1$ (formula no longer valid); bandwidth equals $\omega_n$ |
| Type-0 system, ramp input | $e_{ss} = \infty$ regardless of $K$ |
| Pole on $j\omega$-axis | Apply Routh-Hurwitz *before* Nyquist; the $Z = N + P$ sign convention flips for these cases |

#### Nyquist count for marginally stable loops

When $G(s)$ has poles on the $j\omega$-axis, indent the Nyquist contour around them with a small semicircle and watch the encirclement count shift. GATE has used this trick: a system with one integrator contributes a half-encirclement, not a full one. The safe workflow is to run Routh-Hurwitz first to learn whether the open loop is stable ($P = 0$) before applying $Z = N + P$ to the plot.

#### Two advanced prompts

1. A lead compensator of the form $G_c(s) = (1 + s/a)/(1 + s/b)$ with $b > a$ is inserted in the forward path. Derive the contribution to PM in terms of $\alpha = a/b$ and the geometric mean $\sqrt{ab}$, then show why the maximum phase boost of $\sin^{-1}[(1-\alpha)/(1+\alpha)]$ occurs at $\omega = 1/\sqrt{ab}$.
2. A plant $G(s) = K/[s(s+1)(s+4)]$ shows gain crossover at 1 rad/s for $K = 1$. Find the value of $K$ that produces PM = 45°. Then estimate the resulting closed-loop bandwidth and 2% settling time.

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Control Systems — Time and Frequency Response" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Subject-Specific notes](/notes/gate/subject-specific/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
