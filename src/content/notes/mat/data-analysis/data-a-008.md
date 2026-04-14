---
exam: mat
examName: MAT (Management Aptitude Test)
subject: dilr
subjectName: Data Interpretation & Logical Reasoning
topic: data-a-008
topicName: Logical Reasoning Caselets
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "A logic puzzle page showing conditions for a seating arrangement problem with 6 people around a circular table, with directional indicators and partial placement information, styled as a typical MAT exam logical reasoning passage requiring deduction from multiple conditional statements."

---

# Logical Reasoning Caselets

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Logical reasoning caselets are text-based puzzles where you must extract conditions from a paragraph and apply them to arrange people, objects, or events in a specific order or configuration. Unlike data interpretation which is primarily numerical, logical reasoning caselets are primarily verbal — the data is embedded in language, not in charts.

**What this topic covers in MAT:**
- Seating arrangements (linear and circular)
- Ranking and ordering problems
- Blood relation puzzles in a caselet format
- Scheduling and timetabling problems
- Comparisons and relative ordering
- Truth-lie puzzles (who is telling the truth, who is lying)

**Key techniques:**
- Identify the "anchor" — a statement that gives a definite position or relationship
- Build a framework: for arrangements, draw a rough diagram; for rankings, create a list
- Apply conditions one by one, checking for consistency
- Look for contradictions that eliminate possibilities
- Identify transitive relationships (if A > B and B > C, then A > C)

**⚡ MAT exam tips:**
- Always draw a diagram or rough layout for seating questions. Mental reasoning is error-prone with 5+ people.
- For ranking questions, start with what you know for certain, not what might be possible.
- Identify "at least" and "at most" conditions — these give boundaries without exact positions.
- In MAT, 4–6 questions follow each logical reasoning passage. Build the full solution once, then answer all questions from it.
- Time target: 6–8 minutes per logical reasoning caselet passage including all questions. These require careful reading — don't rush the condition extraction phase.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Step-by-Step Problem-Solving Approach

**Step 1 — List all entities and attributes**
Identify all people/objects involved and all attributes mentioned (name, gender, city, profession, preference, etc.). Write them in abbreviated form on your rough sheet.

**Step 2 — Extract all conditions systematically**
Go through the passage sentence by sentence. Write each condition as a short statement: e.g., "A sits 2nd from left end" → A = position 2. "B is immediately to the right of A" → B = A + 1.

**Step 3 — Build a partial framework**
For seating: draw seats and mark known positions. For ranking: create a list and insert known relationships.

**Step 4 — Apply transitive logic**
Link conditions to create chains: if A > B, B > C, C > D, then A > B > C > D.

**Step 5 — Look for gaps and fill them**
Once you've applied all conditions, there are usually a few unfilled positions. Use elimination and the process of deduction to fill remaining slots.

**Step 6 — Verify consistency**
Check that your final arrangement satisfies all conditions without contradiction.

#### Worked Example — Seating Arrangement

**Caselet:** Six friends — Amit, Bina, Chetan, Divya, Elish, and Fatima — are sitting around a circular table. All are facing the centre. The following conditions apply:
1. Amit sits exactly opposite Bina.
2. Chetan is immediately to the left of Bina.
3. Divya is not adjacent to Amit.
4. Fatima sits third to the left of Divya.
5. Elish sits between Divya and Fatima.

**Step 1 — Set up the circle**
Place Amit and Bina as opposite pairs. In a circle of 6, opposite means 3 seats apart.

**Step 2 — Place Amit and Bina**
Let Amit's position = 12 o'clock. Then Bina is at 6 o'clock (directly opposite).

**Step 3 — Apply Condition 2: Chetan is immediately to the left of Bina**
If Bina is at 6 o'clock (facing centre, left means clockwise), Bina's left = 5 o'clock. So Chetan = 5 o'clock.

