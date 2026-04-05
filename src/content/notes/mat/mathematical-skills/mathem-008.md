---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-008
topicName: Simple & Compound Interest
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Simple & Compound Interest

### 🟢 Lite — Quick Review

Simple and Compound Interest problems test your understanding of how money grows over time. The distinction is fundamental: in Simple Interest (SI), the interest is calculated on the original principal only, year after year. In Compound Interest (CI), the interest from each period is added back to the principal, so subsequent interest is calculated on an ever-growing base. The MAT Quantitative section frequently includes 2–4 questions from this topic, often as comparative problems (which yields more? how much more?), instalment-based questions, or depreciation problems framed as reverse interest calculations.

The three variables for SI are:

$$\text{SI} = \frac{P \times R \times T}{100}$$

Where $P$ is the principal, $R$ is the annual rate per cent, and $T$ is the time in years.

The compound interest formula derives from applying this growth repeatedly:
$$\text{Amount} = P\left(1 + \frac{R}{100}\right)^T, \quad \text{CI} = P\left[\left(1 + \frac{R}{100}\right)^T - 1\right]$$

For the same principal, rate, and time exceeding one year, CI is always greater than SI — the excess grows as either the rate or the time increases. For 2 years at rate $R\%$, the difference between CI and SI is:

$$\Delta = P \times \frac{R^2}{10000}$$

⚡ **MAT exam tip:** When a question states "interest compounded half-yearly" or "quarterly," you must halve the rate and double the time periods accordingly. A stated rate of 12% p.a. compounded half-yearly means $R = 6\%$ per half-year for $2T$ periods. Instalment problems under SI can often be solved by finding total amount first and dividing by number of instalments, whereas CI instalments require solving an equation.

---

### 🟡 Standard — Regular Study

#### Simple Interest — Worked Examples

**Formula:** $\text{SI} = \frac{P \times R \times T}{100}$

**Total amount:** $A = P + \text{SI} = P\left[1 + \frac{RT}{100}\right]$

**Derived formulas:**
$$P = \frac{\text{SI} \times 100}{R \times T}, \quad R = \frac{\text{SI} \times 100}{P \times T}, \quad T = \frac{\text{SI} \times 100}{P \times R}$$

**Example 1:** ₹12,000 invested at 7.5% p.a. for 3 years.
$$\text{SI} = \frac{12000 \times 7.5 \times 3}{100} = \frac{12000 \times 22.5}{100} = ₹2{,}700$$
$$A = 12000 + 2700 = ₹14{,}700$$

**Example 2:** At what rate will ₹8,000 become ₹9,200 in 2 years (simple interest)?
$$\text{SI} = 9200 - 8000 = ₹1{,}200$$
$$R = \frac{1200 \times 100}{8000 \times 2} = \frac{120000}{16000} = 7.5\%$$

#### Compound Interest — Periods and Rates

**Annual compounding (default in most MAT problems):**
$$\text{Amount} = P\left(1 + \frac{R}{100}\right)^T$$

**Half-yearly compounding:** Rate per period $= \frac{R}{2}$, Number of periods $= 2T$:
$$\text{Amount} = P\left(1 + \frac{R}{200}\right)^{2T}$$

**Quarterly compounding:** Rate per period $= \frac{R}{4}$, Number of periods $= 4T$:
$$\text{Amount} = P\left(1 + \frac{R}{400}\right)^{4T}$$

**Monthly compounding:** Rate per period $= \frac{R}{12}$, Number of periods $= 12T$:
$$\text{Amount} = P\left(1 + \frac{R}{1200}\right)^{12T}$$

**Example:** ₹25,000 invested at 12% p.a. compounded half-yearly for $1\frac{1}{2}$ years.
$$R_{\text{half-year}} = 6\%, \quad \text{periods} = 3$$
$$\text{Amount} = 25000 \times (1.06)^3 = 25000 \times 1.191016 = ₹29{,}775.40$$

