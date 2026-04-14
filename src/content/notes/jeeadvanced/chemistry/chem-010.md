---
exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-010
topicName: Kinetics
weight: 5
country: india
generated: "2026-03-24T08:32:07.925180"
diagramPrompt: "Clear scientific diagram of Kinetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Kinetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Kinetics** — Key Facts for JEE Advanced

**Rate Laws:**
- Rate = k[A]^m[B]^n (for reaction: mA + nB → products)
- k = rate constant (units depend on order)
- m, n = partial orders (determined experimentally, NOT from stoichiometry)
- Overall order = m + n

**Units of Rate Constant:**
| Order | Units |
|---|---|
| Zero | mol L⁻¹ s⁻¹ |
| First | s⁻¹ |
| Second | L mol⁻¹ s⁻¹ |
| Third | L² mol⁻² s⁻¹ |

**Integrated Rate Laws:**
- Zero order: [A]_t = [A]_0 − kt
- First order: log [A]_t = log [A]_0 − kt/2.303
- First order half-life: t½ = 0.693/k (independent of initial concentration)
- Second order: 1/[A]_t = 1/[A]_0 + kt

**Arrhenius Equation:**
k = A × e^(−Ea/RT)
Taking log: log k = log A − Ea/(2.303RT)
Slope = −Ea/(2.303R), Intercept = log A
Activation energy Ea = 2.303 R × (log k₂/k₁) × (T₁T₂/(T₂−T₁))

⚡ **Exam Tip:** In half-life problems, if the order is not given, try first order first because it has the unique property of t½ independent of [A]₀. This is the most commonly tested trick in JEE.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Kinetics** — Chemistry Study Guide

**Rate Expression and Order Determination:**

For a general reaction: aA + bB → products
Rate = k[A]^x[B]^y
x and y are determined experimentally

*Method of initial rates:*
Run experiments at different initial concentrations, measure initial rates.
Example: For reaction A + B → products
Expt 1: [A] = a, [B] = b, rate = r₁
Expt 2: [A] = 2a, [B] = b, rate = r₂
If r₂ = 2r₁, then x = 1 (first order in A)
Expt 3: [A] = a, [B] = 2b, rate = r₃
If r₃ = r₁, then y = 0 (zero order in B)

