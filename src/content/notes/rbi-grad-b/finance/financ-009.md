---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: quant
subjectName: "Finance"
topic: financ-009
topicName: "Topic 9"
weight: 3
country: rbi
generated: "2026-03-25T17:00:00"
---

# Topic 9

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Risk-Return Tradeoff**: Higher potential returns come with higher risk; no free lunch in financial markets
- **Systematic Risk** (market risk) cannot be eliminated through diversification; affects all securities
- **Unsystematic Risk** (company-specific) can be reduced/eliminated by portfolio diversification
- **Beta (β)** measures systematic risk: β = Cov(Ri,Rm)/Var(Rm); Market β = 1
- **CAPM**: E(Ri) = Rf + β × (Km − Rf) — expected return increases with beta
- ⚡ In the CAPM equation, (Km − Rf) is the **Equity Risk Premium (ERP)** — India's ERP is ~6-8%

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Risk and Return — The Core of Modern Finance

Risk and return are inseparable concepts in finance. Every investment decision involves a tradeoff: higher potential returns come with higher risk. Understanding how to measure risk, price it, and build portfolios to manage it is fundamental for any finance professional, especially one at the RBI.

## Defining Return

**Simple Return:** R = (P₁ − P₀ + CF) / P₀

**Expected Return:** E(R) = Σ [Pi × Ri] — weighted average across all possible scenarios

**Example — Expected Return Calculation:**

| Scenario | Probability | Return |
|----------|-------------|--------|
| Boom | 25% | 30% |
| Normal | 50% | 12% |
| Recession | 25% | -10% |

E(R) = (0.25 × 30) + (0.50 × 12) + (0.25 × (−10))
     = 7.5 + 6.0 − 2.5 = **11%**

## Defining Risk — Measuring Volatility

Risk is measured by **variance** or **standard deviation** of returns:

**Variance (σ²)** = Σ [Pi × (Ri − E(R))²]

**Standard Deviation (σ)** = √Variance

For the above example:
- Boom: (30 − 11)² = 361
- Normal: (12 − 11)² = 1
- Recession: (−10 − 11)² = 441

σ² = (0.25 × 361) + (0.50 × 1) + (0.25 × 441) = 90.25 + 0.5 + 110.25 = **201**
σ = √201 = **≈ 14.18%**

Higher standard deviation = higher risk. Compare two assets with identical expected returns but different σ — the one with lower σ is preferred by rational investors.

## Two Types of Risk

### Unsystematic Risk (Diversifiable / Company-Specific)
- Affects a specific company or industry
- Examples: CEO death, factory fire, losing a major contract
- **Can be eliminated by diversification**: Combine assets with uncorrelated returns
- Modern Portfolio Theory shows that a 15-20 stock portfolio essentially eliminates unsystematic risk

### Systematic Risk (Non-Diversifiable / Market Risk)
- Affects the entire market (recessions, wars, policy changes)
- Examples: RBI policy rate hikes, global financial crises, pandemic
- **Cannot be eliminated through diversification**
- This is the risk that investors are compensated for

## Beta — Measuring Systematic Risk

**Beta (β)** measures how much a security moves relative to the overall market.

β = Covariance(Ri, Rm) / Variance(Rm)
β = ρi,m × (σi / σm)

**Interpreting Beta:**
- β = 1.0: Security moves exactly with the market
- β > 1.0: More volatile than market (aggressive/defensive upward and downward)
- β < 1.0: Less volatile than market (defensive)
- β = 0: No market risk (risk-free asset)
- β < 0: Moves opposite to market (rare, some inverse ETFs)

**Example:**
If Nifty 50 falls 10% and a stock falls 15%, that stock's β = 1.5. If it falls 5%, β = 0.5.

## The Capital Asset Pricing Model (CAPM)

CAPM prices systematic risk in equilibrium:

**E(Ri) = Rf + βi × (Km − Rf)**

Where:
- **Rf** = Risk-free rate (10-year G-Sec yield in India, ~7% as of 2024)
- **Km** = Expected market return
- **(Km − Rf)** = Equity Risk Premium (ERP)
- **βi** = Beta of security i

**Example — CAPM Calculation:**
Rf = 7%; Market return = 14%; Beta = 1.2
E(Ri) = 7% + 1.2 × (14% − 7%) = 7% + 1.2 × 7% = 7% + 8.4% = **15.4%**

India's Equity Risk Premium (ERP) is typically estimated at 6-8% based on historical data and implied ERP from market prices.

## Portfolio Return and Risk

**Portfolio Expected Return:** E(Rp) = Σ [wi × E(Ri)]

**Portfolio Variance** (two-asset portfolio):
σ²p = w²₁σ²₁ + w²₂σ²₂ + 2w₁w₂ρ₁₂σ₁σ₂

Where ρ = correlation coefficient between assets.

**Key Insight on Correlation:**
- ρ = +1.0: Assets move perfectly together — no diversification benefit
- ρ = 0.0: Assets uncorrelated — significant diversification benefit
- ρ = −1.0: Assets move perfectly opposite — risk can be completely eliminated

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## The Security Market Line (SML)

SML graphs the CAPM equation — expected return as a function of beta:

E(Ri) = Rf + βi × (Km − Rf)

- Securities **above the SML** are underpriced (buy signal)
- Securities **below the SML** are overpriced (sell signal)

## Sharpe Ratio — Risk-Adjusted Performance

**Sharpe Ratio** = (E(Rp) − Rf) / σp

Measures excess return per unit of total risk. Higher Sharpe ratio = better risk-adjusted performance.

**Example:**
Portfolio A: E(R) = 18%, σ = 25%, Rf = 7% → Sharpe = (18-7)/25 = 0.44
Portfolio B: E(R) = 14%, σ = 12%, Rf = 7% → Sharpe = (14-7)/12 = 0.58

Portfolio B has better risk-adjusted returns despite lower absolute returns.

## Arbitrage Pricing Theory (APT)

APT is an alternative to CAPM with multiple risk factors:

E(Ri) = Rf + βi1 × (λ1) + βi2 × (λ2) + ... + βik × (λk)

Where λ are risk premiums for each factor (inflation, industrial production, interest rates, etc.).

Unlike CAPM's single factor (market), APT allows multiple systematic factors — more flexible but requires identifying the factors.

## Risk Management Applications at RBI

RBI manages risk both as a regulator and as an institution:
- **Bank-level risk**: Credit risk (loan defaults), market risk (trading book losses), operational risk
- **RBI's risk management guidelines** require banks to maintain capital adequacy (Basel III) based on risk-weighted assets
- **Value at Risk (VaR)**: Maximum expected loss at a given confidence level over a specified horizon
  - 99% VaR of ₹100 crores over 1 day = 1% chance of losing more than ₹100 cr tomorrow

## Jensen's Alpha — Measuring Active Return

**Alpha (α)** = Actual Return − Expected Return (from CAPM)

α = E(Ri) − [Rf + βi × (Km − Rf)]

- Positive α: Fund outperformed benchmark given its risk level
- Negative α: Fund underperformed given its risk level

A fund with β = 1.2 and expected return of 15% that actually earns 17% has α = +2% — genuine active management skill.

## Key Exam Points for RBI Grade B

1. Understand the difference between systematic and unsystematic risk and how diversification affects each
2. Be able to calculate expected returns, variance, standard deviation, and beta from given data
3. Apply CAPM to find expected return and compare with required return
4. Understand the risk-return tradeoff — higher beta demands higher expected return
5. Portfolio concepts: correlation reduces risk; full diversification eliminates unsystematic risk

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
