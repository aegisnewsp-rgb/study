---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-004
topicName: "Risk & Return"
tier: standard
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw a two-panel risk-return diagram: (left panel) show a normal distribution of returns with mean μ and standard deviation σ labelled; shade the area representing downside risk (semi-deviation). (right panel) show Security Market Line (SML) with Y-axis intercept = Rf, slope = (Rm - Rf), and three stocks plotted: high-beta stock above the SML (undervalued), market portfolio on the SML, and low-beta stock below the SML (overvalued). Show Beta on X-axis from 0 to 2."
country: India
generated: ai-v1
---



## Risk & Return

### Concept Explanation

Let me explain this using a simple real-life comparison. A Bank Fixed Deposit (FD) at 7% is virtually risk-free — you will almost certainly receive exactly 7% over the year. But an equity share of Tata Motors might give you +30% in a good year, -40% in a bad year, or anything in between. Which would you prefer? The answer depends on your risk appetite — but finance theory gives us a rigorous way to measure and price this trade-off.

**Total Risk has two components:**

**1. Systematic Risk (market risk, non-diversifiable risk):** This is risk that affects the entire market — recessions, interest rate hikes by RBI, geopolitical events, inflation shocks. NO amount of diversification can eliminate this. When RBI hikes the repo rate, almost every stock falls because higher discount rates reduce the Present Value of future earnings. This risk is measured by **Beta (β)**.

**2. Unsystematic Risk (company-specific risk, diversifiable risk):** This affects only one company or industry — a mining company finds a new deposit, a pharma company wins a drug patent, or a bank's IT system fails. This risk CAN be eliminated by holding a diversified portfolio. A well-diversified investor doesn't get paid for taking unsystematic risk because it's easily avoidable.

This is the核心 insight of the **Capital Asset Pricing Model (CAPM)**: only systematic risk matters for pricing, because rational investors will diversify away the rest.

**The CAPM Formula:**

$$E(R_i) = R_f + \beta_i \times (R_m - R_f)$$

Where:
- **E(Rᵢ)** = Expected return on asset i
- **R_f** = Risk-free rate (typically 10-year G-Sec yield or 91-day T-Bill rate)
- **βᵢ** = Beta of the asset (sensitivity to market movements)
- **R_m** = Expected market return
- **(R_m - R_f)** = Market Risk Premium (MRP) — the extra return investors demand for taking on market risk

Think of it this way: the **Rf** term compensates you for the time value of money (waiting). The **β(Rm - Rf)** term compensates you for the systematic risk you're taking. If an asset has Beta = 0 (like a pure insurance contract uncorrelated with markets), you earn only Rf. If an asset has Beta = 2.0, you're taking twice the market risk and should earn twice the market risk premium above Rf.

**Beta — Understanding It Intimately:**

- **β = 1.0**: Asset moves exactly with the market. If Sensex goes up 10%, this stock goes up 10%.
- **β = 1.5**: Aggressive. If Sensex falls 10%, this stock falls 15% — amplifies market moves by 50%.
- **β = 0.5**: Defensive. If Sensex falls 10%, this stock falls only 5% — it cushions market blows.
- **β = 0**: Completely uncorrelated with market (like gold in some periods).
- **β < 0**: Negatively correlated — moves opposite to market (rare, used in hedging).

**Standard Deviation (σ):**

