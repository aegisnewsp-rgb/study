---



exam: buet-adm
examName: BUET Admission
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Algebra
weight: 5
country: bangladesh
generated: "2026-04-17T23:20:00.000000"
lastUpdated: "2026-09-16"
diagramPrompt: "Clean educational diagram showing Algebra concepts with clear labels, white background, exam-style illustration"





---

# Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Algebra for BUET Admission tests your command of **polynomials**, **equations**, **progressions**, **counting**, and **matrices/determinants** at HSC level. The Mathematics section carries ~5% weight, and 1–2 MCQs almost always fall in this cluster. Focus on six formula families: quadratic roots, AP/GP sums, permutations, combinations, 2×2 determinants, and Cramer's rule.

- **Quadratic formula:** $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$; discriminant $D = b^2 - 4ac$ (dimensionless).
- **AP sum:** $S_n = \dfrac{n}{2}[2a + (n-1)d]$; **GP sum:** $S_n = \dfrac{a(1-r^n)}{1-r}$ for $r \neq 1$.
- **Permutation** $P(n,r) = \dfrac{n!}{(n-r)!}$; **Combination** $C(n,r) = \dfrac{n!}{r!(n-r)!}$.
- **2×2 determinant:** $\det\begin{pmatrix}a & b\\ c & d\end{pmatrix} = ad - bc$.
- **Cramer's rule:** $x = \dfrac{\det(A_x)}{\det(A)}$, $y = \dfrac{\det(A_y)}{\det(A)}$, valid only when $\det(A) \neq 0$.

| Term | Formula | Variables (SI unit / dimension) |
|---|---|---|
| Discriminant | $D = b^2 - 4ac$ | $a, b, c$ — real coefficients (dimensionless) |
| AP nth term | $t_n = a + (n-1)d$ | $a$ first term, $d$ common difference (dimensionless) |
| GP nth term | $t_n = ar^{n-1}$ | $r$ common ratio (dimensionless) |
| Determinant | $ad - bc$ | $a,b,c,d$ — matrix entries (dimensionless) |

> 💡 **High-Yield Memory Hook:** **"PCO" — Permutation Counts Order, Combination Only chooses.** Ask yourself "does arrangement change the answer?" If yes → P; if no → C.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Quadratic equations and root–coefficient relations
For $ax^2 + bx + c = 0$ with $a \neq 0$, the discriminant $D = b^2 - 4ac$ decides the nature of roots: $D > 0$ gives two distinct real roots, $D = 0$ gives a repeated root, $D < 0$ gives complex conjugates. The sum of roots $\alpha + \beta = -\dfrac{b}{a}$ and the product $\alpha\beta = \dfrac{c}{a}$ let you rebuild the equation when roots are known.

#### Progressions (AP and GP)
In an AP, consecutive differences are constant ($d$). In a GP, consecutive terms share a constant ratio ($r$). Use $S_n = \dfrac{n}{2}[2a + (n-1)d]$ for AP, and for GP switch to $S_n = \dfrac{a(1-r^n)}{1-r}$ when $r \neq 1$, else $S_n = na$.

#### Counting: permutations vs combinations
$P(n,r)$ counts **ordered** selections; $C(n,r)$ counts **unordered** selections. With repetition allowed, the number of $r$-length strings from $n$ items is $n^r$. The identity $C(n,r) = C(n, n-r)$ speeds up symmetric cases.

#### Matrices and determinants
A $2\times 2$ matrix $\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ has $\det = ad - bc$. Singular when $\det = 0$. For a $3\times 3$ matrix, expand along a row or column using cofactors. Determinant properties: $\det(AB) = \det(A)\det(B)$, $\det(A^T) = \det(A)$, $\det(kA) = k^n \det(A)$ for an $n\times n$ matrix.

#### Concept Comparison Matrix

| Feature | Permutation $P(n,r)$ | Combination $C(n,r)$ |
|---|---|---|
| Order matters | Yes | No |
| Formula | $\dfrac{n!}{(n-r)!}$ | $\dfrac{n!}{r!(n-r)!}$ |
| Typical use | Rankings, passwords, arrangements | Teams, selections, subsets |
| Reduction identity | $P(n,r) = r!\cdot C(n,r)$ | $C(n,r) = C(n,n-r)$ |

| Feature | AP | GP |
|---|---|---|
| Pattern | $a, a+d, a+2d, \dots$ | $a, ar, ar^2, \dots$ |
| nth term | $a + (n-1)d$ | $ar^{n-1}$ |
| Sum $S_n$ | $\dfrac{n}{2}[2a+(n-1)d]$ | $\dfrac{a(1-r^n)}{1-r}$ ($r\neq 1$) |
| Mid-term | Average of equidistant terms | Geometric mean of equidistant terms |

