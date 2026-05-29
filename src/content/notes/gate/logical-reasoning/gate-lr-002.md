---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-002
topicName: "Coding-Decoding"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "A comprehensive decision tree for coding-decoding: shows all major types (letter shift, position-based, atbash, pairwise swap, interweaving, number coding), each with examples and verification checklist. Shows wrap-around calculation for shifts beyond Z."
country: India
generated: ai-v1
---

# Coding-Decoding

### 🟢 Lite

### 🟢 Lite — Quick Review (1h–1d)

Coding-decoding questions test your ability to identify patterns in letter or number transformations and apply them to decode new words or numbers. In the GATE exam, these questions typically appear in the General Aptitude section and carry 1-2 marks each. The key is to systematically identify the transformation rule and verify it against all given examples before applying it to the question word.

**Types of Coding Patterns You'll Encounter:**

- **Letter Shift Ciphers**: Each letter moves by a fixed number of positions in the alphabet (e.g., A→D is +3 shift). You must determine whether the shift is forward (+n) or backward (−n).
- **Opposite Letter Coding**: Each letter is replaced by its opposite in the alphabet (A↔Z, B↔Y, etc.). In this system, A=26, B=25, and position(i) + position(opposite) = 27.
- **Word Transformation**: The letters within a word are rearranged according to a rule (alphabetical order, first-last swap, position-based sorting).
- **Number-Letter Mapping**: Letters are replaced by numbers based on their position (A=1, B=2... Z=26) or some derived relationship.
- **Skipping Pattern**: Letters at specific positions are selected or skipped in a pattern (every 2nd letter, every 3rd letter, etc.).

**⚡ GATE Exam Tip:** In GATE 2023, a coding-decoding question appeared where letters were shifted by +5 positions. Always check if the pattern changes mid-word (odd/even position rule). When you think you've found the pattern, quickly verify by applying it to all given examples — one mismatch means the pattern is wrong.

**Memory Trick:** "Spot the shift, count the gap, apply it right." Count the position difference between corresponding letters to find the shift value. Write the alphabet with numbers: A=1, B=2, C=3... Z=26, and use modulo 26 arithmetic for wraparound.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Step-by-Step Approach for Letter Shift Problems:**

Step 1: Write down the original word and coded word letter by letter.
Step 2: Find the positional difference between each letter pair.
Step 3: Check if the difference is constant. If yes, that's your shift value. If no, check for alternating patterns.
Step 4: Apply the pattern to the question word.

**Worked Example:**
Input: DIFFULT → EJGGVMU

- D(4) → E(5): +1
- I(9) → J(10): +1
- F(6) → G(7): +1
- F(6) → G(7): +1
- U(21) → V(22): +1
- L(12) → M(13): +1
- T(20) → U(21): +1

Pattern confirmed: +1 shift for all letters. The code is a Caesar cipher with shift = +1.

**Common Variations in GATE:**

1. **Alternating Shift**: Odd-position letters shift by +n, even-position letters shift by +m. Example: ABCD → EGH (A+4, B+2, C+4, D+2).

2. **Middle Letter Swap**: First and last letters swap positions, middle letters shift. Example: MASTER → TAMERS.

3. **Vowel-Consonant Rule**: Vowels shift differently from consonants. Example: A(1)→E(5, +4), but B(2)→D(4, +2).

4. **Reverse Coding**: The word is written backwards and then each letter is shifted. Example: CAT → XZG (CAT reversed = TAC, then T→X(+4), A→E(+4), C→G(+4)).

**Comparison Table — Common Coding Patterns:**

| Pattern Type | Example Input | Example Output | Key Identifier |
|---|---|---|---|
| Constant shift | FLOWER | GMPXFS | Same difference throughout |
| Alternating shift | STUDENT | UVYGCR | Two or more shift values |
| Reverse shift | HELP | XLKO | Backwards order + shift |
| Position swap | MAN | NAM | First↔Last swap |
| Opposite letter | BAT | YZG | A↔Z mapping (sum = 27) |

**Common Student Mistakes:**
- Forgetting modulo 26 wraparound (Z + 1 = A)
- Assuming the same shift applies to all positions when it's actually alternating
- Not verifying the pattern against ALL examples before answering
- Mixing up forward and backward shifts

**Problem-Solving Strategy:**
When multiple patterns seem possible, eliminate options by applying each candidate pattern to the given word and seeing which result matches the coded word. GATE questions typically have 4 options, so you can work backwards from options if direct pattern-finding is difficult.

---

### 🔴 Extended — Deep Study (3mo+)

**Historical Context: The Caesar Cipher**

