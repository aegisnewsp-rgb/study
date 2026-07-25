---
exam: makerere-ent
examName: Makerere University (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-006
topicName: Chemical equilibrium
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Chemical equilibrium

### 🟢 Lite — Quick Review (1h–1d)

**Chemical equilibrium** is the state at which the **forward reaction rate** equals the **reverse reaction rate**, so **no net observable change** in concentrations occurs — the reaction has not stopped; it continues in both directions equally (dynamic equilibrium).

**Key formulas:**

- For aA + bB ⇌ cC + dD: **Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ**
- **Kp = Kc(RT)^Δn** where Δn = (c + d) − (a + b)
- **Q** uses the identical algebraic form as Kc but is evaluated at any moment, not only at equilibrium
- **Ksp** is the solubility product for a sparingly soluble salt (e.g., Ksp of AgCl = [Ag⁺][Cl⁻])

**Decision rule:** Q < K → reaction shifts **forward** (toward products); Q > K → reaction shifts **reverse** (toward reactants). If Q = K → already at equilibrium.

**Le Chatelier's principle:** a system at equilibrium that experiences a stress (concentration change, pressure/volume change, temperature change) will shift to ** counteract** that stress. Note: only temperature changes alter K itself.

**Exam pointers:**

- K > 1 favours products; K < 1 favours reactants
- **Pure solids and liquids are omitted** from K expressions (heterogeneous equilibrium rule)
- Kc and Kp are numerically identical only when Δn = 0
- pH appears in solubility and ionic equilibrium problems: **pH = −log[H⁺]**

---

### 🟡 Standard — Regular Study (2d–2mo)

## Definition and Dynamic Nature

A chemical system reaches equilibrium when the rate of the forward reaction equals the rate of the reverse reaction. Because both reactions continue simultaneously, the macroscopic concentrations of reactants and products remain constant — but the reaction is dynamic, not static. This distinction is tested repeatedly: an equilibrium mixture still contains both reactants and products unless K is extremely large or small.

## Equilibrium Constant Expressions

For the generalised reaction aA + bB ⇌ cC + dD:

**Kc = [C]^c [D]^d / [A]^a [B]^b**

Each concentration is raised to the power equal to its stoichiometric coefficient. For gas-phase reactions, partial pressures replace concentrations:

**Kp = Kc(RT)^Δn**

where Δn = (moles of gaseous products) − (moles of gaseous reactants).

**Kc and Kp are related as:**

Kc = Kp / (RT)^Δn

Kp = Kc(RT)^Δn

### Worked Relationship

For the decomposition N₂O₄ ⇌ 2NO₂:
Δn = 2 − 1 = 1
Kp = Kc(RT)^1 = KcRT

## Reaction Quotient Q

Q has identical mathematical form to Kc but is calculated **at any point** during the reaction. Comparing Q with K predicts the direction of net change:

| Condition | System Response |
|---|---|
| Q < K | Forward reaction proceeds (products form) |
| Q > K | Reverse reaction proceeds (reactants form) |
| Q = K | System is at equilibrium |

## Le Chatelier's Principle

Four categories of stress affect an equilibrium:

1. **Concentration change:** Adding reactant shifts toward products; removing product shifts toward products.
2. **Pressure/volume change:** For gaseous reactions, decreasing volume (increasing pressure) shifts toward the side with fewer moles of gas.
3. **Temperature change:** Alters K itself — endothermic forward reactions, increasing temperature increases K.
4. **Catalyst:** Increases rate of both forward and reverse equally; does **not** change K or the equilibrium position.

## Heterogeneous Equilibrium

When solid or liquid phases participate, their activities are defined as 1 and are omitted from the K expression.

**Example:** CaCO₃(s) ⇌ CaO(s) + CO₂(g)

Kp = P(CO₂) only — solids are excluded.

## Common Exam Traps

- Including solid or liquid concentrations in the denominator when writing K
- Using Kc formula when partial pressures are given (or vice versa) without converting via the Kp–Kc relationship
- Forgetting to raise each species to its stoichiometric power
- Confusing a change in equilibrium **position** (shift occurs) with a change in **K** (only temperature alters K)

---

### 🔴 Extended — Deep Study (3mo+)

## Derivation of the Kc Expression

Kc is derived from the **rate laws** for elementary steps. For aA + bB ⇌ cC + dD:
Rate_forward = k_f[A]^a[B]^b
Rate_reverse = k_r[C]^c[D]^d

At equilibrium: rate_forward = rate_reverse
k_f[A]^a[B]^b = k_r[C]^c[D]^d

Rearranging: k_f/k_r = [C]^c[D]^d / [A]^a[B]^b

Since k_f/k_r is a constant at a given temperature, define **Kc ≡ k_f/k_r**. This establishes that K depends only on **stoichiometry and temperature**, not on initial concentrations or the presence of a catalyst.

## Temperature Dependence — Van't Hoff Equation

K changes with temperature according to:

**ln(K₂/K₁) = −ΔH°/R × (1/T₂ − 1/T₁)**

For endothermic reactions (ΔH° > 0), increasing T increases K. For exothermic reactions (ΔH° < 0), increasing T decreases K. This is the **only** Le Chatelier stress that modifies K itself; all others only shift the position.

## Ksp and Solubility Connections

The solubility product Ksp applies equilibrium concepts to sparingly soluble salts:

**AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)**
Ksp = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰ at 25 °C

