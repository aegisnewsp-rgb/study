---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: economics
subjectName: "Economics"
topic: econom-009
topicName: "National Income"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# National Income

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your RBI Grade B exam.

National Income is conventionally **NNP at Factor Cost (NNP_FC)** — total factor income earned by normal residents of a country during one financial year, with depreciation and net indirect taxes already stripped out.

- **GNP_FC = GDP_MP + NFIA − NIT**, where NIT = Indirect Taxes − Subsidies, NFIA = Factor income earned abroad by residents − Factor income earned in India by non-residents.
- **NNP_FC (NI) = GNP_MP − Depreciation − NIT**.
- **GDP_MP = C + I + G + (X − M)** — the expenditure identity every Phase I MCQ leans on.
- **Per Capita Income = National Income / Mid-year Population**, expressed in ₹ per person.

> 💡 **High-Yield Memory Hook (Memory Hook):** "**Go Net From Money**" — **G**NP → subtract **N**et indirect taxes → get to **F**actor **C**ost; from any gross measure subtract depreciation to get "**N**et". Read left-to-right: **Gross → Net → Factor Cost → National**.

| Conversion needed | Operation |
|---|---|
| Gross → Net | subtract Depreciation |
| Market Price → Factor Cost | subtract Net Indirect Taxes |
| Domestic → National | add NFIA |

### 🟡 Standard — Regular Study (2d–2mo)

> Working layer for the ESI descriptive paper and Phase I numericals.

#### The Eight Aggregates in One Frame

National Income accounting revolves around eight aggregates formed by three binary switches: **Gross vs Net** (depreciation), **Market Price vs Factor Cost** (indirect taxes net of subsidies), and **Domestic vs National** (NFIA).

| Aggregate | Formula from base | What it captures |
|---|---|---|
| GDP_MP | C + I + G + (X − M) | Output within domestic territory at market prices |
| GDP_FC | GDP_MP − NIT | Output within domestic territory at factor cost |
| GNP_MP | GDP_MP + NFIA | Output by normal residents at market prices |
| GNP_FC | GNP_MP − NIT | Output by normal residents at factor cost |
| NDP_MP | GDP_MP − Depreciation | Net output, domestic, market price |
| NDP_FC | GDP_FC − Depreciation | Net domestic product at factor cost |
| NNP_MP | GNP_MP − Depreciation | Net national product at market price |
| **NNP_FC** | GNP_MP − Depreciation − NIT | **National Income (NI)** |

#### Three Methods, One Number

The Product, Income, and Expenditure methods are three windows onto the same circular flow.

- **Product (Value Added) Method**: sum (Value of Output − Intermediate Consumption) across all producing sectors. Avoids double counting.
- **Income Method**: Compensation of Employees + Operating Surplus + Mixed Income of self-employed (NDP_FC by income origin). Add NFIA and subtract NIT to reach NNP_FC.
- **Expenditure Method**: C + I + G + (X − M). I = Gross Domestic Capital Formation = Gross Fixed Capital Formation + Change in Stock.

#### Worked Numerical — Per Capita Income

**Question.** MoSPI's National Accounts Statistics 2024 reports NNP_FC at ₹272.41 lakh crore and mid-year population at 141.86 crore. The Reserve Bank's Handbook of Statistics on Indian Economy gives per-capita NNI for 2022-23 around ₹1,72,000. Compute (a) per-capita NNI from the data above, and (b) real per-capita income if the GDP deflator is 142.7 (base 2011-12 = 100).

#### Solution.

(a) **Per Capita NNI** = NNP_FC / Population = ₹2,72,41,000 crore / 141.86 crore persons = ₹1,92,038 per person approximately. Round to ₹1.92 lakh per person.

(b) **Real Per Capita NNI** = (Nominal Per Capita NNI / GDP Deflator) × 100 = (1,92,038 / 142.7) × 100 ≈ ₹1,34,575 per person.

> ⚠️ **Examiner Trap:** Many confuse per-capita NNP_FC (₹ per person) with per-capita GDP (USD, Atlas method used by World Bank). RBI papers ask the domestic-aggregate version in ₹; do not paste Atlas-method USD figures unless the question specifies them.

#### Concept Comparison Matrix

