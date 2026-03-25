---
exam: rbi-grad-b
examName: RBI Grade B
subject: economics-social-issues
subjectName: Economics & Social Issues
topic: rbi-esi-003
topicName: "Poverty & Income Inequality — Deep Dive"
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "An advanced Lorenz Curve with Gini Coefficient calculation diagram: A full square (unit square) with the diagonal line of equality. The Lorenz curve is drawn as a smooth curve. The Gini formula is shown as: Gini = Area A / (Area A + Area B). Shade Area A (between diagonal and Lorenz curve) and Area B (below Lorenz curve). Show extreme cases: Gini=0 (diagonal itself), Gini=1 (L-shape along bottom and right edge)."
country: India
generated: ai-v1
---



## Poverty & Income Inequality — Deep Dive

### Concept Deep Dive

**The evolution of poverty measurement in India:**

India's poverty measurement debate is uniquely Indian — shaped by political sensitivities, methodological debates, and the sheer scale of the problem. Understanding why India has multiple poverty lines is as important as knowing the numbers themselves.

**Pre-independence and early post-independence:** Dadabhai Naoroji, in his 1901 work "Poverty and Un-British Rule in India," first estimated that roughly 75-80% of India's population lived below a poverty line. This figure, though crudely derived, set the tone: India's poverty was mass, structural, and inherited from colonial exploitation.

Post-independence, the official poverty measurement began with the Planning Commission's Expert Group (1962) — led by V.N. Lakdawala — which used calorie-based norms: 2,400 kcal per capita per day in rural areas and 2,100 kcal in urban areas. A person whose total consumption expenditure could buy this minimum caloric intake was above the poverty line. This was simple, practical, and politically defensible — but economically crude. It ignored that food wasn't the only necessity.

**The Vaghmal Committee (1979) and its successor:**

In 1979, the Yashwantrao Chavan Committee (often called the Vaghmal Committee) revised poverty lines upward slightly but maintained the calorie-centric approach. These lines, at 1973-74 prices, were:
- Rural: ₹49 per capita per month
- Urban: ₹57 per capita per month

These were later updated to 1979-80 prices and extrapolated forward using price indices. By 1999-2000, the rural poverty line stood at ₹327 per month and urban at ₹454 per month.

**The Suresh Tendulkar Committee (2005-2011) — breaking from calories:**

The Tendulkar Committee (officially the "Expert Group to Review the Methodology for Estimation of Poverty") was a significant departure. Its key innovation: it recognised that poverty was not just about food. A person needs clothing, shelter, transport, and basic services — all of which cost money. By including non-food expenditures as essential, Tendulkar effectively set a higher poverty line than pure calorie-based approaches.

The methodology:
1. Identify a reference population group whose food expenditure provides exactly 2,135 kcal (the average of rural and urban norms)
2. Add the average monthly per capita non-food expenditure for that group
3. This total = the poverty line

At 2011-12 prices, the Tendulkar lines were:
- Rural: ₹816 per capita per month
- Urban: ₹1,000 per capita per month

Using these lines, Tendulkar estimated 21.9% of India's population (approximately 270 million people) was poor in 2011-12. State-wise, this ranged from less than 5% in states like Goa and Kerala to over 40% in Bihar and Odisha.

**The Rangarajan Committee (2012-2014) — the higher bar:**

Dr. C. Rangarajan, former RBI Deputy Governor, chaired a committee that produced dramatically different numbers. The committee went back to an approach closer to the original calorie-based methodology but updated it with modern consumption patterns. It also included 46% of the poor's expenditure on non-food items (education, health, transport) in the food poverty line itself.

The Rangarajan lines (at 2011-12 prices):
- Rural: ₹1,407 per capita per month
- Urban: ₹3,719 per capita per month

The urban line is nearly 4 times the Tendulkar line! Using Rangarajan, approximately 30% of India's population (over 360 million people) would have been poor in 2011-12.

Why was Rangarajan never adopted? The higher poverty lines would have entitled far more people to welfare benefits — an enormous fiscal burden. Governments prefer lower lines (Tendulkar) because they cost less to address.

