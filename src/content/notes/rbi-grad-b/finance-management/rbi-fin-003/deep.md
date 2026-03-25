---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-003
topicName: "Balance Sheet & Financial Statement Analysis — Deep Dive"
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw an advanced financial statement analysis pyramid: (top) ROE as apex; (second tier) three pillars of DuPont: Net Profit Margin (efficiency), Asset Turnover (productivity), Equity Multiplier (leverage); (third tier) beneath each pillar show sub-ratios: for Margin → Gross Margin, Operating Margin, Net Margin; for Turnover → Receivable Turnover, Inventory Turnover, Asset Turnover; for Leverage → Debt Ratio, Interest Coverage; (bottom) base items from Income Statement and Balance Sheet that feed into each ratio. Show arrows from raw numbers to ratios to ROE."
country: India
generated: ai-v1
---



## Balance Sheet & Financial Statement Analysis — Deep Dive

### Concept Deep Dive

The story of financial statement analysis in India is inseparable from the story of banking regulation. When British colonial banks like Bank of Hindustan and Bank of Madras failed in the 19th century, the RBI was created in 1935 specifically to provide a stable banking infrastructure. But the real transformation came post-independence nationalisations (1969 and 1980) — suddenly the government owned most of the banking system, and the concept of rigorous financial statement analysis was sometimes subordinated to political objectives.

The **1991 Narasimham Committee** changed everything. It exposed that Indian banks were sitting on massive NPAs (Non-Performing Assets) — loans that weren't being repaid — but these weren't being properly recognised in balance sheets because of "evergreening" (banks would lend to a borrower just enough to pay interest on existing loans, hiding the problem). The Committee recommended transparent asset classification, provisioning norms, and capital adequacy requirements — the foundations of modern Indian bank balance sheet analysis.

**Understanding the Bank Balance Sheet specifically:**

A bank's balance sheet differs from a regular company's in critical ways:

On the **Assets side**, the most important items are:
- **Cash and Balances with RBI**: Physically held cash + statutory reserves (CRR). CRR is held with RBI and earns no interest (penalty rate since RBI pays no interest on CRR balances as of 2023-24)
- **Investments (SLR + non-SLR)**: G-Secs held to comply with SLR requirement (18% of NDTL) plus trading and banking book investments
- **Loans and Advances**: The core earning asset — broken down into performing (standard) assets and non-performing assets (NPAs) classified as sub-standard, doubtful, or loss assets

On the **Liabilities side**, the dominant item is **Deposits** (current, savings, term deposits — CASA being the most prized because Current and Savings accounts pay low interest but provide stable funding). Banks also borrow from RBI via repo, from interbank markets, and raise equity capital.

The **CRR-SLR Mechanism Explained Fully:**

When RBI raises CRR, banks must hold more cash with RBI — this directly reduces their lendable resources. For example, if CRR increases from 4% to 4.5% on a bank with ₹10 lakh crore in NDTL, the bank must park an additional ₹50,000 crore with RBI — money that earns no return. This is the most direct liquidity withdrawal tool RBI has.

SLR is slightly different — it requires banks to hold a minimum percentage of their NDTL in specified assets (primarily G-Secs). SLR is both a liquidity tool and a way to ensure the government always has a captive market for its debt. When SLR increases, banks must buy more G-Secs, which reduces lendable resources and also supports government borrowing. Since 2022, RBI has been gradually reducing SLR from 18% toward an eventual 15%, freeing up bank resources for more productive lending.

**DuPont Analysis — Going Deeper:**

The three-factor DuPont model can be extended to five factors for greater diagnostic precision:

$$ROE = \underbrace{\frac{EBT}{EBT}}_{\text{Tax Burden}} \times \underbrace{\frac{EBT}{EBIT}}_{\text{Interest Burden}} \times \underbrace{\frac{EBIT}{\text{Revenue}}}_{\text{Operating Margin}} \times \underbrace{\frac{\text{Revenue}}{\text{Assets}}}_{\text{Asset Turnover}} \times \underbrace{\frac{\text{Assets}}{\text{Equity}}}_{\text{Financial Leverage}}$$

Where:
- **Tax Burden** = EBT/EBT = 1 (if no tax) or less than 1 if taxes exist; measures how much of pre-tax income is kept after tax
- **Interest Burden** = EBT/EBIT; measures the impact of debt on equity returns (lower when more debt)
- **Operating Margin** = EBIT/Revenue; pure operating efficiency
- **Asset Turnover** = Revenue/Assets; how efficiently assets are used to generate sales
- **Financial Leverage** = Assets/Equity; the equity multiplier

This extended DuPont tells you exactly where to intervene if ROE needs improvement. Is the company losing out on margins (cost problem)? Turnover is low (asset utilisation problem)? Leverage is too low (not using debt efficiently)? Or is interest expense crushing returns?

**Common-Size Statements and Trend Analysis:**

