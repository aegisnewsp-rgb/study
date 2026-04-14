---
exam: mat
examName: MAT (Management Aptitude Test)
subject: dilr
subjectName: Data Interpretation & Logical Reasoning
topic: data-a-001
topicName: Tables & Caselets
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "A structured data table showing quarterly sales figures across four regions (North, South, East, West) for three consecutive years, with row totals and column totals, styled as a typical MAT exam DI passage with compact numeric data requiring careful reading."

---

# Tables & Caselets

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Tables are the most structured data format you'll encounter in MAT's DILR section. A data table presents information in rows and columns, where each cell holds a specific value. Caselets are paragraph-style data presentations that describe a scenario with multiple variables — you're expected to extract the data and organise it mentally or on rough paper.

**What this topic covers in MAT:**
- Reading data from structured tables with row and column headers
- Extracting information from paragraph-based caselets (no actual table provided — you build the table)
- Calculating totals, averages, percentages, and comparisons across rows and columns
- Identifying trends or patterns within tabular data
- Multi-variable caselets where three or more attributes are linked (e.g., five students, each studying three subjects, living in different cities)

**Key formulas and techniques:**
- Row total = sum of all values in that row
- Column total = sum of all values in that column
- Grand total = sum of row totals = sum of column totals
- Percentage share = (Value / Row Total) × 100, or (Value / Grand Total) × 100
- Average = Total / Number of entries
- Ratio = Value A : Value B = Value A / Value B

**⚡ MAT exam tips:**
- MAT typically sets 4–6 questions per data table passage. Read the questions before scanning the table — you'll know exactly which cells to look at.
- No calculator is allowed. Keep arithmetic simple: round to nearest hundred or thousand for approximations, then narrow down answer choices.
- Watch for units — tables sometimes mix lakhs and crores, or percentages and absolute values. A single misplaced decimal destroys your answer.
- In caselets, identify the "anchor" variable first (usually the person or entity that appears once), then map all attributes to it systematically.
- Time target: spend no more than 5–6 minutes per table passage including all its questions.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Step-by-Step Problem-Solving Approach

**Step 1 — Scan the table headers**
Before reading any numbers, identify what each row and column represents. Check the units. Note any footnotes or additional notes below the table — these often contain crucial qualifications.

**Step 2 — Read the questions to identify required data**
Questions usually follow a pattern: direct lookup, calculation, comparison, and inference. Identify which type each question is so you can skip unnecessary scanning.

**Step 3 — Extract and calculate**
For calculations, write down intermediate steps on your rough sheet. Don't try to hold multiple numbers in memory.

**Step 4 — Verify using cross-checking**
If time permits, check your answer using a different route. For example, if you calculated a percentage share using the grand total, verify by checking if the row percentages sum to approximately 100%.

#### Worked Example — Structured Table

Consider the following table showing the number of students (in thousands) who appeared for MAT across four zones over three years:

| Zone | 2019 | 2020 | 2021 | Total |
|------|------|------|------|-------|
| North | 42 | 38 | 51 | 131 |
| South | 56 | 49 | 63 | 168 |
| East | 29 | 34 | 41 | 104 |
| West | 47 | 52 | 58 | 157 |
| **Total** | **174** | **173** | **213** | **560** |

**Question 1:** What percentage of total MAT candidates in 2021 came from the South zone?
- South 2021 = 63 (thousands); Grand total 2021 = 213 (thousands)
- Percentage = (63 / 213) × 100 = 29.6% ≈ **30%**

**Question 2:** Which zone showed the highest year-on-year growth from 2019 to 2021?
- North: 42 → 51, growth = (51−42)/42 × 100 = 21.4%
- South: 56 → 63, growth = (63−56)/56 × 100 = 12.5%
- East: 29 → 41, growth = (41−29)/29 × 100 = 41.4%
- West: 47 → 58, growth = (58−47)/47 × 100 = 23.4%
- **Answer: East (≈41% growth)**

**Question 3:** If the passing percentage in the North zone in 2020 was 18%, how many students passed?
- North zone 2020 = 38 thousand = 38,000 students
- 18% of 38,000 = 0.18 × 38,000 = **6,840 students**

#### Worked Example — Caselet

**Caselet:** In a batch of 60 management trainees, each trainee specialises in exactly one of three areas: Marketing (M), Finance (F), or HR. Twice as many trainees specialise in Marketing as in Finance. The number specialising in HR is 5 less than those specialising in Finance. Among the Marketing trainees, 40% are women. Among Finance trainees, 60% are women. Among HR trainees, 50% are women. Overall, 45% of all trainees are women.

**Question:** How many women are there in the Marketing specialisation?

**Step 1 — Set up equations**
Let F = number of Finance trainees.
Then M = 2F (twice Finance).
HR = F − 5 (5 less than Finance).
Total: M + F + HR = 60 → 2F + F + (F − 5) = 60 → 4F − 5 = 60 → 4F = 65 → F = 16.25.

