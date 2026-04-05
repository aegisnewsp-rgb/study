---
exam: mat
examName: MAT (Management Aptitude Test)
subject: dilr
subjectName: Data Interpretation & Logical Reasoning
topic: data-a-007
topicName: Data Sufficiency Problems
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: A logical reasoning problem page showing two separate data statements labeled Statement I and Statement II, with a problem question above and answer options A-E indicating whether each statement alone or both together are sufficient to answer the question, styled as a typical MAT exam data sufficiency format.
---

# Data Sufficiency Problems

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Data sufficiency problems are unique to aptitude tests like MAT, GMAT, and CMAT. Instead of solving a problem directly, you must determine whether the information provided in one or more statements is sufficient to answer the question. The art of data sufficiency lies in knowing when you have *enough* information — not more, not less.

**What this topic covers in MAT:**
- Determining whether a single statement provides enough information to answer a question
- Determining whether two statements together are needed (and sufficient) to answer a question
- Recognising when additional information is required beyond both statements
- Answering logic-based data sufficiency questions (arrangements, sequences, comparisons)
- Answering quantitative data sufficiency questions (arithmetic, algebra, geometry)

**Standard answer options in MAT data sufficiency:**
- **A:** Statement I alone is sufficient
- **B:** Statement II alone is sufficient
- **C:** Both statements together are sufficient, but neither alone is sufficient
- **D:** Each statement alone is sufficient
- **E:** Both statements together are not sufficient

**⚡ MAT exam tips:**
- Never solve the question fully. Only determine sufficiency — whether you *could* solve it if you wanted to.
- Test each statement independently before considering them together.
- Watch for hidden assumptions: a statement might implicitly assume something that's only made explicit in the other statement.
- In geometry questions, remember that diagrams in data sufficiency are not drawn to scale unless explicitly stated.
- Eliminate options aggressively: if Statement I alone works, options B, C, and E are eliminated immediately.
- Time target: 90 seconds to 2 minutes per data sufficiency question. These are faster than full solving questions.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Step-by-Step Problem-Solving Approach

**Step 1 — Read the main question carefully**
Identify exactly what you need to find. Is it a value? A relationship? A yes/no answer? This determines what "sufficient" means.

**Step 2 — Test Statement I in isolation**
Ask: "If I only knew Statement I, could I definitively answer the question?" If yes → Statement I is sufficient. If no → proceed to Statement II.

**Step 3 — Test Statement II in isolation**
Ask: "If I only knew Statement II, could I definitively answer the question?" If yes → Statement II is sufficient. If no → consider both together.

**Step 4 — Test both statements together**
Ask: "Do Statement I and Statement II together give me enough to answer the question?" If yes and neither alone was sufficient → answer is C. If no → answer is E.

#### Worked Examples — Quantitative Data Sufficiency

**Question:** What is the value of X if X is a positive integer?

**Statement I:** 3X + 7 < 22
**Statement II:** 5X − 3 > 17

**Analysis:**
- From Statement I: 3X < 15 → X < 5. Since X is a positive integer, X ∈ {1, 2, 3, 4}. Multiple possibilities → **not sufficient alone**.
- From Statement II: 5X > 20 → X > 4. Since X is a positive integer, X ∈ {5, 6, 7, ...}. Multiple possibilities → **not sufficient alone**.
- Together: X < 5 and X > 4 → X must be exactly 4. **Together, sufficient → Answer: C**.

---

**Question:** What is the average of five consecutive integers?

**Statement I:** The largest integer is 41.
**Statement II:** The sum of the integers is 195.

**Analysis:**
- Statement I alone: If largest = 41 and integers are consecutive, the five are 37, 38, 39, 40, 41. Average = (37+38+39+40+41)/5 = 195/5 = **39. Sufficient alone → Answer: A**.

---

**Question:** Is X greater than Y?

**Statement I:** X + Y > 20
**Statement II:** X − Y > 3

**Analysis:**
- Statement I alone: X + Y > 20 gives no comparison between X and Y individually. X could be 15 and Y = 8 (X > Y) or X = 8 and Y = 15 (X < Y). **Not sufficient alone**.
- Statement II alone: X − Y > 3 means X > Y + 3, which implies X > Y. **Sufficient alone → Answer: B**.

---

**Question:** What percentage of the students in a class are boys?

**Statement I:** There are 60 students in the class.
**Statement II:** There are 24 girls in the class.

**Analysis:**
- Statement I gives total students = 60, but not the gender breakdown. **Not sufficient alone.**
- Statement II gives number of girls = 24, but not total students. **Not sufficient alone.**
- Together: Boys = 60 − 24 = 36. Percentage boys = (36/60) × 100 = 60%. **Together sufficient → Answer: C**.

#### Worked Examples — Logical Data Sufficiency

**Question:** Who is the youngest among A, B, C, and D?

**Statement I:** A is older than B. C is older than D.
**Statement II:** B is older than C. D is older than A.

**Analysis:**
- Statement I: A > B and C > D. No relationship between A/C or B/D. **Not sufficient alone.**
- Statement II: B > C and D > A. Still no complete ordering. **Not sufficient alone.**
- Together: From I: A > B and C > D. From II: B > C and D > A.
- Combining: A > B > C > D and D > A — this creates a contradiction unless some are equal. Wait: A > B > C > D and D > A means D > A > B > C > D — impossible (circular). This suggests the statements together are inconsistent. **Cannot determine → Answer: E**.

---

**Question:** In a straight line of five people (facing North), who is in the middle?

**Statement I:** Raj is to the left of Simran. Priya is to the right of Neeraj. Neeraj is at one end.
**Statement II:** Simran is between Kavya and Priya.

