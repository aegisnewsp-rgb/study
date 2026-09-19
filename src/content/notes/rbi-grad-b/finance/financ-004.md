---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: finance
subjectName: "Finance"
topic: financ-004
topicName: "Financial Inclusion and Digital Finance"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-19"
---

# Financial Inclusion and Digital Finance

### 🟢 Lite — Quick Review (1h–1d)
> What separates a topper from the rest in this topic is getting the institutional split right — RBI sets the rules, NPCI runs the rails, banks carry the balance sheet, BC-agents carry the geography.

**Financial Inclusion (FI)** means delivering savings, credit, remittance, insurance and pension services to low-income and vulnerable households through regulated mainstream institutions at an affordable, transparent cost. **Digital Finance** layers electronic channels — mobile phones, Aadhaar, UPI, CBDC — on top of that delivery so coverage scales without proportional branch expansion.

The exam turns on four names and one framework. Memorise the **PMJDY** package (zero-balance savings account, RuPay debit card, accident cover of ₹2 lakh and life cover of ₹1 lakh as per scheme design), the **Business Correspondent (BC)** model, **Payment Bank vs Small Finance Bank** rules, and **UPI** ownership (NPCI, not RBI). The framework is the **RBI FI Index** — a composite reading between 0 and 1 built from three dimensions: Access, Usage and Service Quality.

> 💡 **High-Yield Memory Hook (the PUSA + ABCS recall ladder):** **P**MJDY → **U**PI/CBDC → **S**FB & Payment Bank → **A**A (Account Aggregator) → **B**C-agent → **C**BDC pilots → **S**LBC. Read top-down for any MCQ on delivery rails; the order matches how RBI sequences its own Annual Report chapter.

| Pillar of FI (RBI committee view) | What it measures | Typical indicator |
|---|---|---|
| Access | Banking touchpoints per lakh population | Branches, BC-Agents, ATMs |
| Usage | Activity per account | Deposits, credit, digital transactions |
| Service Quality | Affordability and breadth | Insurance, pension, digital adoption % |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Two things matter here: why each FI instrument exists (the constraint it solves), and the boundary rules examiners love to flip (who can lend, who can hold money, who owns the rails).

#### The three-pillar model and the FI Index

The Khan Committee (2008) and Rangarajan Committee crystallised FI around three pillars — **Access, Usage and Service Quality** — that RBI has since codified into its annual **FI Index (0 to 1)**. The composite is the simple average of the three normalised sub-indices:

- **FI Index = ⅓ × (Access_index + Usage_index + Service_Quality_index)**
- Access covers banking outlets, BC-Agents and ATMs per lakh population.
- Usage covers deposit volumes, credit extended and transactions per account.
- Service Quality covers insurance, pension coverage and digital adoption percentage.

Each sub-index is **normalised to [0, 1]**, dimensionless. Higher means more inclusive. A common misconception: older questions (pre-2021) used only Access and Usage. After 2021–22 RBI splits Service Quality out as a separate third dimension — an option statement that drops "Service Quality" is now wrong even if it once read true.

#### PMJDY, BC model and the last-mile stack

**Pradhan Mantri Jan Dhan Yojana (PMJDY)** launched on 28 August 2014 and was re-launched on 15 August 2018 with expanded insurance covers. The package: a **zero-balance savings account**, **RuPay debit card**, accident insurance cover of ₹2 lakh and life cover of ₹1 lakh (per scheme design — verify current cover values against the latest PMJDY notification before the exam). A persistent trap: students write that PMJDY accounts earn no interest. They **do** earn interest at the prevailing savings bank rate; zero-balance refers to the minimum balance, not the interest treatment.

The **Business Correspondent (BC)** model extends the bank's reach through appointed retail agents equipped with micro-ATMs and handheld POS devices. Three boundary rules matter:

- The BC is an **agent of the bank**, not a lender in his own right. Disbursed loans sit on the **bank's** balance sheet.
- BC-Agent commission plus technology cost forms the numerator of the **Cost-to-Income Ratio** = (BC commission paid + tech cost) ÷ (Revenue from transactions), a unitless ratio examiners use to test viability.
- Customer Due Diligence (**CDD**) is performed by the bank; the BC may capture **e-KYC** data via Aadhaar or **Video-CYC**, but the regulated entity remains liable.

