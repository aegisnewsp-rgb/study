---
exam: mat
examName: MAT (Management Aptitude Test)
subject: data-analysis
subjectName: "Data-Analysis"
topic: data-a-009
topicName: "Venn Diagrams & Set Theory"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: 2026-03-25
diagramPrompt: "A three-circle Venn diagram showing three overlapping circles labeled Mathematics, Physics, and Chemistry, with the number of students in each region indicated as typical for a MAT exam DI passage, with a supplementary table of exact values for each region."

---

# Venn Diagrams & Set Theory

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A Venn diagram uses overlapping circles to represent sets and their relationships. Each circle represents a category, and the overlaps represent elements belonging to multiple categories. MAT questions test your ability to read, interpret, and perform basic set operations from Venn diagram representations.

**What this topic covers in MAT:**
- Reading a 2-set Venn diagram (two overlapping circles)
- Reading a 3-set Venn diagram (three mutually overlapping circles)
- Identifying regions: only in A, only in B, only in C, A and B only, A and C only, B and C only, all three, none
- Calculating totals, complements, and union/intersection values
- Using set notation: A ∪ B (union), A ∩ B (intersection), A′ (complement), n(A) (number in A)

**Key formulas and the inclusion-exclusion principle:**
- n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
- n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)
- n(only A) = n(A) − n(A ∩ B) − n(A ∩ C) + n(A ∩ B ∩ C) [subtract the overlaps counted twice, add back the triple overlap]
- n(None) = Total − n(A ∪ B ∪ C)

**⚡ MAT exam tips:**
- In a 3-set Venn diagram, there are exactly 8 distinct regions. Be systematic: label each region and fill in numbers for all 8 before answering questions.
- When the diagram shows a table alongside it, use the table for exact values and the diagram for understanding relationships.
- Watch the wording: "students who study both Mathematics and Physics" (includes those also studying Chemistry) vs "students who study Mathematics and Physics only" (excludes those studying Chemistry). These are different.
- The complement approach is powerful: instead of counting those who study at least one subject, count the total minus those who study none.
- Time target: 4–5 minutes per Venn diagram passage with 4–6 questions.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Understanding the 3-Set Venn Diagram Regions

A 3-set Venn diagram has 8 regions:

| Region | Description | In Words |
|--------|-------------|----------|
| 1 | Only A | Studies A but not B or C |
| 2 | A and B only | Studies A and B but not C |
| 3 | Only B | Studies B but not A or C |
| 4 | A and C only | Studies A and C but not B |
| 5 | All three (A ∩ B ∩ C) | Studies A, B, and C |
| 6 | B and C only | Studies B and C but not A |
| 7 | Only C | Studies C but not A or B |
| 8 | None | Studies none of the three |

The total n(A ∪ B ∪ C) = sum of regions 1–7.
The grand total = sum of all 8 regions.

#### Step-by-Step Problem-Solving Approach

**Step 1 — Label all 8 regions**
On your rough sheet, draw a 3-circle Venn and label the 8 regions. This takes 15 seconds and prevents confusion throughout.

**Step 2 — Fill in what you know, starting with the centre**
The triple intersection (region 5) is often given or can be deduced. Start there and work outward.

**Step 3 — Use subtraction for "only" regions**
If n(A) is given and you know the overlaps, calculate "only A" by subtracting all A overlaps from n(A) and adding back the triple intersection.

**Step 4 — Use the grand total to find "none"**
n(None) = Grand Total − n(A ∪ B ∪ C). This is a common question type.

**Step 5 — Verify the total**
Sum all 8 regions. It must equal the grand total given in the problem.

#### Worked Example — 3-Set Venn Diagram

**Passage:** In a class of 80 students, the following is known about three subjects — Mathematics (M), Physics (P), and Chemistry (C):
- Total in M = 36
- Total in P = 33
- Total in C = 31
- Students in M and P only = 7
- Students in M and C only = 5
- Students in P and C only = 3
- Students in all three = 3

**Step 1 — Label the 8 regions**
Let the regions be: r1 (only M), r2 (M&P only), r3 (only P), r4 (M&C only), r5 (all three), r6 (P&C only), r7 (only C), r8 (none).

Given directly: r2 = 7, r4 = 5, r6 = 3, r5 = 3.

**Step 2 — Calculate "only" regions from the subject totals**

n(M) = r1 + r2 + r4 + r5 → 36 = r1 + 7 + 5 + 3 → r1 = **21**

n(P) = r2 + r3 + r5 + r6 → 33 = r3 + 7 + 3 + 3 → r3 = **20**

n(C) = r4 + r5 + r6 + r7 → 31 = r7 + 5 + 3 + 3 → r7 = **20**

**Step 3 — Calculate n(M ∪ P ∪ C)**
n(M ∪ P ∪ C) = r1 + r2 + r3 + r4 + r5 + r6 + r7
= 21 + 7 + 20 + 5 + 3 + 3 + 20 = **79**

**Step 4 — Use the grand total to find "none"**
r8 = Grand Total − n(M ∪ P ∪ C) = 80 − 79 = **1**

**Step 5 — Verify the total**
21 + 7 + 20 + 5 + 3 + 3 + 20 + 1 = 80 — matches the class size, so every region is accounted for. Always run this check in the exam: if the regions do not sum to the grand total, you have misread which figures are "only" values and which include overlaps.

