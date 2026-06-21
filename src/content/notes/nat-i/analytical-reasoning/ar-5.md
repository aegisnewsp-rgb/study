---



exam: nat-i
examName: NAT-I (NTS)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-5
topicName: Series Completion (Letters)
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.129510"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Series Completion (Letters) with clear labels, white background, exam-style illustration"




---

# Series Completion (Letters)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Series Completion (Letters) tests your ability to spot the **hidden pattern** inside a chain of letter groups and extend it. The backbone trick is converting letters to **numeric positions (A=1, B=2, …, Z=26)**, then treating the series like a number sequence: plus/minus steps, multiplication, alternation, or reversal. Four patterns carry 80% of NAT-I marks: **constant skip** (A, D, G, J = +3), **alternating skip** (A, C, F, J = +2, +3, +2, +3…), **reverse order** (Z, Y, X, W), and **mirror pairs summing to 27** (A↔Z, B↔Y, C↔X). Always check **odd-position** and **even-position** terms separately when the first reading fails — the two halves of the series often obey different rules. Wrap rule: Z + 1 cycles back to A (position 1, not 27).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Mechanism: Letter-to-Number Conversion
Every letter carries a fixed integer value: A=1, B=2, …, Z=26. Once a series is rewritten as numbers, the problem reduces to elementary arithmetic on integers. The four operations you will meet are **addition (+k)**, **subtraction (−k)**, **multiplication (×k)**, and **alternation** between two of these. Wrap-around arithmetic: after Z (26), the next position is computed as `(current + step) mod 26`, and a remainder of 0 is read as 26 (Z), not as nothing.

#### The Five Most-Tested Patterns

| Pattern | Example | Detection Cue |
|---|---|---|
| Constant skip | A, D, G, J, **M** | Gap of 3 between every pair |
| Alternating skip | A, C, F, J, **O** | +2, +3, +2, +3 repeating |
| Reverse order | Z, Y, X, W, **V** | Successive −1 |
| Mirror pairs (sum 27) | A, Z, B, Y, C, **X** | First half rises +1, second half falls −1 |
| Mixed operation | A, B, D, G, **K** | Differences: +1, +2, +3, +4 (increasing) |

#### Standard Question Shapes
NAT-I presents 4–6 letter groups with one blank. Three formats dominate:
1. **Next term** — five given groups, pick the sixth.
2. **Missing middle** — three groups, blank, three groups; solve by working from both ends.
3. **Wrong group** — six groups where one breaks the rule; identify the odd one.

#### Worked Micro-Example
Series: AZ, BY, CX, DW, **?**
Convert first letters: A=1, B=2, C=3, D=4 → next is **E**.
Convert second letters: Z=26, Y=25, X=24, W=23 → next is **V**.
Answer: **EV**. Time on paper: under 20 seconds once the mirror property (sum 27) is noticed.

#### Common Traps
- A is 1, not 0 — off-by-one errors wreck every step that follows.
- Reverse series look like forward ones; verify the *direction* of the first two jumps.
- Z + 1 wraps to A (position 1), not to a non-existent 27.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mixed Operations
Harder NAT-I items combine **two independent sub-rules** in the same series. The most common composite is the **odd–even split**, where terms 1, 3, 5 follow one arithmetic path and terms 2, 4, 6 follow another. Example: A, D, C, F, E, H, **G**, **J** — odd positions (A, C, E, G) advance +2; even positions (D, F, H, J) also advance +2. The second composite is **letter–number coding**, where each group is a pair (letter, digit) and the two elements obey separate progressions (e.g., A1, B2, C3…). A third is the **vowel–consonant split** (A, C, E, G, I …) versus full alphabet (A, B, C, D, E…) — confirm which is in play before solving.

#### Mechanism: Wrap-Around and Modular Arithmetic
For any step k, position n₍ᵢ₊₁₎ = ((nᵢ − 1 + k) mod 26) + 1. The −1/+1 shift handles the 1-indexed alphabet so that 26 + 1 correctly yields 1 (A) rather than 0. Mirror coding exploits the invariant n + n′ = 27, useful when the second half of a series descends while the first half ascends.

#### Connections to Adjacent Topics
Series Completion (Letters) shares the **pattern-detection engine** with Number Series and Letter–Number Coding. Mastering the A=1 conversion here transfers directly to those sections, and the odd–even split technique reappears in analogy items.

#### Typical Mistakes (Exam-Specific)
NAT-I candidates lose marks by (1) counting A as 0, (2) applying a single rule to a series that alternates, (3) forgetting wrap-around past Z, and (4) ignoring the sum-to-27 mirror shortcut.

#### Two Practice Prompts
1. B, E, H, K, **?** — find the next group.
2. AZ, BA, CB, DC, **?** — find the next group (hint: one side ascends, the other descends, but not by simple mirror).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
