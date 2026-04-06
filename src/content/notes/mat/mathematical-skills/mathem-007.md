---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-007
topicName: Simple & Compound Interest
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Simple & Compound Interest

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Simple & Compound Interest** — Key Facts for MAT

Simple Interest (SI) is interest calculated only on the original principal amount. The formula:

$$SI = \frac{P \times R \times T}{100}$$

Where **P** = Principal, **R** = Rate per annum, **T** = Time in years.

**Amount** = Principal + Simple Interest = $P + \frac{PRT}{100}$

**Compound Interest (CI)** is interest calculated on the principal + accumulated interest. The standard formula:

$$A = P\left(1 + \frac{R}{100}\right)^T$$

Where **A** = Amount after T years, and CI = A − P.

⚡ **Exam shortcut — Rule of 72:** To find years to double your money at rate R%, divide 72 by R. At 8% p.a., money doubles in 9 years exactly (72 ÷ 8 = 9).

⚡ **Exam shortcut — Difference SI vs CI:** For 2 years, the difference between CI and SI at rate R% is: $\frac{P \times R^2}{100^2}$. At 10% on ₹10,000 for 2 years: CI = ₹2,100, SI = ₹2,000, difference = ₹100.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Simple & Compound Interest** — MAT Study Guide

#### Simple Interest: Deep Dive

Simple Interest is the most basic form of interest in financial mathematics. It is commonly used in short-term loans, fixed deposits, and certain government schemes in India.

**Key derivations:**
- If time is in months: $SI = \frac{P \times R \times M}{12 \times 100}$
- If time is in days: $SI = \frac{P \times R \times D}{365 \times 100}$

**Example (MAT 2022 pattern):** A sum of ₹8,000 is lent at 5% p.a. for 3 years. Find the total interest.
$$SI = \frac{8000 \times 5 \times 3}{100} = ₹1,200$$
Amount = ₹8,000 + ₹1,200 = **₹9,200**

#### Compound Interest: Deep Dive

Compound interest is what banks and most financial institutions actually use. Interest is added to the principal at regular intervals (annually, half-yearly, or quarterly), and subsequent interest is calculated on this new total.

**Half-yearly compounding:** Rate becomes R/2, time becomes 2T
$$A = P\left(1 + \frac{R}{200}\right)^{2T}$$

**Quarterly compounding:** Rate becomes R/4, time becomes 4T
$$A = P\left(1 + \frac{R}{400}\right)^{4T}$$

**Example (MAT 2023 pattern):** Find the compound interest on ₹6,000 at 10% p.a. for 1.5 years, compounded half-yearly.

Since compounding is half-yearly: Time = 3 periods, Rate = 5% per half-year:
$$A = 6000 \times \left(1 + \frac{5}{100}\right)^3 = 6000 \times (1.05)^3 = 6000 \times 1.157625 = ₹6,945.75$$
CI = ₹6,945.75 − ₹6,000 = **₹945.75**

#### Population Growth Formula (Common in MAT)

$$P_t = P_0\left(1 + \frac{R}{100}\right)^t$$

This is identical to compound interest formula — just applied to population, bacteria, or value appreciation.

#### Equated Monthly Installments (EMI)

EMI for a loan of principal P at annual rate R% for N months:
$$EMI = \frac{P \times R \times (1+R)^N}{12 \times ((1+R)^N - 1)}$$

⚡ **MAT shortcut for installment problems:** When a sum X is divided into two parts at rates R1% and R2% and gives the same annual interest, use: Part₁ : Part₂ = (100 − R₂) : (100 − R₁).

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Simple & Compound Interest** — Comprehensive MAT Notes

#### Derivation: Why Compound Interest Grows Faster

Simple interest treats each year's principal as unchanged. Compound interest treats it as growing. For 3 years at rate R%:

| Year | SI on ₹P | CI on ₹P |
|------|----------|----------|
| 1 | PR/100 | PR/100 |
| 2 | PR/100 | P[(R/100) + (R/100)²] |
| 3 | PR/100 | P[(R/100) + 2(R/100)² + (R/100)³] |

The CI advantage compounds over time. At 10% p.a., ₹1,00,000 grows to:
- SI (10 years): ₹2,00,000
- CI (10 years): ₹2,59,374

That's **59.4% more** than simple interest.

#### Fractional Year Compound Interest

When time is not a whole number, apply the integer part with full compounding, then calculate simple interest on the fractional part from that amount.

**Example:** ₹5,000 at 12% p.a. for 1.5 years compounded annually.
$$A = 5000 \times (1.12)^1 = ₹5,600 \text{ (after 1 year)}$$
For 0.5 year at 12%: $SI = \frac{5600 \times 12 \times 0.5}{100} = ₹336$
Total Amount = ₹5,600 + ₹336 = **₹5,936**

#### Present Value Formula

What amount today equals ₹X in T years at rate R%?
$$PV = \frac{X}{\left(1 + \frac{R}{100}\right)^T}$$

This is the reverse of compound interest accumulation.

#### Interest Calculation When Rates Differ Each Year

Sometimes MAT questions specify different rates for different years:

**Example:** ₹10,000 at 10% for year 1, 15% for year 2, and 20% for year 3 (CI).
$$A = 10000 \times 1.10 \times 1.15 \times 1.20 = ₹15,156$$

#### Net Fractional Change Problems

**Example (MAT 2021):** A product's price increases by 20% in January, decreases by 20% in February, and increases by 10% in March. What is the net change from the original price?

After January: $P \times 1.20$
After February: $P \times 1.20 \times 0.80 = P \times 0.96$
After March: $P \times 0.96 \times 1.10 = P \times 1.056$

Net increase = **5.6%**

⚡ **Key insight:** A 20% increase followed by a 20% decrease does NOT return to the original value. It leaves you at 96% — a 4% net loss.

#### Common MAT Question Patterns

**Pattern 1 — Find the rate:** "A sum becomes 5 times in 8 years at CI. Find the rate."
Solution: $(1 + R/100)^8 = 5$ → $R/100 = 5^{1/8} - 1$ → $R \approx 22.5\%$

**Pattern 2 — Two rates successive:** "A sum at 20% p.a. for 2 years gives the same CI as at x% p.a. for 3 years. Find x."
Set up: $(1.2)^2 = (1 + x/100)^3$ → $x \approx 12.7\%$

**Pattern 3 — Difference SI/CI for 3 years:**
$$CI - SI = P\left[\left(1+\frac{R}{100}\right)^3 - 1 - \frac{3R}{100}\right]$$

**Pattern 4 — Instalment problems:** "A TV priced at ₹30,000 is bought for ₹x cash or ₹y per month for 12 months at 10% CI. Find y."
Formula: $x = \frac{y}{1+R/100} + \frac{y}{(1+R/100)^2} + ... + \frac{y}{(1+R/100)^{12}}$

⚡ **Common student mistake:** Confusing "rate per annum" with "rate per half-year" when compounding frequency changes. Always adjust both R and T proportionally. Also forgetting that CI is calculated on the new principal (principal + previous interest), not the original.

#### Previous Year MAT Questions (Key Types)

1. **Two sums invested:** At different rates, find when they become equal.
2. **Installment problems:** Buying a refrigerator on EMI — find the marked price or rate.
3. **Banker's gain:** Difference between true discount and banker's discount at same rate.
4. **Population:** Village population grows at 5% per annum, find after 3 years.
5. **Depreciation:** Machine value decreases at 10% p.a., find value after 5 years.
6. **Mixed SI/CI:** A sum earns SI for 2 years and CI for next 3 years — find total amount.
7. **Equal installments:** Find the present worth of a future payment or vice versa.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
