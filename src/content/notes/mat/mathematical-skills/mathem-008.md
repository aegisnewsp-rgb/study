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

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Simple and Compound Interest are fundamental financial mathematics topics tested in MAT Quant. Simple Interest (SI) calculates interest on the original principal only, while Compound Interest (CI) calculates on accumulated value. MAT frequently asks comparative questions and applications in profit-loss and instalment problems.

**Key formulas:**
- SI = (P × R × T) / 100
- CI = P(1 + R/100)^T - P
- Amount = Principal + Interest

**Exam tip:** For the same principal, rate, and time, CI > SI. The difference between CI and SI grows with time. Remember: compound interest is calculated on the previous year's amount, not the original principal.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Simple Interest

**Formula:**
Simple Interest = (Principal × Rate × Time) / 100

**Components:**
- Principal (P): The initial amount borrowed or invested
- Rate (R): Rate of interest per year (unless specified otherwise)
- Time (T): Time period in years

**Derived formulas:**
- P = (SI × 100) / (R × T)
- R = (SI × 100) / (P × T)
- T = (SI × 100) / (P × R)

**Total Amount (A):**
A = P + SI = P + (P×R×T)/100 = P[1 + (R×T)/100]

**Example:**
Principal = ₹5,000, Rate = 8% per annum, Time = 3 years
SI = (5000 × 8 × 3) / 100 = 1200
Amount = 5000 + 1200 = ₹6,200

#### Compound Interest

**Formula:**
Amount = P × (1 + R/100)^T
Compound Interest = Amount - Principal

**When interest is compounded half-yearly:**
Rate per half-year = R/2, Time = 2T periods
Amount = P × (1 + R/200)^(2T)

**When interest is compounded quarterly:**
Rate per quarter = R/4, Time = 4T periods
Amount = P × (1 + R/400)^(4T)

**When interest is compounded monthly:**
Rate per month = R/12, Time = 12T periods
Amount = P × (1 + R/1200)^(12T)

**Example:**
Principal = ₹10,000, Rate = 10% per annum, Time = 2 years, compounded annually
Year 1: Amount = 10000 × 1.1 = ₹11,000
Year 2: Amount = 11000 × 1.1 = ₹12,100
CI = 12100 - 10000 = ₹2,100
Or use formula: 10000 × (1.1)² - 10000 = 12100 - 10000 = ₹2,100

#### SI vs CI Comparison

**Relationship:**
For the same Principal (P), Rate (R), and Time (T):
- SI = (P × R × T) / 100
- CI = P[(1 + R/100)^T - 1]

CI is always greater than SI for T > 1 year and R > 0.

**Difference between CI and SI after T years:**
Difference = P[(1 + R/100)^T - 1] - (P×R×T)/100

For 2 years specifically:
CI for 2 years = P[(1 + R/100)² - 1] = P[2R/100 + R²/10000]
SI for 2 years = P × 2R/100
Difference = P × R²/10000

**Example:** P = ₹10,000, R = 10%, T = 2 years
SI = 10000 × 10 × 2 / 100 = ₹2,000
CI = 10000 × [(1.1)² - 1] = 10000 × 0.21 = ₹2,100
Difference = ₹100

**This ₹100 difference = P × (R²/10000) = 10000 × 100/10000 = ₹100**

#### Instalment Problems

**When a loan is repaid in equal instalments:**

Each instalment contains part of principal + interest on outstanding balance.

**Formula for equal annual instalments:**
If a debt of P is paid in n annual instalments at rate R%:
Instalment = P × [R/100] / [1 - (100/(100+R))^n]

Or: P = Instalment × [1 - (100/(100+R))^n] / [R/100]

**Example:**
A TV worth ₹20,000 is bought on instalments at 10% per annum simple interest. It is to be paid in two equal yearly instalments. Find the instalment amount.

Total interest = 20000 × 10 × 2 / 100 = ₹4,000
Total amount payable = 20000 + 4000 = ₹24,000
Each instalment = 24000/2 = ₹12,000

But for compound interest instalments:
Let instalment = x
After 1 year: Amount = 20000 × 1.1 = 22000
After paying x: 22000 - x
After 2nd year: (22000 - x) × 1.1 = x
22000 × 1.1 - 1.1x = x
24200 = 2.1x
x = 11523.81

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Population Growth Problems

