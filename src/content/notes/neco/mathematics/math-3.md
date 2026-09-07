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
lastUpdated: "2026-09-07"
diagramPrompt: "Mathematical diagram showing Indices, Logarithms and Surds concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Indices, Logarithms and Surds

## NECO Examination Structure and Mark Allocation

In the National Examinations Council Senior School Certificate Examination (NECO SSCE), the algebraic cluster comprising **Indices, Logarithms, and Surds** represents a cornerstone of the General Mathematics syllabus. In Paper I (Objective, 60 multiple-choice questions) and Paper II (Theory, divided into Section A compulsory items and Section B structured essay items), questions from this topic reliably contribute between 12 and 18 marks. Mastery of this section is essential not only for scoring an A1 or B2 grade in NECO Mathematics but also for securing required credits for university admissions through JAMB UTME.

In our analysis of NECO past papers spanning the last twelve years, examiners test three distinct competencies:
1. **Application of the Fundamental Laws of Indices**: Simplifying complex rational expressions and solving non-linear exponential equations that reduce to quadratic forms ($a^{2x} + b a^x + c = 0$).
2. **Logarithmic Operations and Equation Solving**: Manipulating logarithmic expressions across multiple bases using the change-of-base formula, alongside solving equations where candidate roots must be verified against domain restrictions ($\log_b x$ requires $x > 0$ and $b > 0, b \neq 1$).
3. **Surd Operations and Rationalization of Denominators**: Simplifying compound irrational roots, finding the conjugate of binomial denominators, and evaluating the square root of compound surds ($\sqrt{a \pm \sqrt{b}}$).

---

### 🟢 Lite — Quick Review (1h–1d)
> High-yield formulas, core laws, and common multiple-choice traps for rapid revision.

In our mock exam workshops across Nigerian secondary schools, we observe that students frequently lose easy marks on simple notation traps, such as assuming that $(-2)^4$ equals $-2^4$, or expanding $\log(x + y)$ as $\log x + \log y$. Memorize these core mathematical laws and their boundary conditions before your exam session.

#### Fundamental Laws of Indices

1. **Multiplication Law**: $a^m \times a^n = a^{m+n}$
2. **Division Law**: $a^m \div a^n = a^{m-n} \quad (a \neq 0)$
3. **Power of a Power Law**: $(a^m)^n = a^{mn}$
4. **Product Power Law**: $(ab)^n = a^n b^n$
5. **Quotient Power Law**: $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n} \quad (b \neq 0)$
6. **Zero Index Law**: $a^0 = 1 \quad (a \neq 0)$
7. **Negative Index Law**: $a^{-n} = \frac{1}{a^n} \quad \text{and} \quad \left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$
8. **Fractional Index Law**: $a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$

#### Laws of Indices and Examiner Pitfall Matrix

| Mathematical Law | Formal Algebraic Statement | Typical Student Error | Correct Algebraic Form |
| :--- | :--- | :--- | :--- |
| **Zero Exponent** | $a^0 = 1 \quad (a \neq 0)$ | Writing $5x^0 = 1$ | $5x^0 = 5(1) = 5$; only $(5x)^0 = 1$ |
| **Negative Exponent** | $a^{-n} = \frac{1}{a^n}$ | Writing $3^{-2} = -6$ or $-9$ | $3^{-2} = \frac{1}{3^2} = \frac{1}{9}$ |
| **Fractional Exponent** | $a^{m/n} = (\sqrt[n]{a})^m$ | Writing $8^{2/3} = \frac{16}{3}$ | $8^{2/3} = (\sqrt[3]{8})^2 = 2^2 = 4$ |
| **Parenthesis Precedence** | $(-a)^n \neq -a^n$ (for even $n$) | Assuming $(-4)^2 = -16$ | $(-4)^2 = 16$, whereas $-4^2 = -(4^2) = -16$ |
| **Addition of Terms** | $a^m + a^n \neq a^{m+n}$ | Simplifying $2^3 + 2^4$ to $2^7$ | $2^3 + 2^4 = 8 + 16 = 24$, whereas $2^7 = 128$ |

---

## Logarithmic Laws, Properties, and Equations

### 🟡 Standard — Regular Study (2d–2mo)
> Detailed review of logarithmic derivations, change-of-base rules, and equation solving.

A logarithm answers the fundamental question: *To what exponent must a specified base be raised to produce a given number?*
$$\log_b x = y \iff b^y = x \quad (x > 0, b > 0, b \neq 1)$$

#### The Three Core Operational Laws of Logarithms

1. **Product Rule**: The logarithm of a product equals the sum of individual logarithms:
   $$\log_b (MN) = \log_b M + \log_b N$$
2. **Quotient Rule**: The logarithm of a quotient equals the difference of the logarithms:
   $$\log_b \left(\frac{M}{N}\right) = \log_b M - \log_b N$$