**Multidimensional Poverty Index (MPI) — the headline achievement:**

India's poverty story of the last decade is told through the MPI, which NITI Aayog began publishing in 2021, using the UNDP's global methodology. The MPI covers 12 indicators across three dimensions:

**Health dimension:**
1. Nutrition (adults and children)
2. Child mortality

**Education dimension:**
3. Years of schooling (no one in household has completed 6 years of schooling)
4. School attendance (any child aged 6-14 not attending school)

**Standard of Living dimension:**
5. Cooking fuel (using solid fuel — wood, coal, dung cake)
6. Sanitation (no access to improved toilet or latrine)
7. Drinking water (no access to improved source of drinking water within 30 minutes)
8. Electricity (no access to electricity)
9. Housing (inadequate housing materials — mud floor, thatched roof)
10. Assets (no more than one of: bicycle, radio, television, telephone, computer, animal, cart)
11. Bank account access (no bank account in household)

A person is "multidimensionally poor" if they are deprived in at least 1/3 of these weighted indicators. The MPI headcount ratio tells us what percentage of the population is poor.

**India's MPI Results:**
- 2013-14: 29.7% poor (~389 million people)
- 2019-21: 19.7% poor
- 2023-24: 11.3% poor (approximately 135 million people)

That means approximately 254 million people exited multidimensional poverty between 2013-14 and 2019-21, and a further ~100 million between 2019-21 and 2023-24 — totalling over 415 million people lifted out of poverty in a decade. This is the largest poverty reduction in any country in history.

**Gini Coefficient — mathematical foundations:**

The Gini Coefficient is the most widely used measure of inequality. Graphically, it is the ratio of the area between the Lorenz Curve and the 45-degree line, divided by the entire area below the 45-degree line.

Mathematically, the Gini Coefficient can be calculated from income data as:

Gini = (1/2n²μ) × Σᵢ Σⱼ |xᵢ - xⱼ| / n

Where:
- n = number of observations
- μ = mean income
- xᵢ, xⱼ = individual incomes

Or more practically, using grouped data:

Gini = 1 - Σ (pᵢ × qᵢ₊₁ - pᵢ₊₁ × qᵢ)

Where:
- pᵢ = cumulative share of population
- qᵢ = cumulative share of income

India's Gini (consumption-based, from NSSO data):
- 1993-94: 0.31
- 2004-05: 0.34
- 2011-12: 0.35
- 2023-24: ~0.36

This rising trend reflects the benefits of growth being disproportionately captured by the top of the income distribution. While the absolute number of poor has fallen dramatically, the relative gap between rich and poor has widened.

**The Lorenz Curve — interpreting income distribution:**

The Lorenz Curve plots cumulative income against cumulative population. Suppose we divide the population into five equal groups (quintiles), each representing 20% of the population. We then calculate the share of total income each quintile receives.

In perfect equality, each quintile receives exactly 20% of income.

In India (approximate 2023 data):
- Bottom 20% of population: ~3% of income
- Next 20%: ~7% of income
- Middle 20%: ~12% of income
- Next 20%: ~20% of income
- Top 20%: ~58% of income

The Lorenz Curve for India would bow sharply below the diagonal in the lower segments (bottom 40% getting only 10% of income), then rise steeply in the top segment. The Gini of approximately 0.36 reflects this bow shape.

### Advanced Analysis

**Why has poverty fallen faster than inequality risen?**

This is the central paradox of India's economic story. India has experienced rising Gini (inequality) while simultaneously experiencing the world's largest absolute poverty reduction. How?

The answer lies in growth and redistribution. When an economy grows at 6-7% annually for 20+ years, the absolute income of even the poor rises — a rising tide lifts all boats, even if some boats rise faster. Second, India's welfare programmes have become increasingly sophisticated: DBT through JAM infrastructure, PM-KISAN (₹6,000/year to farmer families), Ujjwala (free LPG connections), Jal Jeevan Mission (tap water to homes), and MGNREGA (100 days guaranteed employment). These direct transfers have raised the floor of consumption for the poorest without depending on trickle-down.

