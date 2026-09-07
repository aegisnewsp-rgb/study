---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-2
topicName: "Sequences, Series and Arithmetic Progression"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.064240"
lastUpdated: "2026-09-07"
diagramPrompt: "Mathematical diagram showing Sequences, Series and Arithmetic Progression concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Sequences, Series and Arithmetic Progression: Formulas, Derivations, Arithmetic Means & Problem Solving

Sequences and series form a core pillar of algebra tested in the Engineering College Admission Test (ECAT) conducted by the University of Engineering and Technology (UET) Lahore and other premier engineering institutes across Pakistan. Arithmetic Progressions (AP), insertion of multiple arithmetic means between two real numbers, summation of linear sequences, and properties of symmetric terms are tested across both the mathematics core section and time-pressured speed tests. Mastery in this topic requires swift recognition of algebraic short-cuts, quadratic sum properties, and symmetric term selection.

---

## Complete 3-Tier Study Guide

### 🟢 Lite — Quick Revision (1h–1d sprint)

For high-speed formula recall before mock tests or examination day, keep these core relationships ready:

- **Definition of Arithmetic Progression (AP)**:
  A sequence of real numbers $a_1, a_2, a_3, \dots, a_n$ is an AP if the difference between any term and its predecessor is a constant real number $d$, termed the **common difference**:
  $$d = a_{n} - a_{n-1} = a_{k+1} - a_k \quad (\forall k \ge 1)$$
- **General $n$-th Term Formula**:
  $$a_n = a_1 + (n-1)d$$
  where $a_1$ is the first term and $d$ is the common difference. If the last term is denoted by $l$, then $l = a_1 + (n-1)d$.
- **Sum of First $n$ Terms ($S_n$)**:
  $$S_n = \frac{n}{2}[2a_1 + (n-1)d] = \frac{n}{2}(a_1 + l)$$
- **The Arithmetic Mean (AM)**:
  - The single arithmetic mean between two numbers $a$ and $b$ is:
    $$A = \frac{a + b}{2}$$
  - In any AP, every internal term is the arithmetic mean of its adjacent neighbors:
    $$a_k = \frac{a_{k-1} + a_{k+1}}{2}$$
- **Sum of Natural Numbers and Powers**:
  - Sum of first $n$ natural numbers:
    $$\sum_{k=1}^n k = 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$$
  - Sum of first $n$ squares:
    $$\sum_{k=1}^n k^2 = 1^2 + 2^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$$
  - Sum of first $n$ cubes:
    $$\sum_{k=1}^n k^3 = 1^3 + 2^3 + \dots + n^3 = \left[\frac{n(n+1)}{2}\right]^2 = \left(\sum_{k=1}^n k\right)^2$$
- **High-Yield ECAT Speed Shortcuts**:
  - If $S_n = An^2 + Bn$, the sequence is **guaranteed to be an AP** with common difference $d = 2A$ and first term $a_1 = A + B$.
  - The sum of terms equidistant from the beginning and end of an AP is constant:
    $$a_1 + a_n = a_2 + a_{n-1} = a_3 + a_{n-2} = a_k + a_{n-k+1}$$
  - Three consecutive terms in AP should always be assumed symmetrically as:
    $$a - d, \quad a, \quad a + d \quad (\text{Sum } = 3a)$$
  - Four consecutive terms in AP should be assumed as:
    $$a - 3d, \quad a - d, \quad a + d, \quad a + 3d \quad (\text{Common difference } = 2d, \text{ Sum } = 4a)$$

---

### 🟡 Standard — Core Exam Concepts (2d–2mo preparation)

In this standard preparation tier, we examine algebraic derivations, insertion of multiple arithmetic means, and term-selection strategies.

#### 1. Derivation of the Sum of $n$ Terms

Consider an arithmetic progression consisting of $n$ terms:
$$S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \dots + [a_1 + (n-2)d] + [a_1 + (n-1)d]$$

Writing the series in reverse order:
$$S_n = [a_1 + (n-1)d] + [a_1 + (n-2)d] + \dots + (a_1 + d) + a_1$$

Adding these two equations column by column:
$$2S_n = [2a_1 + (n-1)d] + [2a_1 + (n-1)d] + \dots + [2a_1 + (n-1)d] \quad (n \text{ times})$$
$$2S_n = n[2a_1 + (n-1)d]$$
$$S_n = \frac{n}{2}[2a_1 + (n-1)d] = \frac{n}{2}[a_1 + a_n] = \frac{n}{2}(a_1 + l) \quad \blacksquare$$