**Year-by-year breakdown for annual compounding:**

Principal ₹10,000, Rate 10% p.a., Time 2 years:
- End of Year 1: ₹10,000 × 1.10 = ₹11,000
- End of Year 2: ₹11,000 × 1.10 = ₹12,100
- CI = ₹12,100 − ₹10,000 = **₹2,100**

By SI: SI = $\frac{10000 \times 10 \times 2}{100} = ₹2{,}000$
Difference = ₹100 = $P \times \frac{R^2}{10000} = 10000 \times \frac{100}{10000}$ ✓

#### SI vs CI Comparison Table

| Time | SI (₹) | CI (₹) | Difference (₹) |
|------|--------|--------|----------------|
| 1 year | 1,000 | 1,000 | 0 |
| 2 years | 2,000 | 2,100 | 100 |
| 3 years | 3,000 | 3,310 | 310 |
| 4 years | 4,000 | 4,641 | 641 |

(Based on P = ₹10,000, R = 10% p.a.)

The CI–SI gap accelerates with time because CI is exponential while SI is linear.

#### Instalment Problems

**Simple Interest instalments (straightforward):**
A冰箱 priced at ₹18,000 is bought on hire purchase at 10% SI for 2 years, paid in 2 equal annual instalments.

Total SI = $\frac{18000 \times 10 \times 2}{100} = ₹3{,}600$
Total amount = ₹21,600
Each instalment = ₹10,800

**Compound Interest instalments (requires equation):**
₹20,000 borrowed at 10% p.a. compounded annually, repaid in 2 equal annual instalments of ₹$x$.

After 1 year: Amount = $20000 \times 1.1 = ₹22{,}000$
After paying instalment $x$: Outstanding = $22000 - x$
After 2nd year: $(22000 - x) \times 1.1 = x$
$$24200 - 1.1x = x \implies 2.1x = 24200 \implies x = \frac{24200}{2.1} \approx ₹11{,}523.81$$

**Common mistakes:** Confusing SI and CI formulas in instalment problems. Failing to adjust the rate and period when interest is compounded more frequently than annually. Using simple average of rates when rates change mid-period instead of computing separately for each period.

---

### 🔴 Extended — Deep Study

#### Effective Annual Rate (EAR)

When the same nominal rate is compounded at different frequencies, the Effective Annual Rate differs. This matters when comparing investment options.

$$\text{EAR} = \left(1 + \frac{R_{\text{nominal}}}{n}\right)^n - 1$$

Where $n$ = number of compounding periods per year.

**Example:** Compare 12% p.a. compounded (a) monthly vs (b) quarterly.
- Monthly: $\text{EAR} = (1 + 0.12/12)^{12} - 1 = (1.01)^{12} - 1 \approx 0.1268 = 12.68\%$
- Quarterly: $\text{EAR} = (1 + 0.12/4)^4 - 1 = (1.03)^4 - 1 \approx 0.1255 = 12.55\%$

Monthly compounding yields a higher effective rate. Always compare EAR when deciding between options with different compounding frequencies.

#### Population Growth and Depreciation

These follow the compound interest formula but describe different phenomena.

**Population growth:** $P_n = P_0\left(1 + \frac{R}{100}\right)^n$

**Example:** A town's population of 75,000 grows at 4% per annum. Population after 5 years:
$$P_5 = 75000 \times (1.04)^5 = 75000 \times 1.2166529 \approx 91{,}249$$

**Depreciation (value decline):** Uses a negative growth rate:
$$P_n = P_0\left(1 - \frac{R}{100}\right)^n$$

**Example:** A machine costing ₹2,00,000 depreciates at 15% per year. Value after 4 years:
$$V_4 = 200000 \times (0.85)^4 = 200000 \times 0.52200625 = ₹1{,}04{,}401$$

#### Variable Rate Problems

