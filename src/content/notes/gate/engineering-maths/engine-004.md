---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-004
topicName: "Higher Order Differential Equations"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Higher Order Differential Equations

### 🟢 Lite — Quick Review (1h–1d)

**Core Methods**

| Type | Method | Key Step |
|------|--------|----------|
| Linear with constant coeff. | Characteristic equation (CE) | Replace y → r, d²y/dx² → r² |
| Homogeneous eqn | Solve CE: ar² + br + c = 0 | Real roots → exponentials; repeated → multiply by x |
| Non-homogeneous | CF + PI | Guess PI based on RHS form |
| Cauchy-Euler | Assume x^m | Replace x^r pattern |
| Variation of parameters | CF → u₁, u₂ → Wronskian | PI = −y₁∫y₂R/W + y₂∫y₁R/W |

**⚡ Quick记住:** Real distinct roots → e^(r₁x), e^(r₂x); Real equal r → e^(rx), xe^(rx); Complex r = α ± iβ → e^(αx)[cos βx, sin βx]

---

### 🟡 Standard — Regular Study (2d–2mo)

## Linear DEs with Constant Coefficients

### Homogeneous Case
**Form:** a d²y/dx² + b dy/dx + cy = 0

**Characteristic Equation (CE):** ar² + br + c = 0

| CE Roots | CF (Complementary Function) |
|---------|------------------------------|
| r₁ ≠ r₂ real | C₁e^(r₁x) + C₂e^(r₂x) |
| r₁ = r₂ = r | C₁e^(rx) + C₂xe^(rx) |
| r = α ± iβ | e^(αx)[C₁cos βx + C₂sin βx] |

**For n-th order:** CE is degree n polynomial. Sum over all root contributions.

### Non-Homogeneous Case
**Form:** a y'' + b y' + c y = R(x)

**General Solution:** y = CF + PI

**Particular Integral (PI) — Method of Undetermined Coefficients:**

| R(x) form | Trial PI form |
|-----------|--------------|
| e^(kx) | Ae^(kx) (if k not root of CE); else multiply by x^s where s = multiplicity |
| polynomial in x | General polynomial of same degree |
| sin(kx) or cos(kx) | A cos(kx) + B sin(kx) |

**⚡ GATE Common Mistake:** If the forcing term R(x) matches a term in CF, multiply the trial PI by x (or x² if needed). This is the "collision" rule.

### Method of Variation of Parameters
For y'' + P(x)y' + Q(x)y = R(x):

1. Find two linearly independent solutions of homogeneous: y₁, y₂
2. Wronskian: W = y₁y₂' − y₁'y₂
3. PI: y_p = −y₁∫(y₂R/W) dx + y₂∫(y₁R/W) dx

**Advantage over undetermined coefficients:** Works for ANY R(x) form.

## Cauchy-Euler Equation

**Standard form:** x²y'' + axy' + by = R(x)

**Trial solution:** Assume y = x^m → get auxiliary equation: m(m−1) + am + b = 0

| Roots of m | CF |
|-----------|-----|
| m₁, m₂ real distinct | C₁x^(m₁) + C₂x^(m₂) |
| m₁ = m₂ = m | C₁x^m + C₂x^m ln x |
| complex m = α ± iβ | x^α[C₁cos(β ln x) + C₂sin(β ln x)] |

**⚡ Key difference from constant coefficient:** Powers of x replace exponentials. When x > 0, ln x is defined.

**Non-homogeneous Cauchy-Euler:** Use variation of parameters or guess method adapted for x^m forms.

---

### 🔴 Extended — Deep Study

## Detailed Solution Process — Constant Coefficients

**Example (GATE 2021):** y'' − 3y' + 2y = e^(2x)

1. **Homogeneous:** r² − 3r + 2 = 0 → (r−1)(r−2) = 0 → r = 1, 2
   → CF = C₁e^x + C₂e^(2x)

2. **PI:** R(x) = e^(2x), and r=2 IS a root of CE (collision with CF)
   → Trial: y_p = Ax·e^(2x) → substitute and solve
   → After substitution: A = 1 (working through derivatives)
   → y_p = x·e^(2x)

3. **General:** y = C₁e^x + C₂e^(2x) + x·e^(2x)

**⚡ Collision Detection:** e^(2x) appears in CF with C₂ term. Since it collides, multiply trial by x. If r=2 had multiplicity 2, multiply by x².

## Wronskian and Linear Independence

**Wronskian W(y₁,y₂):**
$$W = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2$$

- If W ≠ 0 at some point → solutions are linearly independent
- Used in variation of parameters formula

**Example:** y₁ = e^x, y₂ = xe^x → W = e^x·e^x + e^x·xe^x = e^(2x)(1 + x) ≠ 0 → LI ✓

## Variation of Parameters — Worked Example

**Problem:** y'' + y = tan x

1. Homogeneous: r² + 1 = 0 → r = ±i → y₁ = cos x, y₂ = sin x
2. W = y₁y₂' − y₁'y₂ = cos²x + sin²x = 1
3. PI = −cos x∫(sin x·tan x/1) dx + sin x∫(cos x·tan x/1) dx
   = −cos x∫(sin²x/cos x) dx + sin x∫(sin x) dx
   = −cos x∫(sin²x/cos x) dx − sin x cos x
   = −cos x[−sin x + ln|sec x + tan x|] − sin x cos x
   = cos x·sin x − cos x·ln|sec x + tan x| − sin x cos x
   = −cos x·ln|sec x + tan x|

## Second-Order Reduction of Order

If one solution y₁ is known for y'' + Py' + Qy = 0, the second solution is:
$$y_2 = y_1 \int \frac{e^{-\int P dx}}{y_1^2} dx$$

**GATE use:** Sometimes gives y₁ = e^x and asks to find general solution — this formula gets the second linearly independent solution.

## GATE Previous-Year Highlights

| Year | Problem | Key Concept |
|------|---------|-------------|
| 2018 | y'' − 6y' + 9y = e^(3x) | Repeated root r=3 (multiply by x²) |
| 2019 | Cauchy-Euler: x²y'' − 2xy' + 2y = x³ | m² − 3m + 2 = 0 → m=1,2 |
| 2020 | y'' + y = sec x | Variation of parameters needed |
| 2021 | y'' + 4y = sin 2x | Collision: PI needs x·(A cos 2x + B sin 2x) |
| 2022 | y'' + y' + y = 0, find Wronskian | W = Ce^(−x) — always nonzero |
| 2023 | Cauchy-Euler: x²y'' + 5xy' + 4y = 0 | m² + 4m + 4 = 0 → m = −2 (repeated) |

**⚡ GATE Trap:** In Cauchy-Euler, always check if m is repeated — that ln x term is frequently forgotten, costing 2 marks.

---

*Content adapted based on your selected roadmap duration and GATE exam preparation timeline.*