Comparing Q_sp with Ksp predicts precipitation: if Q_sp > Ksp, the salt precipitates until Q_sp = Ksp.

## Significance of Large and Small K

- **K ≫ 1 (e.g., K > 10³):** Reaction essentially goes to completion; product dominates at equilibrium.
- **K ≪ 1 (e.g., K < 10⁻³):** Reaction barely proceeds; reactant dominates at equilibrium.
- **K ≈ 1: significant** concentrations of both reactants and products coexist.

## Linkages to Adjacent Topics

Chemical equilibrium integrates with:

- **Ionic equilibrium** — weak acids/bases, buffer solutions, pH calculations use Keq (Ka, Kb)
- **Electrochemistry** — Nernst equation links K to cell potential: ΔG° = −RT ln K = −nFE°
- **Solubility products** — Ksp governs precipitation in qualitative analysis
- **Rate chemistry** — K from thermodynamics (ΔG°) vs. rate constant k from kinetics are independent

## Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Writing K = [products]/[reactants] without raising each to its stoichiometric power | Always apply exponents: coefficient = exponent |
| Treating Q and K interchangeability | Q applies before equilibrium; K is the equilibrium value |
| Assuming catalyst shifts equilibrium | Catalyst equally accelerates forward and reverse; no K change |
| Excluding pure solids/liquids from heterogeneous K expression | Solid/liquid activity = 1 by convention; omit from expression |
| Using partial pressures for Kc directly | Convert using Kp = Kc(RT)^Δn first |

## 🔴 Practice Prompts

1. **For the reaction 2NO₂(g) ⇌ N₂O₄(g) at 298 K, Kc = 0.21. If initial [NO₂] = 0.10 mol/L and [N₂O₄] = 0.00 mol/L, calculate the equilibrium concentrations.** Start by setting x = amount of N₂O₄ formed; equilibrium [NO₂] = 0.10 − 2x; equilibrium [N₂O₄] = x. Substitute into Kc = x/(0.10 − 2x)² = 0.21 and solve for x.

2. **For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Δn = 1. If Kp = 1.8 at 523 K, calculate Kc.** Using Kc = Kp/(RT)^Δn: R = 0.0821 L·atm·K⁻¹·mol⁻¹, T = 523 K, Δn = 1. Kc = 1.8 / (0.0821 × 523) = 1.8 / 42.94 ≈ **0.042**.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
