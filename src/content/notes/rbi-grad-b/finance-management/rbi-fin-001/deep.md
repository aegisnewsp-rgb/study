---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-001
topicName: Financial Markets — Deep Dive
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw an advanced layered diagram of the Indian Financial System showing: (1) Top layer — RBI as the central regulator with monetary policy tools (CRR, SLR, Repo/Reverse Repo); (2) Middle layer split into Money Market (T-Bills, CPs, Call Money, CBLO, LAF) and Capital Market (Primary: IPO/FPO/Rights, Secondary: BSE/NSE with cash/derivatives segments, Depositories: NSDL/CDSL); (3) Bottom layer showing participants: Banks, Corporates, MFs, Foreign Investors, Retail. Add arrows showing fund flows."
country: India
generated: ai-v1
---



## Financial Markets — Deep Dive

### Concept Deep Dive

India's financial market architecture has evolved dramatically since liberalisation. Before 1991, the system was heavily controlled — interest rates were administered, credit was rationed, and the distinction between money and capital markets was blurry because everything ran through the same state-owned banking system. The Narasimham Committee reports (1991 and 1998) laid the blueprint for the modern two-tier market structure we have today.

The **Money Market** is RBI's primary operational arena. Its core function is to provide a mechanism for banks to manage their day-to-day liquidity shortfalls. When a bank receives a large deposit withdrawal but has lent out most of its money, it doesn't collapse — it goes to the call money market to borrow overnight. RBI sits above this as the ultimate lender/borrower of last resort through its Liquidity Adjustment Facility (LAF). The LAF has three corridors: the **Marginal Standing Facility (MSF)** at 100 basis points above the repo rate (banks can borrow up to 2% of their NDTL here using SLR securities), the **Repo** (standard liquidity injection), and the **Reverse Repo** (liquidity absorption). When the system is in deficit, call money rates tend to trade above the repo rate; when surplus, they trade below. RBI actively manages this spread.

The **Capital Market** ecosystem has three pillars: the **stock exchanges** (NSE and BSE), the **depositories** (NSDL and CDSL), and the **clearing corporations** (NSCCL for NSE, ICCL for BSE). NSE's equity cash segment alone processes millions of trades daily with a T+1 settlement cycle. The **derivatives segment** — covering index futures, stock futures, index options, and stock options — has dwarfed the cash segment in terms of turnover. In recent years, the launch of **Interest Rate Futures (IRF)** has allowed banks and institutions to hedge duration risk, bringing the money market and capital market closer together functionally.

The **primary market** underwent a structural shift with SEBI's overhaul of the IPO process — from the old "book building" approach to the modern "fixed price + book building" hybrid, and now increasingly digitised ASBA (Application Supported by Blocked Amount) processes that eliminate the need for refund mechanics. The 2019-2021 IPO boom saw-record issuances from companies like LIC (₹21,000 crore in 2022), Paytm, and LIC HFL, demonstrating the market's capacity to absorb enormous volumes.

### Advanced Analysis

From a theoretical perspective, financial markets serve three functions simultaneously: **price discovery** (what is the fair value of capital?), **liquidity provision** (can you exit an investment quickly without price impact?), and **risk transfer** (can you shift risk to someone more willing to bear it?). The money market excels at liquidity; the capital market excels at price discovery and risk-sharing through diversified portfolios.

RBI's dual role is unique — it operates both in the money market (as a participant through LAF) and regulates the broader financial system. SEBI, established in 1992, took over from the Controller of Capital Issues to regulate the securities market. The **Fintech disruption** has blurred traditional boundaries: **UBI (Unified Payments Interface)** handles real-time retail payments, **RuPay** competes with Visa/Mastercard, and **NFOs (New Fund Offers)** from mutual funds have become a popular investment vehicle that competes with traditional bank deposits. The **T+1 settlement** migration (implemented from October 2023 for BSE, earlier for NSE) has reduced counterparty risk and freed up capital that was previously locked in the settlement cycle.

The **G-Sec market** deserves special attention because it straddles both money and capital markets — short-term G-Secs (up to 1 year) trade like money market instruments while long-term G-Secs (10, 15, 30 years) are capital market instruments. RBI conducts Open Market Operations (OMO) — buying and selling G-Secs — as a supplementary liquidity management tool. When RBI buys G-Secs from banks, it injects liquidity directly into the banking system.

### RBI-Specific Coverage

