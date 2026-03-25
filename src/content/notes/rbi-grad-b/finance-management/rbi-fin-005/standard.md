---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-005
topicName: Portfolio Management
tier: standard
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Two-panel diagram: (Left) Efficient frontier curve with minimum variance portfolio labeled, individual assets inside the frontier, and optimal portfolio at tangency point with Capital Market Line. (Right) Security Market Line showing positive linear relationship between Beta and Expected Return, with market portfolio at beta=1."
country: India
generated: ai-v1
---



## Portfolio Management

### Concept Explanation

Let me give you the real picture of portfolio management — not the textbook version, but what actually matters for your exam and your career in banking.

Harry Markowitz, in his 1952 paper, asked a deceptively simple question: if you hold multiple assets together, can the combined risk be lower than the sum of individual risks? The answer is yes — and the entire modern investment management industry is built on this insight. The magic word is **correlation**. When assets don't move in perfect lockstep, combining them cancels out some of the bumps.

Here's the Markowitz framework in plain terms: every asset has an expected return and a risk (measured by standard deviation of returns). When you combine assets, the portfolio's overall return is the weighted average of individual returns — simple enough. But risk doesn't combine so simply. Because assets aren't perfectly correlated, some of their risks cancel each other out.

The **efficient frontier** is the set of portfolios that give you the maximum possible return for any given level of risk. Anything inside the frontier is suboptimal — you're leaving money on the table. The leftmost point on the frontier is the **minimum variance portfolio** — the portfolio with the lowest possible risk regardless of return.

Now here's where it gets interesting for banking: the **Capital Market Line (CML)** represents optimal portfolios that combine the risk-free asset (government securities) with the market portfolio. The **Security Market Line (SML)** is different — it relates expected return to systematic risk (beta), and applies to individual securities, not just portfolios.

The **Sharpe Ratio** is your practical tool: it tells you how much return you're getting per unit of total risk. Higher Sharpe = better risk-adjusted performance. This is exactly how mutual fund rankings work in India.

### Key Terms & Definitions
| Term | Definition |
|------|------------|
| Expected Return (μ) | Mean return of an asset or portfolio over a period |
| Standard Deviation (σ) | Measure of total risk (volatility of returns) |
| Variance | Square of standard deviation; measures dispersion of returns |
| Correlation (ρ) | Measure of how two assets move together; ranges from −1 to +1 |
| Covariance | Statistical measure of how two assets co-vary (positive = move together) |
| Efficient Frontier | Set of optimal portfolios offering highest return for a given risk |
| Minimum Variance Portfolio | Portfolio with lowest possible risk on the efficient frontier |
| Systematic Risk | Market risk that cannot be diversified away (beta risk) |
| Unsystematic Risk | Company-specific risk that CAN be diversified away |
| Beta (β) | Measure of systematic risk; sensitivity of asset to market movements |
| Sharpe Ratio | (Return − Risk-free rate) / Standard Deviation |
| Capital Market Line | Line from risk-free asset tangent to efficient frontier |
| Security Market Line | Expected return = Rf + β(Rm − Rf) |
| Two-Fund Theorem | Optimal portfolio = combination of risk-free asset + market portfolio |

### Real-World Example (RBI Context)
When HDFC Asset Management launches a new balanced fund, they apply Markowitz principles to blend equity shares (high risk, high return) with Government of India bonds (low risk, low return). The fund manager picks the mix that sits on the efficient frontier — maximizing return for the fund's chosen risk level. SEBI requires all mutual funds to disclose portfolio risk metrics including standard deviation and beta, which are direct applications of Markowitz mean-variance analysis.

### Exam Pattern / How It Appears
Expect conceptual questions on the difference between CML and SML, numerical problems calculating portfolio variance given correlation, and definition-based questions on systematic vs unsystematic risk. Case studies may describe a bank portfolio and ask which assets to combine to reduce risk.

### Step-by-Step Example
**Q:** Asset A has expected return 15% and standard deviation 20%. Asset B has expected return 10% and standard deviation 12%. The correlation between A and B is 0.3. If you invest 60% in A and 40% in B, what is the portfolio's expected return and variance?

**Answer:**
Portfolio Expected Return = (0.6 × 15%) + (0.4 × 10%) = 9% + 4% = **13%**

Portfolio Variance = (0.6)²(0.20)² + (0.4)²(0.12)² + 2(0.6)(0.4)(0.3)(0.20)(0.12)
= 0.36 × 0.04 + 0.16 × 0.0144 + 2 × 0.6 × 0.4 × 0.3 × 0.024
= 0.0144 + 0.002304 + 0.003456
= **0.02016**

Portfolio Standard Deviation = √0.02016 = **14.2%**