#### Standard problem types
1. Find roots using the quadratic formula, then verify sum/product.
2. Insert means between two numbers (AP mean vs GP mean — these differ).
3. Solve counting problems distinguishing "arrange" vs "choose".
4. Compute a $2\times 2$ determinant and test singularity.
5. Apply Cramer's rule to a $2\times 2$ linear system.

#### 🎯 Exam-Level Worked Problem
**Question:** If $\alpha$ and $\beta$ are the roots of $2x^2 - 5x + 3 = 0$, find $\alpha^2 + \beta^2$.

#### Solution:
1. Identify coefficients: $a = 2$, $b = -5$, $c = 3$ (dimensionless).
2. Use sum and product of roots: $\alpha + \beta = -\dfrac{b}{a} = \dfrac{5}{2}$.
3. Product: $\alpha\beta = \dfrac{c}{a} = \dfrac{3}{2}$.
4. Apply the identity $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$.
5. Substitute: $\left(\dfrac{5}{2}\right)^2 - 2\left(\dfrac{3}{2}\right) = \dfrac{25}{4} - 3 = \dfrac{25 - 12}{4} = \dfrac{13}{4}$.

> ⚠️ **Examiner Trap:** Many students compute $\alpha + \beta = \dfrac{b}{a}$ and forget the negative sign because $b = -5$. Always write $\alpha + \beta = -\dfrac{b}{a}$, then plug.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and boundary conditions
The GP sum formula $S_n = \dfrac{a(1-r^n)}{1-r}$ breaks at $r = 1$, where every term equals $a$ and $S_n = na$. A GP with $|r| < 1$ has a convergent infinite sum $S_\infty = \dfrac{a}{1-r}$, but the BUET syllabus limits GPs to finite $n$. The discriminant $D = b^2 - 4ac$ in a quadratic assumes **real** coefficients; complex coefficients change the root-classification criteria entirely.

Determinants are **not** linear in the matrix sense: $\det(A + B) \neq \det(A) + \det(B)$ in general. Counter-example: $A = I$, $B = I$ gives $\det(A+B) = \det(2I) = 2^n$ while $\det(A) + \det(B) = 2$. Cramer's rule requires $\det(A) \neq 0$; otherwise the system has either no solution or infinitely many, depending on the consistency of augmented rows.

#### Connections to adjacent topics
- **Coordinate geometry:** roots of a quadratic locate where its parabola crosses the $x$-axis; the discriminant tells you if the intersection exists.
- **Calculus:** derivative of a polynomial recovers roots-related quantities; integration sums of AP/GP series bridge discrete and continuous areas.
- **Probability:** combinations feed directly into binomial and hypergeometric probability — $P(X=k) = \dfrac{C(n,k)C(N-n, K-k)}{C(N,K)}$.

#### Advanced traps and exceptions
1. **Negative common difference in AP:** when $d < 0$, the sequence is decreasing; students mis-apply $(n-1)d$ by dropping the minus.
2. **Permutation with identical objects:** divide by the factorial of repetitions, e.g. arrangements of MISSISSIPPI letters equal $\dfrac{11!}{4!\,4!\,2!\,1!}$.
3. **Singular $3\times 3$ matrix:** always expand along the row/column with the most zeros after cofactor simplification to minimise arithmetic.
4. **Cramer's rule sign:** $A_x$ replaces the **first** column of $A$ with the constants vector; replacing the wrong column flips both variables.
5. **Binomial coefficient edge:** $C(n,0) = C(n,n) = 1$, and $C(n,1) = n$ — useful sanity checks before any calculation.

#### Practice prompts
1. If the 3rd and 7th terms of an AP are 9 and 29, find the 20th term and $S_{20}$.
2. A $3\times 3$ matrix $M$ has $\det(M) = 4$. Find $\det(2M)$ and $\det(M^{-1})$.

> 📌 **Formula Check:** All quantities in this note are dimensionless (pure numbers) — algebra carries no SI units. Report fractions in lowest form; do not round intermediate results when the final answer is a fraction.

---

## Continue your study

- **[View this topic in your BUET Admission roadmap](/roadmap/?exam=buet-adm&duration=1mo)** — see where "Algebra" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=buet-adm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[BUET Admission exam overview](/exams/buet-adm/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/buet-adm/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
