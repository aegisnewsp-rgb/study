---
exam: waec
examName: WAEC WASSCE
subject: chemistry
subjectName: Chemistry
topic: chem-9
topicName: Chemical Kinetics and Rate of Reaction
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.643723"
diagramPrompt: "Clear scientific diagram of Chemical Kinetics and Rate of Reaction with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style
---
# Chemical Kinetics and Rate of Reaction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Rate of Reaction:** Change in concentration of a reactant or product per unit time. Units: mol dm⁻³ s⁻¹.

$$\text{Rate} = \frac{\Delta C}{\Delta t}$$

**Five Factors Affecting Rate:**
1. **Temperature** — higher temperature → faster rate
2. **Concentration** — higher concentration → faster rate (for solution/gas reactions)
3. **Surface area** — larger surface area → faster rate (for solid reactants)
4. **Catalyst** — presence of a catalyst → faster rate (lower activation energy)
5. **Light** — some reactions speed up in presence of light (photochemical reactions)

**Rate Expression:** For $aA + bB \rightarrow products$, the rate law is:
$$r = k[A]^m[B]^n$$
where $k$ = rate constant, $m$ and $n$ = reaction orders with respect to A and B.

**Zero, First, and Second Order:**
- Zero order: rate is constant, independent of concentration. Graph of [A] vs time is a straight line with negative gradient.
- First order: rate is directly proportional to concentration of one reactant. Graph of $\ln[A]$ vs time is linear.
- Half-life ($t_{1/2}$) for first order is constant: $t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$

⚡ **WAEC Exam Tip:** WAEC Paper 2 often asks you to deduce the order of reaction from experimental data. Use the **initial rates method**: if doubling [A] doubles the rate, the reaction is first order with respect to A. If doubling [A] quadruples the rate, it is second order with respect to A.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Collision Theory:**
For a reaction to occur, particles must:
1. **Collide** with each other
2. Have sufficient **energy** (equal to or greater than the activation energy, $E_a$)
3. Have the correct **orientation** upon collision

Only a small fraction of collisions have energy ≥ $E_a$ and correct orientation — these are the **effective/successful collisions**.

**Activation Energy ($E_a$):** The minimum energy that colliding particles must possess for a chemical reaction to occur. It is the energy barrier between reactants and products. A catalyst lowers $E_a$ by providing an alternative pathway.

**Arrhenius Equation:**
$$k = Ae^{-E_a/RT}$$
where $A$ = frequency factor, $R$ = gas constant (8.31 J mol⁻¹ K⁻¹), $T$ = temperature in Kelvin.

**Two-Point Arrhenius Calculation (WAEC focus):**
$$\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

Example: If $k_1 = 1.0 \times 10^{-3}$ s⁻¹ at $T_1 = 298$ K, and $k_2 = 3.0 \times 10^{-3}$ s⁻¹ at $T_2 = 308$ K:
$$\ln\frac{3.0 \times 10^{-3}}{1.0 \times 10^{-3}} = \frac{E_a}{8.31}\left(\frac{1}{298} - \frac{1}{308}\right)$$
$$\ln 3.0 = \frac{E_a}{8.31} \times 1.09 \times 10^{-4}$$
$$E_a = \frac{1.099 \times 8.31}{1.09 \times 10^{-4}} = 83,800 \text{ J mol}^{-1} \approx 84 \text{ kJ mol}^{-1}$$

⚡ **WAEC Exam Tip:** When asked to calculate activation energy, ALWAYS convert temperature to Kelvin ($T_K = T_°C + 273$) and $E_a$ to J mol⁻¹ (not kJ mol⁻¹) before substituting into the Arrhenius equation. Using kJ in the equation without converting will give a wrong numerical answer.

**Rate-Determining Step:** In a multi-step reaction mechanism, the slowest step determines the overall rate of reaction. The rate law is determined by the stoichiometry of this slow step.

**Experimental Determination of Rate:**
- Measure volume of gas evolved at regular time intervals (gas collection method)
- Measure change in concentration of a coloured reagent spectrophotometrically
- Titrate samples withdrawn at intervals against a standard solution

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Order of Reaction — Detailed Interpretation:**
The overall order of reaction is $m + n$. Some important cases:
- Overall order 0: rate = $k$, rate is independent of concentration
- Overall order 1: rate = $k[A]$, half-life is constant
- Overall order 2: rate = $k[A]^2$ or $k[A][B]$, half-life depends on initial concentration

**Reaction Order from Concentration-Time Data:**
For a first-order reaction: $[A]_t = [A]_0 e^{-kt}$, so $\ln[A]_t = \ln[A]_0 - kt$.
For a second-order reaction: $\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$.
Plotting the appropriate function against time gives a straight line — the gradient gives $k$.

**Temperature and Rate — The Rule of Thumb:**
For many reactions, the rate approximately doubles for every 10°C rise in temperature. This is because:
1. More molecules have energy ≥ $E_a$ (Boltzmann distribution)
2. Molecules move faster, increasing collision frequency

This rule is approximate — the Arrhenius equation gives the exact relationship.

**Catalysts — Enzyme Catalysts (Biological Relevance):**
Enzymes are biological catalysts made of protein. They are:
- **Specific:** Lock-and-key model — only substrates with the correct shape fit the active site
- **Efficient:** Lower $E_a$ significantly, often by 100–1000 times compared to inorganic catalysts
- **Not consumed:** The enzyme is regenerated after each catalytic cycle

**Order of Reaction in Multi-Step Mechanisms:**
Consider the reaction: $2NO + O_2 \rightarrow 2NO_2$.
Mechanism:
Step 1 (slow): $2NO \rightarrow N_2O_2$
Step 2 (fast): $N_2O_2 + O_2 \rightarrow 2NO_2$

The slow step is rate-determining. Rate = $k[NO]^2$ (second order in NO, zero order in $O_2$). This explains why doubling [NO] quadruples the rate, while doubling [$O_2$] has no effect.

⚡ **WAEC Exam Tip:** WAEC Paper 2 (Practical) questions on kinetics often involve a clock reaction where a visible change (colour, precipitate) occurs after a specific time. You may be asked to plot a graph of 1/time vs concentration to determine order. Remember: initial rate is proportional to 1/time in many clock reactions.

**Graphical Determination of Order:**

| Graph Type | Linear for which order? | Gradient = |
|-----------|------------------------|-----------|
| $[A]$ vs time | Zero order | $-k$ |
| $\ln[A]$ vs time | First order | $-k$ |
| $\frac{1}{[A]}$ vs time | Second order | $+k$ |

**Comparative Study — Effect of Temperature vs Catalyst:**

| Factor | Effect on Rate | How it Works |
|--------|---------------|-------------|
| Increase temperature | Rate increases | More molecules have $E \geq E_a$ |
| Increase concentration | Rate increases | More effective collisions per second |
| Add catalyst | Rate increases | Lowers $E_a$, more collisions succeed |
| Increase surface area | Rate increases | More particles exposed for collision |

**WAEC Past Question Patterns:**
- Calculating rate from experimental data (volume of gas vs time)
- Determining order using initial rates method
- Calculating $E_a$ using two-point Arrhenius equation
- Drawing and interpreting rate-concentration graphs
- Explaining collision theory using Maxwell-Boltzmann distribution curves
- Describing the effect of a catalyst on $E_a$ and reaction rate using a potential energy diagram

⚡ **WAEC Exam Tip:** On potential energy diagrams, be clear that a catalyst lowers the activation energy (both forward and reverse) equally — it does not change the enthalpy ($\Delta H$) of the reaction. The products and reactants are energetically the same; only the pathway is different.
