---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-002
topicName: Coding-Decoding
tier: standard
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "A flowchart showing the coding-decoding solving process: Step 1 - Compare code to original word letter by letter. Step 2 - Identify position shifts (forward/backward). Step 3 - Check if alphabetical or reverse alphabetical. Step 4 - Verify pattern holds. Step 5 - Apply to question."
country: India
generated: ai-v1
---


## Coding-Decoding

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
- FLY → OLB (F→O, L→O... wait, F→O (A=1→Z=26, so 6→23... actually F→O is not a simple atbash)
- Atbash: A↔Z (1↔26), B↔Y (2↔25)
- Approach: For each letter, add its position to 27 and find the new letter: position N → position 27-N.

**Type 4: Word Coding / Interweaving**
Letters from the word are rearranged or letters from two words are interleaved.
- "FIRST" → "FR" + "IST" → could mean various things
- "LEAD" → "LDCA" (swap pairs: LE→EL? No...)
- Approach: Try pairing letters (1st with 2nd, 3rd with 4th), reversing pairs, reversing entire word, taking first letters, etc.

**Type 5: Number-Symbol Coding**
Numbers or symbols replace letters according to a key. Usually each letter maps to a specific number.
- A→4, B→8, E→3, etc.
- Approach: Map each letter to its code symbol/number from the given pairs, verify consistency, apply to new word.

### Step-by-Step Example
**Q:** In a certain language, "MASTER" is coded as "SAMRET." How would "CLASS" be coded?

**Approach:**
Step 1 → Compare M-A-S-T-E-R to S-A-M-R-E-T position by position.
Step 2 → P1: M→S (M is 13th, S is 19th, +6)
Step 3 → P2: A→A (no change)
Step 4 → P3: S→M (S is 19th, M is 13th, -6)
Step 5 → P4: T→R (T is 20th, R is 18th, -2)
Step 6 → P5: E→E (no change)
Step 7 → P6: R→T (R is 18th, T is 20th, +2)
Step 8 → The pattern is not uniform shift. Let me try another approach: reverse the word MASTER → RETSAM. But we got SAMRET. That doesn't match.
Step 9 → Try swapping pairs: MA|ST|ER → AM|TS|RE → but we got SAMRET.
Step 10 → Actually the pattern: swap 1st and 3rd, swap 4th and 6th. M(1)↔S(3) = SAM; T(4)↔R(6) = RT; middle letter E stays.
Step 11 → Apply to CLASS: CL(1,2)|AS(3,4)|S(5) → swap 1&3: AC; swap 4&6? Wait CLASS is only 5 letters. Swap 1&3: AC; swap 4&5: SA? Actually with 5 letters, swap 1&3 (C and L → C becomes position 3, L becomes position 1), and swap 4&5 (A and S → A becomes 5, S becomes 4).
Step 12 → CLASS → LACSS (L from C1, A from C3 stays, C from L1 becomes C3, S from S4 becomes S5, A from A4 becomes A4... wait this is messy)
Step 13 → Let's just check: C1↔S3: A C L A S → actually C(1) and A(3) swap → A C L S A → C(2) stays → then swap S(4) and S(5)? S and A... S L C A S? Hmm.

**Alternative simpler approach:** Split into halves: MA | STER. Reverse first half: AM. Reverse second half: RETS. Combine: AMRETS. But we got SAMRET.
Actually: MA→AM (reversed), ST→TS (reversed), ER→RE (reversed). SAMRET = S AM RET = split as S|AM|RET — that doesn't match.
Try: MA → AS (A and M positions: A becomes...?), no.
Try reverse entire word: RETSAM. Doesn't match SAMRET.
Try rotate by 2: MASTER → STERMA. No.

Wait, let me try this: SAMRET = take letters 3, 1, 2, 5, 4, 6 of MASTER? Master = M(1)A(2)S(3)T(4)E(5)R(6). New: S(3), A(2), M(1), R(6), E(5), T(4) = SA M R E T = SAMRET. The pattern is: 3, 1, 2, 6, 5, 4. This is (3→1), (1→3) swap positions 1 and 3; swap positions 4 and 6; swap positions 2 and 5? Positions: 1,2,3,4,5,6 → 3,1,2,6,5,4. So swap 1↔3, 4↔6, 2↔5.
Apply to CLASS (5 letters): C(1)A(2)L(3)A(4)S(5) → 3,1,2,5,4 = L, C, A, S, A = LCASE.

**Answer:** LCASE

### Common Mistakes
- Applying pattern before verifying on ALL given examples → **Fix:** Always check your discovered pattern on every given word-number pair before using it.**
- Forgetting wrap-around at Z and A → **Fix:** For shifts near the end of alphabet, remember Z+1=A, A-1=Z.**
- Getting confused by mixed patterns (some letters shift, some don't) → **Fix:** Some questions use positional rules (1st letter shifts +N, 2nd letter shifts -M, etc.).**
- Overthinking complex patterns → **Fix:** Most GATE patterns are simpler than they first appear. Try the straightforward approach first.**