#### Small Finance Banks vs Payment Banks — the comparison matrix examiners love

| Feature | Small Finance Bank (SFB) | Payment Bank |
|---|---|---|
| Lending allowed | Yes — **75% of loans to Priority Sector** | **No lending permitted** |
| Maximum deposit per customer | ₹25 lakh | ₹2 lakh |
| Can issue PPI / debit cards | Yes | Yes |
| Can accept remittances | Yes | Yes (cap ₹25,000 per transaction in money transfer) |
| Minimum capital | ₹200 crore (initial); higher now | ₹100 crore (initial); higher now |
| Target segment | Small farmers, micro-industry, unorganised sector | Migrant labour, small businesses, remittance users |

Both SFB and Payment Bank licences were issued from 2015 onwards under RBI guidelines. The trap: students regularly write that Payment Banks can lend up to ₹1 lakh against deposits — they cannot lend at all.

#### UPI, CBDC and the digital rails

**UPI** is a real-time P2P/P2M payment system built and operated by **NPCI** (National Payments Corporation of India), not by RBI. It is interoperable across banks and levies **zero MDR** on P2P transfers. The metric examiners cite is the **UPI success rate** = (Successful transactions ÷ Total attempted transactions) × 100, expressed in %.

**CBDC** — the digital rupee — has two flavours:

- **e₹-W (wholesale)**, piloted from 1 November 2022, settles inter-bank wholesale obligations.
- **e₹-R (retail)**, piloted from 1 December 2022, used by the general public for everyday payments.

CBDC is **sovereign legal tender under the RBI Act, 1934**, not cryptocurrency. The distinction examiners test: CBDC is a direct claim on the central bank, denominated in rupees, and does not carry the price volatility or anonymity characteristics of private crypto-assets.

The **Account Aggregator (AA)** framework, governed by the 2016 RBI Master Direction, allows **consent-based financial data sharing** between Financial Information Users (FIUs) and Financial Information Providers (FIP) through AA licensees. AAs **do not hold customer money or lend** — they are data fiduciaries. **OCEN (Open Credit Enablement Network)** sits on top, standardising digital small-ticket credit flows.

#### 🎯 Exam-Level Worked Problem

A mock MCQ: *"Which of the following statements about the Business Correspondent model is correct?"*

Options commonly framed around it:

- (a) The BC-Agent is the lender and bears the credit risk on loans disbursed.
- (b) The BC-Agent performs only the customer-acquisition function; lending is done by the bank on its own books.
- (c) The BC-Agent can lend up to ₹1 lakh per borrower without reference to the bank.
- (d) The BC-Agent is regulated directly by SEBI under its intermediary norms.

#### Resolution:
The correct answer is **(b)**. Under the RBI BC model, the appointed agent (BC-Agent) sources customers, captures e-KYC through Aadhaar / Video-CYC, operates micro-ATM / handheld POS for cash-in / cash-out, and assists the bank in origination. **The loan, once sanctioned, is on the bank's balance sheet.** Therefore (a) is wrong on credit-risk allocation, (c) is wrong because the BC has no independent lending authority at any ticket size, and (d) is wrong because the BC is regulated by RBI under the Banking Regulation Act, not SEBI.

#### Step-by-step check using the boundary rules:
1. Identify regulated entity → the **bank** holds the deposit and the loan.
2. Identify the BC's role → agent for customer service, KYC capture, transaction enablement.
3. Apply liability rule → credit risk stays with the bank; the BC earns commission, not interest margin.

> ⚠️ **Examiner Trap:** Option (a) sounds reasonable because BCs handle cash and look like a "local bank branch", but the regulated balance-sheet lender is always the parent commercial bank or SFB. Any option that attributes lending authority to the BC is incorrect.

#### Digital Lending Guidelines (2022 / 2024 amendments)

RBI's **Digital Lending Guidelines (2 June 2022)** and the subsequent **Digital Lending App / FSP directions (2024)** require that:

- Every digital loan must be on the balance sheet of a **regulated entity** (Bank / NBFC).
- All loan servicing — disbursal and repayment — must flow through the regulated entity's bank account; no pass-through to a third-party DLA wallet.
- A **First Loss Default Guarantee (FLDG)** can exist between a DLA and its lending partner, but only within RBI's prescribed cap.
- Disclosures (APR, all-in cost, recovery mechanism) must be standardised and shown before sanction.

