---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-012
topicName: Probability
weight: 3
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Probability — A-Level Mathematics (AQA 7357) Notes

Probability is section M of the AQA 7357 specification. The section covers mutually exclusive and independent events, conditional probability, Venn diagrams and tree diagrams, and applying probability formulae. Probability is the gateway to the binomial and normal distributions (section N) and to hypothesis testing (section O), both of which sit on Paper 3. The skill is the same across the whole section: identify the events, draw the diagram (tree or Venn), and apply the appropriate formula. Conditional probability is the trickiest sub-topic because the formula looks like ordinary multiplication, but the events are read from the right place in the diagram.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Three probability rules to remember

- **Addition rule** (mutually exclusive events): P(A ∪ B) = P(A) + P(B).
- **Addition rule** (general): P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- **Multiplication rule** (independent events): P(A ∩ B) = P(A) · P(B).
- **Multiplication rule** (general): P(A ∩ B) = P(A) · P(B | A).

#### Two vocabulary pairs

- **Mutually exclusive**: events cannot occur at the same time. P(A ∩ B) = 0.
- **Independent**: occurrence of one event does not change the probability of the other. P(B | A) = P(B).

#### Two diagram types

- **Venn diagram**: for combining events from a single experiment. Circles overlap where events both occur.
- **Tree diagram**: for sequential experiments with conditional probabilities. Branches carry the conditional probabilities; multiply along a path to get the probability of that outcome.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sample space and events

The **sample space** S is the set of all possible outcomes. An **event** A is a subset of S. P(A) is the proportion of outcomes in A, expressed as a number between 0 and 1.

For equally likely outcomes (dice, cards, balls in a bag), P(A) = (number of outcomes in A) / (total number of outcomes).

**Worked example.** A fair die is rolled. P(rolling a 6) = 1/6. P(rolling an even number) = 3/6 = 1/2.

#### Mutually exclusive events

Events A and B are mutually exclusive if they cannot happen at the same time: A ∩ B = ∅. The addition rule simplifies:

P(A ∪ B) = P(A) + P(B).

**Worked example.** A card is drawn from a standard 52-card deck. P(heart ∪ spade) = P(heart) + P(spade) = 13/52 + 13/52 = 26/52 = 1/2.

Note: hearts and spades are mutually exclusive (a card cannot be both), so the addition rule applies directly.

#### Independent events

Events A and B are independent if the occurrence of one does not affect the probability of the other:

P(A ∩ B) = P(A) · P(B).

Equivalently, P(B | A) = P(B).

**Worked example.** Two fair coins are flipped. P(both heads) = P(first heads) · P(second heads) = (1/2) · (1/2) = 1/4.

**Worked example.** A card is drawn with replacement, then a second card is drawn. The two draws are independent (the first does not change the second). P(both kings) = (4/52) · (4/52) = 1/169.

Without replacement, the two draws are NOT independent: P(second king | first king) = 3/51, not 4/52.

#### Conditional probability

The conditional probability P(B | A) is the probability of B given that A has occurred. The formula:

P(B | A) = P(A ∩ B) / P(A), provided P(A) > 0.

Rearranging:

P(A ∩ B) = P(A) · P(B | A).

**Worked example.** A bag has 5 red and 3 blue balls. Two balls are drawn without replacement. Find P(both red).

P(first red) = 5/8. P(second red | first red) = 4/7. P(both red) = (5/8) · (4/7) = 20/56 = 5/14.

**Worked example — Bayes' theorem.** A medical test has 99% sensitivity (P(test positive | has disease) = 0.99) and 5% false-positive rate (P(test positive | no disease) = 0.05). 1% of the population has the disease. What is P(has disease | test positive)?