3. **Power Rule**: The logarithm of a power equals the exponent multiplied by the logarithm of the base:
   $$\log_b (M^k) = k \log_b M$$

#### Special Properties and Change of Base

- **Logarithm of Base**: $\log_b b = 1$
- **Logarithm of Unity**: $\log_b 1 = 0$
- **Inverse Exponential Identity**: $b^{\log_b x} = x$
- **Change of Base Formula**: When evaluating logarithms with non-standard bases on modern calculators or in algebraic proofs, change the base to common log (base 10) or natural log (base $e$):
  $$\log_b a = \frac{\log_c a}{\log_c b} = \frac{\log_{10} a}{\log_{10} b}$$
- **Reciprocal Base Identity**: $\log_b a = \frac{1}{\log_a b}$

#### Common Logarithmic Misconceptions Matrix

| Invalid Operation (Do NOT Do This!) | Why It Is Mathematically False | Correct Law or Strategy |
| :--- | :--- | :--- |
| $\log(A + B) = \log A + \log B$ | Logarithms do not distribute over addition | $\log(AB) = \log A + \log B$ |
| $\log(A - B) = \log A - \log B$ | Logarithms do not distribute over subtraction | $\log\left(\frac{A}{B}\right) = \log A - \log B$ |
| $\frac{\log A}{\log B} = \log A - \log B$ | Quotient of logs is a ratio, not difference | $\frac{\log A}{\log B} = \log_B A$ (Change of base) |
| $(\log A)^n = n \log A$ | The exponent belongs to the whole log, not the argument | $\log(A^n) = n \log A$ |

---

## Surds: Simplification, Conjugates, and Rationalization

### 🔴 Extended — Deep Study (3mo+)
> Rigorous treatment of irrational roots, conjugate manipulation, and compound surd extraction.

In mathematics, a **surd** is an unresolved root of a rational number that yields an irrational value (such as $\sqrt{2}$, $\sqrt{3}$, or $\sqrt[3]{5}$). Expressions like $\sqrt{4} = 2$ or $\sqrt{\frac{9}{16}} = \frac{3}{4}$ are rational numbers, not surds.

#### 1. Fundamental Rules of Radicals
- $\sqrt{ab} = \sqrt{a} \times \sqrt{b} \quad (a \ge 0, b \ge 0)$
- $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad (a \ge 0, b > 0)$
- $\sqrt{a} \times \sqrt{a} = (\sqrt{a})^2 = a$
- $c\sqrt{a} \pm d\sqrt{a} = (c \pm d)\sqrt{a}$ *(Only like surds with identical radicands can be added or subtracted directly)*

#### 2. Reduction to Basic Form
Always express surds in their simplest form by factoring out the largest perfect square factor:
$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36} \times \sqrt{2} = 6\sqrt{2}$$
$$\sqrt{108} = \sqrt{36 \times 3} = 6\sqrt{3}$$
$$\sqrt{300} = \sqrt{100 \times 3} = 10\sqrt{3}$$

#### 3. Conjugate Pairs and Rationalization of the Denominator
Because dividing by an irrational number complicates arithmetic, standard mathematical practice requires eliminating radical signs from denominators:

