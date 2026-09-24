---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-001
topicName: Proof
weight: 4
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Proof — A-Level Mathematics (AQA 7357) Notes

Proof is the language of A-level mathematics, not a separate topic to learn at the end. Every AQA 7357 paper — pure content, mechanics and statistics — uses proof notation somewhere: showing a derivative, justifying an inequality, arguing that a stationary point is a minimum rather than a maximum, or completing a step in a hypothesis test. Section A in the AQA specification names the four standard proof methods you must recognise and use: direct proof, proof by exhaustion, disproof by counter-example, and proof by contradiction. The classic demonstrations of the irrationality of √2 and the infinity of primes appear on Paper 1 every few series and are worth learning by heart because they expose the structure of a rigorous argument more clearly than any worked textbook example.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Four proof methods you must be able to name

- **Direct proof**: state the assumptions, chain definitions and known results, reach the conclusion. The shape is "given X, by Y, therefore Z".
- **Proof by contradiction**: assume the negation of what you want to prove, derive a contradiction with a known fact or with the assumption itself, conclude the original statement must be true.
- **Proof by exhaustion**: enumerate every possible case and check the claim in each one. Used when the case list is finite and small (often two or three cases).
- **Disproof by counter-example**: one single instance that violates the claim is enough. Used when a "for all" statement is false.

#### Two classics you should recognise instantly

- **√2 is irrational.** Assume √2 = p/q in lowest terms. Then 2q² = p², so p² is even, so p is even, so p = 2k. Then 2q² = 4k², so q² = 2k², so q is even. Both p and q even contradicts "lowest terms". Hence √2 is irrational.
- **There are infinitely many primes.** Assume the finite list p₁, …, pₙ. Form N = p₁p₂…pₙ + 1. N is not divisible by any pᵢ, but every integer > 1 has a prime factor. So N has a prime not in the list. Contradiction.

#### Common traps in exam questions

