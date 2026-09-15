---



exam: ncee
examName: NCEE (National Common Entrance Examination)
subject: mathematics
subjectName: Mathematics
topic: math-4
topicName: Indices and Standard Form
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.580899"
lastUpdated: "2026-09-15"
diagramPrompt: "Mathematical diagram showing Indices and Standard Form concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Indices and Standard Form

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NCEE Mathematics paper.

**Indices** (also called exponents) tell you how many times a **base** number is multiplied by itself. The expression $a^n$ reads "*a to the power n*", where $a$ is the base and $n$ is the **index** (exponent).

**Standard form** (scientific notation) writes any number as $N = a \times 10^n$, where $1 \le |a| < 10$ and $n$ is an integer (positive, negative, or zero).

Key rules you must memorise:

- $a^m \times a^n = a^{m+n}$ (multiply → add indices)
- $a^m \div a^n = a^{m-n}$ (divide → subtract indices)
- $(a^m)^n = a^{mn}$ (power of a power → multiply indices)
- $a^0 = 1$ for any $a \ne 0$ (zero index)
- $a^{-n} = \dfrac{1}{a^n}$ (negative index → reciprocal)

| Rule | Formula | Meaning |
|---|---|---|
| Zero index | $a^0 = 1$ | Anything (non-zero) raised to 0 equals 1 |
| Negative index | $a^{-n} = 1/a^n$ | Flip the number to the denominator |
| Fractional index | $a^{1/n} = \sqrt[n]{a}$ | The $n$-th root of the base |

> 💡 **High-Yield Memory Hook:** **MADSP** — **M**ultiply → **A**dd, **D**ivide → **S**ubtract, **P**ower of a power → **M**ultiply. Walk left to right: operation, then what to do with indices.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before NCEE.

#### Core Laws of Indices

All seven laws derive from the idea that $a^n$ means $a \times a \times \dots \times a$ (n times). Each law has an SI-style "dimension": the base carries no unit, while the index is a pure number.

| Law | Formula | When the bases… | Typical NCEE use |
|---|---|---|---|
| Multiplication | $a^m \times a^n = a^{m+n}$ | are equal | Simplify $2^3 \times 2^5$ |
| Division | $a^m \div a^n = a^{m-n}$ | are equal | Simplify $7^9 \div 7^4$ |
| Power of a power | $(a^m)^n = a^{mn}$ | are nested | Simplify $(5^2)^3$ |
| Power of product | $(ab)^n = a^n b^n$ | multiply inside | Expand $(2x)^4$ |
| Power of quotient | $(a/b)^n = a^n/b^n$ | divide inside | Simplify $(3/5)^2$ |
| Zero index | $a^0 = 1$ | exponent is 0 | Evaluate $(2/3)^0$ |
| Negative index | $a^{-n} = 1/a^n$ | exponent < 0 | Rewrite $4^{-2}$ as $1/16$ |
| Fractional index | $a^{m/n} = \sqrt[n]{a^m}$ | exponent is a fraction | Evaluate $8^{2/3}$ |

#### Standard Form (Scientific Notation)

A number in standard form has the form $N = a \times 10^n$ where $1 \le |a| < 10$ and $n \in \mathbb{Z}$. To convert:

1. Place the decimal point so that exactly **one non-zero digit** sits to its left.
2. Count how many places the decimal moved — that count is $n$.
3. Moving the decimal **right** (for small numbers like $0.0042$) gives **negative** $n$; moving **left** (for large numbers like $420{,}000$) gives **positive** $n$.

To compare numbers in standard form, look at $n$ first: bigger $n$ means a bigger number (for positive values).

#### Comparison Matrix: Easily Confused Concepts

| Looks similar | Correct rule | Common wrong answer |
|---|---|---|
| $a^{-n}$ | $a^{-n} = \dfrac{1}{a^n}$ | $-a^n$ (sign error) |
| $a^0$ | equals $1$ | $0$ (forgetting the rule) |
| $2^5 \div 3^5$ | $\dfrac{32}{243}$ — bases differ, **do not** combine | $(2/3)^0 = 1$ |
| $52 \times 10^4$ in standard form | $5.2 \times 10^5$ | Leaving it as $52 \times 10^4$ (coefficient $\ge 10$) |
| $\sqrt{a/b}$ | $\dfrac{\sqrt{a}}{\sqrt{b}}$ | $\sqrt{ab}$ |