| Concept pair | Easy confusion | Correct distinction |
|---|---|---|
| GDP vs GNP | Both measure "production" | GDP = within domestic territory; GNP = by normal residents (so GNP includes NFIA, excludes production by foreigners inside) |
| Factor Cost vs Market Price | Both price the same output | FC excludes net indirect taxes — what factors actually receive; MP is what buyers pay |
| Domestic Income vs National Income | Domestic = NDP_FC; National = NNP_FC | Domestic excludes NFIA; National adds it (and subtracts depreciation) |
| Transfer Payments vs Factor Income | Both are receipts of households | Transfers (pension, scholarship, unemployment allowance) are NOT factor income; excluded from NI |
| Nominal vs Real GDP | Both are "GDP" | Nominal = current prices; Real = constant base-year prices via GDP Deflator |
| GDP Deflator vs CPI | Both are price indices | Deflator = Paasche, all goods in GDP basket, current weights held; CPI = Laspeyres, fixed consumer basket |

### 🔴 Extended — Deep Study (3mo+)

> Mastery layer for Phase II descriptive answers and interlinkage with monetary policy commentary.

#### Domestic Territory and Normal Residents — The Boundary Definition

The CSO/MoSPI boundary decides whether a transaction enters India's GDP. Domestic territory includes political frontiers, territorial waters, air space, embassies and consulates abroad, and ships/aircraft operated by residents between foreign ports. Normal residents are individuals ordinarily residing in India for more than one year plus institutions with their centre of economic interest here — citizenship is irrelevant. A Chinese engineer on a two-year ONGC assignment is a normal resident; a German tourist on a six-month stay is not.

#### Base Year Revisions and the 2022-23 Shift

India's GDP series sits on a base year set by MoSPI. The current series uses 2011-12; a shift to 2022-23 is in progress and will revise headline growth prints. Each revision typically reweights sectors, updates corporate finance data, and rebases the deflator — Phase II has asked candidates to explain why a base-year revision changes growth arithmetic even without any change in real activity.

#### Green GDP and Adjusted Net National Income

ANNI deducts depletion of natural capital (minerals, forests, fossil fuels) from NNI. The World Bank's Adjusted Net Savings framework extends this by adding expenditure on human capital (education) and subtracting damages from pollution. RBI's Annual Report and the Bank for International Settlements commentary increasingly cite ANNI when discussing sustainable growth.

#### Advanced Traps and Edge Cases

1. **NFIA sign reversal**: for India, factor income earned abroad is smaller than factor income earned by foreigners in India, so NFIA is negative; GDP_MP therefore exceeds GNP_MP. Reversing the sign pushes GDP below GNP — wrong.
2. **Change in Stock ≠ investment of new capital**: inventory accumulation is part of I, but writing off obsolete stock is NOT negative investment.
4. **Imputed rent of owner-occupied housing** is part of GDP at FC; omitting it understates the services sector.
5. **Subsidies are negative indirect taxes**: treat them explicitly — they lower the gap between MP and FC.
6. **Production boundary for household services**: paid domestic help enters GDP; a homemaker's services do not. This skews comparisons with economies that have a large subsistence sector.
7. **Real-time revision of provisional estimates**: MoSPI issues Provisional, First Revised, Second Revised and Final estimates — past paper questions test whether the candidate reads the "as on" tag on any RBI chart.

#### Adjacent Topics for Cross-Linking

- **Monetary policy**: real GDP growth and output gap sit directly in the inflation forecast equation under the Monetary Policy Committee framework.
- **Balance of Payments**: factor income flows in the current account are the same NFIA in the national accounts.
- **Public finance**: GDP_MP is the denominator for fiscal deficit ratios in the FRBM Act.
- **Inequality**: per-capita NNI masks the Lorenz-curve distribution; RBI's Bulletin occasionally flags this.

#### Two Practice Prompts

1. A Phase II question gives: GDP_MP = ₹305 lakh crore, depreciation = ₹36 lakh crore, indirect taxes = ₹28 lakh crore, subsidies = ₹6 lakh crore, NFIA = −₹5 lakh crore. Compute NNP_FC and per-capita NNI for a population of 142 crore.
2. "Distinguish between GDP at Market Price and GNP at Factor Cost" — practice a ten-line answer that (i) defines each, (ii) lists the two adjustments (NFIA, NIT), (iii) states which is conventionally larger for India, and (iv) names the official source (MoSPI NAS).

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "National Income" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/rbi-grad-b/economics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
