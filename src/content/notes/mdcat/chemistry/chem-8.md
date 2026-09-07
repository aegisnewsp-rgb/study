---
exam: mdcat
examName: MDCAT
subject: chemistry
subjectName: Chemistry
topic: chem-8
topicName: Reaction Kinetics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.096971"
lastUpdated: "2026-09-07"
diagramPrompt: "Clear scientific diagram of Reaction Kinetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"
---

# Reaction Kinetics: Rate Laws, Order of Reaction, Arrhenius Theory & Catalysis

Chemical kinetics investigates the rates of chemical transformations, the thermodynamic and spatial energy barriers governing molecular collisions, and the step-by-step reaction mechanisms by which reactants convert to products. For medical aspirants sitting the MDCAT (Medical & Dental College Admission Test) regulated by the Pakistan Medical and Dental Council (PMDC), reaction kinetics is one of the highest-yield physical chemistry chapters. Examiners regularly test initial rate methods, half-life dependencies, unit derivations of the velocity constant, Arrhenius temperature calculations, and activation energy profile diagrams.

---

## Complete 3-Tier Study Guide

### 🟢 Lite — Quick Revision (1h–1d sprint)

For rapid formula recall before test day, memorize these core definitions, formulas, and units:

- **Rate of Reaction**:
  $$\text{Rate} = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = +\frac{1}{c}\frac{d[C]}{dt} = +\frac{1}{d}\frac{d[D]}{dt}$$
  Standard SI units: $\text{mol}\cdot\text{dm}^{-3}\cdot\text{s}^{-1}$ or $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$. The negative sign indicates decreasing reactant concentration.
- **Differential Rate Law & Reaction Order**:
  $$\text{Rate} = k[A]^m[B]^n$$
  - The exponents $m$ and $n$ represent partial orders with respect to reactants $A$ and $B$.
  - **Overall order of reaction** is $n_{total} = m + n$.
  - Order is determined **purely experimentally**; it cannot be deduced from the stoichiometric coefficients of a balanced chemical equation unless the reaction is an elementary single-step process.
  - Order can be zero, integer (1, 2, 3), fractional, or even negative.
- **General Formula for Units of Rate Constant ($k$)**:
  $$\text{Units of } k = (\text{mol}\cdot\text{dm}^{-3})^{1-n} \cdot \text{s}^{-1} = \text{M}^{1-n}\cdot\text{s}^{-1}$$
  where $n$ is the overall order of the reaction:
  - *Zero Order ($n=0$)*: $\text{mol}\cdot\text{dm}^{-3}\cdot\text{s}^{-1}$ (same units as rate).
  - *First Order ($n=1$)*: $\text{s}^{-1}$ or $\text{min}^{-1}$ (independent of concentration).
  - *Second Order ($n=2$)*: $\text{dm}^3\cdot\text{mol}^{-1}\cdot\text{s}^{-1}$ or $\text{M}^{-1}\cdot\text{s}^{-1}$.
  - *Third Order ($n=3$)*: $\text{dm}^6\cdot\text{mol}^{-2}\cdot\text{s}^{-1}$ or $\text{M}^{-2}\cdot\text{s}^{-1}$.
- **Half-Life ($t_{1/2}$) Proportionality**:
  $$t_{1/2} \propto \frac{1}{[A]_0^{n-1}}$$
  - Zero order: $t_{1/2} = \frac{[A]_0}{2k}$ (directly proportional to initial concentration $[A]_0$).
  - First order: $t_{1/2} = \frac{0.693}{k}$ (**completely independent** of initial concentration $[A]_0$).
  - Second order: $t_{1/2} = \frac{1}{k[A]_0}$ (inversely proportional to initial concentration $[A]_0$).
- **Arrhenius Equation**:
  $$k = A e^{-E_a / RT} \implies \ln k = \ln A - \frac{E_a}{RT}$$
  Two-temperature form for calculating activation energy ($E_a$):
  $$\log_{10}\left(\frac{k_2}{k_1}\right) = \frac{E_a}{2.303 R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)$$
  where $R = 8.314 \text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.

