---
exam: gate
examName: "GATE"
subject: subject-specific
subjectName: "Subject-Specific"
topic: subjec-020
topicName: "Electrical Machines — DC Machines and Induction Motors"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Electrical Machines — DC Machines and Induction Motors

### 🟢 Lite — Quick Review (1h–1d)

> Open with this — the single number that organises the rest.

DC machines and induction motors convert electrical energy into mechanical torque through two different coupling mechanisms: commutation (DC) and rotating magnetic field (AC). For GATE EE, two equations carry most of the marks.

#### The two must-know formulae

| Machine | Equation | Variables and SI units |
|---|---|---|
| DC machine | $E_b = \dfrac{\Phi Z N P}{60 A}$ | $\Phi$ = flux per pole (Wb), $Z$ = total conductors, $N$ = speed (rpm), $P$ = poles, $A$ = parallel paths ($A=2$ wave, $A=P$ lap); result in volt |
| DC machine | $T_a = k_a \Phi I_a$ | $k_a = PZ/(2\pi A)$ (dimensionless if SI units used), $\Phi$ in Wb, $I_a$ in A, $T_a$ in N·m |
| Induction motor | $s = (N_s - N_r)/N_s$ | $N_s = 120 f / P$ in rpm, $f$ in Hz, $s$ dimensionless; rotor EMF at slip: $E_2' = s E_2$ |
| Induction motor | $s_{max} = R_2'/X_{th}$ | $R_2'$ referred rotor resistance (Ω), $X_{th} = X_1 + X_2' \parallel X_m$ (Ω); $T_{max}$ is independent of $R_2'$ |

> 💡 **Memory Hook (DC):** "Wave-A stays Two" — wave winding always has A = 2; lap winding has A = P. Forget this and every EMF/torque sum in the paper collapses.

> 💡 **Memory Hook (Induction Motor):** "Rotor EMF rides on slip" — the rotor EMF equals $s \cdot E_2$, and rotor current frequency $f_r = s f$. At $s=0$ (synchronous) the rotor sees DC; at $s=1$ (standstill) it sees full stator frequency.

A 2-mark NAT usually tests one of four things: back-EMF at a given speed, armature torque from line current, slip at rated load, or the slip at which maximum torque occurs. Carry the variable list in your head and the algebra does the rest.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### DC machine armature: EMF, torque and armature reaction

The induced EMF in a DC machine comes from conductors cutting the main field flux once per pole pair per revolution. Two winder-specific numbers control the result. Wave winding gives A = 2 regardless of pole count, so doubling the poles without rewiring doubles the EMF at the same speed. Lap winding gives A = P, so adding poles does not change EMF on a per-revolution basis. The torque equation $T_a = (PZ/(2\pi A)) \Phi I_a$ reverses through the same constant — motor and generator action share the same armature, only the sign of $E_b - V$ flips.

Armature reaction is the distortion and partial demagnetisation the armature MMF imposes on the main field. The cross-magnetising MMF per pole is $Z I_a / (2 P)$ for wave and $I_a A / P$ for lap (these reduce to similar per-pole numbers). At heavy loads the leading pole-tip flux density rises and the trailing tip weakens, shifting the brush axis from the geometric neutral. Interpoles carry a winding in series with the armature, producing a local MMF that neutralises the reactance voltage in the short-circuited coil and forces straight-line commutation.

For a DC motor, $N \propto (V - I_a R_a)/\Phi$. A shunt motor holds near-constant speed because $\Phi$ is fixed by the field supply. A series motor has $\Phi$ rising with $I_a$, so without saturation the speed falls hyperbolically with load — that is the traction-curve characteristic. Starting current is limited by an external starter because $E_b = 0$ at standstill, and the only impedance is the low armature resistance.

#### Three-phase induction motor: equivalent circuit and torque

The exact per-phase equivalent circuit referred to the stator contains $R_1$, $X_1$ (stator), the shunt branch $R_c \parallel jX_m$ (core and magnetising), and the rotor branch $R_2'/s + j X_2'$. The mechanical power developed is $P_m = (1 - s) P_{ag}$ where $P_{ag}$ is air-gap power; rotor copper loss is $s P_{ag}$. The split is mechanical, not electrical.

