---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-004
topicName: "Risk & Return — Deep Dive"
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw an advanced multi-factor risk framework: (centre) a risk assessment dashboard showing: (top-left) Security Market Line with CAPM equation and stock positions; (top-right) Efficient Frontier with Capital Market Line tangent from Rf to the market portfolio; (bottom-left) Risk decomposition showing systematic vs unsystematic risk with Beta, Standard Deviation, and Diversifiable risk labelled; (bottom-right) Sharpe Ratio comparison table for three portfolios with implied risk-adjusted performance scores. Show how all four concepts interconnect with arrows."
country: India
generated: ai-v1
---



## Risk & Return — Deep Dive

### Concept Deep Dive

The theory of risk and return didn't emerge from a vacuum — it was forged in the fires of market crashes. The 1929 Wall Street Crash revealed that naive investors had no framework for understanding why their diversified portfolios still collapsed. The Great Depression stimulated academic research into market behaviour. Harry Markowitz's 1952 paper on Portfolio Selection formalised what wise investors had always known intuitively: diversification works because not all risks are equal.

Markowitz showed that by combining assets with less-than-perfect correlation, you can reduce portfolio risk without sacrificing expected return — the "only free lunch in finance." The mathematical framework he created (Mean-Variance Optimization) is the foundation of modern portfolio theory. His key insight: the risk of a portfolio depends not just on individual asset risks but on how those assets' returns move together (covariance/correlation).

William Sharpe then extended Markowitz's work to develop **CAPM in 1964**, answering the question: "If everyone follows Markowitz's optimal diversification, what is the equilibrium expected return of each asset?" His answer: only systematic risk (Beta) matters, because unsystematic risk gets diversified away in the market portfolio. The equilibrium price of risk follows a linear relationship — the **Security Market Line (SML)**.

In the Indian context, CAPM is applied with adjustments: the **Risk-Free Rate** is typically the 10-year G-Sec yield (currently around 6.8-7.0% as of early 2025) or the 91-day T-Bill rate for very short-term calculations. The **Market Return** is usually taken as the expected return on the Nifty 50 index. The **Market Risk Premium** for India — the extra return Indian equities have historically earned over the risk-free rate — is around 6-7% based on historical data, though forward-looking estimates using dividend discount models might suggest 5-6%.

**Beta Estimation in Practice:**

Beta is estimated using linear regression: regressing the stock's returns against market returns over a historical period (typically 2-5 years of monthly data):

$$\beta_i = \frac{\text{Cov}(R_i, R_m)}{\text{Var}(R_m)} = \rho_{im} \times \frac{\sigma_i}{\sigma_m}$$

Where:
- Cov(Rᵢ, Rₘ) = Covariance between stock returns and market returns
- Var(Rₘ) = Variance of market returns
- ρᵢₘ = Correlation coefficient between stock and market
- σᵢ = Standard deviation of stock returns
- σₘ = Standard deviation of market returns

**Levered vs Unlevered Beta**: The Beta you observe for a company includes both business risk AND financial risk from its capital structure. To isolate pure business risk, analysts often calculate "Asset Beta" (unlevered) by removing the effect of debt:

$$\beta_{\text{Asset}} = \frac{\beta_{\text{Equity}}}{1 + (1-t) \times D/E}$$

This is critical when comparing companies with different capital structures — an Indian telecom company with high debt will have a higher Equity Beta than a zero-debt software company even if their underlying businesses have identical business risk.

### Advanced Analysis

**Beyond CAPM — Multi-Factor Models:**

CAPM's single-factor (market) model has been empirically challenged. The **Fama-French Three Factor Model (1992)** adds two factors:
- **SMB (Small Minus Big)**: Returns of small-cap stocks minus large-cap stocks
- **HML (High Minus Low)**: Returns of high book-to-market stocks minus low book-to-market stocks

$$E(R_i) = R_f + \beta_1 R_m + \beta_2 \text{SMB} + \beta_3 \text{HML} + \alpha_i$$