For the RBI Grade B exam, examiners expect you to understand the **transmission mechanism** — how changes in RBI's policy rate ripple through the entire financial market. When RBI raises the repo rate:
1. Banks' cost of funds rises → deposit rates eventually increase
2. Call money rates move up (short-term impact)
3. G-Sec yields rise (bond prices fall — inverse relationship)
4. Equity market may correct (higher discount rate reduces present value of future earnings)
5. Bank credit growth may slow (demand for loans reduces)
6. Inflation expectations moderate (the ultimate objective)

You must also know that RBI uses **qualitative and quantitative tools**: the quantitative tools are CRR, SLR, and Repo/Reverse Repo; the qualitative tools include Margin Requirements, Credit Ceiling directives, and moral suasion (speeches and circulars).

### Case Study / Application

**The September 2019 IL&FS Crisis**: Infrastructure Leasing & Financial Services (IL&FS), a systemically important NBFC, defaulted on its debt obligations in September 2018. This sent shockwaves through the Indian financial system. The immediate impact:
- CP market froze as investors stopped rolling over short-term paper
- Mutual funds that had invested heavily in IL&FS faced redemption pressure
- RBI had to step in as liquidity provider of last resort
- The RBI Act was amended (via the FRDI Bill discussions, though not passed) to create a bail-in mechanism

Lessons for exam: This case demonstrates why understanding the money market's interconnectedness matters — an NBFC default rippled into the CP market, then into mutual funds, then into systemic liquidity. It validated RBI's later push for stricter NBFC regulations (the Scale-Based Regulation framework launched in 2021).

### GATE-Level Numerical

**Q:** The RBI conducts a repo auction where it injects ₹50,000 crore for 3 days at a repo rate of 6.5%. A bank participates and borrows ₹1,000 crore. Calculate the interest the bank must pay on maturity (day 3).

**Answer:**

**Step 1:** Identify the formula

$$\text{Interest} = \text{Principal} \times \text{Rate} \times \frac{\text{Days}}{365}$$

**Step 2:** Apply values

$$\text{Interest} = ₹1,000 \text{ crore} \times 6.5\% \times \frac{3}{365}$$

$$\text{Interest} = 1{,}000 \times 0.065 \times 0.008219 = ₹5.34 \text{ crore}$$

**Step 3:** Amount repaid on Day 3

$$\text{Total Repayment} = ₹1{,}000 + ₹5.34 = ₹1{,}005.34 \text{ crore}$$

**Answer: The bank pays ₹5.34 crore as interest; total repayment is ₹1,005.34 crore**

Note: In practice, repo transactions are calculated on an actual/365 basis, and the collateral (G-Secs) is marked-to-market daily to protect against default risk.

### Multiple Perspectives

- **Academic view**: Financial markets reduce information asymmetry (signalling theory), improve allocative efficiency, and allow risk-sharing across time horizons. The Modigliani-Miller theorem assumes perfect markets — Indian markets deviate significantly due to taxes, bankruptcy costs, and asymmetric information.
- **RBI/Regulatory view**: Financial stability is paramount. RBI monitors systemic risk through the **Financial Stability Report (FSR)** and uses tools like the **Capital Conservation Buffer (CCB)** to ensure banks can absorb shocks. SEBI focuses on investor protection and market integrity through disclosure-based regulation.
- **Practical/Industry view**: Market participants care about liquidity, transaction costs, and price efficiency. Foreign Institutional Investors (FIIs) represent ~20% of Indian equity market capitalisation — their flows significantly impact rupee-dollar dynamics and domestic liquidity.

### Recent Developments (2024-2026)

- **RBI's T+1 Settlement Success**: By 2025, the T+1 settlement cycle for equity trades was fully operational across both BSE and NSE, significantly reducing systemic risk from settlement failures
- **Unified Lending Interface (ULI)**: RBI's 2024 initiative to create a frictionless credit delivery platform, analogous to UPI for retail lending
- **RBI Retail Direct Scheme Expansion (2024-25)**: Retail investors can now directly purchase G-Secs through the RBI portal, deepening the government securities market
- **SEBI's Rationalisation of Derivative Contract Tenures (2024)**: SEBI introduced shorter-duration derivative contracts to improve hedging efficiency for intraday participants
- **Integration of Aadhaar Enabled Payment System (AePS) with Financial Markets**: Expanding digital financial inclusion by linking payment infrastructure with market access
