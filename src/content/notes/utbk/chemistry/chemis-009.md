---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-009
topicName: Deriving Ksp from Molar Solubility
weight: 4
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Deriving Ksp from Molar Solubility

### 🟢 Lite — Quick Review (1h–1d)
> Read this in under a minute: every fact here is a multiple-choice shortcut.

Every sparingly soluble ionic salt has two numbers that describe it — **molar solubility** (s, mol·L⁻¹) and the **solubility product constant** (Ksp, dimensionless in activity terms but reported in (mol·L⁻¹)^(x+y)). The derivation is mechanical: write the dissolution, replace each ion concentration with its stoichiometric multiple of s, multiply, simplify. UTBK/SNPMTN tests three shapes almost exclusively.

| Salt type | Ksp expression | Solve for s |
|---|---|---|
| MX (AgCl) | s² | s = √Ksp |
| MX₂ (CaF₂) | 4s³ | s = ∛(Ksp/4) |
| M₂X₃ (Bi₂S₃) | 108 s⁵ | s = (Ksp/108)^(1/5) |

> 💡 **High-Yield Memory Hook — "CXC, CaFaCubed":** **C**l⁻·**A**g⁺ squared → **C**a²⁺·**F**⁻ cubed (4 in front) → **B**i₂·**S**₃ fifth power (108 in front). The coefficient is always x^x · y^y, the power is always x+y.

### 🟡 Standard — Regular Study (2d–2mo)

> Working knowledge for the two-month slog — derivation, problem shapes, and one fully worked UTBK-style question.

#### The four-step derivation

Take any sparingly soluble salt $M_xA_y$ dissolving in water:

$$M_xA_y(s) \rightleftharpoons x\,M^{a+}(aq) + y\,A^{x-}(aq)$$

1. **Let s be the molar solubility** in mol·L⁻¹. The stoichiometry forces $[M^{a+}] = x \cdot s$ and $[A^{x-}] = y \cdot s$.
2. **Write the Ksp expression** with each ion raised to its stoichiometric coefficient: $K_{sp} = [M^{a+}]^x [A^{x-}]^y$.
3. **Substitute**: $K_{sp} = (x s)^x (y s)^y = x^x \, y^y \, s^{x+y}$.
4. **Solve for s**: $s = \left(\dfrac{K_{sp}}{x^x \, y^y}\right)^{1/(x+y)}$.

The Ksp itself depends only on temperature; adding a common ion suppresses s but leaves Ksp untouched.

#### Comparing the three stoichiometric families

| Feature | MX (1:1) | MX₂ or M₂X (1:2 / 2:1) | M₂X₃ (2:3) |
|---|---|---|---|
| Ksp in terms of s | s² | 4s³ | 108 s⁵ |
| Power (x+y) | 2 | 3 | 5 |
| Pre-factor x^x·y^y | 1 | 4 | 108 |
| s from Ksp | √Ksp | ∛(Ksp/4) | (Ksp/108)^(1/5) |
| Typical UTBK examples | AgCl, BaSO₄ | CaF₂, PbCl₂, Ag₂CrO₄ | Bi₂S₃, Fe₂S₃ |
| Common slip | Confusing s² with Ksp = 2s | Forgetting the 4 in front | Missing the 108 coefficient |

#### 🎯 Exam-Level Worked Problem

The solubility product of CaF₂ at 25 °C is $3.2 \times 10^{-11}$. Calculate the molar solubility of CaF₂ in pure water, and decide whether a precipitate forms when 100 mL of 0.010 M Ca(NO₃)₂ is mixed with 100 mL of 0.020 M NaF.

**Setting up the dissolution.** Write $CaF_2(s) \rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$. With s mol·L⁻¹ dissolving, $[Ca^{2+}] = s$ mol·L⁻¹ and $[F^-] = 2s$ mol·L⁻¹. Substituting:

$$K_{sp} = [Ca^{2+}][F^-]^2 = (s)(2s)^2 = 4s^3$$

**Solving for s in pure water.** $s = \sqrt[3]{K_{sp}/4} = \sqrt[3]{3.2 \times 10^{-11}/4} = \sqrt[3]{8.0 \times 10^{-12}} = 2.0 \times 10^{-4}$ mol·L⁻¹.