However, the rising Gini signals that growth is not inclusive at the rate it should be. A Gini of 0.35-0.40 means India's inequality is comparable to countries like South Africa (0.63, extremely unequal), Brazil (0.52), Mexico (0.45), and China (0.38). It is higher than most OECD countries (Germany 0.31, France 0.31, Denmark 0.28).

**The critique of income-based poverty lines:**

Economists like Amartya Sen argued that income/consumption poverty lines miss a critical dimension: capability poverty. A person may have enough calories but lack access to healthcare, education, or clean water — and therefore be incapable of productive participation in society. The MPI attempts to address this by including health and education indicators directly. Under MPI, a child who is malnourished counts as poor even if the family's income exceeds the Tendulkar line.

### RBI-Specific Coverage

For RBI Grade B examination, you must know:
- The JAM Trinity: Jan Dhan (bank accounts), Aadhaar (identity), Mobile (access) — this digital financial infrastructure enabled ₹1.7 lakh crore COVID relief to reach 800 million people in 2020
- RBI's Financial Inclusion Index (FI Index): launched 2021, measures ease of access to formal financial services across districts
- Priority Sector Lending: 40% of bank credit must go to priority sectors including agriculture, small business, education, and housing for the poor — this channels formal credit to reduce reliance on moneylenders
- MUDRA Yojana: collateral-free loans to micro and small enterprises — over ₹20 lakh crore disbursed since 2015
- Social Security Schemes: Atal Pension Yojana, PM Jeevan Jyoti Bima Yojana, PM Suraksha Bima Yojana — RBI coordinates with government for insurance penetration

### Case Study / Application

**PM-KISAN: From poverty alleviation to direct benefit transfer**

The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme, launched in February 2019, transfers ₹6,000 per year in three equal instalments directly to the bank accounts of farmer families owning cultivable land. By 2024, over 11 crore farmer families had received PM-KISAN benefits — making it one of the largest DBT schemes in the world.

The scheme is financed entirely by the central government. The transfer bypasses the state governments (previously, many agricultural subsidies were delivered through state machinery, with significant leakage). With PM-KISAN, the money goes directly from the central government's account to the beneficiary's Jan Dhan account.

From a poverty perspective, PM-KISAN has a modest but meaningful impact: ₹6,000/year = ₹500/month. For a family at the Tendulkar poverty line (per capita ₹816/month for rural), this ₹500/month is a significant supplement. For families significantly below the poverty line, the transfer helps push them above it.

The scheme also has a political economy dimension: it was launched 3 months before the 2019 Lok Sabha elections — but its continuation in subsequent budgets shows it has transcended political cycles.

**The COVID-19 proof of financial inclusion:**

When lockdown hit on 24 March 2020, Finance Minister Nirmala Sitharaman announced a ₹1.7 lakh crore relief package within hours — and actual transfers began within 3 weeks. This was possible only because 99.9% of households now had at least one bank account (Jan Dhan), most had Aadhaar-linked accounts, and the UPI platform enabled instant transfers.

Without the financial inclusion infrastructure built between 2014-2020, this relief would have taken months to reach beneficiaries and would have suffered massive leakage through intermediaries. The COVID crisis inadvertently proved the ROI of financial inclusion investment.

### GATE-level Numerical

**Q:** Consider a country with 5 equal population groups (quintiles). The income shares of each quintile are:
- Bottom 20%: 3%
- Second 20%: 7%
- Third 20%: 14%
- Fourth 20%: 22%
- Top 20%: 54%

Calculate the Gini Coefficient using the trapezoidal method.

**Working:**

Using the formula: Gini = 1 - Σ (pᵢ - pᵢ₋₁)(qᵢ + qᵢ₋₁)

Where pᵢ = cumulative population share, qᵢ = cumulative income share

