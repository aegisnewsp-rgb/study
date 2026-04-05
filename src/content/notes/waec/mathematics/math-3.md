---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-3
topicName: Indices and Logarithms
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.617656"
diagramPrompt: Mathematical diagram showing Indices and Logarithms concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Indices and Logarithms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Indices (Exponents)** are a shorthand way of writing repeated multiplication. **Logarithms** are the inverse operation of indices.

**Index Notation:**
$$a^n = \underbrace{a \times a \times a \times ... \times a}_{n \text{ times}}$$

Where $a$ is the **base** and $n$ is the **index/exponent**.

**Laws of Indices:**

| Law | Formula | Example |
|-----|---------|---------|
| Product | $a^m \times a^n = a^{m+n}$ | $2^3 \times 2^4 = 2^7$ |
| Quotient | $a^m \div a^n = a^{m-n}$ | $2^5 \div 2^3 = 2^2$ |
| Power of power | $(a^m)^n = a^{mn}$ | $(2^3)^2 = 2^6$ |
| Zero index | $a^0 = 1$ (for $a \neq 0$) | $5^0 = 1$ |
| Negative index | $a^{-n} = \frac{1}{a^n}$ | $2^{-3} = \frac{1}{8}$ |
| Fractional index | $a^{\frac{1}{n}} = \sqrt[n]{a}$ | $8^{\frac{1}{3}} = 2$ |

**Logarithm Definition:**
$$\log_a x = y \quad \Leftrightarrow \quad a^y = x$$

"Log base $a$ of $x$ equals $y$" means "$a$ to the power $y$ equals $x$."

**Examples:**
$$\log_2 8 = 3 \quad \text{because } 2^3 = 8$$
$$\log_{10} 1000 = 3 \quad \text{because } 10^3 = 1000$$
$$\log_5 25 = 2 \quad \text{because } 5^2 = 25$$

⚡ **WAEC Tip:** Logarithms and indices are inverses. If $a^x = y$, then $\log_a y = x$. You can convert between forms!

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Laws of Logarithms:**

| Law | Formula |
|-----|---------|
| Product | $\log_a (xy) = \log_a x + \log_a y$ |
| Quotient | $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$ |
| Power | $\log_a (x^n) = n \log_a x$ |
| Change of base | $\log_a x = \frac{\log_b x}{\log_b a}$ |

**Example — Using log laws:**
$$\log_2 8 + \log_2 4 = \log_2 (8 \times 4) = \log_2 32 = 5$$

**Simplifying Expressions:**

*Problem*: Simplify $\frac{2^5 \times 2^3}{2^4}$
$$= 2^{5+3-4} = 2^4 = 16$$

*Problem*: Simplify $\frac{27^{\frac{2}{3}}}{9^{\frac{1}{2}}}$
$$= \frac{(3^3)^{\frac{2}{3}}}{(3^2)^{\frac{1}{2}}} = \frac{3^2}{3^1} = \frac{9}{3} = 3$$

**Solving Logarithmic Equations:**

*Problem*: Solve $\log_2 x = 5$
$$x = 2^5 = 32$$

*Problem*: Solve $\log_3 (x + 1) = 4$
$$x + 1 = 3^4 = 81$$
$$x = 80$$

*Problem*: Solve $\log_2 x + \log_2 (x - 3) = 3$
$$\log_2 [x(x-3)] = 3$$
$$x(x-3) = 2^3 = 8$$
$$x^2 - 3x - 8 = 0$$
$$(x-4)(x+2) = 0$$
$$x = 4 \text{ or } x = -2$$

Since $x > 3$ (domain: $x - 3 > 0$ for $\log_2(x-3)$), $x = 4$.

**Exponential Equations:**

*Problem*: Solve $3^{x+1} = 27$
$$3^{x+1} = 3^3$$
$$x + 1 = 3$$
$$x = 2$$

*Problem*: Solve $2^x = 10$
Take $\log_{10}$ of both sides:
$$\log 2^x = \log 10$$
$$x \log 2 = 1$$
$$x = \frac{1}{\log 2} \approx \frac{1}{0.3010} \approx 3.32$$