Beta measures only systematic risk, but **Standard Deviation** measures total risk (systematic + unsystematic). For a well-diversified investor, only systematic risk matters, so Beta is the relevant metric. For a single-stock investor (or one who hasn't diversified), σ tells the full risk story.

$$\sigma = \sqrt{\frac{\sum_{i=1}^{n}(R_i - \bar{R})^2}{n}}$$

Where Rᵢ are historical returns and R̄ is the mean return.

**Sharpe Ratio — The Risk-Adjusted Return Measure:**

The Sharpe Ratio answers: "How much return do I get per unit of total risk I take?"

$$\text{Sharpe Ratio} = \frac{R_p - R_f}{\sigma_p}$$

Where Rₚ is portfolio return and σₚ is portfolio standard deviation. A Sharpe Ratio of 1.0 means the portfolio earns 1% excess return (above risk-free) for every 1% of volatility. The Nifty 50 index historically has a Sharpe Ratio around 0.5-0.7 for long periods. A Sharpe above 1.0 is excellent.

### Key Terms & Definitions

| Term | Definition |
|------|------------|
| Systematic Risk | Market-wide risk (recession, rate changes) that cannot be eliminated by diversification |
| Unsystematic Risk | Company/industry-specific risk that CAN be eliminated through diversification |
| Beta (β) | Measure of systematic risk; sensitivity of an asset's returns to market returns |
| CAPM | Capital Asset Pricing Model: E(Rᵢ) = Rf + βᵢ(Rm - Rf) |
| Market Risk Premium (MRP) | The extra return investors demand for bearing market risk over the risk-free rate |
| Standard Deviation (σ) | Measure of total risk — how much returns deviate from the mean on average |
| Variance (σ²) | Square of standard deviation; measures dispersion in squared return units |
| Sharpe Ratio | (Rp - Rf) / σp — return per unit of total risk; higher is better |
| Jenson's Alpha | Actual portfolio return - CAPM expected return; positive alpha = outperformance |
| Semi-Deviation | Downside risk measure; considers only returns below a target/threshold |

### Real-World Example (RBI Context)

Consider how RBI's Monetary Policy Committee (MPC) decisions affect different bank stocks differently through Beta:

When RBI unexpectedly raised the repo rate by 50 bps in December 2022:
- **HDFC Bank (β ≈ 1.1)**: Expected stock impact = 1.1 × (-50 bps on sector) ≈ -55 bps. HDFC's stock fell about 4% in the following week — partly rate concerns, partly sector concerns.
- **ICICI Bank (β ≈ 1.2)**: Fell more — about 5-6% in the same period.
- ** PSU Banks (lower β ≈ 0.8)**: Fell less — around 2-3%.

Meanwhile, **Tata Power (β ≈ 1.8, energy transition theme)**: Actually rose despite the rate hike because its growth story was driven by renewable energy capex — Beta was less relevant than the company-specific growth narrative.

This illustrates that Beta is useful but not sufficient — you also need to understand the company's specific fundamentals.

### Exam Pattern / How It Appears

- **Numerical questions**: Calculate expected return using CAPM given Rf, Beta, and Rm; calculate Beta from covariance/market variance data; compute Sharpe Ratio
- **Conceptual questions**: "Why is Beta more relevant than Standard Deviation for a diversified investor?" or "What does a negative Sharpe Ratio mean?"
- **Interpretation questions**: Given two portfolios with same return but different Sharpe Ratios, identify the better portfolio
- **Application**: Given historical return data, calculate variance and standard deviation

### Step-by-Step Example

**Q:** You are constructing a two-asset portfolio. Asset A has Expected Return = 15%, Standard Deviation = 20%, Weight = 60%. Asset B has Expected Return = 10%, Standard Deviation = 12%, Weight = 40%. The correlation coefficient (ρ) between A and B is 0.3. Calculate: (a) Portfolio Expected Return, (b) Portfolio Standard Deviation.

**Answer:**

**(a) Portfolio Expected Return:**

$$E(R_p) = w_A \times E(R_A) + w_B \times E(R_B)$$
$$E(R_p) = 0.60 \times 15\% + 0.40 \times 10\% = 9\% + 4\% = 13\%$$

Simple weighted average — diversification doesn't change expected return in this simple model.

**(b) Portfolio Standard Deviation:**

The key formula for two-asset portfolio variance:

$$\sigma_p^2 = w_A^2 \sigma_A^2 + w_B^2 \sigma_B^2 + 2 w_A w_B \rho_{AB} \sigma_A \sigma_B$$

**Step 1:** Calculate each component:
- w_A² σ_A² = (0.60)² × (0.20)² = 0.36 × 0.04 = 0.0144
- w_B² σ_B² = (0.40)² × (0.12)² = 0.16 × 0.0144 = 0.002304
- 2 w_A w_B ρ σ_A σ_B = 2 × 0.60 × 0.40 × 0.3 × 0.20 × 0.12 = 2 × 0.24 × 0.3 × 0.024 = 0.003456

**Step 2:** Sum of components:
$$\sigma_p^2 = 0.0144 + 0.002304 + 0.003456 = 0.02016$$

**Step 3:** Take square root:
$$\sigma_p = \sqrt{0.02016} = 0.142 = 14.2\%$$

**Interpretation**: The portfolio has an expected return of 13% with a standard deviation of 14.2%. Compare this to holding only Asset A (15% return, 20% σ) — you got lower return BUT also lower risk, showing the benefit of diversification. The portfolio's σ (14.2%) is LESS than the weighted average of individual σs (0.60 × 20% + 0.40 × 12% = 16.8%) — this reduction from 16.8% to 14.2% is the diversification benefit.