| Quintile | pᵢ (cum. pop.) | qᵢ (cum. income) | (pᵢ - pᵢ₋₁)(qᵢ + qᵢ₋₁) |
|----------|---------------|-----------------|--------------------------|
| 1 | 0.20 | 0.03 | 0.20 × 0.03 = 0.0060 |
| 2 | 0.40 | 0.10 | 0.20 × (0.10 + 0.03) = 0.026 |
| 3 | 0.60 | 0.24 | 0.20 × (0.24 + 0.10) = 0.068 |
| 4 | 0.80 | 0.46 | 0.20 × (0.46 + 0.24) = 0.140 |
| 5 | 1.00 | 1.00 | 0.20 × (1.00 + 0.46) = 0.292 |

Sum = 0.0060 + 0.026 + 0.068 + 0.140 + 0.292 = 0.532

Gini = 1 - 0.532 = **0.468**

Alternatively, the area method: Gini = 0.5 - area under Lorenz curve
Since sum of rectangles = 0.532, and diagonal area (area under equal distribution line) = 0.5,
Area under Lorenz = 0.5 - 0.032 = 0.468 (which equals Gini directly)

**Answer:** Gini Coefficient = **0.468** — indicating high inequality (comparable to some Latin American countries). The bottom 40% of the population receives only 10% of income while the top 20% receives 54% of income.

### Multiple Perspectives

**Academic view:** Economist Abhijit Banerjee and Esther Duflo (Nobel Prize 2019) argue that poverty is not a single phenomenon but a set of distinct constraints — each requiring targeted interventions. Their "poverty trap" research shows that the poor face simultaneous failures in nutrition, health, education, savings access, and risk management. Randomised Control Trials (RCTs) have proven that one-shot transfers rarely break poverty cycles; sustained, targeted interventions do. India's MPI aligns with this thinking by measuring multiple deprivations simultaneously.

**RBI/Regulatory view:** RBI sees financial inclusion as the primary poverty reduction lever in its toolkit. The RBI's Financial Inclusion Plans (2010-2016, extended to 2023) drove bank branch expansion into unbanked areas, mandated BC (Business Correspondent) models for last-mile delivery, and required banks to meet PSL targets. The Jan Dhan Yojana (2014) opened 50 million accounts in the first year alone. The subsequent Atmanirbhar Bharat package (2020) announced ₹3 lakh crore collateral-free loans to small businesses under Emergency Credit Line Guarantee Scheme (ECLGS) — a pandemic relief measure that helped prevent small business closures and mass unemployment.

**Practical/Industry view:** Industry sees a growing middle class as India's most important economic asset — and poverty reduction as expanding the consumer base for Indian businesses. Companies like Hindustan Unilever, Maruti, and Samsung have explicitly identified rural and low-income markets as growth engines. The informal economy, while a challenge for monetary policy transmission, is also where India's next 300-400 million consumers will emerge from.

### Recent Developments (2024-2026)

**2024-25 poverty and inequality related developments:**
- NITI Aayog's MPI 2023-24 report: 11.28% multidimensional poverty rate — 135 million multidimensionally poor people, down from 415 million in 2013-14
- Bihar, Jharkhand, and Uttar Pradesh still have highest MPI rates (>20%), while Kerala, Goa, and Tamil Nadu have rates below 3%
- Union Budget 2025-26 (February 2025): PM-KISAN amount increased from ₹6,000 to ₹10,000 per year for small and marginal farmers
- Pradhan Mantri Awas Yojana (PMAY) crossed 4 crore houses built for the poor — transforming housing deprivation indicator in MPI
- Jal Jeevan Mission achieved tap water connections to over 11 crore rural households by 2024 — directly addressing the drinking water indicator
- Ujjwala scheme: Over 10 crore free LPG connections provided to women from poor households — addressing cooking fuel indicator
- World Bank's PovcalNet data (2024): India accounted for the largest reduction in number of poor globally in the 2010-2022 period
- IMF's Global Financial Stability Report (2024): Highlighted that India's DBT infrastructure is a global model for targeted welfare delivery
- NITI Aayog's India Ageing Report 2024: Highlighted that poverty among the elderly (60+) is a growing concern — requiring separate policy attention beyond aggregate poverty figures
