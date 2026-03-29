---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-008
topicName: Permutations
weight: 3
country: india
generated: "2026-03-29T05:05:08"
---
<think>
The user wants study notes for "Permutations" at three difficulty levels with exact formatting. Let me write this carefully following the template.

Let me structure this:

1. 🟢 Lite - Quick Review section with bullet points
2. 🟡 Standard - Regular Study with ~200 words of educational prose
3. 🔴 Extended - Deep Study with ~250 words at advanced level

I need to cover permutations for CUET Mathematics specifically. Let me write each section carefully.

Key concepts to cover:
- Fundamental principle of counting
- Permutation definition
- Formula: nPr = n!/(n-r)!


- Special cases like when r=n, r=0, and identical objects
- Arrangements, circular permutations, and word arrangements
- Common traps like confusing permutations with combinations
- CUET-specific shortcuts and question patterns

Let me write this now.
</think>

---
# Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Permutations** — Key Facts for CUET
• **Core formula:** $^nP_r = \dfrac{n!}{(n-r)!}$; when arranging all $n$ objects, $^nP_n = n!$
• **Most tested CUET concept:** Arranging $n$ objects taken $r$ at a time, especially $^nP_r$ and special cases like $^nP_0 = 1,\ ^nP_1 = n,\ ^nP_n = n!$
• **Common mistake students make:** Treating permutations with **repetition** the same as without repetition — when objects are identical, divide by factorials of frequencies: $\dfrac{n!}{p!\,q!\,r!\ldots}$
• **Key technique:** Use **slot method** (fill positions one by one) for arrangements with restrictions. For $r$ positions from $n$ distinct objects: multiply descending numbers → $n \times (n-1) \times \cdots \times (n-r+1) = \dfrac{n!}{(n-r)!}$
• **Important exception:** Circular permutations — for $n$ distinct objects around a circle: $(n-1)!$. Direction matters (clockwise ≠ anticlockwise).
• **Most frequent question type:** "In how many ways can $k$ objects be arranged from $n$?" (direct formula application) and "arrange the letters of the word '$\ldots$' " (identical object division)
⚡ **Exam tip:** In "arrange the letters" questions, ALWAYS check for repeated letters FIRST — divide $n!$ by factorials of each repeated letter's count before applying any other condition.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Permutations** — CUET Study Guide

**Permutation** means an **ordered arrangement** of distinct objects. If you choose and arrange $r$ objects out of $n$ distinct objects, the number of ways is $^nP_r = \dfrac{n!}{(n-r)!}$. This formula follows directly from the **Fundamental Principle of Counting** — multiply choices for each position: $n \times (n-1) \times \cdots \times (n-r+1)$.

**Key formulas to memorize:** $^nP_r = \dfrac{n!}{(n-r)!}$; $^nP_n = n!$; $^nP_0 = 1$. For **circular arrangements**, rotate to eliminate identical rotations: $(n-1)!$.

**CUET question patterns:** The most common pattern is arranging letters of a word (with or without repetition), arranging people in a row or around a table with restrictions (e.g., "A and B must sit together"). For "must sit together" problems, treat the grouped pair as **one entity**, then multiply arrangements of the group by internal arrangements ($2!$ for two people).

**Common traps:**
- Identical letters require division by factorials of frequencies.
- "Selection" wording implies **combination**, not permutation — watch for it.
- In circular permutations, $(n-1)!$ only applies when reflections are considered different (i.e., no clockwise/anticlockwise symmetry).

**Solved Example 1:** Arrange the letters of "DELHI". $\rightarrow 5! = 120$ (all distinct).
**Solved Example 2:** Arrange the letters of "BANANA". $\rightarrow \dfrac{6!}{3! \times 2!} = \dfrac{720}{12} = 60$ (A repeats 3 times, N repeats 2 times).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Permutations** — Comprehensive CUET Notes
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*