In India, studies show the Fama-French factors explain more return variation than CAPM alone. The NSE has published data showing SMB and HML premia exist in Indian markets, though with smaller magnitudes than in the US.

More recently, **Carhart's Four-Factor Model** adds a momentum factor (WML — Winners Minus Losers), and Chen, Roll, and Ross identified macroeconomic factors (industrial production, inflation, term structure, credit risk) that price assets.

**Sharpe Ratio — Advanced Considerations:**

The standard Sharpe Ratio uses standard deviation as the risk measure, which treats upside and downside volatility equally. This is problematic for asymmetric return distributions. Alternative measures:

**Sortino Ratio**: Uses only downside deviation (semi-deviation) — only returns below the target/threshold are penalised. This is more appropriate for investors who care about bad volatility more than good volatility:

$$\text{Sortino Ratio} = \frac{R_p - R_f}{\text{Downside Deviation}}$$

Where Downside Deviation = √[Σ(min(Rₚ - T, 0)²] / n

Where T is the target return (often taken as Rf or zero).

**Conditional Sharpe Ratio (CVaR-based)**: Uses Expected Shortfall (Average VaR) instead of standard deviation — captures tail risk better.

**Jenson's Alpha — Practical Applications:**

Jenson's Alpha directly measures manager skill:
- **Alpha > 0**: Fund manager delivered returns above what CAPM predicted given the fund's Beta — outperformance after adjusting for market risk
- **Alpha = 0**: Fund performed exactly as expected given its risk level — no skill (or bad luck cancels good luck)
- **Alpha < 0**: Fund underperformed on a risk-adjusted basis

In Indian mutual funds, studies (including by SEBI's Research Department) have shown that most actively managed equity funds deliver negative alpha over long periods after fees — passive index funds that match the market at low cost often outperform. This is the "Alpha is zero or negative for most active managers" finding that has driven the passive investing revolution in India (AUM of index funds grew from ₹1.5 lakh crore in 2020 to over ₹5 lakh crore by 2024).

**Value-at-Risk (VaR):**

VaR became a standard risk measure after the 1990s financial crises. It answers: "What is the maximum loss we can expect with X% confidence over N days?" A 1-day VaR of ₹100 crore at 99% confidence means: on 99% of days, the loss will be less than ₹100 crore. RBI mandates that banks maintain capital against market risk using the VaR framework under Basel III's Market Risk Regulations.

Three methods for calculating VaR:
1. **Historical Simulation**: Use actual historical returns to simulate the distribution
2. **Variance-Covariance (Parametric)**: Assume normal distribution and calculate using σ
3. **Monte Carlo Simulation**: Simulate thousands of scenarios using random number generation

### RBI-Specific Coverage

For RBI Grade B exam, understanding risk metrics is critical because:

1. **Banks' Investment Portfolios**: Banks hold huge G-Sec portfolios (required under SLR and for trading). The market risk on these portfolios is measured using Duration, Modified Duration, and VaR. When yields rise, bond prices fall — Duration measures exactly how much. A bank with ₹10 lakh crore in G-Secs and a modified duration of 5 years faces a mark-to-market loss of approximately 5% (5 years × 1% yield increase) = 5% × ₹10 lakh crore = ₹50,000 crore on its portfolio.

2. **Capital Adequacy under Basel III**: Banks must hold capital against market risk using the Standardised Approach or Internal Models Approach (IMA). The IMA allows banks to use their own VaR models to calculate capital requirements — RBI reviews these models during on-site inspections. The capital charge is typically 3× the 10-day 99% VaR (plus stress VaR).

3. **Systemic Risk Monitoring**: RBI's Financial Stability Report monitors the system's aggregate VaR exposure and uses stress testing — deliberately shocking market variables to see how bank balance sheets would hold up under adverse scenarios (e.g., "what if yields spike 200 bps overnight?").

4. **Mutual Fund Risk Classification**: SEBI mandates that mutual funds classify schemes as "High Risk," "Moderately High Risk," etc. based on the scheme's computed Volatility Metric (based on monthly returns over the last 3 years). This uses standard deviation to help retail investors understand risk.

### Case Study / Application

**LTCG Tax Change and Market Reaction (2018)**:

In the Union Budget 2018, the government introduced Long-Term Capital Gains (LTCG) tax of 10% on equity gains exceeding ₹1 lakh per year. The Nifty fell ~5.5% on the announcement day. But not all stocks fell equally:
- **High Beta stocks (β > 1.5)**: Fell more — these are typically growth stocks whose future earnings are priced in using high discount rates; higher taxes on future cash flows hit them harder
- **Low Beta stocks (β < 0.8)**: Fell less — defensive stocks like FMCG, pharma were relatively stable
- **Index heavyweights with high weightage (Reliance, HDFC Bank)**: Fell significantly simply due to their large market capitalisation creating automatic index movement

The correlation structure of the market also shifted — during the initial panic, correlations between stocks spiked (everything fell together regardless of fundamentals). This is a classic "risk-off" scenario where diversification temporarily fails exactly when investors need it most — one of the key insights from the 2008 global financial crisis.

### GATE-Level Numerical

**Q:** You are the risk manager at an Indian asset management company. Your fund has the following characteristics:
- Current Value: ₹500 crore
- Monthly Returns (last 6 months): +3%, -2%, +5%, -4%, +1%, -1%
- Risk-Free Rate (monthly): 0.5% (annualised ~6%)
- The market portfolio over the same period had: Mean monthly return = 2%, Standard Deviation = 4%

(a) Calculate the portfolio's monthly expected return and standard deviation
(b) Calculate Jenson's Alpha (annualised)
(c) Calculate the Sharpe Ratio (annualised)
(d) Given the fund's Beta is 0.8, and the correlation between fund and market is 0.75, confirm the Beta using the formula β = ρ × (σᵢ/σₘ)

**Answer:**

**(a) Portfolio Expected Return and Standard Deviation:**

**Step 1: Calculate Mean Monthly Return:**
$$\bar{R}_p = \frac{3\% + (-2)\% + 5\% + (-4)\% + 1\% + (-1)\%}{6} = \frac{2\%}{6} = 0.333\% \text{ per month}$$

**Step 2: Calculate Portfolio Variance:**
$$R_{p,i} - \bar{R}_p = [+2.667, -2.333, +4.667, -4.333, +0.667, -1.333]$$

$$(R_{p,i} - \bar{R}_p)^2 = [7.111, 5.444, 21.778, 18.778, 0.444, 1.778]$$

$$\sum(R_{p,i} - \bar{R}_p)^2 = 55.333$$

$$\sigma_p^2 = \frac{55.333}{6} = 9.222\%$$

$$\sigma_p = \sqrt{9.222} = 3.037\% \text{ per month}$$

**(b) Jenson's Alpha (monthly, then annualised):**

**Monthly Expected Return (CAPM):**
$$E(R_p) = R_f + \beta(R_m - R_f) = 0.5\% + 0.8 \times (2\% - 0.5\%) = 0.5\% + 0.8 \times 1.5\% = 0.5\% + 1.2\% = 1.7\%$$

**Monthly Alpha:**
$$\alpha = \text{Actual} - \text{Expected} = 0.333\% - 1.7\% = -1.367\% \text{ per month}$$

**Annualised Alpha:**
$$\alpha_{\text{annual}} = -1.367\% \times 12 = -16.4\% \text{ per year}$$

This portfolio significantly underperformed on a risk-adjusted basis.

**(c) Sharpe Ratio (annualised):**

**Annualised Portfolio Return:** 0.333% × 12 = 4.0%
**Annualised Portfolio σ:** 3.037% × √12 = 3.037% × 3.464 = 10.52%
**Annualised Risk-Free Rate:** 6.0%

$$\text{Sharpe Ratio} = \frac{4.0\% - 6.0\%}{10.52\%} = \frac{-2.0\%}{10.52\%} = -0.19$$

Negative Sharpe Ratio — the fund underperformed the risk-free rate on a risk-adjusted basis. A simple FD would have been better.

**(d) Beta Confirmation:**

$$\beta = \rho \times \frac{\sigma_p}{\sigma_m} = 0.75 \times \frac{3.037\%}{4.0\%} = 0.75 \times 0.759 = 0.569$$

Wait — this gives a different Beta of 0.569 vs 0.8 given. Let me reconcile:

The Beta of 0.8 is calculated from the regression over the full historical period. The implied Beta from correlation and volatility is:

$$\beta_{\text{implied}} = \frac{\text{Cov}(R_p, R_m)}{\sigma_m^2} = \rho \times \frac{\sigma_p}{\sigma_m} = 0.75 \times \frac{3.037}{4.0} = 0.569$$

The discrepancy suggests the 0.8 Beta was estimated from a longer historical period, or the recent 6-month period is not representative. In practice, risk managers use longer windows (2-3 years) for Beta estimation.

**If we use the implied Beta 0.569:**
$$E(R_p) = 0.5\% + 0.569 \times 1.5\% = 0.5\% + 0.854\% = 1.354\% \text{ per month}$$
$$\alpha = 0.333\% - 1.354\% = -1.021\% \text{ per month} = -12.25\% \text{ per year}$$

Even with the lower Beta, alpha is substantially negative — this fund is underperforming significantly.

### Multiple Perspectives

- **Academic view**: The CAPM is theoretically elegant but empirically challenged. The Roll Critique (1977) argues that since the "true" market portfolio is unobservable, CAPM can never be truly tested. Empirically, low-beta stocks have been shown to outperform on a risk-adjusted basis in many markets (the "Low-Volatility Anomaly") — contradicting CAPM's prediction that higher Beta leads to higher return. In India, the HNI (High Net Worth Individual) and retail investor preference for high-beta mid/small cap stocks over long periods suggests either irrational behaviour or that the Indian market has structural factors that invalidate simple CAPM assumptions.
- **RBI/Regulatory view**: RBI uses a combination of capital adequacy requirements, liquidity ratios (LCR, NSFR), and stress testing to manage systemic risk — these go beyond individual asset pricing models. SEBI requires mutual funds to disclose standard deviation, Sharpe Ratio, and Beta in scheme offer documents — these standardised risk metrics help retail investors compare funds.
- **Practical/Industry view**: Portfolio managers use Factor Models (Fama-French, Carhart) for return attribution — after accounting for market, size, value, and momentum exposures, what alpha remains? Genuine alpha (unexplained return) is what justifies active management fees. In practice, most active Indian equity fund managers struggle to generate positive alpha net of fees over 3-5 year periods.

### Recent Developments (2024-2026)

- **RBI's Stricter VaR Norms for Banks (2024)**: RBI issued revised guidelines on the use of Internal Models Approach (IMA) for market risk capital calculation, aligning more closely with Basel III standards. Banks must now calculate Stressed VaR using a 12-month stress period in addition to regular VaR.
- **Rise of Passive Investing and Alpha Challenges**: The share of passive equity funds in total mutual fund AUM in India crossed 25% by 2024, raising questions about market efficiency and active manager viability — consistent with the global finding that most active managers underperform their benchmark.
- **Algo Trading and Risk Management**: SEBI's 2024 framework for algorithmic trading requires brokers to implement circuit breakers and kill switches — risk management tools that automatically halt trading when losses exceed thresholds, directly applying VaR-like concepts to operational risk.
- **ESG Factors in Risk Assessment**: RBI's discussion paper on integration of climate-related financial risks (Climate Risk Disclosure Framework) introduces the concept of "greenium" — the possibility that ESG-compliant portfolios may have different risk-return characteristics than traditional portfolios.
- **G-Sec Market Development**: The introduction of new G-Sec categories (including the 7-year G-Sec for retail investors) and RBI Retail Direct scheme has brought retail investors into the fixed income market, making interest rate risk management (Duration, Modified Duration concepts) more relevant for individual investors.
