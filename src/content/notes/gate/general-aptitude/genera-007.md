---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-007
topicName: "Topic 7"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Logical Reasoning and Seating Arrangements

Logical reasoning tests your ability to decode patterns, decode relationships, and organize information systematically. Seating arrangement problems are particularly time-intensive — the key is to draw a clear diagram from the start.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core techniques:**
> - **Blood relations:** Use family tree diagrams. Identify genders and generations clearly.
> - **Directions:** North-South-East-West. Right/Left turns change orientation.
> - **Coding-decoding:** Look for letter/shift patterns, positional values, or symbol substitution.
> - **Syllogisms:** Check if the conclusion necessarily follows from the premises.
> - **Seating arrangements:** Draw circular/linear diagrams with given clues, place fixed positions first.

**⚡ GATE exam tip:** In blood relation problems, if the question says "A is B's sister" — you know A is female. But "A is B's sibling" — gender unknown. Watch these qualifiers.

**⚡ Quick trick — directions:** After facing North and turning right, you face East. After turning left, you face West. A 180° turn reverses direction.

**⚡ Common trap — syllogisms:** "All A are B" + "All B are C" → "All A are C" (valid). But "Some A are B" + "Some B are C" → "Some A are C" (INVALID — doesn't follow).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Blood Relations

**Family tree convention:** Draw generations vertically (ancestors upward, descendants downward). Use standard symbols: □ = male, ○ = female.

**Key relations:**
- **Sibling:** Brother or sister
- **Cousin:** Child of your uncle/aunt
- **Nephew/Niece:** Child of sibling
- **Grandparent/Grandchild:** Two generations up/down
- **Maternal/Paternal:** Mother side / Father side

**GATE Example:** Pointing to a photograph, a man says, "The sister of this man's mother is my aunt." How is the person in the photograph related to this man?
> Solution: Man's mother has a sister (aunt). That aunt is the grandmother of the person in the photo? Wait: "The sister of this man's mother is my aunt" → The sister is his maternal aunt → She has a child (the person in the photo) who is the man's **cousin**. Answer: **Cousin**.

**Coding relationships:** "A + B" means A is B's brother. "A − B" means A is B's sister. Combine using the family tree.

#### Direction and Distance

**Cardinal directions:** North (N), South (S), East (E), West (W).

**Right turn** from facing North → East
**Left turn** from facing North → West

**Diagonal directions:** NE = North-East, SE = South-East, etc.

**GATE Example (2020, 1 mark):** Ram starts at his house and walks 5 km South, turns right and walks 3 km East, turns right and walks 2 km South. How far is he from his house?
> Draw: South 5 → East 3 → South 2. Total South = 7 km, East = 3 km.
> Distance = √(7² + 3²) = √(49+9) = √58 ≈ **7.62 km**.

**Clock directions:** At 12 o'clock position = directly in front. Clockwise = right turn direction.

#### Coding-Decoding

**Types of coding:**
1. **Letter shift (Caesar cipher):** Each letter shifted by a fixed number. A→D means shift +3.
2. **Positional coding:** A=1, B=2... Z=26. Word code is the positional sum/product.
3. **Mirror coding:** Reverse the alphabet (A↔Z, B↔Y).
4. **Symbol substitution:** Each letter replaced by a symbol/number from a given key.

**GATE Example:** In a certain code, PRODUCT is coded as 16-18-15-3-21-19-20. How is QUANTUM coded?
> P=16, R=18, O=15, D=4, U=21, C=3, T=20 (using A=1, Z=26).
> Wait, 3 is C but D=4 in standard. Let me recheck: P=16, R=18, O=15, U=21, A=1, N=14, T=20, M=13.
> Pattern: seems like consecutive letters starting from P: P=16, R=18 (skip Q=17), O=15... not linear.
> Actually: P(16), R(18), O(15), D(4), U(21), C(3), T(20) — these are not simple.
> Since it's the first occurrence: In PRODUCT, P=16, R=18, O=15, D=4, U=21, C=3, T=20. These look like 26-n for reverse alphabetical: Z=1, so P(16)=11? No.
> Let's use direct: Q=17, U=21, A=1, N=14, T=20, U=21, M=13 → **17-21-1-14-20-21-13**.

#### Syllogisms

**Standard premises and conclusions:**

| Premise Type | Conclusion Valid? |
|-------------|-------------------|
| All A are B + All B are C | All A are C ✓ |
| All A are B + Some A are B | Some A are B ✓ (but already known) |
| Some A are B + All B are C | Some A are C ✓ |
| No A is B + All B are C | No A is C ✓ |
| Some A are B + Some B are C | Some A are C ✗ |

**GATE Example:** Statements: (1) All teachers are educated. (2) Some educated are women. Conclusions: (I) Some teachers are women. (II) Some women are teachers.
> Does (1)+(2) support (I)? Not necessarily — teachers and women could be disjoint within the educated group. **INVALID**.
> Does (2) say "Some women are teachers"? This is the converse of (2). "Some educated are women" → by conversion: "Some women are educated" — still no info about teachers. **INVALID**.

**Only conclusion that necessarily follows goes in the answer.**

#### Seating Arrangements — Circular

**Convention:** In circular seating (facing center):
- Left of A = clockwise neighbor
- Right of A = anticlockwise neighbor

**Key steps:**
1. Draw a circle
2. Place someone with a fixed position (or start from a reference point)
3. Use "to the left of" = clockwise in circular facing center
4. Place remaining people
5. Answer the questions

**GATE Example Pattern:** 6 people A, B, C, D, E, F sit around a circular table. A sits between D and E. B is second to the right of E. C and F are not adjacent.

**Solution approach:** Place A. D and E are neighbors of A. Since B is second to right of E, count 2 positions clockwise from E. Continue placing C, F, and remaining.

#### Linear Seating Arrangements

Linear arrangements are simpler — just a row:
- Left = position increasing (or decreasing — be consistent)
- Establish leftmost/rightmost first
- Work inward

**GATE Example Pattern:** 5 people P, Q, R, S, T sit in a row. P sits at one end. Q is next to P. R is in the middle. S is not at any end. Find positions.

---

### 🔴 Extended — Deep Study (3mo+)

#### Complex Blood Relations with Generations

**GATE Advanced Example:** In a family, A is B's mother. C is B's daughter. D is C's sister. E is D's grandmother. Who is E's daughter?
> A is B's mother → B is A's child. C is B's daughter → C is A's granddaughter. D is C's sister → D is also A's granddaughter. E is D's grandmother → E is A's mother. E's daughter = A. Answer: **A**.

#### Coding-Decoding with Conditional Rules

Some GATE problems give conditional code words:
"If in a code, 'PLAY' is written as '1234' and 'WORK' is written as '5678', how is 'POOL' written?" You need to extract letter-to-digit mapping from the two given words.

#### Logical Sequencing

Arrange events in chronological or logical order based on given clues. Look for "before," "after," "immediately preceding," and "immediately following."

**Key words:**
- "Immediately before" = the person/event right before with nothing in between
- "Somewhere between" = there are other people/events between them

#### Matrix/Puzzle Grid Reasoning

GATE sometimes gives a grid with some cells filled and asks you to deduce the pattern and fill remaining cells. Look for:
- Row patterns (each row has one of each of n symbols)
- Column patterns
- Diagonal patterns
- Symmetry (rotational or mirror)

#### Statement and Conclusions (More Complex Syllogisms)

Additional valid/invalid patterns:

| Premise | Conclusion | Valid? |
|---------|-----------|--------|
| All A are B + Some A are not B | Contradiction (Some A are not B is already known if "All A are B" doesn't hold) | INVALID unless specific |
| No A is B + Some A are C | Some C are not B | VALID |
| Some A are B + No B is C | Some A are not C | VALID |

**⚡ GATE trick:** When multiple conclusions are possible but only one necessarily follows, pick the one that is DEFINITELY true, not just possibly true.

#### Venn Diagram Reasoning

For three-set Venn diagrams (A, B, C), the 7 regions represent:
- Only A, only B, only C
- A∩B only, B∩C only, C∩A only
- A∩B∩C

**GATE Example:** In a survey, 60 people use product A, 50 use product B, 40 use product C, 20 use A and B, 15 use B and C, 10 use A and C, and 5 use all three. How many use at least one product?
> Use inclusion-exclusion: |A∪B∪C| = |A|+|B|+|C| − |A∩B| − |B∩C| − |C∩A| + |A∩B∩C|
> = 60+50+40 − 20−15−10 + 5 = **110**.

#### Number/Letter Series Completion

GATE DI/logic section sometimes includes series problems:
- Find the next number/letter in the pattern
- Common patterns: arithmetic, geometric, Fibonacci-like, alternating, squared/cubed
- Also: 2, 3, 4-digit series where you need to find the pattern

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
