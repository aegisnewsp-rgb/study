---
exam: rbi-grad-b
examName: RBI Grade B
subject: economics-social-issues
subjectName: Economics & Social Issues
topic: rbi-esi-006
topicName: "Banking & Financial Inclusion — Deep Dive"
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "An advanced system architecture diagram: Payment stack layers (customer → app → UPI/NPCI → bank accounts), inclusion spectrum (unbanked → aided → active), and RBI's three-dimensional FI-Index radar chart"
country: India
generated: ai-v1
---



## Banking & Financial Inclusion — Deep Dive

### Concept Deep Dive

India's financial inclusion journey has three distinct phases. The **first phase (1940s-1990s)** was branch-led — nationalization of banks in 1969 followed by the social lending mandate (priority sector lending, 30% to agriculture) drove branch expansion. By 1990, India had one of the world's largest bank branch networks by sheer numbers, but rural outreach was superficial — many branches served few customers, and the actual unbanked population remained massive.

The **second phase (2005-2014)** began with the Khan Commission (2004) and the Satyam story (frivolous lending without monitoring), leading to RBI's push for financial literacy and the Banking Correspondent (BC) model. The BC model — people like Bank Mitras in villages — extended the bank's reach without building branches. However, BCs were often under-trained, under-compensated, and prone to fraud. The model worked in pockets but didn't scale uniformly.

The **third phase (2014-present)** is technology-led and the most transformative. Jan Dhan broke all records — 50 million accounts opened in the first year alone, reaching 100 million by April 2015. The scheme was deliberately political: it used political will and administrative pressure to force banks into a mass enrollment drive. The same energy then powered UPI's rollout. What makes UPI remarkable isn't just the technology — it's that India built it on top of existing banking infrastructure rather than replacing it, which is what most fintech disruptions try to do.

**Offline banking** is the frontier now. In areas with poor connectivity (rural interiors, trains, metro tunnels), online verification fails. RBI's **interoperability framework for offline transactions** (2022) allows small-value offline payments (up to ₹500 per transaction, ₹2000 per day) using UPI-lite — where the phone stores a value token locally and syncs when connectivity returns. This is critical for including the last mile.

### Advanced Analysis

**Why RuPay matters beyond nationalism**: Visa and Mastercard charge roughly 1-2% per transaction, with cross-border fees adding more. For a country processing billions of small-value transactions (₹50 bus fare, ₹20 vegetable purchase), these fees are prohibitive at scale. RuPay charges a fraction — making ₹10 transaction economically viable. RuPay also processes domestic transactions entirely within India, keeping data主权 (data sovereignty) intact. This became particularly relevant after 2020 data protection concerns globally.

**UPI's extraordinary growth** is worth understanding structurally: from 1 billion transactions in 2017 to 20+ billion monthly by 2024-25 — the fastest payment system growth in any country by volume. The Peer-to-Peer (P2P) model of UPI lowered the barrier to digital payments so dramatically that street vendors, autorickshaw drivers, and vegetable sellers adopted it. The government reinforced this with policy: GST refunds, tax refunds, and all government payments moved to UPI/BHIM. BHIM app specifically was launched as a trust mark — government-branded, simple interface — though the broader UPI ecosystem now includes PhonePe, Paytm, Google Pay, and bank apps.

**BC model challenges**: Business Correspondents are a critical link but a fragile one. They earn per transaction (typically ₹10-20 per account opened, small per-transaction fees), not a salary. This means they have incentive to open accounts but not to educate customers or ensure meaningful usage. Fraud by BCs — fake accounts, siphoned subsidies — has been a persistent problem, requiring better monitoring and technological solutions (Aadhaar eKYC, biometric authentication).

### RBI-Specific Coverage

RBI's **Board for Financial Supervision** oversees the health of the BC network. RBI's **Financial Inclusion Advisory Committee** meets quarterly to assess progress. The **FI-Index** (launched RBI Annual Report 2021) is calculated using three sub-indices:
- **Access** (weight 35%): bank branches per lakh population, ATMs, BCs, PoS terminals
- **Usage** (weight 35%): outstanding credit to GDP ratio, deposit accounts per capita, transaction volume
- **Quality** (weight 30%): financial literacy, accessibility of services, satisfaction

RBI also monitors **digital payment statistics** monthly — UPI volumes, card transactions, NEFT/RTGS — and publishes these in its **Quarterly Statistics on Payments**. The **Payment and Settlement Systems Vision 2025** document sets targets for digital payments to reach 80% of all transactions by volume.

### Case Study / Application

**DBT as a Financial Inclusion Success Story**: The Direct Benefit Transfer ecosystem started with LPG subsidy (PAHAL scheme, 2014) — replacing 4 subsidised cylinders per year with cash transfer to Jan Dhan accounts. The logic: pay people cash, let them buy at market price, remove the subsidy burden from government and oil companies. Savings from DBT (leakage reduction in kerosene, food, fertilizer subsidies) have been estimated at ₹1.7 lakh crore since 2013-14. The DBT-Aadhaar Payment Bridge (DAPB) links Aadhaar numbers to bank accounts, enabling real-time identity verification and payment routing. This is now the backbone of MGNREGA wages, PM-KISAN (farmer income support), and PM Vishwakarma (scheme for artisans).

### GATE-level Numerical
**Q:** If a village has 500 households, and Jan Dhan accounts cover 400 of them, but only 200 have RuPay cards and only 80 have made at least one UPI transaction in the last month, calculate: (a) Account penetration rate, (b) Active usage rate (UPI transactions as proxy).

**Answer:**
(a) Account penetration = 400 / 500 × 100 = **80%**

(b) Active usage rate = 80 / 400 × 100 = **20%** of opened accounts, or **16%** of total households

Interpretation: While 80% account penetration is strong, only 20% of those accounts show meaningful usage — indicating the gap between "opened" and "included." This is why RBI's FI-Index also measures quality, not just access.

### Multiple Perspectives
- **Academic view**: Financial inclusion without financial literacy is debt trap potential, not empowerment. Abhijit Banerjee and Duflo's work (Poor Economics) shows that the poor are sophisticated financial managers but need tailored products, not just scaled-up urban products. Formal inclusion helps only if products match needs.
- **RBI/Regulatory view**: Inclusion is necessary but must not compromise KYC norms or lead to fraud. RBI's tiered KYC (minimum KYC for small accounts, full eKYC for higher limits) tries to balance access and safety. The ₹20,000 cash deposit limit for Jan Dhan accounts without full KYC reflects this balance.
- **Practical/Industry view**: For fintechs, Jan Dhan opened a 500-million-customer market but monetisation is tough — average revenue per user (ARPU) is low. UPI's free model means fintechs make money on merchant payments, loan referrals, and insurance distribution, not on the payment itself.

### Recent Developments (2024-2026)
- **UPI 123** launched — enables offline UPI payments via USSD even without smartphones; critical for feature phone users in rural India
- **RBI's Payment Vision 2025** targets 80% digital payments by transaction volume; cross-border UPI integration ongoing with Sri Lanka, UAE, Singapore (UPI-PayNow linkage operational)
- **₹2 lakh crore digital payments milestone**: UPI crossed ₹2 lakh crore monthly transaction value in FY2025
- **FI-Index March 2025**: Updated to 66.4 (improving from 64.2 in March 2024), with significant improvement in rural access sub-index
- **RBI's 2024 report on Financial Inclusion**: noted that 290 million Jan Dhan accounts are women-owned (55%+), confirming gender-positive targeting
