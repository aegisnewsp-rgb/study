---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-027
topicName: Progressions
weight: 5
country: india
generated: "2026-03-24T08:32:07.947139"
diagramPrompt: "Mathematical diagram showing Progressions concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Progressions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Arithmetic Progression (AP):**
Sequence where difference between consecutive terms is constant: $d = a_2 - a_1$.

- **$n$-th term:** $a_n = a_1 + (n-1)d$
- **Sum of first $n$ terms:** $S_n = \frac{n}{2}[2a_1 + (n-1)d] = \frac{n(a_1 + a_n)}{2}$
- **Common difference:** $d = \frac{a_n - a_1}{n-1}$

**Geometric Progression (GP):**
Sequence where ratio between consecutive terms is constant: $r = \frac{a_2}{a_1}$.

- **$n$-th term:** $a_n = a_1 \cdot r^{n-1}$
- **Sum of first $n$ terms:** $S_n = a_1 \frac{r^n - 1}{r - 1}$ for $r \neq 1$; $= na_1$ for $r = 1$
- **Infinite GP sum:** $S_\infty = \frac{a_1}{1 - r}$ for $|r| < 1$
- **Common ratio:** $r = \left(\frac{a_n}{a_1}\right)^{1/(n-1)}$

**Harmonic Progression (HP):**
Sequence of reciprocals forms an AP. If $a, b, c$ are in HP, then $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$ are in AP.

⚡ **JEE Tip:** For problems involving three terms in AP, use $a-d, a, a+d$. For three terms in GP, use $a/r, a, ar$. For three terms in HP, find corresponding AP first.

⚡ **Common Mistake:** Don't confuse $S_\infty$ formula — it only applies when $|r| < 1$. When $|r| \geq 1$, the infinite sum diverges (no finite sum exists).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Inserting Terms:**

- Between $a$ and $b$, insert $k$ numbers to form AP: common difference $d = \frac{b-a}{k+1}$
- Between $a$ and $b$, insert $k$ numbers to form GP: common ratio $r = \left(\frac{b}{a}\right)^{1/(k+1)}$

**Arithmetic Mean:**
The arithmetic mean of $x$ and $y$ is $A = \frac{x+y}{2}$. For $n$ numbers $a_1, a_2, \ldots, a_n$, their AM is $\frac{a_1 + a_2 + \cdots + a_n}{n}$.

**Geometric Mean:**
The geometric mean of $x$ and $y$ is $G = \sqrt{xy}$. For $n$ positive numbers, $G = (a_1 a_2 \cdots a_n)^{1/n}$.

**Harmonic Mean:**
The harmonic mean of $x$ and $y$ is $H = \frac{2xy}{x+y}$.

**AM-GM-HM Inequality:**
For positive numbers: $HM \leq GM \leq AM$, with equality when all numbers are equal. A useful corollary for two positive numbers is $G^2 = A \cdot H$, i.e. the geometric mean is itself the GM of the arithmetic and harmonic means.

**Worked Examples:**

*Example 1:* If $a, b, c$ are in AP and $a, b, d$ are in GP, find $c$ and $d$ in terms of $a$ and $b$.

From AP: $b = \frac{a+c}{2}$ → $c = 2b - a$.
From GP: $b = \sqrt{ad}$ (since $a, b, d$ are in GP) → $d = b^2/a$.
So $c = 2b - a$ and $d = b^2/a$.

*Example 2:* Find sum of series: $S = 1 + 3 + 7 + 15 + 31 + \ldots$ up to $n$ terms.

Pattern: $a_n = 2^n - 1$ (check: $2^1-1=1, 2^2-1=3, 2^3-1=7, 2^4-1=15, 2^5-1=31$).
$S = \sum_{k=1}^{n} (2^k - 1) = \sum_{k=1}^{n} 2^k - \sum_{k=1}^{n} 1 = (2^{n+1} - 2) - n = 2^{n+1} - n - 2$.

*Example 3:* If $a, b, c$ are in HP, prove that $\frac{b+a}{b-a} + \frac{b+c}{b-c} = 2$.

