---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-003
topicName: Sequences and Series
weight: 5
country: india
generated: "2026-04-17T22:35:00.000000"
diagramPrompt: "Clean educational diagram showing Arithmetic Progression and Geometric Progression with clear labels, white background, labeled axes, color-coded terms, exam-style illustration"





---
# Sequences and Series

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Sequences and Series** — Key Facts for JEE Main
Arithmetic Progression (AP): terms differ by constant d; nth term a_n = a + (n−1)d; sum S_n = n/2 [2a + (n−1)d]
Geometric Progression (GP): ratio of successive terms is constant q; nth term a_n = ar^(n−1); sum S_n = a(r^n − 1)/(r − 1) for r ≠ 1
Harmonic Progression (HP): reciprocals form an AP; nth term: a_n = 1/[1/a + (n−1)d] where a and d are from the AP of reciprocals
Special series: sum of first n natural numbers = n(n+1)/2; sum of squares = n(n+1)(2n+1)/6; sum of cubes = [n(n+1)/2]²
⚡ Exam tip: JEE Main frequently tests AP/GP combined problems and the arithmetic-geometric mean inequality A·G!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Sequences and Series** — JEE Main Study Guide

**AP key properties:**
- Three terms in AP: a−d, a, a+d; sum = 3a
- Four terms in AP: a−3d, a−d, a+d, a+3d; sum = 4a (common difference is 2d in this form)
- Any two terms determine the AP uniquely: a_m = a + (m−1)d, a_n = a + (n−1)d
- Arithmetic mean: AM = (a + b)/2; for n numbers: AM = (sum)/n

**GP key properties:**
- Three terms in GP: a/r, a, ar; product = a³
- Four terms in GP: a/r³, a/r, ar, ar³
- Geometric mean: GM = √(ab) for two positive numbers; for n positive numbers: GM = (a₁·a₂·...·a_n)^(1/n)
- AM ≥ GM inequality: for positive a, b → (a + b)/2 ≥ √(ab), equality when a = b

**Sum of infinite GP:**
- S_∞ = a/(1 − r) if |r| < 1 (converges)
- S_∞ diverges if |r| ≥ 1
- Useful: 0.3̄ = 3/10 + 3/100 + 3/1000 + ... = (3/10)/(1 − 1/10) = 1/3

**Inserting means:**
- Between two numbers a and b: (n−1) arithmetic means form an AP with common difference d = (b−a)/(n+1)
- Between two numbers a and b: (n−1) geometric means form a GP with ratio r = (b/a)^(1/(n+1))

**Arithmetico-Geometric Series:**
- Form: a, (a+d)r, (a+2d)r², ... general term T_n = [a + (n−1)d]r^(n−1)
- Sum: S_n = a + (a+d)r + (a+2d)r² + ...; multiply by r, subtract, use geometric series formula

**Common trap:** For AP with n terms, sum of terms equidistant from beginning and end are equal: T_k + T_{n+1−k} = constant
- **Key formula:** S_n = n/2 [2a + (n−1)d] for AP; S_n = a(r^n − 1)/(r − 1) for finite GP
- **Common trap:** In arithmetico-geometric series, if r = 1, it's just an AP — don't apply the r-multiply formula blindly
- **Exam weight:** 1–2 questions per year (4–8 marks); frequently combined with quadratic equations or coordinate geometry

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Sequences and Series** — Comprehensive JEE Main Notes

**Advanced summation techniques:**
Method of differences: If T_n can be expressed as f(n) − f(n+1), then sum telescopes to f(1) − f(n+1)
Example: T_n = 1/[n(n+1)] = 1/n − 1/(n+1); S_n = 1 − 1/(n+1)
Partial fractions: for rational terms like 1/[(2n−1)(2n+1)], decompose before telescoping

**Logarithmic sequences:**
If log a, log b, log c are in AP → a, √(ab), b are in GP (since log is monotonic, it preserves AP structure)

**Growth of sequences:**
- n^p grows faster than any logarithmic function
- Exponential a^n grows faster than polynomial n^p
- For large n: n! > a^n for fixed a (Stirling's approximation: n! ≈ √(2πn)·(n/e)^n)

**Weighted AM-GM:**
For positive numbers a₁, a₂, ..., a_n with weights w₁, w₂, ..., w_n (all positive):
(w₁a₁ + w₂a₂ + ... + w_na_n)/(w₁ + ... + w_n) ≥ (a₁^w₁ · a₂^w₂ · ... · a_n^w_n)^(1/(w₁+...+w_n))
Equality when all a_i are equal. This is the general form of AM ≥ GM.

**Summation of special series:**
- Sum of squares of first n odd numbers: 1² + 3² + 5² + ... + (2n−1)² = n(2n−1)(2n+1)/6
- Sum of first n terms of GP with alternating signs: a − ar + ar² − ar³ + ... = a/(1 + r) if |r| < 1
- ∑ n = n(n+1)/2; ∑ n² = n(n+1)(2n+1)/6; ∑ n³ = [n(n+1)/2]² (always remember this last one!)

**Convergence of infinite series:**
- GP: converges iff |r| < 1
- p-series: ∑ 1/n^p converges iff p > 1
- Comparison test: if a_n ≤ b_n and ∑ b_n converges, then ∑ a_n converges
- D'Alembert's ratio test: if lim |a_{n+1}/a_n| = L, then converges if L < 1, diverges if L > 1

**Practical JEE Main patterns:**
- Often ask: "If a, b, c are in AP and a², b², c² are in GP, find ratio a:b:c"
- Solution: Let a = b − d, c = b + d; then (b−d)², b², (b+d)² in GP means b⁴ = (b−d)²(b+d)² → b⁴ = (b² − d²)² → b² = b² − d² → d = 0... check the algebra carefully!
- For problems where three numbers in AP and GP appear together, use the substitution method with common difference/ratio

**Special construction for JEE Main:**
Three numbers a, ar, ar² (GP) with condition involving arithmetic mean → solve for r
Example: If AM of numbers 1, 1+r, 1+r+r² exceeds their GM by 2, then solve (1 + (1+r) + (1+r+r²))/3 − (1·(1+r)·(1+r+r²))^(1/3) = 2

- **Remember:** Sum of first n natural numbers = n(n+1)/2; Sum of cubes = [n(n+1)/2]² — these appear constantly. Also, if a, b, c are in AP → 2b = a + c; if a, b, c are in GP → b² = ac; if a, b, c are in HP → (1/a), (1/b), (1/c) are in AP
- **Previous years:** "If sum of first n terms of AP is n² + 5n, find the 10th term" [2023]; "Find sum of series: 2 + 6 + 12 + 20 + ..." [2024]; "Infinite GP sum is 3 and sum of squares is 15, find first term and ratio" [2024]

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
- Sequences & Series: 1–2 questions per year, 4–8 marks
- Common patterns: find nth term from sum formula, sum of special series, infinite GP sum, AP+GP combined
- Weight: medium frequency, high scoring if you know the techniques

### 💡 Pro Tips
- Always identify whether the problem is AP, GP, or HP first — use the defining relations
- For sum of series problems, try to express general term in telescoping form
- Method of differences is powerful for series like 1/(1·2) + 1/(2·3) + ... + 1/[n(n+1)]
- For AP problems, when in doubt, use a − d, a, a + d (3 terms) or a − 3d, a − d, a + d, a + 3d (4 terms) for symmetric forms
- Remember: three numbers in HP can be written as 1/(a−d), 1/a, 1/(a+d) — this substitution makes calculations easier
- The identity [n(n+1)/2]² for sum of cubes is one of the most frequently used in JEE Main

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*