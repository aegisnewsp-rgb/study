---
exam: aqa-gcse-mathematics
examName: GCSE Mathematics (AQA 8300)
subject: mathematics
subjectName: Mathematics
topic: mathem-005
topicName: Probability
weight: 3
country: uk
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Probability — GCSE Mathematics (AQA 8300) Notes

Probability is one of two smaller strands at GCSE Mathematics and is often tested jointly with Statistics on Paper 2. It spans sample space diagrams, Venn diagrams, tree diagrams (independent and dependent events), conditional probability, and expectation. Higher tier extends into formal notation and algebraic probability.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The four rules to remember

1. **Sum rule:** P(A or B) = P(A) + P(B) − P(A and B) (for mutually exclusive events, the last term is 0).
2. **Multiplication rule (independent):** P(A and B) = P(A) × P(B).
3. **Multiplication rule (dependent):** P(A then B) = P(A) × P(B given A).
4. **Complement rule:** P(not A) = 1 − P(A).

All probabilities are between 0 and 1. Probabilities in a sample space sum to 1.

#### Formulae to remember (higher tier)

- Conditional probability: P(B|A) = P(A and B) / P(A)
- Conditional (rearranged): P(A and B) = P(A) × P(B|A)
- Expected frequency = number of trials × probability

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sample spaces

A **sample space** lists every possible outcome of an experiment. For two dice, the sample space has 36 ordered pairs (1,1), (1,2), …, (6,6). For three coins, it has 8 outcomes (HHH, HHT, HTH, …). Use a sample space to find P(specific event) = (favourable outcomes) / (total outcomes).

#### Venn diagrams

A **Venn diagram** shows the relationships between two or three sets. Regions are labelled with the number of items they contain. The union A ∪ B is the area inside at least one circle; the intersection A ∩ B is the area inside both.

To read probabilities from a Venn diagram, divide each count by the total. To read counts from probabilities, multiply by the total.

#### Tree diagrams

A **tree diagram** multiplies along the branches and adds at the ends. For two independent events A and B, draw two branches from the start (P(A) and P(not A)), then from each end two more branches (P(B) and P(not B)). The probability of each final path is the product along the branches.

For **dependent events**, the second set of branches is conditional. "What is the probability of drawing two kings from a standard deck without replacement?" — first card: 4/52, second card: 3/51 (one fewer king and one fewer card). P(both kings) = 4/52 × 3/51 = 12/2652 = 1/221.

#### Independent and mutually exclusive events

Two events are **independent** if the outcome of one does not affect the probability of the other: P(A and B) = P(A) × P(B). Two events are **mutually exclusive** if they cannot both occur: P(A and B) = 0.

Tricky pair: "A coin lands heads" and "A coin lands tails on the second flip" are independent. "First card is a king" and "Second card is a king" are dependent (because the first card is not replaced).

#### Conditional probability (higher tier)

**Conditional probability** P(B|A) is the probability of B given that A has happened. The formula is:

P(B|A) = P(A and B) / P(A)

Rearranging: P(A and B) = P(A) × P(B|A). This is the version used most often in tree diagrams with dependent branches.

A **Venn diagram with two sets** also yields conditional probabilities. The probability of B given A is the count in A ∩ B divided by the count in A.

#### Algebraic probability (higher tier)

Questions may use algebraic expressions for the number of items in each Venn region. Work through the same steps — find the total, then derive each region's probability — but use the algebra to substitute.

A common pattern: "n(A) = 3x, n(B) = 4x, n(A ∩ B) = x, n(neither) = 5x. Find the probability of A union B." Total = 3x + 4x − x + 5x = 11x. P(A ∪ B) = (3x + 4x − x) / 11x = 6x / 11x = 6/11.

#### Set notation (higher tier)

- A ∪ B: union (in at least one of A, B)
- A ∩ B: intersection (in both)
- A′ (or Aᶜ): complement (not in A)
- A ⊆ B: A is a subset of B
- A ⊂ B: A is a proper subset of B

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Worked pattern — three-set Venn

A survey of 100 students: 50 study French (F), 40 study Spanish (S), 30 study German (G). 20 study F and S, 15 study F and G, 10 study S and G. 5 study all three. How many study none?

- F only = 50 − (20 − 5) − (15 − 5) − 5 = 50 − 15 − 10 − 5 = 20
- S only = 40 − (20 − 5) − (10 − 5) − 5 = 40 − 15 − 5 − 5 = 15
- G only = 30 − (15 − 5) − (10 − 5) − 5 = 30 − 10 − 5 − 5 = 10
- F ∩ S only = 20 − 5 = 15
- F ∩ G only = 15 − 5 = 10
- S ∩ G only = 10 − 5 = 5
- All three = 5
- Total accounted = 20 + 15 + 10 + 15 + 10 + 5 + 5 = 80
- None = 100 − 80 = 20

#### Worked pattern — conditional probability from a tree

A factory has two machines, A and B. 60% of items come from A, 40% from B. Defect rate is 2% from A and 5% from B. An item is selected at random and found to be defective. What is the probability it came from B?

- P(B and defective) = 0.4 × 0.05 = 0.02
- P(A and defective) = 0.6 × 0.02 = 0.012
- P(defective) = 0.012 + 0.02 = 0.032
- P(B | defective) = 0.02 / 0.032 = 5/8 = 0.625

#### Common misconceptions (and the correction)

- "P(A or B) = P(A) + P(B)." Only when A and B are mutually exclusive. Otherwise, the intersection has been double-counted.
- "P(A and B) = P(A) × P(B)." Only when A and B are independent.
- "Drawing a king then a queen is the same as drawing a king and a queen in any order." The order may matter for the calculation: with replacement they are independent; without replacement they are dependent.
- "All probabilities are equally likely." Not always. Biased dice and loaded coins have different probabilities for each outcome.

#### Exam technique

- For tree diagrams, always label the branches with the probabilities, not the outcomes. A common error is to write "H" instead of "0.5" on a branch.
- For Venn diagrams, fill in the "all three" region first, then work outward to "exactly two", then "exactly one", then "neither".
- For conditional probability, write the formula P(B|A) = P(A and B) / P(A) before substituting. Substituting the wrong way (P(A|B) when P(B|A) is asked) is a 3-mark loss.

#### Specification reference

Higher tier extends into algebraic probability, set notation, conditional probability in tree diagrams and Venn diagrams, and expectation. Confirm the live assessment weighting and tier rules on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-20. Source: AQA GCSE Mathematics specification 8300, https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300. Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*