⚡ **Common Student Mistakes:** Confusing $\log(xy)$ with $\log x \times \log y$ — product rule is $\log(xy) = \log x + \log y$. Forgetting to check the domain of logarithmic functions (argument must be > 0). When changing bases, using the wrong base in the numerator.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Natural Logarithms:**
When the base is $e$ (Euler's number, $e \approx 2.71828...$):
$$\ln x = \log_e x$$

This is used extensively in calculus and exponential growth/decay problems.

**Change of Base Formula:**
$$\log_a x = \frac{\ln x}{\ln a} = \frac{\log_b x}{\log_b a}$$

This allows you to calculate logs with any base using a calculator (which usually has $\log_{10}$ and $\ln$):

*Problem*: Evaluate $\log_2 7$
$$\log_2 7 = \frac{\ln 7}{\ln 2} = \frac{1.9459...}{0.6931...} \approx 2.807$$

**Simultaneous Logarithmic Equations:**

*Problem*:
$$\log_2 x + \log_2 y = 5$$
$$x - y = 4$$

From (1): $\log_2(xy) = 5$, so $xy = 32$
From (2): $x = y + 4$

Substitute:
$$(y+4)y = 32$$
$$y^2 + 4y - 32 = 0$$
$$(y+8)(y-4) = 0$$
$$y = 4 \quad (\text{since } y > 0 \text{ for } \log_2 y \text{ to exist})$$

Then $x = 8$

**Solving with Indices:**

*Problem*: Solve $4^{x+1} = 8^{x-1}$
$$(2^2)^{x+1} = (2^3)^{x-1}$$
$$2^{2x+2} = 2^{3x-3}$$
$$2x + 2 = 3x - 3$$
$$x = 5$$

*Problem*: Solve $3^{2x} - 10 \times 3^x + 9 = 0$

Let $y = 3^x$:
$$y^2 - 10y + 9 = 0$$
$$(y-1)(y-9) = 0$$
$$y = 1 \text{ or } y = 9$$
$$3^x = 1 \Rightarrow x = 0$$
$$3^x = 9 \Rightarrow x = 2$$

**Compound Interest:**
$$A = P\left(1 + \frac{r}{100}\right)^n$$

*Problem*: ₦50,000 invested at 8% per annum for 5 years. Find the amount.
$$A = 50000\left(1 + \frac{8}{100}\right)^5 = 50000(1.08)^5 = 50000 \times 1.4693 = \text{₦73,465}$$

**Population Growth:**
*Problem*: A town's population of 100,000 grows at 3% per year. Find the population after 10 years.
$$P = 100000(1 + 0.03)^{10} = 100000 \times 1.3439 = \text{134,390}$$

**Exponential Decay:**
*Problem*: A radioactive substance has half-life of 6 years. If initial amount is 80 g, find amount after 20 years.

Half-life formula: $N = N_0 \left(\frac{1}{2}\right)^{\frac{t}{T}}$
Where $T$ = half-life, $t$ = time elapsed

$$N = 80 \times \left(\frac{1}{2}\right)^{\frac{20}{6}} = 80 \times \left(\frac{1}{2}\right)^{\frac{10}{3}} = 80 \times 0.1976 = \text{15.8 g (approx)}$$

**pH and Decibel Scales:**

**pH Scale** (logarithmic, base 10):
$$\text{pH} = -\log_{10}[H^+]$$

If $[H^+] = 2 \times 10^{-5}$:
$$\text{pH} = -\log(2 \times 10^{-5}) = -( \log 2 + \log 10^{-5}) = -(0.301 - 5) = 4.699 \approx 4.7$$

**Decibel Scale** (logarithmic, base 10):
$$\beta = 10 \log_{10}\left(\frac{I}{I_0}\right) \quad \text{(decibels)}$$

If intensity $I = 100 \times I_0$:
$$\beta = 10 \log_{10}(100) = 10 \times 2 = 20 \text{ dB}$$

**Richter Scale** (earthquake magnitude):
$$M = \log_{10}\left(\frac{A}{A_0}\right)$$

If amplitude $A = 1000 \times A_0$:
$$M = \log_{10}(1000) = 3$$

**Solving Inequalities with Indices and Logs:**

*Problem*: Solve $2^{x+1} > 16$
$$2^{x+1} > 2^4$$
$$x + 1 > 4$$
$$x > 3$$

*Problem*: Solve $\log_2 x < 3$
$$x < 2^3 = 8$$
Also need $x > 0$ (domain)
So: $0 < x < 8$

**Evaluating Logarithms without a Calculator:**

*Problem*: Find $\log_2 48$
$$\log_2 48 = \log_2 (16 \times 3) = \log_2 16 + \log_2 3 = 4 + \log_2 3$$

Since $\log_2 3$ doesn't simplify nicely, the answer is $4 + \log_2 3$.

Or using change of base with known values:
$$\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2} = \frac{0.4771}{0.3010} \approx 1.585$$
$$\log_2 48 \approx 4 + 1.585 = 5.585$$

⚡ **WAEC Examination Patterns:** Apply laws of indices to simplify expressions. Solve exponential and logarithmic equations. Solve problems involving compound interest and exponential growth/decay. Use change of base formula. Solve simultaneous equations with logs. Apply logs to real-world scales (pH, decibels, Richter).
