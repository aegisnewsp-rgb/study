---



exam: kenyatta-ku
examName: Kenyatta University (Kenya)
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Probability and Statistics
weight: 4
country: kenya
generated: "2026-04-17T23:38:00.000000"
lastUpdated: "2026-09-20"
diagramPrompt: "Clean educational diagram showing Probability Statistics with clear labels, white background, exam-style illustration"





---

# Probability and Statistics

### 🟢 Lite — Quick Review (1h–1d)
> One screen, one pass: every formula here has shown up in a past KU Mathematics paper.

Probability and Statistics at Kenyatta is the study of **random experiments** and the **numerical summaries** drawn from them. The exam rewards two things: knowing the named formula exactly, and using the right denominator. Watch that denominator — it decides three out of every five marks.

- **Probability axioms** (dimensionless, all in [0, 1]):
  - 0 ≤ P(A) ≤ 1
  - P(S) = 1, where S is the **sample space**
  - For mutually exclusive events: P(A ∪ B) = P(A) + P(B)
- **Three distributions to memorise** (mean μ, variance σ²):
  - **Binomial** P(X = k) = C(n, k) pᵏ (1−p)ⁿ⁻ᵏ; μ = np, σ² = np(1−p)
  - **Poisson** P(X = k) = (λᵏ e⁻λ) / k!; μ = λ, σ² = λ
  - **Normal** standardized Z = (X − μ) / σ
- **Bayes' theorem**: P(Aᵢ | B) = [P(B | Aᵢ) · P(Aᵢ)] / Σ P(B | Aⱼ) P(Aⱼ)

> 💡 **High-Yield Memory Hook:** "**BLG**" — **B**inomial (p, n−p), **L**aplace/Poisson (λ, λ), **G**auss/Normal (μ, σ). Mean and variance pair: B has *np, np(1-p)*; P has *λ, λ* (same!); G needs a Z-shift. Spot the distribution from the question stem, then write its mean–variance pair before touching a calculator.

### 🟡 Standard — Regular Study (2d–2mo)
> From 1-day cramming to first-week lecture: depth, derivation, and the mistakes KU examiners actually set traps for.

#### Core definitions and counting machinery

A **random experiment** has outcomes that cannot be predicted singly but follow a regular pattern in the long run. The set of all outcomes is the **sample space** S; a subset of S is an **event**. Counting tools:

- Permutations of r objects from n (ordered): P(n, r) = n! / (n − r)!
- Combinations of r from n (unordered): C(n, r) = n! / [r! (n − r)!]

#### Concept Comparison Matrix

| Concept | Symbol | Rule of thumb | Typical KU trap |
|---|---|---|---|
| Mutually exclusive vs Independent | A ∩ B = ∅ vs P(A ∩ B) = P(A)P(B) | Disjoint ⇒ no overlap; independent ⇒ product rule | Treating "disjoint" as "independent" — they are almost opposites |
| Conditional P(A \| B) vs Bayes' reverse P(B \| A) | P(A\|B) = P(A∩B)/P(B) | Always divide by what you *know* (P(B)) | Mixing up the two directions of Bayes |
| Sample variance s² (unbiased) vs np(1−p) (binomial σ²) | s² uses (n − 1); np(1−p) uses n | Use n − 1 for *sample* data, n for *binomial parameter* | Writing n in the denominator instead of n − 1 |
| Type I vs Type II error | α = P(reject H₀ \| H₀ true); β = P(fail to reject \| H₁ true) | α is chosen; β depends on n | Confusing α with the confidence level (1 − α) |

#### Distributions, expectation, and the CLT link

For a discrete random variable X with PMF p(x), **E(X) = Σ x·p(x)** and **Var(X) = E(X²) − [E(X)]²**. The **Central Limit Theorem** says the sum (or mean) of n independent, identically distributed variables approaches a Normal distribution as n → ∞, which is exactly why we can use Z-tables on sample means even when the parent distribution is Binomial or Poisson — provided n is large enough that np ≥ 5 and n(1 − p) ≥ 5 (for Binomial → Normal) or λ ≥ 5 (for Poisson → Normal).

#### Standard worked problem — KU-style 10-mark question

> A factory produces resistors. Past records show 10% are defective. A batch of 12 resistors is selected. Compute: (i) the probability exactly 3 are defective; (ii) the probability at most 2 are defective; (iii) the expected number defective and its standard deviation.

This is a **Binomial** setting: n = 12, p = 0.10.

