---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-017
topicName: "Topic 17"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Control Systems — Transfer Function and Block Diagrams

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**GATE Weightage:** ~6–10 marks/year (Electrical/Instrumentation branches); block diagram reduction and Mason's gain formula are perennial favorites.

---

**Transfer Function G(s)** = Laplace of output / Laplace of input (with zero initial conditions)

- **Standard form:** G(s) = K·(s+z₁)(s+z₂)... / (s+p₁)(s+p₂)...
- Poles = roots of denominator; Zeros = roots of numerator
- **Order** = degree of denominator (highest power of s)

**Block Diagram Algebra**

| Block in series | G₁·s G₂ = G₁G₂ |
|---|---|
| Block in parallel (summing point) | G₁ ± G₂ |
| Feedback loop | G/(1 ± GH) (negative/positive feedback) |
| Moving a pickoff point | Introduce/remove equal G in path |
| Moving a summing point | Account for new paths created |

**Mason's Gain Formula:**

M = (1/Δ) · Σ P_k · Δ_k

Where: P_k = kth forward path gain, Δ = 1 – Σ(L₁) + Σ(L₂) – Σ(L₃) + ... (determinant), Δ_k = Δ with loops touching P_k removed.

**⚡ GATE Tips**
- Always reduce the **inner loops first** before simplifying the outer structure
- For **positive feedback**, sign in denominator is (+GH); for **negative feedback** it's (1 – GH) or (1 + GH) depending on convention
- Mason's formula is faster than block reduction for complex diagrams — learn it well

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Transfer Function — Definition and Properties

The **transfer function** G(s) of a linear time-invariant (LTI) system is defined as:

**G(s) = Y(s) / R(s)** with all initial conditions = 0

Where Y(s) = Laplace transform of output y(t), R(s) = Laplace transform of input r(t).

### Properties of Transfer Functions

1. **System order** = degree of denominator polynomial (highest power of s)
2. **Proper transfer function:** degree of numerator ≤ degree of denominator
3. **Strictly proper:** degree of numerator < degree of denominator
4. **Poles** = values of s that make G(s) → ∞ (denominator roots)
5. **Zeros** = values of s that make G(s) → 0 (numerator roots)
6. **dc gain** (static gain) = G(s) evaluated at s = 0

### Standard Transfer Function Forms

**First-order system:** G(s) = K / (τs + 1) = ω_n / (s + ω_n) for normalized form

**Second-order system (standard form):**
```
G(s) = ω_n² / (s² + 2ζω_n s + ω_n²)
```
Where ζ = damping ratio, ω_n = natural frequency.

**Type number** = number of poles at s = 0 (integrators in forward path)

## Block Diagram Reduction Techniques

### Basic Building Blocks

| Element | Input | Output |
|---|---|---|
| **Summing junction** | Take algebraic sum of inputs | Single output |
| **Pickoff point (branch)** | One input | Multiple outputs (same magnitude) |
| **Forward path** | Input → System → Output |
| **Feedback path** | Output → Feedback element H → Summing junction |

### Step-by-Step Reduction Method

1. **Identify all feedback loops** (closed paths)
2. **Combine blocks in series** — multiply transfer functions
3. **Combine blocks in parallel** — add/subtract at summing points
4. **Reduce inner feedback loops** using G/(1 ± GH)
5. **Move pickoff/summing points** if needed to expose series/parallel combinations
6. **Repeat** until single G(s) remains

> **Common mistake:** Students forget that moving a summing point or pickoff creates new paths that must be accounted for. When moving a pickoff ahead, multiply the moved path by G; when moving a pickoff behind, multiply by 1/G.

### Signal Flow Graph vs Block Diagram

Block diagrams show subsystems with arrows; **signal flow graphs (SFG)** show individual signals as nodes and systems as branches.

- **Node** = signal variable
- **Branch** = system (direction matters)
- **Forward path** = path from input to output node without passing any node twice
- **Loop** = closed path returning to starting node

## Mason's Gain Formula

For finding the overall transfer function from SFG directly:

**T(s) = (Σ P_k Δ_k) / Δ**

Where:

- **P_k** = product of branch gains along the kth forward path
- **Δ** (system determinant) = 1 – (sum of individual loop gains) + (sum of products of 2 nontouching loops) – (sum of products of 3 nontouching loops) + ...
- **Δ_k** = cofactor of P_k; value of Δ with loops touching P_k removed

### Loop Types

| Loop type | Description |
|---|---|
| **Individual loop** | L_i = product of branches in one closed loop |
| **Two nontouching loops** | Product of 2 loops with no common node |
| **Three nontouching loops** | Product of 3 pairwise nontouching loops |

> **Key rule:** Loops are nontouching only if they share NO common node.

## Feedback and Sensitivity

**Open-loop:** G(s) (no feedback path)

