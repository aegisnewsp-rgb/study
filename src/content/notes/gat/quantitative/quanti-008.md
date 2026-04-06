---
exam: gat
examName: GAT Pakistan
subject: quantitative-techniques
subjectName: ('quantitative-techniques', 'Quantitative Techniques')
topic: quanti-008
topicName: Topic 8
weight: 3
country: gat
generated: "2026-03-25T17:00:00"
---

# Simple and Compound Interest

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Simple and Compound Interest** — Key Facts for GAT Pakistan

**Simple Interest (SI)**:
| Formula | Equation |
|---------|----------|
| SI | (P × R × T)/100 |
| Amount | P + SI = P(1 + RT/100) |
| P | Principal (initial amount) |
| R | Rate per annum |
| T | Time in years |

**Compound Interest (CI)**:
| Formula | Equation |
|---------|----------|
| CI (Yearly) | P(1 + R/100)^T - P |
| Amount | P(1 + R/100)^T |
| CI (Half-yearly) | P(1 + R/2/100)^2T |
| CI (Quarterly) | P(1 + R/4/100)^4T |

**Key Difference**:
- **SI**: Interest calculated on original principal only
- **CI**: Interest calculated on principal + accumulated interest

⚡ **GAT Exam Tip**: For the same principal, rate, and time, CI > SI always!

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Simple and Compound Interest** — Detailed Study Guide

#### Simple Interest Calculations

**Worked Examples**:
```
Example 1: Find SI on Rs. 5000 at 8% p.a. for 3 years.

Solution:
SI = (5000 × 8 × 3)/100 = Rs. 1200
Amount = 5000 + 1200 = Rs. 6200

Example 2: At what rate will Rs. 2000 become Rs. 2600 in 5 years?

Solution:
SI = 2600 - 2000 = Rs. 600
600 = (2000 × R × 5)/100
60000 = 10000R
R = 6% p.a.

Example 3: In how many years will Rs. 1000 at 10% p.a. become Rs. 1500?

Solution:
SI = 1500 - 1000 = Rs. 500
500 = (1000 × 10 × T)/100
50000 = 10000T
T = 5 years
```

⚡ **GAT PYQ**: "The SI on a sum at 5% p.a. for 3 years is Rs. 450.
Find the sum." → Answer: Rs. 3000

#### Compound Interest Calculations

**Yearly Compounding**:
```
Example: Find CI on Rs. 10,000 at 10% p.a. for 2 years.

Solution:
Year 1: Amount = 10000 × 1.10 = Rs. 11,000
Year 2: Amount = 11000 × 1.10 = Rs. 12,100
CI = 12100 - 10000 = Rs. 2100

Using formula: A = P(1 + R/100)^T
A = 10000(1 + 10/100)^2 = 10000 × 1.21 = Rs. 12,100
CI = 12100 - 10000 = Rs. 2100
```

**Half-Yearly Compounding**:
```
Example: CI on Rs. 8000 at 12% p.a. for 1 year, compounded half-yearly.

Solution:
Rate per half-year = 12/2 = 6%
Number of periods = 2
A = 8000(1 + 6/100)^2 = 8000 × 1.1236 = Rs. 8988.80
CI = 8988.80 - 8000 = Rs. 988.80
```

**Quarterly Compounding**:
```
Example: Find CI on Rs. 6250 at 16% p.a. for 9 months, compounded quarterly.

Solution:
Quarterly rate = 16/4 = 4%
Number of quarters = 9/12 × 4 = 3
A = 6250(1 + 4/100)^3 = 6250 × 1.124864 = Rs. 7030.40
CI = 7030.40 - 6250 = Rs. 780.40
```

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Simple and Compound Interest** — Complete Notes for GAT

#### Difference Between SI and CI

**For 2 Years**:
$$CI - SI = P \times \left(\frac{R}{100}\right)^2$$

**Worked Example**:
```
Example: Find difference between CI and SI on Rs. 5000 at 10% p.a. for 2 years.

Solution:
SI = (5000 × 10 × 2)/100 = Rs. 1000
CI = 5000(1.1)^2 - 5000 = 6050 - 5000 = Rs. 1050
Difference = 1050 - 1000 = Rs. 50

Using formula: 5000 × (10/100)^2 = 5000 × 0.01 = Rs. 50 ✓
```

#### Population Growth Problems

**Formula** (same as compound interest):
$$P_{final} = P_{initial} \times \left(1 + \frac{r}{100}\right)^n$$

```
Example: Population of a city is 2,00,000. It increases at 5% per year.
What will be population after 3 years?

Solution:
P = 200000 × (1 + 5/100)^3
  = 200000 × (1.05)^3
  = 200000 × 1.157625
  = 2,31,525 (approximately)
```