(i) P(X = 3) = C(12, 3) × (0.10)³ × (0.90)⁹  
C(12, 3) = 220. So 220 × 0.001 × 0.3874 ≈ **0.0852** (≈ 8.52%).

(ii) P(X ≤ 2) = P(0) + P(1) + P(2).  
P(0) = (0.90)¹² ≈ 0.2824  
P(1) = 12 × 0.10 × (0.90)¹¹ ≈ 0.3766  
P(2) = 66 × (0.10)² × (0.90)¹⁰ ≈ 0.2301  
Total ≈ **0.8892** (≈ 88.92%).

(iii) μ = np = 12 × 0.10 = 1.2 resistors. σ = √(np(1−p)) = √(12 × 0.1 × 0.9) = √1.08 ≈ **1.0392** resistors.

> ⚠️ **Examiner Trap:** marking schemes at KU penalise: using Poisson instead of Binomial (the events are not "rare per interval" — they are fixed-count trials); writing "1.2 resistors" without the unit being obviously discrete; rounding σ to 1.04 when the working calls for two more figures. Show C(n, k) explicitly — full marks require the combinatorial coefficient, not the final ratio alone.

#### Hypothesis testing skeleton

A KU problem on hypothesis testing follows a fixed six-step shape, and a missing step costs 1–2 marks each:

1. State H₀ and H₁ in words, then in symbols.
2. Choose the test (Z if σ known and n ≥ 30; t if σ unknown and n < 30).
3. State significance level α (commonly 0.05).
4. Compute the test statistic from the sample.
5. Find critical value(s) from the Z or t table.
6. Decision: reject H₀ if |statistic| > critical, else do not reject. Conclude in plain English.

### 🔴 Extended — Deep Study (3mo+)
> Assumes you've sat one mock paper already and want the edges: where the textbook hides a minus sign, where KU examiners reach for the harder variant.

#### Edge cases and asymptotic limits

- **Poisson as Binomial's limit.** When n → ∞ and p → 0 such that np → λ remains finite, Binomial PMFs converge to Poisson. In practice this holds for the KU exam whenever n ≥ 50 and p ≤ 0.05.
- **Continuity correction.** Approximating a discrete X by a continuous Normal, write P(X = k) as P(k − 0.5 < X < k + 0.5). Omitting the ±0.5 inflates small-tail probabilities by 20–40% near the mean.
- **Regression degeneracy.** Two cases break the least-squares line y = a + bx: (a) all x values equal (b → 0/0), (b) r = 0 in the sample but not the population (finite-sample zero only — refit before reporting). The intercept a = ȳ − b·x̄ is undefined whenever the covariance in the denominator vanishes.
- **Central Limit Theorem, two directions.** Sums of iid variables with finite variance → Normal regardless of parent shape (Lindeberg–Feller conditions). Means of heavy-tailed (infinite-variance) variables → stable distribution, not Normal — KU will not test this but knowing it pre-empts confusion when review notes elsewhere mention it.
- **Correlation ≠ causation.** r measures *linear* association only. A perfect quadratic relationship (y = x² on [-1, 1]) has r = 0. Always plot before quoting.
- **Two regression lines.** Fitting y on x gives one line; fitting x on y gives another. The geometric mean of the two slopes equals r · (σy / σx). KU rarely asks this, but a distinction question will.

#### Advanced practice prompts (10+ marks each)

1. **Bayes with screening.** A disease affects 2% of a population. A test has sensitivity 95% and specificity 90%. A randomly tested person is positive. Compute the posterior probability of having the disease. *(You should get roughly 16% — far below the intuitive "95%". This is the most counter-intuitive KU-style probability question.)*
2. **Two-sample Z test.** Two machines produce bolts. Machine A: n₁ = 50, x̄₁ = 2.45 cm, σ₁ = 0.06. Machine B: n₂ = 60, x̄₂ = 2.48 cm, σ₂ = 0.05. Test at α = 0.05 whether the mean lengths differ. *(Use Z = (x̄₁ − x̄₂) / √(σ₁²/n₁ + σ₂²/n₂) and compare to ±1.96.)*

## Continue your study

- **[View this topic in your Kenyatta University (Kenya) roadmap](/roadmap/?exam=kenyatta-ku&duration=1mo)** — see where "Probability and Statistics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=kenyatta-ku&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Kenyatta University (Kenya) exam overview](/exams/kenyatta-ku/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/kenyatta-ku/mathematics/)** — browse sibling topics in this subject
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