#### 🎯 Exam-Level Worked Problem

**Question:** Simplify $\dfrac{(2^3 \times 2^{-2})^2}{2^{-1}}$ and write the answer in standard form.

#### Solution:

- Apply the inner multiplication law: $2^3 \times 2^{-2} = 2^{3+(-2)} = 2^1 = 2$.
- Apply the power-of-a-power law: $(2^1)^2 = 2^{1 \times 2} = 2^2 = 4$.
- Convert the numerator and denominator to powers of 2: numerator $= 2^2$, denominator $= 2^{-1}$.
- Apply the division law: $2^2 \div 2^{-1} = 2^{2 - (-1)} = 2^{3} = 8$.
- Write in standard form: $8 = 8.0 \times 10^{0}$, so the answer is $\mathbf{8 \times 10^{0}}$.

> ⚠️ **Examiner Trap:** Students often write $2^2 \div 2^{-1} = 2^{2-1} = 2^1$ because they forget to apply the negative sign twice — subtracting $-1$ means *adding* 1 to the index, not subtracting it.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

1. **Negative bases with even indices** yield positive results: $(-3)^4 = 81$, but $-3^4 = -(3^4) = -81$ (brackets change everything).
2. **The $0^0$ case** is undefined in NCEE-level mathematics — never write $0^0 = 1$ or $0$; treat it as "not a valid input".
3. **Fractional indices of negative bases** (such as $(-8)^{1/3}$) are only defined when the denominator of the index is odd, because the cube root of a negative is real but the square root is not.
4. **Standard form of decimals between 0 and 1** always carries a negative $n$. Example: $0.000\;072 = 7.2 \times 10^{-5}$.
5. **Ordering across mixed sizes**: when comparing $3.1 \times 10^4$ and $31 \times 10^3$, normalise both to the same $n$ first — $31 \times 10^3 = 3.1 \times 10^4$, so they are equal.

#### Connections to Adjacent Topics

Indices underpin NCEE word problems on **population growth** (where values like $6.8 \times 10^9$ appear), **astronomical distances** (e.g. $1.5 \times 10^{11}$ m for the Earth–Sun distance), and **microscopic measurements** (e.g. cell diameter $5 \times 10^{-6}$ m). They also pair with **surds**: $\sqrt{8} = 8^{1/2} = (4 \times 2)^{1/2} = 2\sqrt{2}$. In **algebra**, simplifying $x^5 \times x^{-3}$ directly produces $x^2$, the same law applied to variables.

#### Advanced Practice Prompts

1. Without using a calculator, evaluate $(27)^{2/3} \times 9^{-1/2}$ and express the result in standard form. *(Expected path: $27^{2/3} = 9$, $9^{-1/2} = 1/3$, product = $3 = 3 \times 10^0$.)*
2. The population of a town is $4.5 \times 10^5$ and grows by a factor of $10^{0.03}$ each year. Write the population after one year in standard form and justify each step. *(Expected path: $4.5 \times 10^5 \times 10^{0.03} = 4.5 \times 10^{5.03} \approx 5.36 \times 10^5$.)*

#### Common Traps Checklist

- Treating $(a^m)^n$ as $a^{m+n}$ instead of $a^{mn}$.
- Forgetting brackets when applying negative indices: $(2x)^{-3} = 1/(8x^3)$, not $1/(8)x^3$.
- Writing $0.25 \times 10^3$ instead of $2.5 \times 10^2$ (coefficient must satisfy $1 \le |a| < 10$).
- Confusing the index with the coefficient: in $6.02 \times 10^{23}$, the index is $23$, not $602$.

---

## Continue your study

- **[View this topic in your NCEE (National Common Entrance Examination) roadmap](/roadmap/?exam=ncee&duration=1mo)** — see where "Indices and Standard Form" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ncee&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NCEE (National Common Entrance Examination) exam overview](/exams/ncee/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ncee/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