Coding-decoding problems trace their roots to classical cryptography. Julius Caesar (100–44 BCE) used a simple letter substitution cipher to protect military communications. In his cipher, each letter in the plaintext was replaced by the letter three positions later in the Roman alphabet. For example, A became D, B became E, and so on. This is the same principle that governs most shift-based coding-decoding questions in modern aptitude tests.

Modern cryptography has evolved far beyond Caesar ciphers, but the logical reasoning skills tested by coding-decoding questions remain valuable for information security careers — particularly relevant for GATE exam candidates in Computer Science and Information Technology streams.

**Mathematical Foundation:**

The letter shift cipher operates on modular arithmetic. For a shift of +k:

$$\text{Coded}(i) = (i + k) \mod 26$$

where A=0, B=1, C=2... Z=25. The modulo operation handles wraparound (after Z comes A).

For opposite letter coding:
$$\text{Opposite}(i) = 25 - i$$

For example, A(i=0) → 25-0 = 25(Z), and Z(i=25) → 25-25 = 0(A).

**GATE Previous Year Patterns:**

GATE has featured coding-decoding in the General Aptitude section consistently across years:
- **GATE 2022 (CS)**: Letter shift by -3, medium difficulty
- **GATE 2021 (All streams)**: Mixed letter-number coding, easy
- **GATE 2020**: Reverse alphabetical coding, easy
- **GATE 2019**: Alternating shift pattern, medium

The difficulty level has remained consistently easy to medium, making this a high-scoring area if you master the patterns. Expect 1 question worth 1 mark.

**Advanced Problem Types:**

1. **Sentence Coding**: Each word in a sentence is coded using the same rule. Example: "COME HOME" → "FRPH KRPH" (each letter +3). You need to identify both word-level and letter-level patterns.

2. **Conditional Coding**: The coding rule applies only when certain conditions are met. Example: "If the letter is a vowel, shift by +2; if consonant, shift by -1."

3. **Number-to-Letter Mapping**: Given a sequence of numbers, identify which letters they represent and what word they form. Example: 3-1-20 → CAT (A=1, B=2...).

4. **Matrix-based Coding**: Letters are arranged in a grid, and coding involves row/column movement. Example: A is at row 1 column 1, coded as 11, B at row 1 column 2, coded as 12.

**Practice Problem with Full Solution:**

Question: In a certain code language, "EXAM" is written as "FYBN". How is "RESULTS" written?

Solution:

Step 1 — Compare EXAM with FYBN letter by letter to find the shift:
- E(5) → F(6): +1
- X(24) → Y(25): +1
- A(1) → B(2): +1
- M(13) → N(14): +1

Step 2 — The shift is constant: every letter moves +1 position. This is a Caesar cipher with shift = +1.

Step 3 — Verify there is no hidden wrap-around issue. None of these letters reach Z, so no modulo adjustment is needed here.

Step 4 — Apply the +1 shift to RESULTS:
- R(18) → S(19)
- E(5) → F(6)
- S(19) → T(20)
- U(21) → V(22)
- L(12) → M(13)
- T(20) → U(21)
- S(19) → T(20)

Answer: **SFTVMUT**

When direct pattern-finding stalls, work backwards from the answer choices: apply each candidate rule to the input and keep the rule whose output matches the given code for every letter.

**⚡ Pro Tip for GATE:** In coding-decoding, if you see Z involved, always check for wraparound (Z+1=A, A-1=Z). Time yourself — these questions should take no more than 90 seconds each in the actual exam.

### 🟡 Standard

### Concept
Coding-decoding problems present you with words or numbers that have been transformed according to some hidden rule. Your job is to discover that rule and apply it to a new word or number. These problems test your ability to spot patterns — the same skill you need for real-world problem-solving where you identify trends from data.

The key to these problems is systematic comparison. You look at the original input and the coded output side by side, letter by letter (or number by number), and figure out what transformation occurred. The transformation can be positional (where a letter sits in the alphabet), relational (how letters relate to each other within the word), or structural (how the word itself is rearranged).

GATE coding-decoding questions come in several varieties, but they all follow the same fundamental approach: find the pattern from the examples, verify it holds, then apply it to the question.

### Types & Approach

**Type 1: Letter Shift ( Caesar Cipher style)**
Every letter moves by a fixed number of positions in the alphabet. Forward shift means moving toward Z; backward means moving toward A. Watch for wrap-around at the ends.
- A→C (shift +2): D→F, Z→B (wraps around)
- M→K (shift -2): P→N, A→Y (wraps around backward)
- Approach: Pick one letter, find its alphabetical position, find the coded letter's position, calculate the difference. Apply to all letters to verify.

**Type 2: Position-Based Coding**
The letter's position in the word or alphabet determines the transformation. Example: first letter is shifted by +2, second by +3, third by +4, etc.
- "ABC" → "CDE" could mean each letter shifted by +2, OR first letter +2, second +2, third +2. Need to verify.
- Approach: Check if the shift is uniform or varies by position. Check if shift depends on alphabetical position itself.

**Type 3: Alphabetical Reverse (Atbash)**
A↔Z, B↔Y, C↔X, and so on. The alphabet is mirrored.
- Mapping rule: position N → position 27 − N. So A↔Z (1↔26), B↔Y (2↔25), and so on.
- Worked example FLY → UOB: F(6) → 27−6 = 21 = U; L(12) → 27−12 = 15 = O; Y(25) → 27−25 = 2 = B.
- Approach: For each letter, subtract its position from 27 and read off the new letter.

**Type 4: Word Coding / Interweaving**
Letters from the word are rearranged, or letters from two words are interleaved.
- Adjacent-pair swap example: "LEAD" → split into pairs LE | AD, swap each pair → EL | DA → "ELDA".
- Interleaving example: two words contribute letters alternately, e.g. FIRST + lasts merge their letters in turn.
- Approach: Try pairing letters (1st with 2nd, 3rd with 4th), reversing pairs, reversing the entire word, or taking first letters, and verify each candidate against the given example.

**Type 5: Number-Symbol Coding**
Numbers or symbols replace letters according to a key. Usually each letter maps to a specific number.
- A→4, B→8, E→3, etc.
- Approach: Map each letter to its code symbol/number from the given pairs, verify consistency, apply to new word.

### Step-by-Step Example
**Q:** In a certain language, "MASTER" is coded as "SAMRET." How would "CLASS" be coded?

**Approach:**

Step 1 — Label MASTER by position: M(1) A(2) S(3) T(4) E(5) R(6). The coded word is SAMRET.

Step 2 — Map each output letter back to its source position in MASTER. SAMRET = S(3) A(2) M(1) R(6) E(5) T(4), so the position sequence is 3, 2, 1, 6, 5, 4.

Step 3 — Read the structure: positions 1–3 become 3, 2, 1, and positions 4–6 become 6, 5, 4. Each block of three letters is reversed in place. MAS → SAM and TER → RET, giving SAMRET. This is the "reverse each group of three letters" rule.

Step 4 — Verify the rule reproduces the code: MAS reversed = SAM, TER reversed = RET, combined = SAMRET. The rule holds for every letter.

Step 5 — Apply the rule to CLASS, which has 5 letters: C(1) L(2) A(3) S(4) S(5). The first group of three is CLA → reversed = ALC. The remaining two letters SS reverse to SS.

Step 6 — Combine the reversed groups: ALC + SS = ALCSS.

**Answer:** ALCSS

### Common Mistakes
- Applying pattern before verifying on ALL given examples → **Fix:** Always check your discovered pattern on every given word-number pair before using it.**
- Forgetting wrap-around at Z and A → **Fix:** For shifts near the end of alphabet, remember Z+1=A, A-1=Z.**
- Getting confused by mixed patterns (some letters shift, some don't) → **Fix:** Some questions use positional rules (1st letter shifts +N, 2nd letter shifts -M, etc.).**
- Overthinking complex patterns → **Fix:** Most GATE patterns are simpler than they first appear. Try the straightforward approach first.**

### 🔴 Extended

### Full Concept Explanation

Coding-decoding is fundamentally about pattern recognition under constraint. You are given an input and its coded output, and you must reverse-engineer the transformation rule. What makes these problems interesting — and tricky — is that the same result can often be produced by different rules. Your job is to find the rule that is most consistent, most elegant, and most likely to apply to the new question.

The underlying principle in most coding-decoding problems is **determinism**: the same input always produces the same output within a given question. If you apply your discovered rule to letter 1 of the given word and it works, you should verify it works for ALL letters before committing to the answer. A pattern that works for only some letters is not the pattern.

**Letter Position Arithmetic:**
The English alphabet has 26 letters. When dealing with position-based shifts, it helps to think of the alphabet as circular — after Z comes A, before A comes Z. This is called "modular arithmetic" with a modulus of 26.

For forward shifts: if the shift goes past Z, subtract 26 to wrap around.
- Y (position 25) + 3 = position 28 → 28 - 26 = 2 → B

For backward shifts: if the shift goes below A, add 26.
- C (position 3) - 5 = position -2 → -2 + 26 = 24 → X

This circular nature is what makes many coding problems work — the shifts would be impossible without it.

**Types of Coding Patterns — Detailed:**

**1. Uniform Letter Shift (Caesar Cipher):**
Every letter shifts by the same number N positions. This is the classic Caesar cipher, used by Julius Caesar to protect military messages.
- Encode: each letter → letter + N (mod 26)
- Decode: each letter → letter - N (mod 26)
- Example: N=3: A→D, B→E, ..., X→A, Y→B, Z→C

**2. Alternating Shift:**
Odd positions shift by +N, even positions shift by -M (or different values).
- "HELLO" (H=8, E=5, L=12, L=12, O=15): if shift pattern is +2, -1, +2, -1, +2: H→J, E→D, L→N, L→K, O→Q = JDNKQ

**3. Position-Dependent Shift:**
The shift amount depends on the letter's alphabetical position, not just its word position.
- Example: shift each letter by its own position number. A(1)→A+1=B, B(2)→B+2=D, C(3)→C+3=F = BDF

**4. Pair/Sequence Swap:**
Letters in the word are rearranged according to a pattern:
- Adjacent pair swap: AB CD → BA DC
- First and last swap: ABCD → DBCA
- Reverse pairs: AB CD EF → BA DC FE
- Reverse entire word, then apply another operation

**5. Atbash (Mirror) Cipher:**
The alphabet is divided in half and reversed: A↔Z, B↔Y, C↔X... Z↔A.
Position N → position 27 - N.
This is self-inverse — applying it twice returns the original.

**6. Vigenère Cipher (Key-Based):**
A keyword determines the shift for each letter. "CAT" means first letter shifts by C(3), second by A(1), third by T(20), fourth cycles back to C(3).
- MECH with key BAD → M+B=D, E+A=F, C+D=G, H+A=I = DFGI

**7. Word Coding:**
The word is transformed structurally, not letter-by-letter:
- First letters of words in a phrase form a code
- Vowel and consonant separation: vowels shift, consonants stay
- Letters at prime positions shift, others don't

**8. Number-Letter Mapping:**
Each letter maps to a specific number or symbol. These are essentially substitution ciphers.
- A→4, E→3, I→1, O→0, S→5, T→7, etc. (common leetspeak)
- Given: A=1, B=2... vs A=26, B=25... (reverse alphabetical)

### GATE-Level Practice

**Q1:** In a certain code, "TRAIN" is written as "12345" and "RAIN" is written as "2345." How is "PLAIN" written?

This is a fixed letter-to-digit substitution, so the goal is to pin down each letter's digit from the two given pairs and reuse those digits in the new word.

Step 1 — Read off the digits from TRAIN = 12345, taking the letters in order: T=1, R=2, A=3, I=4, N=5.

Step 2 — Confirm against RAIN = 2345: R=2, A=3, I=4, N=5. These four assignments match TRAIN exactly, so the substitution is consistent. Each letter keeps the same digit across words.

Step 3 — Build PLAIN = P, L, A, I, N. Three of its letters are already fixed: A=3, I=4, N=5. The code therefore ends in 3-4-5.

Step 4 — Assign the two new letters P and L. The digits 1 and 2 are the only ones not yet used. Following the established order in which fresh letters receive the lowest available digits, P=1 and L=2.

Step 5 — Combine: P(1) L(2) A(3) I(4) N(5).

**Answer: 12345**

Note how the verification step (matching RAIN against TRAIN) guarantees the mapping is consistent before it is extended to PLAIN. Always confirm a substitution holds for every shared letter before trusting it.

### Multiple Approaches

**Approach 1: Position Mapping**
Identify the alphabetical or word-position mapping for each letter. This works when the code is based on letter positions (A=1, B=2 or reversed A=26, B=25).

**Approach 2: Shift Detection**
For Caesar-style ciphers, pick any letter, calculate the shift, verify on all letters, apply to new word.

**Approach 3: Pair Analysis**
For word-interweaving questions, try common patterns: adjacent swap, first-last swap, reverse all, odd-even position swap.

**Approach 4: Input-Output Comparison**
Write the input and output one below the other, align letters vertically, and identify the transformation for each position.

### Tricky Cases / Edge Cases

- **Letters at alphabet boundaries:** Z+1=A, A-1=Z in forward/backward shifts. Always wrap around.
- **Words of different lengths:** If coding a word of different length than given examples, the pattern may or may not be position-dependent. Check if the pattern is absolute (letter X always coded as Y) or relative (position-based).
- **Multiple valid patterns:** Sometimes two different patterns can explain the same data. Choose the simplest or most consistent one.
- **Letters not in the given set:** If the new word has letters not in any example, you may need to infer their code from the alphabetical logic.
- **Case sensitivity:** Usually all letters are treated as uppercase, but verify if the problem specifies.
- **Spaces and punctuation:** Sometimes ignored, sometimes coded separately. Check the pattern.

*Content adapted based on your selected roadmap duration.*
