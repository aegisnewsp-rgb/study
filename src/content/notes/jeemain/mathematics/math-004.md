---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Binomial Theorem
weight: 4
country: india
generated: "2026-04-17T22:36:00.000000"
diagramPrompt: "Clean educational diagram showing Binomial Expansion Pascal's Triangle with clear labels, white background, labeled coefficients, color-coded terms, exam-style illustration"





---
# Binomial Theorem

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Binomial Theorem** — Key Facts for JEE Main
General expansion: (a + b)^n = Σ_{k=0}^{n} C(n,k) a^{n−k} b^k = Σ_{k=0}^{n} nCk a^{n−k} b^k
General term: T_{k+1} = nCk · a^{n−k} · b^k (note: T_r+1 in standard notation means rth term from beginning)
Middle term: if n is even, T_{(n/2)+1} is the single middle term; if n is odd, T_{((n+1)/2)+1} and T_{((n+1)/2)} are both middle terms
Coefficient of x^r in (1 + x)^n is nCr
⚡ Exam tip: JEE Main often tests the greatest term in binomial expansion — find T_{k}/T_{k−1} ≥ 1 to locate maximum!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Binomial Theorem** — JEE Main Study Guide

**Key properties:**
- Total terms: n + 1 (from k = 0 to k = n)
- Sum of all coefficients: (1 + 1)^n = 2^n (put x = 1, a = b = 1)
- Sum of coefficients of odd terms: (1 + 1)^n − (1 − 1)^n / 2 = (2^n − 0)/2 = 2^{n−1}
- Sum of coefficients of even terms: same as odd = 2^{n−1}
- C(n, r) = C(n, n − r) (symmetry)

**Numerically greatest term:**
- Find ratio T_{r+1}/T_r = [(n−r+1)/r] · (b/a)
- Find where T_{r+1} ≥ T_r but T_{r+2} < T_{r+1}
- For (1 + x)^n with x > 0: T_{r+1} ≥ T_r when r ≤ (n+1)x/(1+x)

**Multinomial theorem (brief):**
(a + b + c)^n = Σ n!/(p!q!r!) · a^p b^q c^r where p + q + r = n
Coefficient of x^r in expansions of (1 + x)^n and (1 + x)^m can be related

**Applications:**
- (√2 + 1)^5 + (√2 − 1)^5: these are conjugates; when adding, odd powers of √2 cancel
- (x + 1/x)^n: expands to sum of binomial terms with powers of x ranging from n to −n in steps of 2
- For (1 + x)^n, coefficient of x^k = nCk; coefficient of x^{2k} in (1 + x²)^n = nCk

**Important identities:**
- C(n, 0) + C(n, 1) + ... + C(n, n) = 2^n
- C(n, 0)² + C(n, 1)² + ... + C(n, n)² = C(2n, n)
- C(n, r) = n/r · C(n−1, r−1)
- C(n, r) + C(n, r+1) = C(n+1, r+1) (Pascal's identity)

- **Key formula:** T_{k+1} = nCk · a^{n−k} · b^k
- **Common trap:** Don't confuse T_r with the term containing x^r — in (a + b)^n, T_{r+1} contains a^{n−r}b^r
- **Exam weight:** 1 question per year (4 marks); frequently combined with calculus (finding sum of series via differentiation/integration)

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Binomial Theorem** — Comprehensive JEE Main Notes

**General term trick for complicated expansions:**
For (1 − x + x²)^n, expand systematically or use generating functions
Key: (1 − x + x²) = (1 − ωx)(1 − ω²x) where ω, ω² are complex cube roots of unity
Therefore (1 − x + x²)^n = (1 − ωx)^n · (1 − ω²x)^n
Useful for finding coefficients of x^k by substituting x = ω and x = ω² and solving

**Sum of binomial coefficients:**
- Σ C(n, k) · k = n · 2^{n−1} (differentiate (1+x)^n and set x=1)
- Σ C(n, k) · k² = n(n+1) · 2^{n−2}
- Σ C(n, k) · (-1)^k = 0 for n ≥ 1

**Integration method for binomial sums:**
Many binomial sum problems use the trick: S = Σ nCk · k = d/dx [(1+x)^n] evaluated at x=1 = n · 2^{n−1}
For alternating sums, use x = −1

**Fractional binomial expansion:**
(1 + x)^n where n is fractional (not integer):
- General term: T_{k+1} = [n(n−1)(n−2)...(n−k+1)/k!] · x^k
- For convergence: |x| < 1 when n is not a positive integer
- Example: √(1 + x) = 1 + x/2 − x²/8 + 5x³/128 − ...
- Used in approximation problems (e.g., √3 = √(1 + 2) = 1 + 1 − 1/2 + ... ≈ 1.41...)

**Properties of binomial coefficients:**
- C(n, r) is maximum at r = n/2 for even n, at r = (n−1)/2 and r = (n+1)/2 for odd n
- C(n, r) = C(n, n−r)
- C(n, r) increases for r ≤ n/2 and decreases for r ≥ n/2

**Greatest binomial coefficient:**
For n = 10: coefficients are 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1
Maximum is C(10, 5) = 252 for n = 10 (even)

**Binomial and combinatorics connection:**
C(n, r) = n! / [r!(n−r)!] counts number of ways to choose r objects from n distinct objects

**Working with two expansions simultaneously:**
- To find coefficient of x^n in (1 + x)^{n_1} · (1 + x)^{n_2} = (1 + x)^{n_1+n_2}, it's C(n_1+n_2, n)
- But (1 − x)^{n_1} · (1 + x)^{n_2} requires careful handling of alternating signs

**Term independent of x:**
In (x² + 1/x)^9, find term independent of x:
General term: C(9, r) · (x²)^{9−r} · (1/x)^r = C(9, r) · x^{18−2r−r} = C(9, r) · x^{18−3r}
For independent term: 18 − 3r = 0 → r = 6 → coefficient = C(9, 6) = 84

**Divisibility problems:**
- C(n, 0) + C(n, 2) + C(n, 4) + ... = C(n, 1) + C(n, 3) + C(n, 5) + ... = 2^{n−1}
- For prime p: C(p, k) is divisible by p for 1 ≤ k ≤ p−1 (by Lucas or direct expansion)
- C(p^m, k) for prime p: often has p in denominator → not always divisible

- **Remember:** T_{r+1} = C(n, r) · a^{n−r} · b^r; for (1+x)^n, coefficient of x^r is C(n, r); sum of coefficients = 2^n; coefficient of x^{2k} in (1+x²)^n = C(n, k)
- **Previous years:** "Find the greatest term in expansion of (1+x)^{10} at x = 2/3" [2023]; "Coefficient of x^5 in (1+2x)^6(1−x)^8" [2024]; "Sum of series: C(10,0) + C(10,2) + C(10,4) + ..." [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Binomial Theorem: 1 question per year, 4 marks
- Common patterns: greatest term, coefficient of x^r, sum of series, divisibility
- Weight: medium frequency but highly scoring — formulas are straightforward

### 💡 Pro Tips
- Always use T_{k+1}/T_k to find greatest term or ratio of consecutive terms
- For complex expansions like (1 + x + x²)^n, try to express in factors using cube roots of unity
- The identity Σ C(n, k)² = C(2n, n) is very powerful and appears frequently
- For term-independent of x, set exponent = 0 and solve
- Fractional binomial expansions (non-integer n) are less common but have appeared — know the general term formula
- Many binomial sum problems are solved by differentiating (1+x)^n and substituting x = 1 or x = -1

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*