Maximum torque slip $s_{max} = R_2'/X_{th}$ where $X_{th}$ is the Thevenin reactance seen from the rotor branch. The maximum torque itself $T_{max} = \dfrac{3 V_1^2}{2 \omega_s (R_{th} + R_2'/s_{max})}$ does not depend on $R_2'$ — only the slip at which it occurs shifts with rotor resistance. Adding rotor resistance moves the peak torque toward starting without changing its magnitude; this is exactly how wound-rotor motors trade torque density for rotor temperature margin.

#### Concept Comparison Matrix — easily confused pairs

| Item A | Item B | What students mix up | Correct distinction |
|---|---|---|---|
| Wave winding (A=2) | Lap winding (A=P) | Treating A as if it tracked P for wave | Wave always A=2; lap A=P |
| Air-gap power $P_{ag}$ | Mechanical output $P_m$ | Putting rotor copper loss on the output side | $P_m = (1-s) P_{ag}$; rotor Cu loss = $s P_{ag}$ |
| Slip $s$ at max torque | Synchronous speed $N_s$ | Mixing the slip formula with the speed formula | $s_{max} = R_2'/X$ (no frequency); $N_s = 120 f/P$ |
| Rotor EMF frequency $f_r$ | Stator frequency $f$ | Using $f$ in rotor EMF equation | $f_r = s f$; at standstill $f_r = f$ |
| Maximum torque $T_{max}$ | Starting torque $T_{st}$ | Treating them as the same | $T_{max}$ at $s_{max} = R_2'/X_{th}$; $T_{st}$ at $s=1$ depends on $R_2'$ |
| Shunt motor speed regulation | Series motor speed regulation | Citing the same number | Shunt ≈ 5–15%, series ≈ nearly flat hyperbolic — opposite ends |

#### Worked problem — circle of maximum torque

A 4-pole, 50 Hz, three-phase induction motor has per-phase stator impedance $R_1 = 0.5\ \Omega$, $X_1 = 1.2\ \Omega$, magnetising reactance $X_m = 30\ \Omega$, and rotor (referred) $R_2' = 0.6\ \Omega$, $X_2' = 1.2\ \Omega$. Phase voltage 400 V / $\sqrt{3}$. Find $s_{max}$ and the maximum torque.

Step 1 — synchronous speed: $N_s = 120 \times 50 / 4 = 1500$ rpm, so $\omega_s = 2\pi N_s/60 = 157.08$ rad/s.

Step 2 — Thevenin across the rotor branch (stator resistance usually negligible for the slip calculation): $X_{th} \approx X_1 \parallel X_m = (1.2 \times 30)/(1.2 + 30) = 1.153\ \Omega$.

Step 3 — maximum-torque slip: $s_{max} = R_2'/X_{th} = 0.6 / 1.153 = 0.520$.

Step 4 — Thevenin voltage: $V_{th} \approx V_1 \times X_m/(X_1 + X_m) = 231 \times 30/31.2 = 222.1$ V.