---

### 🟡 Standard — Core Exam Concepts (2d–2mo preparation)

In this standard preparation tier, we examine the quantitative determination of reaction orders, graphical representations of integrated rate laws, and collision dynamics.

#### 1. Integrated Rate Laws and Graphical Analysis

To determine reaction order experimentally, chemists employ integrated rate laws that link reactant concentration directly to elapsed time $t$:

```
+-----------------------------------------------------------------------------------------+
|                  INTEGRATED RATE EQUATIONS AND GRAPHICAL SIGNATURES                     |
+-----------------------------------------------------------------------------------------+
| ORDER  | INTEGRATED RATE LAW                | LINEAR PLOT (y vs x)    | SLOPE  | HALF-LIFE|
+--------+------------------------------------+-------------------------+--------+----------+
| Zero   | [A]_t = [A]_0 - k*t                | [A]_t vs t              | -k     | [A]₀/2k  |
+--------+------------------------------------+-------------------------+--------+----------+
| First  | ln[A]_t = ln[A]_0 - k*t            | ln[A]_t vs t            | -k     | 0.693/k  |
|        | log[A]_t = log[A]_0 - (k/2.303)*t  | log[A]_t vs t           | -k/2.3 |          |
+--------+------------------------------------+-------------------------+--------+----------+
| Second | 1/[A]_t = 1/[A]_0 + k*t            | 1/[A]_t vs t            | +k     | 1/(k[A]₀)|
+--------+------------------------------------+-------------------------+--------+----------+
```

1. **Zero-Order Reactions**:
   - Rate is independent of reactant concentration: $\text{Rate} = k$.
   - Common examples: Photochemical reaction between $H_2$ and $Cl_2$ over water, decomposition of gaseous ammonia ($NH_3$) on a hot tungsten or platinum catalyst surface at high pressure (where the catalyst surface is fully saturated with adsorbed gas molecules).
2. **First-Order Reactions**:
   - Rate depends linearly on reactant concentration: $\text{Rate} = k[A]$.
   - Radioactive decay of all unstable radioisotopes follows first-order kinetics strictly ($N_t = N_0 e^{-\lambda t}$).
   - Thermal decomposition of dinitrogen pentoxide: $2N_2O_5(g) \rightarrow 4NO_2(g) + O_2(g)$.
   - Decomposition of hydrogen peroxide in aqueous medium: $2H_2O_2(aq) \rightarrow 2H_2O(l) + O_2(g)$.
3. **Pseudo-First-Order Reactions**:
   - A bimolecular or higher-order reaction that is experimentally forced to follow first-order kinetics by taking one reactant in large excess.
   - Example: **Acid-catalyzed hydrolysis of ethyl acetate**:
     $$CH_3COOC_2H_5 + H_2O \xrightarrow{H^+} CH_3COOH + C_2H_5OH$$
     Because water is present in vast molar excess ($[H_2O] \approx 55.5 \text{ M}$), its concentration remains effectively constant throughout the reaction. The true rate law $\text{Rate} = k'[CH_3COOC_2H_5][H_2O]$ collapses to $\text{Rate} = k[CH_3COOC_2H_5]$, where $k = k'[H_2O]$.
   - Another example: Inversion of cane sugar (sucrose) into glucose and fructose in dilute acid.

#### 2. Experimental Methods for Determining Reaction Order

In MDCAT question stems, you will encounter data tables requiring order identification:

1. **Initial Rate Method (Method of Initial Rates)**:
   - Several experiments are conducted keeping temperature constant while initial concentrations $[A]_0$ and $[B]_0$ are systematically varied.
   - If doubling $[A]_0$ while keeping $[B]_0$ constant causes the rate to double, the order with respect to $A$ is $1$ ($2^1 = 2$).
   - If doubling $[A]_0$ quadruples the rate, the order with respect to $A$ is $2$ ($2^2 = 4$).
   - If doubling $[A]_0$ leaves the initial rate unchanged, the order with respect to $A$ is $0$ ($2^0 = 1$).