#### Common mistakes in this tier

- Writing "Payment Banks lend up to ₹1 lakh" — they do not lend at all.
- Calling UPI an RBI product — it is NPCI's.
- Treating AA licensees as Payment Banks — AAs handle data, not money.
- Confusing CBDC pilot dates: e₹-W pilot began 1 Nov 2022; e₹-R pilot began 1 Dec 2022.

---

### 🔴 Extended — Deep Study (3mo+)
> The interesting failures happen at the boundaries — where BC economics break, where digital lending loopholes appear, and where FI Index numbers can be misread.

#### When the BC model breaks

The Cost-to-Income Ratio of a BC-Agent (commission paid + technology cost ÷ transaction revenue) deteriorates sharply in geographies with **low average ticket size**, **thin transaction frequency**, or **high last-mile cash-handling costs**. Three pressure points:

1. **Cash logistics.** Micro-ATMs require physical cash reconciliation; in hilly or low-population-density districts, transport costs can exceed commission earned.
2. **Dormant accounts.** PMJDY's mass opening drive produced accounts with no activity — usage indicators fall, but the cost of maintaining the BC outlet remains.
3. **Digital cannibalisation.** As UPI deepens, customers who once used BC micro-ATMs for cash withdrawal shift to mobile-based P2P, eroding the BC's withdrawal-led revenue.

The 2024 RBI amendment to BC norms attempts to expand the BC-Agent's permissible activities (including auxiliary services) precisely to restore viability.

#### Digital lending — where the FLAGG (FLDG) trap sits

The 2024 RBI tightening on Digital Lending Apps (DLAs) was driven by a specific pattern: DLAs sourced customers, captured consent, and routed loans through a partner NBFC, while reserving the right to **debit the borrower's account directly via e-mandate** without proportionate grievance redress. RBI's response forces:

- **Balance-sheet transparency** — the NBFC/Bank must be visible to the borrower.
- **Disclosure standardisation** — APR shown alongside processing fees, GST and insurance.
- **Grievance** — borrower must know the Regulated Entity (RE), not just the app brand.
- **FLDG cap** — the guarantee a DLA gives to the RE on default cannot exceed the RBI-prescribed percentage; any structure above the cap is non-compliant.

#### Pitfalls the question setter exploits

| Trap | What students write | What is correct |
|---|---|---|
| PMJDY interest | "Zero-balance means zero interest" | Interest paid at savings bank rate |
| BC credit risk | "BC bears the default" | Default risk stays with the bank |
| UPI ownership | "RBI runs UPI" | NPCI operates UPI |
| CBDC status | "CBDC is crypto" | CBDC = RBI-issued legal tender, RBI Act 1934 |
| AA function | "AA holds deposits" | AA only transmits consented data |
| SFB priority lending | "50% to Priority Sector" | **75%** to Priority Sector |
| Payment Bank lending | "Up to ₹1 lakh against deposit" | No lending permitted at all |

#### Adjacent topics worth cross-revision

- **Lead Bank Scheme and SLBC** for district- and state-level FI coordination.
- **DBT and APBS** — Aadhaar Payment Bridge System for transferring subsidies.
- **Microfinance Institutions (NBFC-MFI)** framework — borrower income, household limit and pricing caps.
- **National Strategy for Financial Inclusion 2019–2024** — credit-inclusion pillar and digital-onboarding focus.
- **PPI (Prepaid Payment Instrument)** Master Direction — KYC tiers, wallet limits, interoperability.

#### Two advanced prompts for self-test

1. **Prompt A — FI Index interpretation.** If a state shows Access_index = 0.82, Usage_index = 0.41, Service_Quality_index = 0.55, compute the composite FI Index and identify which dimension is pulling the score down. Which policy lever (more branches, more digital adoption, more insurance coverage) would most efficiently raise the composite?
2. **Prompt B — Digital lending compliance check.** A fintech app disburses personal loans via a partner NBFC, debits repayments through its own e-mandate, and discloses only the EMI — not the APR or insurance component. Identify three specific RBI norm violations under the 2022 / 2024 Digital Lending directions.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Financial Inclusion and Digital Finance" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Finance notes](/notes/rbi-grad-b/finance/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