**Closed-loop (negative feedback):** T(s) = G/(1 + GH)

**Sensitivity S_M** of parameter M: S_M = (dT/T) / (dM/M) = (d ln T) / (d ln M)

**For closed-loop system:**
- Sensitivity to G variations: S_G = 1/(1 + GH) (reduced by feedback!)
- Sensitivity to H variations: S_H = –GH/(1 + GH) (shows H affects system more)

** Steady-state error:** e_ss = 1/(1 + K_p) for step input, etc. (covered in Topic 18)

## Example Problem — Block Diagram Reduction

> Reduce to find C(s)/R(s):
```
R →[G1]→ (+) →[G2]→ C
         ↑        |
         | [H1]  |
         +-------+
```
Negative feedback with H1.

**Solution:**
- Forward path: G1·G2
- Feedback path: H1
- Loop gain: G1·G2·H1
- Closed-loop: **C/R = G1·G2 / (1 + G1·G2·H1)**

## Example Problem — Mason's Gain Formula

> SFG with: input X, output Y. Forward path P₁ = G1·G2·G3. One loop L₁ = G1·G2·H1 (touches P₁). No nontouching loops.

**Solution:**
- Δ = 1 – L₁ = 1 – G1·G2·H1
- Δ₁ = 1 (loop touches P₁, so remove it → just 1)
- **T = P₁·Δ₁/Δ = G1·G2·G3 / (1 – G1·G2·H1)**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Mason's Gain Formula — Detailed Derivation

The formula arises from solving simultaneous equations representing all node relationships. For a system with N nodes:

Y_i = Σ_j G_ij · Y_j (sum of all incoming signals)

Solving these using Cramer's rule and Gaussian elimination yields the Mason's formula structure.

### Multiple Forward Paths

When k forward paths exist:
- List all P₁, P₂, P₃... (all distinct paths from input to output)
- Each P_k gets its own Δ_k
- Total T = (P₁Δ₁ + P₂Δ₂ + ...) / Δ

### Nontouching Loop Groups

**Δ computation rules:**
1. Start with 1
2. Subtract sum of all individual loop gains (L₁, L₂, L₃...)
3. Add sum of products of all pairs of nontouching loops
4. Subtract sum of products of all triples of nontouching loops
5. Continue alternating signs

> **GATE Trick:** When asked "how many loops are nontouching?" — draw the SFG and physically check which loops share nodes.

## Block Diagram to SFG Conversion

Converting a block diagram to SFG:
1. Replace each block arrow with a branch (gain = block transfer function)
2. Place a node at each summing junction output
3. Place a node at each pickoff point
4. Label all intermediate nodes
5. Draw branches following the original signal flow

## Special Transfer Function Forms

### Time Delay Systems

G(s) = e^(–τs) — pure time delay of τ seconds
- Cannot be expressed as rational polynomial
- Approximated by Padé: e^(–τs) ≈ (1 – τs/2) / (1 + τs/2) (first-order Padé)

### Systems with Time Delay in Feedback

When G(s) has e^(–τs), closed-loop characteristic equation becomes transcendental: 1 + G(s)H(s)e^(–τs) = 0. Requires numerical/approximate methods.

### Minimum Phase vs Non-Minimum Phase

- **Minimum phase:** All poles and zeros in left-half plane (LHP)
- **Non-minimum phase:** Has a zero in RHP or time delay
- All-pass systems have magnitude = 1 but phase shift

## Controller Block Diagrams

In feedback control systems:

**G(s) = G_c(s) · G_p(s)** — controller × plant

**H(s)** = sensor/feedback dynamics

**Standard form of closed-loop transfer function:**
- T(s) = G_c·G_p / (1 + G_c·G_p·H) for negative feedback
- Characteristic equation: 1 + G_c·G_p·H = 0

## System Type and Error Constants

Type number = number of poles at origin in forward path G(s):

| Type | Position error K_p | Velocity error K_v | Acceleration error K_a |
|---|---|---|---|
| Type 0 | K_p = lim G(s) | 0 | 0 |
| Type 1 | ∞ | K_v = lim s·G(s) | 0 |
| Type 2 | ∞ | ∞ | K_a = lim s²·G(s) |

Higher type → better steady-state tracking, but harder to stabilize.

## GATE Exam Strategy — Transfer Functions & Block Diagrams

**Expected question types:**
1. Reduce block diagram → find C/R
2. Draw SFG from given system equations, then apply Mason's formula
3. Find transfer function C/R from complex interconnected system
4. Determine poles/zeros/gain from given G(s)
5. Find type of system and steady-state error

**Common GATE mistakes:**
- Confusing positive vs negative feedback sign in denominator
- Forgetting that moving summing points changes paths
- Miscounting nontouching loops in Mason's Δ
- Writing characteristic equation with wrong sign for feedback

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