**Data summary:**
Total = 80; none = 1
n(M) = 36; n(P) = 33; n(C) = 31
M∩P only = 7; M∩C only = 5; P∩C only = 3; All three = 3
Only M = 21; Only P = 20; Only C = 20

#### Questions Based on This Data

**Q1:** How many students study Mathematics only?
**Answer: 21 ✓**

**Q2:** How many students study at least one subject?
**Answer: 79 (80 total minus 1 who studies none)**

**Q3:** How many study exactly two subjects?
**Answer: r2 + r4 + r6 = 7 + 5 + 3 = 15**

**Q4:** How many study Mathematics or Physics (or both)?
**Answer: n(M ∪ P) = n(M) + n(P) − n(M ∩ P) = 36 + 33 − (7+3) = 69 − 10 = 59**
Or from regions: 21+7+20+3+5+3 = 59 ✓

**Q5:** What percentage of students study all three subjects?
**Answer: (3/80) × 100 = 3.75%**

**Q6:** Among students who study Physics, what percentage study Chemistry as well?
- n(P) = 33; n(P ∩ C) = r6 + r5 = 3 + 3 = 6
- Percentage = (6/33) × 100 = 18.2% ≈ **18%**

#### Common Traps in Venn Diagrams
- **Confusing "both A and B" with "only A and B"**: "Both A and B" includes those also in C. "Only A and B" excludes C.
- **Forgetting to add back the triple intersection**: When calculating "only A" from n(A), you subtract A∩B and A∩C, but the triple has been subtracted twice, so add it back once.
- **Mixing up "none" and "universal set"**: "None" is the region outside all circles. The universal set (total) includes all regions including none.
- **Assuming circles are to scale**: In MAT Venn diagrams, circles are often drawn approximately, not to exact proportion. Use the numbers, not the visual area.
- **Double-counting when summing regions**: Always use the inclusion-exclusion formula to avoid accidental double-counting.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Venn Diagram Problem Types

**1. Venn diagram from a table of totals**
Sometimes the passage gives you totals like "25 students study Mathematics," "30 study Physics," and a table of intersections but not the actual Venn diagram values. You must construct the Venn values from this data.

Approach: Use the formulas in reverse. Given n(M), n(M∩P), n(M∩C), n(M∩P∩C), solve for "only M" etc.

**2. Venn diagram with conditional statements**
Statements like "all students who study Physics also study Mathematics" imply P ⊆ M, meaning the P circle is entirely inside the M circle. This simplifies the Venn diagram to a nested structure.

**3. Venn diagram with missing information**
You may be given partial data (e.g., total in M, total in P, total in both, and the total number of students), and asked to find the number who study neither. Use: n(neither) = Total − n(M ∪ P) = Total − (n(M) + n(P) − n(M∩P)).

**4. Three-set problems with only two circles drawn**
Sometimes a passage describes three sets but only shows a 2-circle Venn diagram. In this case, one of the sets is the complement of another or is nested within another.

**5. Application to real-world scenarios**
MAT Venn diagrams commonly use: students studying subjects, people owning products/brands, people with hobbies/skills, employees with qualifications.

#### Time-Saving Calculation Techniques

- **Use the "complement of union" shortcut**: n(A′ ∩ B′ ∩ C′) = Total − [n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)]. This is the "none" region in one step.
- **Memorise the 3-set inclusion-exclusion formula**: n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C). With this memorized, you can solve union problems instantly.
- **For "exactly two" questions**: r2+r4+r6 = (A∩B + A∩C + B∩C) − 3×(A∩B∩C). This saves calculating each "only pair" separately.
- **For "at least one" vs "only one"**: n(at least one) = n(A∪B∪C). n(exactly one) = r1+r3+r7. These are different — don't confuse them.

#### Cross-Topic Integration
Venn diagrams connect directly to data sufficiency (see data-a-007) — a common data sufficiency question asks: "How many students study Mathematics?" where one statement gives the Venn data and another gives additional constraints. They also appear alongside tables in mixed-graph passages (data-a-006).

MAT-specific patterns: Venn diagram questions account for approximately 4–6 questions in the DILR section of MAT. Most are 3-set problems (60%), with 2-set problems at 30% and more complex 4-set problems at 10%. The most challenging Venn questions in MAT involve finding minimum or maximum possible values given overlapping constraints.

#### Practice with Realistic Data Set

**Passage:** In a survey of 200 professionals, each uses at least one of three social media platforms: LinkedIn (L), Twitter (T), and Instagram (I). The following data is collected:
- 95 use LinkedIn
- 88 use Twitter
- 80 use Instagram
- 35 use both LinkedIn and Twitter
- 30 use both LinkedIn and Instagram
- 28 use both Twitter and Instagram
- 15 use all three platforms

**Advanced questions to attempt:**
1. How many professionals use LinkedIn only?
2. How many use at least one platform?
3. How many use exactly two platforms?
4. How many use Twitter but not Instagram?
5. If the number using LinkedIn only is the same as the number using Instagram only, and the number using Twitter only is 40, verify whether all given data is consistent.
6. What is the minimum possible number of professionals who use LinkedIn and Twitter but not Instagram?

Work through each systematically using the 8-region approach.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