**Analysis:**
- Statement I: Neeraj at one end. Raj left of Simran. Priya right of Neeraj. This gives a partial order but doesn't identify the middle person uniquely. **Not sufficient alone.**
- Statement II: Simran is between Kavya and Priya. This means Kavya — Simran — Priya (in some order). Combined with Statement I (Raj left of Simran, Priya right of Neeraj, Neeraj at an end):
  - Neeraj at left end (position 1). Priya right of Neeraj → Priya at position 2, 3, 4, or 5.
  - Raj left of Simran. Simran between Kavya and Priya.
  - If Neeraj is at position 1, and Simran is between Kavya and Priya, then Simran must be at position 2, 3, or 4.
  - Raj left of Simran: if Simran at 2, Raj at 1 (but Neeraj is at 1 — conflict). If Simran at 3, Raj at 1 or 2. If Simran at 4, Raj at 1, 2, or 3.
  - This is still ambiguous. **Both together not sufficient → Answer: E**.

#### Common Traps in Data Sufficiency
- **Assuming the question asks for a numerical value**: Some data sufficiency questions ask yes/no or comparison questions. Don't look for a number when the answer is simply "yes" or "no."
- **Overlooking hidden constraints**: Statements might use words like "exactly," "at least," "at most," "consecutive," or "positive" that carry significant information.
- **Treating "could" as "must"**: Sufficiency means the information guarantees the answer. If multiple answers are still possible, the statement is NOT sufficient.
- **Forgetting that diagrams are not to scale**: In geometry questions, visual estimation from a diagram is unreliable. Use the given measurements only.
- **Confusing "both are needed" with "both are sufficient"**: Option C means both together ARE sufficient and neither alone is sufficient. If both together but one alone also works → that's option D.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Data Sufficiency Types

**1. Geometry Data Sufficiency**
Questions about area, perimeter, angles, or properties of shapes. Common trap: a diagram may show a shape that appears to be a square or a rectangle but isn't explicitly stated as such.

- Is a quadrilateral a parallelogram? You need both pairs of opposite sides parallel (not visible in a diagram, needs statements).
- Is a triangle right-angled? You need the Pythagorean theorem satisfied or a 90° angle explicitly stated.

**2. Time, Speed, and Distance Data Sufficiency**
- "How long did the journey take?" → Statement I gives distance, Statement II gives speed. Both needed (time = distance/speed). But if one alone gives time directly, it's sufficient alone.
- "Was the car travelling faster than 60 km/h?" → A statement giving speed is sufficient; a statement giving distance and time might or might not be sufficient depending on values.

**3. Sequence and Series Data Sufficiency**
- "Is 72 a term of the arithmetic progression?" → You need the first term and common difference. One statement gives one piece, the other gives the other.
- "What is the 10th term?" → You need the first term and the pattern (AP, GP, etc.).

**4. Comparison Data Sufficiency**
Questions like "Who scored more, A or B?" are often faster in data sufficiency because you only need to establish the relationship, not the actual scores.

**5. Set Theory / Venn Diagram Data Sufficiency (Preview of data-a-009)**
- "How many students study both Mathematics and Physics?" → You need the total in each set and the overlap. One statement may give total students, another gives the size of each set. Both needed.

#### Time-Saving Calculation Techniques

- **Plug in values method**: For quantitative questions, if Statement I gives X < 5 and you need to know if X > 3, test boundary conditions: X = 4 satisfies both (sufficient → I alone works). X = 2 satisfies I but not the question (not sufficient → I alone doesn't work). This "worst case" testing tells you if a statement is truly sufficient.
- **Use the "nothing else needed" test**: Ask yourself: after reading this statement, do I need any additional information that isn't in the statement or the question? If yes, it's not sufficient.
- **Eliminate from the answer options**: If you can prove Statement I alone is sufficient, eliminate B, C, and E. If you can prove Statement I alone is not sufficient, eliminate A and D. Work through the remaining options.

#### MAT-Specific Patterns
Data sufficiency questions in MAT typically appear in the Logical Reasoning section (not pure DI). Approximately 5–8 data sufficiency questions appear per exam. The quantitative variety (algebra, arithmetic, geometry) accounts for about 60% of data sufficiency questions; the logical/verbal variety accounts for about 40%.

Common question themes in MAT data sufficiency:
- "What is the value of X?" (most common)
- "Is X greater than/less than Y?"
- "Is X divisible by Y?"
- "What is the average of the numbers?"
- "Who is the heaviest/lightest/tallest?"

#### Practice with Realistic Data Set

For each question below, determine whether Statement I alone, Statement II alone, both together, or neither is sufficient.

**Q1:** What is the value of 3X + 2Y?
- Statement I: X + Y = 12
- Statement II: X − Y = 4

**Q2:** Is the number 48 a term of the arithmetic progression 6, 12, 18, ...?
- Statement I: The 10th term is 60.
- Statement II: The common difference is 6.

**Q3:** In a queue of five people, who is third from the front?
- Statement I: Anita is ahead of Bina. Chitra is behind Deepa. Emma is at the front.
- Statement II: Bina is immediately behind Chitra.

**Q4:** What is the area of the rectangle?
- Statement I: The perimeter is 40 cm.
- Statement II: The length is 12 cm.

**Q5:** Who obtained the highest marks among five students A, B, C, D, E?
- Statement I: A scored more than B. D scored more than E. C scored the second highest.
- Statement II: B scored more than D. A scored less than E.

Work through each in 90 seconds, applying the independence test for each statement.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