**Mixing the two solutions.** Doubling the volume halves each concentration: $[Ca^{2+}]_0 = 0.0050$ mol·L⁻¹, $[F^-]_0 = 0.010$ mol·L⁻¹. Compute the reaction quotient:

$$Q = [Ca^{2+}]_0 [F^-]_0^2 = (5.0 \times 10^{-3})(1.0 \times 10^{-2})^2 = 5.0 \times 10^{-7}$$

Since $Q = 5.0 \times 10^{-7} \gg K_{sp} = 3.2 \times 10^{-11}$, precipitation is spontaneous.

> ⚠️ **Examiner Trap:** Students often write Ksp for CaF₂ as $s \cdot 2s = 2s^2$, forgetting that the F⁻ concentration is *squared* in the equilibrium expression. The correct form is $4s^3$, not $2s^2$.

### 🔴 Extended — Deep Study (3mo+)

> Boundary conditions, links to thermodynamics, and the traps UTBK item writers exploit once the easy questions are exhausted.

#### When the simple formula breaks

The clean relation $K_{sp} = x^x y^y s^{x+y}$ rests on three assumptions: the salt dissolves completely into free ions, the solution is dilute enough that activity ≈ concentration, and no ion reacts further with water. Violate any of these and the textbook shortcut needs correction.

- **Hydrated salts.** CaSO₄·2H₂O releases the same ions as anhydrous CaSO₄, so Ksp is unchanged. The mass that dissolves per litre is larger because the molar mass now includes 2 × 18 g of water of crystallisation; the *molar* solubility s stays the same.
- **Salts of weak acids or weak bases.** CaCO₃, FeS, and Al(OH)₃ contain anions that hydrolyse. The free-ion concentration is lower than the stoichiometric multiple of s, so the true Ksp is reached at a higher s than the simple formula predicts.
- **Ionic strength effects.** At concentrations above about 0.1 M, the activity coefficient γ departs from 1 and $K_{sp}^{true} = \gamma_+^{x} \gamma_-^{y} \, [M^{a+}]^x [A^{x-}]^y$. UTBK questions stay below this threshold.

#### Edge cases worth memorising

| Situation | Effect on s | Effect on Ksp |
|---|---|---|
| Add common ion (e.g. Cl⁻ to AgCl) | Decreases | Unchanged (constant of T) |
| Raise temperature (dissolution endothermic) | Increases | Increases |
| Raise temperature (dissolution exothermic) | Decreases | Decreases |
| Add a non-common ion at high concentration | Often increases slightly (salt-in) | Unchanged |
| Add acid to a salt of weak acid (e.g. CaCO₃ + H⁺) | Increases sharply | Unchanged |
| Complexation (e.g. Ag⁺ + NH₃ → [Ag(NH₃)₂]⁺) | Increases sharply | Unchanged |

#### Thermodynamic bridge

The solubility product links directly to the standard Gibbs energy of dissolution through $\Delta G^\circ = -RT \ln K_{sp}$, where R = 8.314 J·mol⁻¹·K⁻¹ and T is absolute temperature. A negative ΔG° means dissolution is spontaneous; for most sparingly soluble salts ΔG° is positive, which is exactly why a saturated solution holds so little.

#### Advanced practice prompts

1. A salt of formula M₃X₂ has $K_{sp} = 1.08 \times 10^{-28}$ at 25 °C. Derive the algebraic form of $K_{sp}$ in terms of s, then calculate s in mol·L⁻¹ and convert it to mg·L⁻¹ given the molar mass of M₃X₂ is 100 g·mol⁻¹.
2. Pure water at 25 °C in contact with solid BaF₂ has measured $[F^-] = 8.0 \times 10^{-3}$ mol·L⁻¹. Without looking up a table, recover the Ksp of BaF₂ from this single measurement, and state the assumption you must make about the salt's dissolution stoichiometry.

## Continue your study

- **[View this topic in your UTBK/SNPMTN (Indonesia) roadmap](/roadmap/?exam=utbk&duration=1mo)** — see where "Deriving Ksp from Molar Solubility" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=utbk&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UTBK/SNPMTN (Indonesia) exam overview](/exams/utbk/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/utbk/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
