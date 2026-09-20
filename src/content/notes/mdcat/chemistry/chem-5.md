---
exam: mdcat
examName: MDCAT
subject: chemistry
subjectName: Chemistry
topic: chem-5
topicName: Chemical Equilibrium
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.095848"
lastUpdated: "2026-09-20"
diagramPrompt: "Clear scientific diagram of Chemical Equilibrium with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"


---

# Chemical Equilibrium

### 🟢 Lite — Quick Review (1h–1d)
> The single most-tested rule: equilibrium is about equal **rates**, not equal **concentrations**.

**Chemical equilibrium** describes a reversible reaction whose forward and reverse rates match, leaving macroscopic concentrations unchanged — yet molecules keep reacting in both directions (dynamic equilibrium).

- **Equilibrium constant (Kc):** $K_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$; concentrations in mol·dm⁻³. Products on top, reactants on bottom, each raised to its stoichiometric coefficient.
- **Pressure form (Kp):** uses partial pressures in Pa or atm; linked to Kc by $K_p = K_c(RT)^{\Delta n}$ where $\Delta n$ = gaseous moles of products − gaseous moles of reactants.
- **Le Chatelier's principle:** the system shifts to *oppose* any imposed change (concentration, temperature, pressure, catalyst does nothing).
- **Reaction quotient Q:** compare Q with K to predict direction — Q < K shifts right, Q > K shifts left.

> 💡 **High-Yield Memory Hook:** **"Cats Climb, Products on Top"** — for Kc, write **C**atalysts do nothing, **C**oncentrations stay constant, then put **P**roducts up top. Pair this with **"Lions Eat People"** — **L**e **C**hatelier's shifts to **E**at the **P**roblem (counter the change).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Concentrations can sit at any ratio at equilibrium; what must be equal is the forward and reverse reaction rate.

#### What "equilibrium" actually means

A reaction $aA + bB \rightleftharpoons cC + dD$ is at equilibrium when the rate of the forward reaction equals the rate of the reverse reaction. Concentrations of A, B, C, D are *constant*, not necessarily *equal*. This distinction trips students every paper.

#### Equilibrium constant expressions

| Expression | Formula | Variables & units |
|---|---|---|
| Concentration-based | $K_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ | $[X]$ in mol·dm⁻³; Kc dimensionless when activities used |
| Pressure-based | $K_p = \dfrac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$ | $P_X$ in Pa or atm |
| Kp–Kc link | $K_p = K_c(RT)^{\Delta n}$ | $R = 8.314$ J·mol⁻¹·K⁻¹ (Pa) or 0.0821 dm³·atm·mol⁻¹·K⁻¹ |
| Weak acid | $K_a = \dfrac{[H^+][A^-]}{[HA]}$ | mol·dm⁻³ each |
| Weak base | $K_b = \dfrac{[B^+][OH^-]}{[BOH]}$ | mol·dm⁻³ each |

For heterogeneous equilibria, pure solids and pure liquids drop out (activity = 1). Writing $[CaO]$ or $[H_2O(l)]$ into the expression is a guaranteed mark loss.

#### What does and does not change K

- **Temperature changes K** (endothermic: K rises with T; exothermic: K falls).
- Concentration, pressure (with $\Delta n \neq 0$), and adding/removing species **shift the position** but leave K unchanged at constant T.
- **Catalysts** shorten the time to reach equilibrium but do not move the position and do not change K.

#### Comparison: commonly confused pairs

| Concept A | Concept B | The real difference |
|---|---|---|
| Q (reaction quotient) | K (equilibrium constant) | Same formula form; Q uses *current* concentrations, K uses *equilibrium* concentrations |
| Kc | Kp | Kc uses mol·dm⁻³; Kp uses partial pressures; related by $(RT)^{\Delta n}$ |
| Rate constant k | Equilibrium constant K | k is for one direction at given T; K = k_forward / k_reverse |
| Inert gas at constant V | Inert gas at constant P | No shift at constant volume; shifts (when $\Delta n \neq 0$) at constant pressure |

#### Predicting the shift using Le Chatelier's principle

1. Identify the change (species added, removed, T altered, V altered, P altered).
2. Decide how the system must respond to *undo* that change.
3. Confirm by computing Q: if Q < K → forward shift; if Q > K → reverse shift.

#### Worked exam-style question

For the reaction $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$ at 400 K, $K_c = 0.50$ mol⁻²·dm⁶. At one moment the mixture contains $[N_2] = 1.0$, $[H_2] = 1.0$, $[NH_3] = 0.10$ mol·dm⁻³. In which direction does the reaction shift?