#### 2. Insertion of $n$ Arithmetic Means Between $a$ and $b$

Let $A_1, A_2, A_3, \dots, A_n$ be $n$ arithmetic means inserted between two real numbers $a$ and $b$.
Then the complete sequence:
$$a, \quad A_1, \quad A_2, \quad A_3, \quad \dots, \quad A_n, \quad b$$
forms an AP containing exactly $N = n + 2$ terms.

- First term: $T_1 = a$.
- Last term: $T_{n+2} = b$.
- Using the general term formula:
  $$T_{n+2} = T_1 + [(n+2) - 1]d = a + (n+1)d = b$$
  $$(n+1)d = b - a \implies d = \frac{b - a}{n + 1}$$
- Each individual arithmetic mean is determined by:
  $$A_k = a + kd = a + k\left(\frac{b - a}{n + 1}\right) \quad (\text{for } k = 1, 2, \dots, n)$$

**Theorem on Sum of $n$ Arithmetic Means**:
The sum of $n$ arithmetic means inserted between $a$ and $b$ is equal to $n$ times the single arithmetic mean between $a$ and $b$:
$$\sum_{k=1}^n A_k = A_1 + A_2 + \dots + A_n = n \left(\frac{a + b}{2}\right) = n \cdot A$$

*Proof*:
The terms $A_1, \dots, A_n$ themselves form an AP with $n$ terms, first term $A_1 = a + d$, and last term $A_n = b - d$.
$$\text{Sum} = \frac{n}{2}(A_1 + A_n) = \frac{n}{2}[(a + d) + (b - d)] = \frac{n}{2}(a + b) = n\left(\frac{a + b}{2}\right) \quad \blacksquare$$

#### 3. Finding $a_n$ From Sum Function $S_n$

A frequent ECAT question provides $S_n$ as a function of $n$ and asks for the $n$-th term or common difference:
$$a_n = S_n - S_{n-1} \quad (\text{for } n \ge 2), \quad a_1 = S_1$$

**Example**: If $S_n = 2n^2 + 3n$, find the general term $a_n$ and common difference $d$:
$$a_1 = S_1 = 2(1)^2 + 3(1) = 5$$
$$a_n = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]$$
$$a_n = 2n^2 + 3n - [2(n^2 - 2n + 1) + 3n - 3]$$
$$a_n = 2n^2 + 3n - [2n^2 - 4n + 2 + 3n - 3] = 2n^2 + 3n - [2n^2 - n - 1] = 4n + 1$$
Thus $a_n = 4n + 1$.
For $n=1$: $a_1 = 4(1) + 1 = 5$.
For $n=2$: $a_2 = 4(2) + 1 = 9$.
Common difference: $d = a_2 - a_1 = 9 - 5 = 4$.
*Direct Shortcut*: Since $S_n = An^2 + Bn$, here $A = 2$, so $d = 2A = 2(2) = 4$, and $a_1 = A + B = 2 + 3 = 5$. The shortcut yields the exact result in 5 seconds!

---

### 🔴 Extended — Deep Analytical Study (3mo+ mastery)

In this advanced tier, we examine multi-concept problems: Arithmetic-Geometric Progressions (AGP), harmonic relationship proofs, and simultaneous equation optimization.

#### 1. Fundamental Properties of Arithmetic Progressions

```
+-----------------------------------------------------------------------------------+
|               INVARIANCE & TRANSFORMATION THEOREMS OF ARITHMETIC PROGRESSIONS     |
+-----------------------------------------------------------------------------------+
| 1. ADDITIVE SHIFT:       If a₁, a₂, ..., aₙ is AP with diff d, then              |
|                          (a₁ ± c), (a₂ ± c), ..., (aₙ ± c) is an AP with diff d. |
+-----------------------------------------------------------------------------------+
| 2. SCALAR MULTIPLIER:    If a₁, a₂, ..., aₙ is AP with diff d, then              |
|                          (c*a₁), (c*a₂), ..., (c*aₙ) is an AP with diff (c*d).   |
+-----------------------------------------------------------------------------------+
| 3. COMPONENT ADDITION:   If aₙ is AP (diff d₁) and bₙ is AP (diff d₂), then      |
|                          (aₙ ± bₙ) is an AP with common difference (d₁ ± d₂).     |
+-----------------------------------------------------------------------------------+
| 4. EQUIDISTANT RECIPROCAL: If a, b, c are in AP, then 1/(bc), 1/(ca), 1/(ab)     |
|                          are also in AP (obtained by dividing by abc).            |
+-----------------------------------------------------------------------------------+
```