**Common-size balance sheet**: Express each item as a percentage of Total Assets. This lets you compare companies of different sizes. If HDFC Bank has Total Assets of ₹25 lakh crore and Axis Bank has ₹12 lakh crore, you can still meaningfully compare their composition — HDFC might show Loans at 55% of assets vs Axis at 52%, telling you HDFC is slightly more lending-focused.

**Common-size income statement**: Express each item as a percentage of Revenue. This immediately shows cost structure — Tata Motors might show COGS at 75% of revenue while Infosys shows 55% — reflecting the different nature of manufacturing vs software businesses.

**Trend analysis**: Track the same ratio over 5 years. If a company's Current Ratio has fallen from 2.0 to 1.1 over 5 years, that signals deteriorating liquidity — worth investigating further.

### Advanced Analysis

**Reading a Bank's Balance Sheet Through RBI's Lens:**

RBI's **Financial Stability Report (FSR)** and **Trend and Progress of Banking in India** publications provide system-level data. Key metrics RBI tracks:

1. **Capital Adequacy Ratio (CAR)**: Total Capital / Risk Weighted Assets. Under Basel III, minimum is 8% (plus CCB of 2.5% for Indian banks = 10.5% effective). Public sector banks have been raising capital via recapitalisation bonds and QIP routes.

2. **GNPA (Gross Non-Performing Assets) Ratio**: Total NPAs / Total Advances. This peaked at 11.5% for public sector banks in 2018 post-IL&FS/NBFC crisis. By 2024, it had improved to around 2.8% for the system — a remarkable cleanup driven by IBC resolutions and better lending practices.

3. **Provisioning Coverage Ratio (PCR)**: Provisions made as percentage of NPAs. Higher PCR means the bank is more conservative in loss estimation. RBI wants PCR above 70% for the system.

4. **Credit-Deposit (CD) Ratio**: Loans divided by Deposits. A high CD ratio (>75%) means the bank is aggressively lending and may face liquidity pressure; a very low CD ratio means weak credit demand. Post-COVID, India's CD ratio rose above 80% as credit demand outpaced deposit growth — a structural concern.

5. **Incremental Capital Output Ratio (ICOR)**: Measures how much additional capital is needed to produce one unit of additional GDP — used at macro level, not individual company level.

### RBI-Specific Coverage

For RBI Grade B examination, you must understand:

**CRR/SLR Impact on Bank Balance Sheets**: When RBI reduces CRR by 25 bps (0.25%), banks suddenly have more funds available for lending. This ₹000s of crores freed up gets transmitted through the economy as increased credit supply. Conversely, CRR hikes absorb liquidity. SLR reductions similarly free up G-Sec holdings that banks can now sell or use differently.

**Priority Sector Lending (PSL)**: Banks must lend 40% of their ANBC (Adjusted Net Bank Credit) to priority sectors (agriculture, MSMEs, education, housing). PSL certificates (PSLCs) allow banks to buy priority sector lending achievements from other banks — this creates a market that reflects the economic value of PSL compliance. Banks with cheap CASA deposits can easily meet PSL; banks with expensive wholesale funding find it cheaper to buy PSLCs.

**Asset Quality Review (AQR)**: RBI conducted an AQR in 2015-16 that forced banks to recognise all stressed assets honestly — this revealed the true NPA crisis in Indian banking (especially in power, steel, and road sectors). The result was a massive cleanup involving PCA (Prompt Corrective Action) frameworks for weak banks, recapitalisation, and IBC resolution.

### Case Study / Application

**Yes Bank Failure (2020)**: The Reserve Bank superseded Yes Bank's board in March 2020 due to serious financial irregularities and mounting bad loans. The RBI then orchestrated a reconstruction scheme that involved SBI and other banks subscribing to a ₹10,000 crore equity raise, and RBI granted a 30-month moratorium on deposit withdrawals. The balance sheet tells the story: Yes Bank had grown rapidly (CASA deposits rose, but so did contingent liabilities and derivative exposures), pursued aggressive lending to infrastructure and real estate without adequate NPA provisioning, and had a high concentration of large single borrower exposures violating Basel norms. The failure illustrates what happens when a bank's asset quality, capital adequacy, and liquidity simultaneously deteriorate.

### GATE-Level Numerical

**Q:** Tata Motors presents the following simplified financial data (₹ in crore):
- Revenue: ₹3,20,000
- COGS: ₹2,40,000
- Other Operating Expenses: ₹40,000
- Interest Expense: ₹12,000
- Tax Rate: 30%
- Total Assets: ₹4,00,000
- Current Liabilities: ₹80,000
- Shareholders' Equity: ₹1,60,000
- Inventories: ₹30,000
- Receivables: ₹50,000
- Cash: ₹20,000

Calculate: (a) Gross Profit Margin, (b) Net Profit Margin, (c) ROE using DuPont (5-factor decomposition), (d) Current Ratio, (e) Debt-Equity Ratio.

**Answer:**

**Step (a): Gross Profit Margin**
$$\text{Gross Profit} = ₹3{,}20{,}000 - ₹2{,}40{,}000 = ₹80{,}000$$
$$\text{Gross Profit Margin} = \frac{₹80{,}000}{₹3{,}20{,}000} \times 100 = 25\%$$

