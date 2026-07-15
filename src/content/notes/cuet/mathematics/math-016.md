---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-016
topicName: Functions
weight: 3
country: india
generated: "2026-03-29T05:05:57"
lastUpdated: "2026-07-15"
---

# Functions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- A **function** f : A → B assigns each x ∈ A exactly one y = f(x) ∈ B (vertical-line test).
- **Domain** = set of inputs A; **codomain** = declared output set B; **range** = actual outputs f(A) ⊆ B.
- **Injective (one-one)**: f(x₁) = f(x₂) ⇒ x₁ = x₂. **Surjective (onto)**: range = codomain. **Bijective** = both, and only then does f⁻¹ exist.
- **Composition**: (f ∘ g)(x) = f(g(x)); require range(g) ⊆ domain(f), and (f ∘ g) ≠ (g ∘ f) in general.
- **Even/Odd**: f(−x) = f(x) or f(−x) = −f(x); **modulus** flips negative outputs up: |f(x)| = f(x) if f(x) ≥ 0, else −f(x).
- **CUET pointer**: 3% weightage — expect 1–2 MCQs on injectivity/surjectivity, composition, or finding f⁻¹.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and the Three Sets

A function is a special **relation** in which every element of the domain maps to exactly one image. For f : A → B, the **domain** is A, the **codomain** is B (the declared target), and the **range** is the subset of B actually hit. Common confusion: codomain is what you write, range is what you get. For f(x) = x² from ℝ → ℝ, codomain = ℝ but range = [0, ∞).

#### Injectivity, Surjectivity, Bijectivity

A function is **one-one (injective)** when distinct inputs give distinct outputs; equivalently f(x₁) = f(x₂) ⇒ x₁ = x₂. It is **onto (surjective)** when every element of B has a pre-image. A function that is both is **bijective**, and a bijective function has an inverse f⁻¹ : B → A. The trap: f(x) = x² on ℝ is neither injective (since 1 and −1 share the image 1) nor surjective (negative numbers have no pre-image); restrict to [0, ∞) to make it bijective.

#### Algebra of Functions

| Operation | Rule | Domain |
|---|---|---|
| Sum | (f + g)(x) = f(x) + g(x) | domain(f) ∩ domain(g) |
| Product | (f · g)(x) = f(x)·g(x) | domain(f) ∩ domain(g) |
| Quotient | (f / g)(x) = f(x)/g(x) | domain(f) ∩ domain(g) − {x : g(x) = 0} |
| Composition | (f ∘ g)(x) = f(g(x)) | x ∈ domain(g) and g(x) ∈ domain(f) |

> Composition is **not commutative**: (f ∘ g)(x) ≠ (g ∘ f)(x) in general. Use the bracket sandwich: f(g(x)) means "apply g first, then f".

#### Even, Odd, and Modulus

A function is **even** if f(−x) = f(x) (graph symmetric about y-axis) and **odd** if f(−x) = −f(x) (graph symmetric about the origin). The functions sin x and x³ are odd; cos x and x² are even. |f(x)| reflects any part of the graph that lies below the x-axis up to the axis, while f(|x|) keeps the right side and **mirrors it to the left**.

#### Typical CUET Questions

Expect direct MCQs asking: (i) classify a mapping as one-one/onto/many-one/into, (ii) find (f ∘ g)(x) and its domain, (iii) determine whether f⁻¹ exists and find it, (iv) evaluate a piecewise function at a given x. State the domain explicitly — many wrong answers in CUET come from a missing domain restriction.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Piecewise Functions and Their Graphs

A **piecewise function** uses different rules on different parts of the domain, e.g. f(x) = x for x ≥ 0 and f(x) = −x for x < 0 (this is f(x) = |x|). Other examples include sgn(x) (returns −1, 0, 1), the greatest-integer ⌊x⌋, and the Heaviside step function. CUET often asks for the value at a boundary point — check the inequality carefully: "x ≥ 0" and "x > 0" give different answers at x = 0.

#### Inverse Function Existence and Construction

f⁻¹ exists **iff f is bijective**. To construct f⁻¹: write y = f(x), swap x and y, then solve for y. Verify with (f ∘ f⁻¹)(x) = x and (f⁻¹ ∘ f)(x) = x. The graph of f⁻¹ is the reflection of the graph of f across the line y = x. Common mistake: students compute an "inverse" for f(x) = x² on ℝ and write y = ±√x — this is not a function. Either restrict the domain to [0, ∞) first, or the question is a trick.

#### Worked Micro-Example

Let f(x) = (3x + 1)/(x − 2), x ≠ 2. To find f⁻¹, set y = (3x + 1)/(x − 2) ⇒ y(x − 2) = 3x + 1 ⇒ yx − 2y = 3x + 1 ⇒ x(y − 3) = 2y + 1 ⇒ x = (2y + 1)/(y − 3). So **f⁻¹(x) = (2x + 1)/(x − 3)**, x ≠ 3. Quick check: (f ∘ f⁻¹)(0) = f(−1/3) = (3(−1/3) + 1)/(−1/3 − 2) = 0/(−7/3) = 0 ✓.

#### Common Mistakes to Avoid

- Treating range and codomain as synonyms — range ⊆ codomain, equality is what makes f onto.
- Computing (f ∘ g)(x) as f(x)·g(x); it is f(g(x)), a nested substitution.
- Forgetting domain restrictions after addition, division, square roots, or logarithms.
- Assuming every function has an inverse; check injectivity and surjectivity first.
- Confusing y = f(|x|) with y = |f(x)| — the first mirrors the right half, the second flips negatives up.

#### Practice Prompts

1. Determine whether f : ℝ → ℝ defined by f(x) = x³ − 4x is injective, surjective, both, or neither. Justify with a sketch of its turning points.
2. Given f(x) = √(x + 4) (domain [−4, ∞)) and g(x) = x², find (f ∘ g)(x) and (g ∘ f)(x) and state the domain of each.

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Functions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