- "Prove that n² − n is even for all integers n." Direct proof: n(n−1) is the product of two consecutive integers, so one of them is even, so the product is even. The student error is to write n² − n = 2k without justifying where k came from.
- "Show that the equation x² = 4y² has no integer solutions with x odd." Disproof by counter-example is the wrong method (you'd need a proof). Use contradiction: assume x odd, derive a parity contradiction.
- Confusing "show" with "prove". AQA "show that" questions supply the answer; you must derive it exactly. "Prove" questions expect any valid chain.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Direct proof

A direct proof takes the hypothesis and applies definitions and prior results in a logical chain until the conclusion falls out. The structure is linear: every line follows from the line before, with no case splits.

**Worked example.** Prove that the sum of two consecutive odd integers is even.

Let the integers be 2k − 1 and 2k + 1 for some integer k. Their sum is 4k = 2(2k), which is a multiple of 2 and therefore even. ∎

The proof rests on the definition of "odd integer". Without that single line (expressing each odd integer as 2 × something + 1 or 2 × something − 1), the chain is not valid. Many AQA marks are lost because they jump from "the sum is 4k" without showing k is an integer.

#### Proof by contradiction

A proof by contradiction has four parts:

1. State the claim P.
2. Assume not-P.
3. Derive a contradiction with a known fact, the assumption, or both.
4. Conclude that P must be true.

**Worked example.** Prove that there is no largest integer.

Assume there is a largest integer N. Then N + 1 is an integer greater than N, contradicting the assumption that N is the largest. Hence no largest integer exists. ∎

This is the cleanest possible contradiction proof: a one-step derivation from the assumption. The classic √2 proof extends the same structure over more steps because the contradiction has to be derived, not assumed.

#### Proof by exhaustion

A proof by exhaustion checks every possible case. Use it only when the case list is finite and small enough that the work stays reasonable — typically 2 to 5 cases.

**Worked example.** Prove that n³ − n is divisible by 6 for all integers n.

Consider n modulo 6. The residues are 0, 1, 2, 3, 4, 5:

| n mod 6 | n | n³ − n | divisible by 6? |
|---------|---|--------|------------------|
| 0 | 0 | 0 | yes |
| 1 | 1 | 0 | yes |
| 2 | 8 | 6 | yes |
| 3 | 27 | 24 | yes |
| 4 | 64 | 60 | yes |
| 5 | 125 | 120 | yes |

Every case works, so n³ − n is divisible by 6 for all integers n. ∎

The pattern to remember: if the statement is universal and the case set is finite and small, exhaustion is the natural method.

#### Disproof by counter-example

A counter-example is a single instance that violates a "for all" statement. The method is one step: produce one example, check it, conclude the statement is false.

**Worked example.** Disprove: "for all real numbers x, x² ≥ x."

Take x = 0.5. Then x² = 0.25, which is less than 0.5. The statement is false. ∎

The trap on AQA papers is to attempt a proof when the statement is actually false — students lose several minutes before recognising the counter-example. When a statement looks plausible but the question says "show whether or not the statement is true", your first move should be to test small values.

#### When each method applies

- **"For all…" / "every…"** statements: try a direct proof; if that fails, try a contradiction. Use a counter-example if the statement is actually false.
- **"There exists…"** statements: a direct construction (exhibit one example) is the natural method.
- **"Is it possible that…"**: usually a counter-example for "no" or a construction for "yes".
- **Statements about infinite sets** (primes, integers, real numbers): contradiction is often the easiest method.
- **Statements with a small finite case split**: exhaustion.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why proof marks are free if you set them out

AQA examiners reward clear proof structure, not clever reasoning. A proof that arrives at the right conclusion with one paragraph of unstructured text scores less than the same reasoning laid out in four lines:

1. **State** what you are trying to prove.
2. **Assume** the negation (for contradiction) or **start from** the hypothesis (for direct).
3. **Derive** the chain, with each step justified by a known fact or a definition.
4. **Conclude** with the symbol ∎ or QED or the word "hence" followed by a restatement of the claim.

The structure is not decoration: every line is a separate mark. A student who writes a one-paragraph proof and gets the reasoning right may pick up 2 of the 4 marks; the same reasoning in four clear lines picks up all four.

#### The √2 proof in full — annotated

Claim: √2 is irrational.

**Proof.** Assume, for contradiction, that √2 is rational. Then there exist positive integers p and q with no common factor (in lowest terms) such that √2 = p/q. Squaring both sides: 2 = p²/q², so p² = 2q². Hence p² is even, which implies p is even (the square of an odd number is odd). Write p = 2k for some positive integer k. Substituting: 2q² = (2k)² = 4k², so q² = 2k². Hence q² is even, which implies q is even. But p and q are both even, contradicting the assumption that they have no common factor. Therefore √2 is irrational. ∎

Each step uses a named fact (squares of odd numbers are odd; a product is even only if at least one factor is even). The proof would be incomplete if any of those were assumed without justification.

#### Worked pattern — setting out a direct proof

**Claim.** Prove that, for any positive integer n, the expression n³ − 6n² + 11n − 6 is divisible by 6.

**Proof.** Factor the cubic: n³ − 6n² + 11n − 6 = (n − 1)(n − 2)(n − 3). The three factors are three consecutive integers, so one of them is divisible by 3 (every set of three consecutive integers contains exactly one multiple of 3). Likewise, two of the three factors are even (consecutive integers alternate parity, and three of them contain at least one even — actually two). Hence the product contains a factor of 2 × 3 = 6, and so the cubic is divisible by 6 for every positive integer n. ∎

The proof has two named facts (multiple-of-3 property, parity property of consecutive integers) and one algebraic step (the factorisation, which the candidate may check by expansion).

#### Common misconceptions (and the correction)

- "Contradiction only works for things you already know are true." It is a method for proving things, not a verbal sleight of hand. The √2 proof assumes √2 is rational and reaches a contradiction with a definition; that is the whole point of the method.
- "A counter-example is a weak argument." For a false "for all" statement it is the strongest possible argument — a single instance settles it. The weakness is only when a counter-example is offered for a statement that is actually true.
- "Exhaustion only works for small numbers." It works whenever the case set is finite and small. Trying to use exhaustion on a continuum (all real numbers between 0 and 1) is the failure mode, not exhaustion itself.
- "I can skip the conclusion line." Examiners will assume you have not reached the conclusion you were asked to reach. End every proof with "hence", "therefore", or the claim restated.

#### Specification reference

Section A of the AQA A-level Mathematics 7357 specification lists proof as a content area that runs through the pure papers (Papers 1 and 2) and contributes to assessment in a number of ways: as a stand-alone "show that" question, as a step in a longer calculation, and as the reasoning that justifies a method mark. Confirm the live paper structure, formula booklet and calculator rules on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*