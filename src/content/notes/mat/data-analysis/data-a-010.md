---
exam: mat
examName: MAT
subject: dilr
subjectName: Data Analysis
topic: data-a-010
topicName: Mixed Data Sets & Data Integration
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Mixed Data Sets & Data Integration

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Mixed data sets** combine two or more distinct data formats—a table alongside a pie chart, a bar graph paired with a caselet paragraph, or multiple tables—in a single question set. The challenge is not the arithmetic; it is correctly identifying which data from which source answers which question. MAT tests your ability to cross-reference these sources and integrate their information.

**Key Insight:** Every mixed data set contains a "bridge variable"—a common element (product name, year, city, company) that connects two otherwise separate data sources. Finding this bridge is the critical first step before any cross-source calculation.

**Essential Process:**

1. Survey all data sources (usually 2–3) and note their format, units, and scope
2. List variables in each source and identify the shared/bridge variable
3. Answer single-source questions first (easier, faster marks)
4. For cross-source questions, extract from each source sequentially, then combine
5. Verify unit consistency before calculating—convert all monetary values to the same scale, all population figures to the same magnitude

**⚡ Exam Tips for MAT:**
The crossover point between sources is where the hardest—and highest-value—questions live. A table might show Company A's revenue as ₹120 lakh, while a pie chart shows A's market share as 15%. From both: total market size = ₹120 lakh / 0.15 = ₹800 lakh. This combined calculation is unique to the mixed format and appears in Q3 or Q4 of most sets. Target 6–8 minutes per mixed data set with 5 questions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Why Mixed Data Sets Appear in MAT**

Management graduates work with data from multiple systems simultaneously—sales figures from a CRM, costs from an ERP, market research from external surveys. MAT replicates this reality by presenting data in split formats. The skill being tested is synthesis: can you take incomplete information from multiple sources and reach a coherent answer?

**Common Format Combinations:**

| Source A | Source B | Integration Required |
|----------|----------|---------------------|
| Quantitative table | Pie chart (% shares) | Absolute values × percentages → total market size |
| Bar graph (magnitudes) | Caselet paragraph | Visual reading + textual constraints/relationships |
| Two or more tables | — | Join on common column (product, year, region) |
| Table | Line graph (trend) | Snapshot value + trend direction → point-in-time analysis |

**The Bridge Variable Concept**

When data appears in two separate formats, they connect through a shared variable. Identify this first:

- Table lists companies and revenues; pie chart shows those same companies' market shares. Bridge = company name.
- Table A has product sales by region; Table B has product profit margins by region. Bridge = product name AND region.
- Bar graph shows quarterly production; caselet mentions annual target. Bridge = time period (quarters relate to annual total).

Once the bridge is identified, cross-source calculations become straightforward: extract from Source A, extract from Source B, combine using the bridge.

**Single-Source vs Cross-Source Questions**

In a typical 5-question mixed set:

- **Q1:** Extract from one source only (e.g., "What was Company X's revenue?" from the table) — straightforward, do first
- **Q2:** Extract or calculate from one source (e.g., "What was the percentage growth of Company Y?" from the bar graph) — still easy
- **Q3:** Cross-source (e.g., "Using the table's revenue and the pie chart's market share, find the total market size") — moderate difficulty
- **Q4:** Conditional cross-source (e.g., "If Company X's revenue grew by 12%, what would be its new market share?") — harder
- **Q5:** "Which of the following is TRUE?" evaluating multiple statements across both sources — requires checking each option against data

**Unit Conversion: The Non-Negotiable Step**

Mixed data sets routinely use different units across sources. Before calculating anything:

```
Conversion Checklist:
[ ] All monetary values in the same unit (₹ lakhs preferred)
[ ] All quantities (orders, units, population) on the same scale
[ ] All percentages from the same base (total market vs segment total)
[ ] All time periods consistent (quarters vs annual vs monthly)
```

Example: Table shows revenue in ₹ crores. Pie chart shows percentages of total market in ₹ lakhs. Convert pie chart figures to crores first (divide by 100) before using in combined calculations.

**Handling Conflicting Data Between Sources**

If Source A says Company X's revenue is ₹50 lakh and Source B (applied to the same context) implies ₹52 lakh, this discrepancy typically means:

- One source is rounded (₹50 lakh is likely ₹49–51 lakh rounded)
- There's a definitional difference (revenue vs net revenue, total cost vs operating cost)
- The question expects you to use the more granular/precise source

In MAT, when two sources conflict, the table (absolute figures) generally takes precedence over the chart (which may be approximate). For "approximately" questions, accept the smaller discrepancy.

**Problem-Solving Sequence:**

1. Read all questions briefly (30 seconds) — identify which sources each question needs
2. For each question, trace the data path: Source A provides X, Source B provides Y, combine for answer
3. For single-source questions, extract and calculate directly
4. For cross-source questions, build a mini scratchpad:
   - From Source A: Variable A = [value], Variable B = [value]
   - From Source B: Variable C = [value] (% of something)
   - Combined: Variable B's share of total = B / C × 100 = [answer]
5. Check that units match before combining
6. Verify by cross-checking against the third source if available

**Common Mistakes on Mixed Data:**

- Using a pie chart percentage as an absolute value (a 25% share is not 25 units—it is 0.25 × total)
- Forgetting that pie chart percentages may sum to slightly over/under 100% due to rounding
- Applying a bar graph trend (increasing) to a cross-section question about a specific year
- Mixing up "share of total" (from pie chart) with "share of segment" (from another chart)
- Answering Q4 using only Q3's logic without re-extracting from the primary source

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**The Integration Framework: Three Phases**