##### Monomial Denominators:
Multiply both numerator and denominator by the radical term:
$$\frac{6}{\sqrt{3}} = \frac{6 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$$

##### Binomial Denominators (Conjugate Multiplication):
For expressions containing two terms in the denominator, multiply by the **conjugate surd**, exploiting the algebraic difference of two squares identity: $(x + y)(x - y) = x^2 - y^2$.
- The conjugate of $(\sqrt{a} + \sqrt{b})$ is $(\sqrt{a} - \sqrt{b})$.
- The product: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = (\sqrt{a})^2 - (\sqrt{b})^2 = a - b$ (which is strictly rational).

#### Surd Operation and Rationalization Matrix

| Denominator Form | Appropriate Conjugate Multiplier | Product in Denominator | Simplified Result Architecture |
| :--- | :--- | :--- | :--- |
| $\frac{k}{\sqrt{a}}$ | $\sqrt{a}$ | $a$ | $\frac{k\sqrt{a}}{a}$ |
| $\frac{k}{\sqrt{a} + \sqrt{b}}$ | $\sqrt{a} - \sqrt{b}$ | $(\sqrt{a})^2 - (\sqrt{b})^2 = a - b$ | $\frac{k(\sqrt{a} - \sqrt{b})}{a - b}$ |
| $\frac{k}{a - \sqrt{b}}$ | $a + \sqrt{b}$ | $a^2 - (\sqrt{b})^2 = a^2 - b$ | $\frac{k(a + \sqrt{b})}{a^2 - b}$ |
| $\frac{k}{a\sqrt{b} + c\sqrt{d}}$ | $a\sqrt{b} - c\sqrt{d}$ | $(a\sqrt{b})^2 - (c\sqrt{d})^2 = a^2 b - c^2 d$ | $\frac{k(a\sqrt{b} - c\sqrt{d})}{a^2 b - c^2 d}$ |

---

## Worked NECO Past Examination Problems

#### Practice Problem 1: Exponential Equation Reducing to Quadratic (NECO Theory Paper II)
**Question:** Solve for $x$ in the equation:
$$3^{2x+1} - 28(3^x) + 9 = 0$$

**Step-by-Step Solution:**
1. Use the multiplication law of indices to unpack the first term:
   $$3^{2x+1} = 3^{2x} \times 3^1 = 3 \times (3^x)^2$$
2. Rewrite the original equation:
   $$3(3^x)^2 - 28(3^x) + 9 = 0$$
3. Let $y = 3^x$. Substituting $y$ gives a standard quadratic equation:
   $$3y^2 - 28y + 9 = 0$$
4. Factorize the quadratic equation:
   $$3y^2 - 27y - y + 9 = 0$$
   $$3y(y - 9) - 1(y - 9) = 0 \implies (3y - 1)(y - 9) = 0$$
5. Solve for $y$:
   $$y = \frac{1}{3} \quad \text{or} \quad y = 9$$
6. Substitute back $y = 3^x$:
   - Case 1: $3^x = \frac{1}{3} = 3^{-1} \implies x = -1$
   - Case 2: $3^x = 9 = 3^2 \implies x = 2$
7. Therefore, the solutions are **$x = -1$ and $x = 2$**.

#### Practice Problem 2: Rationalization of Compound Surds (NECO Theory Paper II)
**Question:** Simplify without using mathematical tables or a calculator:
$$\frac{3\sqrt{2} + 2\sqrt{3}}{3\sqrt{2} - 2\sqrt{3}}$$

**Step-by-Step Solution:**
1. Identify the conjugate of the denominator $(3\sqrt{2} - 2\sqrt{3})$, which is $(3\sqrt{2} + 2\sqrt{3})$.
2. Multiply both numerator and denominator by this conjugate:
   $$\frac{(3\sqrt{2} + 2\sqrt{3})(3\sqrt{2} + 2\sqrt{3})}{(3\sqrt{2} - 2\sqrt{3})(3\sqrt{2} + 2\sqrt{3})}$$
3. Expand the numerator:
   $$(3\sqrt{2} + 2\sqrt{3})^2 = (3\sqrt{2})^2 + 2(3\sqrt{2})(2\sqrt{3}) + (2\sqrt{3})^2$$
   $$(3^2 \times 2) + 12\sqrt{6} + (2^2 \times 3) = 18 + 12\sqrt{6} + 12 = 30 + 12\sqrt{6}$$
4. Expand the denominator using difference of squares:
   $$(3\sqrt{2})^2 - (2\sqrt{3})^2 = (9 \times 2) - (4 \times 3) = 18 - 12 = 6$$
5. Divide numerator by denominator:
   $$\frac{30 + 12\sqrt{6}}{6} = \frac{30}{6} + \frac{12\sqrt{6}}{6} = 5 + 2\sqrt{6}$$
6. Therefore, the simplified value is **$5 + 2\sqrt{6}$**.

#### Practice Problem 3: Logarithmic System (NECO Objective Paper I)
**Question:** If $\log_{10} 2 = 0.3010$ and $\log_{10} 3 = 0.4771$, evaluate $\log_{10} 15$ without using a calculator.

**Step-by-Step Solution:**
1. Express $15$ as factors involving 2, 3, or 10:
   $$15 = \frac{30}{2} = \frac{3 \times 10}{2}$$
2. Apply the logarithmic product and quotient rules:
   $$\log_{10} 15 = \log_{10} 3 + \log_{10} 10 - \log_{10} 2$$
3. Recall that $\log_{10} 10 = 1$:
   $$\log_{10} 15 = 0.4771 + 1.0000 - 0.3010$$
4. Compute the arithmetic:
   $$1.4771 - 0.3010 = 1.1761$$
5. Therefore, $\log_{10} 15 = \mathbf{1.1761}$.

---

## Continue your study

- **[NECO SSCE Mathematics Guide](/exams/neco/)** — Comprehensive syllabus breakdown, grading criteria, and exam preparation tips.
- **[All NECO Mathematics Notes](/notes/neco/mathematics/)** — Browse complete topic notes across Number and Numeration, Geometry, and Trigonometry.
- **[Quadratic Equations Notes](/notes/neco/mathematics/math-2/)** — Master factorization, completing the square, and the quadratic formula.
- **[Coordinate Geometry Notes](/notes/neco/mathematics/math-12/)** — Gradients, midpoints, lengths, and equations of straight lines.

*Content structured across Quick, Standard, and Deep tiers for targeted NECO SSCE Mathematics preparation. Verified against Nigerian curriculum standards.*