2. **Half-Life Method**:
   - By measuring half-life at two different initial concentrations $[A]_1$ and $[A]_2$:
     $$\frac{(t_{1/2})_1}{(t_{1/2})_2} = \left(\frac{[A]_2}{[A]_1}\right)^{n-1} \implies n = 1 + \frac{\log\left[\frac{(t_{1/2})_1}{(t_{1/2})_2}\right]}{\log\left(\frac{[A]_2}{[A]_1}\right)}$$
3. **Ostwald's Isolation Method**:
   - When multiple reactants are involved, all reactants except one are taken in overwhelming excess. The observed rate then reflects the partial order of the isolated reactant. By cycling this process for each reactant, all partial orders are determined individually.

---

### 🔴 Extended — Deep Analytical Study (3mo+ mastery)

In this advanced tier, we examine Collision Theory, Transition State Theory (Activated Complex), temperature coefficients, and catalytic reaction profiles.

#### 1. Collision Theory vs. Transition State Theory

Two complementary theories explain how chemical transformations occur at the molecular level:

1. **Collision Theory (Arrhenius, Lewis, Trautz)**:
   - For a reaction to take place, reactant molecules must collide with one another.
   - However, not all collisions lead to product formation. Only **effective collisions** result in chemical change.
   - An effective collision requires two simultaneous conditions:
     1. **Energy Criterion**: The colliding particles must possess kinetic energy equal to or greater than the **threshold energy** ($E_{threshold} = E_{reactants} + E_a$).
     2. **Orientation Criterion (Steric Factor, $P$)**: The colliding molecules must strike each other with proper spatial geometry so that existing bonds can be broken and new bonds formed simultaneously.
   - Mathematical rate equation:
     $$\text{Rate} = P \cdot Z_{AB} \cdot e^{-E_a / RT}$$
     where $Z_{AB}$ is the collision frequency and $P$ is the steric/probability factor.
2. **Transition State Theory / Activated Complex Theory (Eyring, Polanyi, Evans)**:
   - Reactants do not convert directly to products. Instead, they pass through an unstable, high-energy intermediate state known as the **activated complex** or **transition state**.
   - The activated complex is in quasi-equilibrium with the reactants and decomposes into products at a definite vibrational frequency.
   - **Activation Energy ($E_a$)**: The potential energy difference between the activated complex and the reactants.
   - **Enthalpy of Reaction ($\Delta H$)**:
     $$\Delta H = E_{a(forward)} - E_{a(reverse)}$$
     - If $E_{a(forward)} < E_{a(reverse)}$, then $\Delta H < 0$ (Exothermic reaction).
     - If $E_{a(forward)} > E_{a(reverse)}$, then $\Delta H > 0$ (Endothermic reaction).

#### 2. Effect of Temperature & The Temperature Coefficient ($\eta$)

- For most chemical reactions near room temperature, a $10^\circ\text{C}$ rise in temperature increases the reaction rate by a factor of 2 to 3.
- **Temperature Coefficient ($\eta$)**:
  $$\eta = \frac{k_{T + 10^\circ\text{C}}}{k_T} \approx 2 \text{ to } 3$$
- **Molecular Explanation via Maxwell-Boltzmann Distribution**:
  - Why does a mere $10^\circ\text{C}$ increase (from 300 K to 310 K, a ~3.3% increase in absolute temperature) cause the rate to double ($100\%$ increase)?
  - The total number of collisions increases by only about $1.5\%$ (since collision frequency $Z \propto \sqrt{T}$).
  - The dramatic rate acceleration is due to the **exponential increase in the fraction of molecules possessing kinetic energy $\ge E_a$** (represented by the term $e^{-E_a/RT}$). At $T_2$, the area under the Maxwell-Boltzmann curve beyond the threshold energy line more than doubles!

#### 3. Catalysis: Homogeneous, Heterogeneous & Enzymatic