#### 2. Ratio of Sums to Ratio of Terms

A classic problem type in ECAT tests: "If the ratio of the sum of $n$ terms of two APs is given as $\frac{S_n}{S'_n} = \frac{f(n)}{g(n)}$, find the ratio of their $m$-th terms $\frac{a_m}{a'_m}$."

*Analytical Derivation*:
$$\frac{S_n}{S'_n} = \frac{\frac{n}{2}[2a_1 + (n-1)d_1]}{\frac{n}{2}[2a'_1 + (n-1)d'_1]} = \frac{a_1 + \left(\frac{n-1}{2}\right)d_1}{a'_1 + \left(\frac{n-1}{2}\right)d'_1}$$

We require the ratio of the $m$-th terms:
$$\frac{a_m}{a'_m} = \frac{a_1 + (m-1)d_1}{a'_1 + (m-1)d'_1}$$

Comparing the coefficients of $d_1$ and $d'_1$:
$$\frac{n - 1}{2} = m - 1 \implies n - 1 = 2m - 2 \implies n = 2m - 1$$

**Golden Rule for ECAT**: To find the ratio of the $m$-th terms when the ratio of sums $S_n/S'_n$ is known, simply **substitute $n = 2m - 1$** into the sum ratio formula!

---

## High-Yield Comparison Tables

### Table 1: Sequences, Series & Progressions Distinguished

| Concept | Formal Definition | Mathematical Notation | Distinguishing Characteristic |
| :--- | :--- | :--- | :--- |
| **Sequence** | Ordered mapping from natural numbers $\mathbb{N}$ to real numbers $\mathbb{R}$ | $a_1, a_2, a_3, \dots, a_n$ | Terms separated by commas; order is essential |
| **Series** | The formal algebraic sum of terms of a sequence | $S_n = \sum_{k=1}^n a_k = a_1 + a_2 + \dots + a_n$ | Terms joined by addition signs |
| **Progression** | A sequence whose terms obey a precise mathematical recurrence rule | $a_n = f(n)$ or $a_n = g(a_{n-1})$ | Enables closed-form computation of any arbitrary term |
| **Arithmetic Progression**| Sequence where difference between consecutive terms is constant | $a_{k+1} - a_k = d$ | Linear growth function: $a_n = dn + (a_1 - d)$ |

### Table 2: Standard Finite Summation Formulas

| Sum Type | Mathematical Series | Closed-Form Formula | High-Yield Application |
| :--- | :--- | :--- | :--- |
| **First $n$ Integers** | $\sum_{k=1}^n k = 1 + 2 + 3 + \dots + n$ | $\frac{n(n+1)}{2}$ | Total handshakes, round-robin tournament matches |
| **First $n$ Odd Numbers** | $\sum_{k=1}^n (2k - 1) = 1 + 3 + 5 + \dots + (2n-1)$ | $n^2$ | Sum of first $n$ consecutive odd integers is always a perfect square |
| **First $n$ Even Numbers**| $\sum_{k=1}^n (2k) = 2 + 4 + 6 + \dots + 2n$ | $n(n+1)$ | Sum of first $n$ consecutive even integers |
| **First $n$ Squares** | $\sum_{k=1}^n k^2 = 1^2 + 2^2 + \dots + n^2$ | $\frac{n(n+1)(2n+1)}{6}$ | Moment of inertia approximations, geometric series sums |
| **First $n$ Cubes** | $\sum_{k=1}^n k^3 = 1^3 + 2^3 + \dots + n^3$ | $\left[\frac{n(n+1)}{2}\right]^2$ | Exactly equal to $(\sum k)^2$ |

### Table 3: Symmetric Selection of Terms in Arithmetic Progressions

| Number of Terms | Symmetric Algebraic Representation | Common Difference | Sum of Terms | Primary Advantage in Calculations |
| :--- | :--- | :--- | :--- | :--- |
| **3 Terms** | $a - d, \quad a, \quad a + d$ | $d$ | $3a$ | Sum immediately reveals the middle term $a$ |
| **4 Terms** | $a - 3d, \quad a - d, \quad a + d, \quad a + 3d$ | $2d$ | $4a$ | Eliminates odd powers of $d$ upon squaring |
| **5 Terms** | $a - 2d, \quad a - d, \quad a, \quad a + d, \quad a + 2d$ | $d$ | $5a$ | Preserves odd symmetry while keeping diff $d$ |

---

## Worked ECAT Practice Problems

### Problem 1 (Finding Number of Terms from Sum)

**Problem:** In an arithmetic progression, the first term is $a = 5$, the common difference is $d = 3$, and the sum of the first $n$ terms is $S_n = 185$. Find the number of terms $n$ and the value of the last term $a_n$.

**Step-by-Step Solution:**
1. Apply the sum formula:
   $$S_n = \frac{n}{2}[2a + (n-1)d]$$
   $$185 = \frac{n}{2}[2(5) + (n-1)3]$$
   $$370 = n[10 + 3n - 3] = n[3n + 7]$$
   $$3n^2 + 7n - 370 = 0$$
2. Factor the quadratic equation:
   - Product $= 3 \times (-370) = -1110$; Sum $= +7$.
   - The factors are $+37$ and $-30$ (since $37 \times 30 = 1110$ and $37 - 30 = 7$).
   $$3n^2 - 30n + 37n - 370 = 0$$
   $$3n(n - 10) + 37(n - 10) = 0$$
   $$(3n + 37)(n - 10) = 0$$
3. Since $n$ must be a positive integer ($n \in \mathbb{N}$):
   $$n = 10 \quad \left(n = -\frac{37}{3} \text{ is discarded}\right)$$
4. Calculate the last term $a_{10}$:
   $$a_{10} = a + (10 - 1)d = 5 + 9(3) = 5 + 27 = 32$$
- *Answer:* $n = 10$ terms, last term $a_{10} = 32$.

---

### Problem 2 (Ratio of Sums to Ratio of Terms)

**Problem:** The ratio of the sum of $n$ terms of two arithmetic progressions is given by $\frac{S_n}{S'_n} = \frac{7n + 1}{4n + 27}$. Find the ratio of their 11th terms.

**Step-by-Step Solution:**
1. Using the established ECAT Golden Rule:
   $$\frac{a_m}{a'_m} = \left.\frac{S_n}{S'_n}\right|_{n = 2m - 1}$$
2. Here, we want the ratio of the 11th terms ($m = 11$):
   $$n = 2(11) - 1 = 22 - 1 = 21$$
3. Substitute $n = 21$ into the sum ratio:
   $$\frac{a_{11}}{a'_{11}} = \frac{7(21) + 1}{4(21) + 27} = \frac{147 + 1}{84 + 27} = \frac{148}{111}$$
4. Simplify by dividing numerator and denominator by 37:
   $$148 = 37 \times 4, \quad 111 = 37 \times 3$$
   $$\frac{a_{11}}{a'_{11}} = \frac{4}{3}$$
- *Answer:* The ratio of their 11th terms is $4 : 3$.

---

## Common ECAT Examination Traps

- **Trap 1: Forgetting the $-1$ in General Term**: Always remember $a_n = a_1 + (n-1)d$. Students often mistakenly write $a_n = a_1 + nd$.
- **Trap 2: Counting Means vs. Total Terms**: When inserting $n$ arithmetic means between $a$ and $b$, the total number of terms in the resulting AP is **$N = n + 2$**, and the common difference divisor is **$n + 1$**, not $n$.
- **Trap 3: Sign of Common Difference**: If an AP is decreasing (e.g., $100, 95, 90, \dots$), $d$ is negative ($d = -5$). Always retain the algebraic negative sign when substituting into $S_n$.
- **Trap 4: Sum Quadratic Derivative**: Remember that for $S_n = An^2 + Bn$, the common difference is $2A$, NOT $A$. The coefficient of $n^2$ is $\frac{d}{2}$.

---

## Continue your study

- **[ECAT Exam Overview](/exams/ecat/)** — eligibility requirements, UET test pattern, subject weightages, and aggregate merit formulas
- **[All ECAT Mathematics Notes](/notes/ecat/mathematics/)** — complete study guides on Geometric Progressions, Trigonometry, Calculus, and Conic Sections
- **[ECAT Preparation Roadmap](/exams/ecat/#roadmap)** — 60-day and 90-day revision schedules for engineering admission success

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