Step 5 — maximum torque: $T_{max} = \dfrac{3 V_{th}^2}{2 \omega_s (R_{th} + R_2'/s_{max})}$. With $R_{th}$ small, denominator $\approx 2 \times 157.08 \times 1.154 = 362.5$; numerator $3 \times 222.1^2 = 1.480 \times 10^5$.
So $T_{max} \approx 408$ N·m, occurring at slip 0.520, well above rated slip (typically 0.03–0.05). The motor will accelerate past $s_{max}$ and settle near its rated operating point on the stable right-hand branch of the curve.

> ⚠️ **Examiner Trap:** Setting $s_{max} = R_2'/(X_1 + X_2')$ — using raw series reactance instead of the parallel Thevenin reactance — overstates $s_{max}$ by roughly a factor of 25 and may push it past 1, which is physically impossible for ordinary cage rotors.

#### Key derivation chain (worth memorising once)

$P_{ag} = 3 I_2'^2 R_2'/s$ → $P_m = (1-s) P_{ag}$ → $T = P_m / \omega_r$ with $\omega_r = (1-s)\omega_s$ → $T = 3 I_2'^2 R_2'/(s \omega_s)$. This is the torque-slip shape, and from it $T_{max}$ falls out when $dT/ds = 0$.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge cases and boundary behaviour

At $s = 0$ the rotor turns with the field; $I_2' = 0$, torque is zero, and the rotor EMF at the slip-frequency level collapses to zero (DC in the rotor frame). At $s = 1$ the rotor is stationary and the motor looks like a short-circuited transformer; rotor copper loss equals $P_{ag}$ because all of it is dissipated, with no mechanical output. Negative slip (rotor faster than field) means generating mode; $s > 1$ means braking — the plugging connection used for rapid stops.

Crawling and cogging in cage motors are rotor-construction artifacts. Crawling arises when certain slot combinations produce a parasitic synchronous torque at a sub-synchronous speed (e.g., $N_s/7$ from harmonics of the MMF). Cogging is the rotor literally locking at zero speed due to strong slot-alignment torque. Both are avoided by chording the stator winding or choosing the right slot–pole combination (e.g., avoid $S = 6Pk \pm 2k$).

#### Deep-bar and double-cage rotors

Cage rotors with deep, narrow bars exhibit the skin effect at starting, raising the effective $R_2'$ at $s=1$ and lowering it at rated slip. The barrier interpretation is that current is pushed to the top of the bar by leakage flux. A double cage replaces this trick with two real layers: a low-resistance outer cage for running, a high-resistance inner cage for starting. The Thevenin model still applies; only the rotor resistance varies with slip.

#### Single-phase induction motors

A single-phase stator winding produces a pulsating field, which by the double-revolving-field theory decomposes into two equal counter-rotating components giving zero net torque on a symmetric rotor. Asymmetry is introduced by a starting winding (split-phase, capacitor-start, or capacitor-run) that shifts the axis in time and space. The cross-field theory gives the same answer — the rotor's rotation itself generates a quadrature MMF that breaks the symmetry and sustains torque.

#### Connections to adjacent GATE topics

- Power systems: synchronising alternators uses $E_b$ and synchronising power coefficients derived from the same machine geometry.
- Power electronics: chopper-fed DC drives modify $V$ to control $N$; V/f control on induction motors keeps flux constant by holding $V/f$ ratio.

| Advanced trap / exception | Why it bites | Safe move |
|---|---|---|
| $R_1$ ignored in $s_{max}$ when it is comparable to $X_1$ | Underestimates $s_{max}$ for small machines | Use full $R_{th}$ in the derivative |
| Cogging at $s = 0$ due to $S = P$ | Rotor refuses to turn on direct start | Choose $S$ well away from $6Pk\pm 2k$ and $P$ |
| Circle diagram wattmeter polarity flip | Efficiency reads >1 or negative | Reverse current coil lead and recheck |
| Series motor runaway at no load | $N \propto 1/\Phi \to \infty$ as $I_a \to 0$ | Never belt-drive a series motor to a load that can snap |
| Maximum power output vs maximum torque | Different slips; $P_{max}$ at $s$ below $s_{max}$ | Solve $dP/ds = 0$ separately for $P$, not $T$ |
| $s_{max}$ reported > 1 | Wrong reactance basis (series, not Thevenin) | Cross-check against $(R_2'/R_1) \times 5$ rule-of-thumb |
| Saturation neglected in series motor | Speed-load curve appears to be a straight line at high load | Apply nonlinear $\Phi$–$I_a$ curve from the magnetisation data |

#### Two practice prompts

1. A 4-pole wave-wound DC shunt machine has $Z = 600$, runs at 1500 rpm, field flux 12 mWb per pole. Compute no-load armature EMF and the armature torque at 80 A line current.
2. A 6-pole, 50 Hz induction motor has $R_2' = 0.4\ \Omega$, $X_{th} = 4\ \Omega$. Rated slip is 0.04. Find the ratio of maximum torque to full-load torque and confirm whether the machine is in the constant-torque region $(s < s_{max})$ or the constant-power region.

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Electrical Machines — DC Machines and Induction Motors" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Subject-Specific notes](/notes/gate/subject-specific/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
