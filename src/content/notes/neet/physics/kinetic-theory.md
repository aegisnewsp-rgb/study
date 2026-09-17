---
exam: neet
examName: NEET UG
subject: physics
subjectName: Physics
topic: kinetic-theory
topicName: Kinetic Theory of Gases
weight: 3
country: india
generated: 2026-04-23
lastUpdated: "2026-09-17"
---

# Kinetic Theory of Gases

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Kinetic Theory** models a gas as an enormous number of point-like molecules in random, elastic collisions. From this microscopic picture, the macroscopic variables **pressure (P)**, **volume (V)**, and **absolute temperature (T)** emerge.

- **Ideal gas law:** $PV = nRT$, where $P$ = pressure (Pa, $[\text{M L}^{-1}\text{T}^{-2}]$), $V$ = volume (m³, $[\text{L}^3]$), $n$ = moles, $T$ = temperature (K, $[\text{K}]$), $R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}$.
- **Pressure from collisions:** $P = \frac{1}{3}\frac{N m v_{rms}^2}{V}$, with $N$ = number of molecules, $m$ = mass of one molecule (kg), $v_{rms}$ = root-mean-square speed (m/s).
- **RMS speed:** $v_{rms} = \sqrt{3RT/M} = \sqrt{3k_B T / m}$, where $M$ = molar mass (kg/mol) and $k_B = 1.38 \times 10^{-23}\ \text{J/K}$.
- **Average KE per molecule:** $\langle E_k \rangle = \frac{3}{2} k_B T$.

> 💡 **High-Yield Memory Hook:** **"3 for 3"** — three molecular speeds (most probable, mean, RMS) all share the form $\sqrt{(\text{constant})\cdot RT/M}$ with constants **2, 8/π, 3**. For temperature: **"3R/2 per mole, 3k/2 per molecule"** — always thermal KE.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Postulates of Kinetic Theory

The theory rests on five assumptions. Any deviation from these gives real-gas behaviour.

1. A gas contains a very large number of molecules moving in random directions.
2. The volume of each molecule is negligible compared to the container volume.
3. Collisions between molecules and with walls are perfectly elastic (no energy loss).
4. The time of collision is negligible compared to the time between collisions.
5. There are no intermolecular forces except during the brief collision itself.

#### Pressure Derivation (Mechanism)

Consider $N$ molecules, each of mass $m$, in a cube of side $L$. A single molecule moving with $v_x$ towards a wall changes momentum by $2m v_x$ per collision. Since it makes $v_x / 2L$ collisions per second on that wall, the force is $N \cdot m v_{rms}^2 / L$. Dividing force by wall area $L^2$ and noting $V = L^3$:

$$P = \frac{1}{3}\frac{N m v_{rms}^2}{V} = \frac{2}{3}\frac{N}{V}\langle E_k \rangle$$

Combining with the ideal gas law recovers $\langle E_k \rangle = \frac{3}{2} k_B T$.

#### Degrees of Freedom & Equipartition

| Gas type | f (degrees of freedom) | $C_v$ (mol basis) | $C_p$ (mol basis) | $\gamma = C_p/C_v$ |
|---|---|---|---|---|
| Monatomic (He, Ne) | 3 (translational) | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $\frac{5}{3} \approx 1.67$ |
| Diatomic (O₂, N₂) at room T | 5 (3 trans + 2 rot) | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $\frac{7}{5} = 1.40$ |
| Polyatomic (CO₂, CH₄) | 6 or more | $\frac{6}{2}R$ or higher | $\frac{8}{2}R$ or higher | approaches 1.33 |

The **law of equipartition of energy** assigns $\frac{1}{2} k_B T$ per molecule per degree of freedom, so total internal energy $U = \frac{f}{2} n R T$.

#### Concept Comparison Matrix

| Quantity | Symbol | Formula | SI unit |
|---|---|---|---|
| Most probable speed | $v_p$ | $\sqrt{2RT/M}$ | m/s |
| Mean speed | $\bar{v}$ | $\sqrt{8RT/(\pi M)}$ | m/s |
| RMS speed | $v_{rms}$ | $\sqrt{3RT/M}$ | m/s |
| Mean free path | $\lambda$ | $\dfrac{1}{\sqrt{2}\,\pi d^2 n}$ | m |
| Specific heat relation | $C_p - C_v$ | $R$ | J mol⁻¹ K⁻¹ |

#### 🎯 Exam-Level Worked Problem

**Question:** The RMS speed of oxygen molecules at 27 °C is $v$. To double this speed, the temperature must be raised to:
(a) 54 °C (b) 108 °C (c) 927 °C (d) 1200 °C

#### Solution:
Since $v_{rms} \propto \sqrt{T}$, doubling $v_{rms}$ requires $T_f / T_i = 2^2 = 4$.
$T_i = 27 + 273 = 300\ \text{K}$, so $T_f = 4 \times 300 = 1200\ \text{K} = 927\ °C$.
**Answer: (c) 927 °C**.

> ⚠️ **Examiner Trap:** Students often write $2T_i$ (double temperature → double speed). Because $v_{rms} \propto \sqrt{T}$, the temperature must be **multiplied by four**, not two. Always convert °C to K before plugging into the formula.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Real-Gas Behaviour

1. **Vibrational modes activate at high T.** Above ~1000 K, a diatomic molecule's vibrational degree of freedom contributes, raising $f$ toward 7 and pushing $\gamma$ closer to $\frac{9}{7}$.
2. **Low-temperature quantum effects.** Below characteristic temperatures ($\Theta_{rot}$, $\Theta_{vib}$), rotational/vibrational modes "freeze out," reducing effective $f$.
3. **Boyle temperature** — the temperature at which a real gas behaves ideally over a wide pressure range.
4. **Absolute zero quantum correction.** Classically $E_k \to 0$ as $T \to 0$, but quantum mechanics reserves zero-point energy, so molecular motion never fully ceases.
5. **Van der Waals correction** for real gases: $\left(P + a n^2 / V^2\right)(V - nb) = nRT$, where $a$ accounts for attractive forces and $b$ for finite molecular size.

#### Advanced Traps

1. Using Celsius scale directly in $PV = nRT$ — only Kelvin is valid.
2. Mixing $\bar{v}$, $v_p$, and $v_{rms}$ in the pressure formula, which uses only $v_{rms}$.
3. Assuming $\gamma = 1.67$ for all gases — depends on whether monatomic, diatomic, or polyatomic.
4. Forgetting that $\lambda \propto T/P$, so at constant $T$, $\lambda$ decreases with rising pressure.

#### Practice Prompts

1. Compute $v_{rms}$ of helium at $300\ \text{K}$ ($M = 4 \times 10^{-3}\ \text{kg/mol}$) and compare it with oxygen at the same T.
2. For a triatomic nonlinear gas with $f = 6$, derive $C_v$, $C_p$, and $\gamma$, then find the change in internal energy when 2 mol is heated from 300 K to 500 K.

#### Exam Strategy

NEET UG asks 1–2 questions per year from this chapter (≈3% weightage). Expect either a direct formula MCQ on $v_{rms}$ / $\lambda$ or a conceptual item on degrees of freedom and the equipartition theorem linked to specific heats. Read the question stem for **gas type** and **temperature range** before choosing $\gamma$.

---

## Continue your study

- **[View this topic in your NEET UG roadmap](/roadmap/?exam=neet&duration=1mo)** — see where "Kinetic Theory of Gases" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET UG exam overview](/exams/neet/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neet/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
