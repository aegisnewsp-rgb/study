---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-001
topicName: Functions and Probability (Year 11)
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 1: Functions and Probability — WACE Mathematics Methods (SCSA) Notes

Unit 1 of WACE Mathematics Methods covers combinations of functions, composite functions and inverse functions; further transformations of graphs; introduction to discrete probability distributions. First Unit of the Year 11-12 Mathematics Methods sequence.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Functions.** Linear, quadratic, polynomial. Combinations and compositions.
- **Transformations.** Translate, stretch, compress, reflect.
- **Inverse functions.** f⁻¹(x) exists iff f is one-to-one.
- **Discrete probability.** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).

#### Examiner traps

- Mixing up f⁻¹ and 1/f.
- Confusing independent and mutually exclusive events.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Functions and transformations

Combinations: (f + g)(x) = f(x) + g(x). Composition: (f ∘ g)(x) = f(g(x)). Transformations: y = f(x − a) shifts right a.

#### Inverse functions

f⁻¹ exists iff f is one-to-one (passes horizontal line test). Find by: y = f(x), swap x and y, solve for y.

#### Probability

P(A) = n(A)/n(total). Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Multiplication for independent events: P(A ∩ B) = P(A)P(B).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 1 prepares for Units 2-4

- Functions are the language of calculus; probability is the language of statistics.

#### Year 11 planning pattern

- Term 1: Functions, transformations.
- Term 2: Inverse functions.
- Term 3: Discrete probability.
- Term 4: Revision.

#### Common misconceptions (and the correction)

- "f⁻¹ = 1/f." No — f⁻¹ is the inverse function.
- "Independent events are mutually exclusive." No — they are different concepts.

#### Specification reference

This Unit is the first of four Units of WACE Mathematics Methods. Confirm the live syllabus on senior-secondary.scsa.wa.edu.au.

#### Worked example — inverse function derivation with domain restriction

Consider the quadratic function f(x) = (x − 4)² − 3.
1. State the domain and range of f(x) if the domain is restricted to [4, ∞).
2. Explain why this restriction allows an inverse function f⁻¹(x) to exist.
3. Determine the equation for f⁻¹(x).
4. State the domain and range of f⁻¹(x).

Part 1: Domain and range of f(x)
- Stated domain: dom(f) = [4, ∞).
- The vertex of the parabola is at (4, −3). Since the parabola opens upward, the minimum value is f(4) = −3.
- Range: ran(f) = [−3, ∞).

Part 2: Existence of f⁻¹(x)
An inverse function exists if and only if f(x) is a one-to-one function (passes the horizontal line test).
The unrestricted parabola is many-to-one because any horizontal line y = k (for k > −3) intersects the graph at two points. Restricting the domain to x ≥ 4 isolates the right-hand branch, ensuring that every horizontal line intersects the curve at most once.

Part 3: Derivation of f⁻¹(x)
Let y = (x − 4)² − 3.
Swap x and y to represent reflection across the line y = x:

```
  x = (y − 4)² − 3
  x + 3 = (y − 4)²
  y − 4 = ± √(x + 3)
```

Since the original domain was x ≥ 4, the range of the inverse must satisfy y ≥ 4. Therefore, choose the positive square root:

```
  y = 4 + √(x + 3)
  f⁻¹(x) = 4 + √(x + 3)
```

Part 4: Domain and range of f⁻¹(x)
- dom(f⁻¹) = ran(f) = [−3, ∞)
- ran(f⁻¹) = dom(f) = [4, ∞)

#### Worked example — independent versus mutually exclusive events

In a Western Australian secondary school:
- Probability that a randomly selected student studies Physics is P(A) = 0.35.
- Probability that the student studies Chemistry is P(B) = 0.40.
- Probability that the student studies both Physics and Chemistry is P(A ∩ B) = 0.14.

1. Determine whether studying Physics and studying Chemistry are independent events.
2. Determine whether studying Physics and studying Chemistry are mutually exclusive events.
3. Calculate the probability that a student studies Chemistry given that they study Physics P(B | A).

Part 1: Test for independence
Two events A and B are independent if and only if P(A ∩ B) = P(A) × P(B):

```
  P(A) × P(B) = 0.35 × 0.40 = 0.140
```

Since P(A ∩ B) = 0.14 = P(A) × P(B), the events are statistically independent.

Part 2: Test for mutual exclusivity
Two events are mutually exclusive if they cannot occur simultaneously, meaning P(A ∩ B) = 0.
Here, P(A ∩ B) = 0.14 ≠ 0.
Therefore, the events are not mutually exclusive.

Part 3: Conditional probability P(B | A)

```
  P(B | A) = P(A ∩ B) / P(A)
           = 0.14 / 0.35
           = 14 / 35
           = 2 / 5
           = 0.40
```

Notice that P(B | A) = 0.40 = P(B), which confirms independence: knowing that a student studies Physics does not alter the probability that they study Chemistry.

#### Common marking-scheme mistakes

- Confusing the inverse function f⁻¹(x) with the reciprocal 1/f(x).
- Forgetting to select the appropriate positive or negative square root branch based on the original restricted domain.
- Claiming that independent events must be mutually exclusive (independent events with non-zero probability can never be mutually exclusive).
- Stating the range of an inverse function without verifying it matches the domain of the original function.
- Inverting the order of function composition, computing f(g(x)) when asked for g(f(x)).

#### 20-minute recap before you walk in

- Inverse function rule: dom(f⁻¹) = ran(f) and ran(f⁻¹) = dom(f).
- A function has an inverse if and only if it is one-to-one (passes the horizontal line test).
- Function composition condition: (f ∘ g)(x) exists if ran(g) ⊆ dom(f).
- Independence check: P(A ∩ B) = P(A) × P(B).
- Mutually exclusive check: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 11 syllabus also lists:

- Solving polynomial equations using the Factor and Remainder theorems.
- Quadratic inequalities solved graphically using sign diagrams.
- Transformations of graphs: dilations from axes, translations parallel to axes, and reflections.
- Venn diagrams with three overlapping sets and the principle of inclusion-exclusion.
- Discrete uniform probability distributions on finite sample spaces.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*