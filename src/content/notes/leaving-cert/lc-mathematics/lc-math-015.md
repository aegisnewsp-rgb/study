---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-015
topicName: "Sequences and Series"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram comparing an arithmetic sequence with a geometric sequence, showing constant difference against constant ratio with their general-term formulas listed beside each, white background, exam-style illustration"
---

# Sequences and Series — Leaving Certificate (Established) Mathematics Notes

Section 4.4 is one of the highest-yield sections in the whole paper: the formulas are few, the pattern recognition is quick once you can do it reliably, and the questions are routine. Candidates who lose marks here do so on identification and notation rather than on the mathematics.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Naming the sequence first

Every sequence question begins with a decision, and the decision is worth a mark.

**Arithmetic** — constant *difference* between consecutive terms. Second difference is zero. Examples: 3, 7, 11, 15 (d = 4); 2, 2, 2, 2 (d = 0).

**Geometric** — constant *ratio* between consecutive terms. Examples: 2, 6, 18, 54 (r = 3); 1, ½, ¼, ⅛ (r = ½).

The check that settles it in one step: **divide consecutive terms by each other**. If the answers are all equal, it is geometric. If the *differences* are all equal, it is arithmetic.

Watch for the case designed to catch you: a sequence whose *ratio* is constant but which starts with a zero or contains a sign change, and a sequence whose terms happen to look arithmetic for the first three and then diverge. Read four or five terms before committing.


#### Arithmetic sequences

**General (nth) term:** *uₙ* = *a* + (*n* − 1)*d*, where *a* is the first term and *d* is the common difference.

Note the (*n* − 1). Candidates write *an* + *d* and are wrong on every term except the first. If the question gives *u₁* and *uₙ* and asks for the sum to *n* terms, the counting is *n*, not *n* − 1.

**Sum of the first *n* terms:**
*Sₙ* = *n*/2 [2*a* + (*n* − 1)*d*]  or  *n*(*a* + *l*)/2, where *l* is the last term.

The second form is quicker when the question hands you *a* and *l*. The first is quicker when you have *a* and *d*. Either earns the marks; writing the formula you used is the requirement.

**Determining which term a value is.** Solve for *n* in the general term. Two things to handle: *n* must be a **positive whole number**, and when the question asks "which term is the first to exceed…", you must check the neighbouring term to confirm you have genuinely crossed the threshold rather than merely reached it.

### 🟡 Standard — Regular Study (2d–2mo)

#### Geometric sequences

**General term:** *uₙ* = *a rⁿ⁻¹*.

**Sum of the first *n* terms:**
*Sₙ* = *a*(*rⁿ* − 1) ÷ (*r* − 1)   for *r* ≠ 1.

The *r* = 1 case is separate and the exam checks whether you know it: if *r* = 1 every term equals *a*, so *Sₙ* = *an*. Applying the formula with *r* = 1 gives 0 ÷ 0 and wastes time.

**Sum to infinity** (available only when |*r*| < 1): *S*∞ = *a* ÷ (1 − *r*). The condition matters — if |*r*| ≥ 1 the series diverges and there is no sum to infinity. Stating the condition alongside the answer is the mark that candidates forget.


#### Sigma notation

The same sums written with Σ. If the question asks you to write a series in sigma notation:

- The summand is the general term.
- The lower limit is the index of the first term — normally 1.
- The upper limit is the index of the last term.
- Check by substituting the limits back: at *n* = 1 the summand should give your first term exactly, and at the upper limit your last term.

Converting sigma notation into a calculation is the same task in reverse: identify *a*, *d* or *r*, and *n*, and use the formulas.


#### Recurrence and higher-order patterns

Sequences defined by a rule rather than a formula — "each term is the previous term plus its position" — are assessed by generating terms until the pattern stabilises, then identifying the arithmetic or geometric structure in the sequence you generated. Generating four or five terms reliably is the whole skill.

Higher-order difference questions ask for the *n*th term of a sequence whose differences form a pattern. Where second differences are constant, the sequence is quadratic and *uₙ* = *an*² + *bn* + *c* with *a* = ½ × (second difference). Being able to derive that from three consecutive terms is worth doing once, carefully.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Where marks are lost

1. **The (*n* − 1)** in the arithmetic general term, and the (*n* − 1) exponent in the geometric one. Both produce answers that are correct for the first term and wrong for every later one.
2. **Applying the geometric sum to infinity when |*r*| ≥ 1.** The series does not converge; the answer is that it diverges.
3. **Not writing the formula you used.** The formula line is a mark in its own right in this section.
4. **Not checking that *n* is a whole number** in "which term" questions.
5. **Confusing a sequence with a series.** A sequence is a list; a series is the sum of it. The question asking for a sum is asking for a series, and the formula set differs.

## Self-check

1. 5, 11, 17, 23, … — arithmetic or geometric, and what is *u*₁₀₀? *(Arithmetic with d = 6. *u*₁₀₀ = 5 + 99×6 = 599. Note 99, not 100.)*
2. 3, 6, 12, 24, … — identify, and find the sum of the first ten terms. *(Geometric, *a* = 3, *r* = 2. *S*₁₀ = 3(2¹⁰ − 1) ÷ (2 − 1) = 3 × 1023 = 3069.)*
3. Why does a sequence with ratio 2 have no sum to infinity? *(|2| ≥ 1, so the series diverges — each term is larger than the sum of all the ones before it. The condition for convergence is |*r*| < 1, and it must be stated.)*
4. You are asked which term of 2, 5, 8, 11, … first exceeds 100. What is the procedure? *(Solve 2 + (*n* − 1)3 > 100, giving *n* > 33.67, so the first such term is *n* = 34. Then confirm by checking *u*₃₃ is below 100 and *u*₃₄ is above it, because solving the inequality alone gives the threshold but the question asks for the first term that crosses it.)*
5. Convert 2 + 5 + 8 + … + 50 to sigma notation. *(Σ from *n* = 1 to 16 of (2 + 3(*n* − 1)). Check: at *n* = 16 the summand is 2 + 45 = 47, not 50 — so the upper limit must be 17 if the last term is 50, since 2 + 3(17−1) = 50. Testing your limits against the given terms is the step that catches this.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (section 4.4): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Sequences and Series" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject
