---
exam: mdcat
examName: MDCAT
subject: logical-reasoning
subjectName: Logical Reasoning
topic: lr-4
topicName: Coding-Decoding
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.120152"
diagramPrompt: "Clean educational diagram illustrating Coding-Decoding with clear labels, white background, exam-style illustration"


---

# Coding-Decoding

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Coding-Decoding** — Key Facts for MDCAT

**Definition**: Coding-Decoding is a method of encoding information where original words, letters, or numbers are replaced by specific symbols or letters following a defined rule.

**Most Common Patterns in MDCAT**:

| Pattern Type | Rule | Example |
|-------------|------|---------|
| Forward shift | Each letter shifts forward by n positions | ABC → EFG (shift +4) |
| Backward shift | Each letter shifts backward by n positions | DEZ → ZAV (shift -4) |
| Bilateral/Mirror | A↔Z, B↔Y (position 27 - n) | CAT → XZG |
| Reverse alphabet | A=26, B=25... Z=1 | ONE → LMV |
| Number substitution | A=1, B=2... Z=26 | CAT → 3-1-20 |
| Keyboard proximity | Adjacent on QWERTY keyboard | COME → XPDR |

⚡ **MDCAT Tip**: In mirror coding, the position formula is: $n_{coded} = 27 - n_{original}$. So A(1)↔Z(26), B(2)↔Y(25), C(3)↔X(24).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Coding-Decoding** — Detailed Study Guide

#### Type 1: Direct Letter Shift (Caesar Cipher)

**Constant Shift**:
```python
# Shift +n: Each letter moves n positions forward (wrapping Z→A)
def shift_forward(word, n):
    result = ""
    for char in word.upper():
        if char.isalpha():
            # A=65, Z=90
            shifted = (ord(char) - 65 + n) % 26 + 65
            result += chr(shifted)
        else:
            result += char
    return result

shift_forward("CODE", 3)  # → FRGH
```

**Shift Patterns You Will See**:
| Shift | A→ | M→ | Z→ |
|-------|----|----|-----|
| +1 | B | N | A |
| +2 | C | O | B |
| +3 | D | P | C |
| +4 | E | Q | D |
| +5 | F | R | E |

**Common in MDCAT**: "If CODE is written as FRGH, how is PAID written?"
- Establish the rule from the first letter: C→F is a forward shift of +3. Verify it holds for every letter before applying it — under a constant +3 shift, C→F, O→R, D→G and E→H all advance by exactly 3 positions.
- For a clean +3 shift: P(+3)=S, A(+3)=D, I(+3)=L, D(+3)=G → **SDLG**

⚡ **Verification**: Always check ALL letters — if C→F is +3 and O→R is +3, then D→G should be +3. Confirm the shift is constant before applying it to the new word.

#### Type 2: Bilateral/Mirror Coding

**Formula**: Code position = 27 − Original position
$$n_{coded} = 27 - n_{original}$$

| Original | Bilateral | Reverse Position |
|----------|-----------|-----------------|
| A (1) | Z (26) | 26 |
| B (2) | Y (25) | 25 |
| C (3) | X (24) | 24 |
| D (4) | W (23) | 23 |
| M (13) | N (14) | 14 |
| Z (26) | A (1) | 1 |

**Example**: CODE → XLWV
C(3)→X(24): 27−3=24 ✓
O(15)→L(12): 27−15=12 ✓
D(4)→W(23): 27−4=23 ✓
E(5)→V(22): 27−5=22 ✓

⚡ **MDCAT PYQ (2018)**: "In a certain code, BUILD is written as YFROW. How is HOUSE written?"
Solution: B(2)→Y(25): 27−2=25 ✓. U(21)→F(6): 27−21=6 ✓. I(9)→R(18): 27−9=18 ✓. L(12)→O(15): 27−12=15 ✓. D(4)→W(23): 27−4=23 ✓. The rule is confirmed bilateral.
Apply to HOUSE: H(8)→27−8=19=S, O(15)→27−15=12=L, U(21)→27−21=6=F, S(19)→27−19=8=H, E(5)→27−5=22=V → **SLFHV**.

#### Type 3: Number Substitution

**Standard Forward**:
| Letter | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|--------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

**Sum-based codes**:
In MDCAT, a word coded as a single number usually means the SUM of the alphabetical positions of its letters. For example, CODE = C(3)+O(15)+D(4)+E(5) = 27.

To identify the rule, compute the position sum of the given word and check it against the supplied code. If they match, the rule is a position sum; apply the same sum to the target word.

**Example**: If "PEN" = 35, what is "NOTE"?
PEN = P(16)+E(5)+N(14) = 35 ✓. So NOTE = N(14)+O(15)+T(20)+E(5) = **54**.

⚡ **Strategy**: Always calculate the sum of alphabetical positions first when a word maps to one number.

#### Type 4: Mixed Letter-Number Coding

In mixed coding, a letter-number-letter string such as **A5B** encodes a relationship between two letters. The standard reading in MDCAT is that the embedded number is the alphabetical distance between the two letters.

**Worked rule**: In "X n Y", the number n equals the number of positions from X to Y in the alphabet.

**Example**: If D and a target letter are 7 positions apart, the code is **D7K** because D(4)+7 = 11 = K.

To decode, count letters; to encode, add the gap to the first letter's position. Always confirm the rule on a given pair before applying it, since some papers measure the gap inclusively (counting both endpoints) and others exclusively.

#### Type 5: First-Last Letter Coding

A common rule writes a word with its first and last letters interchanged, leaving the interior unchanged.

| Word | Transformation | Output |
|------|---------------|--------|
| GOOD | Swap first ↔ last | DOOG |
| PLAY | Swap first ↔ last | YLAP |
| READ | Swap first ↔ last | DEAR |

To apply: identify the first and last characters, exchange them, and keep the middle letters in place. A related variant simply reverses the entire word (GOOD → DOOG), so check the given example to decide whether only the ends swap or the whole word reverses.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Coding-Decoding** — Complete Notes for MDCAT

#### Worked MDCAT Examples

**Example 1**: In a certain code, STOVE is written as PQLSB. How is BREAK written?

Solution:
The rule is a backward shift of 3, applied to every letter: S→P (−3), T→Q (−3), O→L (−3), V→S (−3, since V=22 and S=19), E→B (−3). With the constant −3 confirmed, apply it to BREAK.
B(2)−3 ≡ 25 = Y, R(18)−3 = 15 = O, E(5)−3 = 2 = B, A(1)−3 ≡ 24 = X, K(11)−3 = 8 = H → **YOBXH**.

**Example 2**: If in a code LANGUAGE is written as 12-1-14-7-21-1-7-5, how is METAMORPHIC coded?

Solution:
The code is the forward alphabetical position of each letter.
LANGUAGE: L=12, A=1, N=14, G=7, U=21, A=1, G=7, E=5 → 12-1-14-7-21-1-7-5, confirming the position rule.
METAMORPHIC: M=13, E=5, T=20, A=1, M=13, O=15, R=18, P=16, H=8, I=9, C=3
Answer: **13-5-20-1-13-15-18-16-8-9-3**

**Example 3**: If PAINT is coded as 72468, how is TAPE coded?

Solution:
This code uses the **phone keypad** mapping, not alphabetical position:
- A, B, C → 2
- D, E, F → 3
- G, H, I → 4
- J, K, L → 5
- M, N, O → 6
- P, Q, R, S → 7
- T, U, V → 8
- W, X, Y, Z → 9

So PAINT = P(7)-A(2)-I(4)-N(6)-T(8) = 72468 ✓.
Apply to TAPE: T(8)-A(2)-P(7)-E(3) = **8273**.

This illustrates why letter-to-number codes should be tested against several mapping systems, not just alphabetical position.

**Example 4**: How to attack any letter-to-number code

When a code does not match the straight alphabetical position, work through the standard mappings systematically. For example, with a code like CRANE → 18-6-2-5-22, test each candidate rule against the known pair before committing:

⚡ **MDCAT Strategy**: For letter-to-number codes, try these IN ORDER:
1. Direct alphabetical position (A=1, Z=26)
2. Reverse position (A=26, Z=1) — note E(5)→22 matches 27−5=22
3. Digit sum of position (N=14 → 1+4 = 5)
4. Phone keypad mapping
5. QWERTY adjacency

Once a single rule reproduces the given code for every letter, apply that same rule to the target word. If no single rule fits, the cipher is mixed and the question will supply enough pairs to deduce each position.

#### Advanced Pattern: Conditional Substitution

**Mathematical Inequalities**:
If A > B means 'A is greater than B', and A < B means 'A is less than B', evaluate each statement against assigned values. For instance, if P > Q is given with P=5 and Q=3, then 5>3 is true and 5<3 is false, so the statement P > Q holds.

**Coded Sentences (word substitution)**:
In sentence-coding problems, each word maps to a fixed code (often a 2-digit number or a single digit) that stays the same across every sentence. To decode:
1. List the sentences and their codes.
2. Find a word that appears in two sentences; its code is the digit (or number) common to both code strings.
3. Eliminate the matched code, then repeat for the remaining words.

**Example**: If "526" means 'she is intelligent', "291" means 'hard work pays', and "742" means 'intelligent people are', find the code for 'intelligent'.

Step 1 — Find the word shared by two sentences: 'intelligent' is the only word appearing in both 'she is intelligent' (code 526) and 'intelligent people are' (code 742).

Step 2 — Compare the two code sets: {5, 2, 6} and {7, 4, 2}. The only digit common to both is **2**.

Step 3 — Match the shared word to the shared digit: since 'intelligent' is the only word these two sentences have in common, its code must be the digit they have in common.

Answer: **intelligent = 2**. Where two codes share exactly one digit and their sentences share exactly one word, that digit is the code for that word — the core technique for every sentence-coding question.

#### Type 6: Conditional Relationships

**Mathematical Inequalities**:
If:
- P > Q means P is greater than Q
- P < Q means P is less than Q
- P = Q means P equals Q

Example:
- R > S
- S > T
Conclusion: R > T (transitive: if R>S and S>T, then R>T)

**Either-Or Conditions**:
If "Either P is Q or R is S" — at least one must be true, possibly both. In MDCAT, either/or questions ask what MUST be true.

**Converse Relationships**:
If P > Q, then Q < P (converse: reverse the inequality).

⚡ **MDCAT PYQ (2019)**: "If in a code, A @ B means A is sister of B, A # B means A is brother of B, A % B means A is mother of B, which shows 'P is grandmother of Q'?"
Answer: **P % R @ Q** (P is mother of R, R is sister of Q → R and Q share parents, so P is the grandmother of Q).

⚡ **MDCAT PYQ (2020)**: "If P × Q means P is father of Q, P ÷ Q means P is mother of Q, P − Q means P is brother of Q, who is the uncle of R?"
Answer: The uncle relation requires P to be the brother of R's parent. The expression **Q × R − P** reads: Q is father of R, and R is brother of P — which does not give an uncle. The correct relation is **P − S × R**: P is brother of S, and S is father of R, so P is the brother of R's father, i.e., **P is the uncle of R**. The key is that an uncle is the sibling of a parent, so the chain must link the candidate to a parent via a brother/sister symbol and that parent to the child via a father/mother symbol.

⚡ **MDCAT Strategy**: Draw a family tree diagram. Use standard symbols: → for father/mother, = for spouse, ∥ for siblings.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
