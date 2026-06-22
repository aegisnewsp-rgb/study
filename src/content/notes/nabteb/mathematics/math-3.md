---



exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-3
topicName: Indices and Logarithms
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.547496"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Indices and Logarithms concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Indices and Logarithms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Indices** (exponents) tell you how many times a **base** *a* multiplies itself: $a^n = a \times a \times \cdots \times a$ (n times). **Logarithms** are the inverse: if $a^x = N$, then $x = \log_a N$, valid only for $a>0$, $a \neq 1$, $N>0$.

Must-know rules:
- **Multiplication:** $a^m \times a^n = a^{m+n}$
- **Division:** $a^m \div a^n = a^{m-n}$
- **Power of a power:** $(a^m)^n = a^{mn}$
- **Zero index:** $a^0 = 1$ (for $a \neq 0$)
- **Log product/quotient/power:** $\log_a(MN)=\log_a M + \log_a N$; $\log_a(M/N)=\log_a M - \log_a N$; $\log_a(M^n)=n\log_a M$

NABTEB pointers: expect 1–3 objective items; simplify with negative/fractional indices; read four-figure **log tables** using **characteristic + mantissa**; convert between $\log_{10}$, $\ln$, and $\log_a$ via change of base.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Laws of Indices

For $a,b>0$ and real numbers $m,n$:

| Rule | Formula |
|---|---|
| Multiplication | $a^m \times a^n = a^{m+n}$ |
| Division | $a^m \div a^n = a^{m-n}$ |
| Power of a power | $(a^m)^n = a^{mn}$ |
| Power of a product | $(ab)^n = a^n b^n$ |
| Zero index | $a^0 = 1$ |
| Negative index | $a^{-n} = \dfrac{1}{a^n}$ |
| Fractional index | $a^{m/n} = \sqrt[n]{a^m}$ |

These collapse multi-term expressions into single powers—essential for NABTEB simplification items.

#### Definition of a Logarithm

The logarithm is the **inverse** of exponentiation. If $a^x = N$ then $x = \log_a N$. Two special cases follow directly: $\log_a a = 1$ (because $a^1 = a$) and $\log_a 1 = 0$ (because $a^0 = 1$). The base restriction $a \neq 1$ matters because any number raised to $1$ is itself, so $\log_1 N$ would be undefined for $N \neq 1$.

#### Laws of Logarithms

These mirror the index laws because logs are inverses:
- **Product:** $\log_a(MN) = \log_a M + \log_a N$
- **Quotient:** $\log_a(M/N) = \log_a M - \log_a N$
- **Power:** $\log_a(M^n) = n \log_a M$

Worked: expand $\log_2(8 \times 5^2) = \log_2 8 + 2\log_2 5 = 3 + 2\log_2 5$.

#### Common Patterns in NABTEB

1. Simplify $2^3 \times 2^{-5} \times 4^2 = 2^{3-5+4} = 2^2 = 4$.
2. Express $27^{2/3}$ as $\sqrt[3]{27^2} = 9$.
3. Solve $3^{x+1} = 81$: since $81 = 3^4$, $x+1=4 \Rightarrow x=3$.
4. Read $\log_10 273.5$ from tables: characteristic $2$, mantissa from row 273/column 5, then find **antilog** to recover the number.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Change of Base and Log Tables

To evaluate $\log_a N$ with four-figure tables (which tabulate $\log_{10}$), use
$$\log_a N = \frac{\log_{10} N}{\log_{10} a}.$$
On NABTEB essay papers you will be expected to read $\log_{10} x$ in two parts: the **characteristic** (the integer part, determined by where the decimal sits: e.g. $\log 2735 = 3 + \log 2.735$) and the **mantissa** (the fractional part, looked up in the table). The number is recovered via the **antilogarithm** table. Mixing these up is the single most common cause of lost marks.

#### Edge Cases and Common Mistakes

- $(a+b)^n \neq a^n + b^n$; only $(ab)^n = a^n b^n$.
- $\log(M+N) \neq \log M + \log N$; the law applies to **products**, not sums.
- Negative inputs are illegal: $\log_a N$ exists only for $N>0$.
- $a^0 = 1$, never $0$, even when $a$ itself is a fraction.
- Fractional indices $a^{1/2}=\sqrt{a}$ assume $a \geq 0$ in real arithmetic; $a^{3/2} = a\sqrt{a}$ requires $a \geq 0$.

#### Connections

Logarithms linearise exponential growth, which is why they appear in pH ($\log_{10}[H^+]$), decibel scales ($10\log_{10}$), and compound-interest decay: $A = Pe^{rt}$ becomes $\ln A = \ln P + rt$. Recognising this link helps in NABTEB's integrated word problems.

#### Practice Prompts

1. Without tables, simplify $\dfrac{9^{1/2} \times 27^{-1/3}}{(\tfrac{1}{3})^{-2}}$.
2. Given $\log_5 2 = 0.4307$ and $\log_5 3 = 0.6826$, find $\log_5 60$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