**Phase 1 — Reconnaissance (First 45 seconds):**
List all data sources. For each, identify: primary subject (what entities), primary metric (revenue, orders, population), unit (₹ lakh, thousands, percentage), and scope (one year, multiple years, single category). Note the shared variables across sources. Glance at questions to understand what the final answers require.

**Phase 2 — Source Mapping (Next 30 seconds):**
Draw or mentally sketch the relationship:

```
Table: [Company | Revenue (₹L) | Cost (₹L)]
Pie Chart: [Company | Market Share (%)]
                    ↓ bridge: Company
         Revenue from table ÷ Share from chart = Total Market Size
```

Identify what each source uniquely provides. Identify what can ONLY be calculated by combining both.

**Phase 3 — Sequential Solving:**
Answer in order: single-source → single-source-with-calc → cross-source simple → cross-source complex → evaluative (which statement is true). This builds confidence and ensures you collect easy marks first.

**Table + Pie Chart: The Most Common MAT Combination**

This pairing tests whether you understand the relationship between absolute values and proportions.

Given: Table shows Company revenues. Pie chart shows market shares.

*Calculations possible from each source alone:*

From table alone:
- Total industry revenue = sum of all companies
- Revenue ratio of any two companies
- Any company's revenue as a percentage of the sum

From pie chart alone:
- Relative proportions between companies (if A = 25% and B = 15%, then A:B = 5:3)
- Which company is largest/smallest by share

From both combined:
- Total market size = Any company's revenue ÷ Its share percentage (as decimal)
- Any company's revenue from pie chart = Total market × share%
- Verification: Does each company's revenue from table match total market × its share from chart? (Small discrepancies are rounding.)

**Table + Line Graph: Temporal and Snapshot Data**

Line graphs display continuous trends over time. Tables give snapshots or categorical breakdowns. When combined:

- Line graph answers "How did metric X change from year Y to year Z?"
- Table answers "What was metric X in category C at a specific point?"
- Cross-source question: "At what point did Company A's trend (from graph) equal Company B's snapshot value (from table)?"

**Bar Graph + Caselet: Visual Magnitudes and Textual Constraints**

The bar graph provides immediately comparable magnitudes—you can see which bar is longest without calculation. The caselet provides additional relationships not visible in the graph: ratios, percentage differences, conditional statements, and constraints between entities.

Example: Bar graph shows four companies' revenues. Caselet states: "Company A's revenue was twice Company B's, and Companies C and D together earned as much as Company A." With these textual constraints and the bar graph magnitudes, you can often deduce actual values or verify consistency.

**Multi-Table Integration: Relational Joins**

When two or more tables are presented without a chart:

- Identify the common column (product name, city, year, employee ID)
- For each question, determine which columns from which tables are needed
- Join logically: Table 1 (product, revenue) + Table 2 (product, category) → revenue by category
- This tests relational reasoning rather than percentage calculation

**Data Imputation: Filling Missing Values**

Mixed data sets sometimes leave a value implicit rather than explicit:

- Source A gives total annual revenue = ₹500 lakh
- Source B gives quarterly breakdown for Q1, Q2, Q4
- Q3 is missing → Q3 = Total − (Q1 + Q2 + Q4)

This tests whether you understand that fragments from multiple sources can reconstruct a complete picture. When asked for a value that seems missing, always check if it can be derived through subtraction or rearrangement.

**The "All of the Above" and "None of the Above" Strategy**

In a "Which of the following is TRUE?" question with 4–5 statements (A, B, C, D, E):

1. Evaluate each statement independently against the data
2. Do NOT assume statements are related—each stands or falls on its own
3. For composite statements ("A and B together"), both components must be true for the composite to be true
4. If A and B are both true, eliminate any option claiming only one is true
5. Process of elimination is faster than evaluating every option fully

**Consistency Checking: Verify Your Cross-Source Answers**

If you calculate total market size from Company A's revenue and share, verify with Company B's revenue and share. If both give the same total (within rounding error), your calculation is likely correct. If they give different totals, you have a unit conversion error, a percentage base error, or misidentified the bridge variable.

**Time Management Table:**

| Activity | Time | Notes |
|----------|------|-------|
| Reconnaissance | 45 seconds | Non-negotiable |
| Questions per source | 15 seconds each | Total ~1 minute for 4 questions |
| Single-source extraction | 30–45 seconds each | ~2 minutes for 3 questions |
| Cross-source calculation | 60–90 seconds each | ~2 minutes for 2 questions |
| Review/flagged questions | 60 seconds | Return to difficult ones |
| **Total per set** | **6–8 minutes** | For 5 questions |

**Why This Format Tests Real Management Skills**

A marketing manager receives weekly sales data in a spreadsheet, monthly market share from an industry report, and quarterly consumer sentiment from a survey. Synthesising these three streams to decide where to allocate budget is exactly the skill MAT's mixed data sets simulate. The examination is not just testing calculation speed—it is identifying candidates who can reason across incomplete, multi-format data, which is the daily reality of data-driven management.

**Summary Checklist Before Each Question:**

1. Which source(s) does this question use?
2. Is there a bridge variable connecting the sources I need?
3. Are all units consistent across sources?
4. Can I verify this answer using a different source pairing?
5. Is this question testing extraction, calculation, or integration?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
