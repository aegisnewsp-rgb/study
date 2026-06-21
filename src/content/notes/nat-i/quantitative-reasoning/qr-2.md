---



exam: nat-i
examName: NAT-I (NTS)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-2
topicName: Fractions and Decimals
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.133905"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Fractions and Decimals with clear labels, white background, exam-style illustration"




---

# Fractions and Decimals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **fraction** *a/b* (with *b ≠ 0*) represents a part of a whole, where *a* is the **numerator** and *b* the **denominator**. A **decimal** is the same quantity written in base-10 positional form, obtained by extending the division algorithm past the units digit.

Must-know rules:

- **Equivalence:** *a/b = (a×k)/(b×k)* for any non-zero *k*.
- **Common denominator** is required for *+* and *−*; not for *×* and *÷*.
- **Division by a fraction** equals multiplication by its **reciprocal**: *a/b ÷ c/d = ad/(bc)*.
- **Terminating vs. repeating:** *a/b* in lowest terms terminates iff *b* has no prime factors other than 2 or 5; otherwise it repeats.
- **Recurring → fraction:** *0.1̄6̄ = 15/99 = 5/33* (the 9s-and-0s shortcut).

For NAT-I: 3% weight, MCQ format, expect simplification, four-operation, and fraction-to-decimal conversion in under 90 seconds per question.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and Types

A fraction *a/b* is **proper** when *|a| < |b|* (e.g. 3/7), **improper** when *|a| ≥ |b|* (e.g. 11/4), and a **mixed number** when written as an integer plus a proper fraction (e.g. 2¾). Converting: divide *a* by *b*; the quotient is the integer part, the remainder over *b* is the fraction. Back-conversion: multiply the integer by the denominator and add the numerator.

#### Four Operations

- **Addition/Subtraction:** convert to a **common denominator** (the LCM of the original denominators is the smallest valid choice), then *a/b ± c/d = (ad ± bc)/(bd)*.
- **Multiplication:** *a/b × c/d = ac/(bd)* — no common denominator needed. **Cancel** common factors across numerators and denominators *before* multiplying to keep numbers small.
- **Division:** *a/b ÷ c/d = a/b × d/c = ad/(bc)*, valid when *c* and *d* are non-zero.

#### Fraction ↔ Decimal Conversion

Performing *a ÷ b* by long division yields the decimal. The decimal **terminates** if and only if, after reducing to lowest terms, the denominator's prime factors are only 2 and/or 5 (since 10 = 2·5). Otherwise, the digits **repeat** with a period whose length divides *φ(b)*, Euler's totient.

#### Converting Recurring Decimals to Fractions

- Pure repeat *0.d̄₁d₂…dₖ*: write the repeating block as the numerator and *k* nines as the denominator. Example: *0.1̄6̄ = 16/99 = 5/33*.
- Mixed repeat *0.n₁…nₘd̄₁…dₖ*: numerator = (all digits up to end of first repeat) − (non-repeating part); denominator = *k* nines followed by *m* zeros.

#### Comparing Fractions

Use **cross-multiplication**: *a/b > c/d* iff *ad > bc* (when *b, d > 0*). Alternatively, convert both to decimals and compare digit by digit from the left.

| Form | Example | Decimal | Repeats? |
|---|---|---|---|
| 1/4 | denominator 4 = 2² | 0.25 | No |
| 1/8 | denominator 8 = 2³ | 0.125 | No |
| 1/3 | denominator 3 | 0.333… | Yes, period 1 |
| 1/7 | denominator 7 | 0.142857 142857… | Yes, period 6 |
| 1/6 | denominator 6 = 2·3 | 0.1666… | Yes, period 1 |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Place Value and Precision

Each digit after the decimal point represents a power of 10⁻¹: tenths, hundredths, thousandths, ten-thousandths, etc. Misplacing the decimal point by one position changes a value by a factor of 10 — the single most frequent error in NAT-I MCQs involving 0.25 vs 0.025. The number of significant decimal digits a calculator displays can mask the exact rational value; always reduce to lowest terms before judging termination.

#### Why the 2-and-5 Rule Works

Every terminating decimal *x* can be written as *m/10ⁿ* for some integers *m, n*. Reducing *m/10ⁿ* cancels factors of 2 and 5 only, because *10ⁿ = 2ⁿ·5ⁿ* and no other primes appear in 10. Conversely, if a reduced denominator *b* contains any prime *p ∉ {2, 5}*, then *a/b* cannot equal *m/10ⁿ* for any *n*, and the long division cycles with period dividing *φ(b)*. For *b = 7*, *φ(7) = 6*, predicting a period of 1, 2, 3, or 6 — and indeed *1/7* has period 6.

#### Common Traps in NAT-I

- **Reciprocal slip:** computing *3/4 ÷ 5/6* as *15/24* instead of *18/20 = 9/10*.
- **Mixed-number confusion:** treating *2½ × 4* as *2·(½·4) = 4* instead of *(5/2)·4 = 10*.
- **One-sided cancellation:** cancelling across *addition* (e.g. simplifying *3/4 + 5/4* to *3+5/4* by writing it as *3/4 + 5/4 = 8/4* only after combining numerators over a common denominator, never *3+5*).
- **Sign mishandling:** *−3/4 × 2/5 = −6/20 = −3/10*, not *+3/10*; double negatives flip signs in division too.
- **Repeating-bar misread:** *0.16̄* (1 repeats) = *16/99* ≈ 0.1616…; *0.1̄6̄* (both repeat) = *16/99* as well, but *0.166* (terminating) = *166/1000 = 83/500* — three different values from visually similar strings.

#### Worked Example

Evaluate: *2¼ + 5/6 × 3/5 ÷ (1/2)*.

1. Convert: *2¼ = 9/4*.
2. Multiply then divide: *5/6 × 3/5 = 15/30 = 1/2*; *1/2 ÷ 1/2 = 1*.
3. Add: *9/4 + 1 = 13/4 = 3.25*.

#### Practice Prompts

1. Reduce *84/126* to lowest terms, then state whether the decimal terminates and, if so, write its first four decimal digits. *(Answer: 2/3, non-terminating repeating, 0.6666…)*
2. Express *0.2̄7̄* as a fraction in lowest terms. *(Answer: 27/99 = 3/11.)*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