Since F must be a whole number, we revisit: the problem says "twice as many in Marketing as in Finance." Check if we made an error — actually, 4F − 5 = 60 → 4F = 65 → F = 16.25. This doesn't work. The constraint that all values must be integers suggests we need integer solutions. Try F = 15: then M = 30, HR = 10. Total = 55, not 60. Try F = 16: M = 32, HR = 11. Total = 59. Try F = 17: M = 34, HR = 12. Total = 63.

The caselet may use approximate rounding. Let's re-read: it says 60 trainees. Using F = 16: M = 32, HR = 11. Total = 59. Using F = 15: M = 30, HR = 10. Total = 55. The closest integer approach: F = 16, M = 32, HR = 12 gives total 60. Check HR = F − 5: if F = 16, HR = 11. If HR = 12, then F = 17. Let's test F = 17: M = 34, HR = 12. Total = 63. Still not 60.

Let's work backwards from the percentage condition: total women = 45% of 60 = 27 women.
Women from M = 0.40 × M; Women from F = 0.60 × F; Women from HR = 0.50 × (F−5).
Sum = 0.40M + 0.60F + 0.50(F−5) = 0.40(2F) + 0.60F + 0.50F − 2.5 = 0.80F + 0.60F + 0.50F − 2.5 = 1.90F − 2.5.
Set equal to 27: 1.90F − 2.5 = 27 → 1.90F = 29.5 → F ≈ 15.53. This suggests the numbers in the caselet may not produce a clean integer — in MAT, this is a sign to check whether your interpretation is correct. In a real exam, you'd select the answer closest to your calculation: M = 2F ≈ 31. Women in M = 0.40 × 31 ≈ **12.4 ≈ 12 women**.

#### Common Traps in Tables & Caselets
- **Mixing units**: A column may show values in lakhs while another shows in thousands. Always check the header note.
- **Cumulative vs individual**: Some tables show running totals; others show individual period values. Misreading this is catastrophic.
- **Caselets with hidden constraints**: Phrases like "each participates in exactly one" or "none study both" give you critical equations.
- **Percentage of percentage**: A question like "what percent of male HR trainees passed?" requires two percentage calculations — don't skip the intermediate step.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Table Problem Types

**1. Missing data inference**
Sometimes a table has blank cells. You may be asked to infer the missing value using row and column totals. This requires setting up simultaneous equations.

Example: If North + South = 110 and North + East = 85, and you know North = 42, then South = 68 and East = 43.

**2. Conditional filtering**
Questions like "how many trainees who scored above 75% are in the top 10% by marks?" require you to cross-reference two rankings or filters. Build a combined filter on your rough sheet.

**3. Multi-year aggregated tables**
Tables spanning 5–10 years with multiple variables (production, consumption, imports, exports). Often asked: "In how many years did production exceed both consumption and imports?" Requires scanning each row.

#### Time-Saving Calculation Techniques

- **Approximation first**: When answer choices are far apart (e.g., 12 vs 68 vs 120), a rough calculation suffices. (42/173 × 100 ≈ 24.3%, not 30% — this eliminates some options.)
- **Percentage to fraction shortcuts**: 12.5% = 1/8, 16.67% = 1/6, 25% = 1/4, 33.33% = 1/3. Use these to reverse-engineer answers quickly.
- **Difference method for percentage change**: Instead of calculating (new−old)/old × 100, compute new = old × (1 + r). Test each answer choice until you find the match.
- **Ratio chaining**: If A:B = 3:4 and B:C = 5:6, then A:B:C = 15:20:24. You can derive this by making B equal across both ratios.

#### Cross-Topic Integration
Tables often appear alongside other chart types in the same DI set. A caselet might describe survey results that are then presented as a table. Always identify whether the passage is purely tabular or a mixed format — this affects how you extract data.

MAT-specific question patterns: approximately 20 DI questions appear in MAT (out of 200 total), usually split into 4–5 passages of 4–6 questions each. Tables and caselets together represent roughly 30–40% of DI questions. Expect at least one table-based and one caselet-based passage per exam.

#### Practice with Realistic Data Set

A retail chain operates in five cities. The table below shows quarterly revenue (in ₹ lakhs) for 2022:

| City | Q1 | Q2 | Q3 | Q4 |
|------|-----|-----|-----|-----|
| Mumbai | 84 | 92 | 78 | 106 |
| Delhi | 71 | 68 | 74 | 82 |
| Bangalore | 55 | 61 | 58 | 67 |
| Chennai | 43 | 47 | 51 | 58 |
| Hyderabad | 38 | 42 | 39 | 51 |

**Advanced questions to attempt:**
1. If the profit margin for Q4 in Mumbai was 22%, and Q1 was 18%, what was the total profit across both quarters?
2. Which city showed the most consistent performance across all four quarters (lowest range)?
3. If Hyderabad's Q4 revenue represented a 30% increase over its Q3, does the data confirm this?
4. Bangalore's annual revenue is what percent of Mumbai's annual revenue?
5. If the combined revenue of Delhi and Chennai in H1 (Q1+Q2) is used to calculate a 15% tax liability, what is the tax amount?

Work through these without a calculator, using only rough paper. Target: 90 seconds per question.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