**Step (b): Net Profit Margin**
$$\text{EBIT (Operating Profit)} = ₹3{,}20{,}000 - ₹2{,}40{,}000 - ₹40{,}000 = ₹40{,}000$$
$$\text{EBT} = ₹40{,}000 - ₹12{,}000 = ₹28{,}000$$
$$\text{Taxes} = ₹28{,}000 \times 0.30 = ₹8{,}400$$
$$\text{Net Profit} = ₹28{,}000 - ₹8{,}400 = ₹19{,}600$$
$$\text{Net Profit Margin} = \frac{₹19{,}600}{₹3{,}20{,}000} \times 100 = 6.125\%$$

**Step (c): 5-Factor DuPont ROE**

$$ROE = \frac{\text{Net Profit}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Total Assets}} \times \frac{\text{Total Assets}}{\text{Equity}}$$

- Tax Burden = 19,600 / 28,000 = 0.700
- Interest Burden = 28,000 / 40,000 = 0.700
- Operating Margin = 40,000 / 3,20,000 = 0.125 (12.5%)
- Asset Turnover = 3,20,000 / 4,00,000 = 0.80×
- Equity Multiplier = 4,00,000 / 1,60,000 = 2.50×

$$ROE = 0.700 \times 0.700 \times 0.125 \times 0.80 \times 2.50 = 0.1225 = 12.25\%$$

Cross-check: ROE = Net Profit / Equity = 19,600 / 1,60,000 = 12.25% ✓

**Step (d): Current Ratio**
$$\text{Current Assets} = Inventories + Receivables + Cash = ₹30{,}000 + ₹50{,}000 + ₹20{,}000 = ₹1{,}00{,}000$$
$$\text{Current Ratio} = \frac{₹1{,}00{,}000}{₹80{,}000} = 1.25$$

**Step (e): Debt-Equity Ratio**
$$\text{Total Debt} = \text{Total Assets} - \text{Shareholders' Equity} - \text{Current Liabilities} = ₹4{,}00{,}000 - ₹1{,}60{,}000 - ₹80{,}000 = ₹1{,}60{,}000$$
$$\text{Debt-Equity Ratio} = \frac{₹1{,}60{,}000}{₹1{,}60{,}000} = 1.0$$

**Interpretation**: Tata Motors has 1:1 debt-to-equity, 25% gross margin but only 6.125% net margin (interest and taxes bite significantly), 12.25% ROE driven primarily by low asset turnover (0.8×) and moderate leverage (2.5× equity multiplier), and a current ratio of 1.25 which is somewhat tight for a capital-intensive manufacturing company.

### Multiple Perspectives

- **Academic view**: The Balance Sheet equation (A = L + E) is an accounting identity that must always hold — this is non-negotiable. The income statement is fundamentally about the transformation of inputs to outputs. Ratio analysis has limitations — industry averages can be misleading, and accounting policies vary significantly (IFRS vs Indian GAAP differences).
- **RBI/Regulatory view**: RBI's entire supervisory framework — the CAMELS rating (Capital adequacy, Asset quality, Management, Earnings, Liquidity, Sensitivity to market risk) — is built on financial statement analysis. The RBI Act mandates that banks submit regular returns showing exact compliance with CRR/SLR and capital adequacy norms. RBI's Risk Assessment Framework (RAF) uses off-balance sheet exposures and derivative positions to gauge systemic risk.
- **Practical/Industry view**: Credit rating agencies (CARE, CRISIL, ICRA) use financial ratios extensively. When rating an NBFC, they look at Net NPA %, Provisioning Coverage Ratio, and the mix of borrowings (bank lines vs NCDs vs CP). Investors use Price-to-Earnings (P/E) and Price-to-Book (P/BV) ratios. Analysts also look at "adjusted" or "improved" metrics that normalise for one-time items, accounting policy changes, or extraordinary gains/losses.

### Recent Developments (2024-2026)

- **RBI's Scale-Based Regulation (SBR) for NBFCs (2024)**: NBFCs are now categorised into four layers (Base, Middle, Upper, Top) with increasingly stringent capital and governance requirements. This changes how their balance sheets are analysed — upper layer NBFCs must comply with Basel III-like norms.
- **Revised Prompt Corrective Action (PCA) Framework (2024)**: RBI revised the PCA framework for banks with stricter thresholds on CRAR, NPAs, and profitability, making early intervention more responsive
- **IBPC and IBPS Mechanisms**: RBI introduced Interest Subvention schemes and Interest Equalisation scheme for MSME exporters — affecting the effective cost of credit and therefore bank income statement analysis
- **Proposed Basel III End-Phase Implementation**: Indian banks are preparing for full Basel III implementation, including the Liquidity Coverage Ratio (LCR) and Net Stable Funding Ratio (NSFR) — these add new dimensions to bank balance sheet analysis
- **RBI's 2024 Norms on Crypto Assets**: New disclosure requirements for banks handling crypto-related assets affect the off-balance sheet items in bank financial statements