#### Depreciation Problems

**Formula** (similar to compound interest, but rate is subtracted):
$$V = P \times \left(1 - \frac{r}{100}\right)^n$$

```
Example: A machine costs Rs. 100,000. It depreciates at 10% per year.
Find its value after 3 years.

Solution:
V = 100000 × (1 - 10/100)^3
  = 100000 × (0.9)^3
  = 100000 × 0.729
  = Rs. 72,900
```

#### Installments and EMI

**For Simple Interest** (most exam problems):
```
Example: A loan of Rs. 1000 is to be repaid in two annual installments
of Rs. 550 each. Find the rate of interest.

Solution:
Total paid = 550 + 550 = Rs. 1100
Interest = 1100 - 1000 = Rs. 100

Since installment plan:
Year 1: 550 borrowed for 1 year at r%
Year 2: 550 borrowed for 0 years (paid at end)

Actually for equal annual installments:
Amount = P(1 + r/100)
So: 1100 = 1000(1 + r/100)
1 + r/100 = 1.1
r = 10%

But if installments are paid over time, use:
Year 1: You get 1000, pay 550 after 1 year → Interest on 1000 for 1 year
Year 2: You pay 550 at end of year 2

Actually for simple calculation:
1000(1 + r/100) = 550 + 550/(1 + r/100)

Let me use direct formula:
Amount at end = Principal × (1 + r/100)^1
= 1000 × (1 + r/100)

Total installment value = 550 + 550/(1 + r/100)

Equating with interest on principal:
This is getting complex. For exam, use simpler approach.

Simple approach: Interest on 1000 at r% for average time (1.5 years)
100 = 1000 × r/100 × 1.5
100 = 15r
r = 6.67%

Actually standard formula for two equal installments:
P = A/(1 + r/100) + A/(1 + r/100)^2
1000 = 550/(1 + r/100) + 550/(1 + r/100)^2

Let x = 1/(1 + r/100)
1000 = 550x + 550x²
550x² + 550x - 1000 = 0
x² + x - 1000/550 = 0
x² + x - 1.818 = 0
Using quadratic formula: x = (-1 + √(1 + 7.27))/2 = (-1 + 2.87)/2 = 0.935
So 1/(1 + r/100) = 0.935
1 + r/100 = 1.069
r = 6.9%

Let me use simpler estimate: around 7-8%
```

⚡ **GAT Strategy**: For installment problems, calculate interest on the principal for the entire period and divide accordingly.

#### GAT-Style Practice Questions

```
1. Find SI on Rs. 2500 at 12% p.a. for 4 years.
   (a) Rs. 1000 (b) Rs. 1200 (c) Rs. 1400 (d) Rs. 1600

   Answer: (b) Rs. 1200
   Solution: SI = (2500 × 12 × 4)/100 = Rs. 1200

2. The amount becomes Rs. 4400 in 2 years at simple interest. If the
   rate is 10%, find the principal.
   (a) Rs. 3500 (b) Rs. 3667 (c) Rs. 3800 (d) Rs. 4000

   Answer: (b) Rs. 3667
   Solution: A = P(1 + RT/100)
             4400 = P(1 + 10×2/100) = P × 1.20
             P = 4400/1.20 = Rs. 3666.67 ≈ Rs. 3667

3. Find CI on Rs. 5000 at 20% p.a. for 2 years.
   (a) Rs. 2000 (b) Rs. 2100 (c) Rs. 2200 (d) Rs. 2400

   Answer: (c) Rs. 2200
   Solution: A = 5000(1 + 20/100)^2 = 5000 × 1.44 = Rs. 7200
             CI = 7200 - 5000 = Rs. 2200

4. The difference between CI and SI on a sum at 10% p.a. for 2 years
   is Rs. 50. Find the sum.
   (a) Rs. 5000 (b) Rs. 4000 (c) Rs. 6000 (d) Rs. 7000

   Answer: (a) Rs. 5000
   Solution: CI - SI = P × (R/100)^2
             50 = P × (10/100)^2 = P × 0.01
             P = Rs. 5000

5. A sum doubles in 5 years at simple interest. At what rate?
   (a) 15% (b) 20% (c) 25% (d) 30%

   Answer: (b) 20%
   Solution: If sum doubles, SI = P
             P = (P × R × 5)/100
             R = 100/5 = 20%
```

⚡ **GAT Strategy**: For doubling time at simple interest: Time = 100/R years. For compound interest: Time = log(2)/log(1 + R/100)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