Let D = has disease, T = test positive. P(T | D) = 0.99, P(T | D') = 0.05, P(D) = 0.01.

P(T) = P(T | D) · P(D) + P(T | D') · P(D') = 0.99 · 0.01 + 0.05 · 0.99 = 0.0099 + 0.0495 = 0.0594.

P(D | T) = P(T | D) · P(D) / P(T) = 0.0099 / 0.0594 ≈ 0.167.

So even with a positive test, the probability of having the disease is only about 17%. The test is misleadingly low because the disease is rare. This is the "base rate" effect.

#### Venn diagrams

A Venn diagram has overlapping circles for two (or three) events. The probabilities in each region sum to 1.

**Worked example.** In a class of 30 students, 18 study French, 12 study Spanish, and 5 study both. Find the probability that a randomly chosen student studies at least one of the two languages.

The Venn diagram:

- French only: 18 − 5 = 13.
- Spanish only: 12 − 5 = 7.
- Both: 5.
- Neither: 30 − 13 − 7 − 5 = 5.

P(at least one) = (13 + 7 + 5) / 30 = 25/30 = 5/6.

#### Tree diagrams

A tree diagram shows sequential experiments. Each branch represents an outcome at one stage; the branch label is the conditional probability of that outcome given the path so far. The probability of a complete path is the product of the branch labels. To find the probability of an event, sum over the paths that lead to it.

**Worked example.** A bag has 4 red and 6 blue balls. A ball is drawn, replaced, and another is drawn. Find P(both red).

First draw: P(red) = 4/10. Second draw (after replacement): P(red) = 4/10. P(both red) = (4/10) · (4/10) = 16/100 = 4/25.

Without replacement, the second probability becomes 3/9, and the product is (4/10) · (3/9) = 12/90 = 2/15.

#### Set notation and probability

For any two events A and B:

- P(A ∪ B) = P(A) + P(B) − P(A ∩ B). (Subtract the overlap to avoid double-counting.)
- P(A') = 1 − P(A). (Complement rule.)
- P(A ∩ B) = P(A) · P(B | A). (Conditional multiplication.)

The complement rule is often the quickest path to "P(at least one)" problems:

P(at least one) = 1 − P(none).

**Worked example.** Three dice are rolled. Find the probability of at least one six.

P(no six on a die) = 5/6. P(no six on three dice) = (5/6)³ = 125/216. P(at least one six) = 1 − 125/216 = 91/216.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why conditional probability is the foundation for distributions

The binomial distribution (section N) uses the conditional multiplication rule on repeated independent trials. The normal distribution arises as the limit of the binomial when n is large. Hypothesis testing (section O) compares an observed probability to a stated model. None of this works without confident handling of P(B | A).

The bridge from section M to section N is one specific calculation: P(X = k) for the binomial, which is C(n, k) · p^k · (1 − p)^(n−k). This is "the probability of getting exactly k successes in n independent trials, each with success probability p". Recognise the form: it's a product of conditional probabilities summed over all arrangements.

#### Worked pattern — three-branch tree

A tree with three branches per stage has 3² = 9 leaves. The probability of an event is the sum of the path probabilities for the relevant leaves.

**Worked example.** A test for a disease has three outcomes: positive (with 99% probability if diseased), negative (with 95% probability if not diseased), and inconclusive (with the rest). A person is chosen at random from a population with 2% disease rate. Find the probability that the test gives a positive result.

P(positive | D) = 0.99, P(negative | D) = 0.01 (no inconclusive for diseased). P(positive | D') = 0.04, P(negative | D') = 0.95, P(inconclusive | D') = 0.01.

P(positive) = P(positive | D) · P(D) + P(positive | D') · P(D') = 0.99 · 0.02 + 0.04 · 0.98 = 0.0198 + 0.0392 = 0.059.

#### Worked pattern — P(A ∪ B ∪ C)

For three events:

P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A ∩ B) − P(A ∩ C) − P(B ∩ C) + P(A ∩ B ∩ C).

The pattern is inclusion-exclusion: add the singles, subtract the pairs, add the triple. For more events, the pattern continues with alternating signs.

#### Common misconceptions (and the correction)

- "Mutually exclusive and independent mean the same thing." No — mutually exclusive means they cannot both happen (P(A ∩ B) = 0); independent means one does not affect the other. The only events that are both are impossible pairs: if A is non-zero and B is non-zero, mutually exclusive implies P(B | A) = 0, but P(B) > 0, so they are not independent.
- "P(A ∪ B) = P(A) + P(B)." Only when A and B are mutually exclusive. In general, subtract the overlap: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- "Without replacement, the draws are independent." They are not — each draw changes the composition of the bag. Without replacement, the conditional probabilities change.
- "P(A | B) = P(B | A)." No — these are different. The base rates of A and B matter. The medical-test example above shows this directly.

#### Specification reference

Section M of the AQA A-level Mathematics 7357 specification appears on Paper 3 and feeds directly into the binomial distribution (section N), the normal distribution (section N), and hypothesis testing (section O). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*