**Similar to compound interest formula:**

Population after n years = P × (1 + R/100)^n

**Example:**
A city's population is 50,000 and grows at 5% per annum. What will it be after 3 years?
= 50000 × (1.05)³ = 50000 × 1.157625 = 57,881 ≈ 57,881

**Depreciation (opposite):**
Value after n years = P × (1 - R/100)^n

**Example:**
A car worth ₹8,00,000 depreciates at 10% per year. Value after 3 years:
= 800000 × (0.9)³ = 800000 × 0.729 = ₹5,83,200

#### Interest with Changing Rates

**When rate changes mid-period:**

Example: ₹5,000 at 8% for first 2 years and 10% for next 3 years (simple interest):
SI = (5000 × 8 × 2)/100 + (5000 × 10 × 3)/100
= 800 + 1500 = ₹2,300

For compound interest with changing rates:
Amount = P × (1 + R1/100)^t1 × (1 + R2/100)^t2

Example: ₹10,000 at 10% for 2 years, then 20% for 1 year (compound):
= 10000 × 1.1² × 1.2 = 10000 × 1.21 × 1.2 = ₹14,520

#### Effective Annual Rate

**When nominal rate is compounded more frequently:**

Effective Annual Rate (EAR) = (1 + Nominal/n)^n - 1

Where n = number of compounding periods per year

Example: 12% per annum compounded monthly:
EAR = (1 + 0.12/12)^12 - 1 = (1.01)^12 - 1 ≈ 0.1268 = 12.68%

**For comparing investments:**
Always compare EAR, not nominal rates, when compounding frequencies differ.

#### Compound Interest — Special Cases

**Rule of 72:**
To estimate years to double: 72 / R ≈ years
At 9% = 72/9 = 8 years (exact: 8.04 years)

**Rule of 69:**
More accurate for continuous compounding:
69 / R ≈ years to double

**Growth vs doubling:**
- Population at 2% growth: 72/2 = 36 years to double
- Money at 12% growth: 72/12 = 6 years to double

#### Equated Monthly Instalments (EMI)

**EMI formula (used by banks):**
EMI = P × r × (1 + r)^n / [(1 + r)^n - 1]

Where:
- P = Principal loan amount
- r = monthly interest rate (annual rate/12)
- n = number of monthly instalments

**Example:**
Loan = ₹1,00,000, Rate = 12% per annum, n = 12 months
r = 12/(12×100) = 0.01
EMI = 100000 × 0.01 × (1.01)^12 / [(1.01)^12 - 1]
(1.01)^12 ≈ 1.1268
EMI = 1000 × 1.1268 / 0.1268 ≈ 8885

Total payment = 8885 × 12 = ₹1,06,620
Interest paid = ₹6,620

#### Practice Problems

Q1: At what rate will ₹5,000 become ₹6,050 in 2 years at compound interest?
Solution: 6050 = 5000 × (1 + R/100)²
(1 + R/100)² = 6050/5000 = 1.21
1 + R/100 = 1.1
R = 10%

Q2: The CI on a sum at 10% for 2 years is ₹210. Find the SI.
Solution: Difference = P × R²/10000
210 = P × 100/10000 = P/100
P = ₹21,000
SI = 21000 × 10 × 2 / 100 = ₹4,200

Q3: A sum doubles in 5 years at compound interest. In how many years will it become 8 times?
Solution: If it doubles in 5 years: (1 + R/100)^5 = 2
To become 8 times: (1 + R/100)^n = 8 = 2³
n = 5 × 3 = 15 years

Q4: A machine depreciates at 20% per year. Its value after 3 years is ₹51,200. Find original cost.
Solution: 51200 = P × (0.8)³ = P × 0.512
P = 51200/0.512 = ₹1,00,000

Q5: ₹10,000 is invested at 15% p.a. compound interest. After how many years will it become ₹40,000?
Solution: 40000 = 10000 × (1.15)^n
4 = (1.15)^n
log 4 = n × log 1.15
n = log 4 / log 1.15 = 0.6021 / 0.0607 ≈ 9.9 ≈ 10 years

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