*Isolation method (Ostwald's isolation method):*
Keep one reactant in large excess, study pseudo-order with respect to the other.
If [B] >> [A]: Rate ≈ k'[A]^x where k' = k[B]^y (pseudo-order)

**Order of Reaction from Time Data:**

For first order, log [A]_t vs time gives straight line with slope = −k/2.303
For zero order, [A]_t vs time gives straight line with slope = −k

*Half-life method:*
t½ ∝ [A]₀^(1−n) where n is the order
- Zero order: t½ = [A]₀/(2k) → proportional to [A]₀
- First order: t½ = 0.693/k → independent of [A]₀
- Second order: t½ = 1/(k[A]₀) → inversely proportional to [A]₀

**Molecularity vs Order:**

*Molecularity:* Number of molecules/ions that collide to produce the reaction
*Order:* Sum of exponents in rate law (experimental quantity)

| Reaction | Molecularity | Order |
|---|---|---|
| unimolecular decomposition | 1 | may be 1 or different |
| Termolecular elementary step | 3 | always 3 (but rarely observed) |

Complex reactions (multi-step) often have order ≠ molecularity of any step.

**Arrhenius Parameters:**

k = A × e^(−Ea/RT)

A = pre-exponential factor (frequency factor)
Ea = activation energy (in J mol⁻¹)
R = 8.314 J mol⁻¹ K⁻¹

Physical meaning of A: Represents collision frequency and orientation factor.
Physical meaning of Ea: Minimum energy required for reaction to occur.

*Two-point form of Arrhenius:*
log(k₂/k₁) = (Ea/2.303R) × (T₂ − T₁)/(T₁T₂)

⚡ **Exam Tip:** When k doubles, the reaction rate doesn't necessarily double — it depends on the order! However, for first order, doubling k does double the rate. Know your rate law.

**Rate-Determining Step (RDS) and Reaction Mechanism:**

A reaction mechanism consists of elementary steps. The slowest step is the rate-determining step.

*Example: 2NO + O₂ → 2NO₂*
Mechanism:
Step 1 (slow, RDS): 2NO ⇌ N₂O₂ (fast equilibrium)
Step 2 (fast): N₂O₂ + O₂ → 2NO₂

Rate from RDS: rate = k[NO]²
But experimentally observed order = 3 (because [N₂O₂] = K[NO]² and substituting gives rate ∝ [NO]²[O₂])

**Types of Reactions Based on Rate:**

*Parallel reactions:*
A → products
A → byproducts

Rate of disappearance of A: −d[A]/dt = (k₁ + k₂)[A]
Effective rate constant: k_eff = k₁ + k₂
t½ = 0.693/(k₁ + k₂)

Relative amounts: [Product₁]/[Product₂] = k₁/k₂ (at any time)

*Consecutive reactions:*
A → B → C

For A → B (first order, k₁): [A] = [A]₀e^(−k₁t)
For B → C (first order, k₂): [B] = [A]₀ × k₁/(k₂−k₁) × (e^(−k₁t) − e^(−k₂t))
Maximum B concentration occurs at t_max = ln(k₂/k₁)/(k₂−k₁)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Kinetics** — Comprehensive Chemistry Notes

**Collision Theory of Reaction Rates:**

For a reaction to occur, two conditions must be met:
1. Collision frequency (number of collisions per unit time per unit volume)
2. Collision energy must exceed activation energy (Ea)
3. Proper orientation of colliding molecules

Rate = Z_AB × f × P
where Z_AB = collision frequency, f = fraction with Ea, P = steric factor

Z_AB ∝ (σ_AB) × √(8πkT/μ) × N_A × [A][B]
where σ_AB is collision cross-section and μ is reduced mass

*f* = e^(−Ea/RT) (Boltzmann factor)

*P* accounts for proper orientation (e.g., in SN2 reactions, backside attack orientation)

**Transition State Theory (Activated Complex Theory):**

Reactants ⇌ [Activated Complex]‡ → Products

Activated complex: Highest energy, unstable configuration at the saddle point

For elementary reaction: A + BC ⇌ [ABC]‡ → products
k = (k_B T/h) × e^(−ΔG‡/RT)
where k_B is Boltzmann constant, h is Planck's constant, ΔG‡ is free energy of activation

ΔG‡ = ΔH‡ − TΔS‡

*Interpretation:*
- High ΔH‡ (high Ea): Slow reaction (energetic barrier)
- High ΔS‡ (positive): Faster reaction (more disorder favorable)
- For reactions in solution: ΔS‡ dominates
- For reactions in gas phase: ΔH‡ dominates

**Order Greater Than 3:**

Third order reactions are possible in gas phase (e.g., 2NO + O₂ → 2NO₂ is third order overall)
Third order requires termolecular elementary steps (3-body collisions), which are statistically rare in gas phase but do occur in atmospheric chemistry.

Fourth and higher orders: Extremely rare; usually seen in chain reactions where the order refers to the overall reaction rate law not reflecting the elementary step.

**Pseudo-Order Reactions:**

When one reactant is in large excess:
For reaction: A + B + C → products
If [B]₀ >> [A]₀ and [C]₀ >> [A]₀:
Rate = k[A][B][C] ≈ k' [A] where k' = k[B][C]
Pseudo-first order in A

*Applications:*
- Hydrolysis of esters: CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH
  Rate = k[ester][H₂O] → pseudo-first order (water in large excess)
- Acid catalyzed inversion of cane sugar: water present in large excess

**Half-Life in Complex Reactions:**

*n-th order reaction (excluding n=1):*
t½ = [A]₀^(1−n) / [(n−1)k] (for n ≠ 1)

For n > 1: t½ decreases as [A]₀ increases (concentrated reactions die out faster)
For n < 1: t½ increases as [A]₀ increases

**Temperature Jump (T-jump) Methods:**

Real-world kinetics: Not all reactions follow simple first/second order at all temperatures.
Above a certain temperature (T₁), the rate increases significantly.

For Arrhenius-type reactions:
log k vs 1/T is linear (straight line)
Deviations from linearity indicate:
- Change in mechanism
- Non-Arrhenius behavior (quantum tunneling at low T)
- Competing reactions with different Ea

**Chain Reactions:**

*Hydrogen-bromine reaction:* H₂ + Br₂ → 2HBr
Rate law: d[HBr]/dt = k[H₂][Br₂]^½ / (1 + k'[HBr]/[Br₂])

Mechanism (classical chain reaction):
Initiation: Br₂ → 2Br• (homolytic cleavage, requires UV light or heat)
Propagation: Br• + H₂ → HBr + H• (slow) and H• + Br₂ → HBr + Br• (fast)
Termination: 2Br• → Br₂, H• + Br• → HBr, H• + H• → H₂

The half-order arises from the termination step involving Br atoms.

**Catalysis:**

*Homogeneous catalysis:* Catalyst in same phase as reactants
Example: Decomposition of H₂O₂ catalyzed by I⁻:
2H₂O₂ → 2H₂O + O₂
Mechanism: I⁻ oxidized to IO₃⁻ or other intermediates
The I⁻ is regenerated, acts in cycle

*Heterogeneous catalysis:* Catalyst in different phase
Examples:
- Haber process: Fe catalyst (solid) + N₂ + H₂ (gases)
- Contact process: V₂O₅ catalyst (solid) + SO₂ + O₂ (gases)
- catalytic converters: Pt/Rh on alumina

*Mechanism of heterogeneous catalysis:*
1. Diffusion of reactants to surface
2. Adsorption of reactants on active sites
3. Reaction on surface
4. Desorption of products
5. Diffusion of products away

*Adsorption isotherms:*
Langmuir: θ = KP/(1 + KP) where θ is fraction covered
Freundlich: x/m = KP^n (empirical)

**Enzyme Kinetics (Michaelis-Menten):**

E + S ⇌ ES → E + P
where E = enzyme, S = substrate, ES = enzyme-substrate complex, P = product

Rate equation: v = v_max[S] / (K_M + [S])
where v_max = k_cat[E]_total and K_M = (k_{-1} + k_cat)/k_1

*When [S] << K_M (first order region):* v ∝ [S]
*When [S] >> K_M (zero order region):* v = v_max (saturated)

*Lineweaver-Burk plot (double reciprocal):*
1/v = (K_M/v_max) × (1/[S]) + 1/v_max
Slope = K_M/v_max, y-intercept = 1/v_max, x-intercept = −1/K_M

⚡ **Exam Tip:** Enzyme kinetics is NOT covered in JEE Advanced syllabus directly but has appeared as application of kinetics in competitive problems. Focus on the Michaelis-Menten equation and Lineweaver-Burk plot.

**Photochemical Reactions:**

*Primary photochemical process:* After absorption of photon (hν)
*JEE-relevant photochemical processes:*

*Photosynthesis:* 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
(Not a simple photochemical reaction, involves complex electron transport chain)

*Bleaching of color:* In presence of light, colored compounds decompose
*Hydrogen-chlorine reaction:* H₂ + Cl₂ → 2HCl (initiated by hν)

Quantum yield = Number of molecules reacted / Number of photons absorbed
If quantum yield > 1: chain reaction (e.g., H₂ + Cl₂ has quantum yield ~10⁵ due to chain propagation)

**Radioactive Decay Kinetics:**

First order kinetics applies:
N = N₀ × e^(−λt)
t½ = 0.693/λ
λ = decay constant (unique to each isotope)

Applications in dating:
- Carbon-14 dating: t½ = 5730 years
- Potassium-Argon dating: t½ = 1.25 × 10⁹ years
- Uranium-Lead dating: t½ = 4.5 × 10⁹ years

**Instantaneous vs Average Rate:**

Average rate over time interval Δt: r_avg = −Δ[A]/Δt
Instantaneous rate at time t: r_inst = d[A]/dt = limit as Δt→0 of r_avg
In calculus terms: rate = −d[C]/dt (for disappearance of reactant C)
Rate = +d[P]/dt (for appearance of product P)

For stoichiometry: If 2A → B then −(1/2)(d[A]/dt) = d[B]/dt

⚡ **Exam Tip:** JEE often uses the convention Rate = −(1/a)(d[A]/dt) = +(1/b)(d[B]/dt) = ... for reaction aA + bB → products. Always write rate expression in terms of stoichiometric coefficients.

**Effect of Catalyst on Kinetics:**

A catalyst:
- Provides alternative pathway with lower Ea
- Does NOT change ΔG of reaction (does not affect equilibrium)
- Does NOT change reaction quotient or equilibrium constant
- Increases both forward and reverse rates equally
- Is consumed in one step, regenerated in another (not consumed overall)

*Illustration:*
Without catalyst: Ea = 100 kJ/mol, k₁
With catalyst: Ea = 60 kJ/mol, k₂
Ratio: k₂/k₁ = e^[(100−60)/RT] = e^(40/RT)
At 298 K: ratio = e^(40/8.314×298) ≈ e^(16.2) ≈ 10⁷

The catalyst works because it provides an alternative reaction surface or mechanism with lower activation energy. Even a small reduction in Ea dramatically increases the rate.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