**Step 4 — Apply Condition 4: Fatima is third to the left of Divya**
"Third to the left" means count 3 seats going left (counter-clockwise from Divya's perspective). In a circle of 6, if Divya = position D, Fatima = D − 3 (mod 6).

**Step 5 — Apply Condition 5: Elish sits between Divya and Fatima**
This means Divya and Fatima are separated by exactly two seats, with Elish in between.

Let Divya = position X. Then Fatima = X − 3 (mod 6). The seats between Divya and Fatima going the shorter way are: X−1 and X−2 (one direction) or X+1 and X+2 (the other direction). Elish must occupy one of these intermediate positions.

Since Fatima = X−3, the seats between them going one way are X−1 and X−2. Going the other way around the circle, between them are X+1 and X+2.

Let's test Divya at 2 o'clock: then Fatima = 2−3 = 11 o'clock (or position −1 ≡ 11 ≡ 11 on a 12-hour clock = 11 o'clock). The seats between 2 and 11 going clockwise: 3,4,5,6,7,8,9,10. That's 8 seats, not 2. Going counter-clockwise: 1, 12. Elish between them? The two seats between 2 and 11 going the shorter path are 1 and 12 (if going counter-clockwise from 2: 1, 12, 11 — so 1 and 12 are between). Elish would be at either 1 or 12.

Let's try Divya at 8 o'clock: then Fatima = 8−3 = 5 o'clock. The shorter arc between 8 and 5 going counter-clockwise: 8→7→6→5. Seats between = 7 and 6. Elish must be at 6 or 7. This is plausible.

**Step 6 — Place Elish and Divya/Fatima in remaining slots**
Remaining positions: 1, 2, 3, 4, 7, 8, 9, 10, 11, 12 — wait, we have 6 total positions, already placed: Amit=12, Bina=6, Chetan=5. Remaining positions: 1, 2, 3, 4, 7, 8, 9, 10, 11. But we only have Divya, Elish, Fatima left (3 people). The remaining positions must accommodate them.

Actually: Seats at 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 on a clock. Amit at 12. Bina at 6 (opposite Amit). Chetan at 5 (left of Bina). Left: 1, 2, 3, 4, 7, 8, 9, 10, 11. We need to place Divya, Fatima, Elish.

From Fatima = Divya − 3: possible pairs (Divya, Fatima): (1,10), (2,11), (3,12), (4,1), (5,2), (6,3), (7,4), (8,5), (9,6), (10,7), (11,8), (12,9).
- Fatima can't be at 12 (Amit), 6 (Bina), 5 (Chetan). So remove (3,12), (6,3), (9,6), (12,9).
- Divya can't be at 5 (Chetan), 6 (Bina), 12 (Amit). So remove (5,2), (6,3), (12,9).
- Remaining pairs: (1,10), (2,11), (4,1), (7,4), (8,5), (10,7), (11,8).

Elish must sit between Divya and Fatima. In pair (1,10): going clockwise 1→2→3→4→5→6→7→8→9→10, between them are 2,3,4,5,6,7,8,9. Going counter-clockwise 1→12→11→10, between are 12 and 11. Only 2 seats between going the short way. Elish must be at 12 or 11. Both are free. This works for (1,10).

Try pair (7,4): going clockwise 7→8→9→10→11→12→1→2→3→4. Seats between going one way = 8,9,10,11,12,1,2,3. Going counter-clockwise 7→6→5→4, between = 6 and 5. But 5 is Chetan. So only seat 6 is free for Elish (not 5). So (7,4) works with Elish at 6.

This gives us multiple solutions. Let's check other conditions: "Divya is not adjacent to Amit." Amit=12. So Divya cannot be at 11 or 1. Remove (2,11), (4,1), (8,5), (11,8). Remaining: (1,10) and (7,4).

