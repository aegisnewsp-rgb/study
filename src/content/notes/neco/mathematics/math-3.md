---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-3
topicName: "Indices, Logarithms and Surds"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.663833"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Indices, Logarithms and Surds concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Indices, Logarithms and Surds

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Indices are shorthand for repeated multiplication: $a^n$ means $a$ multiplied by itself $n$ times. The **base** is $a$ and the **index/exponent** is $n$. Six laws govern indices:

$$a^m \times a^n = a^{m+n}, \quad a^m \div a^n = a^{m-n}, \quad (a^m)^n = a^{mn}$$
$$a^0 = 1\ (a \neq 0), \quad a^{-n} = \frac{1}{a^n}, \quad a^{m/n} = \sqrt[n]{a^m}$$

A **logarithm** answers "to what power must the base be raised to get this number?": $a^x = y \iff \log_a y = x$. Three laws — $\log(xy)=\log x+\log y$, $\log(x/y)=\log x-\log y$, $\log(x^n)=n\log x$ — let you expand and solve equations.

A **surd** is an irrational root like $\sqrt{2}$ or $\sqrt{5}$ kept in radical form. Rationalise denominators using the **conjugate**: $\frac{1}{\sqrt{a}+\sqrt{b}}=\frac{\sqrt{a}-\sqrt{b}}{a-b}$.

**NECO tip:** This cluster appears almost every year in Paper II objectives and Paper I theory, typically worth 10–20 marks combined. Calculator use is allowed, so memorise the `log` and `ln` keys.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Laws of Indices
The rules above let you simplify expressions without expanding. A fractional index links directly to roots: $a^{1/2}=\sqrt{a}$ and $a^{3/2}=\sqrt{a^3}=a\sqrt{a}$. Negative indices flip the fraction, so $2^{-3}=\tfrac{1}{8}$. Zero index is always 1 for any non-zero base — a frequent NECO multiple-choice trap (option $0^a=1$ is wrong because $0^a=0$).

#### Logarithms
The link $a^x=y\iff\log_a y=x$ lets you rewrite between forms. To solve $3^x=20$, take logs of both sides:
$$x=\frac{\log 20}{\log 3}\approx 2.73$$

#### Common Mistakes Table

| Wrong | Right |
|---|---|
| $\log(a+b)=\log a+\log b$ | $\log a + \log b = \log(ab)$ |
| $a^m \times b^m = a^{m+m}$ | $(ab)^m = a^m b^m$ |
| $\log(ab)=\log a \cdot \log b$ | $\log a + \log b$ |

#### Surds
Simplify by extracting square factors: $\sqrt{72}=\sqrt{36\times 2}=6\sqrt{2}$. To rationalise $\dfrac{3}{\sqrt{5}}$, multiply by $\dfrac{\sqrt{5}}{\sqrt{5}}$ to get $\dfrac{3\sqrt{5}}{5}$. For two-term denominators, use the conjugate difference of squares identity $(a+b)(a-b)=a^2-b^2$.

**NECO pattern:** Paper II objective items often test a single law in isolation (e.g. simplify $2^5 \times 2^{-3}$); Paper I theory asks you to solve an equation like $2^{x+1}=5^{2x}$ using logs.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Change of Base and Calculator Strategy
When the base is not 10 or $e$, use $\log_a x=\dfrac{\log x}{\log a}=\dfrac{\ln x}{\ln a}$. NECO candidates commonly confuse the `log` key (base 10) with `ln` (base $e$); on Casio fx-series, `log` is base 10 and `ln` is base $e\approx 2.71828$. Choose whichever your equation simplifies with.

#### Connections to Adjacent Topics
Indices underpin **standard form** (scientific notation): write $0.000034=3.4\times 10^{-5}$. Nigerian currency, populations, and physics quantities are routinely tested in this form. Logarithms underpin **pH**, **decibels**, and the **Richter scale**, while exponential growth/decay (compound interest, population) requires the same log-solve technique.

#### Worked Example
Solve $\log_2(x+1)+\log_2(x-1)=3$.
Using the product law: $\log_2[(x+1)(x-1)]=3 \Rightarrow (x+1)(x-1)=2^3=8 \Rightarrow x^2-1=8 \Rightarrow x^2=9 \Rightarrow x=\pm 3$. Since $x+1>0$ and $x-1>0$, we need $x>1$, so $x=3$.

#### Common Mistakes (depth)
- Solving $x^2=k$ then taking $\log x$ on both sides is invalid when $k<0$ — reject negative solutions first.
- Writing $0^0$: undefined, not 1.
- Leaving $\sqrt{72}$ unsimplified loses marks even if numerically correct.

#### Practice Prompts
1. Simplify $\dfrac{27^{2/3}\times 9^{-1}}{3^2}$ leaving your answer as a power of 3.
2. Solve $5^{2x-1}=3^{x+1}$ correct to 3 significant figures, and state whether your calculator used `log` or `ln`.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