Since $a, b, c$ are in HP, their reciprocals $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$ are in AP. Hence
$$\frac{2}{b} = \frac{1}{a} + \frac{1}{c} = \frac{a+c}{ac} \quad\Rightarrow\quad b = \frac{2ac}{a+c}.$$

Treat the two terms separately. For the first term,
$$\frac{b+a}{b-a} = \frac{\frac{2ac}{a+c} + a}{\frac{2ac}{a+c} - a} = \frac{2ac + a(a+c)}{2ac - a(a+c)} = \frac{a(a+3c)}{a(c-a)} = \frac{a+3c}{c-a}.$$

For the second term,
$$\frac{b+c}{b-c} = \frac{\frac{2ac}{a+c} + c}{\frac{2ac}{a+c} - c} = \frac{2ac + c(a+c)}{2ac - c(a+c)} = \frac{c(3a+c)}{c(a-c)} = \frac{3a+c}{a-c}.$$

Adding, and noting $\frac{1}{c-a} = -\frac{1}{a-c}$,
$$\frac{a+3c}{c-a} + \frac{3a+c}{a-c} = \frac{-(a+3c) + (3a+c)}{a-c} = \frac{2a - 2c}{a-c} = 2.$$

This confirms the identity. The key step in any HP problem is converting to the equivalent AP statement about reciprocals before manipulating.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Arithmetico-Geometric Progression (AGP):**
Series of form $a, (a+d)r, (a+2d)r^2, \ldots$

Sum $S_n = a + (a+d)r + (a+2d)r^2 + \cdots + [a+(n-1)d]r^{n-1}$.

To find the sum, multiply $S_n$ by $r$, subtract the shifted series from the original, and collect the resulting geometric series.

$S_n = \frac{a - [a+(n-1)d]r^n}{1-r} + \frac{dr(1-r^{n-1})}{(1-r)^2}$.

For $|r| < 1$, taking $n \to \infty$ gives $S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}$.

**Special Summation Techniques:**

1. **Telescoping series:** Write general term as difference of two consecutive terms
2. **Method of differences:** If $a_n = b_n - b_{n+1}$, sum telescopes
3. **Partial fractions:** Decompose rational functions

**Examples of Telescoping:**
$a_n = \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$.
Sum $S_n = \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \cdots + \frac{1}{n(n+1)} = 1 - \frac{1}{n+1} = \frac{n}{n+1}$.

**Harmonic Series:**
$H_n = 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}$.
No closed form, but $H_n \approx \ln n + \gamma$ where $\gamma \approx 0.57721$ (Euler-Mascheroni constant).

**Advanced Problems:**

*Problem (JEE Advanced 2020):* Find the sum to infinity of the series $S = \frac{1}{3} + \frac{3}{3^2} + \frac{5}{3^3} + \frac{7}{3^4} + \cdots$.

General term: $T_n = \frac{2n-1}{3^n}$ for $n = 1, 2, 3, \ldots$

$S = \sum_{n=1}^{\infty} \frac{2n-1}{3^n} = \sum \frac{2n}{3^n} - \sum \frac{1}{3^n}$.

We know $\sum_{n=1}^{\infty} \frac{1}{3^n} = \frac{1/3}{1-1/3} = \frac{1}{2}$.
And $\sum_{n=1}^{\infty} \frac{n}{3^n}$: Let $f(x) = \sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}$ for $|x| < 1$.
At $x = 1/3$: $\sum n(1/3)^n = \frac{1/3}{(1-1/3)^2} = \frac{1/3}{(2/3)^2} = \frac{1/3}{4/9} = \frac{3}{4}$.

So $\sum \frac{2n}{3^n} = 2 \cdot \frac{3}{4} = \frac{3}{2}$.
Thus $S = \frac{3}{2} - \frac{1}{2} = 1$.

**JEE Advanced Patterns (2018–2024):**
- Arithmetico-geometric series sum is a classic JEE Advanced problem
- AM-GM-HM inequality proof and application tested multiple times
- AGP and its sum formula appeared in 2019, 2022
- Problems combining HP with geometric mean are less common but appear
- Summation of series using various techniques is frequently tested

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