For (1,10): Divya=1, Fatima=10. Elish between 1 and 10: either 12 or 11. If Elish=12, Divya=1 is not adjacent to Amit=12? Actually 1 and 12 ARE adjacent on a circle (they're next to each other). So Divya cannot be at 1 (adjacent to Amit=12). This eliminates (1,10). For (7,4): Divya=7, Fatima=4. Elish at 6. Check adjacency: Amit=12, Bina=6, Chetan=5. Elish=6 is actually Bina's position — conflict! So (7,4) doesn't work either.

Let's revisit. Maybe our initial placement of Amit and Bina could be different (we assumed Amit=12, Bina=6, but they just need to be opposite, not necessarily at 12 and 6). The relative positions are what matter. Let's place Amit at top, Bina opposite.

Bina's left (counter-clockwise from Bina's perspective) is one position counter-clockwise. Let Bina at top (12 o'clock). Then Chetan immediately to her left = 11 o'clock. This means Bina is at 12, Chetan at 11, Amit opposite Bina = 6 o'clock.

Now Divya and Fatima: Fatima = third to the left of Divya. On a circle, going left from Divya means counter-clockwise. Let Divya at 2 o'clock. Third to left = going counter-clockwise 3 seats: 2→1→12→11 = Fatima at 11 o'clock. But 11 is Chetan. Conflict. Try Divya at 3 o'clock: third left = 3→2→1→12 = Fatima at 12 (Bina). Conflict. Divya at 4: 4→3→2→1 = Fatima=1. Seat 1 is free. Elish between 4 and 1. Between going counter-clockwise 4→3→2→1: Elish could be at 3 or 2. Both free. Check adjacency: Amit=6, Bina=12, Chetan=11. Elish at 3 or 2. Divya at 4. Fatima at 1. Check Divya not adjacent to Amit: Divya=4, Amit=6 — seats between: 5,6,7,8,9,10,11,12. Seats 5 (between 4 and 6 counter-clockwise) and 6 (Amit) and 12 are on the path. 4 and 6 are separated by seat 5, so they ARE adjacent (separated by one seat). Actually adjacent means next to each other — 4 and 5 are adjacent, 5 and 6 are adjacent. So 4 and 6 are NOT directly adjacent (two seats apart).

Final arrangement: Amit=6, Bina=12, Chetan=11, Divya=4, Fatima=1, Elish at 2 or 3.
This is sufficient to answer most questions about relative positions.

#### Worked Example — Ranking Problem

**Caselet:** Five students — Anjali, Bhavesh, Charu, Deepak, and Evelyn — ranked according to their scores in a test (rank 1 is highest, rank 5 is lowest). The following information is given:
1. Bhavesh scored higher than Evelyn but lower than Anjali.
2. Charu's rank is better than Deepak's.
3. Anjali is not rank 1.
4. Bhavesh's rank is 3.
5. Deepak is not rank 5.

**Step 1 — From Statement 4: Bhavesh = Rank 3.**
From Statement 1: Anjali > Bhavesh > Evelyn → Anjali rank better than 3, Evelyn rank worse than 3.
So Anjali ∈ {1, 2} and Evelyn ∈ {4, 5}.

From Statement 3: Anjali ≠ rank 1. Therefore Anjali = rank 2.
Then Evelyn must be rank 4 or 5. But Bhavesh = 3. So Evelyn ∈ {4, 5}.

From Statement 2: Charu > Deepak (Charu's rank is better than Deepak's → Charu is above Deepak on the ranking, i.e., lower rank number).
So Charu = {1, 2, 3, 4} and Deepak = {2, 3, 4, 5}, with Charu < Deepak.

Rank 1 is not taken yet (Anjali is 2, Bhavesh is 3). So Charu = 1. Deepak must then be > 1 and > Charu, so Deepak ∈ {4, 5} (but Charu=1, Bhavesh=3, Anjali=2 already fill 1,2,3). Wait: Rank 1 = Charu. Rank 2 = Anjali. Rank 3 = Bhavesh. Remaining: Evelyn and Deepak for ranks 4 and 5.

From Statement 5: Deepak is not rank 5. Therefore Deepak = 4, Evelyn = 5.

**Final ranking:** 1: Charu; 2: Anjali; 3: Bhavesh; 4: Deepak; 5: Evelyn.

**Question:** Who scored the lowest?
**Answer: Evelyn (Rank 5) ✓**

**Question:** How many students scored between Anjali and Deepak?
**Answer:** Anjali = 2, Deepak = 4. Students at rank 3 (Bhavesh) is between them. **Answer: 1 student.**

#### Common Traps in Logical Reasoning Caselets
- **Misreading "to the left" in circular arrangements**: In circular seating, "to the left" can mean clockwise or counter-clockwise depending on whether people face inwards or outwards. Clarify from the problem.
- **Confusing rank 1 (best) with rank 5 (best)**: Always check which end of the ranking is best. In MAT, rank 1 usually means highest/best unless stated otherwise.
- **Ignoring "immediate" vs "somewhere between"**: "Immediately to the left" means adjacent. "Third to the left" means exactly two people between.
- **Assuming symmetry in circular arrangements**: In a circle of 6, A opposite B means 3 seats apart. But A opposite B is different from A opposite C if there are 6 seats (each seat has exactly one opposite seat).
- **Not checking all conditions at the end**: Always verify your complete arrangement against all conditions to catch logical errors.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Logical Reasoning Caselet Types

**1. Complex scheduling problems**
Multiple activities must be scheduled across days, time slots, and rooms with constraints like "A cannot be scheduled before B," "C must be on Day 2 or later," and "only two activities per day." These require building a full timetable on rough paper.

**2. Blood relation puzzles in caselet form**
"A is B's mother's brother's son." Relationships are nested. Draw a family tree diagram. Remember: mother's brother = maternal uncle. Father's brother = paternal uncle. Siblings of parents = aunts/uncles.

**3. Truth-lie puzzles**
Each person makes a statement. You know that exactly X people are lying. Use contradiction: if person A says "B is lying" and you know A is telling the truth, then B must be lying. Build a truth table and eliminate inconsistencies.

**4. Direction-based puzzles**
Problems involving people moving in different directions with turns. These require a grid and tracking positions over multiple steps. Particularly challenging when combined with relative motion.

**5. Cubes and dice problems**
"How many cubes have exactly two faces painted?" These require understanding the geometry of a 3D cube when divided into smaller unit cubes. Count corner cubes (3 faces), edge cubes (2 faces), face cubes (1 face), and interior cubes (0 faces).

#### Time-Saving Calculation Techniques

- **Use abbreviations aggressively**: Write A, B, C, D, E for names. Use ↑ for higher rank, ← for left, etc. Don't write full sentences in your rough work — abbreviations save seconds that compound.
- **Build the chain early**: The most powerful step in ranking problems is building the transitive chain (A > B > C > D). Once built, you can often answer multiple questions without further deduction.
- **Draw diagrams even if rough**: For seating, a circle with 6-8 tick marks takes 15 seconds and prevents hours of confusion. For blood relations, a family tree with M (male) and F (female) labels avoids miscounting cousins vs siblings.
- **Test by contradiction**: When stuck between two possibilities, test one fully. If it leads to a contradiction, the other must be correct.

#### Cross-Topic Integration
Logical reasoning caselets often appear alongside data sufficiency problems in the MAT LR section. Some passages combine numerical data (tables of scores) with logical conditions — these hybrid caselets require both logical deduction and basic arithmetic.

MAT-specific patterns: approximately 15–20 logical reasoning questions appear in MAT (out of 200 total), of which caselets represent about 30–40%. The most common types in MAT are seating arrangements (~25%), ranking problems (~20%), blood relations (~15%), and scheduling (~15%).

#### Practice with Realistic Data Set

**Caselet:** Seven managers — Arun, Beena, Chandan, Divya, Edwin, Fatima, and Ganesh — are assigned to seven different projects — P1, P2, P3, P4, P5, P6, P7 — one manager per project. The following conditions apply:
1. Arun is assigned to a project numbered higher than Beena's.
2. Chandan is assigned to P3.
3. Divya is assigned to either P1 or P7.
4. Edwin is assigned to a project immediately before Fatima's.
5. The project number for Ganesh is exactly 3 more than Edwin's project number.
6. Beena's project number is not adjacent to Chandan's.
7. Fatima is not assigned to P7.

**Advanced questions to attempt:**
1. What is Edwin's project number?
2. Could Ganesh's project number be uniquely determined? If so, what is it?
3. In how many possible ways can the remaining assignments be made?
4. If Divya is assigned to P1, what is Ganesh's project number?
5. Which project must Edwin NOT be assigned to based on the conditions alone?
6. If all other conditions remain and we add "Fatima is assigned to P5," is the arrangement now fully determined?

Work through each, drawing a systematic diagram of the 7 positions and applying constraints one by one.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