#### Step 1 — Write Q with current values.
$$Q_c = \frac{[NH_3]^2}{[N_2][H_2]^3} = \frac{(0.10)^2}{(1.0)(1.0)^3} = \frac{0.010}{1.0} = 0.010 \text{ mol}^{-2}\text{·dm}^6$$

#### Step 2 — Compare with Kc.
$Q_c = 0.010 < K_c = 0.50$ → the reaction proceeds **forward** to produce more NH₃.

**Step 3 — Cross-check with Le Chatelier's principle.** The reactant side is in excess relative to equilibrium, so the system shifts right, consuming N₂ and H₂ to raise $[NH_3]$ until Q equals K.

> ⚠️ **Examiner Trap:** Students often compute Q and then state "shift forward" without verifying the comparison — but the UHS MCQs also include items where $\Delta n \neq 0$ and a temperature change is described. Always check *both* Q vs K *and* whether temperature has been altered, because K itself moves when T changes.

---

### 🔴 Extended — Deep Study (3mo+)
> The trap-heavy zone: $\Delta n$ sign, heterogeneous equilibria, and the catalyst misread.

#### Edge cases that decide top-rank scores

- **Sign of $\Delta n$ in Kp = Kc(RT)^Δn.** A reaction with 2 mol gas → 3 mol gas has $\Delta n = +1$, *not* −1. Writing the negative value flips the relation and the answer is off by a factor of RT.
- **Inert gas at constant volume** leaves partial pressures of reacting gases untouched, so no shift occurs. The classic wrong choice: "adding argon shifts equilibrium" — only true if total pressure is allowed to rise (constant P case).
- **Catalysts and equilibrium position.** MnO₂ in the decomposition of H₂O₂ or Fe in the Haber process speeds up both directions equally. Position stays fixed; K is unchanged; only the time-to-equilibrium shortens.
- **Effect of temperature in endothermic vs exothermic directions.** Heating an exothermic reaction *decreases* K; cooling it *increases* K. Many MCQs flip this on purpose.

#### Worked numeric: degree of dissociation

For a weak acid HA with initial concentration $c = 0.10$ mol·dm⁻³ and $K_a = 1.8 \times 10^{-5}$:
$$\alpha = \sqrt{\frac{K_a}{c}} = \sqrt{\frac{1.8 \times 10^{-5}}{0.10}} = \sqrt{1.8 \times 10^{-4}} \approx 0.0134$$
So roughly 1.34% of HA molecules dissociate; $[H^+] = \alpha c \approx 1.34 \times 10^{-3}$ mol·dm⁻³, giving pH ≈ 2.87.

#### Linkage to adjacent MDCAT chapters

- **Acids & Bases** — every $K_a$, $K_b$, $K_w$ is an equilibrium constant; the same expression rules apply.
- **Thermodynamics** — $\Delta G^\circ = -RT \ln K$ connects K to free energy; expect a numerical or conceptual crossover question.
- **Electrochemistry** — Nernst equation uses equilibrium constants of redox half-reactions.
- **Chemical Kinetics** — $K = k_f / k_r$; the Arrhenius equation shows *why* heating shifts K.

#### Advanced practice prompts

1. For $PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g)$ at 250 °C, $K_p = 1.80$ atm. Total pressure is raised from 1.0 atm to 4.0 atm at constant T. Does the mole fraction of $PCl_5$ increase, decrease, or stay the same? Justify with Q vs K and with $\Delta n$.
2. For the heterogeneous reaction $CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)$, write the equilibrium expression. A student writes $K_p = \dfrac{[CaO][CO_2]}{[CaCO_3]}$. Identify every error and supply the correct form.

#### Quick numerical cheats to memorise

| Quantity | Value | Use |
|---|---|---|
| R (SI) | 8.314 J·mol⁻¹·K⁻¹ | Kp with pressures in Pa |
| R (chemistry) | 0.0821 dm³·atm·mol⁻¹·K⁻¹ | Kp with pressures in atm |
| $K_w$ at 25 °C | $1.0 \times 10^{-14}$ mol²·dm⁻⁶ | acid–base link |
| $\Delta n$ rule | $\Delta n = \Sigma n_{gas,\,products} - \Sigma n_{gas,\,reactants}$ | sign in Kp–Kc |

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Chemical Equilibrium" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/mdcat/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