A catalyst speeds up the rate of a chemical reaction without being consumed:
- **Mechanism of Action**:
  - Provides an alternative reaction pathway involving an activated complex with a **lower activation energy ($E_a' < E_a$)**.
  - Since $E_a$ appears in the negative exponent of $e^{-E_a/RT}$, a lower barrier dramatically increases the fraction of effective collisions.
  - A catalyst lowers the activation energy of the forward and reverse reactions by the **exact same amount** ($\Delta E_a$).
- **What a Catalyst CANNOT Do (Crucial MDCAT Concept)**:
  - Does **not** change the enthalpy of reaction ($\Delta H$).
  - Does **not** change the free energy change ($\Delta G$) or spontaneity.
  - Does **not** alter the equilibrium constant ($K_c$ or $K_p$).
  - Does **not** change the equilibrium concentrations or yield of products.
  - It merely accelerates the rate at which chemical equilibrium is attained.

---

## High-Yield Comparison Tables

### Table 1: Order vs. Molecularity of a Chemical Reaction

| Parameter | Order of Reaction | Molecularity of Reaction |
| :--- | :--- | :--- |
| **Fundamental Meaning** | Sum of powers of concentrations in experimental rate law | Number of reacting species colliding in an elementary step |
| **How It Is Determined** | Purely experimental from laboratory kinetics data | Theoretical concept deduced from proposed elementary mechanism |
| **Possible Values** | Can be zero, whole number (1, 2, 3), fractional, or negative | Must always be a positive integer (1 = unimolecular, 2 = bimolecular, 3 = termolecular) |
| **Applicability** | Applies to both elementary and complex multi-step reactions | Meaningful only for simple elementary steps; meaningless for overall complex reactions |
| **Pressure / Temp Dependence** | Can vary with changing reaction conditions (e.g., pressure) | Invariant property of a specific elementary collision mechanism |

### Table 2: Summary of Kinetic Parameters by Reaction Order

| Reaction Order | Differential Rate Law | Units of Rate Constant $k$ | Integrated Rate Law | Half-Life Expression ($t_{1/2}$) | Linear Graph ($y$ vs $x$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Zero Order ($n=0$)** | $\text{Rate} = k$ | $\text{mol}\cdot\text{dm}^{-3}\cdot\text{s}^{-1}$ | $[A]_t = [A]_0 - kt$ | $t_{1/2} = \frac{[A]_0}{2k}$ | $[A]_t$ vs. $t$ (slope $= -k$) |
| **First Order ($n=1$)** | $\text{Rate} = k[A]$ | $\text{s}^{-1}$ or $\text{min}^{-1}$ | $\ln[A]_t = \ln[A]_0 - kt$ | $t_{1/2} = \frac{0.693}{k}$ | $\ln[A]_t$ vs. $t$ (slope $= -k$) |
| **Second Order ($n=2$)** | $\text{Rate} = k[A]^2$ | $\text{dm}^3\cdot\text{mol}^{-1}\cdot\text{s}^{-1}$ | $\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$ | $t_{1/2} = \frac{1}{k[A]_0}$ | $\frac{1}{[A]_t}$ vs. $t$ (slope $= +k$) |
| **Third Order ($n=3$)** | $\text{Rate} = k[A]^3$ | $\text{dm}^6\cdot\text{mol}^{-2}\cdot\text{s}^{-1}$ | $\frac{1}{[A]_t^2} = \frac{1}{[A]_0^2} + 2kt$ | $t_{1/2} = \frac{3}{2k[A]_0^2}$ | $\frac{1}{[A]_t^2}$ vs. $t$ (slope $= +2k$) |

### Table 3: Types of Catalytic Systems in Industrial & Biological Chemistry

| Catalytic Type | Physical Phase Relationship | High-Yield Industrial / Biological Example | Catalyst Used | Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **Homogeneous Catalysis** | Catalyst and reactants are in the same physical phase | Lead Chamber Process: $2SO_2(g) + O_2(g) \rightarrow 2SO_3(g)$ | Nitric oxide gas ($NO(g)$) | Intermediate compound formation |
| **Heterogeneous Catalysis** | Catalyst and reactants are in different physical phases | Haber Process: $N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)$ | Finely divided solid Iron ($Fe(s)$) + $Al_2O_3/K_2O$ | Adsorption on active surface sites |
| **Heterogeneous Catalysis** | Gas-solid interface | Contact Process: $2SO_2(g) + O_2(g) \rightarrow 2SO_3(g)$ | Vanadium pentoxide ($V_2O_5(s)$) | Surface adsorption & oxidation state cycle |
| **Enzyme Catalysis** | Aqueous biological macromolecule | Hydrolysis of urea: $NH_2CONH_2 + H_2O \rightarrow 2NH_3 + CO_2$ | Urease enzyme | Lock-and-key / Induced-fit substrate binding |

---

## Worked MDCAT Practice Questions

### Question 1 (Determining Rate Law and Velocity Constant from Initial Rates)

**Question:** The initial rates of reaction $2A + B \rightarrow C + D$ were determined experimentally at $25^\circ\text{C}$ for different initial concentrations:
- Experiment 1: $[A]_0 = 0.10 \text{ M}, [B]_0 = 0.10 \text{ M}$, Initial Rate $= 2.0 \times 10^{-3} \text{ M}\cdot\text{s}^{-1}$
- Experiment 2: $[A]_0 = 0.20 \text{ M}, [B]_0 = 0.10 \text{ M}$, Initial Rate $= 8.0 \times 10^{-3} \text{ M}\cdot\text{s}^{-1}$
- Experiment 3: $[A]_0 = 0.10 \text{ M}, [B]_0 = 0.20 \text{ M}$, Initial Rate $= 4.0 \times 10^{-3} \text{ M}\cdot\text{s}^{-1}$

What is the overall order of the reaction and the numerical value of the rate constant $k$?
- (A) Order $= 2$, $k = 0.20 \text{ M}^{-1}\cdot\text{s}^{-1}$
- (B) Order $= 3$, $k = 2.0 \text{ M}^{-2}\cdot\text{s}^{-1}$
- (C) Order $= 3$, $k = 0.20 \text{ M}^{-2}\cdot\text{s}^{-1}$
- (D) Order $= 1$, $k = 2.0 \times 10^{-2} \text{ s}^{-1}$

**Detailed Solution:**
1. Let the differential rate equation be: $\text{Rate} = k[A]^m[B]^n$.
2. **Determine order with respect to $A$ (compare Exp 1 and Exp 2)**:
   $$\frac{\text{Rate}_2}{\text{Rate}_1} = \frac{8.0 \times 10^{-3}}{2.0 \times 10^{-3}} = 4.0$$
   $$\frac{k(0.20)^m(0.10)^n}{k(0.10)^m(0.10)^n} = \left(\frac{0.20}{0.10}\right)^m = 2^m$$
   $$2^m = 4 \implies m = 2$$
   The reaction is **second order** with respect to $A$.
3. **Determine order with respect to $B$ (compare Exp 1 and Exp 3)**:
   $$\frac{\text{Rate}_3}{\text{Rate}_1} = \frac{4.0 \times 10^{-3}}{2.0 \times 10^{-3}} = 2.0$$
   $$\frac{k(0.10)^m(0.20)^n}{k(0.10)^m(0.10)^n} = \left(\frac{0.20}{0.10}\right)^n = 2^n$$
   $$2^n = 2 \implies n = 1$$
   The reaction is **first order** with respect to $B$.
4. **Calculate overall order and rate constant $k$**:
   $$\text{Overall Order} = m + n = 2 + 1 = 3$$
   Using data from Experiment 1:
   $$2.0 \times 10^{-3} \text{ M}\cdot\text{s}^{-1} = k(0.10 \text{ M})^2(0.10 \text{ M})^1 = k(0.0010 \text{ M}^3)$$
   $$k = \frac{2.0 \times 10^{-3} \text{ M}\cdot\text{s}^{-1}}{1.0 \times 10^{-3} \text{ M}^3} = 2.0 \text{ M}^{-2}\cdot\text{s}^{-1} = 2.0 \text{ dm}^6\cdot\text{mol}^{-2}\cdot\text{s}^{-1}$$
- *Correct Answer:* **(B) Order $= 3$, $k = 2.0 \text{ M}^{-2}\cdot\text{s}^{-1}$**.

---

### Question 2 (Activation Energy & Equilibrium Concepts)

**Question:** In an exothermic chemical reaction $A \rightarrow B$, the activation energy for the forward reaction is $50 \text{ kJ}\cdot\text{mol}^{-1}$ and the enthalpy of reaction $\Delta H$ is $-30 \text{ kJ}\cdot\text{mol}^{-1}$. If a catalyst is added that lowers the activation energy of the forward reaction by $15 \text{ kJ}\cdot\text{mol}^{-1}$, what is the activation energy for the reverse reaction in the presence of the catalyst?
- (A) $65 \text{ kJ}\cdot\text{mol}^{-1}$
- (B) $80 \text{ kJ}\cdot\text{mol}^{-1}$
- (C) $35 \text{ kJ}\cdot\text{mol}^{-1}$
- (D) $50 \text{ kJ}\cdot\text{mol}^{-1}$

**Detailed Solution:**
1. For any chemical reaction:
   $$\Delta H = E_{a(\text{forward})} - E_{a(\text{reverse})}$$
2. Without catalyst:
   $$-30 = 50 - E_{a(\text{reverse})} \implies E_{a(\text{reverse})} = 50 - (-30) = 80 \text{ kJ}\cdot\text{mol}^{-1}$$
3. **Effect of catalyst**:
   - A catalyst lowers both forward and reverse activation energy barriers by the **identical magnitude**:
     $$E'_{a(\text{forward})} = 50 - 15 = 35 \text{ kJ}\cdot\text{mol}^{-1}$$
     $$E'_{a(\text{reverse})} = 80 - 15 = 65 \text{ kJ}\cdot\text{mol}^{-1}$$
   - Check consistency: $\Delta H = E'_{a(\text{forward})} - E'_{a(\text{reverse})} = 35 - 65 = -30 \text{ kJ}\cdot\text{mol}^{-1}$. The heat of reaction remains completely unaffected.
- *Correct Answer:* **(A) $65 \text{ kJ}\cdot\text{mol}^{-1}$**.

---

## Common Preparation Traps in MDCAT Kinetics

- **Trap 1: Reading Order from Stoichiometric Coefficients**: Never assume that for $aA + bB \rightarrow \text{products}$, the rate law is $k[A]^a[B]^b$. This holds true **only** if the question explicitly specifies that the reaction is an elementary single-step reaction.
- **Trap 2: Half-Life Independence**: Memorize that $t_{1/2}$ is independent of initial concentration **only for first-order reactions**. If doubling $[A]_0$ halves the half-life, the reaction is second order ($t_{1/2} \propto 1/[A]_0$). If doubling $[A]_0$ doubles the half-life, the reaction is zero order ($t_{1/2} \propto [A]_0$).
- **Trap 3: Unit of Rate Constant vs. Unit of Rate**: The unit of reaction rate is *always* $\text{mol}\cdot\text{dm}^{-3}\cdot\text{s}^{-1}$. The unit of the rate constant $k$ varies with reaction order. Always apply $(\text{mol}\cdot\text{dm}^{-3})^{1-n}\cdot\text{s}^{-1}$.
- **Trap 4: Catalyst and Chemical Equilibrium**: A catalyst never shifts the position of equilibrium, never increases the equilibrium yield of products, and never alters $K_c$. It only reduces the time required to establish equilibrium.

---

## Continue your study

- **[MDCAT Exam Overview](/exams/mdcat/)** — eligibility criteria, PMDC test pattern, subject-wise marks distribution, and merit formulas
- **[All MDCAT Chemistry Notes](/notes/mdcat/chemistry/)** — complete study guides on Chemical Equilibrium, Electrochemistry, and Organic Reaction Mechanisms
- **[MDCAT Preparation Roadmap](/exams/mdcat/#roadmap)** — 60-day and 90-day revision schedules for provincial medical admissions

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