**Simple Interest with changing rates:**
₹15,000 invested at 8% p.a. for 2 years, then 11% p.a. for the next 3 years:
$$\text{SI} = \frac{15000 \times 8 \times 2}{100} + \frac{15000 \times 11 \times 3}{100} = 2400 + 4950 = ₹7{,}350$$

**Compound Interest with changing rates:**
₹30,000 at 10% p.a. for 2 years, then 15% p.a. for 1 year:
$$\text{Amount} = 30000 \times (1.10)^2 \times (1.15) = 30000 \times 1.21 \times 1.15 = ₹41{,}745$$

#### Rule of 72 and Rule of 69

These are approximation formulas for estimating doubling time:

$$\text{Years to double} \approx \frac{72}{R} \quad (\text{Rule of 72, for annual compounding})$$

| Rate | Approximate years | Exact years |
|------|-------------------|-------------|
| 6% | 12.0 | 11.9 |
| 8% | 9.0 | 9.0 |
| 9% | 8.0 | 8.0 |
| 12% | 6.0 | 6.1 |

The Rule of 69 (more accurate for continuous compounding): $\frac{69}{R} + 0.35 \approx$ years to double.

**Practical uses:**
- Investment at 8% doubles in approximately 9 years
- Population at 2% growth doubles in approximately 36 years
- Debt at 18% interest doubles in approximately 4 years (72/18 = 4)

#### EMI Formula

Equated Monthly Instalments (used by banks and housing finance companies):
$$\text{EMI} = \frac{P \times r \times (1+r)^n}{(1+r)^n - 1}$$

Where $r$ = monthly interest rate (annual rate ÷ 12 ÷ 100).

**Example:** Home loan of ₹10,00,000 at 9% p.a. for 20 years (240 months).
$$r = \frac{9}{12 \times 100} = 0.0075$$
$$(1+r)^{240} = (1.0075)^{240} \approx 6.0226$$
$$\text{EMI} = \frac{1000000 \times 0.0075 \times 6.0226}{6.0226 - 1} = \frac{45169.5}{5.0226} \approx ₹8,995}$$

Total payment = $8995 \times 240 = ₹21{,}58{,}800$
Interest paid = ₹10,58,800 on a ₹10,00,000 loan.

#### Practice Problems with Full Solutions

**Q1:** At what rate will ₹5,000 become ₹6,050 in 2 years at compound interest?
$$6050 = 5000 \times \left(1 + \frac{R}{100}\right)^2$$
$$\left(1 + \frac{R}{100}\right)^2 = \frac{6050}{5000} = 1.21$$
$$1 + \frac{R}{100} = 1.1 \implies R = 10\%$$

**Q2:** The CI on a sum at 10% for 2 years is ₹210. Find the SI.
For 2 years: Difference = $P \times \frac{R^2}{10000}$
$$210 = P \times \frac{100}{10000} = \frac{P}{100} \implies P = ₹21{,}000$$
$$\text{SI} = \frac{21000 \times 10 \times 2}{100} = ₹4{,}200$$

**Q3:** A sum doubles in 5 years at compound interest. In how many years will it become 8 times?
If amount doubles in 5 years: $(1 + R/100)^5 = 2$
To become 8 times: $(1 + R/100)^n = 8 = 2^3$
$$n = 5 \times 3 = 15 \text{ years}$$

**Q4:** A machine depreciates at 20% per year. Its value after 3 years is ₹51,200. Find original cost.
$$51200 = P \times (0.8)^3 = P \times 0.512$$
$$P = \frac{51200}{0.512} = ₹1{,}00{,}000$$

**Q5:** ₹10,000 invested at 15% p.a. compound interest. After how many years will it become ₹40,000?
$$40000 = 10000 \times (1.15)^n \implies 4 = (1.15)^n$$
$$\log 4 = n \cdot \log 1.15 \implies n = \frac{0.6021}{0.0607} \approx 9.9 \approx 10 \text{ years}$$

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
