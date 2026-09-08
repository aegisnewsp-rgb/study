---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: Continuity
weight: 5
country: india
generated: "2026-03-24T08:32:07.935678"
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Continuity concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Continuity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A function **f(x)** is **continuous at x = a** when three conditions hold together: **f(a)** is defined, **lim(x→a) f(x)** exists as a finite value, and that limit equals **f(a)**. Polync, sin, cos, and exponentials are continuous on all of **ℝ**, so direct substitution works at every real point.

| Condition | Check |
| --- | --- |
| f(a) defined | Value must be finite |
| lim(x→a) f(x) exists | Left and right limits equal |
| Limit = f(a) | Substitution valid |

- **Differentiability ⇒ continuity**, but continuity does **not** imply differentiability (counter-example: f(x)=|x| at 0).
- Discontinuities are classified as **removable**, **jump**, or **infinite** — JEE Advanced often asks for the type.
- Use the **Intermediate Value Theorem (IVT)** on [a, b] to prove a root exists when f is continuous and f(a)·f(b) < 0.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The ε–δ form

The textbook condition $\lim_{x \to a} f(x) = f(a)$ can be rewritten: for every ε > 0, there exists δ > 0 such that $|x - a| < \delta$ implies $|f(x) - f(a)| < \varepsilon$. This equivalence lets you test continuity numerically and is the form used in proof-based JEE Advanced questions.

#### Continuity of combinations

If **f** and **g** are both continuous at x = a, then **f + g**, **f · g**, and (where g(a) ≠ 0) **f / g** are continuous at a. For composition: if **g** is continuous at a and **f** is continuous at g(a), then **f ∘ g** is continuous at a. Inverse trigonometric functions inherit continuity on their principal domains (e.g. arctan on ℝ, arcsin on [−1, 1]).

#### Discontinuity classification

| Type | Limit behaviour | Typical example |
| --- | --- | --- |
| Removable | Two-sided limit exists but ≠ f(a) or f(a) undefined | f(x) = sin(x)/x at x = 0 |
| Jump | Left and right limits finite but unequal | f(x) = sign(x) at x = 0 |
| Infinite | Limit tends to ±∞ | f(x) = 1/(x − a) at x = a |

- Always check **all three** conditions at the suspect point before declaring continuity.
- **IVT**: if f is continuous on [a, b] and k lies strictly between f(a) and f(b), then some c in (a, b) satisfies f(c) = k. Standard use: locating roots when sign changes.
- A function continuous on a closed interval is **bounded** and attains its maximum and minimum (Extreme Value Theorem).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Continuity vs differentiability

The implication runs one way: **differentiability at a point forces continuity there**, because $\lim_{x \to a}[f(x) - f(a)] = \lim_{x \to a} \frac{f(x)-f(a)}{x-a} \cdot (x-a) = f'(a) \cdot 0 = 0$. The converse fails — f(x) = |x| and f(x) = x sin(1/x) (with f(0)=0) are continuous at 0 but have no derivative there. JEE Advanced exploits this asymmetry in assertion–reason items.

#### Worked micro-example

Let $f(x) = \dfrac{x^2 - 4}{x - 2}$ for x ≠ 2, and let f(2) = 5. Test continuity at x = 2.

1. f(2) = 5 is defined.
2. $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 4$.
3. Since 4 ≠ 5, the limit exists but differs from f(2). The discontinuity is **removable**; redefining f(2) = 4 makes it continuous.

#### Common mistakes and exam traps

| Mistake | Why it costs marks |
| --- | --- |
| Skipping the "f(a) defined" check | A piece-wise function with a hole is not continuous at the hole |
| Calling every undefined point "infinite" | sin(x)/x at 0 has a finite limit — it is removable, not infinite |
| Applying IVT on (a, b) or with a discontinuous f | Conclusion is invalid; IVT needs a closed interval and full continuity |
| Forgetting the g(a) ≠ 0 condition for f/g | A zero denominator makes the quotient discontinuous even if f is continuous |

- Use the **Sandwich theorem** with continuous bounding functions (e.g. −|x sin(1/x)| ≤ f(x) ≤ |x sin(1/x)|) to establish continuity where direct substitution fails.
- **Exam strategy**: Continuity is roughly 5% of JEE Advanced Mathematics, usually one MCQ or numerical in Paper 1 or 2. Pair it with Limits practice; questions on discontinuity type and IVT-based root existence appear almost every year.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Continuity" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
