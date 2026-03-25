---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-001
topicName: Blood Relations — Deep Dive
tier: deep
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "A comprehensive family tree showing all relationship types: self, siblings (brother/sister), parents, grandparents, great-grandparents, children, grandchildren, great-grandchildren, aunts, uncles, nieces, nephews, cousins (first, second), in-laws (mother-in-law, father-in-law, sister-in-law, brother-in-law, son-in-law, daughter-in-law). Each labeled with gender and generation markers."
country: India
generated: ai-v1
---


## Blood Relations — Deep Dive

### Full Concept Explanation

Blood relation problems appear in almost every GATE exam, and they're a reliable source of marks if you approach them systematically. The underlying concept is deceptively simple: families are graphs where each person is a node and relationships are edges. But the complexity comes from the way English describes family relationships — using relative terms, nested clauses, and implicit information that you need to decode.

The fundamental principle is that every relationship in a family has three components: **generation level** (how many steps up or down from you), **gender** (male or female), and **lineage** (maternal or paternal side). A "maternal grandfather" is your mother's father — one generation up, male, on your mother's side. These three dimensions let you pin down any relationship precisely.

**Relationship Terminology Deep Dive:**

*Siblings:* Brothers and sisters share the same parents. "A is B's sibling" means they share at least one parent. "Only sibling" means no brothers or sisters exist.

*Parents:* Mother and father are immediate parents. "Maternal" always refers to the mother's side; "paternal" to the father's side.

*Grandparents:* Two generations up. Your maternal grandfather is your mother's father. Your paternal grandmother is your father's mother.

*Cousins:* Children of siblings. First cousins share grandparents. Second cousins share great-grandparents.

*Aunts and Uncles:* Your parents' siblings are your aunts and uncles (paternal or maternal depending on which parent). Their children are your first cousins.

*In-laws:* Relationships created by marriage, not blood. Your mother-in-law is your spouse's mother. Your brother-in-law could be your spouse's brother OR your sibling's spouse.

**The Point-to-Point Notation System:**
Many competitive exam toppers use a notation system that makes solving blood relations much faster:

Write relationships as a path:
- "A's mother" → A ← Mother
- "B's sister" → B ← Sister
- "C's brother" → C ← Brother

When two paths meet, you find the relationship:
- A ← Mother → B (A and B are siblings)
- X ← Father → Y ← Mother → Z (X and Y are siblings; Y and Z are siblings, so X, Y, Z are all siblings)

**Nesting and Chaining:**
Complex descriptions chain relationships. "A is B's only sibling's mother" can be broken down:
1. "B's only sibling" = the one and only brother or sister of B
2. That person's mother = A

So A is the mother of B's only sibling — meaning A is B's parent. And since B has an "only sibling," there's exactly one sibling, meaning A has exactly two children: B and B's sibling. But the exact sibling count may not matter — what matters is A is definitely a parent of B.

**Gender Clues in Language:**
English embeds gender information throughout relationship descriptions:
- "He," "him," "boy," "man," "brother," "son," "father," "uncle," "nephew" → Male
- "She," "her," "girl," "woman," "sister," "daughter," "mother," "aunt," "niece" → Female
- "Person," "child," "parent," "sibling," "cousin" → Gender unspecified

Words like "elder," "younger," "married," "widow," "widower" give additional context.

### GATE-Level Practice

**Q1:** Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?
Answer: **The woman is the man's mother.** — The man's mother is the only daughter of the woman's mother → the only daughter of the woman's mother is the woman herself. So the man's mother = the woman. Therefore the woman is the man's mother.

**Q2:** A is B's daughter. B is C's sister. C is D's mother. D is E's brother. E is F's daughter. How is A related to F?
Answer: **A is F's cousin (first cousin).** — C is D's mother, D is E's brother → E and D are siblings sharing C as their mother. E is F's daughter → F is E's parent, so F is also D's parent (since D and E are siblings). B is C's sister, and C is D's mother → B is D's aunt (D's mother's sister). A is B's daughter → A is the niece of D. Since D is F's child, A and F are first cousins.

**Q3:** If P is Q's mother and Q is R's sister, and R is S's son, how is Q related to S?
Answer: **Q is S's daughter.** — Q is R's sister means Q and R share at least one parent. R is S's son → S is R's parent. If S is R's parent and Q is R's sister, then S is also Q's parent. So Q is S's daughter (or son, but Q is R's sister and R is S's son, so Q is also S's child).

### Multiple Approaches

**Standard Method (Draw the Tree):**
1. Identify a starting point — usually someone with clear relationships.
2. Draw them as a node.
3. Work outward, adding each new person.
4. Label gender on each node.
5. When relationships are established, find the answer.

**Notation Method (Faster for Chain Questions):**
1. Write each relationship as a path.
2. Chain the paths together.
3. Identify the final relationship by the generation distance and gender.

**Coded Language Method (For Complex Descriptions):**
1. Translate each phrase literally: "only child" = exactly one child, "only son" = exactly one male child, "elder sister" = female sibling born earlier.
2. Break complex descriptions into sequential steps.
3. Solve step by step.

### Tricky Cases / Edge Cases

- **"Only" variations:** "Only son" means the sole male child. But "only child" means the sole child regardless of gender. Be careful — "A is my only sibling's mother" means A is the mother of my only sibling, which means A is my parent.
- **Same gender implications:** If two people are described as "sisters," they share gender and are siblings. If they're "brothers," they share gender and are siblings.
- **Spouse chains:** "A is B's wife. B is C's sister." → C is A's sister-in-law. The chain through B (spouse relationship) converts to in-law when followed through blood.
- **Generation skipping:** "A is B's grandmother's only child" → A is B's mother (since B's grandmother's only child must be B's parent).
- **Ambiguous "son of" vs "daughter of":** These are gender-specific. If the problem says "son of," the person is male. If it says "daughter of," the person is female.
- **Reciprocal relationships:** If A is B's uncle, then B is A's nephew. Always check the question asks from the right perspective.
