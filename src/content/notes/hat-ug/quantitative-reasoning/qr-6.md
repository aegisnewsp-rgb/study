---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-6
topicName: Simple and Compound Interest
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.007031"
lastUpdated: "2026-07-25"
diagramPrompt: "Educational diagram illustrating Simple and Compound Interest with clear labels, white background, exam-style illustration"




---

# Simple and Compound Interest

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Simple interest** (SI) grows linearly: interest depends only on the original **principal P**, the annual **rate r** (as a decimal), and **time t** in years.

- **SI formula:** I = P · r · t
- **Amount under SI:** A = P(1 + r · t)

**Compound interest** (CI) grows exponentially because each period earns interest on principal *and* on previously accumulated interest.

- **Amount under CI:** A = P(1 + r/n)^(n·t)
- **CI earned:** CI = P[(1 + r/n)^(n·t) − 1]

Quick pointers for HAT-UG:

- Always convert rate percent → decimal (12% → 0.12) before substituting.
- Match time units: quarterly compounding with t measured in quarters, not years.
- For 2-year annual compounding, CI − SI = P · r² — a one-line trick worth memorising.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

**Principal P** is the original sum borrowed or invested. **Rate r** is the yearly percentage expressed as a decimal (5% = 0.05). **Time t** is the loan/tenure in years. Under SI, interest is paid only on P, so the amount after t years is A = P(1 + r·t). Under CI, interest is added back to the principal at the end of every compounding period, so the amount grows geometrically as A = P(1 + r/n)^(n·t), where n is the number of compounding periods per year.

#### Why CI > SI Over Time

The multiplier (1 + r·t) for SI is linear in t, while (1 + r/n)^(n·t) for CI is exponential. For any r > 0, t > 0, n ≥ 1, the CI amount strictly exceeds the SI amount. The gap equals P·r² for t = 2 years at annual compounding, and P·r²(3 + r) for t = 3 years — useful shortcut identities.

#### Comparing Compounding Frequencies

| Compounding | n | Effective annual rate |
| --- | --- | --- |
| Annual | 1 | r |
| Semi-annual | 2 | (1 + r/2)² − 1 |
| Quarterly | 4 | (1 + r/4)⁴ − 1 |
| Monthly | 12 | (1 + r/12)¹² − 1 |
| Continuous | ∞ | eʳ − 1 |

- The effective annual rate rises with n and converges to eʳ − 1 as n → ∞.
- EMI for equal monthly instalments: EMI = P · r · (1+r)ⁿ / [(1+r)ⁿ − 1], with r = monthly rate and n = total months.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Equivalent-Rate Conversion

To compare a rate compounded m₁ times yearly with another compounded m₂ times yearly, convert: r₂ = m₂ · [(1 + r₁/m₁)^(m₁/m₂) − 1]. A 10% nominal rate compounded semi-annually (m₁ = 2) gives the same annual yield as 9.65% compounded quarterly (m₂ = 4). HAT-UG items sometimes test this equivalence using a stated "simple-rate equivalent," computed as k·[(1 + r/k)^k − 1]% for one year.

#### Worked Micro-Example

A deposit of PKR 50,000 earns 10% compounded quarterly for 2 years. Compute the maturity amount.

- n = 4, t = 2, so n·t = 8 quarters.
- A = 50,000 · (1 + 0.10/4)^8 = 50,000 · (1.025)^8 ≈ 50,000 · 1.21840 ≈ **PKR 60,920**.
- CI earned ≈ PKR 10,920; under SI for the same 2 years the interest would be only PKR 10,000, confirming CI > SI.

#### Common Mistakes and Exam Strategy

| Mistake | Correction |
| --- | --- |
| Substituting r = 5 instead of 0.05 | Convert percent to decimal first |
| Mixing years with monthly compounding | Use t in the same unit as the period |
| Equating different compounding frequencies directly | Apply the equivalent-rate formula |
| Treating EMI's r as annual rate | r in EMI is the *periodic* (monthly) rate |

The HAT-UG Quantitative Reasoning section tests this topic through roughly 1–2 MCQs at about 3% weightage, mostly calculation-based with a 60–90 second time budget per item. Master the difference-of-CI-and-SI shortcut and the effective-rate table to save time.

> Tip: For 2-year annual compounding, the gap CI − SI = P·r² is faster than recomputing both amounts separately.

#### Practice Prompts

1. Find the SI and CI on PKR 20,000 at 8% p.a. for 3 years compounded annually, and verify CI − SI = P·r²(3 + r).
2. A sum doubles in 6 years under annual compounding. Using the Rule of 72, estimate r, then compute the exact effective rate.

---

## Continue your study

- **[View this topic in your HAT-UG (HEC Aptitude Test - Undergraduate) roadmap](/roadmap/?exam=hat-ug&duration=1mo)** — see where "Simple and Compound Interest" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=hat-ug&duration=1d)** — 1-day sprint covering highest-weight topics
- **[HAT-UG (HEC Aptitude Test - Undergraduate) exam overview](/exams/hat-ug/)** — pattern, eligibility, and syllabus
- **[All Quantitative Reasoning notes](/notes/hat-ug/quantitative-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
