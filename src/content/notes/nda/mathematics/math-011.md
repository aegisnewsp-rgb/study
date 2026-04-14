---
exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: Logarithms
weight: 3
country: india
generated: "2026-03-24T08:32:07.810278"
diagramPrompt: "Mathematical diagram showing Logarithms concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Logarithms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Logarithms** — Quick Facts

**Key Definitions:**
- **Logarithm:** If $a^x = b$, then $\log_a b = x$ (read as "log base $a$ of $b$ equals $x$")
- **Base:** The number that is raised to a power
- **Antilogarithm:** The number corresponding to a given logarithm
- **Characteristic:** The integer part of a logarithm
- **Mantissa:** The fractional part of a logarithm

**Important Logarithmic Identities:**

| Identity | Formula |
|---|---|
| **Product Rule** | $\log_a(mn) = \log_a m + \log_a n$ |
| **Quotient Rule** | $\log_a(m/n) = \log_a m - \log_a n$ |
| **Power Rule** | $\log_a(m^n) = n \cdot \log_a m$ |
| **Change of Base** | $\log_a m = \frac{\log_b m}{\log_b a}$ |
| **Base Switch** | $\log_a b = \frac{1}{\log_b a}$ |

**⚡ Exam Tips for NDA:**
- Common bases: 10 (common log), $e$ (natural log, written as $\ln$)
- $\log_a a = 1$ and $\log_a 1 = 0$ for any valid base $a$
- $\log 100 = 2$ because $10^2 = 100$
- When solving equations, convert to exponential form first

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Logarithms** — Study Guide

**Understanding Logarithms:**

A logarithm answers the question: "To what power must we raise a base to get a certain number?"

$$2^5 = 32 \iff \log_2 32 = 5$$

The base $2$ raised to the power $5$ gives $32$, so the logarithm of $32$ with base $2$ is $5$.

**Types of Logarithms:**

| Type | Base | Written As | Common Use |
|---|---|---|---|
| **Common Logarithm** | 10 | $\log x$ or $\log_{10} x$ | General computation |
| **Natural Logarithm** | $e \approx 2.71828$ | $\ln x$ or $\log_e x$ | Calculus, science |
| **Binary Logarithm** | 2 | $\log_2 x$ | Computer science |

**Laws of Logarithms — Proofs:**

**1. Product Rule:**
Let $\log_a m = x \Rightarrow a^x = m$ and $\log_a n = y \Rightarrow a^y = n$
$$mn = a^x \cdot a^y = a^{x+y}$$
Taking log base $a$:
$$\log_a(mn) = x + y = \log_a m + \log_a n \quad \blacksquare$$

**2. Quotient Rule:**
$$\frac{m}{n} = \frac{a^x}{a^y} = a^{x-y}$$
$$\log_a(m/n) = x - y = \log_a m - \log_a n \quad \blacksquare$$

**3. Power Rule:**
$$m^n = (a^x)^n = a^{nx}$$
$$\log_a(m^n) = nx = n \cdot \log_a m \quad \blacksquare$$

**Change of Base Formula:**

$$\log_a m = \frac{\log_b m}{\log_b a}$$

**Derivation:**
Let $\log_a m = x \Rightarrow a^x = m$
Taking log base $b$ on both sides:
$$\log_b(a^x) = \log_b m$$
$$x \cdot \log_b a = \log_b m$$
$$x = \frac{\log_b m}{\log_b a}$$
$$\therefore \log_a m = \frac{\log_b m}{\log_b a} \quad \blacksquare$$

**Logarithmic Equations:**

**Type 1:** $\log_a f(x) = \log_a g(x)$
$$\Rightarrow f(x) = g(x) \quad \text{(provided } f(x), g(x) > 0\text{)}$$

**Type 2:** $\log_a f(x) = b$
$$\Rightarrow f(x) = a^b$$

**⚡ Important Domain Condition:**
For $\log_a x$ to be defined:
- $a > 0$ and $a \neq 1$ (base conditions)
- $x > 0$ (argument must be positive)

**Common Student Mistakes:**
- Confusing $\log(m+n)$ with $\log m + \log n$ — they are NOT equal
- Forgetting that $\log_a(bc) \neq \log_a b \cdot \log_a c$ — that's the wrong formula
- Solving $\log x = 2$ as $x = 2$ instead of $x = 10^2 = 100$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Logarithms** — Comprehensive Notes

**Graph of Logarithmic Function:**

The function $y = \log_a x$ has these properties:

| Base Condition | Graph Shape | Key Behaviour |
|---|---|---|
| $a > 1$ | Increasing curve | $y$ increases as $x$ increases |
| $0 < a < 1$ | Decreasing curve | $y$ decreases as $x$ increases |

**Key Points on the Graph:**
- Passes through $(1, 0)$ always — because $\log_a 1 = 0$
- Domain: $x > 0$
- Range: All real numbers $(-\infty, +\infty)$
- Y-axis ($x = 0$) is a vertical asymptote

**Relationship Between Exponential and Logarithmic Functions:**

$$y = a^x \iff x = \log_a y$$

They are inverse functions of each other. The graph of $y = \log_a x$ is the reflection of $y = a^x$ across the line $y = x$.

**Solving Complex Logarithmic Equations:**

**Example 1:**
Solve: $\log_3(x+1) + \log_3(x-1) = 1$

**Solution:**
Using product rule: $\log_3[(x+1)(x-1)] = 1$
$$\log_3(x^2 - 1) = 1$$
$$x^2 - 1 = 3^1 = 3$$
$$x^2 = 4$$
$$x = \pm 2$$

Checking domain: $x + 1 > 0 \Rightarrow x > -1$ and $x - 1 > 0 \Rightarrow x > 1$
$$\therefore x = 2 \text{ (only valid solution)}$$

**Example 2:**
Solve: $\log_2(x+2) - \log_2(x-1) = 3$

**Solution:**
Using quotient rule: $\log_2\left(\frac{x+2}{x-1}\right) = 3$
$$\frac{x+2}{x-1} = 2^3 = 8$$
$$x + 2 = 8x - 8$$
$$7x = 10$$
$$x = \frac{10}{7}$$

Checking domain: $x > 1$ (from $x - 1 > 0$)
$$\frac{10}{7} \approx 1.43 > 1 \quad \checkmark$$

**Logarithmic Inequalities:**

**Rule:** When solving $\log_a f(x) > \log_a g(x)$:

- If $a > 1$: $f(x) > g(x)$ (inequality sign preserved)
- If $0 < a < 1$: $f(x) < g(x)$ (inequality sign reverses)

**Example:**
Solve: $\log_2(x+3) > \log_2(2x-1)$

Since base $2 > 1$:
$$x + 3 > 2x - 1$$
$$x < 4$$

With domain conditions: $x + 3 > 0 \Rightarrow x > -3$ and $2x - 1 > 0 \Rightarrow x > 0.5$
$$\therefore 0.5 < x < 4$$

**Characteristic and Mantissa:**

For $\log_{10} N$ where $N > 0$:

- **Characteristic ($c$):** Integer part, depends on number of digits before decimal
- **Mantissa ($m$):** Fractional part, found from log tables

| Number Range | Characteristic | Example |
|---|---|---|
| $0.0001 \leq N < 0.001$ | $-4$ | $\log 0.0052 \approx -3 + \text{mantissa}$ |
| $0.001 \leq N < 0.01$ | $-3$ | |
| $0.01 \leq N < 0.1$ | $-2$ | |
| $0.1 \leq N < 1$ | $-1$ | $\log 0.5 \approx -0.3010$ |
| $1 \leq N < 10$ | $0$ | $\log 5 = 0.6990$ |
| $10 \leq N < 100$ | $1$ | $\log 25 = 1.3979$ |
| $100 \leq N < 1000$ | $2$ | $\log 365 = 2.5623$ |

**Antilogarithm:**
If $\log N = x$, then $N = \text{antilog}(x)$
$$\text{antilog}(x) = 10^x$$

**⚡ NDA High-Yield Patterns:**
- Questions frequently test direct application of log laws
- Solving logarithmic equations appears in both Paper I and II
- Change of base formula is commonly used in computer science-related NDA questions
- Expect 2-3 questions directly from this topic
- Always check domain restrictions in logarithmic equations — it's a favourite trap

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
